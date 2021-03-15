import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import minifyHTML from "rollup-plugin-minify-html-literals";

export default {
  input: "src/index.js",
  output: {
    dir: "build",
    format: "es",
  },
  plugins: [
    minifyHTML(),
    terser({
      format: {
        comments: false,
      },
    }),
    resolve(),
  ],
};
