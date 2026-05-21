"use client";

import { useState, type FormEvent } from "react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  location: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  phone: "",
  email: "",
  serviceType: "",
  location: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const set = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) setFormData(initialForm);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-[#1C3177] mb-3">
          문의가 접수되었습니다
        </h3>
        <p className="text-gray-600 mb-2">
          빠른 시일 내에 연락드리겠습니다. 감사합니다.
        </p>
        <p className="text-sm text-gray-400 mb-8">
          급한 문의는 <a href="tel:031-662-7890" className="text-[#1C3177] font-semibold">031-662-7890</a>으로 전화 주세요.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-[#1C3177] underline text-sm"
        >
          다시 문의하기
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1C3177] focus:border-transparent transition";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            이름 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="이름을 입력해주세요"
            value={formData.name}
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
            value={formData.phone}
            onChange={set("phone")}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          이메일 <span className="text-gray-400 text-xs">(선택)</span>
        </label>
        <input
          type="email"
          placeholder="이메일을 입력해주세요"
          value={formData.email}
          onChange={set("email")}
          className={inputClass}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            공사 종류 <span className="text-red-500">*</span>
          </label>
          <select
            required
            value={formData.serviceType}
            onChange={set("serviceType")}
            className={`${inputClass} bg-white`}
          >
            <option value="">공사 종류를 선택해주세요</option>
            <option value="판넬공사">판넬공사</option>
            <option value="지붕공사">지붕공사</option>
            <option value="강판공사">강판공사</option>
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
            value={formData.location}
            onChange={set("location")}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          문의 내용 <span className="text-red-500">*</span>
        </label>
        <textarea
          required
          rows={5}
          placeholder="공사 규모, 시공 면적, 요청 사항 등을 자세히 입력해주세요"
          value={formData.message}
          onChange={set("message")}
          className={`${inputClass} resize-none`}
        />
      </div>

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

      <p className="text-center text-xs text-gray-400">
        * 표시는 필수 입력 항목입니다
      </p>
    </form>
  );
}
