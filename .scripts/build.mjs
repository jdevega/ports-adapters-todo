import { build } from "esbuild";
import htmlPlugin from "@chialab/esbuild-plugin-html";

build({
  entryPoints: ["framework/node/app.js"],
  loader: { ".js, .d.ts": "ts" },
  bundle: true,
  outfile: "dist/node/todoapp.cjs",
  platform: "node",
  format: "cjs",
  minify: true,
  watch: {
    onRebuild(error, result) {
      if (error) console.error("NODE app build failed:", error);
      else console.log("NODE app build succeeded");
    },
  },
})
  .then((result) => {
    console.log("watching NODE app ...");
  })
  .catch(() => process.exit(1));

build({
  entryPoints: ["framework/browser/index.html"],
  loader: { ".js, .d.ts": "ts" },
  bundle: true,
  outdir: "dist/browser",
  platform: "browser",
  format: "esm",
  plugins: [htmlPlugin()],
  // minify: true,
  sourcemap: true,
  watch: {
    onRebuild(error, result) {
      if (error) console.error("WEB app build failed:", error);
      else console.log("WEB app build succeeded");
    },
  },
})
  .then((result) => {
    console.log("watching WEB app ...");
  })
  .catch(() => process.exit(1));
