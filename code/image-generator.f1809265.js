import{c as d,h as p,a as k,b as y,s as $,H as C,y as h,E as m,A as f,D as b}from"./index.0229c04f.js";import{l as E}from"./if-defined.6fc51b43.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I=({finisher:t,descriptor:e})=>(n,o)=>{var i;if(o===void 0){const r=(i=n.originalKey)!==null&&i!==void 0?i:n.key,a=e!=null?{kind:"method",placement:"prototype",key:r,descriptor:e(n.key)}:{...n,key:r};return t!=null&&(a.finisher=function(w){t(w,r)}),a}{const r=n.constructor;e!==void 0&&Object.defineProperty(n,o,e(o)),t==null||t(r,o)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function O(t,e){return I({descriptor:n=>{const o={get(){var i,r;return(r=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(t))!==null&&r!==void 0?r:null},enumerable:!0,configurable:!0};if(e){const i=typeof n=="symbol"?Symbol():"__"+n;o.get=function(){var r,a;return this[i]===void 0&&(this[i]=(a=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(t))!==null&&a!==void 0?a:null),this[i]}}return o}})}const _=d`
  .hidden {
    display: none;
    visibility: none;
  }
`,P=d`
  @media screen and (max-width: 479px) {
    .hidden-sm {
      display: none;
      visibility: none;
    }
  }
`,S=d`
  @media screen and (min-width: 480px) and (max-width: 639px) {
    .hidden-med {
      display: none;
      visibility: none;
    }
  }
`,z=d`
  @media screen and (min-width: 640px) and (max-width: 1023px) {
    .hidden-lrg {
      display: none;
      visibility: none;
    }
  }
`,F=d`
  @media screen and (min-width: 1024px) and (max-width: 1365px) {
    .hidden-xlrg {
      display: none;
      visibility: none;
    }
  }
`,T=d`
  @media screen and (min-width: 1366px) and (max-width: 1919px) {
    .hidden-xxlrg {
      display: none;
      visibility: none;
    }
  }
`,D=d`
  @media screen and (min-width: 1920px) {
    .hidden-xxxlrg {
      display: none;
      visibility: none;
    }
  }
`;d`
  ${_}
  ${P}
  ${S}
  ${z}
  ${F}
  ${T}
  ${D}
`;var G=Object.defineProperty,M=Object.getOwnPropertyDescriptor,g=(t,e,n,o)=>{for(var i=o>1?void 0:o?M(e,n):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(i=(o?a(e,n,i):a(i))||i);return o&&i&&G(e,n,i),i};let u=class extends ${constructor(){super(),this.inputId="",this.buttonText="Choose File"}static get styles(){return[d`
        [appearance='lightweight'] {
          box-shadow: none;
        }
        :hover {
          background-color: transparent;
        }
      `,_,C]}get input(){return this.fileInput}get value(){var t;return(t=this.fileInput)==null?void 0:t.value}get files(){var t;return((t=this.fileInput)==null?void 0:t.files)||void 0}render(){return h`
      <div>
        <fast-button
          class="file-button"
          appearance="lightweight"
          @click=${this.clickModalInput}
        >
          ${this.buttonText}
        </fast-button>
        <input
          id="${E(this.inputId)}"
          class="file-input hidden"
          type="file"
          aria-hidden="true"
          @change=${this.handleModalInputFileChosen}
        />
      </div>
    `}clickModalInput(){var t;(t=this.fileInput)==null||t.click()}handleModalInputFileChosen(){var t,e,n;if(this.input){const o=new CustomEvent("input-change",{detail:{input:this.input},composed:!0,bubbles:!0});this.buttonText=(n=(e=(t=this.input)==null?void 0:t.files)==null?void 0:e.item(0))==null?void 0:n.name,this.dispatchEvent(o),this.requestUpdate()}}clearInput(){this.buttonText="Choose File",this.fileInput&&(this.fileInput.files=null)}};g([k({type:String,attribute:!0})],u.prototype,"inputId",2);g([O(".file-input")],u.prototype,"fileInput",2);g([p()],u.prototype,"buttonText",2);u=g([y("app-file-input")],u);var j=Object.defineProperty,B=Object.getOwnPropertyDescriptor,c=(t,e,n,o)=>{for(var i=o>1?void 0:o?B(e,n):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(i=(o?a(e,n,i):a(i))||i);return o&&i&&j(e,n,i),i};const s=b.imageGenerator,v=[{label:s.windows11,value:"windows11"},{label:s.android,value:"android"},{label:s.ios,value:"ios"}],x="https://appimagegenerator-prod.azurewebsites.net";function R(t,e){return!t||!e?!1:t.toString()===e.toString()}let l=class extends ${constructor(){super(),this.platformSelected=v.map(()=>!0),this.padding=.3,this.colorOption="transparent",this.color="#ffffff",this.selectAllState=!1,this.generating=!1,this.generateEnabled=!1}static get styles(){return[d`
        :host {
          --loader-size: 1.8em;
          --sl-input-height-medium: 1.5rem;
        }

        h1 {
          font-size: var(--xlarge-font-size);
          line-height: 48px;
          letter-spacing: -0.015em;
          margin: 0;
        }

        h2 {
          font-size: var(--large-font-size);
        }

        h3 {
          font-size: var(--medium-font-size);
        }

        p {
          font-size: var(--font-size);
        }

        small {
          display: block;
          font-size: 10px;
        }


        app-file-input:hover {
          cursor: pointer;
        }

        sl-button {
          height: 24px;
          padding: 8px 0;
        }

        sl-button::part(base) {
          margin: 0 16px;
        }

        #image-generator-card {
          background: #ffffff;
          padding: 16px;
        }

        #submit {
          margin-top: 8px;
        }

        .background {
          background-color: var(--primary-color);
          color: var(--primary-color);
        }

        .main {
          padding: 32px;
        }

        sl-input {
          width: 30%;
          font-size: 16px;
        }
        small {
          margin-top: 10px;
        }
      `]}firstUpdated(){m("image-generation","page-loaded",f.StartProcess)}render(){return h`
      <div>
        <app-header></app-header>
        <main id="main" role="presentation" class="main background">
          <div id="image-generator-card">
            <h1>${s.image_generator}</h1>
            <p>${s.image_generator_text}</p>
            <form id="imageFileInputForm" enctype="multipart/form-data" role="form" class="form">
              <section class="form-left">
                <div class="image-section">
                  <h3>${s.input_image}</h3>
                  <p>${s.input_image_help}</p>
                  <app-file-input @input-change=${this.handleInputChange}></app-file-input>
                </div>
                <div class="padding-section">
                  <h3>${s.padding}</h3>
                  <sl-input name="padding" type="number" max="1" min="0" step="0.1" value=${this.padding}
                    @change=${this.handlePaddingChange} required></sl-input>
                  <small>${s.padding_text}</small>
                </div>
                <div class="color-section">
                  <h3>${s.background_color}</h3>
                  <div class="color-radio">
                    <sl-radio-group orientation="vertical" .value=${this.colorOption}
                      @change=${this.handleBackgroundRadioChange}>
                      <sl-radio name="colorOption" value="best guess">
                        ${s.best_guess}
                      </sl-radio>
                      <sl-radio name="colorOption" value="transparent">
                        ${s.transparent}
                      </sl-radio>
                      <sl-radio name="colorOption" value="custom">
                        ${s.custom_color}
                      </sl-radio>
                    </sl-radio-group>
                  </div>
                  ${this.renderColorPicker()}
                </div>
              </section>
              <section class="form-right platforms-section">
                <h4>${s.platforms}</h4>
                <p>${s.platforms_text}</p>
                <div role="group" class="platform-list">
                  ${this.renderPlatformList()}
                </div>
              </section>
              <section id="submit" class="form-bottom">
                <sl-button id="generateButton" class="primary" ?disabled=${!this.generateEnabled||this.generating}
                  @click=${this.generateZip}
                  ?loading=${this.generating}>
                  ${b.button.generate}

                </sl-button>
      
                ${this.renderError()}
              </section>
            </form>
          </div>
        </main>
      </div>
    `}renderPlatformList(){return v.map((t,e)=>h`
        <sl-checkbox type="checkbox" name="platform" value="${t.value}" ?checked=${this.platformSelected[e]}
          @change=${this.handleCheckbox} data-index=${e}>
          ${t.label}
        </sl-checkbox>
      `)}renderColorPicker(){if(this.colorOption==="custom")return h`<div class="custom-color-block">
  <label for="theme-custom-color">${b.values.custom}</label>
  <input type="color" id="theme-custom-color" name="color" .value=${this.color}
    @change=${this.handleThemeColorInputChange} />
