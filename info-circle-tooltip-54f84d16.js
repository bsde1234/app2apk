import{_ as t,e,t as o,n as i,s,r as n,a as r,$ as l}from"./app-index-f96a4530.js";import{l as a}from"./if-defined-0ff46bd7.js";let h=class extends s{constructor(){super(),this.anchor="",this.text="",this.link="",this.tooltipVisible=!1,this.tooltipLocation=[0,0],this.anchorElement=null,this.tooltipContainsFocus=!1,this.tooltipContainsHover=!1,this.anchorContainsFocus=!1,this.anchorContainsHover=!1,this.hideTooltipTimeoutHandle=0,this.mouseEnterListener=()=>this.anchorMouseEntered(),this.focusInListner=()=>this.anchorFocused(),this.mouseLeaveListener=()=>this.anchorMouseLeave(),this.focusOutListener=()=>this.anchorBlurred()}static get styles(){return n`
      .tooltip-dialog {
        position: absolute;
        margin: 0px;
        box-shadow: 0 0 5px gray;
        background-color: #000;
        opacity: 0;
        transform: translate(10px, 5px); /* shift it down and to the right a bit */
        transition: opacity 0.2s ease-in-out;
        visibility: collapse;
        border-radius: 0.25rem;
        z-index: 1000;
        width: max-content;
        max-width: 250px;
      }

      .tooltip-dialog.show {
        opacity: 0.8;
        pointer-events: auto;
        visibility: visible;
      }

      .tooltip-inner {
        position: relative;
        color: #fff;
        font-size: 14px;
        font-weight: normal;
        padding: 0px 15px 0px 15px;
        line-height: 21px;
      }

      ${r(n`
          .tooltip-inner {
            max-width: 200px;
          }
        `)}

      a, a:hover, a:active {
        color: white;
        display: block;
        margin-bottom: 15px;
      }
    `}connectedCallback(){var t;super.connectedCallback(),this.anchor?(this.anchorElement=null===(t=this.parentNode)||void 0===t?void 0:t.querySelector(`#${this.anchor}`),this.anchorElement&&(this.anchorElement.addEventListener("mouseenter",this.mouseEnterListener,{passive:!0}),this.anchorElement.addEventListener("mouseleave",this.mouseLeaveListener,{passive:!0}),this.anchorElement.addEventListener("focusin",this.focusInListner,{passive:!0}),this.anchorElement.addEventListener("focusout",this.focusOutListener,{passive:!0}))):console.error("Attempted to use a <hover-tooltip>, but didn't set the anchor. It should be set to the ID of the element the tooltip is for.")}disconnectedCallback(){super.disconnectedCallback(),this.anchorElement&&(this.anchorElement.removeEventListener("mouseenter",this.mouseEnterListener),this.anchorElement.removeEventListener("mouseleave",this.focusInListner),this.anchorElement.removeEventListener("focusin",this.mouseEnterListener),this.anchorElement.removeEventListener("focusout",this.focusOutListener)),clearTimeout(this.hideTooltipTimeoutHandle)}showTooltip(){if(this.anchorElement){let t=0;!!this.getAbsoluteOrFixedOffsetParent(this.anchorElement)||(t=window.scrollY);const e=this.anchorElement.getBoundingClientRect(),[o,i]=this.getCumulativeOffset(this.anchorElement),s=e.top+t-i,n=e.right-o;this.tooltipLocation=[s,n],this.tooltipVisible=!0}}getCumulativeOffset(t){let e=0,o=0,i=t.offsetParent;for(;null!=i;)e+=i.offsetTop,o+=i.offsetLeft,i=i.offsetParent;return[o,e]}getAbsoluteOrFixedOffsetParent(t){if(!t)return null;let e=t.offsetParent;for(;null!=e&&e!==document.body;){const t=window.getComputedStyle(e,null).position;if(e.style&&("absolute"===t||"fixed"===t))return e;e=e.offsetParent}return null}hideTooltipIfNecessary(){const t=()=>{this.tooltipVisible=this.anchorContainsFocus||this.anchorContainsHover||this.tooltipContainsFocus||this.tooltipContainsHover};clearTimeout(this.hideTooltipTimeoutHandle),this.hideTooltipTimeoutHandle=window.setTimeout((()=>t()),350)}anchorMouseEntered(){this.anchorContainsHover=!0,this.showTooltip()}anchorMouseLeave(){this.anchorContainsHover=!1,this.hideTooltipIfNecessary()}anchorFocused(){this.anchorContainsFocus=!0,this.showTooltip()}anchorBlurred(){this.anchorContainsFocus=!1,this.hideTooltipIfNecessary()}tooltipMouseEntered(){this.tooltipContainsHover=!0}tooltipMouseLeave(){this.tooltipContainsHover=!1,this.hideTooltipIfNecessary()}tooltipFocused(){this.tooltipContainsFocus=!0}tooltipBlurred(){this.tooltipContainsFocus=!1,this.hideTooltipIfNecessary()}render(){const t=this.tooltipVisible?"tooltip-dialog show":"tooltip-dialog";return l`
      <div class="${t}" 
        style="top: ${this.tooltipLocation[0]}px; left: ${this.tooltipLocation[1]}px;"
        @mouseover="${this.tooltipMouseEntered}"
        @mouseleave="${this.tooltipMouseLeave}"
        @focusin="${this.tooltipFocused}"
        @focusout="${this.tooltipBlurred}">
        <div class="tooltip-inner">
          <p>${this.text}</p>
          ${this.renderLink()}
        </div>
      </div>
    `}renderLink(){return this.link?l`
      <a target="_blank" href="${this.link}">
        Read more...
      </a>
    `:l``}};t([e()],h.prototype,"anchor",void 0),t([e({type:String})],h.prototype,"text",void 0),t([e({type:String})],h.prototype,"link",void 0),t([o()],h.prototype,"tooltipVisible",void 0),t([o()],h.prototype,"tooltipLocation",void 0),h=t([i("hover-tooltip")],h);let c=class extends s{constructor(){super(),this.text="",this.link="",this.circleId=Math.random().toString(36).replace("0.","info-circle-")}static get styles(){return n`
      .info-circle-img {
        height: 12px;
        width: 12px;
        border-radius: 50%;
        background: var(--neutral-fill-stealth-rest);
        padding: 4px;
        margin-left: 6px;
      }
    `}render(){return l`
      <img id="${this.circleId}" class="info-circle-img" src="assets/images/help-outline.svg" alt="help outline"
        aria-hidden="true" />
      
      <hover-tooltip anchor="${this.circleId}" text="${this.text}" link="${a(this.link)}">
      </hover-tooltip>
    `}};t([e({type:String})],c.prototype,"text",void 0),t([e({type:String})],c.prototype,"link",void 0),c=t([i("info-circle-tooltip")],c);
