import image from "@rollup/plugin-image";

export default {
  input: "src/index.js",
  output: {
    dir: "output",
    format: "es",
    inlineDynamicImports: true,
  },
  plugins: [image()],
};
