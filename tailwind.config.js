/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary":   "#246BFD",
          "secondary": "#C25FFF",
          "accent":    "#A5F59C",
          "neutral":   "#262A34",
          "base-100":  "#181A20",
          "info":      "#94F0F0",
          "success":   "#A5F59C",
          "warning":   "#FFDD72",
          "error":     "#FF968E",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ]
}

