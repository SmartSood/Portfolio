/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        secondary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        accent: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
        },
        cyan: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'blue-gradient': 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
        'blue-gradient-dark': 'linear-gradient(135deg, #60a5fa 0%, #c084fc 100%)',
        'mesh-blue': 'linear-gradient(-45deg, #3b82f6, #8b5cf6, #ec4899, #06b6d4)',
        'ocean-gradient': 'linear-gradient(135deg, #0ea5e9 0%, #3b82f6 50%, #8b5cf6 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'float-smooth': 'float-smooth 8s ease-in-out infinite',
        'orbit-smooth': 'orbit-smooth 12s linear infinite',
        'wave-smooth': 'wave-smooth 10s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'wave': 'wave 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-smooth': {
          '0%, 100%': { 
            transform: 'translateY(0px) scale(1)',
            opacity: '0.2'
          },
          '25%': { 
            transform: 'translateY(-15px) scale(1.1)',
            opacity: '0.3'
          },
          '50%': { 
            transform: 'translateY(-25px) scale(1.05)',
            opacity: '0.25'
          },
          '75%': { 
            transform: 'translateY(-10px) scale(1.15)',
            opacity: '0.35'
          },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #3b82f6, 0 0 10px #3b82f6, 0 0 15px #3b82f6' },
          '100%': { boxShadow: '0 0 10px #3b82f6, 0 0 20px #3b82f6, 0 0 30px #3b82f6' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '25%': { backgroundPosition: '100% 50%' },
          '50%': { backgroundPosition: '100% 100%' },
          '75%': { backgroundPosition: '0% 100%' },
        },
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(5deg)' },
          '75%': { transform: 'rotate(-5deg)' },
        },
        'orbit-smooth': {
          '0%': { 
            transform: 'translateX(0px) translateY(0px) scale(1)',
            opacity: '0.2'
          },
          '25%': { 
            transform: 'translateX(50px) translateY(-30px) scale(1.1)',
            opacity: '0.3'
          },
          '50%': { 
            transform: 'translateX(0px) translateY(-60px) scale(1.05)',
            opacity: '0.25'
          },
          '75%': { 
            transform: 'translateX(-50px) translateY(-30px) scale(1.15)',
            opacity: '0.35'
          },
          '100%': { 
            transform: 'translateX(0px) translateY(0px) scale(1)',
            opacity: '0.2'
          },
        },
        'wave-smooth': {
          '0%': { 
            transform: 'translateX(0px) translateY(0px) scale(1)',
            opacity: '0.2'
          },
          '33%': { 
            transform: 'translateX(40px) translateY(-20px) scale(1.1)',
            opacity: '0.3'
          },
          '66%': { 
            transform: 'translateX(-40px) translateY(-40px) scale(1.05)',
            opacity: '0.25'
          },
          '100%': { 
            transform: 'translateX(0px) translateY(0px) scale(1)',
            opacity: '0.2'
          },
        },
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animationDelay: {
        '1000': '1s',
        '2000': '2s',
        '3000': '3s',
        '4000': '4s',
      },
      boxShadow: {
        'blue': '0 4px 14px 0 rgba(59, 130, 246, 0.39)',
        'blue-lg': '0 10px 25px -3px rgba(59, 130, 246, 0.3), 0 4px 6px -2px rgba(59, 130, 246, 0.05)',
        'glow-blue': '0 0 20px rgba(59, 130, 246, 0.5)',
        'cyan': '0 4px 14px 0 rgba(6, 182, 212, 0.39)',
        'cyan-lg': '0 10px 25px -3px rgba(6, 182, 212, 0.3), 0 4px 6px -2px rgba(6, 182, 212, 0.05)',
        'purple': '0 4px 14px 0 rgba(139, 92, 246, 0.39)',
        'purple-lg': '0 10px 25px -3px rgba(139, 92, 246, 0.3), 0 4px 6px -2px rgba(139, 92, 246, 0.05)',
        'glow-purple': '0 0 20px rgba(139, 92, 246, 0.5)',
      },
    },
  },
  plugins: [],
}