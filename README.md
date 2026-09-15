# YATIPTIP

YATIPTIP adalah aplikasi layanan titip beli, titip antar, dan pencarian barang yang menghubungkan pelanggan dengan Jastiper di berbagai wilayah Indonesia.

## Fitur

- Landing page untuk memperkenalkan layanan YATIPTIP.
- Navigasi responsif untuk desktop, tablet, dan handphone.
- Menu mobile interaktif dengan pilihan wilayah dan aksi pemesanan.
- Informasi cakupan wilayah, alur layanan, dan ajakan menjadi mitra.
- Halaman login untuk console admin dan operator wilayah.

## Teknologi

- React 19
- Vite
- Lucide React
- ESLint

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## Menjalankan Secara Lokal

```bash
npm install
npm run dev
```

Buka URL lokal yang ditampilkan Vite di browser.

## Perintah Lain

```bash
npm run build
npm run lint
npm run preview
```

## Struktur Utama

- `src/components/landing`: section dan kartu landing page.
- `src/components/layout`: navbar dan footer.
- `src/components/auth`: komponen halaman login.
- `src/components/ui`: komponen UI yang dapat digunakan kembali.
- `src/pages`: halaman landing dan login.

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.
You can also try [the experimental native React Compiler support in plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md#rust-react-compiler) by using `compiler: true` in the plugin options instead of using the Babel plugin.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
