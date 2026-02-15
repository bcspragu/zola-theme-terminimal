import * as AsciinemaPlayer from "asciinema-player";

document.querySelectorAll("[data-cast-src]").forEach((el) => {
  const src = el.dataset.castSrc;
  const opts = {};
  if (el.dataset.cols) opts.cols = parseInt(el.dataset.cols);
  if (el.dataset.rows) opts.rows = parseInt(el.dataset.rows);
  if (el.dataset.autoplay) opts.autoPlay = el.dataset.autoplay === "true";
  if (el.dataset.loop) opts.loop = el.dataset.loop === "true";
  if (el.dataset.speed) opts.speed = parseFloat(el.dataset.speed);
  if (el.dataset.theme) opts.theme = el.dataset.theme;
  if (el.dataset.poster) opts.poster = el.dataset.poster;
  if (el.dataset.idleTimeLimit)
    opts.idleTimeLimit = parseFloat(el.dataset.idleTimeLimit);
  AsciinemaPlayer.create(src, el, opts);
});
