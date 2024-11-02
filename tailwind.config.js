import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./components/**/*", "./pages/**/*", "./layouts/**/*"],
  theme: {
    extend: {
      borderColor: {
        base: colors.gray[200],
      },

      colors: {
        primary: {
          DEFAULT: "rgba(24, 28, 20, 1)",
          light: "rgba(24, 28, 20, .8)",
        },
        secondary: {
          DEFAULT: "rgba(60, 61, 55, 1)",
          light: "rgba(60, 61, 55, .8)",
        },
        alternate: {
          DEFAULT: "rgba(105, 117, 101, 1)",
          light: "rgba(105, 117, 101, .8)",
        },
        light: "rgba(236, 223, 204, 1)",
      },
    },
  },
};
