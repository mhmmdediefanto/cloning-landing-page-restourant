# Landing Page Restaurant - Nexgen Jepara

## Masalah yang Diperbaiki

### Masalah 404 pada GitHub Pages
Website mengalami error 404 pada semua link navigation kecuali halaman index setelah di-deploy ke GitHub Pages.

### Penyebab Masalah
Masalah ini terjadi karena penggunaan **absolute path** (dimulai dengan `/`) pada link-link navigation dan gambar. Ketika website di-deploy ke GitHub Pages, struktur URL-nya berbeda dan absolute path tidak akan bekerja dengan benar.

### Solusi yang Diterapkan

1. **Mengubah Absolute Path menjadi Relative Path**
   - Sebelum: `href="/index.html"` → Sesudah: `href="index.html"`
   - Sebelum: `href="/menu.html"` → Sesudah: `href="menu.html"`
   - Sebelum: `href="/about.html"` → Sesudah: `href="about.html"`
   - Sebelum: `href="/contact.html"` → Sesudah: `href="contact.html"`

2. **Memperbaiki Path Gambar**
   - Mengganti referensi ke file yang tidak ada dengan file yang tersedia
   - Menghapus referensi ke `logo.png` dan menggantinya dengan logo teks

3. **File yang Diperbaiki**
   - `index.html`
   - `menu.html`
   - `about.html`
   - `contact.html`

## Struktur File

```
landing-page-resto/
├── index.html          # Halaman utama
├── menu.html           # Halaman menu
├── about.html          # Halaman tentang
├── contact.html        # Halaman kontak
├── assets/             # Folder gambar
│   ├── best_cheff.jpg
│   ├── bg_cheff.jpg
│   ├── chef_botak.png
│   ├── food.jpg
│   ├── hero.jpg
│   ├── restoran.jpg
│   └── starter_menu.jpg
├── src/                # Folder CSS
│   ├── input.css
│   └── output.css
├── package.json
├── tailwind.config.js
└── README.md
```

## Cara Deploy ke GitHub Pages

1. Push semua perubahan ke repository GitHub
2. Buka Settings repository
3. Scroll ke bagian "Pages"
4. Pilih source "Deploy from a branch"
5. Pilih branch "main" dan folder "/ (root)"
6. Klik Save

## Teknologi yang Digunakan

- HTML5
- CSS3 (Tailwind CSS)
- JavaScript (Vanilla)
- Font Awesome Icons
- Remix Icons

## Fitur

- Responsive design
- Mobile menu
- Smooth scrolling
- WhatsApp integration
- Social media links
- Beautiful UI/UX

## Kontak

- Phone: (62) 898-1511-002
- Email: info@nexgen.id
- Address: Jl. H. Ali Syarif No.RT04, Rw. 06, Tahunan, Jepara, Kabupaten Jepara, Jawa Tengah 59421 