# Ariverse Studio

Website portofolio Ariverse Studio — studio game dari Malang, Indonesia. Dibangun dengan Next.js (App Router), Tailwind CSS v4, Framer Motion, dan [Keystatic](https://keystatic.com) sebagai CMS berbasis Git.

## Menjalankan secara lokal

```bash
npm install
npm run dev      # http://localhost:3000
```

Admin CMS tersedia di [http://localhost:3000/keystatic](http://localhost:3000/keystatic). Di lokal, Keystatic langsung menulis ke file di `src/content/`, jadi perubahan tinggal di-commit seperti kode biasa.

## Konten

Semua konten dikelola lewat Keystatic (`keystatic.config.ts`):

| Tipe | Lokasi | Dipakai di |
|---|---|---|
| Games / proyek | `src/content/games/` | Home, `/games` |
| Posts | `src/content/posts/` | `/blog` |
| Services | `src/content/services/` | Home, `/services` |
| Careers | `src/content/careers/` | Belum ditampilkan di halaman mana pun |
| Press coverage | `src/content/press/` | Home |
| Crew | `src/content/crew/` | Home |
| Homepage (singleton) | `src/content/homepage.json` | Video company profile di home |
| Presskit (singleton) | `src/content/presskit.json` | `/presskit` |
| Tech & Platforms (singleton) | `src/content/technologies.json` | `/services` |

Gambar disimpan di `public/images/`.

## Build

```bash
npm run build
```

- **Tanpa** `KEYSTATIC_GITHUB_CLIENT_ID`: static export ke `dist/`. Script `prebuild` memindahkan `app/api` ke `.api-backup/` selama build, lalu `postbuild` mengembalikannya.
- **Dengan** `KEYSTATIC_GITHUB_CLIENT_ID` dan `KEYSTATIC_GITHUB_CLIENT_SECRET`: build server (`npm run start`). Admin Keystatic di production login lewat GitHub dan meng-commit langsung ke repo `alizul01/ariverse-studio` — jalankan `git pull` sebelum mengedit di lokal.

## Lainnya

```bash
npm run lint
```

Belum ada test suite.
