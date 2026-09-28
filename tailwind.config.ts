import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        terracotta: {
          DEFAULT: "#C56A3C",
          hover: "#A8542B",
          active: "#8C421F",
          light: "#F7ECE4",
          alpha: "rgba(197, 106, 60, 0.12)",
        },
        cream: {
          50: "#FCFAF7",
          100: "#FAF6F0",
          200: "#F3E9D8",
          300: "#ECE0CD",
        },
        ink: {
          DEFAULT: "#2D1F17",
          body: "#3B2E27",
          muted: "#736155",
          light: "#9B897D",
        },
        clay: {
          border: "#E6D8C8",
          subtle: "#EFE6DA",
          dark: "#CBB9A5",
        }
      },
      fontFamily: {
        serif: ["var(--font-dm-serif)", "Georgia", "serif"],
        sans: ["var(--font-plus-jakarta)", "-apple-system", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      typography: ({ theme }: { theme: (path: string) => any }) => ({
        terracotta: {
          css: {
            "--tw-prose-body": "#3B2E27",
            "--tw-prose-headings": "#2D1F17",
            "--tw-prose-lead": "#736155",
            "--tw-prose-links": "#C56A3C",
            "--tw-prose-bold": "#2D1F17",
            "--tw-prose-counters": "#C56A3C",
            "--tw-prose-bullets": "#C56A3C",
            "--tw-prose-hr": "#E6D8C8",
            "--tw-prose-quotes": "#2D1F17",
            "--tw-prose-quote-borders": "#C56A3C",
            "--tw-prose-captions": "#736155",
            "--tw-prose-code": "#2D1F17",
            "--tw-prose-pre-code": "#F4EBE3",
            "--tw-prose-pre-bg": "#261D18",
            "--tw-prose-th-borders": "#E6D8C8",
            "--tw-prose-td-borders": "#EFE6DA",
            h2: {
              fontFamily: 'var(--font-dm-serif), Georgia, serif',
              fontSize: '1.875rem',
              fontWeight: '400',
              lineHeight: '1.25',
              marginTop: '2.5rem',
              marginBottom: '1rem',
            },
            h3: {
              fontFamily: 'var(--font-dm-serif), Georgia, serif',
              fontSize: '1.4rem',
              fontWeight: '400',
              lineHeight: '1.3',
              marginTop: '1.75rem',
              marginBottom: '0.75rem',
            },
            p: {
              lineHeight: '1.75',
              marginBottom: '1.25rem',
            },
            blockquote: {
              backgroundColor: '#F3E9D8',
              borderLeftColor: '#C56A3C',
              borderLeftWidth: '4px',
              padding: '1rem 1.25rem',
              fontStyle: 'normal',
              borderRadius: '0 0.5rem 0.5rem 0',
            },
            a: {
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
              '&:hover': {
                color: '#A8542B',
              },
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};
export default config;
