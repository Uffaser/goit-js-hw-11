import{a as d,S as u,i as n}from"./assets/vendor-MgecxatS.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function e(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(r){if(r.ep)return;r.ep=!0;const t=e(r);fetch(r.href,t)}})();function p(a){return d.get("https://pixabay.com/api/",{params:{key:"53361036-d6c3e8b24991f3de089666c85",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>s.data)}const c=new u(".gallery-item a");function f(a){const s=a.map(e=>`<li class="gallery-item">
            <a href="${e.largeImageURL}">
            <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}">
            </a>
            <div class="gallery-desc-box">
                <p class="gallery-desc-title">Likes
                    <span class="gallery-desc">${e.likes}</span></p>
                <p class="gallery-desc-title">Views
                    <span class="gallery-desc">${e.views}</span></p>
                <p class="gallery-desc-title">Comments
                    <span class="gallery-desc">${e.comments}</span></p>
                <p class="gallery-desc-title">Downloads
                    <span class="gallery-desc">${e.downloads}</span></p>
            </div>
        </li>`).join("");o.galleryList.innerHTML=s,c.options.captionsData="alt",c.refresh()}function y(){o.galleryList.innerHTML=""}function m(){o.loader.classList.remove("hidden")}function g(){o.loader.classList.add("hidden")}const o={form:document.querySelector(".form"),galleryList:document.querySelector(".gallery"),loader:document.querySelector(".loader")};o.form.addEventListener("submit",a=>{a.preventDefault();const s=a.target.elements.search.value.trim();if(!s){n.error({message:"The input field is empty. Please enter your query !",position:"topRight"});return}y(),m(),p(s).then(e=>(e.hits.length===0&&n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),e.hits)).then(e=>{f(e)}).catch(e=>console.log(e)).finally(()=>g()),o.form.reset()});
//# sourceMappingURL=index.js.map
