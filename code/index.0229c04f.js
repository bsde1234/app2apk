const xn=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerpolicy&&(n.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?n.credentials="include":i.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(i){if(i.ep)return;i.ep=!0;const n=r(i);fetch(i.href,n)}};xn();const kn="modulepreload",Jo={},$n="/",qr=function(t,r){return!r||r.length===0?t():Promise.all(r.map(o=>{if(o=`${$n}${o}`,o in Jo)return;Jo[o]=!0;const i=o.endsWith(".css"),n=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${n}`))return;const s=document.createElement("link");if(s.rel=i?"stylesheet":kn,i||(s.as="script",s.crossOrigin=""),s.href=o,document.head.appendChild(s),i)return new Promise((l,a)=>{s.addEventListener("load",l),s.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pr=window,Ro=pr.ShadowRoot&&(pr.ShadyCSS===void 0||pr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Mo=Symbol(),Xo=new WeakMap;class as{constructor(t,r,o){if(this._$cssResult$=!0,o!==Mo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Ro&&t===void 0){const o=r!==void 0&&r.length===1;o&&(t=Xo.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&Xo.set(r,t))}return t}toString(){return this.cssText}}const it=e=>new as(typeof e=="string"?e:e+"",void 0,Mo),_=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((o,i,n)=>o+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[n+1],e[0]);return new as(r,e,Mo)},Cn=(e,t)=>{Ro?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const o=document.createElement("style"),i=pr.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=r.cssText,e.appendChild(o)})},Yo=Ro?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const o of t.cssRules)r+=o.cssText;return it(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Br;const yr=window,Qo=yr.trustedTypes,Sn=Qo?Qo.emptyScript:"",Zo=yr.reactiveElementPolyfillSupport,ho={toAttribute(e,t){switch(t){case Boolean:e=e?Sn:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},ls=(e,t)=>t!==e&&(t==t||e==e),Gr={attribute:!0,type:String,converter:ho,reflect:!1,hasChanged:ls};class ct extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var r;(r=this.h)!==null&&r!==void 0||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,o)=>{const i=this._$Ep(o,r);i!==void 0&&(this._$Ev.set(i,o),t.push(i))}),t}static createProperty(t,r=Gr){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const o=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,o,r);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,r,o){return{get(){return this[r]},set(i){const n=this[t];this[r]=i,this.requestUpdate(t,n,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Gr}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,o=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const i of o)this.createProperty(i,r[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const i of o)r.unshift(Yo(i))}else t!==void 0&&r.push(Yo(t));return r}static _$Ep(t,r){const o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,o;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((o=t.hostConnected)===null||o===void 0||o.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Cn(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var o;return(o=r.hostConnected)===null||o===void 0?void 0:o.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var o;return(o=r.hostDisconnected)===null||o===void 0?void 0:o.call(r)})}attributeChangedCallback(t,r,o){this._$AK(t,o)}_$EO(t,r,o=Gr){var i;const n=this.constructor._$Ep(t,o);if(n!==void 0&&o.reflect===!0){const s=(((i=o.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?o.converter:ho).toAttribute(r,o.type);this._$El=t,s==null?this.removeAttribute(n):this.setAttribute(n,s),this._$El=null}}_$AK(t,r){var o;const i=this.constructor,n=i._$Ev.get(t);if(n!==void 0&&this._$El!==n){const s=i.getPropertyOptions(n),l=typeof s.converter=="function"?{fromAttribute:s.converter}:((o=s.converter)===null||o===void 0?void 0:o.fromAttribute)!==void 0?s.converter:ho;this._$El=n,this[n]=l.fromAttribute(r,s.type),this._$El=null}}requestUpdate(t,r,o){let i=!0;t!==void 0&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||ls)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),o.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,o))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,n)=>this[n]=i),this._$Ei=void 0);let r=!1;const o=this._$AL;try{r=this.shouldUpdate(o),r?(this.willUpdate(o),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var n;return(n=i.hostUpdate)===null||n===void 0?void 0:n.call(i)}),this.update(o)):this._$Ek()}catch(i){throw r=!1,this._$Ek(),i}r&&this._$AE(o)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(o=>{var i;return(i=o.hostUpdated)===null||i===void 0?void 0:i.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,o)=>this._$EO(o,this[o],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}ct.finalized=!0,ct.elementProperties=new Map,ct.elementStyles=[],ct.shadowRootOptions={mode:"open"},Zo==null||Zo({ReactiveElement:ct}),((Br=yr.reactiveElementVersions)!==null&&Br!==void 0?Br:yr.reactiveElementVersions=[]).push("1.4.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Kr;const wr=window,mt=wr.trustedTypes,ei=mt?mt.createPolicy("lit-html",{createHTML:e=>e}):void 0,Fe=`lit$${(Math.random()+"").slice(9)}$`,cs="?"+Fe,En=`<${cs}>`,gt=document,qt=(e="")=>gt.createComment(e),Bt=e=>e===null||typeof e!="object"&&typeof e!="function",ds=Array.isArray,An=e=>ds(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Rt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ti=/-->/g,ri=/>/g,Ge=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),oi=/'/g,ii=/"/g,us=/^(?:script|style|textarea|title)$/i,Pn=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),N=Pn(1),Qe=Symbol.for("lit-noChange"),J=Symbol.for("lit-nothing"),si=new WeakMap,Tn=(e,t,r)=>{var o,i;const n=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:t;let s=n._$litPart$;if(s===void 0){const l=(i=r==null?void 0:r.renderBefore)!==null&&i!==void 0?i:null;n._$litPart$=s=new tr(t.insertBefore(qt(),l),l,void 0,r!=null?r:{})}return s._$AI(e),s},pt=gt.createTreeWalker(gt,129,null,!1),zn=(e,t)=>{const r=e.length-1,o=[];let i,n=t===2?"<svg>":"",s=Rt;for(let a=0;a<r;a++){const c=e[a];let d,u,p=-1,g=0;for(;g<c.length&&(s.lastIndex=g,u=s.exec(c),u!==null);)g=s.lastIndex,s===Rt?u[1]==="!--"?s=ti:u[1]!==void 0?s=ri:u[2]!==void 0?(us.test(u[2])&&(i=RegExp("</"+u[2],"g")),s=Ge):u[3]!==void 0&&(s=Ge):s===Ge?u[0]===">"?(s=i!=null?i:Rt,p=-1):u[1]===void 0?p=-2:(p=s.lastIndex-u[2].length,d=u[1],s=u[3]===void 0?Ge:u[3]==='"'?ii:oi):s===ii||s===oi?s=Ge:s===ti||s===ri?s=Rt:(s=Ge,i=void 0);const y=s===Ge&&e[a+1].startsWith("/>")?" ":"";n+=s===Rt?c+En:p>=0?(o.push(d),c.slice(0,p)+"$lit$"+c.slice(p)+Fe+y):c+Fe+(p===-2?(o.push(void 0),a):y)}const l=n+(e[r]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[ei!==void 0?ei.createHTML(l):l,o]};class Gt{constructor({strings:t,_$litType$:r},o){let i;this.parts=[];let n=0,s=0;const l=t.length-1,a=this.parts,[c,d]=zn(t,r);if(this.el=Gt.createElement(c,o),pt.currentNode=this.el.content,r===2){const u=this.el.content,p=u.firstChild;p.remove(),u.append(...p.childNodes)}for(;(i=pt.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes()){const u=[];for(const p of i.getAttributeNames())if(p.endsWith("$lit$")||p.startsWith(Fe)){const g=d[s++];if(u.push(p),g!==void 0){const y=i.getAttribute(g.toLowerCase()+"$lit$").split(Fe),f=/([.?@])?(.*)/.exec(g);a.push({type:1,index:n,name:f[2],strings:y,ctor:f[1]==="."?Un:f[1]==="?"?Rn:f[1]==="@"?Mn:Mr})}else a.push({type:6,index:n})}for(const p of u)i.removeAttribute(p)}if(us.test(i.tagName)){const u=i.textContent.split(Fe),p=u.length-1;if(p>0){i.textContent=mt?mt.emptyScript:"";for(let g=0;g<p;g++)i.append(u[g],qt()),pt.nextNode(),a.push({type:2,index:++n});i.append(u[p],qt())}}}else if(i.nodeType===8)if(i.data===cs)a.push({type:2,index:n});else{let u=-1;for(;(u=i.data.indexOf(Fe,u+1))!==-1;)a.push({type:7,index:n}),u+=Fe.length-1}n++}}static createElement(t,r){const o=gt.createElement("template");return o.innerHTML=t,o}}function bt(e,t,r=e,o){var i,n,s,l;if(t===Qe)return t;let a=o!==void 0?(i=r._$Cl)===null||i===void 0?void 0:i[o]:r._$Cu;const c=Bt(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==c&&((n=a==null?void 0:a._$AO)===null||n===void 0||n.call(a,!1),c===void 0?a=void 0:(a=new c(e),a._$AT(e,r,o)),o!==void 0?((s=(l=r)._$Cl)!==null&&s!==void 0?s:l._$Cl=[])[o]=a:r._$Cu=a),a!==void 0&&(t=bt(e,a._$AS(e,t.values),a,o)),t}class Ln{constructor(t,r){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var r;const{el:{content:o},parts:i}=this._$AD,n=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:gt).importNode(o,!0);pt.currentNode=n;let s=pt.nextNode(),l=0,a=0,c=i[0];for(;c!==void 0;){if(l===c.index){let d;c.type===2?d=new tr(s,s.nextSibling,this,t):c.type===1?d=new c.ctor(s,c.name,c.strings,this,t):c.type===6&&(d=new Dn(s,this,t)),this.v.push(d),c=i[++a]}l!==(c==null?void 0:c.index)&&(s=pt.nextNode(),l++)}return n}m(t){let r=0;for(const o of this.v)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,r),r+=o.strings.length-2):o._$AI(t[r])),r++}}class tr{constructor(t,r,o,i){var n;this.type=2,this._$AH=J,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=o,this.options=i,this._$C_=(n=i==null?void 0:i.isConnected)===null||n===void 0||n}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$C_}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=bt(this,t,r),Bt(t)?t===J||t==null||t===""?(this._$AH!==J&&this._$AR(),this._$AH=J):t!==this._$AH&&t!==Qe&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):An(t)?this.O(t):this.$(t)}S(t,r=this._$AB){return this._$AA.parentNode.insertBefore(t,r)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}$(t){this._$AH!==J&&Bt(this._$AH)?this._$AA.nextSibling.data=t:this.k(gt.createTextNode(t)),this._$AH=t}T(t){var r;const{values:o,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=Gt.createElement(i.h,this.options)),i);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===n)this._$AH.m(o);else{const s=new Ln(n,this),l=s.p(this.options);s.m(o),this.k(l),this._$AH=s}}_$AC(t){let r=si.get(t.strings);return r===void 0&&si.set(t.strings,r=new Gt(t)),r}O(t){ds(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let o,i=0;for(const n of t)i===r.length?r.push(o=new tr(this.S(qt()),this.S(qt()),this,this.options)):o=r[i],o._$AI(n),i++;i<r.length&&(this._$AR(o&&o._$AB.nextSibling,i),r.length=i)}_$AR(t=this._$AA.nextSibling,r){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,r);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var r;this._$AM===void 0&&(this._$C_=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class Mr{constructor(t,r,o,i,n){this.type=1,this._$AH=J,this._$AN=void 0,this.element=t,this.name=r,this._$AM=i,this.options=n,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=J}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,o,i){const n=this.strings;let s=!1;if(n===void 0)t=bt(this,t,r,0),s=!Bt(t)||t!==this._$AH&&t!==Qe,s&&(this._$AH=t);else{const l=t;let a,c;for(t=n[0],a=0;a<n.length-1;a++)c=bt(this,l[o+a],r,a),c===Qe&&(c=this._$AH[a]),s||(s=!Bt(c)||c!==this._$AH[a]),c===J?t=J:t!==J&&(t+=(c!=null?c:"")+n[a+1]),this._$AH[a]=c}s&&!i&&this.P(t)}P(t){t===J?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class Un extends Mr{constructor(){super(...arguments),this.type=3}P(t){this.element[this.name]=t===J?void 0:t}}const On=mt?mt.emptyScript:"";class Rn extends Mr{constructor(){super(...arguments),this.type=4}P(t){t&&t!==J?this.element.setAttribute(this.name,On):this.element.removeAttribute(this.name)}}class Mn extends Mr{constructor(t,r,o,i,n){super(t,r,o,i,n),this.type=5}_$AI(t,r=this){var o;if((t=(o=bt(this,t,r,0))!==null&&o!==void 0?o:J)===Qe)return;const i=this._$AH,n=t===J&&i!==J||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==J&&(i===J||n);n&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,o;typeof this._$AH=="function"?this._$AH.call((o=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&o!==void 0?o:this.element,t):this._$AH.handleEvent(t)}}class Dn{constructor(t,r,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){bt(this,t)}}const ni=wr.litHtmlPolyfillSupport;ni==null||ni(Gt,tr),((Kr=wr.litHtmlVersions)!==null&&Kr!==void 0?Kr:wr.litHtmlVersions=[]).push("2.3.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Jr,Xr;class X extends ct{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,r;const o=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=o.firstChild),o}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=Tn(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return Qe}}X.finalized=!0,X._$litElement$=!0,(Jr=globalThis.litElementHydrateSupport)===null||Jr===void 0||Jr.call(globalThis,{LitElement:X});const ai=globalThis.litElementPolyfillSupport;ai==null||ai({LitElement:X});((Xr=globalThis.litElementVersions)!==null&&Xr!==void 0?Xr:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const se=e=>t=>typeof t=="function"?((r,o)=>(customElements.define(r,o),o))(e,t):((r,o)=>{const{kind:i,elements:n}=o;return{kind:i,elements:n,finisher(s){customElements.define(r,s)}}})(e,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const In=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function G(e){return(t,r)=>r!==void 0?((o,i,n)=>{i.constructor.createProperty(n,o)})(e,t,r):In(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function fe(e){return G({...e,state:!0})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Yr;((Yr=window.HTMLSlotElement)===null||Yr===void 0?void 0:Yr.prototype.assignedElements)!=null;function _r(e){return e=e||[],Array.isArray(e)?e:[e]}function ye(e){return`[Vaadin.Router] ${e}`}function Fn(e){if(typeof e!="object")return String(e);const t=Object.prototype.toString.call(e).match(/ (.*)\]$/)[1];return t==="Object"||t==="Array"?`${t} ${JSON.stringify(e)}`:t}const xr="module",kr="nomodule",po=[xr,kr];function li(e){if(!e.match(/.+\.[m]?js$/))throw new Error(ye(`Unsupported type for bundle "${e}": .js or .mjs expected.`))}function hs(e){if(!e||!ge(e.path))throw new Error(ye('Expected route config to be an object with a "path" string property, or an array of such objects'));const t=e.bundle,r=["component","redirect","bundle"];if(!Ze(e.action)&&!Array.isArray(e.children)&&!Ze(e.children)&&!$r(t)&&!r.some(o=>ge(e[o])))throw new Error(ye(`Expected route config "${e.path}" to include either "${r.join('", "')}" or "action" function but none found.`));if(t)if(ge(t))li(t);else if(po.some(o=>o in t))po.forEach(o=>o in t&&li(t[o]));else throw new Error(ye('Expected route bundle to include either "'+kr+'" or "'+xr+'" keys, or both'));e.redirect&&["bundle","component"].forEach(o=>{o in e&&console.warn(ye(`Route config "${e.path}" has both "redirect" and "${o}" properties, and "redirect" will always override the latter. Did you mean to only use "${o}"?`))})}function ci(e){_r(e).forEach(t=>hs(t))}function di(e,t){let r=document.head.querySelector('script[src="'+e+'"][async]');return r||(r=document.createElement("script"),r.setAttribute("src",e),t===xr?r.setAttribute("type",xr):t===kr&&r.setAttribute(kr,""),r.async=!0),new Promise((o,i)=>{r.onreadystatechange=r.onload=n=>{r.__dynamicImportLoaded=!0,o(n)},r.onerror=n=>{r.parentNode&&r.parentNode.removeChild(r),i(n)},r.parentNode===null?document.head.appendChild(r):r.__dynamicImportLoaded&&o()})}function Nn(e){return ge(e)?di(e):Promise.race(po.filter(t=>t in e).map(t=>di(e[t],t)))}function Vt(e,t){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${e}`,{cancelable:e==="go",detail:t}))}function $r(e){return typeof e=="object"&&!!e}function Ze(e){return typeof e=="function"}function ge(e){return typeof e=="string"}function ps(e){const t=new Error(ye(`Page not found (${e.pathname})`));return t.context=e,t.code=404,t}const ut=new class{};function Vn(e){const t=e.port,r=e.protocol,n=r==="http:"&&t==="80"||r==="https:"&&t==="443"?e.hostname:e.host;return`${r}//${n}`}function ui(e){if(e.defaultPrevented||e.button!==0||e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let t=e.target;const r=e.composedPath?e.composedPath():e.path||[];for(let l=0;l<r.length;l++){const a=r[l];if(a.nodeName&&a.nodeName.toLowerCase()==="a"){t=a;break}}for(;t&&t.nodeName.toLowerCase()!=="a";)t=t.parentNode;if(!t||t.nodeName.toLowerCase()!=="a"||t.target&&t.target.toLowerCase()!=="_self"||t.hasAttribute("download")||t.hasAttribute("router-ignore")||t.pathname===window.location.pathname&&t.hash!==""||(t.origin||Vn(t))!==window.location.origin)return;const{pathname:i,search:n,hash:s}=t;Vt("go",{pathname:i,search:n,hash:s})&&(e.preventDefault(),e&&e.type==="click"&&window.scrollTo(0,0))}const Hn={activate(){window.document.addEventListener("click",ui)},inactivate(){window.document.removeEventListener("click",ui)}},jn=/Trident/.test(navigator.userAgent);jn&&!Ze(window.PopStateEvent)&&(window.PopStateEvent=function(e,t){t=t||{};var r=document.createEvent("Event");return r.initEvent(e,Boolean(t.bubbles),Boolean(t.cancelable)),r.state=t.state||null,r},window.PopStateEvent.prototype=window.Event.prototype);function hi(e){if(e.state==="vaadin-router-ignore")return;const{pathname:t,search:r,hash:o}=window.location;Vt("go",{pathname:t,search:r,hash:o})}const Wn={activate(){window.addEventListener("popstate",hi)},inactivate(){window.removeEventListener("popstate",hi)}};var St=ys,qn=Do,Bn=Xn,Gn=gs,Kn=vs,fs="/",ms="./",Jn=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function Do(e,t){for(var r=[],o=0,i=0,n="",s=t&&t.delimiter||fs,l=t&&t.delimiters||ms,a=!1,c;(c=Jn.exec(e))!==null;){var d=c[0],u=c[1],p=c.index;if(n+=e.slice(i,p),i=p+d.length,u){n+=u[1],a=!0;continue}var g="",y=e[i],f=c[2],b=c[3],v=c[4],w=c[5];if(!a&&n.length){var x=n.length-1;l.indexOf(n[x])>-1&&(g=n[x],n=n.slice(0,x))}n&&(r.push(n),n="",a=!1);var z=g!==""&&y!==void 0&&y!==g,ee=w==="+"||w==="*",Q=w==="?"||w==="*",ue=g||s,he=b||v;r.push({name:f||o++,prefix:g,delimiter:ue,optional:Q,repeat:ee,partial:z,pattern:he?Yn(he):"[^"+Ie(ue)+"]+?"})}return(n||i<e.length)&&r.push(n+e.substr(i)),r}function Xn(e,t){return gs(Do(e,t))}function gs(e){for(var t=new Array(e.length),r=0;r<e.length;r++)typeof e[r]=="object"&&(t[r]=new RegExp("^(?:"+e[r].pattern+")$"));return function(o,i){for(var n="",s=i&&i.encode||encodeURIComponent,l=0;l<e.length;l++){var a=e[l];if(typeof a=="string"){n+=a;continue}var c=o?o[a.name]:void 0,d;if(Array.isArray(c)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(c.length===0){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var u=0;u<c.length;u++){if(d=s(c[u],a),!t[l].test(d))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');n+=(u===0?a.prefix:a.delimiter)+d}continue}if(typeof c=="string"||typeof c=="number"||typeof c=="boolean"){if(d=s(String(c),a),!t[l].test(d))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+d+'"');n+=a.prefix+d;continue}if(a.optional){a.partial&&(n+=a.prefix);continue}throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"))}return n}}function Ie(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Yn(e){return e.replace(/([=!:$/()])/g,"\\$1")}function bs(e){return e&&e.sensitive?"":"i"}function Qn(e,t){if(!t)return e;var r=e.source.match(/\((?!\?)/g);if(r)for(var o=0;o<r.length;o++)t.push({name:o,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e}function Zn(e,t,r){for(var o=[],i=0;i<e.length;i++)o.push(ys(e[i],t,r).source);return new RegExp("(?:"+o.join("|")+")",bs(r))}function ea(e,t,r){return vs(Do(e,r),t,r)}function vs(e,t,r){r=r||{};for(var o=r.strict,i=r.start!==!1,n=r.end!==!1,s=Ie(r.delimiter||fs),l=r.delimiters||ms,a=[].concat(r.endsWith||[]).map(Ie).concat("$").join("|"),c=i?"^":"",d=e.length===0,u=0;u<e.length;u++){var p=e[u];if(typeof p=="string")c+=Ie(p),d=u===e.length-1&&l.indexOf(p[p.length-1])>-1;else{var g=p.repeat?"(?:"+p.pattern+")(?:"+Ie(p.delimiter)+"(?:"+p.pattern+"))*":p.pattern;t&&t.push(p),p.optional?p.partial?c+=Ie(p.prefix)+"("+g+")?":c+="(?:"+Ie(p.prefix)+"("+g+"))?":c+=Ie(p.prefix)+"("+g+")"}}return n?(o||(c+="(?:"+s+")?"),c+=a==="$"?"$":"(?="+a+")"):(o||(c+="(?:"+s+"(?="+a+"))?"),d||(c+="(?="+s+"|"+a+")")),new RegExp(c,bs(r))}function ys(e,t,r){return e instanceof RegExp?Qn(e,t):Array.isArray(e)?Zn(e,t,r):ea(e,t,r)}St.parse=qn;St.compile=Bn;St.tokensToFunction=Gn;St.tokensToRegExp=Kn;const{hasOwnProperty:ta}=Object.prototype,fo=new Map;fo.set("|false",{keys:[],pattern:/(?:)/});function pi(e){try{return decodeURIComponent(e)}catch{return e}}function ra(e,t,r,o,i){r=!!r;const n=`${e}|${r}`;let s=fo.get(n);if(!s){const c=[];s={keys:c,pattern:St(e,c,{end:r,strict:e===""})},fo.set(n,s)}const l=s.pattern.exec(t);if(!l)return null;const a=Object.assign({},i);for(let c=1;c<l.length;c++){const d=s.keys[c-1],u=d.name,p=l[c];(p!==void 0||!ta.call(a,u))&&(d.repeat?a[u]=p?p.split(d.delimiter).map(pi):[]:a[u]=p&&pi(p))}return{path:l[0],keys:(o||[]).concat(s.keys),params:a}}function ws(e,t,r,o,i){let n,s,l=0,a=e.path||"";return a.charAt(0)==="/"&&(r&&(a=a.substr(1)),r=!0),{next(c){if(e===c)return{done:!0};const d=e.__children=e.__children||e.children;if(!n&&(n=ra(a,t,!d,o,i),n))return{done:!1,value:{route:e,keys:n.keys,params:n.params,path:n.path}};if(n&&d)for(;l<d.length;){if(!s){const p=d[l];p.parent=e;let g=n.path.length;g>0&&t.charAt(g)==="/"&&(g+=1),s=ws(p,t.substr(g),r,n.keys,n.params)}const u=s.next(c);if(!u.done)return{done:!1,value:u.value};s=null,l++}return{done:!0}}}}function oa(e){if(Ze(e.route.action))return e.route.action(e)}function ia(e,t){let r=t;for(;r;)if(r=r.parent,r===e)return!0;return!1}function sa(e){let t=`Path '${e.pathname}' is not properly resolved due to an error.`;const r=(e.route||{}).path;return r&&(t+=` Resolution had failed on route: '${r}'`),t}function na(e,t){const{route:r,path:o}=t;if(r&&!r.__synthetic){const i={path:o,route:r};if(!e.chain)e.chain=[];else if(r.parent){let n=e.chain.length;for(;n--&&e.chain[n].route&&e.chain[n].route!==r.parent;)e.chain.pop()}e.chain.push(i)}}class Kt{constructor(t,r={}){if(Object(t)!==t)throw new TypeError("Invalid routes");this.baseUrl=r.baseUrl||"",this.errorHandler=r.errorHandler,this.resolveRoute=r.resolveRoute||oa,this.context=Object.assign({resolver:this},r.context),this.root=Array.isArray(t)?{path:"",__children:t,parent:null,__synthetic:!0}:t,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(t){ci(t);const r=[..._r(t)];this.root.__children=r}addRoutes(t){return ci(t),this.root.__children.push(..._r(t)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(t){const r=Object.assign({},this.context,ge(t)?{pathname:t}:t),o=ws(this.root,this.__normalizePathname(r.pathname),this.baseUrl),i=this.resolveRoute;let n=null,s=null,l=r;function a(c,d=n.value.route,u){const p=u===null&&n.value.route;return n=s||o.next(p),s=null,!c&&(n.done||!ia(d,n.value.route))?(s=n,Promise.resolve(ut)):n.done?Promise.reject(ps(r)):(l=Object.assign(l?{chain:l.chain?l.chain.slice(0):[]}:{},r,n.value),na(l,n.value),Promise.resolve(i(l)).then(g=>g!=null&&g!==ut?(l.result=g.result||g,l):a(c,d,g)))}return r.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(c=>{const d=sa(l);if(c?console.warn(d):c=new Error(d),c.context=c.context||l,c instanceof DOMException||(c.code=c.code||500),this.errorHandler)return l.result=this.errorHandler(c),l;throw c})}static __createUrl(t,r){return new URL(t,r)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(t){if(!this.baseUrl)return t;const r=this.__effectiveBaseUrl,o=this.constructor.__createUrl(t,r).href;if(o.slice(0,r.length)===r)return o.slice(r.length)}}Kt.pathToRegexp=St;const{pathToRegexp:fi}=Kt,mi=new Map;function _s(e,t,r){const o=t.name||t.component;if(o&&(e.has(o)?e.get(o).push(t):e.set(o,[t])),Array.isArray(r))for(let i=0;i<r.length;i++){const n=r[i];n.parent=t,_s(e,n,n.__children||n.children)}}function gi(e,t){const r=e.get(t);if(r&&r.length>1)throw new Error(`Duplicate route with name "${t}". Try seting unique 'name' route properties.`);return r&&r[0]}function bi(e){let t=e.path;return t=Array.isArray(t)?t[0]:t,t!==void 0?t:""}function aa(e,t={}){if(!(e instanceof Kt))throw new TypeError("An instance of Resolver is expected");const r=new Map;return(o,i)=>{let n=gi(r,o);if(!n&&(r.clear(),_s(r,e.root,e.root.__children),n=gi(r,o),!n))throw new Error(`Route "${o}" not found`);let s=mi.get(n.fullPath);if(!s){let a=bi(n),c=n.parent;for(;c;){const g=bi(c);g&&(a=g.replace(/\/$/,"")+"/"+a.replace(/^\//,"")),c=c.parent}const d=fi.parse(a),u=fi.tokensToFunction(d),p=Object.create(null);for(let g=0;g<d.length;g++)ge(d[g])||(p[d[g].name]=!0);s={toPath:u,keys:p},mi.set(a,s),n.fullPath=a}let l=s.toPath(i,t)||"/";if(t.stringifyQueryParams&&i){const a={},c=Object.keys(i);for(let u=0;u<c.length;u++){const p=c[u];s.keys[p]||(a[p]=i[p])}const d=t.stringifyQueryParams(a);d&&(l+=d.charAt(0)==="?"?d:`?${d}`)}return l}}let vi=[];function la(e){vi.forEach(t=>t.inactivate()),e.forEach(t=>t.activate()),vi=e}const ca=e=>{const t=getComputedStyle(e).getPropertyValue("animation-name");return t&&t!=="none"},da=(e,t)=>{const r=()=>{e.removeEventListener("animationend",r),t()};e.addEventListener("animationend",r)};function yi(e,t){return e.classList.add(t),new Promise(r=>{if(ca(e)){const o=e.getBoundingClientRect(),i=`height: ${o.bottom-o.top}px; width: ${o.right-o.left}px`;e.setAttribute("style",`position: absolute; ${i}`),da(e,()=>{e.classList.remove(t),e.removeAttribute("style"),r()})}else e.classList.remove(t),r()})}const ua=256;function Qr(e){return e!=null}function ha(e){const t=Object.assign({},e);return delete t.next,t}function me({pathname:e="",search:t="",hash:r="",chain:o=[],params:i={},redirectFrom:n,resolver:s},l){const a=o.map(c=>c.route);return{baseUrl:s&&s.baseUrl||"",pathname:e,search:t,hash:r,routes:a,route:l||a.length&&a[a.length-1]||null,params:i,redirectFrom:n,getUrl:(c={})=>mr(_e.pathToRegexp.compile(xs(a))(Object.assign({},i,c)),s)}}function wi(e,t){const r=Object.assign({},e.params);return{redirect:{pathname:t,from:e.pathname,params:r}}}function pa(e,t){t.location=me(e);const r=e.chain.map(o=>o.route).indexOf(e.route);return e.chain[r].element=t,t}function fr(e,t,r){if(Ze(e))return e.apply(r,t)}function _i(e,t,r){return o=>{if(o&&(o.cancel||o.redirect))return o;if(r)return fr(r[e],t,r)}}function fa(e,t){if(!Array.isArray(e)&&!$r(e))throw new Error(ye(`Incorrect "children" value for the route ${t.path}: expected array or object, but got ${e}`));t.__children=[];const r=_r(e);for(let o=0;o<r.length;o++)hs(r[o]),t.__children.push(r[o])}function ur(e){if(e&&e.length){const t=e[0].parentNode;for(let r=0;r<e.length;r++)t.removeChild(e[r])}}function mr(e,t){const r=t.__effectiveBaseUrl;return r?t.constructor.__createUrl(e.replace(/^\//,""),r).pathname:e}function xs(e){return e.map(t=>t.path).reduce((t,r)=>r.length?t.replace(/\/$/,"")+"/"+r.replace(/^\//,""):t,"")}class _e extends Kt{constructor(t,r){const o=document.head.querySelector("base"),i=o&&o.getAttribute("href");super([],Object.assign({baseUrl:i&&Kt.__createUrl(i,document.URL).pathname.replace(/[^\/]*$/,"")},r)),this.resolveRoute=s=>this.__resolveRoute(s);const n=_e.NavigationTrigger;_e.setTriggers.apply(_e,Object.keys(n).map(s=>n[s])),this.baseUrl,this.ready,this.ready=Promise.resolve(t),this.location,this.location=me({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(t),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(t){const r=t.route;let o=Promise.resolve();Ze(r.children)&&(o=o.then(()=>r.children(ha(t))).then(n=>{!Qr(n)&&!Ze(r.children)&&(n=r.children),fa(n,r)}));const i={redirect:n=>wi(t,n),component:n=>{const s=document.createElement(n);return this.__createdByRouter.set(s,!0),s}};return o.then(()=>{if(this.__isLatestRender(t))return fr(r.action,[t,i],r)}).then(n=>{if(Qr(n)&&(n instanceof HTMLElement||n.redirect||n===ut))return n;if(ge(r.redirect))return i.redirect(r.redirect);if(r.bundle)return Nn(r.bundle).then(()=>{},()=>{throw new Error(ye(`Bundle not found: ${r.bundle}. Check if the file name is correct`))})}).then(n=>{if(Qr(n))return n;if(ge(r.component))return i.component(r.component)})}setOutlet(t){t&&this.__ensureOutlet(t),this.__outlet=t}getOutlet(){return this.__outlet}setRoutes(t,r=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(t),r||this.__onNavigationEvent(),this.ready}render(t,r){const o=++this.__lastStartedRenderId,i=Object.assign({search:"",hash:""},ge(t)?{pathname:t}:t,{__renderId:o});return this.ready=this.resolve(i).then(n=>this.__fullyResolveChain(n)).then(n=>{if(this.__isLatestRender(n)){const s=this.__previousContext;if(n===s)return this.__updateBrowserHistory(s,!0),this.location;if(this.location=me(n),r&&this.__updateBrowserHistory(n,o===1),Vt("location-changed",{router:this,location:this.location}),n.__skipAttach)return this.__copyUnchangedElements(n,s),this.__previousContext=n,this.location;this.__addAppearingContent(n,s);const l=this.__animateIfNeeded(n);return this.__runOnAfterEnterCallbacks(n),this.__runOnAfterLeaveCallbacks(n,s),l.then(()=>{if(this.__isLatestRender(n))return this.__removeDisappearingContent(),this.__previousContext=n,this.location})}}).catch(n=>{if(o===this.__lastStartedRenderId)throw r&&this.__updateBrowserHistory(i),ur(this.__outlet&&this.__outlet.children),this.location=me(Object.assign(i,{resolver:this})),Vt("error",Object.assign({router:this,error:n},i)),n}),this.ready}__fullyResolveChain(t,r=t){return this.__findComponentContextAfterAllRedirects(r).then(o=>{const n=o!==r?o:t,l=mr(xs(o.chain),o.resolver)===o.pathname,a=(c,d=c.route,u)=>c.next(void 0,d,u).then(p=>p===null||p===ut?l?c:d.parent!==null?a(c,d.parent,p):p:p);return a(o).then(c=>{if(c===null||c===ut)throw ps(n);return c&&c!==ut&&c!==o?this.__fullyResolveChain(n,c):this.__amendWithOnBeforeCallbacks(o)})})}__findComponentContextAfterAllRedirects(t){const r=t.result;return r instanceof HTMLElement?(pa(t,r),Promise.resolve(t)):r.redirect?this.__redirect(r.redirect,t.__redirectCount,t.__renderId).then(o=>this.__findComponentContextAfterAllRedirects(o)):r instanceof Error?Promise.reject(r):Promise.reject(new Error(ye(`Invalid route resolution result for path "${t.pathname}". Expected redirect object or HTML element, but got: "${Fn(r)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(t){return this.__runOnBeforeCallbacks(t).then(r=>r===this.__previousContext||r===t?r:this.__fullyResolveChain(r))}__runOnBeforeCallbacks(t){const r=this.__previousContext||{},o=r.chain||[],i=t.chain;let n=Promise.resolve();const s=()=>({cancel:!0}),l=a=>wi(t,a);if(t.__divergedChainIndex=0,t.__skipAttach=!1,o.length){for(let a=0;a<Math.min(o.length,i.length)&&!(o[a].route!==i[a].route||o[a].path!==i[a].path&&o[a].element!==i[a].element||!this.__isReusableElement(o[a].element,i[a].element));a=++t.__divergedChainIndex);if(t.__skipAttach=i.length===o.length&&t.__divergedChainIndex==i.length&&this.__isReusableElement(t.result,r.result),t.__skipAttach){for(let a=i.length-1;a>=0;a--)n=this.__runOnBeforeLeaveCallbacks(n,t,{prevent:s},o[a]);for(let a=0;a<i.length;a++)n=this.__runOnBeforeEnterCallbacks(n,t,{prevent:s,redirect:l},i[a]),o[a].element.location=me(t,o[a].route)}else for(let a=o.length-1;a>=t.__divergedChainIndex;a--)n=this.__runOnBeforeLeaveCallbacks(n,t,{prevent:s},o[a])}if(!t.__skipAttach)for(let a=0;a<i.length;a++)a<t.__divergedChainIndex?a<o.length&&o[a].element&&(o[a].element.location=me(t,o[a].route)):(n=this.__runOnBeforeEnterCallbacks(n,t,{prevent:s,redirect:l},i[a]),i[a].element&&(i[a].element.location=me(t,i[a].route)));return n.then(a=>{if(a){if(a.cancel)return this.__previousContext.__renderId=t.__renderId,this.__previousContext;if(a.redirect)return this.__redirect(a.redirect,t.__redirectCount,t.__renderId)}return t})}__runOnBeforeLeaveCallbacks(t,r,o,i){const n=me(r);return t.then(s=>{if(this.__isLatestRender(r))return _i("onBeforeLeave",[n,o,this],i.element)(s)}).then(s=>{if(!(s||{}).redirect)return s})}__runOnBeforeEnterCallbacks(t,r,o,i){const n=me(r,i.route);return t.then(s=>{if(this.__isLatestRender(r))return _i("onBeforeEnter",[n,o,this],i.element)(s)})}__isReusableElement(t,r){return t&&r?this.__createdByRouter.get(t)&&this.__createdByRouter.get(r)?t.localName===r.localName:t===r:!1}__isLatestRender(t){return t.__renderId===this.__lastStartedRenderId}__redirect(t,r,o){if(r>ua)throw new Error(ye(`Too many redirects when rendering ${t.from}`));return this.resolve({pathname:this.urlForPath(t.pathname,t.params),redirectFrom:t.from,__redirectCount:(r||0)+1,__renderId:o})}__ensureOutlet(t=this.__outlet){if(!(t instanceof Node))throw new TypeError(ye(`Expected router outlet to be a valid DOM Node (but got ${t})`))}__updateBrowserHistory({pathname:t,search:r="",hash:o=""},i){if(window.location.pathname!==t||window.location.search!==r||window.location.hash!==o){const n=i?"replaceState":"pushState";window.history[n](null,document.title,t+r+o),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(t,r){let o=this.__outlet;for(let i=0;i<t.__divergedChainIndex;i++){const n=r&&r.chain[i].element;if(n)if(n.parentNode===o)t.chain[i].element=n,o=n;else break}return o}__addAppearingContent(t,r){this.__ensureOutlet(),this.__removeAppearingContent();const o=this.__copyUnchangedElements(t,r);this.__appearingContent=[],this.__disappearingContent=Array.from(o.children).filter(n=>this.__addedByRouter.get(n)&&n!==t.result);let i=o;for(let n=t.__divergedChainIndex;n<t.chain.length;n++){const s=t.chain[n].element;s&&(i.appendChild(s),this.__addedByRouter.set(s,!0),i===o&&this.__appearingContent.push(s),i=s)}}__removeDisappearingContent(){this.__disappearingContent&&ur(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(ur(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(t,r){if(!!r)for(let o=r.chain.length-1;o>=t.__divergedChainIndex&&this.__isLatestRender(t);o--){const i=r.chain[o].element;if(!!i)try{const n=me(t);fr(i.onAfterLeave,[n,{},r.resolver],i)}finally{this.__disappearingContent.indexOf(i)>-1&&ur(i.children)}}}__runOnAfterEnterCallbacks(t){for(let r=t.__divergedChainIndex;r<t.chain.length&&this.__isLatestRender(t);r++){const o=t.chain[r].element||{},i=me(t,t.chain[r].route);fr(o.onAfterEnter,[i,{},t.resolver],o)}}__animateIfNeeded(t){const r=(this.__disappearingContent||[])[0],o=(this.__appearingContent||[])[0],i=[],n=t.chain;let s;for(let l=n.length;l>0;l--)if(n[l-1].route.animate){s=n[l-1].route.animate;break}if(r&&o&&s){const l=$r(s)&&s.leave||"leaving",a=$r(s)&&s.enter||"entering";i.push(yi(r,l)),i.push(yi(o,a))}return Promise.all(i).then(()=>t)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(t){const{pathname:r,search:o,hash:i}=t?t.detail:window.location;ge(this.__normalizePathname(r))&&(t&&t.preventDefault&&t.preventDefault(),this.render({pathname:r,search:o,hash:i},!0))}static setTriggers(...t){la(t)}urlForName(t,r){return this.__urlForName||(this.__urlForName=aa(this)),mr(this.__urlForName(t,r),this)}urlForPath(t,r){return mr(_e.pathToRegexp.compile(t)(r),this)}static go(t){const{pathname:r,search:o,hash:i}=ge(t)?this.__createUrl(t,"http://a"):t;return Vt("go",{pathname:r,search:o,hash:i})}}const ma=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,gr=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function ga(){function e(){return!0}return ks(e)}function ba(){try{return va()?!0:ya()?gr?!wa():!ga():!1}catch{return!1}}function va(){return localStorage.getItem("vaadin.developmentmode.force")}function ya(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function wa(){return!!(gr&&Object.keys(gr).map(t=>gr[t]).filter(t=>t.productionMode).length>0)}function ks(e,t){if(typeof e!="function")return;const r=ma.exec(e.toString());if(r)try{e=new Function(r[1])}catch(o){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",o)}return e(t)}window.Vaadin=window.Vaadin||{};const xi=function(e,t){if(window.Vaadin.developmentMode)return ks(e,t)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=ba());function _a(){}const xa=function(){if(typeof xi=="function")return xi(_a)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});xa();_e.NavigationTrigger={POPSTATE:Wn,CLICK:Hn};var ka=Object.create,Dr=Object.defineProperty,$a=Object.defineProperties,$s=Object.getOwnPropertyDescriptor,Ca=Object.getOwnPropertyDescriptors,Cs=Object.getOwnPropertyNames,Cr=Object.getOwnPropertySymbols,Sa=Object.getPrototypeOf,Io=Object.prototype.hasOwnProperty,Ss=Object.prototype.propertyIsEnumerable,ki=(e,t,r)=>t in e?Dr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,W=(e,t)=>{for(var r in t||(t={}))Io.call(t,r)&&ki(e,r,t[r]);if(Cr)for(var r of Cr(t))Ss.call(t,r)&&ki(e,r,t[r]);return e},pe=(e,t)=>$a(e,Ca(t)),Fo=(e,t)=>{var r={};for(var o in e)Io.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&Cr)for(var o of Cr(e))t.indexOf(o)<0&&Ss.call(e,o)&&(r[o]=e[o]);return r},qe=(e,t)=>function(){return t||(0,e[Cs(e)[0]])((t={exports:{}}).exports,t),t.exports},Ea=(e,t,r,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Cs(t))!Io.call(e,i)&&i!==r&&Dr(e,i,{get:()=>t[i],enumerable:!(o=$s(t,i))||o.enumerable});return e},Aa=(e,t,r)=>(r=e!=null?ka(Sa(e)):{},Ea(t||!e||!e.__esModule?Dr(r,"default",{value:e,enumerable:!0}):r,e)),h=(e,t,r,o)=>{for(var i=o>1?void 0:o?$s(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(i=(o?s(t,r,i):s(i))||i);return o&&i&&Dr(t,r,i),i},Pa=class extends Event{constructor(e){super("formdata"),this.formData=e}},Ta=class extends FormData{constructor(e){var t=(...r)=>{super(...r)};e?(t(e),this.form=e,e.dispatchEvent(new Pa(this))):t()}append(e,t){if(!this.form)return super.append(e,t);let r=this.form.elements[e];if(r||(r=document.createElement("input"),r.type="hidden",r.name=e,this.form.appendChild(r)),this.has(e)){const o=this.getAll(e),i=o.indexOf(r.value);i!==-1&&o.splice(i,1),o.push(t),this.set(e,o)}else super.append(e,t);r.value=t}};function za(){const e=document.createElement("form");let t=!1;return document.body.append(e),e.addEventListener("submit",r=>{new FormData(r.target),r.preventDefault()}),e.addEventListener("formdata",()=>t=!0),e.dispatchEvent(new Event("submit",{cancelable:!0})),e.remove(),t}function $i(){!window.FormData||za()||(window.FormData=Ta,window.addEventListener("submit",e=>{e.defaultPrevented||new FormData(e.target)}))}document.readyState==="complete"?$i():window.addEventListener("DOMContentLoaded",()=>$i());var Mt=new WeakMap,st=class{constructor(e,t){(this.host=e).addController(this),this.options=W({form:r=>r.closest("form"),name:r=>r.name,value:r=>r.value,defaultValue:r=>r.defaultValue,disabled:r=>r.disabled,reportValidity:r=>typeof r.reportValidity=="function"?r.reportValidity():!0,setValue:(r,o)=>{r.value=o}},t),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this)}hostConnected(){this.form=this.options.form(this.host),this.form&&(this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Mt.has(this.form)||(Mt.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()))}hostDisconnected(){this.form&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Mt.has(this.form)&&(this.form.reportValidity=Mt.get(this.form),Mt.delete(this.form)),this.form=void 0)}handleFormData(e){const t=this.options.disabled(this.host),r=this.options.name(this.host),o=this.options.value(this.host);!t&&typeof r=="string"&&typeof o!="undefined"&&(Array.isArray(o)?o.forEach(i=>{e.formData.append(r,i.toString())}):e.formData.append(r,o.toString()))}handleFormSubmit(e){const t=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&!t&&!r(this.host)&&(e.preventDefault(),e.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host))}reportFormValidity(){if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const t of e)if(typeof t.reportValidity=="function"&&!t.reportValidity())return!1}return!0}doAction(e,t){if(this.form){const r=document.createElement("button");r.type=e,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",t&&["formaction","formmethod","formnovalidate","formtarget"].forEach(o=>{t.hasAttribute(o)&&r.setAttribute(o,t.getAttribute(o))}),this.form.append(r),r.click(),r.remove()}}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}},No=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Vo=Symbol(),Ci=new Map,Es=class{constructor(e,t){if(this._$cssResult$=!0,t!==Vo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=Ci.get(this.cssText);return No&&e===void 0&&(Ci.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}},La=e=>new Es(typeof e=="string"?e:e+"",Vo),L=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((o,i,n)=>o+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[n+1],e[0]);return new Es(r,Vo)},Ua=(e,t)=>{No?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const o=document.createElement("style"),i=window.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=r.cssText,e.appendChild(o)})},Si=No?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const o of t.cssRules)r+=o.cssText;return La(r)})(e):e,Zr,Ei=window.trustedTypes,Oa=Ei?Ei.emptyScript:"",Ai=window.reactiveElementPolyfillSupport,Jt={toAttribute(e,t){switch(t){case Boolean:e=e?Oa:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},As=(e,t)=>t!==e&&(t==t||e==e),eo={attribute:!0,type:String,converter:Jt,reflect:!1,hasChanged:As},dt=class extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;(t=this.l)!==null&&t!==void 0||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,r)=>{const o=this._$Eh(r,t);o!==void 0&&(this._$Eu.set(o,r),e.push(o))}),e}static createProperty(e,t=eo){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,o=this.getPropertyDescriptor(e,r,t);o!==void 0&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(o){const i=this[e];this[t]=o,this.requestUpdate(e,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||eo}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,r=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of r)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const o of r)t.unshift(Si(o))}else e!==void 0&&t.push(Si(e));return t}static _$Eh(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Em(),this.requestUpdate(),(e=this.constructor.l)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,r;((t=this._$Eg)!==null&&t!==void 0?t:this._$Eg=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var t;(t=this._$Eg)===null||t===void 0||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Ua(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostConnected)===null||r===void 0?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostDisconnected)===null||r===void 0?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ES(e,t,r=eo){var o,i;const n=this.constructor._$Eh(e,r);if(n!==void 0&&r.reflect===!0){const s=((i=(o=r.converter)===null||o===void 0?void 0:o.toAttribute)!==null&&i!==void 0?i:Jt.toAttribute)(t,r.type);this._$Ei=e,s==null?this.removeAttribute(n):this.setAttribute(n,s),this._$Ei=null}}_$AK(e,t){var r,o,i;const n=this.constructor,s=n._$Eu.get(e);if(s!==void 0&&this._$Ei!==s){const l=n.getPropertyOptions(s),a=l.converter,c=(i=(o=(r=a)===null||r===void 0?void 0:r.fromAttribute)!==null&&o!==void 0?o:typeof a=="function"?a:null)!==null&&i!==void 0?i:Jt.fromAttribute;this._$Ei=s,this[s]=c(t,l.type),this._$Ei=null}}requestUpdate(e,t,r){let o=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||As)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$Ei!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):o=!1),!this.isUpdatePending&&o&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((o,i)=>this[i]=o),this._$Et=void 0);let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(e=this._$Eg)===null||e===void 0||e.forEach(o=>{var i;return(i=o.hostUpdate)===null||i===void 0?void 0:i.call(o)}),this.update(r)):this._$EU()}catch(o){throw t=!1,this._$EU(),o}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;(t=this._$Eg)===null||t===void 0||t.forEach(r=>{var o;return(o=r.hostUpdated)===null||o===void 0?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,r)=>this._$ES(r,this[r],t)),this._$EC=void 0),this._$EU()}updated(e){}firstUpdated(e){}};dt.finalized=!0,dt.elementProperties=new Map,dt.elementStyles=[],dt.shadowRootOptions={mode:"open"},Ai==null||Ai({ReactiveElement:dt}),((Zr=globalThis.reactiveElementVersions)!==null&&Zr!==void 0?Zr:globalThis.reactiveElementVersions=[]).push("1.3.2");var to,vt=globalThis.trustedTypes,Pi=vt?vt.createPolicy("lit-html",{createHTML:e=>e}):void 0,Ne=`lit$${(Math.random()+"").slice(9)}$`,Ps="?"+Ne,Ra=`<${Ps}>`,yt=document,Xt=(e="")=>yt.createComment(e),Yt=e=>e===null||typeof e!="object"&&typeof e!="function",Ts=Array.isArray,Ma=e=>{var t;return Ts(e)||typeof((t=e)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},Dt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ti=/-->/g,zi=/>/g,Ke=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Li=/'/g,Ui=/"/g,zs=/^(?:script|style|textarea|title)$/i,Da=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),$=Da(1),ae=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),Oi=new WeakMap,Ia=(e,t,r)=>{var o,i;const n=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:t;let s=n._$litPart$;if(s===void 0){const l=(i=r==null?void 0:r.renderBefore)!==null&&i!==void 0?i:null;n._$litPart$=s=new Ir(t.insertBefore(Xt(),l),l,void 0,r!=null?r:{})}return s._$AI(e),s},ft=yt.createTreeWalker(yt,129,null,!1),Fa=(e,t)=>{const r=e.length-1,o=[];let i,n=t===2?"<svg>":"",s=Dt;for(let a=0;a<r;a++){const c=e[a];let d,u,p=-1,g=0;for(;g<c.length&&(s.lastIndex=g,u=s.exec(c),u!==null);)g=s.lastIndex,s===Dt?u[1]==="!--"?s=Ti:u[1]!==void 0?s=zi:u[2]!==void 0?(zs.test(u[2])&&(i=RegExp("</"+u[2],"g")),s=Ke):u[3]!==void 0&&(s=Ke):s===Ke?u[0]===">"?(s=i!=null?i:Dt,p=-1):u[1]===void 0?p=-2:(p=s.lastIndex-u[2].length,d=u[1],s=u[3]===void 0?Ke:u[3]==='"'?Ui:Li):s===Ui||s===Li?s=Ke:s===Ti||s===zi?s=Dt:(s=Ke,i=void 0);const y=s===Ke&&e[a+1].startsWith("/>")?" ":"";n+=s===Dt?c+Ra:p>=0?(o.push(d),c.slice(0,p)+"$lit$"+c.slice(p)+Ne+y):c+Ne+(p===-2?(o.push(void 0),a):y)}const l=n+(e[r]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Pi!==void 0?Pi.createHTML(l):l,o]},Sr=class{constructor({strings:e,_$litType$:t},r){let o;this.parts=[];let i=0,n=0;const s=e.length-1,l=this.parts,[a,c]=Fa(e,t);if(this.el=Sr.createElement(a,r),ft.currentNode=this.el.content,t===2){const d=this.el.content,u=d.firstChild;u.remove(),d.append(...u.childNodes)}for(;(o=ft.nextNode())!==null&&l.length<s;){if(o.nodeType===1){if(o.hasAttributes()){const d=[];for(const u of o.getAttributeNames())if(u.endsWith("$lit$")||u.startsWith(Ne)){const p=c[n++];if(d.push(u),p!==void 0){const g=o.getAttribute(p.toLowerCase()+"$lit$").split(Ne),y=/([.?@])?(.*)/.exec(p);l.push({type:1,index:i,name:y[2],strings:g,ctor:y[1]==="."?Va:y[1]==="?"?ja:y[1]==="@"?Wa:Fr})}else l.push({type:6,index:i})}for(const u of d)o.removeAttribute(u)}if(zs.test(o.tagName)){const d=o.textContent.split(Ne),u=d.length-1;if(u>0){o.textContent=vt?vt.emptyScript:"";for(let p=0;p<u;p++)o.append(d[p],Xt()),ft.nextNode(),l.push({type:2,index:++i});o.append(d[u],Xt())}}}else if(o.nodeType===8)if(o.data===Ps)l.push({type:2,index:i});else{let d=-1;for(;(d=o.data.indexOf(Ne,d+1))!==-1;)l.push({type:7,index:i}),d+=Ne.length-1}i++}}static createElement(e,t){const r=yt.createElement("template");return r.innerHTML=e,r}};function wt(e,t,r=e,o){var i,n,s,l;if(t===ae)return t;let a=o!==void 0?(i=r._$Cl)===null||i===void 0?void 0:i[o]:r._$Cu;const c=Yt(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==c&&((n=a==null?void 0:a._$AO)===null||n===void 0||n.call(a,!1),c===void 0?a=void 0:(a=new c(e),a._$AT(e,r,o)),o!==void 0?((s=(l=r)._$Cl)!==null&&s!==void 0?s:l._$Cl=[])[o]=a:r._$Cu=a),a!==void 0&&(t=wt(e,a._$AS(e,t.values),a,o)),t}var Na=class{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:r},parts:o}=this._$AD,i=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:yt).importNode(r,!0);ft.currentNode=i;let n=ft.nextNode(),s=0,l=0,a=o[0];for(;a!==void 0;){if(s===a.index){let c;a.type===2?c=new Ir(n,n.nextSibling,this,e):a.type===1?c=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(c=new qa(n,this,e)),this.v.push(c),a=o[++l]}s!==(a==null?void 0:a.index)&&(n=ft.nextNode(),s++)}return i}m(e){let t=0;for(const r of this.v)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},Ir=class{constructor(e,t,r,o){var i;this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=o,this._$Cg=(i=o==null?void 0:o.isConnected)===null||i===void 0||i}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=wt(this,e,t),Yt(e)?e===q||e==null||e===""?(this._$AH!==q&&this._$AR(),this._$AH=q):e!==this._$AH&&e!==ae&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.k(e):Ma(e)?this.S(e):this.$(e)}M(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==q&&Yt(this._$AH)?this._$AA.nextSibling.data=e:this.k(yt.createTextNode(e)),this._$AH=e}T(e){var t;const{values:r,_$litType$:o}=e,i=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=Sr.createElement(o.h,this.options)),o);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===i)this._$AH.m(r);else{const n=new Na(i,this),s=n.p(this.options);n.m(r),this.k(s),this._$AH=n}}_$AC(e){let t=Oi.get(e.strings);return t===void 0&&Oi.set(e.strings,t=new Sr(e)),t}S(e){Ts(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,o=0;for(const i of e)o===t.length?t.push(r=new Ir(this.M(Xt()),this.M(Xt()),this,this.options)):r=t[o],r._$AI(i),o++;o<t.length&&(this._$AR(r&&r._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,t);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cg=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},Fr=class{constructor(e,t,r,o,i){this.type=1,this._$AH=q,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=q}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,o){const i=this.strings;let n=!1;if(i===void 0)e=wt(this,e,t,0),n=!Yt(e)||e!==this._$AH&&e!==ae,n&&(this._$AH=e);else{const s=e;let l,a;for(e=i[0],l=0;l<i.length-1;l++)a=wt(this,s[r+l],t,l),a===ae&&(a=this._$AH[l]),n||(n=!Yt(a)||a!==this._$AH[l]),a===q?e=q:e!==q&&(e+=(a!=null?a:"")+i[l+1]),this._$AH[l]=a}n&&!o&&this.C(e)}C(e){e===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}},Va=class extends Fr{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===q?void 0:e}},Ha=vt?vt.emptyScript:"",ja=class extends Fr{constructor(){super(...arguments),this.type=4}C(e){e&&e!==q?this.element.setAttribute(this.name,Ha):this.element.removeAttribute(this.name)}},Wa=class extends Fr{constructor(e,t,r,o,i){super(e,t,r,o,i),this.type=5}_$AI(e,t=this){var r;if((e=(r=wt(this,e,t,0))!==null&&r!==void 0?r:q)===ae)return;const o=this._$AH,i=e===q&&o!==q||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,n=e!==q&&(o===q||i);i&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;typeof this._$AH=="function"?this._$AH.call((r=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},qa=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){wt(this,e)}},Ri=window.litHtmlPolyfillSupport;Ri==null||Ri(Sr,Ir),((to=globalThis.litHtmlVersions)!==null&&to!==void 0?to:globalThis.litHtmlVersions=[]).push("2.2.4");var ro,oo,Ht=class extends dt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const r=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=r.firstChild),r}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=Ia(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return ae}};Ht.finalized=!0,Ht._$litElement$=!0,(ro=globalThis.litElementHydrateSupport)===null||ro===void 0||ro.call(globalThis,{LitElement:Ht});var Mi=globalThis.litElementPolyfillSupport;Mi==null||Mi({LitElement:Ht});((oo=globalThis.litElementVersions)!==null&&oo!==void 0?oo:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var O=L`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,Ba=L`
  ${O}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition: var(--sl-transition-x-fast) background-color, var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border, var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label ::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    font-size: var(--sl-button-font-size-small);
    height: var(--sl-input-height-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    font-size: var(--sl-button-font-size-medium);
    height: var(--sl-input-height-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    font-size: var(--sl-button-font-size-large);
    height: var(--sl-input-height-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    display: flex;
    align-items: center;
  }

  .button--caret .button__caret svg {
    width: 1em;
    height: 1em;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(-50%) translateX(50%);
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    transform: translateY(-50%) translateX(-50%);
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(.sl-button-group__button:not(.sl-button-group__button--focus, .sl-button-group__button--first, .sl-button-group__button--radio, [variant='default']):not(:hover, :active, :focus))
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  :host(.sl-button-group__button--focus),
  :host(.sl-button-group__button[checked]) {
    z-index: 2;
  }
`,Ls=Symbol.for(""),Ga=e=>{var t,r;if(((t=e)===null||t===void 0?void 0:t.r)===Ls)return(r=e)===null||r===void 0?void 0:r._$litStatic$},Er=(e,...t)=>({_$litStatic$:t.reduce((r,o,i)=>r+(n=>{if(n._$litStatic$!==void 0)return n._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${n}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+e[i+1],e[0]),r:Ls}),Di=new Map,Ka=e=>(t,...r)=>{const o=r.length;let i,n;const s=[],l=[];let a,c=0,d=!1;for(;c<o;){for(a=t[c];c<o&&(n=r[c],(i=Ga(n))!==void 0);)a+=i+t[++c],d=!0;l.push(n),s.push(a),c++}if(c===o&&s.push(t[o]),d){const u=s.join("$$lit$$");(t=Di.get(u))===void 0&&(s.raw=s,Di.set(u,t=s)),r=l}return e(t,...r)},br=Ka($);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var mo=new Set,Ja=new MutationObserver(Rs),ht=new Map,Us=document.documentElement.dir||"ltr",Os=document.documentElement.lang||navigator.language,jt;Ja.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function Xa(...e){e.map(t=>{const r=t.$code.toLowerCase();ht.has(r)?ht.set(r,Object.assign(Object.assign({},ht.get(r)),t)):ht.set(r,t),jt||(jt=t)}),Rs()}function Rs(){Us=document.documentElement.dir||"ltr",Os=document.documentElement.lang||navigator.language,[...mo.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}var Ya=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){mo.add(this.host)}hostDisconnected(){mo.delete(this.host)}dir(){return`${this.host.dir||Us}`.toLowerCase()}lang(){return`${this.host.lang||Os}`.toLowerCase()}term(e,...t){const r=this.lang().toLowerCase().slice(0,2),o=this.lang().length>2?this.lang().toLowerCase():"",i=ht.get(o),n=ht.get(r);let s;if(i&&i[e])s=i[e];else if(n&&n[e])s=n[e];else if(jt&&jt[e])s=jt[e];else return console.error(`No translation found for: ${String(e)}`),e;return typeof s=="function"?s(...t):s}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(e,t)}},de=class extends Ya{},Qa={$code:"en",$name:"English",$dir:"ltr",clearEntry:"Clear entry",close:"Close",copy:"Copy",currentValue:"Current value",hidePassword:"Hide password",loading:"Loading",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",toggleColorFormat:"Toggle color format"};Xa(Qa);var rr=class{constructor(e,...t){this.slotNames=[],(this.host=e).addController(this),this.slotNames=t,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(e){const t=e.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()}};function Ms(e){if(!e)return"";const t=e.assignedNodes({flatten:!0});let r="";return[...t].forEach(o=>{o.nodeType===Node.TEXT_NODE&&(r+=o.textContent)}),r}var Te={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Nr=e=>(...t)=>({_$litDirective$:e,values:t}),Vr=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var V=Nr(class extends Vr{constructor(e){var t;if(super(e),e.type!==Te.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,o;if(this.et===void 0){this.et=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!(!((r=this.st)===null||r===void 0)&&r.has(n))&&this.et.add(n);return this.render(t)}const i=e.element.classList;this.et.forEach(n=>{n in t||(i.remove(n),this.et.delete(n))});for(const n in t){const s=!!t[n];s===this.et.has(n)||((o=this.st)===null||o===void 0?void 0:o.has(n))||(s?(i.add(n),this.et.add(n)):(i.remove(n),this.et.delete(n)))}return ae}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var k=e=>e!=null?e:q;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var R=e=>t=>typeof t=="function"?((r,o)=>(window.customElements.define(r,o),o))(e,t):((r,o)=>{const{kind:i,elements:n}=o;return{kind:i,elements:n,finisher(s){window.customElements.define(r,s)}}})(e,t),Za=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?pe(W({},t),{finisher(r){r.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function m(e){return(t,r)=>r!==void 0?((o,i,n)=>{i.constructor.createProperty(n,o)})(e,t,r):Za(e,t)}function M(e){return m(pe(W({},e),{state:!0}))}var el=({finisher:e,descriptor:t})=>(r,o)=>{var i;if(o===void 0){const n=(i=r.originalKey)!==null&&i!==void 0?i:r.key,s=t!=null?{kind:"method",placement:"prototype",key:n,descriptor:t(r.key)}:pe(W({},r),{key:n});return e!=null&&(s.finisher=function(l){e(l,n)}),s}{const n=r.constructor;t!==void 0&&Object.defineProperty(r,o,t(o)),e==null||e(n,o)}};function E(e,t){return el({descriptor:r=>{const o={get(){var i,n;return(n=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(e))!==null&&n!==void 0?n:null},enumerable:!0,configurable:!0};if(t){const i=typeof r=="symbol"?Symbol():"__"+r;o.get=function(){var n,s;return this[i]===void 0&&(this[i]=(s=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(e))!==null&&s!==void 0?s:null),this[i]}}return o}})}var io;((io=window.HTMLSlotElement)===null||io===void 0?void 0:io.prototype.assignedElements)!=null;var U=class extends Ht{emit(e,t){const r=new CustomEvent(e,W({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(r),r}};h([m()],U.prototype,"dir",2);h([m()],U.prototype,"lang",2);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var j=class extends U{constructor(){super(...arguments),this.formSubmitController=new st(this,{form:e=>{if(e.hasAttribute("form")){const t=e.getRootNode(),r=e.getAttribute("form");return t.getElementById(r)}return e.closest("form")}}),this.hasSlotController=new rr(this,"[default]","prefix","suffix"),this.localize=new de(this),this.hasFocus=!1,this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button"}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopPropagation();return}this.type==="submit"&&this.formSubmitController.submit(this),this.type==="reset"&&this.formSubmitController.reset(this)}render(){const e=!!this.href,t=e?Er`a`:Er`button`;return br`
      <${t}
        part="base"
        class=${V({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${k(e?void 0:this.disabled)}
        type=${k(e?void 0:this.type)}
        name=${k(e?void 0:this.name)}
        value=${k(e?void 0:this.value)}
        href=${k(e?this.href:void 0)}
        target=${k(e?this.target:void 0)}
        download=${k(e?this.download:void 0)}
        rel=${k(e&&this.target?"noreferrer noopener":void 0)}
        role=${k(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <span part="prefix" class="button__prefix">
          <slot name="prefix"></slot>
        </span>
        <span part="label" class="button__label">
          <slot></slot>
        </span>
        <span part="suffix" class="button__suffix">
          <slot name="suffix"></slot>
        </span>
        ${this.caret?br`
                <span part="caret" class="button__caret">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              `:""}
        ${this.loading?br`<sl-spinner></sl-spinner>`:""}
      </${t}>
    `}};j.styles=Ba;h([E(".button")],j.prototype,"button",2);h([M()],j.prototype,"hasFocus",2);h([m({reflect:!0})],j.prototype,"variant",2);h([m({reflect:!0})],j.prototype,"size",2);h([m({type:Boolean,reflect:!0})],j.prototype,"caret",2);h([m({type:Boolean,reflect:!0})],j.prototype,"disabled",2);h([m({type:Boolean,reflect:!0})],j.prototype,"loading",2);h([m({type:Boolean,reflect:!0})],j.prototype,"outline",2);h([m({type:Boolean,reflect:!0})],j.prototype,"pill",2);h([m({type:Boolean,reflect:!0})],j.prototype,"circle",2);h([m()],j.prototype,"type",2);h([m()],j.prototype,"name",2);h([m()],j.prototype,"value",2);h([m()],j.prototype,"href",2);h([m()],j.prototype,"target",2);h([m()],j.prototype,"download",2);h([m()],j.prototype,"form",2);h([m({attribute:"formaction"})],j.prototype,"formAction",2);h([m({attribute:"formmethod"})],j.prototype,"formMethod",2);h([m({attribute:"formnovalidate",type:Boolean})],j.prototype,"formNoValidate",2);h([m({attribute:"formtarget"})],j.prototype,"formTarget",2);j=h([R("sl-button")],j);var tl=L`
  ${O}

  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
    mix-blend-mode: multiply;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.01em, 2.75em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.01em, 2.75em;
    }
  }
`,go=class extends U{constructor(){super(...arguments),this.localize=new de(this)}render(){return $`
      <svg part="base" class="spinner" role="progressbar" aria-valuetext=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};go.styles=tl;go=h([R("sl-spinner")],go);var rl=e=>e.strings===void 0,ol={},il=(e,t=ol)=>e._$AH=t,Qt=Nr(class extends Vr{constructor(e){if(super(e),e.type!==Te.PROPERTY&&e.type!==Te.ATTRIBUTE&&e.type!==Te.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!rl(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===ae||t===q)return t;const r=e.element,o=e.name;if(e.type===Te.PROPERTY){if(t===r[o])return ae}else if(e.type===Te.BOOLEAN_ATTRIBUTE){if(!!t===r.hasAttribute(o))return ae}else if(e.type===Te.ATTRIBUTE&&r.getAttribute(o)===t+"")return ae;return il(e),t}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var or=(e="value")=>(t,r)=>{const o=t.constructor,i=o.prototype.attributeChangedCallback;o.prototype.attributeChangedCallback=function(n,s,l){var a;const c=o.getPropertyOptions(e),d=typeof c.attribute=="string"?c.attribute:e;if(n===d){const u=c.converter||Jt,g=(typeof u=="function"?u:(a=u==null?void 0:u.fromAttribute)!=null?a:Jt.fromAttribute)(l,c.type);this[e]!==g&&(this[r]=g)}i.call(this,n,s,l)}},sl=L`
  ${O}

  :host {
    display: inline-block;
  }

  .checkbox {
    display: inline-flex;
    align-items: top;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--sl-toggle-size);
    height: var(--sl-toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__control .checkbox__icon {
    display: inline-flex;
    width: var(--sl-toggle-size);
    height: var(--sl-toggle-size);
  }

  .checkbox__control .checkbox__icon svg {
    width: 100%;
    height: 100%;
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    color: var(--sl-input-label-color);
    line-height: var(--sl-toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`;function C(e,t){const r=W({waitUntilFirstUpdate:!1},t);return(o,i)=>{const{update:n}=o;if(e in o){const s=e;o.update=function(l){if(l.has(s)){const a=l.get(s),c=this[s];a!==c&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[i](a,c)}n.call(this,l)}}}}var te=class extends U{constructor(){super(...arguments),this.formSubmitController=new st(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasFocus=!1,this.disabled=!1,this.required=!1,this.checked=!1,this.indeterminate=!1,this.invalid=!1,this.defaultChecked=!1}firstUpdated(){this.invalid=!this.input.checkValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.invalid=!this.input.checkValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleDisabledChange(){this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleStateChange(){this.invalid=!this.input.checkValidity()}render(){return $`
      <label
        part="base"
        class=${V({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate})}
      >
        <input
          class="checkbox__input"
          type="checkbox"
          name=${k(this.name)}
          value=${k(this.value)}
          .indeterminate=${Qt(this.indeterminate)}
          .checked=${Qt(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          aria-checked=${this.checked?"true":"false"}
          @click=${this.handleClick}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
        />

        <span part="control" class="checkbox__control">
          ${this.checked?$`
                <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                    <g stroke="currentColor" stroke-width="2">
                      <g transform="translate(3.428571, 3.428571)">
                        <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
                        <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
                      </g>
                    </g>
                  </g>
                </svg>
              `:""}
          ${!this.checked&&this.indeterminate?$`
                <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                    <g stroke="currentColor" stroke-width="2">
                      <g transform="translate(2.285714, 6.857143)">
                        <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
                      </g>
                    </g>
                  </g>
                </svg>
              `:""}
        </span>

        <span part="label" class="checkbox__label">
          <slot></slot>
        </span>
      </label>
    `}};te.styles=sl;h([E('input[type="checkbox"]')],te.prototype,"input",2);h([M()],te.prototype,"hasFocus",2);h([m()],te.prototype,"name",2);h([m()],te.prototype,"value",2);h([m({type:Boolean,reflect:!0})],te.prototype,"disabled",2);h([m({type:Boolean,reflect:!0})],te.prototype,"required",2);h([m({type:Boolean,reflect:!0})],te.prototype,"checked",2);h([m({type:Boolean,reflect:!0})],te.prototype,"indeterminate",2);h([m({type:Boolean,reflect:!0})],te.prototype,"invalid",2);h([or("checked")],te.prototype,"defaultChecked",2);h([C("disabled",{waitUntilFirstUpdate:!0})],te.prototype,"handleDisabledChange",1);h([C("checked",{waitUntilFirstUpdate:!0}),C("indeterminate",{waitUntilFirstUpdate:!0})],te.prototype,"handleStateChange",1);te=h([R("sl-checkbox")],te);function so(e,t){var r;function o(n){const s=e.getBoundingClientRect(),l=e.ownerDocument.defaultView,a=s.left+l.pageXOffset,c=s.top+l.pageYOffset,d=n.pageX-a,u=n.pageY-c;t!=null&&t.onMove&&t.onMove(d,u)}function i(){document.removeEventListener("pointermove",o),document.removeEventListener("pointerup",i),t!=null&&t.onStop&&t.onStop()}document.addEventListener("pointermove",o,{passive:!0}),document.addEventListener("pointerup",i),((r=t==null?void 0:t.initialEvent)==null?void 0:r.type)==="pointermove"&&o(t.initialEvent)}function oe(e,t,r){return e<t?t:e>r?r:e}var De=Nr(class extends Vr{constructor(e){var t;if(super(e),e.type!==Te.ATTRIBUTE||e.name!=="style"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,r)=>{const o=e[r];return o==null?t:t+`${r=r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(e,[t]){const{style:r}=e.element;if(this.ct===void 0){this.ct=new Set;for(const o in t)this.ct.add(o);return this.render(t)}this.ct.forEach(o=>{t[o]==null&&(this.ct.delete(o),o.includes("-")?r.removeProperty(o):r[o]="")});for(const o in t){const i=t[o];i!=null&&(this.ct.add(o),o.includes("-")?r.setProperty(o,i):r[o]=i)}return ae}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var nl=L`
  ${O}

  :host {
    --grid-width: 280px;
    --grid-height: 200px;
    --grid-handle-size: 16px;
    --slider-height: 15px;
    --slider-handle-size: 17px;
    --swatch-size: 25px;

    display: inline-block;
  }

  .color-picker {
    width: var(--grid-width);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    user-select: none;
  }

  .color-picker--inline {
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
  }

  .color-picker--inline:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__grid {
    position: relative;
    height: var(--grid-height);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: var(--sl-border-radius-medium);
    border-top-right-radius: var(--sl-border-radius-medium);
    cursor: crosshair;
  }

  .color-picker__grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    border: solid 2px white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: var(--sl-transition-fast) transform;
  }

  .color-picker__grid-handle--dragging {
    cursor: none;
    transform: scale(1.5);
  }

  .color-picker__grid-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__controls {
    padding: var(--sl-spacing-small);
    display: flex;
    align-items: center;
  }

  .color-picker__sliders {
    flex: 1 1 auto;
  }

  .color-picker__slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
  }

  .color-picker__slider:not(:last-of-type) {
    margin-bottom: var(--sl-spacing-small);
  }

  .color-picker__slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .color-picker__slider-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .color-picker__alpha .color-picker__alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .color-picker__preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 2.25rem;
    height: 2.25rem;
    border: none;
    border-radius: var(--sl-border-radius-circle);
    background: none;
    margin-left: var(--sl-spacing-small);
    cursor: copy;
  }

  .color-picker__preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .color-picker__preview:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
  }

  .color-picker__preview-color--copied {
    animation: pulse 0.75s;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--sl-color-primary-500);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .color-picker__user-input {
    display: flex;
    padding: 0 var(--sl-spacing-small) var(--sl-spacing-small) var(--sl-spacing-small);
  }

  .color-picker__user-input sl-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;
  }

  .color-picker__user-input sl-button-group {
    margin-left: var(--sl-spacing-small);
  }

  .color-picker__user-input sl-button {
    min-width: 3.25rem;
    max-width: 3.25rem;
    font-size: 1rem;
  }

  .color-picker__swatches {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 0.5rem;
    justify-items: center;
    border-top: solid 1px var(--sl-color-neutral-200);
    padding: var(--sl-spacing-small);
  }

  .color-picker__swatch {
    position: relative;
    width: var(--swatch-size);
    height: var(--swatch-size);
    border-radius: var(--sl-border-radius-small);
  }

  .color-picker__swatch .color-picker__swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .color-picker__swatch:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__transparent-bg {
    background-image: linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%);
    background-size: 10px 10px;
    background-position: 0 0, 0 0, -5px -5px, 5px 5px;
  }

  .color-picker--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .color-picker--disabled .color-picker__grid,
  .color-picker--disabled .color-picker__grid-handle,
  .color-picker--disabled .color-picker__slider,
  .color-picker--disabled .color-picker__slider-handle,
  .color-picker--disabled .color-picker__preview,
  .color-picker--disabled .color-picker__swatch,
  .color-picker--disabled .color-picker__swatch-color {
    pointer-events: none;
  }

  /*
   * Color dropdown
   */

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    overflow: visible;
  }

  .color-dropdown__trigger {
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  .color-dropdown__trigger.color-dropdown__trigger--small {
    width: var(--sl-input-height-small);
    height: var(--sl-input-height-small);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--medium {
    width: var(--sl-input-height-medium);
    height: var(--sl-input-height-medium);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--large {
    width: var(--sl-input-height-large);
    height: var(--sl-input-height-large);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow: inset 0 0 0 2px var(--sl-input-border-color), inset 0 0 0 4px var(--sl-color-neutral-0);
  }

  .color-dropdown__trigger--empty:before {
    background-color: transparent;
  }

  .color-dropdown__trigger:focus-visible {
    outline: none;
  }

  .color-dropdown__trigger:focus-visible:not(.color-dropdown__trigger--disabled) {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-dropdown__trigger.color-dropdown__trigger--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Ds=qe({"node_modules/color-name/index.js"(e,t){t.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}}}),al=qe({"node_modules/simple-swizzle/node_modules/is-arrayish/index.js"(e,t){t.exports=function(o){return!o||typeof o=="string"?!1:o instanceof Array||Array.isArray(o)||o.length>=0&&(o.splice instanceof Function||Object.getOwnPropertyDescriptor(o,o.length-1)&&o.constructor.name!=="String")}}}),ll=qe({"node_modules/simple-swizzle/index.js"(e,t){var r=al(),o=Array.prototype.concat,i=Array.prototype.slice,n=t.exports=function(l){for(var a=[],c=0,d=l.length;c<d;c++){var u=l[c];r(u)?a=o.call(a,i.call(u)):a.push(u)}return a};n.wrap=function(s){return function(){return s(n(arguments))}}}}),cl=qe({"node_modules/color-string/index.js"(e,t){var r=Ds(),o=ll(),i=Object.hasOwnProperty,n={};for(s in r)i.call(r,s)&&(n[r[s]]=s);var s,l=t.exports={to:{},get:{}};l.get=function(d){var u=d.substring(0,3).toLowerCase(),p,g;switch(u){case"hsl":p=l.get.hsl(d),g="hsl";break;case"hwb":p=l.get.hwb(d),g="hwb";break;default:p=l.get.rgb(d),g="rgb";break}return p?{model:g,value:p}:null},l.get.rgb=function(d){if(!d)return null;var u=/^#([a-f0-9]{3,4})$/i,p=/^#([a-f0-9]{6})([a-f0-9]{2})?$/i,g=/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,y=/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,f=/^(\w+)$/,b=[0,0,0,1],v,w,x;if(v=d.match(p)){for(x=v[2],v=v[1],w=0;w<3;w++){var z=w*2;b[w]=parseInt(v.slice(z,z+2),16)}x&&(b[3]=parseInt(x,16)/255)}else if(v=d.match(u)){for(v=v[1],x=v[3],w=0;w<3;w++)b[w]=parseInt(v[w]+v[w],16);x&&(b[3]=parseInt(x+x,16)/255)}else if(v=d.match(g)){for(w=0;w<3;w++)b[w]=parseInt(v[w+1],0);v[4]&&(v[5]?b[3]=parseFloat(v[4])*.01:b[3]=parseFloat(v[4]))}else if(v=d.match(y)){for(w=0;w<3;w++)b[w]=Math.round(parseFloat(v[w+1])*2.55);v[4]&&(v[5]?b[3]=parseFloat(v[4])*.01:b[3]=parseFloat(v[4]))}else return(v=d.match(f))?v[1]==="transparent"?[0,0,0,0]:i.call(r,v[1])?(b=r[v[1]],b[3]=1,b):null:null;for(w=0;w<3;w++)b[w]=a(b[w],0,255);return b[3]=a(b[3],0,1),b},l.get.hsl=function(d){if(!d)return null;var u=/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,p=d.match(u);if(p){var g=parseFloat(p[4]),y=(parseFloat(p[1])%360+360)%360,f=a(parseFloat(p[2]),0,100),b=a(parseFloat(p[3]),0,100),v=a(isNaN(g)?1:g,0,1);return[y,f,b,v]}return null},l.get.hwb=function(d){if(!d)return null;var u=/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,p=d.match(u);if(p){var g=parseFloat(p[4]),y=(parseFloat(p[1])%360+360)%360,f=a(parseFloat(p[2]),0,100),b=a(parseFloat(p[3]),0,100),v=a(isNaN(g)?1:g,0,1);return[y,f,b,v]}return null},l.to.hex=function(){var d=o(arguments);return"#"+c(d[0])+c(d[1])+c(d[2])+(d[3]<1?c(Math.round(d[3]*255)):"")},l.to.rgb=function(){var d=o(arguments);return d.length<4||d[3]===1?"rgb("+Math.round(d[0])+", "+Math.round(d[1])+", "+Math.round(d[2])+")":"rgba("+Math.round(d[0])+", "+Math.round(d[1])+", "+Math.round(d[2])+", "+d[3]+")"},l.to.rgb.percent=function(){var d=o(arguments),u=Math.round(d[0]/255*100),p=Math.round(d[1]/255*100),g=Math.round(d[2]/255*100);return d.length<4||d[3]===1?"rgb("+u+"%, "+p+"%, "+g+"%)":"rgba("+u+"%, "+p+"%, "+g+"%, "+d[3]+")"},l.to.hsl=function(){var d=o(arguments);return d.length<4||d[3]===1?"hsl("+d[0]+", "+d[1]+"%, "+d[2]+"%)":"hsla("+d[0]+", "+d[1]+"%, "+d[2]+"%, "+d[3]+")"},l.to.hwb=function(){var d=o(arguments),u="";return d.length>=4&&d[3]!==1&&(u=", "+d[3]),"hwb("+d[0]+", "+d[1]+"%, "+d[2]+"%"+u+")"},l.to.keyword=function(d){return n[d.slice(0,3)]};function a(d,u,p){return Math.min(Math.max(u,d),p)}function c(d){var u=Math.round(d).toString(16).toUpperCase();return u.length<2?"0"+u:u}}}),Is=qe({"node_modules/color-convert/conversions.js"(e,t){var r=Ds(),o={};for(const s of Object.keys(r))o[r[s]]=s;var i={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};t.exports=i;for(const s of Object.keys(i)){if(!("channels"in i[s]))throw new Error("missing channels property: "+s);if(!("labels"in i[s]))throw new Error("missing channel labels property: "+s);if(i[s].labels.length!==i[s].channels)throw new Error("channel and label counts mismatch: "+s);const{channels:l,labels:a}=i[s];delete i[s].channels,delete i[s].labels,Object.defineProperty(i[s],"channels",{value:l}),Object.defineProperty(i[s],"labels",{value:a})}i.rgb.hsl=function(s){const l=s[0]/255,a=s[1]/255,c=s[2]/255,d=Math.min(l,a,c),u=Math.max(l,a,c),p=u-d;let g,y;u===d?g=0:l===u?g=(a-c)/p:a===u?g=2+(c-l)/p:c===u&&(g=4+(l-a)/p),g=Math.min(g*60,360),g<0&&(g+=360);const f=(d+u)/2;return u===d?y=0:f<=.5?y=p/(u+d):y=p/(2-u-d),[g,y*100,f*100]},i.rgb.hsv=function(s){let l,a,c,d,u;const p=s[0]/255,g=s[1]/255,y=s[2]/255,f=Math.max(p,g,y),b=f-Math.min(p,g,y),v=function(w){return(f-w)/6/b+1/2};return b===0?(d=0,u=0):(u=b/f,l=v(p),a=v(g),c=v(y),p===f?d=c-a:g===f?d=1/3+l-c:y===f&&(d=2/3+a-l),d<0?d+=1:d>1&&(d-=1)),[d*360,u*100,f*100]},i.rgb.hwb=function(s){const l=s[0],a=s[1];let c=s[2];const d=i.rgb.hsl(s)[0],u=1/255*Math.min(l,Math.min(a,c));return c=1-1/255*Math.max(l,Math.max(a,c)),[d,u*100,c*100]},i.rgb.cmyk=function(s){const l=s[0]/255,a=s[1]/255,c=s[2]/255,d=Math.min(1-l,1-a,1-c),u=(1-l-d)/(1-d)||0,p=(1-a-d)/(1-d)||0,g=(1-c-d)/(1-d)||0;return[u*100,p*100,g*100,d*100]};function n(s,l){return(s[0]-l[0])**2+(s[1]-l[1])**2+(s[2]-l[2])**2}i.rgb.keyword=function(s){const l=o[s];if(l)return l;let a=1/0,c;for(const d of Object.keys(r)){const u=r[d],p=n(s,u);p<a&&(a=p,c=d)}return c},i.keyword.rgb=function(s){return r[s]},i.rgb.xyz=function(s){let l=s[0]/255,a=s[1]/255,c=s[2]/255;l=l>.04045?((l+.055)/1.055)**2.4:l/12.92,a=a>.04045?((a+.055)/1.055)**2.4:a/12.92,c=c>.04045?((c+.055)/1.055)**2.4:c/12.92;const d=l*.4124+a*.3576+c*.1805,u=l*.2126+a*.7152+c*.0722,p=l*.0193+a*.1192+c*.9505;return[d*100,u*100,p*100]},i.rgb.lab=function(s){const l=i.rgb.xyz(s);let a=l[0],c=l[1],d=l[2];a/=95.047,c/=100,d/=108.883,a=a>.008856?a**(1/3):7.787*a+16/116,c=c>.008856?c**(1/3):7.787*c+16/116,d=d>.008856?d**(1/3):7.787*d+16/116;const u=116*c-16,p=500*(a-c),g=200*(c-d);return[u,p,g]},i.hsl.rgb=function(s){const l=s[0]/360,a=s[1]/100,c=s[2]/100;let d,u,p;if(a===0)return p=c*255,[p,p,p];c<.5?d=c*(1+a):d=c+a-c*a;const g=2*c-d,y=[0,0,0];for(let f=0;f<3;f++)u=l+1/3*-(f-1),u<0&&u++,u>1&&u--,6*u<1?p=g+(d-g)*6*u:2*u<1?p=d:3*u<2?p=g+(d-g)*(2/3-u)*6:p=g,y[f]=p*255;return y},i.hsl.hsv=function(s){const l=s[0];let a=s[1]/100,c=s[2]/100,d=a;const u=Math.max(c,.01);c*=2,a*=c<=1?c:2-c,d*=u<=1?u:2-u;const p=(c+a)/2,g=c===0?2*d/(u+d):2*a/(c+a);return[l,g*100,p*100]},i.hsv.rgb=function(s){const l=s[0]/60,a=s[1]/100;let c=s[2]/100;const d=Math.floor(l)%6,u=l-Math.floor(l),p=255*c*(1-a),g=255*c*(1-a*u),y=255*c*(1-a*(1-u));switch(c*=255,d){case 0:return[c,y,p];case 1:return[g,c,p];case 2:return[p,c,y];case 3:return[p,g,c];case 4:return[y,p,c];case 5:return[c,p,g]}},i.hsv.hsl=function(s){const l=s[0],a=s[1]/100,c=s[2]/100,d=Math.max(c,.01);let u,p;p=(2-a)*c;const g=(2-a)*d;return u=a*d,u/=g<=1?g:2-g,u=u||0,p/=2,[l,u*100,p*100]},i.hwb.rgb=function(s){const l=s[0]/360;let a=s[1]/100,c=s[2]/100;const d=a+c;let u;d>1&&(a/=d,c/=d);const p=Math.floor(6*l),g=1-c;u=6*l-p,(p&1)!==0&&(u=1-u);const y=a+u*(g-a);let f,b,v;switch(p){default:case 6:case 0:f=g,b=y,v=a;break;case 1:f=y,b=g,v=a;break;case 2:f=a,b=g,v=y;break;case 3:f=a,b=y,v=g;break;case 4:f=y,b=a,v=g;break;case 5:f=g,b=a,v=y;break}return[f*255,b*255,v*255]},i.cmyk.rgb=function(s){const l=s[0]/100,a=s[1]/100,c=s[2]/100,d=s[3]/100,u=1-Math.min(1,l*(1-d)+d),p=1-Math.min(1,a*(1-d)+d),g=1-Math.min(1,c*(1-d)+d);return[u*255,p*255,g*255]},i.xyz.rgb=function(s){const l=s[0]/100,a=s[1]/100,c=s[2]/100;let d,u,p;return d=l*3.2406+a*-1.5372+c*-.4986,u=l*-.9689+a*1.8758+c*.0415,p=l*.0557+a*-.204+c*1.057,d=d>.0031308?1.055*d**(1/2.4)-.055:d*12.92,u=u>.0031308?1.055*u**(1/2.4)-.055:u*12.92,p=p>.0031308?1.055*p**(1/2.4)-.055:p*12.92,d=Math.min(Math.max(0,d),1),u=Math.min(Math.max(0,u),1),p=Math.min(Math.max(0,p),1),[d*255,u*255,p*255]},i.xyz.lab=function(s){let l=s[0],a=s[1],c=s[2];l/=95.047,a/=100,c/=108.883,l=l>.008856?l**(1/3):7.787*l+16/116,a=a>.008856?a**(1/3):7.787*a+16/116,c=c>.008856?c**(1/3):7.787*c+16/116;const d=116*a-16,u=500*(l-a),p=200*(a-c);return[d,u,p]},i.lab.xyz=function(s){const l=s[0],a=s[1],c=s[2];let d,u,p;u=(l+16)/116,d=a/500+u,p=u-c/200;const g=u**3,y=d**3,f=p**3;return u=g>.008856?g:(u-16/116)/7.787,d=y>.008856?y:(d-16/116)/7.787,p=f>.008856?f:(p-16/116)/7.787,d*=95.047,u*=100,p*=108.883,[d,u,p]},i.lab.lch=function(s){const l=s[0],a=s[1],c=s[2];let d;d=Math.atan2(c,a)*360/2/Math.PI,d<0&&(d+=360);const p=Math.sqrt(a*a+c*c);return[l,p,d]},i.lch.lab=function(s){const l=s[0],a=s[1],d=s[2]/360*2*Math.PI,u=a*Math.cos(d),p=a*Math.sin(d);return[l,u,p]},i.rgb.ansi16=function(s,l=null){const[a,c,d]=s;let u=l===null?i.rgb.hsv(s)[2]:l;if(u=Math.round(u/50),u===0)return 30;let p=30+(Math.round(d/255)<<2|Math.round(c/255)<<1|Math.round(a/255));return u===2&&(p+=60),p},i.hsv.ansi16=function(s){return i.rgb.ansi16(i.hsv.rgb(s),s[2])},i.rgb.ansi256=function(s){const l=s[0],a=s[1],c=s[2];return l===a&&a===c?l<8?16:l>248?231:Math.round((l-8)/247*24)+232:16+36*Math.round(l/255*5)+6*Math.round(a/255*5)+Math.round(c/255*5)},i.ansi16.rgb=function(s){let l=s%10;if(l===0||l===7)return s>50&&(l+=3.5),l=l/10.5*255,[l,l,l];const a=(~~(s>50)+1)*.5,c=(l&1)*a*255,d=(l>>1&1)*a*255,u=(l>>2&1)*a*255;return[c,d,u]},i.ansi256.rgb=function(s){if(s>=232){const u=(s-232)*10+8;return[u,u,u]}s-=16;let l;const a=Math.floor(s/36)/5*255,c=Math.floor((l=s%36)/6)/5*255,d=l%6/5*255;return[a,c,d]},i.rgb.hex=function(s){const a=(((Math.round(s[0])&255)<<16)+((Math.round(s[1])&255)<<8)+(Math.round(s[2])&255)).toString(16).toUpperCase();return"000000".substring(a.length)+a},i.hex.rgb=function(s){const l=s.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!l)return[0,0,0];let a=l[0];l[0].length===3&&(a=a.split("").map(g=>g+g).join(""));const c=parseInt(a,16),d=c>>16&255,u=c>>8&255,p=c&255;return[d,u,p]},i.rgb.hcg=function(s){const l=s[0]/255,a=s[1]/255,c=s[2]/255,d=Math.max(Math.max(l,a),c),u=Math.min(Math.min(l,a),c),p=d-u;let g,y;return p<1?g=u/(1-p):g=0,p<=0?y=0:d===l?y=(a-c)/p%6:d===a?y=2+(c-l)/p:y=4+(l-a)/p,y/=6,y%=1,[y*360,p*100,g*100]},i.hsl.hcg=function(s){const l=s[1]/100,a=s[2]/100,c=a<.5?2*l*a:2*l*(1-a);let d=0;return c<1&&(d=(a-.5*c)/(1-c)),[s[0],c*100,d*100]},i.hsv.hcg=function(s){const l=s[1]/100,a=s[2]/100,c=l*a;let d=0;return c<1&&(d=(a-c)/(1-c)),[s[0],c*100,d*100]},i.hcg.rgb=function(s){const l=s[0]/360,a=s[1]/100,c=s[2]/100;if(a===0)return[c*255,c*255,c*255];const d=[0,0,0],u=l%1*6,p=u%1,g=1-p;let y=0;switch(Math.floor(u)){case 0:d[0]=1,d[1]=p,d[2]=0;break;case 1:d[0]=g,d[1]=1,d[2]=0;break;case 2:d[0]=0,d[1]=1,d[2]=p;break;case 3:d[0]=0,d[1]=g,d[2]=1;break;case 4:d[0]=p,d[1]=0,d[2]=1;break;default:d[0]=1,d[1]=0,d[2]=g}return y=(1-a)*c,[(a*d[0]+y)*255,(a*d[1]+y)*255,(a*d[2]+y)*255]},i.hcg.hsv=function(s){const l=s[1]/100,a=s[2]/100,c=l+a*(1-l);let d=0;return c>0&&(d=l/c),[s[0],d*100,c*100]},i.hcg.hsl=function(s){const l=s[1]/100,c=s[2]/100*(1-l)+.5*l;let d=0;return c>0&&c<.5?d=l/(2*c):c>=.5&&c<1&&(d=l/(2*(1-c))),[s[0],d*100,c*100]},i.hcg.hwb=function(s){const l=s[1]/100,a=s[2]/100,c=l+a*(1-l);return[s[0],(c-l)*100,(1-c)*100]},i.hwb.hcg=function(s){const l=s[1]/100,a=s[2]/100,c=1-a,d=c-l;let u=0;return d<1&&(u=(c-d)/(1-d)),[s[0],d*100,u*100]},i.apple.rgb=function(s){return[s[0]/65535*255,s[1]/65535*255,s[2]/65535*255]},i.rgb.apple=function(s){return[s[0]/255*65535,s[1]/255*65535,s[2]/255*65535]},i.gray.rgb=function(s){return[s[0]/100*255,s[0]/100*255,s[0]/100*255]},i.gray.hsl=function(s){return[0,0,s[0]]},i.gray.hsv=i.gray.hsl,i.gray.hwb=function(s){return[0,100,s[0]]},i.gray.cmyk=function(s){return[0,0,0,s[0]]},i.gray.lab=function(s){return[s[0],0,0]},i.gray.hex=function(s){const l=Math.round(s[0]/100*255)&255,c=((l<<16)+(l<<8)+l).toString(16).toUpperCase();return"000000".substring(c.length)+c},i.rgb.gray=function(s){return[(s[0]+s[1]+s[2])/3/255*100]}}}),dl=qe({"node_modules/color-convert/route.js"(e,t){var r=Is();function o(){const l={},a=Object.keys(r);for(let c=a.length,d=0;d<c;d++)l[a[d]]={distance:-1,parent:null};return l}function i(l){const a=o(),c=[l];for(a[l].distance=0;c.length;){const d=c.pop(),u=Object.keys(r[d]);for(let p=u.length,g=0;g<p;g++){const y=u[g],f=a[y];f.distance===-1&&(f.distance=a[d].distance+1,f.parent=d,c.unshift(y))}}return a}function n(l,a){return function(c){return a(l(c))}}function s(l,a){const c=[a[l].parent,l];let d=r[a[l].parent][l],u=a[l].parent;for(;a[u].parent;)c.unshift(a[u].parent),d=n(r[a[u].parent][u],d),u=a[u].parent;return d.conversion=c,d}t.exports=function(l){const a=i(l),c={},d=Object.keys(a);for(let u=d.length,p=0;p<u;p++){const g=d[p];a[g].parent!==null&&(c[g]=s(g,a))}return c}}}),ul=qe({"node_modules/color-convert/index.js"(e,t){var r=Is(),o=dl(),i={},n=Object.keys(r);function s(a){const c=function(...d){const u=d[0];return u==null?u:(u.length>1&&(d=u),a(d))};return"conversion"in a&&(c.conversion=a.conversion),c}function l(a){const c=function(...d){const u=d[0];if(u==null)return u;u.length>1&&(d=u);const p=a(d);if(typeof p=="object")for(let g=p.length,y=0;y<g;y++)p[y]=Math.round(p[y]);return p};return"conversion"in a&&(c.conversion=a.conversion),c}n.forEach(a=>{i[a]={},Object.defineProperty(i[a],"channels",{value:r[a].channels}),Object.defineProperty(i[a],"labels",{value:r[a].labels});const c=o(a);Object.keys(c).forEach(u=>{const p=c[u];i[a][u]=l(p),i[a][u].raw=s(p)})}),t.exports=i}}),hl=qe({"node_modules/color/index.js"(e,t){var r=cl(),o=ul(),i=[].slice,n=["keyword","gray","hex"],s={};for(const f of Object.keys(o))s[i.call(o[f].labels).sort().join("")]=f;var l={};function a(f,b){if(!(this instanceof a))return new a(f,b);if(b&&b in n&&(b=null),b&&!(b in o))throw new Error("Unknown model: "+b);let v,w;if(f==null)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(f instanceof a)this.model=f.model,this.color=f.color.slice(),this.valpha=f.valpha;else if(typeof f=="string"){const x=r.get(f);if(x===null)throw new Error("Unable to parse color from string: "+f);this.model=x.model,w=o[this.model].channels,this.color=x.value.slice(0,w),this.valpha=typeof x.value[w]=="number"?x.value[w]:1}else if(f.length>0){this.model=b||"rgb",w=o[this.model].channels;const x=i.call(f,0,w);this.color=y(x,w),this.valpha=typeof f[w]=="number"?f[w]:1}else if(typeof f=="number")this.model="rgb",this.color=[f>>16&255,f>>8&255,f&255],this.valpha=1;else{this.valpha=1;const x=Object.keys(f);"alpha"in f&&(x.splice(x.indexOf("alpha"),1),this.valpha=typeof f.alpha=="number"?f.alpha:0);const z=x.sort().join("");if(!(z in s))throw new Error("Unable to parse color from object: "+JSON.stringify(f));this.model=s[z];const ee=o[this.model].labels,Q=[];for(v=0;v<ee.length;v++)Q.push(f[ee[v]]);this.color=y(Q)}if(l[this.model])for(w=o[this.model].channels,v=0;v<w;v++){const x=l[this.model][v];x&&(this.color[v]=x(this.color[v]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}a.prototype={toString(){return this.string()},toJSON(){return this[this.model]()},string(f){let b=this.model in r.to?this:this.rgb();b=b.round(typeof f=="number"?f:1);const v=b.valpha===1?b.color:b.color.concat(this.valpha);return r.to[b.model](v)},percentString(f){const b=this.rgb().round(typeof f=="number"?f:1),v=b.valpha===1?b.color:b.color.concat(this.valpha);return r.to.rgb.percent(v)},array(){return this.valpha===1?this.color.slice():this.color.concat(this.valpha)},object(){const f={},b=o[this.model].channels,v=o[this.model].labels;for(let w=0;w<b;w++)f[v[w]]=this.color[w];return this.valpha!==1&&(f.alpha=this.valpha),f},unitArray(){const f=this.rgb().color;return f[0]/=255,f[1]/=255,f[2]/=255,this.valpha!==1&&f.push(this.valpha),f},unitObject(){const f=this.rgb().object();return f.r/=255,f.g/=255,f.b/=255,this.valpha!==1&&(f.alpha=this.valpha),f},round(f){return f=Math.max(f||0,0),new a(this.color.map(d(f)).concat(this.valpha),this.model)},alpha(f){return arguments.length>0?new a(this.color.concat(Math.max(0,Math.min(1,f))),this.model):this.valpha},red:u("rgb",0,p(255)),green:u("rgb",1,p(255)),blue:u("rgb",2,p(255)),hue:u(["hsl","hsv","hsl","hwb","hcg"],0,f=>(f%360+360)%360),saturationl:u("hsl",1,p(100)),lightness:u("hsl",2,p(100)),saturationv:u("hsv",1,p(100)),value:u("hsv",2,p(100)),chroma:u("hcg",1,p(100)),gray:u("hcg",2,p(100)),white:u("hwb",1,p(100)),wblack:u("hwb",2,p(100)),cyan:u("cmyk",0,p(100)),magenta:u("cmyk",1,p(100)),yellow:u("cmyk",2,p(100)),black:u("cmyk",3,p(100)),x:u("xyz",0,p(100)),y:u("xyz",1,p(100)),z:u("xyz",2,p(100)),l:u("lab",0,p(100)),a:u("lab",1),b:u("lab",2),keyword(f){return arguments.length>0?new a(f):o[this.model].keyword(this.color)},hex(f){return arguments.length>0?new a(f):r.to.hex(this.rgb().round().color)},hexa(f){if(arguments.length>0)return new a(f);const b=this.rgb().round().color;let v=Math.round(this.valpha*255).toString(16).toUpperCase();return v.length===1&&(v="0"+v),r.to.hex(b)+v},rgbNumber(){const f=this.rgb().color;return(f[0]&255)<<16|(f[1]&255)<<8|f[2]&255},luminosity(){const f=this.rgb().color,b=[];for(const[v,w]of f.entries()){const x=w/255;b[v]=x<=.03928?x/12.92:((x+.055)/1.055)**2.4}return .2126*b[0]+.7152*b[1]+.0722*b[2]},contrast(f){const b=this.luminosity(),v=f.luminosity();return b>v?(b+.05)/(v+.05):(v+.05)/(b+.05)},level(f){const b=this.contrast(f);return b>=7.1?"AAA":b>=4.5?"AA":""},isDark(){const f=this.rgb().color;return(f[0]*299+f[1]*587+f[2]*114)/1e3<128},isLight(){return!this.isDark()},negate(){const f=this.rgb();for(let b=0;b<3;b++)f.color[b]=255-f.color[b];return f},lighten(f){const b=this.hsl();return b.color[2]+=b.color[2]*f,b},darken(f){const b=this.hsl();return b.color[2]-=b.color[2]*f,b},saturate(f){const b=this.hsl();return b.color[1]+=b.color[1]*f,b},desaturate(f){const b=this.hsl();return b.color[1]-=b.color[1]*f,b},whiten(f){const b=this.hwb();return b.color[1]+=b.color[1]*f,b},blacken(f){const b=this.hwb();return b.color[2]+=b.color[2]*f,b},grayscale(){const f=this.rgb().color,b=f[0]*.3+f[1]*.59+f[2]*.11;return a.rgb(b,b,b)},fade(f){return this.alpha(this.valpha-this.valpha*f)},opaquer(f){return this.alpha(this.valpha+this.valpha*f)},rotate(f){const b=this.hsl();let v=b.color[0];return v=(v+f)%360,v=v<0?360+v:v,b.color[0]=v,b},mix(f,b){if(!f||!f.rgb)throw new Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof f);const v=f.rgb(),w=this.rgb(),x=b===void 0?.5:b,z=2*x-1,ee=v.alpha()-w.alpha(),Q=((z*ee===-1?z:(z+ee)/(1+z*ee))+1)/2,ue=1-Q;return a.rgb(Q*v.red()+ue*w.red(),Q*v.green()+ue*w.green(),Q*v.blue()+ue*w.blue(),v.alpha()*x+w.alpha()*(1-x))}};for(const f of Object.keys(o)){if(n.includes(f))continue;const b=o[f].channels;a.prototype[f]=function(){if(this.model===f)return new a(this);if(arguments.length>0)return new a(arguments,f);const v=typeof arguments[b]=="number"?b:this.valpha;return new a(g(o[this.model][f].raw(this.color)).concat(v),f)},a[f]=function(v){return typeof v=="number"&&(v=y(i.call(arguments),b)),new a(v,f)}}function c(f,b){return Number(f.toFixed(b))}function d(f){return function(b){return c(b,f)}}function u(f,b,v){f=Array.isArray(f)?f:[f];for(const w of f)(l[w]||(l[w]=[]))[b]=v;return f=f[0],function(w){let x;return arguments.length>0?(v&&(w=v(w)),x=this[f](),x.color[b]=w,x):(x=this[f]().color[b],v&&(x=v(x)),x)}}function p(f){return function(b){return Math.max(0,Math.min(f,b))}}function g(f){return Array.isArray(f)?f:[f]}function y(f,b){for(let v=0;v<b;v++)typeof f[v]!="number"&&(f[v]=0);return f}t.exports=a}}),pl=Aa(hl(),1),Ii="EyeDropper"in window,A=class extends U{constructor(){super(...arguments),this.formSubmitController=new st(this),this.isSafeValue=!1,this.localize=new de(this),this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.lightness=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.invalid=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches=["#d0021b","#f5a623","#f8e71c","#8b572a","#7ed321","#417505","#bd10e0","#9013fe","#4a90e2","#50e3c2","#b8e986","#000","#444","#888","#ccc","#fff"]}connectedCallback(){super.connectedCallback(),this.value?(this.setColor(this.value),this.inputValue=this.value,this.lastValueEmitted=this.value,this.syncValues()):(this.isEmpty=!0,this.inputValue="",this.lastValueEmitted="")}getFormattedValue(e="hex"){const t=this.parseColor(`hsla(${this.hue}, ${this.saturation}%, ${this.lightness}%, ${this.alpha/100})`);if(t===null)return"";switch(e){case"hex":return t.hex;case"hexa":return t.hexa;case"rgb":return t.rgb.string;case"rgba":return t.rgba.string;case"hsl":return t.hsl.string;case"hsla":return t.hsla.string;default:return""}}getBrightness(e){return oe(-1*(200*e/(this.saturation-200)),0,100)}getLightness(e){return oe((200-this.saturation)*e/100*5/10,0,100)}reportValidity(){return!this.inline&&this.input.invalid?new Promise(e=>{this.dropdown.addEventListener("sl-after-show",()=>{this.input.reportValidity(),e()},{once:!0}),this.dropdown.show()}):this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.invalid=this.input.invalid}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const e=["hex","rgb","hsl"],t=(e.indexOf(this.format)+1)%e.length;this.format=e[t]}handleAlphaDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),r=t.querySelector(".color-picker__slider-handle"),{width:o}=t.getBoundingClientRect();r.focus(),e.preventDefault(),so(t,{onMove:i=>{this.alpha=oe(i/o*100,0,100),this.syncValues()},initialEvent:e})}handleHueDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),r=t.querySelector(".color-picker__slider-handle"),{width:o}=t.getBoundingClientRect();r.focus(),e.preventDefault(),so(t,{onMove:i=>{this.hue=oe(i/o*360,0,360),this.syncValues()},initialEvent:e})}handleGridDrag(e){const t=this.shadowRoot.querySelector(".color-picker__grid"),r=t.querySelector(".color-picker__grid-handle"),{width:o,height:i}=t.getBoundingClientRect();r.focus(),e.preventDefault(),this.isDraggingGridHandle=!0,so(t,{onMove:(n,s)=>{this.saturation=oe(n/o*100,0,100),this.brightness=oe(100-s/i*100,0,100),this.lightness=this.getLightness(this.brightness),this.syncValues()},onStop:()=>this.isDraggingGridHandle=!1,initialEvent:e})}handleAlphaKeyDown(e){const t=e.shiftKey?10:1;e.key==="ArrowLeft"&&(e.preventDefault(),this.alpha=oe(this.alpha-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.alpha=oe(this.alpha+t,0,100),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.alpha=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.alpha=100,this.syncValues())}handleHueKeyDown(e){const t=e.shiftKey?10:1;e.key==="ArrowLeft"&&(e.preventDefault(),this.hue=oe(this.hue-t,0,360),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.hue=oe(this.hue+t,0,360),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.hue=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.hue=360,this.syncValues())}handleGridKeyDown(e){const t=e.shiftKey?10:1;e.key==="ArrowLeft"&&(e.preventDefault(),this.saturation=oe(this.saturation-t,0,100),this.lightness=this.getLightness(this.brightness),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.saturation=oe(this.saturation+t,0,100),this.lightness=this.getLightness(this.brightness),this.syncValues()),e.key==="ArrowUp"&&(e.preventDefault(),this.brightness=oe(this.brightness+t,0,100),this.lightness=this.getLightness(this.brightness),this.syncValues()),e.key==="ArrowDown"&&(e.preventDefault(),this.brightness=oe(this.brightness-t,0,100),this.lightness=this.getLightness(this.brightness),this.syncValues())}handleInputChange(e){const t=e.target;this.input.value?(this.setColor(t.value),t.value=this.value):this.value="",e.stopPropagation()}handleInputKeyDown(e){e.key==="Enter"&&(this.input.value?(this.setColor(this.input.value),this.input.value=this.value,setTimeout(()=>this.input.select())):this.hue=0)}normalizeColorString(e){if(/rgba?/i.test(e)){const t=e.replace(/[^\d.%]/g," ").split(" ").map(r=>r.trim()).filter(r=>r.length);return t.length<4&&(t[3]="1"),t[3].indexOf("%")>-1&&(t[3]=(parseFloat(t[3].replace(/%/g,""))/100).toString()),`rgba(${t[0]}, ${t[1]}, ${t[2]}, ${t[3]})`}if(/hsla?/i.test(e)){const t=e.replace(/[^\d.%]/g," ").split(" ").map(r=>r.trim()).filter(r=>r.length);return t.length<4&&(t[3]="1"),t[3].indexOf("%")>-1&&(t[3]=(parseFloat(t[3].replace(/%/g,""))/100).toString()),`hsla(${t[0]}, ${t[1]}, ${t[2]}, ${t[3]})`}return/^[0-9a-f]+$/i.test(e)?`#${e}`:e}parseColor(e){let t;e=this.normalizeColorString(e);try{t=(0,pl.default)(e)}catch{return null}const r=t.hsl(),o={h:r.hue(),s:r.saturationl(),l:r.lightness(),a:r.alpha()},i=t.rgb(),n={r:i.red(),g:i.green(),b:i.blue(),a:i.alpha()},s={r:hr(n.r),g:hr(n.g),b:hr(n.b),a:hr(n.a*255)};return{hsl:{h:o.h,s:o.s,l:o.l,string:this.setLetterCase(`hsl(${Math.round(o.h)}, ${Math.round(o.s)}%, ${Math.round(o.l)}%)`)},hsla:{h:o.h,s:o.s,l:o.l,a:o.a,string:this.setLetterCase(`hsla(${Math.round(o.h)}, ${Math.round(o.s)}%, ${Math.round(o.l)}%, ${o.a.toFixed(2).toString()})`)},rgb:{r:n.r,g:n.g,b:n.b,string:this.setLetterCase(`rgb(${Math.round(n.r)}, ${Math.round(n.g)}, ${Math.round(n.b)})`)},rgba:{r:n.r,g:n.g,b:n.b,a:n.a,string:this.setLetterCase(`rgba(${Math.round(n.r)}, ${Math.round(n.g)}, ${Math.round(n.b)}, ${n.a.toFixed(2).toString()})`)},hex:this.setLetterCase(`#${s.r}${s.g}${s.b}`),hexa:this.setLetterCase(`#${s.r}${s.g}${s.b}${s.a}`)}}setColor(e){const t=this.parseColor(e);return t===null?!1:(this.hue=t.hsla.h,this.saturation=t.hsla.s,this.lightness=t.hsla.l,this.brightness=this.getBrightness(t.hsla.l),this.alpha=this.opacity?t.hsla.a*100:100,this.syncValues(),!0)}setLetterCase(e){return typeof e!="string"?"":this.uppercase?e.toUpperCase():e.toLowerCase()}async syncValues(){const e=this.parseColor(`hsla(${this.hue}, ${this.saturation}%, ${this.lightness}%, ${this.alpha/100})`);e!==null&&(this.format==="hsl"?this.inputValue=this.opacity?e.hsla.string:e.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?e.rgba.string:e.rgb.string:this.inputValue=this.opacity?e.hexa:e.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!Ii)return;new EyeDropper().open().then(t=>this.setColor(t.sRGBHex)).catch(()=>{})}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(e,t){if(this.isEmpty=!t,t||(this.hue=0,this.saturation=100,this.brightness=100,this.lightness=this.getLightness(this.brightness),this.alpha=100),!this.isSafeValue&&e!==void 0){const r=this.parseColor(t);r!==null?(this.inputValue=this.value,this.hue=r.hsla.h,this.saturation=r.hsla.s,this.lightness=r.hsla.l,this.brightness=this.getBrightness(r.hsla.l),this.alpha=r.hsla.a*100):this.inputValue=e}this.value!==this.lastValueEmitted&&(this.emit("sl-change"),this.lastValueEmitted=this.value)}render(){const e=this.saturation,t=100-this.brightness,r=$`
      <div
        part="base"
        class=${V({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?$`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${De({backgroundColor:`hsl(${this.hue}deg, 100%, 50%)`})}
          @mousedown=${this.handleGridDrag}
          @touchstart=${this.handleGridDrag}
        >
          <span
            part="grid-handle"
            class=${V({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${De({top:`${t}%`,left:`${e}%`,backgroundColor:`hsla(${this.hue}deg, ${this.saturation}%, ${this.lightness}%)`})}
            role="application"
            aria-label="HSL"
            tabindex=${k(this.disabled?void 0:"0")}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <div
              part="slider hue-slider"
              class="color-picker__hue color-picker__slider"
              @mousedown=${this.handleHueDrag}
              @touchstart=${this.handleHueDrag}
            >
              <span
                part="slider-handle"
                class="color-picker__slider-handle"
                style=${De({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${k(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?$`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @mousedown="${this.handleAlphaDrag}"
                    @touchstart="${this.handleAlphaDrag}"
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${De({backgroundImage:`linear-gradient(
                          to right,
                          hsl(${this.hue}deg, ${this.saturation}%, ${this.lightness}%, 0%) 0%,
                          hsl(${this.hue}deg, ${this.saturation}%, ${this.lightness}%) 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle"
                      class="color-picker__slider-handle"
                      style=${De({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${k(this.disabled?void 0:"0")}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `:""}
          </div>

          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            aria-label=${this.localize.term("copy")}
            style=${De({"--preview-color":`hsla(${this.hue}deg, ${this.saturation}%, ${this.lightness}%, ${this.alpha/100})`})}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="color-picker__user-input" aria-live="polite">
          <sl-input
            part="input"
            type="text"
            name=${this.name}
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            .value=${Qt(this.isEmpty?"":this.inputValue)}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @sl-change=${this.handleInputChange}
          ></sl-input>

          <sl-button-group>
            ${this.noFormatToggle?"":$`
                  <sl-button
                    part="format-button"
                    aria-label=${this.localize.term("toggleColorFormat")}
                    exportparts="
                      base:format-button__base,
                      prefix:format-button__prefix,
                      label:format-button__label,
                      suffix:format-button__suffix,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                  >
                    ${this.setLetterCase(this.format)}
                  </sl-button>
                `}
            ${Ii?$`
                  <sl-button
                    part="eye-dropper-button"
                    exportparts="
                      base:eye-dropper-button__base,
                      prefix:eye-dropper-button__prefix,
                      label:eye-dropper-button__label,
                      suffix:eye-dropper-button__suffix,
                      caret:eye-dropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                  >
                    <sl-icon
                      library="system"
                      name="eyedropper"
                      label=${this.localize.term("selectAColorFromTheScreen")}
                    ></sl-icon>
                  </sl-button>
                `:""}
          </sl-button-group>
        </div>

        ${this.swatches.length>0?$`
              <div part="swatches" class="color-picker__swatches">
                ${this.swatches.map(o=>$`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${k(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${o}
                      @click=${()=>!this.disabled&&this.setColor(o)}
                      @keydown=${i=>!this.disabled&&i.key==="Enter"&&this.setColor(o)}
                    >
                      <div class="color-picker__swatch-color" style=${De({backgroundColor:o})}></div>
                    </div>
                  `)}
              </div>
            `:""}
      </div>
    `;return this.inline?r:$`
      <sl-dropdown
        class="color-dropdown"
        aria-disabled=${this.disabled?"true":"false"}
        .containing-element=${this}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        @sl-after-hide=${this.handleAfterHide}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${V({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-dropdown__trigger--empty":this.isEmpty,"color-picker__transparent-bg":!0})}
          style=${De({color:`hsla(${this.hue}deg, ${this.saturation}%, ${this.lightness}%, ${this.alpha/100})`})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${r}
      </sl-dropdown>
    `}};A.styles=nl;h([E('[part="input"]')],A.prototype,"input",2);h([E('[part="preview"]')],A.prototype,"previewButton",2);h([E(".color-dropdown")],A.prototype,"dropdown",2);h([M()],A.prototype,"isDraggingGridHandle",2);h([M()],A.prototype,"isEmpty",2);h([M()],A.prototype,"inputValue",2);h([M()],A.prototype,"hue",2);h([M()],A.prototype,"saturation",2);h([M()],A.prototype,"lightness",2);h([M()],A.prototype,"brightness",2);h([M()],A.prototype,"alpha",2);h([m()],A.prototype,"value",2);h([or()],A.prototype,"defaultValue",2);h([m()],A.prototype,"label",2);h([m()],A.prototype,"format",2);h([m({type:Boolean,reflect:!0})],A.prototype,"inline",2);h([m()],A.prototype,"size",2);h([m({attribute:"no-format-toggle",type:Boolean})],A.prototype,"noFormatToggle",2);h([m()],A.prototype,"name",2);h([m({type:Boolean,reflect:!0})],A.prototype,"disabled",2);h([m({type:Boolean,reflect:!0})],A.prototype,"invalid",2);h([m({type:Boolean})],A.prototype,"hoist",2);h([m({type:Boolean})],A.prototype,"opacity",2);h([m({type:Boolean})],A.prototype,"uppercase",2);h([m({attribute:!1})],A.prototype,"swatches",2);h([C("format",{waitUntilFirstUpdate:!0})],A.prototype,"handleFormatChange",1);h([C("opacity",{waitUntilFirstUpdate:!0})],A.prototype,"handleOpacityChange",1);h([C("value")],A.prototype,"handleValueChange",1);A=h([R("sl-color-picker")],A);function hr(e){const t=Math.round(e).toString(16);return t.length===1?`0${t}`:t}var fl=L`
  ${O}

  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`,bo=class extends U{render(){return $` <slot></slot> `}};bo.styles=fl;bo=h([R("sl-visually-hidden")],bo);var Ho=L`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control_label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
  }

  .form-control--has-help-text .form-control__help-text ::slotted(*) {
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }
`,ml=L`
  ${O}
  ${Ho}

  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    padding-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    padding-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    padding-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    padding-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    padding-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    padding-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  .input--empty .input__clear {
    visibility: hidden;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide Firefox's clear button on date and time inputs */
  .input--is-firefox input[type='date'],
  .input--is-firefox input[type='time'] {
    clip-path: inset(0 2em 0 0);
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,Fi,gl=(Fi=navigator.userAgentData)==null?void 0:Fi.brands.some(e=>e.brand.includes("Chromium")),bl=gl?!1:navigator.userAgent.includes("Firefox"),S=class extends U{constructor(){super(...arguments),this.formSubmitController=new st(this),this.hasSlotController=new rr(this,"help-text","label"),this.localize=new de(this),this.hasFocus=!1,this.type="text",this.size="medium",this.value="",this.defaultValue="",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.disabled=!1,this.readonly=!1,this.required=!1,this.invalid=!1}get valueAsDate(){var e,t;return(t=(e=this.input)==null?void 0:e.valueAsDate)!=null?t:null}set valueAsDate(e){const t=document.createElement("input");t.type="date",t.valueAsDate=e,this.value=t.value}get valueAsNumber(){var e,t;return(t=(e=this.input)==null?void 0:e.valueAsNumber)!=null?t:parseFloat(this.value)}set valueAsNumber(e){const t=document.createElement("input");t.type="number",t.valueAsNumber=e,this.value=t.value}firstUpdated(){this.invalid=!this.input.checkValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,r="none"){this.input.setSelectionRange(e,t,r)}setRangeText(e,t,r,o="preserve"){this.input.setRangeText(e,t,r,o),this.value!==this.input.value&&(this.value=this.input.value,this.emit("sl-input"),this.emit("sl-change"))}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.invalid=!this.input.checkValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(e){this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change"),this.input.focus(),e.stopPropagation()}handleDisabledChange(){this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity()}handleStepChange(){this.input.step=String(this.step),this.invalid=!this.input.checkValidity()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(){this.invalid=!0}handleKeyDown(e){const t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!t&&setTimeout(()=>{e.defaultPrevented||this.formSubmitController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleValueChange(){this.invalid=!this.input.checkValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,o=this.helpText?!0:!!t,i=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return $`
      <div
        part="form-control"
        class=${V({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":o})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${V({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--invalid":this.invalid,"input--no-spin-buttons":this.noSpinButtons,"input--is-firefox":bl})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              name=${k(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${k(this.placeholder)}
              minlength=${k(this.minlength)}
              maxlength=${k(this.maxlength)}
              min=${k(this.min)}
              max=${k(this.max)}
              step=${k(this.step)}
              .value=${Qt(this.value)}
              autocapitalize=${k(this.type==="password"?"off":this.autocapitalize)}
              autocomplete=${k(this.type==="password"?"off":this.autocomplete)}
              autocorrect=${k(this.type==="password"?"off":this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${k(this.spellcheck)}
              pattern=${k(this.pattern)}
              enterkeyhint=${k(this.enterkeyhint)}
              inputmode=${k(this.inputmode)}
              aria-describedby="help-text"
              aria-invalid=${this.invalid?"true":"false"}
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${i?$`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?$`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?$`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:$`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};S.styles=ml;h([E(".input__control")],S.prototype,"input",2);h([M()],S.prototype,"hasFocus",2);h([m({reflect:!0})],S.prototype,"type",2);h([m({reflect:!0})],S.prototype,"size",2);h([m()],S.prototype,"name",2);h([m()],S.prototype,"value",2);h([or()],S.prototype,"defaultValue",2);h([m({type:Boolean,reflect:!0})],S.prototype,"filled",2);h([m({type:Boolean,reflect:!0})],S.prototype,"pill",2);h([m()],S.prototype,"label",2);h([m({attribute:"help-text"})],S.prototype,"helpText",2);h([m({type:Boolean})],S.prototype,"clearable",2);h([m({attribute:"password-toggle",type:Boolean})],S.prototype,"passwordToggle",2);h([m({attribute:"password-visible",type:Boolean})],S.prototype,"passwordVisible",2);h([m({attribute:"no-spin-buttons",type:Boolean})],S.prototype,"noSpinButtons",2);h([m()],S.prototype,"placeholder",2);h([m({type:Boolean,reflect:!0})],S.prototype,"disabled",2);h([m({type:Boolean,reflect:!0})],S.prototype,"readonly",2);h([m({type:Number})],S.prototype,"minlength",2);h([m({type:Number})],S.prototype,"maxlength",2);h([m()],S.prototype,"min",2);h([m()],S.prototype,"max",2);h([m()],S.prototype,"step",2);h([m()],S.prototype,"pattern",2);h([m({type:Boolean,reflect:!0})],S.prototype,"required",2);h([m({type:Boolean,reflect:!0})],S.prototype,"invalid",2);h([m()],S.prototype,"autocapitalize",2);h([m()],S.prototype,"autocorrect",2);h([m()],S.prototype,"autocomplete",2);h([m({type:Boolean})],S.prototype,"autofocus",2);h([m()],S.prototype,"enterkeyhint",2);h([m({type:Boolean})],S.prototype,"spellcheck",2);h([m()],S.prototype,"inputmode",2);h([C("disabled",{waitUntilFirstUpdate:!0})],S.prototype,"handleDisabledChange",1);h([C("step",{waitUntilFirstUpdate:!0})],S.prototype,"handleStepChange",1);h([C("value",{waitUntilFirstUpdate:!0})],S.prototype,"handleValueChange",1);S=h([R("sl-input")],S);var vl=L`
  ${O}

  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    box-shadow: var(--sl-shadow-large);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;function Ni(e){const t=e.tagName.toLowerCase();return e.getAttribute("tabindex")==="-1"||e.hasAttribute("disabled")||e.hasAttribute("aria-disabled")&&e.getAttribute("aria-disabled")!=="false"||t==="input"&&e.getAttribute("type")==="radio"&&!e.hasAttribute("checked")||e.offsetParent===null||window.getComputedStyle(e).visibility==="hidden"?!1:(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"?!0:["button","input","select","textarea","a","audio","video","summary"].includes(t)}function Fs(e){var t,r;const o=[];function i(l){l instanceof HTMLElement&&(o.push(l),l.shadowRoot!==null&&l.shadowRoot.mode==="open"&&i(l.shadowRoot)),[...l.children].forEach(a=>i(a))}i(e);const n=(t=o.find(l=>Ni(l)))!=null?t:null,s=(r=o.reverse().find(l=>Ni(l)))!=null?r:null;return{start:n,end:s}}function yl(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}var vo=new Set;function Vi(e){vo.add(e),document.body.classList.add("sl-scroll-lock")}function Hi(e){vo.delete(e),vo.size===0&&document.body.classList.remove("sl-scroll-lock")}function yo(e,t,r="vertical",o="smooth"){const i=yl(e,t),n=i.top+t.scrollTop,s=i.left+t.scrollLeft,l=t.scrollLeft,a=t.scrollLeft+t.offsetWidth,c=t.scrollTop,d=t.scrollTop+t.offsetHeight;(r==="horizontal"||r==="both")&&(s<l?t.scrollTo({left:s,behavior:o}):s+e.clientWidth>a&&t.scrollTo({left:s-t.offsetWidth+e.clientWidth,behavior:o})),(r==="vertical"||r==="both")&&(n<c?t.scrollTo({top:n,behavior:o}):n+e.clientHeight>d&&t.scrollTo({top:n-t.offsetHeight+e.clientHeight,behavior:o}))}function He(e,t){return new Promise(r=>{function o(i){i.target===e&&(e.removeEventListener(t,o),r())}e.addEventListener(t,o)})}function be(e,t,r){return new Promise(o=>{if((r==null?void 0:r.duration)===1/0)throw new Error("Promise-based animations must be finite.");const i=e.animate(t,pe(W({},r),{duration:wl()?0:r.duration}));i.addEventListener("cancel",o,{once:!0}),i.addEventListener("finish",o,{once:!0})})}function ji(e){return e=e.toString().toLowerCase(),e.indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?parseFloat(e)*1e3:parseFloat(e)}function wl(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function xe(e){return Promise.all(e.getAnimations().map(t=>new Promise(r=>{const o=requestAnimationFrame(r);t.addEventListener("cancel",()=>o,{once:!0}),t.addEventListener("finish",()=>o,{once:!0}),t.cancel()})))}function Wi(e,t){return e.map(r=>pe(W({},r),{height:r.height==="auto"?`${t}px`:r.height}))}var Ns=new Map,_l=new WeakMap;function xl(e){return e!=null?e:{keyframes:[],options:{duration:0}}}function qi(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function we(e,t){Ns.set(e,xl(t))}function ve(e,t,r){const o=_l.get(e);if(o!=null&&o[t])return qi(o[t],r.dir);const i=Ns.get(t);return i?qi(i,r.dir):{keyframes:[],options:{duration:0}}}var re=class extends U{constructor(){super(...arguments),this.localize=new de(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1}connectedCallback(){super.connectedCallback(),this.handleMenuItemActivate=this.handleMenuItemActivate.bind(this),this.handlePanelSelect=this.handlePanelSelect.bind(this),this.handleDocumentKeyDown=this.handleDocumentKeyDown.bind(this),this.handleDocumentMouseDown=this.handleDocumentMouseDown.bind(this),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const t=this.trigger.querySelector("slot").assignedElements({flatten:!0})[0];typeof(t==null?void 0:t.focus)=="function"&&t.focus()}getMenu(){return this.panel.querySelector("slot").assignedElements({flatten:!0}).find(t=>t.tagName.toLowerCase()==="sl-menu")}handleDocumentKeyDown(e){var t;if(e.key==="Escape"){this.hide(),this.focusOnTrigger();return}if(e.key==="Tab"){if(this.open&&((t=document.activeElement)==null?void 0:t.tagName.toLowerCase())==="sl-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var r,o,i;const n=((r=this.containingElement)==null?void 0:r.getRootNode())instanceof ShadowRoot?(i=(o=document.activeElement)==null?void 0:o.shadowRoot)==null?void 0:i.activeElement:document.activeElement;(!this.containingElement||(n==null?void 0:n.closest(this.containingElement.tagName.toLowerCase()))!==this.containingElement)&&this.hide()})}}handleDocumentMouseDown(e){const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()}handleMenuItemActivate(e){const t=e.target;yo(t,this.panel)}handlePanelSelect(e){const t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}handleTriggerClick(){this.open?this.hide():this.show()}handleTriggerKeyDown(e){if(e.key==="Escape"){this.focusOnTrigger(),this.hide();return}if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}const t=this.getMenu();if(t){const r=t.defaultSlot.assignedElements({flatten:!0}),o=r[0],i=r[r.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||this.show(),r.length>0&&requestAnimationFrame(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(t.setCurrentItem(o),o.focus()),(e.key==="ArrowUp"||e.key==="End")&&(t.setCurrentItem(i),i.focus())}));const n=["Tab","Shift","Meta","Ctrl","Alt"];this.open&&!n.includes(e.key)&&t.typeToSelect(e)}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const r=this.trigger.querySelector("slot").assignedElements({flatten:!0}).find(i=>Fs(i).start);let o;if(r){switch(r.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":o=r.button;break;default:o=r}o.setAttribute("aria-haspopup","true"),o.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,He(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,He(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){this.panel.addEventListener("sl-activate",this.handleMenuItemActivate),this.panel.addEventListener("sl-select",this.handlePanelSelect),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.panel.removeEventListener("sl-activate",this.handleMenuItemActivate),this.panel.removeEventListener("sl-select",this.handlePanelSelect),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await xe(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=ve(this,"dropdown.show",{dir:this.localize.dir()});await be(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await xe(this);const{keyframes:e,options:t}=ve(this,"dropdown.hide",{dir:this.localize.dir()});await be(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return $`
      <sl-popup
        part="base"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        class=${V({dropdown:!0,"dropdown--open":this.open})}
      >
        <span
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
        >
          <slot name="trigger" @slotchange=${this.handleTriggerSlotChange}></slot>
        </span>

        <div
          part="panel"
          class="dropdown__panel"
          aria-hidden=${this.open?"false":"true"}
          aria-labelledby="dropdown"
        >
          <slot></slot>
        </div>
      </sl-popup>
    `}};re.styles=vl;h([E(".dropdown")],re.prototype,"popup",2);h([E(".dropdown__trigger")],re.prototype,"trigger",2);h([E(".dropdown__panel")],re.prototype,"panel",2);h([m({type:Boolean,reflect:!0})],re.prototype,"open",2);h([m({reflect:!0})],re.prototype,"placement",2);h([m({type:Boolean,reflect:!0})],re.prototype,"disabled",2);h([m({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],re.prototype,"stayOpenOnSelect",2);h([m({attribute:!1})],re.prototype,"containingElement",2);h([m({type:Number})],re.prototype,"distance",2);h([m({type:Number})],re.prototype,"skidding",2);h([m({type:Boolean})],re.prototype,"hoist",2);h([C("open",{waitUntilFirstUpdate:!0})],re.prototype,"handleOpenChange",1);re=h([R("sl-dropdown")],re);we("dropdown.show",{keyframes:[{opacity:0,transform:"scale(0.9)"},{opacity:1,transform:"scale(1)"}],options:{duration:100,easing:"ease"}});we("dropdown.hide",{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.9)"}],options:{duration:100,easing:"ease"}});var kl=L`
  ${O}

  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    transform: rotate(45deg);
    background: var(--arrow-color);
    z-index: -1;
  }
`;function Et(e){return e.split("-")[0]}function ir(e){return e.split("-")[1]}function sr(e){return["top","bottom"].includes(Et(e))?"x":"y"}function jo(e){return e==="y"?"height":"width"}function Bi(e,t,r){let{reference:o,floating:i}=e;const n=o.x+o.width/2-i.width/2,s=o.y+o.height/2-i.height/2,l=sr(t),a=jo(l),c=o[a]/2-i[a]/2,d=l==="x";let u;switch(Et(t)){case"top":u={x:n,y:o.y-i.height};break;case"bottom":u={x:n,y:o.y+o.height};break;case"right":u={x:o.x+o.width,y:s};break;case"left":u={x:o.x-i.width,y:s};break;default:u={x:o.x,y:o.y}}switch(ir(t)){case"start":u[l]-=c*(r&&d?-1:1);break;case"end":u[l]+=c*(r&&d?-1:1)}return u}var $l=async(e,t,r)=>{const{placement:o="bottom",strategy:i="absolute",middleware:n=[],platform:s}=r,l=await(s.isRTL==null?void 0:s.isRTL(t));let a=await s.getElementRects({reference:e,floating:t,strategy:i}),{x:c,y:d}=Bi(a,o,l),u=o,p={},g=0;for(let y=0;y<n.length;y++){const{name:f,fn:b}=n[y],{x:v,y:w,data:x,reset:z}=await b({x:c,y:d,initialPlacement:o,placement:u,strategy:i,middlewareData:p,rects:a,platform:s,elements:{reference:e,floating:t}});c=v!=null?v:c,d=w!=null?w:d,p=pe(W({},p),{[f]:W(W({},p[f]),x)}),z&&g<=50&&(g++,typeof z=="object"&&(z.placement&&(u=z.placement),z.rects&&(a=z.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:i}):z.rects),{x:c,y:d}=Bi(a,u,l)),y=-1)}return{x:c,y:d,placement:u,strategy:i,middlewareData:p}};function Vs(e){return typeof e!="number"?function(t){return W({top:0,right:0,bottom:0,left:0},t)}(e):{top:e,right:e,bottom:e,left:e}}function Ar(e){return pe(W({},e),{top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height})}async function Wo(e,t){var r;t===void 0&&(t={});const{x:o,y:i,platform:n,rects:s,elements:l,strategy:a}=e,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:u="floating",altBoundary:p=!1,padding:g=0}=t,y=Vs(g),f=l[p?u==="floating"?"reference":"floating":u],b=Ar(await n.getClippingRect({element:(r=await(n.isElement==null?void 0:n.isElement(f)))==null||r?f:f.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(l.floating)),boundary:c,rootBoundary:d,strategy:a})),v=Ar(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({rect:u==="floating"?pe(W({},s.floating),{x:o,y:i}):s.reference,offsetParent:await(n.getOffsetParent==null?void 0:n.getOffsetParent(l.floating)),strategy:a}):s[u]);return{top:b.top-v.top+y.top,bottom:v.bottom-b.bottom+y.bottom,left:b.left-v.left+y.left,right:v.right-b.right+y.right}}var Cl=Math.min,Je=Math.max;function wo(e,t,r){return Je(e,Cl(t,r))}var Sl=e=>({name:"arrow",options:e,async fn(t){const{element:r,padding:o=0}=e!=null?e:{},{x:i,y:n,placement:s,rects:l,platform:a}=t;if(r==null)return{};const c=Vs(o),d={x:i,y:n},u=sr(s),p=ir(s),g=jo(u),y=await a.getDimensions(r),f=u==="y"?"top":"left",b=u==="y"?"bottom":"right",v=l.reference[g]+l.reference[u]-d[u]-l.floating[g],w=d[u]-l.reference[u],x=await(a.getOffsetParent==null?void 0:a.getOffsetParent(r));let z=x?u==="y"?x.clientHeight||0:x.clientWidth||0:0;z===0&&(z=l.floating[g]);const ee=v/2-w/2,Q=c[f],ue=z-y[g]-c[b],he=z/2-y[g]/2+ee,ne=wo(Q,he,ue),Pe=(p==="start"?c[f]:c[b])>0&&he!==ne&&l.reference[g]<=l.floating[g];return{[u]:d[u]-(Pe?he<Q?Q-he:ue-he:0),data:{[u]:ne,centerOffset:he-ne}}}}),El={left:"right",right:"left",bottom:"top",top:"bottom"};function Pr(e){return e.replace(/left|right|bottom|top/g,t=>El[t])}function Al(e,t,r){r===void 0&&(r=!1);const o=ir(e),i=sr(e),n=jo(i);let s=i==="x"?o===(r?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[n]>t.floating[n]&&(s=Pr(s)),{main:s,cross:Pr(s)}}var Pl={start:"end",end:"start"};function Gi(e){return e.replace(/start|end/g,t=>Pl[t])}var Tl=["top","right","bottom","left"];Tl.reduce((e,t)=>e.concat(t,t+"-start",t+"-end"),[]);var zl=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var r;const{placement:o,middlewareData:i,rects:n,initialPlacement:s,platform:l,elements:a}=t,c=e,{mainAxis:d=!0,crossAxis:u=!0,fallbackPlacements:p,fallbackStrategy:g="bestFit",flipAlignment:y=!0}=c,f=Fo(c,["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","flipAlignment"]),b=Et(o),v=p||(b===s||!y?[Pr(s)]:function(ne){const Pe=Pr(ne);return[Gi(ne),Pe,Gi(Pe)]}(s)),w=[s,...v],x=await Wo(t,f),z=[];let ee=((r=i.flip)==null?void 0:r.overflows)||[];if(d&&z.push(x[b]),u){const{main:ne,cross:Pe}=Al(o,n,await(l.isRTL==null?void 0:l.isRTL(a.floating)));z.push(x[ne],x[Pe])}if(ee=[...ee,{placement:o,overflows:z}],!z.every(ne=>ne<=0)){var Q,ue;const ne=((Q=(ue=i.flip)==null?void 0:ue.index)!=null?Q:0)+1,Pe=w[ne];if(Pe)return{data:{index:ne,overflows:ee},reset:{placement:Pe}};let cr="bottom";switch(g){case"bestFit":{var he;const Ko=(he=ee.map(dr=>[dr,dr.overflows.filter(Ot=>Ot>0).reduce((Ot,_n)=>Ot+_n,0)]).sort((dr,Ot)=>dr[1]-Ot[1])[0])==null?void 0:he[0].placement;Ko&&(cr=Ko);break}case"initialPlacement":cr=s}if(o!==cr)return{reset:{placement:cr}}}return{}}}},Ll=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:r,y:o}=t,i=await async function(n,s){const{placement:l,platform:a,elements:c}=n,d=await(a.isRTL==null?void 0:a.isRTL(c.floating)),u=Et(l),p=ir(l),g=sr(l)==="x",y=["left","top"].includes(u)?-1:1,f=d&&g?-1:1,b=typeof s=="function"?s(n):s;let{mainAxis:v,crossAxis:w,alignmentAxis:x}=typeof b=="number"?{mainAxis:b,crossAxis:0,alignmentAxis:null}:W({mainAxis:0,crossAxis:0,alignmentAxis:null},b);return p&&typeof x=="number"&&(w=p==="end"?-1*x:x),g?{x:w*f,y:v*y}:{x:v*y,y:w*f}}(t,e);return{x:r+i.x,y:o+i.y,data:i}}}};function Ul(e){return e==="x"?"y":"x"}var Ol=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:r,y:o,placement:i}=t,n=e,{mainAxis:s=!0,crossAxis:l=!1,limiter:a={fn:v=>{let{x:w,y:x}=v;return{x:w,y:x}}}}=n,c=Fo(n,["mainAxis","crossAxis","limiter"]),d={x:r,y:o},u=await Wo(t,c),p=sr(Et(i)),g=Ul(p);let y=d[p],f=d[g];if(s){const v=p==="y"?"bottom":"right";y=wo(y+u[p==="y"?"top":"left"],y,y-u[v])}if(l){const v=g==="y"?"bottom":"right";f=wo(f+u[g==="y"?"top":"left"],f,f-u[v])}const b=a.fn(pe(W({},t),{[p]:y,[g]:f}));return pe(W({},b),{data:{x:b.x-r,y:b.y-o}})}}},Ki=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:r,rects:o,platform:i,elements:n}=t,s=e,{apply:l=()=>{}}=s,a=Fo(s,["apply"]),c=await Wo(t,a),d=Et(r),u=ir(r);let p,g;d==="top"||d==="bottom"?(p=d,g=u===(await(i.isRTL==null?void 0:i.isRTL(n.floating))?"start":"end")?"left":"right"):(g=d,p=u==="end"?"top":"bottom");const y=Je(c.left,0),f=Je(c.right,0),b=Je(c.top,0),v=Je(c.bottom,0),w={availableHeight:o.floating.height-(["left","right"].includes(r)?2*(b!==0||v!==0?b+v:Je(c.top,c.bottom)):c[p]),availableWidth:o.floating.width-(["top","bottom"].includes(r)?2*(y!==0||f!==0?y+f:Je(c.left,c.right)):c[g])};await l(W(W({},t),w));const x=await i.getDimensions(n.floating);return o.floating.width!==x.width||o.floating.height!==x.height?{reset:{rects:!0}}:{}}}};function Hs(e){return e&&e.document&&e.location&&e.alert&&e.setInterval}function Re(e){if(e==null)return window;if(!Hs(e)){const t=e.ownerDocument;return t&&t.defaultView||window}return e}function nr(e){return Re(e).getComputedStyle(e)}function ze(e){return Hs(e)?"":e?(e.nodeName||"").toLowerCase():""}function js(){const e=navigator.userAgentData;return e!=null&&e.brands?e.brands.map(t=>t.brand+"/"+t.version).join(" "):navigator.userAgent}function ke(e){return e instanceof Re(e).HTMLElement}function je(e){return e instanceof Re(e).Element}function qo(e){return typeof ShadowRoot=="undefined"?!1:e instanceof Re(e).ShadowRoot||e instanceof ShadowRoot}function Hr(e){const{overflow:t,overflowX:r,overflowY:o}=nr(e);return/auto|scroll|overlay|hidden/.test(t+o+r)}function Rl(e){return["table","td","th"].includes(ze(e))}function Ji(e){const t=/firefox/i.test(js()),r=nr(e);return r.transform!=="none"||r.perspective!=="none"||r.contain==="paint"||["transform","perspective"].includes(r.willChange)||t&&r.willChange==="filter"||t&&!!r.filter&&r.filter!=="none"}function Ws(){return!/^((?!chrome|android).)*safari/i.test(js())}var Xi=Math.min,Wt=Math.max,Tr=Math.round;function Le(e,t,r){var o,i,n,s;t===void 0&&(t=!1),r===void 0&&(r=!1);const l=e.getBoundingClientRect();let a=1,c=1;t&&ke(e)&&(a=e.offsetWidth>0&&Tr(l.width)/e.offsetWidth||1,c=e.offsetHeight>0&&Tr(l.height)/e.offsetHeight||1);const d=je(e)?Re(e):window,u=!Ws()&&r,p=(l.left+(u&&(o=(i=d.visualViewport)==null?void 0:i.offsetLeft)!=null?o:0))/a,g=(l.top+(u&&(n=(s=d.visualViewport)==null?void 0:s.offsetTop)!=null?n:0))/c,y=l.width/a,f=l.height/c;return{width:y,height:f,top:g,right:p+y,bottom:g+f,left:p,x:p,y:g}}function Ve(e){return(t=e,(t instanceof Re(t).Node?e.ownerDocument:e.document)||window.document).documentElement;var t}function jr(e){return je(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function qs(e){return Le(Ve(e)).left+jr(e).scrollLeft}function Ml(e,t,r){const o=ke(t),i=Ve(t),n=Le(e,o&&function(a){const c=Le(a);return Tr(c.width)!==a.offsetWidth||Tr(c.height)!==a.offsetHeight}(t),r==="fixed");let s={scrollLeft:0,scrollTop:0};const l={x:0,y:0};if(o||!o&&r!=="fixed")if((ze(t)!=="body"||Hr(i))&&(s=jr(t)),ke(t)){const a=Le(t,!0);l.x=a.x+t.clientLeft,l.y=a.y+t.clientTop}else i&&(l.x=qs(i));return{x:n.left+s.scrollLeft-l.x,y:n.top+s.scrollTop-l.y,width:n.width,height:n.height}}function Bs(e){return ze(e)==="html"?e:e.assignedSlot||e.parentNode||(qo(e)?e.host:null)||Ve(e)}function Yi(e){return ke(e)&&getComputedStyle(e).position!=="fixed"?e.offsetParent:null}function _o(e){const t=Re(e);let r=Yi(e);for(;r&&Rl(r)&&getComputedStyle(r).position==="static";)r=Yi(r);return r&&(ze(r)==="html"||ze(r)==="body"&&getComputedStyle(r).position==="static"&&!Ji(r))?t:r||function(o){let i=Bs(o);for(qo(i)&&(i=i.host);ke(i)&&!["html","body"].includes(ze(i));){if(Ji(i))return i;i=i.parentNode}return null}(e)||t}function Qi(e){if(ke(e))return{width:e.offsetWidth,height:e.offsetHeight};const t=Le(e);return{width:t.width,height:t.height}}function Gs(e){const t=Bs(e);return["html","body","#document"].includes(ze(t))?e.ownerDocument.body:ke(t)&&Hr(t)?t:Gs(t)}function zr(e,t){var r;t===void 0&&(t=[]);const o=Gs(e),i=o===((r=e.ownerDocument)==null?void 0:r.body),n=Re(o),s=i?[n].concat(n.visualViewport||[],Hr(o)?o:[]):o,l=t.concat(s);return i?l:l.concat(zr(s))}function Zi(e,t,r){return t==="viewport"?Ar(function(o,i){const n=Re(o),s=Ve(o),l=n.visualViewport;let a=s.clientWidth,c=s.clientHeight,d=0,u=0;if(l){a=l.width,c=l.height;const p=Ws();(p||!p&&i==="fixed")&&(d=l.offsetLeft,u=l.offsetTop)}return{width:a,height:c,x:d,y:u}}(e,r)):je(t)?function(o,i){const n=Le(o,!1,i==="fixed"),s=n.top+o.clientTop,l=n.left+o.clientLeft;return{top:s,left:l,x:l,y:s,right:l+o.clientWidth,bottom:s+o.clientHeight,width:o.clientWidth,height:o.clientHeight}}(t,r):Ar(function(o){var i;const n=Ve(o),s=jr(o),l=(i=o.ownerDocument)==null?void 0:i.body,a=Wt(n.scrollWidth,n.clientWidth,l?l.scrollWidth:0,l?l.clientWidth:0),c=Wt(n.scrollHeight,n.clientHeight,l?l.scrollHeight:0,l?l.clientHeight:0);let d=-s.scrollLeft+qs(o);const u=-s.scrollTop;return nr(l||n).direction==="rtl"&&(d+=Wt(n.clientWidth,l?l.clientWidth:0)-a),{width:a,height:c,x:d,y:u}}(Ve(e)))}function Dl(e){const t=zr(e),r=["absolute","fixed"].includes(nr(e).position)&&ke(e)?_o(e):e;return je(r)?t.filter(o=>je(o)&&function(i,n){const s=n.getRootNode==null?void 0:n.getRootNode();if(i.contains(n))return!0;if(s&&qo(s)){let l=n;do{if(l&&i===l)return!0;l=l.parentNode||l.host}while(l)}return!1}(o,r)&&ze(o)!=="body"):[]}var Il={getClippingRect:function(e){let{element:t,boundary:r,rootBoundary:o,strategy:i}=e;const n=[...r==="clippingAncestors"?Dl(t):[].concat(r),o],s=n[0],l=n.reduce((a,c)=>{const d=Zi(t,c,i);return a.top=Wt(d.top,a.top),a.right=Xi(d.right,a.right),a.bottom=Xi(d.bottom,a.bottom),a.left=Wt(d.left,a.left),a},Zi(t,s,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:r,strategy:o}=e;const i=ke(r),n=Ve(r);if(r===n)return t;let s={scrollLeft:0,scrollTop:0};const l={x:0,y:0};if((i||!i&&o!=="fixed")&&((ze(r)!=="body"||Hr(n))&&(s=jr(r)),ke(r))){const a=Le(r,!0);l.x=a.x+r.clientLeft,l.y=a.y+r.clientTop}return pe(W({},t),{x:t.x-s.scrollLeft+l.x,y:t.y-s.scrollTop+l.y})},isElement:je,getDimensions:Qi,getOffsetParent:_o,getDocumentElement:Ve,getElementRects:e=>{let{reference:t,floating:r,strategy:o}=e;return{reference:Ml(t,_o(r),o),floating:pe(W({},Qi(r)),{x:0,y:0})}},getClientRects:e=>Array.from(e.getClientRects()),isRTL:e=>nr(e).direction==="rtl"};function Fl(e,t,r,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:n=!0,elementResize:s=!0,animationFrame:l=!1}=o,a=i&&!l,c=n&&!l,d=a||c?[...je(e)?zr(e):[],...zr(t)]:[];d.forEach(y=>{a&&y.addEventListener("scroll",r,{passive:!0}),c&&y.addEventListener("resize",r)});let u,p=null;if(s){let y=!0;p=new ResizeObserver(()=>{y||r(),y=!1}),je(e)&&!l&&p.observe(e),p.observe(t)}let g=l?Le(e):null;return l&&function y(){const f=Le(e);!g||f.x===g.x&&f.y===g.y&&f.width===g.width&&f.height===g.height||r(),g=f,u=requestAnimationFrame(y)}(),r(),()=>{var y;d.forEach(f=>{a&&f.removeEventListener("scroll",r),c&&f.removeEventListener("resize",r)}),(y=p)==null||y.disconnect(),p=null,l&&cancelAnimationFrame(u)}}var Nl=(e,t,r)=>$l(e,t,W({platform:Il},r)),I=class extends U{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="initial",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){this.stop()}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof HTMLElement?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');if(this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),!this.anchorEl)throw new Error("Invalid anchor element: no anchor could be found using the anchor slot or the anchor attribute.");this.start()}start(){!this.anchorEl||(this.cleanup=Fl(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}reposition(){if(!this.active||!this.anchorEl)return;const e=[Ll({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(Ki({apply:({rects:t})=>{const r=this.sync==="width"||this.sync==="both",o=this.sync==="height"||this.sync==="both";this.popup.style.width=r?`${t.reference.width}px`:"",this.popup.style.height=o?`${t.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(zl({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(Ol({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(Ki({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:t,availableHeight:r})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${r}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${t}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(Sl({element:this.arrowEl,padding:this.arrowPadding})),Nl(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy}).then(({x:t,y:r,middlewareData:o,placement:i})=>{const n=getComputedStyle(this).direction==="rtl",s={top:"bottom",right:"left",bottom:"top",left:"right"}[i.split("-")[0]];if(this.setAttribute("data-current-placement",i),Object.assign(this.popup.style,{left:`${t}px`,top:`${r}px`}),this.arrow){const l=o.arrow.x,a=o.arrow.y;let c="",d="",u="",p="";if(this.arrowPlacement==="start"){const g=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";c=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",d=n?g:"",p=n?"":g}else if(this.arrowPlacement==="end"){const g=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";d=n?"":g,p=n?g:"",u=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(p=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":"",c=typeof a=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(p=typeof l=="number"?`${l}px`:"",c=typeof a=="number"?`${a}px`:"");Object.assign(this.arrowEl.style,{top:c,right:d,bottom:u,left:p,[s]:"calc(var(--arrow-size-diagonal) * -1)"})}}),this.emit("sl-reposition")}render(){return $`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <div
        part="popup"
        class=${V({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?$`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};I.styles=kl;h([E(".popup")],I.prototype,"popup",2);h([E(".popup__arrow")],I.prototype,"arrowEl",2);h([m()],I.prototype,"anchor",2);h([m({type:Boolean,reflect:!0})],I.prototype,"active",2);h([m({reflect:!0})],I.prototype,"placement",2);h([m({reflect:!0})],I.prototype,"strategy",2);h([m({type:Number})],I.prototype,"distance",2);h([m({type:Number})],I.prototype,"skidding",2);h([m({type:Boolean})],I.prototype,"arrow",2);h([m({attribute:"arrow-placement"})],I.prototype,"arrowPlacement",2);h([m({attribute:"arrow-padding",type:Number})],I.prototype,"arrowPadding",2);h([m({type:Boolean})],I.prototype,"flip",2);h([m({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],I.prototype,"flipFallbackPlacements",2);h([m({attribute:"flip-fallback-strategy"})],I.prototype,"flipFallbackStrategy",2);h([m({type:Object})],I.prototype,"flipBoundary",2);h([m({attribute:"flip-padding",type:Number})],I.prototype,"flipPadding",2);h([m({type:Boolean})],I.prototype,"shift",2);h([m({type:Object})],I.prototype,"shiftBoundary",2);h([m({attribute:"shift-padding",type:Number})],I.prototype,"shiftPadding",2);h([m({attribute:"auto-size"})],I.prototype,"autoSize",2);h([m()],I.prototype,"sync",2);h([m({type:Object})],I.prototype,"autoSizeBoundary",2);h([m({attribute:"auto-size-padding",type:Number})],I.prototype,"autoSizePadding",2);I=h([R("sl-popup")],I);var Vl=L`
  ${O}

  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,_t=class extends U{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(e){const t=It(e.target);t==null||t.classList.add("sl-button-group__button--focus")}handleBlur(e){const t=It(e.target);t==null||t.classList.remove("sl-button-group__button--focus")}handleMouseOver(e){const t=It(e.target);t==null||t.classList.add("sl-button-group__button--hover")}handleMouseOut(e){const t=It(e.target);t==null||t.classList.remove("sl-button-group__button--hover")}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{const r=e.indexOf(t),o=It(t);o!==null&&(o.classList.add("sl-button-group__button"),o.classList.toggle("sl-button-group__button--first",r===0),o.classList.toggle("sl-button-group__button--inner",r>0&&r<e.length-1),o.classList.toggle("sl-button-group__button--last",r===e.length-1),o.classList.toggle("sl-button-group__button--radio",o.tagName.toLowerCase()==="sl-radio-button"))})}render(){return $`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange} role="none"></slot>
      </div>
    `}};_t.styles=Vl;h([E("slot")],_t.prototype,"defaultSlot",2);h([M()],_t.prototype,"disableRole",2);h([m()],_t.prototype,"label",2);_t=h([R("sl-button-group")],_t);function It(e){const t=["sl-button","sl-radio-button"];return t.includes(e.tagName.toLowerCase())?e:e.querySelector(t.join(","))}var xo="";function ko(e){xo=e}function Hl(){if(!xo){const e=[...document.getElementsByTagName("script")],t=e.find(r=>r.hasAttribute("data-shoelace"));if(t)ko(t.getAttribute("data-shoelace"));else{const r=e.find(i=>/shoelace(\.min)?\.js($|\?)/.test(i.src));let o="";r&&(o=r.getAttribute("src")),ko(o.split("/").slice(0,-1).join("/"))}}return xo.replace(/\/$/,"")}var jl={name:"default",resolver:e=>`${Hl()}/assets/icons/${e}.svg`},Wl=jl,es={"check-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,x:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},ql={name:"system",resolver:e=>e in es?`data:image/svg+xml,${encodeURIComponent(es[e])}`:""},Bl=ql,Gl=[Wl,Bl],$o=[];function Kl(e){$o.push(e)}function Jl(e){$o=$o.filter(t=>t!==e)}function ts(e){return Gl.find(t=>t.name===e)}var no=new Map;function Xl(e,t="cors"){if(no.has(e))return no.get(e);const r=fetch(e,{mode:t}).then(async o=>({ok:o.ok,status:o.status,html:await o.text()}));return no.set(e,r),r}var ao=new Map;async function Yl(e){if(ao.has(e))return ao.get(e);const t=await Xl(e),r={ok:t.ok,status:t.status,svg:null};if(t.ok){const o=document.createElement("div");o.innerHTML=t.html;const i=o.firstElementChild;r.svg=(i==null?void 0:i.tagName.toLowerCase())==="svg"?i.outerHTML:""}return ao.set(e,r),r}var Ql=L`
  ${O}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    contain: strict;
    box-sizing: content-box !important;
  }

  .icon,
  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,Co=class extends Vr{constructor(e){if(super(e),this.it=q,e.type!==Te.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===q||e==null)return this.ft=void 0,this.it=e;if(e===ae)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this.ft;this.it=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Co.directiveName="unsafeHTML",Co.resultType=1;var So=class extends Co{};So.directiveName="unsafeSVG",So.resultType=2;var Zl=Nr(So),lo,Ue=class extends U{constructor(){super(...arguments),this.svg="",this.label="",this.library="default"}connectedCallback(){super.connectedCallback(),Kl(this)}firstUpdated(){this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Jl(this)}getUrl(){const e=ts(this.library);return this.name&&e?e.resolver(this.name):this.src}redraw(){this.setIcon()}async setIcon(){var e;const t=ts(this.library),r=this.getUrl();if(lo||(lo=new DOMParser),r)try{const o=await Yl(r);if(r!==this.getUrl())return;if(o.ok){const n=lo.parseFromString(o.svg,"text/html").body.querySelector("svg");n!==null?((e=t==null?void 0:t.mutator)==null||e.call(t,n),this.svg=n.outerHTML,this.emit("sl-load")):(this.svg="",this.emit("sl-error"))}else this.svg="",this.emit("sl-error")}catch{this.emit("sl-error")}else this.svg.length>0&&(this.svg="")}handleChange(){this.setIcon()}render(){const e=typeof this.label=="string"&&this.label.length>0;return $` <div
      part="base"
      class="icon"
      role=${k(e?"img":void 0)}
      aria-label=${k(e?this.label:void 0)}
      aria-hidden=${k(e?void 0:"true")}
    >
      ${Zl(this.svg)}
    </div>`}};Ue.styles=Ql;h([M()],Ue.prototype,"svg",2);h([m({reflect:!0})],Ue.prototype,"name",2);h([m()],Ue.prototype,"src",2);h([m()],Ue.prototype,"label",2);h([m({reflect:!0})],Ue.prototype,"library",2);h([C("name"),C("src"),C("library")],Ue.prototype,"setIcon",1);Ue=h([R("sl-icon")],Ue);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ec=L`
  ${O}

  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    cursor: pointer;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) transform ease;
  }

  .details--open .details__summary-icon {
    transform: rotate(90deg);
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    padding: var(--sl-spacing-medium);
  }
`,$e=class extends U{constructor(){super(...arguments),this.localize=new de(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.hidden=!this.open,this.body.style.height=this.open?"auto":"0"}async show(){if(!(this.open||this.disabled))return this.open=!0,He(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,He(this,"sl-after-hide")}handleSummaryClick(){this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.open?this.hide():this.show()),(e.key==="ArrowUp"||e.key==="ArrowLeft")&&(e.preventDefault(),this.hide()),(e.key==="ArrowDown"||e.key==="ArrowRight")&&(e.preventDefault(),this.show())}async handleOpenChange(){if(this.open){this.emit("sl-show"),await xe(this.body),this.body.hidden=!1;const{keyframes:e,options:t}=ve(this,"details.show",{dir:this.localize.dir()});await be(this.body,Wi(e,this.body.scrollHeight),t),this.body.style.height="auto",this.emit("sl-after-show")}else{this.emit("sl-hide"),await xe(this.body);const{keyframes:e,options:t}=ve(this,"details.hide",{dir:this.localize.dir()});await be(this.body,Wi(e,this.body.scrollHeight),t),this.body.hidden=!0,this.body.style.height="auto",this.emit("sl-after-hide")}}render(){return $`
      <div
        part="base"
        class=${V({details:!0,"details--open":this.open,"details--disabled":this.disabled})}
      >
        <header
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <div part="summary" class="details__summary">
            <slot name="summary">${this.summary}</slot>
          </div>

          <span part="summary-icon" class="details__summary-icon">
            <sl-icon name="chevron-right" library="system"></sl-icon>
          </span>
        </header>

        <div class="details__body">
          <div part="content" id="content" class="details__content" role="region" aria-labelledby="header">
            <slot></slot>
          </div>
        </div>
      </div>
    `}};$e.styles=ec;h([E(".details")],$e.prototype,"details",2);h([E(".details__header")],$e.prototype,"header",2);h([E(".details__body")],$e.prototype,"body",2);h([m({type:Boolean,reflect:!0})],$e.prototype,"open",2);h([m()],$e.prototype,"summary",2);h([m({type:Boolean,reflect:!0})],$e.prototype,"disabled",2);h([C("open",{waitUntilFirstUpdate:!0})],$e.prototype,"handleOpenChange",1);$e=h([R("sl-details")],$e);we("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});we("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});var tc=L`
  ${O}

  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,Zt=class extends U{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};Zt.styles=tc;h([m({type:Boolean,reflect:!0})],Zt.prototype,"vertical",2);h([C("vertical")],Zt.prototype,"handleVerticalChange",1);Zt=h([R("sl-divider")],Zt);var rc=L`
  ${O}

  :host {
    display: inline-block;
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,le=class extends U{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}render(){const e=!!this.href,t=e?Er`a`:Er`button`;return br`
      <${t}
        part="base"
        class=${V({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${k(e?void 0:this.disabled)}
        type=${k(e?void 0:"button")}
        href=${k(e?this.href:void 0)}
        target=${k(e?this.target:void 0)}
        download=${k(e?this.download:void 0)}
        rel=${k(e&&this.target?"noreferrer noopener":void 0)}
        role=${k(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${k(this.name)}
          library=${k(this.library)}
          src=${k(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};le.styles=rc;h([M()],le.prototype,"hasFocus",2);h([E(".icon-button")],le.prototype,"button",2);h([m()],le.prototype,"name",2);h([m()],le.prototype,"library",2);h([m()],le.prototype,"src",2);h([m()],le.prototype,"href",2);h([m()],le.prototype,"target",2);h([m()],le.prototype,"download",2);h([m()],le.prototype,"label",2);h([m({type:Boolean,reflect:!0})],le.prototype,"disabled",2);le=h([R("sl-icon-button")],le);var oc=L`
  ${O}

  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,Lr=class extends U{constructor(){super(...arguments),this.typeToSelectString=""}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}getAllItems(e={includeDisabled:!0}){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>!(t.getAttribute("role")!=="menuitem"||!e.includeDisabled&&t.disabled))}getCurrentItem(){return this.getAllItems({includeDisabled:!1}).find(e=>e.getAttribute("tabindex")==="0")}setCurrentItem(e){const t=this.getAllItems({includeDisabled:!1}),r=e.disabled?t[0]:e;t.forEach(o=>{o.setAttribute("tabindex",o===r?"0":"-1")})}typeToSelect(e){var t;const r=this.getAllItems({includeDisabled:!1});clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),e.key==="Backspace"?e.metaKey||e.ctrlKey?this.typeToSelectString="":this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(const o of r){const i=(t=o.shadowRoot)==null?void 0:t.querySelector("slot:not([name])");if(Ms(i).toLowerCase().trim().startsWith(this.typeToSelectString)){this.setCurrentItem(o),o.focus();break}}}handleClick(e){const r=e.target.closest("sl-menu-item");(r==null?void 0:r.disabled)===!1&&this.emit("sl-select",{detail:{item:r}})}handleKeyDown(e){if(e.key==="Enter"){const t=this.getCurrentItem();e.preventDefault(),t==null||t.click()}if(e.key===" "&&e.preventDefault(),["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const t=this.getAllItems({includeDisabled:!1}),r=this.getCurrentItem();let o=r?t.indexOf(r):0;if(t.length>0){e.preventDefault(),e.key==="ArrowDown"?o++:e.key==="ArrowUp"?o--:e.key==="Home"?o=0:e.key==="End"&&(o=t.length-1),o<0&&(o=t.length-1),o>t.length-1&&(o=0),this.setCurrentItem(t[o]),t[o].focus();return}}this.typeToSelect(e)}handleMouseDown(e){const t=e.target;t.getAttribute("role")==="menuitem"&&this.setCurrentItem(t)}handleSlotChange(){const e=this.getAllItems({includeDisabled:!1});e.length>0&&this.setCurrentItem(e[0])}render(){return $`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};Lr.styles=oc;h([E("slot")],Lr.prototype,"defaultSlot",2);Lr=h([R("sl-menu")],Lr);var ic=L`
  ${O}

  :host {
    display: block;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix ::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix ::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:focus) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'])) .menu-item,
  :host(:focus-visible:not(.sl-focus-invisible):not([aria-disabled='true'])) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }
`,Ce=class extends U{constructor(){super(...arguments),this.checked=!1,this.value="",this.disabled=!1}firstUpdated(){this.setAttribute("role","menuitem")}getTextLabel(){return Ms(this.defaultSlot)}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel=="undefined"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("sl-label-change"))}render(){return $`
      <div
        part="base"
        class=${V({"menu-item":!0,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--has-submenu":!1})}
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check-lg" library="system" aria-hidden="true"></sl-icon>
        </span>

        <span part="prefix" class="menu-item__prefix">
          <slot name="prefix"></slot>
        </span>

        <span part="label" class="menu-item__label">
          <slot @slotchange=${this.handleDefaultSlotChange}></slot>
        </span>

        <span part="suffix" class="menu-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span class="menu-item__chevron">
          <sl-icon name="chevron-right" library="system" aria-hidden="true"></sl-icon>
        </span>
      </div>
    `}};Ce.styles=ic;h([E("slot:not([name])")],Ce.prototype,"defaultSlot",2);h([E(".menu-item")],Ce.prototype,"menuItem",2);h([m({type:Boolean,reflect:!0})],Ce.prototype,"checked",2);h([m()],Ce.prototype,"value",2);h([m({type:Boolean,reflect:!0})],Ce.prototype,"disabled",2);h([C("checked")],Ce.prototype,"handleCheckedChange",1);h([C("disabled")],Ce.prototype,"handleDisabledChange",1);Ce=h([R("sl-menu-item")],Ce);var sc=L`
  ${O}

  :host {
    display: block;
  }

  .menu-label {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-large);
    user-select: none;
  }
`,Eo=class extends U{render(){return $`
      <div part="base" class="menu-label">
        <slot></slot>
      </div>
    `}};Eo.styles=sc;Eo=h([R("sl-menu-label")],Eo);var nc=L`
  ${O}
  ${Ho}

  :host {
    display: block;
  }

  .select {
    display: block;
  }

  .select::part(panel) {
    overflow: hidden;
  }

  .select__control {
    display: inline-flex;
    align-items: center;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .select::part(panel) {
    border-radius: var(--sl-border-radius-medium);
  }

  /* Standard selects */
  .select--standard .select__control {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    color: var(--sl-input-color);
  }

  .select--standard:not(.select--disabled) .select__control:hover {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
    color: var(--sl-input-color-hover);
  }

  .select--standard.select--focused:not(.select--disabled) .select__control {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
    outline: none;
  }

  .select--standard.select--disabled .select__control {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  /* Filled selects */
  .select--filled .select__control {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__control {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--focused:not(.select--disabled) .select__control {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .select--filled.select--disabled .select__control {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--disabled .select__tags,
  .select--disabled .select__clear {
    pointer-events: none;
  }

  .select__prefix {
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__label {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    user-select: none;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .select__label::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .select__clear {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    width: 1.25em;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__suffix {
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__icon {
    flex: 0 0 auto;
    display: inline-flex;
    transition: var(--sl-transition-medium) transform ease;
  }

  .select--open .select__icon {
    transform: rotate(-180deg);
  }

  /* Placeholder */
  .select--placeholder-visible .select__label {
    color: var(--sl-input-placeholder-color);
  }

  .select--disabled.select--placeholder-visible .select__label {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Tags */
  .select__tags {
    display: inline-flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: left;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  /* Hidden input (for form control validation to show) */
  .select__hidden-select {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    overflow: hidden;
    white-space: nowrap;
  }

  /*
   * Size modifiers
   */

  /* Small */
  .select--small .select__control {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
  }

  .select--small .select__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__label {
    margin: 0 var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small .select__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small .select__icon {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small .select__tags {
    padding-bottom: 2px;
  }

  .select--small .select__tags sl-tag {
    padding-top: 2px;
  }

  .select--small .select__tags sl-tag:not(:last-of-type) {
    margin-inline-end: var(--sl-spacing-2x-small);
  }

  .select--small.select--has-tags .select__label {
    margin-inline-start: 0;
  }

  /* Medium */
  .select--medium .select__control {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
  }

  .select--medium .select__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__label {
    margin: 0 var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium .select__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium .select__icon {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium .select__tags {
    padding-bottom: 3px;
  }

  .select--medium .select__tags sl-tag {
    padding-top: 3px;
  }

  .select--medium .select__tags sl-tag:not(:last-of-type) {
    margin-inline-end: var(--sl-spacing-2x-small);
  }

  .select--medium.select--has-tags .select__label {
    margin-inline-start: 0;
  }

  /* Large */
  .select--large .select__control {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
  }

  .select--large .select__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__label {
    margin: 0 var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large .select__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large .select__icon {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large .select__tags {
    padding-bottom: 4px;
  }
  .select--large .select__tags sl-tag {
    padding-top: 4px;
  }

  .select--large .select__tags sl-tag:not(:last-of-type) {
    margin-inline-end: var(--sl-spacing-2x-small);
  }

  .select--large.select--has-tags .select__label {
    margin-inline-start: 0;
  }

  /*
   * Pill modifier
   */
  .select--pill.select--small .select__control {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__control {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__control {
    border-radius: var(--sl-input-height-large);
  }
`,P=class extends U{constructor(){super(...arguments),this.formSubmitController=new st(this),this.hasSlotController=new rr(this,"help-text","label"),this.localize=new de(this),this.menuItems=[],this.hasFocus=!1,this.isOpen=!1,this.displayLabel="",this.displayTags=[],this.multiple=!1,this.maxTagsVisible=3,this.disabled=!1,this.name="",this.placeholder="",this.size="medium",this.hoist=!1,this.value="",this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.required=!1,this.clearable=!1,this.invalid=!1,this.defaultValue=""}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.resizeMenu()),this.updateComplete.then(()=>{this.resizeObserver.observe(this),this.syncItemsFromValue()})}firstUpdated(){this.invalid=!this.input.checkValidity()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.invalid=!this.input.checkValidity()}getValueAsArray(){return this.multiple&&this.value===""?[]:Array.isArray(this.value)?this.value:[this.value]}focus(e){this.control.focus(e)}blur(){this.control.blur()}handleBlur(){this.isOpen||(this.hasFocus=!1,this.emit("sl-blur"))}handleClearClick(e){e.stopPropagation(),this.value=this.multiple?[]:"",this.emit("sl-clear"),this.syncItemsFromValue()}handleDisabledChange(){this.disabled&&this.isOpen&&this.dropdown.hide(),this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity()}handleFocus(){this.hasFocus||(this.hasFocus=!0,this.emit("sl-focus"))}handleKeyDown(e){const t=e.target,r=this.menuItems[0],o=this.menuItems[this.menuItems.length-1];if(t.tagName.toLowerCase()!=="sl-tag"){if(e.key==="Tab"){this.isOpen&&this.dropdown.hide();return}if(["ArrowDown","ArrowUp"].includes(e.key)){if(e.preventDefault(),this.isOpen||this.dropdown.show(),e.key==="ArrowDown"){this.menu.setCurrentItem(r),r.focus();return}if(e.key==="ArrowUp"){this.menu.setCurrentItem(o),o.focus();return}}e.ctrlKey||e.metaKey||!this.isOpen&&e.key.length===1&&(e.stopPropagation(),e.preventDefault(),this.dropdown.show(),this.menu.typeToSelect(e))}}handleLabelClick(){this.focus()}handleMenuSelect(e){const t=e.detail.item;this.multiple?this.value=this.value.includes(t.value)?this.value.filter(r=>r!==t.value):[...this.value,t.value]:this.value=t.value,this.syncItemsFromValue()}handleMenuShow(){this.resizeMenu(),this.isOpen=!0}handleMenuHide(){this.isOpen=!1,this.control.focus()}handleMenuItemLabelChange(){if(!this.multiple){const e=this.menuItems.find(t=>t.value===this.value);this.displayLabel=e?e.getTextLabel():""}}handleMultipleChange(){var e;const t=this.getValueAsArray();this.value=this.multiple?t:(e=t[0])!=null?e:"",this.syncItemsFromValue()}async handleMenuSlotChange(){this.menuItems=[...this.querySelectorAll("sl-menu-item")];const e=[];this.menuItems.forEach(t=>{e.includes(t.value)&&console.error(`Duplicate value found in <sl-select> menu item: '${t.value}'`,t),e.push(t.value)}),await Promise.all(this.menuItems.map(t=>t.render)),this.syncItemsFromValue()}handleTagInteraction(e){e.composedPath().find(o=>o instanceof HTMLElement?o.classList.contains("tag__remove"):!1)&&e.stopPropagation()}async handleValueChange(){this.syncItemsFromValue(),await this.updateComplete,this.invalid=!this.input.checkValidity(),this.emit("sl-change")}resizeMenu(){this.menu.style.width=`${this.control.clientWidth}px`,requestAnimationFrame(()=>this.dropdown.reposition())}syncItemsFromValue(){const e=this.getValueAsArray();if(this.menuItems.forEach(t=>t.checked=e.includes(t.value)),this.multiple){const t=this.menuItems.filter(r=>e.includes(r.value));if(this.displayLabel=t.length>0?t[0].getTextLabel():"",this.displayTags=t.map(r=>$`
          <sl-tag
            part="tag"
            exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button
            "
            variant="neutral"
            size=${this.size}
            ?pill=${this.pill}
            removable
            @click=${this.handleTagInteraction}
            @keydown=${this.handleTagInteraction}
            @sl-remove=${o=>{o.stopPropagation(),this.disabled||(r.checked=!1,this.syncValueFromItems())}}
          >
            ${r.getTextLabel()}
          </sl-tag>
        `),this.maxTagsVisible>0&&this.displayTags.length>this.maxTagsVisible){const r=this.displayTags.length;this.displayLabel="",this.displayTags=this.displayTags.slice(0,this.maxTagsVisible),this.displayTags.push($`
          <sl-tag
            part="tag"
            exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button
            "
            variant="neutral"
            size=${this.size}
          >
            +${r-this.maxTagsVisible}
          </sl-tag>
        `)}}else{const t=this.menuItems.find(r=>r.value===e[0]);this.displayLabel=t?t.getTextLabel():"",this.displayTags=[]}}syncValueFromItems(){const t=this.menuItems.filter(r=>r.checked).map(r=>r.value);this.multiple?this.value=this.value.filter(r=>t.includes(r)):this.value=t.length>0?t[0]:""}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.multiple?this.value.length>0:this.value!=="",o=this.label?!0:!!e,i=this.helpText?!0:!!t,n=this.clearable&&!this.disabled&&r;return $`
      <div
        part="form-control"
        class=${V({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":o,"form-control--has-help-text":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${o?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-dropdown
            part="base"
            .hoist=${this.hoist}
            .placement=${this.placement}
            .stayOpenOnSelect=${this.multiple}
            .containingElement=${this}
            ?disabled=${this.disabled}
            class=${V({select:!0,"select--open":this.isOpen,"select--empty":!this.value,"select--focused":this.hasFocus,"select--clearable":this.clearable,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--standard":!this.filled,"select--filled":this.filled,"select--has-tags":this.multiple&&this.displayTags.length>0,"select--placeholder-visible":this.displayLabel==="","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large","select--pill":this.pill,"select--invalid":this.invalid})}
            @sl-show=${this.handleMenuShow}
            @sl-hide=${this.handleMenuHide}
          >
            <div
              part="control"
              slot="trigger"
              id="input"
              class="select__control"
              role="combobox"
              aria-describedby="help-text"
              aria-haspopup="true"
              aria-disabled=${this.disabled?"true":"false"}
              aria-expanded=${this.isOpen?"true":"false"}
              aria-controls="menu"
              tabindex=${this.disabled?"-1":"0"}
              @blur=${this.handleBlur}
              @focus=${this.handleFocus}
              @keydown=${this.handleKeyDown}
            >
              <span part="prefix" class="select__prefix">
                <slot name="prefix"></slot>
              </span>

              <div part="display-label" class="select__label">
                ${this.displayTags.length>0?$` <span part="tags" class="select__tags"> ${this.displayTags} </span> `:this.displayLabel.length>0?this.displayLabel:this.placeholder}
              </div>

              ${n?$`
                    <button
                      part="clear-button"
                      class="select__clear"
                      @click=${this.handleClearClick}
                      aria-label=${this.localize.term("clearEntry")}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <span part="suffix" class="select__suffix">
                <slot name="suffix"></slot>
              </span>

              <span part="icon" class="select__icon" aria-hidden="true">
                <sl-icon name="chevron-down" library="system"></sl-icon>
              </span>

              <!-- The hidden input tricks the browser's built-in validation so it works as expected. We use an input
              instead of a select because, otherwise, iOS will show a list of options during validation. The focus
              handler is used to move focus to the primary control when it's marked invalid.  -->
              <input
                class="select__hidden-select"
                aria-hidden="true"
                ?required=${this.required}
                .value=${r?"1":""}
                tabindex="-1"
                @focus=${()=>this.control.focus()}
              />
            </div>

            <sl-menu part="menu" id="menu" class="select__menu" @sl-select=${this.handleMenuSelect}>
              <slot @slotchange=${this.handleMenuSlotChange} @sl-label-change=${this.handleMenuItemLabelChange}></slot>
            </sl-menu>
          </sl-dropdown>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};P.styles=nc;h([E(".select")],P.prototype,"dropdown",2);h([E(".select__control")],P.prototype,"control",2);h([E(".select__hidden-select")],P.prototype,"input",2);h([E(".select__menu")],P.prototype,"menu",2);h([M()],P.prototype,"hasFocus",2);h([M()],P.prototype,"isOpen",2);h([M()],P.prototype,"displayLabel",2);h([M()],P.prototype,"displayTags",2);h([m({type:Boolean,reflect:!0})],P.prototype,"multiple",2);h([m({attribute:"max-tags-visible",type:Number})],P.prototype,"maxTagsVisible",2);h([m({type:Boolean,reflect:!0})],P.prototype,"disabled",2);h([m()],P.prototype,"name",2);h([m()],P.prototype,"placeholder",2);h([m()],P.prototype,"size",2);h([m({type:Boolean})],P.prototype,"hoist",2);h([m()],P.prototype,"value",2);h([m({type:Boolean,reflect:!0})],P.prototype,"filled",2);h([m({type:Boolean,reflect:!0})],P.prototype,"pill",2);h([m()],P.prototype,"label",2);h([m()],P.prototype,"placement",2);h([m({attribute:"help-text"})],P.prototype,"helpText",2);h([m({type:Boolean,reflect:!0})],P.prototype,"required",2);h([m({type:Boolean})],P.prototype,"clearable",2);h([m({type:Boolean,reflect:!0})],P.prototype,"invalid",2);h([or()],P.prototype,"defaultValue",2);h([C("disabled",{waitUntilFirstUpdate:!0})],P.prototype,"handleDisabledChange",1);h([C("multiple")],P.prototype,"handleMultipleChange",1);h([C("value",{waitUntilFirstUpdate:!0})],P.prototype,"handleValueChange",1);P=h([R("sl-select")],P);var ac=L`
  ${O}

  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    cursor: default;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--small .tag__remove {
    margin-inline-start: var(--sl-spacing-2x-small);
    margin-right: calc(-1 * var(--sl-spacing-3x-small));
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    font-size: 1.4em;
    margin-inline-start: var(--sl-spacing-2x-small);
    margin-inline-end: calc(-1 * var(--sl-spacing-x-small));
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,et=class extends U{constructor(){super(...arguments),this.localize=new de(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return $`
      <span
        part="base"
        class=${V({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <span part="content" class="tag__content">
          <slot></slot>
        </span>

        ${this.removable?$`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
              ></sl-icon-button>
            `:""}
      </span>
    `}};et.styles=ac;h([m({reflect:!0})],et.prototype,"variant",2);h([m({reflect:!0})],et.prototype,"size",2);h([m({type:Boolean,reflect:!0})],et.prototype,"pill",2);h([m({type:Boolean})],et.prototype,"removable",2);et=h([R("sl-tag")],et);var lc=0;function Ks(){return++lc}var cc=L`
  ${O}

  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    cursor: pointer;
    transition: var(--transition-speed) box-shadow, var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus {
    outline: none;
  }

  .tab:focus-visible:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-large);
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }
`,Se=class extends U{constructor(){super(...arguments),this.localize=new de(this),this.attrId=Ks(),this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}focus(e){this.tab.focus(e)}blur(){this.tab.blur()}handleCloseClick(){this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return this.id=this.id.length>0?this.id:this.componentId,$`
      <div
        part="base"
        class=${V({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
        tabindex=${this.disabled?"-1":"0"}
      >
        <slot></slot>
        ${this.closable?$`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};Se.styles=cc;h([E(".tab")],Se.prototype,"tab",2);h([m({reflect:!0})],Se.prototype,"panel",2);h([m({type:Boolean,reflect:!0})],Se.prototype,"active",2);h([m({type:Boolean})],Se.prototype,"closable",2);h([m({type:Boolean,reflect:!0})],Se.prototype,"disabled",2);h([C("active")],Se.prototype,"handleActiveChange",1);h([C("disabled")],Se.prototype,"handleDisabledChange",1);Se=h([R("sl-tab")],Se);var dc=L`
  ${O}

  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border: solid 1px transparent;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition: var(--sl-transition-fast) transform ease, var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group__body {
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`,ce=class extends U{constructor(){super(...arguments),this.localize=new de(this),this.tabs=[],this.panels=[],this.hasScrollControls=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.preventIndicatorTransition(),this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(e=>{e.some(t=>!["aria-labelledby","aria-controls"].includes(t.attributeName))&&setTimeout(()=>this.setAriaLabels()),e.some(t=>t.attributeName==="disabled")&&this.syncTabsAndPanels()}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),new IntersectionObserver((t,r)=>{var o;t[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((o=this.getActiveTab())!=null?o:this.tabs[0],{emitEvents:!1}),r.unobserve(t[0].target))}).observe(this.tabGroup)})}disconnectedCallback(){this.mutationObserver.disconnect(),this.resizeObserver.unobserve(this.nav)}show(e){const t=this.tabs.find(r=>r.panel===e);t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}getAllTabs(e={includeDisabled:!0}){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter(r=>e.includeDisabled?r.tagName.toLowerCase()==="sl-tab":r.tagName.toLowerCase()==="sl-tab"&&!r.disabled)}getAllPanels(){return[...this.body.querySelector("slot").assignedElements()].filter(t=>t.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(e=>e.active)}handleClick(e){const r=e.target.closest("sl-tab");(r==null?void 0:r.closest("sl-tab-group"))===this&&r!==null&&this.setActiveTab(r,{scrollBehavior:"smooth"})}handleKeyDown(e){const r=e.target.closest("sl-tab");if((r==null?void 0:r.closest("sl-tab-group"))===this&&(["Enter"," "].includes(e.key)&&r!==null&&(this.setActiveTab(r,{scrollBehavior:"smooth"}),e.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key))){const i=this.tabs.find(s=>s.matches(":focus")),n=this.localize.dir()==="rtl";if((i==null?void 0:i.tagName.toLowerCase())==="sl-tab"){let s=this.tabs.indexOf(i);e.key==="Home"?s=0:e.key==="End"?s=this.tabs.length-1:["top","bottom"].includes(this.placement)&&e.key===(n?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&e.key==="ArrowUp"?s--:(["top","bottom"].includes(this.placement)&&e.key===(n?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&e.key==="ArrowDown")&&s++,s<0&&(s=this.tabs.length-1),s>this.tabs.length-1&&(s=0),this.tabs[s].focus({preventScroll:!0}),this.activation==="auto"&&this.setActiveTab(this.tabs[s],{scrollBehavior:"smooth"}),["top","bottom"].includes(this.placement)&&yo(this.tabs[s],this.nav,"horizontal"),e.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth}setActiveTab(e,t){if(t=W({emitEvents:!0,scrollBehavior:"auto"},t),e!==this.activeTab&&!e.disabled){const r=this.activeTab;this.activeTab=e,this.tabs.map(o=>o.active=o===this.activeTab),this.panels.map(o=>{var i;return o.active=o.name===((i=this.activeTab)==null?void 0:i.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&yo(this.activeTab,this.nav,"horizontal",t.scrollBehavior),t.emitEvents&&(r&&this.emit("sl-tab-hide",{detail:{name:r.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(e=>{const t=this.panels.find(r=>r.name===e.panel);t&&(e.setAttribute("aria-controls",t.getAttribute("id")),t.setAttribute("aria-labelledby",e.getAttribute("id")))})}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}repositionIndicator(){const e=this.getActiveTab();if(!e)return;const t=e.clientWidth,r=e.clientHeight,o=this.localize.dir()==="rtl",i=this.getAllTabs(),s=i.slice(0,i.indexOf(e)).reduce((l,a)=>({left:l.left+a.clientWidth,top:l.top+a.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${t}px`,this.indicator.style.height="auto",this.indicator.style.transform=o?`translateX(${-1*s.left}px)`:`translateX(${s.left}px)`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${r}px`,this.indicator.style.transform=`translateY(${s.top}px)`;break}}preventIndicatorTransition(){const e=this.indicator.style.transition;this.indicator.style.transition="none",requestAnimationFrame(()=>{this.indicator.style.transition=e})}syncTabsAndPanels(){this.tabs=this.getAllTabs({includeDisabled:!1}),this.panels=this.getAllPanels(),this.syncIndicator()}render(){const e=this.localize.dir()==="rtl";return $`
      <div
        part="base"
        class=${V({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?$`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--start"
                  name=${e?"chevron-right":"chevron-left"}
                  library="system"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav">
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls?$`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--end"
                  name=${e?"chevron-left":"chevron-right"}
                  library="system"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <div part="body" class="tab-group__body">
          <slot @slotchange=${this.syncTabsAndPanels}></slot>
        </div>
      </div>
    `}};ce.styles=dc;h([E(".tab-group")],ce.prototype,"tabGroup",2);h([E(".tab-group__body")],ce.prototype,"body",2);h([E(".tab-group__nav")],ce.prototype,"nav",2);h([E(".tab-group__indicator")],ce.prototype,"indicator",2);h([M()],ce.prototype,"hasScrollControls",2);h([m()],ce.prototype,"placement",2);h([m()],ce.prototype,"activation",2);h([m({attribute:"no-scroll-controls",type:Boolean})],ce.prototype,"noScrollControls",2);h([C("noScrollControls",{waitUntilFirstUpdate:!0})],ce.prototype,"updateScrollControls",1);h([C("placement",{waitUntilFirstUpdate:!0})],ce.prototype,"syncIndicator",1);ce=h([R("sl-tab-group")],ce);var uc=L`
  ${O}

  :host {
    --padding: 0;

    display: block;
  }

  .tab-panel {
    border: solid 1px transparent;
    padding: var(--padding);
  }

  .tab-panel:not(.tab-panel--active) {
    display: none;
  }
`,xt=class extends U{constructor(){super(...arguments),this.attrId=Ks(),this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return $`
      <div
        part="base"
        class=${V({"tab-panel":!0,"tab-panel--active":this.active})}
      >
        <slot></slot>
      </div>
    `}};xt.styles=uc;h([m({reflect:!0})],xt.prototype,"name",2);h([m({type:Boolean,reflect:!0})],xt.prototype,"active",2);h([C("active")],xt.prototype,"handleActiveChange",1);xt=h([R("sl-tab-panel")],xt);var hc=L`
  ${O}
  ${Ho}

  :host {
    display: block;
  }

  .textarea {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
  }
`,T=class extends U{constructor(){super(...arguments),this.formSubmitController=new st(this),this.hasSlotController=new rr(this,"help-text","label"),this.hasFocus=!1,this.size="medium",this.value="",this.filled=!1,this.label="",this.helpText="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.required=!1,this.invalid=!1,this.defaultValue=""}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.invalid=!this.input.checkValidity()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e){typeof e.top=="number"&&(this.input.scrollTop=e.top),typeof e.left=="number"&&(this.input.scrollLeft=e.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,r="none"){this.input.setSelectionRange(e,t,r)}setRangeText(e,t,r,o="preserve"){this.input.setRangeText(e,t,r,o),this.value!==this.input.value&&(this.value=this.input.value,this.emit("sl-input")),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-input"),this.emit("sl-change"))}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.invalid=!this.input.checkValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleDisabledChange(){this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleRowsChange(){this.setTextareaHeight()}handleValueChange(){this.invalid=!this.input.checkValidity(),this.updateComplete.then(()=>this.setTextareaHeight())}setTextareaHeight(){this.resize==="auto"?(this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=void 0}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,o=this.helpText?!0:!!t;return $`
      <div
        part="form-control"
        class=${V({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":o})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${V({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--invalid":this.invalid,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              name=${k(this.name)}
              .value=${Qt(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${k(this.placeholder)}
              rows=${k(this.rows)}
              minlength=${k(this.minlength)}
              maxlength=${k(this.maxlength)}
              autocapitalize=${k(this.autocapitalize)}
              autocorrect=${k(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${k(this.spellcheck)}
              enterkeyhint=${k(this.enterkeyhint)}
              inputmode=${k(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};T.styles=hc;h([E(".textarea__control")],T.prototype,"input",2);h([M()],T.prototype,"hasFocus",2);h([m({reflect:!0})],T.prototype,"size",2);h([m()],T.prototype,"name",2);h([m()],T.prototype,"value",2);h([m({type:Boolean,reflect:!0})],T.prototype,"filled",2);h([m()],T.prototype,"label",2);h([m({attribute:"help-text"})],T.prototype,"helpText",2);h([m()],T.prototype,"placeholder",2);h([m({type:Number})],T.prototype,"rows",2);h([m()],T.prototype,"resize",2);h([m({type:Boolean,reflect:!0})],T.prototype,"disabled",2);h([m({type:Boolean,reflect:!0})],T.prototype,"readonly",2);h([m({type:Number})],T.prototype,"minlength",2);h([m({type:Number})],T.prototype,"maxlength",2);h([m({type:Boolean,reflect:!0})],T.prototype,"required",2);h([m({type:Boolean,reflect:!0})],T.prototype,"invalid",2);h([m()],T.prototype,"autocapitalize",2);h([m()],T.prototype,"autocorrect",2);h([m()],T.prototype,"autocomplete",2);h([m({type:Boolean})],T.prototype,"autofocus",2);h([m()],T.prototype,"enterkeyhint",2);h([m({type:Boolean})],T.prototype,"spellcheck",2);h([m()],T.prototype,"inputmode",2);h([or()],T.prototype,"defaultValue",2);h([C("disabled",{waitUntilFirstUpdate:!0})],T.prototype,"handleDisabledChange",1);h([C("rows",{waitUntilFirstUpdate:!0})],T.prototype,"handleRowsChange",1);h([C("value",{waitUntilFirstUpdate:!0})],T.prototype,"handleValueChange",1);T=h([R("sl-textarea")],T);var pc=L`
  ${O}

  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    pointer-events: none;
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
  }
`,Y=class extends U{constructor(){super(...arguments),this.localize=new de(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1}connectedCallback(){super.connectedCallback(),this.handleBlur=this.handleBlur.bind(this),this.handleClick=this.handleClick.bind(this),this.handleFocus=this.handleFocus.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleMouseOver=this.handleMouseOver.bind(this),this.handleMouseOut=this.handleMouseOut.bind(this),this.updateComplete.then(()=>{this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)})}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("blur",this.handleBlur,!0),this.removeEventListener("focus",this.handleFocus,!0),this.removeEventListener("click",this.handleClick),this.removeEventListener("keydown",this.handleKeyDown),this.removeEventListener("mouseover",this.handleMouseOver),this.removeEventListener("mouseout",this.handleMouseOut)}async show(){if(!this.open)return this.open=!0,He(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,He(this,"sl-after-hide")}getTarget(){const e=[...this.children].find(t=>t.tagName.toLowerCase()!=="style"&&t.getAttribute("slot")!=="content");if(!e)throw new Error("Invalid tooltip target: no child element was found.");return e}handleBlur(){this.hasTrigger("focus")&&this.hide()}handleClick(){this.hasTrigger("click")&&(this.open?this.hide():this.show())}handleFocus(){this.hasTrigger("focus")&&this.show()}handleKeyDown(e){this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide())}handleMouseOver(){if(this.hasTrigger("hover")){const e=ji(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}}handleMouseOut(){if(this.hasTrigger("hover")){const e=ji(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}}async handleOpenChange(){if(this.open){if(this.disabled)return;this.emit("sl-show"),await xe(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=ve(this,"tooltip.show",{dir:this.localize.dir()});await be(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),await xe(this.body);const{keyframes:e,options:t}=ve(this,"tooltip.hide",{dir:this.localize.dir()});await be(this.popup.popup,e,t),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}hasTrigger(e){return this.trigger.split(" ").includes(e)}render(){return $`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${V({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
      >
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-hidden=${this.open?"false":"true"}>
          <slot name="content" aria-live=${this.open?"polite":"off"}> ${this.content} </slot>
        </div>
      </sl-popup>
    `}};Y.styles=pc;h([E("slot:not([name])")],Y.prototype,"defaultSlot",2);h([E(".tooltip__body")],Y.prototype,"body",2);h([E("sl-popup")],Y.prototype,"popup",2);h([m()],Y.prototype,"content",2);h([m()],Y.prototype,"placement",2);h([m({type:Boolean,reflect:!0})],Y.prototype,"disabled",2);h([m({type:Number})],Y.prototype,"distance",2);h([m({type:Boolean,reflect:!0})],Y.prototype,"open",2);h([m({type:Number})],Y.prototype,"skidding",2);h([m()],Y.prototype,"trigger",2);h([m({type:Boolean})],Y.prototype,"hoist",2);h([C("open",{waitUntilFirstUpdate:!0})],Y.prototype,"handleOpenChange",1);h([C("content"),C("distance"),C("hoist"),C("placement"),C("skidding")],Y.prototype,"handleOptionsChange",1);h([C("disabled")],Y.prototype,"handleDisabledChange",1);Y=h([R("sl-tooltip")],Y);we("tooltip.show",{keyframes:[{opacity:0,transform:"scale(0.8)"},{opacity:1,transform:"scale(1)"}],options:{duration:150,easing:"ease"}});we("tooltip.hide",{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.8)"}],options:{duration:150,easing:"ease"}});var fc=L`
  ${O}

  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-neutral-200);
    --sheen-color: var(--sl-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`,Ur=class extends U{constructor(){super(...arguments),this.effect="none"}render(){return $`
      <div
        part="base"
        class=${V({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
        aria-busy="true"
        aria-live="polite"
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};Ur.styles=fc;h([m()],Ur.prototype,"effect",2);Ur=h([R("sl-skeleton")],Ur);var Ft=[],mc=class{constructor(e){this.tabDirection="forward",this.element=e,this.handleFocusIn=this.handleFocusIn.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleKeyUp=this.handleKeyUp.bind(this)}activate(){Ft.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Ft=Ft.filter(e=>e!==this.element),document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Ft[Ft.length-1]===this.element}checkFocus(){if(this.isActive()&&!this.element.matches(":focus-within")){const{start:e,end:t}=Fs(this.element),r=this.tabDirection==="forward"?e:t;typeof(r==null?void 0:r.focus)=="function"&&r.focus({preventScroll:!0})}}handleFocusIn(){this.checkFocus()}handleKeyDown(e){e.key==="Tab"&&e.shiftKey&&(this.tabDirection="backward"),requestAnimationFrame(()=>this.checkFocus())}handleKeyUp(){this.tabDirection="forward"}},gc=L`
  ${O}

  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
    transform: none;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__close {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-x-large);
    padding: 0 var(--header-spacing);
  }

  .dialog__body {
    flex: 1 1 auto;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }
`,Ee=class extends U{constructor(){super(...arguments),this.hasSlotController=new rr(this,"footer"),this.localize=new de(this),this.open=!1,this.label="",this.noHeader=!1}connectedCallback(){super.connectedCallback(),this.modal=new mc(this)}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.modal.activate(),Vi(this))}disconnectedCallback(){super.disconnectedCallback(),Hi(this)}async show(){if(!this.open)return this.open=!0,He(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,He(this,"sl-after-hide")}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const r=ve(this,"dialog.denyClose",{dir:this.localize.dir()});be(this.panel,r.keyframes,r.options);return}this.hide()}handleKeyDown(e){e.key==="Escape"&&(e.stopPropagation(),this.requestClose("keyboard"))}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.originalTrigger=document.activeElement,this.modal.activate(),Vi(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([xe(this.dialog),xe(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=ve(this,"dialog.show",{dir:this.localize.dir()}),r=ve(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([be(this.panel,t.keyframes,t.options),be(this.overlay,r.keyframes,r.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.modal.deactivate(),await Promise.all([xe(this.dialog),xe(this.overlay)]);const e=ve(this,"dialog.hide",{dir:this.localize.dir()}),t=ve(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([be(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),be(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,Hi(this);const r=this.originalTrigger;typeof(r==null?void 0:r.focus)=="function"&&setTimeout(()=>r.focus()),this.emit("sl-after-hide")}}render(){return $`
      <div
        part="base"
        class=${V({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
        @keydown=${this.handleKeyDown}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${k(this.noHeader?this.label:void 0)}
          aria-labelledby=${k(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":$`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <sl-icon-button
                    part="close-button"
                    exportparts="base:close-button__base"
                    class="dialog__close"
                    name="x"
                    label=${this.localize.term("close")}
                    library="system"
                    @click="${()=>this.requestClose("close-button")}"
                  ></sl-icon-button>
                </header>
              `}

          <div part="body" class="dialog__body">
            <slot></slot>
          </div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};Ee.styles=gc;h([E(".dialog")],Ee.prototype,"dialog",2);h([E(".dialog__panel")],Ee.prototype,"panel",2);h([E(".dialog__overlay")],Ee.prototype,"overlay",2);h([m({type:Boolean,reflect:!0})],Ee.prototype,"open",2);h([m({reflect:!0})],Ee.prototype,"label",2);h([m({attribute:"no-header",type:Boolean,reflect:!0})],Ee.prototype,"noHeader",2);h([C("open",{waitUntilFirstUpdate:!0})],Ee.prototype,"handleOpenChange",1);Ee=h([R("sl-dialog")],Ee);we("dialog.show",{keyframes:[{opacity:0,transform:"scale(0.8)"},{opacity:1,transform:"scale(1)"}],options:{duration:250,easing:"ease"}});we("dialog.hide",{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.8)"}],options:{duration:250,easing:"ease"}});we("dialog.denyClose",{keyframes:[{transform:"scale(1)"},{transform:"scale(1.02)"},{transform:"scale(1)"}],options:{duration:250}});we("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});we("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var bc=L`
  ${O}

  :host {
    --size: 128px;
    --track-width: 4px;
    --track-color: var(--sl-color-neutral-200);
    --indicator-width: var(--track-width);
    --indicator-color: var(--sl-color-primary-600);

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .progress-ring__track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition: 0.35s stroke-dashoffset;
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
  }
`,tt=class extends U{constructor(){super(...arguments),this.localize=new de(this),this.value=0,this.label=""}updated(e){if(super.updated(e),e.has("value")){const t=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),r=2*Math.PI*t,o=r-this.value/100*r;this.indicatorOffset=`${o}px`}}render(){return $`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value/100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <span part="label" class="progress-ring__label">
          <slot></slot>
        </span>
      </div>
    `}};tt.styles=bc;h([E(".progress-ring__indicator")],tt.prototype,"indicator",2);h([M()],tt.prototype,"indicatorOffset",2);h([m({type:Number,reflect:!0})],tt.prototype,"value",2);h([m()],tt.prototype,"label",2);tt=h([R("sl-progress-ring")],tt);var vc=L`
  ${O}

  :host {
    display: block;
  }

  .radio-group {
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-large);
    padding-top: var(--sl-spacing-x-small);
  }

  .radio-group .radio-group__label {
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-color);
    padding: 0 var(--sl-spacing-2x-small);
  }

  ::slotted(sl-radio:not(:last-of-type)) {
    margin-bottom: var(--sl-spacing-2x-small);
  }

  .radio-group:not(.radio-group--has-fieldset) {
    border: none;
    padding: 0;
    margin: 0;
    min-width: 0;
  }

  .radio-group:not(.radio-group--has-fieldset) .radio-group__label {
    position: absolute;
    width: 0;
    height: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    overflow: hidden;
    white-space: nowrap;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,Z=class extends U{constructor(){super(...arguments),this.formSubmitController=new st(this,{defaultValue:e=>e.defaultValue}),this.hasButtonGroup=!1,this.errorMessage="",this.customErrorMessage="",this.defaultValue="",this.label="",this.value="",this.name="option",this.invalid=!1,this.fieldset=!1,this.required=!1}handleValueChange(){this.hasUpdated&&(this.emit("sl-change"),this.updateCheckedRadio())}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}setCustomValidity(e=""){this.customErrorMessage=e,this.errorMessage=e,e?(this.invalid=!0,this.input.setCustomValidity(e)):this.invalid=!1}get validity(){const e=!(this.value&&this.required||!this.required),t=this.customErrorMessage!=="";return{badInput:!1,customError:t,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!(e||t),valueMissing:!e}}reportValidity(){const e=this.validity;return this.errorMessage=this.customErrorMessage||e.valid?"":this.input.validationMessage,this.invalid=!e.valid,e.valid||this.showNativeErrorMessage(),!this.invalid}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(e){const t=e.target;if(t.disabled)return;this.value=t.value,this.getAllRadios().forEach(o=>o.checked=o===t)}handleKeyDown(e){var t;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key))return;const r=this.getAllRadios().filter(s=>!s.disabled),o=(t=r.find(s=>s.checked))!=null?t:r[0],i=e.key===" "?0:["ArrowUp","ArrowLeft"].includes(e.key)?-1:1;let n=r.indexOf(o)+i;n<0&&(n=r.length-1),n>r.length-1&&(n=0),this.getAllRadios().forEach(s=>{s.checked=!1,this.hasButtonGroup||(s.tabIndex=-1)}),this.value=r[n].value,r[n].checked=!0,this.hasButtonGroup?r[n].shadowRoot.querySelector("button").focus():(r[n].tabIndex=0,r[n].focus()),e.preventDefault()}handleSlotChange(){var e;const t=this.getAllRadios();if(t.forEach(r=>r.checked=r.value===this.value),this.hasButtonGroup=t.some(r=>r.tagName.toLowerCase()==="sl-radio-button"),!t.some(r=>r.checked))if(this.hasButtonGroup){const r=t[0].shadowRoot.querySelector("button");r.tabIndex=0}else t[0].tabIndex=0;if(this.hasButtonGroup){const r=(e=this.shadowRoot)==null?void 0:e.querySelector("sl-button-group");r&&(r.disableRole=!0)}}showNativeErrorMessage(){this.input.hidden=!1,this.input.reportValidity(),setTimeout(()=>this.input.hidden=!0,1e4)}updateCheckedRadio(){this.getAllRadios().forEach(t=>t.checked=t.value===this.value)}render(){const e=$`
      <slot
        @click=${this.handleRadioClick}
        @keydown=${this.handleKeyDown}
        @slotchange=${this.handleSlotChange}
        role="presentation"
      ></slot>
    `;return $`
      <fieldset
        part="base"
        role="radiogroup"
        aria-errormessage="radio-error-message"
        aria-invalid="${this.invalid}"
        class=${V({"radio-group":!0,"radio-group--has-fieldset":this.fieldset,"radio-group--required":this.required})}
      >
        <legend part="label" class="radio-group__label">
          <slot name="label">${this.label}</slot>
        </legend>
        <div class="visually-hidden">
          <div id="radio-error-message" aria-live="assertive">${this.errorMessage}</div>
          <label class="radio-group__validation visually-hidden">
            <input type="text" class="radio-group__validation-input" ?required=${this.required} tabindex="-1" hidden />
          </label>
        </div>
        ${this.hasButtonGroup?$`
              <sl-button-group part="button-group" exportparts="base:button-group__base">
                ${e}
              </sl-button-group>
            `:e}
      </fieldset>
    `}};Z.styles=vc;h([E("slot:not([name])")],Z.prototype,"defaultSlot",2);h([E(".radio-group__validation-input")],Z.prototype,"input",2);h([M()],Z.prototype,"hasButtonGroup",2);h([M()],Z.prototype,"errorMessage",2);h([M()],Z.prototype,"customErrorMessage",2);h([M()],Z.prototype,"defaultValue",2);h([m()],Z.prototype,"label",2);h([m({reflect:!0})],Z.prototype,"value",2);h([m()],Z.prototype,"name",2);h([m({type:Boolean,reflect:!0})],Z.prototype,"invalid",2);h([m({type:Boolean,attribute:"fieldset",reflect:!0})],Z.prototype,"fieldset",2);h([m({type:Boolean,reflect:!0})],Z.prototype,"required",2);h([C("value")],Z.prototype,"handleValueChange",1);Z=h([R("sl-radio-group")],Z);var yc=L`
  ${O}

  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio__icon {
    display: inline-flex;
    width: var(--sl-toggle-size);
    height: var(--sl-toggle-size);
  }

  .radio__icon svg {
    width: 100%;
    height: 100%;
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--sl-toggle-size);
    height: var(--sl-toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 50%;
    background-color: var(--sl-input-background-color);
    color: transparent;
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    color: var(--sl-input-label-color);
    line-height: var(--sl-toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
  }
`,Oe=class extends U{constructor(){super(...arguments),this.checked=!1,this.hasFocus=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setInitialAttributes(),this.addEventListeners()}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(){this.disabled||(this.checked=!0)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}addEventListeners(){this.addEventListener("blur",()=>this.handleBlur()),this.addEventListener("click",()=>this.handleClick()),this.addEventListener("focus",()=>this.handleFocus())}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return $`
      <span
        part="base"
        class=${V({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus})}
      >
        <span part="control" class="radio__control">
          <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g fill="currentColor">
                <circle cx="8" cy="8" r="3.42857143"></circle>
              </g>
            </g>
          </svg>
        </span>

        <span part="label" class="radio__label">
          <slot></slot>
        </span>
      </span>
    `}};Oe.styles=yc;h([M()],Oe.prototype,"checked",2);h([M()],Oe.prototype,"hasFocus",2);h([m()],Oe.prototype,"value",2);h([m({type:Boolean,reflect:!0})],Oe.prototype,"disabled",2);h([C("checked")],Oe.prototype,"handleCheckedChange",1);h([C("disabled",{waitUntilFirstUpdate:!0})],Oe.prototype,"handleDisabledChange",1);Oe=h([R("sl-radio")],Oe);ko("/assets/sl-icons");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wc={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},_c=e=>(...t)=>({_$litDirective$:e,values:t});class xc{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,o){this._$Ct=t,this._$AM=r,this._$Ci=o}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Js=_c(class extends xc{constructor(e){var t;if(super(e),e.type!==wc.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,o;if(this.nt===void 0){this.nt=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!(!((r=this.st)===null||r===void 0)&&r.has(n))&&this.nt.add(n);return this.render(t)}const i=e.element.classList;this.nt.forEach(n=>{n in t||(i.remove(n),this.nt.delete(n))});for(const n in t){const s=!!t[n];s===this.nt.has(n)||((o=this.st)===null||o===void 0?void 0:o.has(n))||(s?(i.add(n),this.nt.add(n)):(i.remove(n),this.nt.delete(n)))}return Qe}}),kc={done:"Done",upload:"Upload",download:"Download",generate:"Generate",add_url:"+ Add URL"},$c={home:{error:{promises:"There was a problem retrieving the manifest from your site.",invalidURL:"Invalid URL, please try again."}},manifest:{screenshot:{error:"The url needs to be an absolute url."}},publish:{windows:{test_package:"Want to test your app first before going to the Microsoft Store? Tap Download to get a package you can install and test."},base_package:{download:"Download your generated Web Manifest and chosen Service Worker to make your app a PWA!"}},basepack:{run_new:"After uploading the above files to your Web App tap Run New Test to test your PWA again!"}},Cc={publish:{windows_platform:{p:"Your download will contain instructions for submitting your app to the Microsoft Store. Your app will be powered by the Chromium-based Edge platform."}},base_package:{top_section:{h1:"Make your app a PWA",p:"Looks like your web app is not a PWA yet, but you're on your way! Head below to download your base file package and get one step closer to packaging your app for the app stores."},summary_body:{h1:"Download PWA Base Files",p:"Whether you edited your manifest or added a service worker, in your downloaded base package files you will receive a manifest and service worker files ready to be added to your server, along with some helpful documentation."},next_steps:{h1:"Next Steps"}},manifest_options:{top_section:{h1:"Manifest"},summary_body:{h1:"Summary",p:"Easily update and upgrade your Web Manifest with our built-in Web Manifest editor"},info:{h1:"Info"},images:{h1:"Images",icons:{h3:"Upload App Icons"},screenshots:{h3:"Generate Screenshots",p:"Specify the URLs to generate desktop and mobile screenshots from. You may add up to 8 screenshots or Store Listings."}},settings:{h1:"Settings",background_color:{h3:"Background Color"},theme_color:{h3:"Theme Color"}},view_code:{h1:"View Code"},titles:{name:"Name",short_name:"Short Name",description:"Description",start_url:"Start URL",scope:"Scope",display:"Display",orientation:"Orientation",language:"Language"},descriptions:{short_name:"Used in app launchers",description:"Used in app storefronts and install dialogs",start_url:"The relative URL that loads when your app starts",scope:"Which URLs can load within your app",display:"The appearance of your app window",orientation:"The default screen orientation of your app",language:"The primary language of your app"}},android:{titles:{package_name:"Package Name",app_name:"App name",launcher_name:"Launcher name",all_settings:"All Settings",app_version:"App version",app_version_code:"App version code",host:"Host",start_url:"Start URL",theme_color:"Status bar color",splash_color:"Splash color",nav_color:"Nav color",dark_color:"Nav dark color",div_color:"Nav divider color",div_dark_color:"Nav divider dark color",icon_url:"Icon URL",mask_icon_url:"Maskable icon URL",mono_icon_url:"Monochrome icon URL",fallback:"Fallback behavior",custom:"Custom Tabs",web_view:"Web View",display_mode:"Display mode",standalone:"Standalone",fullscreen:"Fullscreen",notification:"Notification delegation",enable:"Enable",location_delegation:"Location delegation",google_play_billing:"Google Play billing",settings_shortcut:"Settings shortcut",chromeos_only:"ChromeOS only",generate:"Generate",source_code:"Include source code",none:"None",signing_key:"Signing key",key_file:"Key file",key_alias:"Key alias",key_fullname:"Key full name",key_org:"Key organization",key_org_unit:"Key organizational unit",key_country_code:"Key country code",key_pw:"Key password",key_store_pw:"Key store password"},description:{package_name:"The unique identifier of your app. It should contain only letters, numbers, and periods. Example: com.companyname.appname",launcher_name:"The app name used on the Android launch screen. Typically, this is the short name of the app.",app_version:"The version of your app displayed to users. This is a string, typically in the form of '1.0.0.0'. Maps to android:versionName.",app_version_code:"A positive integer used as an internal version number. This is not shown to users. Android uses this value to protect against downgrades. Maps to android:versionCode.",start_url:"The start path for the TWA. Must be relative to the Host URL. You can specify '/' if you don't have a start URL different from Host.",start_url_short:"The start path for the TWA. Must be relative to the Host URL.",theme_color:"Also known as the theme color, this is the color of the Android status bar in your app. Note: the status bar will be hidden if Display Mode is set to fullscreen.",splash_color:"Also known as background color, this is the color of the splash screen for your app.",nav_color:"The color of the Android navigation bar in your app. Note: the navigation bar will be hidden if Display Mode is set to fullscreen.",dark_color:"The color of the Android navigation bar in your app when Android is in dark mode.",div_color:"The color of the Android navigation bar divider in your app.",div_dark_color:"The color of the Android navigation navigation bar divider in your app when Android is in dark mode.",mask_icon_url:"Optional. The URL to an icon with a minimum safe zone of trimmable padding, enabling rounded icons on certain Android platforms.",mono_icon_url:"Optional. The URL to an icon containing only white and black colors, enabling Android to fill the icon with user-specified color or gradient depending on theme, color mode, or contrast settings.",custom:"Use Chrome Custom Tabs as a fallback for your PWA when the full trusted web activity (TWA) experience is unavailable.",web_view:"Use a web view as the fallback for your PWA when the full trusted web activity (TWA) experience is unavailable.",standalone:"Your PWA will use the whole screen but keep the Android status bar and navigation bar.",fullscreen:"Your PWA will use the whole screen and remove the Android status bar and navigation bar. Suitable for immersive experiences such as games or media apps.",notification:"Whether to enable Push Notification Delegation. If enabled, your PWA can send push notifications without browser permission prompts.",location_delegation:"Whether to enable Location Delegation. If enabled, your PWA can acess navigator.geolocation without browser permission prompts.",google_play_billing:"Whether to enable in-app purchases through Google Play Billing and the Digital Goods API.",settings_shortcut:"If enabled, users can long-press on your app tile and a Settings menu item will appear, letting users manage space for your app.",chromeos_only:"If enabled, your Android package will only run on ChromeOS devices",form_details:"Your download will contain instructions for submitting your app to the Google Play Store.",source_code:"If enabled, your download will include the source code for your Android app.",signing_key:"PWABuilder will generate a new signing key for you and sign your APK with it. Your download will contain the new signing key and passwords.",unsigned_key:"PWABuilder will generate an unsigned APK. Google Play Store will sign your package. This is Google's recommended approach.",upload_signing_key:"Upload your existing signing key. Use this option if you already have a signing key and you want to publish a new version of an existing app in Google Play.",key_country_code:"The 2 letter country code to list on the signing key",key_pw:"The password for the signing key. Type a new password or leave empty to use a generated password.",key_store_pw:"The password for the key store. Type a new password or leave empty to use a generated password."}},resource_hub:{titles:{blog:"Blog",demo:"Demo",documentation:"Documentation"},description:{blog:"Check out the PWABuilder blog for all the latest on PWABuilder and PWAs",demo:"Check out our demos to see what PWAs are capable of!",documentation:"Looking for our documentation? Tap View Documentation to get started!"}},resource_hub_new:{titles:{manifest:"Web Manifest",sw:"Service Worker",https:"Secure HTTPS"},description:{manifest:"A Web App Manifest of a website governs how your Progressive Web App (PWA) looks and behaves when installed on a device.",sw:"Service Workers are a special type of Web Worker with the ability to intercept, modify, and respond to all offline and online network requests using the Fetch API.",https:"Having a secure HTTPS endpoint and other user safeguards making the user experience secure from end to end."}},community_hub:{titles:{github:"Contribute on GitHub",twitter:"Follow us on Twitter!",discord:"Join us on our Discord Server"},description:{github:"Contribute to this Open Source project by joining our PWA community on GitHub.",twitter:"Meet our fellow PWA enthusiast and follow our latest releases and updates on Twitter.",discord:"Join the PWABuilder Discord community to connect with the people and resources you need."}},success_stories:{stat:{trivago:"User traffic",alibaba:"Total conversions",pintrest:"Ad revenue",tinder:"Storage efficient"},value:{trivago:"+150%",alibaba:"+76%",pintrest:"+44%",tinder:"+90%"},description:{trivago:"Engagement for users who add to homescreen has increased by 150%. This increased engagement led to a 97% increase in click outs to hotel offers.",alibaba:"After upgrading to a PWA, Alibaba saw a 76% increase in total conversions across browsers. And 30% more monthly active users on Android.",pintrest:"With the new Pinterest PWA they were able to increase user-generated ad revenue by 44% and core engagement by 60%.",tinder:"The native Tinder application was a whopping 30MB, when Tinder transitioned to PWA they were able to reduce their file size down to 2.8MB. "}}},Sc={manifest_options:{upload:"Your app's icon. This is the icon operating systems will use to represent your app. In Windows this is used in the taskbar, start menu etc, launch screen.",generate:"Screenshots of your PWA can be used in stores and the in-browser install prompt to help promote your PWA.",background_color:"The background_color member controls the splash screen color of your app.",theme_color:"The theme_color member defines the default theme color for your app. On Windows, this will be the color of your app's title bar.",name:"The name of your app as displayed to the user.",short_name:"The short name for your app. It's used where there is insufficent space to display the full name.",start_url:"A URL relative to the root of your domain that is opened when your app is launched, e.g. /index.html. Typically this is set to '/', indicating the root of the domain.",scope:"The scope member is a string that defines the navigation scope of this web application's application context.",display:"How your app is displayed. Standalone: Recommended. Your PWA appears like a native app, no browser UI is shown. Minimal-ui: similar to standalone but includes a refresh button and back button in your app's title bar. Fullscreen: Typically used in immersive games, your PWA takes up all the available display area without any browser UI or app title bar. Browser: full browser UI is shown.",orientation:"The default orientation your app should be used in, such as portrait or landscape.",language:"Specifies the primary language of the app.",description:"A description of your app. Appears in app listings, app storefronts, and app install UI."}},Ec={none:"None",transparent:"Transparent",custom:"Custom Color"},Ac={windows11:"Windows 11",windows10:"Windows 10",android:"Android",ios:"iOS",image_generator:"Image Generator",image_generator_text:"Quickly and easily create app icons for various platforms in the right size and format",image_details:"Image Details",image_details_text:"Specify the image details below.",input_image:"Choose your base image",input_image_help:"You should choose a 512x512 or larger square PNG image. This image will be used to generate all the images for your chosen platforms.",padding:"Padding",padding_text:"0 is no padding, 1 is 100% of the source image. 0.3 is a typical value for most icons. For Windows 11 platform, this value is overriden on individual images based on UX guidelines.",background_color:"Background Color",best_guess:"Best guess",transparent:"Transparent",custom_color:"Custom color",platforms:"Platforms",platforms_text:"Select the platforms to generate images for."};var Pc={button:kc,input:$c,text:Cc,tooltip:Sc,values:Ec,imageGenerator:Ac},Tc=[{code:"ab",name:"Abkhaz"},{code:"aa",name:"Afar"},{code:"af",name:"Afrikaans"},{code:"ak",name:"Akan"},{code:"sq",name:"Albanian"},{code:"am",name:"Amharic"},{code:"ar",name:"Arabic"},{code:"an",name:"Aragonese"},{code:"hy",name:"Armenian"},{code:"as",name:"Assamese"},{code:"av",name:"Avaric"},{code:"ae",name:"Avestan"},{code:"ay",name:"Aymara"},{code:"az",name:"Azerbaijani"},{code:"bm",name:"Bambara"},{code:"ba",name:"Bashkir"},{code:"eu",name:"Basque"},{code:"be",name:"Belarusian"},{code:"bn",name:"Bengali"},{code:"bh",name:"Bihari"},{code:"bi",name:"Bislama"},{code:"bs",name:"Bosnian"},{code:"br",name:"Breton"},{code:"bg",name:"Bulgarian"},{code:"my",name:"Burmese"},{code:"ca",name:"Catalan; Valencian"},{code:"ch",name:"Chamorro"},{code:"ce",name:"Chechen"},{code:"ny",name:"Chichewa; Chewa; Nyanja"},{code:"zh",name:"Chinese"},{code:"cv",name:"Chuvash"},{code:"kw",name:"Cornish"},{code:"co",name:"Corsican"},{code:"cr",name:"Cree"},{code:"hr",name:"Croatian"},{code:"cs",name:"Czech"},{code:"da",name:"Danish"},{code:"dv",name:"Divehi; Dhivehi; Maldivian;"},{code:"nl",name:"Dutch"},{code:"en",name:"English"},{code:"eo",name:"Esperanto"},{code:"et",name:"Estonian"},{code:"ee",name:"Ewe"},{code:"fo",name:"Faroese"},{code:"fj",name:"Fijian"},{code:"fi",name:"Finnish"},{code:"fr",name:"French"},{code:"ff",name:"Fula; Fulah; Pulaar; Pular"},{code:"gl",name:"Galician"},{code:"ka",name:"Georgian"},{code:"de",name:"German"},{code:"el",name:"Greek, Modern"},{code:"gn",name:"Guaran\xED"},{code:"gu",name:"Gujarati"},{code:"ht",name:"Haitian; Haitian Creole"},{code:"ha",name:"Hausa"},{code:"he",name:"Hebrew (modern)"},{code:"hz",name:"Herero"},{code:"hi",name:"Hindi"},{code:"ho",name:"Hiri Motu"},{code:"hu",name:"Hungarian"},{code:"ia",name:"Interlingua"},{code:"id",name:"Indonesian"},{code:"ie",name:"Interlingue"},{code:"ga",name:"Irish"},{code:"ig",name:"Igbo"},{code:"ik",name:"Inupiaq"},{code:"io",name:"Ido"},{code:"is",name:"Icelandic"},{code:"it",name:"Italian"},{code:"iu",name:"Inuktitut"},{code:"ja",name:"Japanese"},{code:"jv",name:"Javanese"},{code:"kl",name:"Kalaallisut, Greenlandic"},{code:"kn",name:"Kannada"},{code:"kr",name:"Kanuri"},{code:"ks",name:"Kashmiri"},{code:"kk",name:"Kazakh"},{code:"km",name:"Khmer"},{code:"ki",name:"Kikuyu, Gikuyu"},{code:"rw",name:"Kinyarwanda"},{code:"ky",name:"Kirghiz, Kyrgyz"},{code:"kv",name:"Komi"},{code:"kg",name:"Kongo"},{code:"ko",name:"Korean"},{code:"ku",name:"Kurdish"},{code:"kj",name:"Kwanyama, Kuanyama"},{code:"la",name:"Latin"},{code:"lb",name:"Luxembourgish, Letzeburgesch"},{code:"lg",name:"Luganda"},{code:"li",name:"Limburgish, Limburgan, Limburger"},{code:"ln",name:"Lingala"},{code:"lo",name:"Lao"},{code:"lt",name:"Lithuanian"},{code:"lu",name:"Luba-Katanga"},{code:"lv",name:"Latvian"},{code:"gv",name:"Manx"},{code:"mk",name:"Macedonian"},{code:"mg",name:"Malagasy"},{code:"ms",name:"Malay"},{code:"ml",name:"Malayalam"},{code:"mt",name:"Maltese"},{code:"mi",name:"M\u0101ori"},{code:"mr",name:"Marathi (Mar\u0101\u1E6Dh\u012B)"},{code:"mh",name:"Marshallese"},{code:"mn",name:"Mongolian"},{code:"na",name:"Nauru"},{code:"nv",name:"Navajo, Navaho"},{code:"nb",name:"Norwegian Bokm\xE5l"},{code:"nd",name:"North Ndebele"},{code:"ne",name:"Nepali"},{code:"ng",name:"Ndonga"},{code:"nn",name:"Norwegian Nynorsk"},{code:"no",name:"Norwegian"},{code:"ii",name:"Nuosu"},{code:"nr",name:"South Ndebele"},{code:"oc",name:"Occitan"},{code:"oj",name:"Ojibwe, Ojibwa"},{code:"cu",name:"Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic"},{code:"om",name:"Oromo"},{code:"or",name:"Oriya"},{code:"os",name:"Ossetian, Ossetic"},{code:"pa",name:"Panjabi, Punjabi"},{code:"pi",name:"P\u0101li"},{code:"fa",name:"Persian"},{code:"pl",name:"Polish"},{code:"ps",name:"Pashto, Pushto"},{code:"pt",name:"Portuguese"},{code:"qu",name:"Quechua"},{code:"rm",name:"Romansh"},{code:"rn",name:"Kirundi"},{code:"ro",name:"Romanian, Moldavian, Moldovan"},{code:"ru",name:"Russian"},{code:"sa",name:"Sanskrit (Sa\u1E41sk\u1E5Bta)"},{code:"sc",name:"Sardinian"},{code:"sd",name:"Sindhi"},{code:"se",name:"Northern Sami"},{code:"sm",name:"Samoan"},{code:"sg",name:"Sango"},{code:"sr",name:"Serbian"},{code:"gd",name:"Scottish Gaelic; Gaelic"},{code:"sn",name:"Shona"},{code:"si",name:"Sinhala, Sinhalese"},{code:"sk",name:"Slovak"},{code:"sl",name:"Slovene"},{code:"so",name:"Somali"},{code:"st",name:"Southern Sotho"},{code:"es",name:"Spanish; Castilian"},{code:"su",name:"Sundanese"},{code:"sw",name:"Swahili"},{code:"ss",name:"Swati"},{code:"sv",name:"Swedish"},{code:"ta",name:"Tamil"},{code:"te",name:"Telugu"},{code:"tg",name:"Tajik"},{code:"th",name:"Thai"},{code:"ti",name:"Tigrinya"},{code:"bo",name:"Tibetan Standard, Tibetan, Central"},{code:"tk",name:"Turkmen"},{code:"tl",name:"Tagalog"},{code:"tn",name:"Tswana"},{code:"to",name:"Tonga (Tonga Islands)"},{code:"tr",name:"Turkish"},{code:"ts",name:"Tsonga"},{code:"tt",name:"Tatar"},{code:"tw",name:"Twi"},{code:"ty",name:"Tahitian"},{code:"ug",name:"Uighur, Uyghur"},{code:"uk",name:"Ukrainian"},{code:"ur",name:"Urdu"},{code:"uz",name:"Uzbek"},{code:"ve",name:"Venda"},{code:"vi",name:"Vietnamese"},{code:"vo",name:"Volap\xFCk"},{code:"wa",name:"Walloon"},{code:"cy",name:"Welsh"},{code:"wo",name:"Wolof"},{code:"fy",name:"Western Frisian"},{code:"xh",name:"Xhosa"},{code:"yi",name:"Yiddish"},{code:"yo",name:"Yoruba"},{code:"za",name:"Zhuang, Chuang"}];function zc(){return Pc}const F=zc();Tc.map(e=>({formatted:e.name,code:e.code}));var Lc=(e=>(e[e.smallUpper=479]="smallUpper",e[e.mediumLower=480]="mediumLower",e[e.mediumUpper=639]="mediumUpper",e[e.largeLower=640]="largeLower",e[e.largeUpper=1023]="largeUpper",e[e.xLargeLower=1024]="xLargeLower",e[e.xLargeUpper=1365]="xLargeUpper",e[e.xxLargeLower=1366]="xxLargeLower",e[e.xxLargeUpper=1919]="xxLargeUpper",e[e.xxxLargeLower=1920]="xxxLargeLower",e))(Lc||{});function Me(e){return it(`
    @media screen ${At({upper:479})} {
      ${e}
    }
  `)}function Ae(e,t="both"){return it(`
    @media screen ${At({lower:t!=="no-lower"?480:void 0,upper:t!=="no-upper"?639:void 0})} {
      ${e}
    }
  `)}function nt(e,t="both"){return it(`
    @media screen ${At({lower:t!=="no-lower"?640:void 0,upper:t!=="no-upper"?1023:void 0})} {
      ${e}
    }
  `)}function at(e,t="both"){return it(`
    @media screen ${At({lower:t!=="no-lower"?1024:void 0,upper:t!=="no-upper"?1365:void 0})} {
      ${e}
    }
  `)}function Uc(e,t="both"){return it(`
    @media screen ${At({lower:t!=="no-lower"?1366:void 0,upper:t!=="no-upper"?1919:void 0})} {
      ${e}
    }
  `)}function Be(e){return it(`
    @media screen ${At({lower:1920})} {
      ${e}
    }
  `)}function At({lower:e,upper:t}){const r=[];return e&&r.push(`(min-width: ${e}px)`),t&&r.push(`(max-width: ${t}px)`),"and "+r.join(" and ")}function Wd(e,t){let r;try{t&&(r=new URL(t))}catch(o){o instanceof TypeError||console.error(o)}if(!r)try{e&&t&&(r=new URL(t,e))}catch(o){console.error(o)}return!r&&e?new URL(e):r}function qd(e,t){try{return new URL(e,t),null}catch(r){return`${r}`}}function Xs(e){let t;if(e&&!e.startsWith("http")&&!e.startsWith("https")&&(t="https://"+e),t){if(Ao(t)===!1&&!e.toLowerCase().startsWith("http://"))throw new Error("This error means that you may have a bad https cert or the url may not be correct");return t}return e}function Ao(e){var t=new RegExp("^((https?:)?\\/\\/)?(?:\\S+(?::\\S*)?@)?(([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\\\#[-a-z\\\\d_]*)?","i");return!!t.test(e)}let co;function Oc(e,t,r){const o={name:t,uri:e,properties:r};Ys().then(i=>i.trackPageView(o)).catch(i=>console.warn("OneDS record page view error",i))}function Rc(e,t,r,o){Ys().then(i=>i.capturePageAction(null,{actionType:"O",behavior:r,contentTags:{scn:e,scnstp:t},content:o})).catch(i=>console.warn("Process step was not recorded",i))}function Ys(){return co||(co=new Promise((e,t)=>{const r=document.createElement("script");r.onerror=()=>t("Analytics script failed to load"),r.onload=()=>{const o=Mc();o instanceof Error?t(o):e(o)},r.src="https://az416426.vo.msecnd.net/scripts/c/ms.analytics-web-2.min.js",document.head.appendChild(r)})),co}function Mc(){try{const e=new window.oneDS.ApplicationInsights,t={instrumentationKey:"f72753e593724c6183de8c8a3a5f419d-5e71f893-09c1-41d8-abf0-667e691c28a9-6593",webAnalyticsConfiguration:{manageCv:!0,urlCollectHash:!1,syncPageActionNavClick:!1,autoCapture:{click:!0,scroll:!1,pageView:!1,jsError:!1,msTags:!1,onUnload:!0}}};return e.initialize(t,[]),e}catch(e){return e instanceof Error?e:new Error(`Error initializing analytics: ${e}`)}}var D;(function(e){e[e.ContentUpdate=0]="ContentUpdate",e[e.NavigationBack=1]="NavigationBack",e[e.NavigationSelectionJump=2]="NavigationSelectionJump",e[e.NavigationForward=3]="NavigationForward",e[e.Apply=4]="Apply",e[e.Remove=5]="Remove",e[e.Sort=6]="Sort",e[e.Expand=7]="Expand",e[e.Reduce=8]="Reduce",e[e.OpenContextMenu=9]="OpenContextMenu",e[e.Tab=10]="Tab",e[e.Copy=11]="Copy",e[e.Experimentation=12]="Experimentation",e[e.Print=13]="Print",e[e.Show=14]="Show",e[e.Hide=15]="Hide",e[e.Maximize=16]="Maximize",e[e.Minimize=17]="Minimize",e[e.Backbutton=18]="Backbutton",e[e.StartProcess=20]="StartProcess",e[e.ProcessCheckpoint=21]="ProcessCheckpoint",e[e.CompleteProcess=22]="CompleteProcess",e[e.CancelProcess=23]="CancelProcess",e[e.DownloadCommit=40]="DownloadCommit",e[e.Download=41]="Download",e[e.SearchAutoComplete=60]="SearchAutoComplete",e[e.Search=61]="Search",e[e.SearchInitiate=62]="SearchInitiate",e[e.TextBoxInput=63]="TextBoxInput",e[e.Purchase=80]="Purchase",e[e.AddToCart=81]="AddToCart",e[e.ViewCart=82]="ViewCart",e[e.AddToWishlist=83]="AddToWishlist",e[e.FindStore=84]="FindStore",e[e.Checkout=85]="Checkout",e[e.RemoveFromCart=86]="RemoveFromCart",e[e.PurchaseComplete=87]="PurchaseComplete",e[e.ViewCheckoutPage=88]="ViewCheckoutPage",e[e.ViewCartPage=89]="ViewCartPage",e[e.ViewPDP=90]="ViewPDP",e[e.UpdateItemQuantity=91]="UpdateItemQuantity",e[e.IntentToBuy=92]="IntentToBuy",e[e.PushToInstall=93]="PushToInstall",e[e.SignIn=100]="SignIn",e[e.SignOut=101]="SignOut",e[e.SocialShare=120]="SocialShare",e[e.SocialLike=121]="SocialLike",e[e.SocialReply=122]="SocialReply",e[e.Call=123]="Call",e[e.Email=124]="Email",e[e.Community=125]="Community",e[e.SocialFollow=126]="SocialFollow",e[e.Vote=140]="Vote",e[e.SurveyInitiate=141]="SurveyInitiate",e[e.SurveyComplete=142]="SurveyComplete",e[e.ReportApplication=143]="ReportApplication",e[e.ReportReview=144]="ReportReview",e[e.SurveyCheckpoint=145]="SurveyCheckpoint",e[e.Contact=145]="Contact",e[e.InitiateRegistration=161]="InitiateRegistration",e[e.RegistrationComplete=162]="RegistrationComplete",e[e.CancelSubscription=163]="CancelSubscription",e[e.RenewSubscription=164]="RenewSubscription",e[e.ChangeSubscription=165]="ChangeSubscription",e[e.RegistrationCheckpoint=166]="RegistrationCheckpoint",e[e.ChatInitiate=180]="ChatInitiate",e[e.ChatEnd=181]="ChatEnd",e[e.TrialSignup=200]="TrialSignup",e[e.TrialInitiate=201]="TrialInitiate",e[e.SignUp=210]="SignUp",e[e.FreeSignUp=211]="FreeSignUp",e[e.PartnerReferral=220]="PartnerReferral",e[e.LearnLowerFunnel=230]="LearnLowerFunnel",e[e.LearnHigherFunnel=231]="LearnHigherFunnel",e[e.ShoppingIntent=232]="ShoppingIntent",e[e.VideoStart=240]="VideoStart",e[e.VideoPause=241]="VideoPause",e[e.VideoContinue=242]="VideoContinue",e[e.VideoCheckpoint=243]="VideoCheckpoint",e[e.VideoJump=244]="VideoJump",e[e.VideoComplete=245]="VideoComplete",e[e.VideoBuffering=246]="VideoBuffering",e[e.VideoError=247]="VideoError",e[e.VideoMute=248]="VideoMute",e[e.VideoUnmute=249]="VideoUnmute",e[e.VideoFullScreen=250]="VideoFullScreen",e[e.VideoUnfullscreen=251]="VideoUnfullscreen",e[e.VideoReplay=252]="VideoReplay",e[e.VideoPlayerLoad=253]="VideoPlayerLoad",e[e.VideoPlayerClick=254]="VideoPlayerClick",e[e.VideoVolumeControl=255]="VideoVolumeControl",e[e.VideoAudioTrackControl=256]="VideoAudioTrackControl",e[e.VideoClosedCaptionControl=257]="VideoClosedCaptionControl",e[e.VideoClosedCaptionStyle=258]="VideoClosedCaptionStyle",e[e.VideoResolutionControl=259]="VideoResolutionControl",e[e.VirtualEventJoin=260]="VirtualEventJoin",e[e.VirtualEventEnd=261]="VirtualEventEnd",e[e.Impression=280]="Impression",e[e.Click=281]="Click",e[e.RichMediaComplete=282]="RichMediaComplete",e[e.AdBuffering=283]="AdBuffering",e[e.AdError=284]="AdError",e[e.AdStart=285]="AdStart",e[e.AdComplete=286]="AdComplete",e[e.AdSkip=287]="AdSkip",e[e.AdTimeout=288]="AdTimeout",e[e.Other=300]="Other"})(D||(D={}));const B={isProduction:!1,manifestFinderUrl:"",manifestCreatorUrl:"",serviceWorkerUrl:"",api:"",windowsPackageGeneratorUrl:"",androidPackageGeneratorUrl:"",iosPackageGeneratorUrl:"",oculusPackageGeneratorUrl:"",imageGeneratorUrl:"",safeUrlFetcher:"",webPackageGeneratorUrl:"",webPackageGeneratorFormUrl:"",ratingUrl:"",zipCreatorUrl:""};B.isProduction=!0,B.manifestFinderUrl="https://pwabuilder-manifest-finder.azurewebsites.net/api/findmanifest",B.manifestCreatorUrl="https://pwabuilder-manifest-creator.azurewebsites.net/api/create",B.serviceWorkerUrl="https://pwabuilder-serviceworker-finder.centralus.cloudapp.azure.com",B.api="https://pwabuilder-tests.azurewebsites.net/api",B.windowsPackageGeneratorUrl="https://pwabuilder-winserver.centralus.cloudapp.azure.com/msix/generatezip",B.androidPackageGeneratorUrl="https://pwabuilder-cloudapk-pre.azurewebsites.net",B.iosPackageGeneratorUrl="https://pwabuilder-ios.azurewebsites.net/packages/create",B.oculusPackageGeneratorUrl="https://pwabuilder-oculus-linux-docker-app.azurewebsites.net/packages/create",B.imageGeneratorUrl="https://appimagegenerator-prod.azurewebsites.net/api/image",B.safeUrlFetcher="https://pwabuilder-safe-url.azurewebsites.net/api/getsafeurl",B.webPackageGeneratorUrl="https://pwabuilder-web-platform.azurewebsites.net/",B.webPackageGeneratorFormUrl="https://pwabuilder-web-platform.azurewebsites.net/form",B.ratingUrl="https://pwabuilder-url-logger-api.azurewebsites.net/api/analyses/getaveragescores",B.zipCreatorUrl="https://azure-express-zip-creator.azurewebsites.net/api";function Dc(e,t,r){B.isProduction&&Oc(e,t,r)}function H(e,t,r){if(B.isProduction){const o=JSON.parse(sessionStorage.getItem("demoURL"));let i="pwa-builder-v4";o&&(i="demo-process");let n=window.location.pathname.slice(1);n.length==0&&(n="home");let s=n+"."+e;Ic(i,s,t,r)}}function Ic(e,t,r,o){B.isProduction&&Rc(e,t,r,o)}var Fc=Object.defineProperty,Nc=Object.getOwnPropertyDescriptor,Bo=(e,t,r,o)=>{for(var i=o>1?void 0:o?Nc(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(i=(o?s(t,r,i):s(i))||i);return o&&i&&Fc(t,r,i),i};let Or=class extends X{constructor(){super(),this.companies=["facebook","instagram","mailchimp","plutotv","sketchapp","glass","tiktok","twitter"],this.paused=!1}static get styles(){return[_`
      :host {
        --carousel-width: 1000px;
        --slide-width: 200px;
        --slide-height: 80px;
        --carousel-image-width: 120px;
      }
      #success-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 2em 0;
        background-color: white;
      }

      #success-title {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #292C3A;
        margin-bottom: 1em;
      }

      #success-title h2 {
        text-align: center;
        font-size: 1.6em;
        margin: 0;
      }

      #success-title p {
        text-align: center;
        margin: 0;
        font-size: .75em;
      }

      #success-wrapper #img-box {
        background-image: url("/assets/new/packaged_1366.svg");
        height: 4em;
        width: 100%;
        background-repeat: no-repeat;
        background-position: center;
      }
      .controls {
        height: 25px;
        width: 25px;
        border: 1px solid #4F3FB6;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: none;
      }

      .controls:hover {
        cursor: pointer;
      }

      sl-icon {
        color: #4F3FB6;
        font-size: 15px;
      }

      @keyframes scroll {
        0% { transform: translateX(0); }
        12% { transform: translateX(calc(var(--slide-width) * -1)); }
        24% { transform: translateX(calc(var(--slide-width) * -2)); }
        36% { transform: translateX(calc(var(--slide-width) * -3)); }
        48% { transform: translateX(calc(var(--slide-width) * -4)); }
        60% { transform: translateX(calc(var(--slide-width) * -5)); }
        72% { transform: translateX(calc(var(--slide-width) * -6)); }
        84% { transform: translateX(calc(var(--slide-width) * -7)); }
        100% { transform: translateX(calc(var(--slide-width) * -8)); }
      }

      .slider {
        background: white;
        height: var(--slide-height);
        overflow:hidden;
        position: relative;
        width: var(--carousel-width);
      }

      .slider::before,
      .slider::after {
        content: "";
        height: 100px;
        position: absolute;
        width: 200px;
        z-index: 2;
      }
      
      .slider::after {
        right: 0;
        top: 0;
        transform: rotateZ(180deg);
      }

      .slider::before {
        left: 0;
        top: 0;
      }

      .slide-track {
        animation: scroll 21s infinite ease;
        animation-delay: 3s;
        display: flex;
        width: calc(var(--slide-width) * 16);
      }
      
      .slide {
        display: flex;
        align-items: center;
        justify-content: center;
        height: var(--slide-height);
        width: var(--slide-width)
      }

      .slide img {
        height: auto;
        width: var(--carousel-image-width);
      }

      @media (min-width: 200px) and (max-width: 400px) {
        :host {
          --carousel-width: 200px;
        }
      }

      @media (min-width: 400px) and (max-width: 600px) {
        :host {
          --carousel-width: 400px;
        }
      }

      @media (min-width: 600px) and (max-width: 800px) {
        :host {
          --carousel-width: 600px;
        }
      }

      @media (min-width: 800px) and (max-width: 1000px) {
        :host {
          --carousel-width: 800px;
        }
      }

      @media (min-width: 1000px) {
        :host {
          --carousel-width: 1000px;
        }
      }

      @media screen and (-ms-high-contrast: white-on-black) {
        .controls sl-icon {
          color: white;
          border-color: white;
        }
      }
    `]}connectedCallback(){super.connectedCallback()}shuffle(e){let t=e.length,r;for(;t!=0;)r=Math.floor(Math.random()*t),t--,[e[t],e[r]]=[e[r],e[t]];return e}toggleAnimation(){this.paused=!this.paused;let e=this.shadowRoot.querySelector(".slide-track");this.paused?(e.style.animationPlayState="paused",H("middle.carousel_paused",D.ProcessCheckpoint)):(e.style.animationPlayState="running",H("middle.carousel_played",D.ProcessCheckpoint))}render(){return N`
    <div id="success-wrapper">
      <div id="success-title">
          <h2>Apps Packaged</h2>
          <p>Companies of all sizes—from startups to Fortune 500s—have used PWABuilder to package their PWAs.</p>
      </div>
      <div class="slider">
        <div class="slide-track">
          ${this.companies.map(e=>N`
              <div class="slide">
                <img src="/assets/new/${e}_carousel.png" alt="${e} logo" />
              </div>`)}
            ${this.companies.map(e=>N`
              <div class="slide">
                <img src="/assets/new/${e}_carousel.png" alt="${e} logo" />
              </div>`)}
        </div>
      </div>
      ${this.paused?N`<button class="controls" type="button" @click=${()=>this.toggleAnimation()}>
              <sl-icon name="play-fill" aria-label="Play apps scrolling button"></sl-icon>
            </button>`:N`<button class="controls" type="button" @click=${()=>this.toggleAnimation()}> 
              <sl-icon name="pause-fill" aria-label="Pause apps scrolling button"></sl-icon>
            </button>`}
    </div>
    `}};Bo([fe()],Or.prototype,"companies",2);Bo([fe()],Or.prototype,"paused",2);Or=Bo([se("companies-packaged")],Or);const Vc=[{imageUrl:"/assets/new/manifest.svg",title:F.text.resource_hub_new.titles.manifest,description:F.text.resource_hub_new.description.manifest,linkUrl:"https://microsoft.github.io/win-student-devs/#/30DaysOfPWA/core-concepts/03"},{imageUrl:"/assets/new/sw.svg",title:F.text.resource_hub_new.titles.sw,description:F.text.resource_hub_new.description.sw,linkUrl:"https://microsoft.github.io/win-student-devs/#/30DaysOfPWA/core-concepts/05"},{imageUrl:"/assets/new/https.svg",title:F.text.resource_hub_new.titles.https,description:F.text.resource_hub_new.description.https,linkUrl:"https://microsoft.github.io/win-student-devs/#/30DaysOfPWA/core-concepts/04"}];function Hc(){return Vc}var jc=Object.defineProperty,Wc=Object.getOwnPropertyDescriptor,ar=(e,t,r,o)=>{for(var i=o>1?void 0:o?Wc(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(i=(o?s(t,r,i):s(i))||i);return o&&i&&jc(t,r,i),i};let kt=class extends X{constructor(){super(),this.imageUrl="",this.cardTitle="",this.description="",this.linkRoute=""}static get styles(){return[_`
      .card {
        min-width: 140px;
        max-width: 220px;
        height: 12em;
        padding: .5em 1.25em;
        padding-bottom: 35px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        background: white;
        border-radius: 4px;
        box-shadow: 0px 16px 24px 0px #00000026;
      }

      .card-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .card-content img {
        width: 4em;
        height: auto;
      }

      .card-content h3 {
        font-size: 1em;
        line-height: 24px;
        font-weight: var(--font-bold);
        margin: 0;
        margin-bottom: .5em;
        text-align: center;
        white-space: nowrap;
      }

      .card-content p {
        color: var(--secondary-font-color);
        font-size: .65em;
        line-height: 18px;
        text-align: center;
        margin: 0;
      }

      .card-actions {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%
      }

      .card-actions a {
        color: #4F3FB6;
        font-weight: bold;
        border-bottom: 1px solid rgb(79, 63, 182);
        text-decoration: none;
        line-height: 14px;
        font-size: 14px;
        margin: 0;
      }

      .card-actions a:hover {
        cursor: pointer;
      }

      /* < 480px */
      ${Me(_`
          .card {
            min-width: 140px;
            max-width: 300px;
            height: 15em;
          }
          .card-content img {
            width: 6em;
          }
          .card-content p {
            font-size: 14px;
          }
          .card-content h3 {
            font-size: 20px;
          }
      `)}

      /* 480px - 639px */
      ${Ae(_`
        .card {
            min-width: 140px;
            max-width: 300px;
            height: 12em;
          }
          .card-content p {
            font-size: .825em;
          }
          .card-content h3 {
            font-size: 20px;
          }
      `)}

      /* 640px - 1023px */
      ${nt(_`
        .card {
          min-width: 140px;
          max-width: 200px;
          height: 12em;
          padding: .75em;
          padding-bottom: 1.25em;
        }
      `)}

      /*1024px - 1365px*/
      ${at(_`
      `)}

      /* > 1920 */
      ${Be(_`
          
      `)}

    `]}firstUpdated(){}render(){return N`
      <div class="card">
        <div class="card-content">
          <img src=${this.imageUrl} alt="${this.cardTitle} icon" role="presentation"/>
          <h3>${this.cardTitle}</h3>
          <p>${this.description}</p>
        </div>
        <div class="card-actions" @click=${()=>H("middle."+this.cardTitle+"_learn_more_clicked",D.ProcessCheckpoint)}>
          <a href=${this.linkRoute} target="_blank" rel="noopener" aria-label="Learn more about ${this.cardTitle}, will open separate tab">Learn More</a>
        </div>
      </div>
    `}};ar([G({type:String})],kt.prototype,"imageUrl",2);ar([G({type:String})],kt.prototype,"cardTitle",2);ar([G({type:String})],kt.prototype,"description",2);ar([G({type:String})],kt.prototype,"linkRoute",2);kt=ar([se("info-card")],kt);var qc=Object.defineProperty,Bc=Object.getOwnPropertyDescriptor,Qs=(e,t,r,o)=>{for(var i=o>1?void 0:o?Bc(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(i=(o?s(t,r,i):s(i))||i);return o&&i&&qc(t,r,i),i};let Po=class extends X{constructor(){super(),this.cards=[]}static get styles(){return[_`
      #hub-panel {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-image: url(/assets/new/OtterBackgroundPWA1920.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        padding: 2em;
      }

      #hub-panel h2 {
        color: white;
        margin: 0;
        margin-bottom: 1em;
        font-weight: bold;
        font-size: 1.55em;
        text-align: center;
      }

      #cards {
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        column-gap: 1em;
      }

      /* < 480px */
      ${Me(_`
          #hub-panel{
            background-image: url(/assets/new/BackgroundPWA320.png);
            padding: 2em 1em;
          }
          #cards {
            flex-direction: column;
            row-gap: 1em;
            align-items: center;
            justify-content: center;
          }
      `)}

      /* 480px - 639px */
      ${Ae(_`
          #hub-panel{
            background-image: url(/assets/new/BackgroundPWA480.png);
            padding: 2em 4em;
          }
          #cards {
            flex-direction: column;
            row-gap: 1em;
            align-items: center;
            justify-content: center;
          }
      `)}

      /* 640px - 1023px */
      ${nt(_`
          #hub-panel{
            background-image: url(/assets/new/OtterBackgroundPWA1024.jpg);
            background-position: center center;
            padding: 3.25em;
          }
      `)}

      /*1024px - 1365px*/
      ${at(_`
          #hub-panel {
            background: url(/assets/new/OtterBackgroundPWA1366.jpg);
            background-position: center center;
            background-size: cover;
            background-repeat: no-repeat;
          }
      `)}

      /* > 1920 */
      ${Be(_`
            #hub-panel{
            background-image: url(/assets/new/OtterBackgroundPWA1920.jpg);
            background-repeat: no-repeat;
            background-size: cover;
            padding: 3em;
          }
      `)}

      
    `]}connectedCallback(){super.connectedCallback(),this.cards=Hc()}render(){return N`
      <div id="hub-panel">
        <h2>What makes a PWA?</h2>
        <div id="cards">
          ${this.cards.map(e=>N`
            <info-card
            cardTitle=${e.title}
            description=${e.description}
            imageUrl=${e.imageUrl}
            linkRoute=${e.linkUrl}
          >
          </info-card>
          `)}
        </div>
      </div>
    `}};Qs([fe()],Po.prototype,"cards",2);Po=Qs([se("resource-hub")],Po);const Gc=[{imageUrl:"/assets/new/trivago.png",stat:F.text.success_stories.stat.trivago,description:F.text.success_stories.description.trivago,value:F.text.success_stories.value.trivago,company:"trivago",source:"https://www.thinkwithgoogle.com/intl/en-gb/marketing-strategies/app-and-mobile/trivago-embrace-progressive-web-apps-as-the-future-of-mobile/"},{imageUrl:"/assets/new/alibaba.png",stat:F.text.success_stories.stat.alibaba,description:F.text.success_stories.description.alibaba,value:F.text.success_stories.value.alibaba,company:"alibaba",source:"https://developers.google.com/web/showcase/2016/alibaba"},{imageUrl:"/assets/new/pintrest.png",stat:F.text.success_stories.stat.pintrest,description:F.text.success_stories.description.pintrest,value:F.text.success_stories.value.pintrest,company:"pintrest",source:"https://medium.com/dev-channel/a-pinterest-progressive-web-app-performance-case-study-3bd6ed2e6154"},{imageUrl:"/assets/new/tinder.png",stat:F.text.success_stories.stat.tinder,description:F.text.success_stories.description.tinder,value:F.text.success_stories.value.tinder,company:"tinder",source:"https://medium.com/@addyosmani/a-tinder-progressive-web-app-performance-case-study-78919d98ece0"}];function Kc(){return Gc}var Jc=Object.defineProperty,Xc=Object.getOwnPropertyDescriptor,lt=(e,t,r,o)=>{for(var i=o>1?void 0:o?Xc(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(i=(o?s(t,r,i):s(i))||i);return o&&i&&Jc(t,r,i),i};let We=class extends X{constructor(){super(),this.imageUrl="",this.cardStat="",this.description="",this.cardValue="",this.company="",this.source=""}static get styles(){return[_`
      .success-card {
        width: 350px;
        height: max-content;
        padding: 1em;
        display: inline-flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        background: white;
        border-radius: 4px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        text-decoration: none;
        color: black;
      }

      .success-line-one {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        width: 100%;
        /* for screen reader scan */
        flex-direction: row-reverse;
      }

      .success-stat {
        margin: 0;
        font-size: 20px;
        line-height: 28px;
        font-weight: bold;
        margin-bottom: .75em;
      }

      .success-stat span {
        margin-right: 50%;
        font-size: 36px;
        line-height: 36px;
        font-weight: bold;
      }

      .success-desc {
        margin: 0;
        font-size: 14px;
        line-height: 18px;
        color: var(--secondary-font-color);
      }

      @media screen and (-ms-high-contrast: white-on-black) {
        .success-card:focus{
          border: 4px solid white;
          border-radius: 5px;
        }
      }

      @media(max-width: 800px){
        .success-card img {
          margin-bottom: 10px;
        }
        .success-line-one {
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .success-stat span {
          margin-right: 0;
        }
        .success-line-one h3 {
          font-size: 20px;
          text-align: center;
        }
      }

      /* < 480px */
      ${Me(_`
        .success-card {
          width: 280px;
          box-sizing: border-box;
        }
        
      `)}

      /* 480px - 639px */
      ${Ae(_`
        .success-card {
          width: 400px;
        }
        .success-line-one h3 {
          font-size: 28px;
        }
      `)}

      /* 640px - 1023px */
      ${nt(_`
          .success-card {
            width: 305px;
          }
      `)}

      /*1024px - 1365px*/
      ${at(_`

      `)}

      /* > 1920px */
      ${Be(_`
        .success-card {
          width: 525px;
        }
      `)}
    `]}render(){return N`
      <a @click=${()=>H("middle."+this.company+"_clicked",D.ProcessCheckpoint)} class="success-card" href="${this.source}" rel="noopener" target="_blank" aria-label=${"Success story of "+this.company+" link, click for more details on separate tab"}>
        <div class="success-line-one">
           <img src=${this.imageUrl} alt="${this.company} logo"/>
           <h3 class="success-stat">
             <span>${this.cardValue}</span> ${this.cardStat}
           </h3>    
        </div>
        <p class="success-desc">${this.description}</p>
  </a>
    `}};lt([G({type:String})],We.prototype,"imageUrl",2);lt([G({type:String})],We.prototype,"cardStat",2);lt([G({type:String})],We.prototype,"description",2);lt([G({type:String})],We.prototype,"cardValue",2);lt([G({type:String})],We.prototype,"company",2);lt([G({type:String})],We.prototype,"source",2);We=lt([se("success-card")],We);var Yc=Object.defineProperty,Qc=Object.getOwnPropertyDescriptor,Zs=(e,t,r,o)=>{for(var i=o>1?void 0:o?Qc(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(i=(o?s(t,r,i):s(i))||i);return o&&i&&Yc(t,r,i),i};let To=class extends X{constructor(){super(),this.cards=[]}static get styles(){return[_`
      #success-panel::before {
        content: "";
      }
      #success-panel {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-image: url(/assets/new/successBG_1920.png);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: right;
        padding: 2em;
        /* padding-left: 20%; */
      }

      #success-panel h2 {
        margin: 0;
        margin-bottom: 1em;
        font-weight: bold;
        font-size: 1.55em;
        text-align: left;
      }

      #success-cards {
        width: 100%;
        display: grid;
        grid-template-columns: min-content min-content;
        grid-template-rows: auto auto;
        row-gap: .8em;
        column-gap: 1em;
      }

      /* < 480px */
      ${Me(_`
          #success-panel {
            background-image: url(/assets/new/successBG_320.png);
            padding: 2em 1em;
          }
          #success-panel h2 {
            text-align: left;
            width: 100%;
            padding-left: 5px;
            font-size: 1.75em;
            margin-bottom: .5em;
          }
          
          #success-cards {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            align-self: center;
          }
      `)}

      /* 480px - 639px */
      ${Ae(_`
        #success-panel {
          background-image: url(/assets/new/successBG_480.png);
          padding: 1em;
          padding-bottom: 2em;
        }

        #success-panel h2 {
          text-align: left;
          width: 100%;
          padding-left: 5px;
          margin-bottom: .5em;
        }
        
        #success-cards {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          align-self: center;
        }
      `)}

      /* 640px - 1023px */
      ${nt(_`
          #success-panel {
            background-image: url(/assets/new/successBG_1024.png);
            padding-left: 2em;
          }
          #success-panel h2 {
            margin-bottom: .5em;
          }
      `)}

      @media (min-width: 640px) and (max-width: 850px) {
        #success-panel {
          background-image: url(/assets/new/successBG_480.png);
          padding: 1em;
          padding-bottom: 2em;
        }

        #success-panel h2 {
          text-align: center;
          width: 100%;
        }
        
        #success-cards {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: fit-content;
          align-self: center;
        }
      }
      

      /*1024px - 1365px*/
      ${at(_`
          #success-panel {
            /* padding-left: 15%; */
            padding-bottom: 2.5em;
          }
      `)}

      /* > 1920px */
      ${Be(_`
          #success-panel {
            /* padding-left: 30%; */
            padding-bottom: 2.5em;
          }
          #success-panel h2 {
            margin-bottom: .5em;
          }
      `)}
    `]}connectedCallback(){super.connectedCallback(),this.cards=Kc()}render(){return N`
      <div id="success-panel">
        <div id="success-panel-wrapper">
          <h2>PWA success stories</h2>
          <div id="success-cards">
            ${this.cards.map(e=>N`
            <success-card
            cardStat=${e.stat}
            description=${e.description}
            imageUrl=${e.imageUrl}
            cardValue=${e.value}
            company=${e.company}
            source=${e.source}
            >
            </success-card>
            `)}
          </div>
        </div>
      </div>
    `}};Zs([fe()],To.prototype,"cards",2);To=Zs([se("success-stories")],To);const Zc=[{imageUrl:"/assets/new/github.png",title:F.text.community_hub.titles.github,description:F.text.community_hub.description.github,links:[{link:"https://github.com/pwa-builder/PWABuilder",text:"Visit us on GitHub"},{link:"https://github.com/pwa-builder/PWABuilder/wiki/How-to-contribute-to-PWABuilder",text:"Contribute to project"}],company:"github"},{imageUrl:"/assets/new/twitter.png",title:F.text.community_hub.titles.twitter,description:F.text.community_hub.description.twitter,links:[{link:"https://twitter.com/pwabuilder",text:"Follow our Twitter"}],company:"twitter"},{imageUrl:"/assets/new/discord.png",title:F.text.community_hub.titles.discord,description:F.text.community_hub.description.discord,links:[{link:"https://aka.ms/pwabuilderdiscord",text:"Join our Discord"}],company:"discord"}];function ed(){return Zc}var td=Object.defineProperty,rd=Object.getOwnPropertyDescriptor,Pt=(e,t,r,o)=>{for(var i=o>1?void 0:o?rd(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(i=(o?s(t,r,i):s(i))||i);return o&&i&&td(t,r,i),i};let rt=class extends X{constructor(){super(),this.imageUrl="",this.cardTitle="",this.description="",this.company="",this.links=[]}static get styles(){return[_`
      .community-card {
        width: max-content;
        max-width: 480px;
        height: max-content;
        color: #292C3A;
        display: flex;
        align-items: flex-start;
        column-gap: 1.5em;
        padding: .5em;
        padding-left: 0;
      }

      .community-card-content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
      }

      .community-card img {
        width: 3em;
        height: auto;
      }

      .community-card-content h3 {
        margin: 0;
        font-size: 1em;
      }

      .community-card-content p {
        font-size: .75em;
        margin-top: 0;
        margin-bottom: .25em;
      }

      .community-card-actions {
        color:  #4F3FB6;
        fill: #4F3FB6;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        column-gap: 1.5em;
      }

      .community-card-actions a {
        color: #4F3FB6;
        font-size: 14px;
        font-weight: bold;
        margin-right: .5em;
        width: 100%;
        border-bottom: 1px solid rgb(79, 63, 182);
        text-decoration: none;
        line-height: 14px;
      }

      .card-link-box {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: max-content;
      }

      .community-card-image img {
        width: 50px;
        height: auto;
      }

      .community-card-actions a:hover {
        cursor: pointer;
      }

      .community-card-actions a:visited {
        color:  #4F3FB6;
      }
      .card-link-box img {
        width: .5em;
        height: auto;
      }

      @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        }
        40% {
            transform: translateX(-5px);
        }
        60% {
            transform: translateX(5px);
        }
      }

      .card-link-box:hover img {
        animation: bounce 1s;
      }

      /* < 480px */
      ${Me(_`
          .community-card {
            width: 100%;
          }
          .community-card-actions {
            flex-direction: column;
            align-items: flex-start;
            row-gap: .5em;
          }
          .community-card-image img {
            width: 35px;
            height: auto;
          }
          .community-card-content p {
            font-size: 16px;
          }
      `)}

      /* 480px - 639px */
      ${Ae(_`
          .community-card {
            width: 100%;
          }
      `)}
    `]}firstUpdated(){}render(){return N`
      <div class="community-card">
        <div class="community-card-image">
          <img src=${this.imageUrl} alt ="${this.company} logo" />
        </div>
        <div class="community-card-content">
          <h3>${this.cardTitle}</h3>
          <p>${this.description}</p>
          <div class="community-card-actions">
            ${this.links&&this.links.map(e=>N`
              <div class="card-link-box">
                <a @click=${()=>H("bottom."+e.text+"_clicked",D.ProcessCheckpoint)} href=${e.link} target="_blank" rel="noopener" aria-label="${e.text}, will open in separate tab">${e.text}</a>
                <img src="/assets/new/arrow.svg" alt="arrow" role="presentation"/>
              </div>
              `)}
          </div>
        </div>
      </div>
    `}};Pt([G({type:String})],rt.prototype,"imageUrl",2);Pt([G({type:String})],rt.prototype,"cardTitle",2);Pt([G({type:String})],rt.prototype,"description",2);Pt([G({type:String})],rt.prototype,"company",2);Pt([G({type:Array})],rt.prototype,"links",2);rt=Pt([se("community-card")],rt);var od=Object.defineProperty,id=Object.getOwnPropertyDescriptor,en=(e,t,r,o)=>{for(var i=o>1?void 0:o?id(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(i=(o?s(t,r,i):s(i))||i);return o&&i&&od(t,r,i),i};let zo=class extends X{constructor(){super(),this.cards=[]}static get styles(){return[_`
      #community-panel {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        background: white;
        padding: 2em;
        column-gap: 1em;
      }

      #community-photo {
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: center;
      }

      #community-photo img { 
        width: 500px;
        height: auto;
      }

      #community-content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
      }

      #community-content h2 {
        color: black;
        margin: 0;
        margin-bottom: 1em;
        font-weight: bold;
        font-size: 1.55em;
      }

      #community-cards {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        row-gap: 30px;
      }

       /* < 480px */
       ${Me(_`
          #community-photo img { 
            display: none;
          }
          #community-panel {
            column-gap: 0;
          }
          #community-content h2 {
            width: 100%;
            margin-bottom: .5em;
          }
          #community-content{
            width: 280px;
          }
      `)}

      /* 480px - 639px */
      ${Ae(_`
          #community-photo img { 
            display: none;
          }
          #success-panel {
            align-items: center;
            justify-content: center;
          }
          #community-panel {
            column-gap: 0;
          }
          #community-content {
            align-items: center;
            justify-content: center;
            width: 100%;
          }
          #community-content h2 {
            width: 100%;
            margin-bottom: .5em;
          }
      `)}

      

      /* 640px - 1023px */
      ${nt(_`
          #community-photo img { 
            max-width: 18em;
            height: auto;
          }
          #community-panel h2 {
            margin-bottom: .5em;
          }
          #community-cards {
            row-gap: 15px;
          }
      `)}

      @media (min-width: 640px) and (max-width: 850px) {
        #community-photo img { 
          display: none;
        }
        #success-panel {
          align-items: center;
          justify-content: center;
        }
      }

      
      

      /*1024px - 1365px*/
      ${at(_`
          
      `)}

      @media (min-width: 1024px) and (max-width: 1160px) {
        #community-photo img { 
          width: 380px;
        }
      }

      /* > 1920px */
      ${Be(_`
          #community-photo img { 
            width: 569px;
            height: auto;
          }
      `)}
    `]}connectedCallback(){super.connectedCallback(),this.cards=ed()}render(){return N`
      <div id="community-panel">
        <div id="community-photo">
          <img src="/assets/new/community-image.png" alt="social hub image" role="presentation"/>
        </div>
        <div id="community-content">
          <h2>Join our Community</h2>
          <div id="community-cards">
            ${this.cards.map(e=>N`
              <community-card
              cardTitle=${e.title}
              description=${e.description}
              imageUrl=${e.imageUrl}
              company=${e.company}
              .links=${e.links}
            >
            </community-card>
            `)}
          </div>
        </div>
      </div>
    `}};en([fe()],zo.prototype,"cards",2);zo=en([se("community-hub")],zo);var $t=(e=>(e.manifest="PWABuilderManifest",e.currentUrl="current_url",e))($t||{}),tn=(e=>(e.manifestUpdate="MANIFEST_UPDATE",e))(tn||{}),ie=(e=>(e.DONE="done",e.ACTIVE="active",e.PENDING="pending",e))(ie||{}),Nt=(e=>(e.TEST="Test",e.REVIEW="Review",e.PUBLISH="Package",e.COMPLETE="Complete",e))(Nt||{});function K(e,t,r,o,i){if(!e||e.length===0)return null;const n=sd(e)?e:e.map(a=>new Tt(a)),s=n.find(a=>a.isExactMatch(t,r,o,i));if(s)return s.getIcon();var l=n.find(a=>a.isSuitableIcon(t,r,o,i));return(l==null?void 0:l.getIcon())||null}function Bd(e){const t=(e||[]).map(r=>new Tt(r));return K(t,"any",512,512,"image/png")||K(t,"maskable",512,512,"image/png")||K(t,"any",192,192,"image/png")||K(t,"maskable",192,192,"image/png")||K(t,"any",512,512,"image/jpeg")||K(t,"maskable",512,512,"image/jpeg")||K(t,"any",192,192,"image/jpeg")||K(t,"maskable",192,192,"image/jpeg")||K(t,"any",512,512,void 0)||K(t,"maskable",512,512,void 0)||K(t,"any",192,192,void 0)||K(t,"maskable",192,192,void 0)||K(t,"any",0,0,"image/png")||K(t,"maskable",0,0,"image/png")||K(t,"any",0,0,"image/jpeg")||K(t,"maskable",0,0,"image/jpeg")||K(t,"any",0,0,void 0)||K(t,"maskable",0,0,void 0)}function sd(e){return e[0]instanceof Tt}const Xe=class{constructor(e){this.icon=e}getProbableFileExtension(){if(!this.icon.type)return this.getFileExtensionFromSrc();const e=this.getFormat();if(e)return e.exts[0];const t=this.icon.type.lastIndexOf("/");return t!=-1?this.icon.type.substring(t+1):null}isAtLeast(e,t){return this.getDimensions().some(o=>o.width>=e&&o.height>=t)}get isPng(){return this.getMimeTypeOrGuessFromSrc()===Xe.pngFormat.mime}get isJpg(){return this.getMimeTypeOrGuessFromSrc()===Xe.jpgFormat.mime}get isSquare(){return this.getDimensions().some(t=>t.width===t.height)}get isEmbedded(){return this.icon.src.includes("data:image")}hasPurpose(e){return e?(this.icon.purpose||"any").split(" ").some(t=>t.toLowerCase()===e.toLowerCase()):!0}hasSize(e){return(this.icon.sizes||"0x0").split(" ").some(t=>t===e)}createIconWithoutUrlEncodedSrc(e){var r;const t={...this.icon};return(r=t.src)!=null&&r.startsWith("data:image")&&(t.src=e),t}getIcon(){return this.icon}getDimensions(){return(this.icon.sizes||"0x0").split(" ").map(e=>{const t=e.split("x");return{width:Number.parseInt(t[0]||"0",10),height:Number.parseInt(t[1]||"0",10)}})}hasMimeType(e){return e?this.getMimeTypeOrGuessFromSrc()===e.toLowerCase():!0}isExactMatch(e,t,r,o){const i=`${t}x${r}`;return this.hasPurpose(e)&&this.hasSize(i)&&!this.isEmbedded&&this.hasMimeType(o)}isSuitableIcon(e,t,r,o){if(this.isExactMatch(e,t,r,o)||!e&&this.isExactMatch(null,t,r,o))return!0;const s=!(t===r)||this.isSquare;return!!(this.hasPurpose(e)&&this.isAtLeast(t,r)&&!this.isEmbedded&&this.hasMimeType(o)&&s)}async resolvesSuccessfully(e){return this.icon.src?new Promise(t=>{const r=new Image,o=new URL(this.icon.src,e);r.src=`${B.safeUrlFetcher}?checkExistsOnly=false&url=${encodeURIComponent(o.toString())}`,r.onload=()=>{r.complete&&r.naturalHeight>0?t(!0):t(!1)},r.onerror=()=>{t(!1)}}):Promise.resolve(!1)}getFileExtensionFromSrc(){const e=this.getFormat();return(e==null?void 0:e.exts[0])||null}getFormat(){var o;const e=Xe.formats.find(i=>i.mime===this.icon.type);if(e)return e;const t=((o=this.icon.src)==null?void 0:o.toLowerCase())||"",r=Xe.formats.find(i=>i.exts.some(n=>t.endsWith(`.${n}`)));return r!=null?r:null}getMimeTypeOrGuessFromSrc(){if(this.icon.type)return this.icon.type;const e=this.getFormat();return(e==null?void 0:e.mime)||null}};let Tt=Xe;Tt.pngFormat={exts:["png"],mime:"image/png"};Tt.jpgFormat={exts:["jpg","jpeg"],mime:"image/jpeg"};Tt.formats=[Xe.pngFormat,Xe.jpgFormat,{exts:["webp"],mime:"image/webp"},{exts:["gif"],mime:"image/gif"},{exts:["ico"],mime:"image/x-icon"},{exts:["tiff"],mime:"image/tiff"},{exts:["bmp"],mime:"image/bmp"},{exts:["svg"],mime:"image/svg+xml"}];var rn=Object.defineProperty,nd=e=>rn(e,"__esModule",{value:!0}),zt=(e,t)=>()=>(e&&(t=e(e=0)),t),Lt=(e,t)=>{nd(e);for(var r in t)rn(e,r,{get:t[r],enumerable:!0})},on={};Lt(on,{default:()=>sn});var sn,ad=zt(()=>{sn=async(e=[{}])=>(Array.isArray(e)||(e=[e]),new Promise((t,r)=>{let o=document.createElement("input");o.type="file";let i=[...e.map(a=>a.mimeTypes||[]).join(),e.map(a=>a.extensions||[]).join()].join();o.multiple=e[0].multiple||!1,o.accept=i||"";let n=()=>l(r),s=a=>{typeof l=="function"&&l(),t(a)},l=e[0].legacySetup&&e[0].legacySetup(s,n,o);o.addEventListener("change",()=>{s(o.multiple?Array.from(o.files):o.files[0])}),o.click()}))}),nn={};Lt(nn,{default:()=>an});var rs,an,ld=zt(()=>{rs=async e=>{let t=await e.getFile();return t.handle=e,t},an=async(e=[{}])=>{Array.isArray(e)||(e=[e]);let t=[];e.forEach((i,n)=>{t[n]={description:i.description||"",accept:{}},i.mimeTypes?i.mimeTypes.map(s=>{t[n].accept[s]=i.extensions||[]}):t[n].accept["*/*"]=i.extensions||[]});let r=await window.showOpenFilePicker({id:e[0].id,startIn:e[0].startIn,types:t,multiple:e[0].multiple||!1,excludeAcceptAllOption:e[0].excludeAcceptAllOption||!1}),o=await Promise.all(r.map(rs));return e[0].multiple?o:o[0]}}),ln={};Lt(ln,{default:()=>cn});var cn,cd=zt(()=>{cn=async(e=[{}])=>(Array.isArray(e)||(e=[e]),e[0].recursive=e[0].recursive||!1,new Promise((t,r)=>{let o=document.createElement("input");o.type="file",o.webkitdirectory=!0;let i=()=>s(r),n=l=>{typeof s=="function"&&s(),t(l)},s=e[0].legacySetup&&e[0].legacySetup(n,i,o);o.addEventListener("change",()=>{let l=Array.from(o.files);e[0].recursive?e[0].recursive&&e[0].skipDirectory&&(l=l.filter(a=>a.webkitRelativePath.split("/").every(c=>!e[0].skipDirectory({name:c,kind:"directory"})))):l=l.filter(a=>a.webkitRelativePath.split("/").length===2),n(l)}),o.click()}))}),dn={};Lt(dn,{default:()=>un});var uo,un,dd=zt(()=>{uo=async(e,t,r=e.name,o)=>{let i=[],n=[];for await(let s of e.values()){let l=`${r}/${s.name}`;s.kind==="file"?n.push(s.getFile().then(a=>(a.directoryHandle=e,Object.defineProperty(a,"webkitRelativePath",{configurable:!0,enumerable:!0,get:()=>l})))):s.kind==="directory"&&t&&(!o||!o(s))&&i.push(uo(s,t,l,o))}return[...(await Promise.all(i)).flat(),...await Promise.all(n)]},un=async(e={})=>{e.recursive=e.recursive||!1;let t=await window.showDirectoryPicker({id:e.id,startIn:e.startIn});return uo(t,e.recursive,void 0,e.skipDirectory)}}),hn={};Lt(hn,{default:()=>pn});async function ud(e,t){let r=e.getReader(),o=new ReadableStream({start(n){return s();async function s(){return r.read().then(({done:l,value:a})=>{if(l){n.close();return}return n.enqueue(a),s()})}}}),i=new Response(o);return r.releaseLock(),new Blob([await i.blob()],{type:t})}var pn,hd=zt(()=>{pn=async(e,t={})=>{Array.isArray(t)&&(t=t[0]);let r=document.createElement("a"),o=e;"body"in e&&(o=await ud(e.body,e.headers.get("content-type"))),r.download=t.fileName||"Untitled",r.href=URL.createObjectURL(o);let i=()=>s(reject),n=()=>{typeof s=="function"&&s()},s=t.legacySetup&&t.legacySetup(n,i,r);return r.addEventListener("click",()=>{setTimeout(()=>URL.revokeObjectURL(r.href),30*1e3),n()}),r.click(),null}}),fn={};Lt(fn,{default:()=>mn});var mn,pd=zt(()=>{mn=async(e,t=[{}],r=null,o=!1)=>{Array.isArray(t)||(t=[t]),t[0].fileName=t[0].fileName||"Untitled";let i=[];if(t.forEach((l,a)=>{i[a]={description:l.description||"",accept:{}},l.mimeTypes?(a===0&&(e.type?l.mimeTypes.push(e.type):e.headers&&e.headers.get("content-type")&&l.mimeTypes.push(e.headers.get("content-type"))),l.mimeTypes.map(c=>{i[a].accept[c]=l.extensions||[]})):e.type&&(i[a].accept[e.type]=l.extensions||[])}),r)try{await r.getFile()}catch(l){if(r=null,o)throw l}let n=r||await window.showSaveFilePicker({suggestedName:t[0].fileName,id:t[0].id,startIn:t[0].startIn,types:i,excludeAcceptAllOption:t[0].excludeAcceptAllOption||!1}),s=await n.createWritable();return"stream"in e?(await e.stream().pipeTo(s),n):"body"in e?(await e.body.pipeTo(s),n):(await s.write(blob),await s.close(),n)}}),fd=(()=>{if(typeof self=="undefined")return!1;if("top"in self&&self!==top)try{top.location+""}catch{return!1}else if("showOpenFilePicker"in self)return"showOpenFilePicker";return!1})(),Go=fd;Go?Promise.resolve().then(()=>(ld(),nn)):Promise.resolve().then(()=>(ad(),on));Go?Promise.resolve().then(()=>(dd(),dn)):Promise.resolve().then(()=>(cd(),ln));Go?Promise.resolve().then(()=>(pd(),fn)):Promise.resolve().then(()=>(hd(),hn));// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
let Rr,vr,os={progress:[{header:Nt.TEST,location:"/",done:ie.ACTIVE,items:[{name:"Submit URL",done:ie.PENDING},{name:"Run Tests",done:ie.PENDING}]},{header:Nt.REVIEW,location:"/reportcard",done:ie.PENDING,items:[{name:"Manifest",done:ie.PENDING},{name:"Service Worker",done:ie.PENDING},{name:"Security",done:ie.PENDING}]},{header:Nt.PUBLISH,location:"/publish",done:ie.PENDING,items:[{name:"Package",done:ie.PENDING},{name:"Publish",done:ie.PENDING}]},{header:Nt.COMPLETE,location:"/complete",done:ie.PENDING,items:[{name:"Resources",done:ie.PENDING}]}]};function md(e){os=e,sessionStorage.setItem("current_progress",JSON.stringify(os))}function gn(e){e&&(Rr=e,sessionStorage.setItem($t.currentUrl,Rr))}function gd(){const e=sessionStorage.getItem($t.currentUrl);if(Rr)return Rr;if(e)return e;throw new Error("No Good URL found for the current site")}function Ye(){return vr||(vr=bd()),vr}function Wr(e){vr=e,sessionStorage.setItem($t.manifest,JSON.stringify(e)),gn(e.siteUrl)}function Gd(){return Ye().manifestUrl}function bd(){try{const t=sessionStorage.getItem($t.manifest);if(t)return JSON.parse(t)}catch(t){console.error("Unable to load manifest from session",t)}const e={dir:"auto",display:"fullscreen",name:"placeholder",short_name:"placeholder",start_url:void 0,scope:"/",lang:"en",description:"placeholder description",theme_color:"#000000",background_color:"#000000",icons:[],screenshots:[]};return{manifest:e,initialManifest:e,siteUrl:sessionStorage.getItem($t.currentUrl)||"",manifestUrl:"",isGenerated:!0,isEdited:!1}}function vd(e,t){e===t&&(Ye().isEdited=!1),Object.keys(e).forEach(r=>{if(Array.isArray(e[r])&&Array.isArray(t[r])){let o=e[r].flat(2),i=t[r].flat(2);o.forEach((n,s)=>{i.includes(n)===!0&&i[s]!==n&&(Ye().isEdited=!0)})}else JSON.stringify(e[r])!==JSON.stringify(t[r])&&(Ye().isEdited=!0)})}const yd=new EventTarget;let er;function wd(){er=void 0}async function _d(e){const t=encodeURIComponent(e),r=B.api+`/FetchWebManifest?site=${t}`;try{const o=await fetch(r,{method:"POST"});if(!o.ok)throw console.warn("Fetching manifest failed",o.statusText),new Error(`Unable to fetch response using ${r}. Response status  ${o}`);const i=await o.json();if(!i)throw console.warn("Fetching manifest failed due to no response data",o),new Error(`Unable to get JSON from ${r}`);if(i.content&&i.content.json)return{content:i.content.json,format:"w3c",generatedUrl:i.content.url||e,siteUrl:e,default:{short_name:i.content.json.short_name||""},id:"",generated:!i.content,errors:[],suggestions:[],warnings:[]}}catch(o){return console.warn("Manifest not found",o),null}return null}async function xd(e){let t;try{t=Xs(e)}catch(o){reject(o);return}const r=await _d(t);if(r){const o=Ye();return o.initialManifest||(er=r.content,o.initialManifest=er,Wr(o)),r}else{console.error("All manifest detectors failed: Timeout expired.");return}}async function Kd(e){const t=e||kd();if(!t)throw new Error("No available site URL");gn(t);let r;if(r=await xd(t),!r){console.error("No Manifest found.");return}const o={manifest:r.content,initialManifest:er,manifestUrl:r.generatedUrl,isGenerated:r.generated,siteUrl:r.siteUrl,isEdited:!1};return Wr(o),await bn({...r.content}),o}function kd(){const e=Ye();if(e.siteUrl)return e.siteUrl;const r=new URLSearchParams(location.search).get("site");if(r)return r;const o=gd();return sessionStorage?o:null}async function Jd(e){let t;try{t=await(await fetch(`${B.manifestCreatorUrl}?url=${e}`,{method:"POST",headers:new Headers({"content-type":"application/json"})})).json()}catch(i){console.error("Manifest creation service failed to create the manifest. Falling back to empty manifest.",i)}console.log("created manifest",t);const r=Cd(t,e,!0),o={manifest:r.content,initialManifest:er,manifestUrl:r.generatedUrl,isGenerated:r.generated,siteUrl:r.siteUrl,isEdited:!1};return Wr(o),await bn({...r.content}),o}function bn(e){const t=Ye();return t.manifest=Object.assign(t.manifest,e),t.initialManifest&&vd(t.initialManifest,t.manifest),Wr(t),yd.dispatchEvent($d({...t.manifest})),t.manifest}function $d(e){return new CustomEvent(tn.manifestUpdate,{detail:e,bubbles:!0,composed:!0})}function Cd(e,t,r){return{content:e,format:"w3c",siteUrl:t,generated:r,id:"",generatedUrl:"",default:{short_name:e.short_name||"My PWA"},errors:[],suggestions:[],warnings:[]}}var Sd=Object.defineProperty,Ed=Object.getOwnPropertyDescriptor,Ut=(e,t,r,o)=>{for(var i=o>1?void 0:o?Ed(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(i=(o?s(t,r,i):s(i))||i);return o&&i&&Sd(t,r,i),i};let ot=class extends X{constructor(){super(),this.gettingManifest=!1,this.errorGettingURL=!1,this.disableStart=!0}static get styles(){return[_`

        :host {
          --sl-focus-ring-width: 3px;
          --sl-input-focus-ring-color: #4f3fb670;
          --sl-focus-ring: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
          --sl-input-border-color-focus: #4F3FB6ac;
          --sl-color-primary-300: #4F3FB6;
        }

        #home-block::before {
          content: "";
        }
        #home-block {
          background: url(/assets/new/Hero1920_withmani.jpg);
          background-position: center center;
          background-size: cover;
          background-repeat: no-repeat;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 4em;
        }

        #mani {
          position: fixed;
        }

        #wrapper {
          width: 1000px;
        }
        app-header::part(header) {
          background-color: transparent;
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          z-index: 2;
          border: none;
        }
        h1 {
          font-size: var(--xlarge-font-size);
          line-height: 48px;
          letter-spacing: -0.015em;
          margin-bottom: 20px;
        }
        #input-header {
          font-size: 1em;
          font-weight: bold;
          margin: 0;
          line-height: 1.75em;
          color: #4F3FB6;
        }
        #content-grid {
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: auto auto;
          width: fit-content;
        }
        .intro-grid-item {
          width: max-content;
          margin-right: 1em;
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
          }
          40% {
            transform: translateX(-5px);
          }
          60% {
              transform: translateX(5px);
          }
        }
        .grid-item-header {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          font-weight: bold;
          margin-bottom: .25em;
        }
        .grid-item-header a {
          text-decoration: none;
          border-bottom: 1px solid rgb(79, 63, 182);
          font-size: 1em;
          font-weight: bold;
          margin: 0px 0.5em 0px 0px;
          line-height: 1em;
          color: rgb(79, 63, 182);
        }
        .grid-item-header a:visited {
          color: #4F3FB6;
        }
        .grid-item-header:hover {
          cursor: pointer;
        }
        .grid-item-header:hover img {
          animation: bounce 1s;
        }
        .intro-grid-item p {
          margin: 0;
          color: #292C3A;
          font-size: 16px;
          width: 15em;
        }
        #input-form {
          margin-top: 1em;
          width: max-content;
        }
        #input-header-holder {
          display: flex;
          align-items: center;
          justify-content: center;
          width: max-content;
          margin-bottom: 10px;
        }
        #input-header-holder img {
          width: auto;
          height: 1em;
          margin-left: 20px;
        }
        #input-area {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          grid-template-rows: 1fr 1fr;
          row-gap: 5px;
          place-items: center;
        }
        #input-and-error {
          grid-area: 1 / 1 / auto / 5;
          display: flex;
          flex-direction: column;
        }
        #start-button {
          grid-area: 1 / 5 / auto / auto;
          width: 100%;
        }
        .raise:hover:not(disabled){
          transform: scale(1.01);
        }
        .raise:focus:not(disabled) {
          transform: scale(1.01);
        }
        #input-form sl-input {
          margin-right: 10px;
        }
        #input-form sl-input::part(base) {
          border: 1px solid #e5e5e5;
          border-radius: var(--input-radius);
          color: var(--font-color);
          width: 28em;
          font-size: 14px;
          height: 3em;
        }

        #input-form sl-input::part(input) {
          height: 3em;
        }

        #input-form .error::part(base){
          border-color: #eb5757;
          --sl-input-focus-ring-color: #eb575770;
          --sl-focus-ring-width: 3px;
          --sl-focus-ring: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
          --sl-input-border-color-focus: #eb5757ac;
        }

        .error-message {
          color: var(--error-color);
          font-size: var(--small-font-size);
          margin-top: 6px;
        }

        #input-form .navigation::part(base) {
          background-color: black;
          color: white;
          font-size: 14px;
          height: 3em;
          border-radius: 50px;
        }

        #input-form .navigation::part(label){
          display: flex;
          align-items: center;
        }

        #input-block {
          display: flex;
          flex-direction: column;
          flex: 0.8 1 0%;
          width: 100%;
        }
        #demo {
          font-size: 12px;
          color: #292C3A;
          margin: 0;
          grid-area: 2 / 1 / auto / 2;
          place-self: start;
        }
        #demo-action {
          margin: 0;
          text-decoration: underline;
          font-weight: bold;
          background: none;
          border: none;
          padding: 0;
          font-size: 1em;
          margin-left: 1px;
        }
        #demo-action:hover{
          cursor: pointer;
        }
        #home-header {
          max-width: 498px;
        }
        /* 640px - 1023px */
        ${nt(_`
          #home-block {
            padding-left: 4.5em;
            background: url(/assets/new/Hero1024_withmani.png);
            background-position: center center;
            background-size: cover;
            background-repeat: no-repeat;
          }
          #wrapper {
            width: 825px;
          }
          #content-grid {
            column-gap: 1em;
          }
        `)}
        /* 480px - 639px */
        ${Ae(_`
          #home-block {
            padding: 1.5em;
            padding-top: 4em;
            padding-bottom: 6em;
            background: url(/assets/new/Hero480_withmani.jpg);
            background-position: center bottom;
            background-size: cover;
            background-repeat: no-repeat;
          }
          #wrapper {
            width: 530px;
          }
          .intro-grid-item p {
            width: 13em;
          }
          #input-area {
            width: 100%;
            column-gap: 10px;
          }
          #input-and-error {
            margin-right: 10px;
            width: 100%;
          }
          sl-input {
            width: 100%;
            margin-right: 10px;
          }
          #input-form sl-input::part(base){
            width: 100%;
          }
          #input-form {
            width: 100%;
          }
          #home-header{
            font-size: 40px;
          }
          #input-form .navigation::part(base) {
            width: 8em;
          }
          #demo {
            grid-area: 2 / 1 / auto / 3;
          }
        `)}

        @media (min-width: 480px) and (max-width: 580px) {
          #wrapper {
            width: 400px;
          }
          #input-area {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }
        }

        /* < 480px */
        @media (max-width: 480px) {
          #home-block {
            padding: 1em;
            padding-top: 4em;
            padding-bottom: 2em;
            background: url(/assets/new/Hero480_withmani.jpg);
            background-position: center bottom;
            background-size: cover;
            background-repeat: no-repeat;
          }
          #wrapper {
            width: 400px;
          }
          #home-header {
            font-size: 1.9em;
          }
          #content-grid {
            display: flex;
            flex-direction: column;
            row-gap: 1em;
          }
          #input-and-error{
            width: 100%;
          }
          sl-input {
            width: 100%;
          }
          #input-form sl-input::part(base){
            width: 100%;
          }
          #input-area {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            row-gap: 5px;
          }
          #input-header-holder img {
            display: none;
          }
          #home-header {
            line-height: 36px;
          }
          #input-form {
            width: 100%;
          }
          .grid-item-header {
            font-size: 20px;
          }
          #input-header {
            font-size: 20px;
          }
          #input-form .navigation::part(base) {
            width: 8em;
          }
        }
        @media (max-width: 415px) {
          #wrapper {
            width: 300px;
          }
        }
        @media (min-width: 640px) and (max-width: 955px) {
          #home-block {
            background-position: center;
          }
          #wrapper {
            width: 600px;
          }
        }

        /*1024px - 1365px*/
        ${at(_`
            #home-block {
              background: url(/assets/new/Hero1366_withmani.png);
              background-position: center center;
              background-size: cover;
              background-repeat: no-repeat;
            }
        `)}
          /* > 1920 */
        ${Be(_`
            #wrapper {
              width: 1160px;
            }
        `)}
      `]}async firstUpdated(){sessionStorage.clear(),wd();const t=new URLSearchParams(location.search).get("site");t&&(this.siteURL=t.trim(),await this.analyzeSite()),H("landing-page-loaded",D.StartProcess)}handleURL(e){e&&(this.siteURL=e.target.value.trim()),Ao(this.siteURL)?this.disableStart=!1:this.disableStart=!0}async start(e){e.preventDefault(),await this.analyzeSite()}async analyzeSite(){var e,t;if(this.siteURL!==is&&sessionStorage.setItem("demoURL",JSON.stringify(!1)),this.siteURL){this.gettingManifest=!0,this.siteURL=Xs(this.siteURL);const r=Ao(this.siteURL);H("top.entered_link_testing_started",D.ProcessCheckpoint,{url:this.siteURL,valid:r}),r?_e.go(`/reportcard?site=${this.siteURL}`):(this.errorMessage=F.input.home.error.invalidURL,this.errorGettingURL=!0,await this.updateComplete,(t=(e=this.shadowRoot)==null?void 0:e.querySelector(".error-message"))==null||t.focus()),setTimeout(()=>this.gettingManifest=!1,100)}}updateProgress(e){e&&e.progress[0]&&e.progress[0].items[0]&&(e.progress[0].items[0].done=ie.DONE,md(e))}placeDemoURL(){sessionStorage.setItem("demoURL",JSON.stringify(!0)),H("top.DemoURL_clicked",D.ProcessCheckpoint),this.siteURL=is;let e=this.shadowRoot.getElementById("input-box");e.value=this.siteURL,this.analyzeSite()}render(){return N`
      <app-header part="header"></app-header>
      <main>
        <div id="home-block">
          <div id="wrapper">
            <h1 id="home-header" slot="hero-container">
              Helping developers build and publish PWAs
            </h1>
            <section id="content-grid" slot="grid-container">
              <div class="intro-grid-item">
                <div class="grid-item-header">  
                  <a @click=${()=>H("top.PWAStarter_clicked",D.ProcessCheckpoint)} href="https://docs.pwabuilder.com/#/starter/quick-start" target="_blank" rel="noopener" aria-label="Start a new pwa, will open in separate tab">Start a new PWA</a>
                  <img src="/assets/new/arrow.svg" alt="arrow" role="presentation"/>

                </div>
                <p>
                  Looking to build a new Progressive Web App? Checkout all the documentation here.
                </p>
              </div>

              <div class="intro-grid-item">
                <div class="grid-item-header">  
                  <a @click=${()=>H("home.top.PWAStudio_clicked",D.ProcessCheckpoint)} href="https://aka.ms/install-pwa-studio" target="_blank" rel="noopener" aria-label="Use dev tools, will open a separate tab">Use dev tools</a>
                  <img src="/assets/new/arrow.svg" alt="arrow" role="presentation"/>
                </div>
                <p>
                  Use our VS Code extension to create, improve, and package your PWA directly in your code editor.
                </p>
              </div>
            </section>

            <form id="input-form" slot="input-container" @submit="${e=>this.start(e)}">
              <div id="input-block" role="region">
                <div id="input-header-holder">
                  <h2 id="input-header">Ship your PWA to app stores</h2>
                  <img title="Windows" src="/assets/windows_icon.svg" alt="Windows" />
                  <img title="iOS" src="/assets/apple_icon.svg" alt="iOS" />
                  <img title="Android" src="/assets/android_icon_full.svg" alt="Android" />
                  <img title="Meta Quest" src="/assets/meta_icon.svg" alt="Meta Quest" />
                </div>
                <div id="input-area">
                  <div id="input-and-error">
                    <sl-input slot="input-container" type="text" id="input-box" placeholder="Enter the URL to your PWA" name="url-input"
                      class="${Js({error:this.errorGettingURL})}" aria-labelledby="input-header" @input="${e=>this.handleURL(e)}">
                    </sl-input>

                    ${this.errorMessage&&this.errorMessage.length>0?N`<span role="alert" aria-live="polite" class="error-message">${this.errorMessage}</span>`:null}
                  </div>

                  <sl-button
                    id="start-button"
                    type="submit"
                    class="navigation raise"
                    ?loading="${this.gettingManifest}"
                    ?disabled="${this.disableStart}"
                    @click="${e=>this.start(e)}"
                    aria-label="Start your pwa, will redirect to testing page">Start</sl-button>
                  <p id="demo">Try a <button id="demo-action" aria-label="click here for demo url, will redirect to testing page" @click=${()=>this.placeDemoURL()}>demo url</button></p>
                </div>

              </div>
            </form>
          </div>
        </div>
        <companies-packaged></companies-packaged>
        <resource-hub></resource-hub>
        <success-stories></success-stories>
        <community-hub></community-hub>
      </main>
    `}};Ut([fe()],ot.prototype,"siteURL",2);Ut([fe()],ot.prototype,"gettingManifest",2);Ut([fe()],ot.prototype,"errorGettingURL",2);Ut([fe()],ot.prototype,"errorMessage",2);Ut([fe()],ot.prototype,"disableStart",2);ot=Ut([se("app-home")],ot);const is="https://webboard.app";var Ad=Object.defineProperty,Pd=Object.getOwnPropertyDescriptor,Td=(e,t,r,o)=>{for(var i=o>1?void 0:o?Pd(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(i=(o?s(t,r,i):s(i))||i);return o&&i&&Ad(t,r,i),i};let ss=class extends X{static get styles(){return _`
      footer {
        /*temp color*/
        background: #292C3A;
        color: white;
        fill: white;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 16px;
        padding-bottom: 16px;
        padding-left: 37px;
        padding-right: 37px;
        font-weight: 700;
        font-size: var(--small-font-size);
      }


      sl-icon {
        font-size: var(--font-size);
        color: white;
        pointer-events: none;
      }

      span {
        max-width: 672px;
        display: block;
      }

      #icons {
        width: 8em;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      #links {
        margin-top: 8px;
      }

      #links a {
        margin-right: 12px;
        color: white;
      }

      #links a:visited {
        color: white;
      }

      @media screen and (-ms-high-contrast: black-on-white) {
          /* All high contrast styling rules */
          sl-icon {
            color: black;
          }
      } 

      ${Be(_`
          footer {
            justify-content: center;
          }

          /* 30em here to line up with rest of
          layout at this size */
          #footer-top {
            margin-right: 30em;
          }
        `)}

      ${Ae(_`
          footer {
            flex-direction: column;
          }

          #footer-top {
            align-items: center;
            text-align: center;
            display: flex;
            flex-direction: column;
          }

          #links {
            margin-top: 30px;
            margin-bottom: 30px;
          }

          #icons {
            color: white;
            width: 10em;
          }

          #icons a {
            margin-right: 46px;
          }

          #icons sl-icon {
            font-size: 27px;
            color: white;
          }
        `)}

      ${Me(_`
        footer {
          align-items: center;
          display: flex;
          flex-direction: column;
          text-align: center;
        }

        #icons {
          margin-top: 10px;
        }
      `)}
    `}constructor(){super()}render(){return N`
      <footer>
        <div id="footer-top">
          <span
            >PWABuilder was founded by Microsoft as a community guided, open
            source project to help move PWA adoption forward.</span
          >

          <div id="links">
            <a
              target="_blank"
              rel="noopener"
              href="https://privacy.microsoft.com/en-us/privacystatement"
              @click=${()=>H("footer.privacy_policy_clicked",D.ProcessCheckpoint)}
              >Our Privacy Statement</a
            >
            <a
              target="_blank"
              rel="noopener"
              href="https://github.com/pwa-builder/PWABuilder/blob/master/TERMS_OF_USE.md"
              @click=${()=>H("footer.terms_of_use_clicked",D.ProcessCheckpoint)}
              >Terms of Use</a
            >
          </div>
        </div>

        <div id="icons">
          <a
            target="_blank"
            rel="noopener"
            appearance="hypertext"
            href="https://github.com/pwa-builder/PWABuilder"
            aria-label="Contribute to our Github, will open in separate tab"
            @click=${()=>H("footer.github_clicked",D.ProcessCheckpoint)}
          >
            <span title="Contribute to our Github"><sl-icon name="github" role="presentation"></sl-icon></span>
          </a>

          <a
            target="_blank"
            rel="noopener"
            appearance="hypertext"
            href="https://twitter.com/pwabuilder"
            aria-label="Follow us on Twitter, will open in separate tab"
            @click=${()=>H("footer.twitter_clicked",D.ProcessCheckpoint)}
          >
            <span title="Follow us on Twitter"><sl-icon name="twitter" role="presentation"></sl-icon></span>
          </a>

          <a
            target="_blank"
            rel="noopener"
            appearance="hypertext"
            href="https://www.youtube.com/c/PWABuilder"
            aria-label="Subscribe to our Youtube, will open in separate tab"
            @click=${()=>H("footer.youtube_clicked",D.ProcessCheckpoint)}
          >
            <span title="Subscribe to our Youtube"><sl-icon name="youtube" role="presentation"></sl-icon></span>
          </a>
        </div>
      </footer>
    `}};ss=Td([se("app-footer")],ss);var zd=Object.defineProperty,Ld=Object.getOwnPropertyDescriptor,vn=(e,t,r,o)=>{for(var i=o>1?void 0:o?Ld(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(i=(o?s(t,r,i):s(i))||i);return o&&i&&zd(t,r,i),i};let Lo=class extends X{constructor(){super(),this.heading="PWABuilder"}static get styles(){return _`
      :host {
        --header-background: white;
        --header-border: rgba(0, 0, 0, 0.25) solid 1px;
      }

      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 16px;
        padding-right: 16px;
        background: var(--header-background);
        color: white;
        height: 71px;

        border-bottom: var(--header-border);
        z-index: 1;
      }

      header img {
        cursor: pointer;
        width: 100px;
        height: auto;
      }

      header h1 {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 20px;
        font-weight: bold;
      }

      nav {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 8em;
        gap: .75em;
      }

      .nav_button {
        all: unset;
      }

      .nav_link {
        color: var(--font-color);
        text-decoration: none;
        border-bottom: none;
        font-weight: var(--font-bold);
        font-size: 20px;
        margin: 0;
      }

      .nav_link:focus {
        outline: solid;
        outline-width: 2px;
      }

      .nav_link span {
        display: inline-block;
        height: 18px;
        font-size: 20px;
        border-bottom: 1px solid transparent;
      }

      .nav_link:hover span{
        cursor: pointer;
        border-color: var(--font-color);
        padding-bottom: 4px;
      }

      nav sl-icon {
        font-size: 2em;
      }

      .nav_link:visited {
        color: black;
      }

      .social-box {
        display: flex;
        background-color: white;
        gap: 2em;
        color: #777777;
        font-size: 16px;
        padding: 1em;
        position: relative;
        border-radius: 5px;
      }

      .arrow {
        height: 15px;
        width: 15px;
        transform: rotate(45deg);
        background-color: white;
        position: absolute;
        top: -5px;
        right: 45px;
      }

      .col {
        display: flex;
        flex-direction: column;
        gap: 15px;
      }

      .col-header {
        text-decoration: none;
        margin: 0;
        white-space: nowrap;
        font-weight: bold;
        color: #777777;
      }

      .link {
        text-decoration: none;
      }

      .link:visited, .link:active, .link:link {
        color: #777777;
      }

      .link:hover {
        cursor: pointer;
        text-decoration: underline;
      }

      

      @media (prefers-color-scheme: light) {
        header {
          color: black;
        }
      }

      ${Me(_`

      `)}

      ${Ae(_`
        header nav {
          display: initial;
        }

        #desktop-nav {
          display: flex;
        }

      `)}


      ${nt(_`
        #desktop-nav {
          display: flex;
        }

      `)}

      ${at(_`
        header {
          padding-left: 1em;
          padding-right: 1em;
        }
      `)}

      ${Uc(_`
        header {
          padding-left: 3em;
          padding-right: 3em;
        }
      `)}

      ${Be(_`
        header {
          background-color: white;
        }
      `)}
    `}firstUpdated(){var e,t;(t=(e=this.shadowRoot)==null?void 0:e.querySelector("#header-icon"))==null||t.addEventListener("keydown",r=>{r.key==="Enter"&&_e.go("/")})}recordGoingHome(){H("header.logo_clicked",D.ProcessCheckpoint)}showMenu(){let e=this.shadowRoot.querySelector("sl-dropdown");e.open?(H("header.community_dropdown_closed",D.ProcessCheckpoint),e.hide()):(H("header.community_dropdown_expanded",D.ProcessCheckpoint),e.show())}render(){return N`
      <header part="header">
        <a href="/" @click=${()=>this.recordGoingHome()}>
          <img tabindex="0" id="header-icon" src="/assets/logos/header_logo.png"
          alt="PWABuilder logo" />
        </a>

        <nav id="desktop-nav">
          <a
            class="nav_link"
            appearance="hypertext"
            href="https://docs.pwabuilder.com"
            target="__blank"
            aria-label="PWABuilder Docs, will open in separate tab"
            rel="noopener"
            @click=${()=>H("header.docs_clicked",D.ProcessCheckpoint)}
          >
            <span>Docs</span>
          </a>
          <sl-dropdown distance="10">
            <button slot="trigger" type="button" @mouseover=${()=>this.showMenu()} class="nav_link nav_button"><span>Community</span></button>
            <div class="social-box">
              <div class="arrow" role="presentation"></div>
              <div class="col">
                <a 
                class="col-header"
                href="https://blog.pwabuilder.com"
                target="__blank"
                aria-label="PWABuilder Blog, will open in separate tab"
                rel="noopener"
                @click=${()=>H("header.blog_clicked",D.ProcessCheckpoint)}
                >Blogs</a>
              </div>
              <div class="col">
                <p class="col-header">Follow us on</p>
                <a 
                  class="link" 
                  href="https://github.com/pwa-builder/PWABuilder"
                  target="__blank"
                  aria-label="PWABuilder Github repo, will open in separate tab"
                  rel="noopener"
                  @click=${()=>H("header.github_clicked",D.ProcessCheckpoint)}
                  >
                  Github
                </a>
                <a 
                  class="link" 
                  href="https://twitter.com/pwabuilder"
                  target="__blank"
                  aria-label="PWABuilder Twitter, will open in separate tab"
                  rel="noopener"
                  @click=${()=>H("header.twitter_clicked",D.ProcessCheckpoint)}
                  >
                  Twitter
                </a>
                <a 
                  class="link" 
                  href="https://aka.ms/pwabuilderdiscord"
                  target="__blank"
                  aria-label="Invitation link to PWABuilder Discord server, will open in separate tab"
                  rel="noopener"
                  @click=${()=>H("header.discord_clicked",D.ProcessCheckpoint)}
                  >
                  Discord
                </a>
              </div>
            </div>
          </sl-dropdown>
        </nav>
      </header>
    `}};vn([G({type:String})],Lo.prototype,"heading",2);Lo=vn([se("app-header")],Lo);const Ud=_`
  fast-button {
    color: var(--button-font-color);
    height: var(--button-height);
    width: var(--button-width);

    border-radius: var(--button-radius);
    box-shadow: var(--button-shadow);
  }

  fast-button:disabled::part(control) {
    cursor: not-allowed;
  }

  fast-button::part(control) {
    font-size: var(--font-size);
    font-weight: var(--font-bold);
    width: 100%;
    padding-top: var(--padding-vertical);
    padding-bottom: var(--padding-vertical);
    padding-left: var(--padding-horizontal);
    padding-right: var(--padding-horizontal);
  }

  fast-button.secondary {
    background: var(--secondary-color);
    color: var(--font-color);
    border-color: transparent;
  }

  fast-button.alternate {
    background: var(--secondary-color);
    color: #4F3FB6;
    border: 1px solid #4F3FB6;
  }

  fast-button.alternate:hover {
    box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
  }

  fast-button[appearance='lightweight'] {
    --accent-foreground-rest: var(--secondary-font-color);
    --accent-foreground-active: var(--font-color);
    --accent-foreground-hover: var(--font-color);
  }
`;_`
  @media screen and (min-width: 480px) and (max-width: 639px) {
    fast-anchor.button {
      font-size: 22px;
      height: 64px;
    }
  }
`;_`
  fast-text-field {
    --accent-fill-rest: var(--secondary-font-color);
    --accent-fill-active: var(--font-color);
    --accent-fill-hover: var(--font-color);
  }

  fast-text-field.error {
    --neutral-foreground-rest: var(--error-color);
    --accent-fill-rest: var(--error-color);
    --accent-fill-active: var(--error-color);
  }
`;_`
  fast-number-field {
    --accent-fill-rest: var(--secondary-font-color);
    --accent-fill-active: var(--secondary-font-color);
    --accent-fill-hover: var(--secondary-font-color);
    --neutral-foreground-rest: var(--font-color);
    --neutral-fill-input-hover: var(--primary-background-color);
    --neutral-fill-input-rest: var(--primary-background-color);
  }

  fast-number-field.error {
    --neutral-foreground-rest: var(--error-color);
    --accent-fill-rest: var(--error-color);
    --accent-fill-active: var(--error-color);
  }
`;_`
  fast-checkbox {
    --neutral-foreground-rest: var(--font-color);
    --accent-fill-rest: var(--link-color);
    --accent-fill-active: var(--link-color);
    --accent-fill-hover: var(--link-color);
  }
`;_`
  fast-radio {
    --neutral-foreground-rest: var(--font-color);
    --neutral-fill-input-rest: var(--primary-background-color);
    --accent-foreground-cut-rest: var(--primary-backgroud-color);
    --accent-fill-rest: var(--link-color);
    --accent-fill-active: var(--link-color);
    --accent-fill-hover: var(--link-color);
  }
`;_`
  fast-menu {
  }

  fast-menu-item {
    --neutral-fill-input-rest: var(--primary-background-color);
    --accent-foreground-cut-rest: var(--primary-backgroud-color);
    --accent-fill-rest: var(--link-color);
    --accent-fill-active: var(--link-color);
    --accent-fill-hover: var(--link-color);
  }
`;var Od=Object.defineProperty,Rd=Object.getOwnPropertyDescriptor,lr=(e,t,r,o)=>{for(var i=o>1?void 0:o?Rd(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(i=(o?s(t,r,i):s(i))||i);return o&&i&&Od(t,r,i),i};let Ct=class extends X{constructor(){super(),this.type="",this.colorMode="primary",this.appearance="neutral",this.disabled=!1}static get styles(){return[_`
        :host {
          border-radius: var(--button-radius);
          display: block;
          outline: none;
          --font-size: var(--desktop-button-font-size);
          --button-height: 44px;
          --button-height: var(--desktop-button-height);
          --button-square: var(--button-height);
          --button-width: 127px;
          --button-width: var(--button-width);
          --button-font-color: var(--secondary-color);
          --pading-vertical: 0;
          --padding-horizontal: 34px;
        }
      `,Ud,_`
        [appearance='lightweight'] {
          box-shadow: none;
        }
        fast-button.link {
          --accent-foreground-active: var(--font-color);
          --accent-foreground-hover: var(--font-color);
          width: auto;
          border-radius: unset;
          box-shadow: none;
          background-color: transparent;
        }
        fast-button.link::part(control) {
          --padding-horizontal: 0;
          width: auto;
        }
        fast-button.round,
        fast-button.square {
          height: var(--button-square);
          width: var(--button-square);
        }
        fast-button.round::part(control),
        fast-button.square::part(control) {
          /* assumption is that the button is 14x21 */
          --padding-horizontal: 15px;
          align-items: center;
          line-height: 0;
        }
        fast-button:focus {
          outline: solid;
          outline-width: 2px;
        }
      `,Ae(_`
          fast-button.navigation {
            --button-width: 100px;
            --button-height: 40px;
            line-height: 28px;
            font-size: 16px;
          }
        `)]}render(){return N`
      <fast-button
        part="underlying-button"
        class="${Js({[this.className]:this.className,link:this.appearance==="lightweight",secondary:this.appearance==="outline"})}"
        .appearance="${this.appearance}"
        .type="${this.type}"
        .color="${this.colorMode}"
        ?disabled=${this.disabled}
      >
        <slot></slot>
      </fast-button>
    `}};lr([G({type:String})],Ct.prototype,"type",2);lr([G({type:String})],Ct.prototype,"colorMode",2);lr([G({type:String})],Ct.prototype,"appearance",2);lr([G({type:Boolean})],Ct.prototype,"disabled",2);Ct=lr([se("app-button")],Ct);var Md=Object.defineProperty,Dd=Object.getOwnPropertyDescriptor,yn=(e,t,r,o)=>{for(var i=o>1?void 0:o?Dd(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(i=(o?s(t,r,i):s(i))||i);return o&&i&&Md(t,r,i),i};let Uo=class extends X{constructor(){super(),this.show=!1}static get styles(){return _`
      #cookie-banner {
        background: rgb(243, 243, 243);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px;
        font-weight: 700;
        font-size: var(--small-font-size);
        position: fixed;
        bottom: 0;
        z-index: 2;
        width: 100%;
        box-sizing: border-box;
      }

      #cookie-info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
      }

      #cookie-info p {
        margin: 0;
      }

      #cookie-actions {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
      }

      #cookie-actions button {
        border-radius: var(--button-radius);
        border: none;
        padding: 8px;
        font-weight: bold;
        padding-left: 10px;
        padding-right: 10px;
        margin-left: 10px;
        width: fit-content;
      }

      #cookie-actions button:hover {
        cursor: pointer;
      }

      #cookie-actions #reject-button {
        background: white;
      }

      #cookie-actions #accept-button {
        background: black;
        color: white;
      }



      ${Me(_`
        #cookie-banner {
          flex-direction: column;
          text-align: center;
        }

        #cookie-info{
          align-items: center;
          justify-content: center;
          text-align: center;
          margin-bottom: 10px;
        }

        #cookie-actions {
          flex-direction: column;
          align-items: center;
          justify-content: center;
          row-gap: 5px;
        }
      `)}
    `}firstUpdated(){localStorage.getItem("PWABuilderGDPR")||(this.show=!0,localStorage.setItem("PWABuilderGDPR",JSON.stringify(!1)))}close(e){this.show=!1,localStorage.setItem("PWABuilderGDPR",JSON.stringify(e))}render(){return N`
      ${this.show?N`<div id="cookie-banner">
            

            <div id="cookie-info">
              <p>
              This site uses cookies to offer you a better browsing experience. Click below to learn more.
              </p>
              <a
                href="https://privacy.microsoft.com/en-us/privacystatement#maincookiessimilartechnologiesmodule"
                >Learn More
              </a>
            </div>

            <div id="cookie-actions">
              <button
                id="reject-button"
                aria-label="Reject Button"
                @click="${()=>this.close(!1)}"
              > 
                Reject all non-essential cookies
              </button>

              <button
                id="accept-button"
                aria-label="Accept Button"
                @click="${()=>this.close(!0)}"
              >
                Accept all cookies
              </button>
            </div>
          </div>`:null}
    `}};yn([fe()],Uo.prototype,"show",2);Uo=yn([se("cookie-banner")],Uo);var Id=Object.defineProperty,Fd=Object.getOwnPropertyDescriptor,wn=(e,t,r,o)=>{for(var i=o>1?void 0:o?Fd(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(i=(o?s(t,r,i):s(i))||i);return o&&i&&Id(t,r,i),i};let Oo=class extends X{constructor(){super(),this.show=!0}static get styles(){return _`
      #discord-box {
        display: flex;
        align-items: flex-start;
        position: fixed;
        z-index: 1;
        bottom: 0;
        right: 0;
        width: 200px;
        height: 30px;
        background-color: #F5F7FA;
        padding: 10px;
        border-top-left-radius: 10px;
        column-gap: 10px;
        align-items: center;
      }

      #discord-box #logo {
        height: 29px;
        width: 29px;
      }

      #discord-box #close {
        height: 13px;
        width: 13px;
        align-self: flex-start;
      }

      #discord-box p {
        font-size: 14px;
        line-height: 14px;
        color: black;
        font-weight: bold;
      }
      #discord-box a {
        text-decoration: none;
        color: black;
        border-bottom: 1px solid black;
        display: inline-block;
        height: 12px;
      }
      #discord-box a:visited{
        color: black;
      }
      #close-wrapper {
        border: none;
        background-color: transparent;
      }
      #close:hover {
        cursor: pointer;
      }
    `}firstUpdated(){}close(){this.show=!1}render(){return N`
      ${this.show?N`
        <div id="discord-box">
          <img id="logo" src="/assets/images/discord_logo.svg" alt="discord logo"/>
          <p>Want to chat? Join us on <a @click=${()=>H("discord_box_link_clicked",D.ProcessCheckpoint)} href="https://aka.ms/pwabuilderdiscord" target="_blank" rel="noopener" aria-label="Click to join us on Discord">Discord</a></p>
          <button id="close-wrapper" @click=${()=>this.close()} aria-label="discord modal close" type="button"><img id="close" src="/assets/images/Close_desk.png" role="presentation"/></button>
        </div>`:null}
    `}};wn([fe()],Oo.prototype,"show",2);Oo=wn([se("discord-box")],Oo);var Nd=Object.defineProperty,Vd=Object.getOwnPropertyDescriptor,Hd=(e,t,r,o)=>{for(var i=o>1?void 0:o?Vd(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(i=(o?s(t,r,i):s(i))||i);return o&&i&&Nd(t,r,i),i};let ns=class extends X{static get styles(){return _`
      #router-outlet > * {
        width: 100% !important;
      }

      #router-outlet > .leaving {
        animation: 160ms fadeOut ease-in-out;
      }

      #router-outlet > .entering {
        animation: 160ms fadeIn linear;
      }

      #router-outlet {
        position: relative;
      }

      #wrapper {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
      }

      #content {
        flex: 1;
        background-color: rgb(242, 243, 251);
      }

      @media (min-width: 1920px) {
        #router-outlet {
          background: var(--primary-purple);
        }
      }

      @keyframes fadeOut {
        from {
          opacity: 1;
        }

        to {
          opacity: 0;
        }
      }

      @keyframes fadeIn {
        from {
          opacity: 0.2;
        }

        to {
          opacity: 1;
        }
      }
      /* To handle sidebar & main */
      .container {
        display: grid;
        grid-template-columns: minmax(280px, auto);
        grid-template-areas: 'sidebar main';
        margin: 0 auto;
        height: 100%;
        position: relative;
      }
      .container > .main {
        width: calc(100vw - 280px);
        grid-area: main;
      }
      .container > .sidebar {
        grid-area: sidebar;
      }
    `}constructor(){super(),window.addEventListener("vaadin-router-location-changed",e=>{var t;window.scrollTo({top:0,behavior:"smooth"}),Dc(e.detail.location.pathname,(t=e.detail.location.route)==null?void 0:t.component)})}firstUpdated(){var t;new _e((t=this.shadowRoot)==null?void 0:t.querySelector("#router-outlet")).setRoutes([{path:"",animate:!0,children:[{path:"/",component:"app-home"},{path:"/reportcard",component:"app-report",action:async()=>{await qr(()=>import("./app-report.e1fe50ec.js"),["code/app-report.e1fe50ec.js","code/test-publish-pane.085caa38.js","code/if-defined.6fc51b43.js"])}},{path:"/portals",component:"powerplatform-publish",action:async()=>{await qr(()=>import("./powerplatform-publish.5e9bde9c.js"),["code/powerplatform-publish.5e9bde9c.js","code/test-publish-pane.085caa38.js","code/if-defined.6fc51b43.js"])}},{path:"/imageGenerator",component:"image-generator",action:async()=>{await qr(()=>import("./image-generator.f1809265.js"),["code/image-generator.f1809265.js","code/if-defined.6fc51b43.js"])}}]}])}render(){return N`
      <div id="wrapper">
        <!--required cookie banner-->
        <cookie-banner></cookie-banner>

        <div id="content">
          <div id="router-outlet"></div>
        </div>
        <discord-box></discord-box>
        <app-footer></app-footer>
      </div>

    `}};ns=Hd([se("app-index")],ns);export{D as A,Lc as B,gd as C,F as D,Ic as E,J as F,_d as G,Ud as H,_e as R,G as a,se as b,_ as c,Me as d,_c as e,at as f,Be as g,fe as h,xc as i,Ye as j,B as k,nt as l,Ae as m,Kd as n,Jd as o,Wd as p,Js as q,H as r,X as s,wc as t,Bd as u,K as v,qd as w,Qe as x,N as y,Gd as z};
//# sourceMappingURL=index.0229c04f.js.map
