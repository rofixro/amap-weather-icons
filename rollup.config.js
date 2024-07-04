import image from "@rollup/plugin-image";
import terser from "@rollup/plugin-terser";

export default {
  input: "src/index.js",
  output: {
    dir: "output",
    format: "es",
    inlineDynamicImports: true,
  },
  plugins: [image(), terser()],
};
