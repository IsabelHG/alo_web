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
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(200px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        fadeIn: {
          '0%': {opacity: 0},
          '100%': {opacity: 100},
        },
        disappear: {
          '0%': {top: '0'},
          '50%': {top: '-100vh'},
          '100%': {top: '-100vh', display: 'none'},
        },
        zoomOut: {
          '0%': {backgroundSize: '150%'},
          '100%': {backgroundSize: '100%'},
        },
        sideScale: {
          '0%': {width: '0.5rem'},
          '50%': {width: '0.5rem'},
          '100%': {width: '100%'},
        },
        sideScalePc: {
          '0%': {width: '0.5rem', height: '0vh'},
          '50%': {width: '0.5rem', height: '30vh'},
          '100%': {width: '100%', height: '30vh'},
        },
        orangeLine: {
          '0%': {width: '0.5rem', height: '0vh'},
          '50%': {width: '0.5rem', height: '37vh'},
          '100%': {width: '100%', height: '37vh'},
        },
        slideTextR: {
          '0%': {left: '10%', opacity: '0'},
          '100%': {left: '0', opacity:'1'},
        },
        slideTextM: {
          '0%': {right: '10%', opacity: '0'},
          '100%': {right: '25%', opacity:'1'},
        },
        slideTextL: {
          '0%': {right: '10%', opacity: '0'},
          '100%': {right: '0', opacity:'1'},
        },
        growUpLineSvg1: {
          '0%': {height: '0'},
          '100%': {height: '100%'},
        },
        growUpLineSvg2: {
          '0%': {height: '0'},
          '100%': {height: '80px'},
        },
        slideUpText: {
          '0%': { transform: 'translateY(15px)' },
          '100%': { transform: 'translateY(0)' },
        },
        imageCarousel: {
          '0%': {width: '100%'},
          '25%': {width: '0%'},
          '100%': {width: '0%'},
        },
        marquee: {
          '0%': {transform: 'translateX(0)'},
          '100%': {transform: 'translateX(100%)'},
        },
        marquee2: {
          '0%': {transform: 'translateX(-100%)'},
          '100%': {transform: 'translateX(0)'},
        },
        circleRotate: {
          '0%': {transform: 'rotate(0deg)'},
          '100%': {transform: 'rotate(360deg)'},
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
      }
    },
    fontFamily: {
      'grotesk': ['SpaceGrotesk', 'ui-sans-serif', 'system-ui'],
    }
  },
  plugins: [],
}