</div>`}renderError(){return this.error?h`<p style="font-size: 16px; color: red;">${this.error}</p>`:h``}handleInputChange(t){m("image-generation","choose-file-clicked",f.ProcessCheckpoint);const e=t.detail.input;e.files&&(this.files=e.files),this.checkGenerateEnabled()}handlePaddingChange(t){const e=t.target;this.padding=Number(e.value)}handleCheckbox(t){const e=t.target,n=e.dataset.index;this.platformSelected[n]=e.checked,this.checkGenerateEnabled()}handleBackgroundRadioChange(t){const e=t.target.value;this.colorOption=e,this.checkGenerateEnabled()}handleThemeColorInputChange(t){const e=t.target;this.color=e.value,this.checkGenerateEnabled()}async generateZip(){m("image-generation","generate-zip-clicked",f.CompleteProcess);const t=this.files?this.files[0]:null;if(!t){const e="No file available to generate zip";console.error(e),this.error=e;return}try{this.generateEnabled=!1,this.generating=!0;const e=new FormData,n=this.colorOption==="custom"?this.color:this.colorOption==="best guess"?"":"transparent";e.append("fileName",t),e.append("padding",String(this.padding)),e.append("color",n),v.filter((r,a)=>this.platformSelected[a]).forEach(r=>e.append("platform",r.value));const i=await(await fetch(`${x}/api/image`,{method:"POST",body:e})).json();if(i.Message)throw new Error("Error from service: "+i.Message);this.downloadZip(`${x}${i.Uri}`)}catch(e){console.error(e),this.error=e.message}finally{this.generating=!1,this.generateEnabled=!0}}downloadZip(t){const e=document.createElement("a");e.href=t,e.download="",e.click()}checkGenerateEnabled(){return this.generateEnabled=this.files!==void 0&&this.platformSelected.reduce((t,e)=>t||e),this.generateEnabled}};c([p({hasChanged:R})],l.prototype,"platformSelected",2);c([p()],l.prototype,"files",2);c([p()],l.prototype,"padding",2);c([p()],l.prototype,"colorOption",2);c([p()],l.prototype,"color",2);c([p()],l.prototype,"selectAllState",2);c([p()],l.prototype,"generating",2);c([p()],l.prototype,"generateEnabled",2);c([p()],l.prototype,"error",2);l=c([y("image-generator")],l);export{l as ImageGenerator};
//# sourceMappingURL=image-generator.f1809265.js.map
