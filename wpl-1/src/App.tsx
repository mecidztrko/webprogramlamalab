import './App.css'

function App() {
  return (
    <>
      {/* Skip to Content - Uygulama 5 */}
      <a href="#main-content" className="skip-link">İçeriğe Geç</a>

      {/* Uygulama 1: Semantic Skeleton */}
      <header className="site-header">
        <div className="header-inner">
          <h1>Abdulmecit ÖZTÜRK</h1>
          <p className="subtitle">Yazılım Mühendisliği Öğrencisi · No: 235541034</p>
        </div>
        <nav aria-label="Ana Navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      {/* Uygulama 1 & 2: Semantic main + article/aside/figure */}
      <main id="main-content">

        {/* Uygulama 2: article, aside, time, figure, figcaption */}
        <section id="hakkimda" aria-labelledby="hakkimda-baslik">
          <h2 id="hakkimda-baslik">Hakkımda</h2>
          <div className="about-grid">
            <article>
              <h3>Öğrenci Bilgileri</h3>
              <p>
                Web Tasarımı ve Programlama dersi kapsamında
                <time dateTime="2025-02-24"> Şubat 2025</time> tarihinde
                hazırlanmış LAB-2 portfolyo sayfasıdır.
              </p>
              <p>
                Semantic HTML5, erişilebilirlik (a11y) ve form temelleri konularını
                kapsayan bu uygulama, modern web standartlarına uygun olarak geliştirilmiştir.
              </p>
            </article>

            <aside aria-label="Kişisel Bilgiler">
              <h3>Kişisel Bilgiler</h3>
              <dl>
                <dt>Ad Soyad</dt>
                <dd>Abdulmecit ÖZTÜRK</dd>
                <dt>Öğrenci No</dt>
                <dd>235541034</dd>
                <dt>Bölüm</dt>
                <dd>Yazılım Mühendisliği</dd>
              </dl>
            </aside>
          </div>
        </section>

        {/* Uygulama 2: figure + figcaption */}
        <section id="projeler" aria-labelledby="projeler-baslik">
          <h2 id="projeler-baslik">Projeler</h2>
          <div className="projects-grid">
            <article className="project-card">
              <figure>
                <div className="project-img" role="img" aria-label="Web Lab Projesi görseli">💻</div>
                <figcaption>Web Lab - React + Vite Projesi</figcaption>
              </figure>
              <h3>Web Lab Hello</h3>
              <p>Vite ve React ile oluşturulan LAB-1 ve LAB-2 projesi.</p>
              <time dateTime="2025-02">Şubat 2025</time>
            </article>

            <article className="project-card">
              <figure>
                <div className="project-img" role="img" aria-label="Semantic HTML projesi görseli">🌐</div>
                <figcaption>Semantic HTML5 Portfolio</figcaption>
              </figure>
              <h3>Semantic Portfolio</h3>
              <p>Semantic HTML5 ve erişilebilirlik standartlarına uygun portfolyo sayfası.</p>
              <time dateTime="2025-02">Şubat 2025</time>
            </article>
          </div>
        </section>

        {/* Uygulama 3 & 4: Accessible Form + Validation */}
        <section id="iletisim" aria-labelledby="iletisim-baslik">
          <h2 id="iletisim-baslik">İletişim Formu</h2>

          <form className="contact-form" noValidate onSubmit={(e) => e.preventDefault()}>

            {/* Ad Soyad */}
            <div className="form-group">
              <label htmlFor="ad-soyad">Ad Soyad <span aria-hidden="true">*</span></label>
              <input
                type="text"
                id="ad-soyad"
                name="adSoyad"
                required
                minLength={3}
                placeholder="Adınızı ve soyadınızı girin"
                aria-describedby="ad-soyad-hata"
                aria-required="true"
              />
              <small id="ad-soyad-hata" className="error-msg" role="alert">
                Ad soyad en az 3 karakter olmalıdır.
              </small>
            </div>

            {/* E-posta */}
            <div className="form-group">
              <label htmlFor="eposta">E-posta <span aria-hidden="true">*</span></label>
              <input
                type="email"
                id="eposta"
                name="eposta"
                required
                placeholder="ornek@email.com"
                aria-describedby="eposta-hata"
                aria-required="true"
              />
              <small id="eposta-hata" className="error-msg" role="alert">
                Geçerli bir e-posta adresi giriniz.
              </small>
            </div>

            {/* Öğrenci No */}
            <div className="form-group">
              <label htmlFor="ogrenci-no">Öğrenci Numarası <span aria-hidden="true">*</span></label>
              <input
                type="text"
                id="ogrenci-no"
                name="ogrenciNo"
                required
                minLength={9}
                placeholder="Öğrenci numaranızı girin"
                aria-describedby="ogrenci-hata"
                aria-required="true"
              />
              <small id="ogrenci-hata" className="error-msg" role="alert">
                Öğrenci numarası 9 haneli olmalıdır.
              </small>
            </div>

            {/* Mesaj */}
            <div className="form-group">
              <label htmlFor="mesaj">Mesaj <span aria-hidden="true">*</span></label>
              <textarea
                id="mesaj"
                name="mesaj"
                required
                minLength={10}
                rows={5}
                placeholder="Mesajınızı buraya yazın..."
                aria-describedby="mesaj-hata"
                aria-required="true"
              />
              <small id="mesaj-hata" className="error-msg" role="alert">
                Mesaj en az 10 karakter içermelidir.
              </small>
            </div>

            <button type="submit">Gönder</button>
          </form>
        </section>

      </main>

      {/* Uygulama 1: footer */}
      <footer>
        <p>© 2025 Abdulmecit ÖZTÜRK · Yazılım Mühendisliği · Web Tasarımı ve Programlama</p>
      </footer>
    </>
  )
}

export default App
