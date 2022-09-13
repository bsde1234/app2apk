import{c as t,_ as o,e as i,n as e,s as a,r as n,a as d,x as l,d as s,$ as r}from"./app-index-f96a4530.js";import{AnalyticsBehavior as p}from"@pwabuilder/site-analytics";function c(){document.documentElement.style.overflowY="initial"}var m=t`.modal-actions {
  display: flex;
  flex-flow: row;
  justify-content: space-evenly;
}

@media screen and (max-width: 479px) {
  .modal-actions {
    display: flex;
    flex-flow: column;
    align-items: center;

    margin-bottom: 16px;
  }

  .modal-actions > * {
    margin-top: 8px;
  }
}
`;let h=class extends a{constructor(){super(),this.open=!1,this.heading="",this.body="",this.modalId="",this.modalAni=void 0,this.backgroundAni=void 0}static get styles(){return[m,n`
        #background {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: transparent;
          backdrop-filter: blur(10px);
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;

          z-index: 3;
        }

        #modal {
          background: white;
          width: 500px;
          margin: 51px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          padding-left: 16px;
          padding-right: 16px;
          padding-bottom: 45px;
          border-radius: 8px;
          box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.12);

          z-index: 4;
        }

        #modal-image {
          height: 50px;
          width: 50px;
        }

        #modal-header #title {
          display: block;
          width: 100%;
          text-align: center;
          font-weight: bold;
          font-size: var(--medium-font-size);
          line-height: 28px;
        }

        #modal-body {
          text-align: center;
          width: inherit;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        #modal-body p {
          font-weight: 300;
          font-size: 14px;
          line-height: 20px;
          color: var(--secondary-font-color);
        }

        #modal-form {
          padding: 14px;
          width: 100%;
        }

        #back-button-block {
          width: 100%;
          display: flex;
          justify-content: flex-end;
        }

        #back-button-block fast-button {
          margin-top: 12px;
          background: none;
        }

        #back-button-block fast-button ion-icon {
          height: 2em;
          width: 2em;
          color: #c2c9d1;
        }

        #modal-tou {
          margin-top: 4px;
        }

        #tou-link {
          text-align: center;
          font-weight: 300;
          font-size: var(--small-font-size);
          color: var(--secondary-font-color);
        }
        
        #modal-nav {
          width: 100%;
        }
      `,d(n`
        #modal {
          margin: 0px;
          padding: 0px;
          width: 100vw !important;
          height: 100vh;
        }

        #modal-form {
          height: 100%;
        }

        #back-button-block {
          position: fixed;
          top: 0;
        }
      `),l(n`
        #modal {
          width: 800px;
        }
      `)]}firstUpdated(){var t,o;const i=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("#modal"),e=null===(o=this.shadowRoot)||void 0===o?void 0:o.querySelector("#background");i&&(this.modalAni=i.animate([{transform:"translateY(10px)",opacity:0},{transform:"translateY(0)",opacity:1}],{duration:280,easing:"ease-in-out"})),e&&(this.backgroundAni=e.animate([{opacity:0},{opacity:1}],{duration:280,easing:"ease-in-out"}))}updated(t){t.has("open")&&(!1===t.get("open")?document.documentElement.style.overflowY="hidden":c())}async close(){var t;s(this.heading.split(" ").join("_")+"_modal_closed",p.ProcessCheckpoint),this.modalAni&&this.backgroundAni&&(this.modalAni.reverse(),this.backgroundAni.reverse(),await this.modalAni.finished,await this.backgroundAni.finished),this.open=!1,this.dispatchEvent((t=this.modalId,new CustomEvent("app-modal-close",{detail:{modalId:t},composed:!0,bubbles:!0}))),c()}render(){return this.open?r`
        <div id="background" role="alert">
          <div part="modal-layout" id="modal">
            <div id="back-button-block">
              <fast-button @click="${this.close}" appearance="stealth">
                <ion-icon name="close"></ion-icon>
              </fast-button>
            </div>
        
            <slot id="modal-image" name="modal-image"></slot>
        
            <section id="modal-header">
              <span id="title">${this.heading}</span>
            </section>
        
            <section id="modal-body" part="modal-body">
              <p part="modal-body-contents">
                ${this.body}
                <slot name="modal-docs-link"></slot>
              </p>
            </section>

            <slot id="modal-nav" name="modal-nav"></slot>
        
            <slot id="modal-form" name="modal-form"></slot>
        
            <slot class="modal-actions" name="modal-actions"></slot>
        
            <section id="modal-tou">
              <a target="_blank" rel="noopener" href="https://github.com/pwa-builder/PWABuilder/blob/master/TERMS_OF_USE.md"
                id="tou-link">Terms of Use</a>
            </section>
          </div>
        </div>
      `:null}};o([i({type:Boolean})],h.prototype,"open",void 0),o([i({type:String})],h.prototype,"heading",void 0),o([i({type:String})],h.prototype,"body",void 0),o([i({type:String})],h.prototype,"modalId",void 0),o([i()],h.prototype,"nav",void 0),h=o([e("app-modal")],h);export{m as M};
