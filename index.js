import{a as n,S as c,i as d}from"./assets/vendor-MgecxatS.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function u(l){return n.get("https://pixabay.com/api/",{params:{key:"53361036-d6c3e8b24991f3de089666c85",q:l,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(a=>a.data)}function p(l){const a=l.map(s=>`<li class="gallery-item">
            <a href="${s.largeImageURL}">
            <img class="gallery-image" src="${s.webformatURL}" alt="${s.tags}">
            </a>
            <div class="gallery-desc-box">
                <p class="gallery-desc-title">Likes
                    <span class="gallery-desc">${s.likes}</span></p>
                <p class="gallery-desc-title">Views
                    <span class="gallery-desc">${s.views}</span></p>
                <p class="gallery-desc-title">Comments
                    <span class="gallery-desc">${s.comments}</span></p>
                <p class="gallery-desc-title">Downloads
                    <span class="gallery-desc">${s.downloads}</span></p>
            </div>
        </li>`).join("");o.galleryList.innerHTML=a;const r=new c(".gallery-item a");r.options.captionsData="alt",r.refresh()}function f(){o.galleryList.innerHTML=""}function y(){o.loader.classList.remove("hidden")}function m(){o.loader.classList.add("hidden")}const o={form:document.querySelector(".form"),galleryList:document.querySelector(".gallery"),loader:document.querySelector(".loader")};o.form.addEventListener("submit",l=>{l.preventDefault();const a=l.target.elements.search.value.trim();f(),y(),u(a).then(r=>(r.hits.length===0&&d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),r.hits)).then(r=>{p(r)}).catch(r=>console.log(r)).finally(()=>m()),o.form.reset()});
//# sourceMappingURL=index.js.map
