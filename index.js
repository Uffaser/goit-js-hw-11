import{a as n,i as c,S as d}from"./assets/vendor-B3IAfeER.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function u(a){return n.get("https://pixabay.com/api/",{params:{key:"53361036-d6c3e8b24991f3de089666c85",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}})}function f(a){return a.map(t=>`<li class="gallery-item">
            <a href="${t.webformatURL}">
            <img class="gallery-image" src="${t.largeImageURL}" alt="${t.tags}">
            </a>
            <div class="gallery-desc-box">
                <p class="gallery-desc-title">Likes
                    <span class="gallery-desc">${t.likes}</span></p>
                <p class="gallery-desc-title">Views
                    <span class="gallery-desc">${t.views}</span></p>
                <p class="gallery-desc-title">Comments
                    <span class="gallery-desc">${t.comments}</span></p>
                <p class="gallery-desc-title">Downloads
                    <span class="gallery-desc">${t.downloads}</span></p>
            </div>
        </li>`).join("")}function p(){l.galleryList.innerHTML=""}function y(){l.loader.classList.remove("visible")}function g(){l.loader.classList.add("visible")}const l={form:document.querySelector(".form"),galleryList:document.querySelector(".gallery"),loader:document.querySelector(".loader")};l.form.addEventListener("submit",a=>{a.preventDefault();const t=a.target.elements.search.value;p(),y(),u(t).then(s=>(s.data.hits.length===0&&c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),s.data.hits)).then(s=>{l.galleryList.innerHTML=f(s);const o=new d(".gallery-item a");o.options.captionsData="alt",o.refresh()}).catch(s=>console.log(s)).finally(()=>g()),l.form.reset()});
//# sourceMappingURL=index.js.map
