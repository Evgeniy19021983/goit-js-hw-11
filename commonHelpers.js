import{a as d,S as f,i as n}from"./assets/vendor-668c818d.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const m="https://pixabay.com/api/",p="43290538-553335dd3499f06be9a5135a9";async function y(r){var s;const o={key:p,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await d.get(m,{params:o})).data.hits}catch(a){throw new Error(((s=a.response)==null?void 0:s.statusText)||a.message)}}let l;function g(r){return r.map(({webformatURL:o,largeImageURL:s,tags:a,likes:e,views:t,comments:i,downloads:u})=>`
      <li class="gallery__item">
        <a class="gallery__link" href="${s}">
          <img class="gallery__image" src="${o}" alt="${a}" loading="lazy" />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes:</b> ${e}</p>
          <p class="info-item"><b>Views:</b> ${t}</p>
          <p class="info-item"><b>Comments:</b> ${i}</p>
          <p class="info-item"><b>Downloads:</b> ${u}</p>
        </div>
      </li>
    `).join("")}function h(r){document.querySelector(".gallery").insertAdjacentHTML("beforeend",g(r)),l?l.refresh():l=new f(".gallery a",{captionsData:"alt",captionDelay:250})}function b(){const r=document.querySelector(".gallery");r.innerHTML=""}function L(){document.querySelector(".loader").classList.remove("is-hidden")}function c(){document.querySelector(".loader").classList.add("is-hidden")}const q=document.querySelector(".form");q.addEventListener("submit",S);async function S(r){r.preventDefault(),b();const o=r.currentTarget.elements.searchQuery.value.trim();if(!o){n.error({title:"Error",message:"Please enter a search query",position:"topCenter",timeout:2e3});return}L();try{const s=await y(o);if(s.length===0){n.error({title:"No results",message:"No images found. Please try another query.",position:"topCenter",timeout:2e3}),c();return}h(s)}catch(s){n.error({title:"Error",message:s.message,position:"topCenter",timeout:2e3})}finally{c()}}
//# sourceMappingURL=commonHelpers.js.map
