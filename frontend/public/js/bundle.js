(()=>{"use strict";const t=new class{init(t,e){console.log(t.prototype,e),document.getElementsByTagName("script");const n=document.createElement("script");n.type="text/javascript";const o=t.toString().split(";");console.log(o),n.text=`${t}\n${e}()`,document.body.appendChild(n),window.onload=function(){}}use(t){document.addEventListener("DOMContentLoaded",(()=>{}))}view(t){document.querySelector("#app").innerHTML=t}};class e extends Error{constructor(t){super(t);const e=`\n        <h3 style="color: red;">TypeError: ${this.message}</h3>\n        <p></p>\n        <div class="error-con" style="background-color: #c7e2f1; border: 2px solid #38b6ff; padding: 8px 12px;">\n                <div>${this.stack}</div>\n        </div>`;throw document.getElementById("app").remove(),document.getElementById("error").innerHTML=e,new Error(t)}}const n=e;class o{async useRoute(e,o){if(0===e.length)return new n("routes cannot be empty"),!1;let r=e.map((t=>({route:t,isMatch:location.pathname===t.path}))).find((t=>t.isMatch));r||(r={route:e.find((t=>"/error"===t.path)),isMatch:!0});const i=new r.route.view;return t.view(await i.render()),e}getRoute(t){const e=document.referrer,n=location.href;return t(n,e,Function),{to:n,from:e}}createNavigation(t){window.addEventListener("click",(e=>{e.preventDefault(),"a"===e.target.localName&&(history.pushState(null,null,e.target.href),o.prototype.useRoute(t))}))}}class r extends HTMLElement{constructor(){super();const t=this.getAttribute("to"),e=document.createElement("a");e.href=t,e.innerHTML=this.innerHTML,this.getAttribute("ref")&&(e.id=this.getAttribute("ref")),this.getAttribute("id")&&(e.id=this.getAttribute("id")),this.getAttribute("download")&&(e.download=this.getAttribute("download")),this.parentNode?.insertBefore(e,this),Array.prototype.slice.call(this.children),""===this.innerHTML&&(e.innerText=this.getAttribute("name")),this.remove()}}window.customElements.define("quick-router-link",r),t.use(r);class i{constructor(t){}setTitle(t){document.title=t}async render(){return""}method(t){console.log(t),window.onload=function(){}}}const c=0;t.init('\nfunction increment () {\n    const one = document.getElementById("one");\n    console.log(one);\n}\n',"increment");const u=new o,s=[{path:"/",view:class extends i{constructor(){super(),this.setTitle("Home")}async render(){return`<div>\n            <h1>Home Page</h1>\n            <quick-router-link to="/" name="Home">Home</quick-router-link>\n            <quick-router-link to="/about" name="About">About</quick-router-link>\n            <quick-router-link  to="/contact" download="run.js">Contact</quick-router-link>\n            <h4 style="padding">Counter <span>${c}</span></h4>\n            <button id="one">clickme</button>\n        </div>\n            `}}},{path:"/about",view:class extends i{constructor(){super(),this.setTitle("About")}async render(){return' <div>\n                <h1>About Page</h1>\n                <quick-router-link to="/" name="Home">Home</quick-router-link>\n                <quick-router-link to="/about" name="About">About</quick-router-link>\n                <quick-router-link to="/contact">Contact</quick-router-link>\n            </div>\n            '}}},{path:"/contact",view:class extends i{constructor(){super(),this.setTitle("Contact")}async render(){return' <div>\n                <h1>Contact Page</h1>\n                <quick-router-link to="/" name="Home">Home</quick-router-link>\n                <quick-router-link to="/about" name="About">About</quick-router-link>\n                <quick-router-link to="/contact">Contact</quick-router-link>\n            </div>\n            '}}},{path:"/error",view:()=>console.log("404 View")}];t.use(u.useRoute(s)),u.createNavigation(s),function(t){window.addEventListener("popstate",(()=>{o.prototype.useRoute(t)}))}(s)})();