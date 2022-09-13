import{_ as t,e,t as i,n as s,s as n,r as o,m as r,a,$ as l,f as h,i as c,g as d,h as u,j as p,k as f,x as m,l as g,o as v,p as w,d as b,q as x,u as y,R as k,v as S,w as A,y as C,z as O,A as M,E as $,B as T,C as P,D,F as E,G as R,H as L,I,J as N,K as B,L as _,M as F,N as U,O as z,P as W,Q as j,S as V,T as H,U as q,V as G,W as Q,X as J}from"./app-index-f96a4530.js";import{AnalyticsBehavior as K}from"@pwabuilder/site-analytics";import{r as Y}from"./events-dd48d9ef.js";import"./app-modal-4f12a1c5.js";import{i as X}from"./app-file-input-2c9b4293.js";import"./info-circle-tooltip-54f84d16.js";import{h as Z}from"./hidden-fdcdcdfb.js";import{d as tt}from"./download-8faf484b.js";import{l as et}from"./if-defined-0ff46bd7.js";import{l as it}from"./list-defaults-4bb7bbd3.js";import{s as st}from"./layout-defaults-c0eb1828.js";let nt=class extends n{constructor(){super(),this.scoreMessage=""}static get styles(){return o`
      h4 {
        font-size: 22px;
      }

      h5 {
        font-size: 18px;
        margin-bottom: 0;
      }

      #score-grid {
        display: grid;
        grid-template-columns: auto auto;
        grid-gap: 0 3em;

        margin-bottom: 16px;
      }

      #mani-scorecard-header p {
        font-size: var(--smallish-font-size);
        line-height: 24px;
      }

      ul {
        list-style: none;
        padding: 0;
      }

      ul li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
        font-size: 14px;
      }

      .good-score,
      .bad-score {
        font-weight: var(--font-bold);
      }

      .good-score {
        color: var(--success-color);
      }

      .bad-score {
        color: red;
      }

      ${r(o`
          #score-grid {
            grid-template-columns: auto;
          }
        `)}

      ${a(o`
          #score-grid {
            grid-template-columns: auto;
          }

          #options-block {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `)}
    `}firstUpdated(){this.organizedResults=this.organize()}organize(){var t;const e=[],i=[],s=[];return"boolean"!=typeof this.testResults&&(this.overallScore(this.testResults),null===(t=this.testResults)||void 0===t||t.map((t=>{"required"===t.category?e.push(t):"recommended"===t.category?i.push(t):s.push(t)}))),{required:e,recommended:i,optional:s}}overallScore(t){let e=0;if(t&&t.length>0){t.map((t=>{!0===t.result&&(e+=10)}));const i=new CustomEvent("scored",{detail:{score:e}});this.dispatchEvent(i)}}render(){return l`
      <div>
        <div id="mani-scorecard-header">
          <p>${this.scoreMessage}</p>

          <div id="options-block">
            <slot name="options-button"></slot>
          </div>
        </div>

        <div id="score-grid">
          <div id="required">
            ${this.organizedResults&&this.organizedResults.required.length>0?l` <h5>Required</h5>

                  <ul>
                    ${this.organizedResults.required.map((t=>l`
                          <li>
                            <span>${t.infoString}</span>

                            ${!0===t.result?l`<span class="good-score">10</span>`:l`<span class="bad-score">0</span>`}
                          </li>
                        `))}
                  </ul>`:null}
          </div>
          <div id="recommended">
            ${this.organizedResults&&this.organizedResults.recommended.length>0?l` <h5>Recommended</h5>

                  <ul>
                    ${this.organizedResults.recommended.map((t=>l`
                          <li>
                            <span>${t.infoString}</span>

                            ${!0===t.result?l`<span class="good-score">10</span>`:l`<span class="bad-score">0</span>`}
                          </li>
                        `))}
                  </ul>`:null}
          </div>
          <div id="optional">
            ${this.organizedResults&&this.organizedResults.optional.length>0?l` <h5>Optional</h5>

                  <ul>
                    ${this.organizedResults.optional.map((t=>l`
                          <li>
                            <span>${t.infoString}</span>

                            ${!0===t.result?l`<span class="good-score">10</span>`:l`<span class="bad-score">0</span>`}
                          </li>
                        `))}
                  </ul>`:null}
          </div>
        </div>
      </div>
    `}};t([e({attribute:!1})],nt.prototype,"testResults",void 0),t([e()],nt.prototype,"scoreMessage",void 0),t([i()],nt.prototype,"organizedResults",void 0),nt=t([s("score-results")],nt);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ot=h(class extends c{constructor(t){var e;if(super(t),t.type!==d.ATTRIBUTE||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,i)=>{const s=t[i];return null==s?e:e+`${i=i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ct){this.ct=new Set;for(const t in e)this.ct.add(t);return this.render(e)}this.ct.forEach((t=>{null==e[t]&&(this.ct.delete(t),t.includes("-")?i.removeProperty(t):i[t]="")}));for(const t in e){const s=e[t];null!=s&&(this.ct.add(t),t.includes("-")?i.setProperty(t,s):i[t]=s)}return u}});let rt=class extends n{constructor(){super(),this.maniScore=0,this.swScore=0,this.securityScore=0,this.overallScore=0,this.maxManiScore=80,this.maxSWSCore=20,this.maxSecurityScore=15}static get styles(){return o`
      :host {
        width: 100%;
        display: block;
      }

      #main-report-section {
        padding-left: 18px;
        padding-right: 32px;
        padding-bottom: 32px;
      }

      #report-content {
        --neutral-foreground-hover: black;
      }

      .accordion-heading-block {
        width: 76vw;
        display: flex;
        align-items: center;
        justify-content: space-between;

        color: var(--font-color);
      }

      h3,
      .accordion-heading,
      .accordion-score,
      #overall-score {
        font-size: var(--medium-font-size);
        font-weight: var(--font-bold);
      }

      .accordion-score {
        margin-right: 20px;
      }

      fast-accordion-item,
      fast-accordion {
        --neutral-divider-rest: #e5e5e5;
      }

      fast-accordion {
        border-top: none;
      }

      fast-accordion-item::part(icon) {
        display: none;
      }

      fast-accordion-item::part(button) {
        height: 6em;
        width: 70vw;
      }

      .flipper-button {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        background: white;
        box-shadow: 0 1px 4px 0px rgb(0 0 0 / 25%);
        border-radius: 50%;
        color: #5231a7;
        height: 32px;
        min-width: 32px;
      }

      .flipper-button ion-icon {
        pointer-events: none;
      }

      .flipper-button ion-icon {
        pointer-events: none;
      }

      .flipper-button::part(control) {
        font-size: 18px;
        padding: 0;
      }

      .flipper-button::part(content) {
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .score-block {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-right: 1.2em;
      }

      .options-button {
        --button-width: 217px;

        margin-top: 33px;
        margin-bottom: 33px;
      }

      #total-score {
        display: flex;
        flex-direction: column;
        align-items: initial;
        justify-content: initial;

        margin-right: 1.4em;
      }

      #total-score h4 {
        font-size: var(--medium-font-size);
      }

      #package-block {
        --button-width: 127px;

        display: flex;
        justify-content: flex-end;
        margin-top: 40px;
      }

      #package-block fast-anchor {
        width: 152px;
        color: white;
        box-shadow: var(--button-shadow);
        border-radius: var(--button-radius);
      }

      #total-score-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      #total-score-header h4 {
        font-size: var(--medium-font-size);
      }

      #badge-section {
        display: flex;
        align-items: center;
        margin-top: -18px;
      }

      #badge-section img {
        width: 60px;
        margin-left: -10px;
      }

      #badge-text h4 {
        font-size: var(--smallish-font-size);
        margin-bottom: 0;
        margin-top: 0;
      }

      #badge-text p {
        font-size: var(--smallish-font-size);
        font-weight: normal;
        margin-top: 0;
        margin-bottom: 0;
      }

      #overall-score #badge-section img {
        margin-right: 10px;
      }

      .locked {
        opacity: 0.5;
      }

      ${p(o`
          .accordion-heading-block {
            width: 97em;
          }
        `)}

      ${f(o`
          .accordion-heading-block {
            max-width: 83vw;
            width: 83vw;
          }

          #total-score {
            margin-right: 1.2em;
          }
        `)}

      ${m(o`
          .accordion-heading-block,
          #report-content {
            width: 78vw;
          }

          #total-score {
            width: 72vw;
          }
        `)}

      ${g(o`
          .accordion-heading-block {
            width: 90vw;
          }
        `)}

      ${r(o`
          .accordion-heading-block {
            width: 90vw;
          }

          #package-block {
            justify-content: center;
            margin-bottom: 40px;
          }
        `)}

      ${r(o`
          loading-button {
            --loading-button-height: 64px;
          }
          loading-button::part(underlying-button) {
            --font-size: 22px;
          }
        `,"no-lower")}

      ${a(o`
          #main-report-section {
            padding-left: 12px;
            padding-right: 12px;
          }

          .accordion-heading-block {
            width: 90vw;
          }

          #package-block {
            justify-content: center;
            margin-bottom: 40px;
          }
        `)}
    `}async firstUpdated(){if(this.results)this.scoreCardResults=this.results;else try{this.scoreCardResults=await this.handleNoResults()}catch(t){throw new Error(`Error handling results: ${t}`)}const t=v();t&&(this.currentURL=t),this.overallScore=w(),b("url-analyzed",K.ProcessCheckpoint,{url:this.currentURL||"",score:this.overallScore,hasManifest:Array.isArray(this.scoreCardResults.manifest)&&this.scoreCardResults.manifest.some((t=>!0===t.result)),hasServiceWorker:this.scoreCardResults.service_worker.some((t=>!0===t.result)),hasHttps:this.scoreCardResults.security.some((t=>!0===t.result))}),await this.handleBadges()}async handleBadges(){const t=A(),e=x();t&&t.forEach((t=>{"PWA"!==t.name?"Manifest"!==t.name?"Service Worker"===t.name?this.sw_icon={url:t.url,locked:!e.find((e=>t.name===e.name))}:"Security"===t.name&&(this.security_icon={url:t.url,locked:!e.find((e=>t.name===e.name))}):this.manifest_icon={url:t.url,locked:!e.find((e=>t.name===e.name))}:this.pwa_icon={url:t.url,locked:!e.find((e=>t.name===e.name))}}))}async handleNoResults(){return new Promise(((t,e)=>{const i=sessionStorage.getItem("results-string");if(i){const e=JSON.parse(i);e&&t(e)}else e(new Error("No results passed"))}))}opened(t,e){if(b(e+"_clicked",K.ProcessCheckpoint),t){const e=t.classList.contains("flipper-button")?t:t.querySelector(".flipper-button");e&&(e.classList.contains("opened")?(e.animate([{transform:"rotate(0deg)"}],{duration:200,fill:"forwards"}),e.classList.remove("opened")):(e.classList.add("opened"),e.animate([{transform:"rotate(0deg)"},{transform:"rotate(90deg)"}],{duration:200,fill:"forwards"})))}}handleManiScore(t){var e;this.maniScore=(null===(e=null==t?void 0:t.detail)||void 0===e?void 0:e.score)||0;const i=new CustomEvent("mani-scored",{detail:{score:this.maniScore}});this.dispatchEvent(i)}handleSWScore(t){var e;this.swScore=(null===(e=null==t?void 0:t.detail)||void 0===e?void 0:e.score)||0;const i=new CustomEvent("sw-scored",{detail:{score:this.swScore}});this.dispatchEvent(i)}handleSecurityScore(t){var e;this.securityScore=(null===(e=null==t?void 0:t.detail)||void 0===e?void 0:e.score)||0;const i=new CustomEvent("security-scored",{detail:{score:this.securityScore}});this.dispatchEvent(i)}openManiOptions(){b("manifest_accordion.manifest_options_button_clicked",K.ProcessCheckpoint);const t=new CustomEvent("open-mani-options",{detail:{open:!0}});this.dispatchEvent(t)}openSWOptions(){b("sw_accordion.sw_options_button_clicked",K.ProcessCheckpoint);const t=new CustomEvent("open-sw-options",{detail:{open:!0}});this.dispatchEvent(t)}async decideWhereToGo(){b("next_button_clicked",K.ProcessCheckpoint);const t=await y();"base"===t?k.go("/basepackage"):"publish"===t?k.go(`/publish?site=${this.currentURL}`):k.go("/basepackage")}decideScoreColor(t,e){return 0===t?"var(--error-color)":e?"var(--warning-color)":"var(--success-color)"}render(){var t,e,i,s;return l`
      <div id="main-report-section">
        <div id="report-content">
          <fast-accordion>
            <fast-accordion-item
              @click="${t=>this.opened(t.target,"manifest-accordian")}"
            >
              <div class="accordion-heading-block" slot="heading">
                <span class="accordion-heading">Manifest</span>

                <div class="score-block">
                  <span
                    class="accordion-score"
                    style=${ot({color:this.decideScoreColor(this.maniScore,null===(t=this.manifest_icon)||void 0===t?void 0:t.locked)})}
                    >${this.maniScore}</span
                  >

                  <div class="flipper-button" aria-label="caret dropdown" role="button">
                    <ion-icon name="caret-forward-outline"></ion-icon> 
                  </div>                
                  
                </div>
              </div>

              ${this.manifest_icon?l`<div id="badge-section">
                    <img
                      class="${S({locked:this.manifest_icon.locked})}"
                      src="${this.manifest_icon.url}"
                    />

                    <div id="badge-text">
                      ${this.manifest_icon.locked?l`<h4>
                            Uh oh, your Manifest needs more work before this
                            badge is unlocked
                          </h4>`:l`<h4>You have unlocked the Manifest Badge!</h4>`}
                    </div>
                  </div>`:null}
              ${this.scoreCardResults?l`<score-results
                    .testResults="${this.scoreCardResults.manifest}"
                    scoreMessage="PWABuilder has analyzed your Web Manifest, check out the results below. If you are missing something, tap Manifest Options to update your Manifest."
                    @scored="${t=>this.handleManiScore(t)}"
                  >
                    <app-button
                      @click="${()=>this.openManiOptions()}"
                      class="options-button secondary"
                      slot="options-button"
                      >Manifest Options</app-button
                    >
                  </score-results>`:null}
            </fast-accordion-item>
            <fast-accordion-item
              @click="${t=>this.opened(t.target,"sw-accordian")}"
            >
              <div class="accordion-heading-block" slot="heading">
                <span class="accordion-heading">Service Worker</span>

                <div class="score-block">
                  <span
                    style=${ot({color:this.decideScoreColor(this.swScore,null===(e=this.sw_icon)||void 0===e?void 0:e.locked)})}
                    class="accordion-score"
                    >${this.swScore}</span
                  >

                  <div class="flipper-button" aria-label="caret dropdown" role="button">
                    <ion-icon name="caret-forward-outline"></ion-icon> 
                  </div> 
                </div>
              </div>

              ${this.sw_icon?l`<div id="badge-section">
                    <img
                      class="${S({locked:this.sw_icon.locked})}"
                      src="${this.sw_icon.url}"
                    />

                    <div id="badge-text">
                      ${this.sw_icon.locked?l`<h4>
                            Uh oh, your Service Worker needs more work before
                            this badge is unlocked
                          </h4>`:l`<h4>
                            You have unlocked the Service Worker Badge!
                          </h4>`}
                    </div>
                  </div>`:null}
              ${this.scoreCardResults?l`<score-results
                    .testResults="${this.scoreCardResults.service_worker}"
                    scoreMessage="PWABuilder has analyzed your Service Worker, check out the results below. Want to add a Service Worker or check out our pre-built Service Workers? Tap Service Worker Options."
                    @scored="${t=>this.handleSWScore(t)}"
                  >
                    <app-button
                      @click="${()=>this.openSWOptions()}"
                      slot="options-button"
                      class="options-button secondary"
                      >Service Worker Options</app-button
                    >
                  </score-results>`:null}
            </fast-accordion-item>
            <fast-accordion-item
              @click="${t=>this.opened(t.target,"security-accordian")}"
            >
              <div class="accordion-heading-block" slot="heading">
                <span class="accordion-heading">Security</span>

                <div class="score-block">
                  <span
                    style=${ot({color:this.decideScoreColor(this.securityScore,null===(i=this.security_icon)||void 0===i?void 0:i.locked)})}
                    class="accordion-score"
                    >${this.securityScore}</span
                  >

                  <div class="flipper-button" aria-label="caret dropdown" role="button">
                    <ion-icon name="caret-forward-outline"></ion-icon> 
                  </div> 
                </div>
              </div>

              ${this.security_icon?l`<div id="badge-section">
                    <img
                      class="${S({locked:this.security_icon.locked})}"
                      src="${this.security_icon.url}"
                    />

                    <div id="badge-text">
                      ${this.security_icon.locked?l`<h4>
                            Uh oh, your Security needs more work before this
                            badge is unlocked
                          </h4>`:l`<h4>You have unlocked the Security Badge!</h4>`}
                    </div>
                  </div>`:null}
              ${this.scoreCardResults?l`<score-results
                    .testResults="${this.scoreCardResults.security}"
                    scoreMessage="PWABuilder has done a basic analysis of your HTTPS setup. You can use LetsEncrypt to get a free HTTPS certificate, or publish to Azure to get built-in HTTPS support."
                    @scored="${t=>this.handleSecurityScore(t)}"
                  ></score-results>`:null}
            </fast-accordion-item>
          </fast-accordion>
        </div>

        <div id="overall-score">
          <div id="total-score">
            <div id="total-score-header">
              <h4>Total Score</h4>
              <span
                style=${ot({color:this.decideScoreColor(this.overallScore,null===(s=this.pwa_icon)||void 0===s?void 0:s.locked)})}
                id="overall-score"
                >${this.overallScore}</span
              >
            </div>

            ${this.pwa_icon?l`<div id="badge-section">
                  <img
                    class="${S({locked:this.pwa_icon.locked})}"
                    src="${this.pwa_icon.url}"
                    role="presentation"
                  />

                  <div id="badge-text">
                    ${!1===this.pwa_icon.locked?l`<h4>Congrats!</h4>
                          <p>You have a great PWA!</p>`:l`
                          <h4>Uh Oh</h4>
                          <p>
                            Your PWA needs more work, look above for details.
                          </p>
                        `}
                  </div>
                </div>`:null}
          </div>

          <div id="package-block">
            <app-button
              class="navigation"
              @click="${()=>this.decideWhereToGo()}"
              >Next</app-button
            >
          </div>
        </div>
      </div>
    `}};var at;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function lt(t,e,i,s){var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}t([e({type:Object})],rt.prototype,"results",void 0),t([e({type:Object})],rt.prototype,"scoreCardResults",void 0),t([i()],rt.prototype,"maniScore",void 0),t([i()],rt.prototype,"swScore",void 0),t([i()],rt.prototype,"securityScore",void 0),t([i()],rt.prototype,"overallScore",void 0),t([i()],rt.prototype,"currentURL",void 0),t([i()],rt.prototype,"pwa_icon",void 0),t([i()],rt.prototype,"manifest_icon",void 0),t([i()],rt.prototype,"sw_icon",void 0),t([i()],rt.prototype,"security_icon",void 0),rt=t([s("report-card")],rt),function(t){t.sync="code-editor-sync",t.update="code-editor-update"}(at||(at={}));const ht=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ct=Symbol();class dt{constructor(t,e){if(e!==ct)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return ht&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const ut=new Map,pt=t=>{let e=ut.get(t);return void 0===e&&ut.set(t,e=new dt(t,ct)),e},ft=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(t instanceof dt)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return pt(i)},mt=ht?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>pt("string"==typeof t?t:t+""))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var gt,vt,wt,bt;const xt={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},yt=(t,e)=>e!==t&&(e==e||t==t),kt={attribute:!0,type:String,converter:xt,reflect:!1,hasChanged:yt};class St extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var e;null!==(e=this.v)&&void 0!==e||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this.Πp(i,e);void 0!==s&&(this.Πm.set(s,i),t.push(s))})),t}static createProperty(t,e=kt){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||kt}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(mt(t))}else void 0!==t&&e.push(mt(t));return e}static"Πp"(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise((t=>this.enableUpdating=t)),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this.ΠU)&&void 0!==e?e:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this.ΠU)||void 0===e||e.splice(this.ΠU.indexOf(t)>>>0,1)}"Π_"(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this.Πi.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{ht?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const i=document.createElement("style");i.textContent=e.cssText,t.appendChild(i)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})),this.Πo=new Promise((t=>this.Πl=t))}attributeChangedCallback(t,e,i){this.K(t,i)}"Πj"(t,e,i=kt){var s,n;const o=this.constructor.Πp(t,i);if(void 0!==o&&!0===i.reflect){const r=(null!==(n=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==n?n:xt.toAttribute)(e,i.type);this.Πh=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this.Πh=null}}K(t,e){var i,s,n;const o=this.constructor,r=o.Πm.get(t);if(void 0!==r&&this.Πh!==r){const t=o.getPropertyOptions(r),a=t.converter,l=null!==(n=null!==(s=null===(i=a)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof a?a:null)&&void 0!==n?n:xt.fromAttribute;this.Πh=r,this[r]=l(e,t.type),this.Πh=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||yt)(this[t],e)?(this.L.has(t)||this.L.set(t,e),!0===i.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this.Πg=this.Πq())}async"Πq"(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((t,e)=>this[e]=t)),this.Πi=void 0);let e=!1;const i=this.L;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this.Π$()}catch(t){throw e=!1,this.Π$(),t}e&&this.E(i)}willUpdate(t){}E(t){var e;null===(e=this.ΠU)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}"Π$"(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach(((t,e)=>this.Πj(e,this[e],t))),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var At,Ct,Ot,Mt;St.finalized=!0,St.elementProperties=new Map,St.elementStyles=[],St.shadowRootOptions={mode:"open"},null===(vt=(gt=globalThis).reactiveElementPlatformSupport)||void 0===vt||vt.call(gt,{ReactiveElement:St}),(null!==(wt=(bt=globalThis).reactiveElementVersions)&&void 0!==wt?wt:bt.reactiveElementVersions=[]).push("1.0.0-rc.2");const $t=globalThis.trustedTypes,Tt=$t?$t.createPolicy("lit-html",{createHTML:t=>t}):void 0,Pt=`lit$${(Math.random()+"").slice(9)}$`,Dt="?"+Pt,Et=`<${Dt}>`,Rt=document,Lt=(t="")=>Rt.createComment(t),It=t=>null===t||"object"!=typeof t&&"function"!=typeof t,Nt=Array.isArray,Bt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_t=/-->/g,Ft=/>/g,Ut=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,zt=/'/g,Wt=/"/g,jt=/^(?:script|style|textarea)$/i,Vt=(t,...e)=>({_$litType$:1,strings:t,values:e}),Ht=Symbol.for("lit-noChange"),qt=Symbol.for("lit-nothing"),Gt=new WeakMap,Qt=Rt.createTreeWalker(Rt,129,null,!1);class Jt{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const r=t.length-1,a=this.parts,[l,h]=((t,e)=>{const i=t.length-1,s=[];let n,o=2===e?"<svg>":"",r=Bt;for(let e=0;e<i;e++){const i=t[e];let a,l,h=-1,c=0;for(;c<i.length&&(r.lastIndex=c,l=r.exec(i),null!==l);)c=r.lastIndex,r===Bt?"!--"===l[1]?r=_t:void 0!==l[1]?r=Ft:void 0!==l[2]?(jt.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=Ut):void 0!==l[3]&&(r=Ut):r===Ut?">"===l[0]?(r=null!=n?n:Bt,h=-1):void 0===l[1]?h=-2:(h=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?Ut:'"'===l[3]?Wt:zt):r===Wt||r===zt?r=Ut:r===_t||r===Ft?r=Bt:(r=Ut,n=void 0);const d=r===Ut&&t[e+1].startsWith("/>")?" ":"";o+=r===Bt?i+Et:h>=0?(s.push(a),i.slice(0,h)+"$lit$"+i.slice(h)+Pt+d):i+Pt+(-2===h?(s.push(void 0),e):d)}const a=o+(t[i]||"<?>")+(2===e?"</svg>":"");return[void 0!==Tt?Tt.createHTML(a):a,s]})(t,e);if(this.el=Jt.createElement(l,i),Qt.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=Qt.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(Pt)){const i=h[o++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(Pt),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?te:"?"===e[1]?ee:"@"===e[1]?ie:Zt})}else a.push({type:6,index:n})}for(const e of t)s.removeAttribute(e)}if(jt.test(s.tagName)){const t=s.textContent.split(Pt),e=t.length-1;if(e>0){s.textContent=$t?$t.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],Lt()),Qt.nextNode(),a.push({type:2,index:++n});s.append(t[e],Lt())}}}else if(8===s.nodeType)if(s.data===Dt)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(Pt,t+1));)a.push({type:7,index:n}),t+=Pt.length-1}n++}}static createElement(t,e){const i=Rt.createElement("template");return i.innerHTML=t,i}}function Kt(t,e,i=t,s){var n,o,r,a;if(e===Ht)return e;let l=void 0!==s?null===(n=i._$Cl)||void 0===n?void 0:n[s]:i._$Cu;const h=It(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===h?l=void 0:(l=new h(t),l._$AT(t,i,s)),void 0!==s?(null!==(r=(a=i)._$Cl)&&void 0!==r?r:a._$Cl=[])[s]=l:i._$Cu=l),void 0!==l&&(e=Kt(t,l._$AS(t,e.values),l,s)),e}class Yt{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:Rt).importNode(i,!0);Qt.currentNode=n;let o=Qt.nextNode(),r=0,a=0,l=s[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new Xt(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new se(o,this,t)),this.v.push(e),l=s[++a]}r!==(null==l?void 0:l.index)&&(o=Qt.nextNode(),r++)}return n}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Xt{constructor(t,e,i,s){this.type=2,this._$C_=!0,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$C_}get parentNode(){return this._$AA.parentNode}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Kt(this,t,e),It(t)?t===qt||null==t||""===t?(this._$AH!==qt&&this._$AR(),this._$AH=qt):t!==this._$AH&&t!==Ht&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.A(t):(t=>{var e;return Nt(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.M(t):this.$(t)}C(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}A(t){this._$AH!==t&&(this._$AR(),this._$AH=this.C(t))}$(t){const e=this._$AA.nextSibling;null!==e&&3===e.nodeType&&(null===this._$AB?null===e.nextSibling:e===this._$AB.previousSibling)?e.data=t:this.A(Rt.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=Jt.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.m(i);else{const t=new Yt(n,this),e=t.p(this.options);t.m(i),this.A(e),this._$AH=t}}_$AC(t){let e=Gt.get(t.strings);return void 0===e&&Gt.set(t.strings,e=new Jt(t)),e}M(t){Nt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new Xt(this.C(Lt()),this.C(Lt()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$C_=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class Zt{constructor(t,e,i,s,n){this.type=1,this._$AH=qt,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(qt),this.strings=i):this._$AH=qt}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(void 0===n)t=Kt(this,t,e,0),o=!It(t)||t!==this._$AH&&t!==Ht,o&&(this._$AH=t);else{const s=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=Kt(this,s[i+r],e,r),a===Ht&&(a=this._$AH[r]),o||(o=!It(a)||a!==this._$AH[r]),a===qt?t=qt:t!==qt&&(t+=(null!=a?a:"")+n[r+1]),this._$AH[r]=a}o&&!s&&this.P(t)}P(t){t===qt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class te extends Zt{constructor(){super(...arguments),this.type=3}P(t){this.element[this.name]=t===qt?void 0:t}}class ee extends Zt{constructor(){super(...arguments),this.type=4}P(t){t&&t!==qt?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class ie extends Zt{constructor(){super(...arguments),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=Kt(this,t,e,0))&&void 0!==i?i:qt)===Ht)return;const s=this._$AH,n=t===qt&&s!==qt||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==qt&&(s===qt||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class se{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Kt(this,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ne,oe,re,ae,le,he;null===(Ct=(At=globalThis).litHtmlPlatformSupport)||void 0===Ct||Ct.call(At,Jt,Xt),(null!==(Ot=(Mt=globalThis).litHtmlVersions)&&void 0!==Ot?Ot:Mt.litHtmlVersions=[]).push("2.0.0-rc.4"),(null!==(ne=(he=globalThis).litElementVersions)&&void 0!==ne?ne:he.litElementVersions=[]).push("3.0.0-rc.2");class ce extends St{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();super.update(t),this.Φt=((t,e,i)=>{var s,n;const o=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let r=o._$litPart$;if(void 0===r){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;o._$litPart$=r=new Xt(e.insertBefore(Lt(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return Ht}}ce.finalized=!0,ce._$litElement$=!0,null===(re=(oe=globalThis).litElementHydrateSupport)||void 0===re||re.call(oe,{LitElement:ce}),null===(le=(ae=globalThis).litElementPlatformSupport)||void 0===le||le.call(ae,{LitElement:ce});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const de=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){window.customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,ue=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function pe(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):ue(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function fe(t){return pe({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const me=t=>(...e)=>({_$litDirective$:t,values:e});class ge{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ve=me(class extends ge{constructor(t){var e;if(super(t),1!==t.type||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).filter((e=>t[e])).join(" ")}update(t,[e]){if(void 0===this.st){this.st=new Set;for(const t in e)e[t]&&this.st.add(t);return this.render(e)}const i=t.element.classList;this.st.forEach((t=>{t in e||(i.remove(t),this.st.delete(t))}));for(const t in e){const s=!!e[t];s!==this.st.has(t)&&(s?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return Ht}}),we=t=>{const[e,i,s]=$e(t);return`hsl(0, 0%, ${-1e7*((.2126*e+.7152*i+.0722*s)/255-.5)}%)`};function be(t){const[e,i,s]=$e(t);return.2126*e+.7152*i+.0722*s<=128}function xe(t){return!t.purpose||"any"===t.purpose}function ye(t){return Me(t).some((t=>t.height===t.width))}function ke(t){var e;return"image/png"===t.type||!t.type&&(null===(e=t.src)||void 0===e?void 0:e.endsWith(".png"))}function Se(t){var e;return"image/jpeg"===t.type||"image/jpg"===t.type||!t.type&&(null===(e=t.src)||void 0===e?void 0:e.endsWith(".jpg"))}function Ae(t,e,i){const s=Ce(t);return!!s&&s.width>=e&&s.height>=i}function Ce(t){const e=Me(t);if(0===e.length)return null;const i=e.sort(((t,e)=>Oe(t,e)));return i[i.length-1]}function Oe(t,e){if(!t&&!e)return 0;if(!t)return-1;if(!e)return 1;const i=t.width+t.height,s=e.width+e.height;return i>s?1:i<s?-1:0}function Me(t){return(t.sizes||"").split(" ").map((t=>(t=>{const e=t.split("x");return{width:Number.parseInt(e[0]||"0",16),height:Number.parseInt(e[1]||"0",16)}})(t)))}function $e(t){return t&&(function(t){t=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,((t,e,i,s)=>e+e+i+i+s+s));const e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16),e[4]?parseInt(e[4],16):void 0]:null}(t)||function(t){var e=t.match(/rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/);return e&&e.length>=4?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16),e[4]?parseInt(e[4],16):void 0]:null}(t)||function(t){const e=document.createElement("canvas");e.width=1,e.height=1;const i=e.getContext("2d");i.fillStyle=t,i.fillRect(0,0,1,1);const[s,n,o,r]=i.getImageData(0,0,1,1).data;return[s,n,o,r]}(t))||[0,0,0]}class Te extends ce{constructor(){super(...arguments),this.platform="windows",this.isInFullScreen=!1}mainContent(){switch(this.platform){case"windows":return this.renderWindows();case"android":return this.renderAndroid();case"iOS":return this.renderiOS()}}render(){return Vt`
      <div class=${this.isInFullScreen?"fullscreen-content":""}>
        ${this.mainContent()}
      </div>
    `}}Te.styles=ft`
    .fullscreen-content {
      transform: scale(2.1);
      margin-top: 10vh;
      max-height: 10vh;
    }
  `,lt([pe()],Te.prototype,"platform",void 0),lt([pe({type:Boolean})],Te.prototype,"isInFullScreen",void 0);let Pe=class extends Te{constructor(){super(...arguments),this.siteUrl="",this.manifestUrl=""}static get styles(){return[super.styles,ft`
        .container {
          position: relative;
          width: 220px;
          margin: 20px auto 0;
        }

        .container.windows {
          margin: 80px auto 0;
          font-family: var(--windows-font-family, Arial);
        }

        .container.android {
          width: 200px;
        }

        .android .preview-img {
          width: 100%;
          height: auto;
          margin: 0 auto;
          background: #FFF;
          box-shadow: var(--card-box-shadow);
          border-radius: 8.11976px;
          object-fit: cover;
          z-index: -1;
        }

        .android .url-bar {
          background-color: rgb(215, 215, 215);
          opacity: 0.5;
          position: absolute;
          top: 48px;
          left: 58px;
          font-size: 6.5px;
          width: 90px;
          overflow-x: hidden;
          white-space: nowrap;
        }

        .android .dialog {
          background-color: #FFF;
          position: absolute;
          width: 100%;
          top: 174px;
          height: 250px;
          border-radius: 7px 7px 0 0;
          font-family: var(--android-font-family, 'Arial');
          padding: 9px;
          box-sizing: border-box;
        }

        .android .swipe-bar {
          background-color: rgb(215, 215, 215);
          width: 15px;
          height: 1px;
          position: absolute;
          top: 3px;
          border-radius: 10px;
          left: calc(50% - 7.5px);
        }

        .android .dialog-header {
          display: flex;
        }

        .android .dialog-header img {
          width: 18px;
          height: 18px;
          margin-right: 8px;
        }

        .android .app-name {
          font-size: 8px;
          margin: 0;
        }

        .android .app-url {
          font-size: 8px;
          color: rgb(215, 215, 215);
          white-space: nowrap;
          margin: 0;
          width: 90px;
          overflow-x: hidden;
        }

        .android .install-btn {
          background-color: #4285F4;
          color: #FFF;
          display: flex; 
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 22px;
          font-size: 8px;
          border-radius: 2px;
          margin-left: auto;
        }

        .android .divider {
          background-color: rgb(215, 215, 215);
          height: 1px;
          width: 200px;
          margin: 5px 0 10px -9px;
        }

        .android .description {
          width: 100%;
          margin: 0;
          font-size: 8px;
        }

        .android .screenshots {
          width: calc(100% - 19px);
          display: flex;
          height: 155px;
          margin-top: 10px;
          overflow-x: hidden;
          position: absolute;
          bottom: 8px;
        }

        .android .screenshots img {
          width: auto;
          height: 100%;
          margin-right: 5%;
        }

        .windows .preview-img {
          position: absolute;
          width: 100%;
          height: 204px;
          top: 0;
        }

        .windows .add-dialog {
          background-color: #FFF;
          width: 208px;
          height: 118px;
          position: absolute;
          top: 36px;
          left: 6px;
          z-index: 1;
          padding: 12px;
          box-sizing: border-box;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 6px;
        }

        .windows .add-dialog .header {
          display: flex;
        }

        .windows .add-dialog .icon {
          width: 17.5px;
          height: 17.5px;
          border-radius: 50%;
        }

        .windows .add-dialog .dialog-title {
          margin: 0 0 0 7px;
          font-size: 12px;
          font-weight: 600;
        }

        .windows .add-dialog .dialog-text {
          margin: 0 0 7px 25px;
          font-size: 7px;
        } 

        .windows .dialog-text {
          font-weight: 400;
          font-size: 7.84722px;
          margin: 0;
        }

        .windows .action-buttons {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 10px;
        }

        .windows .action-buttons div {
          font-size: 8px;
          font-weight: 600;
          height: 18px;
          width: 48%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .windows .action-buttons .install {
          color: #FFF;
          background-color: #0579CE;
        }

        .windows .action-buttons .cancel {
          background-color: #EFEFEF;
        }

        .ios .phone-img {
          width: 100%;
          box-shadow: var(--card-box-shadow);
        }

        .ios .add-btn {
          font-family: var(--ios-font-family, Arial);
          position: absolute;
          font-weight: 600;
          top: 0;
          right: 0;
          background-color: #FAFAFA;
          width: 38px;
          height: 28px;
          font-size: 11px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #147EFB;
        }

        .ios .icon {
          position: absolute;
          top: 58px;
          left: 7px;
          background-color: #FFF;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 37px;
          height: 37px;
        }
    
        .ios .icon img {
          width: 100%;
          height: 100%;
        }

        .ios .hidden {
          position: absolute;
          background-color: #F1F1F1;
          top: 238px;
          height: 34px;
          width: 100%;
        }

        .ios .app-name {
          background-color: #FFF;
          position: absolute;
          top: 58px;
          left: 52px;
          font-size: 11px;
          font-family: var(--ios-font-family, Arial);
          font-weight: 600;
        }

        .ios .app-link {
          overflow-x: hidden;
          color: rgb(186, 191, 200);
          background-color: #FFF;
          position: absolute;
          top: 86px;
          left: 52px;
          font-size: 9px;
          width: 159px;
          font-family: var(--ios-font-family, Arial);
          white-space: nowrap;
        }
      `]}getImageUrl(t){return`https://pwabuilder-safe-url.azurewebsites.net/api/getsafeurl?url=${new URL(t,this.manifestUrl).href}`}renderWindows(){return Vt`
      <div 
      role="img" 
      tabindex="0" 
      aria-label="PWA installation in Windows" 
      class="container windows">
        <div class="add-dialog">
          <div class="header">
            ${this.iconUrl?Vt`<img class="icon" alt="App's Windows icon" src=${this.iconUrl} />`:Vt`<div class="icon"></div>`}
            <p class="dialog-title">Install ${this.appName||"PWA App"}</p>
          </div>
          <p class="dialog-text">Publisher: ${this.siteUrl}</p>
          <p class="dialog-text">
            This site can be installed as an application. It will open in its own window and 
            safely integrate with Window Features.
          </p>
          <div class="action-buttons">
            <div class="install">Install</div>
            <div class="cancel">Not Now</div>
          </div>
        </div>
        <img  
        class="preview-img"
        alt="Application mobile preview" 
        src="https://github.com/pwa-builder/manifest-previewer/raw/main/assets/images/windows/background.svg" />
      </div>
    `}renderAndroid(){var t;return Vt`
      <div 
      role="img" 
      tabindex="0" 
      aria-label="PWA installation in Android" 
      class="container android">
        <div class="url-bar">${this.siteUrl}</div>
        <div class="dialog">
          <div class="swipe-bar"></div>
          <div class="dialog-header">
            ${this.iconUrl?Vt`<img alt="App icon" src=${this.iconUrl} />`:null}
            <div class="header-text">
              <p class="app-name">${this.appName}</p>
              <p class="app-url">${this.siteUrl}</p>
            </div>
            <div class="install-btn">Install</div>
          </div>
          <div class="divider"></div>
          <p class="description">
            ${this.description||"A description of your app."}
          </p>
          <div class="screenshots">
            ${null===(t=this.screenshots)||void 0===t?void 0:t.slice(0,2).map((t=>Vt`<img alt="Preview" src=${this.getImageUrl(t.src)} />`))}
          </div>
        </div>
        <img 
        class="preview-img"
        alt="Application mobile preview" 
        src="https://github.com/pwa-builder/manifest-previewer/raw/main/assets/images/android/background.svg" />
      </div>
    `}renderiOS(){return Vt`
      <div 
      role="img" 
      tabindex="0" 
      aria-label="PWA installation in iOS" 
      class="container ios">
        <div class="add-btn">Add</div>
        <img class="phone-img" alt="iOS PWA installation" src="https://github.com/pwa-builder/manifest-previewer/raw/main/assets/images/ios/add-to-home.png" />
        <div class="hidden"></div>
        <div class="icon">
          ${this.iconUrl?Vt`<img alt="App icon" src=${this.iconUrl} />`:null}
        </div>
        <div class="app-name">${this.appName}</div>
        <div class="app-link">${this.siteUrl}</div>
      </div>
    `}};lt([pe()],Pe.prototype,"iconUrl",void 0),lt([pe()],Pe.prototype,"siteUrl",void 0),lt([pe()],Pe.prototype,"manifestUrl",void 0),lt([pe()],Pe.prototype,"appName",void 0),lt([pe()],Pe.prototype,"appShortName",void 0),lt([pe()],Pe.prototype,"description",void 0),lt([pe({type:Array})],Pe.prototype,"screenshots",void 0),Pe=lt([de("install-screen")],Pe);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const De=me(class extends ge{constructor(t){var e;if(super(t),1!==t.type||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,i)=>{const s=t[i];return null==s?e:e+`${i=i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ct){this.ct=new Set;for(const t in e)this.ct.add(t);return this.render(e)}this.ct.forEach((t=>{null==e[t]&&(this.ct.delete(t),t.includes("-")?i.removeProperty(t):i[t]="")}));for(const t in e){const s=e[t];null!=s&&(this.ct.add(t),t.includes("-")?i.setProperty(t,s):i[t]=s)}return Ht}});let Ee=class extends ce{render(){return Vt`<p class="message"><slot></slot></p>`}};Ee.styles=ft`
    .message {
      font-style: italic;
      font-size: 14px;
      opacity: 0.8;
      color: var(--secondary-font-color);
      font-weight: 600;
      margin: 0;
      text-align: center;
    }
  `,Ee=lt([de("disclaimer-message")],Ee);let Re=class extends Te{constructor(){super(...arguments),this.contrastingBackgroundColor=""}static get styles(){return[super.styles,ft`
        .container {
          position: relative;
          width: 220px;
          margin: 10px auto 0;
        }

        .android .phone {
          width: 100%;
          height: 460px;
          background: #FFF;
          box-shadow: var(--card-box-shadow);
          border-radius: 8.11976px;
          object-fit: cover;
          object-position: top;
        }

        .android .screen {
          position: absolute;
          width: 100%;
          height: 400px;
          top: 19px;
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: var(--pwa-background-color, #FFF);
        }

        .phone-bar {
          padding: 7px 0;
          width: 100%;
          background-color: var(--pwa-theme-color, #EBD0FE);
        }

        .icon {
          margin: auto;
          width: 90px;
          height: 90px;
          margin-top: calc(40% + 45px);
        }

        .app-name {
          width: fit-content;
          margin: 0 auto 30px;
          font-size: 16px;
        }

        .ios .phone {
          width: 100%;
          position: absolute;
          top: 0;
          box-shadow: var(--card-box-shadow);
          border-radius: 16px;
          object-fit: none;
        }

        .ios .screen {
          height: 280px;
          width: 188px;
          position: absolute;
          top: 66px;
          left: 16px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-family: var(--ios-font-family, Arial);
          background-color: var(--pwa-background-color, #FFF);
        }

        .ios .status-bar {
          width: 100%;
          position: absolute;
          top: 2px;
          height: 19px;
          object-fit: cover;
          object-position: top;
        }

        .ios .icon {
          margin: 0 0 10px;
          width: 80px;
          height: 80px;
        }

        .container.windows {
          width: 250px;
          margin-top: 120px;
        }
      `]}firstUpdated(){this.contrastingBackgroundColor=this.backgroundColor?we(this.backgroundColor):"#000"}renderWindows(){return Vt`
      <div class="container windows">
        <disclaimer-message>
          Windows does not currently use splash screens.
        </disclaimer-message>
      </div>
    `}renderAndroid(){return Vt`
    <div 
    role="img" 
    tabindex="0" 
    aria-label="Splash screen in Android" 
    class="container android">
      <img class="phone" alt="Application mobile preview" src="https://github.com/pwa-builder/manifest-previewer/raw/main/assets/images/android/background.svg" />
      <div class="screen" style=${De({"--pwa-background-color":this.backgroundColor})}>
        <div 
        class="phone-bar"
        style=${De({"--pwa-theme-color":this.themeColor})}></div>
        ${this.iconUrl?Vt`
          <img 
          class="icon" 
          src=${this.iconUrl} 
          alt="App's splash screen" />
          `:Vt`<div class="icon"></div>`}
        <h5 class="app-name" style=${De({color:this.contrastingBackgroundColor})}>
          ${this.appName||"PWA App"}
        </h5>
        <div class="phone-bar" style=${De({"--pwa-theme-color":this.themeColor})}></div>
      </div>
    </div>
    `}renderiOS(){return Vt`
      <div
      role="img" 
      tabindex="0" 
      aria-label="Splash screen in iOS"  
      class="container ios"> 
        <img class="phone" alt="Iphone" src="https://github.com/pwa-builder/manifest-previewer/raw/main/assets/images/ios/iphone.svg" />
        <div class="screen" style=${De({"--pwa-background-color":this.backgroundColor})}>
          <img class="status-bar" alt="iOS status bar" src="https://github.com/pwa-builder/manifest-previewer/raw/main/assets/images/ios/statusbar.svg" />
          ${this.iconUrl?Vt`<img class="icon" src=${this.iconUrl} alt="App's splash screen" />`:null}
          <h5 class="app-name" style=${De({color:this.contrastingBackgroundColor})}>
            ${this.appName||"PWA App"}
          </h5>
        </div>
      </div>
    `}};lt([pe()],Re.prototype,"backgroundColor",void 0),lt([pe()],Re.prototype,"themeColor",void 0),lt([pe()],Re.prototype,"iconUrl",void 0),lt([pe()],Re.prototype,"appName",void 0),lt([fe()],Re.prototype,"contrastingBackgroundColor",void 0),Re=lt([de("splash-screen")],Re);let Le=class extends Te{static get styles(){return[super.styles,ft`
        .container {
          position: relative;
          margin: 70px auto 0;
          width: 260px;
        }

        .container.android {
          height: 225px;
          box-shadow: var(--card-box-shadow);
          border-radius: 5px;
          font-family: var(--android-font-family);
        }

        .container.ios {
          margin-top: 50px;
        }

        .android .info-title{
          font-size: 16px;
          position: absolute;
          top: 10px;
          left: 10px;
        } 

        .android .actions {
          width: 100%;
          border-top: 0.5px solid lightgray;
          border-bottom: 0.5px solid lightgray;
          position: absolute;
          top: 140px;
          display: flex;
          height: 50px;
          justify-content: space-evenly;
          align-items: center;
          color: #4285F4;
          font-size: 12px;
        }
    
        .menu-img {
          position: absolute;
          top: 0;
          width: 100%;
          box-shadow: var(--card-box-shadow);
          border-radius: 5px;
        }
    
        .windows .app-container {
          background-color: #E3E4FC;
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          top: 51px;
          right: 93px;
          min-width: 30px;
          height: 25px;
          justify-content: flex-end;
        }
    
        .windows .app-name {
          color: rgba(0, 0, 0, 0.8);
          font-size: 5px;
          font-weight: 600;
          letter-spacing: -0.07px;
          margin-top: 2.5px;
          font-family: var(--windows-font-family, Arial); 
          max-width: 40px;
          white-space: nowrap;
          overflow-x: hidden;
        }
    
        .windows .app-icon {
          width: 15px;
          height: 15px;
        }
    
        .android .app-icon {
          position: absolute;
          top: 62px;
          width: 42px;
          height: 42px;
          left: calc(50% - 21px);
          background-color: #FFF;
        }
    
        .android .app-name {
          position: absolute;
          width: 100%;
          background-color: #FFF;
          text-align: center;
          font-size: 14px;
          top: 106px;
        }
    
        .ios .app-icon {
          position: absolute;
          background-color: #000;
          top: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 21px;
          height: 21px;
          top: 143px;
          left: 10px;
          border-radius: 5px;
        }
    
        .ios .app-icon img {
          width: 80%;
        }
    
        .ios .app-name {
          font-family: var(--ios-font-family, Arial);
          background-color: #F4F4F4;
          position: absolute;
          top: 146px;
          left: 41px;
          font-size: 13px;
          font-weight: 600;
          min-width: 50px;
        }
      `]}renderWindows(){return Vt`
      <div 
      role="img" 
      tabindex="0" 
      aria-label="The name attribute in Windows"  
      class="windows container">
        <img alt="Windows start menu" src="https://github.com/pwa-builder/manifest-previewer/raw/main/assets/images/windows/startmenu.png" class="menu-img" />
        <div class="app-container">
          ${this.iconUrl?Vt`<img alt="Application's icon" src=${this.iconUrl} class="app-icon" />`:null}
          <div class="app-name">${this.appName||"PWA App"}</div>
        </div>
      </div>
    `}renderAndroid(){return Vt`
      <div 
      role="img" 
      tabindex="0" 
      aria-label="The name attribute in Android" 
      class="android container">
        <div class="info-title">App info</div>
        ${this.iconUrl?Vt`<img alt="Application's icon" src=${this.iconUrl} class="app-icon" />`:Vt`<div class="app-icon"></div>`}
        <div class="app-name">${this.appName||"PWA App"}</div>
        <div class="actions">
          <span>Open</span>
          <span>Disable</span>
          <span>Force stop</span>
        </div>
      </div>
    `}renderiOS(){return Vt`
      <div 
      role="img" 
      tabindex="0" 
      aria-label="The name attribute in iOS" 
      class="container ios">
        <img class="menu-img" alt="iOS settings" src="https://github.com/pwa-builder/manifest-previewer/raw/main/assets/images/ios/appsettings.jpg" />
        <div class="app-icon">
          ${this.iconUrl?Vt`<img alt="Application's icon" src=${this.iconUrl} />`:null}
        </div>
        <div class="app-name">${this.appName||"PWA App"}</div>
      </div>
    `}};lt([pe()],Le.prototype,"appName",void 0),lt([pe()],Le.prototype,"iconUrl",void 0),Le=lt([de("name-screen")],Le);let Ie=class extends Te{static get styles(){return[super.styles,ft`
        .windows-message {
          margin: 100px auto 0px;
          width: 70%;
        }

        .container {
          position: relative;
          width: 260px;
          margin: 70px auto 0;
        }

        .android.container {
          margin-top: 50px;
          width: 225px;
          height: 285px;
          background: linear-gradient(#C08FA7, #E7A0BF);
          border-radius: 10px;
        }

        .android .homescreen {
          width: 100%;
          border-radius: 0 0 15px 15px;
          box-shadow: var(--card-box-shadow);
        }

        .android .icon-and-label-container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          position: absolute;
          bottom: 140px;
          left: 23px;
          border-radius: 13px;
        }

        .android .app-icon {
          border-radius: 50%;
          width: 44px;
          height: 44px;
        }

        .android .app-name {
          font-size: 12px;
          max-width: 56px;
          min-width: 40px;
          text-align: center;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          text-shadow: 0 0 7px rgb(0 0 0 / 50%);
          color: rgb(255,255,255, 0.85);
        }

        .ios .background {
          width: 100%;
          position: absolute;
          top: 0;
          box-shadow: var(--card-box-shadow);
        }

        .ios .app-name {
          position: absolute;
          top: 79px;
          left: 75px;
          width: 50px;
          text-align: center;
          background-color: rgb(113, 137, 150);
          color: rgb(255, 255, 255);
          font-family: var(--ios-font-family, Arial);
          font-size: 9px;
        }

        .ios .app-icon {
          background-color: rgb(0, 0, 0);
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          position: absolute;
          top: 27px;
          left: 74px;
          height: 50px;
          border-radius: 11px;
        }

        .ios .app-icon img {
          width: 80%;
        }
      `]}renderWindows(){return Vt`
      <name-screen
      .isInFullScreen=${this.isInFullScreen}
      .platform=${this.platform}
      .appName=${this.shortName}
      .iconUrl=${this.iconUrl}>
      </name-screen>
    `}renderAndroid(){return Vt`
      <div
      role="img"
      tabindex="0"
      aria-label="Short name in Android"
      class="android container">
        <div class="icon-and-label-container">
          <div class="icon-container">
            ${this.iconUrl?Vt`<img alt="Application's icon" src=${this.iconUrl} class="app-icon" />`:null}
          </div>
          <div class="app-name">${this.shortName||"PWA App"}</div>
          </div>
      </div>
    `}renderiOS(){return Vt`
      <div 
      role="img" 
      tabindex="0" 
      aria-label="The short name attribute in iOS" 
      class="ios container">
        <img class="background" alt="iOS home screen" src="https://github.com/pwa-builder/manifest-previewer/raw/main/assets/images/ios/homemenu.png" />
        <div class="app-name">${this.shortName||"PWA App"}</div>
        <div class="app-icon">
          ${this.iconUrl?Vt`<img alt="Application's icon" src=${this.iconUrl} />`:null}
        </div>
      </div>
    `}};lt([pe()],Ie.prototype,"shortName",void 0),lt([pe()],Ie.prototype,"iconUrl",void 0),Ie=lt([de("shortname-screen")],Ie);let Ne=class extends Te{constructor(){super(...arguments),this._themeColor="",this._backgroundColor="",this.siteUrl="",this.isLightThemeColor=!1,this.contrastingThemeColor="",this.contrastingBackgroundColor=""}static get styles(){return[super.styles,ft`
        .container {
          position: relative;
          display: flex;
          justify-content: center;
          margin: 20px auto 0;
          width: fit-content;
        }

        .container.windows {
          font-family: var(--windows-font-family, Arial);
          height: 160px;
          border-radius: 5px;
          margin-top: 50px;
          box-shadow: rgb(142 142 142) 0px 0px 8px 0px;
          overflow: hidden;
          flex-direction: column;
        }

        .container.android {
          margin-top: 20px;
        }

        .android .phone {
          position: absolute;
          top: 0;
          width: 200px;
          height: 450px;
          box-shadow: var(--card-box-shadow);
          border-radius: 8px;
          object-fit: cover;
          z-index: 0;
        }

        .android .status-bar {
          width: 200px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          height: 18px;
          position: absolute;
          top: 16px;
          z-index: 2;
          background-color: var(--pwa-theme-color, #EBD0FE);
        }

        .android .status-bar img {
          width: 60px;
          margin-left: 5px;
        }

        .android .app-background-full {
          width: 200px;
          position: absolute;
          height: 412px;
          top: 17px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          background-color: var(--pwa-background-color, #FFF);
          z-index: 1;
        }

        .android .app-background-partial {
          width: 200px;
          position: absolute;
          top: 70px;
          height: 359px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          background-color: var(--pwa-background-color, #FFF);
          z-index: 1;
        }

        .android .app-icon {
          width: 70px;
          height: auto;
        }

        .android .app-name {
          width: fit-content;
          margin: 15px auto 0px;
          font-size: 16px;
        }

        .android .app-url {
          background-color: #D7D7D7;
          opacity: 0.5;
          position: absolute;
          top: 48px;
          left: -42px;
          font-size: 6.5px;
          width: 93px;
          overflow-x: hidden;
          white-space: nowrap;
        }

        .windows .browser-img {
          width: 260px;
        }

        .windows .app-background {
          left: 0;
          height: 140px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          background-color: var(--pwa-background-color, #FFF);
        }

        .windows .app-background.browser {
          margin-top: -214px;
        }

        .windows .app-background.fullscreen {
          margin-top: -214px;
          height: 148px;
        }

        .windows .app-background.minimal-ui {
          width: 100%;
        }

        .windows .app-background.standalone {
          width: 100%;
        }

        .windows .app-icon {
          width: 55px;
        }

        .windows .app-name {
          width: fit-content;
          margin: 10px auto 0px;
        }

        .windows .app-url {
          top: 14px;
          position: absolute;
          left: 47px;
          font-size: 3.5px;
          width: 162px;
          overflow-x: hidden;
          white-space: nowrap;
          background-color: white;
        }

        .windows .title-bar {
          width: 260px;
          z-index: 1;
          display: flex;
          justify-content: space-between;
          background-color: var(--pwa-theme-color, #EBD0FE);
          height: 32px;
          padding: 5px;
        }

        .windows .nav-actions {
          display: flex;
          align-items: center;
        }

        .windows .nav-actions img {
          width: 16px;
          height: 16px;
          margin: 4px 2px 0;
          opacity: 0.8;
        }

        .windows .nav-actions svg {
          margin: 4px 5px 0;
        }

        .windows .nav-actions .collapse {
          margin: 4px 5px 0;
          width: 12px;
          height: 1px;
        }

        .windows .nav-actions .enlarge {
          margin: 4px 5px 0;
          width: 12px;
          height: 12px;
          border-width: 1px;
          border-style: solid;
        }

        .windows .title-bar .app-name {
          margin: 6px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          flex: 1;
        }

        .ios-message {
          margin: 90px auto 0px;
          width: 70%;
        }
      `]}set themeColor(t){const e=this._themeColor;this._themeColor="none"===t||"transparent"===t?"darkGray":t,this.contrastingThemeColor=this._themeColor?we(this._themeColor):"#FFF",this.isLightThemeColor=!!this._themeColor&&!be(this._themeColor),this.requestUpdate("themeColor",e)}get themeColor(){return this._themeColor}set backgroundColor(t){const e=this._backgroundColor;this._backgroundColor="none"===t||"transparent"===t?"#FFF":t,this.contrastingBackgroundColor=we(this._backgroundColor),this.requestUpdate("backgroundColor",e)}get backgroundColor(){return this._backgroundColor}firstUpdated(){this.contrastingThemeColor=this.themeColor?we(this.themeColor):"#000"}renderWindows(){const t=Vt`
      <div
      class="app-background ${this.display}"
      style=${De({"--pwa-background-color":this.backgroundColor})}>
        ${this.iconUrl?Vt`<img class="app-icon" alt="App icon" src=${this.iconUrl} />`:null}
        <h4 
        class="app-name" 
        style=${De({color:this.backgroundColor?this.contrastingBackgroundColor:"#000"})}>
          ${this.appName||"PWA App"}
        </h4>
      </div>
    `;switch(this.display){case"fullscreen":return Vt`
          <div 
          role="img" 
          tabindex="0" 
          aria-label="Display modes in Windows" 
          class="container windows">
            <img class="browser-img" alt="Window's browser" src="https://github.com/pwa-builder/manifest-previewer/raw/main/assets/images/windows/browserwindow.png" />
            ${t}
          </div>
        `;case"browser":return Vt`
          <div 
          role="img" 
          tabindex="0" 
          aria-label="Display modes in Windows"
          class="container windows">
            <img class="browser-img" alt="Window's browser" src="https://github.com/pwa-builder/manifest-previewer/raw/main/assets/images/windows/browserwindow.png" />
            <span class="app-url">${this.siteUrl}</span>
            ${t}
          </div>
        `;case"minimal-ui":return Vt`
          <div 
          role="img" 
          tabindex="0" 
          aria-label="Display modes in Windows"
          class="windows container">
            <div 
            class="title-bar"
            style=${De({"--pwa-theme-color":this.themeColor})}>
              <div class="nav-actions">
                <img alt="Go back" src="${this.backArrowUrl}" />
                <img alt="Refresh page" src="${this.refreshArrowUrl}" />
              </div>
              <span tabindex="-1" class="app-name" style=${De({color:this.contrastingThemeColor})}>
                ${this.appName}
              </span>
              <div class="nav-actions">
                <div class="collapse" style=${De({backgroundColor:this.contrastingThemeColor})}></div>
                <div class="enlarge" style=${De({borderColor:this.contrastingThemeColor})}></div>
                <svg tabindex="-1" class="close" width="12px" height="12px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
                  <g><path style="fill:${this.contrastingThemeColor}" d="M990,61.2L933.3,5.1L500,443.3L66.7,5.1L10,61.2L443.9,500L10,938.8l56.7,56.1L500,556.7l433.3,438.2l56.7-56.1L556.1,500L990,61.2z"/></g>
                </svg>
              </div>
            </div>
            ${t}
          </div>
        `;case"standalone":return Vt`
          <div 
          role="img" 
          tabindex="0" 
          aria-label="Display modes in Windows"
          class="windows container">
            <div 
            class="title-bar"
            style=${De({"--pwa-theme-color":this.themeColor})}>
              <span tabindex="-1" class="app-name" style=${De({color:this.contrastingThemeColor})}>
                ${this.appName}
              </span>
              <div class="nav-actions">
                <div class="collapse" style=${De({backgroundColor:this.contrastingThemeColor})}></div>
                <div class="enlarge" style=${De({borderColor:this.contrastingThemeColor})}></div>
                <svg tabindex="-1" class="close" width="12px" height="12px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
                  <g><path style="fill:${this.contrastingThemeColor}" d="M990,61.2L933.3,5.1L500,443.3L66.7,5.1L10,61.2L443.9,500L10,938.8l56.7,56.1L500,556.7l433.3,438.2l56.7-56.1L556.1,500L990,61.2z"/></g>
                </svg>
              </div>
            </div>
            ${t}
          </div>
        `;default:return null}}renderAndroid(){return Vt`
      <div role="img" tabindex="0" aria-label="Display modes in Android" class="container android">
        ${"fullscreen"!==this.display?Vt`
          <div class="status-bar" style=${De({"--pwa-theme-color":this.themeColor})}>
            <img alt="Status bar" src="https://github.com/pwa-builder/manifest-previewer/raw/main/assets/images/android/statusbar-icons.png" />
          </div>
        `:null}
        ${"browser"===this.display||"minimal-ui"===this.display?Vt`<span class="app-url">${this.siteUrl}</span>`:null}
        <div 
        class=${ve({"app-background-full":"fullscreen"===this.display||"standalone"===this.display,"app-background-partial":"minimal-ui"===this.display||"browser"===this.display})} 
        style=${De({"--pwa-background-color":this.backgroundColor})}>
          ${this.iconUrl?Vt`<img class="app-icon" alt="App icon" src=${this.iconUrl} />`:null}
          <h4 
          class="app-name" 
          style=${De({color:this.backgroundColor?we(this.backgroundColor):"#000"})}>
            ${this.appName||"PWA App"}
          </h4>
        </div>
        <img class="phone" alt="Android phone" src="https://github.com/pwa-builder/manifest-previewer/raw/main/assets/images/android/background.svg" />
      </div>
    `}renderiOS(){return Vt`
      <div class="ios-message">
        <disclaimer-message>
          iOS does not support different display modes.
        </disclaimer-message>
      </div>
    `}get backArrowUrl(){return this.isLightThemeColor?"https://github.com/pwa-builder/manifest-previewer/raw/main/assets/images/windows/backarrow-dark.svg":"https://github.com/pwa-builder/manifest-previewer/raw/main/assets/images/windows/backarrow-light.svg"}get refreshArrowUrl(){return this.isLightThemeColor?"https://github.com/pwa-builder/manifest-previewer/raw/main/assets/images/windows/refresharrow-dark.svg":"https://github.com/pwa-builder/manifest-previewer/raw/main/assets/images/windows/refresharrow-light.svg"}};lt([pe()],Ne.prototype,"display",void 0),lt([pe()],Ne.prototype,"themeColor",null),lt([pe()],Ne.prototype,"backgroundColor",null),lt([pe()],Ne.prototype,"iconUrl",void 0),lt([pe()],Ne.prototype,"appName",void 0),lt([pe()],Ne.prototype,"siteUrl",void 0),lt([fe()],Ne.prototype,"isLightThemeColor",void 0),lt([fe()],Ne.prototype,"contrastingThemeColor",void 0),lt([fe()],Ne.prototype,"contrastingBackgroundColor",void 0),Ne=lt([de("display-screen")],Ne);let Be=class extends Te{constructor(){super(...arguments),this._themeColor="",this.contrastingColor="",this.isLightThemeColor=!1}static get styles(){return[super.styles,ft`
        .container {
          position: relative;
          width: 250px;
          margin: 120px auto 0;
        }
    
        .android .app-box {
          border-radius: 3px 3px 0 0;
          display: flex;
          width: 100%;
          height: 50px;
          background-color: var(--pwa-theme-color, #EBD0FE);
          box-shadow: var(--card-box-shadow);
        }
    
        .android .app-icon {
          border-radius: 50%;
          width: 40px;
          height: 40px;
          margin: -20px auto 0;
          background-color: #FFF;
        }
    
        .android .menu-actions {
          display: flex;
          width: 100%;
          justify-content: space-evenly;
          position: absolute;
          bottom: 4px;
          font-family: var(--android-font-family, 'Arial');
          font-size: 12px;
          letter-spacing: 0.3px;
          opacity: 0.7;
        }
    
        .android .menu-actions span:first-child {
          text-decoration: underline;
        }
    
        .container.ios {
          margin-top: 60px;
        }
    
        .ios .phone {
          width: 100%;
          height: 200px;
          position: absolute;
          top: 0px;
          overflow-y: hidden;
          object-fit: cover;
          object-position: top;
        }
    
        .ios .status-bar {
          position: absolute;
          top: 76px;
          height: 18px;
          left: 19.5px;
          width: 212px;
          background-color: var(--pwa-theme-color, #EBD0FE);
        }
    
        .ios .status-bar img {
          width: 100%;
          height: 16px;
          overflow-y: hidden;
          object-fit: cover;
          object-position: top;
        }

        .container.windows {
          font-family: var(--windows-font-family, Arial);
          height: 160px;
          border-radius: 5px;
          margin-top: 50px;
          box-shadow: rgb(142 142 142) 0px 0px 8px 0px;
          overflow: hidden;
        }

        .windows .title-bar {
          z-index: 1;
          display: flex;
          justify-content: space-between;
          background-color: var(--pwa-theme-color, #EBD0FE);
          padding: 5px;
        }

        .windows .nav-actions {
          display: flex;
          align-items: center;
        }

        .windows .nav-actions img {
          width: 16px;
          height: 16px;
          margin: 4px 2px 0;
          opacity: 0.8;
        }

        .windows .nav-actions svg {
          margin: 4px 5px 0;
        }

        .windows .nav-actions .collapse {
          margin: 4px 5px 0;
          width: 12px;
          height: 1px;
        }

        .windows .nav-actions .enlarge {
          margin: 4px 5px 0;
          width: 12px;
          height: 12px;
          border-width: 1px;
          border-style: solid;
        }

        .windows .title-bar .app-name {
          margin: 4px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          flex: 1;
          text-align: center;
        }
    
        @media(max-width: 1366px) {
          .windows .titlebar {
            bottom: 16px;
          }
    
          .android .app-box {
            height: 45px;
          }
    
          .android .app-icon {
            width: 30px;
            height: 30px;
            margin: -15px auto 0;
          }
    
          .android .menu-actions {
            font-size: 10px;
          }
        }
      `]}set themeColor(t){const e=this._themeColor;this._themeColor="none"===t||"transparent"===t?"darkGray":t,this.contrastingColor=this.themeColor?we(this.themeColor):"#FFF",this.isLightThemeColor=!!this.themeColor&&!be(this.themeColor),this.requestUpdate("themeColor",e)}get themeColor(){return this._themeColor}get backArrowUrl(){return this.isLightThemeColor?"https://github.com/pwa-builder/manifest-previewer/raw/main/assets/images/windows/backarrow-dark.svg":"https://github.com/pwa-builder/manifest-previewer/raw/main/assets/images/windows/backarrow-light.svg"}get refreshArrowUrl(){return this.isLightThemeColor?"https://github.com/pwa-builder/manifest-previewer/raw/main/assets/images/windows/refresharrow-dark.svg":"https://github.com/pwa-builder/manifest-previewer/raw/main/assets/images/windows/refresharrow-light.svg"}firstUpdated(){this.contrastingColor=this.themeColor?we(this.themeColor):"#FFF"}renderWindows(){return Vt`
      <div role="img" tabindex="0" aria-label="Theme color use in Windows" class="windows container">
        <div 
        class="title-bar"
        style=${De({"--pwa-theme-color":this.themeColor})}>
          <div class="nav-actions">
            <img alt="Go back" src="${this.backArrowUrl}" />
            <img alt="Refresh page" src="${this.refreshArrowUrl}" />
          </div>
          <span class="app-name" style=${De({color:this.contrastingColor})}>
            ${this.appName}
          </span>
          <div role="img" aria-label="Navigation actions" class="nav-actions">
            <div 
            class="collapse" 
            style=${De({backgroundColor:this.contrastingColor})}>
            </div>
            <div 
            class="enlarge" 
            style=${De({borderColor:this.contrastingColor})}>
            </div>
            <svg 
            class="close" 
            width="12px" 
            height="12px" 
            version="1.1" 
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
              <g><path style="fill:${this.contrastingColor}" d="M990,61.2L933.3,5.1L500,443.3L66.7,5.1L10,61.2L443.9,500L10,938.8l56.7,56.1L500,556.7l433.3,438.2l56.7-56.1L556.1,500L990,61.2z"/></g>
            </svg>
          </div>
        </div>
      </div>
    `}renderAndroid(){return Vt`
      <div role="img" tabindex="0" aria-label="Theme color use in Android" class="container android">
        <div class="app-box" style=${De({"--pwa-theme-color":this.themeColor})}>
          ${this.iconUrl?Vt`<img class="app-icon" alt="Application's icon" src=${this.iconUrl} />`:Vt`<div class="app-icon"></div>`}
          <div class="menu-actions" style=${De({color:this.contrastingColor})}>
            <span>HOME</span>
            <span>PROFILE</span>
            <span>SETTINGS</span>
          </div>
        </div>
      </div>
    `}renderiOS(){return Vt`
      <div role="img" tabindex="0" aria-label="Theme color use in iOS" class="container ios">
        <img class="phone" alt="Iphone" src="https://github.com/pwa-builder/manifest-previewer/raw/main/assets/images/ios/iphone.svg" />
        <div class="status-bar" style=${De({"--pwa-theme-color":this.themeColor})}>
          <img alt="Status bar" src="https://github.com/pwa-builder/manifest-previewer/raw/main/assets/images/ios/statusbar.svg" />
        </div>
      </div>
    `}};lt([pe()],Be.prototype,"themeColor",null),lt([pe()],Be.prototype,"appName",void 0),lt([pe()],Be.prototype,"iconUrl",void 0),lt([fe()],Be.prototype,"contrastingColor",void 0),lt([fe()],Be.prototype,"isLightThemeColor",void 0),Be=lt([de("themecolor-screen")],Be);let _e=class extends Te{constructor(){super(...arguments),this.manifestUrl=""}static get styles(){return[super.styles,ft`
        .container {
          width: 260px;
          position: relative;
          margin: 40px auto 0;
        }

        .container.windows {
          font-family: var(--windows-font-family, Arial);
        }

        .container.android {
          height: 285px;
          border-radius: 10px;
          background: linear-gradient(#C08FA7, #E7A0BF);
        }

        .menu-img {
          width: 100%;
          box-shadow: var(--card-box-shadow);
        }

        .windows .app-icon {
          position: absolute;
          width: 14px;
          height: 14px;
          bottom: 8px;
          right: 91px;
        }

        .windows .menu {
          position: absolute;
          bottom: 57px;
          right: 26px;
          width: 138px;
          height: 72px;
        }

        .windows .shortcut-list {
          list-style: none;
          padding: 0;
          color: rgba(0, 0, 0, 0.6);
          font-size: 6px;
          font-weight: 600;
          background-color: #D2DBEF;
          height: 100%;
        }

        .windows .shortcut-list li {
          padding: 0 0 0 4px;
          margin: 0 0 10px;
          display: flex;
          align-items: center;
        }

        .windows .shortcut-list .icon {
          width: 10px;
          height: 10px;
          margin-right: 5px;
          display: inline-block;
        }

        .android .app-icon {
          position: absolute;
          width: 50px;
          height: 50px;
          top: 41px;
          left: 18px;
          background-color: #FFF;
          border-radius: 50%;
        }

        .android .chrome-icon {
          position: absolute;
          width: 27px;
          height: 27px;
          top: 69px;
          left: 45px;
          z-index: 1;
        }

        .android .menu {
          background-color: #FFF;
          position: absolute;
          right: 30px;
          width: 185px;
          height: 135px;
          bottom: 30px;
          padding: 10px;
          border-radius: 10px;
        }

        .android .shortcut-list {
          list-style: none;
          padding: 0;
          margin: 0;
          color: #000;
          font-size: 12px;
        }

        .android .shortcut-list li {
          padding: 0;
          margin: 0 0 10px;
          display: flex;
          align-items: center;
          height: 25px;
        }

        .android .shortcut-list .icon {
          width: 25px;
          height: 25px;
          margin-right: 15px;
          display: inline-block;
        }

        .ios-message {
          margin: 100px auto 0px;
          width: 70%;
        }
      `]}getShortcutIcon(t){const e=t[0].src;return`https://pwabuilder-safe-url.azurewebsites.net/api/getsafeurl?url=${new URL(e,this.manifestUrl).href}`}renderWindows(){var t;return Vt`
      <div 
      role="img" 
      tabindex="0" 
      aria-label="Shortcuts in Windows"
      class="container windows">
        <img 
        class="menu-img" 
        alt="Application shortcuts" 
        src="https://github.com/pwa-builder/manifest-previewer/raw/main/assets/images/windows/shortcutsmenu.png" />
        ${this.iconUrl?Vt`<img class="app-icon" alt="Application's icon" src=${this.iconUrl} />`:Vt`<div class="app-icon"></div>`}
        <div class="menu">
          <ul class="shortcut-list">
            ${null===(t=this.shortcuts)||void 0===t?void 0:t.slice(0,5).map((t=>Vt`
                <li>
                  ${t.icons?Vt`<img class="icon" alt=${t.name} src=${this.getShortcutIcon(t.icons)} />`:Vt`<div class="icon"></div>`}
                  <span>${t.name}</span>
                </li>
              `))}
          </ul>
        </div>
      </div>
    `}renderAndroid(){var t;return Vt`
      <div 
      role="img" 
      tabindex="0" 
      aria-label="Shortcuts in Android"
      class="container android">
        ${this.iconUrl?Vt`<img class="app-icon" alt="Application's icon" src=${this.iconUrl} />`:Vt`<div class="app-icon"></div>`}
        <div class="menu">
          <ul class="shortcut-list">
            ${null===(t=this.shortcuts)||void 0===t?void 0:t.slice(0,5).map((t=>Vt`
                <li>
                  ${t.icons?Vt`<img class="icon" alt=${t.name} src=${this.getShortcutIcon(t.icons)} />`:Vt`<div class="icon"></div>`}
                  <span>${t.name}</span>
                </li>
              `))}
          </ul>
        </div>
      </div>
    `}renderiOS(){return Vt`
      <div class="ios-message">
        <disclaimer-message>
          iOS does not support the shortcuts feature.
        </disclaimer-message>
      </div>
    `}};lt([pe()],_e.prototype,"manifestUrl",void 0),lt([pe({type:Array})],_e.prototype,"shortcuts",void 0),lt([pe()],_e.prototype,"iconUrl",void 0),_e=lt([de("shortcuts-screen")],_e);let Fe=class extends Te{constructor(){super(...arguments),this.manifestUrl="",this.highlight="categories"}static get styles(){return[super.styles,ft`
        .container {
          position: relative;
          margin: 30px auto 0;
          width: 260px;
        }

        .container.windows {
          font-family: var(--windows-font-family, Arial);
        }

        .container.android {
          width: 225px;
          box-shadow: var(--card-box-shadow);
          height: 375px;
        }

        .store-img {
          width: 100%;
          box-shadow: var(--card-box-shadow);
        }

        .windows .app-header {
          background-color: #FFF;
          position: absolute;
          top: 5px;
          width: 160px;
          left: calc(50% - 75px);
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 144px;
          padding-top: 20px;
        }

        .windows .app-header img {
          width: 80px;
        }

        .windows .app-header h4 {
          text-align: center;
        }

        .windows .description {
          background-color: #FFF;
          position: absolute;
          font-size: 9px;
          text-align: center;
          bottom: 56px;
          padding: 0 30px;
          box-sizing: border-box;
          height: 50px;
          width: 100%;
          overflow: hidden;
        }

        .categories {
          display: flex;
          flex-wrap: wrap;
          position: absolute;
          background-color: #FFF;
          left: 6px;
          right: 6px;
          height: 45px;
        }

        .windows .categories {
          bottom: 12px;
        }

        .android .categories {
          top: 315px;
          height: 55px;
        }

        .windows .categories div, .android .categories div {
          margin-right: 8px;
          border-radius: 17px;
          height: fit-content;
          padding: 2px 7px;
          font-size: 10px;
          min-width: 20px;
          text-align: center;
          border: solid 0.5px #CECECE;
        }

        .android .app-icon {
          width: 41px;
          height: 41px;
          position: absolute;
          top: 25px;
          left: 12px;
          background-color: #FFF;
        }

        .android .app-name {
          font-size: 14px;
          margin: 0;
          position: absolute;
          background-color: #FFF;
          font-weight: 600;
          top: 35px;
          left: 66px;
          min-width: 70px;
          height: 30px;
        }

        .android .install-button {
          background-color: #0E825E;
          color: #FFF;
          width: 95%;
          position: absolute;
          top: 80px;
          text-align: center;
          left: 2.5%;
          font-size: 10px;
          padding: 2px 0px;
          border-radius: 3px;
        }

        .android .screenshots {
          position: absolute;
          display: flex;
          height: 100px;
          top: 117px;
          width: 100%;
          overflow-x: hidden;
          background-color: #FFF;
        }
        
        .android .screenshots img {
          height: 100%;
          margin: 0 5px;
        }

        .android .description {
          position: absolute;
          background-color: #FFF;
          font-size: 9px;
          top: 235px;
          padding-left: 10px;
          max-height: 80px;
          width: 80%;
          overflow: hidden;
        }

        .android .description p {
          font-weight: 600;
          margin: 0;
          font-size: 13px;
        }

        .ios-message {
          margin: 130px auto 0px;
          width: 60%;
        }
      `]}getImageUrl(t){return`https://pwabuilder-safe-url.azurewebsites.net/api/getsafeurl?url=${new URL(t,this.manifestUrl).href}`}renderWindows(){var t;return Vt`
      <div role="img" tabindex="0" aria-label="PWA categories in Windows" class="container windows">
        <img class="store-img" alt="Microsoft Store" src="https://github.com/pwa-builder/manifest-previewer/raw/main/assets/images/windows/store-listing.png" />
        <div class="app-header">
          ${this.iconUrl?Vt`<img alt="App icon" src=${this.iconUrl} />`:null}
          <h4>${this.appName||"PWA App"}</h4>
        </div>
        <div class="description">
          ${this.description||"A description of your PWA."}
        </div>
        <div class="categories">
          ${null===(t=this.categories)||void 0===t?void 0:t.map((t=>Vt`<div>${t}</div>`))}
        </div>
      </div>
    `}renderAndroid(){var t,e;return Vt`
      <div role="img" tabindex="0" aria-label="PWA categories in Android" class="container android">
        <div class="install-button">Install</div>
        ${this.iconUrl?Vt`<img class="app-icon" alt="App icon" src=${this.iconUrl} />`:Vt`<div class="app-icon"></div>`}
        <div class="app-name">${this.appName||"PWA App"}</div>
        <div class="screenshots">
          ${null===(t=this.screenshots)||void 0===t?void 0:t.map((t=>Vt`<img alt="App screenshot" src=${this.getImageUrl(t.src)} />`))}
        </div>
        <div class="description">
          <p>About this app</p>
          ${this.description||"A description of your PWA."}
        </div>
        <div class="categories">
          ${null===(e=this.categories)||void 0===e?void 0:e.map((t=>Vt`<div>${t}</div>`))}
        </div>
      </div>
    `}renderiOS(){const t="categories"===this.highlight?Vt`Categories in iOS App Store may not necessarily be related to the manifest's categories.`:Vt`Description in iOS App Store may not necessarily related to the manifest's description.`;return Vt`
      <div class="ios-message">
        <disclaimer-message>
          ${t}
        </disclaimer-message>
      </div>
    `}};lt([pe({type:Array})],Fe.prototype,"categories",void 0),lt([pe()],Fe.prototype,"appName",void 0),lt([pe()],Fe.prototype,"iconUrl",void 0),lt([pe()],Fe.prototype,"description",void 0),lt([pe({type:Array})],Fe.prototype,"screenshots",void 0),lt([pe()],Fe.prototype,"manifestUrl",void 0),lt([pe()],Fe.prototype,"highlight",void 0),Fe=lt([de("categories-screen")],Fe);let Ue=class extends Te{constructor(){super(...arguments),this.siteUrl=""}static get styles(){return[super.styles,ft`
        .container {
          position: relative;
          width: fit-content;
          margin: 30px auto 0;
          width: 260px;
        }

        .container.android {
          box-shadow: var(--card-box-shadow);
          border-radius: 6px;
          height: 315px;
          font-family: var(--android-font-family, 'Arial');
        }

        .dialog {
          width: 100%;
          box-shadow: var(--card-box-shadow);
          border-radius: 6px;
        }

        .windows .contacts {
          background-color: #F3F3F3;
          position: absolute;
          top: 197px;
          width: 100%;
          left: 0;
          height: 70px;
          font-family: var(--windows-font-family, Arial);
        }

        .avatar, .app {
          display: flex;
          flex-direction: column;
          font-size: 10px;
          font-weight: 600;
          align-items: center;
          width: fit-content;
          margin-left: 28px;
          justify-content: flex-end;
        }

        .avatar > div {
          border-radius: 50%;
          background-color: #66D3FA;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          font-size: 15px;
          margin-bottom: 7px;
        }

        .windows .app {
          position: absolute;
          bottom: 63px;
          background-color: #F3F3F3;
          font-weight: 400;
          font-size: 9px;
          margin-left: 14px;
          min-width: 46px;
          max-width: 63px;
          min-height: 45px;
        }

        .windows .app .name {
          text-shadow: 0 0 2px darkgray;
          max-width: 63px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }

        .windows .app img {
          width: 22px;
          height: 22px;
          margin-bottom: 4px;
        }

        .android .share-title {
          font-weight: 600;
          text-align: center;
          position: absolute;
          top: 15px;
          left: calc(50% - 20px);
        }

        .android .action-buttons {
          display: flex;
          justify-content: space-between;
          position: absolute;
          top: 95px;
          left: calc(50% - 60px);
          width: 120px;
        }

        .android .action-buttons div {
          border: solid 0.5px lightgray;
          color: gray;
          font-size: 11px;
          padding: 2px 10px;
          border-radius: 12px;
        }

        .android .divisor {
          padding: 0.5px 0;
          width: 100%;
          background-color: lightgray;
          position: absolute;
        }

        .android .divisor.first {
          top: 130px;
        }

        .android .divisor.second {
          top: 220px;
        }

        .android .contacts {
          background-color: #FFF;
          position: absolute;
          top: 150px;
          width: 100%;
          left: 0;
          height: 48px;
        }

        .android .avatar {
          font-weight: 400;
          margin-left: 15px;
        }

        .android .app {
          position: absolute;
          bottom: 20px;
          padding-bottom: 10px;
          height: 64px;
          font-weight: 600;
          overflow: hidden;
          background-color: #FFF;
          color: rgba(0, 0, 0, 0.6);
          margin-left: 12px;
        }

        .android .app img {
          width: 35px;
          height: 35px;
          margin-bottom: 2px;
        }

        .android .media-url {
          background-color: #FFF;
          position: absolute;
          top: 51px;
          font-size: 10px;
          height: 27px;
          width: 84%;
          left: 4%;
        }

        .container.ios {
          margin-top: 15px;
        }

        .ios .app {
          background-color: #FFF;
          position: absolute;
          top: 12px;
          right: 81px;
          font-family: var(--ios-font-family, Arial);
          width: 50px;
          overflow: hidden;
          min-height: 61px;
        }

        .ios .app img {
          width: 48px;
          height: 48px;
          margin-bottom: 3px;
        }
      `]}renderWindows(){return Vt`
      <div role="img" tabindex="0" aria-label="Share target in Windows" class="container windows">
        <img class="dialog" alt="Web share trigger" src="https://github.com/pwa-builder/manifest-previewer/raw/main/assets/images/windows/share-dialog.png" />
        <div class="contacts">
          <div class="avatar">
            <div>JD</div>
            John Doe
          </div>
        </div>
        <div class="app">
          ${this.iconUrl?Vt`<img alt="PWA icon" src=${this.iconUrl} />`:null}
          <span class="name">
            ${this.shortName||this.appName||"PWAApp"}
          </span>
        </div>
      </div>
    `}renderAndroid(){return Vt`
      <div role="img" tabindex="0" aria-label="Share target in Android" class="container android">
        <div class="share-title">Share</div>
        <!-- <div class="media-url">via Media Content https://media-content.com</div> -->
        <div class="action-buttons">
          <div>Copy</div>
          <div>Nearby</div>
        </div>
        <div class="divisor first"></div>
        <div class="contacts">
          <div class="avatar">
            <div>JD</div>
            John Doe
          </div>
        </div>
        <div class="divisor second"></div>
        <div class="app">
          ${this.iconUrl?Vt`<img alt="PWA icon" src=${this.iconUrl} />`:null}
          ${this.shortName||this.appName||"PWA App"}
        </div>
      </div>
    `}renderiOS(){return Vt`
      <div role="img" tabindex="0" aria-label="Share target in iOS" class="container ios">
        <img class="dialog" alt="" src="https://github.com/pwa-builder/manifest-previewer/raw/main/assets/images/ios/share-dialog.jpg" />
        <div class="app">
          ${this.iconUrl?Vt`<img alt="PWA icon" src=${this.iconUrl} />`:null}
          ${this.shortName||"PWA App"}
        </div>
      </div>
    `}};lt([pe()],Ue.prototype,"iconUrl",void 0),lt([pe()],Ue.prototype,"appName",void 0),lt([pe()],Ue.prototype,"shortName",void 0),lt([pe()],Ue.prototype,"siteUrl",void 0),Ue=lt([de("share-target")],Ue);const ze=["install","splashScreen","name","shortName","themeColor","shortcuts","display","categories","shareTarget","description"];let We=class extends ce{constructor(){super(...arguments),this.siteUrl="",this.stage="themeColor",this.manifest={},this.manifestUrl="",this.platform="android",this.descriptions={},this.titles={},this.enlargeText="Click to enlarge Preview",this.onEnlarge=this.handleToggleEnlarge,this.cardTitle="Preview",this.disabledPlatforms="",this.iconUrl="",this.isInFullScreen=!1,this.handleFullScreenChange=()=>{this.isInFullScreen=Boolean(document.fullscreenElement)}}handleToggleEnlarge(){this.content.requestFullscreen()}firstUpdated(){this.updateIconUrl(),this.siteUrl||(this.siteUrl=this.manifestUrl.substring(0,this.manifestUrl.lastIndexOf("manifest.json"))),this.setDefaultDescriptions(),this.setDefaultTitles()}update(t){t.get("manifest")&&this.updateIconUrl(),super.update(t)}updateIconUrl(){var t;const e=function(t){const e=t.find((t=>"any"===(t.purpose||"any")&&ke(t)&&ye(t)&&Me(t).some((t=>512===t.width&&512===t.height))));if(e)return e;const i=[...t].sort(((t,e)=>function(t,e){return Oe(Ce(t),Ce(e))}(t,e))).reverse(),s=i.filter((t=>ye(t))),n=s.find((t=>xe(t)&&ke(t)&&Ae(t,128,128)));if(n)return n;const o=s.find((t=>xe(t)&&Se(t)&&Ae(t,128,128)));if(o)return o;const r=s.find((t=>"maskable"===t.purpose&&ke(t)&&Ae(t,128,128)));if(r)return r;const a=s.find((t=>"maskable"===t.purpose&&Se(t)&&Ae(t,128,128)));return a||(s[0]||i[0])}((null===(t=this.manifest)||void 0===t?void 0:t.icons)||[]);if(e){const t=new URL(e.src,this.manifestUrl).href;this.iconUrl=`https://pwabuilder-safe-url.azurewebsites.net/api/getsafeurl?url=${encodeURIComponent(t)}`}else this.iconUrl=""}setDefaultDescriptions(){var t,e,i,s,n,o,r,a,l,h,c,d,u,p,f,m,g,v,w,b,x,y,k,S,A,C,O,M,$,T;this.descriptions={install:{windows:(null===(t=this.descriptions.install)||void 0===t?void 0:t.windows)||"Windows includes the application's icon, name, and website URL in its installation dialog.",android:(null===(e=this.descriptions.install)||void 0===e?void 0:e.android)||"When installing a PWA on Android, the description, name, icon and screenshots are used for giving a preview of the application.",iOS:(null===(i=this.descriptions.install)||void 0===i?void 0:i.iOS)||"iOS uses the application's icon, name, and website URL in its installation screen."},splashScreen:{windows:(null===(s=this.descriptions.splashScreen)||void 0===s?void 0:s.windows)||"Splash screens are used to provide a smooth transition between the loading state and the initial launch of the application.",android:(null===(n=this.descriptions.splashScreen)||void 0===n?void 0:n.android)||"When launching the PWA, Android uses the background color, theme color, name and icon for displaying the splash screen.",iOS:(null===(o=this.descriptions.splashScreen)||void 0===o?void 0:o.iOS)||"When launching the PWA, iOS uses the background color, name and icon for displaying the splash screen while the content loads."},name:{windows:(null===(r=this.descriptions.name)||void 0===r?void 0:r.windows)||"The name of the web application is displayed on Window's start menu, application preferences, title bar, etc.",android:(null===(a=this.descriptions.name)||void 0===a?void 0:a.android)||"The name of the web application will be included in the app info screen on Android.",iOS:(null===(l=this.descriptions.name)||void 0===l?void 0:l.iOS)||"On iOS, the name of the web application will be used on settings."},shortName:{windows:(null===(h=this.descriptions.shortName)||void 0===h?void 0:h.windows)||"Windows uses the short name as a fallback when the manifest does not specify a value for the name attribute.",android:(null===(c=this.descriptions.shortName)||void 0===c?void 0:c.android)||"On Android, the application's short name is used in the home screen as a label for the icon.",iOS:(null===(d=this.descriptions.shortName)||void 0===d?void 0:d.iOS)||"On iOS, the application's short name is used in the home screen as a label for the icon."},themeColor:{windows:(null===(u=this.descriptions.themeColor)||void 0===u?void 0:u.windows)||"The theme color defines the default color theme for the application, and is used for the PWA's title bar.",android:(null===(p=this.descriptions.themeColor)||void 0===p?void 0:p.android)||"The theme color defines the default color theme for the application, and affects how the site is displayed.",iOS:(null===(f=this.descriptions.themeColor)||void 0===f?void 0:f.iOS)||"The theme color defines the default color theme for the PWA, and defines the background color of the status bar when using the application."},shortcuts:{windows:(null===(m=this.descriptions.shortcuts)||void 0===m?void 0:m.windows)||"This attribute (A.K.A. jump list) assembles a context menu that is shows when a user right-clicks on the app's icon on the taskbar.",android:(null===(g=this.descriptions.shortcuts)||void 0===g?void 0:g.android)||"This attribute (A.K.A. jump list) assembles a context menu that is shows when a user long-presses the app's icon on the home screen.",iOS:(null===(v=this.descriptions.shortcuts)||void 0===v?void 0:v.iOS)||"This attribute (A.K.A. jump list) defines a list of shortcuts/links to key tasks or pages within a web app, assembling a context menu when a user interacts with the app's icon."},display:{windows:(null===(w=this.descriptions.display)||void 0===w?void 0:w.windows)||"The display mode changes how much of the browser's UI is shown to the user. It can range from browser (the full browser window is shown) to fullscreen (the app is full-screened).",android:(null===(b=this.descriptions.display)||void 0===b?void 0:b.android)||"The display mode changes how much of the browser's UI (like the status bar and navigation buttons) is shown to the user.",iOS:(null===(x=this.descriptions.display)||void 0===x?void 0:x.iOS)||"The display mode changes how much of the browser's UI is shown to the user. It can range from browser (the full browser window is shown) to fullscreen (the app is full-screened)."},categories:{windows:(null===(y=this.descriptions.categories)||void 0===y?void 0:y.windows)||"The Microsoft Store uses the indicated categories as tags in the app's product description page.",android:(null===(k=this.descriptions.categories)||void 0===k?void 0:k.android)||"Google Play includes the categories specified in the manifest in the app's product description page.",iOS:(null===(S=this.descriptions.categories)||void 0===S?void 0:S.iOS)||"On iOS, your application's categories are set from a predetermined set of options and enhance the discoverability of your app."},shareTarget:{windows:(null===(A=this.descriptions.shareTarget)||void 0===A?void 0:A.windows)||"As a share target, your app can receive text, links, and files from other Windows apps.",android:(null===(C=this.descriptions.shareTarget)||void 0===C?void 0:C.android)||"As a share target, your app can receive text, links, and files from other Android apps.",iOS:(null===(O=this.descriptions.shareTarget)||void 0===O?void 0:O.iOS)||"By using the share target attribute, you can quickly share and receive links and files like a native iOS application. "},description:{windows:(null===(M=this.descriptions.description)||void 0===M?void 0:M.windows)||"The Microsoft Store shows the app's description in the app's product description page.",android:(null===($=this.descriptions.description)||void 0===$?void 0:$.android)||"Google Play shows the app's description in the app's product description page.",iOS:(null===(T=this.descriptions.description)||void 0===T?void 0:T.iOS)||"The iOS App Store shows your app's description in the app's product description page."}}}setDefaultTitles(){this.titles={install:this.titles.install||"Installation dialog",splashScreen:this.titles.splashScreen||"Splash screen",name:this.titles.name||"The name attribute",shortName:this.titles.shortName||"The short name attribute",themeColor:this.titles.themeColor||"The theme color attribute",shortcuts:this.titles.shortcuts||"The shortcuts attribute",display:this.titles.display||"The display attribute",categories:this.titles.categories||"The categories attribute",shareTarget:this.titles.shareTarget||"The share target attribute",description:this.titles.description||"The description attribute"}}handlePlatformChange(t){const e=t.target.name;this.platform=e}handleNavigateRight(t){if(t instanceof KeyboardEvent&&" "!==t.key&&"Enter"!==t.key)return;const e=(ze.indexOf(this.stage)+1)%ze.length;this.stage=ze[e]}handleNavigateLeft(t){if(t instanceof KeyboardEvent&&" "!==t.key&&"Enter"!==t.key)return;const e=(ze.indexOf(this.stage)+ze.length-1)%ze.length;this.stage=ze[e]}updated(t){t.has("stage")&&this.dispatchEvent(new CustomEvent("previewscreenchange",{bubbles:!0,composed:!0,detail:{screen:this.stage}}))}connectedCallback(){super.connectedCallback(),document.addEventListener("fullscreenchange",this.handleFullScreenChange)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("fullscreenchange",this.handleFullScreenChange)}screenContent(){switch(this.stage){case"install":return Vt`
          <install-screen
          .isInFullScreen=${this.isInFullScreen}
          .platform=${this.platform}
          .iconUrl=${this.iconUrl}
          .siteUrl=${this.siteUrl}
          .appName=${this.manifest.name}
          .appShortName=${this.manifest.short_name}
          .description=${this.manifest.description}
          .screenshots=${this.manifest.screenshots}
          .manifestUrl=${this.manifestUrl}>
          </install-screen>
        `;case"splashScreen":return Vt`
          <splash-screen
          .isInFullScreen=${this.isInFullScreen}
          .platform=${this.platform}
          .iconUrl=${this.iconUrl}
          .backgroundColor=${this.manifest.background_color}
          .themeColor=${this.manifest.theme_color}
          .appName=${this.manifest.name}>
          </splash-screen>
        `;case"name":return Vt`
          <name-screen
          .isInFullScreen=${this.isInFullScreen}
          .platform=${this.platform}
          .appName=${this.manifest.name}
          .iconUrl=${this.iconUrl}>
          </name-screen>
        `;case"shortName":return Vt`
          <shortname-screen
          .isInFullScreen=${this.isInFullScreen}
          .platform=${this.platform}
          .shortName=${this.manifest.short_name}
          .iconUrl=${this.iconUrl}>
          </shortname-screen>
        `;case"themeColor":return Vt`
          <themecolor-screen
          .isInFullScreen=${this.isInFullScreen}
          .platform=${this.platform}
          .themeColor=${this.manifest.theme_color||""}
          .appName=${this.manifest.name}
          .iconUrl=${this.iconUrl}>
          </themecolor-screen>
        `;case"shortcuts":return Vt`
          <shortcuts-screen
          .isInFullScreen=${this.isInFullScreen}
          .platform=${this.platform}
          .shortcuts=${this.manifest.shortcuts}
          .iconUrl=${this.iconUrl}
          .manifestUrl=${this.manifestUrl}>
          </shortcuts-screen>
        `;case"display":return Vt`
          <display-screen
          .isInFullScreen=${this.isInFullScreen}
          .platform=${this.platform}
          .display=${this.manifest.display||"standalone"} 
          .themeColor=${this.manifest.theme_color||""}
          .backgroundColor=${this.manifest.background_color||""}
          .iconUrl=${this.iconUrl}
          .appName=${this.manifest.name}
          .siteUrl=${this.siteUrl}>
          </display-screen>
        `;case"categories":return Vt`
          <categories-screen
          highlight='categories'
          .isInFullScreen=${this.isInFullScreen}
          .platform=${this.platform}
          .categories=${this.manifest.categories}
          .appName=${this.manifest.name}
          .iconUrl=${this.iconUrl}
          .description=${this.manifest.description}
          .screenshots=${this.manifest.screenshots}
          .manifestUrl=${this.manifestUrl}>
          </categories-screen>
        `;case"shareTarget":return Vt`
          <share-target
          .isInFullScreen=${this.isInFullScreen}
          .platform=${this.platform}
          .iconUrl=${this.iconUrl}
          .appName=${this.manifest.name}
          .shortName=${this.manifest.short_name}
          .siteUrl=${this.siteUrl}>
          </share-target>
        `;case"description":return Vt`
          <categories-screen highlight='description' .isInFullScreen=${this.isInFullScreen} .platform=${this.platform}
            .categories=${this.manifest.categories} .appName=${this.manifest.name} .iconUrl=${this.iconUrl}
            .description=${this.manifest.description} .screenshots=${this.manifest.screenshots} .manifestUrl=${this.manifestUrl}>
          </categories-screen>
        `;default:return null}}render(){return this.manifest?Vt`
      <div part="card" class="card">
        <h1 part="card-title" class="title">${this.cardTitle}</h1>
        <div part="platform-buttons" class="buttons-div">
          ${this.disabledPlatforms.includes("windows")?null:Vt`
            <button 
            part="platform-button"
            aria-pressed=${"windows"===this.platform}
            class=${ve({"platform-button":!0,selected:"windows"===this.platform})} 
            name="windows"
            @click=${this.handlePlatformChange}>
              Windows
            </button>`}
          ${this.disabledPlatforms.includes("android")?null:Vt`
            <button 
            part="platform-button"
            aria-pressed=${"android"===this.platform}
            class=${ve({"platform-button":!0,selected:"android"===this.platform})} 
            name="android"
            @click=${this.handlePlatformChange}>
              Android
            </button>`}
          ${this.disabledPlatforms.includes("iOS")?null:Vt`
            <button
            part="platform-button"
            aria-pressed=${"iOS"===this.platform}
            class=${ve({"platform-button":!0,selected:"iOS"===this.platform})}
            name="iOS"
            @click=${this.handlePlatformChange}>
              iOS
            </button>`}
        </div>
        <div part="app-name" class="name">${this.manifest.name||"PWA App"}</div>
        <p aria-live="polite" part="screen-title" class="screen-title">${this.titles[this.stage]}</p>
        <p part="screen-description" class="screen-info">
          ${this.descriptions[this.stage]?this.descriptions[this.stage][this.platform]:""}
        </p>
        <div id="content">${this.screenContent()}</div>
        <img 
        part="nav-arrow"
        class="nav-arrow-right"
        role="button"
        tabindex="0"
        src="https://github.com/pwa-builder/manifest-previewer/raw/main/assets/images/nav-arrow.svg" 
        alt="Navigate right" 
        @click=${this.handleNavigateRight}
        @keydown=${this.handleNavigateRight} />
        <img 
        part="nav-arrow" 
        class="nav-arrow-left"
        role="button"
        tabindex="0"
        src="https://github.com/pwa-builder/manifest-previewer/raw/main/assets/images/nav-arrow.svg" 
        alt="Navigate left" 
        @click=${this.handleNavigateLeft}
        @keydown=${this.handleNavigateLeft} />
        ${this.enlargeText?Vt`
        <button
        part="enlarge-toggle"
        class="preview-button" 
        @click=${this.onEnlarge}>
          ${this.enlargeText}
        </button>`:null}
      </div>
    `:Vt``}};We.styles=ft`
    :host {
      font-family: var(--font-family, Arial);
      color: var(--font-color, #292C3A);
      --card-box-shadow: 0px 3px 5.41317px rgba(0, 0, 0, 0.25);
    }

    .card {
      background: #FFF;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 6px;
      height: 792px;
      position: relative;
      display: flex;
      flex-direction: column;
    }

    .title {
      margin: 23px auto 40px;
      font-weight: 700;
      font-size: 18px;
      width: fit-content;
      text-decoration: underline solid var(--secondary-font-color, #808080);
      text-underline-position: under;
      text-decoration-thickness: 2px;
    }

    .buttons-div {
      display: flex;
      justify-content: space-around;
      margin: 0 auto;
      width: 272px;
    }

    .platform-button {
      height: 35px;
      border-radius: 33px;
      font-size: 12.5751px;
      line-height: 19px;
      width: 80px;
      background: #FFF;
      box-shadow: 0px 3px 3.02588px rgba(0, 0, 0, 0.25);
      font-weight: 600;
      border: none;
      cursor: pointer;
    }

    button:focus-visible, .nav-arrow-left:focus-visible, .nav-arrow-right:focus-visible {
      outline: 2px solid #000;
      outline-offset: 3px;
    }

    .platform-button.selected {
      background: #292C3A;
      box-shadow: 0px 0.75647px 3.02588px rgba(0, 0, 0, 0.25);
      color: #FFF;
    }

    .name {
      background: rgba(194, 194, 194, 0.4);
      border-radius: 4px;
      font-weight: 700;
      font-size: 14px;
      text-align: center;
      color: #000;
      margin: 20px auto 0;
      width: fit-content;
      padding: 0 5px;
    }

    .preview-text {
      position: absolute;
      bottom: 10px;
      left: calc(50% - 55px);
      font-weight: 400;
      font-size: 10px;
      line-height: 16px;
      text-align: center;
      color: var(--secondary-font-color, #808080);
      width: 110px;
    }

    .preview-button {
      position: absolute;
      bottom: 15px;
      left: calc(50% - 75px);
      font-weight: 400;
      font-size: 10px;
      text-align: center;
      color: var(--secondary-font-color, #808080);
      width: 150px;
      background: none;
      border: none;
      cursor: pointer;
    }

    .nav-arrow-right {
      position: absolute;
      width: 19px;
      height: 38px;
      top: 377px;
      right: 16px;
      cursor: pointer;
    }

    .nav-arrow-left {
      position: absolute;
      width: 19px;
      height: 38px;
      top: 377px;
      left: 16px;
      transform: rotate(180deg);
      cursor: pointer;
    }

    .screen-title {
      margin: 10px auto;
      width: fit-content;
      font-weight: 600;
      font-size: 14px;
      text-align: center;
    }

    .screen-info {
      margin: 0 auto;
      font-weight: 400;
      font-size: 12px;
      line-height: 1.5;
      text-align: center;
      color: var(--secondary-font-color, #808080);
      width: 230px;
    }

    /* 800 designs */
    @media(min-width: 800px) and (max-width: 1024px) {
      .card {
        width: 354px;
      }
    }

    /* 1024 designs */
    @media(min-width: 1024px) and (max-width: 1366px) {
      .card {
        width: 366px;
      }
    }

    /* 1366 designs */
    @media(min-width: 1366px) {
      .card {
        width: 479.03px;
      }

      img.nav-arrow-right {
        right: 30px;
      }

      img.nav-arrow-left {
        left: 30px;
      }
    }
  `,lt([pe({attribute:"site-url"})],We.prototype,"siteUrl",void 0),lt([pe()],We.prototype,"stage",void 0),lt([pe({type:Object,converter:t=>t?"string"==typeof t?JSON.parse(t):t:{}})],We.prototype,"manifest",void 0),lt([pe({attribute:"manifest-url"})],We.prototype,"manifestUrl",void 0),lt([pe()],We.prototype,"platform",void 0),lt([pe({type:Object})],We.prototype,"descriptions",void 0),lt([pe({type:Object})],We.prototype,"titles",void 0),lt([pe({attribute:"enlarge-text"})],We.prototype,"enlargeText",void 0),lt([pe()],We.prototype,"onEnlarge",void 0),lt([pe({attribute:"card-title"})],We.prototype,"cardTitle",void 0),lt([pe({attribute:"disabled-platforms"})],We.prototype,"disabledPlatforms",void 0),lt([fe()],We.prototype,"iconUrl",void 0),lt([fe()],We.prototype,"isInFullScreen",void 0),lt([
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function(t,e){return(({finisher:t,descriptor:e})=>(i,s)=>{var n;if(void 0===s){const s=null!==(n=i.originalKey)&&void 0!==n?n:i.key,o=null!=e?{kind:"method",placement:"prototype",key:s,descriptor:e(i.key)}:{...i,key:s};return null!=t&&(o.finisher=function(e){t(e,s)}),o}{const n=i.constructor;void 0!==e&&Object.defineProperty(i,s,e(s)),null==t||t(n,s)}})({descriptor:e=>{const i={get(){var e;return null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t)},enumerable:!0,configurable:!0};return i}})}("#content")],We.prototype,"content",void 0),We=lt([de("manifest-previewer")],We);let je=class extends n{constructor(){super(),this.index=0,this.modalOpened=!1}static get styles(){return o`
      :host {
      }

      .gallery {
        display: flex;
        flex-direction: row;
        vertical-align: middle;
        align-items: center;
      }

      .image-container,
      .image-container img {
        max-height: 216px;
        max-width: 344px;
      }
    `}get currentImage(){var t;if(this.images)return null!==(t=this.images[this.index])&&void 0!==t?t:void 0}render(){return l`
      <div class="gallery ${this.className}">
        <app-button
          class="round"
          @click=${this.navigateBack}
          ?disabled=${this.backDisabled()}
        >
          <ion-icon name="chevron-back-outline"></ion-icon>
        </app-button>
        <div class="image-container" @click=${this.openModal}>
          <img
            class="current-image"
            alt="current image selected"
            decoding="async"
            loading="lazy"
            src=${this.currentImage}
          />
        </div>
        <app-button
          class="round"
          @click=${this.navigateForward}
          ?disabled=${this.forwardDisabled()}
        >
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </app-button>
        <app-modal
          ?open=${this.modalOpened}
          @app-modal-close=${this.closeModal}
        >
          <img
            slot="modal-image"
            class="modal-image"
            alt="current image selected in a modal"
            decoding="async"
            loading="lazy"
            src=${this.currentImage}
          />
          <div slot="modal-actions">
            <app-button @click=${this.closeModal}> Close </app-button>
          </div>
        </app-modal>
      </div>
    `}navigateBack(){this.backDisabled()||(this.index-=1)}navigateForward(){this.forwardDisabled()||(this.index+=1)}backDisabled(){return this.index<=0}forwardDisabled(){return!!this.images&&this.index>=this.images.length-1}openModal(){this.modalOpened=!0}closeModal(){this.modalOpened=!1}};t([e({attribute:"images",type:Array})],je.prototype,"images",void 0),t([e({type:Number})],je.prototype,"index",void 0),t([i()],je.prototype,"modalOpened",void 0),t([X(".gallery")],je.prototype,"gallery",void 0),je=t([s("app-gallery")],je);let Ve="lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((t=>t?parseInt(t,36):1));for(let t=1;t<Ve.length;t++)Ve[t]+=Ve[t-1];function He(t){for(let e=1;e<Ve.length;e+=2)if(Ve[e]>t)return Ve[e-1]<=t;return!1}function qe(t){return t>=127462&&t<=127487}function Ge(t,e,i=!0){return(i?Qe:Je)(t,e)}function Qe(t,e){if(e==t.length)return e;e&&Ke(t.charCodeAt(e))&&Ye(t.charCodeAt(e-1))&&e--;let i=Xe(t,e);for(e+=ti(i);e<t.length;){let s=Xe(t,e);if(8205==i||8205==s||He(s))e+=ti(s),i=s;else{if(!qe(s))break;{let i=0,s=e-2;for(;s>=0&&qe(Xe(t,s));)i++,s-=2;if(i%2==0)break;e+=2}}}return e}function Je(t,e){for(;e>0;){let i=Qe(t,e-2);if(i<e)return i;e--}return 0}function Ke(t){return t>=56320&&t<57344}function Ye(t){return t>=55296&&t<56320}function Xe(t,e){let i=t.charCodeAt(e);if(!Ye(i)||e+1==t.length)return i;let s=t.charCodeAt(e+1);return Ke(s)?s-56320+(i-55296<<10)+65536:i}function Ze(t){return t<=65535?String.fromCharCode(t):(t-=65536,String.fromCharCode(55296+(t>>10),56320+(1023&t)))}function ti(t){return t<65536?1:2}function ei(t,e,i){for(let s=0;s<t.length;)9==t.charCodeAt(s)?(e+=i-e%i,s++):(e++,s=Ge(t,s));return e}function ii(t,e,i){let s=arguments[3];null!=s&&(e=i,i=s);for(let s=0,n=0;s<t.length;){if(n>=e)return s;n+=9==t.charCodeAt(s)?i-n%i:1,s=Ge(t,s)}return t.length}class si{constructor(){}lineAt(t){if(t<0||t>this.length)throw new RangeError(`Invalid position ${t} in document of length ${this.length}`);return this.lineInner(t,!1,1,0)}line(t){if(t<1||t>this.lines)throw new RangeError(`Invalid line number ${t} in ${this.lines}-line document`);return this.lineInner(t,!0,1,0)}replace(t,e,i){let s=[];return this.decompose(0,t,s,2),i.length&&i.decompose(0,i.length,s,3),this.decompose(e,this.length,s,1),oi.from(s,this.length-(e-t)+i.length)}append(t){return this.replace(this.length,this.length,t)}slice(t,e=this.length){let i=[];return this.decompose(t,e,i,0),oi.from(i,e-t)}eq(t){if(t==this)return!0;if(t.length!=this.length||t.lines!=this.lines)return!1;let e=new li(this),i=new li(t);for(;;){if(e.next(),i.next(),e.lineBreak!=i.lineBreak||e.done!=i.done||e.value!=i.value)return!1;if(e.done)return!0}}iter(t=1){return new li(this,t)}iterRange(t,e=this.length){return new hi(this,t,e)}toString(){return this.sliceString(0)}toJSON(){let t=[];return this.flatten(t),t}static of(t){if(0==t.length)throw new RangeError("A document must have at least one line");return 1!=t.length||t[0]?t.length<=32?new ni(t):oi.from(ni.split(t,[])):si.empty}}"undefined"!=typeof Symbol&&(si.prototype[Symbol.iterator]=function(){return this.iter()});class ni extends si{constructor(t,e=function(t){let e=-1;for(let i of t)e+=i.length+1;return e}(t)){super(),this.text=t,this.length=e}get lines(){return this.text.length}get children(){return null}lineInner(t,e,i,s){for(let n=0;;n++){let o=this.text[n],r=s+o.length;if((e?i:r)>=t)return new ci(s,r,i,o);s=r+1,i++}}decompose(t,e,i,s){let n=t<=0&&e>=this.length?this:new ni(ai(this.text,t,e),Math.min(e,this.length)-Math.max(0,t));if(1&s){let t=i.pop(),e=ri(n.text,t.text.slice(),0,n.length);if(e.length<=32)i.push(new ni(e,t.length+n.length));else{let t=e.length>>1;i.push(new ni(e.slice(0,t)),new ni(e.slice(t)))}}else i.push(n)}replace(t,e,i){if(!(i instanceof ni))return super.replace(t,e,i);let s=ri(this.text,ri(i.text,ai(this.text,0,t)),e),n=this.length+i.length-(e-t);return s.length<=32?new ni(s,n):oi.from(ni.split(s,[]),n)}sliceString(t,e=this.length,i="\n"){let s="";for(let n=0,o=0;n<=e&&o<this.text.length;o++){let r=this.text[o],a=n+r.length;n>t&&o&&(s+=i),t<a&&e>n&&(s+=r.slice(Math.max(0,t-n),e-n)),n=a+1}return s}flatten(t){for(let e of this.text)t.push(e)}static split(t,e){let i=[],s=-1;for(let n of t)i.push(n),s+=n.length+1,32==i.length&&(e.push(new ni(i,s)),i=[],s=-1);return s>-1&&e.push(new ni(i,s)),e}}class oi extends si{constructor(t,e){super(),this.children=t,this.length=e,this.lines=0;for(let e of t)this.lines+=e.lines}lineInner(t,e,i,s){for(let n=0;;n++){let o=this.children[n],r=s+o.length,a=i+o.lines-1;if((e?a:r)>=t)return o.lineInner(t,e,i,s);s=r+1,i=a+1}}decompose(t,e,i,s){for(let n=0,o=0;o<=e&&n<this.children.length;n++){let r=this.children[n],a=o+r.length;if(t<=a&&e>=o){let n=s&((o<=t?1:0)|(a>=e?2:0));o>=t&&a<=e&&!n?i.push(r):r.decompose(t-o,e-o,i,n)}o=a+1}}replace(t,e,i){if(i.lines<this.lines)for(let s=0,n=0;s<this.children.length;s++){let o=this.children[s],r=n+o.length;if(t>=n&&e<=r){let a=o.replace(t-n,e-n,i),l=this.lines-o.lines+a.lines;if(a.lines<l>>4&&a.lines>l>>6){let n=this.children.slice();return n[s]=a,new oi(n,this.length-(e-t)+i.length)}return super.replace(n,r,a)}n=r+1}return super.replace(t,e,i)}sliceString(t,e=this.length,i="\n"){let s="";for(let n=0,o=0;n<this.children.length&&o<=e;n++){let r=this.children[n],a=o+r.length;o>t&&n&&(s+=i),t<a&&e>o&&(s+=r.sliceString(t-o,e-o,i)),o=a+1}return s}flatten(t){for(let e of this.children)e.flatten(t)}static from(t,e=t.reduce(((t,e)=>t+e.length+1),-1)){let i=0;for(let e of t)i+=e.lines;if(i<32){let i=[];for(let e of t)e.flatten(i);return new ni(i,e)}let s=Math.max(32,i>>5),n=s<<1,o=s>>1,r=[],a=0,l=-1,h=[];function c(t){let e;if(t.lines>n&&t instanceof oi)for(let e of t.children)c(e);else t.lines>o&&(a>o||!a)?(d(),r.push(t)):t instanceof ni&&a&&(e=h[h.length-1])instanceof ni&&t.lines+e.lines<=32?(a+=t.lines,l+=t.length+1,h[h.length-1]=new ni(e.text.concat(t.text),e.length+1+t.length)):(a+t.lines>s&&d(),a+=t.lines,l+=t.length+1,h.push(t))}function d(){0!=a&&(r.push(1==h.length?h[0]:oi.from(h,l)),l=-1,a=h.length=0)}for(let e of t)c(e);return d(),1==r.length?r[0]:new oi(r,e)}}function ri(t,e,i=0,s=1e9){for(let n=0,o=0,r=!0;o<t.length&&n<=s;o++){let a=t[o],l=n+a.length;l>=i&&(l>s&&(a=a.slice(0,s-n)),n<i&&(a=a.slice(i-n)),r?(e[e.length-1]+=a,r=!1):e.push(a)),n=l+1}return e}function ai(t,e,i){return ri(t,[""],e,i)}si.empty=new ni([""],0);class li{constructor(t,e=1){this.dir=e,this.done=!1,this.lineBreak=!1,this.value="",this.nodes=[t],this.offsets=[e>0?1:(t instanceof ni?t.text.length:t.children.length)<<1]}nextInner(t,e){for(this.done=this.lineBreak=!1;;){let i=this.nodes.length-1,s=this.nodes[i],n=this.offsets[i],o=n>>1,r=s instanceof ni?s.text.length:s.children.length;if(o==(e>0?r:0)){if(0==i)return this.done=!0,this.value="",this;e>0&&this.offsets[i-1]++,this.nodes.pop(),this.offsets.pop()}else if((1&n)==(e>0?0:1)){if(this.offsets[i]+=e,0==t)return this.lineBreak=!0,this.value="\n",this;t--}else if(s instanceof ni){let n=s.text[o+(e<0?-1:0)];if(this.offsets[i]+=e,n.length>Math.max(0,t))return this.value=0==t?n:e>0?n.slice(t):n.slice(0,n.length-t),this;t-=n.length}else{let n=s.children[o+(e<0?-1:0)];t>n.length?(t-=n.length,this.offsets[i]+=e):(e<0&&this.offsets[i]--,this.nodes.push(n),this.offsets.push(e>0?1:(n instanceof ni?n.text.length:n.children.length)<<1))}}}next(t=0){return t<0&&(this.nextInner(-t,-this.dir),t=this.value.length),this.nextInner(t,this.dir)}}class hi{constructor(t,e,i){this.value="",this.done=!1,this.cursor=new li(t,e>i?-1:1),this.pos=e>i?t.length:0,this.from=Math.min(e,i),this.to=Math.max(e,i)}nextInner(t,e){if(e<0?this.pos<=this.from:this.pos>=this.to)return this.value="",this.done=!0,this;this.done=!1,t+=Math.max(0,e<0?this.pos-this.to:this.from-this.pos);let i=e<0?this.pos-this.from:this.to-this.pos;t>i&&(t=i),i-=t;let{value:s}=this.cursor.next(t);return this.pos+=(s.length+t)*e,this.value=s.length<=i?s:e<0?s.slice(s.length-i):s.slice(0,i),this}next(t=0){return t<0?t=Math.max(t,this.from-this.pos):t>0&&(t=Math.min(t,this.to-this.pos)),this.nextInner(t,this.cursor.dir)}get lineBreak(){return this.cursor.lineBreak&&""!=this.value}}class ci{constructor(t,e,i,s){this.from=t,this.to=e,this.number=i,this.text=s}get length(){return this.to-this.from}}const di=/\r\n?|\n/;var ui=function(t){return t[t.Simple=0]="Simple",t[t.TrackDel=1]="TrackDel",t[t.TrackBefore=2]="TrackBefore",t[t.TrackAfter=3]="TrackAfter",t}(ui||(ui={}));class pi{constructor(t){this.sections=t}get length(){let t=0;for(let e=0;e<this.sections.length;e+=2)t+=this.sections[e];return t}get newLength(){let t=0;for(let e=0;e<this.sections.length;e+=2){let i=this.sections[e+1];t+=i<0?this.sections[e]:i}return t}get empty(){return 0==this.sections.length||2==this.sections.length&&this.sections[1]<0}iterGaps(t){for(let e=0,i=0,s=0;e<this.sections.length;){let n=this.sections[e++],o=this.sections[e++];o<0?(t(i,s,n),s+=n):s+=o,i+=n}}iterChangedRanges(t,e=!1){vi(this,t,e)}get invertedDesc(){let t=[];for(let e=0;e<this.sections.length;){let i=this.sections[e++],s=this.sections[e++];s<0?t.push(i,s):t.push(s,i)}return new pi(t)}composeDesc(t){return this.empty?t:t.empty?this:bi(this,t)}mapDesc(t,e=!1){return t.empty?this:wi(this,t,e)}mapPos(t,e=-1,i=ui.Simple){let s=0,n=0;for(let o=0;o<this.sections.length;){let r=this.sections[o++],a=this.sections[o++],l=s+r;if(a<0){if(l>t)return n+(t-s);n+=r}else{if(i!=ui.Simple&&l>=t&&(i==ui.TrackDel&&s<t&&l>t||i==ui.TrackBefore&&s<t||i==ui.TrackAfter&&l>t))return null;if(l>t||l==t&&e<0&&!r)return t==s||e<0?n:n+a;n+=a}s=l}if(t>s)throw new RangeError(`Position ${t} is out of range for changeset of length ${s}`);return n}touchesRange(t,e=t){for(let i=0,s=0;i<this.sections.length&&s<=e;){let n=s+this.sections[i++];if(this.sections[i++]>=0&&s<=e&&n>=t)return!(s<t&&n>e)||"cover";s=n}return!1}toString(){let t="";for(let e=0;e<this.sections.length;){let i=this.sections[e++],s=this.sections[e++];t+=(t?" ":"")+i+(s>=0?":"+s:"")}return t}toJSON(){return this.sections}static fromJSON(t){if(!Array.isArray(t)||t.length%2||t.some((t=>"number"!=typeof t)))throw new RangeError("Invalid JSON representation of ChangeDesc");return new pi(t)}}class fi extends pi{constructor(t,e){super(t),this.inserted=e}apply(t){if(this.length!=t.length)throw new RangeError("Applying change set to a document with the wrong length");return vi(this,((e,i,s,n,o)=>t=t.replace(s,s+(i-e),o)),!1),t}mapDesc(t,e=!1){return wi(this,t,e,!0)}invert(t){let e=this.sections.slice(),i=[];for(let s=0,n=0;s<e.length;s+=2){let o=e[s],r=e[s+1];if(r>=0){e[s]=r,e[s+1]=o;let a=s>>1;for(;i.length<a;)i.push(si.empty);i.push(o?t.slice(n,n+o):si.empty)}n+=o}return new fi(e,i)}compose(t){return this.empty?t:t.empty?this:bi(this,t,!0)}map(t,e=!1){return t.empty?this:wi(this,t,e,!0)}iterChanges(t,e=!1){vi(this,t,e)}get desc(){return new pi(this.sections)}filter(t){let e=[],i=[],s=[],n=new xi(this);t:for(let o=0,r=0;;){let a=o==t.length?1e9:t[o++];for(;r<a||r==a&&0==n.len;){if(n.done)break t;let t=Math.min(n.len,a-r);mi(s,t,-1);let o=-1==n.ins?-1:0==n.off?n.ins:0;mi(e,t,o),o>0&&gi(i,e,n.text),n.forward(t),r+=t}let l=t[o++];for(;r<l;){if(n.done)break t;let t=Math.min(n.len,l-r);mi(e,t,-1),mi(s,t,-1==n.ins?-1:0==n.off?n.ins:0),n.forward(t),r+=t}}return{changes:new fi(e,i),filtered:new pi(s)}}toJSON(){let t=[];for(let e=0;e<this.sections.length;e+=2){let i=this.sections[e],s=this.sections[e+1];s<0?t.push(i):0==s?t.push([i]):t.push([i].concat(this.inserted[e>>1].toJSON()))}return t}static of(t,e,i){let s=[],n=[],o=0,r=null;function a(t=!1){if(!t&&!s.length)return;o<e&&mi(s,e-o,-1);let i=new fi(s,n);r=r?r.compose(i.map(r)):i,s=[],n=[],o=0}return function t(l){if(Array.isArray(l))for(let e of l)t(e);else if(l instanceof fi){if(l.length!=e)throw new RangeError(`Mismatched change set length (got ${l.length}, expected ${e})`);a(),r=r?r.compose(l.map(r)):l}else{let{from:t,to:r=t,insert:h}=l;if(t>r||t<0||r>e)throw new RangeError(`Invalid change range ${t} to ${r} (in doc of length ${e})`);let c=h?"string"==typeof h?si.of(h.split(i||di)):h:si.empty,d=c.length;if(t==r&&0==d)return;t<o&&a(),t>o&&mi(s,t-o,-1),mi(s,r-t,d),gi(n,s,c),o=r}}(t),a(!r),r}static empty(t){return new fi(t?[t,-1]:[],[])}static fromJSON(t){if(!Array.isArray(t))throw new RangeError("Invalid JSON representation of ChangeSet");let e=[],i=[];for(let s=0;s<t.length;s++){let n=t[s];if("number"==typeof n)e.push(n,-1);else{if(!Array.isArray(n)||"number"!=typeof n[0]||n.some(((t,e)=>e&&"string"!=typeof t)))throw new RangeError("Invalid JSON representation of ChangeSet");if(1==n.length)e.push(n[0],0);else{for(;i.length<s;)i.push(si.empty);i[s]=si.of(n.slice(1)),e.push(n[0],i[s].length)}}}return new fi(e,i)}}function mi(t,e,i,s=!1){if(0==e&&i<=0)return;let n=t.length-2;n>=0&&i<=0&&i==t[n+1]?t[n]+=e:0==e&&0==t[n]?t[n+1]+=i:s?(t[n]+=e,t[n+1]+=i):t.push(e,i)}function gi(t,e,i){if(0==i.length)return;let s=e.length-2>>1;if(s<t.length)t[t.length-1]=t[t.length-1].append(i);else{for(;t.length<s;)t.push(si.empty);t.push(i)}}function vi(t,e,i){let s=t.inserted;for(let n=0,o=0,r=0;r<t.sections.length;){let a=t.sections[r++],l=t.sections[r++];if(l<0)n+=a,o+=a;else{let h=n,c=o,d=si.empty;for(;h+=a,c+=l,l&&s&&(d=d.append(s[r-2>>1])),!(i||r==t.sections.length||t.sections[r+1]<0);)a=t.sections[r++],l=t.sections[r++];e(n,h,o,c,d),n=h,o=c}}}function wi(t,e,i,s=!1){let n=[],o=s?[]:null,r=new xi(t),a=new xi(e);for(let t=0,e=0;;)if(-1==r.ins)t+=r.len,r.next();else if(-1==a.ins&&e<t){let i=Math.min(a.len,t-e);a.forward(i),mi(n,i,-1),e+=i}else if(a.ins>=0&&(r.done||e<t||e==t&&(a.len<r.len||a.len==r.len&&!i))){for(mi(n,a.ins,-1);t>e&&!r.done&&t+r.len<e+a.len;)t+=r.len,r.next();e+=a.len,a.next()}else{if(!(r.ins>=0)){if(r.done&&a.done)return o?new fi(n,o):new pi(n);throw new Error("Mismatched change set lengths")}{let i=0,s=t+r.len;for(;;)if(a.ins>=0&&e>t&&e+a.len<s)i+=a.ins,e+=a.len,a.next();else{if(!(-1==a.ins&&e<s))break;{let t=Math.min(a.len,s-e);i+=t,a.forward(t),e+=t}}mi(n,i,r.ins),o&&gi(o,n,r.text),t=s,r.next()}}}function bi(t,e,i=!1){let s=[],n=i?[]:null,o=new xi(t),r=new xi(e);for(let t=!1;;){if(o.done&&r.done)return n?new fi(s,n):new pi(s);if(0==o.ins)mi(s,o.len,0,t),o.next();else if(0!=r.len||r.done){if(o.done||r.done)throw new Error("Mismatched change set lengths");{let e=Math.min(o.len2,r.len),i=s.length;if(-1==o.ins){let i=-1==r.ins?-1:r.off?0:r.ins;mi(s,e,i,t),n&&i&&gi(n,s,r.text)}else-1==r.ins?(mi(s,o.off?0:o.len,e,t),n&&gi(n,s,o.textBit(e))):(mi(s,o.off?0:o.len,r.off?0:r.ins,t),n&&!r.off&&gi(n,s,r.text));t=(o.ins>e||r.ins>=0&&r.len>e)&&(t||s.length>i),o.forward2(e),r.forward(e)}}else mi(s,0,r.ins,t),n&&gi(n,s,r.text),r.next()}}class xi{constructor(t){this.set=t,this.i=0,this.next()}next(){let{sections:t}=this.set;this.i<t.length?(this.len=t[this.i++],this.ins=t[this.i++]):(this.len=0,this.ins=-2),this.off=0}get done(){return-2==this.ins}get len2(){return this.ins<0?this.len:this.ins}get text(){let{inserted:t}=this.set,e=this.i-2>>1;return e>=t.length?si.empty:t[e]}textBit(t){let{inserted:e}=this.set,i=this.i-2>>1;return i>=e.length&&!t?si.empty:e[i].slice(this.off,null==t?void 0:this.off+t)}forward(t){t==this.len?this.next():(this.len-=t,this.off+=t)}forward2(t){-1==this.ins?this.forward(t):t==this.ins?this.next():(this.ins-=t,this.off+=t)}}class yi{constructor(t,e,i){this.from=t,this.to=e,this.flags=i}get anchor(){return 16&this.flags?this.to:this.from}get head(){return 16&this.flags?this.from:this.to}get empty(){return this.from==this.to}get assoc(){return 4&this.flags?-1:8&this.flags?1:0}get bidiLevel(){let t=3&this.flags;return 3==t?null:t}get goalColumn(){let t=this.flags>>5;return 33554431==t?void 0:t}map(t,e=-1){let i=t.mapPos(this.from,e),s=t.mapPos(this.to,e);return i==this.from&&s==this.to?this:new yi(i,s,this.flags)}extend(t,e=t){if(t<=this.anchor&&e>=this.anchor)return ki.range(t,e);let i=Math.abs(t-this.anchor)>Math.abs(e-this.anchor)?t:e;return ki.range(this.anchor,i)}eq(t){return this.anchor==t.anchor&&this.head==t.head}toJSON(){return{anchor:this.anchor,head:this.head}}static fromJSON(t){if(!t||"number"!=typeof t.anchor||"number"!=typeof t.head)throw new RangeError("Invalid JSON representation for SelectionRange");return ki.range(t.anchor,t.head)}}class ki{constructor(t,e=0){this.ranges=t,this.mainIndex=e}map(t,e=-1){return t.empty?this:ki.create(this.ranges.map((i=>i.map(t,e))),this.mainIndex)}eq(t){if(this.ranges.length!=t.ranges.length||this.mainIndex!=t.mainIndex)return!1;for(let e=0;e<this.ranges.length;e++)if(!this.ranges[e].eq(t.ranges[e]))return!1;return!0}get main(){return this.ranges[this.mainIndex]}asSingle(){return 1==this.ranges.length?this:new ki([this.main])}addRange(t,e=!0){return ki.create([t].concat(this.ranges),e?0:this.mainIndex+1)}replaceRange(t,e=this.mainIndex){let i=this.ranges.slice();return i[e]=t,ki.create(i,this.mainIndex)}toJSON(){return{ranges:this.ranges.map((t=>t.toJSON())),main:this.mainIndex}}static fromJSON(t){if(!t||!Array.isArray(t.ranges)||"number"!=typeof t.main||t.main>=t.ranges.length)throw new RangeError("Invalid JSON representation for EditorSelection");return new ki(t.ranges.map((t=>yi.fromJSON(t))),t.main)}static single(t,e=t){return new ki([ki.range(t,e)],0)}static create(t,e=0){if(0==t.length)throw new RangeError("A selection needs at least one range");for(let i=0,s=0;s<t.length;s++){let n=t[s];if(n.empty?n.from<=i:n.from<i)return Si(t.slice(),e);i=n.to}return new ki(t,e)}static cursor(t,e=0,i,s){return new yi(t,t,(0==e?0:e<0?4:8)|(null==i?3:Math.min(2,i))|(null!=s?s:33554431)<<5)}static range(t,e,i){let s=(null!=i?i:33554431)<<5;return e<t?new yi(e,t,16|s):new yi(t,e,s)}}function Si(t,e=0){let i=t[e];t.sort(((t,e)=>t.from-e.from)),e=t.indexOf(i);for(let i=1;i<t.length;i++){let s=t[i],n=t[i-1];if(s.empty?s.from<=n.to:s.from<n.to){let o=n.from,r=Math.max(s.to,n.to);i<=e&&e--,t.splice(--i,2,s.anchor>s.head?ki.range(r,o):ki.range(o,r))}}return new ki(t,e)}function Ai(t,e){for(let i of t.ranges)if(i.to>e)throw new RangeError("Selection points outside of document")}let Ci=0;class Oi{constructor(t,e,i,s,n){this.combine=t,this.compareInput=e,this.compare=i,this.isStatic=s,this.extensions=n,this.id=Ci++,this.default=t([])}static define(t={}){return new Oi(t.combine||(t=>t),t.compareInput||((t,e)=>t===e),t.compare||(t.combine?(t,e)=>t===e:Mi),!!t.static,t.enables)}of(t){return new $i([],this,0,t)}compute(t,e){if(this.isStatic)throw new Error("Can't compute a static facet");return new $i(t,this,1,e)}computeN(t,e){if(this.isStatic)throw new Error("Can't compute a static facet");return new $i(t,this,2,e)}from(t,e){return e||(e=t=>t),this.compute([t],(i=>e(i.field(t))))}}function Mi(t,e){return t==e||t.length==e.length&&t.every(((t,i)=>t===e[i]))}class $i{constructor(t,e,i,s){this.dependencies=t,this.facet=e,this.type=i,this.value=s,this.id=Ci++}dynamicSlot(t){var e;let i=this.value,s=this.facet.compareInput,n=t[this.id]>>1,o=2==this.type,r=!1,a=!1,l=[];for(let i of this.dependencies)"doc"==i?r=!0:"selection"==i?a=!0:0==(1&(null!==(e=t[i.id])&&void 0!==e?e:1))&&l.push(t[i.id]);return(t,e)=>{if(!e||e.reconfigured)return t.values[n]=i(t),1;{if(!(r&&e.docChanged||a&&(e.docChanged||e.selection)||l.some((e=>(1&Wi(t,e))>0))))return 0;let h=i(t),c=e.startState.values[n];return(o?function(t,e,i){if(t.length!=e.length)return!1;for(let s=0;s<t.length;s++)if(!i(t[s],e[s]))return!1;return!0}(h,c,s):s(h,c))?0:(t.values[n]=h,1)}}}}function Ti(t,e,i){let s=i.map((e=>t[e.id])),n=i.map((t=>t.type)),o=s.filter((t=>!(1&t))),r=t[e.id]>>1;return(t,i)=>{let a=i?i.reconfigured?i.startState.config.address[e.id]:r<<1:null,l=null==a;for(let e of o)1&Wi(t,e)&&(l=!0);if(!l)return 0;let h=[];for(let e=0;e<s.length;e++){let i=ji(t,s[e]);if(2==n[e])for(let t of i)h.push(t);else h.push(i)}let c=e.combine(h);return null!=a&&e.compare(c,ji(i.startState,a))?0:(t.values[r]=c,1)}}function Pi(t,e){let i=t.config.address[e];return null==i?null:i>>1}const Di=Oi.define({static:!0});class Ei{constructor(t,e,i,s,n){this.id=t,this.createF=e,this.updateF=i,this.compareF=s,this.spec=n,this.provides=void 0}static define(t){let e=new Ei(Ci++,t.create,t.update,t.compare||((t,e)=>t===e),t);return t.provide&&(e.provides=t.provide(e)),e}create(t){let e=t.facet(Di).find((t=>t.field==this));return((null==e?void 0:e.create)||this.createF)(t)}slot(t){let e=t[this.id]>>1;return(t,i)=>{if(!i||i.reconfigured&&null==Pi(i.startState,this.id))return t.values[e]=this.create(t),1;let s,n=0;i.reconfigured?(s=i.startState.values[Pi(i.startState,this.id)],n=1):s=i.startState.values[e];let o=this.updateF(s,i);return n||this.compareF(s,o)||(n=1),n&&(t.values[e]=o),n}}init(t){return[this,Di.of({field:this,create:t})]}get extension(){return this}}const Ri=2,Li=1,Ii=0;function Ni(t){return e=>new _i(e,t)}const Bi={fallback:Ni(3),default:Ni(Ri),extend:Ni(Li),override:Ni(Ii)};class _i{constructor(t,e){this.inner=t,this.prec=e}}class Fi{of(t){return new Ui(this,t)}reconfigure(t){return Fi.reconfigure.of({compartment:this,extension:t})}get(t){return t.config.compartments.get(this)}}class Ui{constructor(t,e){this.compartment=t,this.inner=e}}class zi{constructor(t,e,i,s,n){for(this.base=t,this.compartments=e,this.dynamicSlots=i,this.address=s,this.staticValues=n,this.statusTemplate=[];this.statusTemplate.length<i.length;)this.statusTemplate.push(0)}staticFacet(t){let e=this.address[t.id];return null==e?t.default:this.staticValues[e>>1]}static resolve(t,e,i){let s=[],n=Object.create(null),o=new Map;for(let i of function(t,e,i){let s=[[],[],[],[]],n=new Map;function o(t,r){let a=n.get(t);if(null!=a){if(a>=r)return;let e=s[a].indexOf(t);e>-1&&s[a].splice(e,1),t instanceof Ui&&i.delete(t.compartment)}if(n.set(t,r),Array.isArray(t))for(let e of t)o(e,r);else if(t instanceof Ui){if(i.has(t.compartment))throw new RangeError("Duplicate use of compartment in extensions");let s=e.get(t.compartment)||t.inner;i.set(t.compartment,s),o(s,r)}else if(t instanceof _i)o(t.inner,t.prec);else if(t instanceof Ei)s[r].push(t),t.provides&&o(t.provides,r);else if(t instanceof $i)s[r].push(t),t.facet.extensions&&o(t.facet.extensions,r);else{let e=t.extension;if(!e)throw new Error(`Unrecognized extension value in extension set (${t}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);o(e,r)}}return o(t,Ri),s.reduce(((t,e)=>t.concat(e)))}(t,e,o))i instanceof Ei?s.push(i):(n[i.facet.id]||(n[i.facet.id]=[])).push(i);let r=Object.create(null),a=[],l=[];for(let t of s)r[t.id]=l.length<<1,l.push((e=>t.slot(e)));for(let t in n){let e=n[t],s=e[0].facet;if(e.every((t=>0==t.type))){r[s.id]=a.length<<1|1;let t=s.combine(e.map((t=>t.value))),n=i?i.config.address[s.id]:null;if(null!=n){let e=ji(i,n);s.compare(t,e)&&(t=e)}a.push(t)}else{for(let t of e)0==t.type?(r[t.id]=a.length<<1|1,a.push(t.value)):(r[t.id]=l.length<<1,l.push((e=>t.dynamicSlot(e))));r[s.id]=l.length<<1,l.push((t=>Ti(t,s,e)))}}return new zi(t,o,l.map((t=>t(r))),r,a)}}function Wi(t,e){if(1&e)return 2;let i=e>>1,s=t.status[i];if(4==s)throw new Error("Cyclic dependency between fields and/or facets");if(2&s)return s;t.status[i]=4;let n=t.config.dynamicSlots[i](t,t.applying);return t.status[i]=2|n}function ji(t,e){return 1&e?t.config.staticValues[e>>1]:t.values[e>>1]}const Vi=Oi.define(),Hi=Oi.define({combine:t=>t.some((t=>t)),static:!0}),qi=Oi.define({combine:t=>t.length?t[0]:void 0,static:!0}),Gi=Oi.define(),Qi=Oi.define(),Ji=Oi.define();class Ki{constructor(t,e){this.type=t,this.value=e}static define(){return new Yi}}class Yi{of(t){return new Ki(this,t)}}class Xi{constructor(t){this.map=t}of(t){return new Zi(this,t)}}class Zi{constructor(t,e){this.type=t,this.value=e}map(t){let e=this.type.map(this.value,t);return void 0===e?void 0:e==this.value?this:new Zi(this.type,e)}is(t){return this.type==t}static define(t={}){return new Xi(t.map||(t=>t))}static mapEffects(t,e){if(!t.length)return t;let i=[];for(let s of t){let t=s.map(e);t&&i.push(t)}return i}}Zi.reconfigure=Zi.define(),Zi.appendConfig=Zi.define();class ts{constructor(t,e,i,s,n,o){this.startState=t,this.changes=e,this.selection=i,this.effects=s,this.annotations=n,this.scrollIntoView=o,this._doc=null,this._state=null,i&&Ai(i,e.newLength),n.some((t=>t.type==ts.time))||(this.annotations=n.concat(ts.time.of(Date.now())))}get newDoc(){return this._doc||(this._doc=this.changes.apply(this.startState.doc))}get newSelection(){return this.selection||this.startState.selection.map(this.changes)}get state(){return this._state||this.startState.applyTransaction(this),this._state}annotation(t){for(let e of this.annotations)if(e.type==t)return e.value}get docChanged(){return!this.changes.empty}get reconfigured(){return this.startState.config!=this.state.config}}function es(t,e){let i=[];for(let s=0,n=0;;){let o,r;if(s<t.length&&(n==e.length||e[n]>=t[s]))o=t[s++],r=t[s++];else{if(!(n<e.length))return i;o=e[n++],r=e[n++]}!i.length||i[i.length-1]<o?i.push(o,r):i[i.length-1]<r&&(i[i.length-1]=r)}}function is(t,e,i){var s;let n,o,r;return i?(n=e.changes,o=fi.empty(e.changes.length),r=t.changes.compose(e.changes)):(n=e.changes.map(t.changes),o=t.changes.mapDesc(e.changes,!0),r=t.changes.compose(n)),{changes:r,selection:e.selection?e.selection.map(o):null===(s=t.selection)||void 0===s?void 0:s.map(n),effects:Zi.mapEffects(t.effects,n).concat(Zi.mapEffects(e.effects,o)),annotations:t.annotations.length?t.annotations.concat(e.annotations):e.annotations,scrollIntoView:t.scrollIntoView||e.scrollIntoView}}function ss(t,e,i){let s=e.selection;return{changes:e.changes instanceof fi?e.changes:fi.of(e.changes||[],i,t.facet(qi)),selection:s&&(s instanceof ki?s:ki.single(s.anchor,s.head)),effects:rs(e.effects),annotations:rs(e.annotations),scrollIntoView:!!e.scrollIntoView}}function ns(t,e,i){let s=ss(t,e.length?e[0]:{},t.doc.length);e.length&&!1===e[0].filter&&(i=!1);for(let n=1;n<e.length;n++){!1===e[n].filter&&(i=!1);let o=!!e[n].sequential;s=is(s,ss(t,e[n],o?s.changes.newLength:t.doc.length),o)}let n=new ts(t,s.changes,s.selection,s.effects,s.annotations,s.scrollIntoView);return function(t){let e=t.startState,i=e.facet(Ji),s=t;for(let n=i.length-1;n>=0;n--){let o=i[n](t);o&&Object.keys(o).length&&(s=is(t,ss(e,o,t.changes.newLength),!0))}return s==t?t:new ts(e,t.changes,t.selection,s.effects,s.annotations,s.scrollIntoView)}(i?function(t){let e=t.startState,i=!0;for(let s of e.facet(Gi)){let e=s(t);if(!1===e){i=!1;break}Array.isArray(e)&&(i=!0===i?e:es(i,e))}if(!0!==i){let s,n;if(!1===i)n=t.changes.invertedDesc,s=fi.empty(e.doc.length);else{let e=t.changes.filter(i);s=e.changes,n=e.filtered.invertedDesc}t=new ts(e,s,t.selection&&t.selection.map(n),Zi.mapEffects(t.effects,n),t.annotations,t.scrollIntoView)}let s=e.facet(Qi);for(let i=s.length-1;i>=0;i--){let n=s[i](t);t=n instanceof ts?n:Array.isArray(n)&&1==n.length&&n[0]instanceof ts?n[0]:ns(e,rs(n),!1)}return t}(n):n)}ts.time=Ki.define(),ts.userEvent=Ki.define(),ts.addToHistory=Ki.define(),ts.remote=Ki.define();const os=[];function rs(t){return null==t?os:Array.isArray(t)?t:[t]}var as=function(t){return t[t.Word=0]="Word",t[t.Space=1]="Space",t[t.Other=2]="Other",t}(as||(as={}));const ls=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;let hs;try{hs=new RegExp("[\\p{Alphabetic}\\p{Number}_]","u")}catch(Bt){}function cs(t){return e=>{if(!/\S/.test(e))return as.Space;if(function(t){if(hs)return hs.test(t);for(let e=0;e<t.length;e++){let i=t[e];if(/\w/.test(i)||i>""&&(i.toUpperCase()!=i.toLowerCase()||ls.test(i)))return!0}return!1}(e))return as.Word;for(let i=0;i<t.length;i++)if(e.indexOf(t[i])>-1)return as.Word;return as.Other}}class ds{constructor(t,e,i,s=null){if(this.config=t,this.doc=e,this.selection=i,this.applying=null,this.status=t.statusTemplate.slice(),s&&s.startState.config==t)this.values=s.startState.values.slice();else if(this.values=t.dynamicSlots.map((t=>null)),s)for(let e in t.address){let i=t.address[e],n=s.startState.config.address[e];null!=n&&0==(1&i)&&(this.values[i>>1]=ji(s.startState,n))}this.applying=s,s&&(s._state=this);for(let t=0;t<this.config.dynamicSlots.length;t++)Wi(this,t<<1);this.applying=null}field(t,e=!0){let i=this.config.address[t.id];if(null!=i)return Wi(this,i),ji(this,i);if(e)throw new RangeError("Field is not present in this state")}update(...t){return ns(this,t,!0)}applyTransaction(t){let e=this.config,{base:i,compartments:s}=e;for(let n of t.effects)n.is(Fi.reconfigure)?(e&&(s=new Map,e.compartments.forEach(((t,e)=>s.set(e,t))),e=null),s.set(n.value.compartment,n.value.extension)):n.is(Zi.reconfigure)?(e=null,i=n.value):n.is(Zi.appendConfig)&&(e=null,i=rs(i).concat(n.value));new ds(e||zi.resolve(i,s,this),t.newDoc,t.newSelection,t)}replaceSelection(t){return"string"==typeof t&&(t=this.toText(t)),this.changeByRange((e=>({changes:{from:e.from,to:e.to,insert:t},range:ki.cursor(e.from+t.length)})))}changeByRange(t){let e=this.selection,i=t(e.ranges[0]),s=this.changes(i.changes),n=[i.range],o=rs(i.effects);for(let i=1;i<e.ranges.length;i++){let r=t(e.ranges[i]),a=this.changes(r.changes),l=a.map(s);for(let t=0;t<i;t++)n[t]=n[t].map(l);let h=s.mapDesc(a,!0);n.push(r.range.map(h)),s=s.compose(l),o=Zi.mapEffects(o,l).concat(Zi.mapEffects(rs(r.effects),h))}return{changes:s,selection:ki.create(n,e.mainIndex),effects:o}}changes(t=[]){return t instanceof fi?t:fi.of(t,this.doc.length,this.facet(ds.lineSeparator))}toText(t){return si.of(t.split(this.facet(ds.lineSeparator)||di))}sliceDoc(t=0,e=this.doc.length){return this.doc.sliceString(t,e,this.lineBreak)}facet(t){let e=this.config.address[t.id];return null==e?t.default:(Wi(this,e),ji(this,e))}toJSON(t){let e={doc:this.sliceDoc(),selection:this.selection.toJSON()};if(t)for(let i in t){let s=t[i];s instanceof Ei&&(e[i]=s.spec.toJSON(this.field(t[i]),this))}return e}static fromJSON(t,e={},i){if(!t||"string"!=typeof t.doc)throw new RangeError("Invalid JSON representation for EditorState");let s=[];if(i)for(let e in i){let n=i[e],o=t[e];s.push(n.init((t=>n.spec.fromJSON(o,t))))}return ds.create({doc:t.doc,selection:ki.fromJSON(t.selection),extensions:e.extensions?s.concat([e.extensions]):s})}static create(t={}){let e=zi.resolve(t.extensions||[],new Map),i=t.doc instanceof si?t.doc:si.of((t.doc||"").split(e.staticFacet(ds.lineSeparator)||di)),s=t.selection?t.selection instanceof ki?t.selection:ki.single(t.selection.anchor,t.selection.head):ki.single(0);return Ai(s,i.length),e.staticFacet(Hi)||(s=s.asSingle()),new ds(e,i,s)}get tabSize(){return this.facet(ds.tabSize)}get lineBreak(){return this.facet(ds.lineSeparator)||"\n"}phrase(t){for(let e of this.facet(ds.phrases))if(Object.prototype.hasOwnProperty.call(e,t))return e[t];return t}languageDataAt(t,e){let i=[];for(let s of this.facet(Vi))for(let n of s(this,e))Object.prototype.hasOwnProperty.call(n,t)&&i.push(n[t]);return i}charCategorizer(t){return cs(this.languageDataAt("wordChars",t).join(""))}wordAt(t){let{text:e,from:i,length:s}=this.doc.lineAt(t),n=this.charCategorizer(t),o=t-i,r=t-i;for(;o>0;){let t=Ge(e,o,!1);if(n(e.slice(t,o))!=as.Word)break;o=t}for(;r<s;){let t=Ge(e,r);if(n(e.slice(r,t))!=as.Word)break;r=t}return o==r?ki.range(o+i,r+i):null}}function us(t,e,i={}){let s={};for(let e of t)for(let t of Object.keys(e)){let n=e[t],o=s[t];if(void 0===o)s[t]=n;else if(o===n||void 0===n);else{if(!Object.hasOwnProperty.call(i,t))throw new Error("Config merge conflict for field "+t);s[t]=i[t](o,n)}}for(let t in e)void 0===s[t]&&(s[t]=e[t]);return s}ds.allowMultipleSelections=Hi,ds.tabSize=Oi.define({combine:t=>t.length?t[0]:4}),ds.lineSeparator=qi,ds.phrases=Oi.define(),ds.languageData=Vi,ds.changeFilter=Gi,ds.transactionFilter=Qi,ds.transactionExtender=Ji,Fi.reconfigure=Zi.define();const ps="undefined"==typeof Symbol?"__ͼ":Symbol.for("ͼ"),fs="undefined"==typeof Symbol?"__styleSet"+Math.floor(1e8*Math.random()):Symbol("styleSet"),ms="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:{};class gs{constructor(t,e){this.rules=[];let{finish:i}=e||{};function s(t){return/^@/.test(t)?[t]:t.split(/,\s*/)}function n(t,e,o,r){let a=[],l=/^@(\w+)\b/.exec(t[0]),h=l&&"keyframes"==l[1];if(l&&null==e)return o.push(t[0]+";");for(let i in e){let r=e[i];if(/&/.test(i))n(i.split(/,\s*/).map((e=>t.map((t=>e.replace(/&/,t))))).reduce(((t,e)=>t.concat(e))),r,o);else if(r&&"object"==typeof r){if(!l)throw new RangeError("The value of a property ("+i+") should be a primitive value.");n(s(i),r,a,h)}else null!=r&&a.push(i.replace(/_.*/,"").replace(/[A-Z]/g,(t=>"-"+t.toLowerCase()))+": "+r+";")}(a.length||h)&&o.push((!i||l||r?t:t.map(i)).join(", ")+" {"+a.join(" ")+"}")}for(let e in t)n(s(e),t[e],this.rules)}getRules(){return this.rules.join("\n")}static newName(){let t=ms[ps]||1;return ms[ps]=t+1,"ͼ"+t.toString(36)}static mount(t,e){(t[fs]||new ws(t)).mount(Array.isArray(e)?e:[e])}}let vs=null;class ws{constructor(t){if(!t.head&&t.adoptedStyleSheets&&"undefined"!=typeof CSSStyleSheet){if(vs)return t.adoptedStyleSheets=[vs.sheet].concat(t.adoptedStyleSheets),t[fs]=vs;this.sheet=new CSSStyleSheet,t.adoptedStyleSheets=[this.sheet].concat(t.adoptedStyleSheets),vs=this}else{this.styleTag=(t.ownerDocument||t).createElement("style");let e=t.head||t;e.insertBefore(this.styleTag,e.firstChild)}this.modules=[],t[fs]=this}mount(t){let e=this.sheet,i=0,s=0;for(let n=0;n<t.length;n++){let o=t[n],r=this.modules.indexOf(o);if(r<s&&r>-1&&(this.modules.splice(r,1),s--,r=-1),-1==r){if(this.modules.splice(s++,0,o),e)for(let t=0;t<o.rules.length;t++)e.insertRule(o.rules[t],i++)}else{for(;s<r;)i+=this.modules[s++].rules.length;i+=o.rules.length,s++}}if(!e){let t="";for(let e=0;e<this.modules.length;e++)t+=this.modules[e].getRules()+"\n";this.styleTag.textContent=t}}}class bs{eq(t){return this==t}range(t,e=t){return new xs(t,e,this)}}bs.prototype.startSide=bs.prototype.endSide=0,bs.prototype.point=!1,bs.prototype.mapMode=ui.TrackDel;class xs{constructor(t,e,i){this.from=t,this.to=e,this.value=i}}function ys(t,e){return t.from-e.from||t.value.startSide-e.value.startSide}class ks{constructor(t,e,i,s){this.from=t,this.to=e,this.value=i,this.maxPoint=s}get length(){return this.to[this.to.length-1]}findIndex(t,e,i,s=0){let n=i?this.to:this.from;for(let o=s,r=n.length;;){if(o==r)return o;let s=o+r>>1,a=n[s]-t||(i?this.value[s].endSide:this.value[s].startSide)-e;if(s==o)return a>=0?o:r;a>=0?r=s:o=s+1}}between(t,e,i,s){for(let n=this.findIndex(e,-1e9,!0),o=this.findIndex(i,1e9,!1,n);n<o;n++)if(!1===s(this.from[n]+t,this.to[n]+t,this.value[n]))return!1}map(t,e){let i=[],s=[],n=[],o=-1,r=-1;for(let a=0;a<this.value.length;a++){let l,h,c=this.value[a],d=this.from[a]+t,u=this.to[a]+t;if(d==u){let t=e.mapPos(d,c.startSide,c.mapMode);if(null==t)continue;l=h=t}else if(l=e.mapPos(d,c.startSide),h=e.mapPos(u,c.endSide),l>h||l==h&&c.startSide>0&&c.endSide<=0)continue;(h-l||c.endSide-c.startSide)<0||(o<0&&(o=l),c.point&&(r=Math.max(r,h-l)),i.push(c),s.push(l-o),n.push(h-o))}return{mapped:i.length?new ks(s,n,i,r):null,pos:o}}}class Ss{constructor(t,e,i=Ss.empty,s){this.chunkPos=t,this.chunk=e,this.nextLayer=i,this.maxPoint=s}get length(){let t=this.chunk.length-1;return t<0?0:Math.max(this.chunkEnd(t),this.nextLayer.length)}get size(){if(this.isEmpty)return 0;let t=this.nextLayer.size;for(let e of this.chunk)t+=e.value.length;return t}chunkEnd(t){return this.chunkPos[t]+this.chunk[t].length}update(t){let{add:e=[],sort:i=!1,filterFrom:s=0,filterTo:n=this.length}=t,o=t.filter;if(0==e.length&&!o)return this;if(i&&e.slice().sort(ys),this.isEmpty)return e.length?Ss.of(e):this;let r=new Os(this,null,-1).goto(0),a=0,l=[],h=new As;for(;r.value||a<e.length;)if(a<e.length&&(r.from-e[a].from||r.startSide-e[a].value.startSide)>=0){let t=e[a++];h.addInner(t.from,t.to,t.value)||l.push(t)}else 1==r.rangeIndex&&r.chunkIndex<this.chunk.length&&(a==e.length||this.chunkEnd(r.chunkIndex)<e[a].from)&&(!o||s>this.chunkEnd(r.chunkIndex)||n<this.chunkPos[r.chunkIndex])&&h.addChunk(this.chunkPos[r.chunkIndex],this.chunk[r.chunkIndex])?r.nextChunk():((!o||s>r.to||n<r.from||o(r.from,r.to,r.value))&&(h.addInner(r.from,r.to,r.value)||l.push(new xs(r.from,r.to,r.value))),r.next());return h.finishInner(this.nextLayer.isEmpty&&!l.length?Ss.empty:this.nextLayer.update({add:l,filter:o,filterFrom:s,filterTo:n}))}map(t){if(0==t.length||this.isEmpty)return this;let e=[],i=[],s=-1;for(let n=0;n<this.chunk.length;n++){let o=this.chunkPos[n],r=this.chunk[n],a=t.touchesRange(o,o+r.length);if(!1===a)s=Math.max(s,r.maxPoint),e.push(r),i.push(t.mapPos(o));else if(!0===a){let{mapped:n,pos:a}=r.map(o,t);n&&(s=Math.max(s,n.maxPoint),e.push(n),i.push(a))}}let n=this.nextLayer.map(t);return 0==e.length?n:new Ss(i,e,n,s)}between(t,e,i){if(!this.isEmpty){for(let s=0;s<this.chunk.length;s++){let n=this.chunkPos[s],o=this.chunk[s];if(e>=n&&t<=n+o.length&&!1===o.between(n,t-n,e-n,i))return}this.nextLayer.between(t,e,i)}}iter(t=0){return Ms.from([this]).goto(t)}get isEmpty(){return this.nextLayer==this}static iter(t,e=0){return Ms.from(t).goto(e)}static compare(t,e,i,s,n=-1){let o=t.filter((t=>t.maxPoint>=500||!t.isEmpty&&e.indexOf(t)<0&&t.maxPoint>=n)),r=e.filter((e=>e.maxPoint>=500||!e.isEmpty&&t.indexOf(e)<0&&e.maxPoint>=n)),a=Cs(o,r),l=new Ts(o,a,n),h=new Ts(r,a,n);i.iterGaps(((t,e,i)=>Ps(l,t,h,e,i,s))),i.empty&&0==i.length&&Ps(l,0,h,0,0,s)}static eq(t,e,i=0,s){null==s&&(s=1e9);let n=t.filter((t=>!t.isEmpty&&e.indexOf(t)<0)),o=e.filter((e=>!e.isEmpty&&t.indexOf(e)<0));if(n.length!=o.length)return!1;if(!n.length)return!0;let r=Cs(n,o),a=new Ts(n,r,0).goto(i),l=new Ts(o,r,0).goto(i);for(;;){if(a.to!=l.to||!Ds(a.active,l.active)||a.point&&(!l.point||!a.point.eq(l.point)))return!1;if(a.to>=s)return!0;a.next(),l.next()}}static spans(t,e,i,s,n=-1){let o=new Ts(t,null,n).goto(e),r=e,a=o.openStart;for(;;){let t=Math.min(o.to,i);if(o.point?(s.point(r,t,o.point,o.activeForPoint(o.to),a),a=o.openEnd(t)+(o.to>t?1:0)):t>r&&(s.span(r,t,o.active,a),a=o.openEnd(t)),o.to>i)break;r=o.to,o.next()}return a}static of(t,e=!1){let i=new As;for(let s of t instanceof xs?[t]:e?function(t){if(t.length>1)for(let e=t[0],i=1;i<t.length;i++){let s=t[i];if(ys(e,s)>0)return t.slice().sort(ys);e=s}return t}(t):t)i.add(s.from,s.to,s.value);return i.finish()}}Ss.empty=new Ss([],[],null,-1),Ss.empty.nextLayer=Ss.empty;class As{constructor(){this.chunks=[],this.chunkPos=[],this.chunkStart=-1,this.last=null,this.lastFrom=-1e9,this.lastTo=-1e9,this.from=[],this.to=[],this.value=[],this.maxPoint=-1,this.setMaxPoint=-1,this.nextLayer=null}finishChunk(t){this.chunks.push(new ks(this.from,this.to,this.value,this.maxPoint)),this.chunkPos.push(this.chunkStart),this.chunkStart=-1,this.setMaxPoint=Math.max(this.setMaxPoint,this.maxPoint),this.maxPoint=-1,t&&(this.from=[],this.to=[],this.value=[])}add(t,e,i){this.addInner(t,e,i)||(this.nextLayer||(this.nextLayer=new As)).add(t,e,i)}addInner(t,e,i){let s=t-this.lastTo||i.startSide-this.last.endSide;if(s<=0&&(t-this.lastFrom||i.startSide-this.last.startSide)<0)throw new Error("Ranges must be added sorted by `from` position and `startSide`");return!(s<0)&&(250==this.from.length&&this.finishChunk(!0),this.chunkStart<0&&(this.chunkStart=t),this.from.push(t-this.chunkStart),this.to.push(e-this.chunkStart),this.last=i,this.lastFrom=t,this.lastTo=e,this.value.push(i),i.point&&(this.maxPoint=Math.max(this.maxPoint,e-t)),!0)}addChunk(t,e){if((t-this.lastTo||e.value[0].startSide-this.last.endSide)<0)return!1;this.from.length&&this.finishChunk(!0),this.setMaxPoint=Math.max(this.setMaxPoint,e.maxPoint),this.chunks.push(e),this.chunkPos.push(t);let i=e.value.length-1;return this.last=e.value[i],this.lastFrom=e.from[i]+t,this.lastTo=e.to[i]+t,!0}finish(){return this.finishInner(Ss.empty)}finishInner(t){if(this.from.length&&this.finishChunk(!1),0==this.chunks.length)return t;let e=new Ss(this.chunkPos,this.chunks,this.nextLayer?this.nextLayer.finishInner(t):t,this.setMaxPoint);return this.from=null,e}}function Cs(t,e){let i=new Map;for(let e of t)for(let t=0;t<e.chunk.length;t++)e.chunk[t].maxPoint<500&&i.set(e.chunk[t],e.chunkPos[t]);let s=new Set;for(let t of e)for(let e=0;e<t.chunk.length;e++)i.get(t.chunk[e])==t.chunkPos[e]&&s.add(t.chunk[e]);return s}class Os{constructor(t,e,i,s=0){this.layer=t,this.skip=e,this.minPoint=i,this.rank=s}get startSide(){return this.value?this.value.startSide:0}get endSide(){return this.value?this.value.endSide:0}goto(t,e=-1e9){return this.chunkIndex=this.rangeIndex=0,this.gotoInner(t,e,!1),this}gotoInner(t,e,i){for(;this.chunkIndex<this.layer.chunk.length;){let e=this.layer.chunk[this.chunkIndex];if(!(this.skip&&this.skip.has(e)||this.layer.chunkEnd(this.chunkIndex)<t||e.maxPoint<this.minPoint))break;this.chunkIndex++,i=!1}let s=this.chunkIndex==this.layer.chunk.length?0:this.layer.chunk[this.chunkIndex].findIndex(t-this.layer.chunkPos[this.chunkIndex],e,!0);(!i||this.rangeIndex<s)&&(this.rangeIndex=s),this.next()}forward(t,e){(this.to-t||this.endSide-e)<0&&this.gotoInner(t,e,!0)}next(){for(;;){if(this.chunkIndex==this.layer.chunk.length){this.from=this.to=1e9,this.value=null;break}{let t=this.layer.chunkPos[this.chunkIndex],e=this.layer.chunk[this.chunkIndex],i=t+e.from[this.rangeIndex];if(this.from=i,this.to=t+e.to[this.rangeIndex],this.value=e.value[this.rangeIndex],++this.rangeIndex==e.value.length){if(this.chunkIndex++,this.skip)for(;this.chunkIndex<this.layer.chunk.length&&this.skip.has(this.layer.chunk[this.chunkIndex]);)this.chunkIndex++;this.rangeIndex=0}if(this.minPoint<0||this.value.point&&this.to-this.from>=this.minPoint)break}}}nextChunk(){this.chunkIndex++,this.rangeIndex=0,this.next()}compare(t){return this.from-t.from||this.startSide-t.startSide||this.to-t.to||this.endSide-t.endSide}}class Ms{constructor(t){this.heap=t}static from(t,e=null,i=-1){let s=[];for(let n=0;n<t.length;n++)for(let o=t[n];!o.isEmpty;o=o.nextLayer)o.maxPoint>=i&&s.push(new Os(o,e,i,n));return 1==s.length?s[0]:new Ms(s)}get startSide(){return this.value?this.value.startSide:0}goto(t,e=-1e9){for(let i of this.heap)i.goto(t,e);for(let t=this.heap.length>>1;t>=0;t--)$s(this.heap,t);return this.next(),this}forward(t,e){for(let i of this.heap)i.forward(t,e);for(let t=this.heap.length>>1;t>=0;t--)$s(this.heap,t);(this.to-t||this.value.endSide-e)<0&&this.next()}next(){if(0==this.heap.length)this.from=this.to=1e9,this.value=null,this.rank=-1;else{let t=this.heap[0];this.from=t.from,this.to=t.to,this.value=t.value,this.rank=t.rank,t.value&&t.next(),$s(this.heap,0)}}}function $s(t,e){for(let i=t[e];;){let s=1+(e<<1);if(s>=t.length)break;let n=t[s];if(s+1<t.length&&n.compare(t[s+1])>=0&&(n=t[s+1],s++),i.compare(n)<0)break;t[s]=i,t[e]=n,e=s}}class Ts{constructor(t,e,i){this.minPoint=i,this.active=[],this.activeTo=[],this.activeRank=[],this.minActive=-1,this.point=null,this.pointFrom=0,this.pointRank=0,this.to=-1e9,this.endSide=0,this.openStart=-1,this.cursor=Ms.from(t,e,i)}goto(t,e=-1e9){return this.cursor.goto(t,e),this.active.length=this.activeTo.length=this.activeRank.length=0,this.minActive=-1,this.to=t,this.endSide=e,this.openStart=-1,this.next(),this}forward(t,e){for(;this.minActive>-1&&(this.activeTo[this.minActive]-t||this.active[this.minActive].endSide-e)<0;)this.removeActive(this.minActive);this.cursor.forward(t,e)}removeActive(t){Es(this.active,t),Es(this.activeTo,t),Es(this.activeRank,t),this.minActive=Ls(this.active,this.activeTo)}addActive(t){let e=0,{value:i,to:s,rank:n}=this.cursor;for(;e<this.activeRank.length&&this.activeRank[e]<=n;)e++;Rs(this.active,e,i),Rs(this.activeTo,e,s),Rs(this.activeRank,e,n),t&&Rs(t,e,this.cursor.from),this.minActive=Ls(this.active,this.activeTo)}next(){let t=this.to,e=this.point;this.point=null;let i=this.openStart<0?[]:null,s=0;for(;;){let n=this.minActive;if(n>-1&&(this.activeTo[n]-this.cursor.from||this.active[n].endSide-this.cursor.startSide)<0){if(this.activeTo[n]>t){this.to=this.activeTo[n],this.endSide=this.active[n].endSide;break}this.removeActive(n),i&&Es(i,n)}else{if(!this.cursor.value){this.to=this.endSide=1e9;break}if(this.cursor.from>t){this.to=this.cursor.from,this.endSide=this.cursor.startSide;break}{let n=this.cursor.value;if(n.point){if(!(e&&this.cursor.to==this.to&&this.cursor.from<this.cursor.to&&n.endSide==this.endSide)){this.point=n,this.pointFrom=this.cursor.from,this.pointRank=this.cursor.rank,this.to=this.cursor.to,this.endSide=n.endSide,this.cursor.from<t&&(s=1),this.cursor.next(),this.to>t&&this.forward(this.to,this.endSide);break}this.cursor.next()}else this.addActive(i),this.cursor.next()}}}if(i){let e=0;for(;e<i.length&&i[e]<t;)e++;this.openStart=e+s}}activeForPoint(t){if(!this.active.length)return this.active;let e=[];for(let i=this.active.length-1;i>=0&&!(this.activeRank[i]<this.pointRank);i--)(this.activeTo[i]>t||this.activeTo[i]==t&&this.active[i].endSide>=this.point.endSide)&&e.push(this.active[i]);return e.reverse()}openEnd(t){let e=0;for(let i=this.activeTo.length-1;i>=0&&this.activeTo[i]>t;i--)e++;return e}}function Ps(t,e,i,s,n,o){t.goto(e),i.goto(s);let r=s+n,a=s,l=s-e;for(;;){let e=t.to+l-i.to||t.endSide-i.endSide,s=e<0?t.to+l:i.to,n=Math.min(s,r);if(t.point||i.point?t.point&&i.point&&(t.point==i.point||t.point.eq(i.point))&&Ds(t.activeForPoint(t.to+l),i.activeForPoint(i.to))||o.comparePoint(a,n,t.point,i.point):n>a&&!Ds(t.active,i.active)&&o.compareRange(a,n,t.active,i.active),s>r)break;a=s,e<=0&&t.next(),e>=0&&i.next()}}function Ds(t,e){if(t.length!=e.length)return!1;for(let i=0;i<t.length;i++)if(t[i]!=e[i]&&!t[i].eq(e[i]))return!1;return!0}function Es(t,e){for(let i=e,s=t.length-1;i<s;i++)t[i]=t[i+1];t.pop()}function Rs(t,e,i){for(let i=t.length-1;i>=e;i--)t[i+1]=t[i];t[e]=i}function Ls(t,e){let i=-1,s=1e9;for(let n=0;n<e.length;n++)(e[n]-s||t[n].endSide-t[i].endSide)<0&&(i=n,s=e[n]);return i}for(var Is={8:"Backspace",9:"Tab",10:"Enter",12:"NumLock",13:"Enter",16:"Shift",17:"Control",18:"Alt",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",44:"PrintScreen",45:"Insert",46:"Delete",59:";",61:"=",91:"Meta",92:"Meta",106:"*",107:"+",108:",",109:"-",110:".",111:"/",144:"NumLock",145:"ScrollLock",160:"Shift",161:"Shift",162:"Control",163:"Control",164:"Alt",165:"Alt",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",229:"q"},Ns={48:")",49:"!",50:"@",51:"#",52:"$",53:"%",54:"^",55:"&",56:"*",57:"(",59:":",61:"+",173:"_",186:":",187:"+",188:"<",189:"_",190:">",191:"?",192:"~",219:"{",220:"|",221:"}",222:'"',229:"Q"},Bs="undefined"!=typeof navigator&&/Chrome\/(\d+)/.exec(navigator.userAgent),_s="undefined"!=typeof navigator&&/Apple Computer/.test(navigator.vendor),Fs="undefined"!=typeof navigator&&/Gecko\/\d+/.test(navigator.userAgent),Us="undefined"!=typeof navigator&&/Mac/.test(navigator.platform),zs="undefined"!=typeof navigator&&/MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent),Ws=Bs&&(Us||+Bs[1]<57)||Fs&&Us,js=0;js<10;js++)Is[48+js]=Is[96+js]=String(js);for(js=1;js<=24;js++)Is[js+111]="F"+js;for(js=65;js<=90;js++)Is[js]=String.fromCharCode(js+32),Ns[js]=String.fromCharCode(js);for(var Vs in Is)Ns.hasOwnProperty(Vs)||(Ns[Vs]=Is[Vs]);function Hs(t){return t.getSelection?t.getSelection():document.getSelection()}function qs(t,e){return!!e&&t.contains(1!=e.nodeType?e.parentNode:e)}function Gs(t,e){if(!e.anchorNode)return!1;try{return qs(t,e.anchorNode)}catch(t){return!1}}function Qs(t){return 3==t.nodeType?an(t,0,t.nodeValue.length).getClientRects():1==t.nodeType?t.getClientRects():[]}function Js(t,e,i,s){return!!i&&(Ys(t,e,i,s,-1)||Ys(t,e,i,s,1))}function Ks(t){for(var e=0;;e++)if(!(t=t.previousSibling))return e}function Ys(t,e,i,s,n){for(;;){if(t==i&&e==s)return!0;if(e==(n<0?0:Xs(t))){if("DIV"==t.nodeName)return!1;let i=t.parentNode;if(!i||1!=i.nodeType)return!1;e=Ks(t)+(n<0?0:1),t=i}else{if(1!=t.nodeType)return!1;if(1==(t=t.childNodes[e+(n<0?-1:0)]).nodeType&&"false"==t.contentEditable)return!1;e=n<0?Xs(t):0}}}function Xs(t){return 3==t.nodeType?t.nodeValue.length:t.childNodes.length}const Zs={left:0,right:0,top:0,bottom:0};function tn(t,e){let i=e?t.left:t.right;return{left:i,right:i,top:t.top,bottom:t.bottom}}function en(t){return{left:0,right:t.innerWidth,top:0,bottom:t.innerHeight}}class sn{constructor(){this.anchorNode=null,this.anchorOffset=0,this.focusNode=null,this.focusOffset=0}eq(t){return this.anchorNode==t.anchorNode&&this.anchorOffset==t.anchorOffset&&this.focusNode==t.focusNode&&this.focusOffset==t.focusOffset}set(t){this.anchorNode=t.anchorNode,this.anchorOffset=t.anchorOffset,this.focusNode=t.focusNode,this.focusOffset=t.focusOffset}}let nn,on=null;function rn(t){if(t.setActive)return t.setActive();if(on)return t.focus(on);let e=[];for(let i=t;i&&(e.push(i,i.scrollTop,i.scrollLeft),i!=i.ownerDocument);i=i.parentNode);if(t.focus(null==on?{get preventScroll(){return on={preventScroll:!0},!0}}:void 0),!on){on=!1;for(let t=0;t<e.length;){let i=e[t++],s=e[t++],n=e[t++];i.scrollTop!=s&&(i.scrollTop=s),i.scrollLeft!=n&&(i.scrollLeft=n)}}}function an(t,e,i=e){let s=nn||(nn=document.createRange());return s.setEnd(t,i),s.setStart(t,e),s}function ln(t,e,i){let s={key:e,code:e,keyCode:i,which:i,cancelable:!0},n=new KeyboardEvent("keydown",s);n.synthetic=!0,t.dispatchEvent(n);let o=new KeyboardEvent("keyup",s);return o.synthetic=!0,t.dispatchEvent(o),n.defaultPrevented||o.defaultPrevented}let hn=null;function cn(){if(null==hn){hn=!1;let t=document.createElement("div");try{t.contentEditable="plaintext-only",hn="plaintext-only"==t.contentEditable}catch(t){}}return hn}class dn{constructor(t,e,i=!0){this.node=t,this.offset=e,this.precise=i}static before(t,e){return new dn(t.parentNode,Ks(t),e)}static after(t,e){return new dn(t.parentNode,Ks(t)+1,e)}}const un=[];class pn{constructor(){this.parent=null,this.dom=null,this.dirty=2}get editorView(){if(!this.parent)throw new Error("Accessing view in orphan content view");return this.parent.editorView}get overrideDOMText(){return null}get posAtStart(){return this.parent?this.parent.posBefore(this):0}get posAtEnd(){return this.posAtStart+this.length}posBefore(t){let e=this.posAtStart;for(let i of this.children){if(i==t)return e;e+=i.length+i.breakAfter}throw new RangeError("Invalid child in posBefore")}posAfter(t){return this.posBefore(t)+t.length}coordsAt(t,e){return null}sync(t){var e;if(2&this.dirty){let i=this.dom,s=null;for(let n of this.children){if(n.dirty){let o=s?s.nextSibling:i.firstChild;n.dom||!o||(null===(e=pn.get(o))||void 0===e?void 0:e.parent)||n.reuseDOM(o),n.sync(t),n.dirty=0}t&&t.node==i&&s!=n.dom&&(t.written=!0),mn(i,s,n.dom),s=n.dom}let n=s?s.nextSibling:i.firstChild;for(n&&t&&t.node==i&&(t.written=!0);n;)n=fn(n)}else if(1&this.dirty)for(let e of this.children)e.dirty&&(e.sync(t),e.dirty=0)}reuseDOM(t){return!1}localPosFromDOM(t,e){let i;if(t==this.dom)i=this.dom.childNodes[e];else{let s=0==Xs(t)?0:0==e?-1:1;for(;;){let e=t.parentNode;if(e==this.dom)break;0==s&&e.firstChild!=e.lastChild&&(s=t==e.firstChild?-1:1),t=e}i=s<0?t:t.nextSibling}if(i==this.dom.firstChild)return 0;for(;i&&!pn.get(i);)i=i.nextSibling;if(!i)return this.length;for(let t=0,e=0;;t++){let s=this.children[t];if(s.dom==i)return e;e+=s.length+s.breakAfter}}domBoundsAround(t,e,i=0){let s=-1,n=-1,o=-1,r=-1;for(let a=0,l=i,h=i;a<this.children.length;a++){let i=this.children[a],c=l+i.length;if(l<t&&c>e)return i.domBoundsAround(t,e,l);if(c>=t&&-1==s&&(s=a,n=l),l>e&&i.dom.parentNode==this.dom){o=a,r=h;break}h=c,l=c+i.breakAfter}return{from:n,to:r<0?i+this.length:r,startDOM:(s?this.children[s-1].dom.nextSibling:null)||this.dom.firstChild,endDOM:o<this.children.length&&o>=0?this.children[o].dom:null}}markDirty(t=!1){2&this.dirty||(this.dirty|=2,this.markParentsDirty(t))}markParentsDirty(t){for(let e=this.parent;e;e=e.parent){if(t&&(e.dirty|=2),1&e.dirty)return;e.dirty|=1,t=!1}}setParent(t){this.parent!=t&&(this.parent=t,this.dirty&&this.markParentsDirty(!0))}setDOM(t){this.dom=t,t.cmView=this}get rootView(){for(let t=this;;){let e=t.parent;if(!e)return t;t=e}}replaceChildren(t,e,i=un){this.markDirty();for(let i=t;i<e;i++){let t=this.children[i];t.parent==this&&(t.parent=null)}this.children.splice(t,e-t,...i);for(let t=0;t<i.length;t++)i[t].setParent(this)}ignoreMutation(t){return!1}ignoreEvent(t){return!1}childCursor(t=this.length){return new gn(this.children,t,this.children.length)}childPos(t,e=1){return this.childCursor().findPos(t,e)}toString(){let t=this.constructor.name.replace("View","");return t+(this.children.length?"("+this.children.join()+")":this.length?"["+("Text"==t?this.text:this.length)+"]":"")+(this.breakAfter?"#":"")}static get(t){return t.cmView}}function fn(t){let e=t.nextSibling;return t.parentNode.removeChild(t),e}function mn(t,e,i){let s=e?e.nextSibling:t.firstChild;if(i.parentNode==t)for(;s!=i;)s=fn(s);else t.insertBefore(i,s)}pn.prototype.breakAfter=0;class gn{constructor(t,e,i){this.children=t,this.pos=e,this.i=i,this.off=0}findPos(t,e=1){for(;;){if(t>this.pos||t==this.pos&&(e>0||0==this.i||this.children[this.i-1].breakAfter))return this.off=t-this.pos,this;let i=this.children[--this.i];this.pos-=i.length+i.breakAfter}}}let[vn,wn]="undefined"!=typeof navigator?[navigator,document]:[{userAgent:"",vendor:"",platform:""},{documentElement:{style:{}}}];const bn=/Edge\/(\d+)/.exec(vn.userAgent),xn=/MSIE \d/.test(vn.userAgent),yn=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(vn.userAgent),kn=!!(xn||yn||bn),Sn=!kn&&/gecko\/(\d+)/i.test(vn.userAgent),An=!kn&&/Chrome\/(\d+)/.exec(vn.userAgent),Cn="webkitFontSmoothing"in wn.documentElement.style,On=!kn&&/Apple Computer/.test(vn.vendor);var Mn={mac:/Mac/.test(vn.platform),ie:kn,ie_version:xn?wn.documentMode||6:yn?+yn[1]:bn?+bn[1]:0,gecko:Sn,gecko_version:Sn?+(/Firefox\/(\d+)/.exec(vn.userAgent)||[0,0])[1]:0,chrome:!!An,chrome_version:An?+An[1]:0,ios:On&&(/Mobile\/\w+/.test(vn.userAgent)||vn.maxTouchPoints>2),android:/Android\b/.test(vn.userAgent),webkit:Cn,safari:On,webkit_version:Cn?+(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent)||[0,0])[1]:0,tabSize:null!=wn.documentElement.style.tabSize?"tab-size":"-moz-tab-size"};const $n=[];class Tn extends pn{become(t){return!1}getSide(){return 0}}Tn.prototype.children=$n;class Pn extends Tn{constructor(t){super(),this.text=t}get length(){return this.text.length}createDOM(t){this.setDOM(t||document.createTextNode(this.text))}sync(t){this.dom||this.createDOM(),this.dom.nodeValue!=this.text&&(t&&t.node==this.dom&&(t.written=!0),this.dom.nodeValue=this.text)}reuseDOM(t){return 3==t.nodeType&&(this.createDOM(t),!0)}merge(t,e,i){return(!i||i instanceof Pn&&!(this.length-(e-t)+i.length>256))&&(this.text=this.text.slice(0,t)+(i?i.text:"")+this.text.slice(e),this.markDirty(),!0)}slice(t){return new Pn(this.text.slice(t))}localPosFromDOM(t,e){return t==this.dom?e:e?this.text.length:0}domAtPos(t){return new dn(this.dom,t)}domBoundsAround(t,e,i){return{from:i,to:i+this.length,startDOM:this.dom,endDOM:this.dom.nextSibling}}coordsAt(t,e){return En(this.dom,t,e)}}class Dn extends Tn{constructor(t,e=[],i=0){super(),this.mark=t,this.children=e,this.length=i;for(let t of e)t.setParent(this)}createDOM(){let t=document.createElement(this.mark.tagName);if(this.mark.class&&(t.className=this.mark.class),this.mark.attrs)for(let e in this.mark.attrs)t.setAttribute(e,this.mark.attrs[e]);this.setDOM(t)}sync(t){this.dom||this.createDOM(),super.sync(t)}merge(t,e,i,s,n){return(!i||!(!(i instanceof Dn&&i.mark.eq(this.mark))||t&&s<=0||e<this.length&&n<=0))&&(In(this,t,e,i?i.children:$n,s-1,n-1),this.markDirty(),!0)}slice(t){return new Dn(this.mark,function(t,e){let i=[],s=0;for(let n of t){let t=s+n.length;t>e&&i.push(s<e?n.slice(e-s):n),s=t}return i}(this.children,t),this.length-t)}domAtPos(t){return Nn(this.dom,this.children,t)}coordsAt(t,e){return _n(this,t,e)}}function En(t,e,i){let s=t.nodeValue.length;e>s&&(e=s);let n=e,o=e,r=0;0==e&&i<0||e==s&&i>=0?Mn.chrome||Mn.gecko||(e?(n--,r=1):(o++,r=-1)):i<0?n--:o++;let a=an(t,n,o).getClientRects();if(!a.length)return Zs;let l=a[(r?r<0:i>=0)?0:a.length-1];return Mn.safari&&!r&&0==l.width&&(l=Array.prototype.find.call(a,(t=>t.width))||l),r?tn(l,r<0):l}class Rn extends Tn{constructor(t,e,i){super(),this.widget=t,this.length=e,this.side=i}static create(t,e,i){return new(t.customView||Rn)(t,e,i)}slice(t){return Rn.create(this.widget,this.length-t,this.side)}sync(){this.dom&&this.widget.updateDOM(this.dom)||(this.setDOM(this.widget.toDOM(this.editorView)),this.dom.contentEditable="false")}getSide(){return this.side}merge(t,e,i,s,n){return!(i&&(!(i instanceof Rn&&this.widget.compare(i.widget))||t>0&&s<=0||e<this.length&&n<=0))&&(this.length=t+(i?i.length:0)+(this.length-e),!0)}become(t){return t.length==this.length&&t instanceof Rn&&t.side==this.side&&this.widget.constructor==t.widget.constructor&&(this.widget.eq(t.widget)||this.markDirty(!0),this.widget=t.widget,!0)}ignoreMutation(){return!0}ignoreEvent(t){return this.widget.ignoreEvent(t)}get overrideDOMText(){if(0==this.length)return si.empty;let t=this;for(;t.parent;)t=t.parent;let e=t.editorView,i=e&&e.state.doc,s=this.posAtStart;return i?i.slice(s,s+this.length):si.empty}domAtPos(t){return 0==t?dn.before(this.dom):dn.after(this.dom,t==this.length)}domBoundsAround(){return null}coordsAt(t,e){let i=this.dom.getClientRects(),s=null;if(!i.length)return Zs;for(let e=t>0?i.length-1:0;s=i[e],!(t>0?0==e:e==i.length-1||s.top<s.bottom);e+=t>0?-1:1);return 0==t&&e>0||t==this.length&&e<=0?s:tn(s,0==t)}}class Ln extends Rn{domAtPos(t){return new dn(this.widget.text,t)}sync(){this.dom||this.setDOM(this.widget.toDOM())}localPosFromDOM(t,e){return e?3==t.nodeType?Math.min(e,this.length):this.length:0}ignoreMutation(){return!1}get overrideDOMText(){return null}coordsAt(t,e){return En(this.widget.text,t,e)}}function In(t,e,i,s,n,o){let r=t.childCursor(),{i:a,off:l}=r.findPos(i,1),{i:h,off:c}=r.findPos(e,-1),d=e-i;for(let t of s)d+=t.length;t.length+=d;let{children:u}=t;if(h==a&&c){let t=u[h];if(1==s.length&&t.merge(c,l,s[0],n,o))return;if(0==s.length)return void t.merge(c,l,null,n,o);let e=t.slice(l);e.merge(0,0,s[s.length-1],0,o)?s[s.length-1]=e:s.push(e),a++,o=l=0}if(l){let t=u[a];s.length&&t.merge(0,l,s[s.length-1],0,o)?(s.pop(),o=s.length?0:n):t.merge(0,l,null,0,0)}else a<u.length&&s.length&&u[a].merge(0,0,s[s.length-1],0,o)&&(s.pop(),o=s.length?0:n);if(c){let t=u[h];s.length&&t.merge(c,t.length,s[0],n,0)?(s.shift(),n=s.length?0:o):t.merge(c,t.length,null,0,0),h++}else if(h&&s.length){let t=u[h-1];t.merge(t.length,t.length,s[0],n,0)&&(s.shift(),n=s.length?0:o)}for(;h<a&&s.length&&u[a-1].become(s[s.length-1]);)s.pop(),a--,o=s.length?0:n;for(;h<a&&s.length&&u[h].become(s[0]);)s.shift(),h++,n=s.length?0:o;!s.length&&h&&a<u.length&&n&&o&&u[a].merge(0,0,u[h-1],n,o)&&h--,(s.length||h!=a)&&t.replaceChildren(h,a,s)}function Nn(t,e,i){let s=0;for(let n=0;s<e.length;s++){let o=e[s],r=n+o.length;if(!(r==n&&o.getSide()<=0)){if(i>n&&i<r&&o.dom.parentNode==t)return o.domAtPos(i-n);if(i<=n)break;n=r}}for(;s>0;s--){let i=e[s-1].dom;if(i.parentNode==t)return dn.after(i)}return new dn(t,0)}function Bn(t,e,i){let s,{children:n}=t;i>0&&e instanceof Dn&&n.length&&(s=n[n.length-1])instanceof Dn&&s.mark.eq(e.mark)?Bn(s,e.children[0],i-1):(n.push(e),e.setParent(t)),t.length+=e.length}function _n(t,e,i){for(let s=0,n=0;n<t.children.length;n++){let o=t.children[n],r=s+o.length;if(!(r==s&&o.getSide()<=0)){if(i<=0||r==t.length?r>=e:r>e)return o.coordsAt(e-s,i);s=r}}let s=t.dom.lastChild;if(!s)return t.dom.getBoundingClientRect();let n=Qs(s);return n[n.length-1]}function Fn(t,e){for(let i in t)"class"==i&&e.class?e.class+=" "+t.class:"style"==i&&e.style?e.style+=";"+t.style:e[i]=t[i];return e}function Un(t,e){if(t==e)return!0;if(!t||!e)return!1;let i=Object.keys(t),s=Object.keys(e);if(i.length!=s.length)return!1;for(let n of i)if(-1==s.indexOf(n)||t[n]!==e[n])return!1;return!0}function zn(t,e,i){if(e)for(let s in e)i&&s in i||t.removeAttribute(s);if(i)for(let s in i)e&&e[s]==i[s]||t.setAttribute(s,i[s])}class Wn{eq(t){return!1}updateDOM(t){return!1}compare(t){return this==t||this.constructor==t.constructor&&this.eq(t)}get estimatedHeight(){return-1}ignoreEvent(t){return!0}get customView(){return null}}var jn=function(t){return t[t.Text=0]="Text",t[t.WidgetBefore=1]="WidgetBefore",t[t.WidgetAfter=2]="WidgetAfter",t[t.WidgetRange=3]="WidgetRange",t}(jn||(jn={}));class Vn extends bs{constructor(t,e,i,s){super(),this.startSide=t,this.endSide=e,this.widget=i,this.spec=s}get heightRelevant(){return!1}static mark(t){return new Hn(t)}static widget(t){let e=t.side||0;return t.block&&(e+=200000001*(e>0?1:-1)),new Gn(t,e,e,!!t.block,t.widget||null,!1)}static replace(t){let e=!!t.block,{start:i,end:s}=Qn(t);return new Gn(t,e?-2e8*(i?2:1):1e8*(i?-1:1),e?2e8*(s?2:1):1e8*(s?1:-1),e,t.widget||null,!0)}static line(t){return new qn(t)}static set(t,e=!1){return Ss.of(t,e)}hasHeight(){return!!this.widget&&this.widget.estimatedHeight>-1}}Vn.none=Ss.empty;class Hn extends Vn{constructor(t){let{start:e,end:i}=Qn(t);super(1e8*(e?-1:1),1e8*(i?1:-1),null,t),this.tagName=t.tagName||"span",this.class=t.class||"",this.attrs=t.attributes||null}eq(t){return this==t||t instanceof Hn&&this.tagName==t.tagName&&this.class==t.class&&Un(this.attrs,t.attrs)}range(t,e=t){if(t>=e)throw new RangeError("Mark decorations may not be empty");return super.range(t,e)}}Hn.prototype.point=!1;class qn extends Vn{constructor(t){super(-1e8,-1e8,null,t)}eq(t){return t instanceof qn&&Un(this.spec.attributes,t.spec.attributes)}range(t,e=t){if(e!=t)throw new RangeError("Line decoration ranges must be zero-length");return super.range(t,e)}}qn.prototype.mapMode=ui.TrackBefore,qn.prototype.point=!0;class Gn extends Vn{constructor(t,e,i,s,n,o){super(e,i,n,t),this.block=s,this.isReplace=o,this.mapMode=s?e<0?ui.TrackBefore:ui.TrackAfter:ui.TrackDel}get type(){return this.startSide<this.endSide?jn.WidgetRange:this.startSide<0?jn.WidgetBefore:jn.WidgetAfter}get heightRelevant(){return this.block||!!this.widget&&this.widget.estimatedHeight>=5}eq(t){return t instanceof Gn&&function(t,e){return t==e||!!(t&&e&&t.compare(e))}(this.widget,t.widget)&&this.block==t.block&&this.startSide==t.startSide&&this.endSide==t.endSide}range(t,e=t){if(this.isReplace&&(t>e||t==e&&this.startSide>0&&this.endSide<0))throw new RangeError("Invalid range for replacement decoration");if(!this.isReplace&&e!=t)throw new RangeError("Widget decorations can only have zero-length ranges");return super.range(t,e)}}function Qn(t){let{inclusiveStart:e,inclusiveEnd:i}=t;return null==e&&(e=t.inclusive),null==i&&(i=t.inclusive),{start:e||!1,end:i||!1}}function Jn(t,e,i,s=0){let n=i.length-1;n>=0&&i[n]+s>t?i[n]=Math.max(i[n],e):i.push(t,e)}Gn.prototype.point=!0;class Kn extends pn{constructor(){super(...arguments),this.children=[],this.length=0,this.prevAttrs=void 0,this.attrs=null,this.breakAfter=0}merge(t,e,i,s,n,o){if(i){if(!(i instanceof Kn))return!1;this.dom||i.transferDOM(this)}return s&&this.setDeco(i?i.attrs:null),In(this,t,e,i?i.children:Yn,n,o),!0}split(t){let e=new Kn;if(e.breakAfter=this.breakAfter,0==this.length)return e;let{i:i,off:s}=this.childPos(t);s&&(e.append(this.children[i].slice(s),0),this.children[i].merge(s,this.children[i].length,null,0,0),i++);for(let t=i;t<this.children.length;t++)e.append(this.children[t],0);for(;i>0&&0==this.children[i-1].length;)this.children[i-1].parent=null,i--;return this.children.length=i,this.markDirty(),this.length=t,e}transferDOM(t){this.dom&&(t.setDOM(this.dom),t.prevAttrs=void 0===this.prevAttrs?this.attrs:this.prevAttrs,this.prevAttrs=void 0,this.dom=null)}setDeco(t){Un(this.attrs,t)||(this.dom&&(this.prevAttrs=this.attrs,this.markDirty()),this.attrs=t)}append(t,e){Bn(this,t,e)}addLineDeco(t){let e=t.spec.attributes;e&&(this.attrs=Fn(e,this.attrs||{}))}domAtPos(t){return Nn(this.dom,this.children,t)}sync(t){this.dom||(this.setDOM(document.createElement("div")),this.dom.className="cm-line",this.prevAttrs=this.attrs?null:void 0),void 0!==this.prevAttrs&&(zn(this.dom,this.prevAttrs,this.attrs),this.dom.classList.add("cm-line"),this.prevAttrs=void 0),super.sync(t);let e=this.dom.lastChild;if(!e||"BR"!=e.nodeName&&pn.get(e)instanceof Rn&&(!Mn.ios||!this.children.some((t=>t instanceof Pn)))){let t=document.createElement("BR");t.cmIgnore=!0,this.dom.appendChild(t)}}measureTextSize(){if(0==this.children.length||this.length>20)return null;let t=0;for(let e of this.children){if(!(e instanceof Pn))return null;let i=Qs(e.dom);if(1!=i.length)return null;t+=i[0].width}return{lineHeight:this.dom.getBoundingClientRect().height,charWidth:t/this.length}}coordsAt(t,e){return _n(this,t,e)}match(t){return!1}get type(){return jn.Text}static find(t,e){for(let i=0,s=0;;i++){let n=t.children[i],o=s+n.length;if(o>=e){if(n instanceof Kn)return n;if(n.length)return null}s=o+n.breakAfter}}}const Yn=[];class Xn extends pn{constructor(t,e,i){super(),this.widget=t,this.length=e,this.type=i,this.breakAfter=0}merge(t,e,i,s,n,o){return!(i&&(!(i instanceof Xn&&this.widget.compare(i.widget))||t>0&&n<=0||e<this.length&&o<=0))&&(this.length=t+(i?i.length:0)+(this.length-e),!0)}domAtPos(t){return 0==t?dn.before(this.dom):dn.after(this.dom,t==this.length)}split(t){let e=this.length-t;return this.length=t,new Xn(this.widget,e,this.type)}get children(){return Yn}sync(){this.dom&&this.widget.updateDOM(this.dom)||(this.setDOM(this.widget.toDOM(this.editorView)),this.dom.contentEditable="false")}get overrideDOMText(){return this.parent?this.parent.view.state.doc.slice(this.posAtStart,this.posAtEnd):si.empty}domBoundsAround(){return null}match(t){return t instanceof Xn&&t.type==this.type&&t.widget.constructor==this.widget.constructor&&(t.widget.eq(this.widget)||this.markDirty(!0),this.widget=t.widget,this.length=t.length,this.breakAfter=t.breakAfter,!0)}ignoreMutation(){return!0}ignoreEvent(t){return this.widget.ignoreEvent(t)}}class Zn{constructor(t,e,i){this.doc=t,this.pos=e,this.end=i,this.content=[],this.curLine=null,this.breakAtStart=0,this.openStart=-1,this.openEnd=-1,this.text="",this.textOff=0,this.cursor=t.iter(),this.skip=e}posCovered(){if(0==this.content.length)return!this.breakAtStart&&this.doc.lineAt(this.pos).from!=this.pos;let t=this.content[this.content.length-1];return!(t.breakAfter||t instanceof Xn&&t.type==jn.WidgetBefore)}getLine(){return this.curLine||this.content.push(this.curLine=new Kn),this.curLine}addWidget(t){this.curLine=null,this.content.push(t)}finish(){this.posCovered()||this.getLine()}wrapMarks(t,e){for(let i of e)t=new Dn(i,[t],t.length);return t}buildText(t,e,i){for(;t>0;){if(this.textOff==this.text.length){let{value:e,lineBreak:i,done:s}=this.cursor.next(this.skip);if(this.skip=0,s)throw new Error("Ran out of text content when drawing inline views");if(i){this.posCovered()||this.getLine(),this.content.length?this.content[this.content.length-1].breakAfter=1:this.breakAtStart=1,this.curLine=null,t--;continue}this.text=e,this.textOff=0}let s=Math.min(this.text.length-this.textOff,t,512);this.getLine().append(this.wrapMarks(new Pn(this.text.slice(this.textOff,this.textOff+s)),e),i),this.textOff+=s,t-=s,i=0}}span(t,e,i,s){this.buildText(e-t,i,s),this.pos=e,this.openStart<0&&(this.openStart=s)}point(t,e,i,s,n){let o=e-t;if(i instanceof Gn)if(i.block){let{type:t}=i;t!=jn.WidgetAfter||this.posCovered()||this.getLine(),this.addWidget(new Xn(i.widget||new to("div"),o,t))}else{let t=this.wrapMarks(Rn.create(i.widget||new to("span"),o,i.startSide),s);this.getLine().append(t,n)}else this.doc.lineAt(this.pos).from==this.pos&&this.getLine().addLineDeco(i);o&&(this.textOff+o<=this.text.length?this.textOff+=o:(this.skip+=o-(this.text.length-this.textOff),this.text="",this.textOff=0),this.pos=e),this.openStart<0&&(this.openStart=n)}static build(t,e,i,s){let n=new Zn(t,e,i);return n.openEnd=Ss.spans(s,e,i,n),n.openStart<0&&(n.openStart=n.openEnd),n.finish(),n}}class to extends Wn{constructor(t){super(),this.tag=t}eq(t){return t.tag==this.tag}toDOM(){return document.createElement(this.tag)}updateDOM(t){return t.nodeName.toLowerCase()==this.tag}}const eo=[],io=Oi.define(),so=Oi.define(),no=Oi.define(),oo=Oi.define(),ro=Oi.define(),ao=Oi.define();function lo(t,e,i){let s=t.facet(oo);s.length?s[0](e):window.onerror?window.onerror(String(e),i,void 0,void 0,e):i?console.error(i+":",e):console.error(e)}const ho=Oi.define({combine:t=>!t.length||t[0]});class co{constructor(t,e){this.field=t,this.get=e}}class uo{from(t){return new co(this,t)}static define(){return new uo}}uo.decorations=uo.define(),uo.atomicRanges=uo.define(),uo.scrollMargins=uo.define();let po=0;const fo=Oi.define();class mo{constructor(t,e,i){this.id=t,this.create=e,this.fields=i,this.extension=fo.of(this)}static define(t,e){let{eventHandlers:i,provide:s,decorations:n}=e||{},o=[];if(s)for(let t of Array.isArray(s)?s:[s])o.push(t);return i&&o.push(go.from((t=>({plugin:t,handlers:i})))),n&&o.push(uo.decorations.from(n)),new mo(po++,t,o)}static fromClass(t,e){return mo.define((e=>new t(e)),e)}}const go=uo.define();class vo{constructor(t){this.spec=t,this.mustUpdate=null,this.value=null}takeField(t,e){for(let{field:i,get:s}of this.spec.fields)i==t&&e.push(s(this.value))}update(t){if(this.value){if(this.mustUpdate){let t=this.mustUpdate;if(this.mustUpdate=null,!this.value.update)return this;try{this.value.update(t)}catch(e){if(lo(t.state,e,"CodeMirror plugin crashed"),this.value.destroy)try{this.value.destroy()}catch(t){}return vo.dummy}}}else try{this.value=this.spec.create(t)}catch(e){return lo(t.state,e,"CodeMirror plugin crashed"),vo.dummy}return this}destroy(t){var e;if(null===(e=this.value)||void 0===e?void 0:e.destroy)try{this.value.destroy()}catch(e){lo(t.state,e,"CodeMirror plugin crashed")}}}vo.dummy=new vo(mo.define((()=>({}))));const wo=Oi.define({combine:t=>t.reduce(((t,e)=>Fn(e,t)),{})}),bo=Oi.define({combine:t=>t.reduce(((t,e)=>Fn(e,t)),{})}),xo=Oi.define(),yo=Oi.define();class ko{constructor(t,e,i,s){this.fromA=t,this.toA=e,this.fromB=i,this.toB=s}join(t){return new ko(Math.min(this.fromA,t.fromA),Math.max(this.toA,t.toA),Math.min(this.fromB,t.fromB),Math.max(this.toB,t.toB))}addToSet(t){let e=t.length,i=this;for(;e>0;e--){let s=t[e-1];if(!(s.fromA>i.toA)){if(s.toA<i.fromA)break;i=i.join(s),t.splice(e-1,1)}}return t.splice(e,0,i),t}static extendWithRanges(t,e){if(0==e.length)return t;let i=[];for(let s=0,n=0,o=0,r=0;;s++){let a=s==t.length?null:t[s],l=o-r,h=a?a.fromB:1e9;for(;n<e.length&&e[n]<h;){let t=e[n],s=e[n+1],o=Math.max(r,t),a=Math.min(h,s);if(o<=a&&new ko(o+l,a+l,o,a).addToSet(i),s>h)break;n+=2}if(!a)return i;new ko(a.fromA,a.toA,a.fromB,a.toB).addToSet(i),o=a.toA,r=a.toB}}}class So{constructor(t,e,i=eo){this.view=t,this.state=e,this.transactions=i,this.flags=0,this.startState=t.state,this.changes=fi.empty(this.startState.doc.length);for(let t of i)this.changes=this.changes.compose(t.changes);let s=[];this.changes.iterChangedRanges(((t,e,i,n)=>s.push(new ko(t,e,i,n)))),this.changedRanges=s;let n=t.hasFocus;n!=t.inputState.notifiedFocused&&(t.inputState.notifiedFocused=n,this.flags|=1),this.docChanged&&(this.flags|=2)}get viewportChanged(){return(4&this.flags)>0}get heightChanged(){return(2&this.flags)>0}get geometryChanged(){return this.docChanged||(18&this.flags)>0}get focusChanged(){return(1&this.flags)>0}get docChanged(){return this.transactions.some((t=>t.docChanged))}get selectionSet(){return this.transactions.some((t=>t.selection))}get empty(){return 0==this.flags&&0==this.transactions.length}}class Ao extends pn{constructor(t){super(),this.view=t,this.compositionDeco=Vn.none,this.decorations=[],this.minWidth=0,this.minWidthFrom=0,this.minWidthTo=0,this.impreciseAnchor=null,this.impreciseHead=null,this.setDOM(t.contentDOM),this.children=[new Kn],this.children[0].setParent(this),this.updateInner([new ko(0,0,0,t.state.doc.length)],this.updateDeco(),0)}get root(){return this.view.root}get editorView(){return this.view}get length(){return this.view.state.doc.length}update(t){let e=t.changedRanges;this.minWidth>0&&e.length&&(e.every((({fromA:t,toA:e})=>e<this.minWidthFrom||t>this.minWidthTo))?(this.minWidthFrom=t.changes.mapPos(this.minWidthFrom,1),this.minWidthTo=t.changes.mapPos(this.minWidthTo,1)):this.minWidth=0),this.view.inputState.composing<0?this.compositionDeco=Vn.none:t.transactions.length&&(this.compositionDeco=function(t,e){let i=t.observer.selectionRange,s=i.focusNode&&Mo(i.focusNode,i.focusOffset,0);if(!s)return Vn.none;let n,o,r=t.docView.nearest(s),a=s;if(r instanceof Tn){for(;r.parent instanceof Tn;)r=r.parent;n=r.posAtStart,o=n+r.length,a=r.dom}else{if(!(r instanceof Kn))return Vn.none;{for(;a.parentNode!=r.dom;)a=a.parentNode;let t=a.previousSibling;for(;t&&!pn.get(t);)t=t.previousSibling;n=o=t?pn.get(t).posAtEnd:r.posAtStart}}let l=e.mapPos(n,1),h=Math.max(l,e.mapPos(o,-1)),c=s.nodeValue,{state:d}=t;if(h-l<c.length)if(d.sliceDoc(l,Math.min(d.doc.length,l+c.length))==c)h=l+c.length;else{if(d.sliceDoc(Math.max(0,h-c.length),h)!=c)return Vn.none;l=h-c.length}else if(d.sliceDoc(l,h)!=c)return Vn.none;return Vn.set(Vn.replace({widget:new Oo(a,s)}).range(l,h))}(this.view,t.changes));let i=(Mn.ie||Mn.chrome)&&!this.compositionDeco.size&&t&&t.state.doc.lines!=t.startState.doc.lines,s=this.decorations,n=this.updateDeco(),o=function(t,e,i){let s=new $o;return Ss.compare(t,e,i,s),s.changes}(s,n,t.changes);e=ko.extendWithRanges(e,o);let r=t.transactions.some((t=>"pointerselection"==t.annotation(ts.userEvent)));return 0==this.dirty&&0==e.length&&!(12&t.flags)&&t.state.selection.main.from>=this.view.viewport.from&&t.state.selection.main.to<=this.view.viewport.to?(this.updateSelection(i,r),!1):(this.updateInner(e,n,t.startState.doc.length,i,r),!0)}updateInner(t,e,i,s=!1,n=!1){this.updateChildren(t,e,i);let{observer:o}=this.view;o.ignore((()=>{this.dom.style.height=this.view.viewState.domHeight+"px",this.dom.style.minWidth=this.minWidth?this.minWidth+"px":"";let t=Mn.chrome||Mn.ios?{node:o.selectionRange.focusNode,written:!1}:void 0;this.sync(t),this.dirty=0,t&&(t.written||o.selectionRange.focusNode!=t.node)&&(s=!0),this.updateSelection(s,n),this.dom.style.height=""}))}updateChildren(t,e,i){let s=this.childCursor(i);for(let i=t.length-1;;i--){let n=i>=0?t[i]:null;if(!n)break;let{fromA:o,toA:r,fromB:a,toB:l}=n,{content:h,breakAtStart:c,openStart:d,openEnd:u}=Zn.build(this.view.state.doc,a,l,e),{i:p,off:f}=s.findPos(r,1),{i:m,off:g}=s.findPos(o,-1);this.replaceRange(m,g,p,f,h,c,d,u)}}replaceRange(t,e,i,s,n,o,r,a){let l=this.children[t],h=n.length?n[n.length-1]:null,c=h?h.breakAfter:o;if(t==i&&!o&&!c&&n.length<2&&l.merge(e,s,n.length?h:null,0==e,r,a))return;let d=this.children[i];for(s<d.length||d.children.length&&0==d.children[d.children.length-1].length?(t==i&&(d=d.split(s),s=0),!c&&h&&d.merge(0,s,h,!0,0,a)?n[n.length-1]=d:((s||d.children.length&&0==d.children[0].length)&&d.merge(0,s,null,!1,0,a),n.push(d))):d.breakAfter&&(h?h.breakAfter=1:o=1),i++,l.breakAfter=o,e>0&&(!o&&n.length&&l.merge(e,l.length,n[0],!1,r,0)?l.breakAfter=n.shift().breakAfter:(e<l.length||l.children.length&&0==l.children[l.children.length-1].length)&&l.merge(e,l.length,null,!1,r,0),t++);t<i&&n.length;)if(this.children[i-1].match(n[n.length-1]))i--,n.pop();else{if(!this.children[t].match(n[0]))break;t++,n.shift()}(t<i||n.length)&&this.replaceChildren(t,i,n)}updateSelection(t=!1,e=!1){if(!e&&!this.mayControlSelection()||Mn.ios&&this.view.inputState.rapidCompositionStart)return;let i=this.view.state.selection.main,s=this.domAtPos(i.anchor),n=i.empty?s:this.domAtPos(i.head);if(Mn.gecko&&i.empty&&(1==(o=s).node.nodeType&&o.node.firstChild&&(0==o.offset||"false"==o.node.childNodes[o.offset-1].contentEditable)&&(o.offset==o.node.childNodes.length||"false"==o.node.childNodes[o.offset].contentEditable))){let e=document.createTextNode("");this.view.observer.ignore((()=>s.node.insertBefore(e,s.node.childNodes[s.offset]||null))),s=n=new dn(e,0),t=!0}var o;let r=this.view.observer.selectionRange;!t&&r.focusNode&&Js(s.node,s.offset,r.anchorNode,r.anchorOffset)&&Js(n.node,n.offset,r.focusNode,r.focusOffset)||(this.view.observer.ignore((()=>{let t=Hs(this.root);if(i.empty){if(Mn.gecko){let t=(e=s.node,o=s.offset,1!=e.nodeType?0:(o&&"false"==e.childNodes[o-1].contentEditable?1:0)|(o<e.childNodes.length&&"false"==e.childNodes[o].contentEditable?2:0));if(t&&3!=t){let e=Mo(s.node,s.offset,1==t?1:-1);e&&(s=new dn(e,1==t?0:e.nodeValue.length))}}t.collapse(s.node,s.offset),null!=i.bidiLevel&&null!=r.cursorBidiLevel&&(r.cursorBidiLevel=i.bidiLevel)}else if(t.extend)t.collapse(s.node,s.offset),t.extend(n.node,n.offset);else{let e=document.createRange();i.anchor>i.head&&([s,n]=[n,s]),e.setEnd(n.node,n.offset),e.setStart(s.node,s.offset),t.removeAllRanges(),t.addRange(e)}var e,o})),this.view.observer.setSelectionRange(s,n)),this.impreciseAnchor=s.precise?null:new dn(r.anchorNode,r.anchorOffset),this.impreciseHead=n.precise?null:new dn(r.focusNode,r.focusOffset)}enforceCursorAssoc(){if(this.view.composing)return;let t=this.view.state.selection.main,e=Hs(this.root);if(!t.empty||!t.assoc||!e.modify)return;let i=Kn.find(this,t.head);if(!i)return;let s=i.posAtStart;if(t.head==s||t.head==s+i.length)return;let n=this.coordsAt(t.head,-1),o=this.coordsAt(t.head,1);if(!n||!o||n.bottom>o.top)return;let r=this.domAtPos(t.head+t.assoc);e.collapse(r.node,r.offset),e.modify("move",t.assoc<0?"forward":"backward","lineboundary")}mayControlSelection(){return this.view.state.facet(ho)?this.root.activeElement==this.dom:Gs(this.dom,this.view.observer.selectionRange)}nearest(t){for(let e=t;e;){let t=pn.get(e);if(t&&t.rootView==this)return t;e=e.parentNode}return null}posFromDOM(t,e){let i=this.nearest(t);if(!i)throw new RangeError("Trying to find position for a DOM position outside of the document");return i.localPosFromDOM(t,e)+i.posAtStart}domAtPos(t){let{i:e,off:i}=this.childCursor().findPos(t,-1);for(;e<this.children.length-1;){let t=this.children[e];if(i<t.length||t instanceof Kn)break;e++,i=0}return this.children[e].domAtPos(i)}coordsAt(t,e){for(let i=this.length,s=this.children.length-1;;s--){let n=this.children[s],o=i-n.breakAfter-n.length;if(t>o||t==o&&n.type!=jn.WidgetBefore&&n.type!=jn.WidgetAfter&&(!s||2==e||this.children[s-1].breakAfter||this.children[s-1].type==jn.WidgetBefore&&e>-2))return n.coordsAt(t-o,e);i=o}}measureVisibleLineHeights(){let t=[],{from:e,to:i}=this.view.viewState.viewport,s=Math.max(this.view.scrollDOM.clientWidth,this.minWidth)+1;for(let n=0,o=0;o<this.children.length;o++){let r=this.children[o],a=n+r.length;if(a>i)break;if(n>=e){t.push(r.dom.getBoundingClientRect().height);let e=r.dom.scrollWidth;e>s&&(this.minWidth=s=e,this.minWidthFrom=n,this.minWidthTo=a)}n=a+r.breakAfter}return t}measureTextSize(){for(let t of this.children)if(t instanceof Kn){let e=t.measureTextSize();if(e)return e}let t,e,i=document.createElement("div");return i.className="cm-line",i.textContent="abc def ghi jkl mno pqr stu",this.view.observer.ignore((()=>{this.dom.appendChild(i);let s=Qs(i.firstChild)[0];t=i.getBoundingClientRect().height,e=s?s.width/27:7,i.remove()})),{lineHeight:t,charWidth:e}}childCursor(t=this.length){let e=this.children.length;return e&&(t-=this.children[--e].length),new gn(this.children,t,e)}computeBlockGapDeco(){let t=[],e=this.view.viewState;for(let i=0,s=0;;s++){let n=s==e.viewports.length?null:e.viewports[s],o=n?n.from-1:this.length;if(o>i){let s=e.lineAt(o,0).bottom-e.lineAt(i,0).top;t.push(Vn.replace({widget:new Co(s),block:!0,inclusive:!0}).range(i,o))}if(!n)break;i=n.to+1}return Vn.set(t)}updateDeco(){return this.decorations=[...this.view.pluginField(uo.decorations),...this.view.state.facet(xo),this.compositionDeco,this.computeBlockGapDeco(),this.view.viewState.lineGapDeco]}scrollPosIntoView(t,e){let i=this.coordsAt(t,e);if(!i)return;let s=0,n=0,o=0,r=0;for(let t of this.view.pluginField(uo.scrollMargins))if(t){let{left:e,right:i,top:a,bottom:l}=t;null!=e&&(s=Math.max(s,e)),null!=i&&(n=Math.max(n,i)),null!=a&&(o=Math.max(o,a)),null!=l&&(r=Math.max(r,l))}!function(t,e){let i=t.ownerDocument.defaultView;for(let s=t.parentNode;s;)if(1==s.nodeType){let t,n=s==document.body;if(n)t=en(i);else{if(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth){s=s.parentNode;continue}let e=s.getBoundingClientRect();t={left:e.left,right:e.left+s.clientWidth,top:e.top,bottom:e.top+s.clientHeight}}let o=0,r=0;if(e.top<t.top?r=-(t.top-e.top+5):e.bottom>t.bottom&&(r=e.bottom-t.bottom+5),e.left<t.left?o=-(t.left-e.left+5):e.right>t.right&&(o=e.right-t.right+5),o||r)if(n)i.scrollBy(o,r);else{if(r){let t=s.scrollTop;s.scrollTop+=r,r=s.scrollTop-t}if(o){let t=s.scrollLeft;s.scrollLeft+=o,o=s.scrollLeft-t}e={left:e.left-o,top:e.top-r,right:e.right-o,bottom:e.bottom-r}}if(n)break;s=s.assignedSlot||s.parentNode}else{if(11!=s.nodeType)break;s=s.host}}(this.dom,{left:i.left-s,top:i.top-o,right:i.right+n,bottom:i.bottom+r})}}class Co extends Wn{constructor(t){super(),this.height=t}toDOM(){let t=document.createElement("div");return this.updateDOM(t),t}eq(t){return t.height==this.height}updateDOM(t){return t.style.height=this.height+"px",!0}get estimatedHeight(){return this.height}}class Oo extends Wn{constructor(t,e){super(),this.top=t,this.text=e}eq(t){return this.top==t.top&&this.text==t.text}toDOM(){return this.top}ignoreEvent(){return!1}get customView(){return Ln}}function Mo(t,e,i){for(;;){if(3==t.nodeType)return t;if(1==t.nodeType&&e>0&&i<=0)e=Xs(t=t.childNodes[e-1]);else{if(!(1==t.nodeType&&e<t.childNodes.length&&i>=0))return null;t=t.childNodes[e],e=0}}}class $o{constructor(){this.changes=[]}compareRange(t,e){Jn(t,e,this.changes)}comparePoint(t,e){Jn(t,e,this.changes)}}var To=function(t){return t[t.LTR=0]="LTR",t[t.RTL=1]="RTL",t}(To||(To={}));const Po=To.LTR,Do=To.RTL;function Eo(t){let e=[];for(let i=0;i<t.length;i++)e.push(1<<+t[i]);return e}const Ro=Eo("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),Lo=Eo("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),Io=Object.create(null),No=[];for(let t of["()","[]","{}"]){let e=t.charCodeAt(0),i=t.charCodeAt(1);Io[e]=i,Io[i]=-e}const Bo=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;class _o{constructor(t,e,i){this.from=t,this.to=e,this.level=i}get dir(){return this.level%2?Do:Po}side(t,e){return this.dir==e==t?this.to:this.from}static find(t,e,i,s){let n=-1;for(let o=0;o<t.length;o++){let r=t[o];if(r.from<=e&&r.to>=e){if(r.level==i)return o;(n<0||(0!=s?s<0?r.from<e:r.to>e:t[n].level>r.level))&&(n=o)}}if(n<0)throw new RangeError("Index out of range");return n}}const Fo=[];function Uo(t){return[new _o(0,t,0)]}let zo="";function Wo(t,e,i,s,n){var o;let r=s.head-t.from,a=-1;if(0==r){if(!n||!t.length)return null;e[0].level!=i&&(r=e[0].side(!1,i),a=0)}else if(r==t.length){if(n)return null;let t=e[e.length-1];t.level!=i&&(r=t.side(!0,i),a=e.length-1)}a<0&&(a=_o.find(e,r,null!==(o=s.bidiLevel)&&void 0!==o?o:-1,s.assoc));let l=e[a];r==l.side(n,i)&&(l=e[a+=n?1:-1],r=l.side(!n,i));let h=n==(l.dir==i),c=Ge(t.text,r,h);if(zo=t.text.slice(Math.min(r,c),Math.max(r,c)),c!=l.side(n,i))return ki.cursor(c+t.from,h?-1:1,l.level);let d=a==(n?e.length-1:0)?null:e[a+(n?1:-1)];return d||l.level==i?d&&d.level<l.level?ki.cursor(d.side(!n,i)+t.from,n?1:-1,d.level):ki.cursor(c+t.from,n?-1:1,l.level):ki.cursor(n?t.to:t.from,n?-1:1,i)}function jo(t,e){return e.left>t?e.left-t:Math.max(0,t-e.right)}function Vo(t,e){return e.top>t?e.top-t:Math.max(0,t-e.bottom)}function Ho(t,e){return t.top<e.bottom-1&&t.bottom>e.top+1}function qo(t,e){return e<t.top?{top:e,left:t.left,right:t.right,bottom:t.bottom}:t}function Go(t,e){return e>t.bottom?{top:t.top,left:t.left,right:t.right,bottom:e}:t}function Qo(t,e,i){let s,n,o,r,a,l,h,c;for(let d=t.firstChild;d;d=d.nextSibling){let t=Qs(d);for(let u=0;u<t.length;u++){let p=t[u];n&&Ho(n,p)&&(p=qo(Go(p,n.bottom),n.top));let f=jo(e,p),m=Vo(i,p);if(0==f&&0==m)return 3==d.nodeType?Jo(d,e,i):Qo(d,e,i);(!s||r>m||r==m&&o>f)&&(s=d,n=p,o=f,r=m),0==f?i>p.bottom&&(!h||h.bottom<p.bottom)?(a=d,h=p):i<p.top&&(!c||c.top>p.top)&&(l=d,c=p):h&&Ho(h,p)?h=Go(h,p.bottom):c&&Ho(c,p)&&(c=qo(c,p.top))}}if(h&&h.bottom>=i?(s=a,n=h):c&&c.top<=i&&(s=l,n=c),!s)return{node:t,offset:0};let d=Math.max(n.left,Math.min(n.right,e));return 3==s.nodeType?Jo(s,d,i):o||"true"!=s.contentEditable?{node:t,offset:Array.prototype.indexOf.call(t.childNodes,s)+(e>=(n.left+n.right)/2?1:0)}:Qo(s,d,i)}function Jo(t,e,i){let s=t.nodeValue.length,n=-1,o=1e9,r=0;for(let a=0;a<s;a++){let s=an(t,a,a+1).getClientRects();for(let l=0;l<s.length;l++){let h=s[l];if(h.top==h.bottom)continue;r||(r=e-h.left);let c=(h.top>i?h.top-i:i-h.bottom)-1;if(h.left-1<=e&&h.right+1>=e&&c<o){let i=e>=(h.left+h.right)/2,s=i;if(Mn.chrome||Mn.gecko){an(t,a).getBoundingClientRect().left==h.right&&(s=!i)}if(c<=0)return{node:t,offset:a+(s?1:0)};n=a+(s?1:0),o=c}}}return{node:t,offset:n>-1?n:r>0?t.nodeValue.length:0}}function Ko(t,{x:e,y:i},s,n=-1){let o,r=t.contentDOM.getBoundingClientRect(),a=t.defaultLineHeight/2;for(let e=!1;;){if(o=t.blockAtHeight(i,r.top),o.top>i||o.bottom<i){if(n=o.top>i?-1:1,i=Math.min(o.bottom-a,Math.max(o.top+a,i)),e)return s?null:0;e=!0}if(o.type==jn.Text)break;i=n>0?o.bottom+a:o.top-a}let l=o.from;if(e=Math.max(r.left+1,Math.min(r.right-1,e)),l<t.viewport.from)return 0==t.viewport.from?0:Yo(t,r,o,e,i);if(l>t.viewport.to)return t.viewport.to==t.state.doc.length?t.state.doc.length:Yo(t,r,o,e,i);let h,c=t.root,d=c.elementFromPoint(e,i),u=-1;if(d&&t.contentDOM.contains(d)&&!(t.docView.nearest(d)instanceof Rn))if(c.caretPositionFromPoint){let t=c.caretPositionFromPoint(e,i);t&&({offsetNode:h,offset:u}=t)}else if(c.caretRangeFromPoint){let t=c.caretRangeFromPoint(e,i);t&&(({startContainer:h,startOffset:u}=t),Mn.safari&&function(t,e,i){let s;if(3!=t.nodeType||e!=(s=t.nodeValue.length))return!1;for(let e=t.nextSibling;e;e=e.nextSibling)if(1!=e.nodeType||"BR"!=e.nodeName)return!1;return an(t,s-1,s).getBoundingClientRect().left>i}(h,u,e)&&(h=void 0))}if(!h||!t.docView.dom.contains(h)){let s=Kn.find(t.docView,l);({node:h,offset:u}=Qo(s.dom,e,i))}return t.docView.posFromDOM(h,u)}function Yo(t,e,i,s,n){let o=Math.round((s-e.left)*t.defaultCharacterWidth);if(t.lineWrapping&&i.height>1.5*t.defaultLineHeight){o+=Math.floor((n-i.top)/t.defaultLineHeight)*t.viewState.heightOracle.lineLength}let r=t.state.sliceDoc(i.from,i.to);return i.from+ii(r,o,t.state.tabSize)}function Xo(t,e,i,s){let n=t.state.doc.lineAt(e.head),o=t.bidiSpans(n);for(let r=e,a=null;;){let e=Wo(n,o,t.textDirection,r,i),l=zo;if(!e){if(n.number==(i?t.state.doc.lines:1))return r;l="\n",n=t.state.doc.line(n.number+(i?1:-1)),o=t.bidiSpans(n),e=ki.cursor(i?n.from:n.to)}if(a){if(!a(l))return r}else{if(!s)return e;a=s(l)}r=e}}function Zo(t,e,i){let s=t.pluginField(uo.atomicRanges);for(;;){let t=!1;for(let n of s)n.between(i.from-1,i.from+1,((s,n,o)=>{i.from>s&&i.from<n&&(i=e.from>i.from?ki.cursor(s,1):ki.cursor(n,-1),t=!0)}));if(!t)return i}}class tr{constructor(t){this.lastKeyCode=0,this.lastKeyTime=0,this.pendingIOSKey=null,this.lastSelectionOrigin=null,this.lastSelectionTime=0,this.lastEscPress=0,this.lastContextMenu=0,this.scrollHandlers=[],this.registeredEvents=[],this.customHandlers=[],this.composing=-1,this.compositionEndedAt=0,this.rapidCompositionStart=!1,this.mouseSelection=null;for(let e in nr){let i=nr[e];t.contentDOM.addEventListener(e,(s=>{"keydown"==e&&this.keydown(t,s)||sr(t,s)&&!this.ignoreDuringComposition(s)&&(this.mustFlushObserver(s)&&t.observer.forceFlush(),this.runCustomHandlers(e,t,s)?s.preventDefault():i(t,s))})),this.registeredEvents.push(e)}this.notifiedFocused=t.hasFocus,this.ensureHandlers(t),Mn.safari&&t.contentDOM.addEventListener("input",(()=>null))}setSelectionOrigin(t){this.lastSelectionOrigin=t,this.lastSelectionTime=Date.now()}ensureHandlers(t){let e=this.customHandlers=t.pluginField(go);for(let i of e)for(let e in i.handlers)this.registeredEvents.indexOf(e)<0&&"scroll"!=e&&(this.registeredEvents.push(e),t.contentDOM.addEventListener(e,(i=>{sr(t,i)&&this.runCustomHandlers(e,t,i)&&i.preventDefault()})))}runCustomHandlers(t,e,i){for(let s of this.customHandlers){let n=s.handlers[t],o=!1;if(n){try{o=n.call(s.plugin,i,e)}catch(t){lo(e.state,t)}if(o||i.defaultPrevented)return Mn.android&&"keydown"==t&&13==i.keyCode&&e.observer.flushSoon(),!0}}return!1}runScrollHandlers(t,e){for(let i of this.customHandlers){let s=i.handlers.scroll;if(s)try{s.call(i.plugin,e,t)}catch(e){lo(t.state,e)}}}keydown(t,e){return this.lastKeyCode=e.keyCode,this.lastKeyTime=Date.now(),!!this.screenKeyEvent(t,e)||!(!Mn.ios||13!=e.keyCode&&8!=e.keyCode||e.ctrlKey||e.altKey||e.metaKey||e.synthetic)&&(this.pendingIOSKey=13==e.keyCode?"enter":"backspace",setTimeout((()=>this.flushIOSKey(t)),250),!0)}flushIOSKey(t){if(!this.pendingIOSKey)return!1;let e=t.contentDOM,i=this.pendingIOSKey;return this.pendingIOSKey=null,"enter"==i?ln(e,"Enter",13):ln(e,"Backspace",8)}ignoreDuringComposition(t){return!!/^key/.test(t.type)&&(this.composing>0||!!(Mn.safari&&Date.now()-this.compositionEndedAt<500)&&(this.compositionEndedAt=0,!0))}screenKeyEvent(t,e){let i=9==e.keyCode&&Date.now()<this.lastEscPress+2e3;return 27==e.keyCode?this.lastEscPress=Date.now():er.indexOf(e.keyCode)<0&&(this.lastEscPress=0),i}mustFlushObserver(t){return"keydown"==t.type&&229!=t.keyCode||"compositionend"==t.type&&!Mn.ios}startMouseSelection(t,e,i){this.mouseSelection&&this.mouseSelection.destroy(),this.mouseSelection=new ir(this,t,e,i)}update(t){this.mouseSelection&&this.mouseSelection.update(t),t.transactions.length&&(this.lastKeyCode=this.lastSelectionTime=0)}destroy(){this.mouseSelection&&this.mouseSelection.destroy()}}const er=[16,17,18,20,91,92,224,225];class ir{constructor(t,e,i,s){this.inputState=t,this.view=e,this.style=s,this.lastEvent=i;let n=e.contentDOM.ownerDocument;n.addEventListener("mousemove",this.move=this.move.bind(this)),n.addEventListener("mouseup",this.up=this.up.bind(this)),this.extend=i.shiftKey,this.multiple=e.state.facet(ds.allowMultipleSelections)&&function(t,e){let i=t.state.facet(io);return i.length?i[0](e):Mn.mac?e.metaKey:e.ctrlKey}(e,i),this.dragMove=function(t,e){let i=t.state.facet(so);return i.length?i[0](e):Mn.mac?!e.altKey:!e.ctrlKey}(e,i),this.dragging=!!function(t,e){let{main:i}=t.state.selection;if(i.empty)return!1;let s=Hs(t.root);if(0==s.rangeCount)return!0;let n=s.getRangeAt(0).getClientRects();for(let t=0;t<n.length;t++){let i=n[t];if(i.left<=e.clientX&&i.right>=e.clientX&&i.top<=e.clientY&&i.bottom>=e.clientY)return!0}return!1}(e,i)&&null,!1===this.dragging&&(i.preventDefault(),this.select(i))}move(t){if(0==t.buttons)return this.destroy();!1===this.dragging&&this.select(this.lastEvent=t)}up(t){null==this.dragging&&this.select(this.lastEvent),this.dragging||t.preventDefault(),this.destroy()}destroy(){let t=this.view.contentDOM.ownerDocument;t.removeEventListener("mousemove",this.move),t.removeEventListener("mouseup",this.up),this.inputState.mouseSelection=null}select(t){let e=this.style.get(t,this.extend,this.multiple);e.eq(this.view.state.selection)&&e.main.assoc==this.view.state.selection.main.assoc||this.view.dispatch({selection:e,annotations:ts.userEvent.of("pointerselection"),scrollIntoView:!0})}update(t){t.docChanged&&this.dragging&&(this.dragging=this.dragging.map(t.changes)),this.style.update(t)&&setTimeout((()=>this.select(this.lastEvent)),20)}}function sr(t,e){if(!e.bubbles)return!0;if(e.defaultPrevented)return!1;for(let i,s=e.target;s!=t.contentDOM;s=s.parentNode)if(!s||11==s.nodeType||(i=pn.get(s))&&i.ignoreEvent(e))return!1;return!0}const nr=Object.create(null),or=Mn.ie&&Mn.ie_version<15||Mn.ios&&Mn.webkit_version<604;function rr(t,e){let i,{state:s}=t,n=1,o=s.toText(e),r=o.lines==s.selection.ranges.length,a=wr&&s.selection.ranges.every((t=>t.empty))&&wr==o.toString();if(a){let t=-1;i=s.changeByRange((i=>{let a=s.doc.lineAt(i.from);if(a.from==t)return{range:i};t=a.from;let l=s.toText((r?o.line(n++).text:e)+s.lineBreak);return{changes:{from:a.from,insert:l},range:ki.cursor(i.from+l.length)}}))}else i=r?s.changeByRange((t=>{let e=o.line(n++);return{changes:{from:t.from,to:t.to,insert:e.text},range:ki.cursor(t.from+e.length)}})):s.replaceSelection(o);t.dispatch(i,{annotations:ts.userEvent.of("paste"),scrollIntoView:!0})}nr.keydown=(t,e)=>{t.inputState.setSelectionOrigin("keyboardselection")};let ar=0;function lr(t,e,i,s){if(1==s)return ki.cursor(e,i);if(2==s)return function(t,e,i=1){let s=t.charCategorizer(e),n=t.doc.lineAt(e),o=e-n.from;if(0==n.length)return ki.cursor(e);0==o?i=1:o==n.length&&(i=-1);let r=o,a=o;i<0?r=Ge(n.text,o,!1):a=Ge(n.text,o);let l=s(n.text.slice(r,a));for(;r>0;){let t=Ge(n.text,r,!1);if(s(n.text.slice(t,r))!=l)break;r=t}for(;a<n.length;){let t=Ge(n.text,a);if(s(n.text.slice(a,t))!=l)break;a=t}return ki.range(r+n.from,a+n.from)}(t.state,e,i);{let i=Kn.find(t.docView,e),s=t.state.doc.lineAt(i?i.posAtEnd:e),n=i?i.posAtStart:s.from,o=i?i.posAtEnd:s.to;return o<t.state.doc.length&&o==s.to&&o++,ki.range(n,o)}}nr.touchstart=(t,e)=>{ar=Date.now(),t.inputState.setSelectionOrigin("pointerselection")},nr.touchmove=t=>{t.inputState.setSelectionOrigin("pointerselection")},nr.mousedown=(t,e)=>{if(t.observer.flush(),ar>Date.now()-2e3)return;let i=null;for(let s of t.state.facet(no))if(i=s(t,e),i)break;i||0!=e.button||(i=function(t,e){let i=ur(t,e),s=function(t){if(!pr)return t.detail;let e=fr,i=gr;return fr=t,gr=Date.now(),mr=!e||i>Date.now()-400&&Math.abs(e.clientX-t.clientX)<2&&Math.abs(e.clientY-t.clientY)<2?(mr+1)%3:1}(e),n=t.state.selection,o=i,r=e;return{update(t){t.changes&&(i&&(i.pos=t.changes.mapPos(i.pos)),n=n.map(t.changes),r=null)},get(e,a,l){let h;if(r&&e.clientX==r.clientX&&e.clientY==r.clientY?h=o:(h=o=ur(t,e),r=e),!h||!i)return n;let c=lr(t,h.pos,h.bias,s);if(i.pos!=h.pos&&!a){let e=lr(t,i.pos,i.bias,s),n=Math.min(e.from,c.from),o=Math.max(e.to,c.to);c=n<c.from?ki.range(n,o):ki.range(o,n)}return a?n.replaceRange(n.main.extend(c.from,c.to)):l?n.addRange(c):ki.create([c])}}}(t,e)),i&&(t.root.activeElement!=t.contentDOM&&t.observer.ignore((()=>rn(t.contentDOM))),t.inputState.startMouseSelection(t,e,i))};let hr=(t,e)=>t>=e.top&&t<=e.bottom,cr=(t,e,i)=>hr(e,i)&&t>=i.left&&t<=i.right;function dr(t,e,i,s){let n=Kn.find(t.docView,e);if(!n)return 1;let o=e-n.posAtStart;if(0==o)return 1;if(o==n.length)return-1;let r=n.coordsAt(o,-1);if(r&&cr(i,s,r))return-1;let a=n.coordsAt(o,1);return a&&cr(i,s,a)?1:r&&hr(s,r)?-1:1}function ur(t,e){let i=t.posAtCoords({x:e.clientX,y:e.clientY},!1);return{pos:i,bias:dr(t,i,e.clientX,e.clientY)}}const pr=Mn.ie&&Mn.ie_version<=11;let fr=null,mr=0,gr=0;function vr(t,e,i,s){let n=t.posAtCoords({x:e.clientX,y:e.clientY});if(null==n||!i)return;e.preventDefault();let{mouseSelection:o}=t.inputState,r=s&&o&&o.dragging&&o.dragMove?{from:o.dragging.from,to:o.dragging.to}:null,a={from:n,insert:i},l=t.state.changes(r?[r,a]:a);t.focus(),t.dispatch({changes:l,selection:{anchor:l.mapPos(n,-1),head:l.mapPos(n,1)},annotations:ts.userEvent.of("drop")})}nr.dragstart=(t,e)=>{let{selection:{main:i}}=t.state,{mouseSelection:s}=t.inputState;s&&(s.dragging=i),e.dataTransfer&&(e.dataTransfer.setData("Text",t.state.sliceDoc(i.from,i.to)),e.dataTransfer.effectAllowed="copyMove")},nr.drop=(t,e)=>{if(!e.dataTransfer||!t.state.facet(ho))return;let i=e.dataTransfer.files;if(i&&i.length){e.preventDefault();let s=Array(i.length),n=0,o=()=>{++n==i.length&&vr(t,e,s.filter((t=>null!=t)).join(t.state.lineBreak),!1)};for(let t=0;t<i.length;t++){let e=new FileReader;e.onerror=o,e.onload=()=>{/[\x00-\x08\x0e-\x1f]{2}/.test(e.result)||(s[t]=e.result),o()},e.readAsText(i[t])}}else vr(t,e,e.dataTransfer.getData("Text"),!0)},nr.paste=(t,e)=>{if(!t.state.facet(ho))return;t.observer.flush();let i=or?null:e.clipboardData,s=i&&i.getData("text/plain");s?(rr(t,s),e.preventDefault()):function(t){let e=t.dom.parentNode;if(!e)return;let i=e.appendChild(document.createElement("textarea"));i.style.cssText="position: fixed; left: -10000px; top: 10px",i.focus(),setTimeout((()=>{t.focus(),i.remove(),rr(t,i.value)}),50)}(t)};let wr=null;function br(t,e){if(t.docView.compositionDeco.size){t.inputState.rapidCompositionStart=e;try{t.update([])}finally{t.inputState.rapidCompositionStart=!1}}}nr.copy=nr.cut=(t,e)=>{let{text:i,ranges:s,linewise:n}=function(t){let e=[],i=[],s=!1;for(let s of t.selection.ranges)s.empty||(e.push(t.sliceDoc(s.from,s.to)),i.push(s));if(!e.length){let n=-1;for(let{from:s}of t.selection.ranges){let o=t.doc.lineAt(s);o.number>n&&(e.push(o.text),i.push({from:o.from,to:Math.min(t.doc.length,o.to+1)})),n=o.number}s=!0}return{text:e.join(t.lineBreak),ranges:i,linewise:s}}(t.state);if(!i)return;wr=n?i:null;let o=or?null:e.clipboardData;o?(e.preventDefault(),o.clearData(),o.setData("text/plain",i)):function(t,e){let i=t.dom.parentNode;if(!i)return;let s=i.appendChild(document.createElement("textarea"));s.style.cssText="position: fixed; left: -10000px; top: 10px",s.value=e,s.focus(),s.selectionEnd=e.length,s.selectionStart=0,setTimeout((()=>{s.remove(),t.focus()}),50)}(t,i),"cut"==e.type&&t.state.facet(ho)&&t.dispatch({changes:s,scrollIntoView:!0,annotations:ts.userEvent.of("cut")})},nr.focus=nr.blur=t=>{setTimeout((()=>{t.hasFocus!=t.inputState.notifiedFocused&&t.update([])}),10)},nr.beforeprint=t=>{t.viewState.printing=!0,t.requestMeasure(),setTimeout((()=>{t.viewState.printing=!1,t.requestMeasure()}),2e3)},nr.compositionstart=nr.compositionupdate=t=>{t.inputState.composing<0&&(t.docView.compositionDeco.size&&(t.observer.flush(),br(t,!0)),t.inputState.composing=0)},nr.compositionend=t=>{t.inputState.composing=-1,t.inputState.compositionEndedAt=Date.now(),setTimeout((()=>{t.inputState.composing<0&&br(t,!1)}),50)},nr.contextmenu=t=>{t.inputState.lastContextMenu=Date.now()};const xr=["pre-wrap","normal","pre-line"];class yr{constructor(){this.doc=si.empty,this.lineWrapping=!1,this.direction=To.LTR,this.heightSamples={},this.lineHeight=14,this.charWidth=7,this.lineLength=30,this.heightChanged=!1}heightForGap(t,e){let i=this.doc.lineAt(e).number-this.doc.lineAt(t).number+1;return this.lineWrapping&&(i+=Math.ceil((e-t-i*this.lineLength*.5)/this.lineLength)),this.lineHeight*i}heightForLine(t){if(!this.lineWrapping)return this.lineHeight;return(1+Math.max(0,Math.ceil((t-this.lineLength)/(this.lineLength-5))))*this.lineHeight}setDoc(t){return this.doc=t,this}mustRefresh(t,e,i){let s=!1;for(let e=0;e<t.length;e++){let i=t[e];i<0?e++:this.heightSamples[Math.floor(10*i)]||(s=!0,this.heightSamples[Math.floor(10*i)]=!0)}return s||xr.indexOf(e)>-1!=this.lineWrapping||this.direction!=i}refresh(t,e,i,s,n,o){let r=xr.indexOf(t)>-1,a=Math.round(i)!=Math.round(this.lineHeight)||this.lineWrapping!=r||this.direction!=e;if(this.lineWrapping=r,this.direction=e,this.lineHeight=i,this.charWidth=s,this.lineLength=n,a){this.heightSamples={};for(let t=0;t<o.length;t++){let e=o[t];e<0?t++:this.heightSamples[Math.floor(10*e)]=!0}}return a}}class kr{constructor(t,e){this.from=t,this.heights=e,this.index=0}get more(){return this.index<this.heights.length}}class Sr{constructor(t,e,i,s,n){this.from=t,this.length=e,this.top=i,this.height=s,this.type=n}get to(){return this.from+this.length}get bottom(){return this.top+this.height}join(t){let e=(Array.isArray(this.type)?this.type:[this]).concat(Array.isArray(t.type)?t.type:[t]);return new Sr(this.from,this.length+t.length,this.top,this.height+t.height,e)}}var Ar=function(t){return t[t.ByPos=0]="ByPos",t[t.ByHeight=1]="ByHeight",t[t.ByPosNoHeight=2]="ByPosNoHeight",t}(Ar||(Ar={}));class Cr{constructor(t,e,i=2){this.length=t,this.height=e,this.flags=i}get outdated(){return(2&this.flags)>0}set outdated(t){this.flags=(t?2:0)|-3&this.flags}setHeight(t,e){this.height!=e&&(Math.abs(this.height-e)>1e-4&&(t.heightChanged=!0),this.height=e)}replace(t,e,i){return Cr.of(i)}decomposeLeft(t,e){e.push(this)}decomposeRight(t,e){e.push(this)}applyChanges(t,e,i,s){let n=this;for(let o=s.length-1;o>=0;o--){let{fromA:r,toA:a,fromB:l,toB:h}=s[o],c=n.lineAt(r,Ar.ByPosNoHeight,e,0,0),d=c.to>=a?c:n.lineAt(a,Ar.ByPosNoHeight,e,0,0);for(h+=d.to-a,a=d.to;o>0&&c.from<=s[o-1].toA;)r=s[o-1].fromA,l=s[o-1].fromB,o--,r<c.from&&(c=n.lineAt(r,Ar.ByPosNoHeight,e,0,0));l+=c.from-r,r=c.from;let u=Dr.build(i,t,l,h);n=n.replace(r,a,u)}return n.updateHeight(i,0)}static empty(){return new Mr(0,0)}static of(t){if(1==t.length)return t[0];let e=0,i=t.length,s=0,n=0;for(;;)if(e==i)if(s>2*n){let n=t[e-1];n.break?t.splice(--e,1,n.left,null,n.right):t.splice(--e,1,n.left,n.right),i+=1+n.break,s-=n.size}else{if(!(n>2*s))break;{let e=t[i];e.break?t.splice(i,1,e.left,null,e.right):t.splice(i,1,e.left,e.right),i+=2+e.break,n-=e.size}}else if(s<n){let i=t[e++];i&&(s+=i.size)}else{let e=t[--i];e&&(n+=e.size)}let o=0;return null==t[e-1]?(o=1,e--):null==t[e]&&(o=1,i++),new Tr(Cr.of(t.slice(0,e)),o,Cr.of(t.slice(i)))}}Cr.prototype.size=1;class Or extends Cr{constructor(t,e,i){super(t,e),this.type=i}blockAt(t,e,i,s){return new Sr(s,this.length,i,this.height,this.type)}lineAt(t,e,i,s,n){return this.blockAt(0,i,s,n)}forEachLine(t,e,i,s,n,o){o(this.blockAt(0,i,s,n))}updateHeight(t,e=0,i=!1,s){return s&&s.from<=e&&s.more&&this.setHeight(t,s.heights[s.index++]),this.outdated=!1,this}toString(){return`block(${this.length})`}}class Mr extends Or{constructor(t,e){super(t,e,jn.Text),this.collapsed=0,this.widgetHeight=0}replace(t,e,i){let s=i[0];return 1==i.length&&(s instanceof Mr||s instanceof $r&&4&s.flags)&&Math.abs(this.length-s.length)<10?(s instanceof $r?s=new Mr(s.length,this.height):s.height=this.height,this.outdated||(s.outdated=!1),s):Cr.of(i)}updateHeight(t,e=0,i=!1,s){return s&&s.from<=e&&s.more?this.setHeight(t,s.heights[s.index++]):(i||this.outdated)&&this.setHeight(t,Math.max(this.widgetHeight,t.heightForLine(this.length-this.collapsed))),this.outdated=!1,this}toString(){return`line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`}}class $r extends Cr{constructor(t){super(t,0)}lines(t,e){let i=t.lineAt(e).number,s=t.lineAt(e+this.length).number;return{firstLine:i,lastLine:s,lineHeight:this.height/(s-i+1)}}blockAt(t,e,i,s){let{firstLine:n,lastLine:o,lineHeight:r}=this.lines(e,s),a=Math.max(0,Math.min(o-n,Math.floor((t-i)/r))),{from:l,length:h}=e.line(n+a);return new Sr(l,h,i+r*a,r,jn.Text)}lineAt(t,e,i,s,n){if(e==Ar.ByHeight)return this.blockAt(t,i,s,n);if(e==Ar.ByPosNoHeight){let{from:e,to:s}=i.lineAt(t);return new Sr(e,s-e,0,0,jn.Text)}let{firstLine:o,lineHeight:r}=this.lines(i,n),{from:a,length:l,number:h}=i.lineAt(t);return new Sr(a,l,s+r*(h-o),r,jn.Text)}forEachLine(t,e,i,s,n,o){let{firstLine:r,lineHeight:a}=this.lines(i,n);for(let l=Math.max(t,n),h=Math.min(n+this.length,e);l<=h;){let e=i.lineAt(l);l==t&&(s+=a*(e.number-r)),o(new Sr(e.from,e.length,s,a,jn.Text)),s+=a,l=e.to+1}}replace(t,e,i){let s=this.length-e;if(s>0){let t=i[i.length-1];t instanceof $r?i[i.length-1]=new $r(t.length+s):i.push(null,new $r(s-1))}if(t>0){let e=i[0];e instanceof $r?i[0]=new $r(t+e.length):i.unshift(new $r(t-1),null)}return Cr.of(i)}decomposeLeft(t,e){e.push(new $r(t-1),null)}decomposeRight(t,e){e.push(null,new $r(this.length-t-1))}updateHeight(t,e=0,i=!1,s){let n=e+this.length;if(s&&s.from<=e+this.length&&s.more){let i=[],o=Math.max(e,s.from);for(s.from>e&&i.push(new $r(s.from-e-1).updateHeight(t,e));o<=n&&s.more;){let e=t.doc.lineAt(o).length;i.length&&i.push(null);let n=new Mr(e,s.heights[s.index++]);n.outdated=!1,i.push(n),o+=e+1}return o<=n&&i.push(null,new $r(n-o).updateHeight(t,o)),t.heightChanged=!0,Cr.of(i)}return(i||this.outdated)&&(this.setHeight(t,t.heightForGap(e,e+this.length)),this.outdated=!1),this}toString(){return`gap(${this.length})`}}class Tr extends Cr{constructor(t,e,i){super(t.length+e+i.length,t.height+i.height,e|(t.outdated||i.outdated?2:0)),this.left=t,this.right=i,this.size=t.size+i.size}get break(){return 1&this.flags}blockAt(t,e,i,s){let n=i+this.left.height;return t<n||0==this.right.height?this.left.blockAt(t,e,i,s):this.right.blockAt(t,e,n,s+this.left.length+this.break)}lineAt(t,e,i,s,n){let o=s+this.left.height,r=n+this.left.length+this.break,a=e==Ar.ByHeight?t<o||0==this.right.height:t<r,l=a?this.left.lineAt(t,e,i,s,n):this.right.lineAt(t,e,i,o,r);if(this.break||(a?l.to<r:l.from>r))return l;let h=e==Ar.ByPosNoHeight?Ar.ByPosNoHeight:Ar.ByPos;return a?l.join(this.right.lineAt(r,h,i,o,r)):this.left.lineAt(r,h,i,s,n).join(l)}forEachLine(t,e,i,s,n,o){let r=s+this.left.height,a=n+this.left.length+this.break;if(this.break)t<a&&this.left.forEachLine(t,e,i,s,n,o),e>=a&&this.right.forEachLine(t,e,i,r,a,o);else{let l=this.lineAt(a,Ar.ByPos,i,s,n);t<l.from&&this.left.forEachLine(t,l.from-1,i,s,n,o),l.to>=t&&l.from<=e&&o(l),e>l.to&&this.right.forEachLine(l.to+1,e,i,r,a,o)}}replace(t,e,i){let s=this.left.length+this.break;if(e<s)return this.balanced(this.left.replace(t,e,i),this.right);if(t>this.left.length)return this.balanced(this.left,this.right.replace(t-s,e-s,i));let n=[];t>0&&this.decomposeLeft(t,n);let o=n.length;for(let t of i)n.push(t);if(t>0&&Pr(n,o-1),e<this.length){let t=n.length;this.decomposeRight(e,n),Pr(n,t)}return Cr.of(n)}decomposeLeft(t,e){let i=this.left.length;if(t<=i)return this.left.decomposeLeft(t,e);e.push(this.left),this.break&&(i++,t>=i&&e.push(null)),t>i&&this.right.decomposeLeft(t-i,e)}decomposeRight(t,e){let i=this.left.length,s=i+this.break;if(t>=s)return this.right.decomposeRight(t-s,e);t<i&&this.left.decomposeRight(t,e),this.break&&t<s&&e.push(null),e.push(this.right)}balanced(t,e){return t.size>2*e.size||e.size>2*t.size?Cr.of(this.break?[t,null,e]:[t,e]):(this.left=t,this.right=e,this.height=t.height+e.height,this.outdated=t.outdated||e.outdated,this.size=t.size+e.size,this.length=t.length+this.break+e.length,this)}updateHeight(t,e=0,i=!1,s){let{left:n,right:o}=this,r=e+n.length+this.break,a=null;return s&&s.from<=e+n.length&&s.more?a=n=n.updateHeight(t,e,i,s):n.updateHeight(t,e,i),s&&s.from<=r+o.length&&s.more?a=o=o.updateHeight(t,r,i,s):o.updateHeight(t,r,i),a?this.balanced(n,o):(this.height=this.left.height+this.right.height,this.outdated=!1,this)}toString(){return this.left+(this.break?" ":"-")+this.right}}function Pr(t,e){let i,s;null==t[e]&&(i=t[e-1])instanceof $r&&(s=t[e+1])instanceof $r&&t.splice(e-1,3,new $r(i.length+1+s.length))}class Dr{constructor(t,e){this.pos=t,this.oracle=e,this.nodes=[],this.lineStart=-1,this.lineEnd=-1,this.covering=null,this.writtenTo=t}get isCovered(){return this.covering&&this.nodes[this.nodes.length-1]==this.covering}span(t,e){if(this.lineStart>-1){let t=Math.min(e,this.lineEnd),i=this.nodes[this.nodes.length-1];i instanceof Mr?i.length+=t-this.pos:(t>this.pos||!this.isCovered)&&this.nodes.push(new Mr(t-this.pos,-1)),this.writtenTo=t,e>t&&(this.nodes.push(null),this.writtenTo++,this.lineStart=-1)}this.pos=e}point(t,e,i){if(t<e||i.heightRelevant){let s=i.widget?Math.max(0,i.widget.estimatedHeight):0,n=e-t;i.block?this.addBlock(new Or(n,s,i.type)):(n||s>=5)&&this.addLineDeco(s,n)}else e>t&&this.span(t,e);this.lineEnd>-1&&this.lineEnd<this.pos&&(this.lineEnd=this.oracle.doc.lineAt(this.pos).to)}enterLine(){if(this.lineStart>-1)return;let{from:t,to:e}=this.oracle.doc.lineAt(this.pos);this.lineStart=t,this.lineEnd=e,this.writtenTo<t&&((this.writtenTo<t-1||null==this.nodes[this.nodes.length-1])&&this.nodes.push(this.blankContent(this.writtenTo,t-1)),this.nodes.push(null)),this.pos>t&&this.nodes.push(new Mr(this.pos-t,-1)),this.writtenTo=this.pos}blankContent(t,e){let i=new $r(e-t);return this.oracle.doc.lineAt(t).to==e&&(i.flags|=4),i}ensureLine(){this.enterLine();let t=this.nodes.length?this.nodes[this.nodes.length-1]:null;if(t instanceof Mr)return t;let e=new Mr(0,-1);return this.nodes.push(e),e}addBlock(t){this.enterLine(),t.type!=jn.WidgetAfter||this.isCovered||this.ensureLine(),this.nodes.push(t),this.writtenTo=this.pos=this.pos+t.length,t.type!=jn.WidgetBefore&&(this.covering=t)}addLineDeco(t,e){let i=this.ensureLine();i.length+=e,i.collapsed+=e,i.widgetHeight=Math.max(i.widgetHeight,t),this.writtenTo=this.pos=this.pos+e}finish(t){let e=0==this.nodes.length?null:this.nodes[this.nodes.length-1];!(this.lineStart>-1)||e instanceof Mr||this.isCovered?(this.writtenTo<this.pos||null==e)&&this.nodes.push(this.blankContent(this.writtenTo,this.pos)):this.nodes.push(new Mr(0,-1));let i=t;for(let t of this.nodes)t instanceof Mr&&t.updateHeight(this.oracle,i),i+=t?t.length:1;return this.nodes}static build(t,e,i,s){let n=new Dr(i,t);return Ss.spans(e,i,s,n,0),n.finish(i)}}class Er{constructor(){this.changes=[]}compareRange(){}comparePoint(t,e,i,s){(t<e||i&&i.heightRelevant||s&&s.heightRelevant)&&Jn(t,e,this.changes,5)}}class Rr{constructor(t,e,i){this.from=t,this.to=e,this.size=i}static same(t,e){if(t.length!=e.length)return!1;for(let i=0;i<t.length;i++){let s=t[i],n=e[i];if(s.from!=n.from||s.to!=n.to||s.size!=n.size)return!1}return!0}draw(t){return Vn.replace({widget:new Lr(this.size,t)}).range(this.from,this.to)}}class Lr extends Wn{constructor(t,e){super(),this.size=t,this.vertical=e}eq(t){return t.size==this.size&&t.vertical==this.vertical}toDOM(){let t=document.createElement("div");return this.vertical?t.style.height=this.size+"px":(t.style.width=this.size+"px",t.style.height="2px",t.style.display="inline-block"),t}get estimatedHeight(){return this.vertical?this.size:-1}}class Ir{constructor(t){this.state=t,this.pixelViewport={left:0,right:window.innerWidth,top:0,bottom:0},this.inView=!0,this.paddingTop=0,this.paddingBottom=0,this.contentWidth=0,this.heightOracle=new yr,this.scaler=Ur,this.scrollTo=null,this.printing=!1,this.visibleRanges=[],this.mustEnforceCursorAssoc=!1,this.heightMap=Cr.empty().applyChanges(t.facet(xo),si.empty,this.heightOracle.setDoc(t.doc),[new ko(0,0,0,t.doc.length)]),this.viewport=this.getViewport(0,null),this.updateForViewport(),this.lineGaps=this.ensureLineGaps([]),this.lineGapDeco=Vn.set(this.lineGaps.map((t=>t.draw(!1)))),this.computeVisibleRanges()}updateForViewport(){let t=[this.viewport],{main:e}=this.state.selection;for(let i=0;i<=1;i++){let s=i?e.head:e.anchor;if(!t.some((({from:t,to:e})=>s>=t&&s<=e))){let{from:e,to:i}=this.lineAt(s,0);t.push(new Nr(e,i))}}this.viewports=t.sort(((t,e)=>t.from-e.from)),this.scaler=this.heightMap.height<=7e6?Ur:new zr(this.heightOracle.doc,this.heightMap,this.viewports)}update(t,e=null){let i=this.state;this.state=t.state;let s=this.state.facet(xo),n=t.changedRanges,o=ko.extendWithRanges(n,function(t,e,i){let s=new Er;return Ss.compare(t,e,i,s,0),s.changes}(t.startState.facet(xo),s,t?t.changes:fi.empty(this.state.doc.length))),r=this.heightMap.height;this.heightMap=this.heightMap.applyChanges(s,i.doc,this.heightOracle.setDoc(this.state.doc),o),this.heightMap.height!=r&&(t.flags|=2);let a=o.length?this.mapViewport(this.viewport,t.changes):this.viewport;(e&&(e.head<a.from||e.head>a.to)||!this.viewportIsAppropriate(a))&&(a=this.getViewport(0,e)),a.eq(this.viewport)||(this.viewport=a,t.flags|=4),this.updateForViewport(),(this.lineGaps.length||this.viewport.to-this.viewport.from>15e3)&&(t.flags|=this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps,t.changes)))),this.computeVisibleRanges(),e&&(this.scrollTo=e),!this.mustEnforceCursorAssoc&&t.selectionSet&&t.view.lineWrapping&&t.state.selection.main.empty&&t.state.selection.main.assoc&&(this.mustEnforceCursorAssoc=!0)}measure(t,e){let i=t.dom,s="",n=To.LTR;if(!e){let t=window.getComputedStyle(i);s=t.whiteSpace,n="rtl"==t.direction?To.RTL:To.LTR,this.paddingTop=parseInt(t.paddingTop)||0,this.paddingBottom=parseInt(t.paddingBottom)||0}let o=this.printing?{top:-1e8,bottom:1e8,left:-1e8,right:1e8}:function(t,e){let i=t.getBoundingClientRect(),s=Math.max(0,i.left),n=Math.min(innerWidth,i.right),o=Math.max(0,i.top),r=Math.min(innerHeight,i.bottom);for(let e=t.parentNode;e;)if(1==e.nodeType){let t=window.getComputedStyle(e);if((e.scrollHeight>e.clientHeight||e.scrollWidth>e.clientWidth)&&"visible"!=t.overflow){let t=e.getBoundingClientRect();s=Math.max(s,t.left),n=Math.min(n,t.right),o=Math.max(o,t.top),r=Math.min(r,t.bottom)}e="absolute"==t.position||"fixed"==t.position?e.offsetParent:e.parentNode}else{if(11!=e.nodeType)break;e=e.host}return{left:s-i.left,right:n-i.left,top:o-(i.top+e),bottom:r-(i.top+e)}}(i,this.paddingTop),r=o.top-this.pixelViewport.top,a=o.bottom-this.pixelViewport.bottom;if(this.pixelViewport=o,this.inView=this.pixelViewport.bottom>this.pixelViewport.top&&this.pixelViewport.right>this.pixelViewport.left,!this.inView)return 0;let l=t.measureVisibleLineHeights(),h=!1,c=0,d=0,u=this.heightOracle;if(!e){let e=t.dom.clientWidth;if(u.mustRefresh(l,s,n)||u.lineWrapping&&Math.abs(e-this.contentWidth)>u.charWidth){let{lineHeight:i,charWidth:o}=t.measureTextSize();h=u.refresh(s,n,i,o,e/o,l),h&&(t.minWidth=0,d|=16)}this.contentWidth!=e&&(this.contentWidth=e,d|=16),r>0&&a>0?c=Math.max(r,a):r<0&&a<0&&(c=Math.min(r,a))}if(u.heightChanged=!1,this.heightMap=this.heightMap.updateHeight(u,0,h,new kr(this.viewport.from,l)),u.heightChanged&&(d|=2),!this.viewportIsAppropriate(this.viewport,c)||this.scrollTo&&(this.scrollTo.head<this.viewport.from||this.scrollTo.head>this.viewport.to)){let t=this.getViewport(c,this.scrollTo);t.from==this.viewport.from&&t.to==this.viewport.to||(this.viewport=t,d|=4)}return this.updateForViewport(),(this.lineGaps.length||this.viewport.to-this.viewport.from>15e3)&&(d|=this.updateLineGaps(this.ensureLineGaps(h?[]:this.lineGaps))),this.computeVisibleRanges(),this.mustEnforceCursorAssoc&&(this.mustEnforceCursorAssoc=!1,t.enforceCursorAssoc()),d}get visibleTop(){return this.scaler.fromDOM(this.pixelViewport.top,0)}get visibleBottom(){return this.scaler.fromDOM(this.pixelViewport.bottom,0)}getViewport(t,e){let i=.5-Math.max(-.5,Math.min(.5,t/1e3/2)),s=this.heightMap,n=this.state.doc,{visibleTop:o,visibleBottom:r}=this,a=new Nr(s.lineAt(o-1e3*i,Ar.ByHeight,n,0,0).from,s.lineAt(r+1e3*(1-i),Ar.ByHeight,n,0,0).to);if(e)if(e.head<a.from){let{top:t}=s.lineAt(e.head,Ar.ByPos,n,0,0);a=new Nr(s.lineAt(t-500,Ar.ByHeight,n,0,0).from,s.lineAt(t+(r-o)+500,Ar.ByHeight,n,0,0).to)}else if(e.head>a.to){let{bottom:t}=s.lineAt(e.head,Ar.ByPos,n,0,0);a=new Nr(s.lineAt(t-(r-o)-500,Ar.ByHeight,n,0,0).from,s.lineAt(t+500,Ar.ByHeight,n,0,0).to)}return a}mapViewport(t,e){let i=e.mapPos(t.from,-1),s=e.mapPos(t.to,1);return new Nr(this.heightMap.lineAt(i,Ar.ByPos,this.state.doc,0,0).from,this.heightMap.lineAt(s,Ar.ByPos,this.state.doc,0,0).to)}viewportIsAppropriate({from:t,to:e},i=0){let{top:s}=this.heightMap.lineAt(t,Ar.ByPos,this.state.doc,0,0),{bottom:n}=this.heightMap.lineAt(e,Ar.ByPos,this.state.doc,0,0),{visibleTop:o,visibleBottom:r}=this;return(0==t||s<=o-Math.max(10,Math.min(-i,250)))&&(e==this.state.doc.length||n>=r+Math.max(10,Math.min(i,250)))&&s>o-2e3&&n<r+2e3}mapLineGaps(t,e){if(!t.length||e.empty)return t;let i=[];for(let s of t)e.touchesRange(s.from,s.to)||i.push(new Rr(e.mapPos(s.from),e.mapPos(s.to),s.size));return i}ensureLineGaps(t){let e=[];return this.heightOracle.direction!=To.LTR||this.heightMap.forEachLine(this.viewport.from,this.viewport.to,this.state.doc,0,0,(i=>{if(i.length<1e4)return;let s,n,o=function(t,e,i){let s=[],n=t,o=0;Ss.spans(i.facet(xo),t,e,{span(){},point(t,e){t>n&&(s.push({from:n,to:t}),o+=t-n),n=e}},20),n<e&&(s.push({from:n,to:e}),o+=e-n);return{total:o,ranges:s}}(i.from,i.to,this.state);if(o.total<1e4)return;if(this.heightOracle.lineWrapping)s=i.from!=this.viewport.from?i.from:Br(o,(this.visibleTop-i.top)/i.height),n=i.to!=this.viewport.to?i.to:Br(o,(this.visibleBottom-i.top)/i.height);else{let t=o.total*this.heightOracle.charWidth;s=Br(o,this.pixelViewport.left/t),n=Br(o,this.pixelViewport.right/t)}let r=this.state.selection.main;r.from<=s&&r.to>=i.from&&(s=r.from),r.from<=i.to&&r.to>=n&&(n=r.to);let a=s-1e4,l=n+1e4;a>i.from+5e3&&e.push(Fr(t,(t=>t.from==i.from&&t.to>a-5e3&&t.to<a+5e3))||new Rr(i.from,a,this.gapSize(i,a,!0,o))),l<i.to-5e3&&e.push(Fr(t,(t=>t.to==i.to&&t.from>l-5e3&&t.from<l+5e3))||new Rr(l,i.to,this.gapSize(i,l,!1,o)))})),e}gapSize(t,e,i,s){if(this.heightOracle.lineWrapping){let n=t.height*_r(s,e);return i?n:t.height-n}{let t=_r(s,e);return s.total*this.heightOracle.charWidth*(i?t:1-t)}}updateLineGaps(t){return Rr.same(t,this.lineGaps)?0:(this.lineGaps=t,this.lineGapDeco=Vn.set(t.map((t=>t.draw(this.heightOracle.lineWrapping)))),8)}computeVisibleRanges(){let t=this.state.facet(xo);this.lineGaps.length&&(t=t.concat(this.lineGapDeco));let e=[];Ss.spans(t,this.viewport.from,this.viewport.to,{span(t,i){e.push({from:t,to:i})},point(){}},20),this.visibleRanges=e}lineAt(t,e){return e+=this.paddingTop,Wr(this.heightMap.lineAt(t,Ar.ByPos,this.state.doc,e,0),this.scaler,e)}lineAtHeight(t,e){return e+=this.paddingTop,Wr(this.heightMap.lineAt(this.scaler.fromDOM(t,e),Ar.ByHeight,this.state.doc,e,0),this.scaler,e)}blockAtHeight(t,e){return e+=this.paddingTop,Wr(this.heightMap.blockAt(this.scaler.fromDOM(t,e),this.state.doc,e,0),this.scaler,e)}forEachLine(t,e,i,s){return s+=this.paddingTop,this.heightMap.forEachLine(t,e,this.state.doc,s,0,1==this.scaler.scale?i:t=>i(Wr(t,this.scaler,s)))}get contentHeight(){return this.domHeight+this.paddingTop+this.paddingBottom}get domHeight(){return this.scaler.toDOM(this.heightMap.height,this.paddingTop)}}class Nr{constructor(t,e){this.from=t,this.to=e}eq(t){return this.from==t.from&&this.to==t.to}}function Br({total:t,ranges:e},i){if(i<=0)return e[0].from;if(i>=1)return e[e.length-1].to;let s=Math.floor(t*i);for(let t=0;;t++){let{from:i,to:n}=e[t],o=n-i;if(s<=o)return i+s;s-=o}}function _r(t,e){let i=0;for(let{from:s,to:n}of t.ranges){if(e<=n){i+=e-s;break}i+=n-s}return i/t.total}function Fr(t,e){for(let i of t)if(e(i))return i}const Ur={toDOM:t=>t,fromDOM:t=>t,scale:1};class zr{constructor(t,e,i){let s=0,n=0,o=0;this.viewports=i.map((({from:i,to:n})=>{let o=e.lineAt(i,Ar.ByPos,t,0,0).top,r=e.lineAt(n,Ar.ByPos,t,0,0).bottom;return s+=r-o,{from:i,to:n,top:o,bottom:r,domTop:0,domBottom:0}})),this.scale=(7e6-s)/(e.height-s);for(let t of this.viewports)t.domTop=o+(t.top-n)*this.scale,o=t.domBottom=t.domTop+(t.bottom-t.top),n=t.bottom}toDOM(t,e){t-=e;for(let i=0,s=0,n=0;;i++){let o=i<this.viewports.length?this.viewports[i]:null;if(!o||t<o.top)return n+(t-s)*this.scale+e;if(t<=o.bottom)return o.domTop+(t-o.top)+e;s=o.bottom,n=o.domBottom}}fromDOM(t,e){t-=e;for(let i=0,s=0,n=0;;i++){let o=i<this.viewports.length?this.viewports[i]:null;if(!o||t<o.domTop)return s+(t-n)/this.scale+e;if(t<=o.domBottom)return o.top+(t-o.domTop)+e;s=o.bottom,n=o.domBottom}}}function Wr(t,e,i){if(1==e.scale)return t;let s=e.toDOM(t.top,i),n=e.toDOM(t.bottom,i);return new Sr(t.from,t.length,s,n-s,Array.isArray(t.type)?t.type.map((t=>Wr(t,e,i))):t.type)}const jr=Oi.define({combine:t=>t.join(" ")}),Vr=Oi.define({combine:t=>t.indexOf(!0)>-1}),Hr=gs.newName(),qr=gs.newName(),Gr=gs.newName(),Qr={"&light":"."+qr,"&dark":"."+Gr};function Jr(t,e,i){return new gs(e,{finish:e=>/&/.test(e)?e.replace(/&\w*/,(e=>{if("&"==e)return t;if(!i||!i[e])throw new RangeError(`Unsupported selector: ${e}`);return i[e]})):t+" "+e})}const Kr=Jr("."+Hr,{"&":{position:"relative !important",boxSizing:"border-box","&.cm-focused":{outline:"1px dotted #212121"},display:"flex !important",flexDirection:"column"},".cm-scroller":{display:"flex !important",alignItems:"flex-start !important",fontFamily:"monospace",lineHeight:1.4,height:"100%",overflowX:"auto",position:"relative",zIndex:0},".cm-content":{margin:0,flexGrow:2,minHeight:"100%",display:"block",whiteSpace:"pre",wordWrap:"normal",boxSizing:"border-box",padding:"4px 0",outline:"none"},".cm-lineWrapping":{whiteSpace:"pre-wrap",wordBreak:"break-word",overflowWrap:"anywhere"},"&light .cm-content":{caretColor:"black"},"&dark .cm-content":{caretColor:"white"},".cm-line":{display:"block",padding:"0 2px 0 4px"},".cm-selectionLayer":{zIndex:-1,contain:"size style"},".cm-selectionBackground":{position:"absolute"},"&light .cm-selectionBackground":{background:"#d9d9d9"},"&dark .cm-selectionBackground":{background:"#222"},"&light.cm-focused .cm-selectionBackground":{background:"#d7d4f0"},"&dark.cm-focused .cm-selectionBackground":{background:"#233"},".cm-cursorLayer":{zIndex:100,contain:"size style",pointerEvents:"none"},"&.cm-focused .cm-cursorLayer":{animation:"steps(1) cm-blink 1.2s infinite"},"@keyframes cm-blink":{"0%":{},"50%":{visibility:"hidden"},"100%":{}},"@keyframes cm-blink2":{"0%":{},"50%":{visibility:"hidden"},"100%":{}},".cm-cursor":{position:"absolute",borderLeft:"1.2px solid black",marginLeft:"-0.6px",pointerEvents:"none",display:"none"},"&dark .cm-cursor":{borderLeftColor:"#444"},"&.cm-focused .cm-cursor":{display:"block"},"&light .cm-activeLine":{backgroundColor:"#f3f9ff"},"&dark .cm-activeLine":{backgroundColor:"#223039"},"&light .cm-specialChar":{color:"red"},"&dark .cm-specialChar":{color:"#f78"},".cm-tab":{display:"inline-block",overflow:"hidden",verticalAlign:"bottom"},".cm-placeholder":{color:"#888",display:"inline-block"},".cm-button":{verticalAlign:"middle",color:"inherit",fontSize:"70%",padding:".2em 1em",borderRadius:"3px"},"&light .cm-button":{backgroundImage:"linear-gradient(#eff1f5, #d9d9df)",border:"1px solid #888","&:active":{backgroundImage:"linear-gradient(#b4b4b4, #d0d3d6)"}},"&dark .cm-button":{backgroundImage:"linear-gradient(#393939, #111)",border:"1px solid #888","&:active":{backgroundImage:"linear-gradient(#111, #333)"}},".cm-textfield":{verticalAlign:"middle",color:"inherit",fontSize:"70%",border:"1px solid silver",padding:".2em .5em"},"&light .cm-textfield":{backgroundColor:"white"},"&dark .cm-textfield":{border:"1px solid #555",backgroundColor:"inherit"}},Qr),Yr={childList:!0,characterData:!0,subtree:!0,characterDataOldValue:!0},Xr=Mn.ie&&Mn.ie_version<=11;class Zr{constructor(t,e,i){this.view=t,this.onChange=e,this.onScrollChanged=i,this.active=!1,this.ignoreSelection=new sn,this.delayedFlush=-1,this.queue=[],this.lastFlush=0,this.scrollTargets=[],this.intersection=null,this.intersecting=!1,this._selectionRange=null,this.parentCheck=-1,this.dom=t.contentDOM,this.observer=new MutationObserver((e=>{for(let t of e)this.queue.push(t);this._selectionRange=null,(Mn.ie&&Mn.ie_version<=11||Mn.ios&&t.composing)&&e.some((t=>"childList"==t.type&&t.removedNodes.length||"characterData"==t.type&&t.oldValue.length>t.target.nodeValue.length))?this.flushSoon():this.flush()})),Xr&&(this.onCharData=t=>{this.queue.push({target:t.target,type:"characterData",oldValue:t.prevValue}),this.flushSoon()}),this.onSelectionChange=this.onSelectionChange.bind(this),this.start(),this.onScroll=this.onScroll.bind(this),window.addEventListener("scroll",this.onScroll),"function"==typeof IntersectionObserver&&(this.intersection=new IntersectionObserver((t=>{this.parentCheck<0&&(this.parentCheck=setTimeout(this.listenForScroll.bind(this),1e3)),t[t.length-1].intersectionRatio>0!=this.intersecting&&(this.intersecting=!this.intersecting,this.intersecting!=this.view.inView&&this.onScrollChanged(document.createEvent("Event")))}),{}),this.intersection.observe(this.dom)),this.listenForScroll()}onScroll(t){this.intersecting&&this.flush(),this.onScrollChanged(t)}onSelectionChange(t){this.lastFlush<Date.now()-50&&(this._selectionRange=null);let{view:e}=this,i=this.selectionRange;if(e.state.facet(ho)?e.root.activeElement!=this.dom:!Gs(e.dom,i))return;let s=i.anchorNode&&e.docView.nearest(i.anchorNode);s&&s.ignoreEvent(t)||(Mn.ie&&Mn.ie_version<=11&&!e.state.selection.main.empty&&i.focusNode&&Js(i.focusNode,i.focusOffset,i.anchorNode,i.anchorOffset)?this.flushSoon():this.flush())}get selectionRange(){if(!this._selectionRange){let{root:t}=this.view,e=Hs(t);Mn.safari&&11==t.nodeType&&function(){let t=document.activeElement;for(;t&&t.shadowRoot;)t=t.shadowRoot.activeElement;return t}()==this.view.contentDOM&&(e=function(t){let e=null;function i(t){t.preventDefault(),t.stopImmediatePropagation(),e=t.getTargetRanges()[0]}if(t.contentDOM.addEventListener("beforeinput",i,!0),document.execCommand("indent"),t.contentDOM.removeEventListener("beforeinput",i,!0),!e)return null;let s=e.startContainer,n=e.startOffset,o=e.endContainer,r=e.endOffset,a=t.docView.domAtPos(t.state.selection.main.anchor);Js(a.node,a.offset,o,r)&&([s,n,o,r]=[o,r,s,n]);return{anchorNode:s,anchorOffset:n,focusNode:o,focusOffset:r}}(this.view)||e),this._selectionRange=e}return this._selectionRange}setSelectionRange(t,e){var i;(null===(i=this._selectionRange)||void 0===i?void 0:i.type)||(this._selectionRange={anchorNode:t.node,anchorOffset:t.offset,focusNode:e.node,focusOffset:e.offset})}listenForScroll(){this.parentCheck=-1;let t=0,e=null;for(let i=this.dom;i;)if(1==i.nodeType)!e&&t<this.scrollTargets.length&&this.scrollTargets[t]==i?t++:e||(e=this.scrollTargets.slice(0,t)),e&&e.push(i),i=i.assignedSlot||i.parentNode;else{if(11!=i.nodeType)break;i=i.host}if(t<this.scrollTargets.length&&!e&&(e=this.scrollTargets.slice(0,t)),e){for(let t of this.scrollTargets)t.removeEventListener("scroll",this.onScroll);for(let t of this.scrollTargets=e)t.addEventListener("scroll",this.onScroll)}}ignore(t){if(!this.active)return t();try{return this.stop(),t()}finally{this.start(),this.clear()}}start(){this.active||(this.observer.observe(this.dom,Yr),this.dom.ownerDocument.addEventListener("selectionchange",this.onSelectionChange),Xr&&this.dom.addEventListener("DOMCharacterDataModified",this.onCharData),this.active=!0)}stop(){this.active&&(this.active=!1,this.observer.disconnect(),this.dom.ownerDocument.removeEventListener("selectionchange",this.onSelectionChange),Xr&&this.dom.removeEventListener("DOMCharacterDataModified",this.onCharData))}clearSelection(){this.ignoreSelection.set(this.selectionRange)}clear(){this.observer.takeRecords(),this.queue.length=0,this.clearSelection()}flushSoon(){this.delayedFlush<0&&(this.delayedFlush=window.setTimeout((()=>{this.delayedFlush=-1,this.flush()}),20))}forceFlush(){this.delayedFlush>=0&&(window.clearTimeout(this.delayedFlush),this.delayedFlush=-1,this.flush())}flush(){if(this.delayedFlush>=0)return;this.lastFlush=Date.now();let t=this.queue;for(let e of this.observer.takeRecords())t.push(e);t.length&&(this.queue=[]);let e=this.selectionRange,i=!this.ignoreSelection.eq(e)&&Gs(this.dom,e);if(0==t.length&&!i)return;let s=-1,n=-1,o=!1;for(let e of t){let t=this.readMutation(e);t&&(t.typeOver&&(o=!0),-1==s?({from:s,to:n}=t):(s=Math.min(t.from,s),n=Math.max(t.to,n)))}let r=this.view.state;(s>-1||i)&&this.onChange(s,n,o),this.view.state==r&&(this.view.docView.dirty&&(this.ignore((()=>this.view.docView.sync())),this.view.docView.dirty=0),i&&this.view.docView.updateSelection()),this.clearSelection()}readMutation(t){let e=this.view.docView.nearest(t.target);if(!e||e.ignoreMutation(t))return null;if(e.markDirty(),"childList"==t.type){let i=ta(e,t.previousSibling||t.target.previousSibling,-1),s=ta(e,t.nextSibling||t.target.nextSibling,1);return{from:i?e.posAfter(i):e.posAtStart,to:s?e.posBefore(s):e.posAtEnd,typeOver:!1}}return{from:e.posAtStart,to:e.posAtEnd,typeOver:t.target.nodeValue==t.oldValue}}destroy(){this.stop(),this.intersection&&this.intersection.disconnect();for(let t of this.scrollTargets)t.removeEventListener("scroll",this.onScroll);window.removeEventListener("scroll",this.onScroll),clearTimeout(this.parentCheck)}}function ta(t,e,i){for(;e;){let s=pn.get(e);if(s&&s.parent==t)return s;let n=e.parentNode;e=n!=t.dom?n:i>0?e.nextSibling:e.previousSibling}return null}function ea(t,e,i,s){let n,o,r,a=t.state.selection.main;if(e>-1&&(r=t.docView.domBoundsAround(e,i,0))){let{from:e,to:i}=r,s=t.docView.impreciseHead||t.docView.impreciseAnchor?[]:function(t){let e=[];if(t.root.activeElement!=t.contentDOM)return e;let{anchorNode:i,anchorOffset:s,focusNode:n,focusOffset:o}=t.observer.selectionRange;i&&(e.push(new na(i,s)),n==i&&o==s||e.push(new na(n,o)));return e}(t),l=new ia(s,t);l.readRange(r.startDOM,r.endDOM),o=function(t,e){if(0==t.length)return null;let i=t[0].pos,s=2==t.length?t[1].pos:i;return i>-1&&s>-1?ki.single(i+e,s+e):null}(s,e);let h=a.from,c=null;(8===t.inputState.lastKeyCode&&t.inputState.lastKeyTime>Date.now()-100||Mn.android&&l.text.length<i-e)&&(h=a.to,c="end");let d=function(t,e,i,s){let n=Math.min(t.length,e.length),o=0;for(;o<n&&t.charCodeAt(o)==e.charCodeAt(o);)o++;if(o==n&&t.length==e.length)return null;let r=t.length,a=e.length;for(;r>0&&a>0&&t.charCodeAt(r-1)==e.charCodeAt(a-1);)r--,a--;if("end"==s){i-=r+Math.max(0,o-Math.min(r,a))-o}if(r<o&&t.length<e.length){o-=i<=o&&i>=r?o-i:0,a=o+(a-r),r=o}else if(a<o){o-=i<=o&&i>=a?o-i:0,r=o+(r-a),a=o}return{from:o,toA:r,toB:a}}(t.state.sliceDoc(e,i),l.text,h-e,c);d&&(n={from:e+d.from,to:e+d.toA,insert:t.state.toText(l.text.slice(d.from,d.toB))})}else if(t.hasFocus||!t.state.facet(ho)){let e=t.observer.selectionRange,{impreciseHead:i,impreciseAnchor:s}=t.docView,n=i&&i.node==e.focusNode&&i.offset==e.focusOffset||!qs(t.contentDOM,e.focusNode)?t.state.selection.main.head:t.docView.posFromDOM(e.focusNode,e.focusOffset),r=s&&s.node==e.anchorNode&&s.offset==e.anchorOffset||!qs(t.contentDOM,e.anchorNode)?t.state.selection.main.anchor:t.docView.posFromDOM(e.anchorNode,e.anchorOffset);n==a.head&&r==a.anchor||(o=ki.single(r,n))}if(n||o)if(!n&&s&&!a.empty&&o&&o.main.empty?n={from:a.from,to:a.to,insert:t.state.doc.slice(a.from,a.to)}:n&&n.from>=a.from&&n.to<=a.to&&(n.from!=a.from||n.to!=a.to)&&a.to-a.from-(n.to-n.from)<=4&&(n={from:a.from,to:a.to,insert:t.state.doc.slice(a.from,n.from).append(n.insert).append(t.state.doc.slice(n.to,a.to))}),n){let e=t.state;if(Mn.android&&(n.from==a.from&&n.to==a.to&&1==n.insert.length&&2==n.insert.lines&&ln(t.contentDOM,"Enter",13)||n.from==a.from-1&&n.to==a.to&&0==n.insert.length&&ln(t.contentDOM,"Backspace",8)||n.from==a.from&&n.to==a.to+1&&0==n.insert.length&&ln(t.contentDOM,"Delete",46))||Mn.ios&&t.inputState.flushIOSKey(t))return;let i,s=n.insert.toString();if(t.state.facet(ao).some((e=>e(t,n.from,n.to,s))))return;if(t.inputState.composing>=0&&t.inputState.composing++,n.from>=a.from&&n.to<=a.to&&n.to-n.from>=(a.to-a.from)/3&&(!o||o.main.empty&&o.main.from==n.from+n.insert.length)){let s=a.from<n.from?e.sliceDoc(a.from,n.from):"",o=a.to>n.to?e.sliceDoc(n.to,a.to):"";i=e.replaceSelection(t.state.toText(s+n.insert.sliceString(0,void 0,t.state.lineBreak)+o))}else{let t=e.changes(n);i={changes:t,selection:o&&!e.selection.main.eq(o.main)&&o.main.to<=t.newLength?e.selection.replaceRange(o.main):void 0}}t.dispatch(i,{scrollIntoView:!0,annotations:ts.userEvent.of("input")})}else if(o&&!o.main.eq(a)){let e,i=!1;t.inputState.lastSelectionTime>Date.now()-50&&("keyboardselection"==t.inputState.lastSelectionOrigin?i=!0:e=ts.userEvent.of(t.inputState.lastSelectionOrigin)),t.dispatch({selection:o,scrollIntoView:i,annotations:e})}}class ia{constructor(t,e){this.points=t,this.view=e,this.text="",this.lineBreak=e.state.lineBreak}readRange(t,e){if(!t)return;let i=t.parentNode;for(let s=t;;){this.findPointBefore(i,s),this.readNode(s);let t=s.nextSibling;if(t==e)break;let n=pn.get(s),o=pn.get(t);((n?n.breakAfter:sa(s))||(o?o.breakAfter:sa(t))&&("BR"!=s.nodeName||s.cmIgnore))&&(this.text+=this.lineBreak),s=t}this.findPointBefore(i,e)}readNode(t){if(t.cmIgnore)return;let e,i=pn.get(t),s=i&&i.overrideDOMText;null!=s?e=s.sliceString(0,void 0,this.lineBreak):3==t.nodeType?e=t.nodeValue:"BR"==t.nodeName?e=t.nextSibling?this.lineBreak:"":1==t.nodeType&&this.readRange(t.firstChild,null),null!=e&&(this.findPointIn(t,e.length),this.text+=e,Mn.chrome&&13==this.view.inputState.lastKeyCode&&!t.nextSibling&&/\n\n$/.test(this.text)&&(this.text=this.text.slice(0,-1)))}findPointBefore(t,e){for(let i of this.points)i.node==t&&t.childNodes[i.offset]==e&&(i.pos=this.text.length)}findPointIn(t,e){for(let i of this.points)i.node==t&&(i.pos=this.text.length+Math.min(i.offset,e))}}function sa(t){return 1==t.nodeType&&/^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(t.nodeName)}class na{constructor(t,e){this.node=t,this.offset=e,this.pos=-1}}class oa{constructor(t={}){this.plugins=[],this.editorAttrs={},this.contentAttrs={},this.bidiCache=[],this.updateState=2,this.measureScheduled=-1,this.measureRequests=[],this.contentDOM=document.createElement("div"),this.scrollDOM=document.createElement("div"),this.scrollDOM.tabIndex=-1,this.scrollDOM.className="cm-scroller",this.scrollDOM.appendChild(this.contentDOM),this.announceDOM=document.createElement("div"),this.announceDOM.style.cssText="position: absolute; top: -10000px",this.announceDOM.setAttribute("aria-live","polite"),this.dom=document.createElement("div"),this.dom.appendChild(this.announceDOM),this.dom.appendChild(this.scrollDOM),this._dispatch=t.dispatch||(t=>this.update([t])),this.dispatch=this.dispatch.bind(this),this.root=t.root||document,this.viewState=new Ir(t.state||ds.create()),this.plugins=this.state.facet(fo).map((t=>new vo(t).update(this))),this.observer=new Zr(this,((t,e,i)=>{ea(this,t,e,i)}),(t=>{this.inputState.runScrollHandlers(this,t),this.observer.intersecting&&this.measure()})),this.inputState=new tr(this),this.docView=new Ao(this),this.mountStyles(),this.updateAttrs(),this.updateState=0,window.addEventListener("resize",(()=>{-1==la&&(la=setTimeout(ha,50))})),this.requestMeasure(),t.parent&&t.parent.appendChild(this.dom)}get state(){return this.viewState.state}get viewport(){return this.viewState.viewport}get visibleRanges(){return this.viewState.visibleRanges}get inView(){return this.viewState.inView}get composing(){return this.inputState.composing>0}dispatch(...t){this._dispatch(1==t.length&&t[0]instanceof ts?t[0]:this.state.update(...t))}update(t){if(0!=this.updateState)throw new Error("Calls to EditorView.update are not allowed while an update is in progress");let e,i,s=!1,n=this.state;for(let e of t){if(e.startState!=n)throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");n=e.state}if(n.facet(ds.phrases)!=this.state.facet(ds.phrases))return this.setState(n);e=new So(this,n,t);try{this.updateState=2,i=t.some((t=>t.scrollIntoView))?n.selection.main:null,this.viewState.update(e,i),this.bidiCache=da.update(this.bidiCache,e.changes),e.empty||(this.updatePlugins(e),this.inputState.update(e)),s=this.docView.update(e),this.state.facet(yo)!=this.styleModules&&this.mountStyles(),this.updateAttrs(),this.showAnnouncements(t)}finally{this.updateState=0}if((s||i||this.viewState.mustEnforceCursorAssoc)&&this.requestMeasure(),!e.empty)for(let t of this.state.facet(ro))t(e)}setState(t){if(0!=this.updateState)throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");this.updateState=2;try{for(let t of this.plugins)t.destroy(this);this.viewState=new Ir(t),this.plugins=t.facet(fo).map((t=>new vo(t).update(this))),this.docView=new Ao(this),this.inputState.ensureHandlers(this),this.mountStyles(),this.updateAttrs(),this.bidiCache=[]}finally{this.updateState=0}this.requestMeasure()}updatePlugins(t){let e=t.startState.facet(fo),i=t.state.facet(fo);if(e!=i){let s=[];for(let n of i){let i=e.indexOf(n);if(i<0)s.push(new vo(n));else{let e=this.plugins[i];e.mustUpdate=t,s.push(e)}}for(let e of this.plugins)e.mustUpdate!=t&&e.destroy(this);this.plugins=s,this.inputState.ensureHandlers(this)}else for(let e of this.plugins)e.mustUpdate=t;for(let t=0;t<this.plugins.length;t++)this.plugins[t]=this.plugins[t].update(this)}measure(t=!0){this.measureScheduled>-1&&cancelAnimationFrame(this.measureScheduled),this.measureScheduled=-1,t&&this.observer.flush();let e=null;try{for(let t=0;;t++){this.updateState=1;let i=this.viewState.measure(this.docView,t>0),s=this.measureRequests;if(!i&&!s.length&&null==this.viewState.scrollTo)break;if(this.measureRequests=[],t>5){console.warn("Viewport failed to stabilize");break}let n=s.map((t=>{try{return t.read(this)}catch(t){return lo(this.state,t),ca}})),o=new So(this,this.state);o.flags|=i,e?e.flags|=i:e=o,this.updateState=2,o.empty||(this.updatePlugins(o),this.inputState.update(o)),this.updateAttrs(),i&&this.docView.update(o);for(let t=0;t<s.length;t++)if(n[t]!=ca)try{s[t].write(n[t],this)}catch(t){lo(this.state,t)}if(this.viewState.scrollTo&&(this.docView.scrollPosIntoView(this.viewState.scrollTo.head,this.viewState.scrollTo.assoc),this.viewState.scrollTo=null),!(4&i)&&0==this.measureRequests.length)break}}finally{this.updateState=0}if(this.measureScheduled=-1,e&&!e.empty)for(let t of this.state.facet(ro))t(e)}get themeClasses(){return Hr+" "+(this.state.facet(Vr)?Gr:qr)+" "+this.state.facet(jr)}updateAttrs(){let t=Fn(this.state.facet(wo),{class:"cm-editor cm-wrap"+(this.hasFocus?" cm-focused ":" ")+this.themeClasses});zn(this.dom,this.editorAttrs,t),this.editorAttrs=t;let e=Fn(this.state.facet(bo),{spellcheck:"false",autocorrect:"off",autocapitalize:"off",contenteditable:this.state.facet(ho)?cn()?"plaintext-only":"true":"false",class:"cm-content",style:`${Mn.tabSize}: ${this.state.tabSize}`,role:"textbox","aria-multiline":"true"});zn(this.contentDOM,this.contentAttrs,e),this.contentAttrs=e}showAnnouncements(t){let e=!0;for(let i of t)for(let t of i.effects)if(t.is(oa.announce)){e&&(this.announceDOM.textContent=""),e=!1,this.announceDOM.appendChild(document.createElement("div")).textContent=t.value}}mountStyles(){this.styleModules=this.state.facet(yo),gs.mount(this.root,this.styleModules.concat(Kr).reverse())}readMeasured(){if(2==this.updateState)throw new Error("Reading the editor layout isn't allowed during an update");0==this.updateState&&this.measureScheduled>-1&&this.measure(!1)}requestMeasure(t){if(this.measureScheduled<0&&(this.measureScheduled=requestAnimationFrame((()=>this.measure()))),t){if(null!=t.key)for(let e=0;e<this.measureRequests.length;e++)if(this.measureRequests[e].key===t.key)return void(this.measureRequests[e]=t);this.measureRequests.push(t)}}pluginField(t){let e=[];for(let i of this.plugins)i.update(this).takeField(t,e);return e}plugin(t){for(let e of this.plugins)if(e.spec==t)return e.update(this).value;return null}blockAtHeight(t,e){return this.readMeasured(),this.viewState.blockAtHeight(t,aa(e,this.contentDOM))}visualLineAtHeight(t,e){return this.readMeasured(),this.viewState.lineAtHeight(t,aa(e,this.contentDOM))}viewportLines(t,e){let{from:i,to:s}=this.viewport;this.viewState.forEachLine(i,s,t,aa(e,this.contentDOM))}visualLineAt(t,e=0){return this.viewState.lineAt(t,e)}get contentHeight(){return this.viewState.contentHeight}moveByChar(t,e,i){return Zo(this,t,Xo(this,t,e,i))}moveByGroup(t,e){return Zo(this,t,Xo(this,t,e,(e=>function(t,e,i){let s=t.state.charCategorizer(e),n=s(i);return t=>{let e=s(t);return n==as.Space&&(n=e),n==e}}(this,t.head,e))))}moveToLineBoundary(t,e,i=!0){return function(t,e,i,s){let n=t.state.doc.lineAt(e.head),o=s&&t.lineWrapping?t.coordsAtPos(e.assoc<0&&e.head>n.from?e.head-1:e.head):null;if(o){let e=t.dom.getBoundingClientRect(),s=t.posAtCoords({x:i==(t.textDirection==To.LTR)?e.right-1:e.left+1,y:(o.top+o.bottom)/2});if(null!=s)return ki.cursor(s,i?-1:1)}let r=Kn.find(t.docView,e.head),a=r?i?r.posAtEnd:r.posAtStart:i?n.to:n.from;return ki.cursor(a,i?-1:1)}(this,t,e,i)}moveVertically(t,e,i){return Zo(this,t,function(t,e,i,s){let n=e.head,o=i?1:-1;if(n==(i?t.state.doc.length:0))return ki.cursor(n);let r,a=e.goalColumn,l=t.contentDOM.getBoundingClientRect(),h=t.coordsAtPos(n);if(h)null==a&&(a=h.left-l.left),r=o<0?h.top:h.bottom;else{let e=t.viewState.lineAt(n,t.dom.getBoundingClientRect().top);null==a&&(a=Math.min(l.right-l.left,t.defaultCharacterWidth*(n-e.from))),r=o<0?e.top:e.bottom}let c=l.left+a,d=null!=s?s:t.defaultLineHeight>>1;for(let e=0;;e+=10){let i=r+(d+e)*o,s=Ko(t,{x:c,y:i},!1,o);if(i<l.top||i>l.bottom||(o<0?s<n:s>n))return ki.cursor(s,void 0,void 0,a)}}(this,t,e,i))}scrollPosIntoView(t){this.viewState.scrollTo=ki.cursor(t),this.requestMeasure()}domAtPos(t){return this.docView.domAtPos(t)}posAtDOM(t,e=0){return this.docView.posFromDOM(t,e)}posAtCoords(t,e=!0){return this.readMeasured(),Ko(this,t,e)}coordsAtPos(t,e=1){this.readMeasured();let i=this.docView.coordsAt(t,e);if(!i||i.left==i.right)return i;let s=this.state.doc.lineAt(t),n=this.bidiSpans(s);return tn(i,n[_o.find(n,t-s.from,-1,e)].dir==To.LTR==e>0)}get defaultCharacterWidth(){return this.viewState.heightOracle.charWidth}get defaultLineHeight(){return this.viewState.heightOracle.lineHeight}get textDirection(){return this.viewState.heightOracle.direction}get lineWrapping(){return this.viewState.heightOracle.lineWrapping}bidiSpans(t){if(t.length>ra)return Uo(t.length);let e=this.textDirection;for(let i of this.bidiCache)if(i.from==t.from&&i.dir==e)return i.order;let i=function(t,e){let i=t.length,s=e==Po?1:2,n=e==Po?2:1;if(!t||1==s&&!Bo.test(t))return Uo(i);for(let e=0,n=s,r=s;e<i;e++){let i=(o=t.charCodeAt(e))<=247?Ro[o]:1424<=o&&o<=1524?2:1536<=o&&o<=1785?Lo[o-1536]:1774<=o&&o<=2220?4:8192<=o&&o<=8203||8204==o?256:1;512==i?i=n:8==i&&4==r&&(i=16),Fo[e]=4==i?2:i,7&i&&(r=i),n=i}var o;for(let t=0,e=s,n=s;t<i;t++){let s=Fo[t];if(128==s)t<i-1&&e==Fo[t+1]&&24&e?s=Fo[t]=e:Fo[t]=256;else if(64==s){let s=t+1;for(;s<i&&64==Fo[s];)s++;let o=t&&8==e||s<i&&8==Fo[s]?1==n?1:8:256;for(let e=t;e<s;e++)Fo[e]=o;t=s-1}else 8==s&&1==n&&(Fo[t]=1);e=s,7&s&&(n=s)}for(let e,o,r,a=0,l=0,h=0;a<i;a++)if(o=Io[e=t.charCodeAt(a)])if(o<0){for(let t=l-3;t>=0;t-=3)if(No[t+1]==-o){let e=No[t+2],i=2&e?s:4&e?1&e?n:s:0;i&&(Fo[a]=Fo[No[t]]=i),l=t;break}}else{if(189==No.length)break;No[l++]=a,No[l++]=e,No[l++]=h}else if(2==(r=Fo[a])||1==r){let t=r==s;h=t?0:1;for(let e=l-3;e>=0;e-=3){let i=No[e+2];if(2&i)break;if(t)No[e+2]|=2;else{if(4&i)break;No[e+2]|=4}}}for(let t=0;t<i;t++)if(256==Fo[t]){let e=t+1;for(;e<i&&256==Fo[e];)e++;let n=1==(t?Fo[t-1]:s),o=n==(1==(e<i?Fo[e]:s))?n?1:2:s;for(let i=t;i<e;i++)Fo[i]=o;t=e-1}let r=[];if(1==s)for(let t=0;t<i;){let e=t,s=1!=Fo[t++];for(;t<i&&s==(1!=Fo[t]);)t++;if(s)for(let i=t;i>e;){let t=i,s=2!=Fo[--i];for(;i>e&&s==(2!=Fo[i-1]);)i--;r.push(new _o(i,t,s?2:1))}else r.push(new _o(e,t,0))}else for(let t=0;t<i;){let e=t,s=2==Fo[t++];for(;t<i&&s==(2==Fo[t]);)t++;r.push(new _o(e,t,s?1:2))}return r}(t.text,this.textDirection);return this.bidiCache.push(new da(t.from,t.to,e,i)),i}get hasFocus(){var t;return(document.hasFocus()||Mn.safari&&(null===(t=this.inputState)||void 0===t?void 0:t.lastContextMenu)>Date.now()-3e4)&&this.root.activeElement==this.contentDOM}focus(){this.observer.ignore((()=>{rn(this.contentDOM),this.docView.updateSelection()}))}destroy(){for(let t of this.plugins)t.destroy(this);this.inputState.destroy(),this.dom.remove(),this.observer.destroy(),this.measureScheduled>-1&&cancelAnimationFrame(this.measureScheduled)}static domEventHandlers(t){return mo.define((()=>({})),{eventHandlers:t})}static theme(t,e){let i=gs.newName(),s=[jr.of(i),yo.of(Jr(`.${i}`,t))];return e&&e.dark&&s.push(Vr.of(!0)),s}static baseTheme(t){return Bi.fallback(yo.of(Jr("."+Hr,t,Qr)))}}oa.styleModule=yo,oa.inputHandler=ao,oa.exceptionSink=oo,oa.updateListener=ro,oa.editable=ho,oa.mouseSelectionStyle=no,oa.dragMovesSelection=so,oa.clickAddsSelectionRange=io,oa.decorations=xo,oa.contentAttributes=bo,oa.editorAttributes=wo,oa.lineWrapping=oa.contentAttributes.of({class:"cm-lineWrapping"}),oa.announce=Zi.define();const ra=4096;function aa(t,e){return null==t?e.getBoundingClientRect().top:t}let la=-1;function ha(){la=-1;let t=document.querySelectorAll(".cm-content");for(let e=0;e<t.length;e++){let i=pn.get(t[e]);i&&i.editorView.requestMeasure()}}const ca={};class da{constructor(t,e,i,s){this.from=t,this.to=e,this.dir=i,this.order=s}static update(t,e){if(e.empty)return t;let i=[],s=t.length?t[t.length-1].dir:To.LTR;for(let n=Math.max(0,t.length-10);n<t.length;n++){let o=t[n];o.dir!=s||e.touchesRange(o.from,o.to)||i.push(new da(e.mapPos(o.from,1),e.mapPos(o.to,-1),o.dir,o.order))}return i}}const ua="undefined"==typeof navigator?"key":/Mac/.test(navigator.platform)?"mac":/Win/.test(navigator.platform)?"win":/Linux|X11/.test(navigator.platform)?"linux":"key";function pa(t,e,i){return e.altKey&&(t="Alt-"+t),e.ctrlKey&&(t="Ctrl-"+t),e.metaKey&&(t="Meta-"+t),!1!==i&&e.shiftKey&&(t="Shift-"+t),t}const fa=oa.domEventHandlers({keydown:(t,e)=>ba(va(e.state),t,e,"editor")}),ma=Oi.define({enables:fa}),ga=new WeakMap;function va(t){let e=t.facet(ma),i=ga.get(e);return i||ga.set(e,i=function(t,e=ua){let i=Object.create(null),s=Object.create(null),n=(t,e)=>{let i=s[t];if(null==i)s[t]=e;else if(i!=e)throw new Error("Key binding "+t+" is used both as a regular binding and as a multi-stroke prefix")},o=(t,s,o,r)=>{let a=i[t]||(i[t]=Object.create(null)),l=s.split(/ (?!$)/).map((t=>function(t,e){const i=t.split(/-(?!$)/);let s,n,o,r,a=i[i.length-1];"Space"==a&&(a=" ");for(let t=0;t<i.length-1;++t){const a=i[t];if(/^(cmd|meta|m)$/i.test(a))r=!0;else if(/^a(lt)?$/i.test(a))s=!0;else if(/^(c|ctrl|control)$/i.test(a))n=!0;else if(/^s(hift)?$/i.test(a))o=!0;else{if(!/^mod$/i.test(a))throw new Error("Unrecognized modifier name: "+a);"mac"==e?r=!0:n=!0}}return s&&(a="Alt-"+a),n&&(a="Ctrl-"+a),r&&(a="Meta-"+a),o&&(a="Shift-"+a),a}(t,e)));for(let e=1;e<l.length;e++){let i=l.slice(0,e).join(" ");n(i,!0),a[i]||(a[i]={preventDefault:!0,commands:[e=>{let s=wa={view:e,prefix:i,scope:t};return setTimeout((()=>{wa==s&&(wa=null)}),4e3),!0}]})}let h=l.join(" ");n(h,!1);let c=a[h]||(a[h]={preventDefault:!1,commands:[]});c.commands.push(o),r&&(c.preventDefault=!0)};for(let i of t){let t=i[e]||i.key;if(t)for(let e of i.scope?i.scope.split(" "):["editor"])o(e,t,i.run,i.preventDefault),i.shift&&o(e,"Shift-"+t,i.shift,i.preventDefault)}return i}(e.reduce(((t,e)=>t.concat(e)),[]))),i}let wa=null;function ba(t,e,i,s){let n=function(t){var e=!(Ws&&(t.ctrlKey||t.altKey||t.metaKey)||(_s||zs)&&t.shiftKey&&t.key&&1==t.key.length)&&t.key||(t.shiftKey?Ns:Is)[t.keyCode]||t.key||"Unidentified";return"Esc"==e&&(e="Escape"),"Del"==e&&(e="Delete"),"Left"==e&&(e="ArrowLeft"),"Up"==e&&(e="ArrowUp"),"Right"==e&&(e="ArrowRight"),"Down"==e&&(e="ArrowDown"),e}(e),o=1==n.length&&" "!=n,r="",a=!1;wa&&wa.view==i&&wa.scope==s&&(r=wa.prefix+" ",(a=er.indexOf(e.keyCode)<0)&&(wa=null));let l,h=t=>{if(t){for(let e of t.commands)if(e(i))return!0;t.preventDefault&&(a=!0)}return!1},c=t[s];if(c){if(h(c[r+pa(n,e,!o)]))return!0;if(o&&(e.shiftKey||e.altKey||e.metaKey)&&(l=Is[e.keyCode])&&l!=n){if(h(c[r+pa(l,e,!0)]))return!0}else if(o&&e.shiftKey&&h(c[r+pa(n,e,!0)]))return!0}return a}const xa=!Mn.ios,ya=Oi.define({combine:t=>us(t,{cursorBlinkRate:1200,drawRangeCursor:!0},{cursorBlinkRate:(t,e)=>Math.min(t,e),drawRangeCursor:(t,e)=>t||e})});function ka(t={}){return[ya.of(t),Aa,Oa]}class Sa{constructor(t,e,i,s,n){this.left=t,this.top=e,this.width=i,this.height=s,this.className=n}draw(){let t=document.createElement("div");return t.className=this.className,this.adjust(t),t}adjust(t){t.style.left=this.left+"px",t.style.top=this.top+"px",this.width>=0&&(t.style.width=this.width+"px"),t.style.height=this.height+"px"}eq(t){return this.left==t.left&&this.top==t.top&&this.width==t.width&&this.height==t.height&&this.className==t.className}}const Aa=mo.fromClass(class{constructor(t){this.view=t,this.rangePieces=[],this.cursors=[],this.measureReq={read:this.readPos.bind(this),write:this.drawSel.bind(this)},this.selectionLayer=t.scrollDOM.appendChild(document.createElement("div")),this.selectionLayer.className="cm-selectionLayer",this.selectionLayer.setAttribute("aria-hidden","true"),this.cursorLayer=t.scrollDOM.appendChild(document.createElement("div")),this.cursorLayer.className="cm-cursorLayer",this.cursorLayer.setAttribute("aria-hidden","true"),t.requestMeasure(this.measureReq),this.setBlinkRate()}setBlinkRate(){this.cursorLayer.style.animationDuration=this.view.state.facet(ya).cursorBlinkRate+"ms"}update(t){let e=t.startState.facet(ya)!=t.state.facet(ya);(e||t.selectionSet||t.geometryChanged||t.viewportChanged)&&this.view.requestMeasure(this.measureReq),t.transactions.some((t=>t.scrollIntoView))&&(this.cursorLayer.style.animationName="cm-blink"==this.cursorLayer.style.animationName?"cm-blink2":"cm-blink"),e&&this.setBlinkRate()}readPos(){let{state:t}=this.view,e=t.facet(ya),i=t.selection.ranges.map((t=>t.empty?[]:function(t,e){if(e.to<=t.viewport.from||e.from>=t.viewport.to)return[];let i=Math.max(e.from,t.viewport.from),s=Math.min(e.to,t.viewport.to),n=t.textDirection==To.LTR,o=t.contentDOM,r=o.getBoundingClientRect(),a=Ma(t),l=window.getComputedStyle(o.firstChild),h=r.left+parseInt(l.paddingLeft),c=r.right-parseInt(l.paddingRight),d=Ta(t,i),u=Ta(t,s),p=d.type==jn.Text?d:null,f=u.type==jn.Text?u:null;t.lineWrapping&&(p&&(p=$a(t,i,p)),f&&(f=$a(t,s,f)));if(p&&f&&p.from==f.from)return g(v(e.from,e.to,p));{let i=p?v(e.from,null,p):w(d,!1),s=f?v(null,e.to,f):w(u,!0),n=[];return(p||d).to<(f||u).from-1?n.push(m(h,i.bottom,c,s.top)):i.bottom<s.top&&Ta(t,(i.bottom+s.top)/2).type==jn.Text&&(i.bottom=s.top=(i.bottom+s.top)/2),g(i).concat(n).concat(g(s))}function m(t,e,i,s){return new Sa(t-a.left,e-a.top,i-t,s-e,"cm-selectionBackground")}function g({top:t,bottom:e,horizontal:i}){let s=[];for(let n=0;n<i.length;n+=2)s.push(m(i[n],t,i[n+1],e));return s}function v(e,i,s){let o=1e9,r=-1e9,a=[];function l(e,i,l,d,u){let p=t.coordsAtPos(e,e==s.to?-2:2),f=t.coordsAtPos(l,l==s.from?2:-2);o=Math.min(p.top,f.top,o),r=Math.max(p.bottom,f.bottom,r),u==To.LTR?a.push(n&&i?h:p.left,n&&d?c:f.right):a.push(!n&&d?h:f.left,!n&&i?c:p.right)}let d=null!=e?e:s.from,u=null!=i?i:s.to;for(let s of t.visibleRanges)if(s.to>d&&s.from<u)for(let n=Math.max(s.from,d),o=Math.min(s.to,u);;){let s=t.state.doc.lineAt(n);for(let r of t.bidiSpans(s)){let t=r.from+s.from,a=r.to+s.from;if(t>=o)break;a>n&&l(Math.max(t,n),null==e&&t<=d,Math.min(a,o),null==i&&a>=u,r.dir)}if(n=s.to+1,n>=o)break}return 0==a.length&&l(d,null==e,u,null==i,t.textDirection),{top:o,bottom:r,horizontal:a}}function w(t,e){let i=r.top+(e?t.top:t.bottom);return{top:i,bottom:i,horizontal:[]}}}(this.view,t))).reduce(((t,e)=>t.concat(e))),s=[];for(let i of t.selection.ranges){let n=i==t.selection.main;if(i.empty?!n||xa:e.drawRangeCursor){let t=Pa(this.view,i,n);t&&s.push(t)}}return{rangePieces:i,cursors:s}}drawSel({rangePieces:t,cursors:e}){if(t.length!=this.rangePieces.length||t.some(((t,e)=>!t.eq(this.rangePieces[e])))){this.selectionLayer.textContent="";for(let e of t)this.selectionLayer.appendChild(e.draw());this.rangePieces=t}if(e.length!=this.cursors.length||e.some(((t,e)=>!t.eq(this.cursors[e])))){let t=this.cursorLayer.children;if(t.length!==e.length){this.cursorLayer.textContent="";for(const t of e)this.cursorLayer.appendChild(t.draw())}else e.forEach(((e,i)=>e.adjust(t[i])));this.cursors=e}}destroy(){this.selectionLayer.remove(),this.cursorLayer.remove()}}),Ca={".cm-line":{"& ::selection":{backgroundColor:"transparent !important"},"&::selection":{backgroundColor:"transparent !important"}}};xa&&(Ca[".cm-line"].caretColor="transparent !important");const Oa=Bi.override(oa.theme(Ca));function Ma(t){let e=t.scrollDOM.getBoundingClientRect();return{left:(t.textDirection==To.LTR?e.left:e.right-t.scrollDOM.clientWidth)-t.scrollDOM.scrollLeft,top:e.top-t.scrollDOM.scrollTop}}function $a(t,e,i){let s=ki.cursor(e);return{from:Math.max(i.from,t.moveToLineBoundary(s,!1,!0).from),to:Math.min(i.to,t.moveToLineBoundary(s,!0,!0).from),type:jn.Text}}function Ta(t,e){let i=t.visualLineAt(e);if(Array.isArray(i.type))for(let t of i.type)if(t.to>e||t.to==e&&(t.to==i.to||t.type==jn.Text))return t;return i}function Pa(t,e,i){let s=t.coordsAtPos(e.head,e.assoc||1);if(!s)return null;let n=Ma(t);return new Sa(s.left-n.left,s.top-n.top,-1,s.bottom-s.top,i?"cm-cursor cm-cursor-primary":"cm-cursor cm-cursor-secondary")}function Da(t,e,i,s,n){e.lastIndex=0;for(let o,r=t.iterRange(i,s),a=i;!r.next().done;a+=r.value.length)if(!r.lineBreak)for(;o=e.exec(r.value);)n(a+o.index,a+o.index+o[0].length,o)}class Ea{constructor(t){let{regexp:e,decoration:i,boundary:s}=t;if(!e.global)throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");this.regexp=e,this.getDeco="function"==typeof i?i:()=>i,this.boundary=s}createDeco(t){let e=new As;for(let{from:i,to:s}of t.visibleRanges)Da(t.state.doc,this.regexp,i,s,((i,s,n)=>e.add(i,s,this.getDeco(n,t,i))));return e.finish()}updateDeco(t,e){let i=1e9,s=-1;return t.docChanged&&t.changes.iterChanges(((e,n,o,r)=>{r>t.view.viewport.from&&o<t.view.viewport.to&&(i=Math.min(o,i),s=Math.max(r,s))})),t.viewportChanged||s-i>1e3?this.createDeco(t.view):s>-1?this.updateRange(t.view,e.map(t.changes),i,s):e}updateRange(t,e,i,s){for(let n of t.visibleRanges){let o=Math.max(n.from,i),r=Math.min(n.to,s);if(r>o){let i=t.state.doc.lineAt(o),s=i.to<r?t.state.doc.lineAt(r):i,a=Math.max(n.from,i.from),l=Math.min(n.to,s.to);if(this.boundary){for(;o>i.from;o--)if(this.boundary.test(i.text[o-1-i.from])){a=o;break}for(;r<s.to;r++)if(this.boundary.test(s.text[r-s.from])){l=r;break}}let h,c=[];if(i==s)for(this.regexp.lastIndex=a-i.from;(h=this.regexp.exec(i.text))&&h.index<l-i.from;){let e=h.index+i.from;c.push(this.getDeco(h,t,e).range(e,e+h[0].length))}else Da(t.state.doc,this.regexp,a,l,((e,i,s)=>c.push(this.getDeco(s,t,e).range(e,i))));e=e.update({filterFrom:a,filterTo:l,filter:()=>!1,add:c})}}return e}}const Ra=null!=/x/.unicode?"gu":"g",La=new RegExp("[\0-\b\n--­؜​‎‏\u2028\u2029\ufeff￹-￼]",Ra),Ia={0:"null",7:"bell",8:"backspace",10:"newline",11:"vertical tab",13:"carriage return",27:"escape",8203:"zero width space",8204:"zero width non-joiner",8205:"zero width joiner",8206:"left-to-right mark",8207:"right-to-left mark",8232:"line separator",8233:"paragraph separator",65279:"zero width no-break space",65532:"object replacement"};let Na=null;const Ba=Oi.define({combine(t){let e=us(t,{render:null,specialChars:La,addSpecialChars:null});return(e.replaceTabs=!function(){var t;if(null==Na&&"undefined"!=typeof document&&document.body){let e=document.body.style;Na=null!=(null!==(t=e.tabSize)&&void 0!==t?t:e.MozTabSize)}return Na||!1}())&&(e.specialChars=new RegExp("\t|"+e.specialChars.source,Ra)),e.addSpecialChars&&(e.specialChars=new RegExp(e.specialChars.source+"|"+e.addSpecialChars.source,Ra)),e}});function _a(t={}){return[Ba.of(t),Fa||(Fa=mo.fromClass(class{constructor(t){this.view=t,this.decorations=Vn.none,this.decorationCache=Object.create(null),this.decorator=this.makeDecorator(t.state.facet(Ba)),this.decorations=this.decorator.createDeco(t)}makeDecorator(t){return new Ea({regexp:t.specialChars,decoration:(e,i,s)=>{let{doc:n}=i.state,o=Xe(e[0],0);if(9==o){let t=n.lineAt(s),e=i.state.tabSize,o=ei(n.sliceString(t.from,s),0,e);return Vn.replace({widget:new za((e-o%e)*this.view.defaultCharacterWidth)})}return this.decorationCache[o]||(this.decorationCache[o]=Vn.replace({widget:new Ua(t,o)}))},boundary:t.replaceTabs?void 0:/[^]/})}update(t){let e=t.state.facet(Ba);t.startState.facet(Ba)!=e?(this.decorator=this.makeDecorator(e),this.decorations=this.decorator.createDeco(t.view)):this.decorations=this.decorator.updateDeco(t,this.decorations)}},{decorations:t=>t.decorations}))]}let Fa=null;class Ua extends Wn{constructor(t,e){super(),this.options=t,this.code=e}eq(t){return t.code==this.code}toDOM(t){let e=function(t){return t>=32?"•":10==t?"␤":String.fromCharCode(9216+t)}(this.code),i=t.state.phrase("Control character")+" "+(Ia[this.code]||"0x"+this.code.toString(16)),s=this.options.render&&this.options.render(this.code,i,e);if(s)return s;let n=document.createElement("span");return n.textContent=e,n.title=i,n.setAttribute("aria-label",i),n.className="cm-specialChar",n}ignoreEvent(){return!1}}class za extends Wn{constructor(t){super(),this.width=t}eq(t){return t.width==this.width}toDOM(){let t=document.createElement("span");return t.textContent="\t",t.className="cm-tab",t.style.width=this.width+"px",t}ignoreEvent(){return!1}}const Wa=Vn.line({attributes:{class:"cm-activeLine"}}),ja=mo.fromClass(class{constructor(t){this.decorations=this.getDeco(t)}update(t){(t.docChanged||t.selectionSet)&&(this.decorations=this.getDeco(t.view))}getDeco(t){let e=-1,i=[];for(let s of t.state.selection.ranges){if(!s.empty)return Vn.none;let n=t.visualLineAt(s.head);n.from>e&&(i.push(Wa.range(n.from)),e=n.from)}return Vn.set(i)}},{decorations:t=>t.decorations});function Va(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}var Ha="object"==typeof global&&global&&global.Object===Object&&global,qa="object"==typeof self&&self&&self.Object===Object&&self,Ga=Ha||qa||Function("return this")(),Qa=function(){return Ga.Date.now()},Ja=/\s/;var Ka=/^\s+/;function Ya(t){return t?t.slice(0,function(t){for(var e=t.length;e--&&Ja.test(t.charAt(e)););return e}(t)+1).replace(Ka,""):t}var Xa=Ga.Symbol,Za=Object.prototype,tl=Za.hasOwnProperty,el=Za.toString,il=Xa?Xa.toStringTag:void 0;var sl=Object.prototype.toString;var nl=Xa?Xa.toStringTag:void 0;function ol(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":nl&&nl in Object(t)?function(t){var e=tl.call(t,il),i=t[il];try{t[il]=void 0;var s=!0}catch(t){}var n=el.call(t);return s&&(e?t[il]=i:delete t[il]),n}(t):function(t){return sl.call(t)}(t)}var rl=/^[-+]0x[0-9a-f]+$/i,al=/^0b[01]+$/i,ll=/^0o[0-7]+$/i,hl=parseInt;function cl(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return null!=t&&"object"==typeof t}(t)&&"[object Symbol]"==ol(t)}(t))return NaN;if(Va(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=Va(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=Ya(t);var i=al.test(t);return i||ll.test(t)?hl(t.slice(2),i?2:8):rl.test(t)?NaN:+t}var dl=Math.max,ul=Math.min;function pl(t,e,i){var s,n,o,r,a,l,h=0,c=!1,d=!1,u=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function p(e){var i=s,o=n;return s=n=void 0,h=e,r=t.apply(o,i)}function f(t){return h=t,a=setTimeout(g,e),c?p(t):r}function m(t){var i=t-l;return void 0===l||i>=e||i<0||d&&t-h>=o}function g(){var t=Qa();if(m(t))return v(t);a=setTimeout(g,function(t){var i=e-(t-l);return d?ul(i,o-(t-h)):i}(t))}function v(t){return a=void 0,u&&s?p(t):(s=n=void 0,r)}function w(){var t=Qa(),i=m(t);if(s=arguments,n=this,l=t,i){if(void 0===a)return f(l);if(d)return clearTimeout(a),a=setTimeout(g,e),p(l)}return void 0===a&&(a=setTimeout(g,e)),r}return e=cl(e)||0,Va(i)&&(c=!!i.leading,o=(d="maxWait"in i)?dl(cl(i.maxWait)||0,e):o,u="trailing"in i?!!i.trailing:u),w.cancel=function(){void 0!==a&&clearTimeout(a),h=0,s=l=n=a=void 0},w.flush=function(){return void 0===a?r:v(Qa())},w}function fl(t){var e=function(t){return t?1/0===(t=cl(t))||-1/0===t?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0}(t),i=e%1;return e==e?i?e-i:e:0}const ml=1024;let gl=0;const vl=new WeakMap;class wl{constructor({deserialize:t}={}){this.id=gl++,this.deserialize=t||(()=>{throw new Error("This node type doesn't define a deserialize function")})}static string(){return new wl({deserialize:t=>t})}static number(){return new wl({deserialize:Number})}static flag(){return new wl({deserialize:()=>!0})}set(t,e){return t[this.id]=e,t}add(t){return"function"!=typeof t&&(t=xl.match(t)),e=>{let i=t(e);return void 0===i?null:[this,i]}}}wl.closedBy=new wl({deserialize:t=>t.split(" ")}),wl.openedBy=new wl({deserialize:t=>t.split(" ")}),wl.group=new wl({deserialize:t=>t.split(" ")});const bl=Object.create(null);class xl{constructor(t,e,i,s=0){this.name=t,this.props=e,this.id=i,this.flags=s}static define(t){let e=t.props&&t.props.length?Object.create(null):bl,i=(t.top?1:0)|(t.skipped?2:0)|(t.error?4:0)|(null==t.name?8:0),s=new xl(t.name||"",e,t.id,i);if(t.props)for(let i of t.props)Array.isArray(i)||(i=i(s)),i&&i[0].set(e,i[1]);return s}prop(t){return this.props[t.id]}get isTop(){return(1&this.flags)>0}get isSkipped(){return(2&this.flags)>0}get isError(){return(4&this.flags)>0}get isAnonymous(){return(8&this.flags)>0}is(t){if("string"==typeof t){if(this.name==t)return!0;let e=this.prop(wl.group);return!!e&&e.indexOf(t)>-1}return this.id==t}static match(t){let e=Object.create(null);for(let i in t)for(let s of i.split(" "))e[s]=t[i];return t=>{for(let i=t.prop(wl.group),s=-1;s<(i?i.length:0);s++){let n=e[s<0?t.name:i[s]];if(n)return n}}}}xl.none=new xl("",Object.create(null),0,8);class yl{constructor(t){this.types=t;for(let e=0;e<t.length;e++)if(t[e].id!=e)throw new RangeError("Node type ids should correspond to array positions when creating a node set")}extend(...t){let e=[];for(let i of this.types){let s=null;for(let e of t){let t=e(i);t&&(s||(s=Object.assign({},i.props)),t[0].set(s,t[1]))}e.push(s?new xl(i.name,s,i.id,i.flags):i)}return new yl(e)}}class kl{constructor(t,e,i,s){this.type=t,this.children=e,this.positions=i,this.length=s}toString(){let t=this.children.map((t=>t.toString())).join();return this.type.name?(/\W/.test(this.type.name)&&!this.type.isError?JSON.stringify(this.type.name):this.type.name)+(t.length?"("+t+")":""):t}cursor(t,e=0){let i=null!=t&&vl.get(this)||this.topNode,s=new Tl(i);return null!=t&&(s.moveTo(t,e),vl.set(this,s._tree)),s}fullCursor(){return new Tl(this.topNode,!0)}get topNode(){return new Cl(this,0,0,null)}resolve(t,e=0){return this.cursor(t,e).node}iterate(t){let{enter:e,leave:i,from:s=0,to:n=this.length}=t;for(let t=this.cursor();;){let o=!1;if(t.from<=n&&t.to>=s&&(t.type.isAnonymous||!1!==e(t.type,t.from,t.to))){if(t.firstChild())continue;t.type.isAnonymous||(o=!0)}for(;o&&i&&i(t.type,t.from,t.to),o=t.type.isAnonymous,!t.nextSibling();){if(!t.parent())return;o=!0}}}balance(t=ml){return this.children.length<=El?this:Rl(this.type,xl.none,this.children,this.positions,0,this.children.length,0,t,this.length,0)}static build(t){return function(t){var e;let{buffer:i,nodeSet:s,topID:n=0,maxBufferLength:o=ml,reused:r=[],minRepeatType:a=s.types.length}=t,l=Array.isArray(i)?new Dl(i,i.length):i,h=s.types,c=0;function d(t,e,i,n,f){let{id:m,start:g,end:v,size:w}=l,b=g-t;if(w<0)return-1==w?(i.push(r[m]),n.push(b)):c=m,void l.next();let x,y,k=h[m];if(v-g<=o&&(y=u(l.pos-e,f))){let e=new Uint16Array(y.size-y.skip),i=l.pos-y.size,n=e.length;for(;l.pos>i;)n=p(y.start,e,n,f);x=new Al(e,v-y.start,s,f<0?xl.none:h[f]),b=y.start-t}else{let t=l.pos-w;l.next();let e=[],i=[],s=m>=a?m:-1;for(;l.pos>t;)l.id==s?l.next():d(g,t,e,i,s);e.reverse(),i.reverse(),x=s>-1&&e.length>El?Rl(k,k,e,i,0,e.length,0,o,v-g,c):Sl(new kl(k,e,i,v-g),c)}i.push(x),n.push(b)}function u(t,e){let i=l.fork(),s=0,n=0,r=0,h=i.end-o,c={size:0,start:0,skip:0};t:for(let o=i.pos-t;i.pos>o;){if(i.id==e){c.size=s,c.start=n,c.skip=r,r+=4,s+=4,i.next();continue}let t=i.size,l=i.pos-t;if(t<0||l<o||i.start<h)break;let d=i.id>=a?4:0,u=i.start;for(i.next();i.pos>l;){if(i.size<0)break t;i.id>=a&&(d+=4),i.next()}n=u,s+=t,r+=d}return(e<0||s==t)&&(c.size=s,c.start=n,c.skip=r),c.size>4?c:void 0}function p(t,e,i,s){let{id:n,start:o,end:r,size:h}=l;if(l.next(),n==s)return i;let c=i;if(h>4){let n=l.pos-(h-4);for(;l.pos>n;)i=p(t,e,i,s)}return n<a&&(e[--i]=c,e[--i]=r-t,e[--i]=o-t,e[--i]=n),i}let f=[],m=[];for(;l.pos>0;)d(t.start||0,0,f,m,-1);let g=null!==(e=t.length)&&void 0!==e?e:f.length?m[0]+f[0].length:0;return new kl(h[n],f.reverse(),m.reverse(),g)}(t)}}function Sl(t,e){return e&&(t.contextHash=e),t}kl.empty=new kl(xl.none,[],[],0);class Al{constructor(t,e,i,s=xl.none){this.buffer=t,this.length=e,this.set=i,this.type=s}toString(){let t=[];for(let e=0;e<this.buffer.length;)t.push(this.childString(e)),e=this.buffer[e+3];return t.join(",")}childString(t){let e=this.buffer[t],i=this.buffer[t+3],s=this.set.types[e],n=s.name;if(/\W/.test(n)&&!s.isError&&(n=JSON.stringify(n)),i==(t+=4))return n;let o=[];for(;t<i;)o.push(this.childString(t)),t=this.buffer[t+3];return n+"("+o.join(",")+")"}findChild(t,e,i,s){let{buffer:n}=this,o=-1;for(let r=t;r!=e;r=n[r+3])if(-1e8!=s){let t=n[r+1],e=n[r+2];if(i>0){if(e>s&&(o=r),e>s)break}else if(t<s&&(o=r),e>=s)break}else if(o=r,i>0)break;return o}}class Cl{constructor(t,e,i,s){this.node=t,this.from=e,this.index=i,this._parent=s}get type(){return this.node.type}get name(){return this.node.type.name}get to(){return this.from+this.node.length}nextChild(t,e,i,s=!1){for(let n=this;;){for(let{children:o,positions:r}=n.node,a=e>0?o.length:-1;t!=a;t+=e){let a=o[t],l=r[t]+n.from;if(-1e8==i||!(e<0?l>=i:l+a.length<=i))if(a instanceof Al){let s=a.findChild(0,a.buffer.length,e,-1e8==i?-1e8:i-l);if(s>-1)return new $l(new Ml(n,a,t,l),null,s)}else if(s||!a.type.isAnonymous||Pl(a)){let o=new Cl(a,l,t,n);return s||!o.type.isAnonymous?o:o.nextChild(e<0?a.children.length-1:0,e,i)}}if(s||!n.type.isAnonymous)return null;if(t=n.index+e,n=n._parent,!n)return null}}get firstChild(){return this.nextChild(0,1,-1e8)}get lastChild(){return this.nextChild(this.node.children.length-1,-1,-1e8)}childAfter(t){return this.nextChild(0,1,t)}childBefore(t){return this.nextChild(this.node.children.length-1,-1,t)}nextSignificantParent(){let t=this;for(;t.type.isAnonymous&&t._parent;)t=t._parent;return t}get parent(){return this._parent?this._parent.nextSignificantParent():null}get nextSibling(){return this._parent?this._parent.nextChild(this.index+1,1,-1):null}get prevSibling(){return this._parent?this._parent.nextChild(this.index-1,-1,-1):null}get cursor(){return new Tl(this)}resolve(t,e=0){return this.cursor.moveTo(t,e).node}getChild(t,e=null,i=null){let s=Ol(this,t,e,i);return s.length?s[0]:null}getChildren(t,e=null,i=null){return Ol(this,t,e,i)}toString(){return this.node.toString()}}function Ol(t,e,i,s){let n=t.cursor,o=[];if(!n.firstChild())return o;if(null!=i)for(;!n.type.is(i);)if(!n.nextSibling())return o;for(;;){if(null!=s&&n.type.is(s))return o;if(n.type.is(e)&&o.push(n.node),!n.nextSibling())return null==s?o:[]}}class Ml{constructor(t,e,i,s){this.parent=t,this.buffer=e,this.index=i,this.start=s}}class $l{constructor(t,e,i){this.context=t,this._parent=e,this.index=i,this.type=t.buffer.set.types[t.buffer.buffer[i]]}get name(){return this.type.name}get from(){return this.context.start+this.context.buffer.buffer[this.index+1]}get to(){return this.context.start+this.context.buffer.buffer[this.index+2]}child(t,e){let{buffer:i}=this.context,s=i.findChild(this.index+4,i.buffer[this.index+3],t,-1e8==e?-1e8:e-this.context.start);return s<0?null:new $l(this.context,this,s)}get firstChild(){return this.child(1,-1e8)}get lastChild(){return this.child(-1,-1e8)}childAfter(t){return this.child(1,t)}childBefore(t){return this.child(-1,t)}get parent(){return this._parent||this.context.parent.nextSignificantParent()}externalSibling(t){return this._parent?null:this.context.parent.nextChild(this.context.index+t,t,-1)}get nextSibling(){let{buffer:t}=this.context,e=t.buffer[this.index+3];return e<(this._parent?t.buffer[this._parent.index+3]:t.buffer.length)?new $l(this.context,this._parent,e):this.externalSibling(1)}get prevSibling(){let{buffer:t}=this.context,e=this._parent?this._parent.index+4:0;return this.index==e?this.externalSibling(-1):new $l(this.context,this._parent,t.findChild(e,this.index,-1,-1e8))}get cursor(){return new Tl(this)}resolve(t,e=0){return this.cursor.moveTo(t,e).node}toString(){return this.context.buffer.childString(this.index)}getChild(t,e=null,i=null){let s=Ol(this,t,e,i);return s.length?s[0]:null}getChildren(t,e=null,i=null){return Ol(this,t,e,i)}}class Tl{constructor(t,e=!1){if(this.full=e,this.buffer=null,this.stack=[],this.index=0,this.bufferNode=null,t instanceof Cl)this.yieldNode(t);else{this._tree=t.context.parent,this.buffer=t.context;for(let e=t._parent;e;e=e._parent)this.stack.unshift(e.index);this.bufferNode=t,this.yieldBuf(t.index)}}get name(){return this.type.name}yieldNode(t){return!!t&&(this._tree=t,this.type=t.type,this.from=t.from,this.to=t.to,!0)}yieldBuf(t,e){this.index=t;let{start:i,buffer:s}=this.buffer;return this.type=e||s.set.types[s.buffer[t]],this.from=i+s.buffer[t+1],this.to=i+s.buffer[t+2],!0}yield(t){return!!t&&(t instanceof Cl?(this.buffer=null,this.yieldNode(t)):(this.buffer=t.context,this.yieldBuf(t.index,t.type)))}toString(){return this.buffer?this.buffer.buffer.childString(this.index):this._tree.toString()}enter(t,e){if(!this.buffer)return this.yield(this._tree.nextChild(t<0?this._tree.node.children.length-1:0,t,e,this.full));let{buffer:i}=this.buffer,s=i.findChild(this.index+4,i.buffer[this.index+3],t,-1e8==e?-1e8:e-this.buffer.start);return!(s<0)&&(this.stack.push(this.index),this.yieldBuf(s))}firstChild(){return this.enter(1,-1e8)}lastChild(){return this.enter(-1,-1e8)}childAfter(t){return this.enter(1,t)}childBefore(t){return this.enter(-1,t)}parent(){if(!this.buffer)return this.yieldNode(this.full?this._tree._parent:this._tree.parent);if(this.stack.length)return this.yieldBuf(this.stack.pop());let t=this.full?this.buffer.parent:this.buffer.parent.nextSignificantParent();return this.buffer=null,this.yieldNode(t)}sibling(t){if(!this.buffer)return!!this._tree._parent&&this.yield(this._tree._parent.nextChild(this._tree.index+t,t,-1e8,this.full));let{buffer:e}=this.buffer,i=this.stack.length-1;if(t<0){let t=i<0?0:this.stack[i]+4;if(this.index!=t)return this.yieldBuf(e.findChild(t,this.index,-1,-1e8))}else{let t=e.buffer[this.index+3];if(t<(i<0?e.buffer.length:e.buffer[this.stack[i]+3]))return this.yieldBuf(t)}return i<0&&this.yield(this.buffer.parent.nextChild(this.buffer.index+t,t,-1e8,this.full))}nextSibling(){return this.sibling(1)}prevSibling(){return this.sibling(-1)}atLastNode(t){let e,i,{buffer:s}=this;if(s){if(t>0){if(this.index<s.buffer.buffer.length)return!1}else for(let t=0;t<this.index;t++)if(s.buffer.buffer[t+3]<this.index)return!1;({index:e,parent:i}=s)}else({index:e,_parent:i}=this._tree);for(;i;({index:e,_parent:i}=i))for(let s=e+t,n=t<0?-1:i.node.children.length;s!=n;s+=t){let t=i.node.children[s];if(this.full||!t.type.isAnonymous||t instanceof Al||Pl(t))return!1}return!0}move(t){if(this.enter(t,-1e8))return!0;for(;;){if(this.sibling(t))return!0;if(this.atLastNode(t)||!this.parent())return!1}}next(){return this.move(1)}prev(){return this.move(-1)}moveTo(t,e=0){for(;(this.from==this.to||(e<1?this.from>=t:this.from>t)||(e>-1?this.to<=t:this.to<t))&&this.parent(););for(;e<0?this.childBefore(t):this.childAfter(t);)if(this.from==this.to||(e<1?this.from>=t:this.from>t)||(e>-1?this.to<=t:this.to<t)){this.parent();break}return this}get node(){if(!this.buffer)return this._tree;let t=this.bufferNode,e=null,i=0;if(t&&t.context==this.buffer)t:for(let s=this.index,n=this.stack.length;n>=0;){for(let o=t;o;o=o._parent)if(o.index==s){if(s==this.index)return o;e=o,i=n+1;break t}s=this.stack[--n]}for(let t=i;t<this.stack.length;t++)e=new $l(this.buffer,e,this.stack[t]);return this.bufferNode=new $l(this.buffer,e,this.index)}get tree(){return this.buffer?null:this._tree.node}}function Pl(t){return t.children.some((t=>!t.type.isAnonymous||t instanceof Al||Pl(t)))}class Dl{constructor(t,e){this.buffer=t,this.index=e}get id(){return this.buffer[this.index-4]}get start(){return this.buffer[this.index-3]}get end(){return this.buffer[this.index-2]}get size(){return this.buffer[this.index-1]}get pos(){return this.index}next(){this.index-=4}fork(){return new Dl(this.buffer,this.index)}}const El=8;function Rl(t,e,i,s,n,o,r,a,l,h){let c=[],d=[];if(l<=a)for(let t=n;t<o;t++)c.push(i[t]),d.push(s[t]-r);else{let t=Math.max(a,Math.ceil(1.5*l/El));for(let l=n;l<o;){let n=l,u=s[l];for(l++;l<o;l++){if(s[l]+i[l].length-u>t)break}if(l==n+1){let s=i[n];if(s instanceof kl&&s.type==e&&s.length>t<<1){for(let t=0;t<s.children.length;t++)c.push(s.children[t]),d.push(s.positions[t]+u-r);continue}c.push(s)}else if(l==n+1)c.push(i[n]);else{let t=Rl(e,e,i,s,n,l,u,a,s[l-1]+i[l-1].length-u,h);e==xl.none||Ll(t.children,e)||(t=Sl(new kl(xl.none,t.children,t.positions,t.length),h)),c.push(t)}d.push(u-r)}}return Sl(new kl(t,c,d,l),h)}function Ll(t,e){for(let i of t)if(i.type==e)return!0;return!1}class Il{constructor(t,e,i,s,n){this.from=t,this.to=e,this.tree=i,this.offset=s,this.open=n}get openStart(){return(1&this.open)>0}get openEnd(){return(2&this.open)>0}static applyChanges(t,e,i=128){if(!e.length)return t;let s=[],n=1,o=t.length?t[0]:null,r=0,a=0,l=0;for(;;){let h=r<e.length?e[r++]:null,c=h?h.fromA:1e9;if(c-a>=i)for(;o&&o.from<c;){let e=o;if(a>=e.from||c<=e.to||l){let t=Math.max(e.from,a)-l,i=Math.min(e.to,c)-l;e=t>=i?null:new Il(t,i,e.tree,e.offset+l,(r>0?1:0)|(h?2:0))}if(e&&s.push(e),o.to>c)break;o=n<t.length?t[n++]:null}if(!h)break;a=h.toA,l=h.toA-h.toB}return s}static addTree(t,e=[],i=!1){let s=[new Il(0,t.length,t,0,i?2:0)];for(let i of e)i.to>t.length&&s.push(i);return s}}function Nl(t){return new Bl(t)}class Bl{constructor(t,e=t.length){this.string=t,this.length=e}get(t){return t<0||t>=this.length?-1:this.string.charCodeAt(t)}lineAfter(t){if(t<0)return"";let e=this.string.indexOf("\n",t);return this.string.slice(t,e<0?this.length:Math.min(e,this.length))}read(t,e){return this.string.slice(t,Math.min(this.length,e))}clip(t){return new Bl(this.string,t)}}const _l=new wl;class Fl{constructor(t,e,i,s=[]){this.data=t,this.topNode=i,ds.prototype.hasOwnProperty("tree")||Object.defineProperty(ds.prototype,"tree",{get(){return Wl(this)}}),this.parser=e,this.extension=[Kl.of(this),ds.languageData.of(((t,e)=>t.facet(Ul(t,e))))].concat(s)}isActiveAt(t,e){return Ul(t,e)==this.data}findRegions(t){let e=t.facet(Kl);if((null==e?void 0:e.data)==this.data)return[{from:0,to:t.doc.length}];if(!e||!e.allowsNesting)return[];let i=[];return Wl(t).iterate({enter:(t,e,s)=>{if(t.isTop&&t.prop(_l)==this.data)return i.push({from:e,to:s}),!1}}),i}get allowsNesting(){return!0}parseString(t){let e,i=si.of(t.split("\n")),s=this.parser.startParse(new jl(i),0,new Vl(this.parser,ds.create({doc:i}),[],kl.empty,{from:0,to:t.length},[],null));for(;!(e=s.advance()););return e}}function Ul(t,e){let i=t.facet(Kl);if(!i)return null;if(!i.allowsNesting)return i.data;let s=Wl(t).resolve(e,-1);for(;s;){let t=s.type.prop(_l);if(t)return t;s=s.parent}return i.data}Fl.setState=Zi.define();class zl extends Fl{constructor(t,e){super(t,e,e.topNode),this.parser=e}static define(t){let e=(i=t.languageData,Oi.define({combine:i?t=>t.concat(i):void 0}));var i;return new zl(e,t.parser.configure({props:[_l.add((t=>t.isTop?e:void 0))]}))}configure(t){return new zl(this.data,this.parser.configure(t))}get allowsNesting(){return this.parser.hasNested}}function Wl(t){let e=t.field(Fl.state,!1);return e?e.tree:kl.empty}class jl{constructor(t,e=t.length){this.doc=t,this.length=e,this.cursorPos=0,this.string="",this.prevString="",this.cursor=t.iter()}syncTo(t){return t<this.cursorPos&&(this.cursor=this.doc.iter(),this.cursorPos=0),this.prevString=t==this.cursorPos?this.string:"",this.string=this.cursor.next(t-this.cursorPos).value,this.cursorPos=t+this.string.length,this.cursorPos-this.string.length}get(t){if(t>=this.length)return-1;let e=this.cursorPos-this.string.length;if(t<e||t>=this.cursorPos){if(t<e&&t>=e-this.prevString.length)return this.prevString.charCodeAt(t-(e-this.prevString.length));e=this.syncTo(t)}return this.string.charCodeAt(t-e)}lineAfter(t){if(t>=this.length||t<0)return"";let e=this.cursorPos-this.string.length;return(t<e||t>=this.cursorPos)&&(e=this.syncTo(t)),this.cursor.lineBreak?"":this.string.slice(t-e,Math.min(this.length-e,this.string.length))}read(t,e){let i=this.cursorPos-this.string.length;return t<i||e>=this.cursorPos?this.doc.sliceString(t,e):this.string.slice(t-i,e-i)}clip(t){return new jl(this.doc,t)}}class Vl{constructor(t,e,i=[],s,n,o,r){this.parser=t,this.state=e,this.fragments=i,this.tree=s,this.viewport=n,this.skipped=o,this.scheduleOn=r,this.parse=null,this.tempSkipped=[]}work(t,e){if(this.tree!=kl.empty&&(null==e?this.tree.length==this.state.doc.length:this.tree.length>=e))return this.takeTree(),!0;this.parse||(this.parse=this.parser.startParse(new jl(this.state.doc),0,this));let i=Date.now()+t;for(;;){let t=this.parse.advance();if(t)return this.fragments=this.withoutTempSkipped(Il.addTree(t)),this.parse=null,this.tree=t,!0;if(null!=e&&this.parse.pos>=e)return this.takeTree(),!0;if(Date.now()>i)return!1}}takeTree(){this.parse&&this.parse.pos>this.tree.length&&(this.tree=this.parse.forceFinish(),this.fragments=this.withoutTempSkipped(Il.addTree(this.tree,this.fragments,!0)))}withoutTempSkipped(t){for(let e;e=this.tempSkipped.pop();)t=Hl(t,e.from,e.to);return t}changes(t,e){let{fragments:i,tree:s,viewport:n,skipped:o}=this;if(this.takeTree(),!t.empty){let e=[];if(t.iterChangedRanges(((t,i,s,n)=>e.push({fromA:t,toA:i,fromB:s,toB:n}))),i=Il.applyChanges(i,e),s=kl.empty,n={from:t.mapPos(n.from,-1),to:t.mapPos(n.to,1)},this.skipped.length){o=[];for(let e of this.skipped){let i=t.mapPos(e.from,1),s=t.mapPos(e.to,-1);i<s&&o.push({from:i,to:s})}}}return new Vl(this.parser,e,i,s,n,o,this.scheduleOn)}updateViewport(t){this.viewport=t;let e=this.skipped.length;for(let e=0;e<this.skipped.length;e++){let{from:i,to:s}=this.skipped[e];i<t.to&&s>t.from&&(this.fragments=Hl(this.fragments,i,s),this.skipped.splice(e--,1))}return this.skipped.length<e}reset(){this.parse&&(this.takeTree(),this.parse=null)}skipUntilInView(t,e){this.skipped.push({from:t,to:e})}static getSkippingParser(t){return{startParse:(e,i,s)=>({pos:i,advance(){let n=s;return n.tempSkipped.push({from:i,to:e.length}),t&&(n.scheduleOn=n.scheduleOn?Promise.all([n.scheduleOn,t]):t),this.pos=e.length,new kl(xl.none,[],[],e.length-i)},forceFinish(){return this.advance()}})}}movedPast(t){return this.tree.length<t&&this.parse&&this.parse.pos>=t}}function Hl(t,e,i){return Il.applyChanges(t,[{fromA:e,toA:i,fromB:e,toB:i}])}Vl.skippingParser=Vl.getSkippingParser();class ql{constructor(t){this.context=t,this.tree=t.tree}apply(t){if(!t.docChanged)return this;let e=this.context.changes(t.changes,t.state),i=this.context.tree.length==t.startState.doc.length?void 0:Math.max(t.changes.mapPos(this.context.tree.length),e.viewport.to);return e.work(25,i)||e.takeTree(),new ql(e)}static init(t){let e=new Vl(t.facet(Kl).parser,t,[],kl.empty,{from:0,to:t.doc.length},[],null);return e.work(25)||e.takeTree(),new ql(e)}}Fl.state=Ei.define({create:ql.init,update(t,e){for(let t of e.effects)if(t.is(Fl.setState))return t.value;return e.startState.facet(Kl)!=e.state.facet(Kl)?ql.init(e.state):t.apply(e)}});let Gl="undefined"!=typeof window&&window.requestIdleCallback||((t,{timeout:e})=>setTimeout(t,e)),Ql="undefined"!=typeof window&&window.cancelIdleCallback||clearTimeout;const Jl=mo.fromClass(class{constructor(t){this.view=t,this.working=-1,this.chunkEnd=-1,this.chunkBudget=-1,this.work=this.work.bind(this),this.scheduleWork()}update(t){let e=this.view.state.field(Fl.state).context;t.viewportChanged&&(e.updateViewport(t.view.viewport)&&e.reset(),this.view.viewport.to>e.tree.length&&this.scheduleWork()),t.docChanged&&(this.view.hasFocus&&(this.chunkBudget+=50),this.scheduleWork()),this.checkAsyncSchedule(e)}scheduleWork(){if(this.working>-1)return;let{state:t}=this.view,e=t.field(Fl.state),i=e.context.fragments;e.tree.length>=t.doc.length&&i.length&&0==i[0].from&&i[0].to>=t.doc.length||(this.working=Gl(this.work,{timeout:500}))}work(t){this.working=-1;let e=Date.now();if(this.chunkEnd<e&&(this.chunkEnd<0||this.view.hasFocus)&&(this.chunkEnd=e+3e4,this.chunkBudget=3e3),this.chunkBudget<=0)return;let{state:i,viewport:{to:s}}=this.view,n=i.field(Fl.state);if(n.tree.length>=s+1e6)return;let o=Math.min(this.chunkBudget,t?Math.max(25,t.timeRemaining()):100),r=n.context.work(o,s+1e6);this.chunkBudget-=Date.now()-e,(r||this.chunkBudget<=0||n.context.movedPast(s))&&(n.context.takeTree(),this.view.dispatch({effects:Fl.setState.of(new ql(n.context))})),!r&&this.chunkBudget>0&&this.scheduleWork(),this.checkAsyncSchedule(n.context)}checkAsyncSchedule(t){t.scheduleOn&&(t.scheduleOn.then((()=>this.scheduleWork())),t.scheduleOn=null)}destroy(){this.working>=0&&Ql(this.working)}},{eventHandlers:{focus(){this.scheduleWork()}}}),Kl=Oi.define({combine:t=>t.length?t[0]:null,enables:[Fl.state,Jl]});class Yl{constructor(t,e=[]){this.language=t,this.support=e,this.extension=[t,e]}}const Xl=Oi.define(),Zl=Oi.define({combine:t=>{if(!t.length)return"  ";if(!/^(?: +|\t+)$/.test(t[0]))throw new Error("Invalid indent unit: "+JSON.stringify(t[0]));return t[0]}});function th(t){let e=t.facet(Zl);return 9==e.charCodeAt(0)?t.tabSize*e.length:e.length}function eh(t,e){let i="",s=t.tabSize;if(9==t.facet(Zl).charCodeAt(0))for(;e>=s;)i+="\t",e-=s;for(let t=0;t<e;t++)i+=" ";return i}function ih(t,e){t instanceof ds&&(t=new sh(t));for(let i of t.state.facet(Xl)){let s=i(t,e);if(null!=s)return s}let i=Wl(t.state);return i?function(t,e,i){let s=e.resolve(i);for(let t=s,e=i;;){let i=t.childBefore(e);if(!i)break;i.type.isError&&i.from==i.to?(s=t,e=i.from):(t=i,e=t.to+1)}return rh(s,i,t)}(t,i,e):null}class sh{constructor(t,e={}){this.state=t,this.options=e,this.unit=th(t)}textAfterPos(t){var e,i;let s=null===(e=this.options)||void 0===e?void 0:e.simulateBreak;return t==s&&(null===(i=this.options)||void 0===i?void 0:i.simulateDoubleBreak)?"":this.state.sliceDoc(t,Math.min(t+100,null!=s&&s>t?s:1e9,this.state.doc.lineAt(t).to))}column(t){var e;let i=this.state.doc.lineAt(t),s=i.text.slice(0,t-i.from),n=this.countColumn(s,t-i.from),o=(null===(e=this.options)||void 0===e?void 0:e.overrideIndentation)?this.options.overrideIndentation(i.from):-1;return o>-1&&(n+=o-this.countColumn(s,s.search(/\S/))),n}countColumn(t,e){return ei(e<0?t:t.slice(0,e),0,this.state.tabSize)}lineIndent(t){var e;let i=null===(e=this.options)||void 0===e?void 0:e.overrideIndentation;if(i){let e=i(t.from);if(e>-1)return e}return this.countColumn(t.text,t.text.search(/\S/))}}const nh=new wl;function oh(t){let e=t.type.prop(nh);if(e)return e;let i,s=t.firstChild;if(s&&(i=s.type.prop(wl.closedBy))){let e=t.lastChild,s=e&&i.indexOf(e.name)>-1;return t=>function(t,e,i,s,n){let o=t.textAfter,r=o.match(/^\s*/)[0].length,a=s&&o.slice(r,r+s.length)==s||n==t.pos+r,l=e?function(t){var e;let i=t.node,s=i.childAfter(i.from),n=i.lastChild;if(!s)return null;let o=null===(e=t.options)||void 0===e?void 0:e.simulateBreak,r=t.state.doc.lineAt(s.from),a=null==o||o<=r.from?r.to:Math.min(r.to,o);for(let t=s.to;;){let e=i.childAfter(t);if(!e||e==n)return null;if(!e.type.isSkipped)return e.from<a?s:null;t=e.to}}(t):null;return l?a?t.column(l.from):t.column(l.to):t.baseIndent+(a?0:t.unit*i)}(t,!0,1,void 0,s&&!function(t){var e,i;return t.pos==(null===(e=t.options)||void 0===e?void 0:e.simulateBreak)&&(null===(i=t.options)||void 0===i?void 0:i.simulateDoubleBreak)}(t)?e.from:void 0)}return null==t.parent?ah:null}function rh(t,e,i){for(;t;t=t.parent){let s=oh(t);if(s)return s(new lh(i,e,t))}return null}function ah(){return 0}class lh extends sh{constructor(t,e,i){super(t.state,t.options),this.base=t,this.pos=e,this.node=i}get textAfter(){return this.textAfterPos(this.pos)}get baseIndent(){let t=this.state.doc.lineAt(this.node.from);for(;;){let e=this.node.resolve(t.from);for(;e.parent&&e.parent.from==e.from;)e=e.parent;if(hh(e,this.node))break;t=this.state.doc.lineAt(e.from)}return this.lineIndent(t)}continue(){let t=this.node.parent;return t?rh(t,this.pos,this.base):0}}function hh(t,e){for(let i=e;i;i=i.parent)if(t==i)return!0;return!1}function ch({except:t,units:e=1}={}){return i=>{let s=t&&t.test(i.textAfter);return i.baseIndent+(s?0:e*i.unit)}}function dh(){return ds.transactionFilter.of((t=>{if(!t.docChanged||"input"!=t.annotation(ts.userEvent))return t;let e=t.startState.languageDataAt("indentOnInput",t.startState.selection.main.head);if(!e.length)return t;let i=t.newDoc,{head:s}=t.newSelection.main,n=i.lineAt(s);if(s>n.from+200)return t;let o=i.sliceString(n.from,s);if(!e.some((t=>t.test(o))))return t;let{state:r}=t,a=-1,l=[];for(let{head:t}of r.selection.ranges){let e=r.doc.lineAt(t);if(e.from==a)continue;a=e.from;let i=ih(r,e.from);if(null==i)continue;let s=/^\s*/.exec(e.text)[0],n=eh(r,i);s!=n&&l.push({from:e.from,to:e.from+s.length,insert:n})}return l.length?[t,{changes:l}]:t}))}const uh=Oi.define(),ph=new wl;function fh(t,e,i){for(let s of t.facet(uh)){let n=s(t,e,i);if(n)return n}return function(t,e,i){let s=Wl(t);if(0==s.length)return null;let n=null;for(let o=s.resolve(i);o;o=o.parent){if(o.to<=i||o.from>i)continue;if(n&&o.from<e)break;let s=o.type.prop(ph);if(s){let r=s(o,t);r&&r.from<=i&&r.from>=e&&r.to>i&&(n=r)}}return n}(t,e,i)}const mh=oa.baseTheme({".cm-matchingBracket":{color:"#0b0"},".cm-nonmatchingBracket":{color:"#a22"}}),gh=Oi.define({combine:t=>us(t,{afterCursor:!0,brackets:"()[]{}",maxScanDistance:1e4})}),vh=Vn.mark({class:"cm-matchingBracket"}),wh=Vn.mark({class:"cm-nonmatchingBracket"}),bh=Ei.define({create:()=>Vn.none,update(t,e){if(!e.docChanged&&!e.selection)return t;let i=[],s=e.state.facet(gh);for(let t of e.state.selection.ranges){if(!t.empty)continue;let n=Sh(e.state,t.head,-1,s)||t.head>0&&Sh(e.state,t.head-1,1,s)||s.afterCursor&&(Sh(e.state,t.head,1,s)||t.head<e.state.doc.length&&Sh(e.state,t.head+1,-1,s));if(!n)continue;let o=n.matched?vh:wh;i.push(o.range(n.start.from,n.start.to)),n.end&&i.push(o.range(n.end.from,n.end.to))}return Vn.set(i,!0)},provide:t=>oa.decorations.from(t)}),xh=[bh,mh];function yh(t={}){return[gh.of(t),xh]}function kh(t,e,i){let s=t.prop(e<0?wl.openedBy:wl.closedBy);if(s)return s;if(1==t.name.length){let s=i.indexOf(t.name);if(s>-1&&s%2==(e<0?1:0))return[i[s+e]]}return null}function Sh(t,e,i,s={}){let n,o=s.maxScanDistance||1e4,r=s.brackets||"()[]{}",a=Wl(t),l=a.resolve(e,i);return(n=kh(l.type,i,r))?function(t,e,i,s,n,o){let r=s.parent,a={from:s.from,to:s.to},l=0,h=null==r?void 0:r.cursor;if(h&&(i<0?h.childBefore(s.from):h.childAfter(s.to)))do{if(i<0?h.to<=s.from:h.from>=s.to){if(0==l&&n.indexOf(h.type.name)>-1)return{start:a,end:{from:h.from,to:h.to},matched:!0};if(kh(h.type,i,o))l++;else if(kh(h.type,-i,o)&&(l--,0==l))return{start:a,end:{from:h.from,to:h.to},matched:!1}}}while(i<0?h.prevSibling():h.nextSibling());return{start:a,matched:!1}}(0,0,i,l,n,r):function(t,e,i,s,n,o,r){let a=i<0?t.sliceDoc(e-1,e):t.sliceDoc(e,e+1),l=r.indexOf(a);if(l<0||l%2==0!=i>0)return null;let h={from:i<0?e-1:e,to:i>0?e+1:e},c=t.doc.iterRange(e,i>0?t.doc.length:0),d=0;for(let t=0;!c.next().done&&t<=o;){let o=c.value;i<0&&(t+=o.length);let a=e+t*i;for(let t=i>0?0:o.length-1,e=i>0?o.length:-1;t!=e;t+=i){let e=r.indexOf(o[t]);if(!(e<0||s.resolve(a+t,1).type!=n))if(e%2==0==i>0)d++;else{if(1==d)return{start:h,end:{from:a+t,to:a+t+1},matched:e>>1==l>>1};d--}}i>0&&(t+=o.length)}return c.done?{start:h,matched:!1}:null}(t,e,i,a,l.type,o,r)}function Ah(t,e){return ki.create(t.ranges.map(e),t.mainIndex)}function Ch(t,e){return t.update({selection:e,scrollIntoView:!0,annotations:ts.userEvent.of("keyboardselection")})}function Oh({state:t,dispatch:e},i){let s=Ah(t.selection,i);return!s.eq(t.selection)&&(e(Ch(t,s)),!0)}function Mh(t,e){return ki.cursor(e?t.to:t.from)}function $h(t,e){return Oh(t,(i=>i.empty?t.moveByChar(i,e):Mh(i,e)))}const Th=t=>$h(t,t.textDirection!=To.LTR),Ph=t=>$h(t,t.textDirection==To.LTR);function Dh(t,e){return Oh(t,(i=>i.empty?t.moveByGroup(i,e):Mh(i,e)))}function Eh(t,e,i){if(e.type.prop(i))return!0;let s=e.to-e.from;return s&&(s>2||/[^\s,.;:]/.test(t.sliceDoc(e.from,e.to)))||e.firstChild}function Rh(t,e,i){let s,n,o=Wl(t).resolve(e.head),r=i?wl.closedBy:wl.openedBy;for(let s=e.head;;){let e=i?o.childAfter(s):o.childBefore(s);if(!e)break;Eh(t,e,r)?o=e:s=i?e.to:e.from}return n=o.type.prop(r)&&(s=i?Sh(t,o.from,1):Sh(t,o.to,-1))&&s.matched?i?s.end.to:s.end.from:i?o.to:o.from,ki.cursor(n,i?-1:1)}function Lh(t,e){return Oh(t,(i=>i.empty?t.moveVertically(i,e):Mh(i,e)))}const Ih=t=>Lh(t,!1),Nh=t=>Lh(t,!0);function Bh(t,e){return Oh(t,(i=>i.empty?t.moveVertically(i,e,t.dom.clientHeight):Mh(i,e)))}const _h=t=>Bh(t,!1),Fh=t=>Bh(t,!0);function Uh(t,e,i){let s=t.visualLineAt(e.head),n=t.moveToLineBoundary(e,i);if(n.head==e.head&&n.head!=(i?s.to:s.from)&&(n=t.moveToLineBoundary(e,i,!1)),!i&&n.head==s.from&&s.length){let i=/^\s*/.exec(t.state.sliceDoc(s.from,Math.min(s.from+100,s.to)))[0].length;i&&e.head!=s.from+i&&(n=ki.cursor(s.from+i))}return n}const zh=t=>Oh(t,(e=>Uh(t,e,!0))),Wh=t=>Oh(t,(e=>Uh(t,e,!1)));function jh(t,e){let i=Ah(t.state.selection,(t=>{let i=e(t);return ki.range(t.anchor,i.head,i.goalColumn)}));return!i.eq(t.state.selection)&&(t.dispatch(Ch(t.state,i)),!0)}function Vh(t,e){return jh(t,(i=>t.moveByChar(i,e)))}const Hh=t=>Vh(t,t.textDirection!=To.LTR),qh=t=>Vh(t,t.textDirection==To.LTR);function Gh(t,e){return jh(t,(i=>t.moveByGroup(i,e)))}function Qh(t,e){return jh(t,(i=>t.moveVertically(i,e)))}const Jh=t=>Qh(t,!1),Kh=t=>Qh(t,!0);function Yh(t,e){return jh(t,(i=>t.moveVertically(i,e,t.dom.clientHeight)))}const Xh=t=>Yh(t,!1),Zh=t=>Yh(t,!0),tc=t=>jh(t,(e=>Uh(t,e,!0))),ec=t=>jh(t,(e=>Uh(t,e,!1))),ic=({state:t,dispatch:e})=>(e(Ch(t,{anchor:0})),!0),sc=({state:t,dispatch:e})=>(e(Ch(t,{anchor:t.doc.length})),!0),nc=({state:t,dispatch:e})=>(e(Ch(t,{anchor:t.selection.main.anchor,head:0})),!0),oc=({state:t,dispatch:e})=>(e(Ch(t,{anchor:t.selection.main.anchor,head:t.doc.length})),!0);function rc({state:t,dispatch:e},i){let s=t.changeByRange((t=>{let{from:e,to:s}=t;if(e==s){let t=i(e);e=Math.min(e,t),s=Math.max(s,t)}return e==s?{range:t}:{changes:{from:e,to:s},range:ki.cursor(e)}}));return!s.changes.empty&&(e(t.update(s,{scrollIntoView:!0,annotations:ts.userEvent.of("delete")})),!0)}const ac=(t,e,i)=>rc(t,(s=>{let n,o,{state:r}=t,a=r.doc.lineAt(s);if(!e&&s>a.from&&s<a.from+200&&!/[^ \t]/.test(n=a.text.slice(0,s-a.from))){if("\t"==n[n.length-1])return s-1;let t=ei(n,0,r.tabSize)%th(r)||th(r);for(let e=0;e<t&&" "==n[n.length-1-e];e++)s--;return s}if(i){let t=a.text.slice(s-a.from+(e?0:-2),s-a.from+(e?2:0)),i=t?ti(Xe(t,0)):1;o=e?Math.min(r.doc.length,s+i):Math.max(0,s-i)}else o=Ge(a.text,s-a.from,e)+a.from;return o==s&&a.number!=(e?r.doc.lines:1)&&(o+=e?1:-1),o})),lc=t=>ac(t,!1,!0),hc=t=>ac(t,!0,!1),cc=(t,e)=>rc(t,(i=>{let s=i,{state:n}=t,o=n.doc.lineAt(s),r=n.charCategorizer(s);for(let t=null;;){if(s==(e?o.to:o.from)){s==i&&o.number!=(e?n.doc.lines:1)&&(s+=e?1:-1);break}let a=Ge(o.text,s-o.from,e)+o.from,l=o.text.slice(Math.min(s,a)-o.from,Math.max(s,a)-o.from),h=r(l);if(null!=t&&h!=t)break;" "==l&&s==i||(t=h),s=a}return s})),dc=t=>cc(t,!1),uc=t=>cc(t,!0),pc=t=>rc(t,(e=>{let i=t.visualLineAt(e).to;return e<i?i:Math.min(t.state.doc.length,e+1)}));function fc(t){let e=[],i=-1;for(let s of t.selection.ranges){let n=t.doc.lineAt(s.from),o=t.doc.lineAt(s.to);if(s.empty||s.to!=o.from||(o=t.doc.lineAt(s.to-1)),i>=n.number){let t=e[e.length-1];t.to=o.to,t.ranges.push(s)}else e.push({from:n.from,to:o.to,ranges:[s]});i=o.number+1}return e}function mc(t,e,i){let s=[],n=[];for(let e of fc(t)){if(i?e.to==t.doc.length:0==e.from)continue;let o=t.doc.lineAt(i?e.to+1:e.from-1),r=o.length+1;if(i){s.push({from:e.to,to:o.to},{from:e.from,insert:o.text+t.lineBreak});for(let i of e.ranges)n.push(ki.range(Math.min(t.doc.length,i.anchor+r),Math.min(t.doc.length,i.head+r)))}else{s.push({from:o.from,to:e.from},{from:e.to,insert:t.lineBreak+o.text});for(let t of e.ranges)n.push(ki.range(t.anchor-r,t.head-r))}}return!!s.length&&(e(t.update({changes:s,scrollIntoView:!0,selection:ki.create(n,t.selection.mainIndex)})),!0)}function gc(t,e,i){let s=[];for(let e of fc(t))i?s.push({from:e.from,insert:t.doc.slice(e.from,e.to)+t.lineBreak}):s.push({from:e.to,insert:t.lineBreak+t.doc.slice(e.from,e.to)});return e(t.update({changes:s,scrollIntoView:!0})),!0}function vc(t,e){let i=-1;return t.changeByRange((s=>{let n=[];for(let o=s.from;o<=s.to;){let r=t.doc.lineAt(o);r.number>i&&(s.empty||s.to>r.from)&&(e(r,n,s),i=r.number),o=r.to+1}let o=t.changes(n);return{changes:n,range:ki.range(o.mapPos(s.anchor,1),o.mapPos(s.head,1))}}))}const wc=[{key:"ArrowLeft",run:Th,shift:Hh,preventDefault:!0},{key:"Mod-ArrowLeft",mac:"Alt-ArrowLeft",run:t=>Dh(t,t.textDirection!=To.LTR),shift:t=>Gh(t,t.textDirection!=To.LTR)},{mac:"Cmd-ArrowLeft",run:Wh,shift:ec},{key:"ArrowRight",run:Ph,shift:qh,preventDefault:!0},{key:"Mod-ArrowRight",mac:"Alt-ArrowRight",run:t=>Dh(t,t.textDirection==To.LTR),shift:t=>Gh(t,t.textDirection==To.LTR)},{mac:"Cmd-ArrowRight",run:zh,shift:tc},{key:"ArrowUp",run:Ih,shift:Jh,preventDefault:!0},{mac:"Cmd-ArrowUp",run:ic,shift:nc},{mac:"Ctrl-ArrowUp",run:_h,shift:Xh},{key:"ArrowDown",run:Nh,shift:Kh,preventDefault:!0},{mac:"Cmd-ArrowDown",run:sc,shift:oc},{mac:"Ctrl-ArrowDown",run:Fh,shift:Zh},{key:"PageUp",run:_h,shift:Xh},{key:"PageDown",run:Fh,shift:Zh},{key:"Home",run:Wh,shift:ec},{key:"Mod-Home",run:ic,shift:nc},{key:"End",run:zh,shift:tc},{key:"Mod-End",run:sc,shift:oc},{key:"Enter",run:({state:t,dispatch:e})=>{let i=t.changeByRange((({from:e,to:i})=>{let s=e==i&&function(t,e){if(/\(\)|\[\]|\{\}/.test(t.sliceDoc(e-1,e+1)))return{from:e,to:e};let i,s=Wl(t).resolve(e),n=s.childBefore(e),o=s.childAfter(e);return n&&o&&n.to<=e&&o.from>=e&&(i=n.type.prop(wl.closedBy))&&i.indexOf(o.name)>-1&&t.doc.lineAt(n.to).from==t.doc.lineAt(o.from).from?{from:n.to,to:o.from}:null}(t,e),n=new sh(t,{simulateBreak:e,simulateDoubleBreak:!!s}),o=ih(n,e);null==o&&(o=/^\s*/.exec(t.doc.lineAt(e).text)[0].length);let r=t.doc.lineAt(e);for(;i<r.to&&/\s/.test(r.text.slice(i-r.from,i+1-r.from));)i++;s?({from:e,to:i}=s):e>r.from&&e<r.from+100&&!/\S/.test(r.text.slice(0,e))&&(e=r.from);let a=["",eh(t,o)];return s&&a.push(eh(t,n.lineIndent(r))),{changes:{from:e,to:i,insert:si.of(a)},range:ki.cursor(e+1+a[1].length)}}));return e(t.update(i,{scrollIntoView:!0})),!0}},{key:"Mod-a",run:({state:t,dispatch:e})=>(e(t.update({selection:{anchor:0,head:t.doc.length},annotations:ts.userEvent.of("keyboardselection")})),!0)},{key:"Backspace",run:lc,shift:lc},{key:"Delete",run:hc,shift:hc},{key:"Mod-Backspace",mac:"Alt-Backspace",run:dc},{key:"Mod-Delete",mac:"Alt-Delete",run:uc},{mac:"Mod-Backspace",run:t=>rc(t,(e=>{let i=t.visualLineAt(e).from;return e>i?i:Math.max(0,e-1)}))},{mac:"Mod-Delete",run:pc}].concat([{key:"Ctrl-b",run:Th,shift:Hh,preventDefault:!0},{key:"Ctrl-f",run:Ph,shift:qh},{key:"Ctrl-p",run:Ih,shift:Jh},{key:"Ctrl-n",run:Nh,shift:Kh},{key:"Ctrl-a",run:t=>Oh(t,(e=>ki.cursor(t.visualLineAt(e.head).from,1))),shift:t=>jh(t,(e=>ki.cursor(t.visualLineAt(e.head).from)))},{key:"Ctrl-e",run:t=>Oh(t,(e=>ki.cursor(t.visualLineAt(e.head).to,-1))),shift:t=>jh(t,(e=>ki.cursor(t.visualLineAt(e.head).to)))},{key:"Ctrl-d",run:hc},{key:"Ctrl-h",run:t=>ac(t,!1,!1)},{key:"Ctrl-k",run:pc},{key:"Alt-d",run:uc},{key:"Ctrl-Alt-h",run:dc},{key:"Ctrl-o",run:({state:t,dispatch:e})=>{let i=t.changeByRange((t=>({changes:{from:t.from,to:t.to,insert:si.of(["",""])},range:ki.cursor(t.from)})));return e(t.update(i,{scrollIntoView:!0,annotations:ts.userEvent.of("input")})),!0}},{key:"Ctrl-t",run:({state:t,dispatch:e})=>{let i=t.changeByRange((e=>{if(!e.empty||0==e.from||e.from==t.doc.length)return{range:e};let i=e.from,s=t.doc.lineAt(i),n=i==s.from?i-1:Ge(s.text,i-s.from,!1)+s.from,o=i==s.to?i+1:Ge(s.text,i-s.from,!0)+s.from;return{changes:{from:n,to:o,insert:t.doc.slice(i,o).append(t.doc.slice(n,i))},range:ki.cursor(o)}}));return!i.changes.empty&&(e(t.update(i,{scrollIntoView:!0})),!0)}},{key:"Alt-f",run:t=>Dh(t,!0),shift:t=>Gh(t,!0)},{key:"Alt-b",run:t=>Dh(t,!1),shift:t=>Gh(t,!1)},{key:"Alt-<",run:ic},{key:"Alt->",run:sc},{key:"Ctrl-v",run:Fh},{key:"Alt-v",run:_h}].map((t=>({mac:t.key,run:t.run,shift:t.shift})))),bc=[{key:"Alt-ArrowLeft",mac:"Ctrl-ArrowLeft",run:t=>Oh(t,(e=>Rh(t.state,e,t.textDirection!=To.LTR))),shift:t=>jh(t,(e=>Rh(t.state,e,t.textDirection!=To.LTR)))},{key:"Alt-ArrowRight",mac:"Ctrl-ArrowRight",run:t=>Oh(t,(e=>Rh(t.state,e,t.textDirection==To.LTR))),shift:t=>jh(t,(e=>Rh(t.state,e,t.textDirection==To.LTR)))},{key:"Alt-ArrowUp",run:({state:t,dispatch:e})=>mc(t,e,!1)},{key:"Shift-Alt-ArrowUp",run:({state:t,dispatch:e})=>gc(t,e,!1)},{key:"Alt-ArrowDown",run:({state:t,dispatch:e})=>mc(t,e,!0)},{key:"Shift-Alt-ArrowDown",run:({state:t,dispatch:e})=>gc(t,e,!0)},{key:"Escape",run:({state:t,dispatch:e})=>{let i=t.selection,s=null;return i.ranges.length>1?s=ki.create([i.main]):i.main.empty||(s=ki.create([ki.cursor(i.main.head)])),!!s&&(e(Ch(t,s)),!0)}},{key:"Alt-l",mac:"Ctrl-l",run:({state:t,dispatch:e})=>{let i=fc(t).map((({from:e,to:i})=>ki.range(e,Math.min(i+1,t.doc.length))));return e(t.update({selection:ki.create(i),annotations:ts.userEvent.of("keyboardselection")})),!0}},{key:"Mod-i",run:({state:t,dispatch:e})=>{let i=Ah(t.selection,(e=>{var i;let s=Wl(t).resolve(e.head,1);for(;!(s.from<e.from&&s.to>=e.to||s.to>e.to&&s.from<=e.from)&&(null===(i=s.parent)||void 0===i?void 0:i.parent);)s=s.parent;return ki.range(s.to,s.from)}));return e(Ch(t,i)),!0},preventDefault:!0},{key:"Mod-[",run:({state:t,dispatch:e})=>(e(t.update(vc(t,((e,i)=>{let s=/^\s*/.exec(e.text)[0];if(!s)return;let n=ei(s,0,t.tabSize),o=0,r=eh(t,Math.max(0,n-th(t)));for(;o<s.length&&o<r.length&&s.charCodeAt(o)==r.charCodeAt(o);)o++;i.push({from:e.from+o,to:e.from+s.length,insert:r.slice(o)})})))),!0)},{key:"Mod-]",run:({state:t,dispatch:e})=>(e(t.update(vc(t,((e,i)=>{i.push({from:e.from,insert:t.facet(Zl)})})))),!0)},{key:"Mod-Alt-\\",run:({state:t,dispatch:e})=>{let i=Object.create(null),s=new sh(t,{overrideIndentation:t=>{let e=i[t];return null==e?-1:e}}),n=vc(t,((e,n,o)=>{let r=ih(s,e.from);if(null==r)return;let a=/^\s*/.exec(e.text)[0],l=eh(t,r);(a!=l||o.from<e.from+a.length)&&(i[e.from]=r,n.push({from:e.from,to:e.from+a.length,insert:l}))}));return n.changes.empty||e(t.update(n)),!0}},{key:"Shift-Mod-k",run:t=>{let{state:e}=t,i=e.changes(fc(e).map((({from:t,to:i})=>(t>0?t--:i<e.doc.length&&i++,{from:t,to:i})))),s=Ah(e.selection,(e=>t.moveVertically(e,!0))).map(i);return t.dispatch({changes:i,selection:s,scrollIntoView:!0}),!0}},{key:"Shift-Mod-\\",run:({state:t,dispatch:e})=>function(t,e,i){let s=!1,n=Ah(t.selection,(e=>{let n=Sh(t,e.head,-1)||Sh(t,e.head,1)||e.head>0&&Sh(t,e.head-1,1)||e.head<t.doc.length&&Sh(t,e.head+1,-1);if(!n||!n.end)return e;s=!0;let o=n.start.from==e.head?n.end.to:n.end.from;return i?ki.range(e.anchor,o):ki.cursor(o)}));return!!s&&(e(Ch(t,n)),!0)}(t,e,!1)}].concat(wc),xc=Ki.define(),yc=Ki.define(),kc=Oi.define(),Sc=Oi.define({combine:t=>us(t,{minDepth:100,newGroupDelay:500},{minDepth:Math.max,newGroupDelay:Math.min})}),Ac=Ei.define({create:()=>Fc.empty,update(t,e){let i=e.state.facet(Sc),s=e.annotation(xc);if(s){let n=Dc.fromTransaction(e),o=s.side,r=0==o?t.undone:t.done;return r=n?Ec(r,r.length,i.minDepth,n):Ic(r,e.startState.selection),new Fc(0==o?s.rest:r,0==o?r:s.rest)}let n=e.annotation(yc);if("full"!=n&&"before"!=n||(t=t.isolate()),!1===e.annotation(ts.addToHistory))return e.changes.empty?t:t.addMapping(e.changes.desc);let o=Dc.fromTransaction(e),r=e.annotation(ts.time),a=e.annotation(ts.userEvent);return o?t=t.addChanges(o,r,a,i.newGroupDelay,i.minDepth):e.selection&&(t=t.addSelection(e.startState.selection,r,a,i.newGroupDelay)),"full"!=n&&"after"!=n||(t=t.isolate()),t},toJSON:t=>({done:t.done.map((t=>t.toJSON())),undone:t.undone.map((t=>t.toJSON()))}),fromJSON:t=>new Fc(t.done.map(Dc.fromJSON),t.undone.map(Dc.fromJSON))});function Cc(t={}){return[Ac,Sc.of(t),oa.domEventHandlers({beforeinput:(t,e)=>"historyUndo"==t.inputType?Mc(e):"historyRedo"==t.inputType&&$c(e)})]}function Oc(t,e){return function({state:i,dispatch:s}){let n=i.field(Ac,!1);if(!n)return!1;let o=n.pop(t,i,e);return!!o&&(s(o),!0)}}const Mc=Oc(0,!1),$c=Oc(1,!1),Tc=Oc(0,!0),Pc=Oc(1,!0);class Dc{constructor(t,e,i,s,n){this.changes=t,this.effects=e,this.mapped=i,this.startSelection=s,this.selectionsAfter=n}setSelAfter(t){return new Dc(this.changes,this.effects,this.mapped,this.startSelection,t)}toJSON(){var t,e,i;return{changes:null===(t=this.changes)||void 0===t?void 0:t.toJSON(),mapped:null===(e=this.mapped)||void 0===e?void 0:e.toJSON(),startSelection:null===(i=this.startSelection)||void 0===i?void 0:i.toJSON(),selectionsAfter:this.selectionsAfter.map((t=>t.toJSON()))}}static fromJSON(t){return new Dc(t.changes&&fi.fromJSON(t.changes),[],t.mapped&&pi.fromJSON(t.mapped),t.startSelection&&ki.fromJSON(t.startSelection),t.selectionsAfter.map(ki.fromJSON))}static fromTransaction(t){let e=Lc;for(let i of t.startState.facet(kc)){let s=i(t);s.length&&(e=e.concat(s))}return!e.length&&t.changes.empty?null:new Dc(t.changes.invert(t.startState.doc),e,void 0,t.startState.selection,Lc)}static selection(t){return new Dc(void 0,Lc,void 0,void 0,t)}}function Ec(t,e,i,s){let n=e+1>i+20?e-i-1:0,o=t.slice(n,e);return o.push(s),o}function Rc(t,e){return t.length?e.length?t.concat(e):t:e}const Lc=[];function Ic(t,e){if(t.length){let i=t[t.length-1],s=i.selectionsAfter.slice(Math.max(0,i.selectionsAfter.length-200));return s.length&&s[s.length-1].eq(e)?t:(s.push(e),Ec(t,t.length-1,1e9,i.setSelAfter(s)))}return[Dc.selection([e])]}function Nc(t){let e=t[t.length-1],i=t.slice();return i[t.length-1]=e.setSelAfter(e.selectionsAfter.slice(0,e.selectionsAfter.length-1)),i}function Bc(t,e){if(!t.length)return t;let i=t.length,s=Lc;for(;i;){let n=_c(t[i-1],e,s);if(n.changes&&!n.changes.empty||n.effects.length){let e=t.slice(0,i);return e[i-1]=n,e}e=n.mapped,i--,s=n.selectionsAfter}return s.length?[Dc.selection(s)]:Lc}function _c(t,e,i){let s=Rc(t.selectionsAfter.length?t.selectionsAfter.map((t=>t.map(e))):Lc,i);if(!t.changes)return Dc.selection(s);let n=t.changes.map(e),o=e.mapDesc(t.changes,!0),r=t.mapped?t.mapped.composeDesc(o):o;return new Dc(n,Zi.mapEffects(t.effects,e),r,t.startSelection.map(o),s)}class Fc{constructor(t,e,i=0,s){this.done=t,this.undone=e,this.prevTime=i,this.prevUserEvent=s}isolate(){return this.prevTime?new Fc(this.done,this.undone):this}addChanges(t,e,i,s,n){let o=this.done,r=o[o.length-1];return o=r&&r.changes&&e-this.prevTime<s&&!r.selectionsAfter.length&&!r.changes.empty&&t.changes&&function(t,e){let i=[],s=!1;return t.iterChangedRanges(((t,e)=>i.push(t,e))),e.iterChangedRanges(((t,e,n,o)=>{for(let t=0;t<i.length;){let e=i[t++],r=i[t++];o>=e&&n<=r&&(s=!0)}})),s}(r.changes,t.changes)?Ec(o,o.length-1,n,new Dc(t.changes.compose(r.changes),Rc(t.effects,r.effects),r.mapped,r.startSelection,Lc)):Ec(o,o.length,n,t),new Fc(o,Lc,e,i)}addSelection(t,e,i,s){let n=this.done.length?this.done[this.done.length-1].selectionsAfter:Lc;return n.length>0&&e-this.prevTime<s&&"keyboardselection"==i&&this.prevUserEvent==i&&function(t,e){return t.ranges.length==e.ranges.length&&0===t.ranges.filter(((t,i)=>t.empty!=e.ranges[i].empty)).length}(n[n.length-1],t)?this:new Fc(Ic(this.done,t),this.undone,e,i)}addMapping(t){return new Fc(Bc(this.done,t),Bc(this.undone,t),this.prevTime,this.prevUserEvent)}pop(t,e,i){let s=0==t?this.done:this.undone;if(0==s.length)return null;let n=s[s.length-1];if(i&&n.selectionsAfter.length)return e.update({selection:n.selectionsAfter[n.selectionsAfter.length-1],annotations:xc.of({side:t,rest:Nc(s)})});if(n.changes){let i=1==s.length?Lc:s.slice(0,s.length-1);return n.mapped&&(i=Bc(i,n.mapped)),e.update({changes:n.changes,selection:n.startSelection,effects:n.effects,annotations:xc.of({side:t,rest:i}),filter:!1})}return null}}Fc.empty=new Fc(Lc,Lc);const Uc=[{key:"Mod-z",run:Mc,preventDefault:!0},{key:"Mod-y",mac:"Mod-Shift-z",run:$c,preventDefault:!0},{key:"Mod-u",run:Tc,preventDefault:!0},{key:"Alt-u",mac:"Mod-Shift-u",run:Pc,preventDefault:!0}];class zc extends bs{compare(t){return this==t||this.constructor==t.constructor&&this.eq(t)}eq(t){return!1}at(t){return this.range(t)}}zc.prototype.elementClass="",zc.prototype.toDOM=void 0,zc.prototype.mapMode=ui.TrackBefore,zc.prototype.point=!0;const Wc=Oi.define(),jc={class:"",renderEmptyElements:!1,elementStyle:"",markers:()=>Ss.empty,lineMarker:()=>null,initialSpacer:null,updateSpacer:null,domEventHandlers:{}},Vc=Oi.define();function Hc(t){return[Qc(),Vc.of(Object.assign(Object.assign({},jc),t))]}const qc=oa.baseTheme({".cm-gutters":{display:"flex",height:"100%",boxSizing:"border-box",left:0,zIndex:200},"&light .cm-gutters":{backgroundColor:"#f5f5f5",color:"#999",borderRight:"1px solid #ddd"},"&dark .cm-gutters":{backgroundColor:"#333338",color:"#ccc"},".cm-gutter":{display:"flex !important",flexDirection:"column",flexShrink:0,boxSizing:"border-box",height:"100%",overflow:"hidden"},".cm-gutterElement":{boxSizing:"border-box"},".cm-lineNumbers .cm-gutterElement":{padding:"0 3px 0 5px",minWidth:"20px",textAlign:"right",whiteSpace:"nowrap"},"&light .cm-activeLineGutter":{backgroundColor:"#e2f2ff"},"&dark .cm-activeLineGutter":{backgroundColor:"#222227"}}),Gc=Oi.define({combine:t=>t.some((t=>t))});function Qc(t){let e=[Jc,qc];return t&&!1===t.fixed&&e.push(Gc.of(!0)),e}const Jc=mo.fromClass(class{constructor(t){this.view=t,this.dom=document.createElement("div"),this.dom.className="cm-gutters",this.dom.setAttribute("aria-hidden","true"),this.gutters=t.state.facet(Vc).map((e=>new Zc(t,e)));for(let t of this.gutters)this.dom.appendChild(t.dom);this.fixed=!t.state.facet(Gc),this.fixed&&(this.dom.style.position="sticky"),t.scrollDOM.insertBefore(this.dom,t.contentDOM),this.syncGutters()}update(t){this.updateGutters(t)&&this.syncGutters()}syncGutters(){let t=Ss.iter(this.view.state.facet(Wc),this.view.viewport.from),e=[],i=this.gutters.map((t=>new Xc(t,this.view.viewport)));this.view.viewportLines((s=>{let n;if(Array.isArray(s.type)){for(let t of s.type)if(t.type==jn.Text){n=t;break}}else n=s.type==jn.Text?s:void 0;if(n){e.length&&(e=[]),Yc(t,e,s.from);for(let t of i)t.line(this.view,n,e)}}),0);for(let t of i)t.finish();this.dom.style.minHeight=this.view.contentHeight+"px",this.view.state.facet(Gc)!=!this.fixed&&(this.fixed=!this.fixed,this.dom.style.position=this.fixed?"sticky":"")}updateGutters(t){let e=t.startState.facet(Vc),i=t.state.facet(Vc),s=t.docChanged||t.heightChanged||t.viewportChanged||!Ss.eq(t.startState.facet(Wc),t.state.facet(Wc),t.view.viewport.from,t.view.viewport.to);if(e==i)for(let e of this.gutters)e.update(t)&&(s=!0);else{s=!0;let n=[];for(let s of i){let i=e.indexOf(s);i<0?n.push(new Zc(this.view,s)):(this.gutters[i].update(t),n.push(this.gutters[i]))}for(let t of this.gutters)t.dom.remove();for(let t of n)this.dom.appendChild(t.dom);this.gutters=n}return s}destroy(){this.dom.remove()}},{provide:uo.scrollMargins.from((t=>0!=t.gutters.length&&t.fixed?t.view.textDirection==To.LTR?{left:t.dom.offsetWidth}:{right:t.dom.offsetWidth}:null))});function Kc(t){return Array.isArray(t)?t:[t]}function Yc(t,e,i){for(;t.value&&t.from<=i;)t.from==i&&e.push(t.value),t.next()}class Xc{constructor(t,e){this.gutter=t,this.localMarkers=[],this.i=0,this.height=0,this.cursor=Ss.iter(t.markers,e.from)}line(t,e,i){this.localMarkers.length&&(this.localMarkers=[]),Yc(this.cursor,this.localMarkers,e.from);let s=i.length?this.localMarkers.concat(i):this.localMarkers,n=this.gutter.config.lineMarker(t,e,s);n&&s.unshift(n);let o=this.gutter;if(0==s.length&&!o.config.renderEmptyElements)return;let r=e.top-this.height;if(this.i==o.elements.length){let i=new td(t,e.height,r,s);o.elements.push(i),o.dom.appendChild(i.dom)}else{let i=o.elements[this.i];(function(t,e){if(t.length!=e.length)return!1;for(let i=0;i<t.length;i++)if(!t[i].compare(e[i]))return!1;return!0})(s,i.markers)&&(s=i.markers),i.update(t,e.height,r,s)}this.height=e.bottom,this.i++}finish(){let t=this.gutter;for(;t.elements.length>this.i;)t.dom.removeChild(t.elements.pop().dom)}}class Zc{constructor(t,e){this.view=t,this.config=e,this.elements=[],this.spacer=null,this.dom=document.createElement("div"),this.dom.className="cm-gutter"+(this.config.class?" "+this.config.class:"");for(let i in e.domEventHandlers)this.dom.addEventListener(i,(s=>{let n=t.visualLineAtHeight(s.clientY,t.contentDOM.getBoundingClientRect().top);e.domEventHandlers[i](t,n,s)&&s.preventDefault()}));this.markers=Kc(e.markers(t)),e.initialSpacer&&(this.spacer=new td(t,0,0,[e.initialSpacer(t)]),this.dom.appendChild(this.spacer.dom),this.spacer.dom.style.cssText+="visibility: hidden; pointer-events: none")}update(t){let e=this.markers;if(this.markers=Kc(this.config.markers(t.view)),this.spacer&&this.config.updateSpacer){let e=this.config.updateSpacer(this.spacer.markers[0],t);e!=this.spacer.markers[0]&&this.spacer.update(t.view,0,0,[e])}let i=t.view.viewport;return!Ss.eq(this.markers,e,i.from,i.to)}}class td{constructor(t,e,i,s){this.height=-1,this.above=0,this.dom=document.createElement("div"),this.update(t,e,i,s)}update(t,e,i,s){if(this.height!=e&&(this.dom.style.height=(this.height=e)+"px"),this.above!=i&&(this.dom.style.marginTop=(this.above=i)?i+"px":""),this.markers!=s){this.markers=s;for(let t;t=this.dom.lastChild;)t.remove();let e="cm-gutterElement";for(let i of s){i.toDOM&&this.dom.appendChild(i.toDOM(t));let s=i.elementClass;s&&(e+=" "+s)}this.dom.className=e}}}const ed=Oi.define(),id=Oi.define({combine:t=>us(t,{formatNumber:String,domEventHandlers:{}},{domEventHandlers(t,e){let i=Object.assign({},t);for(let t in e){let s=i[t],n=e[t];i[t]=s?(t,e,i)=>s(t,e,i)||n(t,e,i):n}return i}})});class sd extends zc{constructor(t){super(),this.number=t}eq(t){return this.number==t.number}toDOM(t){return document.createTextNode(this.number)}}function nd(t,e){return t.state.facet(id).formatNumber(e,t.state)}const od=Hc({class:"cm-lineNumbers",markers:t=>t.state.facet(ed),lineMarker:(t,e,i)=>i.some((t=>t.toDOM))?null:new sd(nd(t,t.state.doc.lineAt(e.from).number)),initialSpacer:t=>new sd(nd(t,ad(t.state.doc.lines))),updateSpacer(t,e){let i=nd(e.view,ad(e.view.state.doc.lines));return i==t.number?t:new sd(i)}});function rd(t={}){return[id.of(t),od]}function ad(t){let e=9;for(;e<t;)e=10*e+9;return e}function ld(t,e){let i=e.mapPos(t.from,1),s=e.mapPos(t.to,-1);return i>=s?void 0:{from:i,to:s}}const hd=Zi.define({map:ld}),cd=Zi.define({map:ld});function dd(t){let e=[];for(let{head:i}of t.state.selection.ranges)e.some((t=>t.from<=i&&t.to>=i))||e.push(t.visualLineAt(i));return e}const ud=Ei.define({create:()=>Vn.none,update(t,e){t=t.map(e.changes);for(let i of e.effects)i.is(hd)&&!fd(t,i.value.from,i.value.to)?t=t.update({add:[yd.range(i.value.from,i.value.to)]}):i.is(cd)&&(t=t.update({filter:(t,e)=>i.value.from!=t||i.value.to!=e,filterFrom:i.value.from,filterTo:i.value.to}));if(e.selection){let i=!1,{head:s}=e.selection.main;t.between(s,s,((t,e)=>{t<s&&e>s&&(i=!0)})),i&&(t=t.update({filterFrom:s,filterTo:s,filter:(t,e)=>e<=s||t>=s}))}return t},provide:t=>oa.decorations.from(t)});function pd(t,e,i){var s;let n=null;return null===(s=t.field(ud,!1))||void 0===s||s.between(e,i,((t,e)=>{(!n||n.from>t)&&(n={from:t,to:e})})),n}function fd(t,e,i){let s=!1;return t.between(e,e,((t,n)=>{t==e&&n==i&&(s=!0)})),s}function md(t,e){return t.field(ud,!1)?e:e.concat(Zi.appendConfig.of(xd()))}function gd(t,e,i=!0){let s=t.state.doc.lineAt(e.from).number,n=t.state.doc.lineAt(e.to).number;return oa.announce.of(`${t.state.phrase(i?"Folded lines":"Unfolded lines")} ${s} ${t.state.phrase("to")} ${n}.`)}const vd=[{key:"Ctrl-Shift-[",mac:"Cmd-Alt-[",run:t=>{for(let e of dd(t)){let i=fh(t.state,e.from,e.to);if(i)return t.dispatch({effects:md(t.state,[hd.of(i),gd(t,i)])}),!0}return!1}},{key:"Ctrl-Shift-]",mac:"Cmd-Alt-]",run:t=>{if(!t.state.field(ud,!1))return!1;let e=[];for(let i of dd(t)){let s=pd(t.state,i.from,i.to);s&&e.push(cd.of(s),gd(t,s,!1))}return e.length&&t.dispatch({effects:e}),e.length>0}},{key:"Ctrl-Alt-[",run:t=>{let{state:e}=t,i=[];for(let s=0;s<e.doc.length;){let n=t.visualLineAt(s),o=fh(e,n.from,n.to);o&&i.push(hd.of(o)),s=(o?t.visualLineAt(o.to):n).to+1}return i.length&&t.dispatch({effects:md(t.state,i)}),!!i.length}},{key:"Ctrl-Alt-]",run:t=>{let e=t.state.field(ud,!1);if(!e||!e.size)return!1;let i=[];return e.between(0,t.state.doc.length,((t,e)=>{i.push(cd.of({from:t,to:e}))})),t.dispatch({effects:i}),!0}}],wd={placeholderDOM:null,placeholderText:"…"},bd=Oi.define({combine:t=>us(t,wd)});function xd(t){let e=[ud,Cd];return t&&e.push(bd.of(t)),e}const yd=Vn.replace({widget:new class extends Wn{ignoreEvents(){return!1}toDOM(t){let{state:e}=t,i=e.facet(bd);if(i.placeholderDOM)return i.placeholderDOM();let s=document.createElement("span");return s.textContent=i.placeholderText,s.setAttribute("aria-label",e.phrase("folded code")),s.title=e.phrase("unfold"),s.className="cm-foldPlaceholder",s.onclick=e=>{let i=t.visualLineAt(t.posAtDOM(e.target)),s=pd(t.state,i.from,i.to);s&&t.dispatch({effects:cd.of(s)}),e.preventDefault()},s}}}),kd={openText:"⌄",closedText:"›",markerDOM:null};class Sd extends zc{constructor(t,e){super(),this.config=t,this.open=e}eq(t){return this.config==t.config&&this.open==t.open}toDOM(t){if(this.config.markerDOM)return this.config.markerDOM(this.open);let e=document.createElement("span");return e.textContent=this.open?this.config.openText:this.config.closedText,e.title=t.state.phrase(this.open?"Fold line":"Unfold line"),e}}function Ad(t={}){let e=Object.assign(Object.assign({},kd),t),i=new Sd(e,!0),s=new Sd(e,!1),n=mo.fromClass(class{constructor(t){this.from=t.viewport.from,this.markers=this.buildMarkers(t)}update(t){(t.docChanged||t.viewportChanged||t.startState.facet(Kl)!=t.state.facet(Kl)||t.startState.field(ud,!1)!=t.state.field(ud,!1))&&(this.markers=this.buildMarkers(t.view))}buildMarkers(t){let e=new As;return t.viewportLines((n=>{let o=pd(t.state,n.from,n.to)?s:fh(t.state,n.from,n.to)?i:null;o&&e.add(n.from,n.from,o)})),e.finish()}});return[n,Hc({class:"cm-foldGutter",markers(t){var e;return(null===(e=t.plugin(n))||void 0===e?void 0:e.markers)||Ss.empty},initialSpacer:()=>new Sd(e,!1),domEventHandlers:{click:(t,e)=>{let i=pd(t.state,e.from,e.to);if(i)return t.dispatch({effects:cd.of(i)}),!0;let s=fh(t.state,e.from,e.to);return!!s&&(t.dispatch({effects:hd.of(s)}),!0)}}}),xd()]}const Cd=oa.baseTheme({".cm-foldPlaceholder":{backgroundColor:"#eee",border:"1px solid #ddd",color:"#888",borderRadius:".2em",margin:"0 1px",padding:"0 1px",cursor:"pointer"},".cm-foldGutter .cm-gutterElement":{padding:"0 1px",cursor:"pointer"}}),Od={brackets:["(","[","{","'",'"'],before:")]}'\":;>"},Md=Zi.define({map(t,e){let i=e.mapPos(t,-1,ui.TrackAfter);return null==i?void 0:i}}),$d=Zi.define({map:(t,e)=>e.mapPos(t)}),Td=new class extends bs{};Td.startSide=1,Td.endSide=-1;const Pd=Ei.define({create:()=>Ss.empty,update(t,e){if(e.selection){let i=e.state.doc.lineAt(e.selection.main.head).from,s=e.startState.doc.lineAt(e.startState.selection.main.head).from;i!=e.changes.mapPos(s,-1)&&(t=Ss.empty)}t=t.map(e.changes);for(let i of e.effects)i.is(Md)?t=t.update({add:[Td.range(i.value,i.value+1)]}):i.is($d)&&(t=t.update({filter:t=>t!=i.value}));return t}});function Dd(t){for(let e=0;e<"()[]{}<>".length;e+=2)if("()[]{}<>".charCodeAt(e)==t)return"()[]{}<>".charAt(e+1);return Ze(t<128?t:t+1)}function Ed(t,e){return t.languageDataAt("closeBrackets",e)[0]||Od}function Rd(t,e,i,s){if(t.composing)return!1;let n=t.state.selection.main;if(s.length>2||2==s.length&&1==ti(Xe(s,0))||e!=n.from||i!=n.to)return!1;let o=function(t,e){let i=Ed(t,t.selection.main.head),s=i.brackets||Od.brackets;for(let n of s){let o=Dd(Xe(n,0));if(e==n)return o==n?Fd(t,n,s.indexOf(n+n+n)>-1):Bd(t,n,o,i.before||Od.before);if(e==o&&Id(t,t.selection.main.from))return _d(t,n,o)}return null}(t.state,s);return!!o&&(t.dispatch(o),!0)}const Ld=[{key:"Backspace",run:({state:t,dispatch:e})=>{let i=Ed(t,t.selection.main.head).brackets||Od.brackets,s=null,n=t.changeByRange((e=>{if(e.empty){let s=function(t,e){let i=t.sliceString(e-2,e);return ti(Xe(i,0))==i.length?i:i.slice(1)}(t.doc,e.head);for(let n of i)if(n==s&&Nd(t.doc,e.head)==Dd(Xe(n,0)))return{changes:{from:e.head-n.length,to:e.head+n.length},range:ki.cursor(e.head-n.length),annotations:ts.userEvent.of("delete")}}return{range:s=e}}));return s||e(t.update(n,{scrollIntoView:!0})),!s}}];function Id(t,e){let i=!1;return t.field(Pd).between(0,t.doc.length,(t=>{t==e&&(i=!0)})),i}function Nd(t,e){let i=t.sliceString(e,e+2);return i.slice(0,ti(Xe(i,0)))}function Bd(t,e,i,s){let n=null,o=t.changeByRange((o=>{if(!o.empty)return{changes:[{insert:e,from:o.from},{insert:i,from:o.to}],effects:Md.of(o.to+e.length),range:ki.range(o.anchor+e.length,o.head+e.length)};let r=Nd(t.doc,o.head);return!r||/\s/.test(r)||s.indexOf(r)>-1?{changes:{insert:e+i,from:o.head},effects:Md.of(o.head+e.length),range:ki.cursor(o.head+e.length)}:{range:n=o}}));return n?null:t.update(o,{scrollIntoView:!0,annotations:ts.userEvent.of("input")})}function _d(t,e,i){let s=null,n=t.selection.ranges.map((e=>e.empty&&Nd(t.doc,e.head)==i?ki.cursor(e.head+i.length):s=e));return s?null:t.update({selection:ki.create(n,t.selection.mainIndex),scrollIntoView:!0,effects:t.selection.ranges.map((({from:t})=>$d.of(t)))})}function Fd(t,e,i){let s=null,n=t.changeByRange((n=>{if(!n.empty)return{changes:[{insert:e,from:n.from},{insert:e,from:n.to}],effects:Md.of(n.to+e.length),range:ki.range(n.anchor+e.length,n.head+e.length)};let o=n.head,r=Nd(t.doc,o);if(r==e){if(Ud(t,o))return{changes:{insert:e+e,from:o},effects:Md.of(o+e.length),range:ki.cursor(o+e.length)};if(Id(t,o)){let s=i&&t.sliceDoc(o,o+3*e.length)==e+e+e;return{range:ki.cursor(o+e.length*(s?3:1)),effects:$d.of(o)}}}else{if(i&&t.sliceDoc(o-2*e.length,o)==e+e&&Ud(t,o-2*e.length))return{changes:{insert:e+e+e+e,from:o},effects:Md.of(o+e.length),range:ki.cursor(o+e.length)};if(t.charCategorizer(o)(r)!=as.Word){let i=t.sliceDoc(o-1,o);if(i!=e&&t.charCategorizer(o)(i)!=as.Word)return{changes:{insert:e+e,from:o},effects:Md.of(o+e.length),range:ki.cursor(o+e.length)}}}return{range:s=n}}));return s?null:t.update(n,{scrollIntoView:!0,annotations:ts.userEvent.of("input")})}function Ud(t,e){let i=Wl(t).resolve(e+1);return i.parent&&i.from==e}const zd=Oi.define({combine(t){let e,i;for(let s of t)e=e||s.topContainer,i=i||s.bottomContainer;return{topContainer:e,bottomContainer:i}}});function Wd(t,e){let i=t.plugin(jd),s=i?i.specs.indexOf(e):-1;return s>-1?i.panels[s]:null}const jd=mo.fromClass(class{constructor(t){this.input=t.state.facet(Gd),this.specs=this.input.filter((t=>t)),this.panels=this.specs.map((e=>e(t)));let e=t.state.facet(zd);this.top=new Vd(t,!0,e.topContainer),this.bottom=new Vd(t,!1,e.bottomContainer),this.top.sync(this.panels.filter((t=>t.top))),this.bottom.sync(this.panels.filter((t=>!t.top)));for(let t of this.panels)t.dom.classList.add("cm-panel"),t.class&&t.dom.classList.add(t.class),t.mount&&t.mount()}update(t){let e=t.state.facet(zd);this.top.container!=e.topContainer&&(this.top.sync([]),this.top=new Vd(t.view,!0,e.topContainer)),this.bottom.container!=e.bottomContainer&&(this.bottom.sync([]),this.bottom=new Vd(t.view,!1,e.bottomContainer)),this.top.syncClasses(),this.bottom.syncClasses();let i=t.state.facet(Gd);if(i!=this.input){let e=i.filter((t=>t)),s=[],n=[],o=[],r=[];for(let i of e){let e,a=this.specs.indexOf(i);a<0?(e=i(t.view),r.push(e)):(e=this.panels[a],e.update&&e.update(t)),s.push(e),(e.top?n:o).push(e)}this.specs=e,this.panels=s,this.top.sync(n),this.bottom.sync(o);for(let t of r)t.dom.classList.add("cm-panel"),t.class&&t.dom.classList.add(t.class),t.mount&&t.mount()}else for(let e of this.panels)e.update&&e.update(t)}destroy(){this.top.sync([]),this.bottom.sync([])}},{provide:uo.scrollMargins.from((t=>({top:t.top.scrollMargin(),bottom:t.bottom.scrollMargin()})))});class Vd{constructor(t,e,i){this.view=t,this.top=e,this.container=i,this.dom=void 0,this.classes="",this.panels=[],this.syncClasses()}sync(t){this.panels=t,this.syncDOM()}syncDOM(){if(0==this.panels.length)return void(this.dom&&(this.dom.remove(),this.dom=void 0));if(!this.dom){this.dom=document.createElement("div"),this.dom.className=this.top?"cm-panels cm-panels-top":"cm-panels cm-panels-bottom",this.dom.style[this.top?"top":"bottom"]="0";let t=this.container||this.view.dom;t.insertBefore(this.dom,this.top?t.firstChild:null)}let t=this.dom.firstChild;for(let e of this.panels)if(e.dom.parentNode==this.dom){for(;t!=e.dom;)t=Hd(t);t=t.nextSibling}else this.dom.insertBefore(e.dom,t);for(;t;)t=Hd(t)}scrollMargin(){return!this.dom||this.container?0:Math.max(0,this.top?this.dom.getBoundingClientRect().bottom-Math.max(0,this.view.scrollDOM.getBoundingClientRect().top):Math.min(innerHeight,this.view.scrollDOM.getBoundingClientRect().bottom)-this.dom.getBoundingClientRect().top)}syncClasses(){if(this.container&&this.classes!=this.view.themeClasses){for(let t of this.classes.split(" "))t&&this.container.classList.remove(t);for(let t of(this.classes=this.view.themeClasses).split(" "))t&&this.container.classList.add(t)}}}function Hd(t){let e=t.nextSibling;return t.remove(),e}const qd=oa.baseTheme({".cm-panels":{boxSizing:"border-box",position:"sticky",left:0,right:0},"&light .cm-panels":{backgroundColor:"#f5f5f5",color:"black"},"&light .cm-panels-top":{borderBottom:"1px solid #ddd"},"&light .cm-panels-bottom":{borderTop:"1px solid #ddd"},"&dark .cm-panels":{backgroundColor:"#333338",color:"white"}}),Gd=Oi.define({enables:[jd,qd]});function Qd(){var t=arguments[0];"string"==typeof t&&(t=document.createElement(t));var e=1,i=arguments[1];if(i&&"object"==typeof i&&null==i.nodeType&&!Array.isArray(i)){for(var s in i)if(Object.prototype.hasOwnProperty.call(i,s)){var n=i[s];"string"==typeof n?t.setAttribute(s,n):null!=n&&(t[s]=n)}e++}for(;e<arguments.length;e++)Jd(t,arguments[e]);return t}function Jd(t,e){if("string"==typeof e)t.appendChild(document.createTextNode(e));else if(null==e);else if(null!=e.nodeType)t.appendChild(e);else{if(!Array.isArray(e))throw new RangeError("Unsupported child node: "+e);for(var i=0;i<e.length;i++)Jd(t,e[i])}}const Kd="function"==typeof String.prototype.normalize?t=>t.normalize("NFKD"):t=>t;class Yd{constructor(t,e,i=0,s=t.length,n){this.value={from:0,to:0},this.done=!1,this.matches=[],this.buffer="",this.bufferPos=0,this.iter=t.iterRange(i,s),this.bufferStart=i,this.normalize=n?t=>n(Kd(t)):Kd,this.query=this.normalize(e)}peek(){if(this.bufferPos==this.buffer.length){if(this.bufferStart+=this.buffer.length,this.iter.next(),this.iter.done)return-1;this.bufferPos=0,this.buffer=this.iter.value}return Xe(this.buffer,this.bufferPos)}next(){for(;this.matches.length;)this.matches.pop();return this.nextOverlapping()}nextOverlapping(){for(;;){let t=this.peek();if(t<0)return this.done=!0,this;let e=Ze(t),i=this.bufferStart+this.bufferPos;this.bufferPos+=ti(t);let s=this.normalize(e);for(let t=0,n=i;;t++){let o=s.charCodeAt(t),r=this.match(o,n);if(r)return this.value=r,this;if(t==s.length-1)break;n==i&&t<e.length&&e.charCodeAt(t)==o&&n++}}}match(t,e){let i=null;for(let s=0;s<this.matches.length;s+=2){let n=this.matches[s],o=!1;this.query.charCodeAt(n)==t&&(n==this.query.length-1?i={from:this.matches[s+1],to:e+1}:(this.matches[s]++,o=!0)),o||(this.matches.splice(s,2),s-=2)}return this.query.charCodeAt(0)==t&&(1==this.query.length?i={from:e,to:e+1}:this.matches.push(1,e)),i}}const Xd={from:-1,to:-1,match:/.*/.exec("")},Zd="gm"+(null==/x/.unicode?"":"u");class tu{constructor(t,e,i,s=0,n=t.length){if(this.to=n,this.curLine="",this.done=!1,this.value=Xd,/\\[sWDnr]|\n|\r|\[\^/.test(e))return new su(t,e,i,s,n);this.re=new RegExp(e,Zd+((null==i?void 0:i.ignoreCase)?"i":"")),this.iter=t.iter();let o=t.lineAt(s);this.curLineStart=o.from,this.matchPos=s,this.getLine(this.curLineStart)}getLine(t){this.iter.next(t),this.iter.lineBreak?this.curLine="":(this.curLine=this.iter.value,this.curLineStart+this.curLine.length>this.to&&(this.curLine=this.curLine.slice(0,this.to-this.curLineStart)),this.iter.next())}nextLine(){this.curLineStart=this.curLineStart+this.curLine.length+1,this.curLineStart>this.to?this.curLine="":this.getLine(0)}next(){for(let t=this.matchPos-this.curLineStart;;){this.re.lastIndex=t;let e=this.matchPos<=this.to&&this.re.exec(this.curLine);if(e){let i=this.curLineStart+e.index,s=i+e[0].length;if(this.matchPos=s+(i==s?1:0),i==this.curLine.length&&this.nextLine(),i<s||i>this.value.to)return this.value={from:i,to:s,match:e},this;t=this.matchPos-this.curLineStart}else{if(!(this.curLineStart+this.curLine.length<this.to))return this.done=!0,this;this.nextLine(),t=0}}}}const eu=new WeakMap;class iu{constructor(t,e){this.from=t,this.text=e}get to(){return this.from+this.text.length}static get(t,e,i){let s=eu.get(t);if(!s||s.from>=i||s.to<=e){let s=new iu(e,t.sliceString(e,i));return eu.set(t,s),s}if(s.from==e&&s.to==i)return s;let{text:n,from:o}=s;return o>e&&(n=t.sliceString(e,o)+n,o=e),s.to<i&&(n+=t.sliceString(s.to,i)),eu.set(t,new iu(o,n)),new iu(e,n.slice(e-o,i-o))}}class su{constructor(t,e,i,s,n){this.text=t,this.to=n,this.done=!1,this.value=Xd,this.matchPos=s,this.re=new RegExp(e,Zd+((null==i?void 0:i.ignoreCase)?"i":"")),this.flat=iu.get(t,s,this.chunkEnd(s+5e3))}chunkEnd(t){return t>=this.to?this.to:this.text.lineAt(t).to}next(){for(;;){let t=this.re.lastIndex=this.matchPos-this.flat.from,e=this.re.exec(this.flat.text);if(e&&!e[0]&&e.index==t&&(this.re.lastIndex=t+1,e=this.re.exec(this.flat.text)),e&&this.flat.to<this.to&&e.index+e[0].length>this.flat.text.length-10&&(e=null),e){let t=this.flat.from+e.index,i=t+e[0].length;return this.value={from:t,to:i,match:e},this.matchPos=i+(t==i?1:0),this}if(this.flat.to==this.to)return this.done=!0,this;this.flat=iu.get(this.text,this.flat.from,this.chunkEnd(this.flat.from+2*this.flat.text.length))}}}function nu(t){let e=Qd("input",{class:"cm-textfield",name:"line"});function i(){let i=/^([+-])?(\d+)?(:\d+)?(%)?$/.exec(e.value);if(!i)return;let{state:s}=t,n=s.doc.lineAt(s.selection.main.head),[,o,r,a,l]=i,h=a?+a.slice(1):0,c=r?+r:n.number;if(r&&l){let t=c/100;o&&(t=t*("-"==o?-1:1)+n.number/s.doc.lines),c=Math.round(s.doc.lines*t)}else r&&o&&(c=c*("-"==o?-1:1)+n.number);let d=s.doc.line(Math.max(1,Math.min(s.doc.lines,c)));t.dispatch({effects:ou.of(!1),selection:ki.cursor(d.from+Math.max(0,Math.min(h,d.length))),scrollIntoView:!0}),t.focus()}return{dom:Qd("form",{class:"cm-gotoLine",onkeydown:e=>{27==e.keyCode?(e.preventDefault(),t.dispatch({effects:ou.of(!1)}),t.focus()):13==e.keyCode&&(e.preventDefault(),i())},onsubmit:t=>{t.preventDefault(),i()}},Qd("label",t.state.phrase("Go to line"),": ",e)," ",Qd("button",{class:"cm-button",type:"submit"},t.state.phrase("go"))),pos:-10}}const ou=Zi.define(),ru=Ei.define({create:()=>!0,update(t,e){for(let i of e.effects)i.is(ou)&&(t=i.value);return t},provide:t=>Gd.from(t,(t=>t?nu:null))}),au=oa.baseTheme({".cm-panel.cm-gotoLine":{padding:"2px 6px 4px","& label":{fontSize:"80%"}}}),lu={highlightWordAroundCursor:!1,minSelectionLength:1,maxMatches:100},hu=Oi.define({combine:t=>us(t,lu,{highlightWordAroundCursor:(t,e)=>t||e,minSelectionLength:Math.min,maxMatches:Math.min})});function cu(t){let e=[fu,pu];return t&&e.push(hu.of(t)),e}const du=Vn.mark({class:"cm-selectionMatch"}),uu=Vn.mark({class:"cm-selectionMatch cm-selectionMatch-main"}),pu=mo.fromClass(class{constructor(t){this.decorations=this.getDeco(t)}update(t){(t.selectionSet||t.docChanged||t.viewportChanged)&&(this.decorations=this.getDeco(t.view))}getDeco(t){let e=t.state.facet(hu),{state:i}=t,s=i.selection;if(s.ranges.length>1)return Vn.none;let n,o=s.main,r=null;if(o.empty){if(!e.highlightWordAroundCursor)return Vn.none;let t=i.wordAt(o.head);if(!t)return Vn.none;r=i.charCategorizer(o.head),n=i.sliceDoc(t.from,t.to)}else{let t=o.to-o.from;if(t<e.minSelectionLength||t>200)return Vn.none;if(n=i.sliceDoc(o.from,o.to).trim(),!n)return Vn.none}let a=[];for(let s of t.visibleRanges){let t=new Yd(i.doc,n,s.from,s.to);for(;!t.nextOverlapping().done;){let{from:s,to:n}=t.value;if((!r||(0==s||r(i.sliceDoc(s-1,s))!=as.Word)&&(n==i.doc.length||r(i.sliceDoc(n,n+1))!=as.Word))&&(r&&s<=o.from&&n>=o.to?a.push(uu.range(s,n)):(s>=o.to||n<=o.from)&&a.push(du.range(s,n)),a.length>e.maxMatches))return Vn.none}}return Vn.set(a)}},{decorations:t=>t.decorations}),fu=oa.baseTheme({".cm-selectionMatch":{backgroundColor:"#99ff7780"},".cm-searchMatch .cm-selectionMatch":{backgroundColor:"transparent"}});const mu=Oi.define({combine:t=>({top:t.some((t=>t.top))})});class gu{constructor(t,e,i){this.search=t,this.replace=e,this.caseInsensitive=i}eq(t){return this.search==t.search&&this.replace==t.replace&&this.caseInsensitive==t.caseInsensitive&&this.constructor==t.constructor}}class vu extends gu{constructor(t,e,i){super(t,e,i),this.unquoted=t.replace(/\\([nrt\\])/g,((t,e)=>"n"==e?"\n":"r"==e?"\r":"t"==e?"\t":"\\"))}cursor(t,e=0,i=t.length){return new Yd(t,this.unquoted,e,i,this.caseInsensitive?t=>t.toLowerCase():void 0)}nextMatch(t,e,i){let s=this.cursor(t,i).nextOverlapping();return s.done&&(s=this.cursor(t,0,e).nextOverlapping()),s.done?null:s.value}prevMatchInRange(t,e,i){for(let s=i;;){let i=Math.max(e,s-1e4-this.unquoted.length),n=this.cursor(t,i,s),o=null;for(;!n.nextOverlapping().done;)o=n.value;if(o)return o;if(i==e)return null;s-=1e4}}prevMatch(t,e,i){return this.prevMatchInRange(t,0,e)||this.prevMatchInRange(t,i,t.length)}getReplacement(t){return this.replace}matchAll(t,e){let i=this.cursor(t),s=[];for(;!i.next().done;){if(s.length>=e)return null;s.push(i.value)}return s}highlight(t,e,i,s){let n=this.cursor(t,Math.max(0,e-this.unquoted.length),Math.min(i+this.unquoted.length,t.length));for(;!n.next().done;)s(n.value.from,n.value.to)}get valid(){return!!this.search}}class wu extends gu{constructor(t,e,i){super(t,e,i),this.valid=!!t&&function(t){try{return new RegExp(t,Zd),!0}catch(t){return!1}}(t)}cursor(t,e=0,i=t.length){return new tu(t,this.search,this.caseInsensitive?{ignoreCase:!0}:void 0,e,i)}nextMatch(t,e,i){let s=this.cursor(t,i).next();return s.done&&(s=this.cursor(t,0,e).next()),s.done?null:s.value}prevMatchInRange(t,e,i){for(let s=1;;s++){let n=Math.max(e,i-1e4*s),o=this.cursor(t,n,i),r=null;for(;!o.next().done;)r=o.value;if(r&&(n==e||r.from>n+10))return r;if(n==e)return null}}prevMatch(t,e,i){return this.prevMatchInRange(t,0,e)||this.prevMatchInRange(t,i,t.length)}getReplacement(t){return this.replace.replace(/\$([$&\d+])/g,((e,i)=>"$"==i?"$":"&"==i?t.match[0]:"0"!=i&&+i<t.match.length?t.match[i]:e))}matchAll(t,e){let i=this.cursor(t),s=[];for(;!i.next().done;){if(s.length>=e)return null;s.push(i.value)}return s}highlight(t,e,i,s){let n=this.cursor(t,Math.max(0,e-250),Math.min(i+250,t.length));for(;!n.next().done;)s(n.value.from,n.value.to)}}const bu=Zi.define(),xu=Zi.define(),yu=Ei.define({create:t=>new ku(Ru(t),Eu),update(t,e){for(let i of e.effects)i.is(bu)?t=new ku(i.value,t.panel):i.is(xu)&&(t=new ku(t.query,i.value?Eu:null));return t},provide:t=>Gd.from(t,(t=>t.panel))});class ku{constructor(t,e){this.query=t,this.panel=e}}const Su=Vn.mark({class:"cm-searchMatch"}),Au=Vn.mark({class:"cm-searchMatch cm-searchMatch-selected"}),Cu=mo.fromClass(class{constructor(t){this.view=t,this.decorations=this.highlight(t.state.field(yu))}update(t){let e=t.state.field(yu);(e!=t.startState.field(yu)||t.docChanged||t.selectionSet)&&(this.decorations=this.highlight(e))}highlight({query:t,panel:e}){if(!e||!t.valid)return Vn.none;let{view:i}=this,s=new As;for(let e=0,n=i.visibleRanges,o=n.length;e<o;e++){let{from:r,to:a}=n[e];for(;e<o-1&&a>n[e+1].from-500;)a=n[++e].to;t.highlight(i.state.doc,r,a,((t,e)=>{let n=i.state.selection.ranges.some((i=>i.from==t&&i.to==e));s.add(t,e,n?Au:Su)}))}return s.finish()}},{decorations:t=>t.decorations});function Ou(t){return e=>{let i=e.state.field(yu,!1);return i&&i.query.valid?t(e,i):Lu(e)}}const Mu=Ou(((t,{query:e})=>{let{from:i,to:s}=t.state.selection.main,n=e.nextMatch(t.state.doc,i,s);return!(!n||n.from==i&&n.to==s)&&(t.dispatch({selection:{anchor:n.from,head:n.to},scrollIntoView:!0,effects:Fu(t,n)}),!0)})),$u=Ou(((t,{query:e})=>{let{state:i}=t,{from:s,to:n}=i.selection.main,o=e.prevMatch(i.doc,s,n);return!!o&&(t.dispatch({selection:{anchor:o.from,head:o.to},scrollIntoView:!0,effects:Fu(t,o)}),!0)})),Tu=Ou(((t,{query:e})=>{let i=e.matchAll(t.state.doc,1e3);return!(!i||!i.length)&&(t.dispatch({selection:ki.create(i.map((t=>ki.range(t.from,t.to))))}),!0)})),Pu=Ou(((t,{query:e})=>{let{state:i}=t,{from:s,to:n}=i.selection.main,o=e.nextMatch(i.doc,s,s);if(!o)return!1;let r,a,l=[];if(o.from==s&&o.to==n&&(a=i.toText(e.getReplacement(o)),l.push({from:o.from,to:o.to,insert:a}),o=e.nextMatch(i.doc,o.from,o.to)),o){let t=0==l.length||l[0].from>=o.to?0:o.to-o.from-a.length;r={anchor:o.from-t,head:o.to-t}}return t.dispatch({changes:l,selection:r,scrollIntoView:!!r,effects:o?Fu(t,o):void 0}),!0})),Du=Ou(((t,{query:e})=>{let i=e.matchAll(t.state.doc,1e9).map((t=>{let{from:i,to:s}=t;return{from:i,to:s,insert:e.getReplacement(t)}}));return!!i.length&&(t.dispatch({changes:i}),!0)}));function Eu(t){let{query:e}=t.state.field(yu);return{dom:Bu({view:t,query:e,updateQuery(i){e.eq(i)||(e=i,t.dispatch({effects:bu.of(e)}))}}),mount(){this.dom.querySelector("[name=search]").select()},pos:80,top:t.state.facet(mu).top}}function Ru(t,e){let i=t.selection.main,s=i.empty||i.to>i.from+100?"":t.sliceDoc(i.from,i.to);return e&&!s?e:new vu(s.replace(/\n/g,"\\n"),"",(null==e?void 0:e.caseInsensitive)||!1)}const Lu=t=>{let e=t.state.field(yu,!1);if(e&&e.panel){let e=Wd(t,Eu);if(!e)return!1;e.dom.querySelector("[name=search]").focus()}else t.dispatch({effects:[xu.of(!0),e?bu.of(Ru(t.state,e.query)):Zi.appendConfig.of(zu)]});return!0},Iu=t=>{let e=t.state.field(yu,!1);if(!e||!e.panel)return!1;let i=Wd(t,Eu);return i&&i.dom.contains(t.root.activeElement)&&t.focus(),t.dispatch({effects:xu.of(!1)}),!0},Nu=[{key:"Mod-f",run:Lu,scope:"editor search-panel"},{key:"F3",run:Mu,shift:$u,scope:"editor search-panel"},{key:"Mod-g",run:Mu,shift:$u,scope:"editor search-panel"},{key:"Escape",run:Iu,scope:"editor search-panel"},{key:"Mod-Shift-l",run:({state:t,dispatch:e})=>{let i=t.selection;if(i.ranges.length>1||i.main.empty)return!1;let{from:s,to:n}=i.main,o=[],r=0;for(let e=new Yd(t.doc,t.sliceDoc(s,n));!e.next().done;){if(o.length>1e3)return!1;e.value.from==s&&(r=o.length),o.push(ki.range(e.value.from,e.value.to))}return e(t.update({selection:ki.create(o,r)})),!0}},{key:"Alt-g",run:t=>{let e=Wd(t,nu);if(!e){let i=[ou.of(!0)];null==t.state.field(ru,!1)&&i.push(Zi.appendConfig.of([ru,au])),t.dispatch({effects:i}),e=Wd(t,nu)}return e&&e.dom.querySelector("input").focus(),!0}},{key:"Mod-d",run:({state:t,dispatch:e})=>{let{ranges:i}=t.selection;if(i.some((t=>t.from===t.to)))return(({state:t,dispatch:e})=>{let{selection:i}=t,s=ki.create(i.ranges.map((e=>t.wordAt(e.head)||ki.cursor(e.head))),i.mainIndex);return!s.eq(i)&&(e(t.update({selection:s})),!0)})({state:t,dispatch:e});let s=t.sliceDoc(i[0].from,i[0].to);if(t.selection.ranges.some((e=>t.sliceDoc(e.from,e.to)!=s)))return!1;let n=function(t,e){let{ranges:i}=t.selection,s=new Yd(t.doc,e,i[i.length-1].to).next();if(!s.done)return s.value;let n=new Yd(t.doc,e,0,Math.max(0,i[i.length-1].from-1));for(;!n.next().done;)if(!i.some((t=>t.from===n.value.from)))return n.value;return null}(t,s);return!!n&&(e(t.update({selection:t.selection.addRange(ki.range(n.from,n.to)),scrollIntoView:!0})),!0)}}];function Bu(t){function e(e){return t.view.state.phrase(e)}let i=Qd("input",{value:t.query.search,placeholder:e("Find"),"aria-label":e("Find"),class:"cm-textfield",name:"search",onchange:r,onkeyup:r}),s=Qd("input",{value:t.query.replace,placeholder:e("Replace"),"aria-label":e("Replace"),class:"cm-textfield",name:"replace",onchange:r,onkeyup:r}),n=Qd("input",{type:"checkbox",name:"case",checked:!t.query.caseInsensitive,onchange:r}),o=Qd("input",{type:"checkbox",name:"re",checked:t.query instanceof wu,onchange:r});function r(){t.updateQuery(new(o.checked?wu:vu)(i.value,s.value,!n.checked))}function a(t,e,i){return Qd("button",{class:"cm-button",name:t,onclick:e},i)}let l=Qd("div",{onkeydown:function(e){var n,o,r;n=t.view,o=e,r="search-panel",ba(va(n.state),o,n,r)?e.preventDefault():13==e.keyCode&&e.target==i?(e.preventDefault(),(e.shiftKey?$u:Mu)(t.view)):13==e.keyCode&&e.target==s&&(e.preventDefault(),Pu(t.view))},class:"cm-search"},[i,a("next",(()=>Mu(t.view)),[e("next")]),a("prev",(()=>$u(t.view)),[e("previous")]),a("select",(()=>Tu(t.view)),[e("all")]),Qd("label",null,[n,e("match case")]),Qd("label",null,[o,e("regexp")]),Qd("br"),s,a("replace",(()=>Pu(t.view)),[e("replace")]),a("replaceAll",(()=>Du(t.view)),[e("replace all")]),Qd("button",{name:"close",onclick:()=>Iu(t.view),"aria-label":e("close")},["×"])]);return l}const _u=/[\s\.,:;?!]/;function Fu(t,{from:e,to:i}){let s=t.state.doc.lineAt(e).from,n=t.state.doc.lineAt(i).to,o=Math.max(s,e-30),r=Math.min(n,i+30),a=t.state.sliceDoc(o,r);if(o!=s)for(let t=0;t<30;t++)if(!_u.test(a[t+1])&&_u.test(a[t])){a=a.slice(t);break}if(r!=n)for(let t=a.length-1;t>a.length-30;t--)if(!_u.test(a[t-1])&&_u.test(a[t])){a=a.slice(0,t);break}return oa.announce.of(`${t.state.phrase("current match")}. ${a} ${t.state.phrase("on line")} ${t.state.doc.lineAt(e).number}`)}const Uu=oa.baseTheme({".cm-panel.cm-search":{padding:"2px 6px 4px",position:"relative","& [name=close]":{position:"absolute",top:"0",right:"4px",backgroundColor:"inherit",border:"none",font:"inherit",padding:0,margin:0},"& input, & button, & label":{margin:".2em .6em .2em 0"},"& input[type=checkbox]":{marginRight:".2em"},"& label":{fontSize:"80%",whiteSpace:"pre"}},"&light .cm-searchMatch":{backgroundColor:"#ffff0054"},"&dark .cm-searchMatch":{backgroundColor:"#00ffff8a"},"&light .cm-searchMatch-selected":{backgroundColor:"#ff6a0054"},"&dark .cm-searchMatch-selected":{backgroundColor:"#ff00ff8a"}}),zu=[yu,Bi.override(Cu),Uu],Wu="undefined"!=typeof navigator&&!/Edge\/(\d+)/.exec(navigator.userAgent)&&/Apple Computer/.test(navigator.vendor)&&(/Mobile\/\w+/.test(navigator.userAgent)||navigator.maxTouchPoints>2),ju=mo.fromClass(class{constructor(t){this.view=t,this.inView=!0,this.measureReq={read:this.readMeasure.bind(this),write:this.writeMeasure.bind(this),key:this},this.input=t.state.facet(Hu),this.tooltips=this.input.filter((t=>t)),this.tooltipViews=this.tooltips.map((t=>this.createTooltip(t)))}update(t){let e=t.state.facet(Hu);if(e==this.input)for(let e of this.tooltipViews)e.update&&e.update(t);else{let i=e.filter((t=>t)),s=[];for(let e=0;e<i.length;e++){let n=i[e],o=-1;if(n){for(let t=0;t<this.tooltips.length;t++){let e=this.tooltips[t];e&&e.create==n.create&&(o=t)}if(o<0)s[e]=this.createTooltip(n);else{let i=s[e]=this.tooltipViews[o];i.update&&i.update(t)}}}for(let t of this.tooltipViews)s.indexOf(t)<0&&t.dom.remove();this.input=e,this.tooltips=i,this.tooltipViews=s,this.maybeMeasure()}}createTooltip(t){let e=t.create(this.view);return e.dom.classList.add("cm-tooltip"),t.class&&e.dom.classList.add(t.class),e.dom.style.top="-10000px",this.view.dom.appendChild(e.dom),e.mount&&e.mount(this.view),e}destroy(){for(let{dom:t}of this.tooltipViews)t.remove()}readMeasure(){return{editor:this.view.dom.getBoundingClientRect(),pos:this.tooltips.map((t=>this.view.coordsAtPos(t.pos))),size:this.tooltipViews.map((({dom:t})=>t.getBoundingClientRect())),innerWidth:window.innerWidth,innerHeight:window.innerHeight}}writeMeasure(t){let{editor:e}=t;for(let i=0;i<this.tooltipViews.length;i++){let s=this.tooltips[i],n=this.tooltipViews[i],{dom:o}=n,r=t.pos[i],a=t.size[i];if(!r||r.bottom<=e.top||r.top>=e.bottom||r.right<=e.left||r.left>=e.right){o.style.top="-10000px";continue}let l=a.right-a.left,h=a.bottom-a.top,c=this.view.textDirection==To.LTR?Math.min(r.left,t.innerWidth-l):Math.max(0,r.left-l),d=!!s.above;!s.strictSide&&(d?r.top-(a.bottom-a.top)<0:r.bottom+(a.bottom-a.top)>t.innerHeight)&&(d=!d),Wu?(o.style.top=(d?r.top-h:r.bottom)-e.top+"px",o.style.left=c-e.left+"px",o.style.position="absolute"):(o.style.top=(d?r.top-h:r.bottom)+"px",o.style.left=c+"px"),o.classList.toggle("cm-tooltip-above",d),o.classList.toggle("cm-tooltip-below",!d),n.positioned&&n.positioned()}}maybeMeasure(){this.tooltips.length&&((this.view.inView||this.inView)&&this.view.requestMeasure(this.measureReq),this.inView=this.view.inView)}},{eventHandlers:{scroll(){this.maybeMeasure()}}}),Vu=oa.baseTheme({".cm-tooltip":{position:"fixed",zIndex:100},"&light .cm-tooltip":{border:"1px solid #ddd",backgroundColor:"#f5f5f5"},"&dark .cm-tooltip":{backgroundColor:"#333338",color:"white"}}),Hu=Oi.define({enables:[ju,Vu]});class qu{constructor(t,e,i,s){this.view=t,this.source=e,this.field=i,this.setHover=s,this.lastMouseMove=null,this.hoverTimeout=-1,this.restartTimeout=-1,this.pending=null,this.checkHover=this.checkHover.bind(this),t.dom.addEventListener("mouseleave",this.mouseleave=this.mouseleave.bind(this)),t.dom.addEventListener("mousemove",this.mousemove=this.mousemove.bind(this))}update(){this.pending&&(this.pending=null,clearTimeout(this.restartTimeout),this.restartTimeout=setTimeout((()=>this.startHover()),20))}get active(){return this.view.state.field(this.field)}checkHover(){if(this.hoverTimeout=-1,this.active)return;let t=Date.now(),e=this.lastMouseMove;t-e.timeStamp<750?this.hoverTimeout=setTimeout(this.checkHover,750-(t-e.timeStamp)):this.startHover()}startHover(){var t;clearTimeout(this.restartTimeout);let e=this.lastMouseMove,i={x:e.clientX,y:e.clientY},s=this.view.contentDOM.contains(e.target)?this.view.posAtCoords(i):null;if(null==s)return;let n=this.view.coordsAtPos(s);if(null==n||i.y<n.top||i.y>n.bottom||i.x<n.left-this.view.defaultCharacterWidth||i.x>n.right+this.view.defaultCharacterWidth)return;let o=this.view.bidiSpans(this.view.state.doc.lineAt(s)).find((t=>t.from<=s&&t.to>=s)),r=o&&o.dir==To.RTL?-1:1,a=this.source(this.view,s,i.x<n.left?-r:r);if(null===(t=a)||void 0===t?void 0:t.then){let t=this.pending={pos:s};a.then((e=>{this.pending==t&&(this.pending=null,e&&this.view.dispatch({effects:this.setHover.of(e)}))}),(t=>lo(this.view.state,t,"hover tooltip")))}else a&&this.view.dispatch({effects:this.setHover.of(a)})}mousemove(t){var e;this.lastMouseMove=t,this.hoverTimeout<0&&(this.hoverTimeout=setTimeout(this.checkHover,750));let i=this.active;if(i&&!function(t){for(let e=t;e;e=e.parentNode)if(1==e.nodeType&&e.classList.contains("cm-tooltip"))return!0;return!1}(t.target)||this.pending){let{pos:s}=i||this.pending,n=null!==(e=null==i?void 0:i.end)&&void 0!==e?e:s;(s==n?this.view.posAtCoords({x:t.clientX,y:t.clientY})==s:function(t,e,i,s,n,o){let r=document.createRange(),a=t.domAtPos(e),l=t.domAtPos(i);r.setEnd(l.node,l.offset),r.setStart(a.node,a.offset);let h=r.getClientRects();r.detach();for(let t=0;t<h.length;t++){let e=h[t];if(Math.max(e.top-n,n-e.bottom,e.left-s,s-e.right)<=o)return!0}return!1}(this.view,s,n,t.clientX,t.clientY,6))||(this.view.dispatch({effects:this.setHover.of(null)}),this.pending=null)}}mouseleave(){clearTimeout(this.hoverTimeout),this.hoverTimeout=-1,this.active&&this.view.dispatch({effects:this.setHover.of(null)})}destroy(){clearTimeout(this.hoverTimeout),this.view.dom.removeEventListener("mouseleave",this.mouseleave),this.view.dom.removeEventListener("mousemove",this.mousemove)}}function Gu(t,e={}){const i=Zi.define(),s=Ei.define({create:()=>null,update(t,s){if(t&&e.hideOnChange&&(s.docChanged||s.selection))return null;for(let t of s.effects)if(t.is(i))return t.value;if(t&&s.docChanged){let e=s.changes.mapPos(t.pos,-1,ui.TrackDel);if(null==e)return null;let i=Object.assign(Object.create(null),t);return i.pos=e,null!=t.end&&(i.end=s.changes.mapPos(t.end)),i}return t},provide:t=>Hu.from(t)});return[s,mo.define((e=>new qu(e,t,s,i)))]}class Qu{constructor(t,e,i){this.state=t,this.pos=e,this.explicit=i,this.abortListeners=[]}tokenBefore(t){let e=Wl(this.state).resolve(this.pos,-1);for(;e&&t.indexOf(e.name)<0;)e=e.parent;return e?{from:e.from,to:this.pos,text:this.state.sliceDoc(e.from,this.pos),type:e.type}:null}matchBefore(t){let e=this.state.doc.lineAt(this.pos),i=Math.max(e.from,this.pos-250),s=e.text.slice(i-e.from,this.pos-e.from),n=s.search(Zu(t,!1));return n<0?null:{from:i+n,to:this.pos,text:s.slice(n)}}get aborted(){return null==this.abortListeners}addEventListener(t,e){"abort"==t&&this.abortListeners&&this.abortListeners.push(e)}}function Ju(t){let e=Object.keys(t).join(""),i=/\w/.test(e);return i&&(e=e.replace(/\w/g,"")),`[${i?"\\w":""}${e.replace(/[^\w\s]/g,"\\$&")}]`}function Ku(t){let e=t.map((t=>"string"==typeof t?{label:t}:t)),[i,s]=e.every((t=>/^\w+$/.test(t.label)))?[/\w*$/,/\w+$/]:function(t){let e=Object.create(null),i=Object.create(null);for(let{label:s}of t){e[s[0]]=!0;for(let t=1;t<s.length;t++)i[s[t]]=!0}let s=Ju(e)+Ju(i)+"*$";return[new RegExp("^"+s),new RegExp(s)]}(e);return t=>{let n=t.matchBefore(s);return n||t.explicit?{from:n?n.from:t.pos,options:e,span:i}:null}}class Yu{constructor(t,e,i){this.completion=t,this.source=e,this.match=i}}function Xu(t){return t.selection.main.head}function Zu(t,e){var i;let{source:s}=t,n=e&&"^"!=s[0],o="$"!=s[s.length-1];return n||o?new RegExp(`${n?"^":""}(?:${s})${o?"$":""}`,null!==(i=t.flags)&&void 0!==i?i:t.ignoreCase?"i":""):t}function tp(t,e){let i=e.completion.apply||e.completion.label,s=e.source;"string"==typeof i?t.dispatch({changes:{from:s.from,to:s.to,insert:i},selection:{anchor:s.from+i.length}}):i(t,e.completion,s.from,s.to)}const ep=new WeakMap;function ip(t){if(!Array.isArray(t))return t;let e=ep.get(t);return e||ep.set(t,e=Ku(t)),e}class sp{constructor(t){this.pattern=t,this.chars=[],this.folded=[],this.any=[],this.precise=[],this.byWord=[];for(let e=0;e<t.length;){let i=Xe(t,e),s=ti(i);this.chars.push(i);let n=t.slice(e,e+s),o=n.toUpperCase();this.folded.push(Xe(o==n?n.toLowerCase():o,0)),e+=s}this.astral=t.length!=this.chars.length}match(t){if(0==this.pattern.length)return[0];if(t.length<this.pattern.length)return null;let{chars:e,folded:i,any:s,precise:n,byWord:o}=this;if(1==e.length){let s=Xe(t,0);return s==e[0]?[0,0,ti(s)]:s==i[0]?[-200,0,ti(s)]:null}let r=t.indexOf(this.pattern);if(0==r)return[0,0,this.pattern.length];let a=e.length,l=0;if(r<0){for(let n=0,o=Math.min(t.length,200);n<o&&l<a;){let o=Xe(t,n);o!=e[l]&&o!=i[l]||(s[l++]=n),n+=ti(o)}if(l<a)return null}let h=0,c=0,d=!1,u=0,p=-1,f=-1,m=/[a-z]/.test(t);for(let s=0,l=Math.min(t.length,200),g=0;s<l&&c<a;){let l=Xe(t,s);r<0&&(h<a&&l==e[h]&&(n[h++]=s),u<a&&(l==e[u]||l==i[u]?(0==u&&(p=s),f=s,u++):u=0));let v,w=l<255?l>=48&&l<=57||l>=97&&l<=122?2:l>=65&&l<=90?1:0:(v=Ze(l))!=v.toLowerCase()?1:v!=v.toUpperCase()?2:0;(1==w&&m||0==g&&0!=w)&&(e[c]==l||i[c]==l&&(d=!0))&&(o[c++]=s),g=w,s+=ti(l)}return c==a&&0==o[0]?this.result((d?-200:0)-100,o,t):u==a&&0==p?[-200,0,f]:r>-1?[-700,r,r+this.pattern.length]:u==a?[-900,p,f]:c==a?this.result((d?-200:0)-100-700,o,t):2==e.length?null:this.result((s[0]?-700:0)-200-1100,s,t)}result(t,e,i){let s=[t],n=1;for(let t of e){let e=t+(this.astral?ti(Xe(i,t)):1);n>1&&s[n-1]==t?s[n-1]=e:(s[n++]=t,s[n++]=e)}return s}}const np=Oi.define({combine:t=>us(t,{activateOnTyping:!0,override:null,maxRenderedOptions:100,defaultKeymap:!0},{defaultKeymap:(t,e)=>t&&e})}),op=oa.baseTheme({".cm-tooltip.cm-tooltip-autocomplete":{"& > ul":{fontFamily:"monospace",whiteSpace:"nowrap",overflow:"auto",maxWidth_fallback:"700px",maxWidth:"min(700px, 95vw)",maxHeight:"10em",listStyle:"none",margin:0,padding:0,"& > li":{cursor:"pointer",padding:"1px 1em 1px 3px",lineHeight:1.2},"& > li[aria-selected]":{background_fallback:"#bdf",backgroundColor:"Highlight",color_fallback:"white",color:"HighlightText"}}},".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after":{content:'"···"',opacity:.5,display:"block",textAlign:"center"},".cm-tooltip.cm-completionInfo":{position:"absolute",padding:"3px 9px",width:"max-content",maxWidth:"300px"},".cm-completionInfo.cm-completionInfo-left":{right:"100%"},".cm-completionInfo.cm-completionInfo-right":{left:"100%"},"&light .cm-snippetField":{backgroundColor:"#00000022"},"&dark .cm-snippetField":{backgroundColor:"#ffffff22"},".cm-snippetFieldPosition":{verticalAlign:"text-top",width:0,height:"1.15em",margin:"0 -0.7px -.7em",borderLeft:"1.4px dotted #888"},".cm-completionMatchedText":{textDecoration:"underline"},".cm-completionDetail":{marginLeft:"0.5em",fontStyle:"italic"},".cm-completionIcon":{fontSize:"90%",width:".8em",display:"inline-block",textAlign:"center",paddingRight:".6em",opacity:"0.6"},".cm-completionIcon-function, .cm-completionIcon-method":{"&:after":{content:"'ƒ'"}},".cm-completionIcon-class":{"&:after":{content:"'○'"}},".cm-completionIcon-interface":{"&:after":{content:"'◌'"}},".cm-completionIcon-variable":{"&:after":{content:"'𝑥'"}},".cm-completionIcon-constant":{"&:after":{content:"'𝐶'"}},".cm-completionIcon-type":{"&:after":{content:"'𝑡'"}},".cm-completionIcon-enum":{"&:after":{content:"'∪'"}},".cm-completionIcon-property":{"&:after":{content:"'□'"}},".cm-completionIcon-keyword":{"&:after":{content:"'🔑︎'"}},".cm-completionIcon-namespace":{"&:after":{content:"'▢'"}},".cm-completionIcon-text":{"&:after":{content:"'abc'",fontSize:"50%",verticalAlign:"middle"}}});function rp(t,e,i){const s=document.createElement("ul");s.id=e,s.setAttribute("role","listbox"),s.setAttribute("aria-expanded","true");for(let n=i.from;n<i.to;n++){let{completion:i,match:o}=t[n];const r=s.appendChild(document.createElement("li"));r.id=e+"-"+n;let a=r.appendChild(document.createElement("div"));a.classList.add("cm-completionIcon"),i.type&&a.classList.add(...i.type.split(/\s+/g).map((t=>"cm-completionIcon-"+t))),a.setAttribute("aria-hidden","true");let l=r.appendChild(document.createElement("span"));l.className="cm-completionLabel";let{label:h,detail:c}=i,d=0;for(let t=1;t<o.length;){let e=o[t++],i=o[t++];e>d&&l.appendChild(document.createTextNode(h.slice(d,e)));let s=l.appendChild(document.createElement("span"));s.appendChild(document.createTextNode(h.slice(e,i))),s.className="cm-completionMatchedText",d=i}if(d<h.length&&l.appendChild(document.createTextNode(h.slice(d))),c){let t=r.appendChild(document.createElement("span"));t.className="cm-completionDetail",t.textContent=c}r.setAttribute("role","option")}return i.from&&s.classList.add("cm-completionListIncompleteTop"),i.to<t.length&&s.classList.add("cm-completionListIncompleteBottom"),s}function ap(t,e,i){if(t<=i)return{from:0,to:t};if(e<=t>>1){let t=Math.floor(e/i);return{from:t*i,to:(t+1)*i}}let s=Math.floor((t-e)/i);return{from:t-(s+1)*i,to:t-s*i}}class lp{constructor(t,e){this.view=t,this.stateField=e,this.info=null,this.placeInfo={read:()=>this.measureInfo(),write:t=>this.positionInfo(t),key:this};let i=t.state.field(e),{options:s,selected:n}=i.open,o=t.state.facet(np);this.range=ap(s.length,n,o.maxRenderedOptions),this.dom=document.createElement("div"),this.dom.className="cm-tooltip-autocomplete",this.dom.addEventListener("mousedown",(e=>{for(let i,n=e.target;n&&n!=this.dom;n=n.parentNode)if("LI"==n.nodeName&&(i=/-(\d+)$/.exec(n.id))&&+i[1]<s.length)return tp(t,s[+i[1]]),void e.preventDefault()})),this.list=this.dom.appendChild(rp(s,i.id,this.range)),this.list.addEventListener("scroll",(()=>{this.info&&this.view.requestMeasure(this.placeInfo)}))}mount(){this.updateSel()}update(t){t.state.field(this.stateField)!=t.startState.field(this.stateField)&&this.updateSel()}positioned(){this.info&&this.view.requestMeasure(this.placeInfo)}updateSel(){let t=this.view.state.field(this.stateField),e=t.open;if((e.selected<this.range.from||e.selected>=this.range.to)&&(this.range=ap(e.options.length,e.selected,this.view.state.facet(np).maxRenderedOptions),this.list.remove(),this.list=this.dom.appendChild(rp(e.options,t.id,this.range)),this.list.addEventListener("scroll",(()=>{this.info&&this.view.requestMeasure(this.placeInfo)}))),this.updateSelectedOption(e.selected)){this.info&&(this.info.remove(),this.info=null);let t=e.options[e.selected];t.completion.info&&(this.info=this.dom.appendChild(function(t,e){let i=document.createElement("div");i.className="cm-tooltip cm-completionInfo";let{info:s}=t.completion;if("string"==typeof s)i.textContent=s;else{let n=s(t.completion);n.then?n.then((t=>i.appendChild(t)),(t=>lo(e.state,t,"completion info"))):i.appendChild(n)}return i}(t,this.view)),this.view.requestMeasure(this.placeInfo))}}updateSelectedOption(t){let e=null;for(let i=this.list.firstChild,s=this.range.from;i;i=i.nextSibling,s++)s==t?i.hasAttribute("aria-selected")||(i.setAttribute("aria-selected","true"),e=i):i.hasAttribute("aria-selected")&&i.removeAttribute("aria-selected");return e&&function(t,e){let i=t.getBoundingClientRect(),s=e.getBoundingClientRect();s.top<i.top?t.scrollTop-=i.top-s.top:s.bottom>i.bottom&&(t.scrollTop+=s.bottom-i.bottom)}(this.list,e),e}measureInfo(){let t=this.dom.querySelector("[aria-selected]");if(!t)return null;let e=this.dom.getBoundingClientRect(),i=t.getBoundingClientRect().top-e.top;if(i<0||i>this.list.clientHeight-10)return null;let s=this.view.textDirection==To.RTL,n=e.left,o=innerWidth-e.right;return s&&n<Math.min(300,o)?s=!1:!s&&o<Math.min(300,n)&&(s=!0),{top:i,left:s}}positionInfo(t){this.info&&t&&(this.info.style.top=t.top+"px",this.info.classList.toggle("cm-completionInfo-left",t.left),this.info.classList.toggle("cm-completionInfo-right",!t.left))}}function hp(t){return 100*(t.boost||0)+(t.apply?10:0)+(t.info?5:0)+(t.type?1:0)}class cp{constructor(t,e,i,s,n){this.options=t,this.attrs=e,this.tooltip=i,this.timestamp=s,this.selected=n}setSelected(t,e){return t==this.selected||t>=this.options.length?this:new cp(this.options,up(e,t),this.tooltip,this.timestamp,t)}static build(t,e,i,s){let n=function(t,e){let i=[],s=0;for(let n of t)if(n.hasResult())if(!1===n.result.filter)for(let t of n.result.options)i.push(new Yu(t,n,[1e9-s++]));else{let t,s=new sp(e.sliceDoc(n.from,n.to));for(let e of n.result.options)(t=s.match(e.label))&&(null!=e.boost&&(t[0]+=e.boost),i.push(new Yu(e,n,t)))}i.sort(mp);let n=[],o=null;for(let t of i.sort(mp)){if(300==n.length)break;o&&o.label==t.completion.label&&o.detail==t.completion.detail?hp(t.completion)>hp(o)&&(n[n.length-1]=t):n.push(t),o=t.completion}return n}(t,e);if(!n.length)return null;let o=0;if(s&&s.selected){let t=s.options[s.selected].completion;for(let e=0;e<n.length&&!o;e++)n[e].completion==t&&(o=e)}return new cp(n,up(i,o),{pos:t.reduce(((t,e)=>e.hasResult()?Math.min(t,e.from):t),1e8),create:(r=kp,t=>new lp(t,r))},s?s.timestamp:Date.now(),o);var r}map(t){return new cp(this.options,this.attrs,Object.assign(Object.assign({},this.tooltip),{pos:t.mapPos(this.tooltip.pos)}),this.timestamp,this.selected)}}class dp{constructor(t,e,i){this.active=t,this.id=e,this.open=i}static start(){return new dp(fp,"cm-ac-"+Math.floor(2e6*Math.random()).toString(36),null)}update(t){let{state:e}=t,i=e.facet(np),s=(i.override||e.languageDataAt("autocomplete",Xu(e)).map(ip)).map((e=>{let s=this.active.find((t=>t.source==e))||new gp(e,this.active.some((t=>0!=t.state))?1:0);return s.update(t,i)}));s.length==this.active.length&&s.every(((t,e)=>t==this.active[e]))&&(s=this.active);let n=t.selection||s.some((e=>e.hasResult()&&t.changes.touchesRange(e.from,e.to)))||!function(t,e){if(t==e)return!0;for(let i=0,s=0;;){for(;i<t.length&&!t[i].hasResult;)i++;for(;s<e.length&&!e[s].hasResult;)s++;let n=i==t.length,o=s==e.length;if(n||o)return n==o;if(t[i++].result!=e[s++].result)return!1}}(s,this.active)?cp.build(s,e,this.id,this.open):this.open&&t.docChanged?this.open.map(t.changes):this.open;!n&&s.every((t=>1!=t.state))&&s.some((t=>t.hasResult()))&&(s=s.map((t=>t.hasResult()?new gp(t.source,0):t)));for(let e of t.effects)e.is(yp)&&(n=n&&n.setSelected(e.value,this.id));return s==this.active&&n==this.open?this:new dp(s,this.id,n)}get tooltip(){return this.open?this.open.tooltip:null}get attrs(){return this.open?this.open.attrs:pp}}function up(t,e){return{"aria-autocomplete":"list","aria-activedescendant":t+"-"+e,"aria-owns":t}}const pp={"aria-autocomplete":"list"},fp=[];function mp(t,e){let i=e.match[0]-t.match[0];if(i)return i;let s=t.completion.label,n=e.completion.label;return s<n?-1:s==n?0:1}class gp{constructor(t,e,i=-1){this.source=t,this.state=e,this.explicitPos=i}hasResult(){return!1}update(t,e){let i=t.annotation(ts.userEvent),s=this;"input"==i||"delete"==i?s=s.handleUserEvent(t,i,e):t.docChanged?s=s.handleChange(t):t.selection&&0!=s.state&&(s=new gp(s.source,0));for(let e of t.effects)if(e.is(wp))s=new gp(s.source,1,e.value?Xu(t.state):-1);else if(e.is(bp))s=new gp(s.source,0);else if(e.is(xp))for(let t of e.value)t.source==s.source&&(s=t);return s}handleUserEvent(t,e,i){return"delete"!=e&&i.activateOnTyping?new gp(this.source,1):this.map(t.changes)}handleChange(t){return t.changes.touchesRange(Xu(t.startState))?new gp(this.source,0):this.map(t.changes)}map(t){return t.empty||this.explicitPos<0?this:new gp(this.source,this.state,t.mapPos(this.explicitPos))}}class vp extends gp{constructor(t,e,i,s,n,o){super(t,2,e),this.result=i,this.from=s,this.to=n,this.span=o}hasResult(){return!0}handleUserEvent(t,e,i){let s=t.changes.mapPos(this.from),n=t.changes.mapPos(this.to,1),o=Xu(t.state);if((this.explicitPos>-1?o<s:o<=s)||o>n)return new gp(this.source,"input"==e&&i.activateOnTyping?1:0);let r=this.explicitPos<0?-1:t.changes.mapPos(this.explicitPos);return this.span&&(s==n||this.span.test(t.state.sliceDoc(s,n)))?new vp(this.source,r,this.result,s,n,this.span):new gp(this.source,1,r)}handleChange(t){return t.changes.touchesRange(this.from,this.to)?new gp(this.source,0):this.map(t.changes)}map(t){return t.empty?this:new vp(this.source,this.explicitPos<0?-1:t.mapPos(this.explicitPos),this.result,t.mapPos(this.from),t.mapPos(this.to,1),this.span)}}const wp=Zi.define(),bp=Zi.define(),xp=Zi.define({map:(t,e)=>t.map((t=>t.map(e)))}),yp=Zi.define(),kp=Ei.define({create:()=>dp.start(),update:(t,e)=>t.update(e),provide:t=>[Hu.from(t,(t=>t.tooltip)),oa.contentAttributes.from(t,(t=>t.attrs))]});function Sp(t,e="option"){return i=>{let s=i.state.field(kp,!1);if(!s||!s.open||Date.now()-s.open.timestamp<75)return!1;let n,o=1;"page"==e&&(n=i.dom.querySelector(".cm-tooltip-autocomplete"))&&(o=Math.max(2,Math.floor(n.offsetHeight/n.firstChild.offsetHeight)));let r=s.open.selected+o*(t?1:-1),{length:a}=s.open.options;return r<0?r="page"==e?0:a-1:r>=a&&(r="page"==e?a-1:0),i.dispatch({effects:yp.of(r)}),!0}}class Ap{constructor(t,e){this.active=t,this.context=e,this.time=Date.now(),this.updates=[],this.done=void 0}}const Cp=mo.fromClass(class{constructor(t){this.view=t,this.debounceUpdate=-1,this.running=[],this.debounceAccept=-1,this.composing=0;for(let e of t.state.field(kp).active)1==e.state&&this.startQuery(e)}update(t){let e=t.state.field(kp);if(!t.selectionSet&&!t.docChanged&&t.startState.field(kp)==e)return;let i=t.transactions.some((t=>{let e=t.annotation(ts.userEvent);return(t.selection||t.docChanged)&&"input"!=e&&"delete"!=e}));for(let e=0;e<this.running.length;e++){let s=this.running[e];if(i||s.updates.length+t.transactions.length>50&&s.time-Date.now()>1e3){for(let t of s.context.abortListeners)try{t()}catch(t){lo(this.view.state,t)}s.context.abortListeners=null,this.running.splice(e--,1)}else s.updates.push(...t.transactions)}if(this.debounceUpdate>-1&&clearTimeout(this.debounceUpdate),this.debounceUpdate=e.active.some((t=>1==t.state&&!this.running.some((e=>e.active.source==t.source))))?setTimeout((()=>this.startUpdate()),50):-1,0!=this.composing)for(let e of t.transactions)"input"==e.annotation(ts.userEvent)?this.composing=2:2==this.composing&&e.selection&&(this.composing=3)}startUpdate(){this.debounceUpdate=-1;let{state:t}=this.view,e=t.field(kp);for(let t of e.active)1!=t.state||this.running.some((e=>e.active.source==t.source))||this.startQuery(t)}startQuery(t){let{state:e}=this.view,i=Xu(e),s=new Qu(e,i,t.explicitPos==i),n=new Ap(t,s);this.running.push(n),Promise.resolve(t.source(s)).then((t=>{n.context.aborted||(n.done=t||null,this.scheduleAccept())}),(t=>{this.view.dispatch({effects:bp.of(null)}),lo(this.view.state,t)}))}scheduleAccept(){this.running.every((t=>void 0!==t.done))?this.accept():this.debounceAccept<0&&(this.debounceAccept=setTimeout((()=>this.accept()),50))}accept(){var t;this.debounceAccept>-1&&clearTimeout(this.debounceAccept),this.debounceAccept=-1;let e=[],i=this.view.state.facet(np);for(let s=0;s<this.running.length;s++){let n=this.running[s];if(void 0===n.done)continue;if(this.running.splice(s--,1),n.done){let s=new vp(n.active.source,n.active.explicitPos,n.done,n.done.from,null!==(t=n.done.to)&&void 0!==t?t:Xu(n.updates.length?n.updates[0].startState:this.view.state),n.done.span&&!1!==n.done.filter?Zu(n.done.span,!0):null);for(let t of n.updates)s=s.update(t,i);if(s.hasResult()){e.push(s);continue}}let o=this.view.state.field(kp).active.find((t=>t.source==n.active.source));if(o&&1==o.state)if(null==n.done){let t=new gp(n.active.source,0);for(let e of n.updates)t=t.update(e,i);1!=t.state&&e.push(t)}else this.startQuery(o)}e.length&&this.view.dispatch({effects:xp.of(e)})}},{eventHandlers:{compositionstart(){this.composing=1},compositionend(){3==this.composing&&setTimeout((()=>this.view.dispatch({effects:wp.of(!1)})),20),this.composing=0}}});function Op(t={}){return[kp,np.of(t),Cp,$p,op]}const Mp=[{key:"Ctrl-Space",run:t=>!!t.state.field(kp,!1)&&(t.dispatch({effects:wp.of(!0)}),!0)},{key:"Escape",run:t=>{let e=t.state.field(kp,!1);return!(!e||!e.active.some((t=>0!=t.state)))&&(t.dispatch({effects:bp.of(null)}),!0)}},{key:"ArrowDown",run:Sp(!0)},{key:"ArrowUp",run:Sp(!1)},{key:"PageDown",run:Sp(!0,"page")},{key:"PageUp",run:Sp(!1,"page")},{key:"Enter",run:t=>{let e=t.state.field(kp,!1);return!(!e||!e.open||Date.now()-e.open.timestamp<75)&&(tp(t,e.open.options[e.open.selected]),!0)}}],$p=Bi.override(ma.computeN([np],(t=>t.facet(np).defaultKeymap?[Mp]:[])));function Tp(t,e){return({state:i,dispatch:s})=>{let n=t(e,i.selection.ranges,i);return!!n&&(s(i.update(n)),!0)}}const Pp=Tp(Ip,0),Dp=Tp(Lp,0),Ep=[{key:"Mod-/",run:t=>{let e=Rp(t.state);return e.line?Pp(t):!!e.block&&Dp(t)}},{key:"Alt-A",run:Dp}];function Rp(t,e=t.selection.main.head){let i=t.languageDataAt("commentTokens",e);return i.length?i[0]:{}}function Lp(t,e,i){let s=e.map((t=>Rp(i,t.from).block));if(!s.every((t=>t)))return null;let n=e.map(((t,e)=>function(t,{open:e,close:i},s,n){let o,r,a=t.sliceDoc(s-50,s),l=t.sliceDoc(n,n+50),h=/\s*$/.exec(a)[0].length,c=/^\s*/.exec(l)[0].length,d=a.length-h;if(a.slice(d-e.length,d)==e&&l.slice(c,c+i.length)==i)return{open:{pos:s-h,margin:h&&1},close:{pos:n+c,margin:c&&1}};n-s<=100?o=r=t.sliceDoc(s,n):(o=t.sliceDoc(s,s+50),r=t.sliceDoc(n-50,n));let u=/^\s*/.exec(o)[0].length,p=/\s*$/.exec(r)[0].length,f=r.length-p-i.length;return o.slice(u,u+e.length)==e&&r.slice(f,f+i.length)==i?{open:{pos:s+u+e.length,margin:/\s/.test(o.charAt(u+e.length))?1:0},close:{pos:n-p-i.length,margin:/\s/.test(r.charAt(f-1))?1:0}}:null}(i,s[e],t.from,t.to)));if(2!=t&&!n.every((t=>t))){let t=0;return i.changeByRange((e=>{let{open:i,close:o}=s[t++];if(n[t])return{range:e};let r=i.length+1;return{changes:[{from:e.from,insert:i+" "},{from:e.to,insert:" "+o}],range:ki.range(e.anchor+r,e.head+r)}}))}if(1!=t&&n.some((t=>t))){let t=[];for(let e,i=0;i<n.length;i++)if(e=n[i]){let n=s[i],{open:o,close:r}=e;t.push({from:o.pos-n.open.length,to:o.pos+o.margin},{from:r.pos-r.margin,to:r.pos+n.close.length})}return{changes:t}}return null}function Ip(t,e,i){let s=[],n=-1;for(let{from:t,to:o}of e){let e=s.length,r=1e9;for(let e=t;e<=o;){let a=i.doc.lineAt(e);if(a.from>n&&(t==o||o>a.from)){n=a.from;let t=Rp(i,e).line;if(!t)continue;let o=/^\s*/.exec(a.text)[0].length,l=o==a.length,h=a.text.slice(o,o+t.length)==t?o:-1;o<a.text.length&&o<r&&(r=o),s.push({line:a,comment:h,token:t,indent:o,empty:l,single:!1})}e=a.to+1}if(r<1e9)for(let t=e;t<s.length;t++)s[t].indent<s[t].line.text.length&&(s[t].indent=r);s.length==e+1&&(s[e].single=!0)}if(2!=t&&s.some((t=>t.comment<0&&(!t.empty||t.single)))){let t=[];for(let{line:e,token:i,indent:n,empty:o,single:r}of s)!r&&o||t.push({from:e.from+n,insert:i+" "});let e=i.changes(t);return{changes:e,selection:i.selection.map(e,1)}}if(1!=t&&s.some((t=>t.comment>=0))){let t=[];for(let{line:e,comment:i,token:n}of s)if(i>=0){let s=e.from+i,o=s+n.length;" "==e.text[o-e.from]&&o++,t.push({from:s,to:o})}return{changes:t}}return null}function Np(t,e){let i=t.posAtCoords({x:e.clientX,y:e.clientY},!1),s=t.state.doc.lineAt(i),n=i-s.from,o=n>2e3?-1:n==s.length?function(t,e){let i=t.coordsAtPos(t.viewport.from);return i?Math.round(Math.abs((i.left-e)/t.defaultCharacterWidth)):-1}(t,e.clientX):ei(s.text.slice(0,i-s.from),0,t.state.tabSize);return{line:s.number,col:o,off:n}}function Bp(t,e){let i=Np(t,e),s=t.state.selection;return i?{update(t){if(t.docChanged){let e=t.changes.mapPos(t.startState.doc.line(i.line).from),n=t.state.doc.lineAt(e);i={line:n.number,col:i.col,off:Math.min(i.off,n.length)},s=s.map(t.changes)}},get(e,n,o){let r=Np(t,e);if(!r)return s;let a=function(t,e,i){let s=Math.min(e.line,i.line),n=Math.max(e.line,i.line),o=[];if(e.off>2e3||i.off>2e3||e.col<0||i.col<0){let r=Math.min(e.off,i.off),a=Math.max(e.off,i.off);for(let e=s;e<=n;e++){let i=t.doc.line(e);i.length<=a&&o.push(ki.range(i.from+r,i.to+a))}}else{let r=Math.min(e.col,i.col),a=Math.max(e.col,i.col);for(let e=s;e<=n;e++){let i=t.doc.line(e),s=ii(i.text,r,t.tabSize),n=ii(i.text,a,t.tabSize);s<n&&o.push(ki.range(i.from+s,i.from+n))}}return o}(t.state,i,r);return a.length?o?ki.create(a.concat(s.ranges)):ki.create(a):s}}:null}function _p(t){let e=(null==t?void 0:t.eventFilter)||(t=>t.altKey&&0==t.button);return oa.mouseSelectionStyle.of(((t,i)=>e(i)?Bp(t,i):null))}let Fp=0;class Up{constructor(t,e,i){this.set=t,this.base=e,this.modified=i,this.id=Fp++}static define(t){if(null==t?void 0:t.base)throw new Error("Can not derive from a modified tag");let e=new Up([],null,[]);if(e.set.push(e),t)for(let i of t.set)e.set.push(i);return e}static defineModifier(){let t=new Wp;return e=>e.modified.indexOf(t)>-1?e:Wp.get(e.base||e,e.modified.concat(t).sort(((t,e)=>t.id-e.id)))}}let zp=0;class Wp{constructor(){this.instances=[],this.id=zp++}static get(t,e){if(!e.length)return t;let i=e[0].instances.find((i=>i.base==t&&function(t,e){return t.length==e.length&&t.every(((t,i)=>t==e[i]))}(e,i.modified)));if(i)return i;let s=[],n=new Up(s,t,e);for(let t of e)t.instances.push(n);let o=jp(e);for(let e of t.set)for(let t of o)s.push(Wp.get(e,t));return n}}function jp(t){let e=[t];for(let i=0;i<t.length;i++)for(let s of jp(t.slice(0,i).concat(t.slice(i+1))))e.push(s);return e}const Vp=new wl,Hp=Oi.define({combine:t=>t.length?Jp.combinedMatch(t):null}),qp=Oi.define({combine:t=>t.length?t[0].match:null});function Gp(t){return t.facet(Hp)||t.facet(qp)}class Qp{constructor(t,e,i,s){this.tags=t,this.mode=e,this.context=i,this.next=s}sort(t){return!t||t.depth<this.depth?(this.next=t,this):(t.next=this.sort(t.next),t)}get depth(){return this.context?this.context.length:0}}class Jp{constructor(t,e){let i;function s(t){let e=gs.newName();return(i||(i=Object.create(null)))["."+e]=t,e}this.map=Object.create(null),this.all="string"==typeof e.all?e.all:e.all?s(e.all):null;for(let e of t){let t=(e.class||s(Object.assign({},e,{tag:null})))+(this.all?" "+this.all:""),i=e.tag;if(Array.isArray(i))for(let e of i)this.map[e.id]=t;else this.map[i.id]=t}this.module=i?new gs(i):null,this.scope=e.scope||null,this.match=this.match.bind(this);let n=[Yp];this.module&&n.push(oa.styleModule.of(this.module)),this.extension=n.concat(Hp.of(this)),this.fallback=n.concat(qp.of(this))}match(t,e){if(this.scope&&e!=this.scope)return null;for(let e of t.set){let i=this.map[e.id];if(void 0!==i)return e!=t&&(this.map[t.id]=i),i}return this.map[t.id]=this.all}static combinedMatch(t){if(1==t.length)return t[0].match;let e=t.some((t=>t.scope))?void 0:Object.create(null);return(i,s)=>{let n=e&&e[i.id];if(void 0!==n)return n;let o=null;for(let e of t){let t=e.match(i,s);t&&(o=o?o+" "+t:t)}return e&&(e[i.id]=o),o}}static define(t,e){return new Jp(t,e||{})}static get(t,e,i){let s=Gp(t);return s&&s(e,i||xl.none)}}class Kp{constructor(t){this.markCache=Object.create(null),this.tree=Wl(t.state),this.decorations=this.buildDeco(t,Gp(t.state))}update(t){let e=Wl(t.state),i=Gp(t.state),s=i!=t.startState.facet(Hp);e.length<t.view.viewport.to&&!s?this.decorations=this.decorations.map(t.changes):(e!=this.tree||t.viewportChanged||s)&&(this.tree=e,this.decorations=this.buildDeco(t.view,i))}buildDeco(t,e){if(!e||!this.tree.length)return Vn.none;let i=new As;for(let{from:s,to:n}of t.visibleRanges)Zp(this.tree,s,n,e,((t,e,s)=>{i.add(t,e,this.markCache[s]||(this.markCache[s]=Vn.mark({class:s})))}));return i.finish()}}const Yp=Bi.fallback(mo.fromClass(Kp,{decorations:t=>t.decorations})),Xp=[""];function Zp(t,e,i,s,n){let o=e,r="",a=t.topNode.cursor;function l(t,e){r&&n(o,t,r),o=t,r=e}!function t(n,o,h){let{type:c,from:d,to:u}=a;if(d>=i||u<=e)return;Xp[o]=c.name,c.isTop&&(h=c);let p=n,f=c.prop(Vp),m=!1;for(;f;){if(!f.context||tf(f.context,Xp,o)){for(let t of f.tags){let e=s(t,h);e&&(p&&(p+=" "),p+=e,1==f.mode?n+=(n?" ":"")+e:0==f.mode&&(m=!0))}break}f=f.next}let g=d;if(!m&&a.firstChild()){do{a.from>g&&r!=p&&l(g,p),g=a.to,t(n,o+1,h)}while(a.nextSibling());a.parent()}u>g&&r!=p&&l(g,p)}("",0,t.type),l(i,"")}function tf(t,e,i){if(t.length>i-1)return!1;for(let s=i-1,n=t.length-1;n>=0;n--,s--){let i=t[n];if(i&&i!=e[s])return!1}return!0}const ef=Up.define,sf=ef(),nf=ef(),of=ef(nf),rf=ef(),af=ef(rf),lf=ef(rf),hf=ef(),cf=ef(hf),df=ef(),uf=ef(),pf=ef(),ff=ef(pf),mf=ef(),gf={comment:sf,lineComment:ef(sf),blockComment:ef(sf),docComment:ef(sf),name:nf,variableName:ef(nf),typeName:of,tagName:ef(of),propertyName:ef(nf),className:ef(nf),labelName:ef(nf),namespace:ef(nf),macroName:ef(nf),literal:rf,string:af,docString:ef(af),character:ef(af),number:lf,integer:ef(lf),float:ef(lf),bool:ef(rf),regexp:ef(rf),escape:ef(rf),color:ef(rf),url:ef(rf),keyword:df,self:ef(df),null:ef(df),atom:ef(df),unit:ef(df),modifier:ef(df),operatorKeyword:ef(df),controlKeyword:ef(df),definitionKeyword:ef(df),operator:uf,derefOperator:ef(uf),arithmeticOperator:ef(uf),logicOperator:ef(uf),bitwiseOperator:ef(uf),compareOperator:ef(uf),updateOperator:ef(uf),definitionOperator:ef(uf),typeOperator:ef(uf),controlOperator:ef(uf),punctuation:pf,separator:ef(pf),bracket:ff,angleBracket:ef(ff),squareBracket:ef(ff),paren:ef(ff),brace:ef(ff),content:hf,heading:cf,heading1:ef(cf),heading2:ef(cf),heading3:ef(cf),heading4:ef(cf),heading5:ef(cf),heading6:ef(cf),contentSeparator:ef(hf),list:ef(hf),quote:ef(hf),emphasis:ef(hf),strong:ef(hf),link:ef(hf),monospace:ef(hf),strikethrough:ef(hf),inserted:ef(),deleted:ef(),changed:ef(),invalid:ef(),meta:mf,documentMeta:ef(mf),annotation:ef(mf),processingInstruction:ef(mf),definition:Up.defineModifier(),constant:Up.defineModifier(),function:Up.defineModifier(),standard:Up.defineModifier(),local:Up.defineModifier(),special:Up.defineModifier()},vf=Jp.define([{tag:gf.link,textDecoration:"underline"},{tag:gf.heading,textDecoration:"underline",fontWeight:"bold"},{tag:gf.emphasis,fontStyle:"italic"},{tag:gf.strong,fontWeight:"bold"},{tag:gf.strikethrough,textDecoration:"line-through"},{tag:gf.keyword,color:"#708"},{tag:[gf.atom,gf.bool,gf.url,gf.contentSeparator,gf.labelName],color:"#219"},{tag:[gf.literal,gf.inserted],color:"#164"},{tag:[gf.string,gf.deleted],color:"#a11"},{tag:[gf.regexp,gf.escape,gf.special(gf.string)],color:"#e40"},{tag:gf.definition(gf.variableName),color:"#00f"},{tag:gf.local(gf.variableName),color:"#30a"},{tag:[gf.typeName,gf.namespace],color:"#085"},{tag:gf.className,color:"#167"},{tag:[gf.special(gf.variableName),gf.macroName],color:"#256"},{tag:gf.definition(gf.propertyName),color:"#00c"},{tag:gf.comment,color:"#940"},{tag:gf.meta,color:"#7a757a"},{tag:gf.invalid,color:"#f00"}]);class wf{constructor(t,e,i){this.from=t,this.to=e,this.diagnostic=i}}class bf{constructor(t,e,i){this.diagnostics=t,this.panel=e,this.selected=i}static init(t,e){let i=Vn.set(t.map((t=>t.from<t.to?Vn.mark({attributes:{class:"cm-lintRange cm-lintRange-"+t.severity},diagnostic:t}).range(t.from,t.to):Vn.widget({widget:new Df(t),diagnostic:t}).range(t.from))),!0);return new bf(i,e,xf(i))}}function xf(t,e=null,i=0){let s=null;return t.between(i,1e9,((t,i,{spec:n})=>{if(!e||n.diagnostic==e)return s=new wf(t,i,n.diagnostic),!1})),s}const yf=Zi.define(),kf=Zi.define(),Sf=Zi.define(),Af=Ei.define({create:()=>new bf(Vn.none,null,null),update(t,e){if(e.docChanged){let i=t.diagnostics.map(e.changes),s=null;if(t.selected){let n=e.changes.mapPos(t.selected.from,1);s=xf(i,t.selected.diagnostic,n)||xf(i,null,n)}t=new bf(i,t.panel,s)}for(let i of e.effects)i.is(yf)?t=bf.init(i.value,t.panel):i.is(kf)?t=new bf(t.diagnostics,i.value?Rf.open:null,t.selected):i.is(Sf)&&(t=new bf(t.diagnostics,t.panel,i.value));return t},provide:t=>[Gd.from(t,(t=>t.panel)),oa.decorations.from(t,(t=>t.diagnostics))]}),Cf=Vn.mark({class:"cm-lintRange cm-lintRange-active"});function Of(t,e,i){let{diagnostics:s}=t.state.field(Af),n=[],o=2e8,r=0;return s.between(e-(i<0?1:0),e+(i>0?1:0),((t,s,{spec:a})=>{e>=t&&e<=s&&(t==s||(e>t||i>0)&&(e<s||i<0))&&(n.push(a.diagnostic),o=Math.min(t,o),r=Math.max(s,r))})),n.length?{pos:o,end:r,above:t.state.doc.lineAt(o).to<r,create:()=>({dom:Qd("ul",{class:"cm-tooltip-lint"},n.map((e=>Pf(t,e,!1))))})}:null}const Mf=t=>{let e=t.state.field(Af,!1);return!(!e||!e.panel)&&(t.dispatch({effects:kf.of(!1)}),!0)},$f=[{key:"Mod-Shift-m",run:t=>{let e=t.state.field(Af,!1);var i,s,n;e&&e.panel||t.dispatch({effects:(i=t.state,s=[kf.of(!0)],n=()=>bf.init([],Rf.open),i.field(Af,!1)?s:s.concat(Zi.appendConfig.of([Af.init(n),oa.decorations.compute([Af],(t=>{let{selected:e,panel:i}=t.field(Af);return e&&i&&e.from!=e.to?Vn.set([Cf.range(e.from,e.to)]):Vn.none})),Gu(Of),If])))});let o=Wd(t,Rf.open);return o&&o.dom.querySelector(".cm-panel-lint ul").focus(),!0}},{key:"F8",run:t=>{let e=t.state.field(Af,!1);if(!e)return!1;let i=t.state.selection.main,s=e.diagnostics.iter(i.to+1);return!(!s.value&&(s=e.diagnostics.iter(0),!s.value||s.from==i.from&&s.to==i.to))&&(t.dispatch({selection:{anchor:s.from,head:s.to},scrollIntoView:!0}),!0)}}];function Tf(t){let e=[];if(t)t:for(let{name:i}of t){for(let t=0;t<i.length;t++){let s=i[t];if(/[a-zA-Z]/.test(s)&&!e.some((t=>t.toLowerCase()==s.toLowerCase()))){e.push(s);continue t}}e.push("")}return e}function Pf(t,e,i){var s;let n=i?Tf(e.actions):[];return Qd("li",{class:"cm-diagnostic cm-diagnostic-"+e.severity},Qd("span",{class:"cm-diagnosticText"},e.message),null===(s=e.actions)||void 0===s?void 0:s.map(((i,s)=>{let o=s=>{s.preventDefault();let n=xf(t.state.field(Af).diagnostics,e);n&&i.apply(t,n.from,n.to)},{name:r}=i,a=n[s]?r.indexOf(n[s]):-1,l=a<0?r:[r.slice(0,a),Qd("u",r.slice(a,a+1)),r.slice(a+1)];return Qd("button",{class:"cm-diagnosticAction",onclick:o,onmousedown:o,"aria-label":` Action: ${r}${a<0?"":` (access key "${n[s]})"`}.`},l)})),e.source&&Qd("div",{class:"cm-diagnosticSource"},e.source))}class Df extends Wn{constructor(t){super(),this.diagnostic=t}eq(t){return t.diagnostic==this.diagnostic}toDOM(){return Qd("span",{class:"cm-lintPoint cm-lintPoint-"+this.diagnostic.severity})}}class Ef{constructor(t,e){this.diagnostic=e,this.id="item_"+Math.floor(4294967295*Math.random()).toString(16),this.dom=Pf(t,e,!0),this.dom.id=this.id,this.dom.setAttribute("role","option")}}class Rf{constructor(t){this.view=t,this.items=[];this.list=Qd("ul",{tabIndex:0,role:"listbox","aria-label":this.view.state.phrase("Diagnostics"),onkeydown:e=>{if(27==e.keyCode)Mf(this.view),this.view.focus();else if(38==e.keyCode||33==e.keyCode)this.moveSelection((this.selectedIndex-1+this.items.length)%this.items.length);else if(40==e.keyCode||34==e.keyCode)this.moveSelection((this.selectedIndex+1)%this.items.length);else if(36==e.keyCode)this.moveSelection(0);else if(35==e.keyCode)this.moveSelection(this.items.length-1);else if(13==e.keyCode)this.view.focus();else{if(!(e.keyCode>=65&&e.keyCode<=90&&this.selectedIndex>=0))return;{let{diagnostic:i}=this.items[this.selectedIndex],s=Tf(i.actions);for(let n=0;n<s.length;n++)if(s[n].toUpperCase().charCodeAt(0)==e.keyCode){let e=xf(this.view.state.field(Af).diagnostics,i);e&&i.actions[n].apply(t,e.from,e.to)}}}e.preventDefault()},onclick:t=>{for(let e=0;e<this.items.length;e++)this.items[e].dom.contains(t.target)&&this.moveSelection(e)}}),this.dom=Qd("div",{class:"cm-panel-lint"},this.list,Qd("button",{name:"close","aria-label":this.view.state.phrase("close"),onclick:()=>Mf(this.view)},"×")),this.update()}get selectedIndex(){let t=this.view.state.field(Af).selected;if(!t)return-1;for(let e=0;e<this.items.length;e++)if(this.items[e].diagnostic==t.diagnostic)return e;return-1}update(){let{diagnostics:t,selected:e}=this.view.state.field(Af),i=0,s=!1,n=null;for(t.between(0,this.view.state.doc.length,((t,o,{spec:r})=>{let a,l=-1;for(let t=i;t<this.items.length;t++)if(this.items[t].diagnostic==r.diagnostic){l=t;break}l<0?(a=new Ef(this.view,r.diagnostic),this.items.splice(i,0,a),s=!0):(a=this.items[l],l>i&&(this.items.splice(i,l-i),s=!0)),e&&a.diagnostic==e.diagnostic?a.dom.hasAttribute("aria-selected")||(a.dom.setAttribute("aria-selected","true"),n=a):a.dom.hasAttribute("aria-selected")&&a.dom.removeAttribute("aria-selected"),i++}));i<this.items.length&&!(1==this.items.length&&this.items[0].diagnostic.from<0);)s=!0,this.items.pop();0==this.items.length&&(this.items.push(new Ef(this.view,{from:-1,to:-1,severity:"info",message:this.view.state.phrase("No diagnostics")})),s=!0),n?(this.list.setAttribute("aria-activedescendant",n.id),this.view.requestMeasure({key:this,read:()=>({sel:n.dom.getBoundingClientRect(),panel:this.list.getBoundingClientRect()}),write:({sel:t,panel:e})=>{t.top<e.top?this.list.scrollTop-=e.top-t.top:t.bottom>e.bottom&&(this.list.scrollTop+=t.bottom-e.bottom)}})):this.selectedIndex<0&&this.list.removeAttribute("aria-activedescendant"),s&&this.sync()}sync(){let t=this.list.firstChild;function e(){let e=t;t=e.nextSibling,e.remove()}for(let i of this.items)if(i.dom.parentNode==this.list){for(;t!=i.dom;)e();t=i.dom.nextSibling}else this.list.insertBefore(i.dom,t);for(;t;)e()}moveSelection(t){if(this.selectedIndex<0)return;let e=xf(this.view.state.field(Af).diagnostics,this.items[t].diagnostic);e&&this.view.dispatch({selection:{anchor:e.from,head:e.to},scrollIntoView:!0,effects:Sf.of(e)})}static open(t){return new Rf(t)}}function Lf(t){if("function"!=typeof btoa)return"none";return`url('data:image/svg+xml;base64,${btoa(`<svg xmlns="http://www.w3.org/2000/svg" width="6" height="3">\n    <path d="m0 3 l2 -2 l1 0 l2 2 l1 0" stroke="${t}" fill="none" stroke-width=".7"/>\n  </svg>`)}')`}const If=oa.baseTheme({".cm-diagnostic":{padding:"3px 6px 3px 8px",marginLeft:"-1px",display:"block",whiteSpace:"pre-wrap"},".cm-diagnostic-error":{borderLeft:"5px solid #d11"},".cm-diagnostic-warning":{borderLeft:"5px solid orange"},".cm-diagnostic-info":{borderLeft:"5px solid #999"},".cm-diagnosticAction":{font:"inherit",border:"none",padding:"2px 4px",backgroundColor:"#444",color:"white",borderRadius:"3px",marginLeft:"8px"},".cm-diagnosticSource":{fontSize:"70%",opacity:.7},".cm-lintRange":{backgroundPosition:"left bottom",backgroundRepeat:"repeat-x"},".cm-lintRange-error":{backgroundImage:Lf("#d11")},".cm-lintRange-warning":{backgroundImage:Lf("orange")},".cm-lintRange-info":{backgroundImage:Lf("#999")},".cm-lintRange-active":{backgroundColor:"#ffdd9980"},".cm-tooltip-lint":{padding:0,margin:0},".cm-lintPoint":{position:"relative","&:after":{content:'""',position:"absolute",bottom:0,left:"-2px",borderLeft:"3px solid transparent",borderRight:"3px solid transparent",borderBottom:"4px solid #d11"}},".cm-lintPoint-warning":{"&:after":{borderBottomColor:"orange"}},".cm-lintPoint-info":{"&:after":{borderBottomColor:"#999"}},".cm-panel.cm-panel-lint":{position:"relative","& ul":{maxHeight:"100px",overflowY:"auto","& [aria-selected]":{backgroundColor:"#ddd","& u":{textDecoration:"underline"}},"&:focus [aria-selected]":{background_fallback:"#bdf",backgroundColor:"Highlight",color_fallback:"white",color:"HighlightText"},"& u":{textDecoration:"none"},padding:0,margin:0},"& [name=close]":{position:"absolute",top:"0",right:"2px",background:"inherit",border:"none",font:"inherit",padding:0,margin:0}}});class Nf{constructor(t,e,i,s,n,o,r,a,l,h){this.p=t,this.stack=e,this.state=i,this.reducePos=s,this.pos=n,this.score=o,this.buffer=r,this.bufferBase=a,this.curContext=l,this.parent=h}toString(){return`[${this.stack.filter(((t,e)=>e%3==0)).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`}static start(t,e,i=0){let s=t.parser.context;return new Nf(t,[],e,i,i,0,[],0,s?new Bf(s,s.start):null,null)}get context(){return this.curContext?this.curContext.context:null}pushState(t,e){this.stack.push(this.state,e,this.bufferBase+this.buffer.length),this.state=t}reduce(t){let e=t>>19,i=65535&t,{parser:s}=this.p,n=s.dynamicPrecedence(i);if(n&&(this.score+=n),0==e)return i<s.minRepeatTerm&&this.storeNode(i,this.reducePos,this.reducePos,4,!0),this.pushState(s.getGoto(this.state,i,!0),this.reducePos),void this.reduceContext(i);let o=this.stack.length-3*(e-1)-(262144&t?6:0),r=this.stack[o-2],a=this.stack[o-1],l=this.bufferBase+this.buffer.length-a;if(i<s.minRepeatTerm||131072&t){let t=s.stateFlag(this.state,1)?this.pos:this.reducePos;this.storeNode(i,r,t,l+4,!0)}if(262144&t)this.state=this.stack[o];else{let t=this.stack[o-3];this.state=s.getGoto(t,i,!0)}for(;this.stack.length>o;)this.stack.pop();this.reduceContext(i)}storeNode(t,e,i,s=4,n=!1){if(0==t){let t=this,s=this.buffer.length;if(0==s&&t.parent&&(s=t.bufferBase-t.parent.bufferBase,t=t.parent),s>0&&0==t.buffer[s-4]&&t.buffer[s-1]>-1){if(e==i)return;if(t.buffer[s-2]>=e)return void(t.buffer[s-2]=i)}}if(n&&this.pos!=i){let n=this.buffer.length;if(n>0&&0!=this.buffer[n-4])for(;n>0&&this.buffer[n-2]>i;)this.buffer[n]=this.buffer[n-4],this.buffer[n+1]=this.buffer[n-3],this.buffer[n+2]=this.buffer[n-2],this.buffer[n+3]=this.buffer[n-1],n-=4,s>4&&(s-=4);this.buffer[n]=t,this.buffer[n+1]=e,this.buffer[n+2]=i,this.buffer[n+3]=s}else this.buffer.push(t,e,i,s)}shift(t,e,i){if(131072&t)this.pushState(65535&t,this.pos);else if(0==(262144&t)){let s=this.pos,n=t,{parser:o}=this.p;(i>this.pos||e<=o.maxNode)&&(this.pos=i,o.stateFlag(n,1)||(this.reducePos=i)),this.pushState(n,s),e<=o.maxNode&&this.buffer.push(e,s,i,4),this.shiftContext(e)}else e<=this.p.parser.maxNode&&this.buffer.push(e,this.pos,i,4),this.pos=i}apply(t,e,i){65536&t?this.reduce(t):this.shift(t,e,i)}useNode(t,e){let i=this.p.reused.length-1;(i<0||this.p.reused[i]!=t)&&(this.p.reused.push(t),i++);let s=this.pos;this.reducePos=this.pos=s+t.length,this.pushState(e,s),this.buffer.push(i,s,this.reducePos,-1),this.curContext&&this.updateContext(this.curContext.tracker.reuse(this.curContext.context,t,this.p.input,this))}split(){let t=this,e=t.buffer.length;for(;e>0&&t.buffer[e-2]>t.reducePos;)e-=4;let i=t.buffer.slice(e),s=t.bufferBase+e;for(;t&&s==t.bufferBase;)t=t.parent;return new Nf(this.p,this.stack.slice(),this.state,this.reducePos,this.pos,this.score,i,s,this.curContext,t)}recoverByDelete(t,e){let i=t<=this.p.parser.maxNode;i&&this.storeNode(t,this.pos,e),this.storeNode(0,this.pos,e,i?8:4),this.pos=this.reducePos=e,this.score-=200}canShift(t){for(let e=new Ff(this);;){let i=this.p.parser.stateSlot(e.top,4)||this.p.parser.hasAction(e.top,t);if(0==(65536&i))return!0;if(0==i)return!1;e.reduce(i)}}get ruleStart(){for(let t=this.state,e=this.stack.length;;){let i=this.p.parser.stateSlot(t,5);if(!(65536&i))return 0;if(e-=3*(i>>19),(65535&i)<this.p.parser.minRepeatTerm)return this.stack[e+1];t=this.stack[e]}}startOf(t,e){let i=this.state,s=this.stack.length,{parser:n}=this.p;for(;;){let o=n.stateSlot(i,5),r=o>>19,a=65535&o;if(t.indexOf(a)>-1){let t=s-3*(o>>19),i=this.stack[t+1];if(null==e||e>i)return i}if(0==s)return null;0==r?(s-=3,i=this.stack[s]):(s-=3*(r-1),i=n.getGoto(this.stack[s-3],a,!0))}}recoverByInsert(t){if(this.stack.length>=300)return[];let e=this.p.parser.nextStates(this.state);if(e.length>8||this.stack.length>=120){let i=[];for(let s,n=0;n<e.length;n+=2)(s=e[n+1])!=this.state&&this.p.parser.hasAction(s,t)&&i.push(e[n],s);if(this.stack.length<120)for(let t=0;i.length<8&&t<e.length;t+=2){let s=e[t+1];i.some(((t,e)=>1&e&&t==s))||i.push(e[t],s)}e=i}let i=[];for(let t=0;t<e.length&&i.length<4;t+=2){let s=e[t+1];if(s==this.state)continue;let n=this.split();n.storeNode(0,n.pos,n.pos,4,!0),n.pushState(s,this.pos),n.shiftContext(e[t]),n.score-=200,i.push(n)}return i}forceReduce(){let t=this.p.parser.stateSlot(this.state,5);return 0!=(65536&t)&&(this.p.parser.validAction(this.state,t)||(this.storeNode(0,this.reducePos,this.reducePos,4,!0),this.score-=100),this.reduce(t),!0)}forceAll(){for(;!this.p.parser.stateFlag(this.state,2)&&this.forceReduce(););return this}get deadEnd(){if(3!=this.stack.length)return!1;let{parser:t}=this.p;return 65535==t.data[t.stateSlot(this.state,1)]&&!t.stateSlot(this.state,4)}restart(){this.state=this.stack[0],this.stack.length=0}sameState(t){if(this.state!=t.state||this.stack.length!=t.stack.length)return!1;for(let e=0;e<this.stack.length;e+=3)if(this.stack[e]!=t.stack[e])return!1;return!0}get parser(){return this.p.parser}dialectEnabled(t){return this.p.parser.dialect.flags[t]}shiftContext(t){this.curContext&&this.updateContext(this.curContext.tracker.shift(this.curContext.context,t,this.p.input,this))}reduceContext(t){this.curContext&&this.updateContext(this.curContext.tracker.reduce(this.curContext.context,t,this.p.input,this))}emitContext(){let t=this.curContext;if(!t.tracker.strict)return;let e=this.buffer.length-1;(e<0||-2!=this.buffer[e])&&this.buffer.push(t.hash,this.reducePos,this.reducePos,-2)}updateContext(t){if(t!=this.curContext.context){let e=new Bf(this.curContext.tracker,t);e.hash!=this.curContext.hash&&this.emitContext(),this.curContext=e}}}class Bf{constructor(t,e){this.tracker=t,this.context=e,this.hash=t.hash(e)}}var _f;!function(t){t[t.Token=200]="Token",t[t.Reduce=100]="Reduce",t[t.MaxNext=4]="MaxNext",t[t.MaxInsertStackDepth=300]="MaxInsertStackDepth",t[t.DampenInsertStackDepth=120]="DampenInsertStackDepth"}(_f||(_f={}));class Ff{constructor(t){this.stack=t,this.top=t.state,this.rest=t.stack,this.offset=this.rest.length}reduce(t){let e=65535&t,i=t>>19;0==i?(this.rest==this.stack.stack&&(this.rest=this.rest.slice()),this.rest.push(this.top,0,0),this.offset+=3):this.offset-=3*(i-1);let s=this.stack.p.parser.getGoto(this.rest[this.offset-3],e,!0);this.top=s}}class Uf{constructor(t,e,i){this.stack=t,this.pos=e,this.index=i,this.buffer=t.buffer,0==this.index&&this.maybeNext()}static create(t){return new Uf(t,t.bufferBase+t.buffer.length,t.buffer.length)}maybeNext(){let t=this.stack.parent;null!=t&&(this.index=this.stack.bufferBase-t.bufferBase,this.stack=t,this.buffer=t.buffer)}get id(){return this.buffer[this.index-4]}get start(){return this.buffer[this.index-3]}get end(){return this.buffer[this.index-2]}get size(){return this.buffer[this.index-1]}next(){this.index-=4,this.pos-=4,0==this.index&&this.maybeNext()}fork(){return new Uf(this.stack,this.pos,this.index)}}class zf{constructor(){this.start=-1,this.value=-1,this.end=-1}accept(t,e){this.value=t,this.end=e}}class Wf{constructor(t,e){this.data=t,this.id=e}token(t,e,i){!function(t,e,i,s,n){let o=0,r=1<<n,a=s.p.parser.dialect;t:for(let n=i.start;0!=(r&t[o]);){let l=t[o+1];for(let e=o+3;e<l;e+=2)if((t[e+1]&r)>0){let o=t[e];if(a.allows(o)&&(-1==i.value||i.value==o||s.p.parser.overrides(o,i.value))){i.accept(o,n);break}}let h=e.get(n++);for(let e=0,i=t[o+2];e<i;){let s=e+i>>1,n=l+s+(s<<1),r=t[n],a=t[n+1];if(h<r)i=s;else{if(!(h>=a)){o=t[n+2];continue t}e=s+1}}break}}(this.data,t,e,i,this.id)}}function jf(t,e=Uint16Array){if("string"!=typeof t)return t;let i=null;for(let s=0,n=0;s<t.length;){let o=0;for(;;){let e=t.charCodeAt(s++),i=!1;if(126==e){o=65535;break}e>=92&&e--,e>=34&&e--;let n=e-32;if(n>=46&&(n-=46,i=!0),o+=n,i)break;o*=46}i?i[n++]=o:i=new e(o)}return i}Wf.prototype.contextual=Wf.prototype.fallback=Wf.prototype.extend=!1;const Vf="undefined"!=typeof process&&/\bparse\b/.test(process.env.LOG);let Hf=null;function qf(t,e,i){let s=t.cursor(e);for(;;)if(!(i<0?s.childBefore(e):s.childAfter(e)))for(;;){if((i<0?s.to<e:s.from>e)&&!s.type.isError)return i<0?Math.max(0,Math.min(s.to-1,e-5)):Math.min(t.length,Math.max(s.from+1,e+5));if(i<0?s.prevSibling():s.nextSibling())break;if(!s.parent())return i<0?0:t.length}}class Gf{constructor(t){this.fragments=t,this.i=0,this.fragment=null,this.safeFrom=-1,this.safeTo=-1,this.trees=[],this.start=[],this.index=[],this.nextFragment()}nextFragment(){let t=this.fragment=this.i==this.fragments.length?null:this.fragments[this.i++];if(t){for(this.safeFrom=t.openStart?qf(t.tree,t.from+t.offset,1)-t.offset:t.from,this.safeTo=t.openEnd?qf(t.tree,t.to+t.offset,-1)-t.offset:t.to;this.trees.length;)this.trees.pop(),this.start.pop(),this.index.pop();this.trees.push(t.tree),this.start.push(-t.offset),this.index.push(0),this.nextStart=this.safeFrom}else this.nextStart=1e9}nodeAt(t){if(t<this.nextStart)return null;for(;this.fragment&&this.safeTo<=t;)this.nextFragment();if(!this.fragment)return null;for(;;){let e=this.trees.length-1;if(e<0)return this.nextFragment(),null;let i=this.trees[e],s=this.index[e];if(s==i.children.length){this.trees.pop(),this.start.pop(),this.index.pop();continue}let n=i.children[s],o=this.start[e]+i.positions[s];if(o>t)return this.nextStart=o,null;if(o==t&&o+n.length<=this.safeTo)return o==t&&o>=this.safeFrom?n:null;n instanceof Al?(this.index[e]++,this.nextStart=o+n.length):(this.index[e]++,o+n.length>=t&&(this.trees.push(n),this.start.push(o),this.index.push(0)))}}}class Qf extends zf{constructor(){super(...arguments),this.extended=-1,this.mask=0,this.context=0}clear(t){this.start=t,this.value=this.extended=-1}}const Jf=new zf;class Kf{constructor(t){this.tokens=[],this.mainToken=Jf,this.actions=[],this.tokens=t.tokenizers.map((t=>new Qf))}getActions(t,e){let i=0,s=null,{parser:n}=t.p,{tokenizers:o}=n,r=n.stateSlot(t.state,3),a=t.curContext?t.curContext.hash:0;for(let n=0;n<o.length;n++){if(0==(1<<n&r))continue;let l=o[n],h=this.tokens[n];if((!s||l.fallback)&&((l.contextual||h.start!=t.pos||h.mask!=r||h.context!=a)&&(this.updateCachedToken(h,l,t,e),h.mask=r,h.context=a),0!=h.value)){let e=i;if(h.extended>-1&&(i=this.addActions(t,h.extended,h.end,i)),i=this.addActions(t,h.value,h.end,i),!l.extend&&(s=h,i>e))break}}for(;this.actions.length>i;)this.actions.pop();return s||(s=Jf,s.start=t.pos,t.pos==e.length?s.accept(t.p.parser.eofTerm,t.pos):s.accept(0,t.pos+1)),this.mainToken=s,this.actions}updateCachedToken(t,e,i,s){if(t.clear(i.pos),e.token(s,t,i),t.value>-1){let{parser:e}=i.p;for(let n=0;n<e.specialized.length;n++)if(e.specialized[n]==t.value){let o=e.specializers[n](s.read(t.start,t.end),i);if(o>=0&&i.p.parser.dialect.allows(o>>1)){0==(1&o)?t.value=o>>1:t.extended=o>>1;break}}}else i.pos==s.length?t.accept(i.p.parser.eofTerm,i.pos):t.accept(0,i.pos+1)}putAction(t,e,i,s){for(let e=0;e<s;e+=3)if(this.actions[e]==t)return s;return this.actions[s++]=t,this.actions[s++]=e,this.actions[s++]=i,s}addActions(t,e,i,s){let{state:n}=t,{parser:o}=t.p,{data:r}=o;for(let t=0;t<2;t++)for(let a=o.stateSlot(n,t?2:1);;a+=3){if(65535==r[a]){if(1!=r[a+1]){0==s&&2==r[a+1]&&(s=this.putAction(im(r,a+1),e,i,s));break}a=im(r,a+2)}r[a]==e&&(s=this.putAction(im(r,a+1),e,i,s))}return s}}var Yf;!function(t){t[t.Distance=5]="Distance",t[t.MaxRemainingPerStep=3]="MaxRemainingPerStep",t[t.MinBufferLengthPrune=200]="MinBufferLengthPrune",t[t.ForceReduceLimit=10]="ForceReduceLimit"}(Yf||(Yf={}));class Xf{constructor(t,e,i,s){this.parser=t,this.input=e,this.startPos=i,this.context=s,this.pos=0,this.recovering=0,this.nextStackID=9812,this.nested=null,this.nestEnd=0,this.nestWrap=null,this.reused=[],this.tokens=new Kf(t),this.topTerm=t.top[1],this.stacks=[Nf.start(this,t.top[0],this.startPos)];let n=null==s?void 0:s.fragments;this.fragments=n&&n.length?new Gf(n):null}advance(){if(this.nested){let t=this.nested.advance();return this.pos=this.nested.pos,t&&(this.finishNested(this.stacks[0],t),this.nested=null),null}let t,e,i,s=this.stacks,n=this.pos,o=this.stacks=[];for(let r=0;r<s.length;r++){let a,l=s[r];for(;;){if(l.pos>n)o.push(l);else if(a=this.checkNest(l))(!i||i.stack.score<l.score)&&(i=a);else{if(this.advanceStack(l,o,s))continue;{t||(t=[],e=[]),t.push(l);let i=this.tokens.mainToken;e.push(i.value,i.end)}}break}}if(i)return this.startNested(i),null;if(!o.length){let e=t&&function(t){let e=null;for(let i of t)i.pos==i.p.input.length&&i.p.parser.stateFlag(i.state,2)&&(!e||e.score<i.score)&&(e=i);return e}(t);if(e)return this.stackToTree(e);if(this.parser.strict)throw new SyntaxError("No parse at "+n);this.recovering||(this.recovering=5)}if(this.recovering&&t){let i=this.runRecovery(t,e,o);if(i)return this.stackToTree(i.forceAll())}if(this.recovering){let t=1==this.recovering?1:3*this.recovering;if(o.length>t)for(o.sort(((t,e)=>e.score-t.score));o.length>t;)o.pop();o.some((t=>t.reducePos>n))&&this.recovering--}else if(o.length>1)t:for(let t=0;t<o.length-1;t++){let e=o[t];for(let i=t+1;i<o.length;i++){let s=o[i];if(e.sameState(s)||e.buffer.length>200&&s.buffer.length>200){if(!((e.score-s.score||e.buffer.length-s.buffer.length)>0)){o.splice(t--,1);continue t}o.splice(i--,1)}}}this.pos=o[0].pos;for(let t=1;t<o.length;t++)o[t].pos<this.pos&&(this.pos=o[t].pos);return null}advanceStack(t,e,i){let s=t.pos,{input:n,parser:o}=this;if(Vf&&this.stackID(t),this.fragments){let e=t.curContext&&t.curContext.tracker.strict,i=e?t.curContext.hash:0;for(let n=this.fragments.nodeAt(s);n;){let s=this.parser.nodeSet.types[n.type.id]==n.type?o.getGoto(t.state,n.type.id):-1;if(s>-1&&n.length&&(!e||(n.contextHash||0)==i))return t.useNode(n,s),!0;if(!(n instanceof kl)||0==n.children.length||n.positions[0]>0)break;let r=n.children[0];if(!(r instanceof kl))break;n=r}}let r=o.stateSlot(t.state,4);if(r>0)return t.reduce(r),!0;let a=this.tokens.getActions(t,n);for(let n=0;n<a.length;){let o=a[n++],r=a[n++],l=a[n++],h=n==a.length||!i,c=h?t:t.split();if(c.apply(o,r,l),h)return!0;c.pos>s?e.push(c):i.push(c)}return!1}advanceFully(t,e){let i=t.pos;for(;;){let s=this.checkNest(t);if(s)return s;if(!this.advanceStack(t,null,null))return!1;if(t.pos>i)return Zf(t,e),!0}}runRecovery(t,e,i){let s,n=null,o=!1;for(let r=0;r<t.length;r++){let a=t[r],l=e[r<<1],h=e[1+(r<<1)];if(Vf&&this.stackID(a),a.deadEnd){if(o)continue;o=!0,a.restart();let t=this.advanceFully(a,i);if(t){!0!==t&&(s=t);continue}}let c=a.split();for(let t=0;c.forceReduce()&&t<10;t++){let t=this.advanceFully(c,i);if(t){!0!==t&&(s=t);break}Vf&&this.stackID(c)}for(let t of a.recoverByInsert(l))this.advanceFully(t,i);this.input.length>a.pos?(h==a.pos&&(h++,l=0),a.recoverByDelete(l,h),Zf(a,i)):(!n||n.score<a.score)&&(n=a)}if(n)return n;if(s)for(let t of this.stacks)if(t.score>s.stack.score){s=void 0;break}return s&&this.startNested(s),null}forceFinish(){let t=this.stacks[0].split();return this.nested&&this.finishNested(t,this.nested.forceFinish()),this.stackToTree(t.forceAll())}stackToTree(t,e=t.pos){return this.parser.context&&t.emitContext(),kl.build({buffer:Uf.create(t),nodeSet:this.parser.nodeSet,topID:this.topTerm,maxBufferLength:this.parser.bufferLength,reused:this.reused,start:this.startPos,length:e-this.startPos,minRepeatType:this.parser.minRepeatTerm})}checkNest(t){let e=this.parser.findNested(t.state);if(!e)return null;let i=e.value;return"function"==typeof i&&(i=i(this.input,t)),i?{stack:t,info:e,spec:i}:null}startNested(t){let{stack:e,info:i,spec:s}=t;this.stacks=[e],this.nestEnd=this.scanForNestEnd(e,i.end,s.filterEnd),this.nestWrap="number"==typeof s.wrapType?this.parser.nodeSet.types[s.wrapType]:s.wrapType||null,s.startParse?this.nested=s.startParse(this.input.clip(this.nestEnd),e.pos,this.context):this.finishNested(e)}scanForNestEnd(t,e,i){for(let s=t.pos;s<this.input.length;s++)if(Jf.start=s,Jf.value=-1,e.token(this.input,Jf,t),Jf.value>-1&&(!i||i(this.input.read(s,Jf.end))))return s;return this.input.length}finishNested(t,e){this.nestWrap?e=new kl(this.nestWrap,e?[e]:[],e?[0]:[],this.nestEnd-t.pos):e||(e=new kl(xl.none,[],[],this.nestEnd-t.pos));let i=this.parser.findNested(t.state);t.useNode(e,this.parser.getGoto(t.state,i.placeholder,!0))}stackID(t){let e=(Hf||(Hf=new WeakMap)).get(t);return e||Hf.set(t,e=String.fromCodePoint(this.nextStackID++)),e+t}}function Zf(t,e){for(let i=0;i<e.length;i++){let s=e[i];if(s.pos==t.pos&&s.sameState(t))return void(e[i].score<t.score&&(e[i]=t))}e.push(t)}class tm{constructor(t,e,i){this.source=t,this.flags=e,this.disabled=i}allows(t){return!this.disabled||0==this.disabled[t]}}class em{constructor(t){if(this.bufferLength=ml,this.strict=!1,this.cachedDialect=null,13!=t.version)throw new RangeError(`Parser version (${t.version}) doesn't match runtime version (13)`);let e=jf(t.tokenData),i=t.nodeNames.split(" ");this.minRepeatTerm=i.length,this.context=t.context;for(let e=0;e<t.repeatNodeCount;e++)i.push("");let s=[];for(let t=0;t<i.length;t++)s.push([]);function n(t,e,i){s[t].push([e,e.deserialize(String(i))])}if(t.nodeProps)for(let e of t.nodeProps){let t=e[0];for(let i=1;i<e.length;){let s=e[i++];if(s>=0)n(s,t,e[i++]);else{let o=e[i+-s];for(let r=-s;r>0;r--)n(e[i++],t,o);i++}}}if(this.specialized=new Uint16Array(t.specialized?t.specialized.length:0),this.specializers=[],t.specialized)for(let e=0;e<t.specialized.length;e++)this.specialized[e]=t.specialized[e].term,this.specializers[e]=t.specialized[e].get;this.states=jf(t.states,Uint32Array),this.data=jf(t.stateData),this.goto=jf(t.goto);let o=Object.keys(t.topRules).map((e=>t.topRules[e][1]));this.nodeSet=new yl(i.map(((e,i)=>xl.define({name:i>=this.minRepeatTerm?void 0:e,id:i,props:s[i],top:o.indexOf(i)>-1,error:0==i,skipped:t.skippedNodes&&t.skippedNodes.indexOf(i)>-1})))),this.maxTerm=t.maxTerm,this.tokenizers=t.tokenizers.map((t=>"number"==typeof t?new Wf(e,t):t)),this.topRules=t.topRules,this.nested=(t.nested||[]).map((([t,e,i,s])=>({name:t,value:e,end:new Wf(jf(i),0),placeholder:s}))),this.dialects=t.dialects||{},this.dynamicPrecedences=t.dynamicPrecedences||null,this.tokenPrecTable=t.tokenPrec,this.termNames=t.termNames||null,this.maxNode=this.nodeSet.types.length-1,this.dialect=this.parseDialect(),this.top=this.topRules[Object.keys(this.topRules)[0]]}parse(t,e=0,i={}){"string"==typeof t&&(t=Nl(t));let s=new Xf(this,t,e,i);for(;;){let t=s.advance();if(t)return t}}startParse(t,e=0,i={}){return"string"==typeof t&&(t=Nl(t)),new Xf(this,t,e,i)}getGoto(t,e,i=!1){let s=this.goto;if(e>=s[0])return-1;for(let n=s[e+1];;){let e=s[n++],o=1&e,r=s[n++];if(o&&i)return r;for(let i=n+(e>>1);n<i;n++)if(s[n]==t)return r;if(o)return-1}}hasAction(t,e){let i=this.data;for(let s=0;s<2;s++)for(let n,o=this.stateSlot(t,s?2:1);;o+=3){if(65535==(n=i[o])){if(1!=i[o+1]){if(2==i[o+1])return im(i,o+2);break}n=i[o=im(i,o+2)]}if(n==e||0==n)return im(i,o+1)}return 0}stateSlot(t,e){return this.states[6*t+e]}stateFlag(t,e){return(this.stateSlot(t,0)&e)>0}findNested(t){let e=this.stateSlot(t,0);return 4&e?this.nested[e>>10]:null}validAction(t,e){if(e==this.stateSlot(t,4))return!0;for(let i=this.stateSlot(t,1);;i+=3){if(65535==this.data[i]){if(1!=this.data[i+1])return!1;i=im(this.data,i+2)}if(e==im(this.data,i+1))return!0}}nextStates(t){let e=[];for(let i=this.stateSlot(t,1);;i+=3){if(65535==this.data[i]){if(1!=this.data[i+1])break;i=im(this.data,i+2)}if(0==(1&this.data[i+2])){let t=this.data[i+1];e.some(((e,i)=>1&i&&e==t))||e.push(this.data[i],t)}}return e}overrides(t,e){let i=sm(this.data,this.tokenPrecTable,e);return i<0||sm(this.data,this.tokenPrecTable,t)<i}configure(t){let e=Object.assign(Object.create(em.prototype),this);if(t.props&&(e.nodeSet=this.nodeSet.extend(...t.props)),t.top){let i=this.topRules[t.top];if(!i)throw new RangeError(`Invalid top rule name ${t.top}`);e.top=i}return t.tokenizers&&(e.tokenizers=this.tokenizers.map((e=>{let i=t.tokenizers.find((t=>t.from==e));return i?i.to:e}))),t.dialect&&(e.dialect=this.parseDialect(t.dialect)),t.nested&&(e.nested=this.nested.map((e=>Object.prototype.hasOwnProperty.call(t.nested,e.name)?{name:e.name,value:t.nested[e.name],end:e.end,placeholder:e.placeholder}:e))),null!=t.strict&&(e.strict=t.strict),null!=t.bufferLength&&(e.bufferLength=t.bufferLength),e}getName(t){return this.termNames?this.termNames[t]:String(t<=this.maxNode&&this.nodeSet.types[t].name||t)}get eofTerm(){return this.maxNode+1}get hasNested(){return this.nested.length>0}get topNode(){return this.nodeSet.types[this.top[1]]}dynamicPrecedence(t){let e=this.dynamicPrecedences;return null==e?0:e[t]||0}parseDialect(t){if(this.cachedDialect&&this.cachedDialect.source==t)return this.cachedDialect;let e=Object.keys(this.dialects),i=e.map((()=>!1));if(t)for(let s of t.split(" ")){let t=e.indexOf(s);t>=0&&(i[t]=!0)}let s=null;for(let t=0;t<e.length;t++)if(!i[t])for(let i,n=this.dialects[e[t]];65535!=(i=this.data[n++]);)(s||(s=new Uint8Array(this.maxTerm+1)))[i]=1;return this.cachedDialect=new tm(t,i,s)}static deserialize(t){return new em(t)}}function im(t,e){return t[e]|t[e+1]<<16}function sm(t,e,i){for(let s,n=e;65535!=(s=t[n]);n++)if(s==i)return n-e;return-1}const nm=em.deserialize({version:13,states:"$bOVQPOOOOQO'#Cb'#CbOnQPO'#CeOvQPO'#CjOOQO'#Cp'#CpQOQPOOOOQO'#Cg'#CgO}QPO'#CfO!SQPO'#CrOOQO,59P,59PO![QPO,59PO!aQPO'#CuOOQO,59U,59UO!iQPO,59UOVQPO,59QOqQPO'#CkO!nQPO,59^OOQO1G.k1G.kOVQPO'#ClO!vQPO,59aOOQO1G.p1G.pOOQO1G.l1G.lOOQO,59V,59VOOQO-E6i-E6iOOQO,59W,59WOOQO-E6j-E6j",stateData:"#O~OcOS~OQSORSOSSOTSOWQO]ROePO~OVXOeUO~O[[O~PVOg^O~Oh_OVfX~OVaO~OhbO[iX~O[dO~Oh_OVfa~OhbO[ia~O",goto:"!kjPPPPPPkPPkqwPPk{!RPPP!XP!ePP!hXSOR^bQWQRf_TVQ_Q`WRg`QcZRicQTOQZRQe^RhbRYQR]R",nodeNames:"⚠ JsonText True False Null Number String } { Object Property PropertyName ] [ Array",maxTerm:25,nodeProps:[[wl.openedBy,7,"{",12,"["],[wl.closedBy,8,"}",13,"]"]],skippedNodes:[0],repeatNodeCount:2,tokenData:"(p~RaXY!WYZ!W]^!Wpq!Wrs!]|}$i}!O$n!Q!R$w!R![&V![!]&h!}#O&m#P#Q&r#Y#Z&w#b#c'f#h#i'}#o#p(f#q#r(k~!]Oc~~!`Upq!]qr!]rs!rs#O!]#O#P!w#P~!]~!wOe~~!zXrs!]!P!Q!]#O#P!]#U#V!]#Y#Z!]#b#c!]#f#g!]#h#i!]#i#j#g~#jR!Q![#s!c!i#s#T#Z#s~#vR!Q![$P!c!i$P#T#Z$P~$SR!Q![$]!c!i$]#T#Z$]~$`R!Q![!]!c!i!]#T#Z!]~$nOh~~$qQ!Q!R$w!R![&V~$|RT~!O!P%V!g!h%k#X#Y%k~%YP!Q![%]~%bRT~!Q![%]!g!h%k#X#Y%k~%nR{|%w}!O%w!Q![%}~%zP!Q![%}~&SPT~!Q![%}~&[ST~!O!P%V!Q![&V!g!h%k#X#Y%k~&mOg~~&rO]~~&wO[~~&zP#T#U&}~'QP#`#a'T~'WP#g#h'Z~'^P#X#Y'a~'fOR~~'iP#i#j'l~'oP#`#a'r~'uP#`#a'x~'}OS~~(QP#f#g(T~(WP#i#j(Z~(^P#X#Y(a~(fOQ~~(kOW~~(pOV~",tokenizers:[0],topRules:{JsonText:[0,1]},tokenPrec:0}),om=zl.define({parser:nm.configure({props:[nh.add({Object:ch({except:/^\s*\}/}),Array:ch({except:/^\s*\]/})}),ph.add({"Object Array":function(t){let e=t.firstChild,i=t.lastChild;return e&&e.to<i.from?{from:e.to,to:i.type.isError?t.to:i.from}:null}}),function(t){let e=Object.create(null);for(let i in t){let s=t[i];Array.isArray(s)||(s=[s]);for(let t of i.split(" "))if(t){let i=[],n=2,o=t;for(let e=0;;){if("..."==o&&e>0&&e+3==t.length){n=1;break}let s=/^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(o);if(!s)throw new RangeError("Invalid path: "+t);if(i.push("*"==s[0]?null:'"'==s[0][0]?JSON.parse(s[0]):s[0]),e+=s[0].length,e==t.length)break;let r=t[e++];if(e==t.length&&"!"==r){n=0;break}if("/"!=r)throw new RangeError("Invalid path: "+t);o=t.slice(e)}let r=i.length-1,a=i[r];if(!a)throw new RangeError("Invalid path: "+t);let l=new Qp(s,n,r>0?i.slice(0,r):null);e[a]=l.sort(e[a])}}return Vp.add(e)}({String:gf.string,Number:gf.number,"True False":gf.bool,PropertyName:gf.propertyName,null:gf.null,",":gf.separator,"[ ]":gf.squareBracket,"{ }":gf.brace})]}),languageData:{closeBrackets:{brackets:["[","{",'"']},indentOnInput:/^\s*[\}\]]$/}});const rm=new EventTarget,am=pl((t=>{rm.dispatchEvent(t)}),1500);function lm(t,e,i=[]){return cm(),ds.create({doc:t,extensions:[rd(),Ad(),ka(),dh(),ja,cu(),_a(),vf.fallback,yh(),[oa.inputHandler.of(Rd),Pd],Op(),_p(),dh(),Cc(),hm(e),ma.of([...bc,...vd,...Uc,...Ep,...Nu,...$f,...Ld,...Mp]),...i,dm]})}function hm(t){return"json"!==t&&console.log("TODO"),new Yl(om)}const cm=function(t,e){var i;if("function"!=typeof e)throw new TypeError("Expected a function");return t=fl(t),function(){return--t>0&&(i=e.apply(this,arguments)),t<=1&&(e=void 0),i}}(2,(()=>{oa.baseTheme({})}));const dm=Ei.define({create:()=>0,update(t,e){if(e.docChanged){const t=new CustomEvent(at.update,{detail:{transaction:e},bubbles:!0,composed:!0});am(t)}return e.docChanged?t+1:t}});var um;let pm=um=class extends n{constructor(){super(),this.copyText="Copy Manifest",this.editorEmitter=rm,this.copied=!1,this.updateEditor=pl((()=>{var t;this.editorState=lm(this.startText||"","json"),this.editorView?this.editorView.setState(this.editorState):this.editorView=new oa({state:this.editorState,root:this.shadowRoot||void 0,parent:(null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById(this.editorId))||void 0})}),2e3),this.editorId=`editor-${um.editorIdGenerator.next().value}`,this.editorEmitter.addEventListener(at.sync,(t=>{const e=t;this.startText=e.detail.text,this.updateEditor()})),this.editorEmitter.addEventListener(at.update,pl((t=>{this.dispatchEvent(t)}))),Y.observe(this)}static get styles(){return[o`
        #copy-block {
          display: flex;
          justify-content: flex-end;
          margin-bottom: 10px;
        }
      `]}firstUpdated(){this.updateEditor()}updated(t){var e;t.has("startText")&&(this.editorState=lm(this.startText||"","json"),this.editorView?this.editorView.setState(this.editorState):this.editorView=new oa({state:this.editorState,root:this.shadowRoot||void 0,parent:(null===(e=this.shadowRoot)||void 0===e?void 0:e.getElementById(this.editorId))||void 0}))}async copyCode(){var t;b("code_editor.copy_code_clicked",K.ProcessCheckpoint);const e=null===(t=this.editorState)||void 0===t?void 0:t.doc;if(e)try{await navigator.clipboard.writeText(e.toString()),this.copyText="Copied",this.copied=!0}catch(t){console.warn("Copying failed with the following err",t)}}render(){return l`
      <div id="copy-block">
        <slot>
          <app-button
            ?disabled="${this.copied}"
            @click="${()=>this.copyCode()}"
            appearance="outline"
            class="secondary"
          >
            ${this.copyText}</app-button
          >
        </slot>
      </div>

      <div id=${this.editorId} class="editor-container ${this.className}"></div>
    `}};pm.editorIdGenerator=function(t=1,e=0,i){let s=e;return function*(){for(;void 0===i||s<i;)yield s,s+=t}()}(),t([e({type:String})],pm.prototype,"startText",void 0),t([e({type:String})],pm.prototype,"copyText",void 0),t([i()],pm.prototype,"editorState",void 0),t([i()],pm.prototype,"editorView",void 0),t([i()],pm.prototype,"editorId",void 0),t([i()],pm.prototype,"editorEmitter",void 0),t([i()],pm.prototype,"copied",void 0),pm=um=t([s("code-editor")],pm);let fm=class extends n{constructor(){super(),this.type="",this.colorMode="primary",this.appearance="neutral",this.disabled=!1,this.opened=!1}static get styles(){return[o`
        :host {
          --height: 16px;
          --min-width: 16px;
        }

        .flipper-button {
          animation-name: close;
          animation-duration: 0.3s;
          animation-iteration-count: 1;

          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 18px;
          background: white;
          box-shadow: 0 1px 4px 0px rgb(0 0 0 / 25%);
          border-radius: 50%;
          color: #5231a7;

          height: var(--height);
          min-width: var(--min-width);

          margin-left: 5px;
        }

        .flipper-button.opened {
          animation-name: open;
          transform: rotate(90deg);
        }

        .flipper-button.large {
          --height: 32px;
          --min-width: 32px;
        }

        .flipper-button.large ion-icon {
          height: 18px;
          min-width: 18px;
          font-size: 18px;
        }

        .flipper-button ion-icon {
          pointer-events: none;

          height: 10px;
          width: 10px;
        }

        .flipper-button::part(control) {
          font-size: 18px;
          padding: 0;
        }

        .flipper-button::part(content) {
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @keyframes open {
          from {
            transform: rotate(0);
          }

          to {
            transform: rotate(90deg);
          }
        }

        @keyframes close {
          from {
            transform: rotate(90deg);
          }

          to {
            transform: rotate(0);
          }
        }
      `]}render(){return l`
      <div
        class="${S({[this.className]:this.className,"flipper-button":!0,opened:this.opened})}"
        mode="stealth"
      >
        <ion-icon name="caret-forward-outline"></ion-icon>
      </div>
    `}};t([e({type:String})],fm.prototype,"type",void 0),t([e({type:String})],fm.prototype,"colorMode",void 0),t([e({type:String})],fm.prototype,"appearance",void 0),t([e({type:Boolean})],fm.prototype,"disabled",void 0),t([e({type:Boolean})],fm.prototype,"opened",void 0),fm=t([s("flipper-button")],fm);var mm;!function(t){t.colorScheme="getColorScheme",t.base64="screenshotsAsBase64Strings",t.zip="downloadScreenshotsZipFile"}(mm||(mm={}));const gm=M.zipCreatorUrl;async function vm(t){let e=new FormData,i=t.map((t=>{let e=Object.assign({},t);return e.src.includes("data:image")&&(e.src="data:image"),e}));e.append("icons",JSON.stringify(i)),t.forEach((t=>{if(t.src.includes("data:image")){let i=function(t){const e=t.split(";base64,"),i=e[0].split(":")[1],s=window.atob(e[1]),n=new Uint8Array(s.length);for(let t=0;t<s.length;++t)n[t]=s.charCodeAt(t);return new Blob([n],{type:i})}(t.src);e.append("images",i)}}));try{const t=await fetch(gm,{method:"POST",body:e});if(!t.ok)throw new Error(JSON.stringify(await t.json()));const i=await t.blob();await tt({id:"icon",fileName:"pwabuilder-icons.zip",blob:i})}catch(t){console.error(t)}}function wm(t,e){let i;return Number.isInteger(e)||(console.warn("Called debounce without a valid number"),e=300),function(...s){clearTimeout(i);const n=this;i=window.setTimeout((function(){t.apply(n,s)}),e)}}let bm=class extends n{constructor(){super(),this.screenshotUrlList=[void 0],this.uploadModalOpen=!1,this.uploadButtonDisabled=!0,this.uploadImageObjectUrl="",this.generateIconButtonDisabled=!0,this.addScreenshotUrlDisabled=!0,this.generateScreenshotButtonDisabled=!0,this.screenshotListValid=[],this.backgroundColorRadioValue="none",this.themeColorRadioValue="none",this.awaitRequest=!1,this.editorOpened=!1,this.iconsList=[],this.screenshotsList=[],this.errored=!1,this.errorMessage=void 0,this.previewStage="name",this.debouncedUpdateThemeColor=wm((t=>this.updateThemeColor(t)),200),this.debouncedUpdateBackgroundColor=wm((t=>this.updateBackgroundColor(t)),200)}get siteUrl(){this.searchParams||(this.searchParams=new URLSearchParams(location.search));const t=this.searchParams.get("site");return t||""}static get styles(){return[$,T,P,D,E,R,o`
        .custom-color-block {
          display: flex;
          flex-direction: column;
          font-weight: bold;
        }

        app-button,
        loading-button::part(underlying-button) {
          margin: 16px 0;
        }

        fast-divider {
          margin: 16px 0;
          border-color: rgb(229, 229, 229);
        }

        fast-text-field::part(control)::placeholder {
          color: var(--placeholder-color);
          font-style: italic;
        }

        fast-text-field,
        app-dropdown::part(layout) {
          width: 300px;
        }

        fast-accordion-item {
          --base-height-multiplier: 20;
        }

        fast-button.link {
          box-shadow: none;
          padding-top: 4px;
          padding-right: 6px;
          padding-left: 6px;
        }

        #bg-custom-color,
        #theme-custom-color {
          width: 8em;
        }

        .panel {
          padding: 32px;
        }

        .tooltip {
          height: 16px;
          width: 16px;
        }

        .icons,
        .screenshots {
          margin-top: 16px;
        }

        .view-code {
          margin-bottom: 8px;
        }

        .view-code fast-accordion {
          border-color: rgb(229, 229, 229);
        }

        .view-code fast-accordion-item {
          border-bottom: none;
        }

        .images-header {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          vertical-align: middle;
        }

        images-header,
        .head .top-section {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }

        .head .summary-body {
          display: flex;
          flex-direction: column;
        }

        #manifest-done-button {
          margin-top: 23px;
          margin-bottom: 23px;
        }

        .screenshots-header {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
        }

        .info-items,
        .setting-items {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: flex-start;

          max-width: 650px;
        }

        .info-item,
        .setting-item {
          margin: 16px 0;
        }

        .collection {
          display: flex;
          flex-wrap: wrap;
          vertical-align: middle;
        }

        .item-top {
          display: flex;
          flex-direction: row;
          align-items: top;

          position: relative;
        }

        .item-top h3 {
          margin: 0;
        }

        .item-top .tooltip {
          margin-left: 4px;
        }

        .color {
          max-width: 480px;
          width: 100%;
          margin-bottom: 1em;
          margin-top: 1.5em;
        }

        .image-item {
          background-color: transparent;
          margin: 8px;
        }

        .image,
        .image img {
          max-width: 200px;
        }

        .image .info {
          display: flex;
          flex-flow: row;
          justify-content: center;
          align-items: center;
        }

        .screenshot {
          max-width: 230px;
        }
        .screenshot img {
          max-width: 205px;
          max-height: 135px;
        }

        .delete-button {
          --button-font-color: var(--font-color);
          margin: 0;
        }

        fast-accordion-item::part(icon) {
          display: none;
        }

        .show-sm {
          display: none;
          visibility: hidden;
        }

        .head h2 {
          margin-bottom: 0px;
          margin-top: 28px;
        }

        .bottom-section {
          display: flex;
          justify-content: flex-end;
        }

        fast-accordion-item::part(button) {
          color: var(--font-color);
        }

        .code-editor-collapse-header {
          display: flex;
          align-items: center;
          justify-content: space-between;

          color: var(--font-color);
        }

        .download-icon-button {
          width: 150px;
          height: 40px;
          display: inherit;
        }

        .generate-button {
          width: 150px;
          height: 40px;
          display: inherit;
          margin-bottom: 15px;
          margin-top: 15px;
        }
      `,o`
        .modal-action-form {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .modal-action-form app-file-input::part(control) {
          width: 100%;
        }

        .modal-action-form loading-button {
          margin-top: 8px;
        }

        .modal-img {
          max-width: 400px;
        }
      `,o`
        fast-text-field.screenshot-url {
          margin-bottom: 8px;
        }
      `,m(o`
          #report-content {
            width: 79vw;
          }
        `),r(o`
          .head .top-section,
          .head .summary-body,
          .images-header,
          .info-items,
          .setting-items {
            flex-flow: column;
            justify-content: center;
            align-items: baseline;
          }

          .info-item,
          .setting-item {
            width: 100%;
          }

          fast-text-field,
          app-dropdown::part(layout) {
            width: 100%;
          }
        `,"no-lower"),a(o`
        #bg-custom-color {
          width: calc(100% - 32px);
        }

        .collection.image-items {
          height: 170px;
          overflow-x: scroll;
          scroll-snap-type: x proximity;
          white-space: nowrap;
          align-items: center;
        }

        .image-item {
          display: inline-block;
          width: 100px;
          white-space: initial;
          scroll-snap-align: start;
        }

        .show-sm {
          display: block;
          visibility: visible;
        }
      `),Z,o`
        .info {
          display: flex;
        }

        manifest-previewer {
          margin-left: 100px;
          line-height: normal;
          --windows-font-family: 'Segoe';
          --android-font-family: 'Roboto';
        }

        manifest-previewer::part(platform-buttons) {
          justify-content: space-around;
        }

        @media (max-width: 800px) {
          manifest-previewer {
            display: none;
          }
        }
      `]}async firstUpdated(){try{const t=await C();this.manifest=t.manifest,this.manifest.icons&&(this.iconsList=this.manifest.icons),this.requestUpdate()}catch(t){console.warn(t)}}connectedCallback(){super.connectedCallback(),Y.observe(this)}disconnectedCallback(){super.disconnectedCallback()}renderDownloadButton(){return this.iconsList?l`<loading-button
            class="hidden-sm download-icon-button"
            appearance="outline"
            ?loading=${this.awaitRequest}
            ?secondary=${!0}
            @click=${this.downloadIcons}
            >${L.button.download}</loading-button
          >`:l``}render(){var t,e;return l`
      <div class="panel">
        <div class="head">
          <div class="top-section">
            <h1>${L.text.manifest_options.top_section.h1}</h1>
          </div>
          <h2>${L.text.manifest_options.summary_body.h1}</h2>
          <div class="summary-body">
            <p>${L.text.manifest_options.summary_body.p}</p>
            <app-button id="manifest-done-button" @click=${this.done}
              >${L.button.done}</app-button
            >
          </div>
        </div>
        <fast-divider></fast-divider>
        <section class="info">
          <div>
            <h1>${L.text.manifest_options.info.h1}</h1>
            <div class="info-items inputs">
              ${this.renderSectionItems(xm)}
              ${this.renderBackgroundColorSettings()}
            </div>
          </div>
          ${this.manifest?l`
                <manifest-previewer
                  disabled-platforms="iOS"
                  platform="windows"
                  .manifest=${new Proxy(this.manifest,{get:(t,e)=>t[e],set:()=>!1})}
                  .siteUrl=${this.siteUrl}
                  .manifestUrl=${this.siteUrl}
                  .stage=${this.previewStage}
                  .disabledPlatforms=${"iOS"}
                >
                </manifest-previewer>
              `:null}
        </section>
        <fast-divider></fast-divider>
        <section class="settings">
          <h1>${L.text.manifest_options.settings.h1}</h1>
          <div class="setting-items inputs">
            ${this.renderSectionItems(ym)}
          </div>
        </section>
        <fast-divider></fast-divider>
        <section class="images">
          <h1>${L.text.manifest_options.images.h1}</h1>
          <div class="icons">
            <div class="images-header">
              <div class="item-top">
                <h3>${L.text.manifest_options.images.icons.h3}</h3>
                <info-circle-tooltip 
                  .text="${L.tooltip.manifest_options.upload}"
                  link="https://developer.mozilla.org/en-US/docs/Web/Manifest/icons">
                </info-circle-tooltip>
              </div>
              <app-button appearance="outline" @click=${this.openUploadModal}
                >${L.button.upload}</app-button
              >
              <app-modal
                id="uploadModal"
                modalId="uploadModal"
                heading="${this.errored?"Wait A Minute!":"Upload Information"}"
                body="${this.errored?this.errorMessage||"":"Choose an Icon to upload. For the best results, we recommend choosing a 512x512 size icon."}"
                ?open=${this.uploadModalOpen}
                @app-modal-close=${this.uploadModalClose}
              >
                <form class="modal-action-form" slot="modal-form">
                  ${this.renderModalInput()}
                </form>
                <div slot="modal-actions">
                  ${this.uploadImageObjectUrl?l`<loading-button
                        class="loading-button-upload"
                        @click=${this.handleIconFileUpload}
                        ?disabled=${this.generateIconButtonDisabled}
                        ?loading=${this.awaitRequest}
                        >${L.button.upload}</loading-button
                      >`:null}
                </div>
              </app-modal>
            </div>
            <div class="collection image-items hidden-sm">
              ${null===(t=this.iconsList)||void 0===t?void 0:t.map(((t,e)=>{const i=this.handleImageUrl(t);if(i)return l`<div class="image-item image">
                    <img
                      src="${i}"
                      alt="image text"
                      decoding="async"
                      loading="lazy"
                    />
                    <div class="info">
                      <p>${t.sizes}</p>
                      ${this.renderDeleteImageButton("icons",e)}
                    </div>
                  </div>`}))}
            </div>

            ${this.manifest&&this.manifest.icons&&this.manifest.icons.length>0?l`<app-gallery
                  class="show-sm"
                  .images=${this.iconSrcListParse()}
                ></app-gallery>`:null}
        ${this.renderDownloadButton()}
          </div>
          <div class="screenshots">
            <div class="screenshots-header">
              <div class="item-top">
                <h3>
                  ${L.text.manifest_options.images.screenshots.h3}
                </h3>
                <info-circle-tooltip 
                  .text="${L.tooltip.manifest_options.generate}"
                  link="https://developer.mozilla.org/en-US/docs/Web/Manifest/screenshots">
                </info-circle-tooltip>
              </div>
              <p>${L.text.manifest_options.images.screenshots.p}</p>

              <!-- url text field -->
              ${this.renderScreenshotInputUrlList()}
              <!-- Add url button -->
              <fast-button
                class="link"
                appearance="lightweight"
                @click=${this.addNewScreenshot}
                ?disabled=${this.addScreenshotUrlDisabled}
                >${L.button.add_url}</fast-button
              >
            </div>
          </div>
          <div class="collection screenshot-items hidden-sm">
            ${this.renderScreenshots()}
          </div>

          ${this.screenshotsList&&this.screenshotsList.length>0||(null===(e=this.manifest)||void 0===e?void 0:e.screenshots)&&this.manifest.screenshots.length>0?l`<app-gallery
                class="show-sm"
                .images=${this.screenshotSrcListParse()}
              >
              </app-gallery>`:null}

          <div class="screenshots-actions">
            <loading-button
              class="generate-button"
              appearance="outline"
              type="submit"
              ?loading=${this.awaitRequest}
              ?disabled=${this.generateScreenshotButtonDisabled}
              ?secondary=${!0}
              @click=${this.generateScreenshots}
              >${L.button.generate}</loading-button
            >
          </div>
        </section>
        <section class="view-code">
          <fast-accordion>
            <fast-accordion-item @click=${this.handleEditorOpened}>
              <div class="code-editor-collapse-header" slot="heading">
                <h1>${L.text.manifest_options.view_code.h1}</h1>
                <flipper-button
                  class="large end"
                  .opened=${this.editorOpened}
                ></flipper-button>
              </div>
              <code-editor
                .startText=${this.getManifestCodeForEditor()}
                @code-editor-update=${this.handleEditorUpdate}
              ></code-editor>
            </fast-accordion-item>
          </fast-accordion>
        </section>
        <section class="bottom-section">
          <app-button @click=${this.done}
            >${L.button.done}</app-button
          >
        </section>
      </div>
    `}renderSectionItems(t){return t.map((t=>{let e;const i=this.manifest&&this.manifest[t.entry]?this.manifest[t.entry]:"";if("select"===t.type&&t.menuItems){let s=t.menuItems.indexOf(i);-1===s&&t.menuItems.find(((t,e)=>{var i;null===(i=t.code)||void 0===i||i.startsWith(t.code)})),e=l`
          <app-dropdown
            .menuItems=${t.menuItems}
            selectedIndex=${s}
            data-field=${t.entry}
            @change=${this.handleInputChange}
            @focus=${()=>this.switchManifestPreviewerPage(t.entry)}
          >
          </app-dropdown>
        `}else e=l`<fast-text-field
          data-field="${t.entry}"
          placeholder="${t.title}"
          .value=${i}
          @input=${this.handleInputChange}
          @focus=${()=>this.switchManifestPreviewerPage(t.entry)}
        ></fast-text-field>`;return l`
        <div class="setting-item">
          <div class="item-top">
            <h3>${t.title}</h3>
            <info-circle-tooltip 
              .text="${t.tooltipText}"
              link="https://developer.mozilla.org/en-US/docs/Web/Manifest">
            </info-circle-tooltip>
          </div>
          <p>${t.description}</p>
          ${e}
        </div>
      `}))}renderBackgroundColorSettings(){var t,e;return this.backgroundColor=(null===(t=this.manifest)||void 0===t?void 0:t.background_color)||void 0,this.themeColor=(null===(e=this.manifest)||void 0===e?void 0:e.theme_color)||void 0,l`
      <div class="setting-items inputs color">
        <div id="background-color-block">
          <div class="item-top">
            <h3>
              ${L.text.manifest_options.settings.background_color.h3}
            </h3>

            <info-circle-tooltip 
              .text="${L.tooltip.manifest_options.background_color}"
              link="https://developer.mozilla.org/en-US/docs/Web/Manifest/background_color">
            </info-circle-tooltip>
          </div>
          <fast-radio-group
            value=${this.setBackgroundColorRadio()}
            orientation="vertical"
            @change=${this.handleBackgroundRadioChange}
          >
            <fast-radio value="none">${L.values.none}</fast-radio>
            <fast-radio value="custom"
              >${L.values.custom}</fast-radio
            >
          </fast-radio-group>

          ${"custom"===this.backgroundColorRadioValue?l`
                <div class="custom-color-block">
                  <label for="bg-custom-color"
                    >${L.values.custom}</label
                  >
                  <input
                    type="color"
                    id="bg-custom-color"
                    .value=${this.backgroundColor||""}
                    @input=${this.backgroundColorInputChanged}
                    @focus=${()=>this.switchManifestPreviewerPage("background_color")}
                  />
                </div>
              `:void 0}
        </div>

        <div id="theme-color-block">
          <div class="item-top">
            <h3>
              ${L.text.manifest_options.settings.theme_color.h3}
            </h3>
            <info-circle-tooltip 
              .text="${L.tooltip.manifest_options.theme_color}"
              link="https://developer.mozilla.org/en-US/docs/Web/Manifest/theme_color">
            </info-circle-tooltip>
          </div>
          <fast-radio-group
            value=${this.setThemeColorRadio()}
            orientation="vertical"
            @change=${this.handleThemeRadioChange}
          >
            <fast-radio value="none">${L.values.none}</fast-radio>
            <fast-radio value="custom"
              >${L.values.custom}</fast-radio
            >
          </fast-radio-group>

          ${"custom"===this.themeColorRadioValue?l`
                <div class="custom-color-block">
                  <label for="theme-custom-color"
                    >${L.values.custom}</label
                  >
                  <input
                    type="color"
                    id="theme-custom-color"
                    .value=${this.themeColor||""}
                    @input=${this.themeColorInputChanged}
                    @focus=${()=>this.switchManifestPreviewerPage("theme_color")}
                  />
                </div>
              `:void 0}
        </div>
      </div>
    `}handleScreenshotButtonEnabled(){!0===this.generateScreenshotButtonDisabled&&(this.generateScreenshotButtonDisabled=!1)}renderScreenshotInputUrlList(){return this.screenshotUrlList.map(((t,e)=>{const i=!this.screenshotListValid[e]&&void 0!==t;return l`<fast-text-field
          class="${S({error:i,"screenshot-url":!0})}"
          placeholder="https://www.example.com/screenshot"
          value="${t||""}"
          @input=${this.handleScreenshotButtonEnabled}
          @change=${this.handleScreenshotUrlChange}
          data-index=${e}
        ></fast-text-field>
        ${i?l`<span class="error-message"
              >${L.input.manifest.screenshot.error}</span
            >`:void 0} `}))}renderScreenshots(){return this.screenshotsList.map(((t,e)=>{const i=this.handleImageUrl(t);return i?l`<div class="image-item screenshot">
          <img src="${i}" alt="image text" />
          ${this.renderDeleteImageButton("screenshots",e)}
        </div>`:void 0}))}iconSrcListParse(){var t,e;return(this.manifest||this.siteUrl)&&(null===(e=null===(t=this.manifest)||void 0===t?void 0:t.icons)||void 0===e?void 0:e.map((t=>this.handleImageUrl(t)||"")).filter((t=>t)))||[]}screenshotSrcListParse(){var t,e;return(this.manifest||this.siteUrl)&&(null===(e=null===(t=this.manifest)||void 0===t?void 0:t.screenshots)||void 0===e?void 0:e.map((t=>this.handleImageUrl(t)||"")).filter((t=>t)))||[]}renderModalInput(){return l`
      <app-file-input
        id="modal-file-input"
        inputId="modal-file-input"
        @input-change=${this.handleModalInputFileChange}
      ></app-file-input>
      ${this.uploadSelectedImageFile?l`<img
            class="modal-img"
            src=${et(this.uploadImageObjectUrl)}
            alt="the image to upload"
          />`:void 0}
    `}updatePageManifest(t){this.manifest=O(t),am(new CustomEvent(at.sync,{detail:{text:this.getManifestCodeForEditor()}}))}async handleInputChange(t){const e=t.target,i=e.dataset.field;this.manifest&&i&&void 0!==this.manifest[i]&&(this.switchManifestPreviewerPage(i),await this.updatePageManifest({[i]:e.value.code||e.value}),super.requestUpdate())}switchManifestPreviewerPage(t){switch(t){case"name":this.previewStage="name";break;case"short_name":this.previewStage="shortName";break;case"display":this.previewStage="display";break;case"theme_color":this.previewStage="themeColor";break;case"background_color":this.previewStage="splashScreen";break;case"description":this.previewStage="description"}}handleScreenshotUrlChange(t){const e=t.target,i=Number(e.dataset.index);this.screenshotUrlList[i]=e.value,this.screenshotListValid=I(this.screenshotUrlList),this.addScreenshotUrlDisabled=!this.disableAddUrlButton(),this.generateScreenshotButtonDisabled=!this.hasScreenshotsToGenerate()}handleBackgroundRadioChange(t){const e=t.target.value;this.backgroundColorRadioValue=e,"custom"!==e&&this.manifest&&this.updatePageManifest({background_color:e})}handleThemeRadioChange(t){const e=t.target.value;this.themeColorRadioValue=e,"custom"!==e&&this.manifest&&this.updatePageManifest({theme_color:e})}backgroundColorInputChanged(t){const e=t.target.value;this.backgroundColor=e,this.debouncedUpdateBackgroundColor(e)}themeColorInputChanged(t){const e=t.target.value;this.debouncedUpdateThemeColor(e)}updateThemeColor(t){this.themeColor=t,this.updatePageManifest({theme_color:t})}updateBackgroundColor(t){this.backgroundColor=t,this.updatePageManifest({background_color:t})}setBackgroundColorRadio(){var t,e;return(null===(t=this.manifest)||void 0===t?void 0:t.background_color)&&"none"!==(null===(e=this.manifest)||void 0===e?void 0:e.background_color)?"custom":"none"}setThemeColorRadio(){var t,e;return(null===(t=this.manifest)||void 0===t?void 0:t.theme_color)&&"none"!==(null===(e=this.manifest)||void 0===e?void 0:e.theme_color)?"custom":"none"}async handleModalInputFileChange(t){var e,i;this.errored=!1;const s=null!==(e=t.detail.input.files)&&void 0!==e?e:void 0;this.uploadSelectedImageFile=null!==(i=null==s?void 0:s.item(0))&&void 0!==i?i:void 0,this.generateIconButtonDisabled=!this.validIconInput(),!this.generateIconButtonDisabled&&this.uploadSelectedImageFile?this.uploadImageObjectUrl=URL.createObjectURL(this.uploadSelectedImageFile):(this.errored=!0,this.errorMessage="File type is not supported. Please use .PNG, .JPG, .SVG")}async handleIconFileUpload(){var t;this.awaitRequest=!0;try{this.uploadSelectedImageFile&&(this.updatePageManifest({icons:void 0}),this.iconsList=void 0,this.iconsList=await async function(t){var e;try{const i=new FormData;i.append("baseImage",t.file),i.append("padding","0"),i.append("colorChanged","false"),i.append("platform","windows10"),i.append("platform","android"),i.append("platform","ios");const s=await fetch("https://appimagegenerator-prod.azurewebsites.net/api/image/base64",{method:"POST",body:i});if(s.ok){const t=(await C()).manifest;if(!t)return void console.error("Manifest was unexpectedly null or undefined");let i=null!==(e=t.icons)&&void 0!==e?e:[];i=i.concat(await s.json());try{const t=await Promise.all(i.map((t=>fetch(t.src)))),e=(await Promise.all(t.map((t=>t.blob())))).map((t=>URL.createObjectURL(t)));i.forEach(((t,i)=>{t.src=t.src.includes("data:image")&&e[i]||t.src}))}catch(t){console.log(t)}return O({icons:i}),i}return}catch(t){return void console.error(t)}}({file:this.uploadSelectedImageFile}))}catch(t){console.error(t)}this.awaitRequest=!1;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("uploadModal");e&&e.close(),this.clearUploadModal()}clearUploadModal(){var t;(null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("modal-file-input")).clearInput(),this.uploadSelectedImageFile=void 0,this.uploadImageObjectUrl=""}renderDeleteImageButton(t,e){return l`
      <app-button
        class="delete-button"
        appearance="lightweight"
        data-list=${t}
        data-index=${e}
        @click=${this.handleDeleteImage}
      >
        <ion-icon
          name="trash-outline"
          data-list=${t}
          data-index=${e}
        ></ion-icon>
      </app-button>
    `}handleDeleteImage(t){var e,i;try{const s=t.target,n=s.dataset.list,o=Number(s.dataset.index);if("icons"===n){let t=null===(e=this.iconsList)||void 0===e?void 0:e.filter(((t,e)=>o!==e));this.updatePageManifest({[n]:t}),this.iconsList=t}if("screenshots"===n){let t=null===(i=this.screenshotsList)||void 0===i?void 0:i.filter(((t,e)=>o!==e));this.updatePageManifest({[n]:t}),this.screenshotsList=t}}catch(t){console.error(t)}}async handleEditorUpdate(t){const e=t;try{const t=JSON.parse(e.detail.transaction.state.doc.toString()),i=await O(t);i&&(this.manifest=i)}catch(t){console.error("failed to parse the manifest successfully",e,t)}}getManifestCodeForEditor(){const t=Object.assign({},this.manifest);return t.icons&&(t.icons=t.icons.map((t=>new N(t))).map(((t,e)=>t.createIconWithoutUrlEncodedSrc(`/images/icon-${e+1}.${t.getProbableFileExtension()}`)))),t.screenshots&&(t.screenshots=t.screenshots.map((t=>new N(t))).map(((t,e)=>t.createIconWithoutUrlEncodedSrc(`/images/screenshot-${e+1}.${t.getProbableFileExtension()}`)))),JSON.stringify(t,null,2)}handleEditorOpened(){b("manifest_options.view_code_clicked",K.ProcessCheckpoint),this.editorOpened=!this.editorOpened}validIconInput(){return[".png",".jpg",".svg"].find((t=>this&&this.uploadSelectedImageFile&&this.uploadSelectedImageFile.name.endsWith(t)))}addNewScreenshot(){this.screenshotUrlList=[...this.screenshotUrlList||[],void 0],this.addScreenshotUrlDisabled=!this.disableAddUrlButton(),this.generateScreenshotButtonDisabled=!this.hasScreenshotsToGenerate()}done(){b("manifest_options.done_manifest_options_clicked",K.ProcessCheckpoint);const t=new CustomEvent("back-to-overview",{detail:{open:!0}});this.dispatchEvent(t)}openUploadModal(){b("manifest_options.upload_icons_button_clicked",K.ProcessCheckpoint),this.uploadModalOpen=!0}uploadModalClose(t){var e;"uploadModal"===t.detail.modalId&&(this.uploadModalOpen=!1,(null===(e=this.shadowRoot)||void 0===e?void 0:e.getElementById("modal-file-input")).clearInput())}async downloadIcons(){b("manifest_options.download_icons_clicked",K.ProcessCheckpoint),this.awaitRequest=!0;try{this.manifest&&this.iconsList&&await vm(this.iconsList.map((t=>(t.src=this.handleImageUrl(t)||"",t))))}catch(t){console.error(t)}this.awaitRequest=!1}async generateScreenshots(){b("manifest_options.generate_screenshots_clicked",K.ProcessCheckpoint);try{if(this.awaitRequest=!0,this.screenshotUrlList&&this.screenshotUrlList.length){const t=await async function(t){try{const e=await fetch(`https://pwa-screenshots.azurewebsites.net/${mm.base64}`,{method:"POST",headers:{"content-type":"application/json","Access-Control-Allow-Origin":"*"},referrerPolicy:"origin",credentials:"omit",body:JSON.stringify({url:t})});if(e.ok){const t=await e.json();let i;try{i=(await C()).manifest.screenshots||[]}catch(t){i=[]}return i=i.concat(t.images.map((t=>(t.src="data:image/png;base64,"+t.src,t)))),await O({screenshots:i}),i}throw new Error(await e.text())}catch(t){console.error(t)}}(this.screenshotUrlList);t&&(this.screenshotsList=t)}}catch(t){console.error(t)}this.awaitRequest=!1}disableAddUrlButton(){var t;return(null===(t=this.screenshotUrlList)||void 0===t?void 0:t.length)<8&&this.hasScreenshotsToGenerate()}hasScreenshotsToGenerate(){return this.screenshotUrlList.length&&!this.screenshotListValid.includes(!1)&&!this.screenshotUrlList.includes(void 0)}handleImageUrl(t){var e;if(0===t.src.indexOf("data:")&&-1!==t.src.indexOf("base64"))return t.src;let i=B(this.siteUrl,null===(e=this.manifest)||void 0===e?void 0:e.startUrl);return i=B(null==i?void 0:i.href,t.src),i?i.href:void 0}};t([e({type:Array,hasChanged:function(t,e){return!(!t||!e)&&(t.length!==e.length||t.map(((t,i)=>t!==e[i])).reduce(((t,e)=>t&&e),!0))}})],bm.prototype,"screenshotUrlList",void 0),t([e({type:Boolean})],bm.prototype,"uploadModalOpen",void 0),t([i()],bm.prototype,"uploadButtonDisabled",void 0),t([i()],bm.prototype,"uploadSelectedImageFile",void 0),t([i()],bm.prototype,"uploadImageObjectUrl",void 0),t([i()],bm.prototype,"generateIconButtonDisabled",void 0),t([i()],bm.prototype,"addScreenshotUrlDisabled",void 0),t([i()],bm.prototype,"generateScreenshotButtonDisabled",void 0),t([i()],bm.prototype,"screenshotListValid",void 0),t([i()],bm.prototype,"backgroundColorRadioValue",void 0),t([i()],bm.prototype,"backgroundColor",void 0),t([i()],bm.prototype,"themeColorRadioValue",void 0),t([i()],bm.prototype,"themeColor",void 0),t([i()],bm.prototype,"awaitRequest",void 0),t([i()],bm.prototype,"searchParams",void 0),t([i()],bm.prototype,"editorOpened",void 0),t([i()],bm.prototype,"manifest",void 0),t([i()],bm.prototype,"iconsList",void 0),t([i()],bm.prototype,"screenshotsList",void 0),t([i()],bm.prototype,"errored",void 0),t([i()],bm.prototype,"errorMessage",void 0),t([i()],bm.prototype,"previewStage",void 0),bm=t([s("manifest-options")],bm);const xm=[{title:L.text.manifest_options.titles.name,description:L.tooltip.manifest_options.name,tooltipText:L.tooltip.manifest_options.name,entry:"name",type:"input"},{title:L.text.manifest_options.titles.short_name,description:L.text.manifest_options.descriptions.short_name,tooltipText:L.tooltip.manifest_options.short_name,entry:"short_name",type:"input"},{title:L.text.manifest_options.titles.description,description:L.text.manifest_options.descriptions.description,tooltipText:L.tooltip.manifest_options.description,entry:"description",type:"input"},{title:L.text.manifest_options.titles.display,description:L.text.manifest_options.descriptions.display,tooltipText:L.tooltip.manifest_options.display,entry:"display",type:"select",menuItems:["fullscreen","standalone","minimal-ui","browser"]}],ym=[{title:L.text.manifest_options.titles.start_url,description:L.text.manifest_options.descriptions.start_url,tooltipText:L.tooltip.manifest_options.start_url,entry:"start_url",type:"input"},{title:L.text.manifest_options.titles.scope,description:L.text.manifest_options.descriptions.scope,tooltipText:L.tooltip.manifest_options.scope,entry:"scope",type:"input"},{title:L.text.manifest_options.titles.orientation,description:L.text.manifest_options.descriptions.orientation,tooltipText:L.tooltip.manifest_options.orientation,entry:"orientation",type:"select",menuItems:["any","natural","landscape","portrait","portrait-primary","portrait-secondary","landscape-primary","landscape-secondary"]},{title:L.text.manifest_options.titles.language,description:L.text.manifest_options.descriptions.language,tooltipText:L.tooltip.manifest_options.language,entry:"lang",type:"select",menuItems:_}];let km=class extends n{constructor(){super(),this.score=0,this.editorOpened=!1,this.downloading=!1}static get styles(){return[it,o`
        :host {
          display: block;
          width: 95%;

          padding: 32px;
        }

        ul {
          margin-top: 23px;
        }

        li {
          border-bottom: solid 1px rgb(229, 229, 229);
        }

        h4 {
          font-size: var(--medium-font-size);
          margin-bottom: 12px;
          margin-top: 12px;
        }

        h5 {
          margin-bottom: 0;
          font-size: 22px;
        }

        #sw-picker-header {
          border-bottom: 0.67681px solid rgb(229, 229, 229);
          padding-bottom: 47px;
        }

        #summary {
          font-size: 22px;
          font-weight: var(--font-bold);
        }

        #summary-block p {
          margin-bottom: 0;
        }

        p {
          font-size: var(--font-size);
          color: var(--font-color);

          max-width: 38em;
        }

        #header-block {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        #header-actions {
          display: flex;
          justify-content: flex-start;
          margin-top: 23px;
        }

        .actions {
          margin-left: 16px;
        }

        .actions #select-button {
          /* matches margin on the test-package button 
            on the publish page for consistency */
          margin-bottom: 15px;
        }

        .actions #select-button::part(underlying-button) {
          background: white;
          color: var(--font-color);
        }

        .actions #download-button::part(underlying-button) {
          width: 100%;
        }

        #bottom-actions {
          display: flex;
          justify-content: flex-end;
          margin-top: 64px;
          margin-bottom: 64px;
        }

        .done-button {
          width: 108px;
        }

        .view-code {
          margin-bottom: 8px;
        }

        .view-code fast-accordion {
          border-color: rgb(229, 229, 229);
          border: none;
        }

        .view-code fast-accordion-item {
          border: none;

          --base-height-multiplier: 20;
        }

        .view-code fast-accordion-item::part(icon) {
          display: none;
        }

        .view-code fast-accordion-item::part(button) {
          color: var(--font-color);
        }

        .view-code .code-editor-collapse-header {
          display: flex;
          align-items: center;
          justify-content: space-between;

          color: var(--font-color);
        }

        .sw-block .info {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .sw-download-button {
          width: 150px;
          height: 40px;
          display: inherit;
        }
      `]}async firstUpdated(){const t=await F();t&&(this.serviceWorkers=t.serviceworkers)}chooseSW(t){b("sw_options.sw"+t.id+"_selected",K.ProcessCheckpoint),this.chosenSW=t.id,this.chosenSW&&U(this.chosenSW)}removeSW(){j(),this.chosenSW=void 0}done(){b("sw_options.done_sw_options_clicked",K.ProcessCheckpoint);const t=new CustomEvent("back-to-overview",{detail:{open:!0}});this.dispatchEvent(t)}resetSWCodeEditor(){var t,e;null===(t=this.shadowRoot)||void 0===t||t.querySelectorAll("fast-accordion-item").forEach((t=>{t.removeAttribute("expanded"),t.classList.remove("expanded")})),null===(e=this.shadowRoot)||void 0===e||e.querySelectorAll("flipper-button").forEach((t=>{t.hasAttribute("opened")&&t.removeAttribute("opened")}))}manuallyHandleFlipperButton(t){(t.target.querySelector("flipper-button")||t.target).toggleAttribute("opened"),this.requestUpdate()}async handleEditorOpened(t,e){b("sw_options.sw"+t+"_view_code_clicked",K.ProcessCheckpoint),this.resetSWCodeEditor(),this.manuallyHandleFlipperButton(e);const i=await z(t);i&&(this.serviceWorkerCode=i)}async handleEditorUpdate(t){const e=await z(t);e&&(this.serviceWorkerCode=e)}async downloadSW(t){this.downloading=!0,await W(t),this.downloading=!1}render(){var t;return l`
      <div>
        <div id="sw-spicker-header">
          <div id="header-info">
            <div id="header-block">
              <h4>Service Worker</h4>
            </div>
          </div>

          <div id="summary-block">
            <h5 id="summary">Summary</h5>

            <p>
              Choose one of our pre-built Service Workers that utilize
              <a href="https://developers.google.com/web/tools/workbox/"
                >Workbox</a
              >
              to make building your offline experience easy! Tap "Add to Base
              Package" on the Service Worker of your choice and then tap "Done".
              The next page will let you download your Base Package, which will
              include this Service Worker and a Web Manifest, along with
              instructions on how to inlude the files in your app.
            </p>

            <div id="header-actions">
              <app-button class="done-button" @click="${()=>this.done()}"
                >Done</app-button
              >
            </div>
          </div>
        </div>

        <ul>
          ${null===(t=this.serviceWorkers)||void 0===t?void 0:t.map((t=>l`
              <li>
                <div class="sw-block">
                  <div class="info">
                    <div>
                      <h5>${t.title}</h5>

                      <p>${t.description}</p>
                    </div>

                    <div class="actions">
                      ${this.chosenSW===t.id?l`<app-button @click="${()=>this.removeSW()}"
                            >Remove</app-button
                          >`:l`<app-button
                            id="select-button"
                            @click="${()=>this.chooseSW(t)}"
                            >Add to Base Package</app-button
                          >`}
                    </div>
                  </div>

                  <section class="view-code">
                    <fast-accordion>
                      <fast-accordion-item
                        @click=${e=>this.handleEditorOpened(t.id,e)}
                      >
                        <div class="code-editor-collapse-header" slot="heading">
                          <h1>View Code</h1>
                          <flipper-button class="large end"></flipper-button>
                        </div>

                        <code-editor
                          copyText="Copy Service Worker"
                          .startText=${this.serviceWorkerCode}
                          @code-editor-update=${()=>this.handleEditorUpdate(t.id)}
                        >
                          <loading-button
                            .loading=${this.downloading}
                            @click="${()=>this.downloadSW(t.id)}"
                            appearance="outline"
                            class="sw-download-button secondary"
                            .secondary=${!0}
                            >Download Service Worker</loading-button
                          >
                        </code-editor>
                      </fast-accordion-item>
                    </fast-accordion>
                  </section>
                </div>
              </li>
            `))}
        </ul>

        <div id="bottom-actions">
          <app-button class="done-button" @click="${()=>this.done()}"
            >Done</app-button
          >
        </div>
      </div>
    `}};t([e({type:Number})],km.prototype,"score",void 0),t([i()],km.prototype,"serviceWorkers",void 0),t([i()],km.prototype,"chosenSW",void 0),t([i()],km.prototype,"serviceWorkerCode",void 0),t([i()],km.prototype,"editorOpened",void 0),t([i()],km.prototype,"downloading",void 0),km=t([s("sw-picker")],km);const Sm={heading:"Your PWA's report card.",supporting:"Check out the the Overview below to see if your PWA is store-ready! If not, tap the section that needs work to begin upgrading your PWA."},Am={heading:"Manifest great PWAs.",supporting:"PWABuilder has analyzed your Web Manifest, check out the results below. If you are missing something, tap Manifest Options to update your Manifest."},Cm={heading:"Secret Ingredient: A Service Worker",supporting:"PWABuilder has analyzed your Service Worker, check out the results below. Want to add a Service Worker or check out our pre-built Service Workers? Tap Service Worker Options."},Om={message:"Your app is missing a 512x512 or larger PNG icon. Because of this your PWA cannot currently be packaged. Please visit the documentation below for how to fix this.",link:"https://docs.microsoft.com/microsoft-edge/progressive-web-apps-chromium/how-to/icon-theme-color#define-icons"},Mm={message:"Your app is missing a start_url, because of this your PWA cannot currently be packaged. Please visit the documentation below for how to fix this.",link:"https://developer.mozilla.org/en-US/docs/Web/Manifest/start_url"},$m={message:"Your app is missing a name, because of this your PWA cannot currently be packaged. Please visit the documentation below for how to fix this.",link:"https://developer.mozilla.org/en-US/docs/Web/Manifest/name"};let Tm=class extends n{constructor(){super(),this.swScore=0,this.maniScore=0,this.securityScore=0,this.selectedTab="overview",this.currentHeader=Sm.heading,this.currentSupporting=Sm.supporting,this.errored=!1,this.errorMessage=void 0,this.errorLink=void 0,this.mql=window.matchMedia(`(min-width: ${V.largeUpper}px)`),this.isDeskTopView=this.mql.matches,this.mql.addEventListener("change",(t=>{this.isDeskTopView=t.matches}))}static get styles(){return[st,o`
        h1 {
          font-size: 44px;
          line-height: 46px;
        }
        #hero-p {
          font-size: 16px;
          line-height: 24px;
          max-width: 406px;
        }
        #tablet-sidebar {
          display: none;
        }
        #desktop-sidebar {
          display: block;
        }
        content-header::part(header) {
          display: none;
        }
        .tab {
          background: var(--background-color);
          color: rgba(41, 44, 58, 1);
        }
        .tab[aria-selected='true'] {
          color: var(--font-color);
          font-weight: var(--font-bold);
        }
        fast-tabs::part(activeIndicator) {
          background: black;
          border-radius: 0;
          height: 2px;
          margin-top: 0;
        }
        fast-tabs::part(tablist) {
          margin-left: 26px;
        }
        report-card {
          margin-top: 20px;
        }
        manifest-options {
          width: 100%;
        }
        #overview-panel {
          padding-left: 14px;
        }
        #error-link {
          color: white;
          font-weight: var(--font-bold);
          border-radius: var(--button-radius);
          background: var(--error-color);
          margin-right: 8px;
          padding-left: 10px;
          padding-right: 10px;
          box-shadow: var(--button-shadow);
        }
        ${p(o`
            #report {
              max-width: 69em;
            }
            app-sidebar {
              display: block;
            }
            #tablet-sidebar {
              display: none;
            }
            #desktop-sidebar {
              display: block;
            }
            #report-wrapper {
              max-width: 69em;
              background: white;
            }
            #grid {
              background: white;
            }
          `)}
        ${g(o`
            #tablet-sidebar {
              display: block;
            }
            #desktop-sidebar {
              display: none;
            }
          `)}
        ${r(o`
            .reportCard h1 {
              font-size: 33px;
              margin-top: 0;
              margin-bottom: 1em;
            }
            .reportCard p {
              display: none;
            }
            #desktop-sidebar {
              display: none;
            }
            #tablet-sidebar {
              display: block;
            }
          `)}
        ${a(o`
            fast-tabs::part(tablist) {
              display: none;
            }
            .reportCard h1 {
              font-size: 24px;
              line-height: 30px;
              margin-top: 0;
              margin-bottom: 2em;
            }
            .reportCard p {
              display: none;
            }
            #desktop-sidebar {
              display: none;
            }
            #tablet-sidebar {
              display: block;
            }
          `)}
      `]}async firstUpdated(){const t=new URLSearchParams(location.search),e=t.get("results"),i=t.get("site"),s=sessionStorage.getItem("current_badges");H(i),e&&(sessionStorage.setItem("results-string",e),this.resultOfTest=JSON.parse(e),q(this.resultOfTest),this.resultOfTest=JSON.parse(e),s||G()),await this.handleDoubleChecks()}async handleDoubleChecks(){const t=Q();if(t.isGenerated)return;const e=await J(t);if(e){if(!e.icon)return this.errorMessage=Om.message,this.errorLink=Om.link,void(this.errored=!0);if(!e.name||!e.shortName)return this.errorMessage=$m.message,this.errorLink=$m.link,void(this.errored=!0);if(!e.startURL)return this.errorMessage=Mm.message,this.errorLink=Mm.link,void(this.errored=!0)}}openManiOptions(){var t;(null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("#mani")).click()}openSWOptions(){var t;(null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("#sw")).click()}openOverview(){var t;(null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("#overview")).click()}handleScoreForDisplay(t,e){"sw"===t?this.swScore=e:"manifest"===t?this.maniScore=e:"security"===t&&(this.securityScore=e)}handleTabsEvent(t){b(t+"_tab_clicked",K.ProcessCheckpoint),this.selectedTab=t,"mani"===t?(this.currentHeader=Am.heading,this.currentSupporting=Am.supporting):"sw"===t?(this.currentHeader=Cm.heading,this.currentSupporting=Cm.supporting):(this.currentHeader=Sm.heading,this.currentSupporting=Sm.supporting)}render(){return l`<!-- error modal -->
<app-modal heading="Wait a minute!" .body="${this.errorMessage||""}" ?open="${this.errored}" id="error-modal" tabindex="0">
  <img class="modal-image" slot="modal-image" src="/assets/warning.svg" alt="warning icon" />
  <div id="actions" slot="modal-actions">
    <fast-anchor target="__blank" id="error-link" class="button" .href="${this.errorLink}">Documentation <ion-icon
        name="link"></ion-icon>
    </fast-anchor>
  </div>
</app-modal>
<div id="report-wrapper">
  <app-header></app-header>
  <div id="grid" class="${S({"grid-mobile":0==this.isDeskTopView})}">
    <app-sidebar id="desktop-sidebar"></app-sidebar>
    <section id="report">
      <content-header class="reportCard ${this.selectedTab}">
        <h1 slot="hero-container">${this.currentHeader}</h1>
        <p id="hero-p" slot="hero-container">${this.currentSupporting}</p>
      </content-header>
      <app-sidebar id="tablet-sidebar"></app-sidebar>
      <fast-tabs activeId="sections">
        <fast-tab class="tab" id="overview" @click="${()=>this.handleTabsEvent("overview")}">Overview</fast-tab>
        <fast-tab class="tab" id="mani" @click="${()=>this.handleTabsEvent("mani")}">Manifest Options</fast-tab>
        <fast-tab class="tab" id="sw" @click="${()=>this.handleTabsEvent("sw")}">Service Worker Options</fast-tab>
        <fast-tab-panel id="overview-panel">
          <report-card @sw-scored="${t=>this.handleScoreForDisplay("sw",t.detail.score)}" @mani-scored="${t=>this.handleScoreForDisplay("manifest",t.detail.score)}" @security-scored="${t=>this.handleScoreForDisplay("manifest",t.detail.score)}"
            @open-mani-options="${()=>this.openManiOptions()}" @open-sw-options="${()=>this.openSWOptions()}"
            .results="${this.resultOfTest}"></report-card>
        </fast-tab-panel>
        <fast-tab-panel id="maniPanel">
          <manifest-options @back-to-overview=${()=>this.openOverview()}
            >
          </manifest-options>
        </fast-tab-panel>
        <fast-tab-panel id="swPanel">
          <sw-picker @back-to-overview="${()=>this.openOverview()}" score="${this.swScore}"></sw-picker>
        </fast-tab-panel>
      </fast-tabs>
    </section>
  </div>
</div>`}};t([e({type:Object})],Tm.prototype,"resultOfTest",void 0),t([i()],Tm.prototype,"swScore",void 0),t([i()],Tm.prototype,"maniScore",void 0),t([i()],Tm.prototype,"securityScore",void 0),t([i()],Tm.prototype,"selectedTab",void 0),t([i()],Tm.prototype,"currentHeader",void 0),t([i()],Tm.prototype,"currentSupporting",void 0),t([i()],Tm.prototype,"errored",void 0),t([i()],Tm.prototype,"errorMessage",void 0),t([i()],Tm.prototype,"errorLink",void 0),t([i()],Tm.prototype,"mql",void 0),t([i()],Tm.prototype,"isDeskTopView",void 0),Tm=t([s("app-report")],Tm);export{Tm as AppReport};
