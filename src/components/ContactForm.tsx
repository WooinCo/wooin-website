"use client";

import { useState, useRef, type FormEvent } from "react";

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

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB per file
const MAX_TOTAL_SIZE = 20 * 1024 * 1024; // 20MB total

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
        setFileError(`"${f.name}" 파일이 10MB를 초과합니다.`);
        return;
      }
    }
    const total = updated.reduce((s, f) => s + f.size, 0);
    if (total > MAX_TOTAL_SIZE) {
      setFileError("첨부파일 총 용량이 20MB를 초과합니다.");
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
    setStatus("loading");

    const fd = new FormData();
    Object.entries(form).forEach(([k, v]) => fd.append(k, v));
    files.forEach((f) => fd.append("files", f));

    try {
      const res = await fetch("/api/contact", { method: "POST", body: fd });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) {
        setForm(initialForm);
        setFiles([]);
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-[#1C3177] mb-3">문의가 접수되었습니다</h3>
        <p className="text-gray-600 mb-2">빠른 시일 내에 연락드리겠습니다. 감사합니다.</p>
        <p className="text-sm text-gray-400 mb-8">
          급한 문의는{" "}
          <a href="tel:031-662-7890" className="text-[#1C3177] font-semibold">
            031-662-7890
          </a>
          으로 전화 주세요.
        </p>
        <button onClick={() => setStatus("idle")} className="text-[#1C3177] underline text-sm">
          다시 문의하기
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1C3177] focus:border-transparent transition";

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
            <option value="판넬공사">판넬공사</option>
            <option value="지붕공사">지붕공사</option>
            <option value="강판공사">강판공사</option>
            <option value="솔라루프">솔라루프</option>
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
          <span className="text-gray-400 text-xs">(선택 · 이미지·PDF·도면 등 · 최대 20MB)</span>
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
              ? "border-[#1C3177] bg-blue-50"
              : "border-gray-300 hover:border-[#1C3177] hover:bg-gray-50"
          }`}
        >
          <div className="text-2xl mb-1">📎</div>
          <p className="text-sm text-gray-500">
            클릭하거나 파일을 끌어다 놓으세요
          </p>
          <p className="text-xs text-gray-400 mt-1">
            JPG, PNG, PDF, DWG, XLSX 등 · 파일당 10MB 이하
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
          전송 중 오류가 발생했습니다.{" "}
          <a href="tel:031-662-7890" className="font-semibold underline">
            031-662-7890
          </a>
          으로 직접 전화 주세요.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-[#1C3177] text-white py-4 rounded-xl font-bold text-base hover:bg-[#0d1b4b] disabled:opacity-60 transition-colors"
      >
        {status === "loading" ? "전송 중..." : "견적 문의 보내기"}
      </button>

      <p className="text-center text-xs text-gray-400">* 표시는 필수 입력 항목입니다</p>
    </form>
  );
}
