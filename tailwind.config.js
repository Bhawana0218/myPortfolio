/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          cyan: "hsl(var(--accent-cyan))",
          violet: "hsl(var(--accent-violet))",
        },
      },
      borderRadius: {
        lg: "var(--radius-lg)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)",
        pill: "var(--radius-pill)",
      },
      keyframes: {
        rotate: {
          "0%": "rotateX(-20deg) rotateY(0deg) rotateZ(0deg)",
          "5%": "rotateX(-20deg) rotateY(-20deg) rotateZ(0deg)",
          "20%": "rotateX(30deg) rotateY(200deg) rotateZ(0deg)",
          "25%": "rotateX(-60deg) rotateY(150deg) rotateZ(0deg)",
          "60%": "rotateX(-20deg) rotateY(130deg) rotateZ(0deg)",
          "65%": "rotateX(-20deg) rotateY(120deg) rotateZ(0deg)",
          "80%": "rotateX(-20deg) rotateY(375deg) rotateZ(0deg)",
          "85%": "rotateX(-20deg) rotateY(357deg) rotateZ(0deg)",
          "87%": "rotateX(-20deg) rotateY(360deg) rotateZ(0deg)",
          "100%": "rotateX(-20deg) rotateY(360deg) rotateZ(0deg)",
        },
        lid_screen: {
          "0%": {
            transform: "rotateX(0deg)",
            "background-position": "left bottom",
          },
          "5%": {
            transform: "rotateX(50deg)",
            "background-position": "left bottom",
          },
          "20%": {
            transform: "rotateX(-90deg)",
            "background-position": "-150px top",
          },
          "25%": {
            transform: "rotateX(15deg)",
            "background-position": "left bottom",
          },
          "30%": {
            transform: "rotateX(-5deg)",
            "background-position": "right top",
          },
          "38%": {
            transform: "rotateX(5deg)",
            "background-position": "right top",
          },
          "48%": {
            transform: "rotateX(0deg)",
            "background-position": "right top",
          },
          "90%": {
            transform: "rotateX(0deg)",
            "background-position": "right top",
          },
          "100%": {
            transform: "rotateX(0deg)",
            "background-position": "right center",
          },
        },
        lid_macbody: {
          "0%": { transform: "rotateX(-90deg)" },
          "50%": { transform: "rotateX(-90deg)" },
          "100%": { transform: "rotateX(-90deg)" },
        },
        "lid-keyboard-area": {
          "0%": { "background-color": "#dfdfdf" },
          "50%": { "background-color": "#bbb" },
          "100%": { "background-color": "#dfdfdf" },
        },
        "screen-shade": {
          "0%": { "background-position": "-20px 0px" },
          "5%": { "background-position": "-40px 0px" },
          "20%": { "background-position": "200px 0" },
          "50%": { "background-position": "-200px 0" },
          "80%": { "background-position": "0px 0px" },
          "85%": { "background-position": "-30px 0" },
          "90%": { "background-position": "-20px 0" },
          "100%": { "background-position": "-20px 0px" },
        },
        keys: {
          "0%": { "box-shadow": "0 -2px 0 #222" },
          "5%": { "box-shadow": "1px -1px 0 #222" },
          "20%": { "box-shadow": "-1px 1px 0 #222" },
          "25%": { "box-shadow": "-1px 1px 0 #222" },
          "60%": { "box-shadow": "-1px 1px 0 #222" },
          "80%": { "box-shadow": "0 -2px 0 #222" },
          "85%": { "box-shadow": "0 -2px 0 #222" },
          "87%": { "box-shadow": "0 -2px 0 #222" },
          "100%": { "box-shadow": "0 -2px 0 #222" },
        },
        "macbook-shadow-animation": {
          "0%": {
            transform: "rotateX(80deg) rotateY(0deg) rotateZ(0deg)",
            "box-shadow": "0 0 60px 40px rgba(0,0,0,0.3)",
          },
          "5%": {
            transform: "rotateX(80deg) rotateY(10deg) rotateZ(0deg)",
            "box-shadow": "0 0 60px 40px rgba(0,0,0,0.3)",
          },
          "20%": {
            transform: "rotateX(30deg) rotateY(-20deg) rotateZ(-20deg)",
            "box-shadow": "0 0 50px 30px rgba(0,0,0,0.3)",
          },
          "25%": {
            transform: "rotateX(80deg) rotateY(-20deg) rotateZ(50deg)",
            "box-shadow": "0 0 35px 15px rgba(0,0,0,0.1)",
          },
          "60%": {
            transform: "rotateX(80deg) rotateY(0deg) rotateZ(-50deg) translateX(30px)",
            "box-shadow": "0 0 60px 40px rgba(0,0,0,0.3)",
          },
          "100%": {
            transform: "rotateX(80deg) rotateY(0deg) rotateZ(0deg)",
            "box-shadow": "0 0 60px 40px rgba(0,0,0,0.3)",
          },
        },
      },
      animation: {
        rotate: "rotate 20s linear infinite",
        "lid-screen": "lid-screen 1s ease-in-out infinite",
        "lid-macbody": "lid-macbody 1s ease-in-out infinite",
        "lid-keyboard-area": "lid-keyboard-area 1s ease-in-out infinite",
        "screen-shade": "screen-shade 2s ease-in-out infinite",
        keys: "keys 2s ease-in-out infinite",
        "macbook-shadow-animation": "macbook-shadow-animation 20s linear infinite",
      },
    },
  },
  plugins: [],
};