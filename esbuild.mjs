import * as esbuild from "esbuild";

await esbuild.build({
  entryPoints: ["js/asciinema-init.js"],
  bundle: true,
  minify: true,
  outfile: "static/js/asciinema-player.min.js",
  format: "iife",
});

await esbuild.build({
  entryPoints: ["js/asciinema-player.css"],
  bundle: true,
  minify: true,
  outfile: "static/css/asciinema-player.min.css",
});

console.log("Built asciinema-player JS and CSS");
