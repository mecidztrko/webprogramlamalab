import './App.css'

function App() {
  return (
    <>
      {/* Skip to Content - Erişilebilirlik (LAB-2) */}
      <a href="#main-content" className="skip-link">İçeriğe Geç</a>

      {/* HEADER — Flexbox responsive (LAB-3) */}
      <header className="site-header">
        <div className="header-inner">
          <div>
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
        </div>
      </header>

      {/* ANA İÇERİK */}
      <main id="main-content">

        {/* HAKKIMDA — Flexbox layout (LAB-3 Uygulama-3) */}
        <section id="hakkimda" aria-labelledby="hakkimda-baslik">
          <h2 id="hakkimda-baslik">Hakkımda</h2>
          <div className="about-content">
            <article className="about-article">
              <h3>Öğrenci Bilgileri</h3>
              <p>
                Web Tasarımı ve Programlama dersi kapsamında
                <time dateTime="2025-02-24"> Şubat 2025</time> tarihinde
                hazırlanmış LAB-3 portfolyo sayfasıdır.
              </p>
              <p>
                Semantic HTML5, erişilebilirlik (a11y), Flexbox, CSS Grid ve
                responsive tasarım konularını kapsayan bu uygulama,
                modern web standartlarına uygun olarak geliştirilmiştir.
              </p>

              {/* Skill Tags Toolbar — Flexbox (LAB-3 Uygulama-5) */}
              <ul className="skill-tags" role="list" aria-label="Beceri etiketleri">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Flexbox</li>
                <li>CSS Grid</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>Git</li>
                <li>Vite</li>
              </ul>
            </article>

            <aside className="about-aside" aria-label="Kişisel Bilgiler">
              <h3>Kişisel Bilgiler</h3>
              <dl>
                <dt>Ad Soyad</dt>
                <dd>Abdulmecit ÖZTÜRK</dd>
                <dt>Öğrenci No</dt>
                <dd>235541034</dd>
                <dt>Bölüm</dt>
                <dd>Yazılım Mühendisliği</dd>
                <dt>Dönem</dt>
                <dd>2024–2025 Bahar</dd>
                <dt>Lab</dt>
                <dd>LAB-3</dd>
              </dl>
            </aside>
          </div>
        </section>

        {/* PROJELER — CSS Grid (LAB-3 Uygulama-6) */}
        <section id="projeler" aria-labelledby="projeler-baslik">
          <h2 id="projeler-baslik">Projeler</h2>
          <div className="projects-grid">

            <article className="project-card">
              <figure>
                <div className="project-img" role="img" aria-label="Web Lab Projesi görseli">💻</div>
                <figcaption>Web Lab — React + Vite Projesi</figcaption>
              </figure>
              <h3>Web Lab Hello</h3>
              <p>Vite ve React ile oluşturulan LAB-1 ve LAB-2 portfolyo projesi.</p>
              <ul className="skill-tags" role="list" aria-label="Kullanılan teknolojiler">
                <li>React</li>
                <li>Vite</li>
                <li>TypeScript</li>
              </ul>
              <time dateTime="2025-02">Şubat 2025</time>
            </article>

            <article className="project-card">
              <figure>
                <div className="project-img" role="img" aria-label="Semantic HTML projesi görseli">🌐</div>
                <figcaption>Semantic HTML5 Portfolyo</figcaption>
              </figure>
              <h3>Semantic Portfolio</h3>
              <p>Semantic HTML5 ve erişilebilirlik standartlarına uygun portfolyo sayfası.</p>
              <ul className="skill-tags" role="list" aria-label="Kullanılan teknolojiler">
                <li>HTML5</li>
                <li>Erişilebilirlik</li>
                <li>ARIA</li>
              </ul>
              <time dateTime="2025-02">Şubat 2025</time>
            </article>

            <article className="project-card">
              <figure>
                <div className="project-img" role="img" aria-label="Responsive Tasarım projesi görseli">📱</div>
                <figcaption>Responsive Tasarım — LAB-3</figcaption>
              </figure>
              <h3>Responsive Layout</h3>
              <p>CSS Grid, Flexbox ve mobile-first yaklaşımıyla oluşturulan responsive portfolyo.</p>
              <ul className="skill-tags" role="list" aria-label="Kullanılan teknolojiler">
                <li>CSS Grid</li>
                <li>Flexbox</li>
                <li>Responsive</li>
              </ul>
              <time dateTime="2025-03">Mart 2025</time>
            </article>

          </div>
        </section>

        {/* İLETİŞİM FORMU — LAB-2 Korundu */}
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

      {/* FOOTER */}
      <footer>
        <p>© 2025 Abdulmecit ÖZTÜRK · Yazılım Mühendisliği · Web Tasarımı ve Programlama — LAB-3</p>
      </footer>
    </>
  )
}

export default App
