import { build } from "esbuild";
import htmlPlugin from "@chialab/esbuild-plugin-html";

build({
  entryPoints: ["framework/node/app.js", "framework/server/index.js"],
  loader: { ".js, .d.ts": "ts" },
  bundle: true,
  outdir: "dist/node",
  platform: "node",
  format: "cjs",
  outExtension: { ".js": ".cjs" },
  minify: true,
  watch: {
    onRebuild(error, result) {
      if (error) console.error("NODE apps build failed:", error);
      else console.log("NODE apps build succeeded");
    },
  },
})
  .then((result) => {
    console.log("watching NODE apps ...");
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
