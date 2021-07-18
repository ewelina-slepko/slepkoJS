export default {
  input: "./src/main.js",

  watch: {
    include: "./src/**",
    clearScreen: false,
  },

  output: {
    file: "./build/index.js",
    format: "es",
  },
};
