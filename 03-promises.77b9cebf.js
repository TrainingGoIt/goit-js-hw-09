!function(){var e,o,n=document.querySelector(".form"),t=(document.querySelector("button"),document.querySelector(".delay")),c=document.querySelector(".step"),u=document.querySelector(".amount");function l(e,o){console.log(e),console.log(o),new Promise((function(n){setInterval((function(){n({position:e,delay:o})}))}),o).then((function(e){var o=e.position,n=e.delay;console.log("✅ Fulfilled promise ".concat(o," in ").concat(n,"ms"))})).catch((function(e){var o=e.position,n=e.delay;console.log("❌ Rejected promise ".concat(o," in ").concat(n,"ms"))}))}n.addEventListener("submit",(function(n){n.preventDefault(),e=Number(t.value),o=Number(u.value),step=Number(c.value);for(var r=0;r<o;r+=1)l(r,e),e+=step}))}();
//# sourceMappingURL=03-promises.77b9cebf.js.map