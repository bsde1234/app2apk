import{_ as e,e as i,t,n as o,r as n,W as s,y as a,$ as r}from"./app-index-f96a4530.js";import{A as l,e as p,a as d,b as u,d as g,f as c,S as h,m}from"./index-2ed725b8.js";let v=class extends l{constructor(){super(),this.generating=!1,this.showAllSettings=!1,this.packageOptions=p()}static get styles(){const e=n`
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
    `;return[super.styles,e]}async firstUpdated(){let e=s();e.isGenerated&&(e=await a()),this.packageOptions=d(e)}initGenerate(e){e.preventDefault(),this.dispatchEvent(new CustomEvent("init-ios-gen",{detail:this.packageOptions,composed:!0,bubbles:!0}))}toggleSettings(e){this.showAllSettings="advanced"===e}render(){return r`
      <form
        id="ios-options-form"
        slot="modal-form"
        style="width: 100%"
        @submit="${e=>this.initGenerate(e)}"
        title=""
      >
        <div id="form-layout">
          <div class="basic-settings">
            <div class="form-group">
              ${super.renderFormInput({label:"Bundle ID",tooltip:"The unique identifier of your app. Apple recommends a reverse-domain style string: com.domainname.appname. You'll need this value when uploading your app to the App Store.",tooltipLink:"https://blog.pwabuilder.com/docs/publish-your-pwa-to-the-ios-app-store/#create-your-bundle-id",inputId:"bundleIdInput",value:this.packageOptions.bundleId||"com.domainname.appname",required:!0,placeholder:"com.domainname.appname",minLength:3,spellcheck:!1,inputHandler:e=>this.packageOptions.bundleId=e})}
            </div>

            <div class="form-group">
              ${this.renderFormInput({label:"App name",tooltip:"The name of your app as displayed to users",tooltipLink:"https://blog.pwabuilder.com/docs/publish-your-pwa-to-the-ios-app-store",inputId:"appNameInput",placeholder:"My PWA",value:this.packageOptions.name||"My PWA",required:!0,spellcheck:!1,minLength:3,pattern:"[^|$@#><)(!&%*]*$",inputHandler:e=>this.packageOptions.name=e})}
            </div>

            <div class="form-group">
              ${this.renderFormInput({label:"URL",inputId:"urlInput",placeholder:"https://domainname.com/app",value:this.packageOptions.url,required:!0,type:"url",inputHandler:e=>this.packageOptions.url=e})}
            </div>
          </div>

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
                <div>
                  <div class="">
                    <div class="form-group">
                      ${this.renderFormInput({label:"Image URL",inputId:"imageUrlInput",tooltip:"The URL of a square 512x512 or larger PNG image from which to generate your iOS app icons. This can be an absolute URL or a URL relative to your web manifest.",placeholder:"/images/512x512.png",value:this.packageOptions.imageUrl,required:!0,inputHandler:e=>this.packageOptions.imageUrl=e})}
                    </div>
                  </div>
                </div>
              </div>             

              <div class="form-group">
                ${this.renderFormInput({label:"Status bar color",inputId:"statusBarColorInput",tooltip:"The background color of the iOS status bar while your app is running. We recommend using your manifest's theme_color or background_color.",type:"color",placeholder:"#ffffff",value:this.packageOptions.statusBarColor,required:!0,inputHandler:e=>this.packageOptions.statusBarColor=e})}
              </div>

              <div class="form-group">
                ${this.renderFormInput({label:"Splash screen color",inputId:"splashColorInput",tooltip:"The background color of the splash screen shown while your PWA is launching. We recommend using your manifest's background_color.",type:"color",placeholder:"#ffffff",value:this.packageOptions.splashColor,required:!0,inputHandler:e=>this.packageOptions.splashColor=e})}
              </div>

              <div class="form-group">
                ${this.renderFormInput({label:"Progress bar color",inputId:"progressBarColorInput",tooltip:"The color of the progress bar shown on your app's splash screen while your PWA is loaded. We recommend using your manifest's theme_color.",type:"color",placeholder:"#000000",value:this.packageOptions.progressBarColor,required:!0,inputHandler:e=>this.packageOptions.progressBarColor=e})}
              </div>

              <div class="form-group">
                ${this.renderFormInput({label:"Permitted URLs",inputId:"permittedUrlsInput",tooltip:"Optional. A comma-separated list of URLs or hosts that your PWA should be allowed to navigate to. You don't need to add your PWA's domain, as it's automatically included.",placeholder:"account.google.com, login.microsoft.com",value:this.packageOptions.permittedUrls.join(", "),inputHandler:e=>this.packageOptions.permittedUrls=e.split(",").map((e=>e.trim())).filter((e=>!!e))})}
              </div>
            </fast-accordion-item>
          </fast-accordion>
        </div>

        <div id="form-details-block">
          <p>
            Your download will contain
            <a href="https://blog.pwabuilder.com/docs/build-your-ios-app" target="_blank">instructions</a>
            for submitting to the App Store.</p>
        </div>

        <div id="form-options-actions" class="modal-actions">
          <loading-button class="form-generate-button" .loading="${this.generating}" .primary=${!0}>
            <input id="generate-submit" type="submit" value="Generate" />
          </loading-button>
        </div>
      </form>
    `}getInputValue(e){const i=e;return(null==i?void 0:i.value)||""}};e([i({type:Boolean})],v.prototype,"generating",void 0),e([t()],v.prototype,"showAllSettings",void 0),e([t()],v.prototype,"packageOptions",void 0),v=e([o("ios-form")],v);let f=class extends l{constructor(){super(),this.generating=!1,this.showAllSettings=!1,this.packageOptions=u(),this.existingSigningKey=g()}static get styles(){const e=n``;return[super.styles,e]}async firstUpdated(){let e=s();e.isGenerated&&(e=await a()),this.packageOptions=c(e)}initGenerate(e){e.preventDefault(),this.dispatchEvent(new CustomEvent("init-oculus-gen",{detail:this.packageOptions,composed:!0,bubbles:!0}))}toggleSettings(e){this.showAllSettings="advanced"===e}render(){return r`
      <form
        id="oculus-options-form"
        slot="modal-form"
        style="width: 100%"
        @submit="${e=>this.initGenerate(e)}"
        title=""
      >
        <div id="form-layout">
          <div class="basic-settings">
            <div class="form-group">
              ${this.renderFormInput({label:"Package ID",tooltip:"The ID of your Meta Quest app. We recommend a reverse-domain style string: com.domainname.appname. Letters, numbers, periods, hyphens, and underscores are allowed.",tooltipLink:"https://developer.android.com/guide/topics/manifest/manifest-element.html#package",inputId:"package-id-input",required:!0,placeholder:"MyCompany.MyApp",value:this.packageOptions.packageId,minLength:3,maxLength:50,spellcheck:!1,pattern:"[a-zA-Z0-9.-_]*$",validationErrorMessage:"Package ID must contain only letters, numbers, periods, hyphens, and underscores.",inputHandler:e=>this.packageOptions.packageId=e})}
            </div>

            <div class="form-group">
              ${this.renderFormInput({label:"App name",tooltip:"The name of your app as displayed to users",inputId:"appNameInput",placeholder:"My PWA",value:this.packageOptions.name||"My PWA",required:!0,spellcheck:!1,minLength:3,pattern:"[^|$@#><)(!&%*]*$",inputHandler:e=>this.packageOptions.name=e})}
            </div>

            <div class="form-group">
              ${this.renderFormInput({label:"Version name",tooltip:"The version of your app displayed to users. This is a string, typically in the form of '1.0.0.0'. This is purely for display purposes to users, Meta Quest Store uses Version Code to determine the latest version of your app.",tooltipLink:"https://developer.android.com/guide/topics/manifest/manifest-element.html#vname",inputId:"version-input",required:!0,placeholder:"1.0.0.0",value:this.packageOptions.versionName,spellcheck:!1,inputHandler:e=>this.packageOptions.versionName=e})}
            </div>

            <div class="form-group">
              ${this.renderFormInput({label:"Version code",tooltip:"A positive integer used as your app's version number. This number is used by the Meta Quest Store to determine whether one version is more recent than another, with higher numbers indicating more recent versions.",tooltipLink:"https://developer.android.com/guide/topics/manifest/manifest-element.html#vcode",inputId:"version-code-input",type:"number",minValue:1,maxValue:21e8,required:!0,placeholder:"1",value:this.packageOptions.versionCode.toString(),inputHandler:e=>this.packageOptions.versionCode=parseInt(e,10)})}
            </div>
          </div>

          <fast-accordion>
            <fast-accordion-item
              @click="${e=>this.toggleAccordion(e.target)}"
            >
              <div id="all-settings-header" slot="heading">
                <span>All Settings</span>

                <fast-button class="flipper-button" mode="stealth">
                  <ion-icon name="caret-forward-outline"></ion-icon>
                </fast-button>
              </div>

              <div class="adv-settings">
                <div class="form-group">
                  ${this.renderFormInput({label:"Manifest URL",tooltip:"The absolute URL of your web manifest.",inputId:"manifest-url-input",type:"url",value:this.packageOptions.manifestUrl,readonly:!0,placeholder:"https://myawesomepwa.com/manifest.json",inputHandler:e=>this.packageOptions.manifestUrl=e})}
                </div>

                <div class="form-group">
                  <label>Signing key</label>
                  <div class="form-check">
                    ${this.renderFormInput({label:"New",tooltip:"Recommended for new Meta Quest apps. PWABuilder will generate a new signing key for you and sign your app package with it. Your download will contain the new signing key details.",inputId:"signing-new-input",name:"signingMode",value:"new",type:"radio",checked:this.packageOptions.signingMode===h.New,inputHandler:()=>this.signingModeChanged(h.New)})}
                  </div>
                  <div class="form-check">
                    ${this.renderFormInput({label:"None",tooltip:"PWABuilder will generate an unsigned APK. Unsigned APKs cannot be uploaded to the Meta Quest Store; you will need to sign the APK manually via Java keytool before submitting to the Store.",tooltipLink:"https://docs.oracle.com/en/java/javase/12/tools/keytool.html",inputId:"signing-none-input",name:"signingMode",value:"none",type:"radio",checked:this.packageOptions.signingMode===h.None,inputHandler:()=>this.signingModeChanged(h.None)})}
                  </div>
                  <div class="form-check">
                    ${this.renderFormInput({label:"Existing",tooltip:"Recommended for existing apps in the Meta Quest Store. Use this option if you already have a signing key and you want to publish a new version of an existing app in the Meta Quest Store.",inputId:"signing-mine-input",name:"signingMode",value:"mine",type:"radio",checked:this.packageOptions.signingMode===h.Existing,inputHandler:()=>this.signingModeChanged(h.Existing)})}
                  </div>

                  ${this.renderSigningKeyFields()}
                </div>
              </div>
            </fast-accordion-item>
          </fast-accordion>
        </div>

        <div id="form-details-block">
          <p>
            Your download will have instructions about sideloading the app on Meta Quest.
          </p>
        </div>

        <div id="form-options-actions" class="modal-actions">
          <loading-button .loading="${this.generating}">
            <input id="generate-submit" type="submit" value="Generate" />
          </loading-button>
        </div>
      </form>
    `}renderSigningKeyFields(){return this.packageOptions.signingMode!==h.Existing?r``:this.renderExistingSigningKeyFields()}renderExistingSigningKeyFields(){return r`
      <div class="signing-key-fields">
        <div class="form-group">
          <label for="signing-key-file-input">
            Keystore file
            ${this.renderTooltip({label:"Keystore file",inputId:"signing-key-file-input",tooltipLink:"https://developer.android.com/studio/publish/app-signing",tooltip:"Your existing .keystore file used to sign the previous version of your app. If you don't have an existing .keystore file, you should choose 'New' above."})}
          </label>
          <input
            type="file"
            class="form-control"
            id="signing-key-file-input"
            @change="${e=>this.signingKeyUploaded(e.target)}"
            accept=".keystore"
            required
          />
        </div>

        <div class="form-group">
          ${this.renderFormInput({label:"Keystore password",tooltip:"The password to access the .keystore file",tooltipLink:"https://developer.android.com/studio/publish/app-signing",inputId:"key-store-password-input",type:"password",minLength:6,required:!0,value:this.existingSigningKey.storePassword,inputHandler:e=>{this.existingSigningKey.storePassword=this.existingSigningKey.password=e}})}
        </div>

        <div class="form-group">
          ${this.renderFormInput({label:"Key alias",tooltip:"The alias of the key to sign the app package with.",tooltipLink:"https://developer.android.com/studio/publish/app-signing",inputId:"key-alias-input",required:!0,placeholder:"my-key-alias",value:this.existingSigningKey.alias,spellcheck:!1,inputHandler:e=>this.existingSigningKey.alias=e})}
        </div>
      </div>
    `}signingKeyUploaded(e){const i=e;if(i&&i.files&&i.files.length>0){const e=i.files[0];e&&e.size>m&&console.error("Signing key file is too large. Max size:",{maxSize:m,fileSize:e.size});const t=new FileReader;t.onload=()=>this.existingSigningKey.keyStoreFile=t.result,t.onerror=e=>{console.error("Unable to read signing key file",t.error,e)},t.readAsDataURL(e)}}signingModeChanged(e){this.packageOptions.signingMode=e,e===h.Existing?this.packageOptions.existingSigningKey=this.existingSigningKey:this.packageOptions.existingSigningKey=null,this.requestUpdate()}};e([i({type:Boolean})],f.prototype,"generating",void 0),e([t()],f.prototype,"showAllSettings",void 0),e([t()],f.prototype,"packageOptions",void 0),e([t()],f.prototype,"existingSigningKey",void 0),f=e([o("oculus-form")],f);
