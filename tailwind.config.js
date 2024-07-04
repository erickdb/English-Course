module.exports = {
  content: [
    "./*.html", // Ini akan mencari kelas Tailwind dalam semua file HTML di direktori utama
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
