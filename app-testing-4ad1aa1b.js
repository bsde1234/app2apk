import{c as e,s as r,r as t,a,b as o,R as s,$ as i,_ as n,t as d,n as g}from"./app-index-f96a4530.js";import"./app-modal-4f12a1c5.js";import"@pwabuilder/site-analytics";var p=e`@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
`;let c=class extends r{constructor(){super(),this.loading=!1,this.currentPhrase="PWABuilder is loading your PWA in the background",this.errored=!1,this.setPhrase=(e,r)=>new Promise((t=>{setTimeout((()=>{this.currentPhrase=e,t()}),2e3*r)}))}static get styles(){return[p,t`
        :host {
          display: flex;
          flex-direction: column;

          height: calc(100vh - 76px);
          overflow: hidden;

          display: block;
          background: url(/assets/images/glass.jpg);
          background-size: cover;
          background-repeat: no-repeat;
          background-position: right;
          background-color: white;
        }

        #testing-container {
          display: flex;
          flex-direction: column;
          align-items: center;

          text-align: center;
          font-size: var(--large-font-size);

          animation: 160ms fadeIn linear;

          padding-top: 2em;
          width: 100%;
          background-image: url(/assets/images/loading_page.webp);
          height: 100%;
          background-repeat: no-repeat;
          background-position: center;
          justify-content: center;
          background-size: cover;
        }

        #glass {
          height: calc(100% - 66px);
        }

        #testing-container img {
          width: 466px;

          padding-top: 2em;
        }

        #testing-container fast-progress {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          margin-bottom: 0;

          --accent-foreground-rest: var(--primary-purple);
        }

        #testing-container fast-progress::part(progress) {
          border-radius: 0;
        }

        /*#testing-container fast-progress::part(indeterminate-indicator-1), fast-progress::part(indeterminate-indicator-2) {
          background-color: var(--primary-purple);
        }*/

        app-header::part(header) {
          background: transparent;
          position: absolute;
          left: 0;
          right: 0;
          z-index: 2;
          border: none;
        }

        #testing-container span {
          font-weight: var(--font-bold);
          font-size: var(--large-font-size);
          margin-top: 4em;
        }

        .modal-image {
          width: 50px;
        }

        #report-link {
          color: white;
          border-radius: var(--button-radius);
          box-shadow: var(--button-shadow);
          width: 10em;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        ${a(t`
          #testing-container img {
            width: 100%;
          }

          #testing-container span {
            margin-top: 7em;
          }
        `)}
      `]}async firstUpdated(){const e=new URLSearchParams(location.search).get("site");if(e){this.loading=!0,this.phrasePager();try{await this.runTests(e)}catch(e){this.errored=!0,this.errorMessage=e.message||e.toString()}}}async runTests(e){try{const r=await o(e),t=new URLSearchParams(location.search).get("site");if(!r)throw this.loading=!1,new Error(`Test results could not be gathered for ${e}`);this.currentPhrase="Results coming to you in 3..2..1..",setTimeout((()=>{s.go(`/reportcard?site=${t}&results=${JSON.stringify(r)}`)}),300)}catch(r){throw this.loading=!1,new Error(`Test results could not be gathered for ${e} because ${r}`)}}async phrasePager(){const e=["PWABuilder is loading your PWA in the background...","This may take a minute...","We are analyzing your Service Worker and Web Manifest...","Checking your icons...","We are analyzing if your app works offline...","If your app does not have a Web Manifest, we are generating one for you..."];for(let r=0;r<e.length;r++)if(!0===this.loading){const t=e[r];await this.setPhrase(t,r)}}render(){return i` <app-header></app-header>

      <app-modal
        heading="Uh Oh!"
        .body="${this.errorMessage||"There was an error running the tests. Please open an issue using the below link."}"
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
          <fast-anchor
            target="_blank"
            rel="noopener"
            href="https://github.com/pwa-builder/PWABuilder/issues/new/choose"
            id="report-link"
            appearance="button"
            >Report an Issue</fast-anchor
          >
        </div>
      </app-modal>

      <div id="glass">
        <div id="testing-container">
          <span role="status">${this.currentPhrase}</span>

          ${this.loading?i`<fast-progress></fast-progress>`:null}
        </div>
      </div>`}};n([d()],c.prototype,"loading",void 0),n([d()],c.prototype,"currentPhrase",void 0),n([d()],c.prototype,"errored",void 0),n([d()],c.prototype,"errorMessage",void 0),c=n([g("app-testing")],c);export{c as AppTesting};
