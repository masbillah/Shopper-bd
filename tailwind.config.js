/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens:{
      sm:'640px',
      md:'768px',
      lg:'960px',
      xl:'1330px'
    },
    extend: {
      fontFamily:{
        primary:'Montserrat'
      },
      colors:{
        primary:'#242a2b',
        

        scandary:'#BAA47c'
       
      },

      boxShadow:{
        custome1:'0px 2px 40px 0px rgba(8, 70, 78, 0.15)',
        custome2:'0px 0px 30px 0px rgba(8, 73, 81, 0.15)',
      },

      backgroundImage:{
        service:'url(./assets/img/services/slide-1.jpg)',
        testiminial:'url(./image/product/banner-1.jpg.webp)',
        departments:'url(./assets/img/departments/bg.svg)',
        quoteleft:'url(./assets/icon/testimonials/quote-left.svg)',
        quoteright:'url(./assets/icon/testimonials/quote-right.svg)',

        header:'url(.assets/img/header/logo.svg)'
        
      }

    },
  },
  plugins: [],
}
