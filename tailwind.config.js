/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./assets/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        suporte: {
          message: '#2962FF',
          success: '#0BB07B',
          warning: '#FFCE52',
          error: '#F03D3D',
          information: '#E0E0E0'
        },
        preto: {
          dez: '#FFFFFF',
          quarenta: '#DBDBDB',
          setenta: '#6E7275',
          cem: '#293145'
        },
        azul: {
          principal: '#0F9AFE',
          fundo: '#EFF8FF'
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        sora: ['Sora', 'sans-serif']
      },
      letterSpacing: {
        widest: '0.175em'
      },
      screens: {
        '2xl': '1440px',
      }
    }
  },
  plugins: [],
}

