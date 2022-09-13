import{_ as e,e as t,n as i,s as a,r as o,l as n,B as r,$ as s,v as l,S as d,a3 as p,a4 as c,o as u,a0 as g,A as h,c as m,k as f,a as v,t as b,W as y,y as k,H as w,a5 as x}from"./app-index-f96a4530.js";import{l as I}from"./if-defined-0ff46bd7.js";import{M as $}from"./app-modal-4f12a1c5.js";import"./info-circle-tooltip-54f84d16.js";var U;!function(e){e.default="default",e.blog="blog",e.micro="micro",e.microDescription="micro-description",e.contentCard="content-card"}(U||(U={}));let O=class extends a{constructor(){super(),this.imageBordered=!1,this.featured=!1,this.shareLink=!1,this.tags=[],this.isActionCard=!1}static get styles(){return[o`
        :host {
          background: transparent;
          display: flex;
          color: var(--primary-color);
          justify-content: center;
          border-radius: 4px;
        }
      `,o`
        fast-card {
          color: var(--font-color);
          font-size: var(--font-size);
          background: white;
          border-radius: 4px;
        }

        fast-card h3,
        fast-card p {
          white-space: initial;
        }

        fast-card.default {
          min-width: 200px;
          max-width: 280px;
          padding-bottom: 16px;
        }

        fast-card.default h3 {
          font-size: 24px;
          line-height: 24px;
          font-weight: var(--font-bold);
          margin: 16px 16px 0px;
        }

        fast-card.default p {
          color: var(--secondary-font-color);
          margin: 8px 16px 0 16px;

          line-height: 20px;
        }

        fast-card.default app-button::part(underlying-button) {
          color: var(--link-color);
        }

        fast-card.default app-button:focus {
          outline: solid;
          outline-width: 2px;
        }

        fast-card .card-actions {
          margin: 0 16px;
        }

        fast-card .tag-list {
          display: inline-block;
        }

        img {
          width: 100%;
          object-fit: none;
          height: 188px;
        }

        .image-block {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .image-block img {
          width: 60%;
          object-fit: contain;
        }

        h3 {
          font-size: 24px;
          line-height: 24px;
          font-weight: var(--font-bold);
          margin: 16px 16px 0 16px;
        }

        p {
          color: var(--secondary-font-color);
          margin: 8px 16px 0 16px;

          font-size: 14px;
          line-height: 20px;
        }

        .card-actions {
          margin-top: 8px;
        }

        .card-actions a {
          font-weight: bold;
          font-size: 14px;
          line-height: 40px;
          color: var(--link-color);
          padding: 0;
        }

        .card-actions a:hover {
          cursor: pointer;
        }

        card-actions a:focus {
          outline: 1px solid black;
        }

        .card-actions a span {
          display: inline-block;
          height: 28px;
          border-bottom: 1px solid var(--link-color);
        }
      `,o`
        .img-overlay {
          position: fixed;
        }

        .img-overlay,
        fast-card img {
          width: calc(100% - 16px);
          object-fit: none;
          max-height: 184px;
        }

        .img-overlay.bordered,
        fast-card img.bordered {
          padding: 8px;
          width: calc(100% - 48px);
        }

        .img-overlay .overlay-top {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }

        .blog.featured img,
        .blog.featured .img-overlay {
          max-height: none;
          height: calc(100% - 32px);
        }
      `,o`
        .blog {
          background: white;
          color: var(--font-color);
          padding-bottom: 16px;
        }

        .blog img {
          height: 200px;
          width: 100%;
          object-fit: none;
        }

        .blog h3 {
          /* line-height: 34px; */
          line-height: 20px;
          font-size: 24px;
          font-weight: var(--font-bold);
          margin: 16px 16px 0 16px;
        }

        .blog p {
          color: var(--secondary-font-color);

          font-size: 14px;
          line-height: 20px;
        }

        .blog .overlay-top {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }

        .blog .img-overlay {
          position: absolute;
          width: calc(100% - 32px);
          padding: 16px;
        }

        .blog .content {
          display: flex;
          justify-content: space-between;
          vertical-align: text-top;
          margin-top: 8px;
          padding: 8px 16px 0 16px;
        }

        .blog .content app-button::part(underlying-button) {
          text-align: text-top;
          align-items: baseline;
        }

        .blog .content h2 {
          display: inline-block;
          font-size: 18px;
          margin: 0;
        }

        .img-overlay p {
          margin: 0;
        }

        .blog .content {
          display: flex;
          flex-direction: row;
          justify-content: space-between;

          padding: 8px;
        }

        .blog .content h3 {
          font-size: 24px;
          margin: 0;
        }

        .blog.featured {
          padding: 0;
        }

        .blog.featured h3 {
          line-height: 34px;
          font-size: 28px;
          margin: 16px 0 8px 0;
        }

        .blog.featured p {
          font-size: 18px;
          line-height: 24px;
          font-weight: 500px;
          color: var(--font-color);
        }

        .blog.featured img {
          height: 100%;
        }

        .blog.featured .tag-list {
          position: absolute;
          right: unset;
          margin: 0 16px 8px 0;
          bottom: 0;
          right: 0;
        }

        .tag {
          margin: 8px 8px 0 16px;
          padding: 2px 6px;
          border-radius: 2px;
          background-color: var(--primary-background-color);
        }

        .blog.featured .img-overlay {
          display: inline-block;
        }

        .blog.featured .img-overlay .share::part(underlying-button) {
          font-size: 14px;
          color: var(--font-color);
          vertical-align: middle;
        }

        .blog.featured .tag-list {
          position: absolute;
          right: unset;
          margin: 0 16px 8px 0;
          bottom: 0;
          right: 0;
        }

        .blog.featured .tag-list .tag {
          margin: 8px 0 0 8px;
        }

        .share-button-text {
          color: var(--font-color);
          font-weight: 700;
        }

        fast-button.share.link {
          --desktop-button-font-size: 16px;
          box-shadow: none;
        }

        fast-button.share::part(control) {
          font-size: 14px;
          color: var(--font-color);
          vertical-align: top;
        }

        .blog .tag,
        .blog .date,
        .blog .share::part(control) {
          display: inline-block;
          vertical-align: middle;
        }

        .blog .share::part(control),
        .blog .tag::part(control) {
          color: var(--font-color);
          font-size: var(--desktop-button-font-size);
          font-weight: 400;
          height: fit-content;
        }

        .blog .img-overlay .date,
        .blog .img-overlay .tag::part(underlying-button),
        .blog .img-overlay .share::part(control),
        .blog .content .share::part(control) {
          display: inline-block;
          font-size: var(--desktop-button-font-size);
        }

        .blog .date {
          --desktop-button-font-size: 16px;
          font-weight: 700;
          line-height: 21px;
          color: var(--font-color);
        }

        .blog.featured fast-badge::part(control) {
          --badge-fill-primary: white;
          color: var(--font-color);
        }

        .blog .card-anchor {
          text-decoration: none;
          color: initial;
        }

        fast-badge::part(control) {
          --badge-color-dark: var(--font-color);
          --badge-fill-primary: var(--primary-background-color);
          color: var(--font-color);
        }
      `,n(o`
          .blog .img-overlay {
            height: 142px;
          }

          .blog.featured {
            min-width: 220px;
          }

          .blog {
            min-width: 200px;
          }
        `),o`
        .micro {
          display: grid;
          width: 100%;
          max-width: 416px;
          margin: 16px;

          grid-template-columns: 72px auto;
        }

        .micro img {
          object-fit: fill;
          height: 72px;
          width: 73px;
        }

        .micro .content {
          display: inline-flex;
          flex-direction: column;
          justify-content: center;
          margin: 8px;
        }

        .micro.micro-description .content {
          justify-content: space-between;
        }

        .micro h3 {
          margin: 0;
          line-height: 24px;
          font-size: 24px;
        }

        .micro p {
          overflow: hidden;
          text-overflow: ellipsis;
          height: 32px;
          margin: 0;

          line-height: 16px;
          font-size: 12px;
        }
      `,o`
        fast-card.content-card {
          background-color: var(--primary-background-color);
          padding: 1rem 0;
          width: 100%;
          max-width: 1024px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          box-shadow: none;
          border-radius: 0;
          border-bottom: 0.67681px solid #e5e5e5;
        }

        .content-card .header {
          margin-right: 0;
        }

        .content-card .header p {
          color: #808080;
        }

        .content-card app-button {
          margin-top: 1rem;
        }
      `,n(o`
          fast-card.content-card {
            width: calc(100vw - 30vw);
            flex-direction: row;
          }

          .content-card .header {
            margin-right: 1rem;
          }

          .content-card app-button {
            margin-top: 0;
          }
        `,"no-upper"),r]}render(){const e=this.className;return e.includes(U.blog)?this.renderBlogCard():e.includes(U.micro)?this.renderMicroCard():e.includes(U.microDescription)?this.renderMicroDescriptionCard():e.includes(U.contentCard)?this.renderContentCard():this.renderDefault()}renderDefault(){return s`
      <fast-card class="${l({featured:this.featured||this.className.includes("featured"),[U.default]:this.className.includes(U.default),[U.blog]:this.className.includes(U.blog),[U.micro]:this.className.includes(U.micro),[U.microDescription]:this.className.includes(U.microDescription),[U.contentCard]:this.className.includes(U.contentCard)})}" part="card">
        <div class="${l({bordered:this.imageBordered,"img-overlay":!0})}">
          <slot name="overlay"></slot>
        </div>
      
        <div class="image-block">
          <img class="${l({bordered:this.imageBordered})}" src="${I(this.imageUrl)}" alt="${this.cardTitle} card header image" role="presentation"/>
        </div>
      
        <h3>${this.cardTitle}</h3>
        <p>${this.description}</p>
      
        <div class="card-actions">
          <a @click=${this.route} tabindex="0"><span>View ${this.cardTitle}</span></a>
        </div>
      </fast-card>
    `}renderBlogCard(){return this.featured&&window.innerWidth>d.mediumUpper?s`
        <fast-card
          class="${l({featured:this.featured||this.className.includes("featured"),[U.default]:this.className.includes(U.default),[U.blog]:this.className.includes(U.blog),[U.micro]:this.className.includes(U.micro),[U.microDescription]:this.className.includes(U.microDescription),[U.contentCard]:this.className.includes(U.contentCard)})}"
          part="card"
        >
          <a
            class="card-anchor"
            .href="${this.linkRoute}"
            target="_blank"
            rel="noopener"
          >
            <div class="img-overlay">
              <div class="overlay-top">
                <span class="date">${this.date}</span>
                ${this.renderShareButton()}
              </div>
              <h3>${this.cardTitle}</h3>
              <p>${this.description}</p>
              <slot name="overlay"></slot>

              <div class="tag-list">${this.renderTagList()}</div>
            </div>
            <img
              src="${I(this.imageUrl)}"
              alt="${this.cardTitle} card header image"
            />
          </a>
        </fast-card>
      `:s`
      <fast-card
        class="${l({featured:this.featured||this.className.includes("featured"),[U.default]:this.className.includes(U.default),[U.blog]:this.className.includes(U.blog),[U.micro]:this.className.includes(U.micro),[U.microDescription]:this.className.includes(U.microDescription),[U.contentCard]:this.className.includes(U.contentCard)})}"
        part="card"
      >
        <a
          class="card-anchor"
          .href="${this.linkRoute}"
          target="_blank"
          rel="noopener"
        >
          <div class="img-overlay">
            <div class="overlay-top">
              <span class="date">${this.date}</span>
              <div class="tag-list">${this.renderTagList()}</div>
              ${this.renderShareButton()}
            </div>
            <slot name="overlay"></slot>
          </div>
          <img
            src="${I(this.imageUrl)}"
            alt="${this.cardTitle} card header image"
          />
          <div class="content">
            <h3>${this.cardTitle}</h3>
          </div>
        </a>
      </fast-card>
    `}renderMicroCard(){return s`
      <fast-card
        class="${l({featured:this.featured||this.className.includes("featured"),[U.default]:this.className.includes(U.default),[U.blog]:this.className.includes(U.blog),[U.micro]:this.className.includes(U.micro),[U.microDescription]:this.className.includes(U.microDescription),[U.contentCard]:this.className.includes(U.contentCard)})}"
        part="card"
        @click=${this.route}
      >
        <img
          src="${I(this.imageUrl)}"
          alt="${this.cardTitle} card header image"
        />
        <div class="content">
          <h3>${this.cardTitle}</h3>
        </div>
      </fast-card>
    `}renderMicroDescriptionCard(){return s`
      <fast-card
        class="${l({featured:this.featured||this.className.includes("featured"),[U.default]:this.className.includes(U.default),[U.blog]:this.className.includes(U.blog),[U.micro]:this.className.includes(U.micro),[U.microDescription]:this.className.includes(U.microDescription),[U.contentCard]:this.className.includes(U.contentCard)})}"
        part="card"
        @click=${this.route}
      >
        <img
          src="${I(this.imageUrl)}"
          alt="${this.cardTitle} card header image"
        />
        <div class="content">
          <h3>${this.cardTitle}</h3>
          <p>${this.description}</p>
        </div>
      </fast-card>
    `}renderContentCard(){return s`<fast-card
      class="${l({featured:this.featured||this.className.includes("featured"),[U.default]:this.className.includes(U.default),[U.blog]:this.className.includes(U.blog),[U.micro]:this.className.includes(U.micro),[U.microDescription]:this.className.includes(U.microDescription),[U.contentCard]:this.className.includes(U.contentCard)})}"
      part="card"
    >
      <div class="header">
        <h3>${this.cardTitle}</h3>
        <p>${this.description}</p>
      </div>
      ${this.isActionCard?s`<div>
            <app-button>${this.linkText}</app-button>
          </div>`:s``}
    </fast-card>`}renderShareButton(){return s`
      <fast-button
        class="share link"
        appearance="lightweight"
        @click=${this.share}
      >
        <span class="share-button-text">SHARE</span>
      </fast-button>
    `}renderTagList(){return this.tags.map((e=>s`<fast-badge class="tag">${e}</fast-badge>`))}share(){console.log("share")}route(){this.linkRoute&&window.open(this.linkRoute,"_blank")}};e([t({attribute:"bordered",type:Boolean})],O.prototype,"imageBordered",void 0),e([t({type:String})],O.prototype,"imageUrl",void 0),e([t({type:String})],O.prototype,"cardTitle",void 0),e([t({type:String})],O.prototype,"description",void 0),e([t({type:String})],O.prototype,"date",void 0),e([t({type:String})],O.prototype,"linkText",void 0),e([t({type:String})],O.prototype,"linkRoute",void 0),e([t({type:Boolean})],O.prototype,"featured",void 0),e([t({type:Boolean})],O.prototype,"shareLink",void 0),e([t({type:Array})],O.prototype,"tags",void 0),e([t({type:Boolean})],O.prototype,"isActionCard",void 0),O=e([i("app-card")],O);const C=/[^a-zA-Z0-9_]/g;function L(e){const t=[];if(!e)return t.push({field:null,error:"No options specified "}),t;e.packageId||t.push({field:"packageId",error:"No package ID"}),e.name&&0!==e.name.trim().length?e.name.trim().length>=256&&t.push({field:"name",error:"App name must be less than 256 characters"}):t.push({field:"name",error:"App name required"});const i=(e.version||"").trim();if(e.classicPackage){const a=(e.classicPackage.version||"").trim();i&&a?t.push(...function(e,t){const i=[],a=e.split(".").map(Number),o=t.split(".").map(Number);let n=null;const r=[{name:"version",label:"Version",value:e},{name:"classicPackage",label:"Classic version",value:t}];for(const e of r)i.push(...N(e));for(var s=0;s<a.length;s++){if(a[s]<o[s]){n=!1;break}if(a[s]>o[s]){n=!0;break}}s==a.length&&(n=!1);n||i.push({field:"version",error:"App version must be greater than classic package version"});return i}(i,a)):t.push({field:"version",error:"Must have an app version and a classic package version"})}else t.push({field:"classicPackage",error:"Must have classic package information"});if(e.publisher?(e.publisher.commonName||t.push({field:"commonName",error:"Publisher ID required."}),e.publisher.displayName||t.push({field:"displayName",error:"Publisher display name required."})):t.push({field:"publisher",error:"Publisher information required."}),e.url){p(e.url)&&t.push({field:"url",error:"URL is invalid"})}else t.push({field:"url",error:"Start URL must be specified. If your start URL is the same as Host, you can use '/' as the start URL."});return t}function N(e){const t=[],i=e.value?e.value.split("."):[];3!==i.length&&t.push({field:e.name,error:`${e.label} must have 3 segments: 1.0.0.`}),i.some((e=>!e.match(/^(0|[1-9][0-9]*)$/)))&&t.push({field:e.name,error:`${e.label} must only contain integers separated by periods.`});const a=i.map((e=>parseInt(e)));return a&&a.length>0&&a[0]<=0&&t.push({field:e.name,error:`${e.label} must start with an integer >= 1.`}),t}let S=!1;function P(e){const t=c(),i=u();if(!i)throw new Error("Can't find the current URL");if(!t)throw new Error("Cant find the manifest URL");const a=e.short_name||e.name||"My PWA",o=function(e){const t=e.split(".").reverse().map((e=>e.trim().toLowerCase())).filter((e=>e.length>0)).map((e=>e.replace(C,"-")));return t.push("edge"),t.join(".").slice(0,50)}(new URL(i).hostname),n=e.icons||[],r=g(n);return{name:a,packageId:o,url:i,version:"1.0.1",allowSigning:!0,publisher:{displayName:"Contoso, Inc.",commonName:"CN=3a54a224-05dd-42aa-85bd-3f3c1478fdca"},generateModernPackage:!0,classicPackage:{generate:!0,version:"1.0.0",url:i},edgeHtmlPackage:{generate:!1},manifestUrl:t,manifest:e,images:{baseImage:(null==r?void 0:r.src)||"",backgroundColor:e.background_color||"transparent",padding:0},resourceLanguage:null==e?void 0:e.lang}}var M=m`#form-layout {
  padding-left: 2em;
  padding-right: 2em;
  overflow-y: auto;

  max-height: 15em;
}

.tooltip {
  margin-left: 10px;
}

.form-group .tooltip a {
  color: #fff;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-size: var(--small-medium-font-size);
  font-weight: bold;
  line-height: 40px;
  display: flex;
  align-items: center;
}

.form-group label a {
  text-decoration: none;
  color: var(--font-color);
}

#form-options-actions {
  display: flex;
  justify-content: center;
  margin-top: 37px;
}

#form-details-block {
  display: flex;
  align-items: center;
  justify-content: center;
}

#form-details-block p {
  text-align: center;
  font-weight: 300;
  font-size: var(--small-font-size);

  color: rgba(128, 128, 128, 1);
  line-height: 30px;

  padding-left: 2em;
  padding-right: 2em;
}

.select-group {
  display: flex;
  margin-bottom: 10px;
  padding-left: 2em;
}

#all-settings-header {
  color: var(--font-color);
  font-weight: var(--font-bold);
  font-size: 18px;

  display: flex;
  align-items: center;
}

fast-accordion {
  margin-top: 15px;
  margin-bottom: 15px;
}

fast-accordion,
fast-accordion-item {
  border: none;
}

fast-accordion-item::part(icon) {
  display: none;
}

.flipper-button {
  background: white;
  box-shadow: 0 1px 4px 0px rgb(0 0 0 / 25%);
  border-radius: 50%;
  color: #5231a7;

  height: 16px;
  min-width: 16px;

  margin-left: 5px;
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

form {
  max-height: 24em;
}

.form-check {
  display: flex;
  align-items: center;
}

.form-check label {
  font-weight: normal;
  margin-left: 8px;
}

#form-layout input:invalid {
  color: var(--error-color);
  border: 1px solid var(--error-color);
}
`;const A=o`
  fast-button.tooltip {
    --tooltip-square: 16px;
    --tooltip-image-square: 12px;

    --tooltip-text-color: #fff;
    --tooltip-background-color: var(--font-color);

    --base-height-multiplier: 4;

    box-shadow: none;
  }

  .tooltip {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 2px;
    border-radius: var(--button-radius);
    min-width: 16px;
    max-width: 4em;
  }

  .tooltip::part(control) {
    padding: 0;
  }

  .tooltip::part(content) {
    width: 12px;
  }

  .tooltip-text {
    display: none;
    color: var(--tooltip-text-color);
    background-color: var(--tooltip-background-color);
    padding: 8px;
    border-radius: 6px;
    position: absolute;
    z-index: 1;
    text-align: center;

    white-space: break-spaces;
    width: 14em;
  }

  .tooltip:focus > .tooltip-text,
  .tooltip:focus-visible > .tooltip-text,
  .tooltip:focus-within > .tooltip-text,
  .tooltip:hover > .tooltip-text {
    display: inline-block;
  }

  fast-button:hover {
    background: var(--neutral-fill-stealth-rest);
  }

  .tooltip img {
    vertical-align: middle;
    height: var(--tooltip-image-square);
    width: var(--tooltip-image-square);
  }

  .tooltip-badge {
    height: var(--tooltip-square);
    width: var(--tooltip-square);
  }
`;let F=class extends a{static get styles(){const e=o`
      #form-layout input {
        border: 1px solid rgba(194, 201, 209, 1);
        border-radius: var(--input-radius);
        color: var(--font-color);
      }

      #form-layout input:not([type='color']) {
        padding: 10px;
      }

      input::placeholder {
        color: var(--placeholder-color);
        font-style: italic;
      }

      #generate-submit {
        background: transparent;
        color: var(--button-font-color);
        font-weight: bold;
        border: none;
        cursor: pointer;

        height: var(--desktop-button-height);
        width: var(--button-width);
      }

      info-circle-tooltip {
        margin-top: 4px;
      }

      @media (min-height: 760px) and (max-height: 1000px) {
        form {
          width: 100%;
        }
      }

      ${f(o`
          #form-layout {
            max-height: 17em;
          }
        `)}

      ${v(o`
          #form-layout {
            max-height: 20em;
          }
        `)}
    `;return[M,$,A,e]}constructor(){super()}renderFormInput(e){return"checkbox"===e.type||"radio"===e.type?s`
        ${this.renderFormInputTextbox(e)}
        ${this.renderFormInputLabel(e)}
      `:s`
      ${this.renderFormInputLabel(e)}
      ${this.renderFormInputTextbox(e)}
    `}renderFormInputTextbox(e){const t=e.type||"text",i="radio"===e.type?"form-check-input":"form-control";return s`
      <input id="${e.inputId}" class="${i}" placeholder="${e.placeholder||""}"
        value="${I(e.value)}" type="${t}" ?required="${e.required}"
        name="${I(e.name)}" minlength="${I(e.minLength)}"
        maxlength="${I(e.maxLength)}" min=${I(e.minValue)}
        max="${I(e.maxValue)}" pattern="${I(e.pattern)}"
        spellcheck="${I(e.spellcheck)}" ?checked="${e.checked}" ?readonly="${e.readonly}"
        custom-validation-error-message="${I(e.validationErrorMessage)}"
        @input="${t=>this.inputChanged(t,e)}" @invalid=${this.inputInvalid} />
    `}renderFormInputLabel(e){return s`
      <label for="${e.inputId}">
        ${e.label}
        ${this.renderTooltip(e)}
      </label>
    `}renderTooltip(e){return e.tooltip?(e.inputId||(e.inputId=Math.random().toString(36).replace("0.","form-input-")),s`
      <info-circle-tooltip text="${e.tooltip}" link="${I(e.tooltipLink)}">
      </info-circle-tooltip>
    `):s``}toggleAccordion(e){if(e){const t=e.classList.contains("flipper-button")?e:e.querySelector(".flipper-button");t&&(t.classList.contains("opened")?(t.animate([{transform:"rotate(0deg)"}],{duration:200,fill:"forwards"}),t.classList.remove("opened")):(t.classList.add("opened"),t.animate([{transform:"rotate(0deg)"},{transform:"rotate(90deg)"}],{duration:200,fill:"forwards"})))}}inputChanged(e,t){const i=e.target;if(i&&(t.inputHandler&&t.inputHandler(i.value||"",i.checked,i),t.validationErrorMessage)){const e=this.inputHasValidationErrors(i)?t.validationErrorMessage:"";i.setCustomValidity(e),i.title=e}}inputInvalid(e){const t=e.target;t&&this.expandParentAccordionIfNeeded(t)}inputHasValidationErrors(e){return[e.validity.badInput,e.validity.patternMismatch,e.validity.rangeOverflow,e.validity.rangeUnderflow,e.validity.stepMismatch,e.validity.tooLong,e.validity.tooShort,e.validity.typeMismatch,e.validity.valueMissing].some((e=>!0===e))}expandParentAccordionIfNeeded(e){const t=!e.validity.valid,i=e.closest("fast-accordion-item");if(i&&!1===i.expanded&&t){const t=i.querySelector(".flipper-button");null==t||t.click(),setTimeout((()=>{e.scrollIntoView(),e.reportValidity()}),0)}}};F=e([i("app-package-form-base")],F);let T=class extends F{constructor(){super(),this.generating=!1,this.showAdvanced=!1,this.packageOptions={name:"",packageId:"",url:"",version:"1.0.0.1",manifestUrl:"",classicPackage:{generate:!0,version:"1.0.0.0",url:""},publisher:{displayName:"",commonName:""}}}static get styles(){const e=o``;return[super.styles,e,o`
        .flipper-button {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .form-generate-button {
          width: 135px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `]}async firstUpdated(){let e=y();e.isGenerated&&(e=await k()),this.packageOptions=P(e.manifest),this.packageOptions.targetDeviceFamilies=["Desktop","Holographic"]}initGenerate(e){e.preventDefault(),this.dispatchEvent(new CustomEvent("init-windows-gen",{detail:this.packageOptions,composed:!0,bubbles:!0}))}toggleSettings(e){this.showAdvanced="advanced"===e}get manifestUrl(){return c()}addOrRemoveDeviceFamily(e,t){var i,a,o,n;if(t)(null===(i=this.packageOptions.targetDeviceFamilies)||void 0===i?void 0:i.includes(e))||null===(a=this.packageOptions.targetDeviceFamilies)||void 0===a||a.push(e);else{let t=null===(o=this.packageOptions.targetDeviceFamilies)||void 0===o?void 0:o.indexOf(e,0);t>-1&&(null===(n=this.packageOptions.targetDeviceFamilies)||void 0===n||n.splice(t,1))}this.checkValidityForDeviceFamily()}checkValidityForDeviceFamily(){var e,t;const i=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#target-device-families"),a=null==i?void 0:i.querySelectorAll('input[type="checkbox"]:checked'),o=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("#device-family-input-desktop");void 0!==a&&0===(null==a?void 0:a.length)?o.setCustomValidity("Please select at least one device family"):o.setCustomValidity("")}render(){var e,t;return s`
      <form
        id="windows-options-form"
        @submit="${e=>this.initGenerate(e)}"
        slot="modal-form"
        style="width: 100%"
      >
        <div id="form-layout">
          <div class="basic-settings">
            <div class="form-group">
              ${this.renderFormInput({label:"Package ID",tooltip:"The Package ID uniquely identifying your app in the Microsoft Store. Get this value from Windows Partner Center.",tooltipLink:"https://blog.pwabuilder.com/docs/finding-your-windows-publisher-info/",inputId:"package-id-input",required:!0,placeholder:"MyCompany.MyApp",minLength:3,maxLength:50,spellcheck:!1,pattern:"[a-zA-Z0-9.-]*$",validationErrorMessage:"Package ID must contain only letters, numbers, period, or hyphen.",inputHandler:e=>this.packageOptions.packageId=e})}
            </div>
            <div class="form-group">
              ${this.renderFormInput({label:"Publisher display name",tooltip:"The display name of your app's publisher. Gets this value from Windows Partner Center.",tooltipLink:"https://blog.pwabuilder.com/docs/finding-your-windows-publisher-info/",inputId:"publisher-display-name-input",required:!0,minLength:3,spellcheck:!1,validationErrorMessage:"Publisher display name must be at least 3 characters. Get this value from Windows Partner Center.",placeholder:"Contoso Inc",inputHandler:e=>this.packageOptions.publisher.displayName=e})}
            </div>
            <div class="form-group">
              ${this.renderFormInput({label:"Publisher ID",tooltip:"The ID of your app's publisher. Get this value from Windows Partner Center.",tooltipLink:"https://blog.pwabuilder.com/docs/finding-your-windows-publisher-info/",inputId:"publisher-id-input",placeholder:"CN=3a54a224-05dd-42aa-85bd-3f3c1478fdca",validationErrorMessage:"Publisher ID must be in the format CN=XXXX. Get your publisher ID from Partner Center.",pattern:"CN=.+",required:!0,spellcheck:!1,minLength:4,inputHandler:e=>this.packageOptions.publisher.commonName=e})}
            </div>
          </div>
          <!-- "all settings" section of the modal -->
          <fast-accordion>
            <fast-accordion-item
              @click="${e=>this.toggleAccordion(e.target)}"
            >
              <div id="all-settings-header" slot="heading">
                <span>All Settings</span>
                <div
                  class="flipper-button"
                  aria-label="caret dropdown"
                  role="button"
                >
                  <ion-icon name="caret-forward-outline"></ion-icon>
                </div>
              </div>
              <div class="adv-settings">
                <div class="form-group">
                  ${this.renderFormInput({label:"App name",tooltip:"The name of your app. This is displayed to users in the Store.",tooltipLink:"https://docs.microsoft.com/en-us/uwp/schemas/appxpackage/uapmanifestschema/element-displayname",inputId:"app-name-input",required:!0,minLength:1,maxLength:256,value:this.packageOptions.name,placeholder:"My Awesome PWA",pattern:"[^|$@#><)(!&%*]*$",validationErrorMessage:"App name must not include special characters and be between 1 and 256 characters",inputHandler:e=>this.packageOptions.name=e})}
                </div>
                <div class="form-group">
                  ${this.renderFormInput({label:"App version",tooltip:"Your app version in the form of '1.0.0'. It must not start with zero and must be greater than classic package version. For new apps, this should be set to 1.0.1",tooltipLink:"https://blog.pwabuilder.com/docs/what-is-a-classic-package/",inputId:"version-input",required:!0,minLength:5,value:this.packageOptions.version,placeholder:"1.0.1",spellcheck:!1,pattern:"^[^0]+\\d*.\\d+.\\d+$",validationErrorMessage:"Version must be in the form of '1.0.0', cannot start with zero, and must be greater than classic version",inputHandler:e=>this.packageOptions.version=e})}
                </div>
                <div class="form-group">
                  ${this.renderFormInput({label:"Classic app version",tooltip:"The version of your app that runs on older versions of Windows. Must be in the form of '1.0.0', it cannot start with zero, and must be less than app version. For new apps, this should be set to 1.0.0",tooltipLink:"https://blog.pwabuilder.com/docs/what-is-a-classic-package/",inputId:"classic-version-input",required:!0,minLength:5,value:null===(e=this.packageOptions.classicPackage)||void 0===e?void 0:e.version,placeholder:"1.0.0",pattern:"^[^0]+\\d*.\\d+.\\d+$",validationErrorMessage:"Classic app version must be in the form of '1.0.0', cannot start with zero, and must be less than than app version",inputHandler:e=>this.packageOptions.classicPackage.version=e})}
                </div>
                <div class="form-group">
                  ${this.renderFormInput({label:"Icon URL",tooltip:"The URL of an icon to use for your app. This should be a 512x512 or larger, square PNG image. Additional Windows image sizes will be fetched from your manifest, and any missing Windows image sizes will be generated by PWABuilder. The URL can be an absolute path or relative to your manifest.",tooltipLink:"https://blog.pwabuilder.com/docs/image-recommendations-for-windows-pwa-packages/",inputId:"icon-url-input",required:!0,type:"text",minLength:2,validationErrorMessage:"Must be an absolute URL or a URL relative to your manifest",value:(null===(t=this.packageOptions.images)||void 0===t?void 0:t.baseImage)||"",placeholder:"/images/512x512.png",inputHandler:e=>this.packageOptions.images.baseImage=e})}
                </div>
                <div class="form-group">
                  ${this.renderFormInput({label:"Language",tooltip:"Optional. The primary language for your app package. Additional languages can be specified in Windows Partner Center. If empty, EN-US will beused.",tooltipLink:"https://docs.microsoft.com/en-us/windows/uwp/publish/supported-languages",inputId:"language-input",value:this.packageOptions.resourceLanguage,placeholder:"EN-US",inputHandler:e=>this.packageOptions.resourceLanguage=e})}
                </div>
                <div class="form-group" id="target-device-families">
                  <label>Target device families</label>
                  <div class="form-check">
                    ${this.renderFormInput({label:"Desktop",value:"Desktop",tooltip:"Identifies the device family that your package targets. Both Desktop and Holographic are enabled by default",tooltipLink:"https://docs.microsoft.com/en-us/uwp/schemas/appxpackage/uapmanifestschema/element-targetdevicefamily",inputId:"device-family-input-desktop",type:"checkbox",checked:!0,inputHandler:(e,t)=>{this.addOrRemoveDeviceFamily(e,t)}})}
                  </div>
                  <div class="form-check">
                    ${this.renderFormInput({label:"Holographic (HoloLens)",value:"Holographic",tooltip:"Identifies the device family that your package targets. Both Desktop and Holographic are enabled by default",tooltipLink:"https://docs.microsoft.com/en-us/uwp/schemas/appxpackage/uapmanifestschema/element-targetdevicefamily",inputId:"device-family-input-holographic",type:"checkbox",checked:!0,inputHandler:(e,t)=>{this.addOrRemoveDeviceFamily(e,t)}})}
                  </div>
                  <div class="form-check">
                    ${this.renderFormInput({label:"Surface Hub (Team)",value:"Team",tooltip:"Identifies the device family that your package targets.",tooltipLink:"https://docs.microsoft.com/en-us/uwp/schemas/appxpackage/uapmanifestschema/element-targetdevicefamily",inputId:"device-family-input-team",type:"checkbox",checked:!1,inputHandler:(e,t)=>{this.addOrRemoveDeviceFamily(e,t)}})}
                  </div>
                </div>
              </div>
            </fast-accordion-item>
          </fast-accordion>
        </div>
        <div id="form-details-block">
          <p>${w.text.publish.windows_platform.p}</p>
        </div>
        <div id="form-options-actions" class="modal-actions">
          <loading-button
            class="form-generate-button"
            .loading="${this.generating}"
            .primary=${!0}
          >
            <input id="generate-submit" type="submit" value="Generate" />
          </loading-button>
        </div>
      </form>
    `}};e([t({type:Boolean})],T.prototype,"generating",void 0),e([b()],T.prototype,"showAdvanced",void 0),e([b()],T.prototype,"packageOptions",void 0),T=e([i("windows-form")],T);const D=/[^a-zA-Z0-9_]/g,R=2097152;function H(e){const t=e.split(".").reverse().map((e=>e.trim().toLowerCase())).map((e=>function(e){if(0===e.length)return"app";if(e&&e.length&&e[0].match(/^\d/))return`app_${e}`;return e}(e))).filter((e=>e.length>0)).map((e=>e.replace(D,"_")));return t.push("twa"),t.join(".")}function E(e){const t=[];return e||t.push({field:"packageId",error:"No package ID"}),e&&-1!==e.search(/[^a-zA-Z0-9-_.]/)&&t.push({field:"packageId",error:"Package ID must not contain any character other than alphanumeric, period, hyphen, and underscore."}),e&&(e.includes(".if.")||e.startsWith("if.")||(null==e?void 0:e.endsWith(".if")))&&t.push({field:"packageId",error:'Package ID must not contain ".if.", must not start with "if.", and must not end with ".if"'}),t}function z(e,t){try{return new URL(e,t),null}catch(e){return`${e}`}}let q=!1;async function G(e){const t=function(e){const t=[];if(!e)return t.push({field:null,error:"No options specified "}),t;t.push(...E(null==e?void 0:e.packageId)),e.name&&0!==e.name.trim().length||t.push({field:"name",error:"Must have a valid app name"}),e.name&&(e.name.length<3||e.name.length>50)&&t.push({field:"name",error:"Name must be between 3 and 50 characters in length"}),e.launcherName&&(e.launcherName.length<3||e.launcherName.length>30)&&t.push({field:"launcherName",error:"Launcher name must be between 3 and 30 characters in length"}),e.appVersion&&0!==e.appVersion.trim().length||t.push({field:"appVersion",error:"Must have a valid app version"}),(!e.appVersionCode||e.appVersionCode>21e8)&&t.push({field:"appVersionCode",error:"App version code must be between 1 and 2,100,000,000"}),e.backgroundColor||t.push({field:"backgroundColor",error:"Must have a background color"}),"standalone"!==e.display&&"fullscreen"!==e.display&&"fullscreen-sticky"!==e.display&&t.push({field:"display",error:"Display must be 'standalone' or 'fullscreen'"}),"customtabs"!==e.fallbackType&&"webview"!==e.fallbackType&&t.push({field:"fallbackType",error:"Fallback type must be 'customtabs' or 'webview'"}),e.host?z(e.host.startsWith("https")?e.host:`https://${e.host}`)&&t.push({field:"host",error:"Host URL must be a valid URL"}):t.push({field:"host",error:"Host must be specified"});e.iconUrl?z(e.iconUrl,e.webManifestUrl)&&t.push({field:"iconUrl",error:"Icon URL is invalid"}):t.push({field:"iconUrl",error:"Must have a icon URL"});e.launcherName&&0!==e.launcherName.trim().length||t.push({field:"launcherName",error:"Must have an app launcher name"}),e.webManifestUrl?z(e.webManifestUrl)&&t.push({field:"webManifestUrl",error:"Manifest URL is invalid"}):t.push({field:"webManifestUrl",error:"Must have a manifest URL"});e.maskableIconUrl&&z(e.maskableIconUrl,e.webManifestUrl)&&t.push({field:"maskableIconUrl",error:"Maskable icon URL was invalid. If you specify a maskable icon URL, it must be a valid URL."});e.monochromeIconUrl&&z(e.monochromeIconUrl,e.webManifestUrl)&&t.push({field:"monochromeIconUrl",error:"Monochrome icon URL was invalid. If you specify a monochrome icon URL, it must be a valid URL."});if(e.navigationColor||t.push({field:"navigationColor",error:"Navigation color is required"}),"mine"===e.signingMode||"new"===e.signingMode)if(e.signing){const i=["alias"];"mine"===e.signingMode?i.push("file","keyPassword","storePassword"):"new"===e.signingMode&&i.push("fullName","organization","organizationalUnit","countryCode"),i.filter((t=>!e.signing[t])).forEach((e=>t.push({field:e,error:`${e.toString()} must be specified`}))),e.signing.keyPassword&&e.signing.keyPassword.length<6&&t.push({field:"keyPassword",error:"Key password must be at least 6 characters"}),e.signing.storePassword&&e.signing.storePassword.length<6&&t.push({field:"storePassword",error:"Key store password must be at least 6 characters"}),"new"===e.signingMode&&e.signing.countryCode&&2!==e.signing.countryCode.length&&t.push({field:"countryCode",error:"Signing key country code must be 2 letters"})}else t.push({field:"signing",error:"Signing information must be supplied."});(null===e.splashScreenFadeOutDuration||void 0===e.splashScreenFadeOutDuration||e.splashScreenFadeOutDuration<0)&&t.push({field:"splashScreenFadeOutDuration",error:"Splash screen fade duration must be 0 or greater"}),e.startUrl?z(e.startUrl,e.webManifestUrl)&&t.push({field:"startUrl",error:"Start URL is invalid"}):t.push({field:"startUrl",error:"Start URL must be specified. If your start URL is the same as Host, you can use '/' as the start URL."});return e.themeColor||t.push({field:"themeColor",error:"Theme color must be specified"}),t}(e);if(t.length>0||!e)throw new Error("Invalid Android options. "+t.map((e=>e.error)).join("\n"));const i=`${h.androidPackageGeneratorUrl}/generateAppPackage`,a=await fetch(i,{method:"POST",body:JSON.stringify(e),headers:new Headers({"content-type":"application/json"})});if(200===a.status)return q=!0,await a.blob();{const t=await a.text(),i=e.iconUrl&&e.iconUrl.includes(h.safeUrlFetcher||""),o=(t||"").includes("ECONNREFUSED")||403===a.status;if(i||!o)throw new Error(`Error generating Android package.\nStatus code: ${a.status}\nError: ${a.statusText}\nDetails: ${t}`);{console.warn("Android package generation failed with ECONNREFUSED. Retrying with safe images.",t);const i=function(e){const t=["maskableIconUrl","monochromeIconUrl","iconUrl","webManifestUrl"];for(const i of t){const t=e[i];if(t&&"string"==typeof t){const a=`${process.env.safeUrlFetcher}?url=${encodeURIComponent(t)}`;e[i]=a}}return e}(e);await G(i)}}}function _(e){const t=e.manifestUrl,i=e.siteUrl,a=e.manifest;if(!i)throw new Error("Can't find the current URL");if(!t)throw new Error("Cant find the manifest URL");const o=a.short_name||a.name||"My PWA",n=H(new URL(i).hostname),r="fullscreen"===a.display?"fullscreen":"standalone",s=a.icons||[],l=g(s);if(!l)throw new Error("Can't find a suitable icon to use for the Android package. Ensure your manifest has a square, large (512x512 or better) PNG icon.");const d=x(s,"maskable",512,512,"image/png")||x(s,"maskable",192,192,"image/png")||x(s,"maskable",192,192,void 0),p=x(s,"monochrome",512,512,"image/png")||x(s,"monochrome",192,192,"image/png")||x(s,"monochrome",192,192,void 0),c=a.theme_color||a.background_color||"#000000",u=t.startsWith("data:application/manifest+json,")?i:t;return{appVersion:"1.0.0.0",appVersionCode:1,backgroundColor:a.background_color||a.theme_color||"#FFFFFF",display:r,enableNotifications:!0,enableSiteSettingsShortcut:!0,fallbackType:"customtabs",features:{locationDelegation:{enabled:!0},playBilling:{enabled:!1}},host:new URL(i).host,iconUrl:W(l.src,u),includeSourceCode:!1,isChromeOSOnly:!1,launcherName:(a.short_name||o||"My PWA").substring(0,30),maskableIconUrl:W(null==d?void 0:d.src,u),monochromeIconUrl:W(null==p?void 0:p.src,u),name:o,navigationColor:c,navigationColorDark:c,navigationDividerColor:c,navigationDividerColorDark:c,orientation:a.orientation||"default",packageId:n,shortcuts:a.shortcuts||[],signing:{file:null,alias:"my-key-alias",fullName:`${a.short_name||a.name||"App"} Admin`,organization:a.name||"PWABuilder",organizationalUnit:"Engineering",countryCode:"US",keyPassword:"",storePassword:""},signingMode:"new",splashScreenFadeOutDuration:300,startUrl:B(a.start_url,new URL(u)),themeColor:a.theme_color||"#FFFFFF",shareTarget:a.share_target,webManifestUrl:t,pwaUrl:e.siteUrl}}function W(e,t){return e?new URL(e,t).toString():""}function B(e,t){const i=new URL(e||"/",t);return i.pathname+(i.search||"")}let j=class extends F{constructor(){super(),this.generating=!1,this.isGooglePlayApk=!1,this.showAdvanced=!1,this.packageOptions={appVersion:"1.0.0.0",appVersionCode:1,backgroundColor:"#ffffff",display:"standalone",enableNotifications:!1,enableSiteSettingsShortcut:!0,fallbackType:"customtabs",features:{locationDelegation:{enabled:!0},playBilling:{enabled:!1}},host:"",iconUrl:"",includeSourceCode:!1,isChromeOSOnly:!1,launcherName:"",maskableIconUrl:"",monochromeIconUrl:"",name:"",navigationColor:"#ffffff",navigationColorDark:"#000000",navigationDividerColor:"#ffffff",navigationDividerColorDark:"#000000",orientation:"default",packageId:"",pwaUrl:"",shortcuts:[],signing:{file:null,alias:"",fullName:"",organization:"",organizationalUnit:"",countryCode:"",keyPassword:"",storePassword:""},signingMode:"none",splashScreenFadeOutDuration:300,startUrl:"",themeColor:"#ffffff",webManifestUrl:""},this.manifestContext=y()}static get styles(){const e=o`

      :host {
        width: 100%;
      }
      .signing-key-fields {
        margin-left: 30px;
      }

      #signing-key-file-input {
        border: none;
      }
    
      .flipper-button {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .form-generate-button {
        width: 135px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `;return[super.styles,e]}async firstUpdated(){this.manifestContext.isGenerated&&(this.manifestContext=await k()),this.packageOptions=_(this.manifestContext)}updated(e){e.has("isGooglePlayApk")&&(this.packageOptions=_(this.manifestContext),this.isGooglePlayApk||(this.packageOptions.features.locationDelegation.enabled=!1,this.packageOptions.features.playBilling.enabled=!1,this.packageOptions.isChromeOSOnly=!1,this.packageOptions.enableNotifications=!1,this.packageOptions.signingMode="none",this.packageOptions.signing={file:null,alias:"",fullName:"",organization:"",organizationalUnit:"",countryCode:"",keyPassword:"",storePassword:""}))}initGenerate(e){e.preventDefault();const t=new CustomEvent("init-android-gen",{detail:this.packageOptions,composed:!0,bubbles:!0});this.dispatchEvent(t)}toggleSettings(e){this.showAdvanced="advanced"===e}androidSigningModeChanged(e){this.packageOptions.signingMode=e,"mine"===e||"none"===e?(this.packageOptions.signing.alias="",this.packageOptions.signing.fullName="",this.packageOptions.signing.organization="",this.packageOptions.signing.organizationalUnit="",this.packageOptions.signing.countryCode="",this.packageOptions.signing.keyPassword="",this.packageOptions.signing.storePassword=""):"new"===e&&(this.packageOptions.signing.alias="my-key-alias",this.packageOptions.signing.fullName=(this.manifestContext.manifest.short_name||this.manifestContext.manifest.name||"My PWA")+" Admin",this.packageOptions.signing.organization=this.manifestContext.manifest.name||"PWABuilder",this.packageOptions.signing.organizationalUnit="Engineering",this.packageOptions.signing.countryCode="US",this.packageOptions.signing.keyPassword="",this.packageOptions.signing.storePassword="",this.packageOptions.signing.file=null),this.requestUpdate()}androidSigningKeyUploaded(e){const t=e;if(t&&t.files&&t.files.length>0){const e=t.files[0];e&&e.size>2097152&&(console.error("Android signing key file is too large. Max size:",{maxSize:2097152,fileSize:e.size}),this.packageOptions.signingMode="none");const i=new FileReader;i.onload=()=>{this.packageOptions.signing.file=i.result},i.onerror=e=>{console.error("Unable to read Android signing key file",i.error,e),this.packageOptions.signing.file=null,this.packageOptions.signingMode="none"},i.readAsDataURL(e)}}render(){var e,t;return s`
      <form
        id="android-options-form"
        slot="modal-form"
        style="width: 100%"
        @submit="${e=>this.initGenerate(e)}"
      >
        <div id="form-layout">
          <div class="basic-settings">
            
            <div class="form-group">
              ${this.renderFormInput({label:"Package ID",tooltip:"The ID of your app on Google Play. Google recommends a reverse-domain style string: com.domainname.appname. Letters, numbers, periods, hyphens, and underscores are allowed.",tooltipLink:"https://developer.android.com/guide/topics/manifest/manifest-element.html#package",inputId:"package-id-input",required:!0,placeholder:"MyCompany.MyApp",value:this.packageOptions.packageId,minLength:3,maxLength:Number.MAX_SAFE_INTEGER,spellcheck:!1,pattern:"[a-zA-Z0-9.-_]*$",validationErrorMessage:"Package ID must contain only letters, numbers, periods, hyphens, and underscores.",inputHandler:e=>this.packageOptions.packageId=e})}
            </div>

            <div class="form-group">
              ${this.renderFormInput({label:"App name",tooltip:"The full name of your app as displayed to end users",tooltipLink:"https://support.google.com/googleplay/android-developer/answer/9859152?hl=en&visit_id=637726158830539690-3630173317&rd=1#details&zippy=%2Cproduct-details",inputId:"app-name-input",required:!0,placeholder:"My Awesome PWA",value:this.packageOptions.name,minLength:3,maxLength:50,spellcheck:!1,pattern:"[^|$@#><)(!&%*]*$",validationErrorMessage:"App name must not include special characters and be between 3 and 50 characters",inputHandler:e=>this.packageOptions.name=e})}
            </div>

            <div class="form-group">
              ${this.renderFormInput({label:"Short name",tooltip:"The shorter version of your app name displayed on the Android home screen. Google recommends no more than 12 characters.",tooltipLink:"https://developer.chrome.com/apps/manifest/name#short_name",inputId:"short-name-input",required:!0,placeholder:"My PWA",value:this.packageOptions.launcherName,minLength:3,maxLength:30,spellcheck:!1,validationErrorMessage:"Short name must be between 3 and 30 characters in length. Google recommends 12 characters or fewer.",inputHandler:e=>this.packageOptions.launcherName=e})}
            </div>
          </div>

          <!-- The "all settings" section of the options dialog -->
          <fast-accordion>
            <fast-accordion-item
              @click="${e=>this.toggleAccordion(e.target)}"
            >
              <div id="all-settings-header" slot="heading">
                <span>All Settings</span>

                <div class="flipper-button" aria-label="caret dropdown" role="button">
                  <ion-icon name="caret-forward-outline"></ion-icon>
                </div>
              </div>

              <div class="adv-settings">
                <div class="form-group">
                  ${this.renderFormInput({label:"Version",tooltip:"The version of your app displayed to users. This is a string, typically in the form of '1.0.0.0'. Maps to android:versionName.",tooltipLink:"https://developer.android.com/guide/topics/manifest/manifest-element.html#vname",inputId:"version-input",required:!0,placeholder:"1.0.0.0",value:this.packageOptions.appVersion,spellcheck:!1,inputHandler:e=>this.packageOptions.appVersion=e})}
                </div>
                
                <div class="form-group">
                  ${this.renderFormInput({label:"Version code",tooltip:"A positive integer used as an internal version number. This is not shown to users. This number is used by Google Play to determine whether one version is more recent than another, with higher numbers indicating more recent versions. Maps to android:versionCode.",tooltipLink:"https://developer.android.com/guide/topics/manifest/manifest-element.html#vcode",inputId:"version-code-input",type:"number",minValue:1,maxValue:21e8,required:!0,placeholder:"1",value:this.packageOptions.appVersionCode.toString(),inputHandler:e=>this.packageOptions.appVersionCode=parseInt(e,10)})}
                </div>

                <div class="form-group">
                  ${this.renderFormInput({label:"Host",tooltip:"The host portion of your PWA's URL. For example, mypwa.com",inputId:"host-input",required:!0,placeholder:"mypwa.com",value:this.packageOptions.host,minLength:3,spellcheck:!1,inputHandler:e=>this.packageOptions.host=e})}
                </div>

                <div class="form-group">
                  ${this.renderFormInput({label:"Start URL",tooltip:"The start path for your PWA. Must be relative to the Host URL. If Host URL contains your PWA, you can use '/' to specify a default",tooltipLink:"https://developer.mozilla.org/en-US/docs/Web/Manifest/start_url",inputId:"start-url-input",required:!0,placeholder:"/index.html",value:this.packageOptions.startUrl,spellcheck:!1,validationErrorMessage:"You must specify a relative start URL. If you don't have a start URL, use '/'",inputHandler:e=>this.packageOptions.startUrl=e})}
                </div>

                <div class="form-group">
                  ${this.renderFormInput({label:"Theme color",tooltip:"The theme color used for the Android status bar in your app. Typically, this should be set to your manifest's theme_color.",inputId:"theme-color-input",type:"color",value:this.packageOptions.themeColor,inputHandler:e=>this.packageOptions.themeColor=e})}
                </div>

                <div class="form-group">
                  ${this.renderFormInput({label:"Background color",tooltip:"The background color to use for your app's splash screen. Typically this is set to your manifest's background_color.",inputId:"background-color-input",type:"color",value:this.packageOptions.backgroundColor,inputHandler:e=>this.packageOptions.backgroundColor=e})}
                </div>

                <div class="form-group">
                  ${this.renderFormInput({label:"Nav color",tooltip:"The color of the Android navigation bar in your app. Typically this is set to your manifest's theme_color",inputId:"nav-color-input",type:"color",value:this.packageOptions.navigationColor,inputHandler:e=>this.packageOptions.navigationColor=e})}
                </div>

                <div class="form-group">
                  ${this.renderFormInput({label:"Nav dark color",tooltip:"The color of the Android navigation bar in your app when the Android device is in dark mode.",inputId:"nav-dark-color-input",type:"color",value:this.packageOptions.navigationColorDark,inputHandler:e=>this.packageOptions.navigationColorDark=e})}
                </div>

                <div class="form-group">
                  ${this.renderFormInput({label:"Nav divider color",tooltip:"The color of the Android navigation bar divider in your app.",inputId:"nav-divider-color-input",type:"color",value:this.packageOptions.navigationDividerColor,inputHandler:e=>this.packageOptions.navigationDividerColor=e})}
                </div>

                <div class="form-group">
                  ${this.renderFormInput({label:"Nav divider dark color",tooltip:"The color of the Android navigation bar divider in your app when the Android device is in dark mode.",inputId:"nav-divider-dark-color-input",type:"color",value:this.packageOptions.navigationDividerColorDark,inputHandler:e=>this.packageOptions.navigationDividerColorDark=e})}
                </div>

                <div class="form-group">
                  ${this.renderFormInput({label:"Icon URL",tooltip:"The URL to a square PNG image to use for your app's icon. Can be absolute or relative to your manifest. Google recommends a 512x512 PNG without shadows.",tooltipLink:"https://developer.android.com/distribute/google-play/resources/icon-design-specifications",inputId:"icon-url-input",required:!0,spellcheck:!1,value:this.packageOptions.iconUrl,placeholder:"/icons/512x512.png",inputHandler:e=>this.packageOptions.iconUrl=e})}
                </div>

                <div class="form-group">
                  ${this.renderFormInput({label:"Maskable icon URL",tooltip:"Optional. The URL to a PNG image with a minimum safe zone of trimmable padding, enabling rounded icons on certain Android versions. Google recommends a 512x512 PNG without shadows.",tooltipLink:"https://web.dev/maskable-icon",inputId:"maskable-icon-url-input",spellcheck:!1,value:this.packageOptions.maskableIconUrl||"",placeholder:"/icons/512x512-maskable.png",inputHandler:e=>this.packageOptions.maskableIconUrl=e})}
                </div>

                <div class="form-group">
                  ${this.renderFormInput({label:"Monochrome icon URL",tooltip:"Optional. The URL to a PNG image containing only white and black colors, enabling Android to fill the icon with user-specified color or\n                    gradient depending on theme, color mode, or Android ontrast settings.",tooltipLink:"https://w3c.github.io/manifest/#monochrome-icons-and-solid-fills",inputId:"monochrome-icon-url-input",spellcheck:!1,value:this.packageOptions.monochromeIconUrl||"",placeholder:"/icons/512x512-monochrome.png",inputHandler:e=>this.packageOptions.monochromeIconUrl=e})}
                </div>

                <div class="form-group">
                  ${this.renderFormInput({label:"Manifest URL",tooltip:"The absolute URL of your web manifest.",inputId:"manifest-url-input",type:"url",value:this.packageOptions.webManifestUrl,placeholder:"https://myawesomepwa.com/manifest.json",inputHandler:e=>this.packageOptions.webManifestUrl=e})}
                </div>

                <div class="form-group">
                  ${this.renderFormInput({label:"Splash fade out duration (ms)",tooltip:"How long the splash screen fade out animation should last in milliseconds.",inputId:"splash-fade-out-input",type:"number",value:(this.packageOptions.splashScreenFadeOutDuration||0).toString(),placeholder:"300",inputHandler:e=>this.packageOptions.splashScreenFadeOutDuration=parseInt(e,10)})}
                </div>

                <div class="form-group">
                  <label>${w.text.android.titles.fallback}</label>
                  <div class="form-check">
                    ${this.renderFormInput({label:"Custom Tabs",tooltip:"When Trusted Web Activity (TWA) is unavailable, use Chrome Custom Tabs as a fallback to run your app.",tooltipLink:"https://developer.chrome.com/docs/android/custom-tabs/",inputId:"chrome-custom-tab-fallback-input",type:"radio",name:"fallbackType",value:"customtabs",checked:"customtabs"===this.packageOptions.fallbackType,inputHandler:()=>this.packageOptions.fallbackType="customtabs"})}
                  </div>
                  <div class="form-check">
                    ${this.renderFormInput({label:"Web View",tooltip:"When Trusted Web Activity (TWA) is unavailable, use a web view as a fallback to run your app.",tooltipLink:"https://developer.chrome.com/docs/android/custom-tabs/",inputId:"web-view-fallback-input",type:"radio",name:"fallbackType",value:"webview",checked:"webview"===this.packageOptions.fallbackType,inputHandler:()=>this.packageOptions.fallbackType="webview"})}
                  </div>
                </div>

                <div class="form-group">
                  <label>${w.text.android.titles.display_mode}</label>
                  <div class="form-check">
                    ${this.renderFormInput({label:"Standalone",tooltip:"Recommended for most apps. The Android status bar and navigation bar will be shown while your app is running.",tooltipLink:"https://developer.android.com/training/system-ui/immersive",inputId:"display-standalone-input",type:"radio",name:"displayMode",value:"standalone",checked:"standalone"===this.packageOptions.display,inputHandler:()=>this.packageOptions.display="standalone"})}
                  </div>
                  <div class="form-check">
                    ${this.renderFormInput({label:"Fullscreen",tooltip:"The Android status bar and navigation bar will be hidden while your app is running. Suitable for immersive experiences such as games or media apps.",tooltipLink:"https://developer.android.com/training/system-ui/immersive#immersive",inputId:"display-fullscreen-input",type:"radio",name:"displayMode",value:"fullscreen",checked:"fullscreen"===this.packageOptions.display,inputHandler:()=>this.packageOptions.display="fullscreen"})}
                  </div>
                  <div class="form-check">
                    ${this.renderFormInput({label:"Fullscreen sticky",tooltip:"The Android status bar and navigation bar will be hidden while your app is running, and if the user swipes from the edge of the Android device, the system bars will be semi-transparent, and the touch gesture will be passed to your app. Recommended for drawing apps, and games that require lots of swiping.",tooltipLink:"https://developer.android.com/training/system-ui/immersive#sticky-immersive",inputId:"display-fullscreen-sticky-input",type:"radio",name:"displayMode",value:"fullscreen-sticky",checked:"fullscreen-sticky"===this.packageOptions.display,inputHandler:()=>this.packageOptions.display="fullscreen-sticky"})}
                  </div>
                </div>

                ${this.isGooglePlayApk?s`
                <div class="form-group">
                  <label>${w.text.android.titles.notification}</label>
                  <div class="form-check">
                    ${this.renderFormInput({label:"Enable",tooltip:"If enabled, your PWA can send push notifications without browser permission prompts.",tooltipLink:"https://github.com/GoogleChromeLabs/svgomg-twa/issues/60",inputId:"notification-delegation-input",type:"checkbox",checked:!0===this.packageOptions.enableNotifications,inputHandler:(e,t)=>this.packageOptions.enableNotifications=t})}
                  </div>
                </div>`:s``}

                ${this.isGooglePlayApk?s`
                <div class="form-group">
                  <label
                    >${w.text.android.titles.location_delegation}</label
                  >
                  <div class="form-check">
                    ${this.renderFormInput({label:"Enable",tooltip:"If enabled, your PWA can access navigator.geolocation without browser permission prompts.",inputId:"location-delegation-input",type:"checkbox",checked:!0===(null===(e=this.packageOptions.features.locationDelegation)||void 0===e?void 0:e.enabled),inputHandler:(e,t)=>this.packageOptions.features.locationDelegation.enabled=t})}
                  </div>
                </div>`:s``}

                ${this.isGooglePlayApk?s`
                <div class="form-group">
                  <label
                    >${w.text.android.titles.google_play_billing}</label
                  >
                  <div class="form-check">
                    ${this.renderFormInput({label:"Enable",tooltip:"If enabled, your PWA can sell in-app purchases and subscriptions via the Digital Goods API.",tooltipLink:"https://developer.chrome.com/docs/android/trusted-web-activity/receive-payments-play-billing/",inputId:"google-play-billing-input",type:"checkbox",checked:!0===(null===(t=this.packageOptions.features.playBilling)||void 0===t?void 0:t.enabled),inputHandler:(e,t)=>this.packageOptions.features.playBilling.enabled=t})}
                  </div>
                </div>`:s``}

                <div class="form-group">
                  <label>
                    ${w.text.android.titles.settings_shortcut}
                  </label>
                  <div class="form-check">
                    ${this.renderFormInput({label:"Enable",tooltip:"If enabled, users can long-press on your app tile and a Settings menu item will appear, letting users manage space for your app.",tooltipLink:"https://github.com/pwa-builder/PWABuilder/issues/1113",inputId:"site-settings-shortcut-input",type:"checkbox",checked:!0===this.packageOptions.enableSiteSettingsShortcut,inputHandler:(e,t)=>this.packageOptions.enableSiteSettingsShortcut=t})}
                  </div>
                </div>
                  
                ${this.isGooglePlayApk?s`
                <div class="form-group">
                  <label>
                    ${w.text.android.titles.chromeos_only}
                  </label>
                  <div class="form-check">
                    ${this.renderFormInput({label:"Enable",tooltip:"If enabled, your Android package will only run on ChromeOS devices.",inputId:"chromeos-only-input",type:"checkbox",checked:!0===this.packageOptions.isChromeOSOnly,inputHandler:(e,t)=>this.packageOptions.isChromeOSOnly=t})}
                  </div>
                </div>`:s``}

                <div class="form-group">
                  <label>${w.text.android.titles.source_code}</label>
                  <div class="form-check">
                    ${this.renderFormInput({label:"Enable",tooltip:"If enabled, your download will include the source code for your Android app.",inputId:"include-src-input",type:"checkbox",checked:!0===this.packageOptions.includeSourceCode,inputHandler:(e,t)=>this.packageOptions.includeSourceCode=t})}
                  </div>
                </div>

                ${this.isGooglePlayApk?s`
                <div class="form-group">
                  <label>${w.text.android.titles.signing_key}</label>
                  <div class="form-check">
                    ${this.renderFormInput({label:"New",tooltip:"Recommended for new apps in Google Play. PWABuilder will generate a new signing key for you and sign your package with it. Your download will contain the new signing details.",inputId:"signing-new-input",name:"signingMode",value:"new",type:"radio",checked:"new"===this.packageOptions.signingMode,inputHandler:()=>this.androidSigningModeChanged("new")})}
                  </div>
                  <div class="form-check">
                    ${this.renderFormInput({label:"Use mine",tooltip:"Recommended for existing apps in Google Play. Use this option if you already have a signing key and you want to publish a new version of an existing app in Google Play.",inputId:"signing-mine-input",name:"signingMode",value:"mine",type:"radio",checked:"mine"===this.packageOptions.signingMode,inputHandler:()=>this.androidSigningModeChanged("mine")})}
                  </div>
                  <div class="form-check">
                    ${this.renderFormInput({label:"None",tooltip:"PWABuilder will generate a raw, unsigned APK. Raw, unsigned APKs cannot be uploaded to the Google Play Store.",inputId:"signing-none-input",name:"signingMode",value:"none",type:"radio",checked:"none"===this.packageOptions.signingMode,inputHandler:()=>this.androidSigningModeChanged("none")})}
                  </div>
                </div>

                ${this.renderSigningKeyFields()}`:s``}
                
              </div>

            </fast-accordion-item>
          </fast-accordion>
        </div>

        ${this.isGooglePlayApk?s`
          <div id="form-details-block">
            <p>${w.text.android.description.form_details}</p>
          </div>`:s`<p style="height: 84px; margin: 0;"></p>`}

        <div id="form-options-actions" class="modal-actions">
          <loading-button class="form-generate-button" .loading="${this.generating}" .primary=${!0}>
            <input id="generate-submit" type="submit" value="Generate" />
          </loading-button>
        </div>
      </form>
    `}renderSigningKeyFields(){return"new"===this.packageOptions.signingMode?this.renderNewSigningKeyFields():"mine"===this.packageOptions.signingMode?this.renderExistingSigningKeyFields():s``}renderNewSigningKeyFields(){return s`
      <div class="signing-key-fields">
        <div class="form-group">
          ${this.renderKeyAlias()}
        </div>

        <div class="form-group">
          ${this.renderFormInput({label:"Key full name",tooltip:"Your full name. Used when create the new signing key.",tooltipLink:"https://developer.android.com/studio/publish/app-signing",inputId:"key-full-name-input",required:!0,placeholder:"John Doe",value:this.packageOptions.signing.fullName||"",spellcheck:!1,inputHandler:e=>this.packageOptions.signing.fullName=e})}
        </div>

        <div class="form-group">
          ${this.renderFormInput({label:"Key organization",tooltip:"The name of your company or organization. Used as the organization of the new signing key.",tooltipLink:"https://developer.android.com/studio/publish/app-signing",inputId:"key-org-input",required:!0,placeholder:"My Company",value:this.packageOptions.signing.organization||"",spellcheck:!1,inputHandler:e=>this.packageOptions.signing.organization=e})}
        </div>

        <div class="form-group">
          ${this.renderFormInput({label:"Key organizational unit",tooltip:'The department you work in, e.g. "Engineering". Used as the organizational unit of the new signing key.',tooltipLink:"https://developer.android.com/studio/publish/app-signing",inputId:"key-org-unit-input",required:!0,placeholder:"Engineering Department",value:this.packageOptions.signing.organizationalUnit,spellcheck:!1,inputHandler:e=>this.packageOptions.signing.organizationalUnit=e})}
        </div>

        <div class="form-group">
          ${this.renderFormInput({label:"Key country code",tooltip:'Your country\'s 2 letter code (e.g. "US"). Used as the country of the new signing key.',tooltipLink:"https://developer.android.com/studio/publish/app-signing",inputId:"key-country-code-input",required:!0,placeholder:"US",value:this.packageOptions.signing.countryCode,spellcheck:!1,minLength:2,maxLength:2,validationErrorMessage:"Country code must be 2 characters in length",inputHandler:e=>this.packageOptions.signing.countryCode=e})}
        </div>
      </div>
    `}renderExistingSigningKeyFields(){return s`
      <div class="signing-key-fields">
        <div class="form-group">
          <label for="signing-key-file-input">Key file</label>
          <input
            type="file"
            class="form-control"
            id="signing-key-file-input"
            @change="${e=>this.androidSigningKeyUploaded(e.target)}"
            accept=".keystore"
            required
          />
        </div>
        ${this.renderKeyAlias()}
        ${this.renderKeyPassword()}
        ${this.renderKeyStorePassword()}
      </div>
    `}renderKeyAlias(){const e="new"===this.packageOptions.signingMode?"The alias to use in the new signing key.":"The alias of your existing signing key.";return s`
      <div class="form-group">
        ${this.renderFormInput({label:"Key alias",tooltip:e,tooltipLink:"https://developer.android.com/studio/publish/app-signing",inputId:"key-alias-input",required:!0,placeholder:"my-key-alias",value:this.packageOptions.signing.alias||"",spellcheck:!1,inputHandler:e=>this.packageOptions.signing.alias=e})}
      </div>
    `}renderKeyPassword(){const e="new"===this.packageOptions.signingMode?"The password to use for the new signing key. Leave blank to let PWABuilder generate a strong password for you.":"Your existing key password";return s`
      <div class="form-group">
        ${this.renderFormInput({label:"Key password",tooltip:e,tooltipLink:"https://developer.android.com/studio/publish/app-signing",inputId:"key-password-input",type:"password",minLength:6,required:"mine"===this.packageOptions.signingMode,value:this.packageOptions.signing.keyPassword,inputHandler:e=>this.packageOptions.signing.keyPassword=e})}
      </div>
    `}renderKeyStorePassword(){const e="new"===this.packageOptions.signingMode?"The key store password to use in the new signing key. Leave blank to let PWABuilder generate a strong key store password for you.":"Your existing key store password";return s`
      <div class="form-group">
        ${this.renderFormInput({label:"Key store password",tooltip:e,tooltipLink:"https://developer.android.com/studio/publish/app-signing",inputId:"key-store-password-input",type:"password",minLength:6,required:"mine"===this.packageOptions.signingMode,value:this.packageOptions.signing.storePassword,inputHandler:e=>this.packageOptions.signing.storePassword=e})}
      </div>
    `}};function K(e){return e.split(".").reverse().map((e=>e.trim().toLowerCase())).filter((e=>e.length>0)).join(".")}e([t({type:Boolean})],j.prototype,"generating",void 0),e([t({type:Boolean})],j.prototype,"isGooglePlayApk",void 0),e([b()],j.prototype,"showAdvanced",void 0),e([b()],j.prototype,"packageOptions",void 0),e([b()],j.prototype,"manifestContext",void 0),j=e([i("android-form")],j);let V=!1;async function Y(e){const t=function(e){const t=[];e.bundleId||t.push("Bundle ID required"),e.bundleId.length<3&&t.push("Bundle ID must be at least 3 characters in length"),e.bundleId.includes("*")&&t.push("Bundle ID cannot contain asterisk"),e.imageUrl||t.push("Image URL required"),e.manifest||t.push("Manifest required"),e.manifestUrl||t.push("Manifest URL required"),e.name||t.push("Name required"),e.name.length<3&&t.push("Name must be at least 3 characters in length"),e.progressBarColor||t.push("Progress bar color required"),e.splashColor||t.push("Splash color required"),e.statusBarColor||t.push("Status bar color required"),e.url||t.push("URL required");try{new URL(e.url)}catch(e){t.push("URL must be a valid, absolute URL")}return t}(e);if(t.length>0)throw new Error("Invalid iOS app package options. "+t.join("\n"));const i=`${h.iosPackageGeneratorUrl}`,a=await fetch(i,{method:"POST",body:JSON.stringify(e),headers:new Headers({"content-type":"application/json"})});if(!a.ok){const e=await a.text();throw new Error(`Error generating iOS package.\nStatus code: ${a.status}\nError: ${a.statusText}\nDetails: ${e}`)}return V=!0,await a.blob()}function J(e){var t;const i=[e.siteUrl,e.manifestUrl].map((e=>function(e){try{return new URL(e).host}catch(t){return console.warn("Unable to parse host URL due to error",e,t),null}}(e))).find((e=>!!e))||"";return{name:e.manifest.short_name||e.manifest.name||"My PWA",bundleId:K(i),url:new URL(e.manifest.start_url||"/",e.manifestUrl).toString(),imageUrl:(null===(t=g(e.manifest.icons))||void 0===t?void 0:t.src)||"",splashColor:e.manifest.background_color||"#ffffff",progressBarColor:e.manifest.theme_color||"#000000",statusBarColor:e.manifest.theme_color||e.manifest.background_color||"#ffffff",permittedUrls:[],manifestUrl:e.manifestUrl,manifest:e.manifest}}function X(){return{name:"",bundleId:"",url:"",imageUrl:"",splashColor:"#ffffff",progressBarColor:"#000000",statusBarColor:"#ffffff",permittedUrls:[],manifestUrl:"",manifest:{}}}var Z;!function(e){e[e.None=0]="None",e[e.New=1]="New",e[e.Existing=2]="Existing"}(Z||(Z={}));let Q=!1;async function ee(e){const t=function(e){const t=[];if(!e)return t.push("No Oculus package options supplied"),t;E(e.packageId).forEach((e=>t.push(e.error))),e.name?(e.name.length<3||e.name.length>50)&&t.push("Name must be between 3 and 50 characters in length"):t.push("Name required"),(!e.versionCode||e.versionCode<=0)&&t.push("Version code must be greater than zero"),e.versionName||t.push("Version name required"),e.manifest||t.push("Manifest required"),e.manifestUrl||t.push("Manifest URL required");try{new URL(e.manifestUrl)}catch(e){t.push("Manifest URL must be a valid, absolute URL")}try{new URL(e.url)}catch(e){t.push("Url must be a valid, absolute URL")}return e.signingMode===Z.Existing&&(e.existingSigningKey?(e.existingSigningKey.storePassword||t.push("Store password required when using existing signing key"),e.existingSigningKey.password||t.push("Key password required when using existing signing key"),e.existingSigningKey.alias||t.push("Key alias required when using existing signing key")):t.push("Existing signing key required when SigningMode === SigningMode.Existing")),t}(e);if(t.length>0)throw new Error("Invalid Oculus app package options. "+t.join("\n"));const i=`${h.oculusPackageGeneratorUrl}`,a=await fetch(i,{method:"POST",body:JSON.stringify(e),headers:new Headers({"content-type":"application/json"})});if(!a.ok){const e=await a.text();throw new Error(`Error generating Oculus package.\nStatus code: ${a.status}\nError: ${a.statusText}\nDetails: ${e}`)}return Q=!0,await a.blob()}function te(e){return{name:e.manifest.short_name||e.manifest.name||"My PWA",packageId:H(new URL(e.siteUrl).host),manifestUrl:e.manifestUrl,manifest:e.manifest,versionCode:1,versionName:"1.0.0.0",existingSigningKey:null,signingMode:Z.New,url:e.siteUrl}}function ie(){return{name:"",packageId:"",manifestUrl:"",manifest:{},versionCode:1,versionName:"1.0.0.0",existingSigningKey:null,signingMode:Z.New,url:""}}function ae(){return{keyStoreFile:"",storePassword:"",alias:"",password:""}}async function oe(e,t){switch(e){case"windows":return await async function(e){const t=await async function(e){if(!e)throw new Error("Invalid Windows options. No options specified.");const t=L(e);if(t.length>0||!e)throw new Error("Invalid Windows options. "+t.map((e=>e.error)).join("\n"));const i=await fetch(`${h.windowsPackageGeneratorUrl}`,{method:"POST",body:JSON.stringify(e),headers:new Headers({"content-type":"application/json"})});if(200===i.status){const e=await i.blob();return S=!0,e}{const e=await i.text();throw new Error(`Failed. Status code ${i.status}, Error: ${i.statusText}, Details: ${e}`)}}(e);return{appName:e.name,blob:t||null,type:"store"}}(t);case"android":return await async function(e){const t=await G(e);return{appName:e.name,blob:t||null,type:"store"}}(t);case"ios":return await async function(e){const t=await Y(e);return{appName:e.name,blob:t,type:"store"}}(t);case"oculus":return await async function(e){const t=await ee(e);return{appName:e.name,blob:t,type:"store"}}(t);default:throw new Error(`A platform type must be passed, ${e} is not a valid platform.`)}}export{F as A,Z as S,J as a,ie as b,P as c,ae as d,X as e,te as f,oe as g,U as h,q as i,S as j,V as k,Q as l,R as m,A as s};
