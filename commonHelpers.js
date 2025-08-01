import{S as d,i as n}from"./assets/vendor-0fc460d7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const f="https://pixabay.com/api/",m="43290538-553335dd3499f06be9a5135a9";async function p(r){const s=new URLSearchParams({key:m,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}),o=await fetch(`${f}?${s}`);if(!o.ok)throw new Error(`Error: ${o.status}`);return(await o.json()).hits}let l;function y(r){return r.map(({webformatURL:s,largeImageURL:o,tags:a,likes:e,views:t,comments:i,downloads:u})=>`
      <li class="gallery__item">
        <a class="gallery__link" href="${o}">
          <img class="gallery__image" src="${s}" alt="${a}" loading="lazy" />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes:</b> ${e}</p>
          <p class="info-item"><b>Views:</b> ${t}</p>
          <p class="info-item"><b>Comments:</b> ${i}</p>
          <p class="info-item"><b>Downloads:</b> ${u}</p>
        </div>
      </li>
    `).join("")}function h(r){document.querySelector(".gallery").insertAdjacentHTML("beforeend",y(r)),l?l.refresh():l=new d(".gallery a",{captionsData:"alt",captionDelay:250})}function g(){const r=document.querySelector(".gallery");r.innerHTML=""}function b(){document.querySelector(".loader").classList.remove("is-hidden")}function c(){document.querySelector(".loader").classList.add("is-hidden")}const L=document.querySelector("#search-form");L.addEventListener("submit",w);async function w(r){r.preventDefault(),g();const s=r.currentTarget.elements.searchQuery.value.trim();if(!s){n.error({title:"Error",message:"Please enter a search query",position:"topCenter",timeout:2e3});return}b();try{const o=await p(s);if(o.length===0){n.error({title:"No results",message:"No images found. Please try another query.",position:"topCenter",timeout:2e3}),c();return}h(o)}catch(o){n.error({title:"Error",message:o.message,position:"topCenter",timeout:2e3})}finally{c()}}
//# sourceMappingURL=commonHelpers.js.map
