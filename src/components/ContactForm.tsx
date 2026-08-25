"use client";

import { useState, useRef, type FormEvent } from "react";
import Link from "next/link";
import { upload } from "@vercel/blob/client";

interface FormFields {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  location: string;
  message: string;
}

const initialForm: FormFields = {
  name: "",
  phone: "",
  email: "",
  serviceType: "",
  location: "",
  message: "",
};

// 파일은 서버를 거치지 않고 브라우저에서 Vercel Blob으로 바로 업로드되므로
// 서버리스 함수 요청 본문 크기 제한(약 4.5MB)과 무관하게 여유 있게 설정 가능
const MAX_FILE_SIZE = 25 * 1024 * 1024; // 25MB per file
const MAX_TOTAL_SIZE = 50 * 1024 * 1024; // 50MB total

function formatBytes(bytes: number) {
  if (bytes < 1024) return bytes + "B";
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + "KB";
  return (bytes / 1024 / 1024).toFixed(1) + "MB";
}

export default function ContactForm() {
  const [form, setForm] = useState<FormFields>(initialForm);
  const [files, setFiles] = useState<File[]>([]);
  const [dragOver, setDragOver] = useState(false);
  const [fileError, setFileError] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [uploadPhase, setUploadPhase] = useState<"upload" | "send" | null>(null);
  const [agree, setAgree] = useState(false);
  const [agreeError, setAgreeError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const set = (field: keyof FormFields) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  function addFiles(newFiles: FileList | null) {
    if (!newFiles) return;
    setFileError("");
    const arr = Array.from(newFiles);
    const updated = [...files, ...arr];

    for (const f of arr) {
      if (f.size > MAX_FILE_SIZE) {
        setFileError(`"${f.name}" 파일이 25MB를 초과합니다.`);
        return;
      }
    }
    const total = updated.reduce((s, f) => s + f.size, 0);
    if (total > MAX_TOTAL_SIZE) {
      setFileError("첨부파일 총 용량이 50MB를 초과합니다.");
      return;
    }
    setFiles(updated);
  }

  function removeFile(idx: number) {
    setFiles((prev) => prev.filter((_, i) => i !== idx));
    setFileError("");
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!agree) {
      setAgreeError("개인정보 수집·이용에 동의해주세요.");
      return;
    }
    setAgreeError("");
    setStatus("loading");
    setErrorMessage("");

    try {
      // 1) 첨부파일을 브라우저에서 곧장 Vercel Blob으로 업로드.
      //    서버(우리 API 라우트)를 거치지 않으므로 서버리스 함수의 요청
      //    본문 크기 제한(약 4.5MB)과 무관하게 큰 파일도 안전하게 처리된다.
      setUploadPhase(files.length > 0 ? "upload" : "send");
      const uploadedFiles = await Promise.all(
        files.map(async (f) => {
          const blob = await upload(f.name, f, {
            access: "private", // Blob 스토어가 Private로 생성됨 (생성 후 변경 불가)
            handleUploadUrl: "/api/blob-upload",
          });
          return { name: f.name, url: blob.url };
        })
      );

      // 2) 폼 데이터 + 업로드된 파일의 URL만 서버로 전송 (용량이 작아 안전함)
      setUploadPhase("send");
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, files: uploadedFiles }),
      });

      if (res.ok) {
        setStatus("success");
        setForm(initialForm);
        setFiles([]);
        setAgree(false);
      } else {
        let msg = `서버 오류 (HTTP ${res.status})`;
        try {
          const data = await res.json();
          if (data?.error) msg = data.error;
        } catch {
          // 응답이 JSON이 아닌 경우 (예: 플랫폼 레벨 에러 페이지) — 상태 코드만 표시
        }
        setErrorMessage(msg);
        setStatus("error");
      }
    } catch (err) {
      setErrorMessage(
        err instanceof Error ? err.message : "파일 업로드 중 오류가 발생했습니다."
      );
      setStatus("error");
    } finally {
      setUploadPhase(null);
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-navy mb-3">문의가 접수되었습니다</h3>
        <p className="text-gray-600 mb-2">빠른 시일 내에 연락드리겠습니다. 감사합니다.</p>
        <p className="text-sm text-gray-400 mb-8">
          급한 문의는{" "}
          <a href="tel:031-662-7890" className="text-navy font-semibold">
            031-662-7890
          </a>
          으로 전화 주세요.
        </p>
        <button onClick={() => setStatus("idle")} className="text-navy underline text-sm">
          다시 문의하기
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent transition";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* 이름 + 연락처 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            이름 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="이름을 입력해주세요"
            value={form.name}
            onChange={set("name")}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            연락처 <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            required
            placeholder="010-0000-0000"
            value={form.phone}
            onChange={set("phone")}
            className={inputClass}
          />
        </div>
      </div>

      {/* 이메일 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          이메일 <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          required
          placeholder="이메일을 입력해주세요"
          value={form.email}
          onChange={set("email")}
          className={inputClass}
        />
      </div>

      {/* 공사종류 + 위치 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            공사 종류 <span className="text-red-500">*</span>
          </label>
          <select
            required
            value={form.serviceType}
            onChange={set("serviceType")}
            className={`${inputClass} bg-white`}
          >
            <option value="">공사 종류를 선택해주세요</option>
            <optgroup label="신축공사">
              <option value="신축 - 판넬공사">판넬공사</option>
              <option value="신축 - 지붕공사">지붕공사</option>
              <option value="신축 - 강판공사">강판공사</option>
              <option value="신축 - 솔라루프">솔라루프</option>
            </optgroup>
            <optgroup label="증축·리모델링">
              <option value="증축·리모델링 - 판넬공사">판넬공사</option>
              <option value="증축·리모델링 - 지붕공사">지붕공사</option>
              <option value="증축·리모델링 - 강판공사">강판공사</option>
            </optgroup>
            <optgroup label="보수·개보수">
              <option value="보수 - 지붕 누수·방수">지붕 누수·방수</option>
              <option value="보수 - 판넬 교체">판넬 교체</option>
              <option value="보수 - 강판·외벽 보수">강판·외벽 보수</option>
            </optgroup>
            <option value="기타">기타</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            공사 위치 <span className="text-gray-400 text-xs">(선택)</span>
          </label>
          <input
            type="text"
            placeholder="예: 경기도 평택시"
            value={form.location}
            onChange={set("location")}
            className={inputClass}
          />
        </div>
      </div>

      {/* 문의 내용 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          문의 내용 <span className="text-red-500">*</span>
        </label>
        <textarea
          required
          rows={5}
          placeholder="공사 규모, 시공 면적, 요청 사항 등을 자세히 입력해주세요"
          value={form.message}
          onChange={set("message")}
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* 파일 첨부 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          파일 첨부{" "}
          <span className="text-gray-400 text-xs">(선택 · 이미지·PDF·도면 등 · 최대 50MB)</span>
        </label>

        {/* 드래그 앤 드롭 영역 */}
        <div
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragOver(false);
            addFiles(e.dataTransfer.files);
          }}
          onClick={() => fileInputRef.current?.click()}
          className={`border-2 border-dashed rounded-xl px-4 py-6 text-center cursor-pointer transition-colors ${
            dragOver
              ? "border-navy bg-blue-50"
              : "border-gray-300 hover:border-navy hover:bg-gray-50"
          }`}
        >
          <div className="text-2xl mb-1">📎</div>
          <p className="text-sm text-gray-500">
            클릭하거나 파일을 끌어다 놓으세요
          </p>
          <p className="text-xs text-gray-400 mt-1">
            JPG, PNG, PDF, DWG, XLSX 등 · 파일당 25MB 이하
          </p>
          <input
            ref={fileInputRef}
            type="file"
            multiple
            className="hidden"
            accept="image/*,.pdf,.dwg,.dxf,.xlsx,.xls,.docx,.doc,.hwp,.zip"
            onChange={(e) => addFiles(e.target.files)}
          />
        </div>

        {/* 파일 오류 */}
        {fileError && (
          <p className="mt-2 text-xs text-red-500">{fileError}</p>
        )}

        {/* 선택된 파일 목록 */}
        {files.length > 0 && (
          <ul className="mt-3 space-y-2">
            {files.map((file, i) => (
              <li
                key={i}
                className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <span className="text-base">📄</span>
                  <span className="truncate text-gray-700">{file.name}</span>
                  <span className="text-gray-400 shrink-0">{formatBytes(file.size)}</span>
                </div>
                <button
                  type="button"
                  onClick={() => removeFile(i)}
                  className="ml-2 text-gray-400 hover:text-red-500 transition-colors shrink-0 text-lg leading-none"
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* 에러 메시지 */}
      {status === "error" && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm">
          전송 중 오류가 발생했습니다
          {errorMessage && (
            <span className="block mt-1 text-red-500 text-xs">
              ({errorMessage})
            </span>
          )}{" "}
          <a href="tel:031-662-7890" className="font-semibold underline">
            031-662-7890
          </a>
          으로 직접 전화 주세요.
        </div>
      )}

      {/* 개인정보 수집·이용 동의 */}
      <div>
        <label className="flex items-start gap-2.5 text-sm text-gray-600 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => {
              setAgree(e.target.checked);
              if (e.target.checked) setAgreeError("");
            }}
            className="mt-0.5 w-4 h-4 rounded border-gray-300 text-navy focus:ring-navy shrink-0"
          />
          <span>
            <Link
              href="/privacy"
              target="_blank"
              className="text-navy font-semibold underline underline-offset-2"
            >
              개인정보처리방침
            </Link>
            에 따른 개인정보 수집·이용에 동의합니다.{" "}
            <span className="text-red-500">*</span>
          </span>
        </label>
        {agreeError && (
          <p className="mt-1.5 text-xs text-red-500 pl-6">{agreeError}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-navy text-white py-4 rounded-xl font-bold text-base hover:bg-navy-dark disabled:opacity-60 transition-colors"
      >
        {status === "loading"
          ? uploadPhase === "upload"
            ? "파일 업로드 중..."
            : "전송 중..."
          : "견적 문의 보내기"}
      </button>

      <p className="text-center text-xs text-gray-400">* 표시는 필수 입력 항목입니다</p>
    </form>
  );
}
