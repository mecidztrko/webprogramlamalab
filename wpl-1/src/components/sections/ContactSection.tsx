import ContactForm from "../forms/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          İletişime Geç
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Benimle çalışmak isterseniz aşağıdaki formu doldurarak iletişime geçebilirsiniz.
        </p>

        {/* Contact Form rendering */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
