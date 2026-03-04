# CSS Kararları

## 1. Breakpoint Seçimi

Neden **640px** ve **1024px** seçtim?

- **640px (sm):** Büyük telefonlar ve küçük tabletler bu değerin üzerinde çalışır. 640px'de navigasyon yatay (row) düzene geçmekte ve "Hakkımda" bölümü de yan yana (flex-row) dizilmektedir. İçerik bu noktada daralmaya başlamakta ve iki sütun düzeni zorunluluğu doğmaktadır.
- **1024px (lg):** Tam masaüstü deneyimi için; içerik `max-width: 1200px` ile ortalanır, proje kartları kesin olarak 3 sütuna sabitlenir, section başlıkları sola hizalanır. Bu noktadan itibaren kullanıcıların büyük ekranı tam verimliyle kullanması sağlanır.

İçeriğin bozulduğu noktaları test ederek bu değerlere ulaştım; cihaz modeline göre değil içeriğe göre kırılım noktası belirledim.

---

## 2. Layout Tercihleri

### Neden Header için Flexbox?

Header tek boyutlu bir düzen gerektirir: logo/isim sola, navigasyon sağa. `display: flex; justify-content: space-between` ile bu tam olarak sağlandı. Mobilde `flex-direction: column` ile dikey yığın yapısına geçiş de Flexbox ile çok kolay oldu.

### Neden Proje Kartları için Grid?

Proje kartları iki boyutlu bir ızgara yapısı gerektirir — hem satır hem sütun kontrolü. `repeat(auto-fit, minmax(280px, 1fr))` kullanarak media query yazmadan responsive grid elde ettim: mobilde 1 sütun, tablette 2, masaüstünde 3 sütun otomatik belirlenir.

### `auto-fit` mi, `auto-fill` mi?

`auto-fit` tercih ettim. Çünkü az sayıda kart varken boş sütunlar kalmadan mevcut kartlar genişliyor. `auto-fill`'de boş sütunlar korunur ve kartlar genişlemez — bu senaryoda istenmeyen bir davranıştır.

---

## 3. Design Tokens

### Renk Paleti Seçimi

`#1E3A8A` (koyu lacivert) ve `#2563EB` (parlak mavi) seçtim. Bu renkler:
- Profesyonel ve akademik bağlam için uygun (portföy, öğrenci projesi)
- Kontrast oranları WCAG AA standardını karşılıyor (erişilebilirlik)
- Birbirleriyle harmonik gradient oluşturuyor (header arka planı)

### Spacing Skalası

`0.25rem` (4px) baz birimiyle 2 kat artış mantığıyla tanımladım: `xs→sm→md→lg→xl→2xl→3xl`. Bu şekilde tüm padding ve margin değerleri birbiriyle orantılı bir ritim oluşturuyor.

### Fluid Typography

`clamp(min, preferred, max)` kullanarak yazı boyutlarını `rem + vw` karışımıyla tanımladım:
- Minimum değer: erişilebilirlik için 1rem'in altına düşmez
- Preferred: `rem + vw` ile ekran genişliğine orantılı
- Maximum: taşmayı önlemek için üst sınır

Örnek: `--text-2xl: clamp(1.5rem, 1rem + 2vw, 2.5rem)` — 320px'de ≈1.5rem, 1280px'de ≈2.5rem olur.

---

## 4. Responsive Stratejiler

### Mobile-First Yaklaşımı Nasıl Uyguladım?

Tüm CSS'i önce 0-639px ekranlar için yazdım (media query olmadan). Ardından sadece `min-width` media query'leri kullanarak tablet ve masaüstüne genişlettim. Bu şekilde mobil kullanıcılar sadece temel CSS'i yüklüyor; masaüstü kurallarını indirmiyor.

### Hangi Elemanlar Breakpoint'lerde Değişiyor?

| Element | Mobil | Tablet (640px+) | Masaüstü (1024px+) |
|---------|-------|-----------------|---------------------|
| Header | Dikey yığın (column) | Yatay (row, space-between) | Yatay |
| Nav ul | Dikey (column) | Yatay (row) | Yatay |
| Hakkımda | Tek sütun, ortalanmış | İki sütun (flex-row) | İki sütun |
| Proje Kartları | 1 sütun (auto-fit) | 1-2 sütun (auto-fit) | 3 sütun (repeat 3) |
| Section padding | `xl md` | `2xl xl` | `3xl xl` |
| Form butonu | `width: 100%` | `width: auto` | `width: auto` |

### Görsel Boyutları Nasıl Yönettim?

`img { max-width: 100%; height: auto; display: block; }` ile tüm görseller kapsayıcısına sığar. Proje kartlarındaki emoji görselleri için sabit padding kullandım; gerçek `<img>` elementi olsaydı `object-fit: cover` + sabit yükseklik kullanırdım.
