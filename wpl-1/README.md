# LAB-2: Web Tasarımı ve Programlama

**Ad Soyad:** Abdulmecit ÖZTÜRK  
**Öğrenci No:** 235541034  
**Bölüm:** Yazılım Mühendisliği  
**Konu:** Semantic HTML5 · Erişilebilirlik (a11y) · Form Temelleri

---

## 🌿 Branch

```bash
git checkout feature/semantic-portfolio
```

---

## 📋 Uygulama Özeti

| # | Uygulama | Açıklama |
|---|----------|----------|
| 1 | Semantic Skeleton | `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>` |
| 2 | Semantic Elements | `<article>`, `<aside>`, `<time>`, `<figure>`, `<figcaption>` |
| 3 | Accessible Labels | Her `<input>` için `<label>` + `for` eşleşmesi |
| 4 | Form Validation | `required`, `minlength`, `role="alert"`, `aria-describedby` |
| 5 | Navigation & A11y | "İçeriğe Geç" skip linki + `:focus-visible` CSS |
| 6 | Personal Portfolio | Tüm uygulamaların birleşimi |
| 7 | Lighthouse Test | Accessibility skoru: **100 / 100** ✅ |

---

## 🔦 Lighthouse Sonuçları

| Kategori | Skor |
|----------|------|
| 🟠 Performance | 63 |
| 🟢 **Accessibility** | **100** ✅ |
| 🟢 Best Practices | 100 |
| 🟠 SEO | 82 |

> Hocanın istediği **Accessibility skoru 90+** hedefine ulaşıldı → **100 / 100**

![Lighthouse Raporu](screenshots/Ekran%20Resmi%202026-02-24%2022.30.32.png)

---

## 🚀 Kurulum & Çalıştırma

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev
```

Uygulama `http://localhost:5173` adresinde çalışır.

---

## 🛠️ Kullanılan Teknolojiler

- **React 19** + **TypeScript**
- **Vite** (build tool)
- Semantic **HTML5**
- Vanilla **CSS**
