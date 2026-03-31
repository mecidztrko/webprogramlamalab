import { useState, type FormEvent } from "react";

// --- Form veri modeli ---
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// --- Form hata modeli ---
interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

// --- Başlangıç değerleri ---
const initialFormData: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  // Form state
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // --- Doğrulama (Validation) ---
  function validate(data: ContactFormData): FormErrors {
    const newErrors: FormErrors = {};

    if (!data.name.trim()) {
      newErrors.name = "Ad soyad zorunludur.";
    } else if (data.name.trim().length < 2) {
      newErrors.name = "Ad soyad en az 2 karakter olmalıdır.";
    }

    if (!data.email.trim()) {
      newErrors.email = "E-posta zorunludur.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Geçerli bir e-posta adresi giriniz.";
    }

    if (!data.subject.trim()) {
      newErrors.subject = "Konu zorunludur.";
    }

    if (!data.message.trim()) {
      newErrors.message = "Mesaj zorunludur.";
    } else if (data.message.trim().length < 10) {
      newErrors.message = "Mesaj en az 10 karakter olmalıdır.";
    }

    return newErrors;
  }

  // --- Tek alan güncelleme ---
  function handleChange(field: keyof ContactFormData, value: string) {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    // Hata mesajını temizle
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: undefined,
      }));
    }
  }

  // --- Form gönderme ---
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    // Doğrula
    const newErrors = validate(formData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      // Simule edilmiş API çağrısı
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form verisi:", formData);
      setSubmitSuccess(true);
      setFormData(initialFormData);
    } catch {
      alert("Gönderim başarısız. Tekrar deneyin.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <p className="text-green-800 font-medium">Mesajınız başarıyla gönderildi!</p>
        <button
          onClick={() => setSubmitSuccess(false)}
          className="mt-4 text-sm text-green-600 underline"
        >
          Yeni mesaj gönder
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto" noValidate>
      {/* Ad Soyad */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1 text-left">
          Ad Soyad
        </label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          className={`w-full border rounded-lg px-3 py-2 text-black ${
            errors.name ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Adınız Soyadınız"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1 text-left">{errors.name}</p>}
      </div>

      {/* E-posta */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1 text-left">
          E-posta
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className={`w-full border rounded-lg px-3 py-2 text-black ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="ornek@mail.com"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1 text-left">{errors.email}</p>}
      </div>

      {/* Konu */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-1 text-left">
          Konu
        </label>
        <select
          id="subject"
          value={formData.subject}
          onChange={(e) => handleChange("subject", e.target.value)}
          className={`w-full border rounded-lg px-3 py-2 text-black ${
            errors.subject ? "border-red-500" : "border-gray-300"
          }`}
        >
          <option value="">Konu seçiniz...</option>
          <option value="genel">Genel</option>
          <option value="destek">Teknik Destek</option>
          <option value="oneri">Öneri</option>
          <option value="isbirligi">İş Birliği</option>
        </select>
        {errors.subject && <p className="text-red-500 text-sm mt-1 text-left">{errors.subject}</p>}
      </div>

      {/* Mesaj */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1 text-left">
          Mesaj
        </label>
        <textarea
          id="message"
          rows={5}
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          className={`w-full border rounded-lg px-3 py-2 resize-y text-black ${
            errors.message ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Mesajınızı yazınız..."
        />
        {errors.message && <p className="text-red-500 text-sm mt-1 text-left">{errors.message}</p>}
      </div>

      {/* Gönder butonu */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Gönderiliyor..." : "Gönder"}
      </button>
    </form>
  );
}
