var e=Array.from(document.body.querySelectorAll(".population")).map(function(e){return parseInt(e.textContent.replace(",",""),10)}),t=e.reduce(function(e,t){return e+t}),n=t/e.length,o=document.body.querySelector(".total-population"),r=document.body.querySelector(".average-population");o.innerHTML=t.toLocaleString("en-US"),r.innerHTML=Math.round(n);
//# sourceMappingURL=index.71d70323.js.map
