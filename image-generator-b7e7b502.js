import{s as e,B as t,C as a,G as r,a9 as o,r as i,a2 as n,$ as s,H as l,_ as d,t as c,n as p}from"./app-index-f96a4530.js";import"./app-file-input-2c9b4293.js";import{AnalyticsBehavior as h}from"@pwabuilder/site-analytics";import"./hidden-fdcdcdfb.js";import"./if-defined-0ff46bd7.js";const g=l.imageGenerator,f=[{label:g.windows11,value:"windows11"},{label:g.android,value:"android"},{label:g.ios,value:"ios"}],m="https://appimagegenerator-prod.azurewebsites.net";let u=class extends e{constructor(){super(),this.platformSelected=f.map((()=>!0)),this.padding=.3,this.colorOption="transparent",this.color="#ffffff",this.selectAllState=!1,this.generating=!1,this.generateEnabled=!1}static get styles(){return[t,a,r,o,i`
        :host {
          --loader-size: 1.8em;
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

        fast-card {
          --background-color: var(--secondary-color);
          padding: 16px;
        }

        fast-button {
          height: 24px;
          padding: 8px 0;
        }

        fast-progress-ring {
          height: var(--loader-size);
          width: var(--loader-size);

          --accent-foreground-rest: var(--secondary-color);
          --accent-foreground-rest: var(--primary-color);
          --neutral-fill-rest: white;
          --neutral-fill-active: white;
          --neutral-fill-hover: white;
        }

        fast-button::part(content) {
          margin: 0 16px;
        }

        #image-generator-card {
          background: #ffffff;
        }

        #submit {
          margin-top: 8px;
        }

        fast-button#generateButton,
        fast-button#downloadButton {
          --neutral-foreground-rest: var(--secondary-color);
          --button-font-color: var(--secondary-color);
        }

        .background {
          background-color: var(--primary-color);
          color: var(--primary-color);
        }

        .main {
          padding: 32px;
        }
      `]}firstUpdated(){n("image-generation","page-loaded",h.StartProcess)}render(){return s`
      <div>
        <app-header></app-header>
        <main id="main" role="presentation" class="main background">
          <fast-card id="image-generator-card">
            <h1>${g.image_generator}</h1>
            <p>${g.image_generator_text}</p>
            <form id="imageFileInputForm" enctype="multipart/form-data" role="form" class="form">
              <section class="form-left">
                <div class="image-section">
                  <h3>${g.input_image}</h3>
                  <p>${g.input_image_help}</p>
                  <app-file-input @input-change=${this.handleInputChange}></app-file-input>
                </div>
                <div class="padding-section">
                  <h3>${g.padding}</h3>
                  <fast-number-field name="padding" max="1" min="0" step="0.1" .value=${this.padding}
                    @change=${this.handlePaddingChange} required></fast-number-field>
                  <small>${g.padding_text}</small>
                </div>
                <div class="color-section">
                  <h3>${g.background_color}</h3>
                  <div class="color-radio">
                    <fast-radio-group orientation="vertical" .value=${this.colorOption}
                      @change=${this.handleBackgroundRadioChange}>
                      <fast-radio name="colorOption" value="best guess">
                        ${g.best_guess}
                      </fast-radio>
                      <fast-radio name="colorOption" value="transparent">
                        ${g.transparent}
                      </fast-radio>
                      <fast-radio name="colorOption" value="custom">
                        ${g.custom_color}
                      </fast-radio>
                    </fast-radio-group>
                  </div>
                  ${this.renderColorPicker()}
                </div>
              </section>
              <section class="form-right platforms-section">
                <h4>${g.platforms}</h4>
                <p>${g.platforms_text}</p>
                <div role="group" class="platform-list">
                  ${this.renderPlatformList()}
                </div>
              </section>
              <section id="submit" class="form-bottom">
                <fast-button id="generateButton" class="primary" ?disabled=${!this.generateEnabled||this.generating}
                  @click=${this.generateZip}>
                  ${this.generating?s`<fast-progress-ring></fast-progress-ring>`:l.button.generate}
                </fast-button>
      
                ${this.renderError()}
              </section>
            </form>
          </fast-card>
        </main>
      </div>
    `}renderPlatformList(){return f.map(((e,t)=>s`
        <fast-checkbox type="checkbox" name="platform" value="${e.value}" ?checked=${this.platformSelected[t]}
          @change=${this.handleCheckbox} data-index=${t}>
          ${e.label}
        </fast-checkbox>
      `))}renderColorPicker(){if("custom"===this.colorOption)return s`<div class="custom-color-block">
  <label for="theme-custom-color">${l.values.custom}</label>
  <input type="color" id="theme-custom-color" name="color" .value=${this.color}
    @change=${this.handleThemeColorInputChange} />
</div>`}renderError(){return this.error?s`<p style="font-size: 16px; color: red;">${this.error}</p>`:s``}handleInputChange(e){n("image-generation","choose-file-clicked",h.ProcessCheckpoint);const t=e.detail.input;t.files&&(this.files=t.files),this.checkGenerateEnabled()}handlePaddingChange(e){const t=e.target;this.padding=Number(t.value)}handleCheckbox(e){const t=e.target,a=t.dataset.index;this.platformSelected[a]=t.checked,this.checkGenerateEnabled()}handleBackgroundRadioChange(e){const t=e.target.value;this.colorOption=t,this.checkGenerateEnabled()}handleThemeColorInputChange(e){const t=e.target;this.color=t.value,this.checkGenerateEnabled()}async generateZip(){n("image-generation","generate-zip-clicked",h.CompleteProcess);const e=this.files?this.files[0]:null;if(!e){const e="No file available to generate zip";return console.error(e),void(this.error=e)}try{this.generateEnabled=!1,this.generating=!0;const t=new FormData,a="custom"===this.colorOption?this.color:"best guess"===this.colorOption?"":"transparent";t.append("fileName",e),t.append("padding",String(this.padding)),t.append("color",a),f.filter(((e,t)=>this.platformSelected[t])).forEach((e=>t.append("platform",e.value)));const r=await fetch(`${m}/api/image`,{method:"POST",body:t}),o=await r.json();if(o.Message)throw new Error("Error from service: "+o.Message);this.downloadZip(`${m}${o.Uri}`)}catch(e){console.error(e),this.error=e.message}finally{this.generating=!1,this.generateEnabled=!0}}downloadZip(e){const t=document.createElement("a");t.href=e,t.download="",t.click()}checkGenerateEnabled(){return this.generateEnabled=void 0!==this.files&&this.platformSelected.reduce(((e,t)=>e||t)),this.generateEnabled}};d([c({hasChanged:function(e,t){return!(!e||!t)&&e.toString()===t.toString()}})],u.prototype,"platformSelected",void 0),d([c()],u.prototype,"files",void 0),d([c()],u.prototype,"padding",void 0),d([c()],u.prototype,"colorOption",void 0),d([c()],u.prototype,"color",void 0),d([c()],u.prototype,"selectAllState",void 0),d([c()],u.prototype,"generating",void 0),d([c()],u.prototype,"generateEnabled",void 0),d([c()],u.prototype,"error",void 0),u=d([p("image-generator")],u);export{u as ImageGenerator};
