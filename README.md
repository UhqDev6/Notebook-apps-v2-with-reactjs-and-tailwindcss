# Submission Dicoding
Preview Project Demo: https://notebookapps-version2.netlify.app/

Buatlah Single Page Application menggunakan React dengan kriteria berikut ini.

Kriteria Utama 1: Minimal terdapat 2 halaman yang berbeda
Berikut detail dari kriterianya.
Halaman 1: menampilkan daftar catatan.
Halaman 2: menampilkan detail catatan atau catatan secara tunggal.

Kriteria Utama 2: Daftar catatan
Berikut detail dari kriterianya.

Menampilkan daftar catatan dengan data awal (initial data) yang kami sediakan.
Data yang ditampilkan pada daftar catatan adalah
judul catatan (title),
waktu pembuatan (createdAt), dan
isi catatan (body).
Terdapat conditional rendering di mana bila tidak terdapat data catatan, UI menampilkan pesan “Tidak ada catatan” atau pesan apa pun yang mengindikasikan data catatan kosong.

Kriteria Utama 3: Detail catatan
Berikut detail dari kriterianya.

Menampilkan catatan tunggal yang dipilih pengguna dari daftar catatan aktif atau diarsipkan.
Menggunakan id catatan sebagai path parameter dalam menampilkan halaman detail catatan.
Catatan yang tampil harus sesuai dengan id yang terdapat pada path parameter.
Halaman Detil Catatan harus dapat diakses langsung dengan menggunakan URL.

Kriteria Utama 4: Menambahkan catatan baru
Aplikasi mampu menambahkan catatan baru dengan kriteria berikut.

Memanfaatkan controlled component dalam membuat form input.
Data catatan disimpan cukup pada memori saja (akan hilang jika browser di-refresh). Kami sarankan untuk memanfaatkan fungsi menyimpan catatan yang disediakan.

Kriteria Utama 5: Menghapus catatan
Aplikasi mampu menghapus catatan yang tersimpan. Berikut detailnya.

Aplikasi harus menyediakan tombol hapus untuk menghapus data catatan yang disimpan.
Tombol hapus boleh diletakkan di mana saja, tetapi pastikan pengguna dapat mengaksesnya dengan baik. Sebagai contoh, Anda bisa menampilkan pada halaman detail catatan dan/atau daftar catatan.

Kriteria Utama 6: Memvalidasi properti
Berikut detail dari kriterianya.

Memvalidasi seluruh masukkan (props) yang diterima komponen menggunakan PropTypes.
Sebelum mengirimkan submission, pastikan tidak ada warning terkait validasi komponen.

Kriteria Opsional 1: Arsip Catatan
Berikut detail dari kriterianya.

Catatan terarsip adalah catatan yang properti archived bernilai true.
Menyediakan halaman baru untuk menampilkan daftar catatan yang terarsip.
Data yang ditampilkan pada daftar catatan adalah
judul catatan (title),
waktu pembuatan (createdAt), dan
isi catatan (body).
Terdapat conditional rendering di mana bila tidak terdapat data catatan, maka UI menampilkan pesan “Arsip kosong” atau pesan apa pun yang mengindikasikan data catatan terarsip kosong.
Mengarsipkan catatan.
Aplikasi harus menyediakan tombol arsip dan batal arsip untuk mengarsipkan dan memindahkan catatan dari arsip.
Tombol arsip dan batal arsip bisa diletakkan di mana saja, tetapi pastikan pengguna dapat mengaksesnya dengan baik. Sebagai contoh, Anda bisa menampilkan pada halaman detail catatan dan/atau daftar catatan.

Kriteria Opsional 2: Pencarian catatan
Berikut detail dari kriterianya.

Aplikasi memiliki fitur pencarian catatan berdasarkan kata kunci yang dimasukkan, dengan ketentuan:
Jika kolom pencarian tidak kosong, maka aplikasi hanya menampilkan daftar catatan yang judulnya mengandung kata kunci yang dimasukkan.
Jika kolom pencariannya kosong, maka aplikasi menampilkan seluruh catatan.
Memanfaatkan search parameter agar pencarian bersifat shareable melalui URL.
Memanfaatkan controlled component dalam membangun input pencarian.

Kriteria Opsional 3: 404 Pages
Aplikasi menyediakan halaman khusus bila pengguna mengakses URL aplikasi dengan alamat yang tidak diketahui/diharapkan.

# Semua Kriteria Utama & Opsional telah diselesaikan dengan baik dan mendapatkan 4 Star

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
