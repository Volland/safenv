import minify from "rollup-plugin-babel-minify";
import sourceMaps from "rollup-plugin-sourcemaps";
import typescript from "rollup-plugin-typescript2";

module.exports = {
  input: "./src/index.ts",
  output: [
    {
      file: "lib/index.js",
      format: "cjs",
      sourcemap: true
    },
    {
      file: "lib/index.es.js",
      format: "es",
      sourcemap: true
    }
  ],
  plugins: [
    typescript({ clean: true }),
    minify({ comments: false, sourceMap: true }),
    sourceMaps()
  ],
  external: ["typesafe-actions", "redux"]
};
