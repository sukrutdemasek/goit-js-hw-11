import{S as c,i as n}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function u(s){const o=`https://pixabay.com/api/?key=45177339-1086f924218083686626b70b0&q=${s}&image_type=photo&orientation=horizontal&safesearch=true;`;return fetch(o).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).catch(e=>{iziToast.error({position:"topRight",message:`${e}`})})}function m(s){let r=document.querySelector(".search-results"),i=new c(".search-results a"),o=s.hits.map(e=>`<div class="image-holder">
          <a href="${e.largeImageURL}">
            <img class="image" src="${e.webformatURL}" alt="${e.tags}">
          </a>
          <ul class="attributes-list">
            
            <li class="text-wrapper">
              <h4 class="image-likes">Likes</h4>
              <p class="image-number">${e.likes}</p>
            </li>
            <li class="text-wrapper">
              <h4 class="image-views">Views</h4>
              <p class="image-number">${e.views}</p>
            </li>
            <li class="text-wrapper">
              <h4 class="image-comments">Comments</h4>
              <p class="image-number">${e.comments}</p>
            </li>
            <li class="text-wrapper">
              <h4 class="image-downloads">Downloads</h4>
              <p class="image-number">${e.downloads}</p>
            </li>
            
          </ul>
        </div>`).join("");r.insertAdjacentHTML("afterbegin",o),i.refresh(),console.log("success")}function d(){let s=document.querySelector(".search-results");s.innerHTML=""}document.querySelector(".submit-button");const p=document.querySelector(".search-input"),f=document.querySelector(".input-form"),a=document.querySelector(".loader");f.addEventListener("submit",g);function g(s){d(),s.preventDefault(),a.classList.remove("hidden");let r=p.value.trim();u(`${r}`).then(i=>{if(i.total==0){n.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),a.classList.add("hidden");return}else if(r===""){n.error({position:"topRight",message:"Please fill the input"}),a.classList.add("hidden");return}else m(i);a.classList.add("hidden")})}
//# sourceMappingURL=commonHelpers.js.map
