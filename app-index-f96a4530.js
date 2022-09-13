import*as e from"@pwabuilder/site-analytics";import{AnalyticsBehavior as t}from"@pwabuilder/site-analytics";function n(e,t,n,i){var o,r=arguments.length,s=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r<3?o(s):r>3?o(t,n,s):o(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const i=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),r=new Map;class s{constructor(e,t){if(this._$cssResult$=!0,t!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=r.get(this.cssText);return i&&void 0===e&&(r.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const a=e=>new s("string"==typeof e?e:e+"",o),c=(e,...t)=>{const n=1===e.length?e[0]:t.reduce(((t,n,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[i+1]),e[0]);return new s(n,o)},l=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return a(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var d;const p=window.trustedTypes,h=p?p.emptyScript:"",u=window.reactiveElementPolyfillSupport,m={toAttribute(e,t){switch(t){case Boolean:e=e?h:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=null!==e;break;case Number:n=null===e?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch(e){n=null}}return n}},g=(e,t)=>t!==e&&(t==t||e==e),f={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:g};class b extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;null!==(t=this.l)&&void 0!==t||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,n)=>{const i=this._$Eh(n,t);void 0!==i&&(this._$Eu.set(i,n),e.push(i))})),e}static createProperty(e,t=f){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const n="symbol"==typeof e?Symbol():"__"+e,i=this.getPropertyDescriptor(e,n,t);void 0!==i&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(i){const o=this[e];this[t]=i,this.requestUpdate(e,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||f}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of t)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const e of n)t.unshift(l(e))}else void 0!==e&&t.push(l(e));return t}static _$Eh(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(e=this.constructor.l)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,n;(null!==(t=this._$Eg)&&void 0!==t?t:this._$Eg=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(n=e.hostConnected)||void 0===n||n.call(e))}removeController(e){var t;null===(t=this._$Eg)||void 0===t||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{i?e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((t=>{const n=document.createElement("style"),i=window.litNonce;void 0!==i&&n.setAttribute("nonce",i),n.textContent=t.cssText,e.appendChild(n)}))})(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ES(e,t,n=f){var i,o;const r=this.constructor._$Eh(e,n);if(void 0!==r&&!0===n.reflect){const s=(null!==(o=null===(i=n.converter)||void 0===i?void 0:i.toAttribute)&&void 0!==o?o:m.toAttribute)(t,n.type);this._$Ei=e,null==s?this.removeAttribute(r):this.setAttribute(r,s),this._$Ei=null}}_$AK(e,t){var n,i,o;const r=this.constructor,s=r._$Eu.get(e);if(void 0!==s&&this._$Ei!==s){const e=r.getPropertyOptions(s),a=e.converter,c=null!==(o=null!==(i=null===(n=a)||void 0===n?void 0:n.fromAttribute)&&void 0!==i?i:"function"==typeof a?a:null)&&void 0!==o?o:m.fromAttribute;this._$Ei=s,this[s]=c(t,e.type),this._$Ei=null}}requestUpdate(e,t,n){let i=!0;void 0!==e&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||g)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===n.reflect&&this._$Ei!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,n))):i=!1),!this.isUpdatePending&&i&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((e,t)=>this[t]=e)),this._$Et=void 0);let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(n)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;null===(t=this._$Eg)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$ES(t,this[t],e))),this._$EC=void 0),this._$EU()}updated(e){}firstUpdated(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var y;b.finalized=!0,b.elementProperties=new Map,b.elementStyles=[],b.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:b}),(null!==(d=globalThis.reactiveElementVersions)&&void 0!==d?d:globalThis.reactiveElementVersions=[]).push("1.3.1");const v=globalThis.trustedTypes,w=v?v.createPolicy("lit-html",{createHTML:e=>e}):void 0,x=`lit$${(Math.random()+"").slice(9)}$`,_="?"+x,k=`<${_}>`,S=document,$=(e="")=>S.createComment(e),P=e=>null===e||"object"!=typeof e&&"function"!=typeof e,A=Array.isArray,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,E=/-->/g,T=/>/g,U=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,N=/'/g,R=/"/g,O=/^(?:script|style|textarea|title)$/i,z=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),L=Symbol.for("lit-noChange"),M=Symbol.for("lit-nothing"),j=new WeakMap,I=S.createTreeWalker(S,129,null,!1);class B{constructor({strings:e,_$litType$:t},n){let i;this.parts=[];let o=0,r=0;const s=e.length-1,a=this.parts,[c,l]=((e,t)=>{const n=e.length-1,i=[];let o,r=2===t?"<svg>":"",s=C;for(let t=0;t<n;t++){const n=e[t];let a,c,l=-1,d=0;for(;d<n.length&&(s.lastIndex=d,c=s.exec(n),null!==c);)d=s.lastIndex,s===C?"!--"===c[1]?s=E:void 0!==c[1]?s=T:void 0!==c[2]?(O.test(c[2])&&(o=RegExp("</"+c[2],"g")),s=U):void 0!==c[3]&&(s=U):s===U?">"===c[0]?(s=null!=o?o:C,l=-1):void 0===c[1]?l=-2:(l=s.lastIndex-c[2].length,a=c[1],s=void 0===c[3]?U:'"'===c[3]?R:N):s===R||s===N?s=U:s===E||s===T?s=C:(s=U,o=void 0);const p=s===U&&e[t+1].startsWith("/>")?" ":"";r+=s===C?n+k:l>=0?(i.push(a),n.slice(0,l)+"$lit$"+n.slice(l)+x+p):n+x+(-2===l?(i.push(void 0),t):p)}const a=r+(e[n]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==w?w.createHTML(a):a,i]})(e,t);if(this.el=B.createElement(c,n),I.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(i=I.nextNode())&&a.length<s;){if(1===i.nodeType){if(i.hasAttributes()){const e=[];for(const t of i.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(x)){const n=l[r++];if(e.push(t),void 0!==n){const e=i.getAttribute(n.toLowerCase()+"$lit$").split(x),t=/([.?@])?(.*)/.exec(n);a.push({type:1,index:o,name:t[2],strings:e,ctor:"."===t[1]?V:"?"===t[1]?G:"@"===t[1]?J:F})}else a.push({type:6,index:o})}for(const t of e)i.removeAttribute(t)}if(O.test(i.tagName)){const e=i.textContent.split(x),t=e.length-1;if(t>0){i.textContent=v?v.emptyScript:"";for(let n=0;n<t;n++)i.append(e[n],$()),I.nextNode(),a.push({type:2,index:++o});i.append(e[t],$())}}}else if(8===i.nodeType)if(i.data===_)a.push({type:2,index:o});else{let e=-1;for(;-1!==(e=i.data.indexOf(x,e+1));)a.push({type:7,index:o}),e+=x.length-1}o++}}static createElement(e,t){const n=S.createElement("template");return n.innerHTML=e,n}}function W(e,t,n=e,i){var o,r,s,a;if(t===L)return t;let c=void 0!==i?null===(o=n._$Cl)||void 0===o?void 0:o[i]:n._$Cu;const l=P(t)?void 0:t._$litDirective$;return(null==c?void 0:c.constructor)!==l&&(null===(r=null==c?void 0:c._$AO)||void 0===r||r.call(c,!1),void 0===l?c=void 0:(c=new l(e),c._$AT(e,n,i)),void 0!==i?(null!==(s=(a=n)._$Cl)&&void 0!==s?s:a._$Cl=[])[i]=c:n._$Cu=c),void 0!==c&&(t=W(e,c._$AS(e,t.values),c,i)),t}class D{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:n},parts:i}=this._$AD,o=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:S).importNode(n,!0);I.currentNode=o;let r=I.nextNode(),s=0,a=0,c=i[0];for(;void 0!==c;){if(s===c.index){let t;2===c.type?t=new H(r,r.nextSibling,this,e):1===c.type?t=new c.ctor(r,c.name,c.strings,this,e):6===c.type&&(t=new K(r,this,e)),this.v.push(t),c=i[++a]}s!==(null==c?void 0:c.index)&&(r=I.nextNode(),s++)}return o}m(e){let t=0;for(const n of this.v)void 0!==n&&(void 0!==n.strings?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class H{constructor(e,t,n,i){var o;this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=i,this._$Cg=null===(o=null==i?void 0:i.isConnected)||void 0===o||o}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=W(this,e,t),P(e)?e===M||null==e||""===e?(this._$AH!==M&&this._$AR(),this._$AH=M):e!==this._$AH&&e!==L&&this.$(e):void 0!==e._$litType$?this.T(e):void 0!==e.nodeType?this.k(e):(e=>{var t;return A(e)||"function"==typeof(null===(t=e)||void 0===t?void 0:t[Symbol.iterator])})(e)?this.S(e):this.$(e)}M(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==M&&P(this._$AH)?this._$AA.nextSibling.data=e:this.k(S.createTextNode(e)),this._$AH=e}T(e){var t;const{values:n,_$litType$:i}=e,o="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=B.createElement(i.h,this.options)),i);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===o)this._$AH.m(n);else{const e=new D(o,this),t=e.p(this.options);e.m(n),this.k(t),this._$AH=e}}_$AC(e){let t=j.get(e.strings);return void 0===t&&j.set(e.strings,t=new B(e)),t}S(e){A(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,i=0;for(const o of e)i===t.length?t.push(n=new H(this.M($()),this.M($()),this,this.options)):n=t[i],n._$AI(o),i++;i<t.length&&(this._$AR(n&&n._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var n;for(null===(n=this._$AP)||void 0===n||n.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cg=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class F{constructor(e,t,n,i,o){this.type=1,this._$AH=M,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=o,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=M}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,i){const o=this.strings;let r=!1;if(void 0===o)e=W(this,e,t,0),r=!P(e)||e!==this._$AH&&e!==L,r&&(this._$AH=e);else{const i=e;let s,a;for(e=o[0],s=0;s<o.length-1;s++)a=W(this,i[n+s],t,s),a===L&&(a=this._$AH[s]),r||(r=!P(a)||a!==this._$AH[s]),a===M?e=M:e!==M&&(e+=(null!=a?a:"")+o[s+1]),this._$AH[s]=a}r&&!i&&this.C(e)}C(e){e===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class V extends F{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===M?void 0:e}}const q=v?v.emptyScript:"";class G extends F{constructor(){super(...arguments),this.type=4}C(e){e&&e!==M?this.element.setAttribute(this.name,q):this.element.removeAttribute(this.name)}}class J extends F{constructor(e,t,n,i,o){super(e,t,n,i,o),this.type=5}_$AI(e,t=this){var n;if((e=null!==(n=W(this,e,t,0))&&void 0!==n?n:M)===L)return;const i=this._$AH,o=e===M&&i!==M||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==M&&(i===M||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;"function"==typeof this._$AH?this._$AH.call(null!==(n=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==n?n:this.element,e):this._$AH.handleEvent(e)}}class K{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){W(this,e)}}const Y=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var X,Z;null==Y||Y(B,H),(null!==(y=globalThis.litHtmlVersions)&&void 0!==y?y:globalThis.litHtmlVersions=[]).push("2.2.5");class Q extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const n=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=n.firstChild),n}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=((e,t,n)=>{var i,o;const r=null!==(i=null==n?void 0:n.renderBefore)&&void 0!==i?i:t;let s=r._$litPart$;if(void 0===s){const e=null!==(o=null==n?void 0:n.renderBefore)&&void 0!==o?o:null;r._$litPart$=s=new H(t.insertBefore($(),e),e,void 0,null!=n?n:{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!1)}render(){return L}}Q.finalized=!0,Q._$litElement$=!0,null===(X=globalThis.litElementHydrateSupport)||void 0===X||X.call(globalThis,{LitElement:Q});const ee=globalThis.litElementPolyfillSupport;null==ee||ee({LitElement:Q}),(null!==(Z=globalThis.litElementVersions)&&void 0!==Z?Z:globalThis.litElementVersions=[]).push("3.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const te=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:n,elements:i}=t;return{kind:n,elements:i,finisher(t){window.customElements.define(e,t)}}})(e,t)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,ne=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(n){n.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(n){n.createProperty(t.key,e)}};function ie(e){return(t,n)=>void 0!==n?((e,t,n)=>{t.constructor.createProperty(n,e)})(e,t,n):ne(e,t)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function oe(e){return ie({...e,state:!0})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var re;function se(e){return e=e||[],Array.isArray(e)?e:[e]}function ae(e){return`[Vaadin.Router] ${e}`}null===(re=window.HTMLSlotElement)||void 0===re||re.prototype.assignedElements;const ce=["module","nomodule"];function le(e){if(!e.match(/.+\.[m]?js$/))throw new Error(ae(`Unsupported type for bundle "${e}": .js or .mjs expected.`))}function de(e){if(!e||!fe(e.path))throw new Error(ae('Expected route config to be an object with a "path" string property, or an array of such objects'));const t=e.bundle,n=["component","redirect","bundle"];if(!(ge(e.action)||Array.isArray(e.children)||ge(e.children)||me(t)||n.some((t=>fe(e[t])))))throw new Error(ae(`Expected route config "${e.path}" to include either "${n.join('", "')}" or "action" function but none found.`));if(t)if(fe(t))le(t);else{if(!ce.some((e=>e in t)))throw new Error(ae('Expected route bundle to include either "nomodule" or "module" keys, or both'));ce.forEach((e=>e in t&&le(t[e])))}e.redirect&&["bundle","component"].forEach((t=>{t in e&&console.warn(ae(`Route config "${e.path}" has both "redirect" and "${t}" properties, and "redirect" will always override the latter. Did you mean to only use "${t}"?`))}))}function pe(e){se(e).forEach((e=>de(e)))}function he(e,t){let n=document.head.querySelector('script[src="'+e+'"][async]');return n||(n=document.createElement("script"),n.setAttribute("src",e),"module"===t?n.setAttribute("type","module"):"nomodule"===t&&n.setAttribute("nomodule",""),n.async=!0),new Promise(((e,t)=>{n.onreadystatechange=n.onload=t=>{n.__dynamicImportLoaded=!0,e(t)},n.onerror=e=>{n.parentNode&&n.parentNode.removeChild(n),t(e)},null===n.parentNode?document.head.appendChild(n):n.__dynamicImportLoaded&&e()}))}function ue(e,t){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${e}`,{cancelable:"go"===e,detail:t}))}function me(e){return"object"==typeof e&&!!e}function ge(e){return"function"==typeof e}function fe(e){return"string"==typeof e}function be(e){const t=new Error(ae(`Page not found (${e.pathname})`));return t.context=e,t.code=404,t}const ye=new class{};function ve(e){if(e.defaultPrevented)return;if(0!==e.button)return;if(e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let t=e.target;const n=e.composedPath?e.composedPath():e.path||[];for(let e=0;e<n.length;e++){const i=n[e];if(i.nodeName&&"a"===i.nodeName.toLowerCase()){t=i;break}}for(;t&&"a"!==t.nodeName.toLowerCase();)t=t.parentNode;if(!t||"a"!==t.nodeName.toLowerCase())return;if(t.target&&"_self"!==t.target.toLowerCase())return;if(t.hasAttribute("download"))return;if(t.hasAttribute("router-ignore"))return;if(t.pathname===window.location.pathname&&""!==t.hash)return;const i=t.origin||function(e){const t=e.port,n=e.protocol;return`${n}//${"http:"===n&&"80"===t||"https:"===n&&"443"===t?e.hostname:e.host}`}(t);if(i!==window.location.origin)return;const{pathname:o,search:r,hash:s}=t;ue("go",{pathname:o,search:r,hash:s})&&(e.preventDefault(),e&&"click"===e.type&&window.scrollTo(0,0))}const we={activate(){window.document.addEventListener("click",ve)},inactivate(){window.document.removeEventListener("click",ve)}};function xe(e){if("vaadin-router-ignore"===e.state)return;const{pathname:t,search:n,hash:i}=window.location;ue("go",{pathname:t,search:n,hash:i})}/Trident/.test(navigator.userAgent)&&!ge(window.PopStateEvent)&&(window.PopStateEvent=function(e,t){t=t||{};var n=document.createEvent("Event");return n.initEvent(e,Boolean(t.bubbles),Boolean(t.cancelable)),n.state=t.state||null,n},window.PopStateEvent.prototype=window.Event.prototype);const _e={activate(){window.addEventListener("popstate",xe)},inactivate(){window.removeEventListener("popstate",xe)}};var ke=ze,Se=Ee,$e=function(e,t){return Te(Ee(e,t))},Pe=Te,Ae=Oe,Ce=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function Ee(e,t){for(var n,i=[],o=0,r=0,s="",a=t&&t.delimiter||"/",c=t&&t.delimiters||"./",l=!1;null!==(n=Ce.exec(e));){var d=n[0],p=n[1],h=n.index;if(s+=e.slice(r,h),r=h+d.length,p)s+=p[1],l=!0;else{var u="",m=e[r],g=n[2],f=n[3],b=n[4],y=n[5];if(!l&&s.length){var v=s.length-1;c.indexOf(s[v])>-1&&(u=s[v],s=s.slice(0,v))}s&&(i.push(s),s="",l=!1);var w=""!==u&&void 0!==m&&m!==u,x="+"===y||"*"===y,_="?"===y||"*"===y,k=u||a,S=f||b;i.push({name:g||o++,prefix:u,delimiter:k,optional:_,repeat:x,partial:w,pattern:S?Ne(S):"[^"+Ue(k)+"]+?"})}}return(s||r<e.length)&&i.push(s+e.substr(r)),i}function Te(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,i){for(var o="",r=i&&i.encode||encodeURIComponent,s=0;s<e.length;s++){var a=e[s];if("string"!=typeof a){var c,l=n?n[a.name]:void 0;if(Array.isArray(l)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(0===l.length){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(c=r(l[d],a),!t[s].test(c))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');o+=(0===d?a.prefix:a.delimiter)+c}}else if("string"!=typeof l&&"number"!=typeof l&&"boolean"!=typeof l){if(!a.optional)throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"));a.partial&&(o+=a.prefix)}else{if(c=r(String(l),a),!t[s].test(c))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+c+'"');o+=a.prefix+c}}else o+=a}return o}}function Ue(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Ne(e){return e.replace(/([=!:$/()])/g,"\\$1")}function Re(e){return e&&e.sensitive?"":"i"}function Oe(e,t,n){for(var i=(n=n||{}).strict,o=!1!==n.start,r=!1!==n.end,s=Ue(n.delimiter||"/"),a=n.delimiters||"./",c=[].concat(n.endsWith||[]).map(Ue).concat("$").join("|"),l=o?"^":"",d=0===e.length,p=0;p<e.length;p++){var h=e[p];if("string"==typeof h)l+=Ue(h),d=p===e.length-1&&a.indexOf(h[h.length-1])>-1;else{var u=h.repeat?"(?:"+h.pattern+")(?:"+Ue(h.delimiter)+"(?:"+h.pattern+"))*":h.pattern;t&&t.push(h),h.optional?h.partial?l+=Ue(h.prefix)+"("+u+")?":l+="(?:"+Ue(h.prefix)+"("+u+"))?":l+=Ue(h.prefix)+"("+u+")"}}return r?(i||(l+="(?:"+s+")?"),l+="$"===c?"$":"(?="+c+")"):(i||(l+="(?:"+s+"(?="+c+"))?"),d||(l+="(?="+s+"|"+c+")")),new RegExp(l,Re(n))}function ze(e,t,n){return e instanceof RegExp?function(e,t){if(!t)return e;var n=e.source.match(/\((?!\?)/g);if(n)for(var i=0;i<n.length;i++)t.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e}(e,t):Array.isArray(e)?function(e,t,n){for(var i=[],o=0;o<e.length;o++)i.push(ze(e[o],t,n).source);return new RegExp("(?:"+i.join("|")+")",Re(n))}(e,t,n):function(e,t,n){return Oe(Ee(e,n),t,n)}(e,t,n)}ke.parse=Se,ke.compile=$e,ke.tokensToFunction=Pe,ke.tokensToRegExp=Ae;const{hasOwnProperty:Le}=Object.prototype,Me=new Map;function je(e){try{return decodeURIComponent(e)}catch(t){return e}}function Ie(e,t,n,i,o){let r,s,a=0,c=e.path||"";return"/"===c.charAt(0)&&(n&&(c=c.substr(1)),n=!0),{next(l){if(e===l)return{done:!0};const d=e.__children=e.__children||e.children;if(!r&&(r=function(e,t,n,i,o){const r=`${e}|${n=!!n}`;let s=Me.get(r);if(!s){const t=[];s={keys:t,pattern:ke(e,t,{end:n,strict:""===e})},Me.set(r,s)}const a=s.pattern.exec(t);if(!a)return null;const c=Object.assign({},o);for(let e=1;e<a.length;e++){const t=s.keys[e-1],n=t.name,i=a[e];void 0===i&&Le.call(c,n)||(t.repeat?c[n]=i?i.split(t.delimiter).map(je):[]:c[n]=i?je(i):i)}return{path:a[0],keys:(i||[]).concat(s.keys),params:c}}(c,t,!d,i,o),r))return{done:!1,value:{route:e,keys:r.keys,params:r.params,path:r.path}};if(r&&d)for(;a<d.length;){if(!s){const i=d[a];i.parent=e;let o=r.path.length;o>0&&"/"===t.charAt(o)&&(o+=1),s=Ie(i,t.substr(o),n,r.keys,r.params)}const i=s.next(l);if(!i.done)return{done:!1,value:i.value};s=null,a++}return{done:!0}}}}function Be(e){if(ge(e.route.action))return e.route.action(e)}Me.set("|false",{keys:[],pattern:/(?:)/});class We{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||Be,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){pe(e);const t=[...se(e)];this.root.__children=t}addRoutes(e){return pe(e),this.root.__children.push(...se(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,fe(e)?{pathname:e}:e),n=Ie(this.root,this.__normalizePathname(t.pathname),this.baseUrl),i=this.resolveRoute;let o=null,r=null,s=t;function a(e,c=o.value.route,l){const d=null===l&&o.value.route;return o=r||n.next(d),r=null,e||!o.done&&function(e,t){let n=t;for(;n;)if(n=n.parent,n===e)return!0;return!1}(c,o.value.route)?o.done?Promise.reject(be(t)):(s=Object.assign(s?{chain:s.chain?s.chain.slice(0):[]}:{},t,o.value),function(e,t){const{route:n,path:i}=t;if(n&&!n.__synthetic){const t={path:i,route:n};if(e.chain){if(n.parent){let t=e.chain.length;for(;t--&&e.chain[t].route&&e.chain[t].route!==n.parent;)e.chain.pop()}}else e.chain=[];e.chain.push(t)}}(s,o.value),Promise.resolve(i(s)).then((t=>null!=t&&t!==ye?(s.result=t.result||t,s):a(e,c,t)))):(r=o,Promise.resolve(ye))}return t.next=a,Promise.resolve().then((()=>a(!0,this.root))).catch((e=>{const t=function(e){let t=`Path '${e.pathname}' is not properly resolved due to an error.`;const n=(e.route||{}).path;return n&&(t+=` Resolution had failed on route: '${n}'`),t}(s);if(e?console.warn(t):e=new Error(t),e.context=e.context||s,e instanceof DOMException||(e.code=e.code||500),this.errorHandler)return s.result=this.errorHandler(e),s;throw e}))}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,n=this.constructor.__createUrl(e,t).href;return n.slice(0,t.length)===t?n.slice(t.length):void 0}}We.pathToRegexp=ke;const{pathToRegexp:De}=We,He=new Map;function Fe(e,t,n){const i=t.name||t.component;if(i&&(e.has(i)?e.get(i).push(t):e.set(i,[t])),Array.isArray(n))for(let i=0;i<n.length;i++){const o=n[i];o.parent=t,Fe(e,o,o.__children||o.children)}}function Ve(e,t){const n=e.get(t);if(n&&n.length>1)throw new Error(`Duplicate route with name "${t}". Try seting unique 'name' route properties.`);return n&&n[0]}function qe(e){let t=e.path;return t=Array.isArray(t)?t[0]:t,void 0!==t?t:""}function Ge(e,t={}){if(!(e instanceof We))throw new TypeError("An instance of Resolver is expected");const n=new Map;return(i,o)=>{let r=Ve(n,i);if(!r&&(n.clear(),Fe(n,e.root,e.root.__children),r=Ve(n,i),!r))throw new Error(`Route "${i}" not found`);let s=He.get(r.fullPath);if(!s){let e=qe(r),t=r.parent;for(;t;){const n=qe(t);n&&(e=n.replace(/\/$/,"")+"/"+e.replace(/^\//,"")),t=t.parent}const n=De.parse(e),i=De.tokensToFunction(n),o=Object.create(null);for(let e=0;e<n.length;e++)fe(n[e])||(o[n[e].name]=!0);s={toPath:i,keys:o},He.set(e,s),r.fullPath=e}let a=s.toPath(o,t)||"/";if(t.stringifyQueryParams&&o){const e={},n=Object.keys(o);for(let t=0;t<n.length;t++){const i=n[t];s.keys[i]||(e[i]=o[i])}const i=t.stringifyQueryParams(e);i&&(a+="?"===i.charAt(0)?i:`?${i}`)}return a}}let Je=[];function Ke(e){Je.forEach((e=>e.inactivate())),e.forEach((e=>e.activate())),Je=e}function Ye(e,t){return e.classList.add(t),new Promise((n=>{if((e=>{const t=getComputedStyle(e).getPropertyValue("animation-name");return t&&"none"!==t})(e)){const i=e.getBoundingClientRect(),o=`height: ${i.bottom-i.top}px; width: ${i.right-i.left}px`;e.setAttribute("style",`position: absolute; ${o}`),((e,t)=>{const n=()=>{e.removeEventListener("animationend",n),t()};e.addEventListener("animationend",n)})(e,(()=>{e.classList.remove(t),e.removeAttribute("style"),n()}))}else e.classList.remove(t),n()}))}function Xe(e){return null!=e}function Ze({pathname:e="",search:t="",hash:n="",chain:i=[],params:o={},redirectFrom:r,resolver:s},a){const c=i.map((e=>e.route));return{baseUrl:s&&s.baseUrl||"",pathname:e,search:t,hash:n,routes:c,route:a||c.length&&c[c.length-1]||null,params:o,redirectFrom:r,getUrl:(e={})=>it(rt.pathToRegexp.compile(ot(c))(Object.assign({},o,e)),s)}}function Qe(e,t){const n=Object.assign({},e.params);return{redirect:{pathname:t,from:e.pathname,params:n}}}function et(e,t,n){if(ge(e))return e.apply(n,t)}function tt(e,t,n){return i=>i&&(i.cancel||i.redirect)?i:n?et(n[e],t,n):void 0}function nt(e){if(e&&e.length){const t=e[0].parentNode;for(let n=0;n<e.length;n++)t.removeChild(e[n])}}function it(e,t){const n=t.__effectiveBaseUrl;return n?t.constructor.__createUrl(e.replace(/^\//,""),n).pathname:e}function ot(e){return e.map((e=>e.path)).reduce(((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e),"")}class rt extends We{constructor(e,t){const n=document.head.querySelector("base"),i=n&&n.getAttribute("href");super([],Object.assign({baseUrl:i&&We.__createUrl(i,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=e=>this.__resolveRoute(e);const o=rt.NavigationTrigger;rt.setTriggers.apply(rt,Object.keys(o).map((e=>o[e]))),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=Ze({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let n=Promise.resolve();ge(t.children)&&(n=n.then((()=>t.children(function(e){const t=Object.assign({},e);return delete t.next,t}(e)))).then((e=>{Xe(e)||ge(t.children)||(e=t.children),function(e,t){if(!Array.isArray(e)&&!me(e))throw new Error(ae(`Incorrect "children" value for the route ${t.path}: expected array or object, but got ${e}`));t.__children=[];const n=se(e);for(let e=0;e<n.length;e++)de(n[e]),t.__children.push(n[e])}(e,t)})));const i={redirect:t=>Qe(e,t),component:e=>{const t=document.createElement(e);return this.__createdByRouter.set(t,!0),t}};return n.then((()=>{if(this.__isLatestRender(e))return et(t.action,[e,i],t)})).then((e=>{return Xe(e)&&(e instanceof HTMLElement||e.redirect||e===ye)?e:fe(t.redirect)?i.redirect(t.redirect):t.bundle?(n=t.bundle,fe(n)?he(n):Promise.race(ce.filter((e=>e in n)).map((e=>he(n[e],e))))).then((()=>{}),(()=>{throw new Error(ae(`Bundle not found: ${t.bundle}. Check if the file name is correct`))})):void 0;var n})).then((e=>Xe(e)?e:fe(t.component)?i.component(t.component):void 0))}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const n=++this.__lastStartedRenderId,i=Object.assign({search:"",hash:""},fe(e)?{pathname:e}:e,{__renderId:n});return this.ready=this.resolve(i).then((e=>this.__fullyResolveChain(e))).then((e=>{if(this.__isLatestRender(e)){const i=this.__previousContext;if(e===i)return this.__updateBrowserHistory(i,!0),this.location;if(this.location=Ze(e),t&&this.__updateBrowserHistory(e,1===n),ue("location-changed",{router:this,location:this.location}),e.__skipAttach)return this.__copyUnchangedElements(e,i),this.__previousContext=e,this.location;this.__addAppearingContent(e,i);const o=this.__animateIfNeeded(e);return this.__runOnAfterEnterCallbacks(e),this.__runOnAfterLeaveCallbacks(e,i),o.then((()=>{if(this.__isLatestRender(e))return this.__removeDisappearingContent(),this.__previousContext=e,this.location}))}})).catch((e=>{if(n===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(i),nt(this.__outlet&&this.__outlet.children),this.location=Ze(Object.assign(i,{resolver:this})),ue("error",Object.assign({router:this,error:e},i)),e})),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then((n=>{const i=n!==t?n:e,o=it(ot(n.chain),n.resolver)===n.pathname,r=(e,t=e.route,n)=>e.next(void 0,t,n).then((n=>null===n||n===ye?o?e:null!==t.parent?r(e,t.parent,n):n:n));return r(n).then((e=>{if(null===e||e===ye)throw be(i);return e&&e!==ye&&e!==n?this.__fullyResolveChain(i,e):this.__amendWithOnBeforeCallbacks(n)}))}))}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(function(e,t){t.location=Ze(e);const n=e.chain.map((e=>e.route)).indexOf(e.route);e.chain[n].element=t}(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then((e=>this.__findComponentContextAfterAllRedirects(e))):t instanceof Error?Promise.reject(t):Promise.reject(new Error(ae(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${function(e){if("object"!=typeof e)return String(e);const t=Object.prototype.toString.call(e).match(/ (.*)\]$/)[1];return"Object"===t||"Array"===t?`${t} ${JSON.stringify(e)}`:t}(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then((t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t)))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},n=t.chain||[],i=e.chain;let o=Promise.resolve();const r=()=>({cancel:!0}),s=t=>Qe(e,t);if(e.__divergedChainIndex=0,e.__skipAttach=!1,n.length){for(let t=0;t<Math.min(n.length,i.length)&&(n[t].route===i[t].route&&(n[t].path===i[t].path||n[t].element===i[t].element)&&this.__isReusableElement(n[t].element,i[t].element));t=++e.__divergedChainIndex);if(e.__skipAttach=i.length===n.length&&e.__divergedChainIndex==i.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let t=i.length-1;t>=0;t--)o=this.__runOnBeforeLeaveCallbacks(o,e,{prevent:r},n[t]);for(let t=0;t<i.length;t++)o=this.__runOnBeforeEnterCallbacks(o,e,{prevent:r,redirect:s},i[t]),n[t].element.location=Ze(e,n[t].route)}else for(let t=n.length-1;t>=e.__divergedChainIndex;t--)o=this.__runOnBeforeLeaveCallbacks(o,e,{prevent:r},n[t])}if(!e.__skipAttach)for(let t=0;t<i.length;t++)t<e.__divergedChainIndex?t<n.length&&n[t].element&&(n[t].element.location=Ze(e,n[t].route)):(o=this.__runOnBeforeEnterCallbacks(o,e,{prevent:r,redirect:s},i[t]),i[t].element&&(i[t].element.location=Ze(e,i[t].route)));return o.then((t=>{if(t){if(t.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(t.redirect)return this.__redirect(t.redirect,e.__redirectCount,e.__renderId)}return e}))}__runOnBeforeLeaveCallbacks(e,t,n,i){const o=Ze(t);return e.then((e=>{if(this.__isLatestRender(t)){return tt("onBeforeLeave",[o,n,this],i.element)(e)}})).then((e=>{if(!(e||{}).redirect)return e}))}__runOnBeforeEnterCallbacks(e,t,n,i){const o=Ze(t,i.route);return e.then((e=>{if(this.__isLatestRender(t)){return tt("onBeforeEnter",[o,n,this],i.element)(e)}}))}__isReusableElement(e,t){return!(!e||!t)&&(this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t)}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,n){if(t>256)throw new Error(ae(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:n})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(ae(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:n=""},i){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==n){const o=i?"replaceState":"pushState";window.history[o](null,document.title,e+t+n),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let n=this.__outlet;for(let i=0;i<e.__divergedChainIndex;i++){const o=t&&t.chain[i].element;if(o){if(o.parentNode!==n)break;e.chain[i].element=o,n=o}}return n}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const n=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(n.children).filter((t=>this.__addedByRouter.get(t)&&t!==e.result));let i=n;for(let t=e.__divergedChainIndex;t<e.chain.length;t++){const o=e.chain[t].element;o&&(i.appendChild(o),this.__addedByRouter.set(o,!0),i===n&&this.__appearingContent.push(o),i=o)}}__removeDisappearingContent(){this.__disappearingContent&&nt(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(nt(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let n=t.chain.length-1;n>=e.__divergedChainIndex&&this.__isLatestRender(e);n--){const i=t.chain[n].element;if(i)try{const n=Ze(e);et(i.onAfterLeave,[n,{},t.resolver],i)}finally{this.__disappearingContent.indexOf(i)>-1&&nt(i.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const n=e.chain[t].element||{},i=Ze(e,e.chain[t].route);et(n.onAfterEnter,[i,{},e.resolver],n)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],n=(this.__appearingContent||[])[0],i=[],o=e.chain;let r;for(let e=o.length;e>0;e--)if(o[e-1].route.animate){r=o[e-1].route.animate;break}if(t&&n&&r){const e=me(r)&&r.leave||"leaving",o=me(r)&&r.enter||"entering";i.push(Ye(t,e)),i.push(Ye(n,o))}return Promise.all(i).then((()=>e))}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:n,hash:i}=e?e.detail:window.location;fe(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:n,hash:i},!0))}static setTriggers(...e){Ke(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=Ge(this)),it(this.__urlForName(e,t),this)}urlForPath(e,t){return it(rt.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:n,hash:i}=fe(e)?this.__createUrl(e,"http://a"):e;return ue("go",{pathname:t,search:n,hash:i})}}const st=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,at=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function ct(e,t){if("function"!=typeof e)return;const n=st.exec(e.toString());if(n)try{e=new Function(n[1])}catch(e){}return e(t)}window.Vaadin=window.Vaadin||{};const lt=function(e,t){if(window.Vaadin.developmentMode)return ct(e,t)};function dt(){}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(at?!(at&&Object.keys(at).map((e=>at[e])).filter((e=>e.productionMode)).length>0):!ct((function(){return!0})))}catch(e){return!1}}());window.Vaadin=window.Vaadin||{},window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"}),lt(dt),rt.NavigationTrigger={POPSTATE:_e,CLICK:we};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const pt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ht=e=>(...t)=>({_$litDirective$:e,values:t});class ut{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mt=ht(class extends ut{constructor(e){var t;if(super(e),e.type!==pt.ATTRIBUTE||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){var n,i;if(void 0===this.et){this.et=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!(null===(n=this.st)||void 0===n?void 0:n.has(e))&&this.et.add(e);return this.render(t)}const o=e.element.classList;this.et.forEach((e=>{e in t||(o.remove(e),this.et.delete(e))}));for(const e in t){const n=!!t[e];n===this.et.has(e)||(null===(i=this.st)||void 0===i?void 0:i.has(e))||(n?(o.add(e),this.et.add(e)):(o.remove(e),this.et.delete(e)))}return L}});const gt={button:{done:"Done",upload:"Upload",download:"Download",generate:"Generate",add_url:"+ Add URL"},input:{home:{error:{promises:"There was a problem retrieving the manifest from your site.",invalidURL:"Invalid URL, please try again."}},manifest:{screenshot:{error:"The url needs to be an absolute url."}},publish:{windows:{test_package:"Want to test your app first before going to the Microsoft Store? Tap Download to get a package you can install and test."},base_package:{download:"Download your generated Web Manifest and chosen Service Worker to make your app a PWA!"}},basepack:{run_new:"After uploading the above files to your Web App tap Run New Test to test your PWA again!"}},text:{publish:{windows_platform:{p:"Your download will contain instructions for submitting your app to the Microsoft Store. Your app will be powered by the Chromium-based Edge platform."}},base_package:{top_section:{h1:"Make your app a PWA",p:"Looks like your web app is not a PWA yet, but you're on your way! Head below to download your base file package and get one step closer to packaging your app for the app stores."},summary_body:{h1:"Download PWA Base Files",p:"Whether you edited your manifest or added a service worker, in your downloaded base package files you will receive a manifest and service worker files ready to be added to your server, along with some helpful documentation."},next_steps:{h1:"Next Steps"}},manifest_options:{top_section:{h1:"Manifest"},summary_body:{h1:"Summary",p:"Easily update and upgrade your Web Manifest with our built-in Web Manifest editor"},info:{h1:"Info"},images:{h1:"Images",icons:{h3:"Upload App Icons"},screenshots:{h3:"Generate Screenshots",p:"Specify the URLs to generate desktop and mobile screenshots from. You may add up to 8 screenshots or Store Listings."}},settings:{h1:"Settings",background_color:{h3:"Background Color"},theme_color:{h3:"Theme Color"}},view_code:{h1:"View Code"},titles:{name:"Name",short_name:"Short Name",description:"Description",start_url:"Start URL",scope:"Scope",display:"Display",orientation:"Orientation",language:"Language"},descriptions:{short_name:"Used in app launchers",description:"Used in app storefronts and install dialogs",start_url:"The relative URL that loads when your app starts",scope:"Which URLs can load within your app",display:"The appearance of your app window",orientation:"The default screen orientation of your app",language:"The primary language of your app"}},android:{titles:{package_name:"Package Name",app_name:"App name",launcher_name:"Launcher name",all_settings:"All Settings",app_version:"App version",app_version_code:"App version code",host:"Host",start_url:"Start URL",theme_color:"Status bar color",splash_color:"Splash color",nav_color:"Nav color",dark_color:"Nav dark color",div_color:"Nav divider color",div_dark_color:"Nav divider dark color",icon_url:"Icon URL",mask_icon_url:"Maskable icon URL",mono_icon_url:"Monochrome icon URL",fallback:"Fallback behavior",custom:"Custom Tabs",web_view:"Web View",display_mode:"Display mode",standalone:"Standalone",fullscreen:"Fullscreen",notification:"Notification delegation",enable:"Enable",location_delegation:"Location delegation",google_play_billing:"Google Play billing",settings_shortcut:"Settings shortcut",chromeos_only:"ChromeOS only",generate:"Generate",source_code:"Include source code",none:"None",signing_key:"Signing key",key_file:"Key file",key_alias:"Key alias",key_fullname:"Key full name",key_org:"Key organization",key_org_unit:"Key organizational unit",key_country_code:"Key country code",key_pw:"Key password",key_store_pw:"Key store password"},description:{package_name:"The unique identifier of your app. It should contain only letters, numbers, and periods. Example: com.companyname.appname",launcher_name:"The app name used on the Android launch screen. Typically, this is the short name of the app.",app_version:"The version of your app displayed to users. This is a string, typically in the form of '1.0.0.0'. Maps to android:versionName.",app_version_code:"A positive integer used as an internal version number. This is not shown to users. Android uses this value to protect against downgrades. Maps to android:versionCode.",start_url:"The start path for the TWA. Must be relative to the Host URL. You can specify '/' if you don't have a start URL different from Host.",start_url_short:"The start path for the TWA. Must be relative to the Host URL.",theme_color:"Also known as the theme color, this is the color of the Android status bar in your app. Note: the status bar will be hidden if Display Mode is set to fullscreen.",splash_color:"Also known as background color, this is the color of the splash screen for your app.",nav_color:"The color of the Android navigation bar in your app. Note: the navigation bar will be hidden if Display Mode is set to fullscreen.",dark_color:"The color of the Android navigation bar in your app when Android is in dark mode.",div_color:"The color of the Android navigation bar divider in your app.",div_dark_color:"The color of the Android navigation navigation bar divider in your app when Android is in dark mode.",mask_icon_url:"Optional. The URL to an icon with a minimum safe zone of trimmable padding, enabling rounded icons on certain Android platforms.",mono_icon_url:"Optional. The URL to an icon containing only white and black colors, enabling Android to fill the icon with user-specified color or gradient depending on theme, color mode, or contrast settings.",custom:"Use Chrome Custom Tabs as a fallback for your PWA when the full trusted web activity (TWA) experience is unavailable.",web_view:"Use a web view as the fallback for your PWA when the full trusted web activity (TWA) experience is unavailable.",standalone:"Your PWA will use the whole screen but keep the Android status bar and navigation bar.",fullscreen:"Your PWA will use the whole screen and remove the Android status bar and navigation bar. Suitable for immersive experiences such as games or media apps.",notification:"Whether to enable Push Notification Delegation. If enabled, your PWA can send push notifications without browser permission prompts.",location_delegation:"Whether to enable Location Delegation. If enabled, your PWA can acess navigator.geolocation without browser permission prompts.",google_play_billing:"Whether to enable in-app purchases through Google Play Billing and the Digital Goods API.",settings_shortcut:"If enabled, users can long-press on your app tile and a Settings menu item will appear, letting users manage space for your app.",chromeos_only:"If enabled, your Android package will only run on ChromeOS devices",form_details:"Your download will contain instructions for submitting your app to the Google Play Store.",source_code:"If enabled, your download will include the source code for your Android app.",signing_key:"PWABuilder will generate a new signing key for you and sign your APK with it. Your download will contain the new signing key and passwords.",unsigned_key:"PWABuilder will generate an unsigned APK. Google Play Store will sign your package. This is Google's recommended approach.",upload_signing_key:"Upload your existing signing key. Use this option if you already have a signing key and you want to publish a new version of an existing app in Google Play.",key_country_code:"The 2 letter country code to list on the signing key",key_pw:"The password for the signing key. Type a new password or leave empty to use a generated password.",key_store_pw:"The password for the key store. Type a new password or leave empty to use a generated password."}},resource_hub:{titles:{blog:"Blog",demo:"Demo",documentation:"Documentation"},description:{blog:"Check out the PWABuilder blog for all the latest on PWABuilder and PWAs",demo:"Check out our demos to see what PWAs are capable of!",documentation:"Looking for our documentation? Tap View Documentation to get started!"}},resource_hub_new:{titles:{manifest:"Web Manifest",sw:"Service Worker",https:"Secure HTTPS"},description:{manifest:"A Web App Manifest of a website governs how your Progressive Web App (PWA) looks and behaves when installed on a device.",sw:"Service Workers are a special type of Web Worker with the ability to intercept, modify, and respond to all offline and online network requests using the Fetch API.",https:"Having a secure HTTPS endpoint and other user safeguards making the user experience secure from end to end."}},community_hub:{titles:{github:"Contribute on GitHub",twitter:"Follow us on Twitter!",discord:"Join us on our Discord Server"},description:{github:"Contribute to this Open Source project by joining our PWA community on GitHub.",twitter:"Meet our fellow PWA enthusiast and follow our latest releases and updates on Twitter.",discord:"Join the PWABuilder Discord community to connect with the people and resources you need."}},success_stories:{stat:{trivago:"User traffic",alibaba:"Total conversions",pintrest:"Ad revenue",tinder:"Storage efficient"},value:{trivago:"+150%",alibaba:"+76%",pintrest:"+44%",tinder:"+90%"},description:{trivago:"Engagement for users who add to homescreen has increased by 150%. This increased engagement led to a 97% increase in click outs to hotel offers.",alibaba:"After upgrading to a PWA, Alibaba saw a 76% increase in total conversions across browsers. And 30% more monthly active users on Android.",pintrest:"With the new Pinterest PWA they were able to increase user-generated ad revenue by 44% and core engagement by 60%.",tinder:"The native Tinder application was a whopping 30MB, when Tinder transitioned to PWA they were able to reduce their file size down to 2.8MB. "}}},tooltip:{manifest_options:{upload:"Your app's icon. This is the icon operating systems will use to represent your app. In Windows this is used in the taskbar, start menu etc, launch screen.",generate:"Screenshots of your PWA can be used in stores and the in-browser install prompt to help promote your PWA.",background_color:"The background_color member controls the splash screen color of your app.",theme_color:"The theme_color member defines the default theme color for your app. On Windows, this will be the color of your app's title bar.",name:"The name of your app as displayed to the user.",short_name:"The short name for your app. It's used where there is insufficent space to display the full name.",start_url:"A URL relative to the root of your domain that is opened when your app is launched, e.g. /index.html. Typically this is set to '/', indicating the root of the domain.",scope:"The scope member is a string that defines the navigation scope of this web application's application context.",display:"How your app is displayed. Standalone: Recommended. Your PWA appears like a native app, no browser UI is shown. Minimal-ui: similar to standalone but includes a refresh button and back button in your app's title bar. Fullscreen: Typically used in immersive games, your PWA takes up all the available display area without any browser UI or app title bar. Browser: full browser UI is shown.",orientation:"The default orientation your app should be used in, such as portrait or landscape.",language:"Specifies the primary language of the app.",description:"A description of your app. Appears in app listings, app storefronts, and app install UI."}},values:{none:"None",transparent:"Transparent",custom:"Custom Color"},imageGenerator:{windows11:"Windows 11",windows10:"Windows 10",android:"Android",ios:"iOS",image_generator:"Image Generator",image_generator_text:"Quickly and easily create app icons for various platforms in the right size and format",image_details:"Image Details",image_details_text:"Specify the image details below.",input_image:"Choose your base image",input_image_help:"You should choose a 512x512 or larger square PNG image. This image will be used to generate all the images for your chosen platforms.",padding:"Padding",padding_text:"0 is no padding, 1 is 100% of the source image. 0.3 is a typical value for most icons. For Windows 11 platform, this value is overriden on individual images based on UX guidelines.",background_color:"Background Color",best_guess:"Best guess",transparent:"Transparent",custom_color:"Custom color",platforms:"Platforms",platforms_text:"Select the platforms to generate images for."}},ft=[{code:"ab",name:"Abkhaz"},{code:"aa",name:"Afar"},{code:"af",name:"Afrikaans"},{code:"ak",name:"Akan"},{code:"sq",name:"Albanian"},{code:"am",name:"Amharic"},{code:"ar",name:"Arabic"},{code:"an",name:"Aragonese"},{code:"hy",name:"Armenian"},{code:"as",name:"Assamese"},{code:"av",name:"Avaric"},{code:"ae",name:"Avestan"},{code:"ay",name:"Aymara"},{code:"az",name:"Azerbaijani"},{code:"bm",name:"Bambara"},{code:"ba",name:"Bashkir"},{code:"eu",name:"Basque"},{code:"be",name:"Belarusian"},{code:"bn",name:"Bengali"},{code:"bh",name:"Bihari"},{code:"bi",name:"Bislama"},{code:"bs",name:"Bosnian"},{code:"br",name:"Breton"},{code:"bg",name:"Bulgarian"},{code:"my",name:"Burmese"},{code:"ca",name:"Catalan; Valencian"},{code:"ch",name:"Chamorro"},{code:"ce",name:"Chechen"},{code:"ny",name:"Chichewa; Chewa; Nyanja"},{code:"zh",name:"Chinese"},{code:"cv",name:"Chuvash"},{code:"kw",name:"Cornish"},{code:"co",name:"Corsican"},{code:"cr",name:"Cree"},{code:"hr",name:"Croatian"},{code:"cs",name:"Czech"},{code:"da",name:"Danish"},{code:"dv",name:"Divehi; Dhivehi; Maldivian;"},{code:"nl",name:"Dutch"},{code:"en",name:"English"},{code:"eo",name:"Esperanto"},{code:"et",name:"Estonian"},{code:"ee",name:"Ewe"},{code:"fo",name:"Faroese"},{code:"fj",name:"Fijian"},{code:"fi",name:"Finnish"},{code:"fr",name:"French"},{code:"ff",name:"Fula; Fulah; Pulaar; Pular"},{code:"gl",name:"Galician"},{code:"ka",name:"Georgian"},{code:"de",name:"German"},{code:"el",name:"Greek, Modern"},{code:"gn",name:"Guaraní"},{code:"gu",name:"Gujarati"},{code:"ht",name:"Haitian; Haitian Creole"},{code:"ha",name:"Hausa"},{code:"he",name:"Hebrew (modern)"},{code:"hz",name:"Herero"},{code:"hi",name:"Hindi"},{code:"ho",name:"Hiri Motu"},{code:"hu",name:"Hungarian"},{code:"ia",name:"Interlingua"},{code:"id",name:"Indonesian"},{code:"ie",name:"Interlingue"},{code:"ga",name:"Irish"},{code:"ig",name:"Igbo"},{code:"ik",name:"Inupiaq"},{code:"io",name:"Ido"},{code:"is",name:"Icelandic"},{code:"it",name:"Italian"},{code:"iu",name:"Inuktitut"},{code:"ja",name:"Japanese"},{code:"jv",name:"Javanese"},{code:"kl",name:"Kalaallisut, Greenlandic"},{code:"kn",name:"Kannada"},{code:"kr",name:"Kanuri"},{code:"ks",name:"Kashmiri"},{code:"kk",name:"Kazakh"},{code:"km",name:"Khmer"},{code:"ki",name:"Kikuyu, Gikuyu"},{code:"rw",name:"Kinyarwanda"},{code:"ky",name:"Kirghiz, Kyrgyz"},{code:"kv",name:"Komi"},{code:"kg",name:"Kongo"},{code:"ko",name:"Korean"},{code:"ku",name:"Kurdish"},{code:"kj",name:"Kwanyama, Kuanyama"},{code:"la",name:"Latin"},{code:"lb",name:"Luxembourgish, Letzeburgesch"},{code:"lg",name:"Luganda"},{code:"li",name:"Limburgish, Limburgan, Limburger"},{code:"ln",name:"Lingala"},{code:"lo",name:"Lao"},{code:"lt",name:"Lithuanian"},{code:"lu",name:"Luba-Katanga"},{code:"lv",name:"Latvian"},{code:"gv",name:"Manx"},{code:"mk",name:"Macedonian"},{code:"mg",name:"Malagasy"},{code:"ms",name:"Malay"},{code:"ml",name:"Malayalam"},{code:"mt",name:"Maltese"},{code:"mi",name:"Māori"},{code:"mr",name:"Marathi (Marāṭhī)"},{code:"mh",name:"Marshallese"},{code:"mn",name:"Mongolian"},{code:"na",name:"Nauru"},{code:"nv",name:"Navajo, Navaho"},{code:"nb",name:"Norwegian Bokmål"},{code:"nd",name:"North Ndebele"},{code:"ne",name:"Nepali"},{code:"ng",name:"Ndonga"},{code:"nn",name:"Norwegian Nynorsk"},{code:"no",name:"Norwegian"},{code:"ii",name:"Nuosu"},{code:"nr",name:"South Ndebele"},{code:"oc",name:"Occitan"},{code:"oj",name:"Ojibwe, Ojibwa"},{code:"cu",name:"Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic"},{code:"om",name:"Oromo"},{code:"or",name:"Oriya"},{code:"os",name:"Ossetian, Ossetic"},{code:"pa",name:"Panjabi, Punjabi"},{code:"pi",name:"Pāli"},{code:"fa",name:"Persian"},{code:"pl",name:"Polish"},{code:"ps",name:"Pashto, Pushto"},{code:"pt",name:"Portuguese"},{code:"qu",name:"Quechua"},{code:"rm",name:"Romansh"},{code:"rn",name:"Kirundi"},{code:"ro",name:"Romanian, Moldavian, Moldovan"},{code:"ru",name:"Russian"},{code:"sa",name:"Sanskrit (Saṁskṛta)"},{code:"sc",name:"Sardinian"},{code:"sd",name:"Sindhi"},{code:"se",name:"Northern Sami"},{code:"sm",name:"Samoan"},{code:"sg",name:"Sango"},{code:"sr",name:"Serbian"},{code:"gd",name:"Scottish Gaelic; Gaelic"},{code:"sn",name:"Shona"},{code:"si",name:"Sinhala, Sinhalese"},{code:"sk",name:"Slovak"},{code:"sl",name:"Slovene"},{code:"so",name:"Somali"},{code:"st",name:"Southern Sotho"},{code:"es",name:"Spanish; Castilian"},{code:"su",name:"Sundanese"},{code:"sw",name:"Swahili"},{code:"ss",name:"Swati"},{code:"sv",name:"Swedish"},{code:"ta",name:"Tamil"},{code:"te",name:"Telugu"},{code:"tg",name:"Tajik"},{code:"th",name:"Thai"},{code:"ti",name:"Tigrinya"},{code:"bo",name:"Tibetan Standard, Tibetan, Central"},{code:"tk",name:"Turkmen"},{code:"tl",name:"Tagalog"},{code:"tn",name:"Tswana"},{code:"to",name:"Tonga (Tonga Islands)"},{code:"tr",name:"Turkish"},{code:"ts",name:"Tsonga"},{code:"tt",name:"Tatar"},{code:"tw",name:"Twi"},{code:"ty",name:"Tahitian"},{code:"ug",name:"Uighur, Uyghur"},{code:"uk",name:"Ukrainian"},{code:"ur",name:"Urdu"},{code:"uz",name:"Uzbek"},{code:"ve",name:"Venda"},{code:"vi",name:"Vietnamese"},{code:"vo",name:"Volapük"},{code:"wa",name:"Walloon"},{code:"cy",name:"Welsh"},{code:"wo",name:"Wolof"},{code:"fy",name:"Western Frisian"},{code:"xh",name:"Xhosa"},{code:"yi",name:"Yiddish"},{code:"yo",name:"Yoruba"},{code:"za",name:"Zhuang, Chuang"}].map((e=>({formatted:e.name,code:e.code})));var bt;function yt(e,t,n){return t||n?a(`\n    @media screen ${$t({lower:t,upper:n})} {\n      ${e}\n    }\n  `):c`
      @media screen {
        ${e}
      }
    `}function vt(e){const t=bt.smallUpper;return a(`\n    @media screen ${$t({upper:t})} {\n      ${e}\n    }\n  `)}function wt(e,t="both"){const n="no-lower"!==t?bt.mediumLower:void 0,i="no-upper"!==t?bt.mediumUpper:void 0;return a(`\n    @media screen ${$t({lower:n,upper:i})} {\n      ${e}\n    }\n  `)}function xt(e,t="both"){const n="no-lower"!==t?bt.largeLower:void 0,i="no-upper"!==t?bt.largeUpper:void 0;return a(`\n    @media screen ${$t({lower:n,upper:i})} {\n      ${e}\n    }\n  `)}function _t(e,t="both"){const n="no-lower"!==t?bt.xLargeLower:void 0,i="no-upper"!==t?bt.xLargeUpper:void 0;return a(`\n    @media screen ${$t({lower:n,upper:i})} {\n      ${e}\n    }\n  `)}function kt(e,t="both"){const n="no-lower"!==t?bt.xxLargeLower:void 0,i="no-upper"!==t?bt.xxLargeUpper:void 0;return a(`\n    @media screen ${$t({lower:n,upper:i})} {\n      ${e}\n    }\n  `)}function St(e){const t=bt.xxxLargeLower;return a(`\n    @media screen ${$t({lower:t})} {\n      ${e}\n    }\n  `)}function $t({lower:e,upper:t}){const n=[];return e&&n.push(`(min-width: ${e}px)`),t&&n.push(`(max-width: ${t}px)`),"and "+n.join(" and ")}function Pt(e,t){let n;try{t&&(n=new URL(t))}catch(e){e instanceof TypeError||console.error(e)}if(!n)try{e&&t&&(n=new URL(t,e))}catch(e){console.error(e)}return!n&&e?new URL(e):n}function At(e,t){try{return new URL(e,t),null}catch(e){return`${e}`}}function Ct(e){return!!new RegExp("^((https?:)?\\/\\/)?(?:\\S+(?::\\S*)?@)?(([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\\\#[-a-z\\\\d_]*)?","i").test(e)}!function(e){e[e.smallUpper=479]="smallUpper",e[e.mediumLower=480]="mediumLower",e[e.mediumUpper=639]="mediumUpper",e[e.largeLower=640]="largeLower",e[e.largeUpper=1023]="largeUpper",e[e.xLargeLower=1024]="xLargeLower",e[e.xLargeUpper=1365]="xLargeUpper",e[e.xxLargeLower=1366]="xxLargeLower",e[e.xxLargeUpper=1919]="xxLargeUpper",e[e.xxxLargeLower=1920]="xxxLargeLower"}(bt||(bt={}));const Et={isProduction:!1,manifestFinderUrl:"",manifestCreatorUrl:"",serviceWorkerUrl:"",api:"",windowsPackageGeneratorUrl:"",androidPackageGeneratorUrl:"",iosPackageGeneratorUrl:"",oculusPackageGeneratorUrl:"",imageGeneratorUrl:"",safeUrlFetcher:"",webPackageGeneratorUrl:"",webPackageGeneratorFormUrl:"",ratingUrl:"",zipCreatorUrl:""};function Tt(e,t,n){if(Et.isProduction){let i="pwa-builder";JSON.parse(sessionStorage.getItem("demoURL"))&&(i="demo-process");let o=window.location.pathname.slice(1);0==o.length&&(o="home"),Ut(i,o+"."+e,t,n)}}function Ut(t,n,i,o){Et.isProduction&&e.recordProcessStep(t,n,i,o)}Et.isProduction=!0,Et.manifestFinderUrl="https://pwabuilder-manifest-finder.azurewebsites.net/api/findmanifest",Et.manifestCreatorUrl="https://pwabuilder-manifest-creator.azurewebsites.net/api/create",Et.serviceWorkerUrl="https://pwabuilder-serviceworker-finder.centralus.cloudapp.azure.com",Et.api="https://pwabuilder-tests.azurewebsites.net/api",Et.windowsPackageGeneratorUrl="https://pwabuilder-winserver.centralus.cloudapp.azure.com/msix/generatezip",Et.androidPackageGeneratorUrl="https://pwabuilder-cloudapk.azurewebsites.net",Et.iosPackageGeneratorUrl="https://pwabuilder-ios.azurewebsites.net/packages/create",Et.oculusPackageGeneratorUrl="https://pwabuilder-oculus-linux-docker-app.azurewebsites.net/packages/create",Et.imageGeneratorUrl="https://appimagegenerator-prod.azurewebsites.net/api/image",Et.safeUrlFetcher="https://pwabuilder-safe-url.azurewebsites.net/api/getsafeurl",Et.webPackageGeneratorUrl="https://pwabuilder-web-platform.azurewebsites.net/",Et.webPackageGeneratorFormUrl="https://pwabuilder-web-platform.azurewebsites.net/form",Et.ratingUrl="https://pwabuilder-url-logger-api.azurewebsites.net/api/analyses/getaveragescores",Et.zipCreatorUrl="https://azure-express-zip-creator.azurewebsites.net/api";let Nt=class extends Q{constructor(){super(),this.heading="PWABuilder"}static get styles(){return c`
      :host {
        --header-background: transparent;
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
      }

      header img {
        cursor: pointer;
      }

      header h1 {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 20px;
        font-weight: bold;
      }

      nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 8em;

        font-size: 18px;
      }

      fast-anchor:focus {
        outline: solid;
        outline-width: 2px;
      }

      nav fast-anchor::part(control) {
        color: var(--font-color);
        text-decoration: none;
        border-bottom: none;
        font-weight: var(--font-bold);
      }

      .nav_link span {
        display: inline-block;
        height: 18px;
        border-bottom: 1px solid transparent;
      }
    
      .nav_link:hover span{
        border-color: var(--font-color);
      }

      nav ion-icon {
        font-size: 2em;
      }

      #desktop-nav {
        display: flex;
      }

      @media (prefers-color-scheme: light) {
        header {
          color: black;
        }
      }

      ${vt(c`

      `)}

      ${wt(c`
        header nav {
          display: initial;
        }

        #desktop-nav {
          display: flex;
        }

      `)}
      

      ${xt(c`
        #desktop-nav {
          display: flex;
        }

      `)}

      ${_t(c`
        header {
          padding-left: 1em;
          padding-right: 1em;
        }
      `)}

      ${kt(c`
        header {
          padding-left: 3em;
          padding-right: 3em;
        }
      `)}

      ${St(c`
        header {
          background-color: white;
        }
      `)}
    `}firstUpdated(){var e,t;null===(t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#header-icon"))||void 0===t||t.addEventListener("keydown",(e=>{"Enter"===e.key&&this.goHome()}))}goHome(){Tt(".header.logo_clicked",t.ProcessCheckpoint),rt.go("/")}render(){return z`
      <header part="header">
        <img @click="${this.goHome}" tabindex="0" id="header-icon" src="/assets/images/header_logo.svg"
          alt="PWABuilder logo" />
      
        <nav id="desktop-nav">
          <fast-anchor
            class="nav_link"
            appearance="hypertext"
            href="https://docs.pwabuilder.com"
            target="__blank"
            aria-label="PWABuilder Docs, will open in separate tab"
            rel="noopener"
            @click=${()=>Tt(".header.docs_clicked",t.ProcessCheckpoint)}
            ><span>Docs</span></fast-anchor
          >

          <fast-anchor
          class="nav_link"
            appearance="hypertext"
            href="https://blog.pwabuilder.com"
            target="__blank"
            aria-label="PWABuilder Blog, will open in separate tab"
            rel="noopener"
            @click=${()=>Tt(".header.blog_clicked",t.ProcessCheckpoint)}
            ><span>Blog</span></fast-anchor
          >

          <fast-anchor
            appearance="hypertext"
            href="https://github.com/pwa-builder/PWABuilder"
            target="__blank"
            aria-label="Github repo, will open in separate tab"
            rel="noopener"
            @click=${()=>Tt(".header.github_clicked",t.ProcessCheckpoint)}
          >
            <ion-icon role="presentation" aria-hidden="true" tab-index="-1" name="logo-github" title="View source on GitHub"></ion-icon>
          </fast-anchor>
        </nav>
      </header>
    `}};n([ie({type:String})],Nt.prototype,"heading",void 0),Nt=n([te("app-header")],Nt);let Rt=class extends Q{static get styles(){return c`
      :host {
        background: url(/assets/new/HeroBackground1920.jpg);
        background-position: top right;
        background-size: cover;
        background-repeat: no-repeat;

        height: 16em;
        display: flex;
        align-items: center;
      }

      :host(.reportCard) {
        background: url(/assets/images/report_card.webp) top right / cover
          no-repeat;
      }

      :host(.reportCard.mani) {
        background: url(/assets/images/report_card_manifest.webp) top right /
          cover no-repeat;
      }

      :host(.reportCard.sw) {
        background: url(/assets/images/report_card_sw.webp) top right / cover
          no-repeat;
      }

      :host(.basePackage) {
        background: url(/assets/images/base_package.webp) top right / cover
          no-repeat;
      }

      :host(.publish) {
        background: url(/assets/images/Publish_back1920.jpg) top right / cover no-repeat;
      }

      :host(.congrats) {
        background: url(/assets/images/congrats.webp) top right / cover
          no-repeat;
      }

      :host(.home) {
        height: initial;
        background-color: white;
      }

      :host(.home) #circles-box {
        width: 100%;
      }

      #content-side {
        max-width: 30em;
      }

      #main-container {
        display: flex;
        align-items: center;
        padding-bottom: 91px;
        padding-left: 2em;
      }

      :host ::slotted(h1) {
        margin-bottom: 0;
        line-height: 40px;

        max-width: 474px;
      }

      ${vt(c`
        :host(.home) {
          background-position: top center;
          background-repeat: no-repeat;
          background-image: url(/assets/images/home_mobile.webp);
          background-size: cover;

          height: 43em;
        }

        :host(.home) #circles-box {
          height: 44em;
        }

        :host(.home) #main-container {
          height: 51em;
          display: flex;
          justify-content: center;
          align-items: center;
          max-width: initial;
        }

        :host(.reportCard) {
          background-repeat: no-repeat;
          background-image: url(/assets/images/report_card_mobile.webp);
          background-size: cover;

          background-position: 0em -2.5em;
          height: 10em;
        }

        :host(.congrats) {
          background-repeat: no-repeat;
          background-image: url(/assets/images/congrats_mobile.webp);
          background-size: cover;

          background-position: 0em -2.5em;
          height: 10em;
        }

        :host(.basePackage) {
          background-repeat: no-repeat;
          background-image: url(/assets/images/base_package_mobile.webp);
          background-size: cover;

          background-position: 0em -2.5em;
          height: 10em;
        }

        :host(.publish) {
          background-repeat: no-repeat;
          background-image: url(/assets/images/publish_mobile.webp);
          background-size: cover;

          background-position: 0em -2.5em;
          height: 10em;
        }

        :host(.reportCard) #circles-box,
        :host(.publish) #circles-box,
        :host(.congrats) #circles-box,
        :host(.basePackage) #circles-box {
          height: 34em;
        }

        :host(.reportCard) #hero-container,
        :host(.publish) #hero-container,
        :host(.congrats) #hero-container,
        :host(.basePackage) #hero-container {
          text-align: initial;
        }

        img {
          margin-left: 0;
          width: 226px;
          height: 226px;
          margin-top: 16px;
        }

        #content-side {
          padding: 1em;
        }

        #main-container {
          flex-direction: column-reverse;
          padding-left: 0;

          height: 23em;
          max-width: 16em;
        }

        #circles-box {
          height: 46em;
        }

        #hero-container {
          text-align: center;
        }

        ::slotted(ul) {
          grid-gap: 10px;
        }

        :host(.publish) {
          background-repeat: no-repeat;
          background-image: url(/assets/images/publish_mobile.webp);
          background-size: cover;

          background-position: 0em -2.5em;
          height: 10em;
        }

        :host(.publish) #circles-box {
          height: fit-content;
        }

        :host(.publish) #main-container {
          margin: 0;
          padding: 0;
          height: fit-content;
        }
        #content-side {
          width: 10em;
        }
      `)}

      ${wt(c`
        :host(.home) {
          background-position: top center;
          background-repeat: no-repeat;
          background-image: url(/assets/images/home_mobile.webp);
          background-size: cover;

          height: 40em;
        }

        :host(.home) #circles-box {
          height: 40em;
        }

        :host(.reportCard) {
          background-repeat: no-repeat;
          background-image: url(/assets/images/report_card_mobile.webp);
          background-size: cover;

          background-position: 0em -2.5em;
          height: 10em;
        }

        :host(.reportCard) #circles-box,
        :host(.congrats) #circles-box,
        :host(.basePackage) #circles-box {
          height: 34em;
        }

        :host(.publish) {
          background-repeat: no-repeat;
          background-image: url(/assets/images/publish_mobile.webp);
          background-size: cover;

          background-position: 0em -2.5em;
          height: 10em;
        }

        :host(.publish) #circles-box {
          height: fit-content;
        }

        :host(.publish) #main-container {
          margin: 0;
          padding: 0;
        }


        :host(.congrats) {
          background-repeat: no-repeat;
          background-image: url(/assets/images/congrats_mobile.webp);
          background-size: cover;

          background-position: 0em -2.5em;
          height: 10em;
        }

        :host(.basePackage) {
          background-repeat: no-repeat;
          background-image: url(/assets/images/base_package_mobile.webp);
          background-size: cover;

          background-position: 0em -2.5em;
          height: 10em;
        }

        img {
          margin-left: 0;
          width: 100%;
          height: 226px;
          margin-top: 16px;
        }

        #content-side {
          padding: 1em;
        }

        :host(.reportCard) #hero-container,
        :host(.publish) #hero-container,
        :host(.congrats) #hero-container,
        :host(.basePackage) #hero-container {
          text-align: initial;
        }

        #hero-container {
          text-align: center;
        }

        #main-container {
          padding-top: initial;
          margin-top: 14em;

          flex-direction: column-reverse;
          padding-left: 0;
        }

        #circles-box {
          height: 30em;
        }
      `)}

      ${xt(c`
        ::slotted(ul) {
          grid-gap: 10px;
        }

        img {
          height: 282px;
          width: 268px;
        }

        :host(.home) {
          background-repeat: no-repeat;
          background-image: url(/assets/new/HeroBackground1024.jpg);
          background-size: cover;
        }

        :host(.reportCard) {
          background: url(/assets/images/report_card.webp) top right / cover
            no-repeat;

          background-position: -1em;
        }

        :host(.reportCard.mani) {
          background-position: -1em;
        }

        :host(.reportCard.sw) {
          background-position: -1em;
        }

        :host(.basePackage) {
          background-position: -1em;
        }

        :host(.publish) {
          background-image: url(/assets/images/Publish_back1024.jpg);
          background-position: 0em;
        }

        :host(.congrats) {
          background-position: 0em;
        }
      `)}

      ${_t(c`
        img {
          height: 100%;
          width: initial;
        }

        :host(.home) {
          background-position: -21em center;
          background-repeat: no-repeat;
          background-image: url(/assets/new/HeroBackground1920.jpg);
          background-size: cover;
        }

        :host(.home) #content-side {
          max-width: 21em;
        }

        :host(.reportCard) {
          background: url(/assets/images/report_card.webp) top right / cover
            no-repeat;

          background-position: -1em;
        }

        :host(.reportCard.mani) {
          background-position: -1em;
        }

        :host(.reportCard.sw) {
          background-position: -1em;
        }

        :host(.basePackage) {
          background-position: -1em;
        }

        :host(.publish) {
          background-image: url(/assets/images/Publish_back1366.jpg);
          background-position: 0em;
        }

        :host(.congrats) {
          background-position: 0em;
        }
      `)}

      ${kt(c`
        #content-side {
          max-width: 23em;
        }

        :host {
          background-position: -8em center;
          background-repeat: no-repeat;
          background-size: cover;
        }

        :host(.reportCard) {
          background: url(/assets/images/report_card.webp) top right / cover
            no-repeat;
        }

        :host(.basePackage) {
          background-position: 0em;
        }

        :host(.publish) {
          background-position: 2em;
        }

        :host(.congrats) {
          background-position: 0em;
        }
      `)}
    `}constructor(){super()}render(){return z`
      <div id="circles-box">
        <div id="background-filter-box">

          <div part="main-container" id="main-container">
            <section id="content-side">
              <div id="hero-container">
                <slot name="hero-container"></slot>
              </div>

              <slot part="grid-container" name="grid-container"></slot>

              <slot name="input-container"></slot>
            </section>

            <section>
              <!--<slot name="picture-container">
                <picture>
                  <source
                    srcset="/assets/images/pwab3d.png"
                    media="(max-width: ${bt.mediumLower}px)"
                  />
                  <source
                    srcset="/assets/images/full_header_logo.png"
                    media="(max-width: ${bt.mediumUpper}px)"
                  />
                  <img
                    src="/assets/images/pwab3d.png"
                    alt="3d version of the PWABuilder logo"
                  />
                </picture>
              </slot>-->
            </section>
          </div>
        </div>
      </div>
    `}};Rt=n([te("content-header")],Rt);const Ot=c`
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
`,zt=c`
  @media screen and (min-width: 480px) and (max-width: 639px) {
    fast-anchor.button {
      font-size: 22px;
      height: 64px;
    }
  }
`,Lt=c`
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
`,Mt=c`
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
`,jt=c`
  fast-checkbox {
    --neutral-foreground-rest: var(--font-color);
    --accent-fill-rest: var(--link-color);
    --accent-fill-active: var(--link-color);
    --accent-fill-hover: var(--link-color);
  }
`,It=c`
  fast-radio {
    --neutral-foreground-rest: var(--font-color);
    --neutral-fill-input-rest: var(--primary-background-color);
    --accent-foreground-cut-rest: var(--primary-backgroud-color);
    --accent-fill-rest: var(--link-color);
    --accent-fill-active: var(--link-color);
    --accent-fill-hover: var(--link-color);
  }
`,Bt=c`
  fast-menu {
  }

  fast-menu-item {
    --neutral-fill-input-rest: var(--primary-background-color);
    --accent-foreground-cut-rest: var(--primary-backgroud-color);
    --accent-fill-rest: var(--link-color);
    --accent-fill-active: var(--link-color);
    --accent-fill-hover: var(--link-color);
  }
`;let Wt=class extends Q{constructor(){super(),this.type="",this.colorMode="primary",this.appearance="neutral",this.disabled=!1}static get styles(){return[c`
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
      `,Ot,c`
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
      `,wt(c`
          fast-button.navigation {
            --button-width: 100px;
            --button-height: 40px;
            line-height: 28px;
            font-size: 16px;
          }
        `)]}render(){return z`
      <fast-button
        part="underlying-button"
        class="${mt({[this.className]:this.className,link:"lightweight"===this.appearance,secondary:"outline"===this.appearance})}"
        .appearance="${this.appearance}"
        .type="${this.type}"
        .color="${this.colorMode}"
        ?disabled=${this.disabled}
      >
        <slot></slot>
      </fast-button>
    `}};n([ie({type:String})],Wt.prototype,"type",void 0),n([ie({type:String})],Wt.prototype,"colorMode",void 0),n([ie({type:String})],Wt.prototype,"appearance",void 0),n([ie({type:Boolean})],Wt.prototype,"disabled",void 0),Wt=n([te("app-button")],Wt);let Dt=class extends Q{constructor(){super(),this.type="submit",this.colorMode="primary",this.appearance="neutral",this.loading=!1,this.disabled=!1}static get styles(){return[c`
        :host {
          --loader-size: 1.8em;
        }
        fast-progress-ring {
          height: var(--loader-size);
          width: var(--loader-size);
          --accent-foreground-rest: var(--secondary-color);
        }
        app-button.secondary fast-progress-ring {
          --accent-foreground-rest: var(--primary-color);
          --neutral-fill-rest: white;
          --neutral-fill-active: white;
          --neutral-fill-hover: white;
        }
      `]}render(){return z`
      <app-button
        class=${this.className}
        part="underlying-button"
        .appearance=${this.appearance}
        .type=${this.type}
        .colorMode=${this.colorMode}
        ?disabled=${this.disabled||this.loading}
      >
        ${this.loading?z`<fast-progress-ring></fast-progress-ring>`:z`<slot></slot>`}
      </app-button>
    `}};var Ht;n([ie({type:String})],Dt.prototype,"type",void 0),n([ie({type:String})],Dt.prototype,"colorMode",void 0),n([ie({type:String})],Dt.prototype,"appearance",void 0),n([ie({type:Boolean})],Dt.prototype,"loading",void 0),n([ie({type:Boolean})],Dt.prototype,"disabled",void 0),Dt=n([te("loading-button")],Dt),function(e){e.escape="Escape",e.enter="Enter",e.tag="Tab"}(Ht||(Ht={}));let Ft=class extends Q{constructor(){super(),this.openMenu=!1,this.menuItems=[],this.selectedIndex=0}static get styles(){return[c`
        ion-icon {
          vertical-align: middle;
        }
      `,Bt,c`
        .dropdown-menu,
        fast-button {
          width: 100%;
        }

        fast-menu {
          margin-top: 4px;
        }

        .closed {
          display: none;
        }

        .dropdown-component {
          z-index: 20;

          max-height: 15em;
          overflow-x: hidden;
        }

        fast-button:hover {
          background: none;
        }

        fast-button::part(control) {
          color: var(--secondary-font-color);
          background: rgba(128, 128, 128, 0.05);
          border-color: var(--secondary-font-color);
          width: 100%;
          justify-content: normal;
        }

        fast-button::part(content) {
          flex-grow: 2;
          text-align: left;
        }

        fast-menu {
          position: absolute;
          padding: 0;
          background-color: var(--primary-background-color);
          color: var(--font-color);
          width: 100%;
          overflow-y: auto;
        }

        fast-menu-item {
          color: var(--font-color);
          margin: 0;
        }

        fast-menu-item:active,
        fast-menu-item:focus-visible,
        fast-menu-item:hover {
          background-color: var(--link-color);
          font-weight: 500;
          color: var(--primary-background-color);
        }

        fast-menu-item:active,
        fast-menu-item:focus-visible,
        fast-menu-item:hover,
        fast-menu-item.selected::part(content) {
          font-weight: var(--font-bold);
        }
      `]}get value(){return this.menuItems[this.selectedIndex]}render(){return z`
      <div
        class="dropdown-menu"
        part="layout"
        @keyup=${this.keyupHandler}
        @focusout=${this.closeMenu}
      >
        <fast-button
          class="menu-button ${"dropdown-component"}"
          appearance="outline"
          @click=${this.clickMenuButton}
        >
          <span part="menu-text">${this.menuButtonText()}</span>
          <span part="end" slot="end">
            ${this.openMenu?z`<ion-icon name="chevron-down-outline"></ion-icon>`:z`<ion-icon name="chevron-up-outline"></ion-icon>`}
          </span>
        </fast-button>

        <fast-menu
          class="${mt({menu:!0,"dropdown-component":!0,closed:!this.openMenu})}"
        >
          ${this.menuItems.map(((e,t)=>{const n=t===this.selectedIndex;return z` <fast-menu-item
              part="menu-item"
              class="${mt({"dropdown-component":!0,selected:n})}"
              @click=${()=>this.clickMenuItem(t)}
              data-index=${t}
              tabindex="0"
            >
              ${n?z`<span slot="start">
                    <ion-icon name="checkmark-outline"></ion-icon>
                  </span> `:void 0}
              <span>${e.formatted||e}</span>
            </fast-menu-item>`}))}
        </fast-menu>
      </div>
    `}menuButtonText(){var e;return this.staticButtonText?this.staticButtonText:(null===(e=this.menuItems[this.selectedIndex])||void 0===e?void 0:e.formatted)?this.menuItems[this.selectedIndex].formatted:this.menuItems[this.selectedIndex]}clickMenuButton(){this.openMenu=!this.openMenu}keyupHandler(e){if(e.key===Ht.escape)this.openMenu=!1;else if(e.key===Ht.enter){const t=e.composedPath()[0];"FAST-MENU-ITEM"===t.tagName&&(this.selectedIndex=Number(t.dataset.index),this.openMenu=!1)}}closeMenu(e){var t;const n=e.relatedTarget;-1===(null===(t=null==n?void 0:n.className)||void 0===t?void 0:t.indexOf("dropdown-component"))&&(this.openMenu=!1)}clickMenuItem(e){this.selectedIndex=e,this.openMenu=!1}};var Vt,qt,Gt,Jt;n([ie({type:Boolean})],Ft.prototype,"openMenu",void 0),n([ie({type:Array})],Ft.prototype,"menuItems",void 0),n([ie({type:Number})],Ft.prototype,"selectedIndex",void 0),n([ie({attribute:"static-text",type:String})],Ft.prototype,"staticButtonText",void 0),Ft=n([te("app-dropdown")],Ft),function(e){e.manifest="PWABuilderManifest",e.currentUrl="current_url"}(Vt||(Vt={})),function(e){e.manifestUpdate="MANIFEST_UPDATE"}(qt||(qt={})),function(e){e.DONE="done",e.ACTIVE="active",e.PENDING="pending"}(Gt||(Gt={})),function(e){e.TEST="Test",e.REVIEW="Review",e.PUBLISH="Package",e.COMPLETE="Complete"}(Jt||(Jt={}));const Kt=/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w\-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;function Yt(e,t,n,i,o){if(!e||0===e.length)return null;const r=function(e){if(e[0]instanceof Zt)return!0;return!1}(e)?e:e.map((e=>new Zt(e))),s=r.find((e=>e.isExactMatch(t,n,i,o)));if(s)return s.getIcon();var a=r.find((e=>e.isSuitableIcon(t,n,i,o)));return(null==a?void 0:a.getIcon())||null}function Xt(e){const t=(e||[]).map((e=>new Zt(e)));return Yt(t,"any",512,512,"image/png")||Yt(t,"maskable",512,512,"image/png")||Yt(t,"any",192,192,"image/png")||Yt(t,"maskable",192,192,"image/png")||Yt(t,"any",512,512,"image/jpeg")||Yt(t,"maskable",512,512,"image/jpeg")||Yt(t,"any",192,192,"image/jpeg")||Yt(t,"maskable",192,192,"image/jpeg")||Yt(t,"any",512,512,void 0)||Yt(t,"maskable",512,512,void 0)||Yt(t,"any",192,192,void 0)||Yt(t,"maskable",192,192,void 0)||Yt(t,"any",0,0,"image/png")||Yt(t,"maskable",0,0,"image/png")||Yt(t,"any",0,0,"image/jpeg")||Yt(t,"maskable",0,0,"image/jpeg")||Yt(t,"any",0,0,void 0)||Yt(t,"maskable",0,0,void 0)}class Zt{constructor(e){this.icon=e}getProbableFileExtension(){if(!this.icon.type)return this.getFileExtensionFromSrc();const e=this.getFormat();if(e)return e.exts[0];const t=this.icon.type.lastIndexOf("/");return-1!=t?this.icon.type.substring(t+1):null}isAtLeast(e,t){return this.getDimensions().some((n=>n.width>=e&&n.height>=t))}get isPng(){return this.getMimeTypeOrGuessFromSrc()===Zt.pngFormat.mime}get isJpg(){return this.getMimeTypeOrGuessFromSrc()===Zt.jpgFormat.mime}get isSquare(){return this.getDimensions().some((e=>e.width===e.height))}get isEmbedded(){return this.icon.src.includes("data:image")}hasPurpose(e){return!e||(this.icon.purpose||"any").split(" ").some((t=>t.toLowerCase()===e.toLowerCase()))}hasSize(e){return(this.icon.sizes||"0x0").split(" ").some((t=>t===e))}createIconWithoutUrlEncodedSrc(e){var t;const n=Object.assign({},this.icon);return(null===(t=n.src)||void 0===t?void 0:t.startsWith("data:image"))&&(n.src=e),n}getIcon(){return this.icon}getDimensions(){return(this.icon.sizes||"0x0").split(" ").map((e=>{const t=e.split("x");return{width:Number.parseInt(t[0]||"0",10),height:Number.parseInt(t[1]||"0",10)}}))}hasMimeType(e){return!e||this.getMimeTypeOrGuessFromSrc()===e.toLowerCase()}isExactMatch(e,t,n,i){const o=`${t}x${n}`;return this.hasPurpose(e)&&this.hasSize(o)&&!this.isEmbedded&&this.hasMimeType(i)}isSuitableIcon(e,t,n,i){if(this.isExactMatch(e,t,n,i))return!0;if(!e){if(this.isExactMatch(null,t,n,i))return!0}const o=!(t===n)||this.isSquare;return!!(this.hasPurpose(e)&&this.isAtLeast(t,n)&&!this.isEmbedded&&this.hasMimeType(i)&&o)}async resolvesSuccessfully(e){return this.icon.src?new Promise((t=>{const n=new Image,i=new URL(this.icon.src,e);n.src=`${Et.safeUrlFetcher}?checkExistsOnly=false&url=${encodeURIComponent(i.toString())}`,n.onload=()=>{n.complete&&n.naturalHeight>0?t(!0):t(!1)},n.onerror=()=>{t(!1)}})):Promise.resolve(!1)}getFileExtensionFromSrc(){const e=this.getFormat();return(null==e?void 0:e.exts[0])||null}getFormat(){var e;const t=Zt.formats.find((e=>e.mime===this.icon.type));if(t)return t;const n=(null===(e=this.icon.src)||void 0===e?void 0:e.toLowerCase())||"",i=Zt.formats.find((e=>e.exts.some((e=>n.endsWith(`.${e}`)))));return null!=i?i:null}getMimeTypeOrGuessFromSrc(){if(this.icon.type)return this.icon.type;const e=this.getFormat();return(null==e?void 0:e.mime)||null}}function Qt(e){const t=[],n=e.length;for(let i=0;i<n;i++){const n=e[i];t[i]=!!n&&function(e,t){return t.test(e)}(n,Kt)}return t}Zt.pngFormat={exts:["png"],mime:"image/png"},Zt.jpgFormat={exts:["jpg","jpeg"],mime:"image/jpeg"},Zt.formats=[Zt.pngFormat,Zt.jpgFormat,{exts:["webp"],mime:"image/webp"},{exts:["gif"],mime:"image/gif"},{exts:["ico"],mime:"image/x-icon"},{exts:["tiff"],mime:"image/tiff"},{exts:["bmp"],mime:"image/bmp"},{exts:["svg"],mime:"image/svg+xml"}];const en=[{infoString:"Web Manifest Properly Attached",result:!1,category:"required"},{infoString:"Lists icons for add to home screen",result:!1,category:"required"},{infoString:"Contains name property",result:!1,category:"required"},{infoString:"Contains short_name property",result:!1,category:"required"},{infoString:"Designates a start_url",result:!1,category:"required"},{infoString:"Specifies a display mode",result:!1,category:"recommended"},{infoString:"Has a background color",result:!1,category:"recommended"},{infoString:"Has a theme color",result:!1,category:"recommended"},{infoString:"Specifies an orientation mode",result:!1,category:"recommended"},{infoString:"Contains screenshots for app store listings",result:!1,category:"recommended"},{infoString:"Has a square PNG icon 512x512 or larger",result:!1,category:"required"},{infoString:"Has a maskable PNG icon",result:!1,category:"recommended"},{infoString:"Lists shortcuts for quick access",result:!1,category:"recommended"},{infoString:"Contains categories to classify the app",result:!1,category:"recommended"},{infoString:"Icons specify their type",result:!1,category:"recommended"},{infoString:"Icons specify their size",result:!1,category:"recommended"},{infoString:"Contains an IARC ID",result:!1,category:"optional"},{infoString:"Specifies related_application",result:!1,category:"optional"}];async function tn(e){if(!0===e.isGenerated)return en;{const t=Xt(e.manifest.icons),n=t?new Zt(t):null,i=!!n&&await n.resolvesSuccessfully(e.manifestUrl);return[{infoString:"Web Manifest Properly Attached",result:!0,category:"required"},{infoString:"Lists icons for add to home screen",result:!!(e.manifest.icons&&e.manifest.icons.length>0),category:"required"},{infoString:"Contains name property",result:!!(e.manifest.name&&e.manifest.name.length>1),category:"required"},{infoString:"Contains short_name property",result:!!(e.manifest.short_name&&e.manifest.short_name.length>1),category:"required"},{infoString:"Designates a start_url",result:!!(e.manifest.start_url&&e.manifest.start_url.length>0),category:"required"},{infoString:"Specifies a display mode",result:!(!e.manifest.display||!["fullscreen","standalone","minimal-ui","browser"].includes(e.manifest.display)),category:"recommended"},{infoString:"Has a background color",result:!!e.manifest.background_color,category:"recommended"},{infoString:"Has a theme color",result:!!e.manifest.theme_color,category:"recommended"},{infoString:"Specifies an orientation mode",result:!(!e.manifest.orientation||!nn(e.manifest.orientation)),category:"recommended"},{infoString:"Contains screenshots for app store listings",result:!!(e.manifest.screenshots&&e.manifest.screenshots.length>0),category:"recommended"},{infoString:"Has a square PNG icon 512x512 or larger",result:!!n&&n.isPng&&n.isAtLeast(512,512),category:"required"},{infoString:"512x512 or larger icon can be loaded succesfully from the network",result:i,category:"required"},{infoString:"Has a maskable PNG icon 512x512 or larger",result:!!Yt(e.manifest.icons,"maskable",512,512,"image/png"),category:"recommended"},{infoString:"Lists shortcuts for quick access",result:!!(e.manifest.shortcuts&&e.manifest.shortcuts.length>0),category:"recommended"},{infoString:rn(e.manifest.categories),result:!!(e.manifest.categories&&e.manifest.categories.length>0&&on(e.manifest.categories)),category:"recommended"},{infoString:"Icons specify their type",result:!!e.manifest.icons&&e.manifest.icons.every((e=>!!e.type)),category:"recommended"},{infoString:"Icons specify their size",result:!!e.manifest.icons&&e.manifest.icons.every((e=>!!e.sizes)),category:"recommended"},{infoString:"Contains an IARC ID",result:!!e.manifest.iarc_rating_id,category:"optional"},{infoString:"Specifies related_applications",result:!!(e.manifest.related_applications&&e.manifest.related_applications.length>0),category:"optional"}]}}function nn(e){return["any","natural","landscape","landscape-primary","landscape-secondary","portrait","portrait-primary","portrait-secondary"].includes(e)}function on(e){const t=["books","business","education","entertainment","finance","fitness","food","games","government","health","kids","lifestyle","magazines","medical","music","navigation","news","personalization","photo","politics","productivity","security","shopping","social","sports","travel","utilities","weather"];return e.some((e=>t.includes(e)))}function rn(e){return e&&e.length>0&&!on(e)?"Contains non-standard categories":"Contains categories to classify the app"}var sn=Object.defineProperty,an=(e,t)=>()=>(e&&(t=e(e=0)),t),cn=(e,t)=>{for(var n in(e=>{sn(e,"__esModule",{value:!0})})(e),t)sn(e,n,{get:t[n],enumerable:!0})},ln={};cn(ln,{default:()=>dn});var dn,pn=an((()=>{dn=async(e=[{}])=>(Array.isArray(e)||(e=[e]),new Promise(((t,n)=>{let i=document.createElement("input");i.type="file";let o=[...e.map((e=>e.mimeTypes||[])).join(),e.map((e=>e.extensions||[])).join()].join();i.multiple=e[0].multiple||!1,i.accept=o||"";let r=e=>{"function"==typeof s&&s(),t(e)},s=e[0].legacySetup&&e[0].legacySetup(r,(()=>s(n)),i);i.addEventListener("change",(()=>{r(i.multiple?Array.from(i.files):i.files[0])})),i.click()})))})),hn={};cn(hn,{default:()=>mn});var un,mn,gn=an((()=>{un=async e=>{let t=await e.getFile();return t.handle=e,t},mn=async(e=[{}])=>{Array.isArray(e)||(e=[e]);let t=[];e.forEach(((e,n)=>{t[n]={description:e.description||"",accept:{}},e.mimeTypes?e.mimeTypes.map((i=>{t[n].accept[i]=e.extensions||[]})):t[n].accept["*/*"]=e.extensions||[]}));let n=await window.showOpenFilePicker({id:e[0].id,startIn:e[0].startIn,types:t,multiple:e[0].multiple||!1,excludeAcceptAllOption:e[0].excludeAcceptAllOption||!1}),i=await Promise.all(n.map(un));return e[0].multiple?i:i[0]}})),fn={};cn(fn,{default:()=>bn});var bn,yn=an((()=>{bn=async(e=[{}])=>(Array.isArray(e)||(e=[e]),e[0].recursive=e[0].recursive||!1,new Promise(((t,n)=>{let i=document.createElement("input");i.type="file",i.webkitdirectory=!0;let o=e=>{"function"==typeof r&&r(),t(e)},r=e[0].legacySetup&&e[0].legacySetup(o,(()=>r(n)),i);i.addEventListener("change",(()=>{let t=Array.from(i.files);e[0].recursive?e[0].recursive&&e[0].skipDirectory&&(t=t.filter((t=>t.webkitRelativePath.split("/").every((t=>!e[0].skipDirectory({name:t,kind:"directory"})))))):t=t.filter((e=>2===e.webkitRelativePath.split("/").length)),o(t)})),i.click()})))})),vn={};cn(vn,{default:()=>xn});var wn,xn,_n=an((()=>{wn=async(e,t,n=e.name,i)=>{let o=[],r=[];for await(let s of e.values()){let a=`${n}/${s.name}`;"file"===s.kind?r.push(s.getFile().then((t=>(t.directoryHandle=e,Object.defineProperty(t,"webkitRelativePath",{configurable:!0,enumerable:!0,get:()=>a}))))):"directory"===s.kind&&t&&(!i||!i(s))&&o.push(wn(s,t,a,i))}return[...(await Promise.all(o)).flat(),...await Promise.all(r)]},xn=async(e={})=>{e.recursive=e.recursive||!1;let t=await window.showDirectoryPicker({id:e.id,startIn:e.startIn});return wn(t,e.recursive,void 0,e.skipDirectory)}})),kn={};cn(kn,{default:()=>Sn});var Sn,$n=an((()=>{Sn=async(e,t={})=>{Array.isArray(t)&&(t=t[0]);let n=document.createElement("a"),i=e;"body"in e&&(i=await async function(e,t){let n=e.getReader(),i=new ReadableStream({start:e=>async function t(){return n.read().then((({done:n,value:i})=>{if(!n)return e.enqueue(i),t();e.close()}))}()}),o=new Response(i);return n.releaseLock(),new Blob([await o.blob()],{type:t})}(e.body,e.headers.get("content-type"))),n.download=t.fileName||"Untitled",n.href=URL.createObjectURL(i);let o=()=>{"function"==typeof r&&r()},r=t.legacySetup&&t.legacySetup(o,(()=>r(reject)),n);return n.addEventListener("click",(()=>{setTimeout((()=>URL.revokeObjectURL(n.href)),3e4),o()})),n.click(),null}})),Pn={};cn(Pn,{default:()=>An});var An,Cn=an((()=>{An=async(e,t=[{}],n=null,i=!1)=>{Array.isArray(t)||(t=[t]),t[0].fileName=t[0].fileName||"Untitled";let o=[];if(t.forEach(((t,n)=>{o[n]={description:t.description||"",accept:{}},t.mimeTypes?(0===n&&(e.type?t.mimeTypes.push(e.type):e.headers&&e.headers.get("content-type")&&t.mimeTypes.push(e.headers.get("content-type"))),t.mimeTypes.map((e=>{o[n].accept[e]=t.extensions||[]}))):e.type&&(o[n].accept[e.type]=t.extensions||[])})),n)try{await n.getFile()}catch(e){if(n=null,i)throw e}let r=n||await window.showSaveFilePicker({suggestedName:t[0].fileName,id:t[0].id,startIn:t[0].startIn,types:o,excludeAcceptAllOption:t[0].excludeAcceptAllOption||!1}),s=await r.createWritable();return"stream"in e?(await e.stream().pipeTo(s),r):"body"in e?(await e.body.pipeTo(s),r):(await s.write(blob),await s.close(),r)}})),En=(()=>{if("undefined"==typeof self)return!1;if("top"in self&&self!==top)try{top.location}catch{return!1}else if("showOpenFilePicker"in self)return"showOpenFilePicker";return!1})();En?Promise.resolve().then((()=>(gn(),hn))):Promise.resolve().then((()=>(pn(),ln))),En?Promise.resolve().then((()=>(_n(),vn))):Promise.resolve().then((()=>(yn(),fn)));var Tn=En?Promise.resolve().then((()=>(Cn(),Pn))):Promise.resolve().then((()=>($n(),kn)));async function Un(...e){return(await Tn).default(...e)}// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
const Nn="https://pwabuilder-sw-server.azurewebsites.net";let Rn,On,zn,Ln=5,Mn=0;async function jn(){try{const e=await fetch(`${Nn}/listing`,{headers:{"Content-Type":"application/json"},method:"GET"});if(!e.ok)throw new Error(`Unable to fetch service workers due to error: ${e}`);const t=await e.json();if(t){return JSON.parse(t)}}catch(e){Fn(e)}}async function In(e){try{const t=await fetch(`${Nn}/codePreview?id=${e}`,{headers:{"Content-Type":"application/json"},method:"GET"}),n=await t.json();return n&&n.serviceWorker?n.serviceWorker:void 0}catch(e){return void Fn(e)}}async function Bn(e){try{const t=await fetch(`${Nn}/download?id=${e}`,{headers:{"Content-Type":"application/zip"},method:"GET"}),n=await t.blob();await Un(n,{fileName:"service_worker.zip",extensions:[".zip"]})}catch(e){Fn(e)}}async function Wn(e){return Ln=e,Mn+=1,Ln}function Dn(){Ln=5,Mn=0}function Hn(){return Ln}function Fn(e){const t=e.response.data?e.response.data.error:e.response.data||e.response.statusText;throw new Error(t)}let Vn={progress:[{header:Jt.TEST,location:"/",done:Gt.ACTIVE,items:[{name:"Submit URL",done:Gt.PENDING},{name:"Run Tests",done:Gt.PENDING}]},{header:Jt.REVIEW,location:"/reportcard",done:Gt.PENDING,items:[{name:"Manifest",done:Gt.PENDING},{name:"Service Worker",done:Gt.PENDING},{name:"Security",done:Gt.PENDING}]},{header:Jt.PUBLISH,location:"/publish",done:Gt.PENDING,items:[{name:"Package",done:Gt.PENDING},{name:"Publish",done:Gt.PENDING}]},{header:Jt.COMPLETE,location:"/complete",done:Gt.PENDING,items:[{name:"Resources",done:Gt.PENDING}]}]};function qn(){const e=sessionStorage.getItem("current_progress");return e?JSON.parse(e):Vn}function Gn(e){Vn=e,sessionStorage.setItem("current_progress",JSON.stringify(Vn))}function Jn(e){e&&(Rn=e,sessionStorage.setItem(Vt.currentUrl,Rn))}function Kn(){const e=sessionStorage.getItem(Vt.currentUrl);if(Rn)return Rn;if(e)return e;throw new Error("No Good URL found for the current site")}function Yn(e){On=e,sessionStorage.removeItem("current_results"),sessionStorage.setItem("current_results",JSON.stringify(e))}function Xn(){if(On)return On;{const e=sessionStorage.getItem("current_results");if(e){return JSON.parse(e)}return}}async function Zn(){const e=Mn,t=Qn(),n=t.isGenerated,i=t.isEdited;if(!0===n||0!==e||!0===i)return"base";const o=await ni(t);return!1===n&&!1===i&&o.icon&&(o.name||o.shortName)&&o.startURL?"publish":"base"}function Qn(){return zn||(zn=function(){try{const e=sessionStorage.getItem(Vt.manifest);if(e)return JSON.parse(e)}catch(e){console.error("Unable to load manifest from session",e)}const e={dir:"auto",display:"fullscreen",name:"placeholder",short_name:"placeholder",start_url:void 0,scope:"/",lang:"en",description:"placeholder description",theme_color:"#000000",background_color:"#000000",icons:[],screenshots:[]};return{manifest:e,initialManifest:e,siteUrl:sessionStorage.getItem(Vt.currentUrl)||"",manifestUrl:"",isGenerated:!0,isEdited:!1}}()),zn}function ei(e){zn=e,sessionStorage.setItem(Vt.manifest,JSON.stringify(e)),Jn(e.siteUrl)}function ti(){return Qn().manifestUrl}async function ni(e){const t=await tn(e);let n=!1,i=!1,o=!1,r=!1;return t.forEach((e=>{"required"===e.category&&(e.infoString.includes("start_url")&&(n=e.result),e.infoString.includes("short_name")&&(o=e.result),e.infoString.includes("name")&&!1===e.infoString.toLowerCase().includes("short_name")&&(i=e.result),e.infoString.includes("512")&&(r=e.result))})),{startURL:n,name:i,shortName:o,icon:r}}let ii=class extends Q{constructor(){super(),this.heading="",this.open=!0}static get styles(){return c`
      :host {
        width: 85%;
        display: block;
      }

      #sidecard-container {
        border: 1px solid #ffffff;
        box-shadow: inset 0px 3.08959px 3.08959px rgb(162 244 204 / 10%);
        border-radius: 6px;
      }

      #sidecard-header {
        padding-left: 8px;
        padding-right: 6px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 6px;
        padding-bottom: 6px;
        background: #c4c4c45e;
      }

      #sidecard-header span {
        font-size: var(--font-size);
        font-weight: var(--font-bold);
      }

      #sidecard-header button {
        background: transparent;
        color: white;
        border: none;
        cursor: pointer;
      }
    `}collapse(){this.open=!this.open}render(){return z`
      <div id="sidecard-container">
        <div id="sidecard-header">
          <span>${this.heading||""}</span>

          <button @click="${()=>this.collapse()}">
            <ion-icon name="chevron-down-outline"></ion-icon>
          </button>
        </div>

        ${this.open?z`<div id="sidecard-content">
              <slot></slot>
            </div>`:null}
      </div>
    `}};n([ie()],ii.prototype,"heading",void 0),n([oe()],ii.prototype,"open",void 0),ii=n([te("sidebar-card")],ii);const oi=[{name:"PWA",url:"/assets/badges/pwa_badge.svg"},{name:"Security",url:"/assets/badges/security_badge.svg"},{name:"Service Worker",url:"/assets/badges/service_worker_badge.svg"},{name:"Manifest",url:"/assets/badges/manifest_small_badge.svg"},{name:"Store Ready",url:"/assets/badges/store_ready_badge.svg"}];let ri=[];function si(){var e,t;const n=Xn();if(ri=[],sessionStorage.removeItem("current_badges"),n){const i="boolean"==typeof n.manifest?null:n.manifest[0],o=null==i?void 0:i.result,r=null===(e=n.service_worker[0])||void 0===e?void 0:e.result,s=null===(t=n.security[0])||void 0===t?void 0:t.result,a=n.manifest.map((e=>!!e.infoString.includes("512x512")&&e.result));if(o){const e=oi.find((e=>"Manifest"===e.name));e&&ri.push(e)}if(r){const e=oi.find((e=>"Service Worker"===e.name));e&&ri.push(e)}if(s){const e=oi.find((e=>"Security"===e.name));e&&ri.push(e)}if(o&&r&&s){const e=oi.find((e=>"PWA"===e.name));e&&ri.push(e)}if(o&&r&&s&&a){const e=oi.find((e=>"Store Ready"===e.name));e&&ri.push(e)}}sessionStorage.setItem("current_badges",JSON.stringify(ri))}function ai(){const e=sessionStorage.getItem("current_badges");return ri&&ri.length>0?ri:e?JSON.parse(e):null}function ci(){return oi}function li(){const e=sessionStorage.getItem("current_badges");if(e)return JSON.parse(e);const t=ci(),n=ai(),i=[];t.forEach((e=>{i.push(e)})),null==n||n.forEach((e=>{i.push(e)}));const o=i.reduce(((e,t,n,i)=>(i.indexOf(t)==n||e.includes(t.name)||e.push(t),e)),[]);return sessionStorage.removeItem("current_badges"),sessionStorage.setItem("current_badges",JSON.stringify(o)),o}const di=new EventTarget;let pi,hi={dir:"auto",display:"fullscreen",name:"placeholder",short_name:"placeholder",start_url:void 0,scope:"/",lang:"en",description:"placeholder description",theme_color:"#000000",background_color:"#000000",icons:[],screenshots:[]};async function ui(e){const t=encodeURIComponent(e),n=`${Et.api}/WebManifest?site=${t}`,i=await fetch(n,{method:"POST"});if(!i.ok)throw console.warn("Fetching manifest via Puppeteer service failed",i.statusText),new Error(`Unable to fetch response using ${n}. Response status  ${i}`);const o=await i.json();if(!o)throw console.warn("Fetching manifest via Puppeteer failed due to no response data",i),new Error(`Unable to get JSON from ${n}`);if(!o.content||!o.content.json)throw console.info("Manifest detection via Puppeteer completed, but couldn't detect the manifest.",o),new Error("HTML parse manifest detector couldn't find the manifest. "+o.error);return{content:o.content.json,format:"w3c",generatedUrl:o.content.url||e,siteUrl:e,default:{short_name:o.content.json.short_name||""},id:"",generated:!o.content,errors:[],suggestions:[],warnings:[]}}async function mi(e){const t=`${Et.manifestFinderUrl}?url=${encodeURIComponent(e)}`,n=await fetch(t);if(!n.ok)throw console.warn("Fetching manifest via HTML parsing service failed",n),new Error(`Error fetching from ${t}`);const i=await n.json();if(i.error||!i.manifestContents)throw console.warn("Fetching manifest via HTML parsing service failed due to no response data",n),new Error(i.error||"Manifest couldn't be fetched");if(!i.manifestContents)throw console.info("Manifest detection via HTML parse completed, but couldn't detect the manifest.",i),new Error("Manifest detection via HTML parsing completed but couldn't find the manifest. "+i.error);return{content:i.manifestContents,format:"w3c",generatedUrl:i.manifestUrl||e,siteUrl:e,default:{short_name:i.manifestContents.short_name||""},id:"",generated:!i.manifestContents,errors:i.error?[i.error]:[],suggestions:[],warnings:Object.entries(i.warnings).map((e=>`${e[0]}: ${e[1]}`)),manifestContainsInvalidJson:i.manifestContainsInvalidJson}}async function gi(e){return new Promise((async(t,n)=>{let i;try{i=function(e){let t;if(!e||e.startsWith("http")||e.startsWith("https")||(t="https://"+e),t){if(!1===Ct(t)&&!e.toLowerCase().startsWith("http://"))throw new Error("This error means that you may have a bad https cert or the url may not be correct");return t}return e}(e)}catch(e){return void n(e)}const o=[ui(i),mi(i),(r=1e4,new Promise((e=>{setTimeout((()=>e()),r)})))];var r;const s=await Promise.any(o);if(s){const e=Qn();e.initialManifest||(pi=s.content,e.initialManifest=pi,ei(e)),t(s)}else{console.error("All manifest detectors failed: Timeout expired.");const e=await async function(e){try{const t=await fetch(`${Et.manifestCreatorUrl}?url=${e}`,{method:"POST",headers:new Headers({"content-type":"application/json"})});return await t.json()}catch(e){return console.error("Manifest creation service failed to create the manifest. Falling back to empty manifest.",e),hi}}(i),n=async function(e,t,n){return{content:e,format:"w3c",siteUrl:t,generated:n,id:"",generatedUrl:"",default:{short_name:e.short_name||"My PWA"},errors:[],suggestions:[],warnings:[]}}(e,i,!0);t(n)}}))}async function fi(e){const t=e||function(){const e=Qn();if(e.siteUrl)return e.siteUrl;const t=new URLSearchParams(location.search).get("site");if(t)return t;const n=Kn();if(sessionStorage)return n;return null}();if(!t)throw new Error("No available site URL");Jn(t);const n=await gi(t),i={manifest:n.content,initialManifest:pi,manifestUrl:n.generatedUrl,isGenerated:n.generated,siteUrl:n.siteUrl,isEdited:!1};return ei(i),await bi(Object.assign({},n.content)),i}function bi(e){const t=Qn();var n,i,o;return t.manifest=Object.assign(t.manifest,e),t.initialManifest&&(n=t.initialManifest,i=t.manifest,n===i&&(Qn().isEdited=!1),Object.keys(n).forEach((e=>{if(Array.isArray(n[e])&&Array.isArray(i[e])){let t=n[e].flat(2),o=i[e].flat(2);t.forEach(((e,t)=>{!0===o.includes(e)&&o[t]!==e&&(Qn().isEdited=!0)}))}else JSON.stringify(n[e])!==JSON.stringify(i[e])&&(Qn().isEdited=!0)}))),ei(t),di.dispatchEvent((o=Object.assign({},t.manifest),new CustomEvent(qt.manifestUpdate,{detail:o,bubbles:!0,composed:!0}))),t.manifest}const yi=[{infoString:"Web Manifest Properly Attached",result:!1,category:"required"},{infoString:"Lists icons for add to home screen",result:!1,category:"required"},{infoString:"Contains name property",result:!1,category:"required"},{infoString:"Contains short_name property",result:!1,category:"required"},{infoString:"Designates a start_url",result:!1,category:"required"},{infoString:"Specifies a display mode",result:!1,category:"recommended"},{infoString:"Has a background color",result:!1,category:"recommended"},{infoString:"Has a theme color",result:!1,category:"recommended"},{infoString:"Specifies an orientation mode",result:!1,category:"recommended"},{infoString:"Contains screenshots for app store listings",result:!1,category:"recommended"},{infoString:"Has a square PNG icon 512x512 or larger",result:!1,category:"required"},{infoString:"Has a maskable PNG icon",result:!1,category:"recommended"},{infoString:"Lists shortcuts for quick access",result:!1,category:"recommended"},{infoString:"Contains categories to classify the app",result:!1,category:"recommended"},{infoString:"Icons specify their type",result:!1,category:"recommended"},{infoString:"Icons specify their size",result:!1,category:"recommended"},{infoString:"Contains an IARC ID",result:!1,category:"optional"},{infoString:"Specifies related_application",result:!1,category:"optional"}];const vi=[{result:!1,infoString:"Uses HTTPS",category:"required"},{result:!1,infoString:"Has a valid SSL certificate",category:"required"},{result:!1,infoString:"No mixed content on page",category:"required"}];async function wi(e){console.info("Testing Service Worker");const t="string"==typeof e&&e.startsWith("http://");if(!e||t)return[];let n;try{n=await async function(e){const t=await fetch(`${Et.serviceWorkerUrl}/serviceWorker/runAllChecks?url=${encodeURIComponent(e)}`);if(!t.ok)throw console.warn("Unable to detect service worker due to HTTP error",t.status,t.statusText),new Error(`Service worker detection failed due to HTTP error ${t.status} ${t.statusText}`);const n=await t.json();return console.info("Service worker detection succeeded",n),n}(e)}catch(t){n={hasSW:!1,url:e,hasPushRegistration:!1,serviceWorkerDetectionTimedOut:!1,noServiceWorkerFoundDetails:`${t}`,hasBackgroundSync:!1,hasPeriodicBackgroundSync:!1}}const i=await async function(e){return new Promise((t=>{const n=e=>{e&&t(!0)},i=async function(e){const t=await fetch(`${Et.serviceWorkerUrl}/serviceworker/GetOfflineSupport?url=${encodeURIComponent(e)}`);if(!t.ok)throw console.warn("Unable to detect offline support via Puppeteer.",t.status,t.statusText),new Error(t.statusText);const n=await t.json();return console.info("Offline support detection completed via Puppeteer. Offline support =",n),n}(e),o=async function(e){const t=await fetch(`${Et.api}/offline/?site=${encodeURIComponent(e)}`);if(!t.ok)throw console.warn("Unable to detect offline support via Lighthouse.",t.status,t.statusText),new Error(t.statusText);const n=await t.json();return console.info("Offline support detection completed via Lighthouse. Offline support =",n),n.data.offline}(e);new Promise((()=>setTimeout((()=>t(!1)),1e4))),i.then((e=>n(e)),(e=>console.warn("Service worker offline check via Puppeteer failed",e))),o.then((e=>n(e)),(e=>console.warn("Service worker offline check via Lighthouse failed",e))),Promise.allSettled([i,o]).then((()=>t(!1)))}))}(e);return[{result:n.hasSW,infoString:"Has a Service Worker",category:"required"},{result:i,infoString:"Works Offline",category:"recommended"},{result:n.hasPeriodicBackgroundSync,infoString:"Uses Periodic Sync for a rich offline experience",category:"optional"},{result:n.hasBackgroundSync,infoString:"Uses Background Sync for a rich offline experience",category:"optional"}]}async function xi(e){return new Promise((async(t,n)=>{try{const n=async function(e){try{const t=fi(e),n=new Promise((e=>setTimeout((()=>e(yi)),2e4))),i=await Promise.race([n,t]);if(!i)return console.warn("Manifest check timed out after 20 seconds."),yi;if(i){const e=i;return Array.isArray(e)?(console.error("Could not test manifest, returning default results"),e):await tn(e)}return console.error("Could not get manifest data"),yi}catch(e){return console.warn("Could not fetch a manifest to test due to error.",e),yi}}(e),i=wi(e),o=async function(e){const t=new Promise((e=>setTimeout((()=>e()),2e4))),n=encodeURIComponent(e),i=`${Et.api}/Security?site=${n}`,o=fetch(i),r=await Promise.race([t,o]);if(!r)return console.warn("Security check timed out after 20 seconds."),vi;if(!r.ok)return console.warn("Security check failed with non-successful status code",r.status,r.statusText),vi;const s=await r.json();return console.info("Security detection completed successfully",s),[{result:s.data.isHTTPS,infoString:"Uses HTTPS",category:"required"},{result:s.data.valid,infoString:"Has a valid SSL certificate",category:"required"},{result:s.data.validProtocol,infoString:"No mixed content on page",category:"required"}]}(e),r={manifest:await n,service_worker:await i,security:await o};Yn(r);!function(e,t){e.progress[0].items[1].done=Gt.DONE,e.progress[1].items.map((e=>{var n,i,o;"Manifest"===e.name?t&&Array.isArray(t.manifest)&&!0===(null===(n=t.manifest[0])||void 0===n?void 0:n.result)&&(e.done=Gt.DONE):"Service Worker"===e.name?t&&t.service_worker&&!0===(null===(i=t.service_worker[0])||void 0===i?void 0:i.result)&&(e.done=Gt.DONE):"Security"===e.name&&t&&t.security&&!0===(null===(o=t.security[0])||void 0===o?void 0:o.result)&&(e.done=Gt.DONE)})),si();Gn(e)}(qn(),r),si(),t(r)}catch(e){n(e)}}))}function _i(){const e=Xn();let t=0,n=0,i=0;return(null==e?void 0:e.manifest).map((e=>{!0===e.result&&(t+=10)})),(null==e?void 0:e.service_worker).map((e=>{!0===e.result&&(n+=10)})),(null==e?void 0:e.security).map((e=>{!0===e.result&&(i+=10)})),t+n+i}let ki=class extends Q{constructor(){super(),this.rating="bottom",this.overallScore=0,this.ratingComment=""}static get styles(){return c`
      #dial-block {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      #pointer {
        position: absolute;
        transform-origin: bottom;
      }

      .overall-score {
        width: 100%;
        font-weight: var(--font-bold);
        margin-bottom: 14px;
        text-align: center;
        margin-top: -4px;

        background: initial;
        border-radius: initial;
        border: none;
      }

      #rating-comment {
        font-weight: var(--font-bold);
        font-size: var(--small-font-size);
        text-align: center;
        display: block;
      }

      #top {
        color: var(--sidebar-accent);
      }

      #middle {
        color: var(--warning-color);
      }

      #lower {
        color: var(--error-color);
      }
    `}async firstUpdated(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#pointer");if(await this.calcRating(),await this.updated,t)switch(this.rating){case"top":t.animate([{transform:"rotate(90deg) translate(10px, 13px)"},{transform:"rotate(0deg) translate(10px, 13px)"}],{fill:"forwards",easing:"ease-in-out"});break;case"middle":t.animate([{transform:"rotate(0deg) translate(0px, 5px)"},{transform:"rotate(-90deg) translate(0px, 5px)"}],{fill:"forwards",easing:"ease-in-out"});break;case"bottom":t.animate([{transform:"rotate(0deg) translate(10px, -5px)"},{transform:"rotate(-180deg) translate(10px, -5px)"}],{fill:"forwards",easing:"ease-in-out"})}}async calcRating(){const e=150;return this.overallScore=_i(),this.overallScore>e&&this.overallScore<160||this.overallScore===e?void(this.rating="middle"):this.overallScore>160?void(this.rating="top"):this.overallScore<140?void(this.rating="bottom"):void(this.rating="middle")}decideComment(){const e=z`<span id="rating-comment"
      >Your PWA ranks in the <span id="top">Top 100</span> of all developers
      using PWABuilder</span
    > `,t=z`<span id="rating-comment"
      >Your PWA ranks in the <span id="middle">middle</span> of all developers
      using PWABuilder</span
    > `,n=z`<span id="rating-comment"
      >Your PWA ranks <span id="lower">below the average</span> of all
      developers using PWABuilder</span
    > `;return"middle"===this.rating?t:"top"===this.rating?e:"bottom"===this.rating?n:t}render(){return z`<div id="dial-block">
        <img aria-hidden="true" id="dial" src="/assets/dial.png" />
        <img aria-hidden="true" id="pointer" src="/assets/pointer.png" />
      </div>

      <div class="overall-score">${this.overallScore}</div>

      ${this.decideComment()} `}};n([oe()],ki.prototype,"rating",void 0),n([oe()],ki.prototype,"overallScore",void 0),n([oe()],ki.prototype,"ratingComment",void 0),ki=n([te("rating-dial")],ki);let Si=class extends Q{constructor(){super()}static get styles(){return c`
      #badges-container {
        padding: 14px 12px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 10px;
      }

      .badge {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .badge span {
        font-size: 8px;
        font-weight: var(--font-bold);
        text-align: center;
      }

      .locked {
        opacity: 0.3;
      }
    `}firstUpdated(){this.duplicate=li(),this.possible_badges=ci()}render(){var e;return z`
      <div id="badges-container">
        ${null===(e=this.possible_badges)||void 0===e?void 0:e.map((e=>z`
            <div
              class="${mt({badge:!0,locked:!this.duplicate.find((t=>e.name===t.name))})}"
            >
              <img
                .title="${e.name}"
                .src="${e.url}"
                .alt="${e.name} icon"
              />
            </div>
          `))}
      </div>
    `}};n([oe()],Si.prototype,"current_badges",void 0),n([oe()],Si.prototype,"possible_badges",void 0),Si=n([te("app-badges")],Si);let $i=class extends Q{constructor(){super(),this.overallScore=0,this.mql=window.matchMedia(`(min-width: ${bt.largeUpper}px)`),this.isDeskTopView=this.mql.matches,this.mql.addEventListener("change",(e=>{this.isDeskTopView=e.matches}))}static get styles(){return c`
      sidebar-card {
        margin-top: 20px;
      }

      #badges-card {
        margin-bottom: 20px;
      }

      .sidebar-item-header {
        display: flex;
        font-size: var(--small-font-size);
        font-weight: var(--font-bold);
        padding-bottom: 11px;
        padding-left: 5px;
      }

      .progress-index {
        margin-right: 4px;
      }

      .lastItem .sidebar-item-header {
        padding-bottom: 0;
      }

      .item-name {
        display: flex;
        align-items: center;
        font-size: 11px;

        padding-left: 12px;
      }

      #sidebar-subitems-list {
        list-style: none;
        padding-left: 0;
      }

      #sidebar-subitems-list li {
        font-weight: var(--font-bold);
        padding-left: 23px;
      }

      /** DESKTOP STYLES */
      aside.desktop-sidebar {
        color: var(--secondary-color);
        background: var(--primary-purple);
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
      }

      #top-of-menu {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      #website-tested,
      #your-score {
        font-size: var(--small-font-size);
        margin-top: 1em;
      }

      #website-tested {
        text-align: center;
        color: white;
        text-decoration: none;

        margin-top: 0;
        margin-bottom: 16px;
        font-weight: var(--font-bold);
        font-size: 9px;
      }

      aside.desktop-sidebar img {
        height: 56px;
        width: 56px;
      }

      aside.desktop-sidebar img,
      aside.desktop-sidebar #score-progress {
        margin-top: 1em;
        margin-bottom: 1em;
      }

      aside.desktop-sidebar fast-menu {
        margin: 0;
        padding: 0;
        border: none;
        border-radius: 0;
        box-shadow: none;
        display: grid;
        grid-auto-flow: row;
        width: 100%;
      }

      aside.desktop-sidebar h1,
      aside.desktop-sidebar h4,
      aside.desktop-sidebar h5,
      aside.desktop-sidebar p {
        margin: 0;
      }

      aside.desktop-sidebar h4 {
        font-size: var(--font-size);
        margin-top: 16px;
      }

      aside.desktop-sidebar hr {
        background-color: var(--secondary-color);
        width: 85%;
      }

      fast-menu.menu > fast-menu-item {
        display: flex;
        justify-content: flex-start;
        width: 100%;
        color: var(--light-primary-color);
        background: var(--primary-color);
        margin: 0;
        border: none;
        border-radius: 0;
        box-shadow: none;
        padding: 1.1rem 2rem;
        text-transform: capitalize;
      }

      fast-menu.menu > fast-menu-item.heading {
        font-weight: bold;
        background: var(--light-primary-color);
      }

      fast-menu.menu > fast-menu-item.active {
        color: var(--primary-color);
        background: var(--secondary-color);
      }

      fast-menu.menu > fast-menu-item.active-cell {
        font-weight: bold;
        color: var(--secondary-color);
      }

      .desktop-sidebar #score-number {
        font-size: 72px;
        font-weight: var(--font-bold);
      }

      .desktop-sidebar #score-message,
      .tablet-sidebar #score-message {
        color: var(--sidebar-accent);

        font-weight: var(--font-bold);
        margin-top: -1em;
      }

      /** TABLET STYLES */
      aside.tablet-sidebar {
        color: var(--secondary-color);
        background: var(--primary-purple);
        height: 50px;
        max-width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding: 0.25rem 0rem;
      }

      aside.tablet-sidebar .done,
      .tablet-sidebar .done::part(heading) {
        color: white !important;
      }

      aside.tablet-sidebar .done ion-icon {
        color: var(--sidebar-accent) !important;
      }

      .tablet-sidebar #score-block {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;

        border-right: 1px solid var(--secondary-color);
        padding-right: 20px;
      }

      .tablet-sidebar #score-message {
        font-size: var(--font-size);
        margin-top: 0;
      }

      .tablet-sidebar #your-score {
        margin-bottom: 0px;
        margin-top: 0px;

        font-size: var(--smallish-font-size);
      }

      aside.tablet-sidebar > * {
        padding: 0 0.25rem;
        margin: 0 0.25em;
        display: flex;
        align-items: center;
      }

      aside.tablet-sidebar img {
        max-width: 50px;
        height: 24px;
        width: 24px;
      }

      aside.tablet-sidebar > h6 {
        font-size: 0.75rem;
      }

      aside.tablet-sidebar .menu {
        display: flex;
        align-items: center;
        height: 50px;

        font-size: var(--small-font-size);
        font-weight: var(--font-bold);
      }

      aside.tablet-sidebar .menu > .heading {
        display: flex;
        flex-direction: column;
        align-items: center;
        align-content: center;
        text-transform: capitalize;
        color: var(--light-primary-color);
        margin: 0 0.5rem;
      }

      aside.tablet-sidebar .menu .active {
        color: white;
      }

      aside.tablet-sidebar #score-progress {
        border-right: 1px solid var(--secondary-color);
        height: 100%;
        font-size: var(--smallish-font-size);

        flex: none;
        width: 32vw;

        display: flex;
        justify-content: center;
      }

      aside.tablet-sidebar #score-number {
        font-weight: var(--font-bold);
      }

      /** ICON STYLES */
      .desktop-sidebar .icon {
        position: relative;
        left: -9.4px;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 6.18px;

        width: 8px;
        height: 10px;
      }

      .item-name ion-icon {
        height: 10px;
        color: var(--sidebar-color);
        padding-bottom: 3px;
      }

      .tablet-sidebar .icon {
        width: 0.75rem;
        height: 0.75rem;
      }

      .pending,
      .pending::part(heading) {
        color: #A5A8CF;
      }

      .done,
      .done::part(heading) {
        color: var(--sidebar-accent);
      }

      .active::part(heading) {
        background: white;
        color: black;
        padding-left: 23px;
      }

      .done::part(heading),
      .pending::part(heading) {
        background: rgba(255, 255, 255, 0.05);
        padding-left: 23px;
      }

      .active .sidebar-item-header ion-icon {
        color: white;
      }

      #overall-score-block {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        text-align: center;
        padding: 14px 12px;
      }

      #progress-block {
        padding: 14px 12px;
      }

      #score-header,
      #score-notify {
        font-weight: var(--font-bold);
        font-size: var(--font-size);
      }

      .overall-score {
        border: 2.45288px solid #ffffff;
        width: 100%;
        border-radius: 8px;
        font-weight: var(--font-bold);
        background: linear-gradient(
          118.44deg,
          rgba(52, 41, 102, 0.5) 12.3%,
          rgba(93, 68, 140, 0.5) 38.83%,
          rgba(50, 27, 62, 0.5) 96.92%
        );
        margin-top: 15px;
        margin-bottom: 19px;
        text-align: center;
      }

      .overall-score span {
        vertical-align: sub;
      }

      #plus {
        color: var(--sidebar-accent);
      }

      .tablet-sidebar .overall-score {
        max-width: 64px;
        text-align: center;
      }

      #overall-score-block {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        text-align: center;
        padding-left: 12px;
        padding-right: 12px;
        padding-top: 14px;
        padding-bottom: 14px;
      }

      #score-header,
      #score-notify {
        font-weight: var(--font-bold);
        font-size: var(--font-size);
      }

      .overall-score {
        border: 2.45288px solid #ffffff;
        width: 100%;
        border-radius: 8px;
        font-weight: var(--font-bold);
        background: linear-gradient(
          118.44deg,
          rgba(52, 41, 102, 0.5) 12.3%,
          rgba(93, 68, 140, 0.5) 38.83%,
          rgba(50, 27, 62, 0.5) 96.92%
        );
        margin-top: 15px;
        margin-bottom: 19px;
        text-align: center;
      }

      #plus {
        color: var(--sidebar-accent);
      }

      .tablet-sidebar .overall-score {
        max-width: 64px;
        text-align: center;
      }

      #overall-score-block,
      #rating-block {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        text-align: center;
        padding-left: 12px;
        padding-right: 12px;
        padding-top: 14px;
        padding-bottom: 14px;
      }

      #score-header,
      #score-notify {
        font-weight: var(--font-bold);
        font-size: var(--small-font-size);
      }

      .rating-header {
        font-size: var(--small-font-size);
        display: block;
        text-align: center;
        margin-bottom: 8px;
      }

      .overall-score {
        border: 2.45288px solid #ffffff;
        width: 100%;
        border-radius: 8px;
        font-weight: var(--font-bold);
        background: linear-gradient(
          118.44deg,
          rgba(52, 41, 102, 0.5) 12.3%,
          rgba(93, 68, 140, 0.5) 38.83%,
          rgba(50, 27, 62, 0.5) 96.92%
        );
        margin-top: 15px;
        margin-bottom: 19px;
        text-align: center;
      }

      #rating-block .overall-score {
        width: 100%;
        font-weight: var(--font-bold);
        margin-bottom: 14px;
        text-align: center;
        margin-top: -4px;

        background: initial;
        border-radius: initial;
        border: none;
      }

      #plus,
      #top {
        color: var(--sidebar-accent);
      }

      .tablet-sidebar .overall-score {
        max-width: 64px;
        text-align: center;
      }

      ${wt(c`
        aside.desktop-sidebar {
          display: none;
        }

        aside.tablet-sidebar {
          flex-direction: row-reverse;
          overflow-x: scroll;
        }

        aside.tablet-sidebar .menu {
          display: none;
        }

        aside.tablet-sidebar #score-progress {
          width: 46%;
          border-right: none;
          overflow-x: scroll;
          white-space: nowrap;
          justify-content: unset;
          align-items: center;
        }

        aside.tablet-sidebar #score-block {
          width: 50%;
        }
      `),vt(c`
        aside.desktop-sidebar {
          display: none;
        }

        aside.tablet-sidebar {
          flex-direction: row-reverse;
          overflow-x: scroll;
        }

        aside.tablet-sidebar .menu {
          display: none;
        }

        aside.tablet-sidebar #score-progress {
          width: 46%;
          border-right: none;
          overflow-x: scroll;
          white-space: nowrap;
          justify-content: unset;
          align-items: center;
        }

        aside.tablet-sidebar #score-block {
          width: 50%;
        }
      `)}
    `}firstUpdated(){this.menuItems=qn(),this.current_url=Kn(),this.results=Xn(),this.results&&this.handleResults(),this.overallScore=_i()}handleResults(){var e;const t=new URL(location.href);null===(e=this.menuItems)||void 0===e||e.progress.map((e=>{if(e.items){const n=[];e.items.map((t=>{t.done!==Gt.DONE&&n.push(e)})),t.pathname===e.location?e.done=Gt.ACTIVE:0===n.length?e.done=Gt.DONE:e.done=Gt.PENDING}}))}renderIcon(e){if("done"==e.done)return z`
        <ion-icon class="icon done" name="checkmark-outline"></ion-icon>
      `}renderDesktopBar(){var e;return z`
      <aside class="desktop-sidebar">
        <div id="top-of-menu">
          <img src="/assets/images/sidebar-icon.svg" alt="pwd-icon" />
          <hr />
          <h4>URL tested:</h4>
          <a href="${this.current_url||""}" id="website-tested"
            >${this.current_url}</a
          >
          <hr />

          <sidebar-card title="Score">
            <div id="overall-score-block">
              <span id="score-header">Your PWA Score:</span>

              <div class="overall-score"><span>${this.overallScore}</span></div>

              <span id="score-notify">
                ${this.overallScore>0?z`<span id="plus">10+</span> added to score`:z`<span id="plus">0+ added to score</span>`}
              </span>
            </div>
          </sidebar-card>

          <sidebar-card title="Progress">
            <div id="progress-block">
              ${null===(e=this.menuItems)||void 0===e?void 0:e.progress.map(((e,t)=>z`
                  <div
                    class="${mt({active:e.done===Gt.ACTIVE,done:e.done===Gt.DONE,pending:e.done===Gt.PENDING,lastItem:"Complete"===e.header})}"
                  >
                    <div class="sidebar-item-header" slot="heading">
                      <span class="progress-index">${++t}.</span>
                      <span>${e.header}</span>
                    </div>
                  </div>
                `))}
            </div>
          </sidebar-card>

          <sidebar-card title="Rating">
            <div id="rating-block">
              <span class="rating-header" id="score-header"
                >Your PWA Score compared with other developers</span
              >
              <rating-dial></rating-dial>
            </div>
          </sidebar-card>

          <sidebar-card id="badges-card" title="Badges">
            <app-badges></app-badges>
          </sidebar-card>
        </div>
      </aside>
    `}renderTabletBar(){var e;return z`<aside class="tablet-sidebar">
      <h4 id="score-progress">${this.current_url}</h4>

      <div id="score-block">
        <h4 id="your-score">PWA Score</h4>
        <span class="overall-score">${this.overallScore}</span>
      </div>

      <div class="menu">
        ${null===(e=this.menuItems)||void 0===e?void 0:e.progress.map((e=>z`<div
              class="${mt({heading:!0,active:e.done===Gt.ACTIVE,done:e.done===Gt.DONE,pending:e.done===Gt.PENDING})}"
            >
              ${e.done===Gt.ACTIVE?z`<ion-icon class="icon active" name="ellipse"></ion-icon>`:e.done===Gt.DONE?z`${this.renderIcon(e)}`:z`<img
                    class="icon other"
                    src="/assets/ellipse-outline.svg"
                    aria-hidden="true"
                  />`}
              <span>${e.header}</span>
            </div>`))}
      </div>
    </aside>`}renderComponent(){return this.isDeskTopView?this.renderDesktopBar():this.renderTabletBar()}render(){return z`${this.renderComponent()}`}};n([oe()],$i.prototype,"overallScore",void 0),n([oe()],$i.prototype,"current_url",void 0),n([oe()],$i.prototype,"results",void 0),n([oe()],$i.prototype,"menuItems",void 0),n([ie({type:Object})],$i.prototype,"mql",void 0),n([ie({type:Boolean})],$i.prototype,"isDeskTopView",void 0),$i=n([te("app-sidebar")],$i);let Pi=class extends Q{constructor(){super(),this.companies=["facebook","instagram","mailchimp","plutotv","sketchapp","tiktok","twitter"],this.paused=!1}static get styles(){return[c`
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
        border: none;
        background: none;
        height: 20px;
        width: auto;
      }

      .controls:hover {
        cursor: pointer;
      }

      .controls ion-icon {
        color: #4F3FB6;
        padding: 5px;
        border: 1px solid #4F3FB6;
        border-radius: 50%;
      }

      @keyframes scroll {
        0% { transform: translateX(0); }
        14% { transform: translateX(calc(var(--slide-width) * -1)); }
        28% { transform: translateX(calc(var(--slide-width) * -2)); }
        42% { transform: translateX(calc(var(--slide-width) * -3)); }
        56% { transform: translateX(calc(var(--slide-width) * -4)); }
        70% { transform: translateX(calc(var(--slide-width) * -5)); }
        84% { transform: translateX(calc(var(--slide-width) * -6)); }
        100% { transform: translateX(calc(var(--slide-width) * -7)); }
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
        width: calc(var(--slide-width) * 14);
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
        .controls ion-icon {
          color: white;
          border-color: white;
        }
      }
    `]}firstUpdated(){const e=this.shuffle(this.companies);this.companies=[...e]}shuffle(e){let t,n=e.length;for(;0!=n;)t=Math.floor(Math.random()*n),n--,[e[n],e[t]]=[e[t],e[n]];return e}toggleAnimation(){this.paused=!this.paused;let e=this.shadowRoot.querySelector(".slide-track");this.paused?e.style.animationPlayState="paused":e.style.animationPlayState="running"}render(){return z`
    <div id="success-wrapper">
      <div id="success-title">
          <h2>Apps Packaged</h2>
          <p>Companies of all sizes—from startups to Fortune 500s—have used PWABuilder to package their PWAs.</p>
      </div>
      <div class="slider">
        <div class="slide-track">
          ${this.companies.map((e=>z`
              <div class="slide">
                <img src="/assets/new/${e}_carousel.png" alt="${e} logo" />
              </div>`))}
            ${this.companies.map((e=>z`
              <div class="slide">
                <img src="/assets/new/${e}_carousel.png" alt="${e} logo" />
              </div>`))}
        </div>
      </div>
      ${this.paused?z`<button class="controls" type="button" @click=${()=>this.toggleAnimation()}><ion-icon name="play" aria-label="play button"></ion-icon></button>`:z`<button class="controls" type="button" @click=${()=>this.toggleAnimation()}><ion-icon name="pause" aria-label="pause button"></ion-icon></button>`}
    </div>
    `}};n([oe()],Pi.prototype,"companies",void 0),n([oe()],Pi.prototype,"paused",void 0),Pi=n([te("companies-packaged")],Pi);const Ai=[{imageUrl:"/assets/new/manifest.svg",title:gt.text.resource_hub_new.titles.manifest,description:gt.text.resource_hub_new.description.manifest,linkUrl:"https://microsoft.github.io/win-student-devs/#/30DaysOfPWA/core-concepts/03"},{imageUrl:"/assets/new/sw.svg",title:gt.text.resource_hub_new.titles.sw,description:gt.text.resource_hub_new.description.sw,linkUrl:"https://microsoft.github.io/win-student-devs/#/30DaysOfPWA/core-concepts/05"},{imageUrl:"/assets/new/https.svg",title:gt.text.resource_hub_new.titles.https,description:gt.text.resource_hub_new.description.https,linkUrl:"https://microsoft.github.io/win-student-devs/#/30DaysOfPWA/core-concepts/04"}];let Ci=class extends Q{constructor(){super(),this.imageUrl="",this.cardTitle="",this.description="",this.linkRoute=""}static get styles(){return[c`
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
      ${vt(c`
          .card {
            min-width: 140px;
            max-width: 300px;
            height: 15em;
          }
          .card-content p {
            font-size: .825em;
          }
          .card-content h3 {
            font-size: 20px;
          }
      `)}

      /* 480px - 639px */
      ${wt(c`
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
      ${xt(c`
        .card {
          min-width: 140px;
          max-width: 200px;
          height: 12em;
          padding: .75em;
          padding-bottom: 1.25em;
        }
      `)}

      /*1024px - 1365px*/
      ${_t(c`
      `)}

      /* > 1920 */
      ${St(c`
          
      `)}

    `]}firstUpdated(){}render(){return z`
      <div class="card">
        <div class="card-content">
          <img src=${this.imageUrl} alt="${this.cardTitle} icon" role="presentation"/>
          <h3>${this.cardTitle}</h3>
          <p>${this.description}</p>
        </div>
        <div class="card-actions" @click=${()=>Tt("home.middle."+this.cardTitle+"_learn_more_clicked",t.ProcessCheckpoint)}>
          <a href=${this.linkRoute} target="_blank" rel="noopener" aria-label="Learn more about ${this.cardTitle}">Learn More</a>
        </div>
      </div>
    `}};n([ie({type:String})],Ci.prototype,"imageUrl",void 0),n([ie({type:String})],Ci.prototype,"cardTitle",void 0),n([ie({type:String})],Ci.prototype,"description",void 0),n([ie({type:String})],Ci.prototype,"linkRoute",void 0),Ci=n([te("info-card")],Ci);let Ei=class extends Q{constructor(){super(),this.cards=[]}static get styles(){return[c`
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
      ${vt(c`
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
      ${wt(c`
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
      ${xt(c`
          #hub-panel{
            background-image: url(/assets/new/OtterBackgroundPWA1024.jpg);
            background-position: center center;
            padding: 3.25em;
          }
      `)}

      /*1024px - 1365px*/
      ${_t(c`
          #hub-panel {
            background: url(/assets/new/OtterBackgroundPWA1366.jpg);
            background-position: center center;
            background-size: cover;
            background-repeat: no-repeat;
          }
      `)}

      /* > 1920 */
      ${St(c`
            #hub-panel{
            background-image: url(/assets/new/OtterBackgroundPWA1920.jpg);
            background-repeat: no-repeat;
            background-size: cover;
            padding: 3em;
          }
      `)}

      
    `]}firstUpdated(){this.cards=Ai}render(){return z`
      <div id="hub-panel">
        <h2>What makes a PWA?</h2>
        <div id="cards">
          ${this.cards.map((e=>z`
            <info-card
            cardTitle=${e.title}
            description=${e.description}
            imageUrl=${e.imageUrl}
            linkRoute=${e.linkUrl}
          >
          </info-card>
          `))}
        </div>
      </div>
    `}};n([oe()],Ei.prototype,"cards",void 0),Ei=n([te("resource-hub-new")],Ei);const Ti=[{imageUrl:"/assets/new/trivago.png",stat:gt.text.success_stories.stat.trivago,description:gt.text.success_stories.description.trivago,value:gt.text.success_stories.value.trivago,company:"trivago",source:"https://www.thinkwithgoogle.com/intl/en-gb/marketing-strategies/app-and-mobile/trivago-embrace-progressive-web-apps-as-the-future-of-mobile/"},{imageUrl:"/assets/new/alibaba.png",stat:gt.text.success_stories.stat.alibaba,description:gt.text.success_stories.description.alibaba,value:gt.text.success_stories.value.alibaba,company:"alibaba",source:"https://developers.google.com/web/showcase/2016/alibaba"},{imageUrl:"/assets/new/pintrest.png",stat:gt.text.success_stories.stat.pintrest,description:gt.text.success_stories.description.pintrest,value:gt.text.success_stories.value.pintrest,company:"pintrest",source:"https://medium.com/dev-channel/a-pinterest-progressive-web-app-performance-case-study-3bd6ed2e6154"},{imageUrl:"/assets/new/tinder.png",stat:gt.text.success_stories.stat.tinder,description:gt.text.success_stories.description.tinder,value:gt.text.success_stories.value.tinder,company:"tinder",source:"https://medium.com/@addyosmani/a-tinder-progressive-web-app-performance-case-study-78919d98ece0"}];let Ui=class extends Q{constructor(){super(),this.imageUrl="",this.cardStat="",this.description="",this.cardValue="",this.company="",this.source=""}static get styles(){return[c`
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

      /* < 480px */
      ${vt(c`
        .success-card {
          width: 280px;
          box-sizing: border-box;
        }
        .success-line-one h3 {
          font-size: 28px;
        }
      `)}

      /* 480px - 639px */
      ${wt(c`
        .success-card {
          width: 400px;
        }
        .success-line-one h3 {
          font-size: 28px;
        }
      `)}

      /* 640px - 1023px */
      ${xt(c`
          .success-card {
            width: 305px;
          }
      `)}

      /*1024px - 1365px*/
      ${_t(c`

      `)}

      /* > 1920px */
      ${St(c`
        .success-card {
          width: 525px;
        }
      `)}
    `]}render(){return z`
      <a @click=${()=>Tt("home.middle."+this.company+"_clicked",t.ProcessCheckpoint)} class="success-card" href="${this.source}" rel="noopener" target="_blank" aria-label=${"Success story of "+this.company+" link"}>
        <div class="success-line-one">
           <img src=${this.imageUrl} alt="${this.company} logo"/>
           <h1 class="success-stat">
             <span>${this.cardValue}</span> ${this.cardStat}
           </h1>    
        </div>
        <p class="success-desc">${this.description}</p>
  </a>
    `}};n([ie({type:String})],Ui.prototype,"imageUrl",void 0),n([ie({type:String})],Ui.prototype,"cardStat",void 0),n([ie({type:String})],Ui.prototype,"description",void 0),n([ie({type:String})],Ui.prototype,"cardValue",void 0),n([ie({type:String})],Ui.prototype,"company",void 0),n([ie({type:String})],Ui.prototype,"source",void 0),Ui=n([te("success-card")],Ui);let Ni=class extends Q{constructor(){super(),this.cards=[]}static get styles(){return[c`
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
      ${vt(c`
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
      ${wt(c`
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
      ${xt(c`
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
      ${_t(c`
          #success-panel {
            /* padding-left: 15%; */
            padding-bottom: 2.5em;
          }
      `)}

      /* > 1920px */
      ${St(c`
          #success-panel {
            /* padding-left: 30%; */
            padding-bottom: 2.5em;
          }
          #success-panel h2 {
            margin-bottom: .5em;
          }
      `)}
    `]}firstUpdated(){this.cards=Ti}render(){return z`
      <div id="success-panel">
        <div id="success-panel-wrapper">
          <h2>PWA success stories</h2>
          <div id="success-cards">
            ${this.cards.map((e=>z`
            <success-card
            cardStat=${e.stat}
            description=${e.description}
            imageUrl=${e.imageUrl}
            cardValue=${e.value}
            company=${e.company}
            source=${e.source}
            >
            </success-card>
            `))}
          </div>
        </div>
      </div>
    `}};n([oe()],Ni.prototype,"cards",void 0),Ni=n([te("success-stories")],Ni);const Ri=[{imageUrl:"/assets/new/github.png",title:gt.text.community_hub.titles.github,description:gt.text.community_hub.description.github,links:[{link:"https://github.com/pwa-builder/PWABuilder",text:"Visit us on GitHub"},{link:"https://github.com/pwa-builder/PWABuilder/wiki/How-to-contribute-to-PWABuilder",text:"Contribute to project"}],company:"github"},{imageUrl:"/assets/new/twitter.png",title:gt.text.community_hub.titles.twitter,description:gt.text.community_hub.description.twitter,links:[{link:"https://twitter.com/pwabuilder",text:"Follow our Twitter"}],company:"twitter"},{imageUrl:"/assets/new/discord.png",title:gt.text.community_hub.titles.discord,description:gt.text.community_hub.description.discord,links:[{link:"https://aka.ms/pwabuilderdiscord",text:"Join our Discord"}],company:"discord"}];let Oi=class extends Q{constructor(){super(),this.imageUrl="",this.cardTitle="",this.description="",this.company="",this.links=[]}static get styles(){return[c`
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
      ${vt(c`
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
            font-size: .825em;
          }
      `)}

      /* 480px - 639px */
      ${wt(c`
          .community-card {
            width: 100%;
          }
      `)}
    `]}firstUpdated(){}render(){return z`
      <div class="community-card">
        <div class="community-card-image">
          <img src=${this.imageUrl} alt ="${this.company} logo" />
        </div>
        <div class="community-card-content">
          <h3>${this.cardTitle}</h3>
          <p>${this.description}</p>
          <div class="community-card-actions">
            ${this.links&&this.links.map((e=>z`
              <div class="card-link-box">
                <a @click=${()=>Tt("home.bottom."+e.text+"_clicked",t.ProcessCheckpoint)} href=${e.link} target="_blank" rel="noopener">${e.text}</a>
                <img src="/assets/new/arrow.svg" alt="arrow" role="presentation"/>
              </div>
              `))}
          </div>
        </div>
      </div>
    `}};n([ie({type:String})],Oi.prototype,"imageUrl",void 0),n([ie({type:String})],Oi.prototype,"cardTitle",void 0),n([ie({type:String})],Oi.prototype,"description",void 0),n([ie({type:String})],Oi.prototype,"company",void 0),n([ie({type:Array})],Oi.prototype,"links",void 0),Oi=n([te("community-card")],Oi);let zi=class extends Q{constructor(){super(),this.cards=[]}static get styles(){return[c`
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
       ${vt(c`
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
      ${wt(c`
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
      ${xt(c`
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
      ${_t(c`
          
      `)}

      @media (min-width: 1024px) and (max-width: 1160px) {
        #community-photo img { 
          width: 380px;
        }
      }

      /* > 1920px */
      ${St(c`
          #community-photo img { 
            width: 569px;
            height: auto;
          }
      `)}
    `]}firstUpdated(){this.cards=Ri}render(){return z`
      <div id="community-panel">
        <div id="community-photo">
          <img src="/assets/new/community-image.png" alt="social hub image" role="presentation"/>
        </div>
        <div id="community-content">
          <h2>Join our Community</h2>
          <div id="community-cards">
            ${this.cards.map((e=>z`
              <community-card
              cardTitle=${e.title}
              description=${e.description}
              imageUrl=${e.imageUrl}
              company=${e.company}
              .links=${e.links}
            >
            </community-card>
            `))}
          </div>
        </div>
      </div>
    `}};n([oe()],zi.prototype,"cards",void 0),zi=n([te("community-hub")],zi);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Li="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,Mi=(e,t,n=null)=>{for(;t!==n;){const n=t.nextSibling;e.removeChild(t),t=n}},ji=`{{lit-${String(Math.random()).slice(2)}}}`,Ii=`\x3c!--${ji}--\x3e`,Bi=new RegExp(`${ji}|${Ii}`);class Wi{constructor(e,t){this.parts=[],this.element=t;const n=[],i=[],o=document.createTreeWalker(t.content,133,null,!1);let r=0,s=-1,a=0;const{strings:c,values:{length:l}}=e;for(;a<l;){const e=o.nextNode();if(null!==e){if(s++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:n}=t;let i=0;for(let e=0;e<n;e++)Di(t[e].name,"$lit$")&&i++;for(;i-- >0;){const t=c[a],n=Vi.exec(t)[2],i=n.toLowerCase()+"$lit$",o=e.getAttribute(i);e.removeAttribute(i);const r=o.split(Bi);this.parts.push({type:"attribute",index:s,name:n,strings:r}),a+=r.length-1}}"TEMPLATE"===e.tagName&&(i.push(e),o.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(ji)>=0){const i=e.parentNode,o=t.split(Bi),r=o.length-1;for(let t=0;t<r;t++){let n,r=o[t];if(""===r)n=Fi();else{const e=Vi.exec(r);null!==e&&Di(e[2],"$lit$")&&(r=r.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),n=document.createTextNode(r)}i.insertBefore(n,e),this.parts.push({type:"node",index:++s})}""===o[r]?(i.insertBefore(Fi(),e),n.push(e)):e.data=o[r],a+=r}}else if(8===e.nodeType)if(e.data===ji){const t=e.parentNode;null!==e.previousSibling&&s!==r||(s++,t.insertBefore(Fi(),e)),r=s,this.parts.push({type:"node",index:s}),null===e.nextSibling?e.data="":(n.push(e),s--),a++}else{let t=-1;for(;-1!==(t=e.data.indexOf(ji,t+1));)this.parts.push({type:"node",index:-1}),a++}}else o.currentNode=i.pop()}for(const e of n)e.parentNode.removeChild(e)}}const Di=(e,t)=>{const n=e.length-t.length;return n>=0&&e.slice(n)===t},Hi=e=>-1!==e.index,Fi=()=>document.createComment(""),Vi=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function qi(e,t){const{element:{content:n},parts:i}=e,o=document.createTreeWalker(n,133,null,!1);let r=Ji(i),s=i[r],a=-1,c=0;const l=[];let d=null;for(;o.nextNode();){a++;const e=o.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(l.push(e),null===d&&(d=e)),null!==d&&c++;void 0!==s&&s.index===a;)s.index=null!==d?-1:s.index-c,r=Ji(i,r),s=i[r]}l.forEach((e=>e.parentNode.removeChild(e)))}const Gi=e=>{let t=11===e.nodeType?0:1;const n=document.createTreeWalker(e,133,null,!1);for(;n.nextNode();)t++;return t},Ji=(e,t=-1)=>{for(let n=t+1;n<e.length;n++){const t=e[n];if(Hi(t))return n}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Ki=new WeakMap,Yi=e=>"function"==typeof e&&Ki.has(e),Xi={},Zi={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class Qi{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=Li?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],n=this.template.parts,i=document.createTreeWalker(e,133,null,!1);let o,r=0,s=0,a=i.nextNode();for(;r<n.length;)if(o=n[r],Hi(o)){for(;s<o.index;)s++,"TEMPLATE"===a.nodeName&&(t.push(a),i.currentNode=a.content),null===(a=i.nextNode())&&(i.currentNode=t.pop(),a=i.nextNode());if("node"===o.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(a.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,o.name,o.strings,this.options));r++}else this.__parts.push(void 0),r++;return Li&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const eo=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),to=` ${ji} `;class no{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(Fi()),this.endNode=e.appendChild(Fi())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=Fi()),e.__insert(this.endNode=Fi())}insertAfterPart(e){e.__insert(this.startNode=Fi()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;Yi(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=Xi,e(this)}const e=this.__pendingValue;e!==Xi&&((e=>null===e||!("object"==typeof e||"function"==typeof e))(e)?e!==this.value&&this.__commitText(e):e instanceof class{constructor(e,t,n,i){this.strings=e,this.values=t,this.type=n,this.processor=i}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let i=0;i<e;i++){const e=this.strings[i],o=e.lastIndexOf("\x3c!--");n=(o>-1||n)&&-1===e.indexOf("--\x3e",o+1);const r=Vi.exec(e);t+=null===r?e+(n?to:Ii):e.substr(0,r.index)+r[1]+r[2]+"$lit$"+r[3]+ji}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==eo&&(t=eo.createHTML(t)),e.innerHTML=t,e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):(e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]))(e)?this.__commitIterable(e):e===Zi?(this.value=Zi,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof Qi&&this.value.template===t)this.value.update(e.values);else{const n=new Qi(t,e.processor,this.options),i=n._clone();n.update(e.values),this.__commitNode(i),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,i=0;for(const o of e)n=t[i],void 0===n&&(n=new no(this.options),t.push(n),0===i?n.appendIntoPart(this):n.insertAfterPart(t[i-1])),n.setValue(o),n.commit(),i++;i<t.length&&(t.length=i,this.clear(n&&n.endNode))}clear(e=this.startNode){Mi(this.startNode.parentNode,e.nextSibling,this.endNode)}}let io=!1;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
function oo(e){let t=ro.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},ro.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const i=e.strings.join(ji);return n=t.keyString.get(i),void 0===n&&(n=new Wi(e,e.getTemplateElement()),t.keyString.set(i,n)),t.stringsArray.set(e.strings,n),n}(()=>{try{const e={get capture(){return io=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();const ro=new Map,so=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const ao=(e,t)=>`${e}--${t}`;let co=!0;void 0===window.ShadyCSS?co=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),co=!1);const lo=e=>t=>{const n=ao(t.type,e);let i=ro.get(n);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},ro.set(n,i));let o=i.stringsArray.get(t.strings);if(void 0!==o)return o;const r=t.strings.join(ji);if(o=i.keyString.get(r),void 0===o){const n=t.getTemplateElement();co&&window.ShadyCSS.prepareTemplateDom(n,e),o=new Wi(t,n),i.keyString.set(r,o)}return i.stringsArray.set(t.strings,o),o},po=["html","svg"],ho=new Set,uo=(e,t,n)=>{ho.add(e);const i=n?n.element:document.createElement("template"),o=t.querySelectorAll("style"),{length:r}=o;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(i,e);const s=document.createElement("style");for(let e=0;e<r;e++){const t=o[e];t.parentNode.removeChild(t),s.textContent+=t.textContent}(e=>{po.forEach((t=>{const n=ro.get(ao(t,e));void 0!==n&&n.keyString.forEach((e=>{const{element:{content:t}}=e,n=new Set;Array.from(t.querySelectorAll("style")).forEach((e=>{n.add(e)})),qi(e,n)}))}))})(e);const a=i.content;n?function(e,t,n=null){const{element:{content:i},parts:o}=e;if(null==n)return void i.appendChild(t);const r=document.createTreeWalker(i,133,null,!1);let s=Ji(o),a=0,c=-1;for(;r.nextNode();)for(c++,r.currentNode===n&&(a=Gi(t),n.parentNode.insertBefore(t,n));-1!==s&&o[s].index===c;){if(a>0){for(;-1!==s;)o[s].index+=a,s=Ji(o,s);return}s=Ji(o,s)}}(n,s,a.firstChild):a.insertBefore(s,a.firstChild),window.ShadyCSS.prepareTemplateStyles(i,e);const c=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)t.insertBefore(c.cloneNode(!0),t.firstChild);else if(n){a.insertBefore(s,a.firstChild);const e=new Set;e.add(s),qi(n,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const mo={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},go=(e,t)=>t!==e&&(t==t||e==e),fo={attribute:!0,type:String,converter:mo,reflect:!1,hasChanged:go};class bo extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach(((t,n)=>{const i=this._attributeNameForProperty(n,t);void 0!==i&&(this._attributeToPropertyMap.set(i,n),e.push(i))})),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach(((e,t)=>this._classProperties.set(t,e)))}}static createProperty(e,t=fo){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():`__${e}`,i=this.getPropertyDescriptor(e,n,t);void 0!==i&&Object.defineProperty(this.prototype,e,i)}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(i){const o=this[e];this[t]=i,this.requestUpdateInternal(e,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||fo}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const n of t)this.createProperty(n,e[n])}}static _attributeNameForProperty(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,n=go){return n(e,t)}static _propertyValueFromAttribute(e,t){const n=t.type,i=t.converter||mo,o="function"==typeof i?i:i.fromAttribute;return o?o(e,n):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const n=t.type,i=t.converter;return(i&&i.toAttribute||mo.toAttribute)(e,n)}initialize(){this._updateState=0,this._updatePromise=new Promise((e=>this._enableUpdatingResolver=e)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((e,t)=>this[t]=e)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t,n=fo){const i=this.constructor,o=i._attributeNameForProperty(e,n);if(void 0!==o){const e=i._propertyValueToAttribute(t,n);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(o):this.setAttribute(o,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const n=this.constructor,i=n._attributeToPropertyMap.get(e);if(void 0!==i){const e=n.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=n._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,n){let i=!0;if(void 0!==e){const o=this.constructor;n=n||o.getPropertyOptions(e),o._valueHasChanged(this[e],t,n.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,n))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((e,t)=>this._propertyToAttribute(t,this[t],e))),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}bo.finalized=!0;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const yo=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,vo=Symbol();class wo{constructor(e,t){if(t!==vo)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(yo?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const xo=(e,...t)=>{const n=t.reduce(((t,n,i)=>t+(e=>{if(e instanceof wo)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[i+1]),e[0]);return new wo(n,vo)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const _o={};class ko extends bo{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,n)=>e.reduceRight(((e,n)=>Array.isArray(n)?t(n,e):(e.add(n),e)),n),n=t(e,new Set),i=[];n.forEach((e=>i.unshift(e))),this._styles=i}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map((e=>{if(e instanceof CSSStyleSheet&&!yo){const t=Array.prototype.slice.call(e.cssRules).reduce(((e,t)=>e+t.cssText),"");return new wo(String(t),vo)}return e}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?yo?this.renderRoot.adoptedStyleSheets=e.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e=>e.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==_o&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)})))}render(){return _o}}ko.finalized=!0,ko.render=(e,t,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const i=n.scopeName,o=so.has(t),r=co&&11===t.nodeType&&!!t.host,s=r&&!ho.has(i),a=s?document.createDocumentFragment():t;if(((e,t,n)=>{let i=so.get(t);void 0===i&&(Mi(t,t.firstChild),so.set(t,i=new no(Object.assign({templateFactory:oo},n))),i.appendInto(t)),i.setValue(e),i.commit()})(e,a,Object.assign({templateFactory:lo(i)},n)),s){const e=so.get(a);so.delete(a);const n=e.value instanceof Qi?e.value.template:void 0;uo(i,a,n),Mi(t,t.firstChild),t.appendChild(a),so.set(t,e)}!o&&r&&window.ShadyCSS.styleElement(t.host)},ko.shadowRootOptions={mode:"open"};var So=xo`.error {
  color: var(--error-color);
  border: 1px solid var(--error-color);
  border-radius: var(--input-radius);
  background: var(--error-background-color);
}

.error-message {
  color: var(--error-color);
  font-size: var(--small-font-size);
  margin-top: 6px;
}

.error::part(control) {
  background: var(--error-background-color);
}
`
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;const $o="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,Po=(e,t,n=null)=>{for(;t!==n;){const n=t.nextSibling;e.removeChild(t),t=n}},Ao=`{{lit-${String(Math.random()).slice(2)}}}`,Co=`\x3c!--${Ao}--\x3e`,Eo=new RegExp(`${Ao}|${Co}`);class To{constructor(e,t){this.parts=[],this.element=t;const n=[],i=[],o=document.createTreeWalker(t.content,133,null,!1);let r=0,s=-1,a=0;const{strings:c,values:{length:l}}=e;for(;a<l;){const e=o.nextNode();if(null!==e){if(s++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:n}=t;let i=0;for(let e=0;e<n;e++)Uo(t[e].name,"$lit$")&&i++;for(;i-- >0;){const t=c[a],n=Oo.exec(t)[2],i=n.toLowerCase()+"$lit$",o=e.getAttribute(i);e.removeAttribute(i);const r=o.split(Eo);this.parts.push({type:"attribute",index:s,name:n,strings:r}),a+=r.length-1}}"TEMPLATE"===e.tagName&&(i.push(e),o.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(Ao)>=0){const i=e.parentNode,o=t.split(Eo),r=o.length-1;for(let t=0;t<r;t++){let n,r=o[t];if(""===r)n=Ro();else{const e=Oo.exec(r);null!==e&&Uo(e[2],"$lit$")&&(r=r.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),n=document.createTextNode(r)}i.insertBefore(n,e),this.parts.push({type:"node",index:++s})}""===o[r]?(i.insertBefore(Ro(),e),n.push(e)):e.data=o[r],a+=r}}else if(8===e.nodeType)if(e.data===Ao){const t=e.parentNode;null!==e.previousSibling&&s!==r||(s++,t.insertBefore(Ro(),e)),r=s,this.parts.push({type:"node",index:s}),null===e.nextSibling?e.data="":(n.push(e),s--),a++}else{let t=-1;for(;-1!==(t=e.data.indexOf(Ao,t+1));)this.parts.push({type:"node",index:-1}),a++}}else o.currentNode=i.pop()}for(const e of n)e.parentNode.removeChild(e)}}const Uo=(e,t)=>{const n=e.length-t.length;return n>=0&&e.slice(n)===t},No=e=>-1!==e.index,Ro=()=>document.createComment(""),Oo=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function zo(e,t){const{element:{content:n},parts:i}=e,o=document.createTreeWalker(n,133,null,!1);let r=Mo(i),s=i[r],a=-1,c=0;const l=[];let d=null;for(;o.nextNode();){a++;const e=o.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(l.push(e),null===d&&(d=e)),null!==d&&c++;void 0!==s&&s.index===a;)s.index=null!==d?-1:s.index-c,r=Mo(i,r),s=i[r]}l.forEach((e=>e.parentNode.removeChild(e)))}const Lo=e=>{let t=11===e.nodeType?0:1;const n=document.createTreeWalker(e,133,null,!1);for(;n.nextNode();)t++;return t},Mo=(e,t=-1)=>{for(let n=t+1;n<e.length;n++){const t=e[n];if(No(t))return n}return-1},jo=new WeakMap,Io=e=>"function"==typeof e&&jo.has(e),Bo={},Wo={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class Do{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=$o?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],n=this.template.parts,i=document.createTreeWalker(e,133,null,!1);let o,r=0,s=0,a=i.nextNode();for(;r<n.length;)if(o=n[r],No(o)){for(;s<o.index;)s++,"TEMPLATE"===a.nodeName&&(t.push(a),i.currentNode=a.content),null===(a=i.nextNode())&&(i.currentNode=t.pop(),a=i.nextNode());if("node"===o.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(a.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,o.name,o.strings,this.options));r++}else this.__parts.push(void 0),r++;return $o&&(document.adoptNode(e),customElements.upgrade(e)),e
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */}}const Ho=` ${Ao} `;class Fo{constructor(e,t,n,i){this.strings=e,this.values=t,this.type=n,this.processor=i}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let i=0;i<e;i++){const e=this.strings[i],o=e.lastIndexOf("\x3c!--");n=(o>-1||n)&&-1===e.indexOf("--\x3e",o+1);const r=Oo.exec(e);t+=null===r?e+(n?Ho:Co):e.substr(0,r.index)+r[1]+r[2]+"$lit$"+r[3]+Ao}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */}}const Vo=e=>null===e||!("object"==typeof e||"function"==typeof e),qo=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class Go{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new Jo(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let i=0;i<t;i++){n+=e[i];const t=this.parts[i];if(void 0!==t){const e=t.value;if(Vo(e)||!qo(e))n+="string"==typeof e?e:String(e);else for(const t of e)n+="string"==typeof t?t:String(t)}}return n+=e[t],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class Jo{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===Bo||Vo(e)&&e===this.value||(this.value=e,Io(e)||(this.committer.dirty=!0))}commit(){for(;Io(this.value);){const e=this.value;this.value=Bo,e(this)}this.value!==Bo&&this.committer.commit()}}class Ko{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(Ro()),this.endNode=e.appendChild(Ro())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=Ro()),e.__insert(this.endNode=Ro())}insertAfterPart(e){e.__insert(this.startNode=Ro()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;Io(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=Bo,e(this)}const e=this.__pendingValue;e!==Bo&&(Vo(e)?e!==this.value&&this.__commitText(e):e instanceof Fo?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):qo(e)?this.__commitIterable(e):e===Wo?(this.value=Wo,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof Do&&this.value.template===t)this.value.update(e.values);else{const n=new Do(t,e.processor,this.options),i=n._clone();n.update(e.values),this.__commitNode(i),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,i=0;for(const o of e)n=t[i],void 0===n&&(n=new Ko(this.options),t.push(n),0===i?n.appendIntoPart(this):n.insertAfterPart(t[i-1])),n.setValue(o),n.commit(),i++;i<t.length&&(t.length=i,this.clear(n&&n.endNode))}clear(e=this.startNode){Po(this.startNode.parentNode,e.nextSibling,this.endNode)}}class Yo{constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;Io(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=Bo,e(this)}if(this.__pendingValue===Bo)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=Bo}}class Xo extends Go{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new Zo(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class Zo extends Jo{}let Qo=!1;(()=>{try{const e={get capture(){return Qo=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class er{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;Io(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=Bo,e(this)}if(this.__pendingValue===Bo)return;const e=this.__pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),i=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=tr(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=Bo}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const tr=e=>e&&(Qo?{capture:e.capture,passive:e.passive,once:e.once}:e.capture
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */);function nr(e){let t=ir.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},ir.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const i=e.strings.join(Ao);return n=t.keyString.get(i),void 0===n&&(n=new To(e,e.getTemplateElement()),t.keyString.set(i,n)),t.stringsArray.set(e.strings,n),n}const ir=new Map,or=new WeakMap,rr=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(e,t,n,i){const o=t[0];return"."===o?new Xo(e,t.slice(1),n).parts:"@"===o?[new er(e,t.slice(1),i.eventContext)]:"?"===o?[new Yo(e,t.slice(1),n)]:new Go(e,t,n).parts}handleTextExpression(e){return new Ko(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const sr=(e,...t)=>new Fo(e,t,"html",rr)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,ar=(e,t)=>`${e}--${t}`;let cr=!0;void 0===window.ShadyCSS?cr=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),cr=!1);const lr=e=>t=>{const n=ar(t.type,e);let i=ir.get(n);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},ir.set(n,i));let o=i.stringsArray.get(t.strings);if(void 0!==o)return o;const r=t.strings.join(Ao);if(o=i.keyString.get(r),void 0===o){const n=t.getTemplateElement();cr&&window.ShadyCSS.prepareTemplateDom(n,e),o=new To(t,n),i.keyString.set(r,o)}return i.stringsArray.set(t.strings,o),o},dr=["html","svg"],pr=new Set;window.JSCompiler_renameProperty=(e,t)=>e;const hr={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},ur=(e,t)=>t!==e&&(t==t||e==e),mr={attribute:!0,type:String,converter:hr,reflect:!1,hasChanged:ur};class gr extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise((e=>this._enableUpdatingResolver=e)),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach(((t,n)=>{const i=this._attributeNameForProperty(n,t);void 0!==i&&(this._attributeToPropertyMap.set(i,n),e.push(i))})),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach(((e,t)=>this._classProperties.set(t,e)))}}static createProperty(e,t=mr){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():"__"+e,i=this.getPropertyDescriptor(e,n,t);void 0!==i&&Object.defineProperty(this.prototype,e,i)}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(n){const i=this[e];this[t]=n,this._requestUpdate(e,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||mr}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const n of t)this.createProperty(n,e[n])}}static _attributeNameForProperty(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,n=ur){return n(e,t)}static _propertyValueFromAttribute(e,t){const n=t.type,i=t.converter||hr,o="function"==typeof i?i:i.fromAttribute;return o?o(e,n):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const n=t.type,i=t.converter;return(i&&i.toAttribute||hr.toAttribute)(e,n)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((e,t)=>this[t]=e)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t,n=mr){const i=this.constructor,o=i._attributeNameForProperty(e,n);if(void 0!==o){const e=i._propertyValueToAttribute(t,n);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(o):this.setAttribute(o,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const n=this.constructor,i=n._attributeToPropertyMap.get(e);if(void 0!==i){const e=n.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=n._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}_requestUpdate(e,t){let n=!0;if(void 0!==e){const i=this.constructor,o=i.getPropertyOptions(e);i._valueHasChanged(this[e],t,o.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==o.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,o))):n=!1}!this._hasRequestedUpdate&&n&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((e,t)=>this._propertyToAttribute(t,this[t],e))),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}gr.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const fr=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(n){n.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(n){n.createProperty(t.key,e)}};function br(e){return(t,n)=>void 0!==n?((e,t,n)=>{t.constructor.createProperty(n,e)})(e,t,n):fr(e,t)
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/}const yr="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,vr=Symbol();class wr{constructor(e,t){if(t!==vr)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(yr?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const xr=(e,...t)=>{const n=t.reduce(((t,n,i)=>t+(e=>{if(e instanceof wr)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[i+1]),e[0]);return new wr(n,vr)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const _r={};class kr extends gr{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(void 0===e)this._styles=[];else if(Array.isArray(e)){const t=(e,n)=>e.reduceRight(((e,n)=>Array.isArray(n)?t(n,e):(e.add(n),e)),n),n=t(e,new Set),i=[];n.forEach((e=>i.unshift(e))),this._styles=i}else this._styles=[e]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?yr?this.renderRoot.adoptedStyleSheets=e.map((e=>e.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e=>e.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==_r&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)})))}render(){return _r}}kr.finalized=!0,kr.render=(e,t,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const i=n.scopeName,o=or.has(t),r=cr&&11===t.nodeType&&!!t.host,s=r&&!pr.has(i),a=s?document.createDocumentFragment():t;if(((e,t,n)=>{let i=or.get(t);void 0===i&&(Po(t,t.firstChild),or.set(t,i=new Ko(Object.assign({templateFactory:nr},n))),i.appendInto(t)),i.setValue(e),i.commit()})(e,a,Object.assign({templateFactory:lr(i)},n)),s){const e=or.get(a);or.delete(a);((e,t,n)=>{pr.add(e);const i=n?n.element:document.createElement("template"),o=t.querySelectorAll("style"),{length:r}=o;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(i,e);const s=document.createElement("style");for(let e=0;e<r;e++){const t=o[e];t.parentNode.removeChild(t),s.textContent+=t.textContent}(e=>{dr.forEach((t=>{const n=ir.get(ar(t,e));void 0!==n&&n.keyString.forEach((e=>{const{element:{content:t}}=e,n=new Set;Array.from(t.querySelectorAll("style")).forEach((e=>{n.add(e)})),zo(e,n)}))}))})(e);const a=i.content;n?function(e,t,n=null){const{element:{content:i},parts:o}=e;if(null==n)return void i.appendChild(t);const r=document.createTreeWalker(i,133,null,!1);let s=Mo(o),a=0,c=-1;for(;r.nextNode();)for(c++,r.currentNode===n&&(a=Lo(t),n.parentNode.insertBefore(t,n));-1!==s&&o[s].index===c;){if(a>0){for(;-1!==s;)o[s].index+=a,s=Mo(o,s);return}s=Mo(o,s)}}(n,s,a.firstChild):a.insertBefore(s,a.firstChild),window.ShadyCSS.prepareTemplateStyles(i,e);const c=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)t.insertBefore(c.cloneNode(!0),t.firstChild);else if(n){a.insertBefore(s,a.firstChild);const e=new Set;e.add(s),zo(n,e)}})(i,a,e.value instanceof Do?e.value.template:void 0),Po(t,t.firstChild),t.appendChild(a),or.set(t,e)}!o&&r&&window.ShadyCSS.styleElement(t.host)};var Sr=function(e,t,n,i){var o,r=arguments.length,s=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r<3?o(s):r>3?o(t,n,s):o(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};let $r=class extends kr{constructor(){super(),this.manifestpath="manifest.json",this.openmodal=!1,this.hasprompt=!1,this.relatedApps=[],this.explainer="This app can be installed on your PC or mobile device.  This will allow this web app to look and behave like any other installed app.  You will find it in your app lists and be able to pin it to your home screen, start menus or task bars.  This installed web app will also be able to safely interact with other apps and your operating system. ",this.featuresheader="Key Features",this.descriptionheader="Description",this.installbuttontext="Install",this.cancelbuttontext="Cancel",this.iosinstallinfotext="Tap the share button and then 'Add to Homescreen'",this.isSupportingBrowser=window.hasOwnProperty("BeforeInstallPromptEvent"),this.isIOS=navigator.userAgent.includes("iPhone")||navigator.userAgent.includes("iPad")||navigator.userAgent.includes("Macintosh")&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2,this.installed=!1,window.addEventListener("beforeinstallprompt",(e=>this.handleInstallPromptEvent(e))),document.addEventListener("keyup",(e=>{"Escape"===e.key&&this.cancel()}))}static get styles(){return xr`:host{--install-focus-color:#919c9c;--install-button-color:#0078d4;--modal-z-index:9999;--background-z-index:9998;--modal-background-color:white}button{outline:0}#installModalWrapper{height:100vh;width:100vw;overflow:auto;position:fixed;bottom:0;top:0;left:0;right:0;z-index:var(--modal-z-index);display:flex;justify-content:center;align-items:center}#descriptionWrapper{margin-bottom:3em}#installModal{position:absolute;background:var(--modal-background-color);font-family:sans-serif;box-shadow:0 25px 26px rgba(32,36,50,.25),0 5px 9px rgba(51,58,83,.53);border-radius:10px;display:flex;flex-direction:column;padding:0;animation-name:opened;animation-duration:150ms;z-index:var(--modal-z-index);max-width:56em}@keyframes opened{from{transform:scale(.8,.8);opacity:.4}to{transform:scale(1,1);opacity:1}}@keyframes mobile{from{opacity:.6}to{opacity:1}}@keyframes fadein{from{opacity:.2}to{opacity:1}}#background{position:fixed;top:0;bottom:0;left:0;right:0;background:#e3e3e3b0;backdrop-filter:blur(5px);z-index:var(--background-z-index);animation-name:fadein;animation-duration:250ms}#headerContainer{display:flex;justify-content:space-between;margin:40px;margin-bottom:32px}#headerContainer h1{font-size:34px;color:#3c3c3c;margin-top:20px;margin-bottom:7px}#headerContainer img{height:122px;width:122px;background:#d3d3d3;border-radius:10px;padding:12px;border-radius:24px;margin-right:24px}#buttonsContainer{display:flex;justify-content:flex-end;position:relative;height:100px;background:#dedede75;width:100%;right:0;border-radius:0 0 12px 12px}#installButton,#installCancelButton,#openButton{text-align:center;align-content:center;align-self:center;vertical-align:middle;justify-self:flex-end;line-height:200%;flex:0 0 auto;display:inline-block;background:#0078d4;color:#fff;cursor:pointer;border:solid 1px transparent;outline:0}#openButton{background:var(--install-button-color)}#openButton:focus{outline:auto;outline:-webkit-focus-ring-color auto 1px}#installButton,#installCancelButton{min-width:130px;margin-right:30px;background:var(--install-button-color);border-radius:20px;font-weight:600;font-size:14px;line-height:21px;padding-top:10px;padding-bottom:9px;padding-left:20px;padding-right:20px;outline:0;color:#fff}#closeButton{background:0 0;border:none;color:#000;padding-left:12px;padding-right:12px;padding-top:4px;padding-bottom:4px;border-radius:20px;font-weight:600;outline:0;cursor:pointer;align-self:self-end}#closeButton:focus,#installButton:focus,#installCancelButton:focus{box-shadow:0 0 0 3px var(--install-focus-color)}#contentContainer{margin-left:40px;margin-right:40px;flex:1}#contentContainer h3{font-size:22px;color:#3c3c3c;margin-bottom:12px}#contentContainer p{font-size:14px;color:#3c3c3c}#featuresScreenDiv{display:flex;justify-content:space-around;align-items:center;margin-right:20px}#featuresScreenDiv h3{font-style:normal;font-weight:600;font-size:22px;line-height:225%;margin-top:0}#keyFeatures{overflow:hidden;padding-right:2em}#keyFeatures ul{padding-inline-start:22px;margin-block-start:12px}#featuresScreenDiv #keyFeatures li{font-style:normal;font-weight:600;font-size:16px;line-height:29px;color:rgba(51,51,51,.72)}#screenshotsContainer{max-height:220px;display:flex;max-width:30em}#screenshotsContainer button{border:none;width:4em;transition:background-color .2s}#screenshotsContainer button:focus,#screenshotsContainer button:hover{background-color:#bbb}#screenshotsContainer button svg{width:28px;fill:#6b6969}#screenshots{display:flex;scroll-snap-type:x mandatory;flex-wrap:wrap;flex-direction:column;overflow-x:scroll;width:22em;max-height:220px;-webkit-overflow-scrolling:touch}#screenshots div{display:flex;align-items:center;justify-content:center;scroll-snap-align:start;height:14em;width:100%;background:#efefef}#screenshots img{height:100%;object-fit:contain}#screenshots::-webkit-scrollbar{display:none}#tagsDiv{margin-top:1em;margin-bottom:1em}#desc{width:100%;max-width:40em;font-size:14px;color:#7e7e7e;text-overflow:ellipsis;overflow:hidden}#logoContainer{display:flex}#tagsDiv span{background:grey;color:#fff;padding-left:12px;padding-right:12px;padding-bottom:4px;font-weight:700;border-radius:24px;margin-right:12px;padding-top:1px}#iosText{color:var(--install-button-color);text-align:center;font-weight:700;position:fixed;bottom:0;left:0;right:0;backdrop-filter:blur(10px);background:rgba(239,239,239,.17);margin:0;padding:2em}#manifest-description{white-space:pre-wrap}@media (max-height:780px){#buttonsContainer{height:70px;background:0 0}}@media (max-width:1220px){#installModal{margin:0;border-radius:0;min-height:100%;width:100%;animation-name:mobile;animation-duration:250ms}#screenshots{justify-content:center}}@media (max-width:962px){#headerContainer h1{margin-top:0;margin-bottom:0}#logoContainer{align-items:center}#desc{display:none}#headerContainer{margin-bottom:24px}#headerContainer img{height:42px;width:42px}}@media (max-width:800px){#background{display:none}#installModal{overflow:scroll;box-shadow:none;max-width:100%;height:100%}#screenshotsContainer{width:100%}#screenshots img{height:180px}#buttonsContainer{display:flex;justify-content:center;bottom:0;margin-bottom:0;border-radius:0;padding-top:1em;padding-bottom:1em}#buttonsContainer #installButton{margin-right:0}#featuresScreenDiv{flex-direction:column;align-items:flex-start;margin-right:0}#headerContainer{margin:20px}#desc{display:none}#contentContainer{margin-left:20px;margin-right:20px;margin-bottom:5em}#headerContainer img{height:60px;width:60px;margin-right:12px}#buttonsContainer{position:fixed;bottom:0;background:#efefef2b;backdrop-filter:blur(10px)}}@media (max-width:400px){#headerContainer h1{font-size:26px}#headerContainer img{height:40px;width:40px}#featuresScreenDiv h3{font-size:18px;margin-bottom:0}#keyFeatures ul{margin-top:0}}@media all and (display-mode:standalone){button{display:none}}@media (prefers-color-scheme:dark){:host{--modal-background-color:black}#featuresScreenDiv #keyFeatures li,#installModal h1,#installModal h2,#installModal h3,#installModal p{color:#fff}#closeButton svg path{fill:#fff;opacity:1}#buttonsContainer{background:rgb(36 36 36)}}@media (inverted-colors:inverted){:host{--install-focus-color:#6e6363;--install-button-color:#ff872b;--modal-background-color:black}#featuresScreenDiv #keyFeatures li,#installModal h1,#installModal h2,#installModal h3,#installModal p{color:#fff}#closeButton svg path{fill:#fff;opacity:1}#buttonsContainer{background:rgb(36 36 36)}}`}async firstUpdated(){if(this.manifestpath)try{await this.getManifestData()}catch(e){console.error("Error getting manifest, check that you have a valid web manifest")}"getInstalledRelatedApps"in navigator&&(this.relatedApps=await navigator.getInstalledRelatedApps())}handleInstallPromptEvent(e){this.deferredprompt=e,this.hasprompt=!0,e.preventDefault()}checkManifest(e){e.icons&&e.icons[0]?e.name?e.description||console.error("Your web manifest must have a description listed"):console.error("Your web manifest must have a name listed"):console.error("Your web manifest must have atleast one icon listed")}async getManifestData(){try{const e=await fetch(this.manifestpath),t=await e.json();if(this.manifestdata=t,this.manifestdata)return this.checkManifest(this.manifestdata),t}catch(e){return null}}scrollToLeft(){const e=this.shadowRoot.querySelector("#screenshots");e.scrollBy({left:-e.clientWidth,top:0,behavior:"smooth"})}scrollToRight(){const e=this.shadowRoot.querySelector("#screenshots");e.scrollBy({left:e.clientWidth,top:0,behavior:"smooth"})}openPrompt(){this.openmodal=!0;let e=new CustomEvent("show");this.dispatchEvent(e)}closePrompt(){this.openmodal=!1;let e=new CustomEvent("hide");this.dispatchEvent(e)}shouldShowInstall(){return this.isSupportingBrowser&&this.relatedApps.length<1&&(this.hasprompt||this.isIOS)}async install(){if(this.deferredprompt){this.deferredprompt.prompt();let e=new CustomEvent("show");if(this.dispatchEvent(e),"accepted"===(await this.deferredprompt.userChoice).outcome){await this.cancel(),this.installed=!0;let e=new CustomEvent("hide");return this.dispatchEvent(e),!0}{await this.cancel(),this.installed=!0;let e=new CustomEvent("hide");return this.dispatchEvent(e),!1}}}getInstalledStatus(){return navigator.standalone?navigator.standalone:!!matchMedia("(display-mode: standalone)").matches}cancel(){return new Promise(((e,t)=>{this.openmodal=!1,this.hasAttribute("openmodal")&&this.removeAttribute("openmodal");let n=new CustomEvent("hide");this.dispatchEvent(n),e()}))}render(){return sr`${"standalone"in navigator&&!1===navigator.standalone||!0!==this.usecustom&&this.shouldShowInstall()&&!1===this.installed?sr`<button part="openButton" id="openButton" @click="${()=>this.openPrompt()}"><slot>${this.installbuttontext}</slot></button>`:null} ${!0===this.openmodal?sr`<div id="installModalWrapper">${this.openmodal?sr`<div id="background" @click="${()=>this.cancel()}"></div>`:null}<div id="installModal" part="installModal"><div id="headerContainer"><div id="logoContainer"><img src="${this.iconpath?this.iconpath:this.manifestdata.icons[0].src}" alt="App Logo"><div id="installTitle"><h1>${this.manifestdata.short_name||this.manifestdata.name}</h1><p id="desc">${this.explainer}</p></div></div><button id="closeButton" @click="${()=>this.cancel()}" aria-label="Close"><svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.33" fill-rule="evenodd" clip-rule="evenodd" d="M1.11932 0.357981C1.59693 -0.119327 2.37129 -0.119327 2.8489 0.357981L11.7681 9.27152L20.6873 0.357981C21.165 -0.119327 21.9393 -0.119327 22.4169 0.357981C22.8945 0.835288 22.8945 1.60916 22.4169 2.08646L13.4977 11L22.4169 19.9135C22.8945 20.3908 22.8945 21.1647 22.4169 21.642C21.9393 22.1193 21.165 22.1193 20.6873 21.642L11.7681 12.7285L2.8489 21.642C2.37129 22.1193 1.59693 22.1193 1.11932 21.642C0.641705 21.1647 0.641705 20.3908 1.11932 19.9135L10.0385 11L1.11932 2.08646C0.641705 1.60916 0.641705 0.835288 1.11932 0.357981Z" fill="#60656D"/></svg></button></div><div id="contentContainer"><div id="featuresScreenDiv">${this.manifestdata.features?sr`<div id="keyFeatures"><h3>${this.featuresheader}</h3><ul>${this.manifestdata.features?this.manifestdata.features.map((e=>sr`<li>${e}</li>`)):null}</ul></div>`:null} ${this.manifestdata.screenshots?sr`<div id="screenshotsContainer"><button @click="${()=>this.scrollToLeft()}" aria-label="previous image"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M401.4 224h-214l83-79.4c11.9-12.5 11.9-32.7 0-45.2s-31.2-12.5-43.2 0L89 233.4c-6 5.8-9 13.7-9 22.4v.4c0 8.7 3 16.6 9 22.4l138.1 134c12 12.5 31.3 12.5 43.2 0 11.9-12.5 11.9-32.7 0-45.2l-83-79.4h214c16.9 0 30.6-14.3 30.6-32 .1-18-13.6-32-30.5-32z"/></svg></button><section id="screenshots">${this.manifestdata.screenshots.map((e=>sr`<div><img alt="App Screenshot" src="${e.src}"></div>`))}</section><button @click="${()=>this.scrollToRight()}" aria-label="next image"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M284.9 412.6l138.1-134c6-5.8 9-13.7 9-22.4v-.4c0-8.7-3-16.6-9-22.4l-138.1-134c-12-12.5-31.3-12.5-43.2 0-11.9 12.5-11.9 32.7 0 45.2l83 79.4h-214c-17 0-30.7 14.3-30.7 32 0 18 13.7 32 30.6 32h214l-83 79.4c-11.9 12.5-11.9 32.7 0 45.2 12 12.5 31.3 12.5 43.3 0z"/></svg></button></div>`:null}</div><div id="descriptionWrapper"><h3>${this.descriptionheader}</h3><p id="manifest-description">${this.manifestdata.description}</p></div></div>${this.isIOS?sr`<p id="iosText">${this.iosinstallinfotext}</p>`:sr`<div id="buttonsContainer">${this.deferredprompt?sr`<button id="installButton" @click="${()=>this.install()}">${this.installbuttontext} ${this.manifestdata.short_name}</button>`:sr`<button @click="${()=>this.cancel()}" id="installCancelButton">${this.cancelbuttontext}</button>`}</div>`}</div></div>`:null}`}};Sr([br({type:String})],$r.prototype,"manifestpath",void 0),Sr([br({type:String})],$r.prototype,"iconpath",void 0),Sr([br({type:Object})],$r.prototype,"manifestdata",void 0),Sr([br({type:Boolean})],$r.prototype,"openmodal",void 0),Sr([br({type:Boolean})],$r.prototype,"showopen",void 0),Sr([br({type:Boolean})],$r.prototype,"isSupportingBrowser",void 0),Sr([br({type:Boolean})],$r.prototype,"isIOS",void 0),Sr([br({type:Boolean})],$r.prototype,"installed",void 0),Sr([br({type:Boolean})],$r.prototype,"hasprompt",void 0),Sr([br({type:Boolean})],$r.prototype,"usecustom",void 0),Sr([br({type:Array})],$r.prototype,"relatedApps",void 0),Sr([br({type:String})],$r.prototype,"explainer",void 0),Sr([br({type:String})],$r.prototype,"featuresheader",void 0),Sr([br({type:String})],$r.prototype,"descriptionheader",void 0),Sr([br({type:String})],$r.prototype,"installbuttontext",void 0),Sr([br({type:String})],$r.prototype,"cancelbuttontext",void 0),Sr([br({type:String})],$r.prototype,"iosinstallinfotext",void 0),Sr([br()],$r.prototype,"deferredprompt",void 0),$r=Sr([("pwa-install",e=>"function"==typeof e?((e,t)=>(window.customElements.define("pwa-install",t),t))(0,e):((e,t)=>{const{kind:n,elements:i}=t;return{kind:n,elements:i,finisher(e){window.customElements.define("pwa-install",e)}}})(0,e))],$r);let Pr=class extends Q{constructor(){super(),this.gettingManifest=!1,this.errorGettingURL=!1,this.disableStart=!0}static get styles(){return[So,c`
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
          background: transparent;
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
          font-size: .75em;
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
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
        }
        #input-and-error {
          grid-column: 1;
          grid-row: 1;
          display: flex;
          flex-direction: column;
        }
        #start-button {
          grid-column: 2;
          grid-row: 1;
        }
        .raise:hover,
        .raise:focus {
          transform: scale(1.01);
        }
        #demo {
          grid-column: 1 / 2;
          grid-row: 2;
        }
        #input-form fast-text-field {
          margin-right: 10px;
        }
        #input-form fast-text-field::part(root) {
          border: 1px solid #e5e5e5;
          border-radius: var(--input-radius);
        }
        #input-form fast-text-field::part(control) {
          color: var(--font-color);
          width: 26em;
        }
        #input-block {
          display: flex;
          flex-direction: column;
          flex: 0.8 1 0%;
          width: 100%;
        }
        #demo {
          font-size: .55em;
          margin: 0;
          margin-top: 5px;
          color: #292C3A;
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
        ${xt(c`
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
        ${wt(c`
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
          }
          #input-and-error {
            margin-right: 10px;
          }
          #input-form {
            width: 100%;
          }
          #input-form fast-text-field {
            margin-right: 0;
          }
          #home-header{
            font-size: 40px;
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
            row-gap: 5px;
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
            width: 85%;
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
          #input-form fast-text-field {
            margin-right: 0;
          }
          #input-form fast-text-field::part(control) {
            width: 100%;
          }
          .grid-item-header {
            font-size: 20px;
          }
          #input-header {
            font-size: 20px;
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
        @media screen and (-ms-high-contrast: white-on-black) {
          #input-form fast-text-field::part(control):focus {
            outline: none;
          }
          #input-form fast-text-field::part(control):focus-visible {
            outline: skyblue solid 6px;
            outline-offset: 2px;
          }
          #input-form fast-text-field::part(control) {
            color: white;
          }
        } 
        
        /*1024px - 1365px*/ 
        ${_t(c`
            #home-block {
              background: url(/assets/new/Hero1366_withmani.png);
              background-position: center center;
              background-size: cover;
              background-repeat: no-repeat;
            }
        `)}
          /* > 1920 */
        ${St(c`
            #wrapper {
              width: 1160px;
            }
        `)}
      `]}async firstUpdated(){sessionStorage.clear(),pi=void 0;const e=new URLSearchParams(location.search).get("site");e&&(this.siteURL=e.trim(),await this.analyzeSite()),Tt("landing-page-loaded",t.StartProcess)}handleURL(e){e&&(this.siteURL=e.target.value.trim()),Ct(this.siteURL)?this.disableStart=!1:this.disableStart=!0}async start(e){e.preventDefault(),await this.analyzeSite()}async analyzeSite(){var e,n;if(this.siteURL!==Ar&&sessionStorage.setItem("demoURL",JSON.stringify(!1)),this.siteURL){this.gettingManifest=!0;const i=Ct(this.siteURL);if(Tt(".top.entered_link_testing_started",t.ProcessCheckpoint,{url:this.siteURL,valid:i}),i)try{const e=await fi(this.siteURL);this.errorGettingURL=!1;const t=qn();this.updateProgress(t);const n=e.siteUrl;void 0!==n&&rt.go(`/testing?site=${n}`)}catch(e){this.errorGettingURL=!1;const t=qn();this.updateProgress(t);const n=Kn();void 0!==n&&rt.go(`/testing?site=${n}`)}else this.errorMessage=gt.input.home.error.invalidURL,this.errorGettingURL=!0,await this.updateComplete,null===(n=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".error-message"))||void 0===n||n.focus();setTimeout((()=>this.gettingManifest=!1),100)}}updateProgress(e){if(e&&e.progress[0]&&e.progress[0].items[0]){e.progress[0].items[0].done=Gt.DONE;Gn(e)}}placeDemoURL(){sessionStorage.setItem("demoURL",JSON.stringify(!0)),Tt("home.top.DemoURL_clicked",t.ProcessCheckpoint),this.siteURL=Ar,this.shadowRoot.getElementById("input-box").value=this.siteURL,this.analyzeSite()}render(){return z`
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
                  <a @click=${()=>Tt("home.top.PWAStarter_clicked",t.ProcessCheckpoint)} href="https://docs.pwabuilder.com/#/starter/quick-start" target="_blank" rel="noopener">Start a new PWA</a>
                  <img src="/assets/new/arrow.svg" alt="arrow" role="presentation"/>
                  
                </div>
                <p>
                  Looking to build a new Progressive Web App? Checkout all the documentation here.
                </p>
              </div>
          
              <div class="intro-grid-item">
                <div class="grid-item-header">  
                  <a @click=${()=>Tt("home.top.PWAStudio_clicked",t.ProcessCheckpoint)} href="https://aka.ms/install-pwa-studio" target="_blank" rel="noopener">Use dev tools</a>
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
                    <fast-text-field slot="input-container" type="text" id="input-box" placeholder="Enter the URL to your PWA" name="url-input"
                      class="${mt({error:this.errorGettingURL})}" aria-labelledby="input-header" @input="${e=>this.handleURL(e)}">
                    </fast-text-field>
              
                    ${this.errorMessage&&this.errorMessage.length>0?z`<span role="alert" aria-live="polite" class="error-message">${this.errorMessage}</span>`:null}
                  </div>
            
                  <loading-button id="start-button" type="submit" class="navigation raise" ?loading="${this.gettingManifest}" ?disabled="${this.disableStart}"
                  @click="${e=>this.start(e)}">Start</loading-button>
                  <p id="demo">Try a <button id="demo-action" aria-label="click here for demo url" @click=${()=>this.placeDemoURL()}>demo url</button></p>
                </div>
                
              </div>
            </form>
          </div>
        </div>
        <companies-packaged></companies-packaged>
        <resource-hub-new></resource-hub-new>
        <success-stories></success-stories>
        <community-hub></community-hub>
      </main>
    `}};n([oe()],Pr.prototype,"siteURL",void 0),n([oe()],Pr.prototype,"gettingManifest",void 0),n([oe()],Pr.prototype,"errorGettingURL",void 0),n([oe()],Pr.prototype,"errorMessage",void 0),n([oe()],Pr.prototype,"disableStart",void 0),Pr=n([te("app-home")],Pr);const Ar="https://webboard.app";let Cr=class extends Q{static get styles(){return c`
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

      fast-anchor::part(control) {
        border-bottom: none;
      }

      fast-anchor:focus {
        outline: solid;
        outline-width: 2px;
      }

      ion-icon {
        font-size: var(--font-size);
        color: white;
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

      fast-anchor:focus {
        border: 1px solid white;
        border-radius: 5px;
        padding: 3px;
      }

      @media screen and (-ms-high-contrast: black-on-white) {
          /* All high contrast styling rules */
          ion-icon {
            color: black;
          }
      } 

      @media screen and (-ms-high-contrast: white-on-black) {
          /* All high contrast styling rules */
          ion-icon {
            color: black;
          }
          
      } 

      ${St(c`
          footer {
            justify-content: center;
          }

          /* 30em here to line up with rest of
          layout at this size */
          #footer-top {
            margin-right: 30em;
          }
        `)}

      ${wt(c`
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

          #icons fast-anchor {
            margin-right: 46px;
          }

          #icons ion-icon {
            font-size: 27px;
            color: white;
          }
        `)}

      ${vt(c`
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
    `}constructor(){super()}render(){return z`
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
              @click=${()=>Tt(".footer.privacy_policy_clicked",t.ProcessCheckpoint)}
              >Our Privacy Statement</a
            >
            <a
              target="_blank"
              rel="noopener"
              href="https://github.com/pwa-builder/PWABuilder/blob/master/TERMS_OF_USE.md"
              @click=${()=>Tt(".footer.terms_of_use_clicked",t.ProcessCheckpoint)}
              >Terms of Use</a
            >
          </div>
        </div>

        <div id="icons">
          <fast-anchor
            target="_blank"
            rel="noopener"
            appearance="hypertext"
            href="https://github.com/pwa-builder/PWABuilder"
            aria-label="Contribute to our Github"
            @click=${()=>Tt(".footer.github_clicked",t.ProcessCheckpoint)}
          >
            <ion-icon name="logo-github" role="presentation"></ion-icon>
          </fast-anchor>

          <fast-anchor
            target="_blank"
            rel="noopener"
            appearance="hypertext"
            href="https://twitter.com/pwabuilder"
            aria-label="Follow us on Twitter"
            @click=${()=>Tt(".footer.twitter_clicked",t.ProcessCheckpoint)}
          >
            <ion-icon name="logo-twitter" role="presentation"></ion-icon>
          </fast-anchor>

          <fast-anchor
            target="_blank"
            rel="noopener"
            appearance="hypertext"
            href="https://www.youtube.com/c/PWABuilder"
            aria-label="Subscribe to our Youtube"
            @click=${()=>Tt(".footer.youtube_clicked",t.ProcessCheckpoint)}
          >
            <ion-icon name="logo-youtube" role="presentation"></ion-icon>
          </fast-anchor>
        </div>
      </footer>
    `}};Cr=n([te("app-footer")],Cr);let Er=class extends Q{constructor(){super(),this.show=!1}static get styles(){return c`
      #cookie-banner {
        background: rgb(243, 243, 243);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px;
        font-weight: 700;
        font-size: var(--small-font-size);
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



      ${vt(c`
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
    `}firstUpdated(){localStorage.getItem("PWABuilderGDPR")||(this.show=!0,localStorage.setItem("PWABuilderGDPR",JSON.stringify(!1)))}close(e){this.show=!1,localStorage.setItem("PWABuilderGDPR",JSON.stringify(e))}render(){return z`
      ${this.show?z`<div id="cookie-banner">
            

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
    `}};n([oe()],Er.prototype,"show",void 0),Er=n([te("cookie-banner")],Er);let Tr=class extends Q{constructor(){super(),this.show=!0}static get styles(){return c`
      #summit-banner {
        background: rgb(243, 243, 243);
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: fit-content;
        background-color: #342A6A;
        color: white;
        padding: .75em;
      }

      #banner-content {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1em;
      }

      #banner-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: .25em;
      }

      #banner-text a {
        color: white;
      }

      #bold-text {
        font-weight: bold;
      }

      #summit-banner p{
        font-size: 14px;
        line-height: 16px;
        margin: 0;
      }

      #spacer {
        width: 12px;
      }

      #closer {
        height: 100%;
        display: flex;
        align-self: flex-start;
      }

      #desk_close {
        height: 12px;
        width: 12px;
      }

      #desk_close:hover {
        cursor: pointer;
      }

      #mobile_box {
        height: 35px;
        width: 35px;
        display: none;
      }

      #mobile_close {
        height: 12px;
        width: 12px;
        display: none;
      }

      #mobile_close:hover {
        cursor: pointer;
      }

      ${vt(c`
        #summit-banner {
          align-items: center;
          display: flex;
          justify-content: space-between;
        }

        #banner-content {
          width: 100%;
        }

        #survey-banner p{
          font-size: 12px;
          line-height: 15px;
          margin: 0 10px;
        }

        #spacer {
          display: none;
        }

        #mobile_box {
          display: block;
        }

        #mobile_close {
          display: block;
        }

        #desk_box {
          display: none;
        }

        #desk_close {
          display: none;
        }
      `)}
    `}firstUpdated(){}close(){this.show=!1}render(){return z`
      ${this.show?z`
        <div id="summit-banner">
          <div id="spacer"></div>
          <div id="banner-content">

            <div id="banner-text">
              <p id="bold-text">Upcoming: PWA Summit on October 5th! 😄</p>
              <p>
                <a href="https://pwasummit.org/" target="_blank" rel="noopener">PWA Summit</a> is an online conference dedicated entirely to helping developers succeed with Progressive Web Apps. 
                Sign ups for speakers are now closed, but you can still register to attend <a href="https://pwasummit.org/register/" target="_blank" rel="noopener">here.</a>
              </p>
            </div>

          </div>
          <div id="closer" @click="${()=>this.close()}">
            <img id="desk_close" src="assets/images/Close_desk.png" alt="gift box image"/>
            <img id="mobile_close" src="assets/images/Close_mobile.png" alt="gift box image"/>
          </div>
        </div>`:null}
    `}};n([oe()],Tr.prototype,"show",void 0),Tr=n([te("summit-banner")],Tr);let Ur=class extends Q{constructor(){super(),this.show=!0}static get styles(){return c`
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
    `}firstUpdated(){}close(){this.show=!1}render(){return z`
      ${this.show?z`
        <div id="discord-box">
          <img id="logo" src="/assets/images/discord_logo.svg" alt="discord logo"/>
          <p>Want to chat? Join us on <a @click=${()=>Tt("discord_box_link_clicked",t.ProcessCheckpoint)} href="https://aka.ms/pwabuilderdiscord" target="_blank" rel="noopener" aria-label="Click to join us on Discord">Discord</a></p>
          <button id="close-wrapper" @click=${()=>this.close()} aria-label="discord modal close" type="button"><img id="close" src="/assets/images/Close_desk.png" role="presentation"/></button>
        </div>`:null}
    `}};n([oe()],Ur.prototype,"show",void 0),Ur=n([te("discord-box")],Ur);let Nr=class extends Q{static get styles(){return c`
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
    `}constructor(){super(),window.addEventListener("vaadin-router-location-changed",(t=>{var n,i,o,r;window.scrollTo({top:0,behavior:"smooth"}),i=t.detail.location.pathname,o=null===(n=t.detail.location.route)||void 0===n?void 0:n.component,Et.isProduction&&e.recordPageView(i,o,r)})),console.info("0.0.1 - September 13, 2022 08:19:33")}firstUpdated(){var e;new rt(null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#router-outlet")).setRoutes([{path:"",animate:!0,children:[{path:"/",component:"app-home"},{path:"/testing",component:"app-testing",action:async()=>{await import("./app-testing-4ad1aa1b.js")}},{path:"/reportcard",component:"app-report",action:async()=>{await import("./app-report-601ece88.js")}},{path:"/publish",component:"app-publish",action:async()=>{await import("./app-publish-d935c653.js")}},{path:"/basepackage",component:"app-basepack",action:async()=>{await import("./app-basepack-811b02b6.js")}},{path:"/congrats",component:"app-congrats",action:async()=>{await import("./app-congrats-23f0c6c1.js")}},{path:"imageGenerator",component:"image-generator",action:async()=>{await import("./image-generator-b7e7b502.js")}},{path:"/portals",component:"portals-publish",action:async()=>{await import("./portals-publish-bae352b9.js")}}]}])}render(){return z`
      <div>
        <summit-banner></summit-banner>
        <!--required cookie banner-->
        <cookie-banner></cookie-banner>
      
        <div>
          <div id="router-outlet"></div>
        </div>
        <discord-box></discord-box>
        <app-footer></app-footer>
      </div>
    `}};Nr=n([te("app-index")],Nr);export{z as $,Et as A,Ot as B,jt as C,Lt as D,So as E,Bt as F,It as G,gt as H,Qt as I,Zt as J,Pt as K,ft as L,jn as M,Wn as N,In as O,Bn as P,Dn as Q,rt as R,bt as S,Jn as T,Yn as U,si as V,Qn as W,ni as X,M as Y,Xn as Z,n as _,vt as a,Xt as a0,zt as a1,Ut as a2,At as a3,ti as a4,Yt as a5,Un as a6,Hn as a7,yt as a8,Mt as a9,Nr as aa,xi as b,xo as c,Tt as d,ie as e,ht as f,pt as g,L as h,ut as i,St as j,kt as k,xt as l,wt as m,te as n,Kn as o,_i as p,li as q,c as r,Q as s,oe as t,Zn as u,mt as v,ci as w,_t as x,fi as y,bi as z};
