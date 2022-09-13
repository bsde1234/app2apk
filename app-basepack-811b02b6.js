import{s as e,S as a,r as t,j as o,l as i,m as s,a as r,a6 as n,o as d,R as p,$ as l,H as b,v as c,_ as h,t as m,n as g}from"./app-index-f96a4530.js";import"./app-modal-4f12a1c5.js";import{s as u}from"./layout-defaults-c0eb1828.js";import{l as w}from"./list-defaults-4bb7bbd3.js";import{g as f}from"./web-publish-cc194c25.js";import"@pwabuilder/site-analytics";let y=class extends e{constructor(){super(),this.mql=window.matchMedia(`(min-width: ${a.largeUpper}px)`),this.isDeskTopView=this.mql.matches,this.loading=!1,this.errored=!1}static get styles(){return[u,w,t`
        content-header::part(header) {
          display: none;
        }

        .container {
          padding: 16px 16px 16px 36px;
          display: flex;
          flex-direction: column;
          justify-items: center;

          padding-right: 2em;
        }

        .container .action-buttons {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .container .action-buttons > app-button {
          margin: 1rem;
        }

        .container .action-buttons fast-anchor {
          /** 
             Seems like a magic value but really
             this is just to match the back button next to it
           */
          width: 11em;

          color: white;
          box-shadow: var(--button-shadow);
          border-radius: var(--button-radius);
          font-weight: bold;
        }

        #summary-block {
          padding: 16px 16px 16px 36px;
          border-bottom: var(--list-border);

          margin-right: 2em;
        }

        p {
          font-size: var(--font-size);
        }

        h2 {
          font-size: var(--xlarge-font-size);
          line-height: 46px;
        }

        #hero-p {
          font-size: var(--font-size);
          line-height: 24px;
          max-width: 406px;
        }

        h3,
        h5 {
          font-size: var(--medium-font-size);
          margin-bottom: 8px;
        }

        h4 {
          margin-bottom: 8px;
          margin-top: 0;
        }

        #top-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        #up-next {
          border-top: var(--list-border);
        }

        #up-next ol {
          margin: 0;
          padding-left: 1em;
          font-size: var(--font-size);
        }

        #download-summary p {
          max-width: 58em;
        }

        #report-link {
          color: white;
          border-radius: var(--button-radius);
          box-shadow: var(--button-shadow);
          width: 10em;
        }

        ${o(t`
            app-sidebar {
              display: block;
            }

            #tablet-sidebar {
              display: none;
            }

            #desktop-sidebar {
              display: block;
            }

            #basepack-wrapper {
              max-width: 69em;
              background: white;
            }
          `)}

        ${i(t`
            #tablet-sidebar {
              display: block;
            }

            #desktop-sidebar {
              display: none;
            }
          `)}

        ${s(t`
            .basePackage h2 {
              font-size: 33px;
              max-width: 10em;

              margin-top: 0;
              margin-bottom: 1em;
            }

            .basePackage p {
              display: none;
            }
          `)}

        ${r(t`
            #top-container {
              flex-direction: column;
              align-items: flex-start;
            }

            #download-actions {
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-bottom: 2em;
              margin-top: 2em;
            }

            .basePackage h2 {
              font-size: 33px;

              margin-top: 0;
              margin-bottom: 1em;
            }

            .basePackage p {
              display: none;
            }
          `)}
      `]}async doWebGenerate(){this.loading=!0,this.blob=void 0,this.errorMessage=void 0,this.errored=!1;try{const e=await f();e&&(this.blob=e)}catch(e){this.errorMessage=(e||"").toString(),this.errored=!0}this.loading=!1}async download(){this.blob&&(await n(this.blob,{fileName:"your_pwa.zip",extensions:[".zip"]}),this.blob=void 0)}showAlertModal(e){this.errored=!0,this.errorMessage=e}reTest(){const e=d();e&&p.go(`/testing?site=${e}`)}cancel(){this.blob=void 0,this.errored=!1,this.errorMessage=void 0}render(){return l`
      <app-modal @app-modal-close="${()=>this.cancel()}" ?open="${!!this.blob}" heading="Base Package Download"
        .body="${b.input.publish.base_package.download}" id="test-download-modal">
        <img class="modal-image" slot="modal-image" src="/assets/images/warning.svg" alt="warning icon" />
      
        <div slot="modal-actions">
          <app-button @click="${()=>this.download()}">Download</app-button>
        </div>
      </app-modal>
      
      <app-modal heading="Wait a minute!" .body="${this.errorMessage||""}" ?open="${this.errored}" id="error-modal">
        <img class="modal-image" slot="modal-image" src="/assets/warning.svg" alt="warning icon" />
      
        <div slot="modal-actions">
          <fast-anchor target="_blank" rel="noopener" href="https://github.com/pwa-builder/PWABuilder/issues/new/choose"
            id="report-link" appearance="button">Report an Issue</fast-anchor>
        </div>
      </app-modal>
      
      <div id="basepack-wrapper">
        <app-header></app-header>
      
        <div id="grid" class="${c({"grid-mobile":0==this.isDeskTopView})}">
          <app-sidebar id="desktop-sidebar"></app-sidebar>
      
          <div>
            <content-header class="basePackage">
              <h2 slot="hero-container">
                ${b.text.base_package.top_section.h1}
              </h2>
              <p id="hero-p" slot="hero-container">
                ${b.text.base_package.top_section.p}
              </p>
            </content-header>
      
            <app-sidebar id="tablet-sidebar"></app-sidebar>
      
            <section class="container">
              <div id="top-container">
                <div id="download-summary">
                  <h3>${b.text.base_package.summary_body.h1}</h3>
      
                  <p>${b.text.base_package.summary_body.p}</p>
                </div>
      
                <div id="download-actions">
                  <loading-button ?loading="${this.loading}" @click="${()=>this.doWebGenerate()}">Generate</loading-button>
                </div>
              </div>
      
              <div id="up-next">
                <h5>Next Steps</h5>
      
                <p>
                  You're steps away from being able to package your PWA for the
                  store. After you download your base files be sure to
                </p>
      
                <ol>
                  <li>
                    <a href="https://github.com/pwa-builder/pwabuilder-web/blob/V2/src/assets/next-steps.md" rel="noopener"
                      target="_blank">Open documentation</a>
                    in order to accurately add files or links to your server.
                  </li>
      
                  <li>
                    After you have updated your files, submit your PWA through
                    our testing hub again to be sure that all is accurate with
                    your updates.
                  </li>
      
                  <li>
                    After acing your PWA test and review, go ahead and package
                    for the app stores!
                  </li>
                </ol>
              </div>
      
              <div class="action-buttons">
                <fast-anchor href="https://github.com/pwa-builder/pwabuilder-web/blob/V2/src/assets/next-steps.md"
                  rel="noopener" target="_blank" appearance="button">
                  Documentation
                </fast-anchor>
      
                <app-button @click="${()=>this.reTest()}">Test Updated App</app-button>
              </div>
            </section>
          </div>
        </div>
      </div>
    `}};h([m()],y.prototype,"mql",void 0),h([m()],y.prototype,"isDeskTopView",void 0),h([m()],y.prototype,"loading",void 0),h([m()],y.prototype,"blob",void 0),h([m()],y.prototype,"errored",void 0),h([m()],y.prototype,"errorMessage",void 0),y=h([g("app-basepack")],y);export{y as AppBasePack};
