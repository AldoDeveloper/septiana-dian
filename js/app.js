import { util } from './util.js';
import { like } from './like.js';
import { theme } from './theme.js';
import { audio } from './audio.js';
import { comment } from './comment.js';
import { progress } from './progress.js';
import { pagination } from './pagination.js';

window.util = util;
window.like = like;
window.theme = theme;
window.audio = audio;
window.comment = comment;
window.progress = progress;
window.pagination = pagination;

const urlParams = new URLSearchParams(window.location.search);
const spanType = document.getElementById("type-params");

if(urlParams.get("type") === "b"){
    spanType.innerText = "acara pernikahan anak kami";
}else{
    spanType.innerText = "acara pernikahan kami";
}
