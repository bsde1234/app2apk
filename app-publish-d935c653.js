import{Z as e,o,y as t,a0 as i,s as a,S as s,a1 as n,r,j as l,l as d,m as p,a as c,d as h,W as m,a2 as g,$ as u,R as b,H as w,v as f,_ as y,t as k,n as x}from"./app-index-f96a4530.js";import{s as v,c as P,g as $}from"./index-2ed725b8.js";import"./app-modal-4f12a1c5.js";import"./oculus-form-9536608a.js";import"./info-circle-tooltip-54f84d16.js";import{s as O}from"./layout-defaults-c0eb1828.js";import{g as A}from"./error-b4548457.js";import{d as C}from"./download-8faf484b.js";import{AnalyticsBehavior as W}from"@pwabuilder/site-analytics";import"./if-defined-0ff46bd7.js";let S=class extends a{constructor(){super(),this.errored=!1,this.downloadFileName=null,this.generatedPlatform="",this.mql=window.matchMedia(`(min-width: ${s.largeUpper}px)`),this.isDeskTopView=this.mql.matches,this.openWindowsOptions=!1,this.openAndroidOptions=!1,this.openiOSOptions=!1,this.openOculusOptions=!1,this.generating=!1,this.isGooglePlay=!0,this.reportPackageErrorUrl="",this.platforms=[{title:"Windows",factoids:["PWAs can be indistinguishable from native apps on Windows","PWAs are first class applications.","Collect 100% of revenue generated via third party commerce platforms.","1B+ store enabled devices."],isActionCard:!0,icon:"/assets/Publish_Windows.svg",renderDownloadButton:()=>this.renderWindowsDownloadButton()},{title:"Android",factoids:["PWAs are first class applications","One app store listing for all devices (mobile, tablet, desktop)","2.5 billion store enabled devices"],isActionCard:!0,icon:"/assets/Publish_Android.svg",renderDownloadButton:()=>this.renderAndroidDownloadButton()},{title:"Meta Quest",factoids:["PWAs are first class applications","Bring your 2D apps to VR's immersive screen","Build immersive 3D experiences for VR using WebXR","Currently in developer preview via sideloading"],isActionCard:!0,icon:"/assets/Publish_Meta.svg",renderDownloadButton:()=>this.renderOculusDownloadButton()},{title:"iOS",factoids:["Leverage same codebase across all platforms","Large user base.","Premium devices."],isActionCard:!0,icon:"/assets/Publish_Apple.svg",renderDownloadButton:()=>this.renderiOSDownloadButton()}],this.mql.addEventListener("change",(e=>{this.isDeskTopView=e.matches}))}static get styles(){return[O,n,v,r`
        .header {
          padding: 1rem 3rem;
        }

        .header p {
          width: min(100%, 600px);
        }

        #tablet-sidebar {
          display: none;
        }

        #desktop-sidebar {
          display: block;
        }

        #summary-block {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          row-gap: 0.5em;
        }

        #summary-block h2 {
          margin: 0;
        }

        #summary-block p {
          margin: 0;
        }

        h1 {
          font-size: var(--xlarge-font-size);
          line-height: 46px;
        }

        #hero-p {
          font-size: var(--font-size);
          line-height: 24px;
          max-width: 406px;
        }

        h2,
        h4 {
          font-size: var(--medium-font-size);
        }

        .container {
          padding: 2em 5em;
          display: flex;
          flex-direction: column;
          justify-items: center;
          align-items: center;
          row-gap: 1em;
        }

        .container .action-buttons {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .container .action-buttons > app-button {
          margin: 1rem;
        }

        .container .action-buttons fast-anchor,
        .container .action-buttons app-button {
          --button-width: 127px;
          height: 44px;
          width: var(--button-width);
        }

        .container .action-buttons fast-anchor {
          /** 
             Seems like a magic value but really
             this is just to match the back button next to it
           */
          color: white;
          box-shadow: var(--button-shadow);
          border-radius: var(--button-radius);
          font-weight: bold;
        }

        #store-cards {
          width: 100%;
          display: grid;
          /* grid-template-columns: repeat(auto-fill, 300px); */
          grid-template-columns: repeat(
            auto-fill,
            minmax(300px, 1fr)
          ); /* causes funky grid spacing */
          grid-gap: 1em;
        }

        .card-wrapper {
          width: 100%;
          height: 400px;
          display: flex;
          flex-direction: column;
          box-shadow: 0px 4px 10px 4px rgba(0, 0, 0, 0.05);
          position: relative;
        }

        .title-block {
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          width: 100%;
          height: 99%;
          padding: 1em 1.5em;
          row-gap: 0.45em;
        }

        .title-block h3 {
          margin: 0;
        }

        .factoids {
          width: 100%;
          height: max-content;
          padding-left: 16px;
          margin: 0;
          margin-top: 10px;
        }

        .factoids li {
          font-size: 14px;
        }

        .platform-actions-block {
          align-self: center;
          display: flex;
          flex-direction: column;
          row-gap: 10px;
        }

        .packaged-tracker {
          height: max-content;
          width: 33%;
          background-color: #f1f2fa;
          align-self: flex-end;
          justify-self: flex-end;
          border-bottom-left-radius: 5px;
          padding: 7px;
          padding-left: 9px;
          position: absolute;
          top: 0;
          right: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          column-gap: 5px;
        }

        .packaged-tracker p {
          margin: 0;
          text-align: center;
          color: black;
          font-size: 12px;
          line-height: 12px;
          font-weight: bold;
        }

        .packaged-tracker img {
          width: 16px;
        }

        p {
          font-size: var(--font-size);
          color: var(--font-color);
          max-width: 530px;
        }

        content-header::part(header) {
          display: none;
        }

        #banner-header h1 {
          display: flex;
          flex-direction: column;
          width: max-content;
          margin-bottom: 0;
          font-size: 36px;
        }
        #banner-header h1 span {
          color: #4f3fb6;
        }

        #hero-p {
          margin: 0;
          margin-top: 0.5em;
          font-size: 17px;
        }

        .modal-image {
          width: 50px;
        }

        #error-modal::part(modal-body) {
          max-height: 36vh;
          overflow-y: auto;
          max-width: inherit;
          overflow-x: hidden;
        }

        #error-modal::part(modal-body-contents) {
          white-space: pre;
          text-align: left;
          overflow: auto;
          max-height: 200px;
          padding: 20px;
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

        #test-package-button {
          display: block;
          margin-top: 15px;
        }

        .platform-actions-block app-button,
        .platform-actions-block loading-button::part(underlying-button) {
          --button-width: 223px;
        }

        #actions {
          display: flex;
          flex-direction: column;
        }

        #actions fast-anchor.button,
        #actions app-button {
          margin-right: 0;
          margin-top: 8px;
        }

        .tooltip {
          height: 16px;
          width: 16px;
        }

        hover-tooltip::part(tooltip-image) {
          display: none;
        }

        .platform-icon {
          max-width: 37px;
          height: 37px;
          image-rendering: smooth;
        }

        ios-form {
          width: 100%;
        }

        #apk-type {
          display: flex;
          align-items: baseline;
          width: 100%;
          border-bottom: 2px solid #5d5db9;
          margin-top: 20px;
          margin-bottom: 40px;
        }

        #apk-type p {
          font-size: 20px;
          font-weight: 700;
          line-height: 20px;
          letter-spacing: 0px;
          text-align: center;
          width: 100%;
          white-space: nowrap;
          margin: 0;
          padding: 10px 0;
        }

        #apk-type p:hover {
          cursor: pointer;
        }

        #apk-type info-circle-tooltip {
          pointer-events: none;
        }

        #other-android {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        #info-tooltip {
          height: 20px;
        }

        .selected-apk {
          border-bottom: 5px solid #5d5db9;
          color: #5d5db9;
        }

        .unselected-apk {
          border-bottom: 5px solid transparent;
        }

        sl-tooltip::part(base) {
          width: 300px;
        }
      `,l(r`
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

          #publish-wrapper {
            background: white;
          }

          #windows-options-modal::part(modal-layout) {
            width: 700px;
          }

          #ios-options-modal::part(modal-layout) {
            width: 600px;
          }
          .container {
            padding: 2em 10em;
          }
        `),d(r`
          #tablet-sidebar {
            display: block;
          }

          #desktop-sidebar {
            display: none;
          }
        `),p(r`
          .publish h1 {
            font-size: 33px;
            max-width: 10em;

            margin-top: 0;
            margin-bottom: 1em;
          }

          .publish p {
            display: none;
          }

          li {
            flex-direction: column;
            align-items: flex-start;
          }

          .platform-actions-block {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        `),c(r`
        #error-modal::part(modal-layout) {
          width: 100vw;
        }

        li {
          flex-direction: column;
          align-items: flex-start;
        }

        .platform-actions-block {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .publish h1 {
          font-size: 33px;

          margin-top: 0;
          margin-bottom: 1em;
        }

        .publish p {
          display: none;
        }
        #banner-header h1 {
          font-size: 18px;
          line-height: 24px;
        }
        .container {
          padding: 2em 2em;
        }
        #summary-block {
          text-align: center;
        }
      `)]}async firstUpdated(){const a=await async function(){return new Promise((async(a,s)=>{const n=e(),r=o(),l=(await t()).manifest,d=l?l.icons:[],p=i(d);n&&r?a({validURL:!!r,manifest:"boolean"!=typeof n.manifest&&n.manifest[0].result,baseIcon:!!p,offline:n.service_worker[1].result}):s("Could not grab test results or url to validate")}))}();a&&(this.finalChecks=a)}async generateWindowsTestPackage(){h("windows_test_package_clicked",W.ProcessCheckpoint);let e=m();e.isGenerated&&(e=await t());const o=P(e.manifest);await this.generate("windows",o)}async generate(e,t){"other-android"===e?(this.generatedPlatform=e,e=e.split("-")[1]):this.generatedPlatform=e,g("analyze-and-package-pwa",`create-${this.generatedPlatform}-package`,W.ProcessCheckpoint,{url:o()}),g("pwa-builder",`create-${this.generatedPlatform}-package`,W.ProcessCheckpoint,{url:o()});try{this.generating=!0;const o=await $(e,t);o&&(this.downloadFileName=`${o.appName}.zip`,"test"===o.type?this.testBlob=o.blob:this.blob=o.blob)}catch(t){console.error(t),this.showAlertModal(t,e),g("analyze-and-package-pwa",`create-${this.generatedPlatform}-package-failed`,W.CancelProcess,{url:o(),error:t}),g("pwa-builder",`create-${this.generatedPlatform}-package-failed`,W.CancelProcess,{url:o(),error:t})}finally{this.generating=!1,this.storeOptionsCancel()}}async downloadZip(){if(g("analyze-and-package-pwa",`download-${this.generatedPlatform}-package`,W.CompleteProcess,{url:o()}),g("pwa-builder",`download-${this.generatedPlatform}-package`,W.CompleteProcess,{url:o()}),this.blob||this.testBlob){try{if(this.blob||this.testBlob){const e=this.blob||this.testBlob,o={fileName:this.downloadFileName||"your_pwa.zip",blob:e};await C(o),this.blob=void 0,this.testBlob=void 0}}catch(e){g("analyze-and-package-pwa",`download-${this.generatedPlatform}-package-stopped`,W.ProcessCheckpoint,{url:o(),error:e}),g("pwa-builder",`download-${this.generatedPlatform}-package-stopped`,W.ProcessCheckpoint,{url:o(),error:e})}this.blob=void 0,this.testBlob=void 0}}showAlertModal(e,o){this.errored=!0;const t=e;if(t.message&&t.stack){const e="string"==typeof t.message&&t.message.includes("Responded with status 403"),o="string"==typeof t.message&&t.message.includes("Failed to retreive PWA manifest for");this.errorMessage=e?`PWABuilder got a 403 Forbidden error when fetching your site.\nThis can happen when your site is using Cloudflare or other anti-bot technologies.\nTry temporarily pausing Cloudflare or your anti-bot technology while running PWABuilder on your web app.\n\n${t.message}\n\nStack trace: \n${t.stack}`:o?`PWABuilder was unable to download your manifest.\nThis can happen when your site is using Cloudflare or other anti-bot technology.\nTry temporarily pausing Cloudflare or your anti-bot technology while running PWABuilder on your web app.\n\n${t.message}\n\nStack trace: \n${t.stack}`:`${t.message}\n\nStack trace:\n${t.stack}`}else t.message?this.errorMessage=t.message:this.errorMessage=(e||"").toString();this.reportAnError(e,o)}showWindowsOptionsModal(){h("windows_store_modal_opened",W.ProcessCheckpoint),this.openWindowsOptions=!0}showAndroidOptionsModal(){h("android_store_modal_opened",W.ProcessCheckpoint),this.openAndroidOptions=!0}showiOSOptionsModal(){h("ios_store_modal_opened",W.ProcessCheckpoint),this.openiOSOptions=!0}showOculusOptionsModal(){h("meta_store_modal_opened",W.ProcessCheckpoint),this.openOculusOptions=!0}renderContentCards(){return this.platforms.map((e=>u` <div class="card-wrapper">
        ${"iOS"===e.title?u` <sl-tooltip
              content="iOS does not support PWAs natively and packaging PWAs for iOS is Experimental. We can not guarantee that your app will be accepted into Apple's App Store."
            >
              <div id="experimental" class="packaged-tracker">
                <!-- Used to show ios as experimental -->
                <p>Experimental</p>
                <img src="/assets/new/help.svg" alt="experimental help icon" />
              </div>
            </sl-tooltip>`:u``}
        <div class="title-block">
          <img
            class="platform-icon"
            src="${e.icon}"
            alt="platform icon"
          />
          <h3>${e.title}</h3>
          <!-- TODO need to fix the platform action blocks text spacing for the left. -->
          <div class="platform-actions-block">
            ${e.renderDownloadButton()}
          </div>
          <ul class="factoids">
            ${e.factoids.map((e=>u`<li>${e}</li>`))}
          </ul>
        </div>
      </div>`))}renderWindowsDownloadButton(){return u`
      <app-button
        class="navigation"
        id="windows-package-button"
        @click="${()=>this.showWindowsOptionsModal()}"
      >
        Store Package
      </app-button>
      <div>
        <loading-button
          id="windows-test-pkg-btn"
          class="navigation alternate"
          ?loading=${this.generating}
          id="test-package-button"
          @click="${this.generateWindowsTestPackage}"
          .secondary="${!0}"
        >
          Test Package
        </loading-button>
        <hover-tooltip
          anchor="windows-test-pkg-btn"
          text="Generate a package you can use to test your app on your Windows Device before going to the Microsoft Store."
          link="https://github.com/pwa-builder/pwabuilder-windows-chromium-docs/blob/master/next-steps.md#1-test-your-app-on-your-windows-machine"
        >
        </hover-tooltip>
      </div>
    `}renderAndroidDownloadButton(){return u`
      <app-button
        class="navigation"
        id="android-package-button"
        @click="${()=>this.showAndroidOptionsModal()}"
      >
        Store Package
      </app-button>
    `}renderiOSDownloadButton(){return u`
      <app-button
        class="navigation"
        id="ios-package-button"
        @click="${()=>this.showiOSOptionsModal()}"
      >
        Store Package
      </app-button>
    `}renderOculusDownloadButton(){return u`
      <app-button
        class="navigation"
        id="oculus-package-button"
        @click="${()=>this.showOculusOptionsModal()}"
      >
        Store Package
      </app-button>
    `}returnToFix(){h("back_button_clicked",W.ProcessCheckpoint);const e=sessionStorage.getItem("results-string");b.go(`/reportcard?results=${e}`)}reportAnError(e,o){this.reportPackageErrorUrl=A(e,o)}downloadCancel(){this.blob=void 0,this.errorMessage=void 0,this.errored=!1}downloadTestCancel(){this.testBlob=void 0,this.errorMessage=void 0,this.errored=!1}storeOptionsCancel(){var e;this.openWindowsOptions=!1,this.openAndroidOptions=!1,this.openiOSOptions=!1,this.openOculusOptions=!1,this.isGooglePlay=!0;let o=this.shadowRoot.querySelector(".selected-apk");null==o||o.classList.replace("selected-apk","unselected-apk"),(null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector('[data-type="play"]')).classList.replace("unselected-apk","selected-apk")}toggleApkType(e){let o=this.shadowRoot.querySelector(".selected-apk");null==o||o.classList.replace("selected-apk","unselected-apk"),e.target.classList.replace("unselected-apk","selected-apk"),"play"===e.target.dataset.type?this.isGooglePlay=!0:this.isGooglePlay=!1}render(){return u`
      <!-- error modal -->
      <app-modal
        heading="Wait a minute!"
        .body="${this.errorMessage||""}"
        ?open="${this.errored}"
        id="error-modal"
      >
        <img
          class="modal-image"
          slot="modal-image"
          src="/assets/warning.svg"
          alt="warning icon"
        />

        <div id="actions" slot="modal-actions">
          <fast-anchor
            target="__blank"
            id="error-link"
            class="button"
            .href="${this.reportPackageErrorUrl}"
            >Report A Problem
          </fast-anchor>

          <app-button @click="${()=>this.returnToFix()}"
            >Return to Manifest Options</app-button
          >
        </div>
      </app-modal>

      <!-- download modal -->
      <app-modal
        ?open="${!!this.blob}"
        heading="Download your package"
        body="Your app package is ready for download."
        id="download-modal"
        @app-modal-close="${()=>this.downloadCancel()}"
      >
        <img
          class="modal-image"
          slot="modal-image"
          src="/assets/images/store_fpo.png"
          alt="publish icon"
        />

        <div slot="modal-actions">
          <app-button @click="${()=>this.downloadZip()}">Download</app-button>
        </div>
      </app-modal>

      <!-- test package download modal -->
      <app-modal
        ?open="${!!this.testBlob}"
        heading="Test Package Download"
        body="${w.input.publish.windows.test_package}"
        id="test-download-modal"
        @app-modal-close="${()=>this.downloadTestCancel()}"
      >
        <img
          class="modal-image"
          slot="modal-image"
          src="/assets/images/warning.svg"
          alt="warning icon"
        />

        <div slot="modal-actions">
          <app-button @click="${()=>this.downloadZip()}">Download</app-button>
        </div>
      </app-modal>

      <!-- windows store options modal -->
      <app-modal
        id="windows-options-modal"
        heading="Windows App Options"
        body="Customize your Windows app below. Need help finding these values? Visit "
        ?open="${this.openWindowsOptions}"
        @app-modal-close="${()=>this.storeOptionsCancel()}"
      >
        
      <a slot="modal-docs-link" href="https://docs.pwabuilder.com/#/builder/windows?id=reserve-your-app"> our documentation. </a>

        <windows-form
          slot="modal-form"
          .generating=${this.generating}
          @init-windows-gen="${e=>this.generate("windows",e.detail)}"
        ></windows-form>
      </app-modal>

      <!-- android options modal -->
      <app-modal
        id="android-options-modal"
        heading="Android App Options"
        body="Customize your Android app below"
        nav=${!0}
        ?open="${!0===this.openAndroidOptions}"
        @app-modal-close="${()=>this.storeOptionsCancel()}"
      >
        <div id="apk-type" slot="modal-nav">
          <p
            class="selected-apk apk-type"
            @click=${e=>this.toggleApkType(e)}
            data-type="play"
          >
            Google Play
          </p>
          <p
            class="unselected-apk apk-type"
            id="other-android"
            data-type="other"
            @click=${e=>this.toggleApkType(e)}
          >
            Other Android
            <info-circle-tooltip
              @click=${()=>0}
              id="info-tooltip"
              text="Generates an unsigned APK."
            ></info-circle-tooltip>
          </p>
        </div>
        ${this.isGooglePlay?u`<android-form
              slot="modal-form"
              .generating=${this.generating}
              .isGooglePlayApk=${this.isGooglePlay}
              @init-android-gen="${e=>this.generate("android",e.detail)}"
            ></android-form>`:u`<android-form
              slot="modal-form"
              .generating=${this.generating}
              .isGooglePlayApk=${this.isGooglePlay}
              @init-android-gen="${e=>this.generate("other-android",e.detail)}"
            ></android-form>`}
      </app-modal>

      <!-- ios options modal -->
      <app-modal
        id="ios-options-modal"
        heading="iOS App Options"
        body="Customize your iOS app below"
        ?open="${!0===this.openiOSOptions}"
        @app-modal-close="${()=>this.storeOptionsCancel()}"
      >
        <ios-form
          slot="modal-form"
          .generating=${this.generating}
          @init-ios-gen="${e=>this.generate("ios",e.detail)}"
        >
        </ios-form>
      </app-modal>

      <!-- oculus options modal -->
      <app-modal
        id="oculus-options-modal"
        heading="Meta Quest App Options"
        body="Customize your Meta Quest app below"
        ?open="${this.openOculusOptions}"
        @app-modal-close="${()=>this.storeOptionsCancel()}"
      >
        <oculus-form
          slot="modal-form"
          .generating=${this.generating}
          @init-oculus-gen="${e=>this.generate("oculus",e.detail)}"
        >
        </oculus-form>
      </app-modal>

      <div id="publish-wrapper">
        <app-header></app-header>

        <div
          id="grid"
          class="${f({"grid-mobile":0==this.isDeskTopView})}"
        >
          <app-sidebar id="desktop-sidebar"></app-sidebar>

          <div>
            <content-header class="publish">
              <div id="banner-header" slot="hero-container">
                <h1><span>Awesome!</span> Your PWA is Store Ready.</h1>
              </div>

              <p id="hero-p" slot="hero-container">
                You are now ready to ship your PWA to the app stores!
              </p>
            </content-header>

            <app-sidebar id="tablet-sidebar"></app-sidebar>

            <section class="container">
              <div id="summary-block">
                <h2>Publish your PWA to stores</h2>

                <p>
                  Generate store-ready packages for the Microsoft Store, Google
                  Play and more!
                </p>
              </div>
              <div id="store-cards">${this.renderContentCards()}</div>
            </section>
          </div>
        </div>
      </div>
    `}};y([k()],S.prototype,"errored",void 0),y([k()],S.prototype,"errorMessage",void 0),y([k()],S.prototype,"blob",void 0),y([k()],S.prototype,"testBlob",void 0),y([k()],S.prototype,"downloadFileName",void 0),y([k()],S.prototype,"generatedPlatform",void 0),y([k()],S.prototype,"mql",void 0),y([k()],S.prototype,"isDeskTopView",void 0),y([k()],S.prototype,"openWindowsOptions",void 0),y([k()],S.prototype,"openAndroidOptions",void 0),y([k()],S.prototype,"openiOSOptions",void 0),y([k()],S.prototype,"openOculusOptions",void 0),y([k()],S.prototype,"generating",void 0),y([k()],S.prototype,"isGooglePlay",void 0),y([k()],S.prototype,"finalChecks",void 0),y([k()],S.prototype,"reportPackageErrorUrl",void 0),S=y([x("app-publish")],S);export{S as AppPublish};
