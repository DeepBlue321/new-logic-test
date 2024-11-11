module.exports = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        lg: '8px',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontSize: {
        lg: '20px',
      },
      spacing: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        '2xl': '24px',
        '4xl': '32px',
        '6xl': '48px',
        '8xl': '64px',
      },
      colors: {
        black: '#171717', // Replace with your desired color code

        buttonDefault: '#3B82F6', // Define a custom blue
        buttonFocus: '#3B82F6', // Define a custom blue
        buttonDisabled: '#E5E7EB', // Define a custom blue
        buttonHover: '#2F68C5',
        buttonRed: '#FBE9E9',
        buttonRedText: '#EF4444',

        labelGreen: '#DCFCE7',
        labelGreenText: '#15803D',

        sidebar: {
          // Define a custom blue

          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

/* 
md =3t =12px
lg = 16px
xl = 4t = 16px
2xl = 6t = 24px
4xl = 8t = 32p
8xl = 16t   = 64px
 */
