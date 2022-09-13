import{H as t,_ as o,e,n as i,s as a,r,l as s,m as n,a as d,a8 as p,$ as l,v as c,S as m,j as g,a6 as h,R as b,t as u}from"./app-index-f96a4530.js";import{b as f}from"./hidden-fdcdcdfb.js";import{r as w}from"./events-dd48d9ef.js";import{s as x}from"./layout-defaults-c0eb1828.js";import"./app-modal-4f12a1c5.js";import{h as y,i as k,j as v,k as P,l as $,g as A}from"./index-2ed725b8.js";import"./oculus-form-9536608a.js";import{h as O}from"./web-publish-cc194c25.js";import"@pwabuilder/site-analytics";import"./if-defined-0ff46bd7.js";import"./info-circle-tooltip-54f84d16.js";const W=[{imageUrl:"/assets/images/blog-card.webp",title:t.text.resource_hub.titles.blog,description:t.text.resource_hub.description.blog,linkUrl:"https://blog.pwabuilder.com"},{imageUrl:"/assets/images/demo-card.webp",title:t.text.resource_hub.titles.demo,description:t.text.resource_hub.description.demo,linkUrl:"https://blog.pwabuilder.com/demos"},{imageUrl:"/assets/images/docs-card.webp",title:t.text.resource_hub.titles.documentation,description:t.text.resource_hub.description.documentation,linkUrl:"https://blog.pwabuilder.com/docs"}];let z=class extends a{constructor(){super(),this.showViewAllButton=!1,this.pageName="home"}static get styles(){return[r`
        :host {
          display: flex;
          justify-content: center;
        }

        ::slotted([slot='title']) {
          margin: 0;
          font-weight: var(--font-bold);
          text-align: center;

          font-size: 36px;
          line-height: 39px;
          letter-spacing: -0.015em;
          margin-top: 0;
        }

        ::slotted([slot='description']) {
          font-weight: var(--font-bold);
          max-width: 950px;
          text-align: center;
        }

        .home {
          background-repeat: no-repeat;
          background-image: url(/assets/images/blog_fold.webp);
          background-size: cover;
          background-position: left bottom;
          color: var(--secondary-color);
        }

        .complete {
          background-color: var(--primary-background-color);
          color: var(--font-color);
        }

        .resource-hub {
          width: 100%;
        }
      `,r`
        .resource-header {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding-top: 80px;
          padding-left: 4em;
          padding-right: 4em;
        }

        .complete .resource-header {
          padding-top: 0;
        }

        .cards {
          display: flex;
          justify-content: center;
          padding-left: 4em;
          padding-right: 4em;
          margin-top: 1em;
          padding: 0 16px;
        }

        .cards app-card {
          margin: 8px;
        }

        .cards app-card::part(card) {
          margin: 0;
        }

        .resource-hub-actions {
          display: flex;
          align-items: center;
          justify-content: center;

          margin-top: 32px;
          margin-bottom: 74px;
        }

        .resource-hub-actions fast-anchor {
          width: 205px;
          background-color: white;
          color: var(--font-color);
          border-radius: var(--button-radius);
        }

        .resource-hub-actions fast-anchor::part(control) {
          font-size: 16px;
          font-weight: var(--font-bold);
        }
      `,s(r`
          .cards app-card {
            max-width: 350px;
          }
        `,"no-lower"),n(r`
          .cards {
            flex-direction: column;
            align-items: center;
          }

          .resource-header {
            padding-left: 1em;
            padding-right: 1em;
          }

          .cards app-card,
          .cards app-card::part(card) {
            width: 100%;
            max-width: 100%;
          }

          .cards app-card {
            margin-bottom: 16px;
          }
        `,"no-lower"),n(r`
          .cards {
            padding: 0 32px;
          }
        `),s(r`
          .cards {
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            padding: 0;
          }

          .cards app-card {
            margin-bottom: 16px;
          }
        `),d(r`
          :host {
            background-color: #ededed;
          }

          .resource-header {
            padding-left: 1em;
            padding-right: 1em;
          }

          .cards app-card,
          .cards app-card::part(card) {
            width: 100%;
            max-width: 100%;
          }

          /* TODO make this gated to only a gallery variant */
          .cards.horizontal {
            overflow-y: scroll;
            overflow-x: none;
            /* white-space: nowrap; */

            flex-direction: row;
            align-items: center;
          }

          .cards.horizontal app-card {
            display: inline-block;
            min-width: calc(100% - 32px);
          }

          section {
            width: 100%;
          }

          .cards.horizontal {
            display: flex;
            flex-direction: column;
            overflow-x: scroll;
            scroll-snap-type: x proximity;
          }

          .cards.horizontal app-card {
            display: inline-block;
            flex: 0 0 auto;
            scroll-snap-align: center;
          }

          .cards.horizontal app-card p,
          .cards.horizontal app-card h3 {
            white-space: normal;
          }
        `),n(r`
          .cards {
            flex-direction: column;
            align-items: center;
          }

          .cards app-card {
            margin-bottom: 16px;
          }
        `,"no-lower"),n(r`
          .cards {
            padding: 0 32px;
          }
        `),s(r`
          .cards app-card {
            max-width: 350px;
          }
        `,"no-lower"),s(r`
          .cards {
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
          }

          .cards app-card {
            margin-bottom: 16px;
          }
        `),p(r`
          .resource-hub.complete .cards {
            flex-direction: column;
          }
        `,void 0,919),p(r`
          .resource-hub.home .cards {
            display: grid;
            grid-template-columns: auto auto;
          }
        `,888,1023),p(r`
          .resource-hub.home .cards {
            display: grid;
            grid-template-columns: auto auto;
          }
        `,888,1023)]}render(){return l`
      <section
        class="${c({"resource-hub":!0,home:"home"===this.pageName,complete:"complete"===this.pageName})}"
      >
        <div class="resource-header">
          <slot name="title"></slot>
          <slot name="description"></slot>
        </div>

        <div
          class="${c({cards:!0,horizontal:"complete"===this.pageName&&window.innerWidth<=m.smallUpper})}"
        >
          ${this.renderCards()}
        </div>

        ${this.renderViewAllButton()}
      </section>
    `}renderCards(){const t=this.determineCardMode();let o=[];return"home"===this.pageName?o=W:"complete"===this.pageName&&(o=W.slice(1)),o.map((o=>l`
        <app-card
          class=${t}
          cardTitle=${o.title}
          description=${o.description}
          imageUrl=${o.imageUrl}
          linkRoute=${o.linkUrl}
        >
        </app-card>
      `))}renderViewAllButton(){if(this.showViewAllButton)return l`
        <div class="resource-hub-actions">
          <fast-anchor
            appearance="button"
            href="https://blog.pwabuilder.com"
            target="_blank"
            rel="noopener"
            >View all resources</fast-anchor
          >
        </div>
      `}determineCardMode(){return"complete"===this.pageName&&window.innerWidth<=m.smallUpper?y.micro:y.default}};o([e({attribute:"all",type:Boolean})],z.prototype,"showViewAllButton",void 0),o([e({attribute:"page",type:String})],z.prototype,"pageName",void 0),z=o([i("resource-hub")],z);const S=[{title:"Bringing Chromium Edge PWAs to the Microsoft Store",description:"Learn more details on what Chromium Edge PWAs mean for you and your app!",date:"Oct 20, 2020",imageUrl:"/assets/images/edge-chromium.webp",shareUrl:"https://blog.pwabuilder.com/posts/bringing-chromium-edge-pwas-to-the-microsoft-store/",clickUrl:"https://blog.pwabuilder.com/posts/bringing-chromium-edge-pwas-to-the-microsoft-store/",tags:["Windows","Store"],relatedPlatform:"windows"},{title:"PWAs in the Google Play Store",description:"Learn more about how to ship your PWA to the Google Play Store!",date:"Jul 9, 2020",imageUrl:"/assets/images/android_blog.png",shareUrl:"https://blog.pwabuilder.com/posts/microsoft-and-google-team-up-to-make-pwas-better-in-the-play-store/",clickUrl:"https://blog.pwabuilder.com/posts/microsoft-and-google-team-up-to-make-pwas-better-in-the-play-store/",tags:["Android","Store"],relatedPlatform:"android"},{title:"Publisher your PWA to the iOS App Store",description:"Learn how your PWA can run on iOS and be published to the iOS App Store",date:"Oct 28, 2021",imageUrl:"https://blog.pwabuilder.com/posts/announcing-ios/ios-announcement.png",shareUrl:"https://blog.pwabuilder.com/posts/publish-your-pwa-to-the-ios-app-store/",clickUrl:"https://blog.pwabuilder.com/posts/publish-your-pwa-to-the-ios-app-store/",tags:["Android","Store"],relatedPlatform:"ios"},{title:"Building PWAs with Web Components!",description:"Learn how the PWABuilder team builds PWAs!",date:"Jan 11, 2021",imageUrl:"/assets/images/pwa_web_components.png",shareUrl:"https://blog.pwabuilder.com/posts/building-pwas-with-web-components!/",clickUrl:"https://blog.pwabuilder.com/posts/building-pwas-with-web-components!/",tags:["Web Components","PWA"]}];let U=class extends a{constructor(){super(),this.mql=window.matchMedia(`(min-width: ${m.largeUpper}px)`),this.isDeskTopView=this.mql.matches,this.generatedPlatforms={android:k,windows:v,web:O,ios:P,oculus:$},this.generating=!1,this.errored=!1,this.openWindowsOptions=!1,this.openAndroidOptions=!1,this.openIOSOptions=!1,this.openOculusOptions=!1,w.observe(this)}static get styles(){return[x,r`
        content-header::part(header) {
          display: none;
        }

        app-button {
          --button-width: 152px;
        }

        app-button#return-to-manifest-button {
          --button-width: 200px;
        }

        #summary-block {
          padding: 16px 16px 16px 36px;
          border-bottom: var(--list-border);

          margin-right: 2em;
        }

        p {
          font-size: var(--font-size);
          color: var(--font-color);
          max-width: 767px;
        }

        h1 {
          font-size: var(--xlarge-font-size);
          line-height: 46px;
        }

        h2 {
          font-size: var(--medium-font-size);
          margin-bottom: 8px;
        }

        #hero-p {
          font-size: var(--font-size);
          line-height: 24px;
          max-width: 406px;
        }

        ul {
          list-style: none;
          margin: 0;
          padding: 0;

          width: 100%;
        }

        li {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 35px;
          padding-bottom: 35px;
          border-bottom: var(--list-border);
        }

        li h3 {
          font-size: var(--small-medium-font-size);
          margin-bottom: 8px;
          margin-top: 0px;
        }

        #other-stores {
          padding: 16px 16px 16px 36px;
          border-bottom: var(--list-border);
          margin-right: 2em;
        }

        #blog-section {
          padding: 16px 32px;
          background: #f8f8f8;
        }

        #tools-section {
          padding: 16px;
        }

        #tools-block {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(244px, 1fr));
          grid-gap: 23px;
        }

        #tools-section h2 {
          margin-top: 36px;
          margin-bottom: 32px;

          text-align: center;
        }

        #blog-section h2 {
          margin-top: 36px;
          margin-bottom: 32px;
        }

        #blog-block {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
        }

        #blog-block app-card {
          max-width: 612px;
          margin-bottom: 10px;
          box-shadow: 0px 2px 4px 0px rgb(0 0 0 / 25%);
          border: none;
          border-radius: 4px;
        }

        #blog-block #first-card {
          max-height: 552px;
          margin-right: 24px;
        }

        #tools-section h2 {
          text-align: center;
        }

        #test-package-button {
          display: block;
          margin-top: 15px;
        }

        #android-publish-button {
          /* same width as buttons above it */
          width: 152px;
        }

        #anchor-block {
          display: flex;
          margin-top: 20px;
          justify-content: flex-end;
          margin-bottom: 20px;
        }

        #anchor-block fast-anchor::part(control) {
          border-bottom: none;
          color: inherit;
          font-weight: var(--font-bold);
          font-size: var(--small-medium-font-size);
        }

        #platform-actions-block {
          margin-left: 16px;
        }

        .test-package-button {
          width: 150px;
          height: 40px;
          display: inherit;
        }
      `,g(r`
          app-sidebar {
            display: block;
          }

          #tablet-sidebar {
            display: none;
          }

          #desktop-sidebar {
            display: block;
          }

          #congrats-wrapper {
            max-width: 69em;
            background: white;
          }
        `),s(r`
          #tablet-sidebar {
            display: block;
          }

          #desktop-sidebar {
            display: none;
          }
        `),n(r`
          #blog-block #first-card {
            margin-right: initial;
          }

          .congrats h1 {
            font-size: 33px;
            max-width: 10em;

            margin-top: 0;
            margin-bottom: 2em;
          }

          .congrats p {
            display: none;
          }

          #other-stores li {
            flex-direction: column;
            align-items: flex-start;
          }

          #other-stores #title-block {
            width: 100%;
          }

          #other-stores #title-block p {
            width: unset;
          }

          #other-stores #platform-actions-block {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 2em;
          }

          #other-stores li h1 {
            font-size: 33px;

            margin-top: 0;
            margin-bottom: 1em;
          }

          #test-package-button app-button::part(underlying-button) {
            width: 152px;
            font-size: var(--font-size);
            height: 40px;
          }
        `),d(r`
          fast-tabs::part(tablist) {
            display: none;
          }

          .congrats h1 {
            font-size: 33px;

            margin-top: 0;
            margin-bottom: 2em;
          }

          .congrats p {
            display: none;
          }

          #other-stores li {
            flex-direction: column;
            align-items: flex-start;
          }

          #other-stores #title-block {
            width: 100%;
          }

          #other-stores #title-block p {
            width: unset;
          }

          #other-stores #platform-actions-block {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 2em;
            margin-left: 0;
          }

          #other-stores li h1 {
            font-size: 33px;

            margin-top: 0;
            margin-bottom: 1em;
          }

          #test-package-button app-button::part(underlying-button) {
            width: 152px;
            font-size: var(--font-size);
            height: 40px;
          }

          #anchor-block {
            justify-content: space-around;
          }

          #blog-block app-card {
            height: 300px;
          }
        `),f,g(r`
          app-sidebar {
            display: block;
          }

          #tablet-sidebar {
            display: none;
          }

          #desktop-sidebar {
            display: block;
          }
        `),s(r`
          #tablet-sidebar {
            display: block;
          }

          #desktop-sidebar {
            display: none;
          }
        `),n(r`
          #blog-block #first-card {
            margin-right: initial;
          }
        `),d(r`
          #blog-block {
            display: block;
            overflow-y: hidden;
            overflow-x: scroll;
            scroll-snap-type: x proximity;
            white-space: nowrap;
            align-items: center;
            padding: 0 16px;
            margin-bottom: 16px;
          }

          .other.posts {
            display: inline-block;
            margin-left: 32px;
          }

          #blog-block #first-card {
            margin-right: 0;
          }

          #blog-block .blog {
            display: inline-block;
            width: calc(100% - 32px);
            margin-right: 32px;
            margin-bottom: 16px;
            scroll-snap-align: center;
          }
        `),p(r`
          #blog-block {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          #blog-block app-card {
            max-width: 416px;
          }

          /* due to container, might want to refactor so the container is optional. */
          .other.posts {
            width: 100%;
          }

          .other.posts app-card {
            margin-left: auto;
            margin-right: auto;
          }
        `,480,639)]}firstUpdated(){let t=S;t&&(!1===this.generatedPlatforms.windows?t.map((o=>{o.relatedPlatform&&"windows"===o.relatedPlatform&&(this.featuredPost=o,t=t.filter((t=>t.title!==o.title)))})):!1===this.generatedPlatforms.android?t.map((o=>{o.relatedPlatform&&"android"===o.relatedPlatform&&(this.featuredPost=o,t=t.filter((t=>t.title!==o.title)))})):!1===this.generatedPlatforms.ios&&t.map((o=>{o.relatedPlatform&&"ios"===o.relatedPlatform&&(this.featuredPost=o,t=t.filter((t=>t.title!==o.title)))})),this.blog_posts=t)}async generateApp(t,o){try{this.generating=!0;const e=await A(t,o);e&&("test"===e.type?this.testBlob=e.blob||void 0:this.blob=e.blob||void 0)}catch(t){console.error(t),this.showAlertModal(t)}finally{this.generating=!1,this.openAndroidOptions=!1,this.openWindowsOptions=!1,this.openIOSOptions=!1}}async download(){(this.blob||this.testBlob)&&(await h(this.blob||this.testBlob,{fileName:"your_pwa.zip",extensions:[".zip"]}),this.blob=void 0,this.testBlob=void 0)}returnToFix(){const t=sessionStorage.getItem("results-string");b.go(`/reportcard?results=${t}`)}showAlertModal(t){this.errored=!0,this.errorMessage=t}render(){return l`
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

        <div slot="modal-actions">
          <app-button id="return-to-manifest-button" @click="${()=>this.returnToFix()}"
            >Return to Manifest Options</app-button
          >
        </div>
      </app-modal>

      <app-modal
        ?open="${!!this.blob}"
        heading="Download your package"
        body="Your app package is ready for download."
        id="download-modal"
      >
        <img
          class="modal-image"
          slot="modal-image"
          src="/assets/images/store_fpo.png"
          alt="publish icon"
        />

        <div slot="modal-actions">
          <app-button @click="${()=>this.download()}">Download</app-button>
        </div>
      </app-modal>

      <app-modal
        ?open="${!!this.testBlob}"
        heading="Windows Test Package Download"
        body="${t.input.publish.windows.test_package}"
        id="test-download-modal"
      >
        <img
          class="modal-image"
          slot="modal-image"
          src="/assets/images/warning.svg"
          alt="warning icon"
        />

        <div slot="modal-actions">
          <app-button @click="${()=>this.download()}">Download</app-button>
        </div>
      </app-modal>

      <app-modal
        id="windows-options-modal"
        heading="Microsoft Store Options"
        body="Customize your Windows app below"
        ?open="${this.openWindowsOptions}"
      >
        <windows-form
          slot="modal-form"
          .generating=${this.generating}
          @init-windows-gen="${t=>this.generateApp("windows",t.detail)}"
        ></windows-form>
      </app-modal>

      <app-modal
        id="android-options-modal"
        heading="Google Play Store Options"
        body="Customize your Android app below"
        ?open="${this.openAndroidOptions}"
      >
        <android-form
          slot="modal-form"
          .generating=${this.generating}
          @init-android-gen="${t=>this.generateApp("android",t.detail)}"
        ></android-form>
      </app-modal>

      <app-modal
        id="ios-options-modal"
        heading="iOS App Store Options"
        body="Customize your iOS app below"
        ?open="${this.openIOSOptions}"
      >
        <ios-form
          slot="modal-form"
          .generating=${this.generating}
          @init-ios-gen="${t=>this.generateApp("ios",t.detail)}"
        ></ios-form>
      </app-modal>

      <app-modal
        id="oculus-options-modal"
        heading="Meta Quest App Options"
        body="Customize your Meta Quest app below"
        ?open="${this.openOculusOptions}"
      >
        <oculus-form
          slot="modal-form"
          .generating=${this.generating}
          @init-oculus-gen="${t=>this.generateApp("oculus",t.detail)}"
        ></oculus-form>
      </app-modal>

      <div id="congrats-wrapper">
        <app-header></app-header>

        <div
          id="grid"
          class="${c({"grid-mobile":0==this.isDeskTopView})}"
        >
          <app-sidebar id="desktop-sidebar"></app-sidebar>

          <div>
            <content-header class="congrats">
              <h1 slot="hero-container">Awesome!</h1>
              <p id="hero-p" slot="hero-container">
                You have taken your PWA to the app stores!
              </p>
            </content-header>

            <app-sidebar id="tablet-sidebar"></app-sidebar>

            <section id="other-stores">
              <h2>Publish your PWA to other stores?</h2>

              <ul>
                ${this.renderWindowsPlatform()}
                ${this.renderAndroidPlatform()}
                ${this.renderiOSPlatform()}
              </ul>

            </section>

            <section id="blog-section">
              <h2>Learn more on our Blog…</h2>

              <div id="blog-block">
                ${this.featuredPost?l`<app-card
                      id="first-card"
                      cardTitle="${this.featuredPost.title}"
                      description="${this.featuredPost.description}"
                      imageUrl="${this.featuredPost.imageUrl}"
                      linkText="Read Post"
                      linkRoute="${this.featuredPost.clickUrl}"
                      .tags=${this.featuredPost.tags}
                      .featured="${this.isFeatured()}"
                      ?isActionCard="${!0}"
                      class="${c({blog:!0,featured:this.isFeatured()})}"
                    >
                    </app-card>`:null}

                <div class="other posts">
                  ${this.blog_posts?this.blog_posts.map((t=>l`
                          <app-card
                            cardTitle="${t.title}"
                            description="${t.description}"
                            class="blog"
                            imageUrl="${t.imageUrl}"
                            linkText="Read Post"
                            .linkRoute="${t.clickUrl}"
                            ?isActionCard="${!0}"
                          >
                          </app-card>
                        `)):null}
                </div>
              </div>

              <div id="anchor-block">
                <fast-anchor
                  href="https://blog.pwabuilder.com"
                  target="_blank"
                  appearance="hypertext"
                  >View more blog posts</fast-anchor
                >
              </div>
            </section>

            <section id="tools-section">
              <resource-hub page="complete">
                <h2 slot="title">Helpful tools for you...</h2>
              </resource-hub>
            </section>
          </div>
        </div>
      </div>
    `}isFeatured(){return window.innerWidth>1023}renderWindowsPlatform(){return this.generatedPlatforms.windows?l``:l`
      <li>
        <div id="title-block">
          <h3>Windows</h3>
          <p>
            <a href="https://blog.pwabuilder.com/posts/bringing-chromium-edge-pwas-to-the-microsoft-store/">
              PWAs work great on Windows!
            </a>
            Tap Test Package to test your PWA on a Windows
            device, or if you're ready, tap Publish to generate
            a Microsoft Store-ready package for your PWA.
          </p>
        </div>

        <div id="platform-actions-block">
          <app-button
            @click="${()=>this.openWindowsOptions=!0}">
            Publish
          </app-button>

          <loading-button
            ?loading=${this.generating}
            id="test-package-button"
            class="navigation test-package-button secondary"
            .secondary=${!0}
            @click="${()=>this.generateApp("windows")}">
            Test Package
            </loading-button>
        </div>
      </li>
    `}renderAndroidPlatform(){return this.generatedPlatforms.android?l``:l`
      <li>
        <div id="title-block">
          <h3>Android</h3>
          <p>
            Want to ship your PWA to Android? PWAs also work great
            on Android and are accepted in the Google Play Store.
            Tap publish to generate a package you can both test
            on a Android device and submit to the Google Play Store.
          </p>
        </div>

        <div id="platform-actions-block">
          <app-button
            id="android-publish-button"
            @click="${()=>this.openAndroidOptions=!0}">
            Publish
          </app-button>
        </div>
      </li>
    `}renderiOSPlatform(){return this.generatedPlatforms.ios?l``:l`
      <li>
        <div id="title-block">
          <h3>iOS</h3>
          <p>
            Your PWA can run on iOS and be published to the iOS App Store. 
            Tab publish to generate your iOS app package.
          </p>
        </div>
      
        <div id="platform-actions-block">
          <app-button @click="${()=>this.openIOSOptions=!0}">
            Publish
          </app-button>
        </div>
      </li>
    `}};o([u()],U.prototype,"mql",void 0),o([u()],U.prototype,"isDeskTopView",void 0),o([u()],U.prototype,"generatedPlatforms",void 0),o([u()],U.prototype,"generating",void 0),o([u()],U.prototype,"errored",void 0),o([u()],U.prototype,"errorMessage",void 0),o([u()],U.prototype,"blob",void 0),o([u()],U.prototype,"testBlob",void 0),o([u()],U.prototype,"openWindowsOptions",void 0),o([u()],U.prototype,"openAndroidOptions",void 0),o([u()],U.prototype,"openIOSOptions",void 0),o([u()],U.prototype,"openOculusOptions",void 0),o([u()],U.prototype,"blog_posts",void 0),o([u()],U.prototype,"featuredPost",void 0),U=o([i("app-congrats")],U);export{U as AppCongrats};
