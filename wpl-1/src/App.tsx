import { useState } from 'react'
import Button from './components/Button'
import Input from './components/Input'
import Card from './components/Card'
import UIKit from './pages/UIKit'

function App() {
  const [page, setPage] = useState<'portfolio' | 'uikit'>('portfolio')

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* Dark Mode Toggle */}
      <button
        onClick={() => document.documentElement.classList.toggle('dark')}
        className="fixed top-4 right-4 z-50
          bg-gray-200 dark:bg-gray-700
          text-gray-800 dark:text-gray-200
          p-2 rounded-full shadow-lg
          hover:scale-110 transition-transform cursor-pointer"
        aria-label="Tema değiştir"
      >
        <span className="dark:hidden">&#9790;</span>
        <span className="hidden dark:inline">&#9728;</span>
      </button>

      {/* Skip to Content - Erişilebilirlik */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0
          bg-blue-800 text-white p-2 z-50"
      >
        İçeriğe Geç
      </a>

      {/* HEADER */}
      <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div>
            <h1
              className="text-xl font-bold text-blue-800 dark:text-blue-300 cursor-pointer"
              onClick={() => setPage('portfolio')}
            >
              Abdulmecit ÖZTÜRK
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Yazılım Mühendisliği Öğrencisi · No: 235541034
            </p>
          </div>
          <nav aria-label="Ana navigasyon">
            <ul className="flex flex-wrap gap-2">
              <li>
                <a
                  href="#hakkimda"
                  onClick={() => setPage('portfolio')}
                  className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300
                    hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors"
                >
                  Hakkımda
                </a>
              </li>
              <li>
                <a
                  href="#projeler"
                  onClick={() => setPage('portfolio')}
                  className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300
                    hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors"
                >
                  Projeler
                </a>
              </li>
              <li>
                <a
                  href="#iletisim"
                  onClick={() => setPage('portfolio')}
                  className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300
                    hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors"
                >
                  İletişim
                </a>
              </li>
              <li>
                <button
                  onClick={() => setPage('uikit')}
                  className={`px-3 py-1 rounded-md transition-colors ${
                    page === 'uikit'
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800'
                  }`}
                >
                  UI Kit
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* CONTENT */}
      {page === 'uikit' ? (
        <UIKit />
      ) : (
        <main id="main-content">

          {/* HAKKIMDA */}
          <section id="hakkimda" className="py-16 px-4">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Sol: Bilgiler */}
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center md:text-left">
                  Hakkımda
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  Web Tasarımı ve Programlama dersi kapsamında hazırlanmış LAB-4 portfolyo sayfasıdır.
                  Semantic HTML5, erişilebilirlik (a11y), Tailwind CSS ve component yaklaşımı konularını
                  kapsayan bu uygulama, modern web standartlarına uygun olarak geliştirilmiştir.
                </p>
                <ul className="flex flex-wrap gap-2">
                  {['HTML5', 'CSS3', 'React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Git'].map((tag) => (
                    <li
                      key={tag}
                      className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm
                        hover:bg-blue-600 transition-colors dark:bg-blue-600 dark:hover:bg-blue-500"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sağ: Kişisel Bilgiler */}
              <aside
                className="bg-indigo-50 dark:bg-gray-800 border-l-4 border-indigo-500
                  dark:border-indigo-400 rounded-lg p-6 w-full md:w-80 shrink-0"
                aria-label="Kişisel Bilgiler"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  Kişisel Bilgiler
                </h3>
                <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm">
                  <dt className="font-bold text-gray-700 dark:text-gray-300">Ad Soyad</dt>
                  <dd className="text-gray-600 dark:text-gray-400">Abdulmecit ÖZTÜRK</dd>
                  <dt className="font-bold text-gray-700 dark:text-gray-300">Öğrenci No</dt>
                  <dd className="text-gray-600 dark:text-gray-400">235541034</dd>
                  <dt className="font-bold text-gray-700 dark:text-gray-300">Bölüm</dt>
                  <dd className="text-gray-600 dark:text-gray-400">Yazılım Mühendisliği</dd>
                  <dt className="font-bold text-gray-700 dark:text-gray-300">Dönem</dt>
                  <dd className="text-gray-600 dark:text-gray-400">2024–2025 Bahar</dd>
                  <dt className="font-bold text-gray-700 dark:text-gray-300">Lab</dt>
                  <dd className="text-gray-600 dark:text-gray-400">LAB-4</dd>
                </dl>
              </aside>
            </div>
          </section>

          {/* PROJELER */}
          <section id="projeler" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
                Projelerim
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card variant="elevated" title="Web Lab Hello">
                  <p>Vite ve React ile oluşturulan LAB-1 ve LAB-2 portfolyo projesi.</p>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {['React', 'Vite', 'TypeScript'].map((t) => (
                      <span key={t} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-0.5 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </Card>

                <Card variant="elevated" title="Semantic Portfolio">
                  <p>Semantic HTML5 ve erişilebilirlik standartlarına uygun portfolyo sayfası.</p>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {['HTML5', 'Erişilebilirlik', 'ARIA'].map((t) => (
                      <span key={t} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-0.5 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </Card>

                <Card variant="elevated" title="Responsive Layout">
                  <p>CSS Grid, Flexbox ve mobile-first yaklaşımıyla oluşturulan responsive portfolyo.</p>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {['CSS Grid', 'Flexbox', 'Responsive'].map((t) => (
                      <span key={t} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-0.5 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </section>

          {/* İLETİŞİM */}
          <section id="iletisim" className="py-16 px-4">
            <div className="max-w-lg mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
                İletişim
              </h2>
              <form className="space-y-4" noValidate onSubmit={(e) => e.preventDefault()}>
                <Input id="name" label="Ad Soyad" placeholder="Adınızı girin" required />
                <Input id="email" label="E-posta" type="email" placeholder="ornek@email.com" required />

                <div className="space-y-1">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Mesajınız
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    placeholder="Mesajınızı buraya yazın..."
                    className="w-full px-3 py-2 rounded-lg border border-gray-300
                      focus:ring-2 focus:ring-blue-500 focus:outline-none
                      dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600
                      transition-colors"
                  />
                </div>

                <Button variant="primary" size="lg" type="submit" className="w-full">
                  Gönder
                </Button>
              </form>
            </div>
          </section>
        </main>
      )}

      {/* FOOTER */}
      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700
        text-center py-6 px-4 text-gray-500 dark:text-gray-400 text-sm">
        <p>&copy; 2025 Abdulmecit ÖZTÜRK. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  )
}

export default App
