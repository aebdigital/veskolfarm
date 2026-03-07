"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("sent");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Nepodarilo sa odoslať správu.");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setErrorMsg("Chyba pripojenia. Skúste to znova.");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <div className="rounded-2xl bg-[#fafafa] p-8 md:p-10">
      <h3 className="mb-6 text-xl font-bold text-[#313338]">
        Napíšte nám správu
      </h3>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-sm font-medium text-[#313338]"
          >
            Meno a priezvisko
          </label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-[#313338] outline-none transition-all duration-300 focus:border-orange focus:ring-2 focus:ring-orange/20"
            placeholder="Vaše meno"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-[#313338]"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-[#313338] outline-none transition-all duration-300 focus:border-orange focus:ring-2 focus:ring-orange/20"
            placeholder="vas@email.sk"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-1.5 block text-sm font-medium text-[#313338]"
          >
            Telefón
          </label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-[#313338] outline-none transition-all duration-300 focus:border-orange focus:ring-2 focus:ring-orange/20"
            placeholder="+421 ..."
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-1.5 block text-sm font-medium text-[#313338]"
          >
            Správa
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full resize-none rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-[#313338] outline-none transition-all duration-300 focus:border-orange focus:ring-2 focus:ring-orange/20"
            placeholder="Vaša správa..."
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full rounded-full bg-orange px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-400 hover:scale-[1.02] hover:bg-orange-dark hover:shadow-lg disabled:opacity-70"
        >
          {status === "sending"
            ? "Odosielam..."
            : status === "sent"
              ? "Odoslané ✓"
              : "Odoslať"}
        </button>

        {status === "sent" && (
          <p className="text-center text-sm text-green-600">
            Ďakujeme za vašu správu! Čoskoro sa vám ozveme.
          </p>
        )}

        {status === "error" && (
          <p className="text-center text-sm text-red-600">
            {errorMsg}
          </p>
        )}
      </form>
    </div>
  );
}
