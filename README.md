# Daiva Mahdyatha — Personal Website

Personal website untuk Code Challenge 2, berisi profil, keahlian, portfolio, pengalaman, testimoni, dan kontak.

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS v4
- React Icons

## Section

1. Hero — nama, jabatan, foto, perkenalan singkat, dan tombol CTA
2. About Me — bio, detail personal, dan prinsip kerja
3. Skills — Front-End, Back-End, DevOps & Tools, Analysis & Systems, Professional
4. Portfolio — kartu proyek dengan detail metode STAR
5. Experience — riwayat pekerjaan
6. Testimonials — kutipan dari rekan kerja
7. Contact — email, GitHub, LinkedIn, dan form kontak

> Konten website (link, testimoni, dan detail proyek) adalah data dummy. Form kontak hanya memvalidasi input dan menampilkan pesan sukses; belum terhubung ke layanan pengiriman.

## Menjalankan Proyek

```bash
npm install
npm run dev      # development server
npm run build    # build production ke folder dist
npm run preview  # preview hasil build
npm run lint     # cek ESLint
```

## Struktur Folder

```
src/
├── assets/images/   # foto profil dan screenshot proyek
├── components/      # satu komponen per section
├── App.tsx          # susunan halaman
├── index.css        # import Tailwind dan style global
└── main.tsx         # entry point
```
