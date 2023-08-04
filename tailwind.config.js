/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./views/*.html"
  ],
  theme: {
    extend: {
      colors: {
        aloGray: "#262626",
        aloGreen: "#00AF6E",
        aloBlue: "#006EC8",
        aloWhite: "#E5E5E5",
        aloBrown: "#966446",
        aloOrange: "#FA7819"
      },
      screens: {
        '2lg': '1300px',
        '3xl': '2000px',
        '4xl': '3000px',
        '5xl': '4000px',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(200px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 100 },
        },
        disappear: {
          '0%': { top: '0' },
          '50%': { top: '-100vh' },
          '100%': { top: '-100vh', display: 'none' },
        },
        zoomOut: {
          '0%': { backgroundSize: '150%' },
          '100%': { backgroundSize: '100%' },
        },
        zoomOutXl: {
          '0%': { backgroundSize: 'auto 150%' },
          '100%': { backgroundSize: 'auto 105%' },
        },
        sideScale: {
          '0%': { width: '0.5rem' },
          '50%': { width: '0.5rem' },
          '100%': { width: '100%' },
        },
        sideScalePc: {
          '0%': { width: '0.5rem', height: '0vh' },
          '50%': { width: '0.5rem', height: '30vh' },
          '100%': { width: '100%', height: '30vh' },
        },
        orangeLine: {
          '0%': { width: '0.5rem', height: '0vh' },
          '50%': { width: '0.5rem', height: '37vh' },
          '100%': { width: '100%', height: '37vh' },
        },
        slideTextR: {
          '0%': { left: '10%', opacity: '0' },
          '100%': { left: '0', opacity: '1' },
        },
        slideTextM: {
          '0%': { right: '10%', opacity: '0' },
          '100%': { right: '23%', opacity: '1' },
        },
        slideTextL: {
          '0%': { right: '10%', opacity: '0' },
          '100%': { right: '0', opacity: '1' },
        },
        growUpLineSvg1: {
          '0%': { height: '0' },
          '100%': { height: '100%' },
        },
        growUpLineSvg2: {
          '0%': { height: '0' },
          '100%': { height: '80px' },
        },
        slideUpText: {
          '0%': { transform: 'translateY(15px)' },
          '100%': { transform: 'translateY(0)' },
        },
        imageCarousel: {
          '0%': { width: '100%' },
          '25%': { width: '0%' },
          '100%': { width: '0%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        circleRotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        elementShow: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        carouselAnimationLg: {
          '0%, 4%': { transform: 'translateY(0)' },
          '5%, 9%': { transform: 'translateY(-210px)' },
          '10%, 14%': { transform: 'translateY(-419px)' },
          '15%, 19%': { transform: 'translateY(-625px)' },
          '20%, 24%': { transform: 'translateY(-834px)' },
          '25%, 29%': { transform: 'translateY(-1042px)' },
          '30%, 34%': { transform: 'translateY(-1249px)' },
          '35%, 39%': { transform: 'translateY(-1458px)' },
          '40%, 44%': { transform: 'translateY(-1663px)' },
          '45%, 49%': { transform: 'translateY(-1874px)' },
          '50%, 54%': { transform: 'translateY(-2081px)' },
          '55%, 59%': { transform: 'translateY(-2287px)' },
          '60%, 64%': { transform: 'translateY(-2497px)' },
          '65%, 69%': { transform: 'translateY(-2705px)' },
          '70%, 74%': { transform: 'translateY(-2913px)' },
          '75%, 79%': { transform: 'translateY(-3162px)' },
          '80%, 84%': { transform: 'translateY(-3369px)' },
          '85%, 89%': { transform: 'translateY(-3577px)' },
          '90%, 92%': { transform: 'translateY(-3782px)' },
          '93%, 96%': { transform: 'translateY(-3995px)' },
          '97%, 99%': { transform: 'translateY(-4202px)' },
          '100%': { transform: 'translateY(-4410px)' }
        },
        carouselAnimationSm: {
          '0%, 4%': { transform: 'translateY(-1px)' },
          '5%, 9%': { transform: 'translateY(-96px)' },
          '10%, 14%': { transform: 'translateY(-193px)' },
          '15%, 19%': { transform: 'translateY(-288px)' },
          '20%, 24%': { transform: 'translateY(-385px)' },
          '25%, 29%': { transform: 'translateY(-480px)' },
          '30%, 34%': { transform: 'translateY(-576px)' },
          '35%, 39%': { transform: 'translateY(-673px)' },
          '40%, 44%': { transform: 'translateY(-768px)' },
          '45%, 49%': { transform: 'translateY(-865px)' },
          '50%, 54%': { transform: 'translateY(-960px)' },
          '55%, 59%': { transform: 'translateY(-1056px)' },
          '60%, 64%': { transform: 'translateY(-1153px)' },
          '65%, 69%': { transform: 'translateY(-1260px)' },
          '70%, 74%': { transform: 'translateY(-1345px)' },
          '75%, 79%': { transform: 'translateY(-1480px)' },
          '80%, 84%': { transform: 'translateY(-1575px)' },
          '85%, 89%': { transform: 'translateY(-1672px)' },
          '90%, 92%': { transform: 'translateY(-1769px)' },
          '93%, 96%': { transform: 'translateY(-1864px)' },
          '97%, 99%': { transform: 'translateY(-1960px)' },
          '100%': { transform: 'translateY(-2057px)' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out both',
        slideUp1: 'slideUp 0.5s ease-in-out 1s both',
        slideUp2: 'slideUp 0.5s ease-in-out 1.1s both',
        slideUp3: 'slideUp 0.5s ease-in-out 1.2s both',
        slideUp4: 'slideUp 0.5s ease-in-out 1.3s both',
        slideUp5: 'slideUp 0.5s ease-in-out 1.4s both',
        slideUp6: 'slideUp 0.5s ease-in-out 1.5s both',
        slideUp7: 'slideUp 0.5s ease-in-out 1.6s both',
        slideUp8: 'slideUp 0.5s ease-in-out 1.7s both',
        slideUp9: 'slideUp 0.5s ease-in-out 1.8s both',
        disappear: 'disappear 2s ease-in-out 3s both',
        zoomOut: 'zoomOut 2s ease-in-out 3s both',
        zoomOutXl: 'zoomOutXl 2s ease-in-out 3s both',
        sideScale: 'sideScale 2s ease-in-out 3s both',
        sideScalePc: 'sideScalePc 2s ease-in-out 3s both',
        orangeLine: 'orangeLine 2s ease-in-out 3s both',
        slideTextR: 'slideTextR 1s ease-in-out 0.5s both',
        slideTextM: 'slideTextM 1s ease-in-out 0.5s both',
        slideTextL: 'slideTextL 1s ease-in-out 0.5s both',
        growUpLineSvg1: 'growUpLineSvg1 0.5s ease-in-out both',
        growUpLineSvg2: 'growUpLineSvg2 0.5s ease-in-out 1s both',
        slideUpText: 'slideUpText 0.5s ease-in-out both',
        imageCarousel1: 'imageCarousel 7s ease-in both infinite',
        imageCarousel2: 'imageCarousel 7s ease-in 4s both infinite',
        marquee: 'marquee 20s linear infinite',
        marquee2: 'marquee2 20s linear infinite',
        circleRotate: 'circleRotate 20s linear infinite',
        carouselAnimationLg: 'carouselAnimationLg 40s ease-in-out infinite',
        carouselAnimationSm: 'carouselAnimationSm 40s ease-in-out infinite',
        elementShow: 'elementShow 1s ease-in-out both',
      }
    },
    fontFamily: {
      'grotesk': ['SpaceGrotesk', 'ui-sans-serif', 'system-ui'],
      'groteskMono': ['SpaceGroteskMono', 'ui-sans-serif', 'system-ui'],
    }
  },
  plugins: [],
}