import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#050505",
        graphite: "#0B0B0B",
        carbon: "#111111",
        tungsten: "#171717",
        steel: "#202020",
        ivory: "#FFF4D6",
        ember: "#FFE6A8",
        ash: "#A3A3A3",
        vapor: "#E5E5E5"
      },
      fontFamily: {
        sans: ["var(--font-display)", "Aptos", "Segoe UI", "sans-serif"],
        mono: ["var(--font-mono)", "Cascadia Code", "monospace"]
      },
      boxShadow: {
        neural: "0 0 42px rgba(255, 245, 210, 0.18)",
        insetline: "inset 0 1px 0 rgba(255,255,255,0.08)"
      },
      backgroundImage: {
        "metal-line":
          "linear-gradient(135deg, rgba(255,255,255,0.14), rgba(255,255,255,0.02) 44%, rgba(255,244,214,0.12))"
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" }
        },
        scan: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "18%": { opacity: "0.55" },
          "100%": { transform: "translateY(100%)", opacity: "0" }
        },
        breathe: {
          "0%, 100%": {
            opacity: "0.52",
            filter: "drop-shadow(0 0 12px rgba(255,245,210,0.22))"
          },
          "50%": {
            opacity: "1",
            filter: "drop-shadow(0 0 24px rgba(255,245,210,0.46))"
          }
        },
        float: {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-12px,0)" }
        },
        dashflow: {
          "0%": { strokeDashoffset: "120" },
          "100%": { strokeDashoffset: "0" }
        },
        pulseRing: {
          "0%": { transform: "scale(0.94)", opacity: "0.28" },
          "70%": { transform: "scale(1.08)", opacity: "0" },
          "100%": { transform: "scale(1.08)", opacity: "0" }
        }
      },
      animation: {
        shimmer: "shimmer 5.5s linear infinite",
        scan: "scan 6s ease-in-out infinite",
        breathe: "breathe 4.8s ease-in-out infinite",
        float: "float 8s ease-in-out infinite",
        dashflow: "dashflow 8s linear infinite",
        pulseRing: "pulseRing 2.8s ease-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
