import{_ as t,e as i,t as e,n,s as o,r as l,B as r,$ as u}from"./app-index-f96a4530.js";import{a as s}from"./hidden-fdcdcdfb.js";import{l as d}from"./if-defined-0ff46bd7.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function p(t,i){return(({finisher:t,descriptor:i})=>(e,n)=>{var o;if(void 0===n){const n=null!==(o=e.originalKey)&&void 0!==o?o:e.key,l=null!=i?{kind:"method",placement:"prototype",key:n,descriptor:i(e.key)}:{...e,key:n};return null!=t&&(l.finisher=function(i){t(i,n)}),l}{const o=e.constructor;void 0!==i&&Object.defineProperty(e,n,i(n)),null==t||t(o,n)}})({descriptor:e=>{const n={get(){var i,e;return null!==(e=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t))&&void 0!==e?e:null},enumerable:!0,configurable:!0};if(i){const i="symbol"==typeof e?Symbol():"__"+e;n.get=function(){var e,n;return void 0===this[i]&&(this[i]=null!==(n=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==n?n:null),this[i]}}return n}})}let a=class extends o{constructor(){super(),this.inputId="",this.buttonText="Choose File"}static get styles(){return[l`
        [appearance='lightweight'] {
          box-shadow: none;
        }
        :hover {
          background-color: transparent;
        }
      `,s,r]}get input(){return this.fileInput}get value(){var t;return null===(t=this.fileInput)||void 0===t?void 0:t.value}get files(){var t;return(null===(t=this.fileInput)||void 0===t?void 0:t.files)||void 0}render(){return u`
      <div>
        <fast-button
          class="file-button"
          appearance="lightweight"
          @click=${this.clickModalInput}
        >
          ${this.buttonText}
        </fast-button>
        <input
          id="${d(this.inputId)}"
          class="file-input hidden"
          type="file"
          aria-hidden="true"
          @change=${this.handleModalInputFileChosen}
        />
      </div>
    `}clickModalInput(){var t;null===(t=this.fileInput)||void 0===t||t.click()}handleModalInputFileChosen(){var t,i,e;if(this.input){const n=new CustomEvent("input-change",{detail:{input:this.input},composed:!0,bubbles:!0});this.buttonText=null===(e=null===(i=null===(t=this.input)||void 0===t?void 0:t.files)||void 0===i?void 0:i.item(0))||void 0===e?void 0:e.name,this.dispatchEvent(n),this.requestUpdate()}}clearInput(){this.buttonText="Choose File",this.fileInput&&(this.fileInput.files=null)}};t([i({type:String,attribute:!0})],a.prototype,"inputId",void 0),t([p(".file-input")],a.prototype,"fileInput",void 0),t([e()],a.prototype,"buttonText",void 0),a=t([n("app-file-input")],a);export{p as i};
