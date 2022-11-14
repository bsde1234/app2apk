var lm=Object.defineProperty;var hm=(s,e,t)=>e in s?lm(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var Jr=(s,e,t)=>(hm(s,typeof e!="symbol"?e+"":e,t),t),Xr=(s,e,t)=>{if(!e.has(s))throw TypeError("Cannot "+t)};var mi=(s,e,t)=>(Xr(s,e,"read from private field"),t?t.call(s):e.get(s)),Qi=(s,e,t)=>{if(e.has(s))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(s):e.set(s,t)},Zr=(s,e,t,i)=>(Xr(s,e,"write to private field"),i?i.call(s,t):e.set(s,t),t);var cn=(s,e,t)=>(Xr(s,e,"access private method"),t);import{e as cm,i as dm,t as fm,x as um,a as Ae,b as Hs,s as Vs,c as ve,d as Xa,m as Za,l as qd,f as Hd,g as Vd,y as g,h as M,j as Un,r as Z,A as Q,k as Qa,B as pm,n as mm,o as gm,p as ql,q as Qr}from"./index.0229c04f.js";import"./test-publish-pane.085caa38.js";import"./if-defined.6fc51b43.js";const bm=[{code:"ab",name:"Abkhaz"},{code:"aa",name:"Afar"},{code:"af",name:"Afrikaans"},{code:"ak",name:"Akan"},{code:"sq",name:"Albanian"},{code:"am",name:"Amharic"},{code:"ar",name:"Arabic"},{code:"an",name:"Aragonese"},{code:"hy",name:"Armenian"},{code:"as",name:"Assamese"},{code:"av",name:"Avaric"},{code:"ae",name:"Avestan"},{code:"ay",name:"Aymara"},{code:"az",name:"Azerbaijani"},{code:"bm",name:"Bambara"},{code:"ba",name:"Bashkir"},{code:"eu",name:"Basque"},{code:"be",name:"Belarusian"},{code:"bn",name:"Bengali"},{code:"bh",name:"Bihari"},{code:"bi",name:"Bislama"},{code:"bs",name:"Bosnian"},{code:"br",name:"Breton"},{code:"bg",name:"Bulgarian"},{code:"my",name:"Burmese"},{code:"ca",name:"Catalan; Valencian"},{code:"ch",name:"Chamorro"},{code:"ce",name:"Chechen"},{code:"ny",name:"Chichewa; Chewa; Nyanja"},{code:"zh",name:"Chinese"},{code:"cv",name:"Chuvash"},{code:"kw",name:"Cornish"},{code:"co",name:"Corsican"},{code:"cr",name:"Cree"},{code:"hr",name:"Croatian"},{code:"cs",name:"Czech"},{code:"da",name:"Danish"},{code:"dv",name:"Divehi; Dhivehi; Maldivian;"},{code:"nl",name:"Dutch"},{code:"en",name:"English"},{code:"eo",name:"Esperanto"},{code:"et",name:"Estonian"},{code:"ee",name:"Ewe"},{code:"fo",name:"Faroese"},{code:"fj",name:"Fijian"},{code:"fi",name:"Finnish"},{code:"fr",name:"French"},{code:"ff",name:"Fula; Fulah; Pulaar; Pular"},{code:"gl",name:"Galician"},{code:"ka",name:"Georgian"},{code:"de",name:"German"},{code:"el",name:"Greek, Modern"},{code:"gn",name:"Guaran\xED"},{code:"gu",name:"Gujarati"},{code:"ht",name:"Haitian; Haitian Creole"},{code:"ha",name:"Hausa"},{code:"he",name:"Hebrew (modern)"},{code:"hz",name:"Herero"},{code:"hi",name:"Hindi"},{code:"ho",name:"Hiri Motu"},{code:"hu",name:"Hungarian"},{code:"ia",name:"Interlingua"},{code:"id",name:"Indonesian"},{code:"ie",name:"Interlingue"},{code:"ga",name:"Irish"},{code:"ig",name:"Igbo"},{code:"ik",name:"Inupiaq"},{code:"io",name:"Ido"},{code:"is",name:"Icelandic"},{code:"it",name:"Italian"},{code:"iu",name:"Inuktitut"},{code:"ja",name:"Japanese"},{code:"jv",name:"Javanese"},{code:"kl",name:"Kalaallisut, Greenlandic"},{code:"kn",name:"Kannada"},{code:"kr",name:"Kanuri"},{code:"ks",name:"Kashmiri"},{code:"kk",name:"Kazakh"},{code:"km",name:"Khmer"},{code:"ki",name:"Kikuyu, Gikuyu"},{code:"rw",name:"Kinyarwanda"},{code:"ky",name:"Kirghiz, Kyrgyz"},{code:"kv",name:"Komi"},{code:"kg",name:"Kongo"},{code:"ko",name:"Korean"},{code:"ku",name:"Kurdish"},{code:"kj",name:"Kwanyama, Kuanyama"},{code:"la",name:"Latin"},{code:"lb",name:"Luxembourgish, Letzeburgesch"},{code:"lg",name:"Luganda"},{code:"li",name:"Limburgish, Limburgan, Limburger"},{code:"ln",name:"Lingala"},{code:"lo",name:"Lao"},{code:"lt",name:"Lithuanian"},{code:"lu",name:"Luba-Katanga"},{code:"lv",name:"Latvian"},{code:"gv",name:"Manx"},{code:"mk",name:"Macedonian"},{code:"mg",name:"Malagasy"},{code:"ms",name:"Malay"},{code:"ml",name:"Malayalam"},{code:"mt",name:"Maltese"},{code:"mi",name:"M\u0101ori"},{code:"mr",name:"Marathi (Mar\u0101\u1E6Dh\u012B)"},{code:"mh",name:"Marshallese"},{code:"mn",name:"Mongolian"},{code:"na",name:"Nauru"},{code:"nv",name:"Navajo, Navaho"},{code:"nb",name:"Norwegian Bokm\xE5l"},{code:"nd",name:"North Ndebele"},{code:"ne",name:"Nepali"},{code:"ng",name:"Ndonga"},{code:"nn",name:"Norwegian Nynorsk"},{code:"no",name:"Norwegian"},{code:"ii",name:"Nuosu"},{code:"nr",name:"South Ndebele"},{code:"oc",name:"Occitan"},{code:"oj",name:"Ojibwe, Ojibwa"},{code:"cu",name:"Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic"},{code:"om",name:"Oromo"},{code:"or",name:"Oriya"},{code:"os",name:"Ossetian, Ossetic"},{code:"pa",name:"Panjabi, Punjabi"},{code:"pi",name:"P\u0101li"},{code:"fa",name:"Persian"},{code:"pl",name:"Polish"},{code:"ps",name:"Pashto, Pushto"},{code:"pt",name:"Portuguese"},{code:"qu",name:"Quechua"},{code:"rm",name:"Romansh"},{code:"rn",name:"Kirundi"},{code:"ro",name:"Romanian, Moldavian, Moldovan"},{code:"ru",name:"Russian"},{code:"sa",name:"Sanskrit (Sa\u1E41sk\u1E5Bta)"},{code:"sc",name:"Sardinian"},{code:"sd",name:"Sindhi"},{code:"se",name:"Northern Sami"},{code:"sm",name:"Samoan"},{code:"sg",name:"Sango"},{code:"sr",name:"Serbian"},{code:"gd",name:"Scottish Gaelic; Gaelic"},{code:"sn",name:"Shona"},{code:"si",name:"Sinhala, Sinhalese"},{code:"sk",name:"Slovak"},{code:"sl",name:"Slovene"},{code:"so",name:"Somali"},{code:"st",name:"Southern Sotho"},{code:"es",name:"Spanish; Castilian"},{code:"su",name:"Sundanese"},{code:"sw",name:"Swahili"},{code:"ss",name:"Swati"},{code:"sv",name:"Swedish"},{code:"ta",name:"Tamil"},{code:"te",name:"Telugu"},{code:"tg",name:"Tajik"},{code:"th",name:"Thai"},{code:"ti",name:"Tigrinya"},{code:"bo",name:"Tibetan Standard, Tibetan, Central"},{code:"tk",name:"Turkmen"},{code:"tl",name:"Tagalog"},{code:"tn",name:"Tswana"},{code:"to",name:"Tonga (Tonga Islands)"},{code:"tr",name:"Turkish"},{code:"ts",name:"Tsonga"},{code:"tt",name:"Tatar"},{code:"tw",name:"Twi"},{code:"ty",name:"Tahitian"},{code:"ug",name:"Uighur, Uyghur"},{code:"uk",name:"Ukrainian"},{code:"ur",name:"Urdu"},{code:"uz",name:"Uzbek"},{code:"ve",name:"Venda"},{code:"vi",name:"Vietnamese"},{code:"vo",name:"Volap\xFCk"},{code:"wa",name:"Walloon"},{code:"cy",name:"Welsh"},{code:"wo",name:"Wolof"},{code:"fy",name:"Western Frisian"},{code:"xh",name:"Xhosa"},{code:"yi",name:"Yiddish"},{code:"yo",name:"Yoruba"},{code:"za",name:"Zhuang, Chuang"}],ym=bm.map(s=>({formatted:s.name,code:s.code})),vm=["background_color","description","dir","display","lang","name","orientation","prefer_related_applications","related_applications","scope","short_name","start_url","theme_color","shortcuts","categories","screenshots","iarc_rating_id","icons","share_target","display_override"];function wm(s){return["any","natural","landscape","landscape-primary","landscape-secondary","portrait","portrait-primary","portrait-secondary"].includes(s)}function xm(s){try{return JSON.parse(JSON.stringify(s)),!0}catch{return!1}}async function Sm(s){return new Promise(e=>{let t=[];const i=Object.keys(s);vm.forEach(n=>{i.includes(n)===!1&&t.push(n)}),e(t)})}function km(s){const e=["books","business","education","entertainment","finance","fitness","food","games","government","health","kids","lifestyle","magazines","medical","music","navigation","news","personalization","photo","politics","productivity","security","shopping","social","sports","travel","utilities","weather"];return s.some(t=>e.includes(t))}function Cm(s){let e=s.split("-")[0],t=!1;return ym.forEach(i=>{i.code===e&&(t=!0)}),t}function Am(s){return(s||"0x0").split(" ").map(e=>{const t=e.split("x");return{width:Number.parseInt(t[0]||"0",10),height:Number.parseInt(t[1]||"0",10)}})}function Mm(s,e,t){return Am(s).some(n=>n.width>=e&&n.height>=t)}function eo(s){return Em.includes(s.platform)?jd(s.url)?"valid":"url":"platform"}function jd(s){var e=new RegExp("^((https?:)?\\/\\/)?(?:\\S+(?::\\S*)?@)?(([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\\\#[-a-z\\\\d_]*)?","i");return!!e.test(s)}function $m(s){var e=new RegExp("^(?!www.|(?:http|ftp)s?://|[A-Za-z]:\\|//).*");return!!e.test(s)}function Tm(s){return Pm.includes(s.protocol)||s.protocol.startsWith("web+")||s.protocol.startsWith("web+")?jd(s.url)||$m(s.url)?"valid":"url":"protocol"}const Em=["windows","chrome_web_store","play","itunes","webapp","f-droid","amazon"],Pm=["bitcoin","dat","dweb","ftp","geo","gopher","im","ipfs","ipns","irc","ircs","magnet","mailto","matrix","mms","news","nntp","sip","sms","smsto","ssb","ssh","tel","urn","webcal","wtai","xmpp"],js=["icons","name","short_name","start_url"],_m=["display","background_color","theme_color","orientation","screenshots","shortcuts"],Lm=["iarc_rating_id","related_applications","prefer_related_applications","lang","dir","description","protocol_handlers","display_override","share_target","scope","categories"],Gd=[{infoString:"The name member is a string that represents the name of the web application as it is usually displayed to the user (e.g., amongst a list of other applications, or as a label for an icon)",displayString:"Manifest has name field",category:"required",member:"name",defaultValue:"placeholder name",docsLink:"https://developer.mozilla.org/en-US/docs/Web/Manifest/name",errorString:"name is required and must be a string with a length > 0",quickFix:!0,test:s=>s&&typeof s=="string"&&s.length>0},{infoString:"share_target enables your app to get shared content from other apps",displayString:"Manifest has share_target field",category:"optional",member:"share_target",defaultValue:JSON.stringify({action:"/share-target/",methods:["GET"],params:{title:"title",text:"text",url:"url"}}),docsLink:"https://web.dev/web-share-target/",errorString:"share_target must be an object",quickFix:!0,test:s=>s&&typeof s=="object"},{infoString:"The icons member specifies an array of objects representing image files that can serve as application icons for different contexts.",displayString:"Manifest has icons field",category:"required",member:"icons",defaultValue:JSON.stringify([{src:"https://www.pwabuilder.com/assets/icons/icon_192.png",sizes:"192x192",type:"image/png",purpose:"any"},{src:"https://www.pwabuilder.com/assets/icons/icon_512.png",sizes:"512x512",type:"image/png",purpose:"maskable"}]),docsLink:"https://developer.mozilla.org/en-US/docs/Web/Manifest/icons",errorString:"icons is required and must be non-empty array",quickFix:!0,test:s=>!!(s&&Array.isArray(s)&&s.length>0)},{infoString:"The icons member specifies an array of objects representing image files that can serve as application icons for different contexts.",displayString:"Icons have at least one icon with purpose any",category:"recommended",member:"icons",defaultValue:JSON.stringify([{src:"https://www.pwabuilder.com/assets/icons/icon_192.png",sizes:"192x192",type:"image/png",purpose:"any"},{src:"https://www.pwabuilder.com/assets/icons/icon_512.png",sizes:"512x512",type:"image/png",purpose:"maskable"}]),docsLink:"https://developer.mozilla.org/en-US/docs/Web/Manifest/icons",errorString:"Need at least one icon with purpose set to any",quickFix:!0,test:s=>s&&Array.isArray(s)&&s.length>0?!!s.find(i=>i.purpose==="any"):!1},{infoString:"The icons member specifies an array of objects representing image files that can serve as application icons for different contexts.",displayString:"Icons have at least one PNG icon 512x512 or larger",category:"required",member:"icons",defaultValue:JSON.stringify([{src:"https://www.pwabuilder.com/assets/icons/icon_192.png",sizes:"192x192",type:"image/png",purpose:"any"},{src:"https://www.pwabuilder.com/assets/icons/icon_512.png",sizes:"512x512",type:"image/png",purpose:"maskable"}]),docsLink:"https://developer.mozilla.org/en-US/docs/Web/Manifest/icons",errorString:"Need at least one PNG icon 512x512 or larger",quickFix:!1,test:s=>s&&Array.isArray(s)&&s.length>0?!!s.find(i=>Mm(i.sizes,512,512)&&(i.type==="image/png"||i.src.endsWith(".png"))):!1},{infoString:"The icons member specifies an array of objects representing image files that can serve as application icons for different contexts.",displayString:"Icons should have one icon with purpose set to any, and one for maskable",category:"required",member:"icons",defaultValue:JSON.stringify([{src:"https://www.pwabuilder.com/assets/icons/icon_192.png",sizes:"192x192",type:"image/png",purpose:"any"},{src:"https://www.pwabuilder.com/assets/icons/icon_512.png",sizes:"512x512",type:"image/png",purpose:"maskable"}]),docsLink:"https://developer.mozilla.org/en-US/docs/Web/Manifest/icons",errorString:"Seperate Icons are needed for both maskable and any",quickFix:!0,test:s=>s&&Array.isArray(s)&&s.length>0?!s.find(i=>i.purpose==="any maskable"):!1},{infoString:"The scope member is a string that represents the name of the web application as it is usually displayed to the user (e.g., amongst a list of other applications, or as a label for an icon)",displayString:"Manifest has a scope field",category:"optional",member:"scope",defaultValue:"/",docsLink:"https://developer.mozilla.org/en-US/docs/Web/Manifest/scope",errorString:"scope must be a string with a length > 0",quickFix:!0,test:s=>s&&typeof s=="string"&&s.length>0},{member:"name",testName:"whitespace",category:"required",displayString:"Name field doesn't have leading or trailing whitespace",errorString:"name should not have any leading or trailing whitespace",quickFix:!0,test:s=>s.trim()===s},{infoString:"The short_name member is a string that represents the name of the web application displayed to the user if there is not enough space to display name. This name will show in the start menu on Windows and the homescreen on Android.",displayString:"Short name is the correct minimum length (2 characters)",category:"required",member:"short_name",defaultValue:"placeholder",docsLink:"https://developer.mozilla.org/en-US/docs/Web/Manifest/short_name",errorString:"short_name is required and must be a string with a length >= 2",quickFix:!0,test:s=>s&&s.length>=2},{member:"short_name",displayString:"Short name field doesn't have leading or trailing whitespace",testName:"whitespace",category:"required",errorString:"short_name should not have any leading or trailing whitespace",quickFix:!0,test:s=>s.trim()===s},{infoString:"The start_url member is a string that represents the start URL of the web application \u2014 the preferred URL that should be loaded when the user launches the web application",displayString:"Manifest has start url field",category:"required",member:"start_url",defaultValue:"/",docsLink:"https://developer.mozilla.org/en-US/docs/Web/Manifest/start_url",errorString:"start_url is required and must be a string with a length > 0",quickFix:!0,test:s=>s&&typeof s=="string"&&s.length>0},{infoString:"The display member is a string that determines the developers' preferred display mode for the website. The display mode changes how much of browser UI is shown to the user and can range from browser (when the full browser window is shown) to fullscreen (when the app is fullscreened).",displayString:"Manifest has display field",category:"recommended",member:"display",defaultValue:"standalone",docsLink:"https://developer.mozilla.org/en-US/docs/Web/Manifest/display",errorString:"display must be one of the following strings: fullscreen, standalone, minimal-ui, browser",quickFix:!0,test:s=>["fullscreen","standalone","minimal-ui","browser"].includes(s)},{infoString:"The background_color member defines a placeholder background color for the application page to display before its stylesheet is loaded.",displayString:"Manifest has hex encoded background color",category:"recommended",testRequired:!0,member:"background_color",defaultValue:"#000000",docsLink:"https://developer.mozilla.org/en-US/docs/Web/Manifest/background_color",errorString:"background_color should be a valid hex color",quickFix:!0,test:s=>s?/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(s):!1},{infoString:"The theme_color member is a string that defines the default theme color for the application.",displayString:"Manifest has hex encoded theme color",category:"recommended",testRequired:!0,member:"theme_color",defaultValue:"#000000",docsLink:"https://developer.mozilla.org/en-US/docs/Web/Manifest/theme_color",errorString:"theme_color should be a valid hex color",quickFix:!0,test:s=>s?/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(s):!1},{infoString:"The orientation mode changes the default orientation of the app. For example, if set to 'portrait', the app will be displayed in landscape mode by default.",displayString:"Manifest has orientation field",category:"recommended",member:"orientation",defaultValue:"any",docsLink:"https://developer.mozilla.org/en-US/docs/Web/Manifest/orientation",errorString:"orientation must be one of the following strings: any, natural, landscape, landscape-primary, landscape-secondary, portrait, portrait-primary, portrait-secondary",quickFix:!0,test:s=>wm(s)},{infoString:"The screenshots member defines an array of screenshots intended to showcase the application.",displayString:"Manifest has screenshots field",category:"recommended",member:"screenshots",defaultValue:JSON.stringify([{src:"https://www.pwabuilder.com/assets/screenshots/screen1.png",sizes:"2880x1800",type:"image/png",description:"PWABuilder Home Screen"},{src:"https://www.pwabuilder.com/assets/screenshots/screen2.png",sizes:"2880/1800",type:"image/png",description:"PWABuilder Report Card"},{src:"https://www.pwabuilder.com/assets/screenshots/screen3.png",sizes:"2880x1800",type:"image/png",description:"Manifest information on the Report Card"}]),docsLink:"https://developer.mozilla.org/en-US/docs/Web/Manifest/screenshots",errorString:"screenshots must be an array with a length > 0",quickFix:!0,test:s=>!!(s&&Array.isArray(s)&&s.length>0)},{infoString:"The shortcuts member defines an array of shortcuts or links to key tasks or pages within a web app. Shortcuts will show as jumplists on Windows and on the home screen on Android.",displayString:"Manifest has shortcuts field",category:"recommended",member:"shortcuts",defaultValue:[],docsLink:"https://developer.mozilla.org/en-US/docs/Web/Manifest/shortcuts",errorString:"shortcuts should be a non-empty array and should not include webp images",quickFix:!0,test:s=>(s&&Array.isArray(s))===!0?!s.some(i=>i.type==="image/webp"):!1},{infoString:"The iarc_rating_id member is a string that represents the International Age Rating Coalition (IARC) certification code of the web application. It is intended to be used to determine which ages the web application is appropriate for.",displayString:"Manifest has IARC Rating ID field",category:"optional",member:"iarc_rating_id",defaultValue:"",docsLink:"https://developer.mozilla.org/en-US/docs/Web/Manifest/iarc_rating_id",quickFix:!0,errorString:"iarc_rating_id must be a string with a length > 0",test:s=>s&&typeof s=="string"&&s.length>0},{infoString:"The related_applications field is an array of objects specifying native applications that are installable by, or accessible to, the underlying platform \u2014 for example, a platform-specific (native) Windows application.",displayString:"Manifest has related applications field",category:"optional",member:"related_applications",defaultValue:[],docsLink:"https://developer.mozilla.org/en-US/docs/Web/Manifest/related_applications",quickFix:!0,test:s=>s&&Array.isArray(s),errorString:"related_applications should be a non-empty array"},{infoString:"The prefer_related_applications member is a boolean value that specifies that applications listed in related_applications should be preferred over the web application. If the prefer_related_applications member is set to true, the user agent might suggest installing one of the related applications instead of this web app.",displayString:"Manifest properly sets prefer related applications field",category:"optional",testRequired:!0,member:"prefer_related_applications",defaultValue:!1,docsLink:"https://developer.mozilla.org/en-US/docs/Web/Manifest/prefer_related_applications",quickFix:!1,test:s=>typeof s=="boolean",errorString:"prefer_related_applications should be set to a boolean value"},{infoString:"The categories member is an array of strings that represent the categories of the web application.",displayString:"Manifest has categories field",category:"optional",member:"categories",defaultValue:[],docsLink:"https://developer.mozilla.org/en-US/docs/Web/Manifest/categories",quickFix:!0,test:s=>s?km(s):!1,errorString:"categories should be a non-empty array"},{member:"lang",displayString:"Manifest specifies a language",infoString:"The lang member is a string that represents the default language of your PWA.",category:"optional",defaultValue:"en",docsLink:"https://developer.mozilla.org/en-US/docs/Web/Manifest/lang",errorString:"lang should be set to a valid language code",quickFix:!0,test:s=>s&&typeof s=="string"&&s.length>0&&Cm(s)},{member:"dir",displayString:"Manifest specifies a default direction of text",infoString:"The dir member is a string that represents the default text direction of your PWA.",errorString:"dir must be one of the following strings: ltr, rtl, or auto",category:"optional",defaultValue:"ltr",docsLink:"https://developer.mozilla.org/en-US/docs/Web/Manifest/dir",quickFix:!0,test:s=>s&&typeof s=="string"&&s.length>0&&(s==="ltr"||s==="rtl"||s==="auto")},{member:"description",displayString:"Manifest has description field",infoString:"The description member is a string that represents the description of your PWA.",category:"optional",defaultValue:"",docsLink:"https://developer.mozilla.org/en-US/docs/Web/Manifest/description",errorString:"description must be a string with a length > 0",quickFix:!0,test:s=>s&&typeof s=="string"&&s.length>0},{member:"description",displayString:"Description field doesn't have leading or trailing whitespace",testName:"whitespace",category:"required",errorString:"description should not have any leading or trailing whitespace",quickFix:!0,test:s=>s.trim()===s},{member:"protocol_handlers",displayString:"Manifest has protocol handlers field",infoString:"The protocol_handlers member specifies an array of objects that are protocols which this web app can register and handle. Protocol handlers register the application in an OS's application preferences; the registration associates a specific application with the given protocol scheme. For example, when using the protocol handler mailto:// on a web page, registered email applications open.",category:"optional",defaultValue:[],docsLink:"https://developer.mozilla.org/en-US/docs/Web/Manifest/protocol_handlers",quickFix:!0,errorString:"protocol_handlers should be a non-empty array",test:s=>s&&Array.isArray(s)},{member:"display_override",displayString:"Manifest has display override field",infoString:"Its value is an array of display modes that are considered in-order, and the first supported display mode is applied.",category:"optional",defaultValue:[],docsLink:"https://developer.mozilla.org/en-US/docs/Web/Manifest/display_override",quickFix:!0,errorString:"display_override must be a non-empty array",test:s=>s&&Array.isArray(s)},{member:"id",displayString:"Manifest has an app ID",infoString:"The id member is a string that represents the unique identifier of your PWA to the browser.",category:"recommended",defaultValue:"/",docsLink:"https://developer.chrome.com/blog/pwa-manifest-id",errorString:"id must be a string with a length > 0",quickFix:!0,test:s=>s&&typeof s=="string"&&s.length>0},{member:"launch_handler",displayString:"Manifest has launch handler field",infoString:"The launch_handler member specifies how your app will launch when navigated to via URL, share_target etc.",category:"recommended",defaultValue:"",docsLink:"https://developer.chrome.com/docs/web-platform/launch-handler/",errorString:"launch_handler should be defined",quickFix:!1,test:s=>s&&typeof s=="object"}];async function Rm(s){return new Promise(e=>{let t=[];Object.keys(s).forEach(n=>{Gd.forEach(async r=>{r.member===n&&r.test&&(await r.test(s[n])?(r.valid=!0,t.push(r)):(r.valid=!1,t.push(r)))})}),e(t)})}async function Om(s,e){return new Promise(async t=>{let i=!0,n=[];Gd.forEach(r=>{if(r.member===s&&r.test){const o=r.test(e);o||n.push(r.errorString),i=i&&o}}),i&&t({valid:i}),t({valid:i,errors:n})})}globalThis&&globalThis.__asyncValues;async function Dm(s){return new Promise(async(e,t)=>{xm(s)===!1&&t("Manifest is not valid JSON");let n=await Rm(s);e(n)})}async function ut(s,e){return new Promise(async(t,i)=>{try{const n=await Om(s,e);t(n)}catch(n){i(n)}})}async function Im(s){return new Promise(async e=>{const t=await Sm(s);t&&t.length>0?e(t):e([])})}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const es=cm(class extends dm{constructor(s){var e;if(super(s),s.type!==fm.ATTRIBUTE||s.name!=="style"||((e=s.strings)===null||e===void 0?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(s){return Object.keys(s).reduce((e,t)=>{const i=s[t];return i==null?e:e+`${t=t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(s,[e]){const{style:t}=s.element;if(this.vt===void 0){this.vt=new Set;for(const i in e)this.vt.add(i);return this.render(e)}this.vt.forEach(i=>{e[i]==null&&(this.vt.delete(i),i.includes("-")?t.removeProperty(i):t[i]="")});for(const i in e){const n=e[i];n!=null&&(this.vt.add(i),i.includes("-")?t.setProperty(i,n):t[i]=n)}return um}});var Bm=Object.defineProperty,Nm=Object.getOwnPropertyDescriptor,Ji=(s,e,t,i)=>{for(var n=i>1?void 0:i?Nm(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&Bm(e,t,n),n};let li=class extends Vs{constructor(){super(),this.field="",this.card="",this.fix="",this.status="",this.displayString=""}static get styles(){return[ve`
      #item-wrapper {
        display: flex;
        column-gap: .5em;
        align-items: center;
        font-size: 16px;
        background-color: #F1F2FA;
        border-radius: 10px;
        padding: .5em;
        margin-bottom: 10px;
      }

      #item-wrapper:hover {
        cursor: pointer;
      }

      #item-wrapper img {
        height: 16px;
      }

      #item-wrapper p {
        margin: 0;
        vertical-align: middle;
        line-height: 16px;
        padding-top: 3px;
      }

      /* < 480px */
      ${Xa(ve`

      `)}
      /* 480px - 639px */
      ${Za(ve`

      `)}
      /* 640px - 1023px */
      ${qd(ve`

      `)}
      /*1024px - 1365px*/
      ${Hd(ve`
      `)}
      /* > 1920px */
      ${Vd(ve`

      `)}
    `]}bubbleEvent(){let s=new CustomEvent("todo-clicked",{detail:{field:this.field,card:this.card,fix:this.fix,displayString:this.displayString,errorString:this.fix}});this.dispatchEvent(s)}render(){return g`
      <div id="item-wrapper" @click=${()=>this.bubbleEvent()}>
        ${this.status==="red"?g`<img src=${Fm} alt="yield result icon"/>`:this.status==="retest"?g`<img src=${Um} style="color: black" alt="retest site icon"/>`:g`<img src=${zm} alt="yield result icon"/>`}

        <p>${this.fix.split("~").length>1?this.fix.split("~").join(" "+this.field+" "):this.fix} 
        </p>
      </div>
    `}};Ji([Ae({type:String})],li.prototype,"field",2);Ji([Ae({type:String})],li.prototype,"card",2);Ji([Ae({type:String})],li.prototype,"fix",2);Ji([Ae({type:String})],li.prototype,"status",2);Ji([Ae({type:String})],li.prototype,"displayString",2);li=Ji([Hs("todo-item")],li);const zm="/assets/new/yield.svg",Fm="/assets/new/stop.svg",Um="/assets/new/retest-black.svg";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const On=window,el=On.ShadowRoot&&(On.ShadyCSS===void 0||On.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,tl=Symbol(),Hl=new WeakMap;class Kd{constructor(e,t,i){if(this._$cssResult$=!0,i!==tl)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(el&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Hl.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Hl.set(t,e))}return e}toString(){return this.cssText}}const Wm=s=>new Kd(typeof s=="string"?s:s+"",void 0,tl),Vt=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((i,n,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+s[r+1],s[0]);return new Kd(t,s,tl)},qm=(s,e)=>{el?s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),n=On.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=t.cssText,s.appendChild(i)})},Vl=el?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Wm(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var to;const Wn=window,jl=Wn.trustedTypes,Hm=jl?jl.emptyScript:"",Gl=Wn.reactiveElementPolyfillSupport,Wo={toAttribute(s,e){switch(e){case Boolean:s=s?Hm:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},Yd=(s,e)=>e!==s&&(e==e||s==s),io={attribute:!0,type:String,converter:Wo,reflect:!1,hasChanged:Yd};class vi extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;(t=this.h)!==null&&t!==void 0||(this.h=[]),this.h.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const n=this._$Ep(i,t);n!==void 0&&(this._$Ev.set(n,i),e.push(n))}),e}static createProperty(e,t=io){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,n=this.getPropertyDescriptor(e,i,t);n!==void 0&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(n){const r=this[e];this[t]=n,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||io}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const n of i)this.createProperty(n,t[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const n of i)t.unshift(Vl(n))}else e!==void 0&&t.push(Vl(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return qm(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=io){var n;const r=this.constructor._$Ep(e,i);if(r!==void 0&&i.reflect===!0){const o=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:Wo).toAttribute(t,i.type);this._$El=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(e,t){var i;const n=this.constructor,r=n._$Ev.get(e);if(r!==void 0&&this._$El!==r){const o=n.getPropertyOptions(r),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:Wo;this._$El=r,this[r]=a.fromAttribute(t,o.type),this._$El=null}}requestUpdate(e,t,i){let n=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||Yd)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,r)=>this[r]=n),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostUpdate)===null||r===void 0?void 0:r.call(n)}),this.update(i)):this._$Ek()}catch(n){throw t=!1,this._$Ek(),n}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}vi.finalized=!0,vi.elementProperties=new Map,vi.elementStyles=[],vi.shadowRootOptions={mode:"open"},Gl==null||Gl({ReactiveElement:vi}),((to=Wn.reactiveElementVersions)!==null&&to!==void 0?to:Wn.reactiveElementVersions=[]).push("1.4.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var so;const qn=window,Li=qn.trustedTypes,Kl=Li?Li.createPolicy("lit-html",{createHTML:s=>s}):void 0,Et=`lit$${(Math.random()+"").slice(9)}$`,Jd="?"+Et,Vm=`<${Jd}>`,Ri=document,xs=(s="")=>Ri.createComment(s),Ss=s=>s===null||typeof s!="object"&&typeof s!="function",Xd=Array.isArray,jm=s=>Xd(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",ts=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Yl=/-->/g,Jl=/>/g,Jt=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Xl=/'/g,Zl=/"/g,Zd=/^(?:script|style|textarea|title)$/i,Gm=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),O=Gm(1),Oi=Symbol.for("lit-noChange"),ae=Symbol.for("lit-nothing"),Ql=new WeakMap,Km=(s,e,t)=>{var i,n;const r=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let o=r._$litPart$;if(o===void 0){const a=(n=t==null?void 0:t.renderBefore)!==null&&n!==void 0?n:null;r._$litPart$=o=new Gs(e.insertBefore(xs(),a),a,void 0,t!=null?t:{})}return o._$AI(s),o},Si=Ri.createTreeWalker(Ri,129,null,!1),Ym=(s,e)=>{const t=s.length-1,i=[];let n,r=e===2?"<svg>":"",o=ts;for(let l=0;l<t;l++){const h=s[l];let c,d,f=-1,u=0;for(;u<h.length&&(o.lastIndex=u,d=o.exec(h),d!==null);)u=o.lastIndex,o===ts?d[1]==="!--"?o=Yl:d[1]!==void 0?o=Jl:d[2]!==void 0?(Zd.test(d[2])&&(n=RegExp("</"+d[2],"g")),o=Jt):d[3]!==void 0&&(o=Jt):o===Jt?d[0]===">"?(o=n!=null?n:ts,f=-1):d[1]===void 0?f=-2:(f=o.lastIndex-d[2].length,c=d[1],o=d[3]===void 0?Jt:d[3]==='"'?Zl:Xl):o===Zl||o===Xl?o=Jt:o===Yl||o===Jl?o=ts:(o=Jt,n=void 0);const p=o===Jt&&s[l+1].startsWith("/>")?" ":"";r+=o===ts?h+Vm:f>=0?(i.push(c),h.slice(0,f)+"$lit$"+h.slice(f)+Et+p):h+Et+(f===-2?(i.push(void 0),l):p)}const a=r+(s[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Kl!==void 0?Kl.createHTML(a):a,i]};class ks{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let r=0,o=0;const a=e.length-1,l=this.parts,[h,c]=Ym(e,t);if(this.el=ks.createElement(h,i),Si.currentNode=this.el.content,t===2){const d=this.el.content,f=d.firstChild;f.remove(),d.append(...f.childNodes)}for(;(n=Si.nextNode())!==null&&l.length<a;){if(n.nodeType===1){if(n.hasAttributes()){const d=[];for(const f of n.getAttributeNames())if(f.endsWith("$lit$")||f.startsWith(Et)){const u=c[o++];if(d.push(f),u!==void 0){const p=n.getAttribute(u.toLowerCase()+"$lit$").split(Et),m=/([.?@])?(.*)/.exec(u);l.push({type:1,index:r,name:m[2],strings:p,ctor:m[1]==="."?Xm:m[1]==="?"?Qm:m[1]==="@"?eg:Mr})}else l.push({type:6,index:r})}for(const f of d)n.removeAttribute(f)}if(Zd.test(n.tagName)){const d=n.textContent.split(Et),f=d.length-1;if(f>0){n.textContent=Li?Li.emptyScript:"";for(let u=0;u<f;u++)n.append(d[u],xs()),Si.nextNode(),l.push({type:2,index:++r});n.append(d[f],xs())}}}else if(n.nodeType===8)if(n.data===Jd)l.push({type:2,index:r});else{let d=-1;for(;(d=n.data.indexOf(Et,d+1))!==-1;)l.push({type:7,index:r}),d+=Et.length-1}r++}}static createElement(e,t){const i=Ri.createElement("template");return i.innerHTML=e,i}}function Di(s,e,t=s,i){var n,r,o,a;if(e===Oi)return e;let l=i!==void 0?(n=t._$Cl)===null||n===void 0?void 0:n[i]:t._$Cu;const h=Ss(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),h===void 0?l=void 0:(l=new h(s),l._$AT(s,t,i)),i!==void 0?((o=(a=t)._$Cl)!==null&&o!==void 0?o:a._$Cl=[])[i]=l:t._$Cu=l),l!==void 0&&(e=Di(s,l._$AS(s,e.values),l,i)),e}class Jm{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:i},parts:n}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:Ri).importNode(i,!0);Si.currentNode=r;let o=Si.nextNode(),a=0,l=0,h=n[0];for(;h!==void 0;){if(a===h.index){let c;h.type===2?c=new Gs(o,o.nextSibling,this,e):h.type===1?c=new h.ctor(o,h.name,h.strings,this,e):h.type===6&&(c=new tg(o,this,e)),this.v.push(c),h=n[++l]}a!==(h==null?void 0:h.index)&&(o=Si.nextNode(),a++)}return r}m(e){let t=0;for(const i of this.v)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class Gs{constructor(e,t,i,n){var r;this.type=2,this._$AH=ae,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$C_=(r=n==null?void 0:n.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$C_}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Di(this,e,t),Ss(e)?e===ae||e==null||e===""?(this._$AH!==ae&&this._$AR(),this._$AH=ae):e!==this._$AH&&e!==Oi&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.k(e):jm(e)?this.O(e):this.$(e)}S(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}$(e){this._$AH!==ae&&Ss(this._$AH)?this._$AA.nextSibling.data=e:this.k(Ri.createTextNode(e)),this._$AH=e}T(e){var t;const{values:i,_$litType$:n}=e,r=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=ks.createElement(n.h,this.options)),n);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.m(i);else{const o=new Jm(r,this),a=o.p(this.options);o.m(i),this.k(a),this._$AH=o}}_$AC(e){let t=Ql.get(e.strings);return t===void 0&&Ql.set(e.strings,t=new ks(e)),t}O(e){Xd(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,n=0;for(const r of e)n===t.length?t.push(i=new Gs(this.S(xs()),this.S(xs()),this,this.options)):i=t[n],i._$AI(r),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$C_=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class Mr{constructor(e,t,i,n,r){this.type=1,this._$AH=ae,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=ae}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,n){const r=this.strings;let o=!1;if(r===void 0)e=Di(this,e,t,0),o=!Ss(e)||e!==this._$AH&&e!==Oi,o&&(this._$AH=e);else{const a=e;let l,h;for(e=r[0],l=0;l<r.length-1;l++)h=Di(this,a[i+l],t,l),h===Oi&&(h=this._$AH[l]),o||(o=!Ss(h)||h!==this._$AH[l]),h===ae?e=ae:e!==ae&&(e+=(h!=null?h:"")+r[l+1]),this._$AH[l]=h}o&&!n&&this.P(e)}P(e){e===ae?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class Xm extends Mr{constructor(){super(...arguments),this.type=3}P(e){this.element[this.name]=e===ae?void 0:e}}const Zm=Li?Li.emptyScript:"";class Qm extends Mr{constructor(){super(...arguments),this.type=4}P(e){e&&e!==ae?this.element.setAttribute(this.name,Zm):this.element.removeAttribute(this.name)}}class eg extends Mr{constructor(e,t,i,n,r){super(e,t,i,n,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=Di(this,e,t,0))!==null&&i!==void 0?i:ae)===Oi)return;const n=this._$AH,r=e===ae&&n!==ae||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==ae&&(n===ae||r);r&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class tg{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Di(this,e)}}const eh=qn.litHtmlPolyfillSupport;eh==null||eh(ks,Gs),((so=qn.litHtmlVersions)!==null&&so!==void 0?so:qn.litHtmlVersions=[]).push("2.3.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var no,ro;class Je extends vi{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=Km(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return Oi}}Je.finalized=!0,Je._$litElement$=!0,(no=globalThis.litElementHydrateSupport)===null||no===void 0||no.call(globalThis,{LitElement:Je});const th=globalThis.litElementPolyfillSupport;th==null||th({LitElement:Je});((ro=globalThis.litElementVersions)!==null&&ro!==void 0?ro:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jt=s=>e=>typeof e=="function"?((t,i)=>(customElements.define(t,i),i))(s,e):((t,i)=>{const{kind:n,elements:r}=i;return{kind:n,elements:r,finisher(o){customElements.define(t,o)}}})(s,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ig=(s,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,s)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,s)}};function Ne(s){return(e,t)=>t!==void 0?((i,n,r)=>{n.constructor.createProperty(r,i)})(s,e,t):ig(s,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function q(s){return Ne({...s,state:!0})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var oo;((oo=window.HTMLSlotElement)===null||oo===void 0?void 0:oo.prototype.assignedElements)!=null;function ee(s,e){return new CustomEvent("errorInTab",{detail:{areThereErrors:s,panel:e},bubbles:!0,composed:!0})}function we(s,e){e.parentNode.insertBefore(s,e.nextSibling)}var $r=globalThis&&globalThis.__decorate||function(s,e,t,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,i);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(r=(n<3?o(r):n>3?o(e,t,r):o(e,t))||r);return n>3&&r&&Object.defineProperty(e,t,r),r};const dn="#000000";let qo=!1,ih=["name","short_name","description","background_color","theme_color"],Cs=class extends Je{constructor(){super(),this.manifest={},this.bgText="",this.themeText="",this.shouldValidateAllFields=!0,this.errorCount=0}static get styles(){return Vt`

      :host {
        --sl-focus-ring-width: 3px;
        --sl-input-focus-ring-color: #4f3fb670;
        --sl-focus-ring: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
        --sl-input-border-color-focus: #4F3FB6ac;
      }

      sl-input::part(base),
      sl-textarea::part(base),
      sl-menu-item::part(base),
      sl-color-picker::part(base),
      sl-button::part(base) {
        --sl-input-font-size-medium: 16px;
        --sl-font-size-medium: 16px;
        --sl-input-height-medium: 3em;
        --sl-button-font-size-medium: 16px;
      }
      sl-input::part(base),
      sl-textarea::part(base){
        background-color: #fbfbfb;
      }
      #form-holder {
        display: flex;
        flex-direction: column;
        row-gap: 1em;
      }
      .form-row {
        display: flex;
        column-gap: 1em;
      }
      .form-row h3 {
        font-size: 18px;
        margin: 0;
      }
      .form-row p {
        font-size: 14px;
        margin: 0;
      }
      .long .form-field {
        width: 100%;
      }
      .form-field {
        width: 50%;
        row-gap: .25em;
        display: flex;
        flex-direction: column;
      }
      .field-header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        column-gap: 5px;
      }

      .header-left{
        display: flex;
        align-items: center;
        column-gap: 5px;
      }

      .color_field {
        display: flex;
        flex-direction: column;
      }
      .color-holder {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .toolTip {
        visibility: hidden;
        width: 150px;
        background: black;
        color: white;
        font-weight: 500;
        text-align: center;
        border-radius: 6px;
        padding: .75em;
        /* Position the tooltip */
        position: absolute;
        top: 20px;
        left: -25px;
        z-index: 1;
        box-shadow: 0px 2px 20px 0px #0000006c;
      }
      .field-header a {
        display: flex;
        align-items: center;
        position: relative;
        color: black;
      }
      a:hover .toolTip {
        visibility: visible;
      }
      a:visited, a:focus {
        color: black;
      }
      .color-section {
        display: flex;
        gap: .5em;
        align-items: center;
        justify-content: flex-start;
      }

      .color-section p {
        font-size: 18px;
        color: #808080;
        display: flex;
        align-items: center;
        height: fit-content;
      }

      sl-color-picker {
        --grid-width: 315px;
        height: 25px;
      }

      sl-color-picker::part(trigger){
        border-radius: 0;
        height: 25px;
        width: 75px;
        display: flex;
      }
      sl-menu {
        width: 100%;
      }

      .error-color-field{
        border: 1px solid #eb5757 !important;
      }

      .error::part(base){
        border-color: #eb5757;
        --sl-input-focus-ring-color: #eb575770;
        --sl-focus-ring-width: 3px;
        --sl-focus-ring: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
        --sl-input-border-color-focus: #eb5757ac;
      }

      .error::part(control){
        border-color: #eb5757;
      }


      @media(max-width: 765px){
        .form-row:not(.color-row) {
          flex-direction: column;
          row-gap: 1em;
        }
        .form-row:not(.color-row) .form-field {
          width: 100%;
        }
      }

      @media(max-width: 600px){

      }

      @media(max-width: 480px){
        sl-input::part(base),
        sl-menu-item::part(base) {
          --sl-input-font-size-medium: 14px;
          --sl-font-size-medium: 14px;
          --sl-input-height-medium: 2.5em;
        }

        .form-row p {
          font-size: 12px;
        }

        .form-row h3 {
          font-size: 16px;
        }

        .color-row {
          gap: 1em;
          flex-direction: column;
        }

        .color-row .form-field {
          width: 100%;
        }
      }
    `}async updated(e){qo&&(qo=!1,this.initMissingColors(),this.requestValidateAllFields())}async requestValidateAllFields(){if(this.shouldValidateAllFields=!0,!this.validationPromise)for(;this.shouldValidateAllFields;)this.shouldValidateAllFields=!1,this.validationPromise=this.validateAllFields(),await this.validationPromise}async validateAllFields(){for(let e=0;e<ih.length;e++){let t=ih[e];if(t in this.manifest){const i=await ut(t,this.manifest[t]);if(!i.valid){let r=this.shadowRoot.querySelector('[data-field="'+t+'"]');if(t==="theme_color"||t==="background_color"){if(this.shadowRoot.querySelector(`.${t}-error-div`)){let o=this.shadowRoot.querySelector(`.${t}-error-div`);o.parentElement.removeChild(o)}if(i.errors){let o=document.createElement("div");o.classList.add(`${t}-error-div`),i.errors.forEach(a=>{let l=document.createElement("p");l.innerText=a,l.style.color="#eb5757",o.append(l),this.errorCount++}),we(o,r.parentNode.parentNode.lastElementChild)}r.classList.add("error-color-field")}else{if(this.shadowRoot.querySelector(`.${t}-error-div`)){let o=this.shadowRoot.querySelector(`.${t}-error-div`);o.parentElement.removeChild(o)}if(i.errors){let o=document.createElement("div");o.classList.add(`${t}-error-div`),i.errors.forEach(a=>{let l=document.createElement("p");l.innerText=a,l.style.color="#eb5757",o.append(l),this.errorCount++}),we(o,r.parentNode.lastElementChild)}}r.classList.add("error")}}else if(js.includes(t)){let i=this.shadowRoot.querySelector('[data-field="'+t+'"]');if(i.classList.add("error"),this.shadowRoot.querySelector(`.${t}-error-div`)){let o=this.shadowRoot.querySelector(`.${t}-error-div`);o.parentElement.removeChild(o)}let n=document.createElement("div");n.classList.add(`${t}-error-div`);let r=document.createElement("p");r.innerText=`${t} is required and is missing from your manifest.`,r.style.color="#eb5757",n.append(r),this.errorCount++,we(n,i.parentNode.lastElementChild)}}this.validationPromise=void 0,this.errorCount==0?this.dispatchEvent(ee(!1,"info")):this.dispatchEvent(ee(!0,"info"))}initMissingColors(){if(!this.manifest.theme_color){let e=new CustomEvent("manifestUpdated",{detail:{field:"theme_color",change:"#000000"},bubbles:!0,composed:!0});this.dispatchEvent(e)}if(!this.manifest.background_color){let e=new CustomEvent("manifestUpdated",{detail:{field:"background_color",change:"#000000"},bubbles:!0,composed:!0});this.dispatchEvent(e)}}async handleInputChange(e){this.validationPromise&&await this.validationPromise;const t=e.target;let i=t.value;const n=t.dataset.field;let r=new CustomEvent("fieldChangeAttempted",{detail:{field:n},bubbles:!0,composed:!0});this.dispatchEvent(r);const o=await ut(n,i);if(o.valid){let l=new CustomEvent("manifestUpdated",{detail:{field:n,change:i},bubbles:!0,composed:!0});if(this.dispatchEvent(l),t.classList.contains("error")){t.classList.toggle("error"),this.errorCount--;let h=t.parentNode.lastElementChild;t.parentNode.removeChild(h)}}else{if(this.shadowRoot.querySelector(`.${n}-error-div`)){let l=this.shadowRoot.querySelector(`.${n}-error-div`);l.parentElement.removeChild(l)}if(o.errors){let l=document.createElement("div");l.classList.add(`${n}-error-div`),o.errors.forEach(h=>{let c=document.createElement("p");c.innerText=h,c.style.color="#eb5757",l.append(c),this.errorCount++}),we(l,t.parentNode.lastElementChild)}t.classList.add("error")}this.errorCount==0?this.dispatchEvent(ee(!1,"info")):this.dispatchEvent(ee(!0,"info"))}handleColorSwitch(e){let t=this.shadowRoot.getElementById(e+"_picker"),i=t.value,n=new CustomEvent("manifestUpdated",{detail:{field:e,change:i},bubbles:!0,composed:!0});this.dispatchEvent(n);let r=new CustomEvent("fieldChangeAttempted",{detail:{field:e},bubbles:!0,composed:!0});if(this.dispatchEvent(r),t.classList.contains("error-color-field")){t.classList.toggle("error-color-field"),this.errorCount--;let o=t.parentNode.parentNode.lastElementChild;t.parentNode.parentNode.removeChild(o)}this.errorCount==0&&this.dispatchEvent(ee(!1,"info"))}render(){var e,t;return O`
      <div id="form-holder">
        <div class="form-row">
          <div class="form-field">
            <div class="field-header">
              <div class="header-left">
                <h3>Name</h3>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/Manifest/name"
                  target="_blank"
                  rel="noopener"
                >
                  <img src="/assets/tooltip.svg" alt="info circle tooltip" />
                  <p class="toolTip">
                    Click for more info on the name option in your manifest.
                  </p>
                </a>
              </div>

              <p>(required)</p>
            </div>
            <p>The name of your app as displayed to the user</p>
            <sl-input placeholder="PWA Name" value=${this.manifest.name||""} data-field="name" @sl-change=${this.handleInputChange}></sl-input>
          </div>
          <div class="form-field">
            <div class="field-header">
              <div class="header-left">
                <h3>Short Name</h3>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/Manifest/short_name"
                  target="_blank"
                  rel="noopener"
                >
                  <img src="/assets/tooltip.svg" alt="info circle tooltip" />
                  <p class="toolTip">
                    Click for more info on the short name option in your manifest.
                  </p>
                </a>
              </div>

              <p>(required)</p>
            </div>
            <p>Used in app launchers</p>
            <sl-input placeholder="PWA Short Name" value=${this.manifest.short_name||""} data-field="short_name" @sl-change=${this.handleInputChange}></sl-input>
          </div>
        </div>
        <div class="form-row long">
          <div class="form-field">
            <div class="field-header">
              <div class="header-left">
                <h3>Description</h3>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/Manifest/description"
                  target="_blank"
                  rel="noopener"
                >
                  <img src="/assets/tooltip.svg" alt="info circle tooltip" />
                  <p class="toolTip">
                    Click for more info on the description option in your manifest.
                  </p>
                </a>
              </div>
            </div>
            <p>Used in app storefronts and install dialogs</p>
            <sl-textarea placeholder="PWA Description" value=${this.manifest.description||""} data-field="description" @sl-change=${this.handleInputChange} resize="none"></sl-textarea>
          </div>
          
        </div>
        <div class="form-row color-row">
          <div class="form-field color_field">
            <div class="field-header">
              <div class="header-left">
                <h3>Background Color</h3>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/Manifest/background_color"
                  target="_blank"
                  rel="noopener"
                >
                  <img src="/assets/tooltip.svg" alt="info circle tooltip" />
                  <p class="toolTip">
                    Click for more info on the background color option in your manifest.
                  </p>
                </a>
              </div>
            </div>
            <p>Select a Background color</p>
            <span class="color-holder">
              <div class="color-section">
                <sl-color-picker id="background_color_picker" value=${this.manifest.background_color||dn} hoist=${!0} data-field="background_color" .swatches=${[]} @sl-change=${()=>this.handleColorSwitch("background_color")}></sl-color-picker>
                <p id="background_color_string" class="color_string">${((e=this.manifest.background_color)==null?void 0:e.toLocaleUpperCase())||dn}</p>
              </div>
            </span>
          </div>
          <div class="form-field color_field">
            <div class="field-header">
              <div class="header-left">
                <h3>Theme Color</h3>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/Manifest/theme_color"
                  target="_blank"
                  rel="noopener"
                >
                  <img src="/assets/tooltip.svg" alt="info circle tooltip" />
                  <p class="toolTip">
                    Click for more info on the theme color option in your manifest.
                  </p>
                </a>
              </div>
            </div>
            <p>Select a Theme color</p>
            <span class="color-holder">
              <div class="color-section">
                <sl-color-picker id="theme_color_picker" value=${this.manifest.theme_color||dn} hoist=${!0} data-field="theme_color" .swatches=${[]} @sl-change=${()=>this.handleColorSwitch("theme_color")}></sl-color-picker>
                <p id="theme_color_string" class="color_string">${((t=this.manifest.theme_color)==null?void 0:t.toLocaleUpperCase())||dn}</p>
              </div>
            </span>
          </div>
        </div>
      </div>
    `}};$r([Ne({type:Object,hasChanged(s,e){return s!==e&&s.name&&(qo=!0),s!==e}})],Cs.prototype,"manifest",void 0);$r([q()],Cs.prototype,"bgText",void 0);$r([q()],Cs.prototype,"themeText",void 0);Cs=$r([jt("manifest-info-form")],Cs);const sg=[{code:"ab",name:"Abkhaz"},{code:"aa",name:"Afar"},{code:"af",name:"Afrikaans"},{code:"ak",name:"Akan"},{code:"sq",name:"Albanian"},{code:"am",name:"Amharic"},{code:"ar",name:"Arabic"},{code:"an",name:"Aragonese"},{code:"hy",name:"Armenian"},{code:"as",name:"Assamese"},{code:"av",name:"Avaric"},{code:"ae",name:"Avestan"},{code:"ay",name:"Aymara"},{code:"az",name:"Azerbaijani"},{code:"bm",name:"Bambara"},{code:"ba",name:"Bashkir"},{code:"eu",name:"Basque"},{code:"be",name:"Belarusian"},{code:"bn",name:"Bengali"},{code:"bh",name:"Bihari"},{code:"bi",name:"Bislama"},{code:"bs",name:"Bosnian"},{code:"br",name:"Breton"},{code:"bg",name:"Bulgarian"},{code:"my",name:"Burmese"},{code:"ca",name:"Catalan; Valencian"},{code:"ch",name:"Chamorro"},{code:"ce",name:"Chechen"},{code:"ny",name:"Chichewa; Chewa; Nyanja"},{code:"zh",name:"Chinese"},{code:"cv",name:"Chuvash"},{code:"kw",name:"Cornish"},{code:"co",name:"Corsican"},{code:"cr",name:"Cree"},{code:"hr",name:"Croatian"},{code:"cs",name:"Czech"},{code:"da",name:"Danish"},{code:"dv",name:"Divehi; Dhivehi; Maldivian;"},{code:"nl",name:"Dutch"},{code:"en",name:"English"},{code:"eo",name:"Esperanto"},{code:"et",name:"Estonian"},{code:"ee",name:"Ewe"},{code:"fo",name:"Faroese"},{code:"fj",name:"Fijian"},{code:"fi",name:"Finnish"},{code:"fr",name:"French"},{code:"ff",name:"Fula; Fulah; Pulaar; Pular"},{code:"gl",name:"Galician"},{code:"ka",name:"Georgian"},{code:"de",name:"German"},{code:"el",name:"Greek, Modern"},{code:"gn",name:"Guaran\xED"},{code:"gu",name:"Gujarati"},{code:"ht",name:"Haitian; Haitian Creole"},{code:"ha",name:"Hausa"},{code:"he",name:"Hebrew (modern)"},{code:"hz",name:"Herero"},{code:"hi",name:"Hindi"},{code:"ho",name:"Hiri Motu"},{code:"hu",name:"Hungarian"},{code:"ia",name:"Interlingua"},{code:"id",name:"Indonesian"},{code:"ie",name:"Interlingue"},{code:"ga",name:"Irish"},{code:"ig",name:"Igbo"},{code:"ik",name:"Inupiaq"},{code:"io",name:"Ido"},{code:"is",name:"Icelandic"},{code:"it",name:"Italian"},{code:"iu",name:"Inuktitut"},{code:"ja",name:"Japanese"},{code:"jv",name:"Javanese"},{code:"kl",name:"Kalaallisut, Greenlandic"},{code:"kn",name:"Kannada"},{code:"kr",name:"Kanuri"},{code:"ks",name:"Kashmiri"},{code:"kk",name:"Kazakh"},{code:"km",name:"Khmer"},{code:"ki",name:"Kikuyu, Gikuyu"},{code:"rw",name:"Kinyarwanda"},{code:"ky",name:"Kirghiz, Kyrgyz"},{code:"kv",name:"Komi"},{code:"kg",name:"Kongo"},{code:"ko",name:"Korean"},{code:"ku",name:"Kurdish"},{code:"kj",name:"Kwanyama, Kuanyama"},{code:"la",name:"Latin"},{code:"lb",name:"Luxembourgish, Letzeburgesch"},{code:"lg",name:"Luganda"},{code:"li",name:"Limburgish, Limburgan, Limburger"},{code:"ln",name:"Lingala"},{code:"lo",name:"Lao"},{code:"lt",name:"Lithuanian"},{code:"lu",name:"Luba-Katanga"},{code:"lv",name:"Latvian"},{code:"gv",name:"Manx"},{code:"mk",name:"Macedonian"},{code:"mg",name:"Malagasy"},{code:"ms",name:"Malay"},{code:"ml",name:"Malayalam"},{code:"mt",name:"Maltese"},{code:"mi",name:"M\u0101ori"},{code:"mr",name:"Marathi (Mar\u0101\u1E6Dh\u012B)"},{code:"mh",name:"Marshallese"},{code:"mn",name:"Mongolian"},{code:"na",name:"Nauru"},{code:"nv",name:"Navajo, Navaho"},{code:"nb",name:"Norwegian Bokm\xE5l"},{code:"nd",name:"North Ndebele"},{code:"ne",name:"Nepali"},{code:"ng",name:"Ndonga"},{code:"nn",name:"Norwegian Nynorsk"},{code:"no",name:"Norwegian"},{code:"ii",name:"Nuosu"},{code:"nr",name:"South Ndebele"},{code:"oc",name:"Occitan"},{code:"oj",name:"Ojibwe, Ojibwa"},{code:"cu",name:"Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic"},{code:"om",name:"Oromo"},{code:"or",name:"Oriya"},{code:"os",name:"Ossetian, Ossetic"},{code:"pa",name:"Panjabi, Punjabi"},{code:"pi",name:"P\u0101li"},{code:"fa",name:"Persian"},{code:"pl",name:"Polish"},{code:"ps",name:"Pashto, Pushto"},{code:"pt",name:"Portuguese"},{code:"qu",name:"Quechua"},{code:"rm",name:"Romansh"},{code:"rn",name:"Kirundi"},{code:"ro",name:"Romanian, Moldavian, Moldovan"},{code:"ru",name:"Russian"},{code:"sa",name:"Sanskrit (Sa\u1E41sk\u1E5Bta)"},{code:"sc",name:"Sardinian"},{code:"sd",name:"Sindhi"},{code:"se",name:"Northern Sami"},{code:"sm",name:"Samoan"},{code:"sg",name:"Sango"},{code:"sr",name:"Serbian"},{code:"gd",name:"Scottish Gaelic; Gaelic"},{code:"sn",name:"Shona"},{code:"si",name:"Sinhala, Sinhalese"},{code:"sk",name:"Slovak"},{code:"sl",name:"Slovene"},{code:"so",name:"Somali"},{code:"st",name:"Southern Sotho"},{code:"es",name:"Spanish; Castilian"},{code:"su",name:"Sundanese"},{code:"sw",name:"Swahili"},{code:"ss",name:"Swati"},{code:"sv",name:"Swedish"},{code:"ta",name:"Tamil"},{code:"te",name:"Telugu"},{code:"tg",name:"Tajik"},{code:"th",name:"Thai"},{code:"ti",name:"Tigrinya"},{code:"bo",name:"Tibetan Standard, Tibetan, Central"},{code:"tk",name:"Turkmen"},{code:"tl",name:"Tagalog"},{code:"tn",name:"Tswana"},{code:"to",name:"Tonga (Tonga Islands)"},{code:"tr",name:"Turkish"},{code:"ts",name:"Tsonga"},{code:"tt",name:"Tatar"},{code:"tw",name:"Twi"},{code:"ty",name:"Tahitian"},{code:"ug",name:"Uighur, Uyghur"},{code:"uk",name:"Ukrainian"},{code:"ur",name:"Urdu"},{code:"uz",name:"Uzbek"},{code:"ve",name:"Venda"},{code:"vi",name:"Vietnamese"},{code:"vo",name:"Volap\xFCk"},{code:"wa",name:"Walloon"},{code:"cy",name:"Welsh"},{code:"wo",name:"Wolof"},{code:"fy",name:"Western Frisian"},{code:"xh",name:"Xhosa"},{code:"yi",name:"Yiddish"},{code:"yo",name:"Yoruba"},{code:"za",name:"Zhuang, Chuang"}],ng=sg.map(s=>({formatted:s.name,code:s.code}));var il=globalThis&&globalThis.__decorate||function(s,e,t,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,i);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(r=(n<3?o(r):n>3?o(e,t,r):o(e,t))||r);return n>3&&r&&Object.defineProperty(e,t,r),r};const sh=["start_url","scope","orientation","lang","dir","display","display_override"],rg=["fullscreen","standalone","minimal-ui","browser"],og=["browser","fullscreen","minimal-ui","standalone","window-controls-overlay"];let Ho=!1,Hn=class extends Je{constructor(){super(),this.manifest={},this.shouldValidateAllFields=!0,this.errorCount=0,this.activeOverrideItems=[]}static get styles(){return Vt`

      :host {
        --sl-focus-ring-width: 3px;
        --sl-input-focus-ring-color: #4f3fb670;
        --sl-focus-ring: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
        --sl-input-border-color-focus: #4F3FB6ac;
      }

      sl-input::part(base),
      sl-select::part(control),
      sl-menu-item::part(base),
      sl-menu-label::part(base),
      sl-checkbox::part(base) {
        --sl-input-font-size-medium: 16px;
        --sl-font-size-medium: 16px;
        --sl-font-size-small: 14px;
        --sl-input-height-medium: 3em;
        --sl-toggle-size: 16px;
      }
      sl-input::part(base),
      sl-select::part(control),
      sl-details::part(base){
        background-color: #fbfbfb;
      }
      #form-holder {
        display: flex;
        flex-direction: column;
        row-gap: 1em;
      }
      .form-row {
        display: flex;
        column-gap: 1em;
      }
      .form-row h3 {
        font-size: 18px;
        margin: 0;
      }
      .form-row p {
        font-size: 14px;
        margin: 0;
      }
      .long .form-field {
        width: 100%;
      }
      .form-field {
        width: 50%;
        row-gap: .25em;
        display: flex;
        flex-direction: column;
      }
      .field-header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        column-gap: 5px;
      }

      .header-left{
        display: flex;
        align-items: center;
        column-gap: 5px;
      }
      .color_field {
        display: flex;
        flex-direction: column;
      }
      .color-holder {
        display: flex;
        align-items: center;
        column-gap: 10px;
      }
      .toolTip {
        visibility: hidden;
        width: 150px;
        background: black;
        color: white;
        font-weight: 500;
        text-align: center;
        border-radius: 6px;
        padding: .75em;
        /* Position the tooltip */
        position: absolute;
        top: 20px;
        left: -25px;
        z-index: 1;
        box-shadow: 0px 2px 20px 0px #0000006c;
      }
      .field-header a {
        display: flex;
        align-items: center;
        position: relative;
        color: black;
      }
      a:hover .toolTip {
        visibility: visible;
      }
      a:visited, a:focus {
        color: black;
      }
      sl-menu {
        width: 100%;
      }

      .error::part(base){
        border-color: #eb5757;
        --sl-input-focus-ring-color: ##eb575770;
        --sl-focus-ring-width: 3px;
        --sl-focus-ring: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
        --sl-input-border-color-focus: #eb5757ac;
      }

      .error::part(control){
        border-color: #eb5757;
      }

      #override-list {
        display: flex;
        flex-direction: column;
        row-gap: 5px;
      }
      #override-item {
        display: flex;
        align-items: center;
        column-gap: 10px;
      }

      #override-item::part(label){
        font-size: 16px;
      }

      sl-details {
        width: 100%;
      }
      sl-details::part(base){
        width: 100%;
        max-height: fit-content
      }
      sl-details::part(header){
        padding: 10px 15px;
        font-size: 16px;
      }

      .menu-prefix {
        padding: 0 .5em;
        font-weight: 600;
        padding-top: 3px;
      }

      #override-options-grid{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: .25em .5em;
      }

      #override-options-grid sl-checkbox::part(label) {
        font-size: 16px;
        line-height: 16px;
        margin-left: .25em;
      }

      @media(max-width: 765px){
        .form-row {
          flex-direction: column;
          row-gap: 1em;
        }
        .form-field {
          width: 100%;
        }
      }

      @media(max-width: 480px){
        sl-input::part(base),
        sl-select::part(control),
        sl-menu-item::part(base) {
          --sl-input-font-size-medium: 14px;
          --sl-font-size-medium: 14px;
          --sl-input-height-medium: 2.5em;
        }

        .form-row p {
          font-size: 12px;
        }

        .form-row h3 {
          font-size: 16px;
        }
      }
    `}async updated(e){Ho&&(Ho=!1,this.requestValidateAllFields(),this.initOverrideList())}async requestValidateAllFields(){if(this.shouldValidateAllFields=!0,!this.validationPromise)for(;this.shouldValidateAllFields;)this.shouldValidateAllFields=!1,this.validationPromise=this.validateAllFields(),await this.validationPromise}async validateAllFields(){for(let e=0;e<sh.length;e++){let t=sh[e];if(t in this.manifest){const i=await ut(t,this.manifest[t]);if(!i.valid){let r=this.shadowRoot.querySelector('[data-field="'+t+'"]');if(r.classList.add("error"),this.shadowRoot.querySelector(`.${t}-error-div`)){let o=this.shadowRoot.querySelector(`.${t}-error-div`);o.parentElement.removeChild(o)}if(i.errors){let o=document.createElement("div");o.classList.add(`${t}-error-div`),i.errors.forEach(a=>{let l=document.createElement("p");l.innerText=a,l.style.color="#eb5757",o.append(l),this.errorCount++}),we(o,r.parentNode.lastElementChild)}}}else if(js.includes(t)){let i=this.shadowRoot.querySelector('[data-field="'+t+'"]');if(i.classList.add("error"),this.shadowRoot.querySelector(`.${t}-error-div`)){let o=this.shadowRoot.querySelector(`.${t}-error-div`);o.parentElement.removeChild(o)}let n=document.createElement("div");n.classList.add(`${t}-error-div`);let r=document.createElement("p");r.innerText=`${t} is required and is missing from your manifest.`,r.style.color="#eb5757",n.append(r),this.errorCount++,we(n,i.parentNode.lastElementChild)}}this.validationPromise=void 0,this.errorCount==0?this.dispatchEvent(ee(!1,"settings")):this.dispatchEvent(ee(!0,"settings"))}initOverrideList(){this.activeOverrideItems=[],this.manifest.display_override&&this.manifest.display_override.forEach(e=>{this.activeOverrideItems.push(e)})}async handleInputChange(e){this.validationPromise&&await this.validationPromise;const t=e.target;let i=t.value;const n=t.dataset.field;let r=new CustomEvent("fieldChangeAttempted",{detail:{field:n},bubbles:!0,composed:!0});this.dispatchEvent(r);const o=await ut(n,i);if(o.valid){let l=new CustomEvent("manifestUpdated",{detail:{field:n,change:i},bubbles:!0,composed:!0});if(this.dispatchEvent(l),t.classList.contains("error")){t.classList.toggle("error"),this.errorCount--;let h=t.parentNode.lastElementChild;t.parentNode.removeChild(h)}}else{if(this.shadowRoot.querySelector(`.${n}-error-div`)){let l=this.shadowRoot.querySelector(`.${n}-error-div`);l.parentElement.removeChild(l)}if(o.errors){let l=document.createElement("div");l.classList.add(`${n}-error-div`),o.errors.forEach(h=>{let c=document.createElement("p");c.innerText=h,c.style.color="#eb5757",l.append(c),this.errorCount++}),we(l,t.parentNode.lastElementChild)}t.classList.add("error")}this.errorCount==0?this.dispatchEvent(ee(!1,"settings")):this.dispatchEvent(ee(!0,"settings"))}parseLangCode(e){return e?e.split("-")[0]:""}async toggleOverrideList(e,t){let i=new CustomEvent("fieldChangeAttempted",{detail:{field:"display_override"},bubbles:!0,composed:!0});if(this.dispatchEvent(i),!t.path[0].checked){let r=this.activeOverrideItems.indexOf(e);this.activeOverrideItems.splice(r,1)}else this.activeOverrideItems.push(e);this.validatePlatformList("display_override",this.activeOverrideItems),this.requestUpdate()}async validatePlatformList(e,t){this.validationPromise&&await this.validationPromise;let i=this.shadowRoot.querySelector(`[data-field=${e}]`);const n=await ut(e,t);if(n.valid){let o=new CustomEvent("manifestUpdated",{detail:{field:e,change:[...t]},bubbles:!0,composed:!0});if(this.dispatchEvent(o),i.classList.contains("error")){i.classList.toggle("error"),this.errorCount--;let a=i.parentNode.lastElementChild;a.parentNode.removeChild(a)}}else{if(this.shadowRoot.querySelector(`.${e}-error-div`)){let o=this.shadowRoot.querySelector(`.${e}-error-div`);o.parentElement.removeChild(o)}if(n.errors){let o=document.createElement("div");o.classList.add(`${e}-error-div`),n.errors.forEach(a=>{let l=document.createElement("p");l.innerText=a,l.style.color="#eb5757",o.append(l),this.errorCount++}),we(o,i.parentNode.lastElementChild)}i.classList.add("error")}this.errorCount==0?this.dispatchEvent(ee(!1,"platform")):this.dispatchEvent(ee(!0,"platform"))}render(){return O`
      <div id="form-holder">
        <div class="form-row">
          <div class="form-field">
            <div class="field-header">
              <div class="header-left">
                <h3>Start URL</h3>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/Manifest/start_url"
                  target="_blank"
                  rel="noopener"
                >
                  <img src="/assets/tooltip.svg" alt="info circle tooltip" />
                  <p class="toolTip">
                    Click for more info on the start url option in your manifest.
                  </p>
                </a>
              </div>

              <p>(required)</p>
            </div>
            <p>The URL that loads when your PWA starts</p>
            <sl-input placeholder="PWA Start URL" value=${this.manifest.start_url||""} data-field="start_url" @sl-change=${this.handleInputChange}></sl-input>
          </div>
          <div class="form-field">
            <div class="field-header">
              <div class="header-left">
                <h3>Dir</h3>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/Manifest/dir"
                  target="_blank"
                  rel="noopener"
                >
                  <img src="/assets/tooltip.svg" alt="info circle tooltip" />
                  <p class="toolTip">
                    Click for more info on the dir option in your manifest.
                  </p>
                </a>
              </div>
            </div>
            <p>The text direction of your PWA</p>
            <sl-select placeholder="Select a Direction" data-field="dir" hoist=${!0} value=${this.manifest.dir||""} @sl-change=${this.handleInputChange}>
              ${lg.map(e=>O`<sl-menu-item value=${e}>${e}</sl-menu-item>`)}
            </sl-select>
          </div>
        </div>
        <div class="form-row">
          <div class="form-field">
            <div class="field-header">
              <div class="header-left">
                <h3>Scope</h3>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/Manifest/scope"
                  target="_blank"
                  rel="noopener"
                >
                  <img src="/assets/tooltip.svg" alt="info circle tooltip" />
                  <p class="toolTip">
                    Click for more info on the scope option in your manifest.
                  </p>
                </a>
              </div>
            </div>
            <p>Which URLs can load within your app</p>
            <sl-input placeholder="PWA Scope" data-field="scope" value=${this.manifest.scope||""} @sl-change=${this.handleInputChange}></sl-input>
          </div>
          
          <div class="form-field">
            <div class="field-header">
              <div class="header-left">
                <h3>Language</h3>
                <a
                  href="https://www.w3.org/TR/appmanifest/#lang-member"
                  target="_blank"
                  rel="noopener"
                >
                  <img src="/assets/tooltip.svg" alt="info circle tooltip" />
                  <p class="toolTip">
                    Click for more info on the language option in your manifest.
                  </p>
                </a>
              </div>
            </div>
            <p>The primary language of your app</p>
            <sl-select placeholder="Select a Language" data-field="lang" hoist=${!0} value=${this.parseLangCode(this.manifest.lang)||""} @sl-change=${this.handleInputChange}>
              ${ng.map(e=>O`<sl-menu-item value=${e.code}>${e.formatted}</sl-menu-item>`)}
            </sl-select>
          </div>
        </div>
        <div class="form-row">
          <div class="form-field">
            <div class="field-header">
              <div class="header-left">
                <h3>Orientation</h3>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/Manifest/orientation"
                  target="_blank"
                  rel="noopener"
                >
                  <img src="/assets/tooltip.svg" alt="info circle tooltip" />
                  <p class="toolTip">
                    Click for more info on the orientaiton option in your manifest.
                  </p>
                </a>
              </div>
            </div>
            <p>The default screen orientation of your app</p>
            <sl-select placeholder="Select an Orientation" data-field="orientation" hoist=${!0} value=${this.manifest.orientation||""} @sl-change=${this.handleInputChange}>
              ${ag.map(e=>O`<sl-menu-item value=${e}>${e}</sl-menu-item>`)}
            </sl-select>
          </div>
          <div class="form-field">
            <div class="field-header">
              <div class="header-left">
                <h3>Display</h3>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/Manifest/display"
                  target="_blank"
                  rel="noopener"
                >
                  <img src="/assets/tooltip.svg" alt="info circle tooltip" />
                  <p class="toolTip">
                    Click for more info on the display option in your manifest.
                  </p>
                </a>
              </div>
            </div>
            <p>The appearance of your app window</p>
            <sl-select placeholder="Select a Display" data-field="display" hoist=${!0} value=${this.manifest.display||""} @sl-change=${this.handleInputChange}>
              ${rg.map(e=>O`<sl-menu-item value=${e}>${e}</sl-menu-item>`)}
            </sl-select>
          </div>
        </div>
        <div class="form-row long">
          <div class="form-field">
            <div class="field-header">
              <div class="header-left">
                <h3>Display Override</h3>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/Manifest/display_override"
                  target="_blank"
                  rel="noopener"
                >
                  <img src="/assets/tooltip.svg" alt="info circle tooltip" />
                  <p class="toolTip">
                    Click for more info on the display override option in your manifest.
                  </p>
                </a>
              </div>
            </div>
            <p>Used to determine the preferred display mode</p>
            <div id="override-list">
            <sl-details summary="Click to edit display override" data-field="display_override">
              <sl-menu>
                <sl-menu-label>Active Override Items</sl-menu-label>
                ${this.activeOverrideItems.length!=0?this.activeOverrideItems.map((e,t)=>O`
                    <sl-menu-item class="override-item" value=${e} @click=${i=>this.toggleOverrideList(e,i)}>
                      <p slot="prefix" class="menu-prefix">${t+1}</p>
                      ${e}
                    </sl-menu-item>
                  `):O`<sl-menu-item disabled>-</sl-menu-item>`}
                <sl-divider></sl-divider>
                <div id="override-options-grid">
                  ${og.map(e=>O`
                        <sl-checkbox class="override-item" value=${e} @sl-change=${t=>this.toggleOverrideList(e,t)} ?checked=${this.activeOverrideItems.includes(e)}>
                          ${e}
                        </sl-checkbox>
                      `)}
                  </div>
              </sl-menu>
            </sl-details>
            </div>
          </div>
        </div>
      </div>
    `}};il([Ne({type:Object,hasChanged(s,e){return s!==e&&s.name&&(Ho=!0),s!==e}})],Hn.prototype,"manifest",void 0);il([q()],Hn.prototype,"activeOverrideItems",void 0);Hn=il([jt("manifest-settings-form")],Hn);const ag=["any","natural","landscape","portrait","portrait-primary","portrait-secondary","landscape-primary","landscape-secondary"],lg=["auto","ltr","rtl"],hg=["books","business","education","entertainment","finance","fitness","food","games","government","health","kids","lifestyle","magazines","medical","music","navigation","news","personalization","photo","politics","productivity","security","shopping","social","sports","travel","utilities","weather"];var Ks=globalThis&&globalThis.__decorate||function(s,e,t,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,i);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(r=(n<3?o(r):n>3?o(e,t,r):o(e,t))||r);return n>3&&r&&Object.defineProperty(e,t,r),r};const fn=["windows","chrome_web_store","play","itunes","webapp","f-droid","amazon"],nh=["Windows Store","Google Chrome Web Store","Google Play Store","Apple App Store","Web apps","F-droid","Amazon App Store"],rh=["iarc_rating_id","prefer_related_applications","related_applications","shortcuts","protocol_handlers","categories"];let Vo=!1,oh=!1,Ii=class extends Je{constructor(){super(),this.manifest={},this.shortcutHTML=[],this.protocolHTML=[],this.relatedAppsHTML=[],this.shouldValidateAllFields=!0,this.errorCount=0}static get styles(){return Vt`

      :host {
        --sl-focus-ring-width: 3px;
        --sl-input-focus-ring-color: #4f3fb670;
        --sl-focus-ring: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
        --sl-input-border-color-focus: #4F3FB6ac;
      }

      sl-input::part(base),
      sl-select::part(control),
      sl-menu-item::part(base),
      sl-button::part(base),
      sl-checkbox::part(base),
      sl-checkbox::part(control),
      sl-details::part(base) {
        --sl-input-font-size-medium: 16px;
        --sl-button-font-size-medium: 12px;
        --sl-font-size-medium: 16px;
        --sl-input-height-medium: 3em;
        --sl-toggle-size: 16px;
      }
      sl-details::part(base), sl-select::part(control), sl-input::part(base){
        background-color: #fbfbfb;
      }
      #form-holder {
        display: flex;
        flex-direction: column;
        row-gap: 1em;
      }
      .form-row {
        display: flex;
        column-gap: 1em;
      }
      .form-row h3 {
        font-size: 18px;
        margin: 0;
      }
      .form-row p {
        font-size: 14px;
        margin: 0;
      }
      .form-field {
        width: 50%;
        row-gap: .25em;
        display: flex;
        flex-direction: column;
      }
      .field-header{
        display: flex;
        align-items: center;
        column-gap: 5px;
      }
      .color_field {
        display: flex;
        flex-direction: column;
      }
      .color-holder {
        display: flex;
        align-items: center;
        column-gap: 10px;
      }
      .toolTip {
        visibility: hidden;
        width: 150px;
        background: black;
        color: white;
        font-weight: 500;
        text-align: center;
        border-radius: 6px;
        padding: .75em;
        /* Position the tooltip */
        position: absolute;
        top: 20px;
        left: -25px;
        z-index: 1;
        box-shadow: 0px 2px 20px 0px #0000006c;
      }
      .special-tip {
        left: -120px;
      }
      .field-header a {
        display: flex;
        align-items: center;
        position: relative;
        color: black;
      }
      a:hover .toolTip {
        visibility: visible;
      }
      a:visited, a:focus {
        color: black;
      }
      sl-menu {
         width: 100%;
      }
      #cat-field {
        display: grid;
        grid-template-rows: repeat(7, auto);
        grid-auto-flow: column;
        column-gap: 10px;
        padding: 0 1em 1em 1em;
        background: white;
      }
      #cat-field.error {
        border: 1px solid #eb5757;
        border-radius: 5px;
        padding: 1em;
      }
      
      sl-details {
        width: 100%;
      }
      sl-details::part(base){
        width: 100%;
        max-height: fit-content
      }
      sl-details::part(header){
        padding: 10px 15px;
        font-size: 16px;
      }

      .field-holder {
        display: flex;
        flex-direction: column;
      }
      .shortcut-header{
        padding: .5em 0;
        margin: 0;
        font-size: 16px;
      }
      sl-icon-button::part(base){
        padding: 0;
      }
      .field-details::part(content){
        display: flex;
        flex-direction: column;
        row-gap: 10px;
      }
      .field-holder sl-button {
        width: 50%;
        align-self: flex-end;
      }
      .long-items {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
      }
      .long-items h3 {
        font-size: 18px;
        margin: 0;
      }
      .long-items p {
        font-size: 14px;
        margin: 0;
      }
      .long-items .form-field {
        width: 100%;
      }
      .items-holder {
        display: flex;
        align-items: flex-start;
        column-gap: 10px;
        overflow-x: scroll;
        padding-bottom: 10px;
      }
      .editable {
        display: flex;
        align-items:center;
        justify-content: space-between;
      }

      .error::part(base){
        border-color: #eb5757;
        --sl-input-focus-ring-color: #eb575770;
        --sl-focus-ring-width: 3px;
        --sl-focus-ring: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
        --sl-input-border-color-focus: #eb5757ac;
      }

      .error::part(control){
        border-color: #eb5757;
      }

      sl-menu-label::part(base) {
        font-size: 16px;
      }

      @media(max-width: 765px){
        .form-row {
          flex-direction: column;
          row-gap: 1em;
        }
        .form-field {
          width: 100%;
        }
        #cat-field {
          grid-template-columns: repeat(4, auto);
          grid-auto-flow: unset;
        }
        .special-tip {
          left: -25px;
        }
      }

      @media(max-width: 600px){
        #cat-field {
          grid-template-columns: repeat(3, auto);
        }
      }

      @media(max-width: 480px){
        sl-input::part(base),
        sl-select::part(control),
        sl-menu-item::part(base),
        sl-button::part(base),
        sl-checkbox::part(base),
        sl-checkbox::part(control) {
          --sl-input-font-size-medium: 14px;
          --sl-font-size-medium: 14px;
          --sl-input-height-medium: 2.5em;
          --sl-button-font-size-medium: 10px;
          --sl-toggle-size: 14px;
        }

        sl-details::part(header) {
          padding: 5px 10px;
          font-size: 14px;
        }

        .form-row p, .long-items p {
          font-size: 12px;
        }

        .form-row h3, .long-items h3 {
          font-size: 16px;
        }

        #cat-field {
          grid-template-columns: repeat(2, auto);
        }
        
      }
    `}async updated(e){Vo&&(Vo=!1,oh||(this.requestValidateAllFields(),oh=!0),this.reset())}async requestValidateAllFields(){if(this.shouldValidateAllFields=!0,!this.validationPromise)for(;this.shouldValidateAllFields;)this.shouldValidateAllFields=!1,this.validationPromise=this.validateAllFields(),await this.validationPromise}async validateAllFields(){for(let e=0;e<rh.length;e++){let t=rh[e];if(this.manifest[t]){const i=await ut(t,this.manifest[t]);let n=i.valid,r=this.shadowRoot.querySelector('[data-field="'+t+'"]'),o=[];if(t==="related_applications"?this.manifest[t].forEach((a,l)=>{let h=eo(a);h!=="valid"&&o.push({part:h,index:l})}):t==="protocol_handlers"&&this.manifest[t].forEach((a,l)=>{let h=Tm(a);h!=="valid"&&o.push({part:h,index:l})}),o.length>0){let a=document.createElement("div");a.classList.add(`${t}-error-div`),o.forEach(l=>{let h=document.createElement("p");h.innerText=`There is an issue with ${t} #${l.index+1}: ${l.part} is invalid`,h.style.color="#eb5757",a.append(h),this.errorCount++}),r.classList.add("error"),we(a,r.parentNode.lastElementChild)}if(!n){if(this.shadowRoot.querySelector(`.${t}-error-div`)){let a=this.shadowRoot.querySelector(`.${t}-error-div`);console.log(a),a.parentElement.removeChild(a)}if(i.errors){let a=document.createElement("div");a.classList.add(`${t}-error-div`),i.errors.forEach(l=>{let h=document.createElement("p");h.innerText=l,h.style.color="#eb5757",a.append(h),this.errorCount++}),we(a,r.parentNode.lastElementChild)}r.classList.add("error")}}}this.validationPromise=void 0,this.errorCount==0?this.dispatchEvent(ee(!1,"platform")):this.dispatchEvent(ee(!0,"platform"))}reset(){this.initCatGrid(),this.requestUpdate()}initCatGrid(){this.manifest.categories&&this.shadowRoot.querySelectorAll(".cat-check").forEach(t=>{this.manifest.categories.includes(t.value)?t.checked=!0:t.checked=!1})}async handleInputChange(e){this.validationPromise&&await this.validationPromise;const t=e.target;let i=t.value;const n=t.dataset.field;let r=new CustomEvent("fieldChangeAttempted",{detail:{field:n},bubbles:!0,composed:!0});this.dispatchEvent(r),n==="prefer_related_applications"&&(i=JSON.parse(i));const o=await ut(n,i);if(o.valid){let l=new CustomEvent("manifestUpdated",{detail:{field:n,change:i},bubbles:!0,composed:!0});if(this.dispatchEvent(l),t.classList.contains("error")){t.classList.toggle("error"),this.errorCount--;let h=t.parentNode.lastElementChild;t.parentNode.removeChild(h)}}else{if(this.shadowRoot.querySelector(`.${n}-error-div`)){let l=this.shadowRoot.querySelector(`.${n}-error-div`);l.parentElement.removeChild(l)}if(o.errors){let l=document.createElement("div");l.classList.add(`${n}-error-div`),o.errors.forEach(h=>{let c=document.createElement("p");c.innerText=h,c.style.color="#eb5757",l.append(c),this.errorCount++}),we(l,t.parentNode.lastElementChild)}t.classList.add("error")}this.errorCount==0?this.dispatchEvent(ee(!1,"platform")):this.dispatchEvent(ee(!0,"platform"))}addFieldToHTML(e){e==="shortcuts"?this.shortcutHTML.push(O`
          <form @submit=${t=>this.addShortcutToManifest(t)} class="field-holder">
            <h4 class="shortcut-header">Shortcut #${this.manifest.shortcuts?this.manifest.shortcuts.length+1:1}</h4>
            <sl-input class="field-input" name="name" placeholder="Shortcut name" /></sl-input>
            <sl-input class="field-input" name="url" placeholder="Shortcut url" /></sl-input>
            <sl-input class="field-input" name="src" placeholder="Shortcut icon src" /></sl-input>
            <sl-input class="field-input" name="desc" placeholder="Shortcut description" /></sl-input>
            <sl-button type="submit">Add to Manifest</sl-button>
          </form>
        `):e==="protocol_handlers"?this.protocolHTML.push(O`
          <form class="field-holder" @submit=${t=>this.addProtocolToManifest(t)}>
            <h4 class="shortcut-header">Protocol Handler #${this.manifest.protocol_handlers?this.manifest.protocol_handlers.length+1:1}</h4>
            <sl-input class="field-input" name="protocol" placeholder="Protocol" /></sl-input>
            <sl-input class="field-input" name="url" placeholder="URL" /></sl-input>
            <sl-button type="submit">Add to Manifest</sl-button>
          </form>
        `):this.relatedAppsHTML.push(O`
          <form class="field-holder" @submit=${t=>this.addRelatedAppToManifest(t)}>
            <h4 class="shortcut-header">Related App #${this.manifest.related_applications?this.manifest.related_applications.length+1:1}</h4>
            <sl-select placeholder="Select a Platform" hoist=${!0} placement="bottom">
              ${fn.map((t,i)=>O`<sl-menu-item value=${fn[i]}>${nh[i]}</sl-menu-item>`)}
            </sl-select>
            <sl-input class="field-input" name="url" placeholder="App URL" /></sl-input>
            <sl-input class="field-input" name="id" placeholder="App ID" /></sl-input>
            <sl-button type="submit">Add to Manifest</sl-button>
          </form>
        `),this.requestUpdate()}addShortcutToManifest(e){e.preventDefault();let t=new CustomEvent("fieldChangeAttempted",{detail:{field:"shortcuts"},bubbles:!0,composed:!0});this.dispatchEvent(t),this.shortcutHTML=[];const i=[...e.target.querySelectorAll("sl-input")];this.updateShortcutsInManifest(i,!0)}async updateShortcutsInManifest(e,t){var i;if(t){let n=e.filter(h=>h.name==="name")[0].value,r=e.filter(h=>h.name==="url")[0].value,o=e.filter(h=>h.name==="src")[0].value,a=e.filter(h=>h.name==="desc")[0].value,l;o.length==0?l={name:n,url:r,description:a}:l={name:n,url:r,icons:[{src:o}],description:a},this.manifest.shortcuts||(this.manifest.shortcuts=[]),(i=this.manifest.shortcuts)==null||i.push(l)}this.validatePlatformList("shortcuts",this.manifest.shortcuts)}addProtocolToManifest(e){e.preventDefault();let t=new CustomEvent("fieldChangeAttempted",{detail:{field:"protocol_handlers"},bubbles:!0,composed:!0});this.dispatchEvent(t),this.protocolHTML=[];const i=[...e.target.querySelectorAll("sl-input")];this.updateProtocolsInManifest(i,!0)}async updateProtocolsInManifest(e,t){var i;if(t){let n=e.filter(a=>a.name==="protocol")[0].value,r=e.filter(a=>a.name==="url")[0].value;const o={protocol:n,url:r};this.manifest.protocol_handlers||(this.manifest.protocol_handlers=[]),(i=this.manifest.protocol_handlers)==null||i.push(o)}this.validatePlatformList("protocol_handlers",this.manifest.protocol_handlers)}addRelatedAppToManifest(e){e.preventDefault(),this.relatedAppsHTML=[];const t=[...e.target.querySelectorAll("sl-input")],i=e.target.querySelector("sl-select");let n=new CustomEvent("fieldChangeAttempted",{detail:{field:"related_applications"},bubbles:!0,composed:!0});this.dispatchEvent(n),this.updateRelatedAppsInManifest(t,i,!0)}async updateRelatedAppsInManifest(e,t,i){var n;if(i){let r=t.value,o=e.filter(h=>h.name==="url")[0].value,a=e.filter(h=>h.name==="id")[0].value;const l={platform:r,url:o,id:a};this.manifest.related_applications||(this.manifest.related_applications=[]),(n=this.manifest.related_applications)==null||n.push(l)}this.validatePlatformList("related_applications",this.manifest.related_applications)}updateCategories(){let e=[];this.shadowRoot.querySelectorAll(".cat-check").forEach(n=>{n.checked&&e.push(n.value)});let i=new CustomEvent("fieldChangeAttempted",{detail:{field:"categories"},bubbles:!0,composed:!0});this.dispatchEvent(i),this.validatePlatformList("categories",e)}validatePlatformEntries(e){let t=[];return e==="related_applications"&&this.manifest[e].forEach((i,n)=>{let r=eo(i);r!=="valid"&&t.push({part:r,index:n})}),t}async validatePlatformList(e,t){this.validationPromise&&await this.validationPromise;let i=this.shadowRoot.querySelector(`[data-field=${e}]`);const n=await ut(e,t);if(n.valid){let o=new CustomEvent("manifestUpdated",{detail:{field:e,change:[...t]},bubbles:!0,composed:!0});this.dispatchEvent(o);let a=[];if(e==="related_applications"&&this.manifest[e].forEach((l,h)=>{let c=eo(l);c!=="valid"&&a.push({part:c,index:h})}),a.length>0){if(this.shadowRoot.querySelector(`.${e}-error-div`)){let h=this.shadowRoot.querySelector(`.${e}-error-div`);h.parentElement.removeChild(h)}let l=document.createElement("div");l.classList.add(`${e}-error-div`),a.forEach(h=>{let c=document.createElement("p");c.innerText=`There is an issue with ${e} #${h.index+1}: ${h.part} is invalid`,c.style.color="#eb5757",l.append(c),this.errorCount++}),i.classList.add("error"),we(l,i.parentNode.lastElementChild)}else if(i.classList.contains("error")){i.classList.toggle("error"),this.errorCount--;let l=i.parentNode.lastElementChild;l.parentNode.removeChild(l)}}else{if(this.shadowRoot.querySelector(`.${e}-error-div`)){let o=this.shadowRoot.querySelector(`.${e}-error-div`);o.parentElement.removeChild(o)}{let o=this.validatePlatformEntries(e);if(o.length>0){let a=document.createElement("div");a.classList.add(`${e}-error-div`),o.forEach(l=>{let h=document.createElement("p");h.innerText=`There is an issue with ${e} #${l.index+1}: ${l.part} is invalid`,h.style.color="#eb5757",a.append(h),this.errorCount++}),i.classList.add("error"),we(a,i.parentNode.lastElementChild)}}if(n.errors){let o=document.createElement("div");o.classList.add(`${e}-error-div`),n.errors.forEach(a=>{let l=document.createElement("p");l.innerText=a,l.style.color="#eb5757",o.append(l),this.errorCount++}),we(o,i.parentNode.lastElementChild)}i.classList.add("error")}this.errorCount==0?this.dispatchEvent(ee(!1,"platform")):this.dispatchEvent(ee(!0,"platform"))}removeData(e){const t=e.split(" "),i=t[0],n=parseInt(t[1]);i==="shortcuts"?(this.manifest.shortcuts=this.manifest.shortcuts.filter((r,o)=>o!=n),this.updateShortcutsInManifest([],!1)):i==="protocol"?(this.manifest.protocol_handlers=this.manifest.protocol_handlers.filter((r,o)=>o!=n),this.updateProtocolsInManifest([],!1)):(this.manifest.related_applications=this.manifest.related_applications.filter((r,o)=>o!=n),this.updateRelatedAppsInManifest([],[],!1))}updateExistingData(e){const t=e.split(" "),i=t[0],n=parseInt(t[1]),r=[...this.shadowRoot.querySelectorAll('sl-input[data-tag="'+e+'"]')],o=this.shadowRoot.querySelector('sl-select[data-tag="'+e+'"]');if(i==="shortcuts"){let a=r.filter(f=>f.name==="name")[0].value,l=r.filter(f=>f.name==="url")[0].value,h=r.filter(f=>f.name==="src")[0].value,c=r.filter(f=>f.name==="desc")[0].value,d;h.length==0?d={name:a,url:l,description:c}:d={name:a,url:l,icons:[{src:h}],description:c},this.manifest.shortcuts.splice(n,1,d),this.validatePlatformList("shortcuts",this.manifest.shortcuts)}else if(i==="protocol"){let a=r.filter(c=>c.name==="protocol")[0].value,l=r.filter(c=>c.name==="url")[0].value;const h={protocol:a,url:l};this.manifest.protocol_handlers.splice(n,1,h),this.validatePlatformList("protocol_handlers",this.manifest.protocol_handlers)}else{let a=o.value,l=r.filter(d=>d.name==="url")[0].value,h=r.filter(d=>d.name==="id")[0].value;const c={platform:a,url:l,id:h};this.manifest.related_applications.splice(n,1,c),this.validatePlatformList("related_applications",this.manifest.related_applications)}}render(){return O`
      <div id="form-holder">
        <div class="form-row">
          <div class="form-field">
            <div class="field-header">
              <h3>IARC Rating ID</h3>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/Manifest/iarc_rating_id"
                target="_blank"
                rel="noopener"
              >
                <img src="/assets/tooltip.svg" alt="info circle tooltip" />
                <p class="toolTip">
                  Click for more info on the IARC rating id option in your manifest.
                </p>
              </a>
            </div>
            <p>Displays what ages are suitable for your PWA</p>
            <sl-input placeholder="PWA IARC Rating ID" value=${this.manifest.iarc_rating_id||""} data-field="iarc_rating_id" @sl-change=${this.handleInputChange}></sl-input>
          </div>
          <div class="form-field">
            <div class="field-header">
              <h3>Prefer Related Applications</h3>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/Manifest/prefer_related_applications"
                target="_blank"
                rel="noopener"
              >
                <img src="/assets/tooltip.svg" alt="info circle tooltip" />
                <p class="toolTip special-tip">
                  Click for more info on the prefer related applications option in your manifest.
                </p>
              </a>
            </div>
            <p>Should a user prefer a related app to this one</p>
            <sl-select placeholder="Select an option" data-field="prefer_related_applications" hoist=${!0} @sl-change=${this.handleInputChange} value=${JSON.stringify(this.manifest.prefer_related_applications)||""}>
              <sl-menu-item value="true">true</sl-menu-item>
              <sl-menu-item value="false">false</sl-menu-item>
            </sl-select>
          </div>
        </div>
        <div class="long-items">
          <div class="form-field">
            <div class="field-header">
              <h3>Related Applications</h3>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/Manifest/related_applications"
                target="_blank"
                rel="noopener"
              >
                <img src="/assets/tooltip.svg" alt="info circle tooltip" />
                <p class="toolTip">
                  Click for more info on the related applications option in your manifest.
                </p>
              </a>
            </div>
            <p>Applications that provide similar functionality to your PWA</p>
            <sl-details class="field-details" summary="Click to edit related apps" data-field="related_applications">
              <sl-button @click=${()=>this.addFieldToHTML("related_applications")} ?disabled=${this.relatedAppsHTML.length!=0}>Add App</sl-button>
              <div class="items-holder">
                ${this.manifest.related_applications&&Array.isArray(this.manifest.related_applications)?this.manifest.related_applications.map((e,t)=>O`
                    <div class="field-holder">
                      <div class="editable">
                        <h4 class="shortcut-header">Related App #${t+1}</h4>
                        <sl-icon-button name="x-lg" label="close" style="font-size: 1rem;" data-tag=${"related "+t.toString()} @click=${()=>this.removeData("related "+t.toString())}></sl-icon-button>
                      </div>
                      <sl-select placeholder="Select a Platform" placement="bottom" hoist=${!0} value=${e.platform||""} name="platform" data-tag=${"related "+t.toString()} @sl-change=${()=>this.updateExistingData("related "+t.toString())}>
                        ${fn.map((i,n)=>O`<sl-menu-item value=${fn[n]}>${nh[n]}</sl-menu-item>`)}
                      </sl-select>
                      <sl-input class="field-input" placeholder="App URL" value=${e.url||""} name="url" data-tag=${"related "+t.toString()} @sl-change=${()=>this.updateExistingData("related "+t.toString())}></sl-input>
                      <sl-input class="field-input" placeholder="App ID" value=${e.id||""} name="id" data-tag=${"related "+t.toString()} @sl-change=${()=>this.updateExistingData("related "+t.toString())}></sl-input>
                    </div>
                  `):O``}
                ${this.relatedAppsHTML?this.relatedAppsHTML.map(e=>e):O``}
              </div>
            </sl-details>
          </div>
          <div class="form-field">
            <div class="field-header">
              <h3>Shortcuts</h3>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/Manifest/shortcuts"
                target="_blank"
                rel="noopener"
              >
                <img src="/assets/tooltip.svg" alt="info circle tooltip" />
                <p class="toolTip">
                  Click for more info on the shortcuts option in your manifest.
                </p>
              </a>
            </div>
            <p>Links to key tasks or pages within your PWA</p>
            <sl-details class="field-details" summary="Click to edit shortcuts" data-field="shortcuts">
              <sl-button @click=${()=>this.addFieldToHTML("shortcuts")} ?disabled=${this.shortcutHTML.length!=0}>Add Shortcut</sl-button>
              <div class="items-holder">
                ${this.manifest.shortcuts&&Array.isArray(this.manifest.shortcuts)?this.manifest.shortcuts.map((e,t)=>O`
                    <div class="field-holder">
                      <div class="editable">
                        <h4 class="shortcut-header">Shortcut #${t+1}</h4>
                        <sl-icon-button name="x-lg" label="close" style="font-size: 1rem;" data-tag=${"shortcuts "+t.toString()} @click=${()=>this.removeData("shortcuts "+t.toString())}></sl-icon-button>                      
                      </div>
                      <sl-input class="field-input" name="name" placeholder="Shortcut name" value=${e.name||""} data-tag=${"shortcuts "+t.toString()} @sl-change=${()=>this.updateExistingData("shortcuts "+t.toString())}></sl-input>
                      <sl-input class="field-input" name="url" placeholder="Shortcut url" value=${e.url||""} data-tag=${"shortcuts "+t.toString()} @sl-change=${()=>this.updateExistingData("shortcuts "+t.toString())}></sl-input>
                      <sl-input class="field-input" name="src" placeholder="Shortcut icon src" value=${e.icons?e.icons[0].src:""} data-tag=${"shortcuts "+t.toString()} @sl-change=${()=>this.updateExistingData("shortcuts "+t.toString())}></sl-input>
                      <sl-input class="field-input" name="desc" placeholder="Shortcut description" value=${e.description||""} data-tag=${"shortcuts "+t.toString()} @sl-change=${()=>this.updateExistingData("shortcuts "+t.toString())}></sl-input>
                    </div>
                  `):O``}
                ${this.shortcutHTML.map(e=>e)}
                </div>
            </sl-details>
          </div>
          <div class="form-field">
            <div class="field-header">
              <h3>Protocol Handlers</h3>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/Manifest/protocol_handlers"
                target="_blank"
                rel="noopener"
              >
                <img src="/assets/tooltip.svg" alt="info circle tooltip" />
                <p class="toolTip">
                  Click for more info on the protocol handlers option in your manifest.
                </p>
              </a>
            </div>
            <p>Protocols this web app can register and handle</p>
            <sl-details class="field-details" summary="Click to edit protocol handlers" data-field="protocol_handlers">
              <sl-button @click=${()=>this.addFieldToHTML("protocol_handlers")} ?disabled=${this.protocolHTML.length!=0}>Add Protocol</sl-button>
              <div class="items-holder">
                ${this.manifest.protocol_handlers&&Array.isArray(this.manifest.protocol_handlers)?this.manifest.protocol_handlers.map((e,t)=>O`
                    <div class="field-holder">
                      <div class="editable">
                        <h4 class="shortcut-header">Protocol Handler #${t+1}</h4>
                        <sl-icon-button name="x-lg" label="close" style="font-size: 1rem;" data-tag=${"protocol "+t.toString()} @click=${()=>this.removeData("protocol "+t.toString())}></sl-icon-button>                      
                      </div>
                      <sl-input class="field-input" name="protocol" placeholder="Protocol" value=${e.protocol||""} data-tag=${"protocol "+t.toString()} @sl-change=${()=>this.updateExistingData("protocol "+t.toString())}></sl-input>
                      <sl-input class="field-input" name="url" placeholder="URL" value=${e.url||""} data-tag=${"protocol "+t.toString()} @sl-change=${()=>this.updateExistingData("protocol "+t.toString())}></sl-input>
                    </div>
                  `):O``}
                ${this.protocolHTML.map(e=>e)}
                </div>
            </sl-details>
          </div>
          <div class="form-field">
            <div class="field-header">
              <h3>Categories</h3>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/Manifest/categories"
                target="_blank"
                rel="noopener"
              >
                <img src="/assets/tooltip.svg" alt="info circle tooltip" />
                <p class="toolTip">
                  Click for more info on the categories option in your manifest.
                </p>
              </a>
            </div>
            <p>The categories your PWA belongs to</p>
              <div id="cat-field"  data-field="categories">
                ${hg.map(e=>{var t;return O`<sl-checkbox class="cat-check" @sl-change=${()=>this.updateCategories()} value=${e} ?checked=${(t=this.manifest.categories)==null?void 0:t.includes(e)}>${e}</sl-checkbox>`})}
                    
              </div>
          </div>
        </div>
      </div>
    `}};Ks([Ne({type:Object,hasChanged(s,e){return s!==e&&s.name&&(Vo=!0),s!==e}})],Ii.prototype,"manifest",void 0);Ks([q()],Ii.prototype,"shortcutHTML",void 0);Ks([q()],Ii.prototype,"protocolHTML",void 0);Ks([q()],Ii.prototype,"relatedAppsHTML",void 0);Ii=Ks([jt("manifest-platform-form")],Ii);function Vn(s,e){let t;try{e&&(t=new URL(e))}catch(i){i instanceof TypeError||console.error(i)}if(!t)try{s&&e&&(t=new URL(e,s))}catch(i){console.error(i)}return!t&&s?new URL(s):t}var st=globalThis&&globalThis.__decorate||function(s,e,t,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,i);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(r=(n<3?o(r):n>3?o(e,t,r):o(e,t))||r);return n>3&&r&&Object.defineProperty(e,t,r),r};const ah="https://appimagegenerator-prod.azurewebsites.net";let jo=!1;const lh=[{label:"Windows 11",value:"windows11"},{label:"Android",value:"android"},{label:"iOS",value:"ios"}];let Xe=class extends Je{constructor(){super(),this.manifest={},this.manifestURL="",this.canWeGenerate=!0,this.generatingZip=!1,this.zipGenerated=!1,this.uploadImageObjectUrl="",this.errored=!1,this.selectedPlatforms=[...lh],this.srcList=[],this.shouldValidateAllFields=!0,this.errorCount=0}static get styles(){return Vt`

      sl-checkbox::part(base),
      sl-checkbox::part(control),
      sl-button::part(base) {
        --sl-button-font-size-medium: 14px;
        --sl-input-font-size-medium: 16px;
        --sl-toggle-size: 16px;
      }
      #form-holder {
        display: flex;
        flex-direction: column;
        row-gap: 1em;
      }
      .form-field {
        width: 50%;
        row-gap: .25em;
        display: flex;
        flex-direction: column;
      }
      .form-field {
        display: flex;
        column-gap: 1em;
        width: 100%;
      }
      .form-field h3 {
        font-size: 18px;
        margin: 0;
      }
      .form-field p {
        font-size: 14px;
        margin: 0;
      }

      .field-header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        column-gap: 5px;
      }

      .header-left{
        display: flex;
        align-items: center;
        column-gap: 5px;
      }
      
      .toolTip {
        visibility: hidden;
        width: 150px;
        background: black;
        color: white;
        font-weight: 500;
        text-align: center;
        border-radius: 6px;
        padding: .75em;
        /* Position the tooltip */
        position: absolute;
        top: 20px;
        left: -25px;
        z-index: 1;
        box-shadow: 0px 2px 20px 0px #0000006c;
      }
      .field-header a {
        display: flex;
        align-items: center;
        position: relative;
        color: black;
      }
      a:hover .toolTip {
        visibility: visible;
      }
      a:visited, a:focus {
        color: black;
      }
      #icon-section {
        display: flex;
        flex-direction: column;
        margin: 10px 0;
      }
      #input-file {
        display: none;
      }
      .icon {
        max-width: 115px;
      }
      .icon-gallery {
        display: flex;
        gap: 7px;
        flex-wrap: wrap;
      }
      .icon-box {
        display: flex;
        flex-direction: column;
      }
      .icon-box p {
        margin: 0 10px;
      }
      #icon-options {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr .25fr;
        place-items: center;
        gap: .5em;
      }

      #icon-options sl-button {
        grid-column: 2;
      }

      #selected-icon {
        max-width: 115px;
      }
      #platforms-to-generate {
        display: flex;
        flex-direction: column;
        row-gap: 5px;
      }
      .error {
        color: #eb5757
      }

      @media(max-width: 765px){
        sl-checkbox::part(base),
        sl-checkbox::part(control) {
          --sl-input-font-size-medium: 14px;
          --sl-toggle-size: 14px;
        }
      }

      @media(max-width: 600px){
        .icon {
            max-width: 90px;
        }

        #icon-options {
          grid-template-columns: .25fr 1fr;
        }

        #selected-icon {
          max-width: 90px;
        }
        
      }

      @media(max-width: 480px){

        sl-button::part(base) {
          --sl-button-font-size-medium: 12px;
        }

        .form-field p {
          font-size: 12px;
        }

        .form-field h3 {
          font-size: 16px;
        }

        #selected-icon {
          max-width: 70px;
        }
        
      }

    `}async updated(e){jo&&(jo=!1,this.requestValidateAllFields(),await this.iconSrcListParse())}async requestValidateAllFields(){if(this.shouldValidateAllFields=!0,!this.validationPromise)for(;this.shouldValidateAllFields;)this.shouldValidateAllFields=!1,this.validationPromise=this.validateAllFields(),await this.validationPromise}async validateAllFields(){let e="icons";if(this.manifest[e]){const t=await ut(e,this.manifest[e]);if(!t.valid){this.shadowRoot.querySelectorAll(".error-message")&&this.shadowRoot.querySelectorAll(".error-message").forEach(o=>o.parentElement.removeChild(o));let n=this.shadowRoot.querySelector("h3");n.classList.add("error"),t.errors&&t.errors.forEach(r=>{let o=document.createElement("p");o.innerText=r,o.style.color="#eb5757",o.classList.add("error-message"),we(o,n.parentNode.parentNode),this.errorCount++})}}else if(js.includes(e)){let t=this.shadowRoot.querySelector('[data-field="'+e+'"]');if(t.classList.add("error"),this.shadowRoot.querySelector(`.${e}-error-div`)){let r=this.shadowRoot.querySelector(`.${e}-error-div`);r.parentElement.removeChild(r)}let i=document.createElement("div");i.classList.add(`${e}-error-div`);let n=document.createElement("p");n.innerText=`${e} is required and is missing from your manifest.`,n.style.color="#eb5757",i.append(n),this.errorCount++,we(i,t.parentNode.lastElementChild)}this.validationPromise=void 0,this.errorCount==0?this.dispatchEvent(ee(!1,"icons")):this.dispatchEvent(ee(!0,"icons"))}enterFileSystem(){var t;let e=new CustomEvent("uploadIcons",{bubbles:!0,composed:!0});this.dispatchEvent(e),(t=this.shadowRoot.getElementById("input-file"))==null||t.click()}async handleModalInputFileChange(){var i,n;this.zipGenerated=!1;const t=(i=this.shadowRoot.getElementById("input-file").files)!=null?i:void 0;this.uploadSelectedImageFile=(n=t==null?void 0:t.item(0))!=null?n:void 0,this.canWeGenerate=!!this.validIconInput(),this.canWeGenerate&&this.uploadSelectedImageFile?this.uploadImageObjectUrl=URL.createObjectURL(this.uploadSelectedImageFile):this.errored=!0}validIconInput(){return[".png",".jpg",".svg"].find(t=>this&&this.uploadSelectedImageFile&&this.uploadSelectedImageFile.name.endsWith(t))}async iconSrcListParse(){if(!this.manifest&&!this.manifestURL)return;let e=[];for(let t=0;t<this.manifest.icons.length;t++){let i=this.manifest.icons[t],n=this.handleImageUrl(i)||"";await this.testImage(n).then(function(o){},function(){n=`https://pwabuilder-safe-url.azurewebsites.net/api/getSafeUrl?url=${n}`}),n&&e.push({src:n,size:i.sizes})}this.srcList=e}testImage(e){return new Promise(function(n,r){const o=new Image;o.addEventListener("load",function(){n(this)}),o.addEventListener("error",function(){r()}),o.src=e})}handleImageUrl(e){var i;if(e.src.indexOf("data:")===0&&e.src.indexOf("base64")!==-1)return e.src;let t=Vn(this.manifestURL,(i=this.manifest)==null?void 0:i.startUrl);if(t=Vn(t==null?void 0:t.href,e.src),t)return t.href}handlePlatformChange(e,t){if(e.path[0].checked)this.selectedPlatforms.push(t);else{let n=this.selectedPlatforms.indexOf(t);this.selectedPlatforms.splice(n,1)}this.canWeGenerate=this.selectedPlatforms.length!=0}async generateZip(){let e=[];this.selectedPlatforms.forEach(n=>e.push(n.label));let t=new CustomEvent("generateIconsAttempted",{detail:{selectedPlatforms:e},bubbles:!0,composed:!0});this.dispatchEvent(t),this.generatingZip=!0;const i=this.uploadSelectedImageFile;try{const n=new FormData,r="transparent",o=.3;n.append("fileName",i),n.append("padding",String(o)),n.append("color",r),this.selectedPlatforms.forEach(h=>n.append("platform",h.value));const l=await(await fetch(`${ah}/api/image`,{method:"POST",body:n})).json();if(l.Message)throw new Error("Error from service: "+l.Message);this.zipGenerated=!0,setTimeout(()=>{this.zipGenerated=!1},3e3),this.generatingZip=!1,this.downloadZip(`${ah}${l.Uri}`)}catch(n){console.error(n)}}downloadZip(e){const t=document.createElement("a");t.href=e,t.download="",t.click()}render(){return O`
      <div id="form-holder">
        <div class="form-field">
          <div class="field-header">
            <div class="header-left">
              <h3>App Icons</h3>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/Manifest/icons"
                target="_blank"
                rel="noopener"
              >
                <img src="/assets/tooltip.svg" alt="info circle tooltip" />
                <p class="toolTip">
                  Click for more info on the icons option in your manifest.
                </p>
              </a>
            </div>

            <p>(required)</p>
          </div>
          <p>Below are the current Icons in your apps Manifest</p>
          <div class="icon-gallery">
            ${this.srcList.map(e=>O`<div class="icon-box"><img class="icon" src=${e.src}  alt="your app icon size ${e.size}" decoding="async" loading="lazy" /> <p>${e.size}</p></div>`)}
          </div>
          <h3>Generate Icons</h3>
          <p>We suggest at least one image 512x512 or larger.</p>
          <div id="icon-section">
            <sl-button class="image-buttons" @click=${()=>this.enterFileSystem()} >Upload</sl-button>
            <input
              id="input-file"
              class="file-input hidden"
              type="file"
              aria-hidden="true"
              accept="image/*"
              @change=${()=>this.handleModalInputFileChange()}
            />
          </div>
          ${this.uploadImageObjectUrl?O`
          <div id="icon-options">
            <img id="selected-icon" src=${this.uploadImageObjectUrl} />
            <div id="platforms-to-generate">
              <p>Select the platforms to generate images for:</p>
              ${lh.map(e=>O`<sl-checkbox value=${e.value} @sl-change=${t=>this.handlePlatformChange(t,e)} checked>${e.label}</sl-checkbox>`)}
            </div>
            ${this.canWeGenerate?O`<sl-button @click=${this.generateZip} ?loading=${this.generatingZip}>${this.zipGenerated?O`Zip Generated!`:O`Generate Zip`}</sl-button>`:O`<sl-tooltip content="Upload a new icon to generate another zip."><sl-button @click=${this.generateZip} disabled>Generate Zip</sl-button></sl-tooltip>`}
          </div>`:O``}
        </div>
      </div>
    `}};st([Ne({type:Object,hasChanged(s,e){return s!==e&&s.name&&(jo=!0),s!==e}})],Xe.prototype,"manifest",void 0);st([Ne({type:String})],Xe.prototype,"manifestURL",void 0);st([q()],Xe.prototype,"uploadSelectedImageFile",void 0);st([q()],Xe.prototype,"canWeGenerate",void 0);st([q()],Xe.prototype,"generatingZip",void 0);st([q()],Xe.prototype,"zipGenerated",void 0);st([q()],Xe.prototype,"uploadImageObjectUrl",void 0);st([q()],Xe.prototype,"errored",void 0);st([q()],Xe.prototype,"selectedPlatforms",void 0);st([q()],Xe.prototype,"srcList",void 0);Xe=st([jt("manifest-icons-form")],Xe);const cg="https://pwa-screenshots.azurewebsites.net";var Go;(function(s){s.colorScheme="getColorScheme",s.base64="screenshotsAsBase64Strings",s.zip="downloadScreenshotsZipFile"})(Go||(Go={}));async function dg(s){try{const e=await fetch(`${cg}/${Go.base64}`,{method:"POST",headers:{"content-type":"application/json","Access-Control-Allow-Origin":"*"},referrerPolicy:"origin",credentials:"omit",body:JSON.stringify({url:s})});if(e.ok){const t=await e.json();let i;try{i=[]}catch{i=[]}return i=i.concat(t.images.map(n=>(n.src="data:image/png;base64,"+n.src,n))),i}else throw new Error(await e.text())}catch(e){console.error(e)}}var Le=globalThis&&globalThis.__decorate||function(s,e,t,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,i);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(r=(n<3?o(r):n>3?o(e,t,r):o(e,t))||r);return n>3&&r&&Object.defineProperty(e,t,r),r};let Ko=!1,ke=class extends Je{constructor(){super(),this.manifest={},this.manifestURL="",this.baseURL="",this.screenshotUrlList=[void 0],this.screenshotListValid=[],this.addScreenshotUrlDisabled=!0,this.generateScreenshotButtonDisabled=!0,this.awaitRequest=!1,this.screenshotsList=[],this.initialScreenshotLength=-1,this.srcList=[],this.newSrcList=[],this.showSuccessMessage=!1,this.showErrorMessage=!1,this.shouldValidateAllFields=!0,this.errorCount=0}static get styles(){return Vt`
      :host {
        --sl-focus-ring-width: 3px;
        --sl-input-focus-ring-color: #4f3fb670;
        --sl-focus-ring: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
        --sl-input-border-color-focus: #4F3FB6ac;
      }
      sl-input::part(base),
      sl-select::part(control),
      sl-button::part(base) {
        --sl-input-font-size-medium: 16px;
        --sl-input-height-medium: 3em;
        --sl-button-font-size-medium: 14px;
      }

      sl-input::part(base),
      sl-select::part(control){
        background-color: #fbfbfb;
      }

      
      
      #form-holder {
        display: flex;
        flex-direction: column;
        row-gap: 1em;
      }
      .form-field {
        width: 50%;
        row-gap: .25em;
        display: flex;
        flex-direction: column;
      }
      .form-field {
        display: flex;
        column-gap: 1em;
        width: 100%;
      }
      .form-field h3 {
        font-size: 18px;
        margin: 0;
      }
      .form-field p {
        font-size: 14px;
        margin: 0;
      }
      .field-header{
        display: flex;
        align-items: center;
        column-gap: 5px;
      }
      .toolTip {
        visibility: hidden;
        width: 150px;
        background: black;
        color: white;
        font-weight: 500;
        text-align: center;
        border-radius: 6px;
        padding: .75em;
        /* Position the tooltip */
        position: absolute;
        top: 20px;
        left: -25px;
        z-index: 1;
        box-shadow: 0px 2px 20px 0px #0000006c;
      }
      .field-header a {
        display: flex;
        align-items: center;
        position: relative;
        color: black;
      }
      a:hover .toolTip {
        visibility: visible;
      }
      a:visited, a:focus {
        color: black;
      }
      .sc-gallery {
        display: flex;
        gap: 7px;
        flex-wrap: wrap;
      }
      .screenshot {
        height: 150px;
        width: auto;
      }
      sl-input {
        width: 50%;
      }
      #add-sc {
        width: 50%;
      }
      .center_text {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        font-size: 16px;
      }

      .screenshots-actions button {
        width: fit-content;
        height: fit-content;
      }

      @keyframes slide {
        0% , 100%{ bottom: -35px}
        25% , 75%{ bottom: -2px}
        20% , 80%{ bottom: 2px}
      }
      @keyframes rotate {
        0% { transform: rotate(-15deg)}
        25% , 75%{ transform: rotate(0deg)}
        100% {  transform: rotate(25deg)}
      }

      .error {
        color: #eb5757;
      }

      @media(max-width: 765px){

        sl-input {
          width: 100%;
        }
        
      }

      @media(max-width: 600px){
        sl-input::part(base),
        sl-select::part(control),
        sl-button::part(base) {
          --sl-input-font-size-medium: 14px;
          --sl-input-height-medium: 2.5em;
          --sl-button-font-size-medium: 12px;
        }
      }

      @media(max-width: 480px){
        .form-field p {
          font-size: 12px;
        }

        .form-field h3 {
          font-size: 16px;
        }
      }
  
    `}async updated(e){Ko&&(Ko=!1,this.requestValidateAllFields(),await this.screenshotSrcListParse(),await this.newScreenshotSrcListParse(),this.manifest.screenshots&&this.initialScreenshotLength==-1?this.initialScreenshotLength=this.manifest.screenshots.length:this.initialScreenshotLength=0)}async requestValidateAllFields(){if(this.shouldValidateAllFields=!0,!this.validationPromise)for(;this.shouldValidateAllFields;)this.shouldValidateAllFields=!1,this.validationPromise=this.validateAllFields(),await this.validationPromise}async validateAllFields(){let e="screenshots";if(this.manifest[e]){const t=await ut(e,this.manifest[e]);if(!t.valid){let n=this.shadowRoot.querySelector("h3");n.classList.add("error"),t.errors&&t.errors.forEach(r=>{let o=document.createElement("p");o.innerText=r,o.style.color="#eb5757",o.classList.add("error-message"),we(o,n.parentNode),this.errorCount++})}}else js.includes(e)&&this.shadowRoot.querySelector('[data-field="'+e+'"]').classList.add("error");this.validationPromise=void 0,this.errorCount==0?this.dispatchEvent(ee(!1,"screenshots")):this.dispatchEvent(ee(!0,"screenshots"))}renderScreenshotInputUrlList(){const e=(t,i)=>O`<sl-input
          placeholder="https://www.example.com/screenshot"
          value="${this.baseURL||""}"
          @input=${this.handleScreenshotButtonEnabled}
          @sl-change=${this.handleScreenshotUrlChange}
          data-index=${i}
        ></sl-input>`;return this.screenshotUrlList.map(e)}handleScreenshotUrlChange(e){const t=e.target,i=Number(t.dataset.index);this.screenshotUrlList[i]=t.value,this.screenshotListValid=this.validateScreenshotUrlsList(this.screenshotUrlList),this.addScreenshotUrlDisabled=!this.disableAddUrlButton(),this.generateScreenshotButtonDisabled=!this.hasScreenshotsToGenerate()}addNewScreenshot(){this.screenshotUrlList=[...this.screenshotUrlList||[],void 0],this.addScreenshotUrlDisabled=!this.disableAddUrlButton(),this.generateScreenshotButtonDisabled=!this.hasScreenshotsToGenerate()}disableAddUrlButton(){var e;return((e=this.screenshotUrlList)==null?void 0:e.length)<8&&this.hasScreenshotsToGenerate()}handleScreenshotButtonEnabled(){this.generateScreenshotButtonDisabled===!0&&(this.generateScreenshotButtonDisabled=!1)}hasScreenshotsToGenerate(){return this.screenshotUrlList.length&&!this.screenshotListValid.includes(!1)&&!this.screenshotUrlList.includes(void 0)}validateScreenshotUrlsList(e){const t=[],i=/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w\-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/,n=e.length;for(let r=0;r<n;r++){const o=e[r];t[r]=o?i.test(o):!1}return t}async generateScreenshots(){var t;let e=new CustomEvent("generateScreenshotsAttempted",{bubbles:!0,composed:!0});this.dispatchEvent(e),this.validationPromise&&await this.validationPromise;try{if(this.awaitRequest=!0,this.screenshotUrlList&&this.screenshotUrlList.length){const i=await dg(this.screenshotUrlList);if(i){this.screenshotsList=i;let n=new CustomEvent("manifestUpdated",{detail:{field:"screenshots",change:i},bubbles:!0,composed:!0});this.dispatchEvent(n);let r=new CustomEvent("screenshotsUpdated",{detail:{screenshots:i},bubbles:!0,composed:!0});this.dispatchEvent(r);let o=this.shadowRoot.querySelector("h3");if(o.classList.contains("error")){o.classList.toggle("error"),this.errorCount--;let a=this.shadowRoot.querySelector(".error-message");(t=a==null?void 0:a.parentNode)==null||t.removeChild(a)}this.showSuccessMessage=!0}}}catch(i){console.error(i),this.showErrorMessage=!0}this.awaitRequest=!1,this.errorCount==0?this.dispatchEvent(ee(!1,"screenshots")):this.dispatchEvent(ee(!0,"screenshots"))}async screenshotSrcListParse(){if(!this.manifest||!this.manifest.screenshots)return;let e=[],t=this.initialScreenshotLength;for(let i=0;i<this.manifest.screenshots.length;i++){let n=this.manifest.screenshots[i],r=this.handleImageUrl(n)||"";await this.testImage(r).then(function(a){},function(){r=`https://pwabuilder-safe-url.azurewebsites.net/api/getSafeUrl?url=${r}`}),r&&t!=0&&(e.push(r),t--)}this.srcList=e}async newScreenshotSrcListParse(){if(!this.manifest)return;let e=[];if(this.manifest.screenshots&&this.manifest.screenshots.length>this.initialScreenshotLength){let t=this.initialScreenshotLength;for(let i=0;i<this.manifest.screenshots.length;i++){let n=this.manifest.screenshots[i];if(t!=0)t--;else{let r=this.handleImageUrl(n)||"";await this.testImage(r).then(function(a){},function(){r=`https://pwabuilder-safe-url.azurewebsites.net/api/getSafeUrl?url=${r}`}),r&&e.push(r)}}}this.newSrcList=e}testImage(e){return new Promise(function(n,r){const o=new Image;o.addEventListener("load",function(){n(this)}),o.addEventListener("error",function(){r()}),o.src=e})}handleImageUrl(e){var i;if(e.src.indexOf("data:")===0&&e.src.indexOf("base64")!==-1)return e.src;let t=Vn(this.manifestURL,(i=this.manifest)==null?void 0:i.startUrl);if(t=Vn(t==null?void 0:t.href,e.src),t)return t.href}render(){return O`
      <div id="form-holder">
        <div class="form-field">
          <div class="field-header">
            <h3>Screenshots</h3>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/Manifest/screenshots"
              target="_blank"
              rel="noopener"
            >
              <img src="/assets/tooltip.svg" alt="info circle tooltip" />
              <p class="toolTip">
                Click for more info on the screenshots option in your manifest.
              </p>
            </a>
          </div>
          <p>Below are the screenshots that are currently in your manifest.</p>
          <div class="sc-gallery">
            ${this.srcList.length>0?this.srcList.map(e=>O`<img class="screenshot" src=${e} alt="your app screenshot" decoding="async" loading="lazy"/>`):O`<div class="center_text"><sl-icon name="card-image"></sl-icon> There are no screenshots in your manifest</div>`}
          </div>
          <h3>Generate Screenshots</h3>
          <p>Specify the URLs to generate desktop and mobile screenshots from. You may add up to 8 screenshots or Store Listings.</p>
          ${this.renderScreenshotInputUrlList()}
          <sl-button id="add-sc" @click=${this.addNewScreenshot} ?disabled=${this.addScreenshotUrlDisabled}>+ Add URL</sl-button>
          
          <div class="screenshots-actions">
            <sl-button
              type="submit"
              ?loading=${this.awaitRequest}
              ?disabled=${this.generateScreenshotButtonDisabled}
              @click=${this.generateScreenshots}
              >Generate Screenshots</sl-button>
          </div>
          <div class="sc-gallery">
            ${this.newSrcList.map(e=>O`<img class="screenshot" alt="your generated screenshot" src=${e} />`)}
          </div>
        </div>
      </div>
    `}};Le([Ne({type:Object,hasChanged(s,e){return s!==e&&s.name&&(Ko=!0),s!==e}})],ke.prototype,"manifest",void 0);Le([Ne({type:String})],ke.prototype,"manifestURL",void 0);Le([Ne({type:String})],ke.prototype,"baseURL",void 0);Le([q()],ke.prototype,"screenshotUrlList",void 0);Le([q()],ke.prototype,"screenshotListValid",void 0);Le([q()],ke.prototype,"addScreenshotUrlDisabled",void 0);Le([q()],ke.prototype,"generateScreenshotButtonDisabled",void 0);Le([q()],ke.prototype,"awaitRequest",void 0);Le([q()],ke.prototype,"screenshotsList",void 0);Le([q()],ke.prototype,"initialScreenshotLength",void 0);Le([q()],ke.prototype,"srcList",void 0);Le([q()],ke.prototype,"newSrcList",void 0);Le([q()],ke.prototype,"showSuccessMessage",void 0);Le([q()],ke.prototype,"showErrorMessage",void 0);ke=Le([jt("manifest-screenshots-form")],ke);function Qd(s){return typeof s!="string"&&(s=JSON.stringify(s,void 0,2)),s=s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),s.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,function(e){return e})}var fg=globalThis&&globalThis.__decorate||function(s,e,t,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,i);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(r=(n<3?o(r):n>3?o(e,t,r):o(e,t))||r);return n>3&&r&&Object.defineProperty(e,t,r),r};let hh=class extends Je{static get styles(){return Vt`
      #toast {
        position: fixed;
        bottom: 16px;
        right: 16px;
        background: slategrey;
        color: white;
        padding: 12px;
        border-radius: 6px;
        font-weight: bold;
        animation-name: slideup;
        animation-duration: 300ms;
      }
      @keyframes slideup {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0px);
        }
      }
      @media(max-width: 450px){
        #toast {
          right: 16px;
          left: 16px;
          text-align: center;
        }
      }
    `}constructor(){super()}render(){return O`
      <div id="toast">
        <slot></slot>
      </div>
    `}};hh=fg([jt("app-toast")],hh);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const sl=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,nl=Symbol(),ch=new WeakMap;class ef{constructor(e,t,i){if(this._$cssResult$=!0,i!==nl)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(sl&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=ch.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&ch.set(t,e))}return e}toString(){return this.cssText}}const ug=s=>new ef(typeof s=="string"?s:s+"",void 0,nl),pg=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((i,n,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+s[r+1],s[0]);return new ef(t,s,nl)},mg=(s,e)=>{sl?s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),n=window.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=t.cssText,s.appendChild(i)})},dh=sl?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return ug(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ao;const fh=window.trustedTypes,gg=fh?fh.emptyScript:"",uh=window.reactiveElementPolyfillSupport,Yo={toAttribute(s,e){switch(e){case Boolean:s=s?gg:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},tf=(s,e)=>e!==s&&(e==e||s==s),lo={attribute:!0,type:String,converter:Yo,reflect:!1,hasChanged:tf};class wi extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;(t=this.h)!==null&&t!==void 0||(this.h=[]),this.h.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const n=this._$Ep(i,t);n!==void 0&&(this._$Ev.set(n,i),e.push(n))}),e}static createProperty(e,t=lo){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,n=this.getPropertyDescriptor(e,i,t);n!==void 0&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(n){const r=this[e];this[t]=n,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||lo}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const n of i)this.createProperty(n,t[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const n of i)t.unshift(dh(n))}else e!==void 0&&t.push(dh(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return mg(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=lo){var n,r;const o=this.constructor._$Ep(e,i);if(o!==void 0&&i.reflect===!0){const a=((r=(n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==null&&r!==void 0?r:Yo.toAttribute)(t,i.type);this._$El=e,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$El=null}}_$AK(e,t){var i,n;const r=this.constructor,o=r._$Ev.get(e);if(o!==void 0&&this._$El!==o){const a=r.getPropertyOptions(o),l=a.converter,h=(n=(i=l==null?void 0:l.fromAttribute)!==null&&i!==void 0?i:typeof l=="function"?l:null)!==null&&n!==void 0?n:Yo.fromAttribute;this._$El=o,this[o]=h(t,a.type),this._$El=null}}requestUpdate(e,t,i){let n=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||tf)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,r)=>this[r]=n),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostUpdate)===null||r===void 0?void 0:r.call(n)}),this.update(i)):this._$Ek()}catch(n){throw t=!1,this._$Ek(),n}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}wi.finalized=!0,wi.elementProperties=new Map,wi.elementStyles=[],wi.shadowRootOptions={mode:"open"},uh==null||uh({ReactiveElement:wi}),((ao=globalThis.reactiveElementVersions)!==null&&ao!==void 0?ao:globalThis.reactiveElementVersions=[]).push("1.3.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ho;const Bi=globalThis.trustedTypes,ph=Bi?Bi.createPolicy("lit-html",{createHTML:s=>s}):void 0,Pt=`lit$${(Math.random()+"").slice(9)}$`,sf="?"+Pt,bg=`<${sf}>`,Ni=document,As=(s="")=>Ni.createComment(s),Ms=s=>s===null||typeof s!="object"&&typeof s!="function",nf=Array.isArray,yg=s=>nf(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",is=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,mh=/-->/g,gh=/>/g,Xt=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),bh=/'/g,yh=/"/g,rf=/^(?:script|style|textarea|title)$/i,vg=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),wg=vg(1),zi=Symbol.for("lit-noChange"),le=Symbol.for("lit-nothing"),vh=new WeakMap,xg=(s,e,t)=>{var i,n;const r=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let o=r._$litPart$;if(o===void 0){const a=(n=t==null?void 0:t.renderBefore)!==null&&n!==void 0?n:null;r._$litPart$=o=new Ys(e.insertBefore(As(),a),a,void 0,t!=null?t:{})}return o._$AI(s),o},ki=Ni.createTreeWalker(Ni,129,null,!1),Sg=(s,e)=>{const t=s.length-1,i=[];let n,r=e===2?"<svg>":"",o=is;for(let l=0;l<t;l++){const h=s[l];let c,d,f=-1,u=0;for(;u<h.length&&(o.lastIndex=u,d=o.exec(h),d!==null);)u=o.lastIndex,o===is?d[1]==="!--"?o=mh:d[1]!==void 0?o=gh:d[2]!==void 0?(rf.test(d[2])&&(n=RegExp("</"+d[2],"g")),o=Xt):d[3]!==void 0&&(o=Xt):o===Xt?d[0]===">"?(o=n!=null?n:is,f=-1):d[1]===void 0?f=-2:(f=o.lastIndex-d[2].length,c=d[1],o=d[3]===void 0?Xt:d[3]==='"'?yh:bh):o===yh||o===bh?o=Xt:o===mh||o===gh?o=is:(o=Xt,n=void 0);const p=o===Xt&&s[l+1].startsWith("/>")?" ":"";r+=o===is?h+bg:f>=0?(i.push(c),h.slice(0,f)+"$lit$"+h.slice(f)+Pt+p):h+Pt+(f===-2?(i.push(void 0),l):p)}const a=r+(s[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return[ph!==void 0?ph.createHTML(a):a,i]};class $s{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let r=0,o=0;const a=e.length-1,l=this.parts,[h,c]=Sg(e,t);if(this.el=$s.createElement(h,i),ki.currentNode=this.el.content,t===2){const d=this.el.content,f=d.firstChild;f.remove(),d.append(...f.childNodes)}for(;(n=ki.nextNode())!==null&&l.length<a;){if(n.nodeType===1){if(n.hasAttributes()){const d=[];for(const f of n.getAttributeNames())if(f.endsWith("$lit$")||f.startsWith(Pt)){const u=c[o++];if(d.push(f),u!==void 0){const p=n.getAttribute(u.toLowerCase()+"$lit$").split(Pt),m=/([.?@])?(.*)/.exec(u);l.push({type:1,index:r,name:m[2],strings:p,ctor:m[1]==="."?Cg:m[1]==="?"?Mg:m[1]==="@"?$g:Tr})}else l.push({type:6,index:r})}for(const f of d)n.removeAttribute(f)}if(rf.test(n.tagName)){const d=n.textContent.split(Pt),f=d.length-1;if(f>0){n.textContent=Bi?Bi.emptyScript:"";for(let u=0;u<f;u++)n.append(d[u],As()),ki.nextNode(),l.push({type:2,index:++r});n.append(d[f],As())}}}else if(n.nodeType===8)if(n.data===sf)l.push({type:2,index:r});else{let d=-1;for(;(d=n.data.indexOf(Pt,d+1))!==-1;)l.push({type:7,index:r}),d+=Pt.length-1}r++}}static createElement(e,t){const i=Ni.createElement("template");return i.innerHTML=e,i}}function Fi(s,e,t=s,i){var n,r,o,a;if(e===zi)return e;let l=i!==void 0?(n=t._$Cl)===null||n===void 0?void 0:n[i]:t._$Cu;const h=Ms(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),h===void 0?l=void 0:(l=new h(s),l._$AT(s,t,i)),i!==void 0?((o=(a=t)._$Cl)!==null&&o!==void 0?o:a._$Cl=[])[i]=l:t._$Cu=l),l!==void 0&&(e=Fi(s,l._$AS(s,e.values),l,i)),e}class kg{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:i},parts:n}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:Ni).importNode(i,!0);ki.currentNode=r;let o=ki.nextNode(),a=0,l=0,h=n[0];for(;h!==void 0;){if(a===h.index){let c;h.type===2?c=new Ys(o,o.nextSibling,this,e):h.type===1?c=new h.ctor(o,h.name,h.strings,this,e):h.type===6&&(c=new Tg(o,this,e)),this.v.push(c),h=n[++l]}a!==(h==null?void 0:h.index)&&(o=ki.nextNode(),a++)}return r}m(e){let t=0;for(const i of this.v)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class Ys{constructor(e,t,i,n){var r;this.type=2,this._$AH=le,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$C_=(r=n==null?void 0:n.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$C_}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Fi(this,e,t),Ms(e)?e===le||e==null||e===""?(this._$AH!==le&&this._$AR(),this._$AH=le):e!==this._$AH&&e!==zi&&this.T(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.k(e):yg(e)?this.S(e):this.T(e)}j(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.j(e))}T(e){this._$AH!==le&&Ms(this._$AH)?this._$AA.nextSibling.data=e:this.k(Ni.createTextNode(e)),this._$AH=e}$(e){var t;const{values:i,_$litType$:n}=e,r=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=$s.createElement(n.h,this.options)),n);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.m(i);else{const o=new kg(r,this),a=o.p(this.options);o.m(i),this.k(a),this._$AH=o}}_$AC(e){let t=vh.get(e.strings);return t===void 0&&vh.set(e.strings,t=new $s(e)),t}S(e){nf(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,n=0;for(const r of e)n===t.length?t.push(i=new Ys(this.j(As()),this.j(As()),this,this.options)):i=t[n],i._$AI(r),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$C_=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class Tr{constructor(e,t,i,n,r){this.type=1,this._$AH=le,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=le}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,n){const r=this.strings;let o=!1;if(r===void 0)e=Fi(this,e,t,0),o=!Ms(e)||e!==this._$AH&&e!==zi,o&&(this._$AH=e);else{const a=e;let l,h;for(e=r[0],l=0;l<r.length-1;l++)h=Fi(this,a[i+l],t,l),h===zi&&(h=this._$AH[l]),o||(o=!Ms(h)||h!==this._$AH[l]),h===le?e=le:e!==le&&(e+=(h!=null?h:"")+r[l+1]),this._$AH[l]=h}o&&!n&&this.P(e)}P(e){e===le?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class Cg extends Tr{constructor(){super(...arguments),this.type=3}P(e){this.element[this.name]=e===le?void 0:e}}const Ag=Bi?Bi.emptyScript:"";class Mg extends Tr{constructor(){super(...arguments),this.type=4}P(e){e&&e!==le?this.element.setAttribute(this.name,Ag):this.element.removeAttribute(this.name)}}class $g extends Tr{constructor(e,t,i,n,r){super(e,t,i,n,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=Fi(this,e,t,0))!==null&&i!==void 0?i:le)===zi)return;const n=this._$AH,r=e===le&&n!==le||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==le&&(n===le||r);r&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class Tg{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Fi(this,e)}}const wh=window.litHtmlPolyfillSupport;wh==null||wh($s,Ys),((ho=globalThis.litHtmlVersions)!==null&&ho!==void 0?ho:globalThis.litHtmlVersions=[]).push("2.2.7");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var co,fo;class Ci extends wi{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=xg(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return zi}}Ci.finalized=!0,Ci._$litElement$=!0,(co=globalThis.litElementHydrateSupport)===null||co===void 0||co.call(globalThis,{LitElement:Ci});const xh=globalThis.litElementPolyfillSupport;xh==null||xh({LitElement:Ci});((fo=globalThis.litElementVersions)!==null&&fo!==void 0?fo:globalThis.litElementVersions=[]).push("3.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Eg=s=>e=>typeof e=="function"?((t,i)=>(window.customElements.define(t,i),i))(s,e):((t,i)=>{const{kind:n,elements:r}=i;return{kind:n,elements:r,finisher(o){window.customElements.define(t,o)}}})(s,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pg=(s,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,s)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,s)}};function Er(s){return(e,t)=>t!==void 0?((i,n,r)=>{n.constructor.createProperty(r,i)})(s,e,t):Pg(s,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Js(s){return Er({...s,state:!0})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var uo;((uo=window.HTMLSlotElement)===null||uo===void 0?void 0:uo.prototype.assignedElements)!=null;let Ai="lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map(s=>s?parseInt(s,36):1);for(let s=1;s<Ai.length;s++)Ai[s]+=Ai[s-1];function _g(s){for(let e=1;e<Ai.length;e+=2)if(Ai[e]>s)return Ai[e-1]<=s;return!1}function Sh(s){return s>=127462&&s<=127487}const kh=8205;function We(s,e,t=!0){return(t?of:Lg)(s,e)}function of(s,e){if(e==s.length)return e;e&&af(s.charCodeAt(e))&&lf(s.charCodeAt(e-1))&&e--;let t=xe(s,e);for(e+=Ue(t);e<s.length;){let i=xe(s,e);if(t==kh||i==kh||_g(i))e+=Ue(i),t=i;else if(Sh(i)){let n=0,r=e-2;for(;r>=0&&Sh(xe(s,r));)n++,r-=2;if(n%2==0)break;e+=2}else break}return e}function Lg(s,e){for(;e>0;){let t=of(s,e-2);if(t<e)return t;e--}return 0}function af(s){return s>=56320&&s<57344}function lf(s){return s>=55296&&s<56320}function xe(s,e){let t=s.charCodeAt(e);if(!lf(t)||e+1==s.length)return t;let i=s.charCodeAt(e+1);return af(i)?(t-55296<<10)+(i-56320)+65536:t}function rl(s){return s<=65535?String.fromCharCode(s):(s-=65536,String.fromCharCode((s>>10)+55296,(s&1023)+56320))}function Ue(s){return s<65536?1:2}function Xs(s,e,t){for(let i=0;i<s.length;)s.charCodeAt(i)==9?(e+=t-e%t,i++):(e++,i=We(s,i));return e}function Jo(s,e,t){let i=arguments[3];i!=null&&(e=t,t=i);for(let n=0,r=0;n<s.length;){if(r>=e)return n;r+=s.charCodeAt(n)==9?t-r%t:1,n=We(s,n)}return s.length}class H{constructor(){}lineAt(e){if(e<0||e>this.length)throw new RangeError(`Invalid position ${e} in document of length ${this.length}`);return this.lineInner(e,!1,1,0)}line(e){if(e<1||e>this.lines)throw new RangeError(`Invalid line number ${e} in ${this.lines}-line document`);return this.lineInner(e,!0,1,0)}replace(e,t,i){let n=[];return this.decompose(0,e,n,2),i.length&&i.decompose(0,i.length,n,3),this.decompose(t,this.length,n,1),xt.from(n,this.length-(t-e)+i.length)}append(e){return this.replace(this.length,this.length,e)}slice(e,t=this.length){let i=[];return this.decompose(e,t,i,0),xt.from(i,t-e)}eq(e){if(e==this)return!0;if(e.length!=this.length||e.lines!=this.lines)return!1;let t=new In(this),i=new In(e);for(;;){if(t.next(),i.next(),t.lineBreak!=i.lineBreak||t.done!=i.done||t.value!=i.value)return!1;if(t.done)return!0}}iter(e=1){return new In(this,e)}iterRange(e,t=this.length){return new Og(this,e,t)}toString(){return this.sliceString(0)}toJSON(){let e=[];return this.flatten(e),e}static of(e){if(e.length==0)throw new RangeError("A document must have at least one line");return e.length==1&&!e[0]?H.empty:e.length<=32?new te(e):xt.from(te.split(e,[]))}}typeof Symbol!="undefined"&&(H.prototype[Symbol.iterator]=function(){return this.iter()});class te extends H{constructor(e,t=Rg(e)){super(),this.text=e,this.length=t}get lines(){return this.text.length}get children(){return null}lineInner(e,t,i,n){for(let r=0;;r++){let o=this.text[r],a=n+o.length;if((t?i:a)>=e)return new Dg(n,a,i,o);n=a+1,i++}}decompose(e,t,i,n){let r=e<=0&&t>=this.length?this:new te(Ch(this.text,e,t),Math.min(t,this.length)-Math.max(0,e));if(n&1){let o=i.pop(),a=Dn(r.text,o.text.slice(),0,r.length);if(a.length<=32)i.push(new te(a,o.length+r.length));else{let l=a.length>>1;i.push(new te(a.slice(0,l)),new te(a.slice(l)))}}else i.push(r)}replace(e,t,i){if(!(i instanceof te))return super.replace(e,t,i);let n=Dn(this.text,Dn(i.text,Ch(this.text,0,e)),t),r=this.length+i.length-(t-e);return n.length<=32?new te(n,r):xt.from(te.split(n,[]),r)}sliceString(e,t=this.length,i=`
`){let n="";for(let r=0,o=0;r<=t&&o<this.text.length;o++){let a=this.text[o],l=r+a.length;r>e&&o&&(n+=i),e<l&&t>r&&(n+=a.slice(Math.max(0,e-r),t-r)),r=l+1}return n}flatten(e){for(let t of this.text)e.push(t)}static split(e,t){let i=[],n=-1;for(let r of e)i.push(r),n+=r.length+1,i.length==32&&(t.push(new te(i,n)),i=[],n=-1);return n>-1&&t.push(new te(i,n)),t}}class xt extends H{constructor(e,t){super(),this.children=e,this.length=t,this.lines=0;for(let i of e)this.lines+=i.lines}lineInner(e,t,i,n){for(let r=0;;r++){let o=this.children[r],a=n+o.length,l=i+o.lines-1;if((t?l:a)>=e)return o.lineInner(e,t,i,n);n=a+1,i=l+1}}decompose(e,t,i,n){for(let r=0,o=0;o<=t&&r<this.children.length;r++){let a=this.children[r],l=o+a.length;if(e<=l&&t>=o){let h=n&((o<=e?1:0)|(l>=t?2:0));o>=e&&l<=t&&!h?i.push(a):a.decompose(e-o,t-o,i,h)}o=l+1}}replace(e,t,i){if(i.lines<this.lines)for(let n=0,r=0;n<this.children.length;n++){let o=this.children[n],a=r+o.length;if(e>=r&&t<=a){let l=o.replace(e-r,t-r,i),h=this.lines-o.lines+l.lines;if(l.lines<h>>5-1&&l.lines>h>>5+1){let c=this.children.slice();return c[n]=l,new xt(c,this.length-(t-e)+i.length)}return super.replace(r,a,l)}r=a+1}return super.replace(e,t,i)}sliceString(e,t=this.length,i=`
`){let n="";for(let r=0,o=0;r<this.children.length&&o<=t;r++){let a=this.children[r],l=o+a.length;o>e&&r&&(n+=i),e<l&&t>o&&(n+=a.sliceString(e-o,t-o,i)),o=l+1}return n}flatten(e){for(let t of this.children)t.flatten(e)}static from(e,t=e.reduce((i,n)=>i+n.length+1,-1)){let i=0;for(let u of e)i+=u.lines;if(i<32){let u=[];for(let p of e)p.flatten(u);return new te(u,t)}let n=Math.max(32,i>>5),r=n<<1,o=n>>1,a=[],l=0,h=-1,c=[];function d(u){let p;if(u.lines>r&&u instanceof xt)for(let m of u.children)d(m);else u.lines>o&&(l>o||!l)?(f(),a.push(u)):u instanceof te&&l&&(p=c[c.length-1])instanceof te&&u.lines+p.lines<=32?(l+=u.lines,h+=u.length+1,c[c.length-1]=new te(p.text.concat(u.text),p.length+1+u.length)):(l+u.lines>n&&f(),l+=u.lines,h+=u.length+1,c.push(u))}function f(){l!=0&&(a.push(c.length==1?c[0]:xt.from(c,h)),h=-1,l=c.length=0)}for(let u of e)d(u);return f(),a.length==1?a[0]:new xt(a,t)}}H.empty=new te([""],0);function Rg(s){let e=-1;for(let t of s)e+=t.length+1;return e}function Dn(s,e,t=0,i=1e9){for(let n=0,r=0,o=!0;r<s.length&&n<=i;r++){let a=s[r],l=n+a.length;l>=t&&(l>i&&(a=a.slice(0,i-n)),n<t&&(a=a.slice(t-n)),o?(e[e.length-1]+=a,o=!1):e.push(a)),n=l+1}return e}function Ch(s,e,t){return Dn(s,[""],e,t)}class In{constructor(e,t=1){this.dir=t,this.done=!1,this.lineBreak=!1,this.value="",this.nodes=[e],this.offsets=[t>0?1:(e instanceof te?e.text.length:e.children.length)<<1]}nextInner(e,t){for(this.done=this.lineBreak=!1;;){let i=this.nodes.length-1,n=this.nodes[i],r=this.offsets[i],o=r>>1,a=n instanceof te?n.text.length:n.children.length;if(o==(t>0?a:0)){if(i==0)return this.done=!0,this.value="",this;t>0&&this.offsets[i-1]++,this.nodes.pop(),this.offsets.pop()}else if((r&1)==(t>0?0:1)){if(this.offsets[i]+=t,e==0)return this.lineBreak=!0,this.value=`
`,this;e--}else if(n instanceof te){let l=n.text[o+(t<0?-1:0)];if(this.offsets[i]+=t,l.length>Math.max(0,e))return this.value=e==0?l:t>0?l.slice(e):l.slice(0,l.length-e),this;e-=l.length}else{let l=n.children[o+(t<0?-1:0)];e>l.length?(e-=l.length,this.offsets[i]+=t):(t<0&&this.offsets[i]--,this.nodes.push(l),this.offsets.push(t>0?1:(l instanceof te?l.text.length:l.children.length)<<1))}}}next(e=0){return e<0&&(this.nextInner(-e,-this.dir),e=this.value.length),this.nextInner(e,this.dir)}}class Og{constructor(e,t,i){this.value="",this.done=!1,this.cursor=new In(e,t>i?-1:1),this.pos=t>i?e.length:0,this.from=Math.min(t,i),this.to=Math.max(t,i)}nextInner(e,t){if(t<0?this.pos<=this.from:this.pos>=this.to)return this.value="",this.done=!0,this;this.done=!1,e+=Math.max(0,t<0?this.pos-this.to:this.from-this.pos);let i=t<0?this.pos-this.from:this.to-this.pos;e>i&&(e=i),i-=e;let{value:n}=this.cursor.next(e);return this.pos+=(n.length+e)*t,this.value=n.length<=i?n:t<0?n.slice(n.length-i):n.slice(0,i),this}next(e=0){return e<0?e=Math.max(e,this.from-this.pos):e>0&&(e=Math.min(e,this.to-this.pos)),this.nextInner(e,this.cursor.dir)}get lineBreak(){return this.cursor.lineBreak&&this.value!=""}}class Dg{constructor(e,t,i,n){this.from=e,this.to=t,this.number=i,this.text=n}get length(){return this.to-this.from}}const Xo=/\r\n?|\n/;var Ee=function(s){return s[s.Simple=0]="Simple",s[s.TrackDel=1]="TrackDel",s[s.TrackBefore=2]="TrackBefore",s[s.TrackAfter=3]="TrackAfter",s}(Ee||(Ee={}));class kt{constructor(e){this.sections=e}get length(){let e=0;for(let t=0;t<this.sections.length;t+=2)e+=this.sections[t];return e}get newLength(){let e=0;for(let t=0;t<this.sections.length;t+=2){let i=this.sections[t+1];e+=i<0?this.sections[t]:i}return e}get empty(){return this.sections.length==0||this.sections.length==2&&this.sections[1]<0}iterGaps(e){for(let t=0,i=0,n=0;t<this.sections.length;){let r=this.sections[t++],o=this.sections[t++];o<0?(e(i,n,r),n+=r):n+=o,i+=r}}iterChangedRanges(e,t=!1){Zo(this,e,t)}get invertedDesc(){let e=[];for(let t=0;t<this.sections.length;){let i=this.sections[t++],n=this.sections[t++];n<0?e.push(i,n):e.push(n,i)}return new kt(e)}composeDesc(e){return this.empty?e:e.empty?this:hf(this,e)}mapDesc(e,t=!1){return e.empty?this:Qo(this,e,t)}mapPos(e,t=-1,i=Ee.Simple){let n=0,r=0;for(let o=0;o<this.sections.length;){let a=this.sections[o++],l=this.sections[o++],h=n+a;if(l<0){if(h>e)return r+(e-n);r+=a}else{if(i!=Ee.Simple&&h>=e&&(i==Ee.TrackDel&&n<e&&h>e||i==Ee.TrackBefore&&n<e||i==Ee.TrackAfter&&h>e))return null;if(h>e||h==e&&t<0&&!a)return e==n||t<0?r:r+l;r+=l}n=h}if(e>n)throw new RangeError(`Position ${e} is out of range for changeset of length ${n}`);return r}touchesRange(e,t=e){for(let i=0,n=0;i<this.sections.length&&n<=t;){let r=this.sections[i++],o=this.sections[i++],a=n+r;if(o>=0&&n<=t&&a>=e)return n<e&&a>t?"cover":!0;n=a}return!1}toString(){let e="";for(let t=0;t<this.sections.length;){let i=this.sections[t++],n=this.sections[t++];e+=(e?" ":"")+i+(n>=0?":"+n:"")}return e}toJSON(){return this.sections}static fromJSON(e){if(!Array.isArray(e)||e.length%2||e.some(t=>typeof t!="number"))throw new RangeError("Invalid JSON representation of ChangeDesc");return new kt(e)}}class he extends kt{constructor(e,t){super(e),this.inserted=t}apply(e){if(this.length!=e.length)throw new RangeError("Applying change set to a document with the wrong length");return Zo(this,(t,i,n,r,o)=>e=e.replace(n,n+(i-t),o),!1),e}mapDesc(e,t=!1){return Qo(this,e,t,!0)}invert(e){let t=this.sections.slice(),i=[];for(let n=0,r=0;n<t.length;n+=2){let o=t[n],a=t[n+1];if(a>=0){t[n]=a,t[n+1]=o;let l=n>>1;for(;i.length<l;)i.push(H.empty);i.push(o?e.slice(r,r+o):H.empty)}r+=o}return new he(t,i)}compose(e){return this.empty?e:e.empty?this:hf(this,e,!0)}map(e,t=!1){return e.empty?this:Qo(this,e,t,!0)}iterChanges(e,t=!1){Zo(this,e,t)}get desc(){return new kt(this.sections)}filter(e){let t=[],i=[],n=[],r=new Ts(this);e:for(let o=0,a=0;;){let l=o==e.length?1e9:e[o++];for(;a<l||a==l&&r.len==0;){if(r.done)break e;let c=Math.min(r.len,l-a);Te(n,c,-1);let d=r.ins==-1?-1:r.off==0?r.ins:0;Te(t,c,d),d>0&&ii(i,t,r.text),r.forward(c),a+=c}let h=e[o++];for(;a<h;){if(r.done)break e;let c=Math.min(r.len,h-a);Te(t,c,-1),Te(n,c,r.ins==-1?-1:r.off==0?r.ins:0),r.forward(c),a+=c}}return{changes:new he(t,i),filtered:new kt(n)}}toJSON(){let e=[];for(let t=0;t<this.sections.length;t+=2){let i=this.sections[t],n=this.sections[t+1];n<0?e.push(i):n==0?e.push([i]):e.push([i].concat(this.inserted[t>>1].toJSON()))}return e}static of(e,t,i){let n=[],r=[],o=0,a=null;function l(c=!1){if(!c&&!n.length)return;o<t&&Te(n,t-o,-1);let d=new he(n,r);a=a?a.compose(d.map(a)):d,n=[],r=[],o=0}function h(c){if(Array.isArray(c))for(let d of c)h(d);else if(c instanceof he){if(c.length!=t)throw new RangeError(`Mismatched change set length (got ${c.length}, expected ${t})`);l(),a=a?a.compose(c.map(a)):c}else{let{from:d,to:f=d,insert:u}=c;if(d>f||d<0||f>t)throw new RangeError(`Invalid change range ${d} to ${f} (in doc of length ${t})`);let p=u?typeof u=="string"?H.of(u.split(i||Xo)):u:H.empty,m=p.length;if(d==f&&m==0)return;d<o&&l(),d>o&&Te(n,d-o,-1),Te(n,f-d,m),ii(r,n,p),o=f}}return h(e),l(!a),a}static empty(e){return new he(e?[e,-1]:[],[])}static fromJSON(e){if(!Array.isArray(e))throw new RangeError("Invalid JSON representation of ChangeSet");let t=[],i=[];for(let n=0;n<e.length;n++){let r=e[n];if(typeof r=="number")t.push(r,-1);else{if(!Array.isArray(r)||typeof r[0]!="number"||r.some((o,a)=>a&&typeof o!="string"))throw new RangeError("Invalid JSON representation of ChangeSet");if(r.length==1)t.push(r[0],0);else{for(;i.length<n;)i.push(H.empty);i[n]=H.of(r.slice(1)),t.push(r[0],i[n].length)}}}return new he(t,i)}}function Te(s,e,t,i=!1){if(e==0&&t<=0)return;let n=s.length-2;n>=0&&t<=0&&t==s[n+1]?s[n]+=e:e==0&&s[n]==0?s[n+1]+=t:i?(s[n]+=e,s[n+1]+=t):s.push(e,t)}function ii(s,e,t){if(t.length==0)return;let i=e.length-2>>1;if(i<s.length)s[s.length-1]=s[s.length-1].append(t);else{for(;s.length<i;)s.push(H.empty);s.push(t)}}function Zo(s,e,t){let i=s.inserted;for(let n=0,r=0,o=0;o<s.sections.length;){let a=s.sections[o++],l=s.sections[o++];if(l<0)n+=a,r+=a;else{let h=n,c=r,d=H.empty;for(;h+=a,c+=l,l&&i&&(d=d.append(i[o-2>>1])),!(t||o==s.sections.length||s.sections[o+1]<0);)a=s.sections[o++],l=s.sections[o++];e(n,h,r,c,d),n=h,r=c}}}function Qo(s,e,t,i=!1){let n=[],r=i?[]:null,o=new Ts(s),a=new Ts(e);for(let l=0,h=0;;)if(o.ins==-1)l+=o.len,o.next();else if(a.ins==-1&&h<l){let c=Math.min(a.len,l-h);a.forward(c),Te(n,c,-1),h+=c}else if(a.ins>=0&&(o.done||h<l||h==l&&(a.len<o.len||a.len==o.len&&!t))){for(Te(n,a.ins,-1);l>h&&!o.done&&l+o.len<h+a.len;)l+=o.len,o.next();h+=a.len,a.next()}else if(o.ins>=0){let c=0,d=l+o.len;for(;;)if(a.ins>=0&&h>l&&h+a.len<d)c+=a.ins,h+=a.len,a.next();else if(a.ins==-1&&h<d){let f=Math.min(a.len,d-h);c+=f,a.forward(f),h+=f}else break;Te(n,c,o.ins),r&&ii(r,n,o.text),l=d,o.next()}else{if(o.done&&a.done)return r?new he(n,r):new kt(n);throw new Error("Mismatched change set lengths")}}function hf(s,e,t=!1){let i=[],n=t?[]:null,r=new Ts(s),o=new Ts(e);for(let a=!1;;){if(r.done&&o.done)return n?new he(i,n):new kt(i);if(r.ins==0)Te(i,r.len,0,a),r.next();else if(o.len==0&&!o.done)Te(i,0,o.ins,a),n&&ii(n,i,o.text),o.next();else{if(r.done||o.done)throw new Error("Mismatched change set lengths");{let l=Math.min(r.len2,o.len),h=i.length;if(r.ins==-1){let c=o.ins==-1?-1:o.off?0:o.ins;Te(i,l,c,a),n&&c&&ii(n,i,o.text)}else o.ins==-1?(Te(i,r.off?0:r.len,l,a),n&&ii(n,i,r.textBit(l))):(Te(i,r.off?0:r.len,o.off?0:o.ins,a),n&&!o.off&&ii(n,i,o.text));a=(r.ins>l||o.ins>=0&&o.len>l)&&(a||i.length>h),r.forward2(l),o.forward(l)}}}}class Ts{constructor(e){this.set=e,this.i=0,this.next()}next(){let{sections:e}=this.set;this.i<e.length?(this.len=e[this.i++],this.ins=e[this.i++]):(this.len=0,this.ins=-2),this.off=0}get done(){return this.ins==-2}get len2(){return this.ins<0?this.len:this.ins}get text(){let{inserted:e}=this.set,t=this.i-2>>1;return t>=e.length?H.empty:e[t]}textBit(e){let{inserted:t}=this.set,i=this.i-2>>1;return i>=t.length&&!e?H.empty:t[i].slice(this.off,e==null?void 0:this.off+e)}forward(e){e==this.len?this.next():(this.len-=e,this.off+=e)}forward2(e){this.ins==-1?this.forward(e):e==this.ins?this.next():(this.ins-=e,this.off+=e)}}class xi{constructor(e,t,i){this.from=e,this.to=t,this.flags=i}get anchor(){return this.flags&16?this.to:this.from}get head(){return this.flags&16?this.from:this.to}get empty(){return this.from==this.to}get assoc(){return this.flags&4?-1:this.flags&8?1:0}get bidiLevel(){let e=this.flags&3;return e==3?null:e}get goalColumn(){let e=this.flags>>5;return e==33554431?void 0:e}map(e,t=-1){let i=e.mapPos(this.from,t),n=e.mapPos(this.to,t);return i==this.from&&n==this.to?this:new xi(i,n,this.flags)}extend(e,t=e){if(e<=this.anchor&&t>=this.anchor)return b.range(e,t);let i=Math.abs(e-this.anchor)>Math.abs(t-this.anchor)?e:t;return b.range(this.anchor,i)}eq(e){return this.anchor==e.anchor&&this.head==e.head}toJSON(){return{anchor:this.anchor,head:this.head}}static fromJSON(e){if(!e||typeof e.anchor!="number"||typeof e.head!="number")throw new RangeError("Invalid JSON representation for SelectionRange");return b.range(e.anchor,e.head)}}class b{constructor(e,t=0){this.ranges=e,this.mainIndex=t}map(e,t=-1){return e.empty?this:b.create(this.ranges.map(i=>i.map(e,t)),this.mainIndex)}eq(e){if(this.ranges.length!=e.ranges.length||this.mainIndex!=e.mainIndex)return!1;for(let t=0;t<this.ranges.length;t++)if(!this.ranges[t].eq(e.ranges[t]))return!1;return!0}get main(){return this.ranges[this.mainIndex]}asSingle(){return this.ranges.length==1?this:new b([this.main])}addRange(e,t=!0){return b.create([e].concat(this.ranges),t?0:this.mainIndex+1)}replaceRange(e,t=this.mainIndex){let i=this.ranges.slice();return i[t]=e,b.create(i,this.mainIndex)}toJSON(){return{ranges:this.ranges.map(e=>e.toJSON()),main:this.mainIndex}}static fromJSON(e){if(!e||!Array.isArray(e.ranges)||typeof e.main!="number"||e.main>=e.ranges.length)throw new RangeError("Invalid JSON representation for EditorSelection");return new b(e.ranges.map(t=>xi.fromJSON(t)),e.main)}static single(e,t=e){return new b([b.range(e,t)],0)}static create(e,t=0){if(e.length==0)throw new RangeError("A selection needs at least one range");for(let i=0,n=0;n<e.length;n++){let r=e[n];if(r.empty?r.from<=i:r.from<i)return Ig(e.slice(),t);i=r.to}return new b(e,t)}static cursor(e,t=0,i,n){return new xi(e,e,(t==0?0:t<0?4:8)|(i==null?3:Math.min(2,i))|(n!=null?n:33554431)<<5)}static range(e,t,i){let n=(i!=null?i:33554431)<<5;return t<e?new xi(t,e,16|n):new xi(e,t,n)}}function Ig(s,e=0){let t=s[e];s.sort((i,n)=>i.from-n.from),e=s.indexOf(t);for(let i=1;i<s.length;i++){let n=s[i],r=s[i-1];if(n.empty?n.from<=r.to:n.from<r.to){let o=r.from,a=Math.max(n.to,r.to);i<=e&&e--,s.splice(--i,2,n.anchor>n.head?b.range(a,o):b.range(o,a))}}return new b(s,e)}function cf(s,e){for(let t of s.ranges)if(t.to>e)throw new RangeError("Selection points outside of document")}let ol=0;class E{constructor(e,t,i,n,r){this.combine=e,this.compareInput=t,this.compare=i,this.isStatic=n,this.extensions=r,this.id=ol++,this.default=e([])}static define(e={}){return new E(e.combine||(t=>t),e.compareInput||((t,i)=>t===i),e.compare||(e.combine?(t,i)=>t===i:Bg),!!e.static,e.enables)}of(e){return new Bn([],this,0,e)}compute(e,t){if(this.isStatic)throw new Error("Can't compute a static facet");return new Bn(e,this,1,t)}computeN(e,t){if(this.isStatic)throw new Error("Can't compute a static facet");return new Bn(e,this,2,t)}from(e,t){return t||(t=i=>i),this.compute([e],i=>t(i.field(e)))}}function Bg(s,e){return s==e||s.length==e.length&&s.every((t,i)=>t===e[i])}class Bn{constructor(e,t,i,n){this.dependencies=e,this.facet=t,this.type=i,this.value=n,this.id=ol++}dynamicSlot(e){var t;let i=this.value,n=this.facet.compareInput,r=e[this.id]>>1,o=this.type==2,a=!1,l=!1,h=[];for(let c of this.dependencies)c=="doc"?a=!0:c=="selection"?l=!0:(((t=e[c.id])!==null&&t!==void 0?t:1)&1)==0&&h.push(e[c.id]);return(c,d)=>{if(!d||d.reconfigured)return c.values[r]=i(c),1;{if(!(a&&d.docChanged||l&&(d.docChanged||d.selection)||h.some(m=>(gs(c,m)&1)>0)))return 0;let u=i(c),p=d.startState.values[r];return(o?Ng(u,p,n):n(u,p))?0:(c.values[r]=u,1)}}}}function Ng(s,e,t){if(s.length!=e.length)return!1;for(let i=0;i<s.length;i++)if(!t(s[i],e[i]))return!1;return!0}function zg(s,e,t){let i=t.map(a=>s[a.id]),n=t.map(a=>a.type),r=i.filter(a=>!(a&1)),o=s[e.id]>>1;return(a,l)=>{let h=l?l.reconfigured?l.startState.config.address[e.id]:o<<1:null,c=h==null;for(let u of r)gs(a,u)&1&&(c=!0);if(!c)return 0;let d=[];for(let u=0;u<i.length;u++){let p=Mi(a,i[u]);if(n[u]==2)for(let m of p)d.push(m);else d.push(p)}let f=e.combine(d);return h!=null&&e.compare(f,Mi(l.startState,h))?0:(a.values[o]=f,1)}}function Ah(s,e){let t=s.config.address[e];return t==null?null:t>>1}const Mh=E.define({static:!0});class Me{constructor(e,t,i,n,r){this.id=e,this.createF=t,this.updateF=i,this.compareF=n,this.spec=r,this.provides=void 0}static define(e){let t=new Me(ol++,e.create,e.update,e.compare||((i,n)=>i===n),e);return e.provide&&(t.provides=e.provide(t)),t}create(e){let t=e.facet(Mh).find(i=>i.field==this);return((t==null?void 0:t.create)||this.createF)(e)}slot(e){let t=e[this.id]>>1;return(i,n)=>{if(!n||n.reconfigured&&Ah(n.startState,this.id)==null)return i.values[t]=this.create(i),1;let r,o=0;n.reconfigured?(r=n.startState.values[Ah(n.startState,this.id)],o=1):r=n.startState.values[t];let a=this.updateF(r,n);return!o&&!this.compareF(r,a)&&(o=1),o&&(i.values[t]=a),o}}init(e){return[this,Mh.of({field:this,create:e})]}get extension(){return this}}const cs={fallback:3,default:2,extend:1,override:0};function un(s){return e=>new df(e,s)}const Zs={fallback:un(cs.fallback),default:un(cs.default),extend:un(cs.extend),override:un(cs.override)};class df{constructor(e,t){this.inner=e,this.prec=t}}class Pr{of(e){return new ea(this,e)}reconfigure(e){return Pr.reconfigure.of({compartment:this,extension:e})}get(e){return e.config.compartments.get(this)}}class ea{constructor(e,t){this.compartment=e,this.inner=t}}class jn{constructor(e,t,i,n,r){for(this.base=e,this.compartments=t,this.dynamicSlots=i,this.address=n,this.staticValues=r,this.statusTemplate=[];this.statusTemplate.length<i.length;)this.statusTemplate.push(0)}staticFacet(e){let t=this.address[e.id];return t==null?e.default:this.staticValues[t>>1]}static resolve(e,t,i){let n=[],r=Object.create(null),o=new Map;for(let c of Fg(e,t,o))c instanceof Me?n.push(c):(r[c.facet.id]||(r[c.facet.id]=[])).push(c);let a=Object.create(null),l=[],h=[];for(let c of n)a[c.id]=h.length<<1,h.push(d=>c.slot(d));for(let c in r){let d=r[c],f=d[0].facet;if(d.every(u=>u.type==0)){a[f.id]=l.length<<1|1;let u=f.combine(d.map(m=>m.value)),p=i?i.config.address[f.id]:null;if(p!=null){let m=Mi(i,p);f.compare(u,m)&&(u=m)}l.push(u)}else{for(let u of d)u.type==0?(a[u.id]=l.length<<1|1,l.push(u.value)):(a[u.id]=h.length<<1,h.push(p=>u.dynamicSlot(p)));a[f.id]=h.length<<1,h.push(u=>zg(u,f,d))}}return new jn(e,o,h.map(c=>c(a)),a,l)}}function Fg(s,e,t){let i=[[],[],[],[]],n=new Map;function r(o,a){let l=n.get(o);if(l!=null){if(l>=a)return;let h=i[l].indexOf(o);h>-1&&i[l].splice(h,1),o instanceof ea&&t.delete(o.compartment)}if(n.set(o,a),Array.isArray(o))for(let h of o)r(h,a);else if(o instanceof ea){if(t.has(o.compartment))throw new RangeError("Duplicate use of compartment in extensions");let h=e.get(o.compartment)||o.inner;t.set(o.compartment,h),r(h,a)}else if(o instanceof df)r(o.inner,o.prec);else if(o instanceof Me)i[a].push(o),o.provides&&r(o.provides,a);else if(o instanceof Bn)i[a].push(o),o.facet.extensions&&r(o.facet.extensions,a);else{let h=o.extension;if(!h)throw new Error(`Unrecognized extension value in extension set (${o}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);r(h,a)}}return r(s,cs.default),i.reduce((o,a)=>o.concat(a))}function gs(s,e){if(e&1)return 2;let t=e>>1,i=s.status[t];if(i==4)throw new Error("Cyclic dependency between fields and/or facets");if(i&2)return i;s.status[t]=4;let n=s.config.dynamicSlots[t](s,s.applying);return s.status[t]=2|n}function Mi(s,e){return e&1?s.config.staticValues[e>>1]:s.values[e>>1]}const ff=E.define(),uf=E.define({combine:s=>s.some(e=>e),static:!0}),pf=E.define({combine:s=>s.length?s[0]:void 0,static:!0}),mf=E.define(),gf=E.define(),bf=E.define();class ui{constructor(e,t){this.type=e,this.value=t}static define(){return new Ug}}class Ug{of(e){return new ui(this,e)}}class Wg{constructor(e){this.map=e}of(e){return new B(this,e)}}class B{constructor(e,t){this.type=e,this.value=t}map(e){let t=this.type.map(this.value,e);return t===void 0?void 0:t==this.value?this:new B(this.type,t)}is(e){return this.type==e}static define(e={}){return new Wg(e.map||(t=>t))}static mapEffects(e,t){if(!e.length)return e;let i=[];for(let n of e){let r=n.map(t);r&&i.push(r)}return i}}B.reconfigure=B.define();B.appendConfig=B.define();class N{constructor(e,t,i,n,r,o){this.startState=e,this.changes=t,this.selection=i,this.effects=n,this.annotations=r,this.scrollIntoView=o,this._doc=null,this._state=null,i&&cf(i,t.newLength),r.some(a=>a.type==N.time)||(this.annotations=r.concat(N.time.of(Date.now())))}get newDoc(){return this._doc||(this._doc=this.changes.apply(this.startState.doc))}get newSelection(){return this.selection||this.startState.selection.map(this.changes)}get state(){return this._state||this.startState.applyTransaction(this),this._state}annotation(e){for(let t of this.annotations)if(t.type==e)return t.value}get docChanged(){return!this.changes.empty}get reconfigured(){return this.startState.config!=this.state.config}}N.time=ui.define();N.userEvent=ui.define();N.addToHistory=ui.define();N.remote=ui.define();function qg(s,e){let t=[];for(let i=0,n=0;;){let r,o;if(i<s.length&&(n==e.length||e[n]>=s[i]))r=s[i++],o=s[i++];else if(n<e.length)r=e[n++],o=e[n++];else return t;!t.length||t[t.length-1]<r?t.push(r,o):t[t.length-1]<o&&(t[t.length-1]=o)}}function yf(s,e,t){var i;let n,r,o;return t?(n=e.changes,r=he.empty(e.changes.length),o=s.changes.compose(e.changes)):(n=e.changes.map(s.changes),r=s.changes.mapDesc(e.changes,!0),o=s.changes.compose(n)),{changes:o,selection:e.selection?e.selection.map(r):(i=s.selection)===null||i===void 0?void 0:i.map(n),effects:B.mapEffects(s.effects,n).concat(B.mapEffects(e.effects,r)),annotations:s.annotations.length?s.annotations.concat(e.annotations):e.annotations,scrollIntoView:s.scrollIntoView||e.scrollIntoView}}function ta(s,e,t){let i=e.selection;return{changes:e.changes instanceof he?e.changes:he.of(e.changes||[],t,s.facet(pf)),selection:i&&(i instanceof b?i:b.single(i.anchor,i.head)),effects:$i(e.effects),annotations:$i(e.annotations),scrollIntoView:!!e.scrollIntoView}}function vf(s,e,t){let i=ta(s,e.length?e[0]:{},s.doc.length);e.length&&e[0].filter===!1&&(t=!1);for(let r=1;r<e.length;r++){e[r].filter===!1&&(t=!1);let o=!!e[r].sequential;i=yf(i,ta(s,e[r],o?i.changes.newLength:s.doc.length),o)}let n=new N(s,i.changes,i.selection,i.effects,i.annotations,i.scrollIntoView);return Vg(t?Hg(n):n)}function Hg(s){let e=s.startState,t=!0;for(let n of e.facet(mf)){let r=n(s);if(r===!1){t=!1;break}Array.isArray(r)&&(t=t===!0?r:qg(t,r))}if(t!==!0){let n,r;if(t===!1)r=s.changes.invertedDesc,n=he.empty(e.doc.length);else{let o=s.changes.filter(t);n=o.changes,r=o.filtered.invertedDesc}s=new N(e,n,s.selection&&s.selection.map(r),B.mapEffects(s.effects,r),s.annotations,s.scrollIntoView)}let i=e.facet(gf);for(let n=i.length-1;n>=0;n--){let r=i[n](s);r instanceof N?s=r:Array.isArray(r)&&r.length==1&&r[0]instanceof N?s=r[0]:s=vf(e,$i(r),!1)}return s}function Vg(s){let e=s.startState,t=e.facet(bf),i=s;for(let n=t.length-1;n>=0;n--){let r=t[n](s);r&&Object.keys(r).length&&(i=yf(s,ta(e,r,s.changes.newLength),!0))}return i==s?s:new N(e,s.changes,s.selection,i.effects,i.annotations,i.scrollIntoView)}const jg=[];function $i(s){return s==null?jg:Array.isArray(s)?s:[s]}var qe=function(s){return s[s.Word=0]="Word",s[s.Space=1]="Space",s[s.Other=2]="Other",s}(qe||(qe={}));const Gg=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;let ia;try{ia=new RegExp("[\\p{Alphabetic}\\p{Number}_]","u")}catch{}function Kg(s){if(ia)return ia.test(s);for(let e=0;e<s.length;e++){let t=s[e];if(/\w/.test(t)||t>"\x80"&&(t.toUpperCase()!=t.toLowerCase()||Gg.test(t)))return!0}return!1}function Yg(s){return e=>{if(!/\S/.test(e))return qe.Space;if(Kg(e))return qe.Word;for(let t=0;t<s.length;t++)if(e.indexOf(s[t])>-1)return qe.Word;return qe.Other}}class U{constructor(e,t,i,n=null){if(this.config=e,this.doc=t,this.selection=i,this.applying=null,this.status=e.statusTemplate.slice(),n&&n.startState.config==e)this.values=n.startState.values.slice();else if(this.values=e.dynamicSlots.map(r=>null),n)for(let r in e.address){let o=e.address[r],a=n.startState.config.address[r];a!=null&&(o&1)==0&&(this.values[o>>1]=Mi(n.startState,a))}this.applying=n,n&&(n._state=this);for(let r=0;r<this.config.dynamicSlots.length;r++)gs(this,r<<1);this.applying=null}field(e,t=!0){let i=this.config.address[e.id];if(i==null){if(t)throw new RangeError("Field is not present in this state");return}return gs(this,i),Mi(this,i)}update(...e){return vf(this,e,!0)}applyTransaction(e){let t=this.config,{base:i,compartments:n}=t;for(let r of e.effects)r.is(Pr.reconfigure)?(t&&(n=new Map,t.compartments.forEach((o,a)=>n.set(a,o)),t=null),n.set(r.value.compartment,r.value.extension)):r.is(B.reconfigure)?(t=null,i=r.value):r.is(B.appendConfig)&&(t=null,i=$i(i).concat(r.value));new U(t||jn.resolve(i,n,this),e.newDoc,e.newSelection,e)}replaceSelection(e){return typeof e=="string"&&(e=this.toText(e)),this.changeByRange(t=>({changes:{from:t.from,to:t.to,insert:e},range:b.cursor(t.from+e.length)}))}changeByRange(e){let t=this.selection,i=e(t.ranges[0]),n=this.changes(i.changes),r=[i.range],o=$i(i.effects);for(let a=1;a<t.ranges.length;a++){let l=e(t.ranges[a]),h=this.changes(l.changes),c=h.map(n);for(let f=0;f<a;f++)r[f]=r[f].map(c);let d=n.mapDesc(h,!0);r.push(l.range.map(d)),n=n.compose(c),o=B.mapEffects(o,c).concat(B.mapEffects($i(l.effects),d))}return{changes:n,selection:b.create(r,t.mainIndex),effects:o}}changes(e=[]){return e instanceof he?e:he.of(e,this.doc.length,this.facet(U.lineSeparator))}toText(e){return H.of(e.split(this.facet(U.lineSeparator)||Xo))}sliceDoc(e=0,t=this.doc.length){return this.doc.sliceString(e,t,this.lineBreak)}facet(e){let t=this.config.address[e.id];return t==null?e.default:(gs(this,t),Mi(this,t))}toJSON(e){let t={doc:this.sliceDoc(),selection:this.selection.toJSON()};if(e)for(let i in e){let n=e[i];n instanceof Me&&(t[i]=n.spec.toJSON(this.field(e[i]),this))}return t}static fromJSON(e,t={},i){if(!e||typeof e.doc!="string")throw new RangeError("Invalid JSON representation for EditorState");let n=[];if(i)for(let r in i){let o=i[r],a=e[r];n.push(o.init(l=>o.spec.fromJSON(a,l)))}return U.create({doc:e.doc,selection:b.fromJSON(e.selection),extensions:t.extensions?n.concat([t.extensions]):n})}static create(e={}){let t=jn.resolve(e.extensions||[],new Map),i=e.doc instanceof H?e.doc:H.of((e.doc||"").split(t.staticFacet(U.lineSeparator)||Xo)),n=e.selection?e.selection instanceof b?e.selection:b.single(e.selection.anchor,e.selection.head):b.single(0);return cf(n,i.length),t.staticFacet(uf)||(n=n.asSingle()),new U(t,i,n)}get tabSize(){return this.facet(U.tabSize)}get lineBreak(){return this.facet(U.lineSeparator)||`
`}phrase(e){for(let t of this.facet(U.phrases))if(Object.prototype.hasOwnProperty.call(t,e))return t[e];return e}languageDataAt(e,t){let i=[];for(let n of this.facet(ff))for(let r of n(this,t))Object.prototype.hasOwnProperty.call(r,e)&&i.push(r[e]);return i}charCategorizer(e){return Yg(this.languageDataAt("wordChars",e).join(""))}wordAt(e){let{text:t,from:i,length:n}=this.doc.lineAt(e),r=this.charCategorizer(e),o=e-i,a=e-i;for(;o>0;){let l=We(t,o,!1);if(r(t.slice(l,o))!=qe.Word)break;o=l}for(;a<n;){let l=We(t,a);if(r(t.slice(a,l))!=qe.Word)break;a=l}return o==a?b.range(o+i,a+i):null}}U.allowMultipleSelections=uf;U.tabSize=E.define({combine:s=>s.length?s[0]:4});U.lineSeparator=pf;U.phrases=E.define();U.languageData=ff;U.changeFilter=mf;U.transactionFilter=gf;U.transactionExtender=bf;Pr.reconfigure=B.define();function Gt(s,e,t={}){let i={};for(let n of s)for(let r of Object.keys(n)){let o=n[r],a=i[r];if(a===void 0)i[r]=o;else if(!(a===o||o===void 0))if(Object.hasOwnProperty.call(t,r))i[r]=t[r](a,o);else throw new Error("Config merge conflict for field "+r)}for(let n in e)i[n]===void 0&&(i[n]=e[n]);return i}const sa="\u037C",$h=typeof Symbol=="undefined"?"__"+sa:Symbol.for(sa),na=typeof Symbol=="undefined"?"__styleSet"+Math.floor(Math.random()*1e8):Symbol("styleSet"),Th=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:{};class Bt{constructor(e,t){this.rules=[];let{finish:i}=t||{};function n(o){return/^@/.test(o)?[o]:o.split(/,\s*/)}function r(o,a,l,h){let c=[],d=/^@(\w+)\b/.exec(o[0]),f=d&&d[1]=="keyframes";if(d&&a==null)return l.push(o[0]+";");for(let u in a){let p=a[u];if(/&/.test(u))r(u.split(/,\s*/).map(m=>o.map(y=>m.replace(/&/,y))).reduce((m,y)=>m.concat(y)),p,l);else if(p&&typeof p=="object"){if(!d)throw new RangeError("The value of a property ("+u+") should be a primitive value.");r(n(u),p,c,f)}else p!=null&&c.push(u.replace(/_.*/,"").replace(/[A-Z]/g,m=>"-"+m.toLowerCase())+": "+p+";")}(c.length||f)&&l.push((i&&!d&&!h?o.map(i):o).join(", ")+" {"+c.join(" ")+"}")}for(let o in e)r(n(o),e[o],this.rules)}getRules(){return this.rules.join(`
`)}static newName(){let e=Th[$h]||1;return Th[$h]=e+1,sa+e.toString(36)}static mount(e,t){(e[na]||new Jg(e)).mount(Array.isArray(t)?t:[t])}}let pn=null;class Jg{constructor(e){if(!e.head&&e.adoptedStyleSheets&&typeof CSSStyleSheet!="undefined"){if(pn)return e.adoptedStyleSheets=[pn.sheet].concat(e.adoptedStyleSheets),e[na]=pn;this.sheet=new CSSStyleSheet,e.adoptedStyleSheets=[this.sheet].concat(e.adoptedStyleSheets),pn=this}else{this.styleTag=(e.ownerDocument||e).createElement("style");let t=e.head||e;t.insertBefore(this.styleTag,t.firstChild)}this.modules=[],e[na]=this}mount(e){let t=this.sheet,i=0,n=0;for(let r=0;r<e.length;r++){let o=e[r],a=this.modules.indexOf(o);if(a<n&&a>-1&&(this.modules.splice(a,1),n--,a=-1),a==-1){if(this.modules.splice(n++,0,o),t)for(let l=0;l<o.rules.length;l++)t.insertRule(o.rules[l],i++)}else{for(;n<a;)i+=this.modules[n++].rules.length;i+=o.rules.length,n++}}if(!t){let r="";for(let o=0;o<this.modules.length;o++)r+=this.modules[o].getRules()+`
`;this.styleTag.textContent=r}}}class hi{eq(e){return this==e}range(e,t=e){return new ra(e,t,this)}}hi.prototype.startSide=hi.prototype.endSide=0;hi.prototype.point=!1;hi.prototype.mapMode=Ee.TrackDel;class ra{constructor(e,t,i){this.from=e,this.to=t,this.value=i}}function oa(s,e){return s.from-e.from||s.value.startSide-e.value.startSide}class al{constructor(e,t,i,n){this.from=e,this.to=t,this.value=i,this.maxPoint=n}get length(){return this.to[this.to.length-1]}findIndex(e,t,i,n=0){let r=i?this.to:this.from;for(let o=n,a=r.length;;){if(o==a)return o;let l=o+a>>1,h=r[l]-e||(i?this.value[l].endSide:this.value[l].startSide)-t;if(l==o)return h>=0?o:a;h>=0?a=l:o=l+1}}between(e,t,i,n){for(let r=this.findIndex(t,-1e9,!0),o=this.findIndex(i,1e9,!1,r);r<o;r++)if(n(this.from[r]+e,this.to[r]+e,this.value[r])===!1)return!1}map(e,t){let i=[],n=[],r=[],o=-1,a=-1;for(let l=0;l<this.value.length;l++){let h=this.value[l],c=this.from[l]+e,d=this.to[l]+e,f,u;if(c==d){let p=t.mapPos(c,h.startSide,h.mapMode);if(p==null)continue;f=u=p}else if(f=t.mapPos(c,h.startSide),u=t.mapPos(d,h.endSide),f>u||f==u&&h.startSide>0&&h.endSide<=0)continue;(u-f||h.endSide-h.startSide)<0||(o<0&&(o=f),h.point&&(a=Math.max(a,u-f)),i.push(h),n.push(f-o),r.push(u-o))}return{mapped:i.length?new al(n,r,i,a):null,pos:o}}}class V{constructor(e,t,i=V.empty,n){this.chunkPos=e,this.chunk=t,this.nextLayer=i,this.maxPoint=n}get length(){let e=this.chunk.length-1;return e<0?0:Math.max(this.chunkEnd(e),this.nextLayer.length)}get size(){if(this.isEmpty)return 0;let e=this.nextLayer.size;for(let t of this.chunk)e+=t.value.length;return e}chunkEnd(e){return this.chunkPos[e]+this.chunk[e].length}update(e){let{add:t=[],sort:i=!1,filterFrom:n=0,filterTo:r=this.length}=e,o=e.filter;if(t.length==0&&!o)return this;if(i&&t.slice().sort(oa),this.isEmpty)return t.length?V.of(t):this;let a=new wf(this,null,-1).goto(0),l=0,h=[],c=new Nt;for(;a.value||l<t.length;)if(l<t.length&&(a.from-t[l].from||a.startSide-t[l].value.startSide)>=0){let d=t[l++];c.addInner(d.from,d.to,d.value)||h.push(d)}else a.rangeIndex==1&&a.chunkIndex<this.chunk.length&&(l==t.length||this.chunkEnd(a.chunkIndex)<t[l].from)&&(!o||n>this.chunkEnd(a.chunkIndex)||r<this.chunkPos[a.chunkIndex])&&c.addChunk(this.chunkPos[a.chunkIndex],this.chunk[a.chunkIndex])?a.nextChunk():((!o||n>a.to||r<a.from||o(a.from,a.to,a.value))&&(c.addInner(a.from,a.to,a.value)||h.push(new ra(a.from,a.to,a.value))),a.next());return c.finishInner(this.nextLayer.isEmpty&&!h.length?V.empty:this.nextLayer.update({add:h,filter:o,filterFrom:n,filterTo:r}))}map(e){if(e.length==0||this.isEmpty)return this;let t=[],i=[],n=-1;for(let o=0;o<this.chunk.length;o++){let a=this.chunkPos[o],l=this.chunk[o],h=e.touchesRange(a,a+l.length);if(h===!1)n=Math.max(n,l.maxPoint),t.push(l),i.push(e.mapPos(a));else if(h===!0){let{mapped:c,pos:d}=l.map(a,e);c&&(n=Math.max(n,c.maxPoint),t.push(c),i.push(d))}}let r=this.nextLayer.map(e);return t.length==0?r:new V(i,t,r,n)}between(e,t,i){if(!this.isEmpty){for(let n=0;n<this.chunk.length;n++){let r=this.chunkPos[n],o=this.chunk[n];if(t>=r&&e<=r+o.length&&o.between(r,e-r,t-r,i)===!1)return}this.nextLayer.between(e,t,i)}}iter(e=0){return Es.from([this]).goto(e)}get isEmpty(){return this.nextLayer==this}static iter(e,t=0){return Es.from(e).goto(t)}static compare(e,t,i,n,r=-1){let o=e.filter(d=>d.maxPoint>=500||!d.isEmpty&&t.indexOf(d)<0&&d.maxPoint>=r),a=t.filter(d=>d.maxPoint>=500||!d.isEmpty&&e.indexOf(d)<0&&d.maxPoint>=r),l=Eh(o,a),h=new ss(o,l,r),c=new ss(a,l,r);i.iterGaps((d,f,u)=>Ph(h,d,c,f,u,n)),i.empty&&i.length==0&&Ph(h,0,c,0,0,n)}static eq(e,t,i=0,n){n==null&&(n=1e9);let r=e.filter(c=>!c.isEmpty&&t.indexOf(c)<0),o=t.filter(c=>!c.isEmpty&&e.indexOf(c)<0);if(r.length!=o.length)return!1;if(!r.length)return!0;let a=Eh(r,o),l=new ss(r,a,0).goto(i),h=new ss(o,a,0).goto(i);for(;;){if(l.to!=h.to||!aa(l.active,h.active)||l.point&&(!h.point||!l.point.eq(h.point)))return!1;if(l.to>=n)return!0;l.next(),h.next()}}static spans(e,t,i,n,r=-1){let o=new ss(e,null,r).goto(t),a=t,l=o.openStart;for(;;){let h=Math.min(o.to,i);if(o.point?(n.point(a,h,o.point,o.activeForPoint(o.to),l),l=o.openEnd(h)+(o.to>h?1:0)):h>a&&(n.span(a,h,o.active,l),l=o.openEnd(h)),o.to>i)break;a=o.to,o.next()}return l}static of(e,t=!1){let i=new Nt;for(let n of e instanceof ra?[e]:t?Xg(e):e)i.add(n.from,n.to,n.value);return i.finish()}}V.empty=new V([],[],null,-1);function Xg(s){if(s.length>1)for(let e=s[0],t=1;t<s.length;t++){let i=s[t];if(oa(e,i)>0)return s.slice().sort(oa);e=i}return s}V.empty.nextLayer=V.empty;class Nt{constructor(){this.chunks=[],this.chunkPos=[],this.chunkStart=-1,this.last=null,this.lastFrom=-1e9,this.lastTo=-1e9,this.from=[],this.to=[],this.value=[],this.maxPoint=-1,this.setMaxPoint=-1,this.nextLayer=null}finishChunk(e){this.chunks.push(new al(this.from,this.to,this.value,this.maxPoint)),this.chunkPos.push(this.chunkStart),this.chunkStart=-1,this.setMaxPoint=Math.max(this.setMaxPoint,this.maxPoint),this.maxPoint=-1,e&&(this.from=[],this.to=[],this.value=[])}add(e,t,i){this.addInner(e,t,i)||(this.nextLayer||(this.nextLayer=new Nt)).add(e,t,i)}addInner(e,t,i){let n=e-this.lastTo||i.startSide-this.last.endSide;if(n<=0&&(e-this.lastFrom||i.startSide-this.last.startSide)<0)throw new Error("Ranges must be added sorted by `from` position and `startSide`");return n<0?!1:(this.from.length==250&&this.finishChunk(!0),this.chunkStart<0&&(this.chunkStart=e),this.from.push(e-this.chunkStart),this.to.push(t-this.chunkStart),this.last=i,this.lastFrom=e,this.lastTo=t,this.value.push(i),i.point&&(this.maxPoint=Math.max(this.maxPoint,t-e)),!0)}addChunk(e,t){if((e-this.lastTo||t.value[0].startSide-this.last.endSide)<0)return!1;this.from.length&&this.finishChunk(!0),this.setMaxPoint=Math.max(this.setMaxPoint,t.maxPoint),this.chunks.push(t),this.chunkPos.push(e);let i=t.value.length-1;return this.last=t.value[i],this.lastFrom=t.from[i]+e,this.lastTo=t.to[i]+e,!0}finish(){return this.finishInner(V.empty)}finishInner(e){if(this.from.length&&this.finishChunk(!1),this.chunks.length==0)return e;let t=new V(this.chunkPos,this.chunks,this.nextLayer?this.nextLayer.finishInner(e):e,this.setMaxPoint);return this.from=null,t}}function Eh(s,e){let t=new Map;for(let n of s)for(let r=0;r<n.chunk.length;r++)n.chunk[r].maxPoint<500&&t.set(n.chunk[r],n.chunkPos[r]);let i=new Set;for(let n of e)for(let r=0;r<n.chunk.length;r++)t.get(n.chunk[r])==n.chunkPos[r]&&i.add(n.chunk[r]);return i}class wf{constructor(e,t,i,n=0){this.layer=e,this.skip=t,this.minPoint=i,this.rank=n}get startSide(){return this.value?this.value.startSide:0}get endSide(){return this.value?this.value.endSide:0}goto(e,t=-1e9){return this.chunkIndex=this.rangeIndex=0,this.gotoInner(e,t,!1),this}gotoInner(e,t,i){for(;this.chunkIndex<this.layer.chunk.length;){let r=this.layer.chunk[this.chunkIndex];if(!(this.skip&&this.skip.has(r)||this.layer.chunkEnd(this.chunkIndex)<e||r.maxPoint<this.minPoint))break;this.chunkIndex++,i=!1}let n=this.chunkIndex==this.layer.chunk.length?0:this.layer.chunk[this.chunkIndex].findIndex(e-this.layer.chunkPos[this.chunkIndex],t,!0);(!i||this.rangeIndex<n)&&(this.rangeIndex=n),this.next()}forward(e,t){(this.to-e||this.endSide-t)<0&&this.gotoInner(e,t,!0)}next(){for(;;)if(this.chunkIndex==this.layer.chunk.length){this.from=this.to=1e9,this.value=null;break}else{let e=this.layer.chunkPos[this.chunkIndex],t=this.layer.chunk[this.chunkIndex],i=e+t.from[this.rangeIndex];if(this.from=i,this.to=e+t.to[this.rangeIndex],this.value=t.value[this.rangeIndex],++this.rangeIndex==t.value.length){if(this.chunkIndex++,this.skip)for(;this.chunkIndex<this.layer.chunk.length&&this.skip.has(this.layer.chunk[this.chunkIndex]);)this.chunkIndex++;this.rangeIndex=0}if(this.minPoint<0||this.value.point&&this.to-this.from>=this.minPoint)break}}nextChunk(){this.chunkIndex++,this.rangeIndex=0,this.next()}compare(e){return this.from-e.from||this.startSide-e.startSide||this.to-e.to||this.endSide-e.endSide}}class Es{constructor(e){this.heap=e}static from(e,t=null,i=-1){let n=[];for(let r=0;r<e.length;r++)for(let o=e[r];!o.isEmpty;o=o.nextLayer)o.maxPoint>=i&&n.push(new wf(o,t,i,r));return n.length==1?n[0]:new Es(n)}get startSide(){return this.value?this.value.startSide:0}goto(e,t=-1e9){for(let i of this.heap)i.goto(e,t);for(let i=this.heap.length>>1;i>=0;i--)po(this.heap,i);return this.next(),this}forward(e,t){for(let i of this.heap)i.forward(e,t);for(let i=this.heap.length>>1;i>=0;i--)po(this.heap,i);(this.to-e||this.value.endSide-t)<0&&this.next()}next(){if(this.heap.length==0)this.from=this.to=1e9,this.value=null,this.rank=-1;else{let e=this.heap[0];this.from=e.from,this.to=e.to,this.value=e.value,this.rank=e.rank,e.value&&e.next(),po(this.heap,0)}}}function po(s,e){for(let t=s[e];;){let i=(e<<1)+1;if(i>=s.length)break;let n=s[i];if(i+1<s.length&&n.compare(s[i+1])>=0&&(n=s[i+1],i++),t.compare(n)<0)break;s[i]=t,s[e]=n,e=i}}class ss{constructor(e,t,i){this.minPoint=i,this.active=[],this.activeTo=[],this.activeRank=[],this.minActive=-1,this.point=null,this.pointFrom=0,this.pointRank=0,this.to=-1e9,this.endSide=0,this.openStart=-1,this.cursor=Es.from(e,t,i)}goto(e,t=-1e9){return this.cursor.goto(e,t),this.active.length=this.activeTo.length=this.activeRank.length=0,this.minActive=-1,this.to=e,this.endSide=t,this.openStart=-1,this.next(),this}forward(e,t){for(;this.minActive>-1&&(this.activeTo[this.minActive]-e||this.active[this.minActive].endSide-t)<0;)this.removeActive(this.minActive);this.cursor.forward(e,t)}removeActive(e){mn(this.active,e),mn(this.activeTo,e),mn(this.activeRank,e),this.minActive=_h(this.active,this.activeTo)}addActive(e){let t=0,{value:i,to:n,rank:r}=this.cursor;for(;t<this.activeRank.length&&this.activeRank[t]<=r;)t++;gn(this.active,t,i),gn(this.activeTo,t,n),gn(this.activeRank,t,r),e&&gn(e,t,this.cursor.from),this.minActive=_h(this.active,this.activeTo)}next(){let e=this.to,t=this.point;this.point=null;let i=this.openStart<0?[]:null,n=0;for(;;){let r=this.minActive;if(r>-1&&(this.activeTo[r]-this.cursor.from||this.active[r].endSide-this.cursor.startSide)<0){if(this.activeTo[r]>e){this.to=this.activeTo[r],this.endSide=this.active[r].endSide;break}this.removeActive(r),i&&mn(i,r)}else if(this.cursor.value)if(this.cursor.from>e){this.to=this.cursor.from,this.endSide=this.cursor.startSide;break}else{let o=this.cursor.value;if(!o.point)this.addActive(i),this.cursor.next();else if(t&&this.cursor.to==this.to&&this.cursor.from<this.cursor.to&&o.endSide==this.endSide)this.cursor.next();else{this.point=o,this.pointFrom=this.cursor.from,this.pointRank=this.cursor.rank,this.to=this.cursor.to,this.endSide=o.endSide,this.cursor.from<e&&(n=1),this.cursor.next(),this.to>e&&this.forward(this.to,this.endSide);break}}else{this.to=this.endSide=1e9;break}}if(i){let r=0;for(;r<i.length&&i[r]<e;)r++;this.openStart=r+n}}activeForPoint(e){if(!this.active.length)return this.active;let t=[];for(let i=this.active.length-1;i>=0&&!(this.activeRank[i]<this.pointRank);i--)(this.activeTo[i]>e||this.activeTo[i]==e&&this.active[i].endSide>=this.point.endSide)&&t.push(this.active[i]);return t.reverse()}openEnd(e){let t=0;for(let i=this.activeTo.length-1;i>=0&&this.activeTo[i]>e;i--)t++;return t}}function Ph(s,e,t,i,n,r){s.goto(e),t.goto(i);let o=i+n,a=i,l=i-e;for(;;){let h=s.to+l-t.to||s.endSide-t.endSide,c=h<0?s.to+l:t.to,d=Math.min(c,o);if(s.point||t.point?s.point&&t.point&&(s.point==t.point||s.point.eq(t.point))&&aa(s.activeForPoint(s.to+l),t.activeForPoint(t.to))||r.comparePoint(a,d,s.point,t.point):d>a&&!aa(s.active,t.active)&&r.compareRange(a,d,s.active,t.active),c>o)break;a=c,h<=0&&s.next(),h>=0&&t.next()}}function aa(s,e){if(s.length!=e.length)return!1;for(let t=0;t<s.length;t++)if(s[t]!=e[t]&&!s[t].eq(e[t]))return!1;return!0}function mn(s,e){for(let t=e,i=s.length-1;t<i;t++)s[t]=s[t+1];s.pop()}function gn(s,e,t){for(let i=s.length-1;i>=e;i--)s[i+1]=s[i];s[e]=t}function _h(s,e){let t=-1,i=1e9;for(let n=0;n<e.length;n++)(e[n]-i||s[n].endSide-s[t].endSide)<0&&(t=n,i=e[n]);return t}var zt={8:"Backspace",9:"Tab",10:"Enter",12:"NumLock",13:"Enter",16:"Shift",17:"Control",18:"Alt",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",44:"PrintScreen",45:"Insert",46:"Delete",59:";",61:"=",91:"Meta",92:"Meta",106:"*",107:"+",108:",",109:"-",110:".",111:"/",144:"NumLock",145:"ScrollLock",160:"Shift",161:"Shift",162:"Control",163:"Control",164:"Alt",165:"Alt",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},Gn={48:")",49:"!",50:"@",51:"#",52:"$",53:"%",54:"^",55:"&",56:"*",57:"(",59:":",61:"+",173:"_",186:":",187:"+",188:"<",189:"_",190:">",191:"?",192:"~",219:"{",220:"|",221:"}",222:'"'},Lh=typeof navigator!="undefined"&&/Chrome\/(\d+)/.exec(navigator.userAgent),Zg=typeof navigator!="undefined"&&/Apple Computer/.test(navigator.vendor),Qg=typeof navigator!="undefined"&&/Gecko\/\d+/.test(navigator.userAgent),Rh=typeof navigator!="undefined"&&/Mac/.test(navigator.platform),e0=typeof navigator!="undefined"&&/MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent),t0=Lh&&(Rh||+Lh[1]<57)||Qg&&Rh;for(var Se=0;Se<10;Se++)zt[48+Se]=zt[96+Se]=String(Se);for(var Se=1;Se<=24;Se++)zt[Se+111]="F"+Se;for(var Se=65;Se<=90;Se++)zt[Se]=String.fromCharCode(Se+32),Gn[Se]=String.fromCharCode(Se);for(var mo in zt)Gn.hasOwnProperty(mo)||(Gn[mo]=zt[mo]);function i0(s){var e=t0&&(s.ctrlKey||s.altKey||s.metaKey)||(Zg||e0)&&s.shiftKey&&s.key&&s.key.length==1||s.key=="Unidentified",t=!e&&s.key||(s.shiftKey?Gn:zt)[s.keyCode]||s.key||"Unidentified";return t=="Esc"&&(t="Escape"),t=="Del"&&(t="Delete"),t=="Left"&&(t="ArrowLeft"),t=="Up"&&(t="ArrowUp"),t=="Right"&&(t="ArrowRight"),t=="Down"&&(t="ArrowDown"),t}function Kn(s){return s.getSelection?s.getSelection():document.getSelection()}function la(s,e){return e?s.contains(e.nodeType!=1?e.parentNode:e):!1}function s0(){let s=document.activeElement;for(;s&&s.shadowRoot;)s=s.shadowRoot.activeElement;return s}function ha(s,e){if(!e.anchorNode)return!1;try{return la(s,e.anchorNode)}catch{return!1}}function _r(s){return s.nodeType==3?Ps(s,0,s.nodeValue.length).getClientRects():s.nodeType==1?s.getClientRects():[]}function Yn(s,e,t,i){return t?Oh(s,e,t,i,-1)||Oh(s,e,t,i,1):!1}function ca(s){for(var e=0;;e++)if(s=s.previousSibling,!s)return e}function Oh(s,e,t,i,n){for(;;){if(s==t&&e==i)return!0;if(e==(n<0?0:Jn(s))){if(s.nodeName=="DIV")return!1;let r=s.parentNode;if(!r||r.nodeType!=1)return!1;e=ca(s)+(n<0?0:1),s=r}else if(s.nodeType==1){if(s=s.childNodes[e+(n<0?-1:0)],s.nodeType==1&&s.contentEditable=="false")return!1;e=n<0?Jn(s):0}else return!1}}function Jn(s){return s.nodeType==3?s.nodeValue.length:s.childNodes.length}const xf={left:0,right:0,top:0,bottom:0};function ll(s,e){let t=e?s.left:s.right;return{left:t,right:t,top:s.top,bottom:s.bottom}}function n0(s){return{left:0,right:s.innerWidth,top:0,bottom:s.innerHeight}}const bn=5;function r0(s,e){let t=s.ownerDocument,i=t.defaultView;for(let n=s.parentNode;n;)if(n.nodeType==1){let r,o=n==document.body;if(o)r=n0(i);else{if(n.scrollHeight<=n.clientHeight&&n.scrollWidth<=n.clientWidth){n=n.parentNode;continue}let h=n.getBoundingClientRect();r={left:h.left,right:h.left+n.clientWidth,top:h.top,bottom:h.top+n.clientHeight}}let a=0,l=0;if(e.top<r.top?l=-(r.top-e.top+bn):e.bottom>r.bottom&&(l=e.bottom-r.bottom+bn),e.left<r.left?a=-(r.left-e.left+bn):e.right>r.right&&(a=e.right-r.right+bn),a||l)if(o)i.scrollBy(a,l);else{if(l){let h=n.scrollTop;n.scrollTop+=l,l=n.scrollTop-h}if(a){let h=n.scrollLeft;n.scrollLeft+=a,a=n.scrollLeft-h}e={left:e.left-a,top:e.top-l,right:e.right-a,bottom:e.bottom-l}}if(o)break;n=n.assignedSlot||n.parentNode}else if(n.nodeType==11)n=n.host;else break}class o0{constructor(){this.anchorNode=null,this.anchorOffset=0,this.focusNode=null,this.focusOffset=0}eq(e){return this.anchorNode==e.anchorNode&&this.anchorOffset==e.anchorOffset&&this.focusNode==e.focusNode&&this.focusOffset==e.focusOffset}set(e){this.anchorNode=e.anchorNode,this.anchorOffset=e.anchorOffset,this.focusNode=e.focusNode,this.focusOffset=e.focusOffset}}let gi=null;function Sf(s){if(s.setActive)return s.setActive();if(gi)return s.focus(gi);let e=[];for(let t=s;t&&(e.push(t,t.scrollTop,t.scrollLeft),t!=t.ownerDocument);t=t.parentNode);if(s.focus(gi==null?{get preventScroll(){return gi={preventScroll:!0},!0}}:void 0),!gi){gi=!1;for(let t=0;t<e.length;){let i=e[t++],n=e[t++],r=e[t++];i.scrollTop!=n&&(i.scrollTop=n),i.scrollLeft!=r&&(i.scrollLeft=r)}}}let Dh;function Ps(s,e,t=e){let i=Dh||(Dh=document.createRange());return i.setEnd(s,t),i.setStart(s,e),i}function bs(s,e,t){let i={key:e,code:e,keyCode:t,which:t,cancelable:!0},n=new KeyboardEvent("keydown",i);n.synthetic=!0,s.dispatchEvent(n);let r=new KeyboardEvent("keyup",i);return r.synthetic=!0,s.dispatchEvent(r),n.defaultPrevented||r.defaultPrevented}let yn=null;function a0(){if(yn==null){yn=!1;let s=document.createElement("div");try{s.contentEditable="plaintext-only",yn=s.contentEditable=="plaintext-only"}catch{}}return yn}class Pe{constructor(e,t,i=!0){this.node=e,this.offset=t,this.precise=i}static before(e,t){return new Pe(e.parentNode,ca(e),t)}static after(e,t){return new Pe(e.parentNode,ca(e)+1,t)}}const l0=[];class de{constructor(){this.parent=null,this.dom=null,this.dirty=2}get editorView(){if(!this.parent)throw new Error("Accessing view in orphan content view");return this.parent.editorView}get overrideDOMText(){return null}get posAtStart(){return this.parent?this.parent.posBefore(this):0}get posAtEnd(){return this.posAtStart+this.length}posBefore(e){let t=this.posAtStart;for(let i of this.children){if(i==e)return t;t+=i.length+i.breakAfter}throw new RangeError("Invalid child in posBefore")}posAfter(e){return this.posBefore(e)+e.length}coordsAt(e,t){return null}sync(e){var t;if(this.dirty&2){let i=this.dom,n=null;for(let o of this.children){if(o.dirty){let a=n?n.nextSibling:i.firstChild;!o.dom&&a&&!(!((t=de.get(a))===null||t===void 0)&&t.parent)&&o.reuseDOM(a),o.sync(e),o.dirty=0}e&&e.node==i&&n!=o.dom&&(e.written=!0),h0(i,n,o.dom),n=o.dom}let r=n?n.nextSibling:i.firstChild;for(r&&e&&e.node==i&&(e.written=!0);r;)r=kf(r)}else if(this.dirty&1)for(let i of this.children)i.dirty&&(i.sync(e),i.dirty=0)}reuseDOM(e){return!1}localPosFromDOM(e,t){let i;if(e==this.dom)i=this.dom.childNodes[t];else{let n=Jn(e)==0?0:t==0?-1:1;for(;;){let r=e.parentNode;if(r==this.dom)break;n==0&&r.firstChild!=r.lastChild&&(e==r.firstChild?n=-1:n=1),e=r}n<0?i=e:i=e.nextSibling}if(i==this.dom.firstChild)return 0;for(;i&&!de.get(i);)i=i.nextSibling;if(!i)return this.length;for(let n=0,r=0;;n++){let o=this.children[n];if(o.dom==i)return r;r+=o.length+o.breakAfter}}domBoundsAround(e,t,i=0){let n=-1,r=-1,o=-1,a=-1;for(let l=0,h=i,c=i;l<this.children.length;l++){let d=this.children[l],f=h+d.length;if(h<e&&f>t)return d.domBoundsAround(e,t,h);if(f>=e&&n==-1&&(n=l,r=h),h>t&&d.dom.parentNode==this.dom){o=l,a=c;break}c=f,h=f+d.breakAfter}return{from:r,to:a<0?i+this.length:a,startDOM:(n?this.children[n-1].dom.nextSibling:null)||this.dom.firstChild,endDOM:o<this.children.length&&o>=0?this.children[o].dom:null}}markDirty(e=!1){this.dirty&2||(this.dirty|=2,this.markParentsDirty(e))}markParentsDirty(e){for(let t=this.parent;t;t=t.parent){if(e&&(t.dirty|=2),t.dirty&1)return;t.dirty|=1,e=!1}}setParent(e){this.parent!=e&&(this.parent=e,this.dirty&&this.markParentsDirty(!0))}setDOM(e){this.dom=e,e.cmView=this}get rootView(){for(let e=this;;){let t=e.parent;if(!t)return e;e=t}}replaceChildren(e,t,i=l0){this.markDirty();for(let n=e;n<t;n++){let r=this.children[n];r.parent==this&&(r.parent=null)}this.children.splice(e,t-e,...i);for(let n=0;n<i.length;n++)i[n].setParent(this)}ignoreMutation(e){return!1}ignoreEvent(e){return!1}childCursor(e=this.length){return new Cf(this.children,e,this.children.length)}childPos(e,t=1){return this.childCursor().findPos(e,t)}toString(){let e=this.constructor.name.replace("View","");return e+(this.children.length?"("+this.children.join()+")":this.length?"["+(e=="Text"?this.text:this.length)+"]":"")+(this.breakAfter?"#":"")}static get(e){return e.cmView}}de.prototype.breakAfter=0;function kf(s){let e=s.nextSibling;return s.parentNode.removeChild(s),e}function h0(s,e,t){let i=e?e.nextSibling:s.firstChild;if(t.parentNode==s)for(;i!=t;)i=kf(i);else s.insertBefore(t,i)}class Cf{constructor(e,t,i){this.children=e,this.pos=t,this.i=i,this.off=0}findPos(e,t=1){for(;;){if(e>this.pos||e==this.pos&&(t>0||this.i==0||this.children[this.i-1].breakAfter))return this.off=e-this.pos,this;let i=this.children[--this.i];this.pos-=i.length+i.breakAfter}}}let[Qe,da]=typeof navigator!="undefined"?[navigator,document]:[{userAgent:"",vendor:"",platform:""},{documentElement:{style:{}}}];const fa=/Edge\/(\d+)/.exec(Qe.userAgent),Af=/MSIE \d/.test(Qe.userAgent),ua=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Qe.userAgent),Lr=!!(Af||ua||fa),Ih=!Lr&&/gecko\/(\d+)/i.test(Qe.userAgent),go=!Lr&&/Chrome\/(\d+)/.exec(Qe.userAgent),Bh="webkitFontSmoothing"in da.documentElement.style,Nh=!Lr&&/Apple Computer/.test(Qe.vendor);var D={mac:/Mac/.test(Qe.platform),ie:Lr,ie_version:Af?da.documentMode||6:ua?+ua[1]:fa?+fa[1]:0,gecko:Ih,gecko_version:Ih?+(/Firefox\/(\d+)/.exec(Qe.userAgent)||[0,0])[1]:0,chrome:!!go,chrome_version:go?+go[1]:0,ios:Nh&&(/Mobile\/\w+/.test(Qe.userAgent)||Qe.maxTouchPoints>2),android:/Android\b/.test(Qe.userAgent),webkit:Bh,safari:Nh,webkit_version:Bh?+(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent)||[0,0])[1]:0,tabSize:da.documentElement.style.tabSize!=null?"tab-size":"-moz-tab-size"};const Mf=[];class Ui extends de{become(e){return!1}getSide(){return 0}}Ui.prototype.children=Mf;const c0=256;class Wi extends Ui{constructor(e){super(),this.text=e}get length(){return this.text.length}createDOM(e){this.setDOM(e||document.createTextNode(this.text))}sync(e){this.dom||this.createDOM(),this.dom.nodeValue!=this.text&&(e&&e.node==this.dom&&(e.written=!0),this.dom.nodeValue=this.text)}reuseDOM(e){return e.nodeType!=3?!1:(this.createDOM(e),!0)}merge(e,t,i){return i&&(!(i instanceof Wi)||this.length-(t-e)+i.length>c0)?!1:(this.text=this.text.slice(0,e)+(i?i.text:"")+this.text.slice(t),this.markDirty(),!0)}slice(e){return new Wi(this.text.slice(e))}localPosFromDOM(e,t){return e==this.dom?t:t?this.text.length:0}domAtPos(e){return new Pe(this.dom,e)}domBoundsAround(e,t,i){return{from:i,to:i+this.length,startDOM:this.dom,endDOM:this.dom.nextSibling}}coordsAt(e,t){return $f(this.dom,e,t)}}class qi extends Ui{constructor(e,t=[],i=0){super(),this.mark=e,this.children=t,this.length=i;for(let n of t)n.setParent(this)}createDOM(){let e=document.createElement(this.mark.tagName);if(this.mark.class&&(e.className=this.mark.class),this.mark.attrs)for(let t in this.mark.attrs)e.setAttribute(t,this.mark.attrs[t]);this.setDOM(e)}sync(e){this.dom||this.createDOM(),super.sync(e)}merge(e,t,i,n,r){return i&&(!(i instanceof qi&&i.mark.eq(this.mark))||e&&n<=0||t<this.length&&r<=0)?!1:(Tf(this,e,t,i?i.children:Mf,n-1,r-1),this.markDirty(),!0)}slice(e){return new qi(this.mark,f0(this.children,e),this.length-e)}domAtPos(e){return Ef(this.dom,this.children,e)}coordsAt(e,t){return _f(this,e,t)}}function $f(s,e,t){let i=s.nodeValue.length;e>i&&(e=i);let n=e,r=e,o=0;e==0&&t<0||e==i&&t>=0?D.chrome||D.gecko||(e?(n--,o=1):(r++,o=-1)):t<0?n--:r++;let a=Ps(s,n,r).getClientRects();if(!a.length)return xf;let l=a[(o?o<0:t>=0)?0:a.length-1];return D.safari&&!o&&l.width==0&&(l=Array.prototype.find.call(a,h=>h.width)||l),o?ll(l,o<0):l}class St extends Ui{constructor(e,t,i){super(),this.widget=e,this.length=t,this.side=i}static create(e,t,i){return new(e.customView||St)(e,t,i)}slice(e){return St.create(this.widget,this.length-e,this.side)}sync(){(!this.dom||!this.widget.updateDOM(this.dom))&&(this.setDOM(this.widget.toDOM(this.editorView)),this.dom.contentEditable="false")}getSide(){return this.side}merge(e,t,i,n,r){return i&&(!(i instanceof St)||!this.widget.compare(i.widget)||e>0&&n<=0||t<this.length&&r<=0)?!1:(this.length=e+(i?i.length:0)+(this.length-t),!0)}become(e){return e.length==this.length&&e instanceof St&&e.side==this.side&&this.widget.constructor==e.widget.constructor?(this.widget.eq(e.widget)||this.markDirty(!0),this.widget=e.widget,!0):!1}ignoreMutation(){return!0}ignoreEvent(e){return this.widget.ignoreEvent(e)}get overrideDOMText(){if(this.length==0)return H.empty;let e=this;for(;e.parent;)e=e.parent;let t=e.editorView,i=t&&t.state.doc,n=this.posAtStart;return i?i.slice(n,n+this.length):H.empty}domAtPos(e){return e==0?Pe.before(this.dom):Pe.after(this.dom,e==this.length)}domBoundsAround(){return null}coordsAt(e,t){let i=this.dom.getClientRects(),n=null;if(!i.length)return xf;for(let r=e>0?i.length-1:0;n=i[r],!(e>0?r==0:r==i.length-1||n.top<n.bottom);r+=e>0?-1:1);return e==0&&t>0||e==this.length&&t<=0?n:ll(n,e==0)}}class d0 extends St{domAtPos(e){return new Pe(this.widget.text,e)}sync(){this.dom||this.setDOM(this.widget.toDOM())}localPosFromDOM(e,t){return t?e.nodeType==3?Math.min(t,this.length):this.length:0}ignoreMutation(){return!1}get overrideDOMText(){return null}coordsAt(e,t){return $f(this.widget.text,e,t)}}function Tf(s,e,t,i,n,r){let o=s.childCursor(),{i:a,off:l}=o.findPos(t,1),{i:h,off:c}=o.findPos(e,-1),d=e-t;for(let u of i)d+=u.length;s.length+=d;let{children:f}=s;if(h==a&&c){let u=f[h];if(i.length==1&&u.merge(c,l,i[0],n,r))return;if(i.length==0){u.merge(c,l,null,n,r);return}let p=u.slice(l);p.merge(0,0,i[i.length-1],0,r)?i[i.length-1]=p:i.push(p),a++,r=l=0}if(l){let u=f[a];i.length&&u.merge(0,l,i[i.length-1],0,r)?(i.pop(),r=i.length?0:n):u.merge(0,l,null,0,0)}else a<f.length&&i.length&&f[a].merge(0,0,i[i.length-1],0,r)&&(i.pop(),r=i.length?0:n);if(c){let u=f[h];i.length&&u.merge(c,u.length,i[0],n,0)?(i.shift(),n=i.length?0:r):u.merge(c,u.length,null,0,0),h++}else if(h&&i.length){let u=f[h-1];u.merge(u.length,u.length,i[0],n,0)&&(i.shift(),n=i.length?0:r)}for(;h<a&&i.length&&f[a-1].become(i[i.length-1]);)i.pop(),a--,r=i.length?0:n;for(;h<a&&i.length&&f[h].become(i[0]);)i.shift(),h++,n=i.length?0:r;!i.length&&h&&a<f.length&&n&&r&&f[a].merge(0,0,f[h-1],n,r)&&h--,(i.length||h!=a)&&s.replaceChildren(h,a,i)}function f0(s,e){let t=[],i=0;for(let n of s){let r=i+n.length;r>e&&t.push(i<e?n.slice(e-i):n),i=r}return t}function Ef(s,e,t){let i=0;for(let n=0;i<e.length;i++){let r=e[i],o=n+r.length;if(!(o==n&&r.getSide()<=0)){if(t>n&&t<o&&r.dom.parentNode==s)return r.domAtPos(t-n);if(t<=n)break;n=o}}for(;i>0;i--){let n=e[i-1].dom;if(n.parentNode==s)return Pe.after(n)}return new Pe(s,0)}function Pf(s,e,t){let i,{children:n}=s;t>0&&e instanceof qi&&n.length&&(i=n[n.length-1])instanceof qi&&i.mark.eq(e.mark)?Pf(i,e.children[0],t-1):(n.push(e),e.setParent(s)),s.length+=e.length}function _f(s,e,t){for(let r=0,o=0;o<s.children.length;o++){let a=s.children[o],l=r+a.length;if(!(l==r&&a.getSide()<=0)){if(t<=0||l==s.length?l>=e:l>e)return a.coordsAt(e-r,t);r=l}}let i=s.dom.lastChild;if(!i)return s.dom.getBoundingClientRect();let n=_r(i);return n[n.length-1]}function _s(s,e){for(let t in s)t=="class"&&e.class?e.class+=" "+s.class:t=="style"&&e.style?e.style+=";"+s.style:e[t]=s[t];return e}function hl(s,e){if(s==e)return!0;if(!s||!e)return!1;let t=Object.keys(s),i=Object.keys(e);if(t.length!=i.length)return!1;for(let n of t)if(i.indexOf(n)==-1||s[n]!==e[n])return!1;return!0}function pa(s,e,t){if(e)for(let i in e)t&&i in t||s.removeAttribute(i);if(t)for(let i in t)e&&e[i]==t[i]||s.setAttribute(i,t[i])}class Kt{eq(e){return!1}updateDOM(e){return!1}compare(e){return this==e||this.constructor==e.constructor&&this.eq(e)}get estimatedHeight(){return-1}ignoreEvent(e){return!0}get customView(){return null}}var G=function(s){return s[s.Text=0]="Text",s[s.WidgetBefore=1]="WidgetBefore",s[s.WidgetAfter=2]="WidgetAfter",s[s.WidgetRange=3]="WidgetRange",s}(G||(G={}));class T extends hi{constructor(e,t,i,n){super(),this.startSide=e,this.endSide=t,this.widget=i,this.spec=n}get heightRelevant(){return!1}static mark(e){return new Rr(e)}static widget(e){let t=e.side||0;return e.block&&(t+=(2e8+1)*(t>0?1:-1)),new Hi(e,t,t,!!e.block,e.widget||null,!1)}static replace(e){let t=!!e.block,{start:i,end:n}=Lf(e),r=t?-2e8*(i?2:1):1e8*(i?-1:1),o=t?2e8*(n?2:1):1e8*(n?1:-1);return new Hi(e,r,o,t,e.widget||null,!0)}static line(e){return new Qs(e)}static set(e,t=!1){return V.of(e,t)}hasHeight(){return this.widget?this.widget.estimatedHeight>-1:!1}}T.none=V.empty;class Rr extends T{constructor(e){let{start:t,end:i}=Lf(e);super(1e8*(t?-1:1),1e8*(i?1:-1),null,e),this.tagName=e.tagName||"span",this.class=e.class||"",this.attrs=e.attributes||null}eq(e){return this==e||e instanceof Rr&&this.tagName==e.tagName&&this.class==e.class&&hl(this.attrs,e.attrs)}range(e,t=e){if(e>=t)throw new RangeError("Mark decorations may not be empty");return super.range(e,t)}}Rr.prototype.point=!1;class Qs extends T{constructor(e){super(-1e8,-1e8,null,e)}eq(e){return e instanceof Qs&&hl(this.spec.attributes,e.spec.attributes)}range(e,t=e){if(t!=e)throw new RangeError("Line decoration ranges must be zero-length");return super.range(e,t)}}Qs.prototype.mapMode=Ee.TrackBefore;Qs.prototype.point=!0;class Hi extends T{constructor(e,t,i,n,r,o){super(t,i,r,e),this.block=n,this.isReplace=o,this.mapMode=n?t<0?Ee.TrackBefore:Ee.TrackAfter:Ee.TrackDel}get type(){return this.startSide<this.endSide?G.WidgetRange:this.startSide<0?G.WidgetBefore:G.WidgetAfter}get heightRelevant(){return this.block||!!this.widget&&this.widget.estimatedHeight>=5}eq(e){return e instanceof Hi&&u0(this.widget,e.widget)&&this.block==e.block&&this.startSide==e.startSide&&this.endSide==e.endSide}range(e,t=e){if(this.isReplace&&(e>t||e==t&&this.startSide>0&&this.endSide<0))throw new RangeError("Invalid range for replacement decoration");if(!this.isReplace&&t!=e)throw new RangeError("Widget decorations can only have zero-length ranges");return super.range(e,t)}}Hi.prototype.point=!0;function Lf(s){let{inclusiveStart:e,inclusiveEnd:t}=s;return e==null&&(e=s.inclusive),t==null&&(t=s.inclusive),{start:e||!1,end:t||!1}}function u0(s,e){return s==e||!!(s&&e&&s.compare(e))}function ma(s,e,t,i=0){let n=t.length-1;n>=0&&t[n]+i>s?t[n]=Math.max(t[n],e):t.push(s,e)}class Oe extends de{constructor(){super(...arguments),this.children=[],this.length=0,this.prevAttrs=void 0,this.attrs=null,this.breakAfter=0}merge(e,t,i,n,r,o){if(i){if(!(i instanceof Oe))return!1;this.dom||i.transferDOM(this)}return n&&this.setDeco(i?i.attrs:null),Tf(this,e,t,i?i.children:Rf,r,o),!0}split(e){let t=new Oe;if(t.breakAfter=this.breakAfter,this.length==0)return t;let{i,off:n}=this.childPos(e);n&&(t.append(this.children[i].slice(n),0),this.children[i].merge(n,this.children[i].length,null,0,0),i++);for(let r=i;r<this.children.length;r++)t.append(this.children[r],0);for(;i>0&&this.children[i-1].length==0;)this.children[i-1].parent=null,i--;return this.children.length=i,this.markDirty(),this.length=e,t}transferDOM(e){!this.dom||(e.setDOM(this.dom),e.prevAttrs=this.prevAttrs===void 0?this.attrs:this.prevAttrs,this.prevAttrs=void 0,this.dom=null)}setDeco(e){hl(this.attrs,e)||(this.dom&&(this.prevAttrs=this.attrs,this.markDirty()),this.attrs=e)}append(e,t){Pf(this,e,t)}addLineDeco(e){let t=e.spec.attributes;t&&(this.attrs=_s(t,this.attrs||{}))}domAtPos(e){return Ef(this.dom,this.children,e)}sync(e){this.dom||(this.setDOM(document.createElement("div")),this.dom.className="cm-line",this.prevAttrs=this.attrs?null:void 0),this.prevAttrs!==void 0&&(pa(this.dom,this.prevAttrs,this.attrs),this.dom.classList.add("cm-line"),this.prevAttrs=void 0),super.sync(e);let t=this.dom.lastChild;if(!t||t.nodeName!="BR"&&de.get(t)instanceof St&&(!D.ios||!this.children.some(i=>i instanceof Wi))){let i=document.createElement("BR");i.cmIgnore=!0,this.dom.appendChild(i)}}measureTextSize(){if(this.children.length==0||this.length>20)return null;let e=0;for(let t of this.children){if(!(t instanceof Wi))return null;let i=_r(t.dom);if(i.length!=1)return null;e+=i[0].width}return{lineHeight:this.dom.getBoundingClientRect().height,charWidth:e/this.length}}coordsAt(e,t){return _f(this,e,t)}match(e){return!1}get type(){return G.Text}static find(e,t){for(let i=0,n=0;;i++){let r=e.children[i],o=n+r.length;if(o>=t){if(r instanceof Oe)return r;if(r.length)return null}n=o+r.breakAfter}}}const Rf=[];class Ti extends de{constructor(e,t,i){super(),this.widget=e,this.length=t,this.type=i,this.breakAfter=0}merge(e,t,i,n,r,o){return i&&(!(i instanceof Ti)||!this.widget.compare(i.widget)||e>0&&r<=0||t<this.length&&o<=0)?!1:(this.length=e+(i?i.length:0)+(this.length-t),!0)}domAtPos(e){return e==0?Pe.before(this.dom):Pe.after(this.dom,e==this.length)}split(e){let t=this.length-e;return this.length=e,new Ti(this.widget,t,this.type)}get children(){return Rf}sync(){(!this.dom||!this.widget.updateDOM(this.dom))&&(this.setDOM(this.widget.toDOM(this.editorView)),this.dom.contentEditable="false")}get overrideDOMText(){return this.parent?this.parent.view.state.doc.slice(this.posAtStart,this.posAtEnd):H.empty}domBoundsAround(){return null}match(e){return e instanceof Ti&&e.type==this.type&&e.widget.constructor==this.widget.constructor?(e.widget.eq(this.widget)||this.markDirty(!0),this.widget=e.widget,this.length=e.length,this.breakAfter=e.breakAfter,!0):!1}ignoreMutation(){return!0}ignoreEvent(e){return this.widget.ignoreEvent(e)}}class cl{constructor(e,t,i){this.doc=e,this.pos=t,this.end=i,this.content=[],this.curLine=null,this.breakAtStart=0,this.openStart=-1,this.openEnd=-1,this.text="",this.textOff=0,this.cursor=e.iter(),this.skip=t}posCovered(){if(this.content.length==0)return!this.breakAtStart&&this.doc.lineAt(this.pos).from!=this.pos;let e=this.content[this.content.length-1];return!e.breakAfter&&!(e instanceof Ti&&e.type==G.WidgetBefore)}getLine(){return this.curLine||this.content.push(this.curLine=new Oe),this.curLine}addWidget(e){this.curLine=null,this.content.push(e)}finish(){this.posCovered()||this.getLine()}wrapMarks(e,t){for(let i of t)e=new qi(i,[e],e.length);return e}buildText(e,t,i){for(;e>0;){if(this.textOff==this.text.length){let{value:r,lineBreak:o,done:a}=this.cursor.next(this.skip);if(this.skip=0,a)throw new Error("Ran out of text content when drawing inline views");if(o){this.posCovered()||this.getLine(),this.content.length?this.content[this.content.length-1].breakAfter=1:this.breakAtStart=1,this.curLine=null,e--;continue}else this.text=r,this.textOff=0}let n=Math.min(this.text.length-this.textOff,e,512);this.getLine().append(this.wrapMarks(new Wi(this.text.slice(this.textOff,this.textOff+n)),t),i),this.textOff+=n,e-=n,i=0}}span(e,t,i,n){this.buildText(t-e,i,n),this.pos=t,this.openStart<0&&(this.openStart=n)}point(e,t,i,n,r){let o=t-e;if(i instanceof Hi)if(i.block){let{type:a}=i;a==G.WidgetAfter&&!this.posCovered()&&this.getLine(),this.addWidget(new Ti(i.widget||new zh("div"),o,a))}else{let a=this.wrapMarks(St.create(i.widget||new zh("span"),o,i.startSide),n);this.getLine().append(a,r)}else this.doc.lineAt(this.pos).from==this.pos&&this.getLine().addLineDeco(i);o&&(this.textOff+o<=this.text.length?this.textOff+=o:(this.skip+=o-(this.text.length-this.textOff),this.text="",this.textOff=0),this.pos=t),this.openStart<0&&(this.openStart=r)}static build(e,t,i,n){let r=new cl(e,t,i);return r.openEnd=V.spans(n,t,i,r),r.openStart<0&&(r.openStart=r.openEnd),r.finish(),r}}class zh extends Kt{constructor(e){super(),this.tag=e}eq(e){return e.tag==this.tag}toDOM(){return document.createElement(this.tag)}updateDOM(e){return e.nodeName.toLowerCase()==this.tag}}const p0=[],Of=E.define(),Df=E.define(),If=E.define(),Bf=E.define(),ga=E.define(),Nf=E.define();function tt(s,e,t){let i=s.facet(Bf);i.length?i[0](e):window.onerror?window.onerror(String(e),t,void 0,void 0,e):t?console.error(t+":",e):console.error(e)}const Yt=E.define({combine:s=>s.length?s[0]:!0});class m0{constructor(e,t){this.field=e,this.get=t}}class _e{from(e){return new m0(this,e)}static define(){return new _e}}_e.decorations=_e.define();_e.atomicRanges=_e.define();_e.scrollMargins=_e.define();let g0=0;const ds=E.define();class fe{constructor(e,t,i){this.id=e,this.create=t,this.fields=i,this.extension=ds.of(this)}static define(e,t){let{eventHandlers:i,provide:n,decorations:r}=t||{},o=[];if(n)for(let a of Array.isArray(n)?n:[n])o.push(a);return i&&o.push(zf.from(a=>({plugin:a,handlers:i}))),r&&o.push(_e.decorations.from(r)),new fe(g0++,e,o)}static fromClass(e,t){return fe.define(i=>new e(i),t)}}const zf=_e.define();class Ot{constructor(e){this.spec=e,this.mustUpdate=null,this.value=null}takeField(e,t){for(let{field:i,get:n}of this.spec.fields)i==e&&t.push(n(this.value))}update(e){if(this.value){if(this.mustUpdate){let t=this.mustUpdate;if(this.mustUpdate=null,!this.value.update)return this;try{this.value.update(t)}catch(i){if(tt(t.state,i,"CodeMirror plugin crashed"),this.value.destroy)try{this.value.destroy()}catch{}return Ot.dummy}}}else try{this.value=this.spec.create(e)}catch(t){return tt(e.state,t,"CodeMirror plugin crashed"),Ot.dummy}return this}destroy(e){var t;if(!((t=this.value)===null||t===void 0)&&t.destroy)try{this.value.destroy()}catch(i){tt(e.state,i,"CodeMirror plugin crashed")}}}Ot.dummy=new Ot(fe.define(()=>({})));const Ff=E.define({combine:s=>s.reduce((e,t)=>_s(t,e),{})}),Uf=E.define({combine:s=>s.reduce((e,t)=>_s(t,e),{})}),si=E.define(),fs=E.define();class Ct{constructor(e,t,i,n){this.fromA=e,this.toA=t,this.fromB=i,this.toB=n}join(e){return new Ct(Math.min(this.fromA,e.fromA),Math.max(this.toA,e.toA),Math.min(this.fromB,e.fromB),Math.max(this.toB,e.toB))}addToSet(e){let t=e.length,i=this;for(;t>0;t--){let n=e[t-1];if(!(n.fromA>i.toA)){if(n.toA<i.fromA)break;i=i.join(n),e.splice(t-1,1)}}return e.splice(t,0,i),e}static extendWithRanges(e,t){if(t.length==0)return e;let i=[];for(let n=0,r=0,o=0,a=0;;n++){let l=n==e.length?null:e[n],h=o-a,c=l?l.fromB:1e9;for(;r<t.length&&t[r]<c;){let d=t[r],f=t[r+1],u=Math.max(a,d),p=Math.min(c,f);if(u<=p&&new Ct(u+h,p+h,u,p).addToSet(i),f>c)break;r+=2}if(!l)return i;new Ct(l.fromA,l.toA,l.fromB,l.toB).addToSet(i),o=l.toA,a=l.toB}}}class Fh{constructor(e,t,i=p0){this.view=e,this.state=t,this.transactions=i,this.flags=0,this.startState=e.state,this.changes=he.empty(this.startState.doc.length);for(let o of i)this.changes=this.changes.compose(o.changes);let n=[];this.changes.iterChangedRanges((o,a,l,h)=>n.push(new Ct(o,a,l,h))),this.changedRanges=n;let r=e.hasFocus;r!=e.inputState.notifiedFocused&&(e.inputState.notifiedFocused=r,this.flags|=1),this.docChanged&&(this.flags|=2)}get viewportChanged(){return(this.flags&4)>0}get heightChanged(){return(this.flags&2)>0}get geometryChanged(){return this.docChanged||(this.flags&18)>0}get focusChanged(){return(this.flags&1)>0}get docChanged(){return this.transactions.some(e=>e.docChanged)}get selectionSet(){return this.transactions.some(e=>e.selection)}get empty(){return this.flags==0&&this.transactions.length==0}}class Uh extends de{constructor(e){super(),this.view=e,this.compositionDeco=T.none,this.decorations=[],this.minWidth=0,this.minWidthFrom=0,this.minWidthTo=0,this.impreciseAnchor=null,this.impreciseHead=null,this.setDOM(e.contentDOM),this.children=[new Oe],this.children[0].setParent(this),this.updateInner([new Ct(0,0,0,e.state.doc.length)],this.updateDeco(),0)}get root(){return this.view.root}get editorView(){return this.view}get length(){return this.view.state.doc.length}update(e){let t=e.changedRanges;this.minWidth>0&&t.length&&(t.every(({fromA:l,toA:h})=>h<this.minWidthFrom||l>this.minWidthTo)?(this.minWidthFrom=e.changes.mapPos(this.minWidthFrom,1),this.minWidthTo=e.changes.mapPos(this.minWidthTo,1)):this.minWidth=0),this.view.inputState.composing<0?this.compositionDeco=T.none:e.transactions.length&&(this.compositionDeco=v0(this.view,e.changes));let i=(D.ie||D.chrome)&&!this.compositionDeco.size&&e&&e.state.doc.lines!=e.startState.doc.lines,n=this.decorations,r=this.updateDeco(),o=k0(n,r,e.changes);t=Ct.extendWithRanges(t,o);let a=e.transactions.some(l=>l.annotation(N.userEvent)=="pointerselection");return this.dirty==0&&t.length==0&&!(e.flags&12)&&e.state.selection.main.from>=this.view.viewport.from&&e.state.selection.main.to<=this.view.viewport.to?(this.updateSelection(i,a),!1):(this.updateInner(t,r,e.startState.doc.length,i,a),!0)}updateInner(e,t,i,n=!1,r=!1){this.updateChildren(e,t,i);let{observer:o}=this.view;o.ignore(()=>{this.dom.style.height=this.view.viewState.domHeight+"px",this.dom.style.minWidth=this.minWidth?this.minWidth+"px":"";let a=D.chrome||D.ios?{node:o.selectionRange.focusNode,written:!1}:void 0;this.sync(a),this.dirty=0,a&&(a.written||o.selectionRange.focusNode!=a.node)&&(n=!0),this.updateSelection(n,r),this.dom.style.height=""})}updateChildren(e,t,i){let n=this.childCursor(i);for(let r=e.length-1;;r--){let o=r>=0?e[r]:null;if(!o)break;let{fromA:a,toA:l,fromB:h,toB:c}=o,{content:d,breakAtStart:f,openStart:u,openEnd:p}=cl.build(this.view.state.doc,h,c,t),{i:m,off:y}=n.findPos(l,1),{i:v,off:_}=n.findPos(a,-1);this.replaceRange(v,_,m,y,d,f,u,p)}}replaceRange(e,t,i,n,r,o,a,l){let h=this.children[e],c=r.length?r[r.length-1]:null,d=c?c.breakAfter:o;if(e==i&&!o&&!d&&r.length<2&&h.merge(t,n,r.length?c:null,t==0,a,l))return;let f=this.children[i];for(n<f.length||f.children.length&&f.children[f.children.length-1].length==0?(e==i&&(f=f.split(n),n=0),!d&&c&&f.merge(0,n,c,!0,0,l)?r[r.length-1]=f:((n||f.children.length&&f.children[0].length==0)&&f.merge(0,n,null,!1,0,l),r.push(f))):f.breakAfter&&(c?c.breakAfter=1:o=1),i++,h.breakAfter=o,t>0&&(!o&&r.length&&h.merge(t,h.length,r[0],!1,a,0)?h.breakAfter=r.shift().breakAfter:(t<h.length||h.children.length&&h.children[h.children.length-1].length==0)&&h.merge(t,h.length,null,!1,a,0),e++);e<i&&r.length;)if(this.children[i-1].match(r[r.length-1]))i--,r.pop();else if(this.children[e].match(r[0]))e++,r.shift();else break;(e<i||r.length)&&this.replaceChildren(e,i,r)}updateSelection(e=!1,t=!1){if(!(t||this.mayControlSelection())||D.ios&&this.view.inputState.rapidCompositionStart)return;let i=this.view.state.selection.main,n=this.domAtPos(i.anchor),r=i.empty?n:this.domAtPos(i.head);if(D.gecko&&i.empty&&b0(n)){let a=document.createTextNode("");this.view.observer.ignore(()=>n.node.insertBefore(a,n.node.childNodes[n.offset]||null)),n=r=new Pe(a,0),e=!0}let o=this.view.observer.selectionRange;(e||!o.focusNode||!Yn(n.node,n.offset,o.anchorNode,o.anchorOffset)||!Yn(r.node,r.offset,o.focusNode,o.focusOffset))&&(this.view.observer.ignore(()=>{let a=Kn(this.root);if(i.empty){if(D.gecko){let l=x0(n.node,n.offset);if(l&&l!=3){let h=Wf(n.node,n.offset,l==1?1:-1);h&&(n=new Pe(h,l==1?0:h.nodeValue.length))}}a.collapse(n.node,n.offset),i.bidiLevel!=null&&o.cursorBidiLevel!=null&&(o.cursorBidiLevel=i.bidiLevel)}else if(a.extend)a.collapse(n.node,n.offset),a.extend(r.node,r.offset);else{let l=document.createRange();i.anchor>i.head&&([n,r]=[r,n]),l.setEnd(r.node,r.offset),l.setStart(n.node,n.offset),a.removeAllRanges(),a.addRange(l)}}),this.view.observer.setSelectionRange(n,r)),this.impreciseAnchor=n.precise?null:new Pe(o.anchorNode,o.anchorOffset),this.impreciseHead=r.precise?null:new Pe(o.focusNode,o.focusOffset)}enforceCursorAssoc(){if(this.view.composing)return;let e=this.view.state.selection.main,t=Kn(this.root);if(!e.empty||!e.assoc||!t.modify)return;let i=Oe.find(this,e.head);if(!i)return;let n=i.posAtStart;if(e.head==n||e.head==n+i.length)return;let r=this.coordsAt(e.head,-1),o=this.coordsAt(e.head,1);if(!r||!o||r.bottom>o.top)return;let a=this.domAtPos(e.head+e.assoc);t.collapse(a.node,a.offset),t.modify("move",e.assoc<0?"forward":"backward","lineboundary")}mayControlSelection(){return this.view.state.facet(Yt)?this.root.activeElement==this.dom:ha(this.dom,this.view.observer.selectionRange)}nearest(e){for(let t=e;t;){let i=de.get(t);if(i&&i.rootView==this)return i;t=t.parentNode}return null}posFromDOM(e,t){let i=this.nearest(e);if(!i)throw new RangeError("Trying to find position for a DOM position outside of the document");return i.localPosFromDOM(e,t)+i.posAtStart}domAtPos(e){let{i:t,off:i}=this.childCursor().findPos(e,-1);for(;t<this.children.length-1;){let n=this.children[t];if(i<n.length||n instanceof Oe)break;t++,i=0}return this.children[t].domAtPos(i)}coordsAt(e,t){for(let i=this.length,n=this.children.length-1;;n--){let r=this.children[n],o=i-r.breakAfter-r.length;if(e>o||e==o&&r.type!=G.WidgetBefore&&r.type!=G.WidgetAfter&&(!n||t==2||this.children[n-1].breakAfter||this.children[n-1].type==G.WidgetBefore&&t>-2))return r.coordsAt(e-o,t);i=o}}measureVisibleLineHeights(){let e=[],{from:t,to:i}=this.view.viewState.viewport,n=Math.max(this.view.scrollDOM.clientWidth,this.minWidth)+1;for(let r=0,o=0;o<this.children.length;o++){let a=this.children[o],l=r+a.length;if(l>i)break;if(r>=t){e.push(a.dom.getBoundingClientRect().height);let h=a.dom.scrollWidth;h>n&&(this.minWidth=n=h,this.minWidthFrom=r,this.minWidthTo=l)}r=l+a.breakAfter}return e}measureTextSize(){for(let n of this.children)if(n instanceof Oe){let r=n.measureTextSize();if(r)return r}let e=document.createElement("div"),t,i;return e.className="cm-line",e.textContent="abc def ghi jkl mno pqr stu",this.view.observer.ignore(()=>{this.dom.appendChild(e);let n=_r(e.firstChild)[0];t=e.getBoundingClientRect().height,i=n?n.width/27:7,e.remove()}),{lineHeight:t,charWidth:i}}childCursor(e=this.length){let t=this.children.length;return t&&(e-=this.children[--t].length),new Cf(this.children,e,t)}computeBlockGapDeco(){let e=[],t=this.view.viewState;for(let i=0,n=0;;n++){let r=n==t.viewports.length?null:t.viewports[n],o=r?r.from-1:this.length;if(o>i){let a=t.lineAt(o,0).bottom-t.lineAt(i,0).top;e.push(T.replace({widget:new y0(a),block:!0,inclusive:!0}).range(i,o))}if(!r)break;i=r.to+1}return T.set(e)}updateDeco(){return this.decorations=[...this.view.pluginField(_e.decorations),...this.view.state.facet(si),this.compositionDeco,this.computeBlockGapDeco(),this.view.viewState.lineGapDeco]}scrollPosIntoView(e,t){let i=this.coordsAt(e,t);if(!i)return;let n=0,r=0,o=0,a=0;for(let l of this.view.pluginField(_e.scrollMargins))if(l){let{left:h,right:c,top:d,bottom:f}=l;h!=null&&(n=Math.max(n,h)),c!=null&&(r=Math.max(r,c)),d!=null&&(o=Math.max(o,d)),f!=null&&(a=Math.max(a,f))}r0(this.dom,{left:i.left-n,top:i.top-o,right:i.right+r,bottom:i.bottom+a})}}function b0(s){return s.node.nodeType==1&&s.node.firstChild&&(s.offset==0||s.node.childNodes[s.offset-1].contentEditable=="false")&&(s.offset==s.node.childNodes.length||s.node.childNodes[s.offset].contentEditable=="false")}class y0 extends Kt{constructor(e){super(),this.height=e}toDOM(){let e=document.createElement("div");return this.updateDOM(e),e}eq(e){return e.height==this.height}updateDOM(e){return e.style.height=this.height+"px",!0}get estimatedHeight(){return this.height}}function v0(s,e){let t=s.observer.selectionRange,i=t.focusNode&&Wf(t.focusNode,t.focusOffset,0);if(!i)return T.none;let n=s.docView.nearest(i),r,o,a=i;if(n instanceof Ui){for(;n.parent instanceof Ui;)n=n.parent;r=n.posAtStart,o=r+n.length,a=n.dom}else if(n instanceof Oe){for(;a.parentNode!=n.dom;)a=a.parentNode;let f=a.previousSibling;for(;f&&!de.get(f);)f=f.previousSibling;r=o=f?de.get(f).posAtEnd:n.posAtStart}else return T.none;let l=e.mapPos(r,1),h=Math.max(l,e.mapPos(o,-1)),c=i.nodeValue,{state:d}=s;if(h-l<c.length)if(d.sliceDoc(l,Math.min(d.doc.length,l+c.length))==c)h=l+c.length;else if(d.sliceDoc(Math.max(0,h-c.length),h)==c)l=h-c.length;else return T.none;else if(d.sliceDoc(l,h)!=c)return T.none;return T.set(T.replace({widget:new w0(a,i)}).range(l,h))}class w0 extends Kt{constructor(e,t){super(),this.top=e,this.text=t}eq(e){return this.top==e.top&&this.text==e.text}toDOM(){return this.top}ignoreEvent(){return!1}get customView(){return d0}}function Wf(s,e,t){for(;;){if(s.nodeType==3)return s;if(s.nodeType==1&&e>0&&t<=0)s=s.childNodes[e-1],e=Jn(s);else if(s.nodeType==1&&e<s.childNodes.length&&t>=0)s=s.childNodes[e],e=0;else return null}}function x0(s,e){return s.nodeType!=1?0:(e&&s.childNodes[e-1].contentEditable=="false"?1:0)|(e<s.childNodes.length&&s.childNodes[e].contentEditable=="false"?2:0)}class S0{constructor(){this.changes=[]}compareRange(e,t){ma(e,t,this.changes)}comparePoint(e,t){ma(e,t,this.changes)}}function k0(s,e,t){let i=new S0;return V.compare(s,e,t,i),i.changes}var F=function(s){return s[s.LTR=0]="LTR",s[s.RTL=1]="RTL",s}(F||(F={}));const ba=F.LTR,C0=F.RTL;function qf(s){let e=[];for(let t=0;t<s.length;t++)e.push(1<<+s[t]);return e}const A0=qf("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),M0=qf("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),ya=Object.create(null),rt=[];for(let s of["()","[]","{}"]){let e=s.charCodeAt(0),t=s.charCodeAt(1);ya[e]=t,ya[t]=-e}function $0(s){return s<=247?A0[s]:1424<=s&&s<=1524?2:1536<=s&&s<=1785?M0[s-1536]:1774<=s&&s<=2220?4:8192<=s&&s<=8203||s==8204?256:1}const T0=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;class Ei{constructor(e,t,i){this.from=e,this.to=t,this.level=i}get dir(){return this.level%2?C0:ba}side(e,t){return this.dir==t==e?this.to:this.from}static find(e,t,i,n){let r=-1;for(let o=0;o<e.length;o++){let a=e[o];if(a.from<=t&&a.to>=t){if(a.level==i)return o;(r<0||(n!=0?n<0?a.from<t:a.to>t:e[r].level>a.level))&&(r=o)}}if(r<0)throw new RangeError("Index out of range");return r}}const X=[];function E0(s,e){let t=s.length,i=e==ba?1:2,n=e==ba?2:1;if(!s||i==1&&!T0.test(s))return Hf(t);for(let o=0,a=i,l=i;o<t;o++){let h=$0(s.charCodeAt(o));h==512?h=a:h==8&&l==4&&(h=16),X[o]=h==4?2:h,h&7&&(l=h),a=h}for(let o=0,a=i,l=i;o<t;o++){let h=X[o];if(h==128)o<t-1&&a==X[o+1]&&a&24?h=X[o]=a:X[o]=256;else if(h==64){let c=o+1;for(;c<t&&X[c]==64;)c++;let d=o&&a==8||c<t&&X[c]==8?l==1?1:8:256;for(let f=o;f<c;f++)X[f]=d;o=c-1}else h==8&&l==1&&(X[o]=1);a=h,h&7&&(l=h)}for(let o=0,a=0,l=0,h,c,d;o<t;o++)if(c=ya[h=s.charCodeAt(o)])if(c<0){for(let f=a-3;f>=0;f-=3)if(rt[f+1]==-c){let u=rt[f+2],p=u&2?i:u&4?u&1?n:i:0;p&&(X[o]=X[rt[f]]=p),a=f;break}}else{if(rt.length==189)break;rt[a++]=o,rt[a++]=h,rt[a++]=l}else if((d=X[o])==2||d==1){let f=d==i;l=f?0:1;for(let u=a-3;u>=0;u-=3){let p=rt[u+2];if(p&2)break;if(f)rt[u+2]|=2;else{if(p&4)break;rt[u+2]|=4}}}for(let o=0;o<t;o++)if(X[o]==256){let a=o+1;for(;a<t&&X[a]==256;)a++;let l=(o?X[o-1]:i)==1,h=(a<t?X[a]:i)==1,c=l==h?l?1:2:i;for(let d=o;d<a;d++)X[d]=c;o=a-1}let r=[];if(i==1)for(let o=0;o<t;){let a=o,l=X[o++]!=1;for(;o<t&&l==(X[o]!=1);)o++;if(l)for(let h=o;h>a;){let c=h,d=X[--h]!=2;for(;h>a&&d==(X[h-1]!=2);)h--;r.push(new Ei(h,c,d?2:1))}else r.push(new Ei(a,o,0))}else for(let o=0;o<t;){let a=o,l=X[o++]==2;for(;o<t&&l==(X[o]==2);)o++;r.push(new Ei(a,o,l?1:2))}return r}function Hf(s){return[new Ei(0,s,0)]}let Vf="";function P0(s,e,t,i,n){var r;let o=i.head-s.from,a=-1;if(o==0){if(!n||!s.length)return null;e[0].level!=t&&(o=e[0].side(!1,t),a=0)}else if(o==s.length){if(n)return null;let f=e[e.length-1];f.level!=t&&(o=f.side(!0,t),a=e.length-1)}a<0&&(a=Ei.find(e,o,(r=i.bidiLevel)!==null&&r!==void 0?r:-1,i.assoc));let l=e[a];o==l.side(n,t)&&(l=e[a+=n?1:-1],o=l.side(!n,t));let h=n==(l.dir==t),c=We(s.text,o,h);if(Vf=s.text.slice(Math.min(o,c),Math.max(o,c)),c!=l.side(n,t))return b.cursor(c+s.from,h?-1:1,l.level);let d=a==(n?e.length-1:0)?null:e[a+(n?1:-1)];return!d&&l.level!=t?b.cursor(n?s.to:s.from,n?-1:1,t):d&&d.level<l.level?b.cursor(d.side(!n,t)+s.from,n?1:-1,d.level):b.cursor(c+s.from,n?-1:1,l.level)}function _0(s,e,t=1){let i=s.charCategorizer(e),n=s.doc.lineAt(e),r=e-n.from;if(n.length==0)return b.cursor(e);r==0?t=1:r==n.length&&(t=-1);let o=r,a=r;t<0?o=We(n.text,r,!1):a=We(n.text,r);let l=i(n.text.slice(o,a));for(;o>0;){let h=We(n.text,o,!1);if(i(n.text.slice(h,o))!=l)break;o=h}for(;a<n.length;){let h=We(n.text,a);if(i(n.text.slice(a,h))!=l)break;a=h}return b.range(o+n.from,a+n.from)}function L0(s,e){return e.left>s?e.left-s:Math.max(0,s-e.right)}function R0(s,e){return e.top>s?e.top-s:Math.max(0,s-e.bottom)}function bo(s,e){return s.top<e.bottom-1&&s.bottom>e.top+1}function Wh(s,e){return e<s.top?{top:e,left:s.left,right:s.right,bottom:s.bottom}:s}function qh(s,e){return e>s.bottom?{top:s.top,left:s.left,right:s.right,bottom:e}:s}function va(s,e,t){let i,n,r,o,a,l,h,c;for(let u=s.firstChild;u;u=u.nextSibling){let p=_r(u);for(let m=0;m<p.length;m++){let y=p[m];n&&bo(n,y)&&(y=Wh(qh(y,n.bottom),n.top));let v=L0(e,y),_=R0(t,y);if(v==0&&_==0)return u.nodeType==3?Hh(u,e,t):va(u,e,t);(!i||o>_||o==_&&r>v)&&(i=u,n=y,r=v,o=_),v==0?t>y.bottom&&(!h||h.bottom<y.bottom)?(a=u,h=y):t<y.top&&(!c||c.top>y.top)&&(l=u,c=y):h&&bo(h,y)?h=qh(h,y.bottom):c&&bo(c,y)&&(c=Wh(c,y.top))}}if(h&&h.bottom>=t?(i=a,n=h):c&&c.top<=t&&(i=l,n=c),!i)return{node:s,offset:0};let d=Math.max(n.left,Math.min(n.right,e));if(i.nodeType==3)return Hh(i,d,t);if(!r&&i.contentEditable=="true")return va(i,d,t);let f=Array.prototype.indexOf.call(s.childNodes,i)+(e>=(n.left+n.right)/2?1:0);return{node:s,offset:f}}function Hh(s,e,t){let i=s.nodeValue.length,n=-1,r=1e9,o=0;for(let a=0;a<i;a++){let l=Ps(s,a,a+1).getClientRects();for(let h=0;h<l.length;h++){let c=l[h];if(c.top==c.bottom)continue;o||(o=e-c.left);let d=(c.top>t?c.top-t:t-c.bottom)-1;if(c.left-1<=e&&c.right+1>=e&&d<r){let f=e>=(c.left+c.right)/2,u=f;if((D.chrome||D.gecko)&&Ps(s,a).getBoundingClientRect().left==c.right&&(u=!f),d<=0)return{node:s,offset:a+(u?1:0)};n=a+(u?1:0),r=d}}}return{node:s,offset:n>-1?n:o>0?s.nodeValue.length:0}}function jf(s,{x:e,y:t},i,n=-1){let r=s.contentDOM.getBoundingClientRect(),o,a=s.defaultLineHeight/2;for(let u=!1;;){if(o=s.blockAtHeight(t,r.top),o.top>t||o.bottom<t){if(n=o.top>t?-1:1,t=Math.min(o.bottom-a,Math.max(o.top+a,t)),u)return i?null:0;u=!0}if(o.type==G.Text)break;t=n>0?o.bottom+a:o.top-a}let l=o.from;if(e=Math.max(r.left+1,Math.min(r.right-1,e)),l<s.viewport.from)return s.viewport.from==0?0:Vh(s,r,o,e,t);if(l>s.viewport.to)return s.viewport.to==s.state.doc.length?s.state.doc.length:Vh(s,r,o,e,t);let h=s.root,c=h.elementFromPoint(e,t),d,f=-1;if(c&&s.contentDOM.contains(c)&&!(s.docView.nearest(c)instanceof St)){if(h.caretPositionFromPoint){let u=h.caretPositionFromPoint(e,t);u&&({offsetNode:d,offset:f}=u)}else if(h.caretRangeFromPoint){let u=h.caretRangeFromPoint(e,t);u&&({startContainer:d,startOffset:f}=u,D.safari&&O0(d,f,e)&&(d=void 0))}}if(!d||!s.docView.dom.contains(d)){let u=Oe.find(s.docView,l);({node:d,offset:f}=va(u.dom,e,t))}return s.docView.posFromDOM(d,f)}function Vh(s,e,t,i,n){let r=Math.round((i-e.left)*s.defaultCharacterWidth);s.lineWrapping&&t.height>s.defaultLineHeight*1.5&&(r+=Math.floor((n-t.top)/s.defaultLineHeight)*s.viewState.heightOracle.lineLength);let o=s.state.sliceDoc(t.from,t.to);return t.from+Jo(o,r,s.state.tabSize)}function O0(s,e,t){let i;if(s.nodeType!=3||e!=(i=s.nodeValue.length))return!1;for(let n=s.nextSibling;n;n=n.nextSibling)if(n.nodeType!=1||n.nodeName!="BR")return!1;return Ps(s,i-1,i).getBoundingClientRect().left>t}function D0(s,e,t,i){let n=s.state.doc.lineAt(e.head),r=!i||!s.lineWrapping?null:s.coordsAtPos(e.assoc<0&&e.head>n.from?e.head-1:e.head);if(r){let l=s.dom.getBoundingClientRect(),h=s.posAtCoords({x:t==(s.textDirection==F.LTR)?l.right-1:l.left+1,y:(r.top+r.bottom)/2});if(h!=null)return b.cursor(h,t?-1:1)}let o=Oe.find(s.docView,e.head),a=o?t?o.posAtEnd:o.posAtStart:t?n.to:n.from;return b.cursor(a,t?-1:1)}function jh(s,e,t,i){let n=s.state.doc.lineAt(e.head),r=s.bidiSpans(n);for(let o=e,a=null;;){let l=P0(n,r,s.textDirection,o,t),h=Vf;if(!l){if(n.number==(t?s.state.doc.lines:1))return o;h=`
`,n=s.state.doc.line(n.number+(t?1:-1)),r=s.bidiSpans(n),l=b.cursor(t?n.from:n.to)}if(a){if(!a(h))return o}else{if(!i)return l;a=i(h)}o=l}}function I0(s,e,t){let i=s.state.charCategorizer(e),n=i(t);return r=>{let o=i(r);return n==qe.Space&&(n=o),n==o}}function B0(s,e,t,i){let n=e.head,r=t?1:-1;if(n==(t?s.state.doc.length:0))return b.cursor(n);let o=e.goalColumn,a,l=s.contentDOM.getBoundingClientRect(),h=s.coordsAtPos(n);if(h)o==null&&(o=h.left-l.left),a=r<0?h.top:h.bottom;else{let f=s.viewState.lineAt(n,s.dom.getBoundingClientRect().top);o==null&&(o=Math.min(l.right-l.left,s.defaultCharacterWidth*(n-f.from))),a=r<0?f.top:f.bottom}let c=l.left+o,d=i!=null?i:s.defaultLineHeight>>1;for(let f=0;;f+=10){let u=a+(d+f)*r,p=jf(s,{x:c,y:u},!1,r);if(u<l.top||u>l.bottom||(r<0?p<n:p>n))return b.cursor(p,void 0,void 0,o)}}function yo(s,e,t){let i=s.pluginField(_e.atomicRanges);for(;;){let n=!1;for(let r of i)r.between(t.from-1,t.from+1,(o,a,l)=>{t.from>o&&t.from<a&&(t=e.from>t.from?b.cursor(o,1):b.cursor(a,-1),n=!0)});if(!n)return t}}class N0{constructor(e){this.lastKeyCode=0,this.lastKeyTime=0,this.pendingIOSKey=null,this.lastSelectionOrigin=null,this.lastSelectionTime=0,this.lastEscPress=0,this.lastContextMenu=0,this.scrollHandlers=[],this.registeredEvents=[],this.customHandlers=[],this.composing=-1,this.compositionEndedAt=0,this.rapidCompositionStart=!1,this.mouseSelection=null;for(let t in ue){let i=ue[t];e.contentDOM.addEventListener(t,n=>{t=="keydown"&&this.keydown(e,n)||!Gh(e,n)||this.ignoreDuringComposition(n)||(this.mustFlushObserver(n)&&e.observer.forceFlush(),this.runCustomHandlers(t,e,n)?n.preventDefault():i(e,n))}),this.registeredEvents.push(t)}this.notifiedFocused=e.hasFocus,this.ensureHandlers(e),D.safari&&e.contentDOM.addEventListener("input",()=>null)}setSelectionOrigin(e){this.lastSelectionOrigin=e,this.lastSelectionTime=Date.now()}ensureHandlers(e){let t=this.customHandlers=e.pluginField(zf);for(let i of t)for(let n in i.handlers)this.registeredEvents.indexOf(n)<0&&n!="scroll"&&(this.registeredEvents.push(n),e.contentDOM.addEventListener(n,r=>{!Gh(e,r)||this.runCustomHandlers(n,e,r)&&r.preventDefault()}))}runCustomHandlers(e,t,i){for(let n of this.customHandlers){let r=n.handlers[e],o=!1;if(r){try{o=r.call(n.plugin,i,t)}catch(a){tt(t.state,a)}if(o||i.defaultPrevented)return D.android&&e=="keydown"&&i.keyCode==13&&t.observer.flushSoon(),!0}}return!1}runScrollHandlers(e,t){for(let i of this.customHandlers){let n=i.handlers.scroll;if(n)try{n.call(i.plugin,t,e)}catch(r){tt(e.state,r)}}}keydown(e,t){return this.lastKeyCode=t.keyCode,this.lastKeyTime=Date.now(),this.screenKeyEvent(e,t)?!0:D.ios&&(t.keyCode==13||t.keyCode==8)&&!(t.ctrlKey||t.altKey||t.metaKey)&&!t.synthetic?(this.pendingIOSKey=t.keyCode==13?"enter":"backspace",setTimeout(()=>this.flushIOSKey(e),250),!0):!1}flushIOSKey(e){if(!this.pendingIOSKey)return!1;let t=e.contentDOM,i=this.pendingIOSKey;return this.pendingIOSKey=null,i=="enter"?bs(t,"Enter",13):bs(t,"Backspace",8)}ignoreDuringComposition(e){return/^key/.test(e.type)?this.composing>0?!0:D.safari&&Date.now()-this.compositionEndedAt<500?(this.compositionEndedAt=0,!0):!1:!1}screenKeyEvent(e,t){let i=t.keyCode==9&&Date.now()<this.lastEscPress+2e3;return t.keyCode==27?this.lastEscPress=Date.now():Gf.indexOf(t.keyCode)<0&&(this.lastEscPress=0),i}mustFlushObserver(e){return e.type=="keydown"&&e.keyCode!=229||e.type=="compositionend"&&!D.ios}startMouseSelection(e,t,i){this.mouseSelection&&this.mouseSelection.destroy(),this.mouseSelection=new z0(this,e,t,i)}update(e){this.mouseSelection&&this.mouseSelection.update(e),e.transactions.length&&(this.lastKeyCode=this.lastSelectionTime=0)}destroy(){this.mouseSelection&&this.mouseSelection.destroy()}}const Gf=[16,17,18,20,91,92,224,225];class z0{constructor(e,t,i,n){this.inputState=e,this.view=t,this.style=n,this.lastEvent=i;let r=t.contentDOM.ownerDocument;r.addEventListener("mousemove",this.move=this.move.bind(this)),r.addEventListener("mouseup",this.up=this.up.bind(this)),this.extend=i.shiftKey,this.multiple=t.state.facet(U.allowMultipleSelections)&&F0(t,i),this.dragMove=U0(t,i),this.dragging=W0(t,i)?null:!1,this.dragging===!1&&(i.preventDefault(),this.select(i))}move(e){if(e.buttons==0)return this.destroy();this.dragging===!1&&this.select(this.lastEvent=e)}up(e){this.dragging==null&&this.select(this.lastEvent),this.dragging||e.preventDefault(),this.destroy()}destroy(){let e=this.view.contentDOM.ownerDocument;e.removeEventListener("mousemove",this.move),e.removeEventListener("mouseup",this.up),this.inputState.mouseSelection=null}select(e){let t=this.style.get(e,this.extend,this.multiple);(!t.eq(this.view.state.selection)||t.main.assoc!=this.view.state.selection.main.assoc)&&this.view.dispatch({selection:t,annotations:N.userEvent.of("pointerselection"),scrollIntoView:!0})}update(e){e.docChanged&&this.dragging&&(this.dragging=this.dragging.map(e.changes)),this.style.update(e)&&setTimeout(()=>this.select(this.lastEvent),20)}}function F0(s,e){let t=s.state.facet(Of);return t.length?t[0](e):D.mac?e.metaKey:e.ctrlKey}function U0(s,e){let t=s.state.facet(Df);return t.length?t[0](e):D.mac?!e.altKey:!e.ctrlKey}function W0(s,e){let{main:t}=s.state.selection;if(t.empty)return!1;let i=Kn(s.root);if(i.rangeCount==0)return!0;let n=i.getRangeAt(0).getClientRects();for(let r=0;r<n.length;r++){let o=n[r];if(o.left<=e.clientX&&o.right>=e.clientX&&o.top<=e.clientY&&o.bottom>=e.clientY)return!0}return!1}function Gh(s,e){if(!e.bubbles)return!0;if(e.defaultPrevented)return!1;for(let t=e.target,i;t!=s.contentDOM;t=t.parentNode)if(!t||t.nodeType==11||(i=de.get(t))&&i.ignoreEvent(e))return!1;return!0}const ue=Object.create(null),Kf=D.ie&&D.ie_version<15||D.ios&&D.webkit_version<604;function q0(s){let e=s.dom.parentNode;if(!e)return;let t=e.appendChild(document.createElement("textarea"));t.style.cssText="position: fixed; left: -10000px; top: 10px",t.focus(),setTimeout(()=>{s.focus(),t.remove(),Yf(s,t.value)},50)}function Yf(s,e){let{state:t}=s,i,n=1,r=t.toText(e),o=r.lines==t.selection.ranges.length;if(wa&&t.selection.ranges.every(l=>l.empty)&&wa==r.toString()){let l=-1;i=t.changeByRange(h=>{let c=t.doc.lineAt(h.from);if(c.from==l)return{range:h};l=c.from;let d=t.toText((o?r.line(n++).text:e)+t.lineBreak);return{changes:{from:c.from,insert:d},range:b.cursor(h.from+d.length)}})}else o?i=t.changeByRange(l=>{let h=r.line(n++);return{changes:{from:l.from,to:l.to,insert:h.text},range:b.cursor(l.from+h.length)}}):i=t.replaceSelection(r);s.dispatch(i,{annotations:N.userEvent.of("paste"),scrollIntoView:!0})}ue.keydown=(s,e)=>{s.inputState.setSelectionOrigin("keyboardselection")};let Jf=0;ue.touchstart=(s,e)=>{Jf=Date.now(),s.inputState.setSelectionOrigin("pointerselection")};ue.touchmove=s=>{s.inputState.setSelectionOrigin("pointerselection")};ue.mousedown=(s,e)=>{if(s.observer.flush(),Jf>Date.now()-2e3)return;let t=null;for(let i of s.state.facet(If))if(t=i(s,e),t)break;!t&&e.button==0&&(t=G0(s,e)),t&&(s.root.activeElement!=s.contentDOM&&s.observer.ignore(()=>Sf(s.contentDOM)),s.inputState.startMouseSelection(s,e,t))};function Kh(s,e,t,i){if(i==1)return b.cursor(e,t);if(i==2)return _0(s.state,e,t);{let n=Oe.find(s.docView,e),r=s.state.doc.lineAt(n?n.posAtEnd:e),o=n?n.posAtStart:r.from,a=n?n.posAtEnd:r.to;return a<s.state.doc.length&&a==r.to&&a++,b.range(o,a)}}let Xf=(s,e)=>s>=e.top&&s<=e.bottom,Yh=(s,e,t)=>Xf(e,t)&&s>=t.left&&s<=t.right;function H0(s,e,t,i){let n=Oe.find(s.docView,e);if(!n)return 1;let r=e-n.posAtStart;if(r==0)return 1;if(r==n.length)return-1;let o=n.coordsAt(r,-1);if(o&&Yh(t,i,o))return-1;let a=n.coordsAt(r,1);return a&&Yh(t,i,a)?1:o&&Xf(i,o)?-1:1}function Jh(s,e){let t=s.posAtCoords({x:e.clientX,y:e.clientY},!1);return{pos:t,bias:H0(s,t,e.clientX,e.clientY)}}const V0=D.ie&&D.ie_version<=11;let Xh=null,Zh=0,Qh=0;function j0(s){if(!V0)return s.detail;let e=Xh,t=Qh;return Xh=s,Qh=Date.now(),Zh=!e||t>Date.now()-400&&Math.abs(e.clientX-s.clientX)<2&&Math.abs(e.clientY-s.clientY)<2?(Zh+1)%3:1}function G0(s,e){let t=Jh(s,e),i=j0(e),n=s.state.selection,r=t,o=e;return{update(a){a.changes&&(t&&(t.pos=a.changes.mapPos(t.pos)),n=n.map(a.changes),o=null)},get(a,l,h){let c;if(o&&a.clientX==o.clientX&&a.clientY==o.clientY?c=r:(c=r=Jh(s,a),o=a),!c||!t)return n;let d=Kh(s,c.pos,c.bias,i);if(t.pos!=c.pos&&!l){let f=Kh(s,t.pos,t.bias,i),u=Math.min(f.from,d.from),p=Math.max(f.to,d.to);d=u<d.from?b.range(u,p):b.range(p,u)}return l?n.replaceRange(n.main.extend(d.from,d.to)):h?n.addRange(d):b.create([d])}}}ue.dragstart=(s,e)=>{let{selection:{main:t}}=s.state,{mouseSelection:i}=s.inputState;i&&(i.dragging=t),e.dataTransfer&&(e.dataTransfer.setData("Text",s.state.sliceDoc(t.from,t.to)),e.dataTransfer.effectAllowed="copyMove")};function ec(s,e,t,i){let n=s.posAtCoords({x:e.clientX,y:e.clientY});if(n==null||!t)return;e.preventDefault();let{mouseSelection:r}=s.inputState,o=i&&r&&r.dragging&&r.dragMove?{from:r.dragging.from,to:r.dragging.to}:null,a={from:n,insert:t},l=s.state.changes(o?[o,a]:a);s.focus(),s.dispatch({changes:l,selection:{anchor:l.mapPos(n,-1),head:l.mapPos(n,1)},annotations:N.userEvent.of("drop")})}ue.drop=(s,e)=>{if(!e.dataTransfer||!s.state.facet(Yt))return;let t=e.dataTransfer.files;if(t&&t.length){e.preventDefault();let i=Array(t.length),n=0,r=()=>{++n==t.length&&ec(s,e,i.filter(o=>o!=null).join(s.state.lineBreak),!1)};for(let o=0;o<t.length;o++){let a=new FileReader;a.onerror=r,a.onload=()=>{/[\x00-\x08\x0e-\x1f]{2}/.test(a.result)||(i[o]=a.result),r()},a.readAsText(t[o])}}else ec(s,e,e.dataTransfer.getData("Text"),!0)};ue.paste=(s,e)=>{if(!s.state.facet(Yt))return;s.observer.flush();let t=Kf?null:e.clipboardData,i=t&&t.getData("text/plain");i?(Yf(s,i),e.preventDefault()):q0(s)};function K0(s,e){let t=s.dom.parentNode;if(!t)return;let i=t.appendChild(document.createElement("textarea"));i.style.cssText="position: fixed; left: -10000px; top: 10px",i.value=e,i.focus(),i.selectionEnd=e.length,i.selectionStart=0,setTimeout(()=>{i.remove(),s.focus()},50)}function Y0(s){let e=[],t=[],i=!1;for(let n of s.selection.ranges)n.empty||(e.push(s.sliceDoc(n.from,n.to)),t.push(n));if(!e.length){let n=-1;for(let{from:r}of s.selection.ranges){let o=s.doc.lineAt(r);o.number>n&&(e.push(o.text),t.push({from:o.from,to:Math.min(s.doc.length,o.to+1)})),n=o.number}i=!0}return{text:e.join(s.lineBreak),ranges:t,linewise:i}}let wa=null;ue.copy=ue.cut=(s,e)=>{let{text:t,ranges:i,linewise:n}=Y0(s.state);if(!t)return;wa=n?t:null;let r=Kf?null:e.clipboardData;r?(e.preventDefault(),r.clearData(),r.setData("text/plain",t)):K0(s,t),e.type=="cut"&&s.state.facet(Yt)&&s.dispatch({changes:i,scrollIntoView:!0,annotations:N.userEvent.of("cut")})};ue.focus=ue.blur=s=>{setTimeout(()=>{s.hasFocus!=s.inputState.notifiedFocused&&s.update([])},10)};ue.beforeprint=s=>{s.viewState.printing=!0,s.requestMeasure(),setTimeout(()=>{s.viewState.printing=!1,s.requestMeasure()},2e3)};function Zf(s,e){if(s.docView.compositionDeco.size){s.inputState.rapidCompositionStart=e;try{s.update([])}finally{s.inputState.rapidCompositionStart=!1}}}ue.compositionstart=ue.compositionupdate=s=>{s.inputState.composing<0&&(s.docView.compositionDeco.size&&(s.observer.flush(),Zf(s,!0)),s.inputState.composing=0)};ue.compositionend=s=>{s.inputState.composing=-1,s.inputState.compositionEndedAt=Date.now(),setTimeout(()=>{s.inputState.composing<0&&Zf(s,!1)},50)};ue.contextmenu=s=>{s.inputState.lastContextMenu=Date.now()};const tc=["pre-wrap","normal","pre-line"];class J0{constructor(){this.doc=H.empty,this.lineWrapping=!1,this.direction=F.LTR,this.heightSamples={},this.lineHeight=14,this.charWidth=7,this.lineLength=30,this.heightChanged=!1}heightForGap(e,t){let i=this.doc.lineAt(t).number-this.doc.lineAt(e).number+1;return this.lineWrapping&&(i+=Math.ceil((t-e-i*this.lineLength*.5)/this.lineLength)),this.lineHeight*i}heightForLine(e){return this.lineWrapping?(1+Math.max(0,Math.ceil((e-this.lineLength)/(this.lineLength-5))))*this.lineHeight:this.lineHeight}setDoc(e){return this.doc=e,this}mustRefresh(e,t,i){let n=!1;for(let r=0;r<e.length;r++){let o=e[r];o<0?r++:this.heightSamples[Math.floor(o*10)]||(n=!0,this.heightSamples[Math.floor(o*10)]=!0)}return n||tc.indexOf(t)>-1!=this.lineWrapping||this.direction!=i}refresh(e,t,i,n,r,o){let a=tc.indexOf(e)>-1,l=Math.round(i)!=Math.round(this.lineHeight)||this.lineWrapping!=a||this.direction!=t;if(this.lineWrapping=a,this.direction=t,this.lineHeight=i,this.charWidth=n,this.lineLength=r,l){this.heightSamples={};for(let h=0;h<o.length;h++){let c=o[h];c<0?h++:this.heightSamples[Math.floor(c*10)]=!0}}return l}}class X0{constructor(e,t){this.from=e,this.heights=t,this.index=0}get more(){return this.index<this.heights.length}}class Rt{constructor(e,t,i,n,r){this.from=e,this.length=t,this.top=i,this.height=n,this.type=r}get to(){return this.from+this.length}get bottom(){return this.top+this.height}join(e){let t=(Array.isArray(this.type)?this.type:[this]).concat(Array.isArray(e.type)?e.type:[e]);return new Rt(this.from,this.length+e.length,this.top,this.height+e.height,t)}}var W=function(s){return s[s.ByPos=0]="ByPos",s[s.ByHeight=1]="ByHeight",s[s.ByPosNoHeight=2]="ByPosNoHeight",s}(W||(W={}));const Z0=1e-4;class Ie{constructor(e,t,i=2){this.length=e,this.height=t,this.flags=i}get outdated(){return(this.flags&2)>0}set outdated(e){this.flags=(e?2:0)|this.flags&-3}setHeight(e,t){this.height!=t&&(Math.abs(this.height-t)>Z0&&(e.heightChanged=!0),this.height=t)}replace(e,t,i){return Ie.of(i)}decomposeLeft(e,t){t.push(this)}decomposeRight(e,t){t.push(this)}applyChanges(e,t,i,n){let r=this;for(let o=n.length-1;o>=0;o--){let{fromA:a,toA:l,fromB:h,toB:c}=n[o],d=r.lineAt(a,W.ByPosNoHeight,t,0,0),f=d.to>=l?d:r.lineAt(l,W.ByPosNoHeight,t,0,0);for(c+=f.to-l,l=f.to;o>0&&d.from<=n[o-1].toA;)a=n[o-1].fromA,h=n[o-1].fromB,o--,a<d.from&&(d=r.lineAt(a,W.ByPosNoHeight,t,0,0));h+=d.from-a,a=d.from;let u=dl.build(i,e,h,c);r=r.replace(a,l,u)}return r.updateHeight(i,0)}static empty(){return new Fe(0,0)}static of(e){if(e.length==1)return e[0];let t=0,i=e.length,n=0,r=0;for(;;)if(t==i)if(n>r*2){let a=e[t-1];a.break?e.splice(--t,1,a.left,null,a.right):e.splice(--t,1,a.left,a.right),i+=1+a.break,n-=a.size}else if(r>n*2){let a=e[i];a.break?e.splice(i,1,a.left,null,a.right):e.splice(i,1,a.left,a.right),i+=2+a.break,r-=a.size}else break;else if(n<r){let a=e[t++];a&&(n+=a.size)}else{let a=e[--i];a&&(r+=a.size)}let o=0;return e[t-1]==null?(o=1,t--):e[t]==null&&(o=1,i++),new Q0(Ie.of(e.slice(0,t)),o,Ie.of(e.slice(i)))}}Ie.prototype.size=1;class Qf extends Ie{constructor(e,t,i){super(e,t),this.type=i}blockAt(e,t,i,n){return new Rt(n,this.length,i,this.height,this.type)}lineAt(e,t,i,n,r){return this.blockAt(0,i,n,r)}forEachLine(e,t,i,n,r,o){o(this.blockAt(0,i,n,r))}updateHeight(e,t=0,i=!1,n){return n&&n.from<=t&&n.more&&this.setHeight(e,n.heights[n.index++]),this.outdated=!1,this}toString(){return`block(${this.length})`}}class Fe extends Qf{constructor(e,t){super(e,t,G.Text),this.collapsed=0,this.widgetHeight=0}replace(e,t,i){let n=i[0];return i.length==1&&(n instanceof Fe||n instanceof ye&&n.flags&4)&&Math.abs(this.length-n.length)<10?(n instanceof ye?n=new Fe(n.length,this.height):n.height=this.height,this.outdated||(n.outdated=!1),n):Ie.of(i)}updateHeight(e,t=0,i=!1,n){return n&&n.from<=t&&n.more?this.setHeight(e,n.heights[n.index++]):(i||this.outdated)&&this.setHeight(e,Math.max(this.widgetHeight,e.heightForLine(this.length-this.collapsed))),this.outdated=!1,this}toString(){return`line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`}}class ye extends Ie{constructor(e){super(e,0)}lines(e,t){let i=e.lineAt(t).number,n=e.lineAt(t+this.length).number;return{firstLine:i,lastLine:n,lineHeight:this.height/(n-i+1)}}blockAt(e,t,i,n){let{firstLine:r,lastLine:o,lineHeight:a}=this.lines(t,n),l=Math.max(0,Math.min(o-r,Math.floor((e-i)/a))),{from:h,length:c}=t.line(r+l);return new Rt(h,c,i+a*l,a,G.Text)}lineAt(e,t,i,n,r){if(t==W.ByHeight)return this.blockAt(e,i,n,r);if(t==W.ByPosNoHeight){let{from:d,to:f}=i.lineAt(e);return new Rt(d,f-d,0,0,G.Text)}let{firstLine:o,lineHeight:a}=this.lines(i,r),{from:l,length:h,number:c}=i.lineAt(e);return new Rt(l,h,n+a*(c-o),a,G.Text)}forEachLine(e,t,i,n,r,o){let{firstLine:a,lineHeight:l}=this.lines(i,r);for(let h=Math.max(e,r),c=Math.min(r+this.length,t);h<=c;){let d=i.lineAt(h);h==e&&(n+=l*(d.number-a)),o(new Rt(d.from,d.length,n,l,G.Text)),n+=l,h=d.to+1}}replace(e,t,i){let n=this.length-t;if(n>0){let r=i[i.length-1];r instanceof ye?i[i.length-1]=new ye(r.length+n):i.push(null,new ye(n-1))}if(e>0){let r=i[0];r instanceof ye?i[0]=new ye(e+r.length):i.unshift(new ye(e-1),null)}return Ie.of(i)}decomposeLeft(e,t){t.push(new ye(e-1),null)}decomposeRight(e,t){t.push(null,new ye(this.length-e-1))}updateHeight(e,t=0,i=!1,n){let r=t+this.length;if(n&&n.from<=t+this.length&&n.more){let o=[],a=Math.max(t,n.from);for(n.from>t&&o.push(new ye(n.from-t-1).updateHeight(e,t));a<=r&&n.more;){let l=e.doc.lineAt(a).length;o.length&&o.push(null);let h=new Fe(l,n.heights[n.index++]);h.outdated=!1,o.push(h),a+=l+1}return a<=r&&o.push(null,new ye(r-a).updateHeight(e,a)),e.heightChanged=!0,Ie.of(o)}else(i||this.outdated)&&(this.setHeight(e,e.heightForGap(t,t+this.length)),this.outdated=!1);return this}toString(){return`gap(${this.length})`}}class Q0 extends Ie{constructor(e,t,i){super(e.length+t+i.length,e.height+i.height,t|(e.outdated||i.outdated?2:0)),this.left=e,this.right=i,this.size=e.size+i.size}get break(){return this.flags&1}blockAt(e,t,i,n){let r=i+this.left.height;return e<r||this.right.height==0?this.left.blockAt(e,t,i,n):this.right.blockAt(e,t,r,n+this.left.length+this.break)}lineAt(e,t,i,n,r){let o=n+this.left.height,a=r+this.left.length+this.break,l=t==W.ByHeight?e<o||this.right.height==0:e<a,h=l?this.left.lineAt(e,t,i,n,r):this.right.lineAt(e,t,i,o,a);if(this.break||(l?h.to<a:h.from>a))return h;let c=t==W.ByPosNoHeight?W.ByPosNoHeight:W.ByPos;return l?h.join(this.right.lineAt(a,c,i,o,a)):this.left.lineAt(a,c,i,n,r).join(h)}forEachLine(e,t,i,n,r,o){let a=n+this.left.height,l=r+this.left.length+this.break;if(this.break)e<l&&this.left.forEachLine(e,t,i,n,r,o),t>=l&&this.right.forEachLine(e,t,i,a,l,o);else{let h=this.lineAt(l,W.ByPos,i,n,r);e<h.from&&this.left.forEachLine(e,h.from-1,i,n,r,o),h.to>=e&&h.from<=t&&o(h),t>h.to&&this.right.forEachLine(h.to+1,t,i,a,l,o)}}replace(e,t,i){let n=this.left.length+this.break;if(t<n)return this.balanced(this.left.replace(e,t,i),this.right);if(e>this.left.length)return this.balanced(this.left,this.right.replace(e-n,t-n,i));let r=[];e>0&&this.decomposeLeft(e,r);let o=r.length;for(let a of i)r.push(a);if(e>0&&ic(r,o-1),t<this.length){let a=r.length;this.decomposeRight(t,r),ic(r,a)}return Ie.of(r)}decomposeLeft(e,t){let i=this.left.length;if(e<=i)return this.left.decomposeLeft(e,t);t.push(this.left),this.break&&(i++,e>=i&&t.push(null)),e>i&&this.right.decomposeLeft(e-i,t)}decomposeRight(e,t){let i=this.left.length,n=i+this.break;if(e>=n)return this.right.decomposeRight(e-n,t);e<i&&this.left.decomposeRight(e,t),this.break&&e<n&&t.push(null),t.push(this.right)}balanced(e,t){return e.size>2*t.size||t.size>2*e.size?Ie.of(this.break?[e,null,t]:[e,t]):(this.left=e,this.right=t,this.height=e.height+t.height,this.outdated=e.outdated||t.outdated,this.size=e.size+t.size,this.length=e.length+this.break+t.length,this)}updateHeight(e,t=0,i=!1,n){let{left:r,right:o}=this,a=t+r.length+this.break,l=null;return n&&n.from<=t+r.length&&n.more?l=r=r.updateHeight(e,t,i,n):r.updateHeight(e,t,i),n&&n.from<=a+o.length&&n.more?l=o=o.updateHeight(e,a,i,n):o.updateHeight(e,a,i),l?this.balanced(r,o):(this.height=this.left.height+this.right.height,this.outdated=!1,this)}toString(){return this.left+(this.break?" ":"-")+this.right}}function ic(s,e){let t,i;s[e]==null&&(t=s[e-1])instanceof ye&&(i=s[e+1])instanceof ye&&s.splice(e-1,3,new ye(t.length+1+i.length))}const e1=5;class dl{constructor(e,t){this.pos=e,this.oracle=t,this.nodes=[],this.lineStart=-1,this.lineEnd=-1,this.covering=null,this.writtenTo=e}get isCovered(){return this.covering&&this.nodes[this.nodes.length-1]==this.covering}span(e,t){if(this.lineStart>-1){let i=Math.min(t,this.lineEnd),n=this.nodes[this.nodes.length-1];n instanceof Fe?n.length+=i-this.pos:(i>this.pos||!this.isCovered)&&this.nodes.push(new Fe(i-this.pos,-1)),this.writtenTo=i,t>i&&(this.nodes.push(null),this.writtenTo++,this.lineStart=-1)}this.pos=t}point(e,t,i){if(e<t||i.heightRelevant){let n=i.widget?Math.max(0,i.widget.estimatedHeight):0,r=t-e;i.block?this.addBlock(new Qf(r,n,i.type)):(r||n>=e1)&&this.addLineDeco(n,r)}else t>e&&this.span(e,t);this.lineEnd>-1&&this.lineEnd<this.pos&&(this.lineEnd=this.oracle.doc.lineAt(this.pos).to)}enterLine(){if(this.lineStart>-1)return;let{from:e,to:t}=this.oracle.doc.lineAt(this.pos);this.lineStart=e,this.lineEnd=t,this.writtenTo<e&&((this.writtenTo<e-1||this.nodes[this.nodes.length-1]==null)&&this.nodes.push(this.blankContent(this.writtenTo,e-1)),this.nodes.push(null)),this.pos>e&&this.nodes.push(new Fe(this.pos-e,-1)),this.writtenTo=this.pos}blankContent(e,t){let i=new ye(t-e);return this.oracle.doc.lineAt(e).to==t&&(i.flags|=4),i}ensureLine(){this.enterLine();let e=this.nodes.length?this.nodes[this.nodes.length-1]:null;if(e instanceof Fe)return e;let t=new Fe(0,-1);return this.nodes.push(t),t}addBlock(e){this.enterLine(),e.type==G.WidgetAfter&&!this.isCovered&&this.ensureLine(),this.nodes.push(e),this.writtenTo=this.pos=this.pos+e.length,e.type!=G.WidgetBefore&&(this.covering=e)}addLineDeco(e,t){let i=this.ensureLine();i.length+=t,i.collapsed+=t,i.widgetHeight=Math.max(i.widgetHeight,e),this.writtenTo=this.pos=this.pos+t}finish(e){let t=this.nodes.length==0?null:this.nodes[this.nodes.length-1];this.lineStart>-1&&!(t instanceof Fe)&&!this.isCovered?this.nodes.push(new Fe(0,-1)):(this.writtenTo<this.pos||t==null)&&this.nodes.push(this.blankContent(this.writtenTo,this.pos));let i=e;for(let n of this.nodes)n instanceof Fe&&n.updateHeight(this.oracle,i),i+=n?n.length:1;return this.nodes}static build(e,t,i,n){let r=new dl(i,e);return V.spans(t,i,n,r,0),r.finish(i)}}function t1(s,e,t){let i=new i1;return V.compare(s,e,t,i,0),i.changes}class i1{constructor(){this.changes=[]}compareRange(){}comparePoint(e,t,i,n){(e<t||i&&i.heightRelevant||n&&n.heightRelevant)&&ma(e,t,this.changes,5)}}function s1(s,e){let t=s.getBoundingClientRect(),i=Math.max(0,t.left),n=Math.min(innerWidth,t.right),r=Math.max(0,t.top),o=Math.min(innerHeight,t.bottom);for(let a=s.parentNode;a;)if(a.nodeType==1){let l=window.getComputedStyle(a);if((a.scrollHeight>a.clientHeight||a.scrollWidth>a.clientWidth)&&l.overflow!="visible"){let h=a.getBoundingClientRect();i=Math.max(i,h.left),n=Math.min(n,h.right),r=Math.max(r,h.top),o=Math.min(o,h.bottom)}a=l.position=="absolute"||l.position=="fixed"?a.offsetParent:a.parentNode}else if(a.nodeType==11)a=a.host;else break;return{left:i-t.left,right:n-t.left,top:r-(t.top+e),bottom:o-(t.top+e)}}class vn{constructor(e,t,i){this.from=e,this.to=t,this.size=i}static same(e,t){if(e.length!=t.length)return!1;for(let i=0;i<e.length;i++){let n=e[i],r=t[i];if(n.from!=r.from||n.to!=r.to||n.size!=r.size)return!1}return!0}draw(e){return T.replace({widget:new n1(this.size,e)}).range(this.from,this.to)}}class n1 extends Kt{constructor(e,t){super(),this.size=e,this.vertical=t}eq(e){return e.size==this.size&&e.vertical==this.vertical}toDOM(){let e=document.createElement("div");return this.vertical?e.style.height=this.size+"px":(e.style.width=this.size+"px",e.style.height="2px",e.style.display="inline-block"),e}get estimatedHeight(){return this.vertical?this.size:-1}}class sc{constructor(e){this.state=e,this.pixelViewport={left:0,right:window.innerWidth,top:0,bottom:0},this.inView=!0,this.paddingTop=0,this.paddingBottom=0,this.contentWidth=0,this.heightOracle=new J0,this.scaler=oc,this.scrollTo=null,this.printing=!1,this.visibleRanges=[],this.mustEnforceCursorAssoc=!1,this.heightMap=Ie.empty().applyChanges(e.facet(si),H.empty,this.heightOracle.setDoc(e.doc),[new Ct(0,0,0,e.doc.length)]),this.viewport=this.getViewport(0,null),this.updateForViewport(),this.lineGaps=this.ensureLineGaps([]),this.lineGapDeco=T.set(this.lineGaps.map(t=>t.draw(!1))),this.computeVisibleRanges()}updateForViewport(){let e=[this.viewport],{main:t}=this.state.selection;for(let i=0;i<=1;i++){let n=i?t.head:t.anchor;if(!e.some(({from:r,to:o})=>n>=r&&n<=o)){let{from:r,to:o}=this.lineAt(n,0);e.push(new ns(r,o))}}this.viewports=e.sort((i,n)=>i.from-n.from),this.scaler=this.heightMap.height<=7e6?oc:new o1(this.heightOracle.doc,this.heightMap,this.viewports)}update(e,t=null){let i=this.state;this.state=e.state;let n=this.state.facet(si),r=e.changedRanges,o=Ct.extendWithRanges(r,t1(e.startState.facet(si),n,e?e.changes:he.empty(this.state.doc.length))),a=this.heightMap.height;this.heightMap=this.heightMap.applyChanges(n,i.doc,this.heightOracle.setDoc(this.state.doc),o),this.heightMap.height!=a&&(e.flags|=2);let l=o.length?this.mapViewport(this.viewport,e.changes):this.viewport;(t&&(t.head<l.from||t.head>l.to)||!this.viewportIsAppropriate(l))&&(l=this.getViewport(0,t)),l.eq(this.viewport)||(this.viewport=l,e.flags|=4),this.updateForViewport(),(this.lineGaps.length||this.viewport.to-this.viewport.from>15e3)&&(e.flags|=this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps,e.changes)))),this.computeVisibleRanges(),t&&(this.scrollTo=t),!this.mustEnforceCursorAssoc&&e.selectionSet&&e.view.lineWrapping&&e.state.selection.main.empty&&e.state.selection.main.assoc&&(this.mustEnforceCursorAssoc=!0)}measure(e,t){let i=e.dom,n="",r=F.LTR;if(!t){let p=window.getComputedStyle(i);n=p.whiteSpace,r=p.direction=="rtl"?F.RTL:F.LTR,this.paddingTop=parseInt(p.paddingTop)||0,this.paddingBottom=parseInt(p.paddingBottom)||0}let o=this.printing?{top:-1e8,bottom:1e8,left:-1e8,right:1e8}:s1(i,this.paddingTop),a=o.top-this.pixelViewport.top,l=o.bottom-this.pixelViewport.bottom;if(this.pixelViewport=o,this.inView=this.pixelViewport.bottom>this.pixelViewport.top&&this.pixelViewport.right>this.pixelViewport.left,!this.inView)return 0;let h=e.measureVisibleLineHeights(),c=!1,d=0,f=0,u=this.heightOracle;if(!t){let p=e.dom.clientWidth;if(u.mustRefresh(h,n,r)||u.lineWrapping&&Math.abs(p-this.contentWidth)>u.charWidth){let{lineHeight:m,charWidth:y}=e.measureTextSize();c=u.refresh(n,r,m,y,p/y,h),c&&(e.minWidth=0,f|=16)}this.contentWidth!=p&&(this.contentWidth=p,f|=16),a>0&&l>0?d=Math.max(a,l):a<0&&l<0&&(d=Math.min(a,l))}if(u.heightChanged=!1,this.heightMap=this.heightMap.updateHeight(u,0,c,new X0(this.viewport.from,h)),u.heightChanged&&(f|=2),!this.viewportIsAppropriate(this.viewport,d)||this.scrollTo&&(this.scrollTo.head<this.viewport.from||this.scrollTo.head>this.viewport.to)){let p=this.getViewport(d,this.scrollTo);(p.from!=this.viewport.from||p.to!=this.viewport.to)&&(this.viewport=p,f|=4)}return this.updateForViewport(),(this.lineGaps.length||this.viewport.to-this.viewport.from>15e3)&&(f|=this.updateLineGaps(this.ensureLineGaps(c?[]:this.lineGaps))),this.computeVisibleRanges(),this.mustEnforceCursorAssoc&&(this.mustEnforceCursorAssoc=!1,e.enforceCursorAssoc()),f}get visibleTop(){return this.scaler.fromDOM(this.pixelViewport.top,0)}get visibleBottom(){return this.scaler.fromDOM(this.pixelViewport.bottom,0)}getViewport(e,t){let i=.5-Math.max(-.5,Math.min(.5,e/1e3/2)),n=this.heightMap,r=this.state.doc,{visibleTop:o,visibleBottom:a}=this,l=new ns(n.lineAt(o-i*1e3,W.ByHeight,r,0,0).from,n.lineAt(a+(1-i)*1e3,W.ByHeight,r,0,0).to);if(t){if(t.head<l.from){let{top:h}=n.lineAt(t.head,W.ByPos,r,0,0);l=new ns(n.lineAt(h-1e3/2,W.ByHeight,r,0,0).from,n.lineAt(h+(a-o)+1e3/2,W.ByHeight,r,0,0).to)}else if(t.head>l.to){let{bottom:h}=n.lineAt(t.head,W.ByPos,r,0,0);l=new ns(n.lineAt(h-(a-o)-1e3/2,W.ByHeight,r,0,0).from,n.lineAt(h+1e3/2,W.ByHeight,r,0,0).to)}}return l}mapViewport(e,t){let i=t.mapPos(e.from,-1),n=t.mapPos(e.to,1);return new ns(this.heightMap.lineAt(i,W.ByPos,this.state.doc,0,0).from,this.heightMap.lineAt(n,W.ByPos,this.state.doc,0,0).to)}viewportIsAppropriate({from:e,to:t},i=0){let{top:n}=this.heightMap.lineAt(e,W.ByPos,this.state.doc,0,0),{bottom:r}=this.heightMap.lineAt(t,W.ByPos,this.state.doc,0,0),{visibleTop:o,visibleBottom:a}=this;return(e==0||n<=o-Math.max(10,Math.min(-i,250)))&&(t==this.state.doc.length||r>=a+Math.max(10,Math.min(i,250)))&&n>o-2*1e3&&r<a+2*1e3}mapLineGaps(e,t){if(!e.length||t.empty)return e;let i=[];for(let n of e)t.touchesRange(n.from,n.to)||i.push(new vn(t.mapPos(n.from),t.mapPos(n.to),n.size));return i}ensureLineGaps(e){let t=[];return this.heightOracle.direction!=F.LTR||this.heightMap.forEachLine(this.viewport.from,this.viewport.to,this.state.doc,0,0,i=>{if(i.length<1e4)return;let n=r1(i.from,i.to,this.state);if(n.total<1e4)return;let r,o;if(this.heightOracle.lineWrapping)i.from!=this.viewport.from?r=i.from:r=wn(n,(this.visibleTop-i.top)/i.height),i.to!=this.viewport.to?o=i.to:o=wn(n,(this.visibleBottom-i.top)/i.height);else{let c=n.total*this.heightOracle.charWidth;r=wn(n,this.pixelViewport.left/c),o=wn(n,this.pixelViewport.right/c)}let a=this.state.selection.main;a.from<=r&&a.to>=i.from&&(r=a.from),a.from<=i.to&&a.to>=o&&(o=a.to);let l=r-1e4,h=o+1e4;l>i.from+5e3&&t.push(rc(e,c=>c.from==i.from&&c.to>l-5e3&&c.to<l+5e3)||new vn(i.from,l,this.gapSize(i,l,!0,n))),h<i.to-5e3&&t.push(rc(e,c=>c.to==i.to&&c.from>h-5e3&&c.from<h+5e3)||new vn(h,i.to,this.gapSize(i,h,!1,n)))}),t}gapSize(e,t,i,n){if(this.heightOracle.lineWrapping){let r=e.height*nc(n,t);return i?r:e.height-r}else{let r=nc(n,t);return n.total*this.heightOracle.charWidth*(i?r:1-r)}}updateLineGaps(e){return vn.same(e,this.lineGaps)?0:(this.lineGaps=e,this.lineGapDeco=T.set(e.map(t=>t.draw(this.heightOracle.lineWrapping))),8)}computeVisibleRanges(){let e=this.state.facet(si);this.lineGaps.length&&(e=e.concat(this.lineGapDeco));let t=[];V.spans(e,this.viewport.from,this.viewport.to,{span(i,n){t.push({from:i,to:n})},point(){}},20),this.visibleRanges=t}lineAt(e,t){return t+=this.paddingTop,us(this.heightMap.lineAt(e,W.ByPos,this.state.doc,t,0),this.scaler,t)}lineAtHeight(e,t){return t+=this.paddingTop,us(this.heightMap.lineAt(this.scaler.fromDOM(e,t),W.ByHeight,this.state.doc,t,0),this.scaler,t)}blockAtHeight(e,t){return t+=this.paddingTop,us(this.heightMap.blockAt(this.scaler.fromDOM(e,t),this.state.doc,t,0),this.scaler,t)}forEachLine(e,t,i,n){return n+=this.paddingTop,this.heightMap.forEachLine(e,t,this.state.doc,n,0,this.scaler.scale==1?i:r=>i(us(r,this.scaler,n)))}get contentHeight(){return this.domHeight+this.paddingTop+this.paddingBottom}get domHeight(){return this.scaler.toDOM(this.heightMap.height,this.paddingTop)}}class ns{constructor(e,t){this.from=e,this.to=t}eq(e){return this.from==e.from&&this.to==e.to}}function r1(s,e,t){let i=[],n=s,r=0;return V.spans(t.facet(si),s,e,{span(){},point(o,a){o>n&&(i.push({from:n,to:o}),r+=o-n),n=a}},20),n<e&&(i.push({from:n,to:e}),r+=e-n),{total:r,ranges:i}}function wn({total:s,ranges:e},t){if(t<=0)return e[0].from;if(t>=1)return e[e.length-1].to;let i=Math.floor(s*t);for(let n=0;;n++){let{from:r,to:o}=e[n],a=o-r;if(i<=a)return r+i;i-=a}}function nc(s,e){let t=0;for(let{from:i,to:n}of s.ranges){if(e<=n){t+=e-i;break}t+=n-i}return t/s.total}function rc(s,e){for(let t of s)if(e(t))return t}const oc={toDOM(s){return s},fromDOM(s){return s},scale:1};class o1{constructor(e,t,i){let n=0,r=0,o=0;this.viewports=i.map(({from:a,to:l})=>{let h=t.lineAt(a,W.ByPos,e,0,0).top,c=t.lineAt(l,W.ByPos,e,0,0).bottom;return n+=c-h,{from:a,to:l,top:h,bottom:c,domTop:0,domBottom:0}}),this.scale=(7e6-n)/(t.height-n);for(let a of this.viewports)a.domTop=o+(a.top-r)*this.scale,o=a.domBottom=a.domTop+(a.bottom-a.top),r=a.bottom}toDOM(e,t){e-=t;for(let i=0,n=0,r=0;;i++){let o=i<this.viewports.length?this.viewports[i]:null;if(!o||e<o.top)return r+(e-n)*this.scale+t;if(e<=o.bottom)return o.domTop+(e-o.top)+t;n=o.bottom,r=o.domBottom}}fromDOM(e,t){e-=t;for(let i=0,n=0,r=0;;i++){let o=i<this.viewports.length?this.viewports[i]:null;if(!o||e<o.domTop)return n+(e-r)/this.scale+t;if(e<=o.domBottom)return o.top+(e-o.domTop)+t;n=o.bottom,r=o.domBottom}}}function us(s,e,t){if(e.scale==1)return s;let i=e.toDOM(s.top,t),n=e.toDOM(s.bottom,t);return new Rt(s.from,s.length,i,n-i,Array.isArray(s.type)?s.type.map(r=>us(r,e,t)):s.type)}const ac=E.define({combine:s=>s.join(" ")}),lc=E.define({combine:s=>s.indexOf(!0)>-1}),xa=Bt.newName(),eu=Bt.newName(),tu=Bt.newName(),iu={"&light":"."+eu,"&dark":"."+tu};function Sa(s,e,t){return new Bt(e,{finish(i){return/&/.test(i)?i.replace(/&\w*/,n=>{if(n=="&")return s;if(!t||!t[n])throw new RangeError(`Unsupported selector: ${n}`);return t[n]}):s+" "+i}})}const a1=Sa("."+xa,{"&":{position:"relative !important",boxSizing:"border-box","&.cm-focused":{outline:"1px dotted #212121"},display:"flex !important",flexDirection:"column"},".cm-scroller":{display:"flex !important",alignItems:"flex-start !important",fontFamily:"monospace",lineHeight:1.4,height:"100%",overflowX:"auto",position:"relative",zIndex:0},".cm-content":{margin:0,flexGrow:2,minHeight:"100%",display:"block",whiteSpace:"pre",wordWrap:"normal",boxSizing:"border-box",padding:"4px 0",outline:"none"},".cm-lineWrapping":{whiteSpace:"pre-wrap",wordBreak:"break-word",overflowWrap:"anywhere"},"&light .cm-content":{caretColor:"black"},"&dark .cm-content":{caretColor:"white"},".cm-line":{display:"block",padding:"0 2px 0 4px"},".cm-selectionLayer":{zIndex:-1,contain:"size style"},".cm-selectionBackground":{position:"absolute"},"&light .cm-selectionBackground":{background:"#d9d9d9"},"&dark .cm-selectionBackground":{background:"#222"},"&light.cm-focused .cm-selectionBackground":{background:"#d7d4f0"},"&dark.cm-focused .cm-selectionBackground":{background:"#233"},".cm-cursorLayer":{zIndex:100,contain:"size style",pointerEvents:"none"},"&.cm-focused .cm-cursorLayer":{animation:"steps(1) cm-blink 1.2s infinite"},"@keyframes cm-blink":{"0%":{},"50%":{visibility:"hidden"},"100%":{}},"@keyframes cm-blink2":{"0%":{},"50%":{visibility:"hidden"},"100%":{}},".cm-cursor":{position:"absolute",borderLeft:"1.2px solid black",marginLeft:"-0.6px",pointerEvents:"none",display:"none"},"&dark .cm-cursor":{borderLeftColor:"#444"},"&.cm-focused .cm-cursor":{display:"block"},"&light .cm-activeLine":{backgroundColor:"#f3f9ff"},"&dark .cm-activeLine":{backgroundColor:"#223039"},"&light .cm-specialChar":{color:"red"},"&dark .cm-specialChar":{color:"#f78"},".cm-tab":{display:"inline-block",overflow:"hidden",verticalAlign:"bottom"},".cm-placeholder":{color:"#888",display:"inline-block"},".cm-button":{verticalAlign:"middle",color:"inherit",fontSize:"70%",padding:".2em 1em",borderRadius:"3px"},"&light .cm-button":{backgroundImage:"linear-gradient(#eff1f5, #d9d9df)",border:"1px solid #888","&:active":{backgroundImage:"linear-gradient(#b4b4b4, #d0d3d6)"}},"&dark .cm-button":{backgroundImage:"linear-gradient(#393939, #111)",border:"1px solid #888","&:active":{backgroundImage:"linear-gradient(#111, #333)"}},".cm-textfield":{verticalAlign:"middle",color:"inherit",fontSize:"70%",border:"1px solid silver",padding:".2em .5em"},"&light .cm-textfield":{backgroundColor:"white"},"&dark .cm-textfield":{border:"1px solid #555",backgroundColor:"inherit"}},iu),l1={childList:!0,characterData:!0,subtree:!0,characterDataOldValue:!0},vo=D.ie&&D.ie_version<=11;class h1{constructor(e,t,i){this.view=e,this.onChange=t,this.onScrollChanged=i,this.active=!1,this.ignoreSelection=new o0,this.delayedFlush=-1,this.queue=[],this.lastFlush=0,this.scrollTargets=[],this.intersection=null,this.intersecting=!1,this._selectionRange=null,this.parentCheck=-1,this.dom=e.contentDOM,this.observer=new MutationObserver(n=>{for(let r of n)this.queue.push(r);this._selectionRange=null,(D.ie&&D.ie_version<=11||D.ios&&e.composing)&&n.some(r=>r.type=="childList"&&r.removedNodes.length||r.type=="characterData"&&r.oldValue.length>r.target.nodeValue.length)?this.flushSoon():this.flush()}),vo&&(this.onCharData=n=>{this.queue.push({target:n.target,type:"characterData",oldValue:n.prevValue}),this.flushSoon()}),this.onSelectionChange=this.onSelectionChange.bind(this),this.start(),this.onScroll=this.onScroll.bind(this),window.addEventListener("scroll",this.onScroll),typeof IntersectionObserver=="function"&&(this.intersection=new IntersectionObserver(n=>{this.parentCheck<0&&(this.parentCheck=setTimeout(this.listenForScroll.bind(this),1e3)),n[n.length-1].intersectionRatio>0!=this.intersecting&&(this.intersecting=!this.intersecting,this.intersecting!=this.view.inView&&this.onScrollChanged(document.createEvent("Event")))},{}),this.intersection.observe(this.dom)),this.listenForScroll()}onScroll(e){this.intersecting&&this.flush(),this.onScrollChanged(e)}onSelectionChange(e){this.lastFlush<Date.now()-50&&(this._selectionRange=null);let{view:t}=this,i=this.selectionRange;if(t.state.facet(Yt)?t.root.activeElement!=this.dom:!ha(t.dom,i))return;let n=i.anchorNode&&t.docView.nearest(i.anchorNode);n&&n.ignoreEvent(e)||(D.ie&&D.ie_version<=11&&!t.state.selection.main.empty&&i.focusNode&&Yn(i.focusNode,i.focusOffset,i.anchorNode,i.anchorOffset)?this.flushSoon():this.flush())}get selectionRange(){if(!this._selectionRange){let{root:e}=this.view,t=Kn(e);D.safari&&e.nodeType==11&&s0()==this.view.contentDOM&&(t=c1(this.view)||t),this._selectionRange=t}return this._selectionRange}setSelectionRange(e,t){var i;!((i=this._selectionRange)===null||i===void 0)&&i.type||(this._selectionRange={anchorNode:e.node,anchorOffset:e.offset,focusNode:t.node,focusOffset:t.offset})}listenForScroll(){this.parentCheck=-1;let e=0,t=null;for(let i=this.dom;i;)if(i.nodeType==1)!t&&e<this.scrollTargets.length&&this.scrollTargets[e]==i?e++:t||(t=this.scrollTargets.slice(0,e)),t&&t.push(i),i=i.assignedSlot||i.parentNode;else if(i.nodeType==11)i=i.host;else break;if(e<this.scrollTargets.length&&!t&&(t=this.scrollTargets.slice(0,e)),t){for(let i of this.scrollTargets)i.removeEventListener("scroll",this.onScroll);for(let i of this.scrollTargets=t)i.addEventListener("scroll",this.onScroll)}}ignore(e){if(!this.active)return e();try{return this.stop(),e()}finally{this.start(),this.clear()}}start(){this.active||(this.observer.observe(this.dom,l1),this.dom.ownerDocument.addEventListener("selectionchange",this.onSelectionChange),vo&&this.dom.addEventListener("DOMCharacterDataModified",this.onCharData),this.active=!0)}stop(){!this.active||(this.active=!1,this.observer.disconnect(),this.dom.ownerDocument.removeEventListener("selectionchange",this.onSelectionChange),vo&&this.dom.removeEventListener("DOMCharacterDataModified",this.onCharData))}clearSelection(){this.ignoreSelection.set(this.selectionRange)}clear(){this.observer.takeRecords(),this.queue.length=0,this.clearSelection()}flushSoon(){this.delayedFlush<0&&(this.delayedFlush=window.setTimeout(()=>{this.delayedFlush=-1,this.flush()},20))}forceFlush(){this.delayedFlush>=0&&(window.clearTimeout(this.delayedFlush),this.delayedFlush=-1,this.flush())}flush(){if(this.delayedFlush>=0)return;this.lastFlush=Date.now();let e=this.queue;for(let l of this.observer.takeRecords())e.push(l);e.length&&(this.queue=[]);let t=this.selectionRange,i=!this.ignoreSelection.eq(t)&&ha(this.dom,t);if(e.length==0&&!i)return;let n=-1,r=-1,o=!1;for(let l of e){let h=this.readMutation(l);!h||(h.typeOver&&(o=!0),n==-1?{from:n,to:r}=h:(n=Math.min(h.from,n),r=Math.max(h.to,r)))}let a=this.view.state;(n>-1||i)&&this.onChange(n,r,o),this.view.state==a&&(this.view.docView.dirty&&(this.ignore(()=>this.view.docView.sync()),this.view.docView.dirty=0),i&&this.view.docView.updateSelection()),this.clearSelection()}readMutation(e){let t=this.view.docView.nearest(e.target);if(!t||t.ignoreMutation(e))return null;if(t.markDirty(),e.type=="childList"){let i=hc(t,e.previousSibling||e.target.previousSibling,-1),n=hc(t,e.nextSibling||e.target.nextSibling,1);return{from:i?t.posAfter(i):t.posAtStart,to:n?t.posBefore(n):t.posAtEnd,typeOver:!1}}else return{from:t.posAtStart,to:t.posAtEnd,typeOver:e.target.nodeValue==e.oldValue}}destroy(){this.stop(),this.intersection&&this.intersection.disconnect();for(let e of this.scrollTargets)e.removeEventListener("scroll",this.onScroll);window.removeEventListener("scroll",this.onScroll),clearTimeout(this.parentCheck)}}function hc(s,e,t){for(;e;){let i=de.get(e);if(i&&i.parent==s)return i;let n=e.parentNode;e=n!=s.dom?n:t>0?e.nextSibling:e.previousSibling}return null}function c1(s){let e=null;function t(l){l.preventDefault(),l.stopImmediatePropagation(),e=l.getTargetRanges()[0]}if(s.contentDOM.addEventListener("beforeinput",t,!0),document.execCommand("indent"),s.contentDOM.removeEventListener("beforeinput",t,!0),!e)return null;let i=e.startContainer,n=e.startOffset,r=e.endContainer,o=e.endOffset,a=s.docView.domAtPos(s.state.selection.main.anchor);return Yn(a.node,a.offset,r,o)&&([i,n,r,o]=[r,o,i,n]),{anchorNode:i,anchorOffset:n,focusNode:r,focusOffset:o}}function d1(s,e,t,i){let n,r,o=s.state.selection.main,a;if(e>-1&&(a=s.docView.domBoundsAround(e,t,0))){let{from:l,to:h}=a,c=s.docView.impreciseHead||s.docView.impreciseAnchor?[]:p1(s),d=new u1(c,s);d.readRange(a.startDOM,a.endDOM),r=m1(c,l);let f=o.from,u=null;(s.inputState.lastKeyCode===8&&s.inputState.lastKeyTime>Date.now()-100||D.android&&d.text.length<h-l)&&(f=o.to,u="end");let p=f1(s.state.sliceDoc(l,h),d.text,f-l,u);p&&(n={from:l+p.from,to:l+p.toA,insert:s.state.toText(d.text.slice(p.from,p.toB))})}else if(s.hasFocus||!s.state.facet(Yt)){let l=s.observer.selectionRange,{impreciseHead:h,impreciseAnchor:c}=s.docView,d=h&&h.node==l.focusNode&&h.offset==l.focusOffset||!la(s.contentDOM,l.focusNode)?s.state.selection.main.head:s.docView.posFromDOM(l.focusNode,l.focusOffset),f=c&&c.node==l.anchorNode&&c.offset==l.anchorOffset||!la(s.contentDOM,l.anchorNode)?s.state.selection.main.anchor:s.docView.posFromDOM(l.anchorNode,l.anchorOffset);(d!=o.head||f!=o.anchor)&&(r=b.single(f,d))}if(!(!n&&!r)){if(!n&&i&&!o.empty&&r&&r.main.empty?n={from:o.from,to:o.to,insert:s.state.doc.slice(o.from,o.to)}:n&&n.from>=o.from&&n.to<=o.to&&(n.from!=o.from||n.to!=o.to)&&o.to-o.from-(n.to-n.from)<=4&&(n={from:o.from,to:o.to,insert:s.state.doc.slice(o.from,n.from).append(n.insert).append(s.state.doc.slice(n.to,o.to))}),n){let l=s.state;if(D.android&&(n.from==o.from&&n.to==o.to&&n.insert.length==1&&n.insert.lines==2&&bs(s.contentDOM,"Enter",13)||n.from==o.from-1&&n.to==o.to&&n.insert.length==0&&bs(s.contentDOM,"Backspace",8)||n.from==o.from&&n.to==o.to+1&&n.insert.length==0&&bs(s.contentDOM,"Delete",46))||D.ios&&s.inputState.flushIOSKey(s))return;let h=n.insert.toString();if(s.state.facet(Nf).some(d=>d(s,n.from,n.to,h)))return;s.inputState.composing>=0&&s.inputState.composing++;let c;if(n.from>=o.from&&n.to<=o.to&&n.to-n.from>=(o.to-o.from)/3&&(!r||r.main.empty&&r.main.from==n.from+n.insert.length)){let d=o.from<n.from?l.sliceDoc(o.from,n.from):"",f=o.to>n.to?l.sliceDoc(n.to,o.to):"";c=l.replaceSelection(s.state.toText(d+n.insert.sliceString(0,void 0,s.state.lineBreak)+f))}else{let d=l.changes(n);c={changes:d,selection:r&&!l.selection.main.eq(r.main)&&r.main.to<=d.newLength?l.selection.replaceRange(r.main):void 0}}s.dispatch(c,{scrollIntoView:!0,annotations:N.userEvent.of("input")})}else if(r&&!r.main.eq(o)){let l=!1,h;s.inputState.lastSelectionTime>Date.now()-50&&(s.inputState.lastSelectionOrigin=="keyboardselection"?l=!0:h=N.userEvent.of(s.inputState.lastSelectionOrigin)),s.dispatch({selection:r,scrollIntoView:l,annotations:h})}}}function f1(s,e,t,i){let n=Math.min(s.length,e.length),r=0;for(;r<n&&s.charCodeAt(r)==e.charCodeAt(r);)r++;if(r==n&&s.length==e.length)return null;let o=s.length,a=e.length;for(;o>0&&a>0&&s.charCodeAt(o-1)==e.charCodeAt(a-1);)o--,a--;if(i=="end"){let l=Math.max(0,r-Math.min(o,a));t-=o+l-r}return o<r&&s.length<e.length?(r-=t<=r&&t>=o?r-t:0,a=r+(a-o),o=r):a<r&&(r-=t<=r&&t>=a?r-t:0,o=r+(o-a),a=r),{from:r,toA:o,toB:a}}class u1{constructor(e,t){this.points=e,this.view=t,this.text="",this.lineBreak=t.state.lineBreak}readRange(e,t){if(!e)return;let i=e.parentNode;for(let n=e;;){this.findPointBefore(i,n),this.readNode(n);let r=n.nextSibling;if(r==t)break;let o=de.get(n),a=de.get(r);((o?o.breakAfter:cc(n))||(a?a.breakAfter:cc(r))&&!(n.nodeName=="BR"&&!n.cmIgnore))&&(this.text+=this.lineBreak),n=r}this.findPointBefore(i,t)}readNode(e){if(e.cmIgnore)return;let t=de.get(e),i=t&&t.overrideDOMText,n;i!=null?n=i.sliceString(0,void 0,this.lineBreak):e.nodeType==3?n=e.nodeValue:e.nodeName=="BR"?n=e.nextSibling?this.lineBreak:"":e.nodeType==1&&this.readRange(e.firstChild,null),n!=null&&(this.findPointIn(e,n.length),this.text+=n,D.chrome&&this.view.inputState.lastKeyCode==13&&!e.nextSibling&&/\n\n$/.test(this.text)&&(this.text=this.text.slice(0,-1)))}findPointBefore(e,t){for(let i of this.points)i.node==e&&e.childNodes[i.offset]==t&&(i.pos=this.text.length)}findPointIn(e,t){for(let i of this.points)i.node==e&&(i.pos=this.text.length+Math.min(i.offset,t))}}function cc(s){return s.nodeType==1&&/^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(s.nodeName)}class dc{constructor(e,t){this.node=e,this.offset=t,this.pos=-1}}function p1(s){let e=[];if(s.root.activeElement!=s.contentDOM)return e;let{anchorNode:t,anchorOffset:i,focusNode:n,focusOffset:r}=s.observer.selectionRange;return t&&(e.push(new dc(t,i)),(n!=t||r!=i)&&e.push(new dc(n,r))),e}function m1(s,e){if(s.length==0)return null;let t=s[0].pos,i=s.length==2?s[1].pos:t;return t>-1&&i>-1?b.single(t+e,i+e):null}class L{constructor(e={}){this.plugins=[],this.editorAttrs={},this.contentAttrs={},this.bidiCache=[],this.updateState=2,this.measureScheduled=-1,this.measureRequests=[],this.contentDOM=document.createElement("div"),this.scrollDOM=document.createElement("div"),this.scrollDOM.tabIndex=-1,this.scrollDOM.className="cm-scroller",this.scrollDOM.appendChild(this.contentDOM),this.announceDOM=document.createElement("div"),this.announceDOM.style.cssText="position: absolute; top: -10000px",this.announceDOM.setAttribute("aria-live","polite"),this.dom=document.createElement("div"),this.dom.appendChild(this.announceDOM),this.dom.appendChild(this.scrollDOM),this._dispatch=e.dispatch||(t=>this.update([t])),this.dispatch=this.dispatch.bind(this),this.root=e.root||document,this.viewState=new sc(e.state||U.create()),this.plugins=this.state.facet(ds).map(t=>new Ot(t).update(this)),this.observer=new h1(this,(t,i,n)=>{d1(this,t,i,n)},t=>{this.inputState.runScrollHandlers(this,t),this.observer.intersecting&&this.measure()}),this.inputState=new N0(this),this.docView=new Uh(this),this.mountStyles(),this.updateAttrs(),this.updateState=0,b1(),this.requestMeasure(),e.parent&&e.parent.appendChild(this.dom)}get state(){return this.viewState.state}get viewport(){return this.viewState.viewport}get visibleRanges(){return this.viewState.visibleRanges}get inView(){return this.viewState.inView}get composing(){return this.inputState.composing>0}dispatch(...e){this._dispatch(e.length==1&&e[0]instanceof N?e[0]:this.state.update(...e))}update(e){if(this.updateState!=0)throw new Error("Calls to EditorView.update are not allowed while an update is in progress");let t=!1,i,n=this.state;for(let o of e){if(o.startState!=n)throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");n=o.state}if(n.facet(U.phrases)!=this.state.facet(U.phrases))return this.setState(n);i=new Fh(this,n,e);let r;try{this.updateState=2,r=e.some(o=>o.scrollIntoView)?n.selection.main:null,this.viewState.update(i,r),this.bidiCache=Xn.update(this.bidiCache,i.changes),i.empty||(this.updatePlugins(i),this.inputState.update(i)),t=this.docView.update(i),this.state.facet(fs)!=this.styleModules&&this.mountStyles(),this.updateAttrs(),this.showAnnouncements(e)}finally{this.updateState=0}if((t||r||this.viewState.mustEnforceCursorAssoc)&&this.requestMeasure(),!i.empty)for(let o of this.state.facet(ga))o(i)}setState(e){if(this.updateState!=0)throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");this.updateState=2;try{for(let t of this.plugins)t.destroy(this);this.viewState=new sc(e),this.plugins=e.facet(ds).map(t=>new Ot(t).update(this)),this.docView=new Uh(this),this.inputState.ensureHandlers(this),this.mountStyles(),this.updateAttrs(),this.bidiCache=[]}finally{this.updateState=0}this.requestMeasure()}updatePlugins(e){let t=e.startState.facet(ds),i=e.state.facet(ds);if(t!=i){let n=[];for(let r of i){let o=t.indexOf(r);if(o<0)n.push(new Ot(r));else{let a=this.plugins[o];a.mustUpdate=e,n.push(a)}}for(let r of this.plugins)r.mustUpdate!=e&&r.destroy(this);this.plugins=n,this.inputState.ensureHandlers(this)}else for(let n of this.plugins)n.mustUpdate=e;for(let n=0;n<this.plugins.length;n++)this.plugins[n]=this.plugins[n].update(this)}measure(e=!0){this.measureScheduled>-1&&cancelAnimationFrame(this.measureScheduled),this.measureScheduled=-1,e&&this.observer.flush();let t=null;try{for(let i=0;;i++){this.updateState=1;let n=this.viewState.measure(this.docView,i>0),r=this.measureRequests;if(!n&&!r.length&&this.viewState.scrollTo==null)break;if(this.measureRequests=[],i>5){console.warn("Viewport failed to stabilize");break}let o=r.map(l=>{try{return l.read(this)}catch(h){return tt(this.state,h),fc}}),a=new Fh(this,this.state);a.flags|=n,t?t.flags|=n:t=a,this.updateState=2,a.empty||(this.updatePlugins(a),this.inputState.update(a)),this.updateAttrs(),n&&this.docView.update(a);for(let l=0;l<r.length;l++)if(o[l]!=fc)try{r[l].write(o[l],this)}catch(h){tt(this.state,h)}if(this.viewState.scrollTo&&(this.docView.scrollPosIntoView(this.viewState.scrollTo.head,this.viewState.scrollTo.assoc),this.viewState.scrollTo=null),!(n&4)&&this.measureRequests.length==0)break}}finally{this.updateState=0}if(this.measureScheduled=-1,t&&!t.empty)for(let i of this.state.facet(ga))i(t)}get themeClasses(){return xa+" "+(this.state.facet(lc)?tu:eu)+" "+this.state.facet(ac)}updateAttrs(){let e=_s(this.state.facet(Ff),{class:"cm-editor cm-wrap"+(this.hasFocus?" cm-focused ":" ")+this.themeClasses});pa(this.dom,this.editorAttrs,e),this.editorAttrs=e;let t=_s(this.state.facet(Uf),{spellcheck:"false",autocorrect:"off",autocapitalize:"off",contenteditable:this.state.facet(Yt)?a0()?"plaintext-only":"true":"false",class:"cm-content",style:`${D.tabSize}: ${this.state.tabSize}`,role:"textbox","aria-multiline":"true"});pa(this.contentDOM,this.contentAttrs,t),this.contentAttrs=t}showAnnouncements(e){let t=!0;for(let i of e)for(let n of i.effects)if(n.is(L.announce)){t&&(this.announceDOM.textContent=""),t=!1;let r=this.announceDOM.appendChild(document.createElement("div"));r.textContent=n.value}}mountStyles(){this.styleModules=this.state.facet(fs),Bt.mount(this.root,this.styleModules.concat(a1).reverse())}readMeasured(){if(this.updateState==2)throw new Error("Reading the editor layout isn't allowed during an update");this.updateState==0&&this.measureScheduled>-1&&this.measure(!1)}requestMeasure(e){if(this.measureScheduled<0&&(this.measureScheduled=requestAnimationFrame(()=>this.measure())),e){if(e.key!=null){for(let t=0;t<this.measureRequests.length;t++)if(this.measureRequests[t].key===e.key){this.measureRequests[t]=e;return}}this.measureRequests.push(e)}}pluginField(e){let t=[];for(let i of this.plugins)i.update(this).takeField(e,t);return t}plugin(e){for(let t of this.plugins)if(t.spec==e)return t.update(this).value;return null}blockAtHeight(e,t){return this.readMeasured(),this.viewState.blockAtHeight(e,wo(t,this.contentDOM))}visualLineAtHeight(e,t){return this.readMeasured(),this.viewState.lineAtHeight(e,wo(t,this.contentDOM))}viewportLines(e,t){let{from:i,to:n}=this.viewport;this.viewState.forEachLine(i,n,e,wo(t,this.contentDOM))}visualLineAt(e,t=0){return this.viewState.lineAt(e,t)}get contentHeight(){return this.viewState.contentHeight}moveByChar(e,t,i){return yo(this,e,jh(this,e,t,i))}moveByGroup(e,t){return yo(this,e,jh(this,e,t,i=>I0(this,e.head,i)))}moveToLineBoundary(e,t,i=!0){return D0(this,e,t,i)}moveVertically(e,t,i){return yo(this,e,B0(this,e,t,i))}scrollPosIntoView(e){this.viewState.scrollTo=b.cursor(e),this.requestMeasure()}domAtPos(e){return this.docView.domAtPos(e)}posAtDOM(e,t=0){return this.docView.posFromDOM(e,t)}posAtCoords(e,t=!0){return this.readMeasured(),jf(this,e,t)}coordsAtPos(e,t=1){this.readMeasured();let i=this.docView.coordsAt(e,t);if(!i||i.left==i.right)return i;let n=this.state.doc.lineAt(e),r=this.bidiSpans(n),o=r[Ei.find(r,e-n.from,-1,t)];return ll(i,o.dir==F.LTR==t>0)}get defaultCharacterWidth(){return this.viewState.heightOracle.charWidth}get defaultLineHeight(){return this.viewState.heightOracle.lineHeight}get textDirection(){return this.viewState.heightOracle.direction}get lineWrapping(){return this.viewState.heightOracle.lineWrapping}bidiSpans(e){if(e.length>g1)return Hf(e.length);let t=this.textDirection;for(let n of this.bidiCache)if(n.from==e.from&&n.dir==t)return n.order;let i=E0(e.text,this.textDirection);return this.bidiCache.push(new Xn(e.from,e.to,t,i)),i}get hasFocus(){var e;return(document.hasFocus()||D.safari&&((e=this.inputState)===null||e===void 0?void 0:e.lastContextMenu)>Date.now()-3e4)&&this.root.activeElement==this.contentDOM}focus(){this.observer.ignore(()=>{Sf(this.contentDOM),this.docView.updateSelection()})}destroy(){for(let e of this.plugins)e.destroy(this);this.inputState.destroy(),this.dom.remove(),this.observer.destroy(),this.measureScheduled>-1&&cancelAnimationFrame(this.measureScheduled)}static domEventHandlers(e){return fe.define(()=>({}),{eventHandlers:e})}static theme(e,t){let i=Bt.newName(),n=[ac.of(i),fs.of(Sa(`.${i}`,e))];return t&&t.dark&&n.push(lc.of(!0)),n}static baseTheme(e){return Zs.fallback(fs.of(Sa("."+xa,e,iu)))}}L.styleModule=fs;L.inputHandler=Nf;L.exceptionSink=Bf;L.updateListener=ga;L.editable=Yt;L.mouseSelectionStyle=If;L.dragMovesSelection=Df;L.clickAddsSelectionRange=Of;L.decorations=si;L.contentAttributes=Uf;L.editorAttributes=Ff;L.lineWrapping=L.contentAttributes.of({class:"cm-lineWrapping"});L.announce=B.define();const g1=4096;function wo(s,e){return s==null?e.getBoundingClientRect().top:s}let ka=-1;function b1(){window.addEventListener("resize",()=>{ka==-1&&(ka=setTimeout(y1,50))})}function y1(){ka=-1;let s=document.querySelectorAll(".cm-content");for(let e=0;e<s.length;e++){let t=de.get(s[e]);t&&t.editorView.requestMeasure()}}const fc={};class Xn{constructor(e,t,i,n){this.from=e,this.to=t,this.dir=i,this.order=n}static update(e,t){if(t.empty)return e;let i=[],n=e.length?e[e.length-1].dir:F.LTR;for(let r=Math.max(0,e.length-10);r<e.length;r++){let o=e[r];o.dir==n&&!t.touchesRange(o.from,o.to)&&i.push(new Xn(t.mapPos(o.from,1),t.mapPos(o.to,-1),o.dir,o.order))}return i}}const v1=typeof navigator=="undefined"?"key":/Mac/.test(navigator.platform)?"mac":/Win/.test(navigator.platform)?"win":/Linux|X11/.test(navigator.platform)?"linux":"key";function w1(s,e){const t=s.split(/-(?!$)/);let i=t[t.length-1];i=="Space"&&(i=" ");let n,r,o,a;for(let l=0;l<t.length-1;++l){const h=t[l];if(/^(cmd|meta|m)$/i.test(h))a=!0;else if(/^a(lt)?$/i.test(h))n=!0;else if(/^(c|ctrl|control)$/i.test(h))r=!0;else if(/^s(hift)?$/i.test(h))o=!0;else if(/^mod$/i.test(h))e=="mac"?a=!0:r=!0;else throw new Error("Unrecognized modifier name: "+h)}return n&&(i="Alt-"+i),r&&(i="Ctrl-"+i),a&&(i="Meta-"+i),o&&(i="Shift-"+i),i}function xo(s,e,t){return e.altKey&&(s="Alt-"+s),e.ctrlKey&&(s="Ctrl-"+s),e.metaKey&&(s="Meta-"+s),t!==!1&&e.shiftKey&&(s="Shift-"+s),s}const x1=L.domEventHandlers({keydown(s,e){return nu(su(e.state),s,e,"editor")}}),fl=E.define({enables:x1}),uc=new WeakMap;function su(s){let e=s.facet(fl),t=uc.get(e);return t||uc.set(e,t=C1(e.reduce((i,n)=>i.concat(n),[]))),t}function S1(s,e,t){return nu(su(s.state),e,s,t)}let _t=null;const k1=4e3;function C1(s,e=v1){let t=Object.create(null),i=Object.create(null),n=(o,a)=>{let l=i[o];if(l==null)i[o]=a;else if(l!=a)throw new Error("Key binding "+o+" is used both as a regular binding and as a multi-stroke prefix")},r=(o,a,l,h)=>{let c=t[o]||(t[o]=Object.create(null)),d=a.split(/ (?!$)/).map(p=>w1(p,e));for(let p=1;p<d.length;p++){let m=d.slice(0,p).join(" ");n(m,!0),c[m]||(c[m]={preventDefault:!0,commands:[y=>{let v=_t={view:y,prefix:m,scope:o};return setTimeout(()=>{_t==v&&(_t=null)},k1),!0}]})}let f=d.join(" ");n(f,!1);let u=c[f]||(c[f]={preventDefault:!1,commands:[]});u.commands.push(l),h&&(u.preventDefault=!0)};for(let o of s){let a=o[e]||o.key;if(!!a)for(let l of o.scope?o.scope.split(" "):["editor"])r(l,a,o.run,o.preventDefault),o.shift&&r(l,"Shift-"+a,o.shift,o.preventDefault)}return t}function nu(s,e,t,i){let n=i0(e),r=n.length==1&&n!=" ",o="",a=!1;_t&&_t.view==t&&_t.scope==i&&(o=_t.prefix+" ",(a=Gf.indexOf(e.keyCode)<0)&&(_t=null));let l=d=>{if(d){for(let f of d.commands)if(f(t))return!0;d.preventDefault&&(a=!0)}return!1},h=s[i],c;if(h){if(l(h[o+xo(n,e,!r)]))return!0;if(r&&(e.shiftKey||e.altKey||e.metaKey)&&(c=zt[e.keyCode])&&c!=n){if(l(h[o+xo(c,e,!0)]))return!0}else if(r&&e.shiftKey&&l(h[o+xo(n,e,!0)]))return!0}return a}const ru=!D.ios,ps=E.define({combine(s){return Gt(s,{cursorBlinkRate:1200,drawRangeCursor:!0},{cursorBlinkRate:(e,t)=>Math.min(e,t),drawRangeCursor:(e,t)=>e||t})}});function A1(s={}){return[ps.of(s),M1,$1]}class ou{constructor(e,t,i,n,r){this.left=e,this.top=t,this.width=i,this.height=n,this.className=r}draw(){let e=document.createElement("div");return e.className=this.className,this.adjust(e),e}adjust(e){e.style.left=this.left+"px",e.style.top=this.top+"px",this.width>=0&&(e.style.width=this.width+"px"),e.style.height=this.height+"px"}eq(e){return this.left==e.left&&this.top==e.top&&this.width==e.width&&this.height==e.height&&this.className==e.className}}const M1=fe.fromClass(class{constructor(s){this.view=s,this.rangePieces=[],this.cursors=[],this.measureReq={read:this.readPos.bind(this),write:this.drawSel.bind(this)},this.selectionLayer=s.scrollDOM.appendChild(document.createElement("div")),this.selectionLayer.className="cm-selectionLayer",this.selectionLayer.setAttribute("aria-hidden","true"),this.cursorLayer=s.scrollDOM.appendChild(document.createElement("div")),this.cursorLayer.className="cm-cursorLayer",this.cursorLayer.setAttribute("aria-hidden","true"),s.requestMeasure(this.measureReq),this.setBlinkRate()}setBlinkRate(){this.cursorLayer.style.animationDuration=this.view.state.facet(ps).cursorBlinkRate+"ms"}update(s){let e=s.startState.facet(ps)!=s.state.facet(ps);(e||s.selectionSet||s.geometryChanged||s.viewportChanged)&&this.view.requestMeasure(this.measureReq),s.transactions.some(t=>t.scrollIntoView)&&(this.cursorLayer.style.animationName=this.cursorLayer.style.animationName=="cm-blink"?"cm-blink2":"cm-blink"),e&&this.setBlinkRate()}readPos(){let{state:s}=this.view,e=s.facet(ps),t=s.selection.ranges.map(n=>n.empty?[]:T1(this.view,n)).reduce((n,r)=>n.concat(r)),i=[];for(let n of s.selection.ranges){let r=n==s.selection.main;if(n.empty?!r||ru:e.drawRangeCursor){let o=E1(this.view,n,r);o&&i.push(o)}}return{rangePieces:t,cursors:i}}drawSel({rangePieces:s,cursors:e}){if(s.length!=this.rangePieces.length||s.some((t,i)=>!t.eq(this.rangePieces[i]))){this.selectionLayer.textContent="";for(let t of s)this.selectionLayer.appendChild(t.draw());this.rangePieces=s}if(e.length!=this.cursors.length||e.some((t,i)=>!t.eq(this.cursors[i]))){let t=this.cursorLayer.children;if(t.length!==e.length){this.cursorLayer.textContent="";for(const i of e)this.cursorLayer.appendChild(i.draw())}else e.forEach((i,n)=>i.adjust(t[n]));this.cursors=e}}destroy(){this.selectionLayer.remove(),this.cursorLayer.remove()}}),au={".cm-line":{"& ::selection":{backgroundColor:"transparent !important"},"&::selection":{backgroundColor:"transparent !important"}}};ru&&(au[".cm-line"].caretColor="transparent !important");const $1=Zs.override(L.theme(au));function lu(s){let e=s.scrollDOM.getBoundingClientRect();return{left:(s.textDirection==F.LTR?e.left:e.right-s.scrollDOM.clientWidth)-s.scrollDOM.scrollLeft,top:e.top-s.scrollDOM.scrollTop}}function pc(s,e,t){let i=b.cursor(e);return{from:Math.max(t.from,s.moveToLineBoundary(i,!1,!0).from),to:Math.min(t.to,s.moveToLineBoundary(i,!0,!0).from),type:G.Text}}function So(s,e){let t=s.visualLineAt(e);if(Array.isArray(t.type)){for(let i of t.type)if(i.to>e||i.to==e&&(i.to==t.to||i.type==G.Text))return i}return t}function T1(s,e){if(e.to<=s.viewport.from||e.from>=s.viewport.to)return[];let t=Math.max(e.from,s.viewport.from),i=Math.min(e.to,s.viewport.to),n=s.textDirection==F.LTR,r=s.contentDOM,o=r.getBoundingClientRect(),a=lu(s),l=window.getComputedStyle(r.firstChild),h=o.left+parseInt(l.paddingLeft),c=o.right-parseInt(l.paddingRight),d=So(s,t),f=So(s,i),u=d.type==G.Text?d:null,p=f.type==G.Text?f:null;if(s.lineWrapping&&(u&&(u=pc(s,t,u)),p&&(p=pc(s,i,p))),u&&p&&u.from==p.from)return y(v(e.from,e.to,u));{let w=u?v(e.from,null,u):_(d,!1),S=p?v(null,e.to,p):_(f,!0),A=[];return(u||d).to<(p||f).from-1?A.push(m(h,w.bottom,c,S.top)):w.bottom<S.top&&So(s,(w.bottom+S.top)/2).type==G.Text&&(w.bottom=S.top=(w.bottom+S.top)/2),y(w).concat(A).concat(y(S))}function m(w,S,A,$){return new ou(w-a.left,S-a.top,A-w,$-S,"cm-selectionBackground")}function y({top:w,bottom:S,horizontal:A}){let $=[];for(let z=0;z<A.length;z+=2)$.push(m(A[z],w,A[z+1],S));return $}function v(w,S,A){let $=1e9,z=-1e9,I=[];function ie(oe,se,ge,re,J){let $e=s.coordsAtPos(oe,oe==A.to?-2:2),nt=s.coordsAtPos(ge,ge==A.from?2:-2);$=Math.min($e.top,nt.top,$),z=Math.max($e.bottom,nt.bottom,z),J==F.LTR?I.push(n&&se?h:$e.left,n&&re?c:nt.right):I.push(!n&&re?h:nt.left,!n&&se?c:$e.right)}let pe=w!=null?w:A.from,me=S!=null?S:A.to;for(let oe of s.visibleRanges)if(oe.to>pe&&oe.from<me)for(let se=Math.max(oe.from,pe),ge=Math.min(oe.to,me);;){let re=s.state.doc.lineAt(se);for(let J of s.bidiSpans(re)){let $e=J.from+re.from,nt=J.to+re.from;if($e>=ge)break;nt>se&&ie(Math.max($e,se),w==null&&$e<=pe,Math.min(nt,ge),S==null&&nt>=me,J.dir)}if(se=re.to+1,se>=ge)break}return I.length==0&&ie(pe,w==null,me,S==null,s.textDirection),{top:$,bottom:z,horizontal:I}}function _(w,S){let A=o.top+(S?w.top:w.bottom);return{top:A,bottom:A,horizontal:[]}}}function E1(s,e,t){let i=s.coordsAtPos(e.head,e.assoc||1);if(!i)return null;let n=lu(s);return new ou(i.left-n.left,i.top-n.top,-1,i.bottom-i.top,t?"cm-cursor cm-cursor-primary":"cm-cursor cm-cursor-secondary")}function mc(s,e,t,i,n){e.lastIndex=0;for(let r=s.iterRange(t,i),o=t,a;!r.next().done;o+=r.value.length)if(!r.lineBreak)for(;a=e.exec(r.value);)n(o+a.index,o+a.index+a[0].length,a)}class P1{constructor(e){let{regexp:t,decoration:i,boundary:n}=e;if(!t.global)throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");this.regexp=t,this.getDeco=typeof i=="function"?i:()=>i,this.boundary=n}createDeco(e){let t=new Nt;for(let{from:i,to:n}of e.visibleRanges)mc(e.state.doc,this.regexp,i,n,(r,o,a)=>t.add(r,o,this.getDeco(a,e,r)));return t.finish()}updateDeco(e,t){let i=1e9,n=-1;return e.docChanged&&e.changes.iterChanges((r,o,a,l)=>{l>e.view.viewport.from&&a<e.view.viewport.to&&(i=Math.min(a,i),n=Math.max(l,n))}),e.viewportChanged||n-i>1e3?this.createDeco(e.view):n>-1?this.updateRange(e.view,t.map(e.changes),i,n):t}updateRange(e,t,i,n){for(let r of e.visibleRanges){let o=Math.max(r.from,i),a=Math.min(r.to,n);if(a>o){let l=e.state.doc.lineAt(o),h=l.to<a?e.state.doc.lineAt(a):l,c=Math.max(r.from,l.from),d=Math.min(r.to,h.to);if(this.boundary){for(;o>l.from;o--)if(this.boundary.test(l.text[o-1-l.from])){c=o;break}for(;a<h.to;a++)if(this.boundary.test(h.text[a-h.from])){d=a;break}}let f=[],u;if(l==h)for(this.regexp.lastIndex=c-l.from;(u=this.regexp.exec(l.text))&&u.index<d-l.from;){let p=u.index+l.from;f.push(this.getDeco(u,e,p).range(p,p+u[0].length))}else mc(e.state.doc,this.regexp,c,d,(p,m,y)=>f.push(this.getDeco(y,e,p).range(p,m)));t=t.update({filterFrom:c,filterTo:d,filter:()=>!1,add:f})}}return t}}const Ca=/x/.unicode!=null?"gu":"g",_1=new RegExp(`[\0-\b
-\x7F-\x9F\xAD\u061C\u200B\u200E\u200F\u2028\u2029\uFEFF\uFFF9-\uFFFC]`,Ca),L1={0:"null",7:"bell",8:"backspace",10:"newline",11:"vertical tab",13:"carriage return",27:"escape",8203:"zero width space",8204:"zero width non-joiner",8205:"zero width joiner",8206:"left-to-right mark",8207:"right-to-left mark",8232:"line separator",8233:"paragraph separator",65279:"zero width no-break space",65532:"object replacement"};let ko=null;function R1(){var s;if(ko==null&&typeof document!="undefined"&&document.body){let e=document.body.style;ko=((s=e.tabSize)!==null&&s!==void 0?s:e.MozTabSize)!=null}return ko||!1}const Nn=E.define({combine(s){let e=Gt(s,{render:null,specialChars:_1,addSpecialChars:null});return(e.replaceTabs=!R1())&&(e.specialChars=new RegExp("	|"+e.specialChars.source,Ca)),e.addSpecialChars&&(e.specialChars=new RegExp(e.specialChars.source+"|"+e.addSpecialChars.source,Ca)),e}});function O1(s={}){return[Nn.of(s),D1()]}let gc=null;function D1(){return gc||(gc=fe.fromClass(class{constructor(s){this.view=s,this.decorations=T.none,this.decorationCache=Object.create(null),this.decorator=this.makeDecorator(s.state.facet(Nn)),this.decorations=this.decorator.createDeco(s)}makeDecorator(s){return new P1({regexp:s.specialChars,decoration:(e,t,i)=>{let{doc:n}=t.state,r=xe(e[0],0);if(r==9){let o=n.lineAt(i),a=t.state.tabSize,l=Xs(n.sliceString(o.from,i),0,a);return T.replace({widget:new z1((a-l%a)*this.view.defaultCharacterWidth)})}return this.decorationCache[r]||(this.decorationCache[r]=T.replace({widget:new N1(s,r)}))},boundary:s.replaceTabs?void 0:/[^]/})}update(s){let e=s.state.facet(Nn);s.startState.facet(Nn)!=e?(this.decorator=this.makeDecorator(e),this.decorations=this.decorator.createDeco(s.view)):this.decorations=this.decorator.updateDeco(s,this.decorations)}},{decorations:s=>s.decorations}))}const I1="\u2022";function B1(s){return s>=32?I1:s==10?"\u2424":String.fromCharCode(9216+s)}class N1 extends Kt{constructor(e,t){super(),this.options=e,this.code=t}eq(e){return e.code==this.code}toDOM(e){let t=B1(this.code),i=e.state.phrase("Control character")+" "+(L1[this.code]||"0x"+this.code.toString(16)),n=this.options.render&&this.options.render(this.code,i,t);if(n)return n;let r=document.createElement("span");return r.textContent=t,r.title=i,r.setAttribute("aria-label",i),r.className="cm-specialChar",r}ignoreEvent(){return!1}}class z1 extends Kt{constructor(e){super(),this.width=e}eq(e){return e.width==this.width}toDOM(){let e=document.createElement("span");return e.textContent="	",e.className="cm-tab",e.style.width=this.width+"px",e}ignoreEvent(){return!1}}function F1(){return W1}const U1=T.line({attributes:{class:"cm-activeLine"}}),W1=fe.fromClass(class{constructor(s){this.decorations=this.getDeco(s)}update(s){(s.docChanged||s.selectionSet)&&(this.decorations=this.getDeco(s.view))}getDeco(s){let e=-1,t=[];for(let i of s.state.selection.ranges){if(!i.empty)return T.none;let n=s.visualLineAt(i.head);n.from>e&&(t.push(U1.range(n.from)),e=n.from)}return T.set(t)}},{decorations:s=>s.decorations});function Aa(s){var e=typeof s;return s!=null&&(e=="object"||e=="function")}var q1=typeof global=="object"&&global&&global.Object===Object&&global,H1=q1,V1=typeof self=="object"&&self&&self.Object===Object&&self,j1=H1||V1||Function("return this")(),hu=j1,G1=function(){return hu.Date.now()},Co=G1,K1=/\s/;function Y1(s){for(var e=s.length;e--&&K1.test(s.charAt(e)););return e}var J1=/^\s+/;function X1(s){return s&&s.slice(0,Y1(s)+1).replace(J1,"")}var Z1=hu.Symbol,Zn=Z1,cu=Object.prototype,Q1=cu.hasOwnProperty,eb=cu.toString,rs=Zn?Zn.toStringTag:void 0;function tb(s){var e=Q1.call(s,rs),t=s[rs];try{s[rs]=void 0;var i=!0}catch{}var n=eb.call(s);return i&&(e?s[rs]=t:delete s[rs]),n}var ib=Object.prototype,sb=ib.toString;function nb(s){return sb.call(s)}var rb="[object Null]",ob="[object Undefined]",bc=Zn?Zn.toStringTag:void 0;function ab(s){return s==null?s===void 0?ob:rb:bc&&bc in Object(s)?tb(s):nb(s)}function lb(s){return s!=null&&typeof s=="object"}var hb="[object Symbol]";function cb(s){return typeof s=="symbol"||lb(s)&&ab(s)==hb}var yc=0/0,db=/^[-+]0x[0-9a-f]+$/i,fb=/^0b[01]+$/i,ub=/^0o[0-7]+$/i,pb=parseInt;function Ma(s){if(typeof s=="number")return s;if(cb(s))return yc;if(Aa(s)){var e=typeof s.valueOf=="function"?s.valueOf():s;s=Aa(e)?e+"":e}if(typeof s!="string")return s===0?s:+s;s=X1(s);var t=fb.test(s);return t||ub.test(s)?pb(s.slice(2),t?2:8):db.test(s)?yc:+s}var mb="Expected a function",gb=Math.max,bb=Math.min;function $a(s,e,t){var i,n,r,o,a,l,h=0,c=!1,d=!1,f=!0;if(typeof s!="function")throw new TypeError(mb);e=Ma(e)||0,Aa(t)&&(c=!!t.leading,d="maxWait"in t,r=d?gb(Ma(t.maxWait)||0,e):r,f="trailing"in t?!!t.trailing:f);function u($){var z=i,I=n;return i=n=void 0,h=$,o=s.apply(I,z),o}function p($){return h=$,a=setTimeout(v,e),c?u($):o}function m($){var z=$-l,I=$-h,ie=e-z;return d?bb(ie,r-I):ie}function y($){var z=$-l,I=$-h;return l===void 0||z>=e||z<0||d&&I>=r}function v(){var $=Co();if(y($))return _($);a=setTimeout(v,m($))}function _($){return a=void 0,f&&i?u($):(i=n=void 0,o)}function w(){a!==void 0&&clearTimeout(a),h=0,i=l=n=a=void 0}function S(){return a===void 0?o:_(Co())}function A(){var $=Co(),z=y($);if(i=arguments,n=this,l=$,z){if(a===void 0)return p(l);if(d)return clearTimeout(a),a=setTimeout(v,e),u(l)}return a===void 0&&(a=setTimeout(v,e)),o}return A.cancel=w,A.flush=S,A}var vc=1/0,yb=17976931348623157e292;function vb(s){if(!s)return s===0?s:0;if(s=Ma(s),s===vc||s===-vc){var e=s<0?-1:1;return e*yb}return s===s?s:0}function wb(s){var e=vb(s),t=e%1;return e===e?t?e-t:e:0}var xb="Expected a function";function Sb(s,e){var t;if(typeof e!="function")throw new TypeError(xb);return s=wb(s),function(){return--s>0&&(t=e.apply(this,arguments)),s<=1&&(e=void 0),t}}function kb(s){return Sb(2,s)}const ul=1024;let Cb=0;const wc=new WeakMap;class Y{constructor({deserialize:e}={}){this.id=Cb++,this.deserialize=e||(()=>{throw new Error("This node type doesn't define a deserialize function")})}static string(){return new Y({deserialize:e=>e})}static number(){return new Y({deserialize:Number})}static flag(){return new Y({deserialize:()=>!0})}set(e,t){return e[this.id]=t,e}add(e){return typeof e!="function"&&(e=Ce.match(e)),t=>{let i=e(t);return i===void 0?null:[this,i]}}}Y.closedBy=new Y({deserialize:s=>s.split(" ")});Y.openedBy=new Y({deserialize:s=>s.split(" ")});Y.group=new Y({deserialize:s=>s.split(" ")});const Ab=Object.create(null);class Ce{constructor(e,t,i,n=0){this.name=e,this.props=t,this.id=i,this.flags=n}static define(e){let t=e.props&&e.props.length?Object.create(null):Ab,i=(e.top?1:0)|(e.skipped?2:0)|(e.error?4:0)|(e.name==null?8:0),n=new Ce(e.name||"",t,e.id,i);if(e.props)for(let r of e.props)Array.isArray(r)||(r=r(n)),r&&r[0].set(t,r[1]);return n}prop(e){return this.props[e.id]}get isTop(){return(this.flags&1)>0}get isSkipped(){return(this.flags&2)>0}get isError(){return(this.flags&4)>0}get isAnonymous(){return(this.flags&8)>0}is(e){if(typeof e=="string"){if(this.name==e)return!0;let t=this.prop(Y.group);return t?t.indexOf(e)>-1:!1}return this.id==e}static match(e){let t=Object.create(null);for(let i in e)for(let n of i.split(" "))t[n]=e[i];return i=>{for(let n=i.prop(Y.group),r=-1;r<(n?n.length:0);r++){let o=t[r<0?i.name:n[r]];if(o)return o}}}}Ce.none=new Ce("",Object.create(null),0,8);class pl{constructor(e){this.types=e;for(let t=0;t<e.length;t++)if(e[t].id!=t)throw new RangeError("Node type ids should correspond to array positions when creating a node set")}extend(...e){let t=[];for(let i of this.types){let n=null;for(let r of e){let o=r(i);o&&(n||(n=Object.assign({},i.props)),o[0].set(n,o[1]))}t.push(n?new Ce(i.name,n,i.id,i.flags):i)}return new pl(t)}}class ce{constructor(e,t,i,n){this.type=e,this.children=t,this.positions=i,this.length=n}toString(){let e=this.children.map(t=>t.toString()).join();return this.type.name?(/\W/.test(this.type.name)&&!this.type.isError?JSON.stringify(this.type.name):this.type.name)+(e.length?"("+e+")":""):e}cursor(e,t=0){let i=e!=null&&wc.get(this)||this.topNode,n=new er(i);return e!=null&&(n.moveTo(e,t),wc.set(this,n._tree)),n}fullCursor(){return new er(this.topNode,!0)}get topNode(){return new Ls(this,0,0,null)}resolve(e,t=0){return this.cursor(e,t).node}iterate(e){let{enter:t,leave:i,from:n=0,to:r=this.length}=e;for(let o=this.cursor();;){let a=!1;if(o.from<=r&&o.to>=n&&(o.type.isAnonymous||t(o.type,o.from,o.to)!==!1)){if(o.firstChild())continue;o.type.isAnonymous||(a=!0)}for(;a&&i&&i(o.type,o.from,o.to),a=o.type.isAnonymous,!o.nextSibling();){if(!o.parent())return;a=!0}}}balance(e=ul){return this.children.length<=bl?this:yl(this.type,Ce.none,this.children,this.positions,0,this.children.length,0,e,this.length,0)}static build(e){return $b(e)}}ce.empty=new ce(Ce.none,[],[],0);function Ta(s,e){return e&&(s.contextHash=e),s}class en{constructor(e,t,i,n=Ce.none){this.buffer=e,this.length=t,this.set=i,this.type=n}toString(){let e=[];for(let t=0;t<this.buffer.length;)e.push(this.childString(t)),t=this.buffer[t+3];return e.join(",")}childString(e){let t=this.buffer[e],i=this.buffer[e+3],n=this.set.types[t],r=n.name;if(/\W/.test(r)&&!n.isError&&(r=JSON.stringify(r)),e+=4,i==e)return r;let o=[];for(;e<i;)o.push(this.childString(e)),e=this.buffer[e+3];return r+"("+o.join(",")+")"}findChild(e,t,i,n){let{buffer:r}=this,o=-1;for(let a=e;a!=t;a=r[a+3])if(n!=-1e8){let l=r[a+1],h=r[a+2];if(i>0){if(h>n&&(o=a),h>n)break}else if(l<n&&(o=a),h>=n)break}else if(o=a,i>0)break;return o}}class Ls{constructor(e,t,i,n){this.node=e,this.from=t,this.index=i,this._parent=n}get type(){return this.node.type}get name(){return this.node.type.name}get to(){return this.from+this.node.length}nextChild(e,t,i,n=!1){for(let r=this;;){for(let{children:o,positions:a}=r.node,l=t>0?o.length:-1;e!=l;e+=t){let h=o[e],c=a[e]+r.from;if(!(i!=-1e8&&(t<0?c>=i:c+h.length<=i))){if(h instanceof en){let d=h.findChild(0,h.buffer.length,t,i==-1e8?-1e8:i-c);if(d>-1)return new oi(new Mb(r,h,e,c),null,d)}else if(n||!h.type.isAnonymous||ml(h)){let d=new Ls(h,c,e,r);return n||!d.type.isAnonymous?d:d.nextChild(t<0?h.children.length-1:0,t,i)}}}if(n||!r.type.isAnonymous||(e=r.index+t,r=r._parent,!r))return null}}get firstChild(){return this.nextChild(0,1,-1e8)}get lastChild(){return this.nextChild(this.node.children.length-1,-1,-1e8)}childAfter(e){return this.nextChild(0,1,e)}childBefore(e){return this.nextChild(this.node.children.length-1,-1,e)}nextSignificantParent(){let e=this;for(;e.type.isAnonymous&&e._parent;)e=e._parent;return e}get parent(){return this._parent?this._parent.nextSignificantParent():null}get nextSibling(){return this._parent?this._parent.nextChild(this.index+1,1,-1):null}get prevSibling(){return this._parent?this._parent.nextChild(this.index-1,-1,-1):null}get cursor(){return new er(this)}resolve(e,t=0){return this.cursor.moveTo(e,t).node}getChild(e,t=null,i=null){let n=Qn(this,e,t,i);return n.length?n[0]:null}getChildren(e,t=null,i=null){return Qn(this,e,t,i)}toString(){return this.node.toString()}}function Qn(s,e,t,i){let n=s.cursor,r=[];if(!n.firstChild())return r;if(t!=null){for(;!n.type.is(t);)if(!n.nextSibling())return r}for(;;){if(i!=null&&n.type.is(i))return r;if(n.type.is(e)&&r.push(n.node),!n.nextSibling())return i==null?r:[]}}class Mb{constructor(e,t,i,n){this.parent=e,this.buffer=t,this.index=i,this.start=n}}class oi{constructor(e,t,i){this.context=e,this._parent=t,this.index=i,this.type=e.buffer.set.types[e.buffer.buffer[i]]}get name(){return this.type.name}get from(){return this.context.start+this.context.buffer.buffer[this.index+1]}get to(){return this.context.start+this.context.buffer.buffer[this.index+2]}child(e,t){let{buffer:i}=this.context,n=i.findChild(this.index+4,i.buffer[this.index+3],e,t==-1e8?-1e8:t-this.context.start);return n<0?null:new oi(this.context,this,n)}get firstChild(){return this.child(1,-1e8)}get lastChild(){return this.child(-1,-1e8)}childAfter(e){return this.child(1,e)}childBefore(e){return this.child(-1,e)}get parent(){return this._parent||this.context.parent.nextSignificantParent()}externalSibling(e){return this._parent?null:this.context.parent.nextChild(this.context.index+e,e,-1)}get nextSibling(){let{buffer:e}=this.context,t=e.buffer[this.index+3];return t<(this._parent?e.buffer[this._parent.index+3]:e.buffer.length)?new oi(this.context,this._parent,t):this.externalSibling(1)}get prevSibling(){let{buffer:e}=this.context,t=this._parent?this._parent.index+4:0;return this.index==t?this.externalSibling(-1):new oi(this.context,this._parent,e.findChild(t,this.index,-1,-1e8))}get cursor(){return new er(this)}resolve(e,t=0){return this.cursor.moveTo(e,t).node}toString(){return this.context.buffer.childString(this.index)}getChild(e,t=null,i=null){let n=Qn(this,e,t,i);return n.length?n[0]:null}getChildren(e,t=null,i=null){return Qn(this,e,t,i)}}class er{constructor(e,t=!1){if(this.full=t,this.buffer=null,this.stack=[],this.index=0,this.bufferNode=null,e instanceof Ls)this.yieldNode(e);else{this._tree=e.context.parent,this.buffer=e.context;for(let i=e._parent;i;i=i._parent)this.stack.unshift(i.index);this.bufferNode=e,this.yieldBuf(e.index)}}get name(){return this.type.name}yieldNode(e){return e?(this._tree=e,this.type=e.type,this.from=e.from,this.to=e.to,!0):!1}yieldBuf(e,t){this.index=e;let{start:i,buffer:n}=this.buffer;return this.type=t||n.set.types[n.buffer[e]],this.from=i+n.buffer[e+1],this.to=i+n.buffer[e+2],!0}yield(e){return e?e instanceof Ls?(this.buffer=null,this.yieldNode(e)):(this.buffer=e.context,this.yieldBuf(e.index,e.type)):!1}toString(){return this.buffer?this.buffer.buffer.childString(this.index):this._tree.toString()}enter(e,t){if(!this.buffer)return this.yield(this._tree.nextChild(e<0?this._tree.node.children.length-1:0,e,t,this.full));let{buffer:i}=this.buffer,n=i.findChild(this.index+4,i.buffer[this.index+3],e,t==-1e8?-1e8:t-this.buffer.start);return n<0?!1:(this.stack.push(this.index),this.yieldBuf(n))}firstChild(){return this.enter(1,-1e8)}lastChild(){return this.enter(-1,-1e8)}childAfter(e){return this.enter(1,e)}childBefore(e){return this.enter(-1,e)}parent(){if(!this.buffer)return this.yieldNode(this.full?this._tree._parent:this._tree.parent);if(this.stack.length)return this.yieldBuf(this.stack.pop());let e=this.full?this.buffer.parent:this.buffer.parent.nextSignificantParent();return this.buffer=null,this.yieldNode(e)}sibling(e){if(!this.buffer)return this._tree._parent?this.yield(this._tree._parent.nextChild(this._tree.index+e,e,-1e8,this.full)):!1;let{buffer:t}=this.buffer,i=this.stack.length-1;if(e<0){let n=i<0?0:this.stack[i]+4;if(this.index!=n)return this.yieldBuf(t.findChild(n,this.index,-1,-1e8))}else{let n=t.buffer[this.index+3];if(n<(i<0?t.buffer.length:t.buffer[this.stack[i]+3]))return this.yieldBuf(n)}return i<0?this.yield(this.buffer.parent.nextChild(this.buffer.index+e,e,-1e8,this.full)):!1}nextSibling(){return this.sibling(1)}prevSibling(){return this.sibling(-1)}atLastNode(e){let t,i,{buffer:n}=this;if(n){if(e>0){if(this.index<n.buffer.buffer.length)return!1}else for(let r=0;r<this.index;r++)if(n.buffer.buffer[r+3]<this.index)return!1;({index:t,parent:i}=n)}else({index:t,_parent:i}=this._tree);for(;i;{index:t,_parent:i}=i)for(let r=t+e,o=e<0?-1:i.node.children.length;r!=o;r+=e){let a=i.node.children[r];if(this.full||!a.type.isAnonymous||a instanceof en||ml(a))return!1}return!0}move(e){if(this.enter(e,-1e8))return!0;for(;;){if(this.sibling(e))return!0;if(this.atLastNode(e)||!this.parent())return!1}}next(){return this.move(1)}prev(){return this.move(-1)}moveTo(e,t=0){for(;(this.from==this.to||(t<1?this.from>=e:this.from>e)||(t>-1?this.to<=e:this.to<e))&&this.parent(););for(;!(t<0?!this.childBefore(e):!this.childAfter(e));)if(this.from==this.to||(t<1?this.from>=e:this.from>e)||(t>-1?this.to<=e:this.to<e)){this.parent();break}return this}get node(){if(!this.buffer)return this._tree;let e=this.bufferNode,t=null,i=0;if(e&&e.context==this.buffer){e:for(let n=this.index,r=this.stack.length;r>=0;){for(let o=e;o;o=o._parent)if(o.index==n){if(n==this.index)return o;t=o,i=r+1;break e}n=this.stack[--r]}}for(let n=i;n<this.stack.length;n++)t=new oi(this.buffer,t,this.stack[n]);return this.bufferNode=new oi(this.buffer,t,this.index)}get tree(){return this.buffer?null:this._tree.node}}function ml(s){return s.children.some(e=>!e.type.isAnonymous||e instanceof en||ml(e))}class gl{constructor(e,t){this.buffer=e,this.index=t}get id(){return this.buffer[this.index-4]}get start(){return this.buffer[this.index-3]}get end(){return this.buffer[this.index-2]}get size(){return this.buffer[this.index-1]}get pos(){return this.index}next(){this.index-=4}fork(){return new gl(this.buffer,this.index)}}const bl=8;function $b(s){var e;let{buffer:t,nodeSet:i,topID:n=0,maxBufferLength:r=ul,reused:o=[],minRepeatType:a=i.types.length}=s,l=Array.isArray(t)?new gl(t,t.length):t,h=i.types,c=0;function d(v,_,w,S,A){let{id:$,start:z,end:I,size:ie}=l,pe=z-v;if(ie<0){ie==-1?(w.push(o[$]),S.push(pe)):c=$,l.next();return}let me=h[$],oe,se;if(I-z<=r&&(se=f(l.pos-_,A))){let ge=new Uint16Array(se.size-se.skip),re=l.pos-se.size,J=ge.length;for(;l.pos>re;)J=u(se.start,ge,J,A);oe=new en(ge,I-se.start,i,A<0?Ce.none:h[A]),pe=se.start-v}else{let ge=l.pos-ie;l.next();let re=[],J=[],$e=$>=a?$:-1;for(;l.pos>ge;)l.id==$e?l.next():d(z,ge,re,J,$e);re.reverse(),J.reverse(),$e>-1&&re.length>bl?oe=yl(me,me,re,J,0,re.length,0,r,I-z,c):oe=Ta(new ce(me,re,J,I-z),c)}w.push(oe),S.push(pe)}function f(v,_){let w=l.fork(),S=0,A=0,$=0,z=w.end-r,I={size:0,start:0,skip:0};e:for(let ie=w.pos-v;w.pos>ie;){if(w.id==_){I.size=S,I.start=A,I.skip=$,$+=4,S+=4,w.next();continue}let pe=w.size,me=w.pos-pe;if(pe<0||me<ie||w.start<z)break;let oe=w.id>=a?4:0,se=w.start;for(w.next();w.pos>me;){if(w.size<0)break e;w.id>=a&&(oe+=4),w.next()}A=se,S+=pe,$+=oe}return(_<0||S==v)&&(I.size=S,I.start=A,I.skip=$),I.size>4?I:void 0}function u(v,_,w,S){let{id:A,start:$,end:z,size:I}=l;if(l.next(),A==S)return w;let ie=w;if(I>4){let pe=l.pos-(I-4);for(;l.pos>pe;)w=u(v,_,w,S)}return A<a&&(_[--w]=ie,_[--w]=z-v,_[--w]=$-v,_[--w]=A),w}let p=[],m=[];for(;l.pos>0;)d(s.start||0,0,p,m,-1);let y=(e=s.length)!==null&&e!==void 0?e:p.length?m[0]+p[0].length:0;return new ce(h[n],p.reverse(),m.reverse(),y)}function yl(s,e,t,i,n,r,o,a,l,h){let c=[],d=[];if(l<=a)for(let f=n;f<r;f++)c.push(t[f]),d.push(i[f]-o);else{let f=Math.max(a,Math.ceil(l*1.5/bl));for(let u=n;u<r;){let p=u,m=i[u];for(u++;u<r&&!(i[u]+t[u].length-m>f);u++);if(u==p+1){let y=t[p];if(y instanceof ce&&y.type==e&&y.length>f<<1){for(let v=0;v<y.children.length;v++)c.push(y.children[v]),d.push(y.positions[v]+m-o);continue}c.push(y)}else if(u==p+1)c.push(t[p]);else{let y=yl(e,e,t,i,p,u,m,a,i[u-1]+t[u-1].length-m,h);e!=Ce.none&&!Tb(y.children,e)&&(y=Ta(new ce(Ce.none,y.children,y.positions,y.length),h)),c.push(y)}d.push(m-o)}}return Ta(new ce(s,c,d,l),h)}function Tb(s,e){for(let t of s)if(t.type==e)return!0;return!1}class ai{constructor(e,t,i,n,r){this.from=e,this.to=t,this.tree=i,this.offset=n,this.open=r}get openStart(){return(this.open&1)>0}get openEnd(){return(this.open&2)>0}static applyChanges(e,t,i=128){if(!t.length)return e;let n=[],r=1,o=e.length?e[0]:null,a=0,l=0,h=0;for(;;){let c=a<t.length?t[a++]:null,d=c?c.fromA:1e9;if(d-l>=i)for(;o&&o.from<d;){let f=o;if(l>=f.from||d<=f.to||h){let u=Math.max(f.from,l)-h,p=Math.min(f.to,d)-h;f=u>=p?null:new ai(u,p,f.tree,f.offset+h,(a>0?1:0)|(c?2:0))}if(f&&n.push(f),o.to>d)break;o=r<e.length?e[r++]:null}if(!c)break;l=c.toA,h=c.toA-c.toB}return n}static addTree(e,t=[],i=!1){let n=[new ai(0,e.length,e,0,i?2:0)];for(let r of t)r.to>e.length&&n.push(r);return n}}function xc(s){return new vl(s)}class vl{constructor(e,t=e.length){this.string=e,this.length=t}get(e){return e<0||e>=this.length?-1:this.string.charCodeAt(e)}lineAfter(e){if(e<0)return"";let t=this.string.indexOf(`
`,e);return this.string.slice(e,t<0?this.length:Math.min(t,this.length))}read(e,t){return this.string.slice(e,Math.min(this.length,t))}clip(e){return new vl(this.string,e)}}const wl=new Y;function Eb(s){return E.define({combine:s?e=>e.concat(s):void 0})}class ht{constructor(e,t,i,n=[]){this.data=e,this.topNode=i,U.prototype.hasOwnProperty("tree")||Object.defineProperty(U.prototype,"tree",{get(){return je(this)}}),this.parser=t,this.extension=[Ft.of(this),U.languageData.of((r,o)=>r.facet(Sc(r,o)))].concat(n)}isActiveAt(e,t){return Sc(e,t)==this.data}findRegions(e){let t=e.facet(Ft);if((t==null?void 0:t.data)==this.data)return[{from:0,to:e.doc.length}];if(!t||!t.allowsNesting)return[];let i=[];return je(e).iterate({enter:(n,r,o)=>{if(n.isTop&&n.prop(wl)==this.data)return i.push({from:r,to:o}),!1}}),i}get allowsNesting(){return!0}parseString(e){let t=H.of(e.split(`
`)),i=this.parser.startParse(new Or(t),0,new Vi(this.parser,U.create({doc:t}),[],ce.empty,{from:0,to:e.length},[],null)),n;for(;!(n=i.advance()););return n}}ht.setState=B.define();function Sc(s,e){let t=s.facet(Ft);if(!t)return null;if(!t.allowsNesting)return t.data;let n=je(s).resolve(e,-1);for(;n;){let r=n.type.prop(wl);if(r)return r;n=n.parent}return t.data}class tr extends ht{constructor(e,t){super(e,t,t.topNode),this.parser=t}static define(e){let t=Eb(e.languageData);return new tr(t,e.parser.configure({props:[wl.add(i=>i.isTop?t:void 0)]}))}configure(e){return new tr(this.data,this.parser.configure(e))}get allowsNesting(){return this.parser.hasNested}}function je(s){let e=s.field(ht.state,!1);return e?e.tree:ce.empty}class Or{constructor(e,t=e.length){this.doc=e,this.length=t,this.cursorPos=0,this.string="",this.prevString="",this.cursor=e.iter()}syncTo(e){return e<this.cursorPos&&(this.cursor=this.doc.iter(),this.cursorPos=0),this.prevString=e==this.cursorPos?this.string:"",this.string=this.cursor.next(e-this.cursorPos).value,this.cursorPos=e+this.string.length,this.cursorPos-this.string.length}get(e){if(e>=this.length)return-1;let t=this.cursorPos-this.string.length;if(e<t||e>=this.cursorPos){if(e<t&&e>=t-this.prevString.length)return this.prevString.charCodeAt(e-(t-this.prevString.length));t=this.syncTo(e)}return this.string.charCodeAt(e-t)}lineAfter(e){if(e>=this.length||e<0)return"";let t=this.cursorPos-this.string.length;return(e<t||e>=this.cursorPos)&&(t=this.syncTo(e)),this.cursor.lineBreak?"":this.string.slice(e-t,Math.min(this.length-t,this.string.length))}read(e,t){let i=this.cursorPos-this.string.length;return e<i||t>=this.cursorPos?this.doc.sliceString(e,t):this.string.slice(e-i,t-i)}clip(e){return new Or(this.doc,e)}}class Vi{constructor(e,t,i=[],n,r,o,a){this.parser=e,this.state=t,this.fragments=i,this.tree=n,this.viewport=r,this.skipped=o,this.scheduleOn=a,this.parse=null,this.tempSkipped=[]}work(e,t){if(this.tree!=ce.empty&&(t==null?this.tree.length==this.state.doc.length:this.tree.length>=t))return this.takeTree(),!0;this.parse||(this.parse=this.parser.startParse(new Or(this.state.doc),0,this));let i=Date.now()+e;for(;;){let n=this.parse.advance();if(n)return this.fragments=this.withoutTempSkipped(ai.addTree(n)),this.parse=null,this.tree=n,!0;if(t!=null&&this.parse.pos>=t)return this.takeTree(),!0;if(Date.now()>i)return!1}}takeTree(){this.parse&&this.parse.pos>this.tree.length&&(this.tree=this.parse.forceFinish(),this.fragments=this.withoutTempSkipped(ai.addTree(this.tree,this.fragments,!0)))}withoutTempSkipped(e){for(let t;t=this.tempSkipped.pop();)e=kc(e,t.from,t.to);return e}changes(e,t){let{fragments:i,tree:n,viewport:r,skipped:o}=this;if(this.takeTree(),!e.empty){let a=[];if(e.iterChangedRanges((l,h,c,d)=>a.push({fromA:l,toA:h,fromB:c,toB:d})),i=ai.applyChanges(i,a),n=ce.empty,r={from:e.mapPos(r.from,-1),to:e.mapPos(r.to,1)},this.skipped.length){o=[];for(let l of this.skipped){let h=e.mapPos(l.from,1),c=e.mapPos(l.to,-1);h<c&&o.push({from:h,to:c})}}}return new Vi(this.parser,t,i,n,r,o,this.scheduleOn)}updateViewport(e){this.viewport=e;let t=this.skipped.length;for(let i=0;i<this.skipped.length;i++){let{from:n,to:r}=this.skipped[i];n<e.to&&r>e.from&&(this.fragments=kc(this.fragments,n,r),this.skipped.splice(i--,1))}return this.skipped.length<t}reset(){this.parse&&(this.takeTree(),this.parse=null)}skipUntilInView(e,t){this.skipped.push({from:e,to:t})}static getSkippingParser(e){return{startParse(t,i,n){return{pos:i,advance(){let r=n;return r.tempSkipped.push({from:i,to:t.length}),e&&(r.scheduleOn=r.scheduleOn?Promise.all([r.scheduleOn,e]):e),this.pos=t.length,new ce(Ce.none,[],[],t.length-i)},forceFinish(){return this.advance()}}}}}movedPast(e){return this.tree.length<e&&this.parse&&this.parse.pos>=e}}Vi.skippingParser=Vi.getSkippingParser();function kc(s,e,t){return ai.applyChanges(s,[{fromA:e,toA:t,fromB:e,toB:t}])}class ji{constructor(e){this.context=e,this.tree=e.tree}apply(e){if(!e.docChanged)return this;let t=this.context.changes(e.changes,e.state),i=this.context.tree.length==e.startState.doc.length?void 0:Math.max(e.changes.mapPos(this.context.tree.length),t.viewport.to);return t.work(25,i)||t.takeTree(),new ji(t)}static init(e){let t=new Vi(e.facet(Ft).parser,e,[],ce.empty,{from:0,to:e.doc.length},[],null);return t.work(25)||t.takeTree(),new ji(t)}}ht.state=Me.define({create:ji.init,update(s,e){for(let t of e.effects)if(t.is(ht.setState))return t.value;return e.startState.facet(Ft)!=e.state.facet(Ft)?ji.init(e.state):s.apply(e)}});let Pb=typeof window!="undefined"&&window.requestIdleCallback||((s,{timeout:e})=>setTimeout(s,e)),_b=typeof window!="undefined"&&window.cancelIdleCallback||clearTimeout;const Lb=fe.fromClass(class{constructor(e){this.view=e,this.working=-1,this.chunkEnd=-1,this.chunkBudget=-1,this.work=this.work.bind(this),this.scheduleWork()}update(e){let t=this.view.state.field(ht.state).context;e.viewportChanged&&(t.updateViewport(e.view.viewport)&&t.reset(),this.view.viewport.to>t.tree.length&&this.scheduleWork()),e.docChanged&&(this.view.hasFocus&&(this.chunkBudget+=50),this.scheduleWork()),this.checkAsyncSchedule(t)}scheduleWork(){if(this.working>-1)return;let{state:e}=this.view,t=e.field(ht.state),i=t.context.fragments;t.tree.length>=e.doc.length&&i.length&&i[0].from==0&&i[0].to>=e.doc.length||(this.working=Pb(this.work,{timeout:500}))}work(e){this.working=-1;let t=Date.now();if(this.chunkEnd<t&&(this.chunkEnd<0||this.view.hasFocus)&&(this.chunkEnd=t+3e4,this.chunkBudget=3e3),this.chunkBudget<=0)return;let{state:i,viewport:{to:n}}=this.view,r=i.field(ht.state);if(r.tree.length>=n+1e6)return;let o=Math.min(this.chunkBudget,e?Math.max(25,e.timeRemaining()):100),a=r.context.work(o,n+1e6);this.chunkBudget-=Date.now()-t,(a||this.chunkBudget<=0||r.context.movedPast(n))&&(r.context.takeTree(),this.view.dispatch({effects:ht.setState.of(new ji(r.context))})),!a&&this.chunkBudget>0&&this.scheduleWork(),this.checkAsyncSchedule(r.context)}checkAsyncSchedule(e){e.scheduleOn&&(e.scheduleOn.then(()=>this.scheduleWork()),e.scheduleOn=null)}destroy(){this.working>=0&&_b(this.working)}},{eventHandlers:{focus(){this.scheduleWork()}}}),Ft=E.define({combine(s){return s.length?s[0]:null},enables:[ht.state,Lb]});class Rb{constructor(e,t=[]){this.language=e,this.support=t,this.extension=[e,t]}}const Ob=E.define(),xl=E.define({combine:s=>{if(!s.length)return"  ";if(!/^(?: +|\t+)$/.test(s[0]))throw new Error("Invalid indent unit: "+JSON.stringify(s[0]));return s[0]}});function ir(s){let e=s.facet(xl);return e.charCodeAt(0)==9?s.tabSize*e.length:e.length}function Rs(s,e){let t="",i=s.tabSize;if(s.facet(xl).charCodeAt(0)==9)for(;e>=i;)t+="	",e-=i;for(let n=0;n<e;n++)t+=" ";return t}function Sl(s,e){s instanceof U&&(s=new Dr(s));for(let i of s.state.facet(Ob)){let n=i(s,e);if(n!=null)return n}let t=je(s.state);return t?Db(s,t,e):null}class Dr{constructor(e,t={}){this.state=e,this.options=t,this.unit=ir(e)}textAfterPos(e){var t,i;let n=(t=this.options)===null||t===void 0?void 0:t.simulateBreak;return e==n&&((i=this.options)===null||i===void 0?void 0:i.simulateDoubleBreak)?"":this.state.sliceDoc(e,Math.min(e+100,n!=null&&n>e?n:1e9,this.state.doc.lineAt(e).to))}column(e){var t;let i=this.state.doc.lineAt(e),n=i.text.slice(0,e-i.from),r=this.countColumn(n,e-i.from),o=!((t=this.options)===null||t===void 0)&&t.overrideIndentation?this.options.overrideIndentation(i.from):-1;return o>-1&&(r+=o-this.countColumn(n,n.search(/\S/))),r}countColumn(e,t){return Xs(t<0?e:e.slice(0,t),0,this.state.tabSize)}lineIndent(e){var t;let i=(t=this.options)===null||t===void 0?void 0:t.overrideIndentation;if(i){let n=i(e.from);if(n>-1)return n}return this.countColumn(e.text,e.text.search(/\S/))}}const du=new Y;function Db(s,e,t){let i=e.resolve(t);for(let n=i,r=t;;){let o=n.childBefore(r);if(!o)break;o.type.isError&&o.from==o.to?(i=n,r=o.from):(n=o,r=n.to+1)}return fu(i,t,s)}function Ib(s){var e,t;return s.pos==((e=s.options)===null||e===void 0?void 0:e.simulateBreak)&&((t=s.options)===null||t===void 0?void 0:t.simulateDoubleBreak)}function Bb(s){let e=s.type.prop(du);if(e)return e;let t=s.firstChild,i;if(t&&(i=t.type.prop(Y.closedBy))){let n=s.lastChild,r=n&&i.indexOf(n.name)>-1;return o=>Wb(o,!0,1,void 0,r&&!Ib(o)?n.from:void 0)}return s.parent==null?Nb:null}function fu(s,e,t){for(;s;s=s.parent){let i=Bb(s);if(i)return i(new zb(t,e,s))}return null}function Nb(){return 0}class zb extends Dr{constructor(e,t,i){super(e.state,e.options),this.base=e,this.pos=t,this.node=i}get textAfter(){return this.textAfterPos(this.pos)}get baseIndent(){let e=this.state.doc.lineAt(this.node.from);for(;;){let t=this.node.resolve(e.from);for(;t.parent&&t.parent.from==t.from;)t=t.parent;if(Fb(t,this.node))break;e=this.state.doc.lineAt(t.from)}return this.lineIndent(e)}continue(){let e=this.node.parent;return e?fu(e,this.pos,this.base):0}}function Fb(s,e){for(let t=e;t;t=t.parent)if(s==t)return!0;return!1}function Ub(s){var e;let t=s.node,i=t.childAfter(t.from),n=t.lastChild;if(!i)return null;let r=(e=s.options)===null||e===void 0?void 0:e.simulateBreak,o=s.state.doc.lineAt(i.from),a=r==null||r<=o.from?o.to:Math.min(o.to,r);for(let l=i.to;;){let h=t.childAfter(l);if(!h||h==n)return null;if(!h.type.isSkipped)return h.from<a?i:null;l=h.to}}function Wb(s,e,t,i,n){let r=s.textAfter,o=r.match(/^\s*/)[0].length,a=i&&r.slice(o,o+i.length)==i||n==s.pos+o,l=e?Ub(s):null;return l?a?s.column(l.from):s.column(l.to):s.baseIndent+(a?0:s.unit*t)}function Cc({except:s,units:e=1}={}){return t=>{let i=s&&s.test(t.textAfter);return t.baseIndent+(i?0:e*t.unit)}}const qb=200;function Ac(){return U.transactionFilter.of(s=>{if(!s.docChanged||s.annotation(N.userEvent)!="input")return s;let e=s.startState.languageDataAt("indentOnInput",s.startState.selection.main.head);if(!e.length)return s;let t=s.newDoc,{head:i}=s.newSelection.main,n=t.lineAt(i);if(i>n.from+qb)return s;let r=t.sliceString(n.from,i);if(!e.some(h=>h.test(r)))return s;let{state:o}=s,a=-1,l=[];for(let{head:h}of o.selection.ranges){let c=o.doc.lineAt(h);if(c.from==a)continue;a=c.from;let d=Sl(o,c.from);if(d==null)continue;let f=/^\s*/.exec(c.text)[0],u=Rs(o,d);f!=u&&l.push({from:c.from,to:c.from+f.length,insert:u})}return l.length?[s,{changes:l}]:s})}const Hb=E.define(),uu=new Y;function Vb(s){let e=s.firstChild,t=s.lastChild;return e&&e.to<t.from?{from:e.to,to:t.type.isError?s.to:t.from}:null}function jb(s,e,t){let i=je(s);if(i.length==0)return null;let n=i.resolve(t),r=null;for(let o=n;o;o=o.parent){if(o.to<=t||o.from>t)continue;if(r&&o.from<e)break;let a=o.type.prop(uu);if(a){let l=a(o,s);l&&l.from<=t&&l.from>=e&&l.to>t&&(r=l)}}return r}function sr(s,e,t){for(let i of s.facet(Hb)){let n=i(s,e,t);if(n)return n}return jb(s,e,t)}const Gb=L.baseTheme({".cm-matchingBracket":{color:"#0b0"},".cm-nonmatchingBracket":{color:"#a22"}}),pu=1e4,mu="()[]{}",gu=E.define({combine(s){return Gt(s,{afterCursor:!0,brackets:mu,maxScanDistance:pu})}}),Kb=T.mark({class:"cm-matchingBracket"}),Yb=T.mark({class:"cm-nonmatchingBracket"}),Jb=Me.define({create(){return T.none},update(s,e){if(!e.docChanged&&!e.selection)return s;let t=[],i=e.state.facet(gu);for(let n of e.state.selection.ranges){if(!n.empty)continue;let r=ct(e.state,n.head,-1,i)||n.head>0&&ct(e.state,n.head-1,1,i)||i.afterCursor&&(ct(e.state,n.head,1,i)||n.head<e.state.doc.length&&ct(e.state,n.head+1,-1,i));if(!r)continue;let o=r.matched?Kb:Yb;t.push(o.range(r.start.from,r.start.to)),r.end&&t.push(o.range(r.end.from,r.end.to))}return T.set(t,!0)},provide:s=>L.decorations.from(s)}),Xb=[Jb,Gb];function Zb(s={}){return[gu.of(s),Xb]}function Ea(s,e,t){let i=s.prop(e<0?Y.openedBy:Y.closedBy);if(i)return i;if(s.name.length==1){let n=t.indexOf(s.name);if(n>-1&&n%2==(e<0?1:0))return[t[n+e]]}return null}function ct(s,e,t,i={}){let n=i.maxScanDistance||pu,r=i.brackets||mu,o=je(s),a=o.resolve(e,t),l;return(l=Ea(a.type,t,r))?Qb(s,e,t,a,l,r):ey(s,e,t,o,a.type,n,r)}function Qb(s,e,t,i,n,r){let o=i.parent,a={from:i.from,to:i.to},l=0,h=o==null?void 0:o.cursor;if(h&&(t<0?h.childBefore(i.from):h.childAfter(i.to)))do if(t<0?h.to<=i.from:h.from>=i.to){if(l==0&&n.indexOf(h.type.name)>-1)return{start:a,end:{from:h.from,to:h.to},matched:!0};if(Ea(h.type,t,r))l++;else if(Ea(h.type,-t,r)&&(l--,l==0))return{start:a,end:{from:h.from,to:h.to},matched:!1}}while(t<0?h.prevSibling():h.nextSibling());return{start:a,matched:!1}}function ey(s,e,t,i,n,r,o){let a=t<0?s.sliceDoc(e-1,e):s.sliceDoc(e,e+1),l=o.indexOf(a);if(l<0||l%2==0!=t>0)return null;let h={from:t<0?e-1:e,to:t>0?e+1:e},c=s.doc.iterRange(e,t>0?s.doc.length:0),d=0;for(let f=0;!c.next().done&&f<=r;){let u=c.value;t<0&&(f+=u.length);let p=e+f*t;for(let m=t>0?0:u.length-1,y=t>0?u.length:-1;m!=y;m+=t){let v=o.indexOf(u[m]);if(!(v<0||i.resolve(p+m,1).type!=n))if(v%2==0==t>0)d++;else{if(d==1)return{start:h,end:{from:p+m,to:p+m+1},matched:v>>1==l>>1};d--}}t>0&&(f+=u.length)}return c.done?{start:h,matched:!1}:null}function tn(s,e){return b.create(s.ranges.map(e),s.mainIndex)}function At(s,e){return s.update({selection:e,scrollIntoView:!0,annotations:N.userEvent.of("keyboardselection")})}function bt({state:s,dispatch:e},t){let i=tn(s.selection,t);return i.eq(s.selection)?!1:(e(At(s,i)),!0)}function Ir(s,e){return b.cursor(e?s.to:s.from)}function bu(s,e){return bt(s,t=>t.empty?s.moveByChar(t,e):Ir(t,e))}const yu=s=>bu(s,s.textDirection!=F.LTR),vu=s=>bu(s,s.textDirection==F.LTR);function Br(s,e){return bt(s,t=>t.empty?s.moveByGroup(t,e):Ir(t,e))}const ty=s=>Br(s,s.textDirection!=F.LTR),iy=s=>Br(s,s.textDirection==F.LTR),sy=s=>Br(s,!0),ny=s=>Br(s,!1);function ry(s,e,t){if(e.type.prop(t))return!0;let i=e.to-e.from;return i&&(i>2||/[^\s,.;:]/.test(s.sliceDoc(e.from,e.to)))||e.firstChild}function Nr(s,e,t){let i=je(s).resolve(e.head),n=t?Y.closedBy:Y.openedBy;for(let l=e.head;;){let h=t?i.childAfter(l):i.childBefore(l);if(!h)break;ry(s,h,n)?i=h:l=t?h.to:h.from}let r=i.type.prop(n),o,a;return r&&(o=t?ct(s,i.from,1):ct(s,i.to,-1))&&o.matched?a=t?o.end.to:o.end.from:a=t?i.to:i.from,b.cursor(a,t?-1:1)}const oy=s=>bt(s,e=>Nr(s.state,e,s.textDirection!=F.LTR)),ay=s=>bt(s,e=>Nr(s.state,e,s.textDirection==F.LTR));function wu(s,e){return bt(s,t=>t.empty?s.moveVertically(t,e):Ir(t,e))}const xu=s=>wu(s,!1),Su=s=>wu(s,!0);function ku(s,e){return bt(s,t=>t.empty?s.moveVertically(t,e,s.dom.clientHeight):Ir(t,e))}const Pa=s=>ku(s,!1),_a=s=>ku(s,!0);function zr(s,e,t){let i=s.visualLineAt(e.head),n=s.moveToLineBoundary(e,t);if(n.head==e.head&&n.head!=(t?i.to:i.from)&&(n=s.moveToLineBoundary(e,t,!1)),!t&&n.head==i.from&&i.length){let r=/^\s*/.exec(s.state.sliceDoc(i.from,Math.min(i.from+100,i.to)))[0].length;r&&e.head!=i.from+r&&(n=b.cursor(i.from+r))}return n}const Mc=s=>bt(s,e=>zr(s,e,!0)),$c=s=>bt(s,e=>zr(s,e,!1)),ly=s=>bt(s,e=>b.cursor(s.visualLineAt(e.head).from,1)),hy=s=>bt(s,e=>b.cursor(s.visualLineAt(e.head).to,-1));function cy(s,e,t){let i=!1,n=tn(s.selection,r=>{let o=ct(s,r.head,-1)||ct(s,r.head,1)||r.head>0&&ct(s,r.head-1,1)||r.head<s.doc.length&&ct(s,r.head+1,-1);if(!o||!o.end)return r;i=!0;let a=o.start.from==r.head?o.end.to:o.end.from;return t?b.range(r.anchor,a):b.cursor(a)});return i?(e(At(s,n)),!0):!1}const dy=({state:s,dispatch:e})=>cy(s,e,!1);function yt(s,e){let t=tn(s.state.selection,i=>{let n=e(i);return b.range(i.anchor,n.head,n.goalColumn)});return t.eq(s.state.selection)?!1:(s.dispatch(At(s.state,t)),!0)}function Cu(s,e){return yt(s,t=>s.moveByChar(t,e))}const Au=s=>Cu(s,s.textDirection!=F.LTR),Mu=s=>Cu(s,s.textDirection==F.LTR);function Fr(s,e){return yt(s,t=>s.moveByGroup(t,e))}const fy=s=>Fr(s,s.textDirection!=F.LTR),uy=s=>Fr(s,s.textDirection==F.LTR),py=s=>Fr(s,!0),my=s=>Fr(s,!1),gy=s=>yt(s,e=>Nr(s.state,e,s.textDirection!=F.LTR)),by=s=>yt(s,e=>Nr(s.state,e,s.textDirection==F.LTR));function $u(s,e){return yt(s,t=>s.moveVertically(t,e))}const Tu=s=>$u(s,!1),Eu=s=>$u(s,!0);function Pu(s,e){return yt(s,t=>s.moveVertically(t,e,s.dom.clientHeight))}const Tc=s=>Pu(s,!1),Ec=s=>Pu(s,!0),Pc=s=>yt(s,e=>zr(s,e,!0)),_c=s=>yt(s,e=>zr(s,e,!1)),yy=s=>yt(s,e=>b.cursor(s.visualLineAt(e.head).from)),vy=s=>yt(s,e=>b.cursor(s.visualLineAt(e.head).to)),La=({state:s,dispatch:e})=>(e(At(s,{anchor:0})),!0),Ra=({state:s,dispatch:e})=>(e(At(s,{anchor:s.doc.length})),!0),Lc=({state:s,dispatch:e})=>(e(At(s,{anchor:s.selection.main.anchor,head:0})),!0),Rc=({state:s,dispatch:e})=>(e(At(s,{anchor:s.selection.main.anchor,head:s.doc.length})),!0),wy=({state:s,dispatch:e})=>(e(s.update({selection:{anchor:0,head:s.doc.length},annotations:N.userEvent.of("keyboardselection")})),!0),xy=({state:s,dispatch:e})=>{let t=Wr(s).map(({from:i,to:n})=>b.range(i,Math.min(n+1,s.doc.length)));return e(s.update({selection:b.create(t),annotations:N.userEvent.of("keyboardselection")})),!0},Sy=({state:s,dispatch:e})=>{let t=tn(s.selection,i=>{var n;let r=je(s).resolve(i.head,1);for(;!(r.from<i.from&&r.to>=i.to||r.to>i.to&&r.from<=i.from||!(!((n=r.parent)===null||n===void 0)&&n.parent));)r=r.parent;return b.range(r.to,r.from)});return e(At(s,t)),!0},ky=({state:s,dispatch:e})=>{let t=s.selection,i=null;return t.ranges.length>1?i=b.create([t.main]):t.main.empty||(i=b.create([b.cursor(t.main.head)])),i?(e(At(s,i)),!0):!1};function Ur({state:s,dispatch:e},t){let i=s.changeByRange(n=>{let{from:r,to:o}=n;if(r==o){let a=t(r);r=Math.min(r,a),o=Math.max(o,a)}return r==o?{range:n}:{changes:{from:r,to:o},range:b.cursor(r)}});return i.changes.empty?!1:(e(s.update(i,{scrollIntoView:!0,annotations:N.userEvent.of("delete")})),!0)}const kl=(s,e,t)=>Ur(s,i=>{let{state:n}=s,r=n.doc.lineAt(i),o;if(!e&&i>r.from&&i<r.from+200&&!/[^ \t]/.test(o=r.text.slice(0,i-r.from))){if(o[o.length-1]=="	")return i-1;let l=Xs(o,0,n.tabSize),h=l%ir(n)||ir(n);for(let c=0;c<h&&o[o.length-1-c]==" ";c++)i--;return i}let a;if(t){let l=r.text.slice(i-r.from+(e?0:-2),i-r.from+(e?2:0)),h=l?Ue(xe(l,0)):1;a=e?Math.min(n.doc.length,i+h):Math.max(0,i-h)}else a=We(r.text,i-r.from,e)+r.from;return a==i&&r.number!=(e?n.doc.lines:1)&&(a+=e?1:-1),a}),Oc=s=>kl(s,!1,!0),Cy=s=>kl(s,!1,!1),Oa=s=>kl(s,!0,!1),_u=(s,e)=>Ur(s,t=>{let i=t,{state:n}=s,r=n.doc.lineAt(i),o=n.charCategorizer(i);for(let a=null;;){if(i==(e?r.to:r.from)){i==t&&r.number!=(e?n.doc.lines:1)&&(i+=e?1:-1);break}let l=We(r.text,i-r.from,e)+r.from,h=r.text.slice(Math.min(i,l)-r.from,Math.max(i,l)-r.from),c=o(h);if(a!=null&&c!=a)break;(h!=" "||i!=t)&&(a=c),i=l}return i}),Lu=s=>_u(s,!1),Ru=s=>_u(s,!0),Ou=s=>Ur(s,e=>{let t=s.visualLineAt(e).to;return e<t?t:Math.min(s.state.doc.length,e+1)}),Ay=s=>Ur(s,e=>{let t=s.visualLineAt(e).from;return e>t?t:Math.max(0,e-1)}),My=({state:s,dispatch:e})=>{let t=s.changeByRange(i=>({changes:{from:i.from,to:i.to,insert:H.of(["",""])},range:b.cursor(i.from)}));return e(s.update(t,{scrollIntoView:!0,annotations:N.userEvent.of("input")})),!0},$y=({state:s,dispatch:e})=>{let t=s.changeByRange(i=>{if(!i.empty||i.from==0||i.from==s.doc.length)return{range:i};let n=i.from,r=s.doc.lineAt(n),o=n==r.from?n-1:We(r.text,n-r.from,!1)+r.from,a=n==r.to?n+1:We(r.text,n-r.from,!0)+r.from;return{changes:{from:o,to:a,insert:s.doc.slice(n,a).append(s.doc.slice(o,n))},range:b.cursor(a)}});return t.changes.empty?!1:(e(s.update(t,{scrollIntoView:!0})),!0)};function Wr(s){let e=[],t=-1;for(let i of s.selection.ranges){let n=s.doc.lineAt(i.from),r=s.doc.lineAt(i.to);if(!i.empty&&i.to==r.from&&(r=s.doc.lineAt(i.to-1)),t>=n.number){let o=e[e.length-1];o.to=r.to,o.ranges.push(i)}else e.push({from:n.from,to:r.to,ranges:[i]});t=r.number+1}return e}function Du(s,e,t){let i=[],n=[];for(let r of Wr(s)){if(t?r.to==s.doc.length:r.from==0)continue;let o=s.doc.lineAt(t?r.to+1:r.from-1),a=o.length+1;if(t){i.push({from:r.to,to:o.to},{from:r.from,insert:o.text+s.lineBreak});for(let l of r.ranges)n.push(b.range(Math.min(s.doc.length,l.anchor+a),Math.min(s.doc.length,l.head+a)))}else{i.push({from:o.from,to:r.from},{from:r.to,insert:s.lineBreak+o.text});for(let l of r.ranges)n.push(b.range(l.anchor-a,l.head-a))}}return i.length?(e(s.update({changes:i,scrollIntoView:!0,selection:b.create(n,s.selection.mainIndex)})),!0):!1}const Ty=({state:s,dispatch:e})=>Du(s,e,!1),Ey=({state:s,dispatch:e})=>Du(s,e,!0);function Iu(s,e,t){let i=[];for(let n of Wr(s))t?i.push({from:n.from,insert:s.doc.slice(n.from,n.to)+s.lineBreak}):i.push({from:n.to,insert:s.lineBreak+s.doc.slice(n.from,n.to)});return e(s.update({changes:i,scrollIntoView:!0})),!0}const Py=({state:s,dispatch:e})=>Iu(s,e,!1),_y=({state:s,dispatch:e})=>Iu(s,e,!0),Ly=s=>{let{state:e}=s,t=e.changes(Wr(e).map(({from:n,to:r})=>(n>0?n--:r<e.doc.length&&r++,{from:n,to:r}))),i=tn(e.selection,n=>s.moveVertically(n,!0)).map(t);return s.dispatch({changes:t,selection:i,scrollIntoView:!0}),!0};function Ry(s,e){if(/\(\)|\[\]|\{\}/.test(s.sliceDoc(e-1,e+1)))return{from:e,to:e};let t=je(s).resolve(e),i=t.childBefore(e),n=t.childAfter(e),r;return i&&n&&i.to<=e&&n.from>=e&&(r=i.type.prop(Y.closedBy))&&r.indexOf(n.name)>-1&&s.doc.lineAt(i.to).from==s.doc.lineAt(n.from).from?{from:i.to,to:n.from}:null}const Oy=({state:s,dispatch:e})=>{let t=s.changeByRange(({from:i,to:n})=>{let r=i==n&&Ry(s,i),o=new Dr(s,{simulateBreak:i,simulateDoubleBreak:!!r}),a=Sl(o,i);a==null&&(a=/^\s*/.exec(s.doc.lineAt(i).text)[0].length);let l=s.doc.lineAt(i);for(;n<l.to&&/\s/.test(l.text.slice(n-l.from,n+1-l.from));)n++;r?{from:i,to:n}=r:i>l.from&&i<l.from+100&&!/\S/.test(l.text.slice(0,i))&&(i=l.from);let h=["",Rs(s,a)];return r&&h.push(Rs(s,o.lineIndent(l))),{changes:{from:i,to:n,insert:H.of(h)},range:b.cursor(i+1+h[1].length)}});return e(s.update(t,{scrollIntoView:!0})),!0};function Cl(s,e){let t=-1;return s.changeByRange(i=>{let n=[];for(let o=i.from;o<=i.to;){let a=s.doc.lineAt(o);a.number>t&&(i.empty||i.to>a.from)&&(e(a,n,i),t=a.number),o=a.to+1}let r=s.changes(n);return{changes:n,range:b.range(r.mapPos(i.anchor,1),r.mapPos(i.head,1))}})}const Dy=({state:s,dispatch:e})=>{let t=Object.create(null),i=new Dr(s,{overrideIndentation:r=>{let o=t[r];return o==null?-1:o}}),n=Cl(s,(r,o,a)=>{let l=Sl(i,r.from);if(l==null)return;let h=/^\s*/.exec(r.text)[0],c=Rs(s,l);(h!=c||a.from<r.from+h.length)&&(t[r.from]=l,o.push({from:r.from,to:r.from+h.length,insert:c}))});return n.changes.empty||e(s.update(n)),!0},Iy=({state:s,dispatch:e})=>(e(s.update(Cl(s,(t,i)=>{i.push({from:t.from,insert:s.facet(xl)})}))),!0),By=({state:s,dispatch:e})=>(e(s.update(Cl(s,(t,i)=>{let n=/^\s*/.exec(t.text)[0];if(!n)return;let r=Xs(n,0,s.tabSize),o=0,a=Rs(s,Math.max(0,r-ir(s)));for(;o<n.length&&o<a.length&&n.charCodeAt(o)==a.charCodeAt(o);)o++;i.push({from:t.from+o,to:t.from+n.length,insert:a.slice(o)})}))),!0),Ny=[{key:"Ctrl-b",run:yu,shift:Au,preventDefault:!0},{key:"Ctrl-f",run:vu,shift:Mu},{key:"Ctrl-p",run:xu,shift:Tu},{key:"Ctrl-n",run:Su,shift:Eu},{key:"Ctrl-a",run:ly,shift:yy},{key:"Ctrl-e",run:hy,shift:vy},{key:"Ctrl-d",run:Oa},{key:"Ctrl-h",run:Cy},{key:"Ctrl-k",run:Ou},{key:"Alt-d",run:Ru},{key:"Ctrl-Alt-h",run:Lu},{key:"Ctrl-o",run:My},{key:"Ctrl-t",run:$y},{key:"Alt-f",run:sy,shift:py},{key:"Alt-b",run:ny,shift:my},{key:"Alt-<",run:La},{key:"Alt->",run:Ra},{key:"Ctrl-v",run:_a},{key:"Alt-v",run:Pa}],zy=[{key:"ArrowLeft",run:yu,shift:Au,preventDefault:!0},{key:"Mod-ArrowLeft",mac:"Alt-ArrowLeft",run:ty,shift:fy},{mac:"Cmd-ArrowLeft",run:$c,shift:_c},{key:"ArrowRight",run:vu,shift:Mu,preventDefault:!0},{key:"Mod-ArrowRight",mac:"Alt-ArrowRight",run:iy,shift:uy},{mac:"Cmd-ArrowRight",run:Mc,shift:Pc},{key:"ArrowUp",run:xu,shift:Tu,preventDefault:!0},{mac:"Cmd-ArrowUp",run:La,shift:Lc},{mac:"Ctrl-ArrowUp",run:Pa,shift:Tc},{key:"ArrowDown",run:Su,shift:Eu,preventDefault:!0},{mac:"Cmd-ArrowDown",run:Ra,shift:Rc},{mac:"Ctrl-ArrowDown",run:_a,shift:Ec},{key:"PageUp",run:Pa,shift:Tc},{key:"PageDown",run:_a,shift:Ec},{key:"Home",run:$c,shift:_c},{key:"Mod-Home",run:La,shift:Lc},{key:"End",run:Mc,shift:Pc},{key:"Mod-End",run:Ra,shift:Rc},{key:"Enter",run:Oy},{key:"Mod-a",run:wy},{key:"Backspace",run:Oc,shift:Oc},{key:"Delete",run:Oa,shift:Oa},{key:"Mod-Backspace",mac:"Alt-Backspace",run:Lu},{key:"Mod-Delete",mac:"Alt-Delete",run:Ru},{mac:"Mod-Backspace",run:Ay},{mac:"Mod-Delete",run:Ou}].concat(Ny.map(s=>({mac:s.key,run:s.run,shift:s.shift}))),Fy=[{key:"Alt-ArrowLeft",mac:"Ctrl-ArrowLeft",run:oy,shift:gy},{key:"Alt-ArrowRight",mac:"Ctrl-ArrowRight",run:ay,shift:by},{key:"Alt-ArrowUp",run:Ty},{key:"Shift-Alt-ArrowUp",run:Py},{key:"Alt-ArrowDown",run:Ey},{key:"Shift-Alt-ArrowDown",run:_y},{key:"Escape",run:ky},{key:"Alt-l",mac:"Ctrl-l",run:xy},{key:"Mod-i",run:Sy,preventDefault:!0},{key:"Mod-[",run:By},{key:"Mod-]",run:Iy},{key:"Mod-Alt-\\",run:Dy},{key:"Shift-Mod-k",run:Ly},{key:"Shift-Mod-\\",run:dy}].concat(zy),Da=ui.define(),Uy=ui.define(),Wy=E.define(),Bu=E.define({combine(s){return Gt(s,{minDepth:100,newGroupDelay:500},{minDepth:Math.max,newGroupDelay:Math.min})}}),Nu=Me.define({create(){return dt.empty},update(s,e){let t=e.state.facet(Bu),i=e.annotation(Da);if(i){let l=De.fromTransaction(e),h=i.side,c=h==0?s.undone:s.done;return l?c=nr(c,c.length,t.minDepth,l):c=Wu(c,e.startState.selection),new dt(h==0?i.rest:c,h==0?c:i.rest)}let n=e.annotation(Uy);if((n=="full"||n=="before")&&(s=s.isolate()),e.annotation(N.addToHistory)===!1)return e.changes.empty?s:s.addMapping(e.changes.desc);let r=De.fromTransaction(e),o=e.annotation(N.time),a=e.annotation(N.userEvent);return r?s=s.addChanges(r,o,a,t.newGroupDelay,t.minDepth):e.selection&&(s=s.addSelection(e.startState.selection,o,a,t.newGroupDelay)),(n=="full"||n=="after")&&(s=s.isolate()),s},toJSON(s){return{done:s.done.map(e=>e.toJSON()),undone:s.undone.map(e=>e.toJSON())}},fromJSON(s){return new dt(s.done.map(De.fromJSON),s.undone.map(De.fromJSON))}});function qy(s={}){return[Nu,Bu.of(s),L.domEventHandlers({beforeinput(e,t){return e.inputType=="historyUndo"?zu(t):e.inputType=="historyRedo"?Fu(t):!1}})]}function qr(s,e){return function({state:t,dispatch:i}){let n=t.field(Nu,!1);if(!n)return!1;let r=n.pop(s,t,e);return r?(i(r),!0):!1}}const zu=qr(0,!1),Fu=qr(1,!1),Hy=qr(0,!0),Vy=qr(1,!0);class De{constructor(e,t,i,n,r){this.changes=e,this.effects=t,this.mapped=i,this.startSelection=n,this.selectionsAfter=r}setSelAfter(e){return new De(this.changes,this.effects,this.mapped,this.startSelection,e)}toJSON(){var e,t,i;return{changes:(e=this.changes)===null||e===void 0?void 0:e.toJSON(),mapped:(t=this.mapped)===null||t===void 0?void 0:t.toJSON(),startSelection:(i=this.startSelection)===null||i===void 0?void 0:i.toJSON(),selectionsAfter:this.selectionsAfter.map(n=>n.toJSON())}}static fromJSON(e){return new De(e.changes&&he.fromJSON(e.changes),[],e.mapped&&kt.fromJSON(e.mapped),e.startSelection&&b.fromJSON(e.startSelection),e.selectionsAfter.map(b.fromJSON))}static fromTransaction(e){let t=Ke;for(let i of e.startState.facet(Wy)){let n=i(e);n.length&&(t=t.concat(n))}return!t.length&&e.changes.empty?null:new De(e.changes.invert(e.startState.doc),t,void 0,e.startState.selection,Ke)}static selection(e){return new De(void 0,Ke,void 0,void 0,e)}}function nr(s,e,t,i){let n=e+1>t+20?e-t-1:0,r=s.slice(n,e);return r.push(i),r}function jy(s,e){let t=[],i=!1;return s.iterChangedRanges((n,r)=>t.push(n,r)),e.iterChangedRanges((n,r,o,a)=>{for(let l=0;l<t.length;){let h=t[l++],c=t[l++];a>=h&&o<=c&&(i=!0)}}),i}function Gy(s,e){return s.ranges.length==e.ranges.length&&s.ranges.filter((t,i)=>t.empty!=e.ranges[i].empty).length===0}function Uu(s,e){return s.length?e.length?s.concat(e):s:e}const Ke=[],Ky=200;function Wu(s,e){if(s.length){let t=s[s.length-1],i=t.selectionsAfter.slice(Math.max(0,t.selectionsAfter.length-Ky));return i.length&&i[i.length-1].eq(e)?s:(i.push(e),nr(s,s.length-1,1e9,t.setSelAfter(i)))}else return[De.selection([e])]}function Yy(s){let e=s[s.length-1],t=s.slice();return t[s.length-1]=e.setSelAfter(e.selectionsAfter.slice(0,e.selectionsAfter.length-1)),t}function Ao(s,e){if(!s.length)return s;let t=s.length,i=Ke;for(;t;){let n=Jy(s[t-1],e,i);if(n.changes&&!n.changes.empty||n.effects.length){let r=s.slice(0,t);return r[t-1]=n,r}else e=n.mapped,t--,i=n.selectionsAfter}return i.length?[De.selection(i)]:Ke}function Jy(s,e,t){let i=Uu(s.selectionsAfter.length?s.selectionsAfter.map(a=>a.map(e)):Ke,t);if(!s.changes)return De.selection(i);let n=s.changes.map(e),r=e.mapDesc(s.changes,!0),o=s.mapped?s.mapped.composeDesc(r):r;return new De(n,B.mapEffects(s.effects,e),o,s.startSelection.map(r),i)}class dt{constructor(e,t,i=0,n=void 0){this.done=e,this.undone=t,this.prevTime=i,this.prevUserEvent=n}isolate(){return this.prevTime?new dt(this.done,this.undone):this}addChanges(e,t,i,n,r){let o=this.done,a=o[o.length-1];return a&&a.changes&&t-this.prevTime<n&&!a.selectionsAfter.length&&!a.changes.empty&&e.changes&&jy(a.changes,e.changes)?o=nr(o,o.length-1,r,new De(e.changes.compose(a.changes),Uu(e.effects,a.effects),a.mapped,a.startSelection,Ke)):o=nr(o,o.length,r,e),new dt(o,Ke,t,i)}addSelection(e,t,i,n){let r=this.done.length?this.done[this.done.length-1].selectionsAfter:Ke;return r.length>0&&t-this.prevTime<n&&i=="keyboardselection"&&this.prevUserEvent==i&&Gy(r[r.length-1],e)?this:new dt(Wu(this.done,e),this.undone,t,i)}addMapping(e){return new dt(Ao(this.done,e),Ao(this.undone,e),this.prevTime,this.prevUserEvent)}pop(e,t,i){let n=e==0?this.done:this.undone;if(n.length==0)return null;let r=n[n.length-1];if(i&&r.selectionsAfter.length)return t.update({selection:r.selectionsAfter[r.selectionsAfter.length-1],annotations:Da.of({side:e,rest:Yy(n)})});if(r.changes){let o=n.length==1?Ke:n.slice(0,n.length-1);return r.mapped&&(o=Ao(o,r.mapped)),t.update({changes:r.changes,selection:r.startSelection,effects:r.effects,annotations:Da.of({side:e,rest:o}),filter:!1})}else return null}}dt.empty=new dt(Ke,Ke);const Xy=[{key:"Mod-z",run:zu,preventDefault:!0},{key:"Mod-y",mac:"Mod-Shift-z",run:Fu,preventDefault:!0},{key:"Mod-u",run:Hy,preventDefault:!0},{key:"Alt-u",mac:"Mod-Shift-u",run:Vy,preventDefault:!0}];class Xi extends hi{compare(e){return this==e||this.constructor==e.constructor&&this.eq(e)}eq(e){return!1}at(e){return this.range(e)}}Xi.prototype.elementClass="";Xi.prototype.toDOM=void 0;Xi.prototype.mapMode=Ee.TrackBefore;Xi.prototype.point=!0;const Mo=E.define(),Zy={class:"",renderEmptyElements:!1,elementStyle:"",markers:()=>V.empty,lineMarker:()=>null,initialSpacer:null,updateSpacer:null,domEventHandlers:{}},zn=E.define();function qu(s){return[ev(),zn.of(Object.assign(Object.assign({},Zy),s))]}const Qy=L.baseTheme({".cm-gutters":{display:"flex",height:"100%",boxSizing:"border-box",left:0,zIndex:200},"&light .cm-gutters":{backgroundColor:"#f5f5f5",color:"#999",borderRight:"1px solid #ddd"},"&dark .cm-gutters":{backgroundColor:"#333338",color:"#ccc"},".cm-gutter":{display:"flex !important",flexDirection:"column",flexShrink:0,boxSizing:"border-box",height:"100%",overflow:"hidden"},".cm-gutterElement":{boxSizing:"border-box"},".cm-lineNumbers .cm-gutterElement":{padding:"0 3px 0 5px",minWidth:"20px",textAlign:"right",whiteSpace:"nowrap"},"&light .cm-activeLineGutter":{backgroundColor:"#e2f2ff"},"&dark .cm-activeLineGutter":{backgroundColor:"#222227"}}),Ia=E.define({combine:s=>s.some(e=>e)});function ev(s){let e=[tv,Qy];return s&&s.fixed===!1&&e.push(Ia.of(!0)),e}const tv=fe.fromClass(class{constructor(s){this.view=s,this.dom=document.createElement("div"),this.dom.className="cm-gutters",this.dom.setAttribute("aria-hidden","true"),this.gutters=s.state.facet(zn).map(e=>new Ic(s,e));for(let e of this.gutters)this.dom.appendChild(e.dom);this.fixed=!s.state.facet(Ia),this.fixed&&(this.dom.style.position="sticky"),s.scrollDOM.insertBefore(this.dom,s.contentDOM),this.syncGutters()}update(s){this.updateGutters(s)&&this.syncGutters()}syncGutters(){let s=V.iter(this.view.state.facet(Mo),this.view.viewport.from),e=[],t=this.gutters.map(i=>new iv(i,this.view.viewport));this.view.viewportLines(i=>{let n;if(Array.isArray(i.type)){for(let r of i.type)if(r.type==G.Text){n=r;break}}else n=i.type==G.Text?i:void 0;if(!!n){e.length&&(e=[]),Hu(s,e,i.from);for(let r of t)r.line(this.view,n,e)}},0);for(let i of t)i.finish();this.dom.style.minHeight=this.view.contentHeight+"px",this.view.state.facet(Ia)!=!this.fixed&&(this.fixed=!this.fixed,this.dom.style.position=this.fixed?"sticky":"")}updateGutters(s){let e=s.startState.facet(zn),t=s.state.facet(zn),i=s.docChanged||s.heightChanged||s.viewportChanged||!V.eq(s.startState.facet(Mo),s.state.facet(Mo),s.view.viewport.from,s.view.viewport.to);if(e==t)for(let n of this.gutters)n.update(s)&&(i=!0);else{i=!0;let n=[];for(let r of t){let o=e.indexOf(r);o<0?n.push(new Ic(this.view,r)):(this.gutters[o].update(s),n.push(this.gutters[o]))}for(let r of this.gutters)r.dom.remove();for(let r of n)this.dom.appendChild(r.dom);this.gutters=n}return i}destroy(){this.dom.remove()}},{provide:_e.scrollMargins.from(s=>s.gutters.length==0||!s.fixed?null:s.view.textDirection==F.LTR?{left:s.dom.offsetWidth}:{right:s.dom.offsetWidth})});function Dc(s){return Array.isArray(s)?s:[s]}function Hu(s,e,t){for(;s.value&&s.from<=t;)s.from==t&&e.push(s.value),s.next()}class iv{constructor(e,t){this.gutter=e,this.localMarkers=[],this.i=0,this.height=0,this.cursor=V.iter(e.markers,t.from)}line(e,t,i){this.localMarkers.length&&(this.localMarkers=[]),Hu(this.cursor,this.localMarkers,t.from);let n=i.length?this.localMarkers.concat(i):this.localMarkers,r=this.gutter.config.lineMarker(e,t,n);r&&n.unshift(r);let o=this.gutter;if(n.length==0&&!o.config.renderEmptyElements)return;let a=t.top-this.height;if(this.i==o.elements.length){let l=new Vu(e,t.height,a,n);o.elements.push(l),o.dom.appendChild(l.dom)}else{let l=o.elements[this.i];sv(n,l.markers)&&(n=l.markers),l.update(e,t.height,a,n)}this.height=t.bottom,this.i++}finish(){let e=this.gutter;for(;e.elements.length>this.i;)e.dom.removeChild(e.elements.pop().dom)}}class Ic{constructor(e,t){this.view=e,this.config=t,this.elements=[],this.spacer=null,this.dom=document.createElement("div"),this.dom.className="cm-gutter"+(this.config.class?" "+this.config.class:"");for(let i in t.domEventHandlers)this.dom.addEventListener(i,n=>{let r=e.visualLineAtHeight(n.clientY,e.contentDOM.getBoundingClientRect().top);t.domEventHandlers[i](e,r,n)&&n.preventDefault()});this.markers=Dc(t.markers(e)),t.initialSpacer&&(this.spacer=new Vu(e,0,0,[t.initialSpacer(e)]),this.dom.appendChild(this.spacer.dom),this.spacer.dom.style.cssText+="visibility: hidden; pointer-events: none")}update(e){let t=this.markers;if(this.markers=Dc(this.config.markers(e.view)),this.spacer&&this.config.updateSpacer){let n=this.config.updateSpacer(this.spacer.markers[0],e);n!=this.spacer.markers[0]&&this.spacer.update(e.view,0,0,[n])}let i=e.view.viewport;return!V.eq(this.markers,t,i.from,i.to)}}class Vu{constructor(e,t,i,n){this.height=-1,this.above=0,this.dom=document.createElement("div"),this.update(e,t,i,n)}update(e,t,i,n){if(this.height!=t&&(this.dom.style.height=(this.height=t)+"px"),this.above!=i&&(this.dom.style.marginTop=(this.above=i)?i+"px":""),this.markers!=n){this.markers=n;for(let o;o=this.dom.lastChild;)o.remove();let r="cm-gutterElement";for(let o of n){o.toDOM&&this.dom.appendChild(o.toDOM(e));let a=o.elementClass;a&&(r+=" "+a)}this.dom.className=r}}}function sv(s,e){if(s.length!=e.length)return!1;for(let t=0;t<s.length;t++)if(!s[t].compare(e[t]))return!1;return!0}const nv=E.define(),ju=E.define({combine(s){return Gt(s,{formatNumber:String,domEventHandlers:{}},{domEventHandlers(e,t){let i=Object.assign({},e);for(let n in t){let r=i[n],o=t[n];i[n]=r?(a,l,h)=>r(a,l,h)||o(a,l,h):o}return i}})}});class $o extends Xi{constructor(e){super(),this.number=e}eq(e){return this.number==e.number}toDOM(e){return document.createTextNode(this.number)}}function To(s,e){return s.state.facet(ju).formatNumber(e,s.state)}const rv=qu({class:"cm-lineNumbers",markers(s){return s.state.facet(nv)},lineMarker(s,e,t){return t.some(i=>i.toDOM)?null:new $o(To(s,s.state.doc.lineAt(e.from).number))},initialSpacer(s){return new $o(To(s,Bc(s.state.doc.lines)))},updateSpacer(s,e){let t=To(e.view,Bc(e.view.state.doc.lines));return t==s.number?s:new $o(t)}});function ov(s={}){return[ju.of(s),rv]}function Bc(s){let e=9;for(;e<s;)e=e*10+9;return e}function Gu(s,e){let t=e.mapPos(s.from,1),i=e.mapPos(s.to,-1);return t>=i?void 0:{from:t,to:i}}const Hr=B.define({map:Gu}),sn=B.define({map:Gu});function Ku(s){let e=[];for(let{head:t}of s.state.selection.ranges)e.some(i=>i.from<=t&&i.to>=t)||e.push(s.visualLineAt(t));return e}const ci=Me.define({create(){return T.none},update(s,e){s=s.map(e.changes);for(let t of e.effects)t.is(Hr)&&!av(s,t.value.from,t.value.to)?s=s.update({add:[pv.range(t.value.from,t.value.to)]}):t.is(sn)&&(s=s.update({filter:(i,n)=>t.value.from!=i||t.value.to!=n,filterFrom:t.value.from,filterTo:t.value.to}));if(e.selection){let t=!1,{head:i}=e.selection.main;s.between(i,i,(n,r)=>{n<i&&r>i&&(t=!0)}),t&&(s=s.update({filterFrom:i,filterTo:i,filter:(n,r)=>r<=i||n>=i}))}return s},provide:s=>L.decorations.from(s)});function rr(s,e,t){var i;let n=null;return(i=s.field(ci,!1))===null||i===void 0||i.between(e,t,(r,o)=>{(!n||n.from>r)&&(n={from:r,to:o})}),n}function av(s,e,t){let i=!1;return s.between(e,e,(n,r)=>{n==e&&r==t&&(i=!0)}),i}function Yu(s,e){return s.field(ci,!1)?e:e.concat(B.appendConfig.of(Zu()))}const lv=s=>{for(let e of Ku(s)){let t=sr(s.state,e.from,e.to);if(t)return s.dispatch({effects:Yu(s.state,[Hr.of(t),Ju(s,t)])}),!0}return!1},hv=s=>{if(!s.state.field(ci,!1))return!1;let e=[];for(let t of Ku(s)){let i=rr(s.state,t.from,t.to);i&&e.push(sn.of(i),Ju(s,i,!1))}return e.length&&s.dispatch({effects:e}),e.length>0};function Ju(s,e,t=!0){let i=s.state.doc.lineAt(e.from).number,n=s.state.doc.lineAt(e.to).number;return L.announce.of(`${s.state.phrase(t?"Folded lines":"Unfolded lines")} ${i} ${s.state.phrase("to")} ${n}.`)}const cv=s=>{let{state:e}=s,t=[];for(let i=0;i<e.doc.length;){let n=s.visualLineAt(i),r=sr(e,n.from,n.to);r&&t.push(Hr.of(r)),i=(r?s.visualLineAt(r.to):n).to+1}return t.length&&s.dispatch({effects:Yu(s.state,t)}),!!t.length},dv=s=>{let e=s.state.field(ci,!1);if(!e||!e.size)return!1;let t=[];return e.between(0,s.state.doc.length,(i,n)=>{t.push(sn.of({from:i,to:n}))}),s.dispatch({effects:t}),!0},fv=[{key:"Ctrl-Shift-[",mac:"Cmd-Alt-[",run:lv},{key:"Ctrl-Shift-]",mac:"Cmd-Alt-]",run:hv},{key:"Ctrl-Alt-[",run:cv},{key:"Ctrl-Alt-]",run:dv}],uv={placeholderDOM:null,placeholderText:"\u2026"},Xu=E.define({combine(s){return Gt(s,uv)}});function Zu(s){let e=[ci,bv];return s&&e.push(Xu.of(s)),e}const pv=T.replace({widget:new class extends Kt{ignoreEvents(){return!1}toDOM(s){let{state:e}=s,t=e.facet(Xu);if(t.placeholderDOM)return t.placeholderDOM();let i=document.createElement("span");return i.textContent=t.placeholderText,i.setAttribute("aria-label",e.phrase("folded code")),i.title=e.phrase("unfold"),i.className="cm-foldPlaceholder",i.onclick=n=>{let r=s.visualLineAt(s.posAtDOM(n.target)),o=rr(s.state,r.from,r.to);o&&s.dispatch({effects:sn.of(o)}),n.preventDefault()},i}}}),mv={openText:"\u2304",closedText:"\u203A",markerDOM:null};class Eo extends Xi{constructor(e,t){super(),this.config=e,this.open=t}eq(e){return this.config==e.config&&this.open==e.open}toDOM(e){if(this.config.markerDOM)return this.config.markerDOM(this.open);let t=document.createElement("span");return t.textContent=this.open?this.config.openText:this.config.closedText,t.title=e.state.phrase(this.open?"Fold line":"Unfold line"),t}}function gv(s={}){let e=Object.assign(Object.assign({},mv),s),t=new Eo(e,!0),i=new Eo(e,!1),n=fe.fromClass(class{constructor(r){this.from=r.viewport.from,this.markers=this.buildMarkers(r)}update(r){(r.docChanged||r.viewportChanged||r.startState.facet(Ft)!=r.state.facet(Ft)||r.startState.field(ci,!1)!=r.state.field(ci,!1))&&(this.markers=this.buildMarkers(r.view))}buildMarkers(r){let o=new Nt;return r.viewportLines(a=>{let l=rr(r.state,a.from,a.to)?i:sr(r.state,a.from,a.to)?t:null;l&&o.add(a.from,a.from,l)}),o.finish()}});return[n,qu({class:"cm-foldGutter",markers(r){var o;return((o=r.plugin(n))===null||o===void 0?void 0:o.markers)||V.empty},initialSpacer(){return new Eo(e,!1)},domEventHandlers:{click:(r,o)=>{let a=rr(r.state,o.from,o.to);if(a)return r.dispatch({effects:sn.of(a)}),!0;let l=sr(r.state,o.from,o.to);return l?(r.dispatch({effects:Hr.of(l)}),!0):!1}}}),Zu()]}const bv=L.baseTheme({".cm-foldPlaceholder":{backgroundColor:"#eee",border:"1px solid #ddd",color:"#888",borderRadius:".2em",margin:"0 1px",padding:"0 1px",cursor:"pointer"},".cm-foldGutter .cm-gutterElement":{padding:"0 1px",cursor:"pointer"}}),or={brackets:["(","[","{","'",'"'],before:`)]}'":;>`},ni=B.define({map(s,e){let t=e.mapPos(s,-1,Ee.TrackAfter);return t==null?void 0:t}}),Al=B.define({map(s,e){return e.mapPos(s)}}),Ml=new class extends hi{};Ml.startSide=1;Ml.endSide=-1;const Qu=Me.define({create(){return V.empty},update(s,e){if(e.selection){let t=e.state.doc.lineAt(e.selection.main.head).from,i=e.startState.doc.lineAt(e.startState.selection.main.head).from;t!=e.changes.mapPos(i,-1)&&(s=V.empty)}s=s.map(e.changes);for(let t of e.effects)t.is(ni)?s=s.update({add:[Ml.range(t.value,t.value+1)]}):t.is(Al)&&(s=s.update({filter:i=>i!=t.value}));return s}});function yv(){return[L.inputHandler.of(vv),Qu]}const Po="()[]{}<>";function ep(s){for(let e=0;e<Po.length;e+=2)if(Po.charCodeAt(e)==s)return Po.charAt(e+1);return rl(s<128?s:s+1)}function tp(s,e){return s.languageDataAt("closeBrackets",e)[0]||or}function vv(s,e,t,i){if(s.composing)return!1;let n=s.state.selection.main;if(i.length>2||i.length==2&&Ue(xe(i,0))==1||e!=n.from||t!=n.to)return!1;let r=Sv(s.state,i);return r?(s.dispatch(r),!0):!1}const wv=({state:s,dispatch:e})=>{let i=tp(s,s.selection.main.head).brackets||or.brackets,n=null,r=s.changeByRange(o=>{if(o.empty){let a=kv(s.doc,o.head);for(let l of i)if(l==a&&Vr(s.doc,o.head)==ep(xe(l,0)))return{changes:{from:o.head-l.length,to:o.head+l.length},range:b.cursor(o.head-l.length),annotations:N.userEvent.of("delete")}}return{range:n=o}});return n||e(s.update(r,{scrollIntoView:!0})),!n},xv=[{key:"Backspace",run:wv}];function Sv(s,e){let t=tp(s,s.selection.main.head),i=t.brackets||or.brackets;for(let n of i){let r=ep(xe(n,0));if(e==n)return r==n?Mv(s,n,i.indexOf(n+n+n)>-1):Cv(s,n,r,t.before||or.before);if(e==r&&ip(s,s.selection.main.from))return Av(s,n,r)}return null}function ip(s,e){let t=!1;return s.field(Qu).between(0,s.doc.length,i=>{i==e&&(t=!0)}),t}function Vr(s,e){let t=s.sliceString(e,e+2);return t.slice(0,Ue(xe(t,0)))}function kv(s,e){let t=s.sliceString(e-2,e);return Ue(xe(t,0))==t.length?t:t.slice(1)}function Cv(s,e,t,i){let n=null,r=s.changeByRange(o=>{if(!o.empty)return{changes:[{insert:e,from:o.from},{insert:t,from:o.to}],effects:ni.of(o.to+e.length),range:b.range(o.anchor+e.length,o.head+e.length)};let a=Vr(s.doc,o.head);return!a||/\s/.test(a)||i.indexOf(a)>-1?{changes:{insert:e+t,from:o.head},effects:ni.of(o.head+e.length),range:b.cursor(o.head+e.length)}:{range:n=o}});return n?null:s.update(r,{scrollIntoView:!0,annotations:N.userEvent.of("input")})}function Av(s,e,t){let i=null,n=s.selection.ranges.map(r=>r.empty&&Vr(s.doc,r.head)==t?b.cursor(r.head+t.length):i=r);return i?null:s.update({selection:b.create(n,s.selection.mainIndex),scrollIntoView:!0,effects:s.selection.ranges.map(({from:r})=>Al.of(r))})}function Mv(s,e,t){let i=null,n=s.changeByRange(r=>{if(!r.empty)return{changes:[{insert:e,from:r.from},{insert:e,from:r.to}],effects:ni.of(r.to+e.length),range:b.range(r.anchor+e.length,r.head+e.length)};let o=r.head,a=Vr(s.doc,o);if(a==e){if(Nc(s,o))return{changes:{insert:e+e,from:o},effects:ni.of(o+e.length),range:b.cursor(o+e.length)};if(ip(s,o)){let l=t&&s.sliceDoc(o,o+e.length*3)==e+e+e;return{range:b.cursor(o+e.length*(l?3:1)),effects:Al.of(o)}}}else{if(t&&s.sliceDoc(o-2*e.length,o)==e+e&&Nc(s,o-2*e.length))return{changes:{insert:e+e+e+e,from:o},effects:ni.of(o+e.length),range:b.cursor(o+e.length)};if(s.charCategorizer(o)(a)!=qe.Word){let l=s.sliceDoc(o-1,o);if(l!=e&&s.charCategorizer(o)(l)!=qe.Word)return{changes:{insert:e+e,from:o},effects:ni.of(o+e.length),range:b.cursor(o+e.length)}}}return{range:i=r}});return i?null:s.update(n,{scrollIntoView:!0,annotations:N.userEvent.of("input")})}function Nc(s,e){let t=je(s).resolve(e+1);return t.parent&&t.from==e}const zc=E.define({combine(s){let e,t;for(let i of s)e=e||i.topContainer,t=t||i.bottomContainer;return{topContainer:e,bottomContainer:t}}});function Os(s,e){let t=s.plugin(sp),i=t?t.specs.indexOf(e):-1;return i>-1?t.panels[i]:null}const sp=fe.fromClass(class{constructor(s){this.input=s.state.facet(Ds),this.specs=this.input.filter(t=>t),this.panels=this.specs.map(t=>t(s));let e=s.state.facet(zc);this.top=new xn(s,!0,e.topContainer),this.bottom=new xn(s,!1,e.bottomContainer),this.top.sync(this.panels.filter(t=>t.top)),this.bottom.sync(this.panels.filter(t=>!t.top));for(let t of this.panels)t.dom.classList.add("cm-panel"),t.class&&t.dom.classList.add(t.class),t.mount&&t.mount()}update(s){let e=s.state.facet(zc);this.top.container!=e.topContainer&&(this.top.sync([]),this.top=new xn(s.view,!0,e.topContainer)),this.bottom.container!=e.bottomContainer&&(this.bottom.sync([]),this.bottom=new xn(s.view,!1,e.bottomContainer)),this.top.syncClasses(),this.bottom.syncClasses();let t=s.state.facet(Ds);if(t!=this.input){let i=t.filter(l=>l),n=[],r=[],o=[],a=[];for(let l of i){let h=this.specs.indexOf(l),c;h<0?(c=l(s.view),a.push(c)):(c=this.panels[h],c.update&&c.update(s)),n.push(c),(c.top?r:o).push(c)}this.specs=i,this.panels=n,this.top.sync(r),this.bottom.sync(o);for(let l of a)l.dom.classList.add("cm-panel"),l.class&&l.dom.classList.add(l.class),l.mount&&l.mount()}else for(let i of this.panels)i.update&&i.update(s)}destroy(){this.top.sync([]),this.bottom.sync([])}},{provide:_e.scrollMargins.from(s=>({top:s.top.scrollMargin(),bottom:s.bottom.scrollMargin()}))});class xn{constructor(e,t,i){this.view=e,this.top=t,this.container=i,this.dom=void 0,this.classes="",this.panels=[],this.syncClasses()}sync(e){this.panels=e,this.syncDOM()}syncDOM(){if(this.panels.length==0){this.dom&&(this.dom.remove(),this.dom=void 0);return}if(!this.dom){this.dom=document.createElement("div"),this.dom.className=this.top?"cm-panels cm-panels-top":"cm-panels cm-panels-bottom",this.dom.style[this.top?"top":"bottom"]="0";let t=this.container||this.view.dom;t.insertBefore(this.dom,this.top?t.firstChild:null)}let e=this.dom.firstChild;for(let t of this.panels)if(t.dom.parentNode==this.dom){for(;e!=t.dom;)e=Fc(e);e=e.nextSibling}else this.dom.insertBefore(t.dom,e);for(;e;)e=Fc(e)}scrollMargin(){return!this.dom||this.container?0:Math.max(0,this.top?this.dom.getBoundingClientRect().bottom-Math.max(0,this.view.scrollDOM.getBoundingClientRect().top):Math.min(innerHeight,this.view.scrollDOM.getBoundingClientRect().bottom)-this.dom.getBoundingClientRect().top)}syncClasses(){if(!(!this.container||this.classes==this.view.themeClasses)){for(let e of this.classes.split(" "))e&&this.container.classList.remove(e);for(let e of(this.classes=this.view.themeClasses).split(" "))e&&this.container.classList.add(e)}}}function Fc(s){let e=s.nextSibling;return s.remove(),e}const $v=L.baseTheme({".cm-panels":{boxSizing:"border-box",position:"sticky",left:0,right:0},"&light .cm-panels":{backgroundColor:"#f5f5f5",color:"black"},"&light .cm-panels-top":{borderBottom:"1px solid #ddd"},"&light .cm-panels-bottom":{borderTop:"1px solid #ddd"},"&dark .cm-panels":{backgroundColor:"#333338",color:"white"}}),Ds=E.define({enables:[sp,$v]});function K(){var s=arguments[0];typeof s=="string"&&(s=document.createElement(s));var e=1,t=arguments[1];if(t&&typeof t=="object"&&t.nodeType==null&&!Array.isArray(t)){for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var n=t[i];typeof n=="string"?s.setAttribute(i,n):n!=null&&(s[i]=n)}e++}for(;e<arguments.length;e++)np(s,arguments[e]);return s}function np(s,e){if(typeof e=="string")s.appendChild(document.createTextNode(e));else if(e!=null)if(e.nodeType!=null)s.appendChild(e);else if(Array.isArray(e))for(var t=0;t<e.length;t++)np(s,e[t]);else throw new RangeError("Unsupported child node: "+e)}const Uc=typeof String.prototype.normalize=="function"?s=>s.normalize("NFKD"):s=>s;class Is{constructor(e,t,i=0,n=e.length,r){this.value={from:0,to:0},this.done=!1,this.matches=[],this.buffer="",this.bufferPos=0,this.iter=e.iterRange(i,n),this.bufferStart=i,this.normalize=r?o=>r(Uc(o)):Uc,this.query=this.normalize(t)}peek(){if(this.bufferPos==this.buffer.length){if(this.bufferStart+=this.buffer.length,this.iter.next(),this.iter.done)return-1;this.bufferPos=0,this.buffer=this.iter.value}return xe(this.buffer,this.bufferPos)}next(){for(;this.matches.length;)this.matches.pop();return this.nextOverlapping()}nextOverlapping(){for(;;){let e=this.peek();if(e<0)return this.done=!0,this;let t=rl(e),i=this.bufferStart+this.bufferPos;this.bufferPos+=Ue(e);let n=this.normalize(t);for(let r=0,o=i;;r++){let a=n.charCodeAt(r),l=this.match(a,o);if(l)return this.value=l,this;if(r==n.length-1)break;o==i&&r<t.length&&t.charCodeAt(r)==a&&o++}}}match(e,t){let i=null;for(let n=0;n<this.matches.length;n+=2){let r=this.matches[n],o=!1;this.query.charCodeAt(r)==e&&(r==this.query.length-1?i={from:this.matches[n+1],to:t+1}:(this.matches[n]++,o=!0)),o||(this.matches.splice(n,2),n-=2)}return this.query.charCodeAt(0)==e&&(this.query.length==1?i={from:t,to:t+1}:this.matches.push(1,t)),i}}const rp={from:-1,to:-1,match:/.*/.exec("")},$l="gm"+(/x/.unicode==null?"":"u");class Tv{constructor(e,t,i,n=0,r=e.length){if(this.to=r,this.curLine="",this.done=!1,this.value=rp,/\\[sWDnr]|\n|\r|\[\^/.test(t))return new Ev(e,t,i,n,r);this.re=new RegExp(t,$l+(i!=null&&i.ignoreCase?"i":"")),this.iter=e.iter();let o=e.lineAt(n);this.curLineStart=o.from,this.matchPos=n,this.getLine(this.curLineStart)}getLine(e){this.iter.next(e),this.iter.lineBreak?this.curLine="":(this.curLine=this.iter.value,this.curLineStart+this.curLine.length>this.to&&(this.curLine=this.curLine.slice(0,this.to-this.curLineStart)),this.iter.next())}nextLine(){this.curLineStart=this.curLineStart+this.curLine.length+1,this.curLineStart>this.to?this.curLine="":this.getLine(0)}next(){for(let e=this.matchPos-this.curLineStart;;){this.re.lastIndex=e;let t=this.matchPos<=this.to&&this.re.exec(this.curLine);if(t){let i=this.curLineStart+t.index,n=i+t[0].length;if(this.matchPos=n+(i==n?1:0),i==this.curLine.length&&this.nextLine(),i<n||i>this.value.to)return this.value={from:i,to:n,match:t},this;e=this.matchPos-this.curLineStart}else if(this.curLineStart+this.curLine.length<this.to)this.nextLine(),e=0;else return this.done=!0,this}}}const _o=new WeakMap;class Pi{constructor(e,t){this.from=e,this.text=t}get to(){return this.from+this.text.length}static get(e,t,i){let n=_o.get(e);if(!n||n.from>=i||n.to<=t){let a=new Pi(t,e.sliceString(t,i));return _o.set(e,a),a}if(n.from==t&&n.to==i)return n;let{text:r,from:o}=n;return o>t&&(r=e.sliceString(t,o)+r,o=t),n.to<i&&(r+=e.sliceString(n.to,i)),_o.set(e,new Pi(o,r)),new Pi(t,r.slice(t-o,i-o))}}class Ev{constructor(e,t,i,n,r){this.text=e,this.to=r,this.done=!1,this.value=rp,this.matchPos=n,this.re=new RegExp(t,$l+(i!=null&&i.ignoreCase?"i":"")),this.flat=Pi.get(e,n,this.chunkEnd(n+5e3))}chunkEnd(e){return e>=this.to?this.to:this.text.lineAt(e).to}next(){for(;;){let e=this.re.lastIndex=this.matchPos-this.flat.from,t=this.re.exec(this.flat.text);if(t&&!t[0]&&t.index==e&&(this.re.lastIndex=e+1,t=this.re.exec(this.flat.text)),t&&this.flat.to<this.to&&t.index+t[0].length>this.flat.text.length-10&&(t=null),t){let i=this.flat.from+t.index,n=i+t[0].length;return this.value={from:i,to:n,match:t},this.matchPos=n+(i==n?1:0),this}else{if(this.flat.to==this.to)return this.done=!0,this;this.flat=Pi.get(this.text,this.flat.from,this.chunkEnd(this.flat.from+this.flat.text.length*2))}}}}function Pv(s){try{return new RegExp(s,$l),!0}catch{return!1}}function Ba(s){let e=K("input",{class:"cm-textfield",name:"line"}),t=K("form",{class:"cm-gotoLine",onkeydown:n=>{n.keyCode==27?(n.preventDefault(),s.dispatch({effects:ar.of(!1)}),s.focus()):n.keyCode==13&&(n.preventDefault(),i())},onsubmit:n=>{n.preventDefault(),i()}},K("label",s.state.phrase("Go to line"),": ",e)," ",K("button",{class:"cm-button",type:"submit"},s.state.phrase("go")));function i(){let n=/^([+-])?(\d+)?(:\d+)?(%)?$/.exec(e.value);if(!n)return;let{state:r}=s,o=r.doc.lineAt(r.selection.main.head),[,a,l,h,c]=n,d=h?+h.slice(1):0,f=l?+l:o.number;if(l&&c){let p=f/100;a&&(p=p*(a=="-"?-1:1)+o.number/r.doc.lines),f=Math.round(r.doc.lines*p)}else l&&a&&(f=f*(a=="-"?-1:1)+o.number);let u=r.doc.line(Math.max(1,Math.min(r.doc.lines,f)));s.dispatch({effects:ar.of(!1),selection:b.cursor(u.from+Math.max(0,Math.min(d,u.length))),scrollIntoView:!0}),s.focus()}return{dom:t,pos:-10}}const ar=B.define(),Wc=Me.define({create(){return!0},update(s,e){for(let t of e.effects)t.is(ar)&&(s=t.value);return s},provide:s=>Ds.from(s,e=>e?Ba:null)}),_v=s=>{let e=Os(s,Ba);if(!e){let t=[ar.of(!0)];s.state.field(Wc,!1)==null&&t.push(B.appendConfig.of([Wc,Lv])),s.dispatch({effects:t}),e=Os(s,Ba)}return e&&e.dom.querySelector("input").focus(),!0},Lv=L.baseTheme({".cm-panel.cm-gotoLine":{padding:"2px 6px 4px","& label":{fontSize:"80%"}}}),Rv={highlightWordAroundCursor:!1,minSelectionLength:1,maxMatches:100},op=E.define({combine(s){return Gt(s,Rv,{highlightWordAroundCursor:(e,t)=>e||t,minSelectionLength:Math.min,maxMatches:Math.min})}});function Ov(s){let e=[Nv,Bv];return s&&e.push(op.of(s)),e}const Dv=T.mark({class:"cm-selectionMatch"}),Iv=T.mark({class:"cm-selectionMatch cm-selectionMatch-main"}),Bv=fe.fromClass(class{constructor(s){this.decorations=this.getDeco(s)}update(s){(s.selectionSet||s.docChanged||s.viewportChanged)&&(this.decorations=this.getDeco(s.view))}getDeco(s){let e=s.state.facet(op),{state:t}=s,i=t.selection;if(i.ranges.length>1)return T.none;let n=i.main,r,o=null;if(n.empty){if(!e.highlightWordAroundCursor)return T.none;let l=t.wordAt(n.head);if(!l)return T.none;o=t.charCategorizer(n.head),r=t.sliceDoc(l.from,l.to)}else{let l=n.to-n.from;if(l<e.minSelectionLength||l>200||(r=t.sliceDoc(n.from,n.to).trim(),!r))return T.none}let a=[];for(let l of s.visibleRanges){let h=new Is(t.doc,r,l.from,l.to);for(;!h.nextOverlapping().done;){let{from:c,to:d}=h.value;if((!o||(c==0||o(t.sliceDoc(c-1,c))!=qe.Word)&&(d==t.doc.length||o(t.sliceDoc(d,d+1))!=qe.Word))&&(o&&c<=n.from&&d>=n.to?a.push(Iv.range(c,d)):(c>=n.to||d<=n.from)&&a.push(Dv.range(c,d)),a.length>e.maxMatches))return T.none}}return T.set(a)}},{decorations:s=>s.decorations}),Nv=L.baseTheme({".cm-selectionMatch":{backgroundColor:"#99ff7780"},".cm-searchMatch .cm-selectionMatch":{backgroundColor:"transparent"}}),zv=({state:s,dispatch:e})=>{let{selection:t}=s,i=b.create(t.ranges.map(n=>s.wordAt(n.head)||b.cursor(n.head)),t.mainIndex);return i.eq(t)?!1:(e(s.update({selection:i})),!0)};function Fv(s,e){let{ranges:t}=s.selection,i=new Is(s.doc,e,t[t.length-1].to).next();if(!i.done)return i.value;let n=new Is(s.doc,e,0,Math.max(0,t[t.length-1].from-1));for(;!n.next().done;)if(!t.some(r=>r.from===n.value.from))return n.value;return null}const Uv=({state:s,dispatch:e})=>{let{ranges:t}=s.selection;if(t.some(r=>r.from===r.to))return zv({state:s,dispatch:e});let i=s.sliceDoc(t[0].from,t[0].to);if(s.selection.ranges.some(r=>s.sliceDoc(r.from,r.to)!=i))return!1;let n=Fv(s,i);return n?(e(s.update({selection:s.selection.addRange(b.range(n.from,n.to)),scrollIntoView:!0})),!0):!1},Wv=E.define({combine(s){return{top:s.some(e=>e.top)}}});class ap{constructor(e,t,i){this.search=e,this.replace=t,this.caseInsensitive=i}eq(e){return this.search==e.search&&this.replace==e.replace&&this.caseInsensitive==e.caseInsensitive&&this.constructor==e.constructor}}class lp extends ap{constructor(e,t,i){super(e,t,i),this.unquoted=e.replace(/\\([nrt\\])/g,(n,r)=>r=="n"?`
`:r=="r"?"\r":r=="t"?"	":"\\")}cursor(e,t=0,i=e.length){return new Is(e,this.unquoted,t,i,this.caseInsensitive?n=>n.toLowerCase():void 0)}nextMatch(e,t,i){let n=this.cursor(e,i).nextOverlapping();return n.done&&(n=this.cursor(e,0,t).nextOverlapping()),n.done?null:n.value}prevMatchInRange(e,t,i){for(let n=i;;){let r=Math.max(t,n-1e4-this.unquoted.length),o=this.cursor(e,r,n),a=null;for(;!o.nextOverlapping().done;)a=o.value;if(a)return a;if(r==t)return null;n-=1e4}}prevMatch(e,t,i){return this.prevMatchInRange(e,0,t)||this.prevMatchInRange(e,i,e.length)}getReplacement(e){return this.replace}matchAll(e,t){let i=this.cursor(e),n=[];for(;!i.next().done;){if(n.length>=t)return null;n.push(i.value)}return n}highlight(e,t,i,n){let r=this.cursor(e,Math.max(0,t-this.unquoted.length),Math.min(i+this.unquoted.length,e.length));for(;!r.next().done;)n(r.value.from,r.value.to)}get valid(){return!!this.search}}class qc extends ap{constructor(e,t,i){super(e,t,i),this.valid=!!e&&Pv(e)}cursor(e,t=0,i=e.length){return new Tv(e,this.search,this.caseInsensitive?{ignoreCase:!0}:void 0,t,i)}nextMatch(e,t,i){let n=this.cursor(e,i).next();return n.done&&(n=this.cursor(e,0,t).next()),n.done?null:n.value}prevMatchInRange(e,t,i){for(let n=1;;n++){let r=Math.max(t,i-n*1e4),o=this.cursor(e,r,i),a=null;for(;!o.next().done;)a=o.value;if(a&&(r==t||a.from>r+10))return a;if(r==t)return null}}prevMatch(e,t,i){return this.prevMatchInRange(e,0,t)||this.prevMatchInRange(e,i,e.length)}getReplacement(e){return this.replace.replace(/\$([$&\d+])/g,(t,i)=>i=="$"?"$":i=="&"?e.match[0]:i!="0"&&+i<e.match.length?e.match[i]:t)}matchAll(e,t){let i=this.cursor(e),n=[];for(;!i.next().done;){if(n.length>=t)return null;n.push(i.value)}return n}highlight(e,t,i,n){let r=this.cursor(e,Math.max(0,t-250),Math.min(i+250,e.length));for(;!r.next().done;)n(r.value.from,r.value.to)}}const Tl=B.define(),El=B.define(),Dt=Me.define({create(s){return new Lo(hp(s),cr)},update(s,e){for(let t of e.effects)t.is(Tl)?s=new Lo(t.value,s.panel):t.is(El)&&(s=new Lo(s.query,t.value?cr:null));return s},provide:s=>Ds.from(s,e=>e.panel)});class Lo{constructor(e,t){this.query=e,this.panel=t}}const qv=T.mark({class:"cm-searchMatch"}),Hv=T.mark({class:"cm-searchMatch cm-searchMatch-selected"}),Vv=fe.fromClass(class{constructor(s){this.view=s,this.decorations=this.highlight(s.state.field(Dt))}update(s){let e=s.state.field(Dt);(e!=s.startState.field(Dt)||s.docChanged||s.selectionSet)&&(this.decorations=this.highlight(e))}highlight({query:s,panel:e}){if(!e||!s.valid)return T.none;let{view:t}=this,i=new Nt;for(let n=0,r=t.visibleRanges,o=r.length;n<o;n++){let{from:a,to:l}=r[n];for(;n<o-1&&l>r[n+1].from-2*250;)l=r[++n].to;s.highlight(t.state.doc,a,l,(h,c)=>{let d=t.state.selection.ranges.some(f=>f.from==h&&f.to==c);i.add(h,c,d?Hv:qv)})}return i.finish()}},{decorations:s=>s.decorations});function nn(s){return e=>{let t=e.state.field(Dt,!1);return t&&t.query.valid?s(e,t):cp(e)}}const lr=nn((s,{query:e})=>{let{from:t,to:i}=s.state.selection.main,n=e.nextMatch(s.state.doc,t,i);return!n||n.from==t&&n.to==i?!1:(s.dispatch({selection:{anchor:n.from,head:n.to},scrollIntoView:!0,effects:Pl(s,n)}),!0)}),hr=nn((s,{query:e})=>{let{state:t}=s,{from:i,to:n}=t.selection.main,r=e.prevMatch(t.doc,i,n);return r?(s.dispatch({selection:{anchor:r.from,head:r.to},scrollIntoView:!0,effects:Pl(s,r)}),!0):!1}),jv=nn((s,{query:e})=>{let t=e.matchAll(s.state.doc,1e3);return!t||!t.length?!1:(s.dispatch({selection:b.create(t.map(i=>b.range(i.from,i.to)))}),!0)}),Gv=({state:s,dispatch:e})=>{let t=s.selection;if(t.ranges.length>1||t.main.empty)return!1;let{from:i,to:n}=t.main,r=[],o=0;for(let a=new Is(s.doc,s.sliceDoc(i,n));!a.next().done;){if(r.length>1e3)return!1;a.value.from==i&&(o=r.length),r.push(b.range(a.value.from,a.value.to))}return e(s.update({selection:b.create(r,o)})),!0},Hc=nn((s,{query:e})=>{let{state:t}=s,{from:i,to:n}=t.selection.main,r=e.nextMatch(t.doc,i,i);if(!r)return!1;let o=[],a,l;if(r.from==i&&r.to==n&&(l=t.toText(e.getReplacement(r)),o.push({from:r.from,to:r.to,insert:l}),r=e.nextMatch(t.doc,r.from,r.to)),r){let h=o.length==0||o[0].from>=r.to?0:r.to-r.from-l.length;a={anchor:r.from-h,head:r.to-h}}return s.dispatch({changes:o,selection:a,scrollIntoView:!!a,effects:r?Pl(s,r):void 0}),!0}),Kv=nn((s,{query:e})=>{let t=e.matchAll(s.state.doc,1e9).map(i=>{let{from:n,to:r}=i;return{from:n,to:r,insert:e.getReplacement(i)}});return t.length?(s.dispatch({changes:t}),!0):!1});function cr(s){let{query:e}=s.state.field(Dt);return{dom:Jv({view:s,query:e,updateQuery(t){e.eq(t)||(e=t,s.dispatch({effects:Tl.of(e)}))}}),mount(){this.dom.querySelector("[name=search]").select()},pos:80,top:s.state.facet(Wv).top}}function hp(s,e){let t=s.selection.main,i=t.empty||t.to>t.from+100?"":s.sliceDoc(t.from,t.to);return e&&!i?e:new lp(i.replace(/\n/g,"\\n"),"",(e==null?void 0:e.caseInsensitive)||!1)}const cp=s=>{let e=s.state.field(Dt,!1);if(e&&e.panel){let t=Os(s,cr);if(!t)return!1;t.dom.querySelector("[name=search]").focus()}else s.dispatch({effects:[El.of(!0),e?Tl.of(hp(s.state,e.query)):B.appendConfig.of(Zv)]});return!0},dp=s=>{let e=s.state.field(Dt,!1);if(!e||!e.panel)return!1;let t=Os(s,cr);return t&&t.dom.contains(s.root.activeElement)&&s.focus(),s.dispatch({effects:El.of(!1)}),!0},Yv=[{key:"Mod-f",run:cp,scope:"editor search-panel"},{key:"F3",run:lr,shift:hr,scope:"editor search-panel"},{key:"Mod-g",run:lr,shift:hr,scope:"editor search-panel"},{key:"Escape",run:dp,scope:"editor search-panel"},{key:"Mod-Shift-l",run:Gv},{key:"Alt-g",run:_v},{key:"Mod-d",run:Uv}];function Jv(s){function e(c){return s.view.state.phrase(c)}let t=K("input",{value:s.query.search,placeholder:e("Find"),"aria-label":e("Find"),class:"cm-textfield",name:"search",onchange:o,onkeyup:o}),i=K("input",{value:s.query.replace,placeholder:e("Replace"),"aria-label":e("Replace"),class:"cm-textfield",name:"replace",onchange:o,onkeyup:o}),n=K("input",{type:"checkbox",name:"case",checked:!s.query.caseInsensitive,onchange:o}),r=K("input",{type:"checkbox",name:"re",checked:s.query instanceof qc,onchange:o});function o(){s.updateQuery(new(r.checked?qc:lp)(t.value,i.value,!n.checked))}function a(c){S1(s.view,c,"search-panel")?c.preventDefault():c.keyCode==13&&c.target==t?(c.preventDefault(),(c.shiftKey?hr:lr)(s.view)):c.keyCode==13&&c.target==i&&(c.preventDefault(),Hc(s.view))}function l(c,d,f){return K("button",{class:"cm-button",name:c,onclick:d},f)}return K("div",{onkeydown:a,class:"cm-search"},[t,l("next",()=>lr(s.view),[e("next")]),l("prev",()=>hr(s.view),[e("previous")]),l("select",()=>jv(s.view),[e("all")]),K("label",null,[n,e("match case")]),K("label",null,[r,e("regexp")]),K("br"),i,l("replace",()=>Hc(s.view),[e("replace")]),l("replaceAll",()=>Kv(s.view),[e("replace all")]),K("button",{name:"close",onclick:()=>dp(s.view),"aria-label":e("close")},["\xD7"])])}const Sn=30,kn=/[\s\.,:;?!]/;function Pl(s,{from:e,to:t}){let i=s.state.doc.lineAt(e).from,n=s.state.doc.lineAt(t).to,r=Math.max(i,e-Sn),o=Math.min(n,t+Sn),a=s.state.sliceDoc(r,o);if(r!=i){for(let l=0;l<Sn;l++)if(!kn.test(a[l+1])&&kn.test(a[l])){a=a.slice(l);break}}if(o!=n){for(let l=a.length-1;l>a.length-Sn;l--)if(!kn.test(a[l-1])&&kn.test(a[l])){a=a.slice(0,l);break}}return L.announce.of(`${s.state.phrase("current match")}. ${a} ${s.state.phrase("on line")} ${s.state.doc.lineAt(e).number}`)}const Xv=L.baseTheme({".cm-panel.cm-search":{padding:"2px 6px 4px",position:"relative","& [name=close]":{position:"absolute",top:"0",right:"4px",backgroundColor:"inherit",border:"none",font:"inherit",padding:0,margin:0},"& input, & button, & label":{margin:".2em .6em .2em 0"},"& input[type=checkbox]":{marginRight:".2em"},"& label":{fontSize:"80%",whiteSpace:"pre"}},"&light .cm-searchMatch":{backgroundColor:"#ffff0054"},"&dark .cm-searchMatch":{backgroundColor:"#00ffff8a"},"&light .cm-searchMatch-selected":{backgroundColor:"#ff6a0054"},"&dark .cm-searchMatch-selected":{backgroundColor:"#ff00ff8a"}}),Zv=[Dt,Zs.override(Vv),Xv],Qv=typeof navigator!="undefined"&&!/Edge\/(\d+)/.exec(navigator.userAgent)&&/Apple Computer/.test(navigator.vendor)&&(/Mobile\/\w+/.test(navigator.userAgent)||navigator.maxTouchPoints>2),Vc="-10000px",ew=fe.fromClass(class{constructor(s){this.view=s,this.inView=!0,this.measureReq={read:this.readMeasure.bind(this),write:this.writeMeasure.bind(this),key:this},this.input=s.state.facet(dr),this.tooltips=this.input.filter(e=>e),this.tooltipViews=this.tooltips.map(e=>this.createTooltip(e))}update(s){let e=s.state.facet(dr);if(e==this.input)for(let t of this.tooltipViews)t.update&&t.update(s);else{let t=e.filter(n=>n),i=[];for(let n=0;n<t.length;n++){let r=t[n],o=-1;if(!!r){for(let a=0;a<this.tooltips.length;a++){let l=this.tooltips[a];l&&l.create==r.create&&(o=a)}if(o<0)i[n]=this.createTooltip(r);else{let a=i[n]=this.tooltipViews[o];a.update&&a.update(s)}}}for(let n of this.tooltipViews)i.indexOf(n)<0&&n.dom.remove();this.input=e,this.tooltips=t,this.tooltipViews=i,this.maybeMeasure()}}createTooltip(s){let e=s.create(this.view);return e.dom.classList.add("cm-tooltip"),s.class&&e.dom.classList.add(s.class),e.dom.style.top=Vc,this.view.dom.appendChild(e.dom),e.mount&&e.mount(this.view),e}destroy(){for(let{dom:s}of this.tooltipViews)s.remove()}readMeasure(){return{editor:this.view.dom.getBoundingClientRect(),pos:this.tooltips.map(s=>this.view.coordsAtPos(s.pos)),size:this.tooltipViews.map(({dom:s})=>s.getBoundingClientRect()),innerWidth:window.innerWidth,innerHeight:window.innerHeight}}writeMeasure(s){let{editor:e}=s;for(let t=0;t<this.tooltipViews.length;t++){let i=this.tooltips[t],n=this.tooltipViews[t],{dom:r}=n,o=s.pos[t],a=s.size[t];if(!o||o.bottom<=e.top||o.top>=e.bottom||o.right<=e.left||o.left>=e.right){r.style.top=Vc;continue}let l=a.right-a.left,h=a.bottom-a.top,c=this.view.textDirection==F.LTR?Math.min(o.left,s.innerWidth-l):Math.max(0,o.left-l),d=!!i.above;!i.strictSide&&(d?o.top-(a.bottom-a.top)<0:o.bottom+(a.bottom-a.top)>s.innerHeight)&&(d=!d),Qv?(r.style.top=(d?o.top-h:o.bottom)-e.top+"px",r.style.left=c-e.left+"px",r.style.position="absolute"):(r.style.top=(d?o.top-h:o.bottom)+"px",r.style.left=c+"px"),r.classList.toggle("cm-tooltip-above",d),r.classList.toggle("cm-tooltip-below",!d),n.positioned&&n.positioned()}}maybeMeasure(){this.tooltips.length&&((this.view.inView||this.inView)&&this.view.requestMeasure(this.measureReq),this.inView=this.view.inView)}},{eventHandlers:{scroll(){this.maybeMeasure()}}}),tw=L.baseTheme({".cm-tooltip":{position:"fixed",zIndex:100},"&light .cm-tooltip":{border:"1px solid #ddd",backgroundColor:"#f5f5f5"},"&dark .cm-tooltip":{backgroundColor:"#333338",color:"white"}}),dr=E.define({enables:[ew,tw]}),Ro=750,iw=6;class sw{constructor(e,t,i,n){this.view=e,this.source=t,this.field=i,this.setHover=n,this.lastMouseMove=null,this.hoverTimeout=-1,this.restartTimeout=-1,this.pending=null,this.checkHover=this.checkHover.bind(this),e.dom.addEventListener("mouseleave",this.mouseleave=this.mouseleave.bind(this)),e.dom.addEventListener("mousemove",this.mousemove=this.mousemove.bind(this))}update(){this.pending&&(this.pending=null,clearTimeout(this.restartTimeout),this.restartTimeout=setTimeout(()=>this.startHover(),20))}get active(){return this.view.state.field(this.field)}checkHover(){if(this.hoverTimeout=-1,this.active)return;let e=Date.now(),t=this.lastMouseMove;e-t.timeStamp<Ro?this.hoverTimeout=setTimeout(this.checkHover,Ro-(e-t.timeStamp)):this.startHover()}startHover(){var e;clearTimeout(this.restartTimeout);let t=this.lastMouseMove,i={x:t.clientX,y:t.clientY},n=this.view.contentDOM.contains(t.target)?this.view.posAtCoords(i):null;if(n==null)return;let r=this.view.coordsAtPos(n);if(r==null||i.y<r.top||i.y>r.bottom||i.x<r.left-this.view.defaultCharacterWidth||i.x>r.right+this.view.defaultCharacterWidth)return;let o=this.view.bidiSpans(this.view.state.doc.lineAt(n)).find(h=>h.from<=n&&h.to>=n),a=o&&o.dir==F.RTL?-1:1,l=this.source(this.view,n,i.x<r.left?-a:a);if(!((e=l)===null||e===void 0)&&e.then){let h=this.pending={pos:n};l.then(c=>{this.pending==h&&(this.pending=null,c&&this.view.dispatch({effects:this.setHover.of(c)}))},c=>tt(this.view.state,c,"hover tooltip"))}else l&&this.view.dispatch({effects:this.setHover.of(l)})}mousemove(e){var t;this.lastMouseMove=e,this.hoverTimeout<0&&(this.hoverTimeout=setTimeout(this.checkHover,Ro));let i=this.active;if(i&&!nw(e.target)||this.pending){let{pos:n}=i||this.pending,r=(t=i==null?void 0:i.end)!==null&&t!==void 0?t:n;(n==r?this.view.posAtCoords({x:e.clientX,y:e.clientY})!=n:!rw(this.view,n,r,e.clientX,e.clientY,iw))&&(this.view.dispatch({effects:this.setHover.of(null)}),this.pending=null)}}mouseleave(){clearTimeout(this.hoverTimeout),this.hoverTimeout=-1,this.active&&this.view.dispatch({effects:this.setHover.of(null)})}destroy(){clearTimeout(this.hoverTimeout),this.view.dom.removeEventListener("mouseleave",this.mouseleave),this.view.dom.removeEventListener("mousemove",this.mousemove)}}function nw(s){for(let e=s;e;e=e.parentNode)if(e.nodeType==1&&e.classList.contains("cm-tooltip"))return!0;return!1}function rw(s,e,t,i,n,r){let o=document.createRange(),a=s.domAtPos(e),l=s.domAtPos(t);o.setEnd(l.node,l.offset),o.setStart(a.node,a.offset);let h=o.getClientRects();o.detach();for(let c=0;c<h.length;c++){let d=h[c];if(Math.max(d.top-n,n-d.bottom,d.left-i,i-d.right)<=r)return!0}return!1}function ow(s,e={}){const t=B.define(),i=Me.define({create(){return null},update(n,r){if(n&&e.hideOnChange&&(r.docChanged||r.selection))return null;for(let o of r.effects)if(o.is(t))return o.value;if(n&&r.docChanged){let o=r.changes.mapPos(n.pos,-1,Ee.TrackDel);if(o==null)return null;let a=Object.assign(Object.create(null),n);return a.pos=o,n.end!=null&&(a.end=r.changes.mapPos(n.end)),a}return n},provide:n=>dr.from(n)});return[i,fe.define(n=>new sw(n,s,i,t))]}class aw{constructor(e,t,i){this.state=e,this.pos=t,this.explicit=i,this.abortListeners=[]}tokenBefore(e){let t=je(this.state).resolve(this.pos,-1);for(;t&&e.indexOf(t.name)<0;)t=t.parent;return t?{from:t.from,to:this.pos,text:this.state.sliceDoc(t.from,this.pos),type:t.type}:null}matchBefore(e){let t=this.state.doc.lineAt(this.pos),i=Math.max(t.from,this.pos-250),n=t.text.slice(i-t.from,this.pos-t.from),r=n.search(fp(e,!1));return r<0?null:{from:i+r,to:this.pos,text:n.slice(r)}}get aborted(){return this.abortListeners==null}addEventListener(e,t){e=="abort"&&this.abortListeners&&this.abortListeners.push(t)}}function jc(s){let e=Object.keys(s).join(""),t=/\w/.test(e);return t&&(e=e.replace(/\w/g,"")),`[${t?"\\w":""}${e.replace(/[^\w\s]/g,"\\$&")}]`}function lw(s){let e=Object.create(null),t=Object.create(null);for(let{label:n}of s){e[n[0]]=!0;for(let r=1;r<n.length;r++)t[n[r]]=!0}let i=jc(e)+jc(t)+"*$";return[new RegExp("^"+i),new RegExp(i)]}function hw(s){let e=s.map(n=>typeof n=="string"?{label:n}:n),[t,i]=e.every(n=>/^\w+$/.test(n.label))?[/\w*$/,/\w+$/]:lw(e);return n=>{let r=n.matchBefore(i);return r||n.explicit?{from:r?r.from:n.pos,options:e,span:t}:null}}class Gc{constructor(e,t,i){this.completion=e,this.source=t,this.match=i}}function Gi(s){return s.selection.main.head}function fp(s,e){var t;let{source:i}=s,n=e&&i[0]!="^",r=i[i.length-1]!="$";return!n&&!r?s:new RegExp(`${n?"^":""}(?:${i})${r?"$":""}`,(t=s.flags)!==null&&t!==void 0?t:s.ignoreCase?"i":"")}function up(s,e){let t=e.completion.apply||e.completion.label,i=e.source;typeof t=="string"?s.dispatch({changes:{from:i.from,to:i.to,insert:t},selection:{anchor:i.from+t.length}}):t(s,e.completion,i.from,i.to)}const Kc=new WeakMap;function cw(s){if(!Array.isArray(s))return s;let e=Kc.get(s);return e||Kc.set(s,e=hw(s)),e}class dw{constructor(e){this.pattern=e,this.chars=[],this.folded=[],this.any=[],this.precise=[],this.byWord=[];for(let t=0;t<e.length;){let i=xe(e,t),n=Ue(i);this.chars.push(i);let r=e.slice(t,t+n),o=r.toUpperCase();this.folded.push(xe(o==r?r.toLowerCase():o,0)),t+=n}this.astral=e.length!=this.chars.length}match(e){if(this.pattern.length==0)return[0];if(e.length<this.pattern.length)return null;let{chars:t,folded:i,any:n,precise:r,byWord:o}=this;if(t.length==1){let v=xe(e,0);return v==t[0]?[0,0,Ue(v)]:v==i[0]?[-200,0,Ue(v)]:null}let a=e.indexOf(this.pattern);if(a==0)return[0,0,this.pattern.length];let l=t.length,h=0;if(a<0){for(let v=0,_=Math.min(e.length,200);v<_&&h<l;){let w=xe(e,v);(w==t[h]||w==i[h])&&(n[h++]=v),v+=Ue(w)}if(h<l)return null}let c=0,d=0,f=!1,u=0,p=-1,m=-1,y=/[a-z]/.test(e);for(let v=0,_=Math.min(e.length,200),w=0;v<_&&d<l;){let S=xe(e,v);a<0&&(c<l&&S==t[c]&&(r[c++]=v),u<l&&(S==t[u]||S==i[u]?(u==0&&(p=v),m=v,u++):u=0));let A,$=S<255?S>=48&&S<=57||S>=97&&S<=122?2:S>=65&&S<=90?1:0:(A=rl(S))!=A.toLowerCase()?1:A!=A.toUpperCase()?2:0;($==1&&y||w==0&&$!=0)&&(t[d]==S||i[d]==S&&(f=!0))&&(o[d++]=v),w=$,v+=Ue(S)}return d==l&&o[0]==0?this.result(-100+(f?-200:0),o,e):u==l&&p==0?[-200,0,m]:a>-1?[-700,a,a+this.pattern.length]:u==l?[-200+-700,p,m]:d==l?this.result(-100+(f?-200:0)+-700,o,e):t.length==2?null:this.result((n[0]?-700:0)+-200+-1100,n,e)}result(e,t,i){let n=[e],r=1;for(let o of t){let a=o+(this.astral?Ue(xe(i,o)):1);r>1&&n[r-1]==o?n[r-1]=a:(n[r++]=o,n[r++]=a)}return n}}const di=E.define({combine(s){return Gt(s,{activateOnTyping:!0,override:null,maxRenderedOptions:100,defaultKeymap:!0},{defaultKeymap:(e,t)=>e&&t})}}),Na=300,fw=L.baseTheme({".cm-tooltip.cm-tooltip-autocomplete":{"& > ul":{fontFamily:"monospace",whiteSpace:"nowrap",overflow:"auto",maxWidth_fallback:"700px",maxWidth:"min(700px, 95vw)",maxHeight:"10em",listStyle:"none",margin:0,padding:0,"& > li":{cursor:"pointer",padding:"1px 1em 1px 3px",lineHeight:1.2},"& > li[aria-selected]":{background_fallback:"#bdf",backgroundColor:"Highlight",color_fallback:"white",color:"HighlightText"}}},".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after":{content:'"\xB7\xB7\xB7"',opacity:.5,display:"block",textAlign:"center"},".cm-tooltip.cm-completionInfo":{position:"absolute",padding:"3px 9px",width:"max-content",maxWidth:Na+"px"},".cm-completionInfo.cm-completionInfo-left":{right:"100%"},".cm-completionInfo.cm-completionInfo-right":{left:"100%"},"&light .cm-snippetField":{backgroundColor:"#00000022"},"&dark .cm-snippetField":{backgroundColor:"#ffffff22"},".cm-snippetFieldPosition":{verticalAlign:"text-top",width:0,height:"1.15em",margin:"0 -0.7px -.7em",borderLeft:"1.4px dotted #888"},".cm-completionMatchedText":{textDecoration:"underline"},".cm-completionDetail":{marginLeft:"0.5em",fontStyle:"italic"},".cm-completionIcon":{fontSize:"90%",width:".8em",display:"inline-block",textAlign:"center",paddingRight:".6em",opacity:"0.6"},".cm-completionIcon-function, .cm-completionIcon-method":{"&:after":{content:"'\u0192'"}},".cm-completionIcon-class":{"&:after":{content:"'\u25CB'"}},".cm-completionIcon-interface":{"&:after":{content:"'\u25CC'"}},".cm-completionIcon-variable":{"&:after":{content:"'\u{1D465}'"}},".cm-completionIcon-constant":{"&:after":{content:"'\u{1D436}'"}},".cm-completionIcon-type":{"&:after":{content:"'\u{1D461}'"}},".cm-completionIcon-enum":{"&:after":{content:"'\u222A'"}},".cm-completionIcon-property":{"&:after":{content:"'\u25A1'"}},".cm-completionIcon-keyword":{"&:after":{content:"'\u{1F511}\uFE0E'"}},".cm-completionIcon-namespace":{"&:after":{content:"'\u25A2'"}},".cm-completionIcon-text":{"&:after":{content:"'abc'",fontSize:"50%",verticalAlign:"middle"}}});function Yc(s,e,t){const i=document.createElement("ul");i.id=e,i.setAttribute("role","listbox"),i.setAttribute("aria-expanded","true");for(let n=t.from;n<t.to;n++){let{completion:r,match:o}=s[n];const a=i.appendChild(document.createElement("li"));a.id=e+"-"+n;let l=a.appendChild(document.createElement("div"));l.classList.add("cm-completionIcon"),r.type&&l.classList.add(...r.type.split(/\s+/g).map(u=>"cm-completionIcon-"+u)),l.setAttribute("aria-hidden","true");let h=a.appendChild(document.createElement("span"));h.className="cm-completionLabel";let{label:c,detail:d}=r,f=0;for(let u=1;u<o.length;){let p=o[u++],m=o[u++];p>f&&h.appendChild(document.createTextNode(c.slice(f,p)));let y=h.appendChild(document.createElement("span"));y.appendChild(document.createTextNode(c.slice(p,m))),y.className="cm-completionMatchedText",f=m}if(f<c.length&&h.appendChild(document.createTextNode(c.slice(f))),d){let u=a.appendChild(document.createElement("span"));u.className="cm-completionDetail",u.textContent=d}a.setAttribute("role","option")}return t.from&&i.classList.add("cm-completionListIncompleteTop"),t.to<s.length&&i.classList.add("cm-completionListIncompleteBottom"),i}function uw(s,e){let t=document.createElement("div");t.className="cm-tooltip cm-completionInfo";let{info:i}=s.completion;if(typeof i=="string")t.textContent=i;else{let n=i(s.completion);n.then?n.then(r=>t.appendChild(r),r=>tt(e.state,r,"completion info")):t.appendChild(n)}return t}function Jc(s,e,t){if(s<=t)return{from:0,to:s};if(e<=s>>1){let n=Math.floor(e/t);return{from:n*t,to:(n+1)*t}}let i=Math.floor((s-e)/t);return{from:s-(i+1)*t,to:s-i*t}}class pw{constructor(e,t){this.view=e,this.stateField=t,this.info=null,this.placeInfo={read:()=>this.measureInfo(),write:a=>this.positionInfo(a),key:this};let i=e.state.field(t),{options:n,selected:r}=i.open,o=e.state.facet(di);this.range=Jc(n.length,r,o.maxRenderedOptions),this.dom=document.createElement("div"),this.dom.className="cm-tooltip-autocomplete",this.dom.addEventListener("mousedown",a=>{for(let l=a.target,h;l&&l!=this.dom;l=l.parentNode)if(l.nodeName=="LI"&&(h=/-(\d+)$/.exec(l.id))&&+h[1]<n.length){up(e,n[+h[1]]),a.preventDefault();return}}),this.list=this.dom.appendChild(Yc(n,i.id,this.range)),this.list.addEventListener("scroll",()=>{this.info&&this.view.requestMeasure(this.placeInfo)})}mount(){this.updateSel()}update(e){e.state.field(this.stateField)!=e.startState.field(this.stateField)&&this.updateSel()}positioned(){this.info&&this.view.requestMeasure(this.placeInfo)}updateSel(){let e=this.view.state.field(this.stateField),t=e.open;if((t.selected<this.range.from||t.selected>=this.range.to)&&(this.range=Jc(t.options.length,t.selected,this.view.state.facet(di).maxRenderedOptions),this.list.remove(),this.list=this.dom.appendChild(Yc(t.options,e.id,this.range)),this.list.addEventListener("scroll",()=>{this.info&&this.view.requestMeasure(this.placeInfo)})),this.updateSelectedOption(t.selected)){this.info&&(this.info.remove(),this.info=null);let i=t.options[t.selected];i.completion.info&&(this.info=this.dom.appendChild(uw(i,this.view)),this.view.requestMeasure(this.placeInfo))}}updateSelectedOption(e){let t=null;for(let i=this.list.firstChild,n=this.range.from;i;i=i.nextSibling,n++)n==e?i.hasAttribute("aria-selected")||(i.setAttribute("aria-selected","true"),t=i):i.hasAttribute("aria-selected")&&i.removeAttribute("aria-selected");return t&&gw(this.list,t),t}measureInfo(){let e=this.dom.querySelector("[aria-selected]");if(!e)return null;let t=this.dom.getBoundingClientRect(),i=e.getBoundingClientRect().top-t.top;if(i<0||i>this.list.clientHeight-10)return null;let n=this.view.textDirection==F.RTL,r=t.left,o=innerWidth-t.right;return n&&r<Math.min(Na,o)?n=!1:!n&&o<Math.min(Na,r)&&(n=!0),{top:i,left:n}}positionInfo(e){this.info&&e&&(this.info.style.top=e.top+"px",this.info.classList.toggle("cm-completionInfo-left",e.left),this.info.classList.toggle("cm-completionInfo-right",!e.left))}}function mw(s){return e=>new pw(e,s)}function gw(s,e){let t=s.getBoundingClientRect(),i=e.getBoundingClientRect();i.top<t.top?s.scrollTop-=t.top-i.top:i.bottom>t.bottom&&(s.scrollTop+=i.bottom-t.bottom)}const bw=300;function Xc(s){return(s.boost||0)*100+(s.apply?10:0)+(s.info?5:0)+(s.type?1:0)}function yw(s,e){let t=[],i=0;for(let o of s)if(o.hasResult())if(o.result.filter===!1)for(let a of o.result.options)t.push(new Gc(a,o,[1e9-i++]));else{let a=new dw(e.sliceDoc(o.from,o.to)),l;for(let h of o.result.options)(l=a.match(h.label))&&(h.boost!=null&&(l[0]+=h.boost),t.push(new Gc(h,o,l)))}t.sort(Qc);let n=[],r=null;for(let o of t.sort(Qc)){if(n.length==bw)break;!r||r.label!=o.completion.label||r.detail!=o.completion.detail?n.push(o):Xc(o.completion)>Xc(r)&&(n[n.length-1]=o),r=o.completion}return n}class ys{constructor(e,t,i,n,r){this.options=e,this.attrs=t,this.tooltip=i,this.timestamp=n,this.selected=r}setSelected(e,t){return e==this.selected||e>=this.options.length?this:new ys(this.options,Zc(t,e),this.tooltip,this.timestamp,e)}static build(e,t,i,n){let r=yw(e,t);if(!r.length)return null;let o=0;if(n&&n.selected){let a=n.options[n.selected].completion;for(let l=0;l<r.length&&!o;l++)r[l].completion==a&&(o=l)}return new ys(r,Zc(i,o),{pos:e.reduce((a,l)=>l.hasResult()?Math.min(a,l.from):a,1e8),create:mw(et)},n?n.timestamp:Date.now(),o)}map(e){return new ys(this.options,this.attrs,Object.assign(Object.assign({},this.tooltip),{pos:e.mapPos(this.tooltip.pos)}),this.timestamp,this.selected)}}class fr{constructor(e,t,i){this.active=e,this.id=t,this.open=i}static start(){return new fr(xw,"cm-ac-"+Math.floor(Math.random()*2e6).toString(36),null)}update(e){let{state:t}=e,i=t.facet(di),r=(i.override||t.languageDataAt("autocomplete",Gi(t)).map(cw)).map(a=>(this.active.find(h=>h.source==a)||new Re(a,this.active.some(h=>h.state!=0)?1:0)).update(e,i));r.length==this.active.length&&r.every((a,l)=>a==this.active[l])&&(r=this.active);let o=e.selection||r.some(a=>a.hasResult()&&e.changes.touchesRange(a.from,a.to))||!vw(r,this.active)?ys.build(r,t,this.id,this.open):this.open&&e.docChanged?this.open.map(e.changes):this.open;!o&&r.every(a=>a.state!=1)&&r.some(a=>a.hasResult())&&(r=r.map(a=>a.hasResult()?new Re(a.source,0):a));for(let a of e.effects)a.is(mp)&&(o=o&&o.setSelected(a.value,this.id));return r==this.active&&o==this.open?this:new fr(r,this.id,o)}get tooltip(){return this.open?this.open.tooltip:null}get attrs(){return this.open?this.open.attrs:ww}}function vw(s,e){if(s==e)return!0;for(let t=0,i=0;;){for(;t<s.length&&!s[t].hasResult;)t++;for(;i<e.length&&!e[i].hasResult;)i++;let n=t==s.length,r=i==e.length;if(n||r)return n==r;if(s[t++].result!=e[i++].result)return!1}}function Zc(s,e){return{"aria-autocomplete":"list","aria-activedescendant":s+"-"+e,"aria-owns":s}}const ww={"aria-autocomplete":"list"},xw=[];function Qc(s,e){let t=e.match[0]-s.match[0];if(t)return t;let i=s.completion.label,n=e.completion.label;return i<n?-1:i==n?0:1}class Re{constructor(e,t,i=-1){this.source=e,this.state=t,this.explicitPos=i}hasResult(){return!1}update(e,t){let i=e.annotation(N.userEvent),n=this;i=="input"||i=="delete"?n=n.handleUserEvent(e,i,t):e.docChanged?n=n.handleChange(e):e.selection&&n.state!=0&&(n=new Re(n.source,0));for(let r of e.effects)if(r.is(_l))n=new Re(n.source,1,r.value?Gi(e.state):-1);else if(r.is(Ll))n=new Re(n.source,0);else if(r.is(pp))for(let o of r.value)o.source==n.source&&(n=o);return n}handleUserEvent(e,t,i){return t=="delete"||!i.activateOnTyping?this.map(e.changes):new Re(this.source,1)}handleChange(e){return e.changes.touchesRange(Gi(e.startState))?new Re(this.source,0):this.map(e.changes)}map(e){return e.empty||this.explicitPos<0?this:new Re(this.source,this.state,e.mapPos(this.explicitPos))}}class ur extends Re{constructor(e,t,i,n,r,o){super(e,2,t),this.result=i,this.from=n,this.to=r,this.span=o}hasResult(){return!0}handleUserEvent(e,t,i){let n=e.changes.mapPos(this.from),r=e.changes.mapPos(this.to,1),o=Gi(e.state);if((this.explicitPos>-1?o<n:o<=n)||o>r)return new Re(this.source,t=="input"&&i.activateOnTyping?1:0);let a=this.explicitPos<0?-1:e.changes.mapPos(this.explicitPos);return this.span&&(n==r||this.span.test(e.state.sliceDoc(n,r)))?new ur(this.source,a,this.result,n,r,this.span):new Re(this.source,1,a)}handleChange(e){return e.changes.touchesRange(this.from,this.to)?new Re(this.source,0):this.map(e.changes)}map(e){return e.empty?this:new ur(this.source,this.explicitPos<0?-1:e.mapPos(this.explicitPos),this.result,e.mapPos(this.from),e.mapPos(this.to,1),this.span)}}const _l=B.define(),Ll=B.define(),pp=B.define({map(s,e){return s.map(t=>t.map(e))}}),mp=B.define(),et=Me.define({create(){return fr.start()},update(s,e){return s.update(e)},provide:s=>[dr.from(s,e=>e.tooltip),L.contentAttributes.from(s,e=>e.attrs)]}),gp=75;function Cn(s,e="option"){return t=>{let i=t.state.field(et,!1);if(!i||!i.open||Date.now()-i.open.timestamp<gp)return!1;let n=1,r;e=="page"&&(r=t.dom.querySelector(".cm-tooltip-autocomplete"))&&(n=Math.max(2,Math.floor(r.offsetHeight/r.firstChild.offsetHeight)));let o=i.open.selected+n*(s?1:-1),{length:a}=i.open.options;return o<0?o=e=="page"?0:a-1:o>=a&&(o=e=="page"?a-1:0),t.dispatch({effects:mp.of(o)}),!0}}const Sw=s=>{let e=s.state.field(et,!1);return!e||!e.open||Date.now()-e.open.timestamp<gp?!1:(up(s,e.open.options[e.open.selected]),!0)},kw=s=>s.state.field(et,!1)?(s.dispatch({effects:_l.of(!0)}),!0):!1,Cw=s=>{let e=s.state.field(et,!1);return!e||!e.active.some(t=>t.state!=0)?!1:(s.dispatch({effects:Ll.of(null)}),!0)};class Aw{constructor(e,t){this.active=e,this.context=t,this.time=Date.now(),this.updates=[],this.done=void 0}}const ed=50,Mw=50,$w=1e3,Tw=fe.fromClass(class{constructor(s){this.view=s,this.debounceUpdate=-1,this.running=[],this.debounceAccept=-1,this.composing=0;for(let e of s.state.field(et).active)e.state==1&&this.startQuery(e)}update(s){let e=s.state.field(et);if(!s.selectionSet&&!s.docChanged&&s.startState.field(et)==e)return;let t=s.transactions.some(i=>{let n=i.annotation(N.userEvent);return(i.selection||i.docChanged)&&n!="input"&&n!="delete"});for(let i=0;i<this.running.length;i++){let n=this.running[i];if(t||n.updates.length+s.transactions.length>Mw&&n.time-Date.now()>$w){for(let r of n.context.abortListeners)try{r()}catch(o){tt(this.view.state,o)}n.context.abortListeners=null,this.running.splice(i--,1)}else n.updates.push(...s.transactions)}if(this.debounceUpdate>-1&&clearTimeout(this.debounceUpdate),this.debounceUpdate=e.active.some(i=>i.state==1&&!this.running.some(n=>n.active.source==i.source))?setTimeout(()=>this.startUpdate(),ed):-1,this.composing!=0)for(let i of s.transactions)i.annotation(N.userEvent)=="input"?this.composing=2:this.composing==2&&i.selection&&(this.composing=3)}startUpdate(){this.debounceUpdate=-1;let{state:s}=this.view,e=s.field(et);for(let t of e.active)t.state==1&&!this.running.some(i=>i.active.source==t.source)&&this.startQuery(t)}startQuery(s){let{state:e}=this.view,t=Gi(e),i=new aw(e,t,s.explicitPos==t),n=new Aw(s,i);this.running.push(n),Promise.resolve(s.source(i)).then(r=>{n.context.aborted||(n.done=r||null,this.scheduleAccept())},r=>{this.view.dispatch({effects:Ll.of(null)}),tt(this.view.state,r)})}scheduleAccept(){this.running.every(s=>s.done!==void 0)?this.accept():this.debounceAccept<0&&(this.debounceAccept=setTimeout(()=>this.accept(),ed))}accept(){var s;this.debounceAccept>-1&&clearTimeout(this.debounceAccept),this.debounceAccept=-1;let e=[],t=this.view.state.facet(di);for(let i=0;i<this.running.length;i++){let n=this.running[i];if(n.done===void 0)continue;if(this.running.splice(i--,1),n.done){let o=new ur(n.active.source,n.active.explicitPos,n.done,n.done.from,(s=n.done.to)!==null&&s!==void 0?s:Gi(n.updates.length?n.updates[0].startState:this.view.state),n.done.span&&n.done.filter!==!1?fp(n.done.span,!0):null);for(let a of n.updates)o=o.update(a,t);if(o.hasResult()){e.push(o);continue}}let r=this.view.state.field(et).active.find(o=>o.source==n.active.source);if(r&&r.state==1)if(n.done==null){let o=new Re(n.active.source,0);for(let a of n.updates)o=o.update(a,t);o.state!=1&&e.push(o)}else this.startQuery(r)}e.length&&this.view.dispatch({effects:pp.of(e)})}},{eventHandlers:{compositionstart(){this.composing=1},compositionend(){this.composing==3&&setTimeout(()=>this.view.dispatch({effects:_l.of(!1)}),20),this.composing=0}}});function Ew(s={}){return[et,di.of(s),Tw,Pw,fw]}const bp=[{key:"Ctrl-Space",run:kw},{key:"Escape",run:Cw},{key:"ArrowDown",run:Cn(!0)},{key:"ArrowUp",run:Cn(!1)},{key:"PageDown",run:Cn(!0,"page")},{key:"PageUp",run:Cn(!1,"page")},{key:"Enter",run:Sw}],Pw=Zs.override(fl.computeN([di],s=>s.facet(di).defaultKeymap?[bp]:[])),_w=s=>{let e=Rl(s.state);return e.line?Lw(s):e.block?vp(s):!1};function yp(s,e){return({state:t,dispatch:i})=>{let n=s(e,t.selection.ranges,t);return n?(i(t.update(n)),!0):!1}}const Lw=yp(Iw,0),vp=yp(Dw,0),Rw=[{key:"Mod-/",run:_w},{key:"Alt-A",run:vp}];function Rl(s,e=s.selection.main.head){let t=s.languageDataAt("commentTokens",e);return t.length?t[0]:{}}const os=50;function Ow(s,{open:e,close:t},i,n){let r=s.sliceDoc(i-os,i),o=s.sliceDoc(n,n+os),a=/\s*$/.exec(r)[0].length,l=/^\s*/.exec(o)[0].length,h=r.length-a;if(r.slice(h-e.length,h)==e&&o.slice(l,l+t.length)==t)return{open:{pos:i-a,margin:a&&1},close:{pos:n+l,margin:l&&1}};let c,d;n-i<=2*os?c=d=s.sliceDoc(i,n):(c=s.sliceDoc(i,i+os),d=s.sliceDoc(n-os,n));let f=/^\s*/.exec(c)[0].length,u=/\s*$/.exec(d)[0].length,p=d.length-u-t.length;return c.slice(f,f+e.length)==e&&d.slice(p,p+t.length)==t?{open:{pos:i+f+e.length,margin:/\s/.test(c.charAt(f+e.length))?1:0},close:{pos:n-u-t.length,margin:/\s/.test(d.charAt(p-1))?1:0}}:null}function Dw(s,e,t){let i=e.map(r=>Rl(t,r.from).block);if(!i.every(r=>r))return null;let n=e.map((r,o)=>Ow(t,i[o],r.from,r.to));if(s!=2&&!n.every(r=>r)){let r=0;return t.changeByRange(o=>{let{open:a,close:l}=i[r++];if(n[r])return{range:o};let h=a.length+1;return{changes:[{from:o.from,insert:a+" "},{from:o.to,insert:" "+l}],range:b.range(o.anchor+h,o.head+h)}})}else if(s!=1&&n.some(r=>r)){let r=[];for(let o=0,a;o<n.length;o++)if(a=n[o]){let l=i[o],{open:h,close:c}=a;r.push({from:h.pos-l.open.length,to:h.pos+h.margin},{from:c.pos-c.margin,to:c.pos+l.close.length})}return{changes:r}}return null}function Iw(s,e,t){let i=[],n=-1;for(let{from:r,to:o}of e){let a=i.length,l=1e9;for(let h=r;h<=o;){let c=t.doc.lineAt(h);if(c.from>n&&(r==o||o>c.from)){n=c.from;let d=Rl(t,h).line;if(!d)continue;let f=/^\s*/.exec(c.text)[0].length,u=f==c.length,p=c.text.slice(f,f+d.length)==d?f:-1;f<c.text.length&&f<l&&(l=f),i.push({line:c,comment:p,token:d,indent:f,empty:u,single:!1})}h=c.to+1}if(l<1e9)for(let h=a;h<i.length;h++)i[h].indent<i[h].line.text.length&&(i[h].indent=l);i.length==a+1&&(i[a].single=!0)}if(s!=2&&i.some(r=>r.comment<0&&(!r.empty||r.single))){let r=[];for(let{line:a,token:l,indent:h,empty:c,single:d}of i)(d||!c)&&r.push({from:a.from+h,insert:l+" "});let o=t.changes(r);return{changes:o,selection:t.selection.map(o,1)}}else if(s!=1&&i.some(r=>r.comment>=0)){let r=[];for(let{line:o,comment:a,token:l}of i)if(a>=0){let h=o.from+a,c=h+l.length;o.text[c-o.from]==" "&&c++,r.push({from:h,to:c})}return{changes:r}}return null}const za=2e3;function Bw(s,e,t){let i=Math.min(e.line,t.line),n=Math.max(e.line,t.line),r=[];if(e.off>za||t.off>za||e.col<0||t.col<0){let o=Math.min(e.off,t.off),a=Math.max(e.off,t.off);for(let l=i;l<=n;l++){let h=s.doc.line(l);h.length<=a&&r.push(b.range(h.from+o,h.to+a))}}else{let o=Math.min(e.col,t.col),a=Math.max(e.col,t.col);for(let l=i;l<=n;l++){let h=s.doc.line(l),c=Jo(h.text,o,s.tabSize),d=Jo(h.text,a,s.tabSize);c<d&&r.push(b.range(h.from+c,h.from+d))}}return r}function Nw(s,e){let t=s.coordsAtPos(s.viewport.from);return t?Math.round(Math.abs((t.left-e)/s.defaultCharacterWidth)):-1}function td(s,e){let t=s.posAtCoords({x:e.clientX,y:e.clientY},!1),i=s.state.doc.lineAt(t),n=t-i.from,r=n>za?-1:n==i.length?Nw(s,e.clientX):Xs(i.text.slice(0,t-i.from),0,s.state.tabSize);return{line:i.number,col:r,off:n}}function zw(s,e){let t=td(s,e),i=s.state.selection;return t?{update(n){if(n.docChanged){let r=n.changes.mapPos(n.startState.doc.line(t.line).from),o=n.state.doc.lineAt(r);t={line:o.number,col:t.col,off:Math.min(t.off,o.length)},i=i.map(n.changes)}},get(n,r,o){let a=td(s,n);if(!a)return i;let l=Bw(s.state,t,a);return l.length?o?b.create(l.concat(i.ranges)):b.create(l):i}}:null}function Fw(s){let e=(s==null?void 0:s.eventFilter)||(t=>t.altKey&&t.button==0);return L.mouseSelectionStyle.of((t,i)=>e(i)?zw(t,i):null)}let Uw=0;class lt{constructor(e,t,i){this.set=e,this.base=t,this.modified=i,this.id=Uw++}static define(e){if(e!=null&&e.base)throw new Error("Can not derive from a modified tag");let t=new lt([],null,[]);if(t.set.push(t),e)for(let i of e.set)t.set.push(i);return t}static defineModifier(){let e=new pr;return t=>t.modified.indexOf(e)>-1?t:pr.get(t.base||t,t.modified.concat(e).sort((i,n)=>i.id-n.id))}}let Ww=0;class pr{constructor(){this.instances=[],this.id=Ww++}static get(e,t){if(!t.length)return e;let i=t[0].instances.find(a=>a.base==e&&qw(t,a.modified));if(i)return i;let n=[],r=new lt(n,e,t);for(let a of t)a.instances.push(r);let o=wp(t);for(let a of e.set)for(let l of o)n.push(pr.get(a,l));return r}}function qw(s,e){return s.length==e.length&&s.every((t,i)=>t==e[i])}function wp(s){let e=[s];for(let t=0;t<s.length;t++)for(let i of wp(s.slice(0,t).concat(s.slice(t+1))))e.push(i);return e}function Hw(s){let e=Object.create(null);for(let t in s){let i=s[t];Array.isArray(i)||(i=[i]);for(let n of t.split(" "))if(n){let r=[],o=2,a=n;for(let d=0;;){if(a=="..."&&d>0&&d+3==n.length){o=1;break}let f=/^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(a);if(!f)throw new RangeError("Invalid path: "+n);if(r.push(f[0]=="*"?null:f[0][0]=='"'?JSON.parse(f[0]):f[0]),d+=f[0].length,d==n.length)break;let u=n[d++];if(d==n.length&&u=="!"){o=0;break}if(u!="/")throw new RangeError("Invalid path: "+n);a=n.slice(d)}let l=r.length-1,h=r[l];if(!h)throw new RangeError("Invalid path: "+n);let c=new Vw(i,o,l>0?r.slice(0,l):null);e[h]=c.sort(e[h])}}return xp.add(e)}const xp=new Y,Ol=E.define({combine(s){return s.length?jr.combinedMatch(s):null}}),Sp=E.define({combine(s){return s.length?s[0].match:null}});function Fa(s){return s.facet(Ol)||s.facet(Sp)}class Vw{constructor(e,t,i,n){this.tags=e,this.mode=t,this.context=i,this.next=n}sort(e){return!e||e.depth<this.depth?(this.next=e,this):(e.next=this.sort(e.next),e)}get depth(){return this.context?this.context.length:0}}class jr{constructor(e,t){this.map=Object.create(null);let i;function n(o){let a=Bt.newName();return(i||(i=Object.create(null)))["."+a]=o,a}this.all=typeof t.all=="string"?t.all:t.all?n(t.all):null;for(let o of e){let a=(o.class||n(Object.assign({},o,{tag:null})))+(this.all?" "+this.all:""),l=o.tag;if(!Array.isArray(l))this.map[l.id]=a;else for(let h of l)this.map[h.id]=a}this.module=i?new Bt(i):null,this.scope=t.scope||null,this.match=this.match.bind(this);let r=[Gw];this.module&&r.push(L.styleModule.of(this.module)),this.extension=r.concat(Ol.of(this)),this.fallback=r.concat(Sp.of(this))}match(e,t){if(this.scope&&t!=this.scope)return null;for(let i of e.set){let n=this.map[i.id];if(n!==void 0)return i!=e&&(this.map[e.id]=n),n}return this.map[e.id]=this.all}static combinedMatch(e){if(e.length==1)return e[0].match;let t=e.some(i=>i.scope)?void 0:Object.create(null);return(i,n)=>{let r=t&&t[i.id];if(r!==void 0)return r;let o=null;for(let a of e){let l=a.match(i,n);l&&(o=o?o+" "+l:l)}return t&&(t[i.id]=o),o}}static define(e,t){return new jr(e,t||{})}static get(e,t,i){let n=Fa(e);return n&&n(t,i||Ce.none)}}class jw{constructor(e){this.markCache=Object.create(null),this.tree=je(e.state),this.decorations=this.buildDeco(e,Fa(e.state))}update(e){let t=je(e.state),i=Fa(e.state),n=i!=e.startState.facet(Ol);t.length<e.view.viewport.to&&!n?this.decorations=this.decorations.map(e.changes):(t!=this.tree||e.viewportChanged||n)&&(this.tree=t,this.decorations=this.buildDeco(e.view,i))}buildDeco(e,t){if(!t||!this.tree.length)return T.none;let i=new Nt;for(let{from:n,to:r}of e.visibleRanges)Kw(this.tree,n,r,t,(o,a,l)=>{i.add(o,a,this.markCache[l]||(this.markCache[l]=T.mark({class:l})))});return i.finish()}}const Gw=Zs.fallback(fe.fromClass(jw,{decorations:s=>s.decorations})),id=[""];function Kw(s,e,t,i,n){let r=e,o="",a=s.topNode.cursor;function l(c,d){o&&n(r,c,o),r=c,o=d}function h(c,d,f){let{type:u,from:p,to:m}=a;if(p>=t||m<=e)return;id[d]=u.name,u.isTop&&(f=u);let y=c,v=u.prop(xp),_=!1;for(;v;){if(!v.context||Yw(v.context,id,d)){for(let S of v.tags){let A=i(S,f);A&&(y&&(y+=" "),y+=A,v.mode==1?c+=(c?" ":"")+A:v.mode==0&&(_=!0))}break}v=v.next}let w=p;if(!_&&a.firstChild()){do a.from>w&&o!=y&&l(w,y),w=a.to,h(c,d+1,f);while(a.nextSibling());a.parent()}m>w&&o!=y&&l(w,y)}h("",0,s.type),l(t,"")}function Yw(s,e,t){if(s.length>t-1)return!1;for(let i=t-1,n=s.length-1;n>=0;n--,i--){let r=s[n];if(r&&r!=e[i])return!1}return!0}const x=lt.define,An=x(),$t=x(),sd=x($t),Tt=x(),Oo=x(Tt),Do=x(Tt),at=x(),Zt=x(at),vt=x(),ot=x(),Ua=x(),as=x(Ua),Mn=x(),R={comment:An,lineComment:x(An),blockComment:x(An),docComment:x(An),name:$t,variableName:x($t),typeName:sd,tagName:x(sd),propertyName:x($t),className:x($t),labelName:x($t),namespace:x($t),macroName:x($t),literal:Tt,string:Oo,docString:x(Oo),character:x(Oo),number:Do,integer:x(Do),float:x(Do),bool:x(Tt),regexp:x(Tt),escape:x(Tt),color:x(Tt),url:x(Tt),keyword:vt,self:x(vt),null:x(vt),atom:x(vt),unit:x(vt),modifier:x(vt),operatorKeyword:x(vt),controlKeyword:x(vt),definitionKeyword:x(vt),operator:ot,derefOperator:x(ot),arithmeticOperator:x(ot),logicOperator:x(ot),bitwiseOperator:x(ot),compareOperator:x(ot),updateOperator:x(ot),definitionOperator:x(ot),typeOperator:x(ot),controlOperator:x(ot),punctuation:Ua,separator:x(Ua),bracket:as,angleBracket:x(as),squareBracket:x(as),paren:x(as),brace:x(as),content:at,heading:Zt,heading1:x(Zt),heading2:x(Zt),heading3:x(Zt),heading4:x(Zt),heading5:x(Zt),heading6:x(Zt),contentSeparator:x(at),list:x(at),quote:x(at),emphasis:x(at),strong:x(at),link:x(at),monospace:x(at),strikethrough:x(at),inserted:x(),deleted:x(),changed:x(),invalid:x(),meta:Mn,documentMeta:x(Mn),annotation:x(Mn),processingInstruction:x(Mn),definition:lt.defineModifier(),constant:lt.defineModifier(),function:lt.defineModifier(),standard:lt.defineModifier(),local:lt.defineModifier(),special:lt.defineModifier()},Jw=jr.define([{tag:R.link,textDecoration:"underline"},{tag:R.heading,textDecoration:"underline",fontWeight:"bold"},{tag:R.emphasis,fontStyle:"italic"},{tag:R.strong,fontWeight:"bold"},{tag:R.strikethrough,textDecoration:"line-through"},{tag:R.keyword,color:"#708"},{tag:[R.atom,R.bool,R.url,R.contentSeparator,R.labelName],color:"#219"},{tag:[R.literal,R.inserted],color:"#164"},{tag:[R.string,R.deleted],color:"#a11"},{tag:[R.regexp,R.escape,R.special(R.string)],color:"#e40"},{tag:R.definition(R.variableName),color:"#00f"},{tag:R.local(R.variableName),color:"#30a"},{tag:[R.typeName,R.namespace],color:"#085"},{tag:R.className,color:"#167"},{tag:[R.special(R.variableName),R.macroName],color:"#256"},{tag:R.definition(R.propertyName),color:"#00c"},{tag:R.comment,color:"#940"},{tag:R.meta,color:"#7a757a"},{tag:R.invalid,color:"#f00"}]);class Xw{constructor(e,t,i){this.from=e,this.to=t,this.diagnostic=i}}class Lt{constructor(e,t,i){this.diagnostics=e,this.panel=t,this.selected=i}static init(e,t){let i=T.set(e.map(n=>n.from<n.to?T.mark({attributes:{class:"cm-lintRange cm-lintRange-"+n.severity},diagnostic:n}).range(n.from,n.to):T.widget({widget:new rx(n),diagnostic:n}).range(n.from)),!0);return new Lt(i,t,Ki(i))}}function Ki(s,e=null,t=0){let i=null;return s.between(t,1e9,(n,r,{spec:o})=>{if(!(e&&o.diagnostic!=e))return i=new Xw(n,r,o.diagnostic),!1}),i}function Zw(s,e,t){return s.field(He,!1)?e:e.concat(B.appendConfig.of([He.init(t),L.decorations.compute([He],i=>{let{selected:n,panel:r}=i.field(He);return!n||!r||n.from==n.to?T.none:T.set([ex.range(n.from,n.to)])}),ow(tx),ox]))}const Qw=B.define(),Dl=B.define(),kp=B.define(),He=Me.define({create(){return new Lt(T.none,null,null)},update(s,e){if(e.docChanged){let t=s.diagnostics.map(e.changes),i=null;if(s.selected){let n=e.changes.mapPos(s.selected.from,1);i=Ki(t,s.selected.diagnostic,n)||Ki(t,null,n)}s=new Lt(t,s.panel,i)}for(let t of e.effects)t.is(Qw)?s=Lt.init(t.value,s.panel):t.is(Dl)?s=new Lt(s.diagnostics,t.value?Bs.open:null,s.selected):t.is(kp)&&(s=new Lt(s.diagnostics,s.panel,t.value));return s},provide:s=>[Ds.from(s,e=>e.panel),L.decorations.from(s,e=>e.diagnostics)]}),ex=T.mark({class:"cm-lintRange cm-lintRange-active"});function tx(s,e,t){let{diagnostics:i}=s.state.field(He),n=[],r=2e8,o=0;return i.between(e-(t<0?1:0),e+(t>0?1:0),(a,l,{spec:h})=>{e>=a&&e<=l&&(a==l||(e>a||t>0)&&(e<l||t<0))&&(n.push(h.diagnostic),r=Math.min(a,r),o=Math.max(l,o))}),n.length?{pos:r,end:o,above:s.state.doc.lineAt(r).to<o,create(){return{dom:K("ul",{class:"cm-tooltip-lint"},n.map(a=>Ap(s,a,!1)))}}}:null}const ix=s=>{let e=s.state.field(He,!1);(!e||!e.panel)&&s.dispatch({effects:Zw(s.state,[Dl.of(!0)],()=>Lt.init([],Bs.open))});let t=Os(s,Bs.open);return t&&t.dom.querySelector(".cm-panel-lint ul").focus(),!0},nd=s=>{let e=s.state.field(He,!1);return!e||!e.panel?!1:(s.dispatch({effects:Dl.of(!1)}),!0)},sx=s=>{let e=s.state.field(He,!1);if(!e)return!1;let t=s.state.selection.main,i=e.diagnostics.iter(t.to+1);return!i.value&&(i=e.diagnostics.iter(0),!i.value||i.from==t.from&&i.to==t.to)?!1:(s.dispatch({selection:{anchor:i.from,head:i.to},scrollIntoView:!0}),!0)},nx=[{key:"Mod-Shift-m",run:ix},{key:"F8",run:sx}];function Cp(s){let e=[];if(s)e:for(let{name:t}of s){for(let i=0;i<t.length;i++){let n=t[i];if(/[a-zA-Z]/.test(n)&&!e.some(r=>r.toLowerCase()==n.toLowerCase())){e.push(n);continue e}}e.push("")}return e}function Ap(s,e,t){var i;let n=t?Cp(e.actions):[];return K("li",{class:"cm-diagnostic cm-diagnostic-"+e.severity},K("span",{class:"cm-diagnosticText"},e.message),(i=e.actions)===null||i===void 0?void 0:i.map((r,o)=>{let a=d=>{d.preventDefault();let f=Ki(s.state.field(He).diagnostics,e);f&&r.apply(s,f.from,f.to)},{name:l}=r,h=n[o]?l.indexOf(n[o]):-1,c=h<0?l:[l.slice(0,h),K("u",l.slice(h,h+1)),l.slice(h+1)];return K("button",{class:"cm-diagnosticAction",onclick:a,onmousedown:a,"aria-label":` Action: ${l}${h<0?"":` (access key "${n[o]})"`}.`},c)}),e.source&&K("div",{class:"cm-diagnosticSource"},e.source))}class rx extends Kt{constructor(e){super(),this.diagnostic=e}eq(e){return e.diagnostic==this.diagnostic}toDOM(){return K("span",{class:"cm-lintPoint cm-lintPoint-"+this.diagnostic.severity})}}class rd{constructor(e,t){this.diagnostic=t,this.id="item_"+Math.floor(Math.random()*4294967295).toString(16),this.dom=Ap(e,t,!0),this.dom.id=this.id,this.dom.setAttribute("role","option")}}class Bs{constructor(e){this.view=e,this.items=[];let t=n=>{if(n.keyCode==27)nd(this.view),this.view.focus();else if(n.keyCode==38||n.keyCode==33)this.moveSelection((this.selectedIndex-1+this.items.length)%this.items.length);else if(n.keyCode==40||n.keyCode==34)this.moveSelection((this.selectedIndex+1)%this.items.length);else if(n.keyCode==36)this.moveSelection(0);else if(n.keyCode==35)this.moveSelection(this.items.length-1);else if(n.keyCode==13)this.view.focus();else if(n.keyCode>=65&&n.keyCode<=90&&this.selectedIndex>=0){let{diagnostic:r}=this.items[this.selectedIndex],o=Cp(r.actions);for(let a=0;a<o.length;a++)if(o[a].toUpperCase().charCodeAt(0)==n.keyCode){let l=Ki(this.view.state.field(He).diagnostics,r);l&&r.actions[a].apply(e,l.from,l.to)}}else return;n.preventDefault()},i=n=>{for(let r=0;r<this.items.length;r++)this.items[r].dom.contains(n.target)&&this.moveSelection(r)};this.list=K("ul",{tabIndex:0,role:"listbox","aria-label":this.view.state.phrase("Diagnostics"),onkeydown:t,onclick:i}),this.dom=K("div",{class:"cm-panel-lint"},this.list,K("button",{name:"close","aria-label":this.view.state.phrase("close"),onclick:()=>nd(this.view)},"\xD7")),this.update()}get selectedIndex(){let e=this.view.state.field(He).selected;if(!e)return-1;for(let t=0;t<this.items.length;t++)if(this.items[t].diagnostic==e.diagnostic)return t;return-1}update(){let{diagnostics:e,selected:t}=this.view.state.field(He),i=0,n=!1,r=null;for(e.between(0,this.view.state.doc.length,(o,a,{spec:l})=>{let h=-1,c;for(let d=i;d<this.items.length;d++)if(this.items[d].diagnostic==l.diagnostic){h=d;break}h<0?(c=new rd(this.view,l.diagnostic),this.items.splice(i,0,c),n=!0):(c=this.items[h],h>i&&(this.items.splice(i,h-i),n=!0)),t&&c.diagnostic==t.diagnostic?c.dom.hasAttribute("aria-selected")||(c.dom.setAttribute("aria-selected","true"),r=c):c.dom.hasAttribute("aria-selected")&&c.dom.removeAttribute("aria-selected"),i++});i<this.items.length&&!(this.items.length==1&&this.items[0].diagnostic.from<0);)n=!0,this.items.pop();this.items.length==0&&(this.items.push(new rd(this.view,{from:-1,to:-1,severity:"info",message:this.view.state.phrase("No diagnostics")})),n=!0),r?(this.list.setAttribute("aria-activedescendant",r.id),this.view.requestMeasure({key:this,read:()=>({sel:r.dom.getBoundingClientRect(),panel:this.list.getBoundingClientRect()}),write:({sel:o,panel:a})=>{o.top<a.top?this.list.scrollTop-=a.top-o.top:o.bottom>a.bottom&&(this.list.scrollTop+=o.bottom-a.bottom)}})):this.selectedIndex<0&&this.list.removeAttribute("aria-activedescendant"),n&&this.sync()}sync(){let e=this.list.firstChild;function t(){let i=e;e=i.nextSibling,i.remove()}for(let i of this.items)if(i.dom.parentNode==this.list){for(;e!=i.dom;)t();e=i.dom.nextSibling}else this.list.insertBefore(i.dom,e);for(;e;)t()}moveSelection(e){if(this.selectedIndex<0)return;let t=this.view.state.field(He),i=Ki(t.diagnostics,this.items[e].diagnostic);!i||this.view.dispatch({selection:{anchor:i.from,head:i.to},scrollIntoView:!0,effects:kp.of(i)})}static open(e){return new Bs(e)}}function Io(s){if(typeof btoa!="function")return"none";let e=`<svg xmlns="http://www.w3.org/2000/svg" width="6" height="3">
    <path d="m0 3 l2 -2 l1 0 l2 2 l1 0" stroke="${s}" fill="none" stroke-width=".7"/>
  </svg>`;return`url('data:image/svg+xml;base64,${btoa(e)}')`}const ox=L.baseTheme({".cm-diagnostic":{padding:"3px 6px 3px 8px",marginLeft:"-1px",display:"block",whiteSpace:"pre-wrap"},".cm-diagnostic-error":{borderLeft:"5px solid #d11"},".cm-diagnostic-warning":{borderLeft:"5px solid orange"},".cm-diagnostic-info":{borderLeft:"5px solid #999"},".cm-diagnosticAction":{font:"inherit",border:"none",padding:"2px 4px",backgroundColor:"#444",color:"white",borderRadius:"3px",marginLeft:"8px"},".cm-diagnosticSource":{fontSize:"70%",opacity:.7},".cm-lintRange":{backgroundPosition:"left bottom",backgroundRepeat:"repeat-x"},".cm-lintRange-error":{backgroundImage:Io("#d11")},".cm-lintRange-warning":{backgroundImage:Io("orange")},".cm-lintRange-info":{backgroundImage:Io("#999")},".cm-lintRange-active":{backgroundColor:"#ffdd9980"},".cm-tooltip-lint":{padding:0,margin:0},".cm-lintPoint":{position:"relative","&:after":{content:'""',position:"absolute",bottom:0,left:"-2px",borderLeft:"3px solid transparent",borderRight:"3px solid transparent",borderBottom:"4px solid #d11"}},".cm-lintPoint-warning":{"&:after":{borderBottomColor:"orange"}},".cm-lintPoint-info":{"&:after":{borderBottomColor:"#999"}},".cm-panel.cm-panel-lint":{position:"relative","& ul":{maxHeight:"100px",overflowY:"auto","& [aria-selected]":{backgroundColor:"#ddd","& u":{textDecoration:"underline"}},"&:focus [aria-selected]":{background_fallback:"#bdf",backgroundColor:"Highlight",color_fallback:"white",color:"HighlightText"},"& u":{textDecoration:"none"},padding:0,margin:0},"& [name=close]":{position:"absolute",top:"0",right:"2px",background:"inherit",border:"none",font:"inherit",padding:0,margin:0}}});class mr{constructor(e,t,i,n,r,o,a,l,h,c){this.p=e,this.stack=t,this.state=i,this.reducePos=n,this.pos=r,this.score=o,this.buffer=a,this.bufferBase=l,this.curContext=h,this.parent=c}toString(){return`[${this.stack.filter((e,t)=>t%3==0).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`}static start(e,t,i=0){let n=e.parser.context;return new mr(e,[],t,i,i,0,[],0,n?new od(n,n.start):null,null)}get context(){return this.curContext?this.curContext.context:null}pushState(e,t){this.stack.push(this.state,t,this.bufferBase+this.buffer.length),this.state=e}reduce(e){let t=e>>19,i=e&65535,{parser:n}=this.p,r=n.dynamicPrecedence(i);if(r&&(this.score+=r),t==0){i<n.minRepeatTerm&&this.storeNode(i,this.reducePos,this.reducePos,4,!0),this.pushState(n.getGoto(this.state,i,!0),this.reducePos),this.reduceContext(i);return}let o=this.stack.length-(t-1)*3-(e&262144?6:0),a=this.stack[o-2],l=this.stack[o-1],h=this.bufferBase+this.buffer.length-l;if(i<n.minRepeatTerm||e&131072){let c=n.stateFlag(this.state,1)?this.pos:this.reducePos;this.storeNode(i,a,c,h+4,!0)}if(e&262144)this.state=this.stack[o];else{let c=this.stack[o-3];this.state=n.getGoto(c,i,!0)}for(;this.stack.length>o;)this.stack.pop();this.reduceContext(i)}storeNode(e,t,i,n=4,r=!1){if(e==0){let o=this,a=this.buffer.length;if(a==0&&o.parent&&(a=o.bufferBase-o.parent.bufferBase,o=o.parent),a>0&&o.buffer[a-4]==0&&o.buffer[a-1]>-1){if(t==i)return;if(o.buffer[a-2]>=t){o.buffer[a-2]=i;return}}}if(!r||this.pos==i)this.buffer.push(e,t,i,n);else{let o=this.buffer.length;if(o>0&&this.buffer[o-4]!=0)for(;o>0&&this.buffer[o-2]>i;)this.buffer[o]=this.buffer[o-4],this.buffer[o+1]=this.buffer[o-3],this.buffer[o+2]=this.buffer[o-2],this.buffer[o+3]=this.buffer[o-1],o-=4,n>4&&(n-=4);this.buffer[o]=e,this.buffer[o+1]=t,this.buffer[o+2]=i,this.buffer[o+3]=n}}shift(e,t,i){if(e&131072)this.pushState(e&65535,this.pos);else if((e&262144)==0){let n=this.pos,r=e,{parser:o}=this.p;(i>this.pos||t<=o.maxNode)&&(this.pos=i,o.stateFlag(r,1)||(this.reducePos=i)),this.pushState(r,n),t<=o.maxNode&&this.buffer.push(t,n,i,4),this.shiftContext(t)}else t<=this.p.parser.maxNode&&this.buffer.push(t,this.pos,i,4),this.pos=i}apply(e,t,i){e&65536?this.reduce(e):this.shift(e,t,i)}useNode(e,t){let i=this.p.reused.length-1;(i<0||this.p.reused[i]!=e)&&(this.p.reused.push(e),i++);let n=this.pos;this.reducePos=this.pos=n+e.length,this.pushState(t,n),this.buffer.push(i,n,this.reducePos,-1),this.curContext&&this.updateContext(this.curContext.tracker.reuse(this.curContext.context,e,this.p.input,this))}split(){let e=this,t=e.buffer.length;for(;t>0&&e.buffer[t-2]>e.reducePos;)t-=4;let i=e.buffer.slice(t),n=e.bufferBase+t;for(;e&&n==e.bufferBase;)e=e.parent;return new mr(this.p,this.stack.slice(),this.state,this.reducePos,this.pos,this.score,i,n,this.curContext,e)}recoverByDelete(e,t){let i=e<=this.p.parser.maxNode;i&&this.storeNode(e,this.pos,t),this.storeNode(0,this.pos,t,i?8:4),this.pos=this.reducePos=t,this.score-=200}canShift(e){for(let t=new ax(this);;){let i=this.p.parser.stateSlot(t.top,4)||this.p.parser.hasAction(t.top,e);if((i&65536)==0)return!0;if(i==0)return!1;t.reduce(i)}}get ruleStart(){for(let e=this.state,t=this.stack.length;;){let i=this.p.parser.stateSlot(e,5);if(!(i&65536))return 0;if(t-=3*(i>>19),(i&65535)<this.p.parser.minRepeatTerm)return this.stack[t+1];e=this.stack[t]}}startOf(e,t){let i=this.state,n=this.stack.length,{parser:r}=this.p;for(;;){let o=r.stateSlot(i,5),a=o>>19,l=o&65535;if(e.indexOf(l)>-1){let h=n-3*(o>>19),c=this.stack[h+1];if(t==null||t>c)return c}if(n==0)return null;a==0?(n-=3,i=this.stack[n]):(n-=3*(a-1),i=r.getGoto(this.stack[n-3],l,!0))}}recoverByInsert(e){if(this.stack.length>=300)return[];let t=this.p.parser.nextStates(this.state);if(t.length>4<<1||this.stack.length>=120){let n=[];for(let r=0,o;r<t.length;r+=2)(o=t[r+1])!=this.state&&this.p.parser.hasAction(o,e)&&n.push(t[r],o);if(this.stack.length<120)for(let r=0;n.length<4<<1&&r<t.length;r+=2){let o=t[r+1];n.some((a,l)=>l&1&&a==o)||n.push(t[r],o)}t=n}let i=[];for(let n=0;n<t.length&&i.length<4;n+=2){let r=t[n+1];if(r==this.state)continue;let o=this.split();o.storeNode(0,o.pos,o.pos,4,!0),o.pushState(r,this.pos),o.shiftContext(t[n]),o.score-=200,i.push(o)}return i}forceReduce(){let e=this.p.parser.stateSlot(this.state,5);return(e&65536)==0?!1:(this.p.parser.validAction(this.state,e)||(this.storeNode(0,this.reducePos,this.reducePos,4,!0),this.score-=100),this.reduce(e),!0)}forceAll(){for(;!this.p.parser.stateFlag(this.state,2)&&this.forceReduce(););return this}get deadEnd(){if(this.stack.length!=3)return!1;let{parser:e}=this.p;return e.data[e.stateSlot(this.state,1)]==65535&&!e.stateSlot(this.state,4)}restart(){this.state=this.stack[0],this.stack.length=0}sameState(e){if(this.state!=e.state||this.stack.length!=e.stack.length)return!1;for(let t=0;t<this.stack.length;t+=3)if(this.stack[t]!=e.stack[t])return!1;return!0}get parser(){return this.p.parser}dialectEnabled(e){return this.p.parser.dialect.flags[e]}shiftContext(e){this.curContext&&this.updateContext(this.curContext.tracker.shift(this.curContext.context,e,this.p.input,this))}reduceContext(e){this.curContext&&this.updateContext(this.curContext.tracker.reduce(this.curContext.context,e,this.p.input,this))}emitContext(){let e=this.curContext;if(!e.tracker.strict)return;let t=this.buffer.length-1;(t<0||this.buffer[t]!=-2)&&this.buffer.push(e.hash,this.reducePos,this.reducePos,-2)}updateContext(e){if(e!=this.curContext.context){let t=new od(this.curContext.tracker,e);t.hash!=this.curContext.hash&&this.emitContext(),this.curContext=t}}}class od{constructor(e,t){this.tracker=e,this.context=t,this.hash=e.hash(t)}}var ad;(function(s){s[s.Token=200]="Token",s[s.Reduce=100]="Reduce",s[s.MaxNext=4]="MaxNext",s[s.MaxInsertStackDepth=300]="MaxInsertStackDepth",s[s.DampenInsertStackDepth=120]="DampenInsertStackDepth"})(ad||(ad={}));class ax{constructor(e){this.stack=e,this.top=e.state,this.rest=e.stack,this.offset=this.rest.length}reduce(e){let t=e&65535,i=e>>19;i==0?(this.rest==this.stack.stack&&(this.rest=this.rest.slice()),this.rest.push(this.top,0,0),this.offset+=3):this.offset-=(i-1)*3;let n=this.stack.p.parser.getGoto(this.rest[this.offset-3],t,!0);this.top=n}}class gr{constructor(e,t,i){this.stack=e,this.pos=t,this.index=i,this.buffer=e.buffer,this.index==0&&this.maybeNext()}static create(e){return new gr(e,e.bufferBase+e.buffer.length,e.buffer.length)}maybeNext(){let e=this.stack.parent;e!=null&&(this.index=this.stack.bufferBase-e.bufferBase,this.stack=e,this.buffer=e.buffer)}get id(){return this.buffer[this.index-4]}get start(){return this.buffer[this.index-3]}get end(){return this.buffer[this.index-2]}get size(){return this.buffer[this.index-1]}next(){this.index-=4,this.pos-=4,this.index==0&&this.maybeNext()}fork(){return new gr(this.stack,this.pos,this.index)}}class Mp{constructor(){this.start=-1,this.value=-1,this.end=-1}accept(e,t){this.value=e,this.end=t}}class vs{constructor(e,t){this.data=e,this.id=t}token(e,t,i){lx(this.data,e,t,i,this.id)}}vs.prototype.contextual=vs.prototype.fallback=vs.prototype.extend=!1;function lx(s,e,t,i,n){let r=0,o=1<<n,a=i.p.parser.dialect;e:for(let l=t.start;(o&s[r])!=0;){let h=s[r+1];for(let d=r+3;d<h;d+=2)if((s[d+1]&o)>0){let f=s[d];if(a.allows(f)&&(t.value==-1||t.value==f||i.p.parser.overrides(f,t.value))){t.accept(f,l);break}}let c=e.get(l++);for(let d=0,f=s[r+2];d<f;){let u=d+f>>1,p=h+u+(u<<1),m=s[p],y=s[p+1];if(c<m)f=u;else if(c>=y)d=u+1;else{r=s[p+2];continue e}}break}}function ls(s,e=Uint16Array){if(typeof s!="string")return s;let t=null;for(let i=0,n=0;i<s.length;){let r=0;for(;;){let o=s.charCodeAt(i++),a=!1;if(o==126){r=65535;break}o>=92&&o--,o>=34&&o--;let l=o-32;if(l>=46&&(l-=46,a=!0),r+=l,a)break;r*=46}t?t[n++]=r:t=new e(r)}return t}const Ge=typeof process!="undefined"&&/\bparse\b/.test({}.LOG);let Bo=null;function ld(s,e,t){let i=s.cursor(e);for(;;)if(!(t<0?i.childBefore(e):i.childAfter(e)))for(;;){if((t<0?i.to<e:i.from>e)&&!i.type.isError)return t<0?Math.max(0,Math.min(i.to-1,e-5)):Math.min(s.length,Math.max(i.from+1,e+5));if(t<0?i.prevSibling():i.nextSibling())break;if(!i.parent())return t<0?0:s.length}}class hx{constructor(e){this.fragments=e,this.i=0,this.fragment=null,this.safeFrom=-1,this.safeTo=-1,this.trees=[],this.start=[],this.index=[],this.nextFragment()}nextFragment(){let e=this.fragment=this.i==this.fragments.length?null:this.fragments[this.i++];if(e){for(this.safeFrom=e.openStart?ld(e.tree,e.from+e.offset,1)-e.offset:e.from,this.safeTo=e.openEnd?ld(e.tree,e.to+e.offset,-1)-e.offset:e.to;this.trees.length;)this.trees.pop(),this.start.pop(),this.index.pop();this.trees.push(e.tree),this.start.push(-e.offset),this.index.push(0),this.nextStart=this.safeFrom}else this.nextStart=1e9}nodeAt(e){if(e<this.nextStart)return null;for(;this.fragment&&this.safeTo<=e;)this.nextFragment();if(!this.fragment)return null;for(;;){let t=this.trees.length-1;if(t<0)return this.nextFragment(),null;let i=this.trees[t],n=this.index[t];if(n==i.children.length){this.trees.pop(),this.start.pop(),this.index.pop();continue}let r=i.children[n],o=this.start[t]+i.positions[n];if(o>e)return this.nextStart=o,null;if(o==e&&o+r.length<=this.safeTo)return o==e&&o>=this.safeFrom?r:null;r instanceof en?(this.index[t]++,this.nextStart=o+r.length):(this.index[t]++,o+r.length>=e&&(this.trees.push(r),this.start.push(o),this.index.push(0)))}}}class cx extends Mp{constructor(){super(...arguments),this.extended=-1,this.mask=0,this.context=0}clear(e){this.start=e,this.value=this.extended=-1}}const ti=new Mp;class dx{constructor(e){this.tokens=[],this.mainToken=ti,this.actions=[],this.tokens=e.tokenizers.map(t=>new cx)}getActions(e,t){let i=0,n=null,{parser:r}=e.p,{tokenizers:o}=r,a=r.stateSlot(e.state,3),l=e.curContext?e.curContext.hash:0;for(let h=0;h<o.length;h++){if((1<<h&a)==0)continue;let c=o[h],d=this.tokens[h];if(!(n&&!c.fallback)&&((c.contextual||d.start!=e.pos||d.mask!=a||d.context!=l)&&(this.updateCachedToken(d,c,e,t),d.mask=a,d.context=l),d.value!=0)){let f=i;if(d.extended>-1&&(i=this.addActions(e,d.extended,d.end,i)),i=this.addActions(e,d.value,d.end,i),!c.extend&&(n=d,i>f))break}}for(;this.actions.length>i;)this.actions.pop();return n||(n=ti,n.start=e.pos,e.pos==t.length?n.accept(e.p.parser.eofTerm,e.pos):n.accept(0,e.pos+1)),this.mainToken=n,this.actions}updateCachedToken(e,t,i,n){if(e.clear(i.pos),t.token(n,e,i),e.value>-1){let{parser:r}=i.p;for(let o=0;o<r.specialized.length;o++)if(r.specialized[o]==e.value){let a=r.specializers[o](n.read(e.start,e.end),i);if(a>=0&&i.p.parser.dialect.allows(a>>1)){(a&1)==0?e.value=a>>1:e.extended=a>>1;break}}}else i.pos==n.length?e.accept(i.p.parser.eofTerm,i.pos):e.accept(0,i.pos+1)}putAction(e,t,i,n){for(let r=0;r<n;r+=3)if(this.actions[r]==e)return n;return this.actions[n++]=e,this.actions[n++]=t,this.actions[n++]=i,n}addActions(e,t,i,n){let{state:r}=e,{parser:o}=e.p,{data:a}=o;for(let l=0;l<2;l++)for(let h=o.stateSlot(r,l?2:1);;h+=3){if(a[h]==65535)if(a[h+1]==1)h=wt(a,h+2);else{n==0&&a[h+1]==2&&(n=this.putAction(wt(a,h+1),t,i,n));break}a[h]==t&&(n=this.putAction(wt(a,h+1),t,i,n))}return n}}var hd;(function(s){s[s.Distance=5]="Distance",s[s.MaxRemainingPerStep=3]="MaxRemainingPerStep",s[s.MinBufferLengthPrune=200]="MinBufferLengthPrune",s[s.ForceReduceLimit=10]="ForceReduceLimit"})(hd||(hd={}));class cd{constructor(e,t,i,n){this.parser=e,this.input=t,this.startPos=i,this.context=n,this.pos=0,this.recovering=0,this.nextStackID=9812,this.nested=null,this.nestEnd=0,this.nestWrap=null,this.reused=[],this.tokens=new dx(e),this.topTerm=e.top[1],this.stacks=[mr.start(this,e.top[0],this.startPos)];let r=n==null?void 0:n.fragments;this.fragments=r&&r.length?new hx(r):null}advance(){if(this.nested){let a=this.nested.advance();return this.pos=this.nested.pos,a&&(this.finishNested(this.stacks[0],a),this.nested=null),null}let e=this.stacks,t=this.pos,i=this.stacks=[],n,r,o;for(let a=0;a<e.length;a++){let l=e[a],h;for(;;){if(l.pos>t)i.push(l);else if(h=this.checkNest(l))(!o||o.stack.score<l.score)&&(o=h);else{if(this.advanceStack(l,i,e))continue;{n||(n=[],r=[]),n.push(l);let c=this.tokens.mainToken;r.push(c.value,c.end)}}break}}if(o)return this.startNested(o),null;if(!i.length){let a=n&&ux(n);if(a)return this.stackToTree(a);if(this.parser.strict)throw Ge&&n&&console.log("Stuck with token "+this.parser.getName(this.tokens.mainToken.value)),new SyntaxError("No parse at "+t);this.recovering||(this.recovering=5)}if(this.recovering&&n){let a=this.runRecovery(n,r,i);if(a)return this.stackToTree(a.forceAll())}if(this.recovering){let a=this.recovering==1?1:this.recovering*3;if(i.length>a)for(i.sort((l,h)=>h.score-l.score);i.length>a;)i.pop();i.some(l=>l.reducePos>t)&&this.recovering--}else if(i.length>1){e:for(let a=0;a<i.length-1;a++){let l=i[a];for(let h=a+1;h<i.length;h++){let c=i[h];if(l.sameState(c)||l.buffer.length>200&&c.buffer.length>200)if((l.score-c.score||l.buffer.length-c.buffer.length)>0)i.splice(h--,1);else{i.splice(a--,1);continue e}}}}this.pos=i[0].pos;for(let a=1;a<i.length;a++)i[a].pos<this.pos&&(this.pos=i[a].pos);return null}advanceStack(e,t,i){let n=e.pos,{input:r,parser:o}=this,a=Ge?this.stackID(e)+" -> ":"";if(this.fragments){let c=e.curContext&&e.curContext.tracker.strict,d=c?e.curContext.hash:0;for(let f=this.fragments.nodeAt(n);f;){let u=this.parser.nodeSet.types[f.type.id]==f.type?o.getGoto(e.state,f.type.id):-1;if(u>-1&&f.length&&(!c||(f.contextHash||0)==d))return e.useNode(f,u),Ge&&console.log(a+this.stackID(e)+` (via reuse of ${o.getName(f.type.id)})`),!0;if(!(f instanceof ce)||f.children.length==0||f.positions[0]>0)break;let p=f.children[0];if(p instanceof ce)f=p;else break}}let l=o.stateSlot(e.state,4);if(l>0)return e.reduce(l),Ge&&console.log(a+this.stackID(e)+` (via always-reduce ${o.getName(l&65535)})`),!0;let h=this.tokens.getActions(e,r);for(let c=0;c<h.length;){let d=h[c++],f=h[c++],u=h[c++],p=c==h.length||!i,m=p?e:e.split();if(m.apply(d,f,u),Ge&&console.log(a+this.stackID(m)+` (via ${(d&65536)==0?"shift":`reduce of ${o.getName(d&65535)}`} for ${o.getName(f)} @ ${n}${m==e?"":", split"})`),p)return!0;m.pos>n?t.push(m):i.push(m)}return!1}advanceFully(e,t){let i=e.pos;for(;;){let n=this.checkNest(e);if(n)return n;if(!this.advanceStack(e,null,null))return!1;if(e.pos>i)return dd(e,t),!0}}runRecovery(e,t,i){let n=null,r=!1,o;for(let a=0;a<e.length;a++){let l=e[a],h=t[a<<1],c=t[(a<<1)+1],d=Ge?this.stackID(l)+" -> ":"";if(l.deadEnd){if(r)continue;r=!0,l.restart(),Ge&&console.log(d+this.stackID(l)+" (restarted)");let p=this.advanceFully(l,i);if(p){p!==!0&&(o=p);continue}}let f=l.split(),u=d;for(let p=0;f.forceReduce()&&p<10;p++){Ge&&console.log(u+this.stackID(f)+" (via force-reduce)");let m=this.advanceFully(f,i);if(m){m!==!0&&(o=m);break}Ge&&(u=this.stackID(f)+" -> ")}for(let p of l.recoverByInsert(h))Ge&&console.log(d+this.stackID(p)+" (via recover-insert)"),this.advanceFully(p,i);this.input.length>l.pos?(c==l.pos&&(c++,h=0),l.recoverByDelete(h,c),Ge&&console.log(d+this.stackID(l)+` (via recover-delete ${this.parser.getName(h)})`),dd(l,i)):(!n||n.score<l.score)&&(n=l)}if(n)return n;if(o){for(let a of this.stacks)if(a.score>o.stack.score){o=void 0;break}}return o&&this.startNested(o),null}forceFinish(){let e=this.stacks[0].split();return this.nested&&this.finishNested(e,this.nested.forceFinish()),this.stackToTree(e.forceAll())}stackToTree(e,t=e.pos){return this.parser.context&&e.emitContext(),ce.build({buffer:gr.create(e),nodeSet:this.parser.nodeSet,topID:this.topTerm,maxBufferLength:this.parser.bufferLength,reused:this.reused,start:this.startPos,length:t-this.startPos,minRepeatType:this.parser.minRepeatTerm})}checkNest(e){let t=this.parser.findNested(e.state);if(!t)return null;let i=t.value;return typeof i=="function"&&(i=i(this.input,e)),i?{stack:e,info:t,spec:i}:null}startNested(e){let{stack:t,info:i,spec:n}=e;this.stacks=[t],this.nestEnd=this.scanForNestEnd(t,i.end,n.filterEnd),this.nestWrap=typeof n.wrapType=="number"?this.parser.nodeSet.types[n.wrapType]:n.wrapType||null,n.startParse?this.nested=n.startParse(this.input.clip(this.nestEnd),t.pos,this.context):this.finishNested(t)}scanForNestEnd(e,t,i){for(let n=e.pos;n<this.input.length;n++)if(ti.start=n,ti.value=-1,t.token(this.input,ti,e),ti.value>-1&&(!i||i(this.input.read(n,ti.end))))return n;return this.input.length}finishNested(e,t){this.nestWrap?t=new ce(this.nestWrap,t?[t]:[],t?[0]:[],this.nestEnd-e.pos):t||(t=new ce(Ce.none,[],[],this.nestEnd-e.pos));let i=this.parser.findNested(e.state);e.useNode(t,this.parser.getGoto(e.state,i.placeholder,!0)),Ge&&console.log(this.stackID(e)+" (via unnest)")}stackID(e){let t=(Bo||(Bo=new WeakMap)).get(e);return t||Bo.set(e,t=String.fromCodePoint(this.nextStackID++)),t+e}}function dd(s,e){for(let t=0;t<e.length;t++){let i=e[t];if(i.pos==s.pos&&i.sameState(s)){e[t].score<s.score&&(e[t]=s);return}}e.push(s)}class fx{constructor(e,t,i){this.source=e,this.flags=t,this.disabled=i}allows(e){return!this.disabled||this.disabled[e]==0}}class br{constructor(e){if(this.bufferLength=ul,this.strict=!1,this.cachedDialect=null,e.version!=13)throw new RangeError(`Parser version (${e.version}) doesn't match runtime version (${13})`);let t=ls(e.tokenData),i=e.nodeNames.split(" ");this.minRepeatTerm=i.length,this.context=e.context;for(let a=0;a<e.repeatNodeCount;a++)i.push("");let n=[];for(let a=0;a<i.length;a++)n.push([]);function r(a,l,h){n[a].push([l,l.deserialize(String(h))])}if(e.nodeProps)for(let a of e.nodeProps){let l=a[0];for(let h=1;h<a.length;){let c=a[h++];if(c>=0)r(c,l,a[h++]);else{let d=a[h+-c];for(let f=-c;f>0;f--)r(a[h++],l,d);h++}}}if(this.specialized=new Uint16Array(e.specialized?e.specialized.length:0),this.specializers=[],e.specialized)for(let a=0;a<e.specialized.length;a++)this.specialized[a]=e.specialized[a].term,this.specializers[a]=e.specialized[a].get;this.states=ls(e.states,Uint32Array),this.data=ls(e.stateData),this.goto=ls(e.goto);let o=Object.keys(e.topRules).map(a=>e.topRules[a][1]);this.nodeSet=new pl(i.map((a,l)=>Ce.define({name:l>=this.minRepeatTerm?void 0:a,id:l,props:n[l],top:o.indexOf(l)>-1,error:l==0,skipped:e.skippedNodes&&e.skippedNodes.indexOf(l)>-1}))),this.maxTerm=e.maxTerm,this.tokenizers=e.tokenizers.map(a=>typeof a=="number"?new vs(t,a):a),this.topRules=e.topRules,this.nested=(e.nested||[]).map(([a,l,h,c])=>({name:a,value:l,end:new vs(ls(h),0),placeholder:c})),this.dialects=e.dialects||{},this.dynamicPrecedences=e.dynamicPrecedences||null,this.tokenPrecTable=e.tokenPrec,this.termNames=e.termNames||null,this.maxNode=this.nodeSet.types.length-1,this.dialect=this.parseDialect(),this.top=this.topRules[Object.keys(this.topRules)[0]]}parse(e,t=0,i={}){typeof e=="string"&&(e=xc(e));let n=new cd(this,e,t,i);for(;;){let r=n.advance();if(r)return r}}startParse(e,t=0,i={}){return typeof e=="string"&&(e=xc(e)),new cd(this,e,t,i)}getGoto(e,t,i=!1){let n=this.goto;if(t>=n[0])return-1;for(let r=n[t+1];;){let o=n[r++],a=o&1,l=n[r++];if(a&&i)return l;for(let h=r+(o>>1);r<h;r++)if(n[r]==e)return l;if(a)return-1}}hasAction(e,t){let i=this.data;for(let n=0;n<2;n++)for(let r=this.stateSlot(e,n?2:1),o;;r+=3){if((o=i[r])==65535)if(i[r+1]==1)o=i[r=wt(i,r+2)];else{if(i[r+1]==2)return wt(i,r+2);break}if(o==t||o==0)return wt(i,r+1)}return 0}stateSlot(e,t){return this.states[e*6+t]}stateFlag(e,t){return(this.stateSlot(e,0)&t)>0}findNested(e){let t=this.stateSlot(e,0);return t&4?this.nested[t>>10]:null}validAction(e,t){if(t==this.stateSlot(e,4))return!0;for(let i=this.stateSlot(e,1);;i+=3){if(this.data[i]==65535)if(this.data[i+1]==1)i=wt(this.data,i+2);else return!1;if(t==wt(this.data,i+1))return!0}}nextStates(e){let t=[];for(let i=this.stateSlot(e,1);;i+=3){if(this.data[i]==65535)if(this.data[i+1]==1)i=wt(this.data,i+2);else break;if((this.data[i+2]&1)==0){let n=this.data[i+1];t.some((r,o)=>o&1&&r==n)||t.push(this.data[i],n)}}return t}overrides(e,t){let i=fd(this.data,this.tokenPrecTable,t);return i<0||fd(this.data,this.tokenPrecTable,e)<i}configure(e){let t=Object.assign(Object.create(br.prototype),this);if(e.props&&(t.nodeSet=this.nodeSet.extend(...e.props)),e.top){let i=this.topRules[e.top];if(!i)throw new RangeError(`Invalid top rule name ${e.top}`);t.top=i}return e.tokenizers&&(t.tokenizers=this.tokenizers.map(i=>{let n=e.tokenizers.find(r=>r.from==i);return n?n.to:i})),e.dialect&&(t.dialect=this.parseDialect(e.dialect)),e.nested&&(t.nested=this.nested.map(i=>Object.prototype.hasOwnProperty.call(e.nested,i.name)?{name:i.name,value:e.nested[i.name],end:i.end,placeholder:i.placeholder}:i)),e.strict!=null&&(t.strict=e.strict),e.bufferLength!=null&&(t.bufferLength=e.bufferLength),t}getName(e){return this.termNames?this.termNames[e]:String(e<=this.maxNode&&this.nodeSet.types[e].name||e)}get eofTerm(){return this.maxNode+1}get hasNested(){return this.nested.length>0}get topNode(){return this.nodeSet.types[this.top[1]]}dynamicPrecedence(e){let t=this.dynamicPrecedences;return t==null?0:t[e]||0}parseDialect(e){if(this.cachedDialect&&this.cachedDialect.source==e)return this.cachedDialect;let t=Object.keys(this.dialects),i=t.map(()=>!1);if(e)for(let r of e.split(" ")){let o=t.indexOf(r);o>=0&&(i[o]=!0)}let n=null;for(let r=0;r<t.length;r++)if(!i[r])for(let o=this.dialects[t[r]],a;(a=this.data[o++])!=65535;)(n||(n=new Uint8Array(this.maxTerm+1)))[a]=1;return this.cachedDialect=new fx(e,i,n)}static deserialize(e){return new br(e)}}function wt(s,e){return s[e]|s[e+1]<<16}function fd(s,e,t){for(let i=e,n;(n=s[i])!=65535;i++)if(n==t)return i-e;return-1}function ux(s){let e=null;for(let t of s)t.pos==t.p.input.length&&t.p.parser.stateFlag(t.state,2)&&(!e||e.score<t.score)&&(e=t);return e}const px=br.deserialize({version:13,states:"$bOVQPOOOOQO'#Cb'#CbOnQPO'#CeOvQPO'#CjOOQO'#Cp'#CpQOQPOOOOQO'#Cg'#CgO}QPO'#CfO!SQPO'#CrOOQO,59P,59PO![QPO,59PO!aQPO'#CuOOQO,59U,59UO!iQPO,59UOVQPO,59QOqQPO'#CkO!nQPO,59^OOQO1G.k1G.kOVQPO'#ClO!vQPO,59aOOQO1G.p1G.pOOQO1G.l1G.lOOQO,59V,59VOOQO-E6i-E6iOOQO,59W,59WOOQO-E6j-E6j",stateData:"#O~OcOS~OQSORSOSSOTSOWQO]ROePO~OVXOeUO~O[[O~PVOg^O~Oh_OVfX~OVaO~OhbO[iX~O[dO~Oh_OVfa~OhbO[ia~O",goto:"!kjPPPPPPkPPkqwPPk{!RPPP!XP!ePP!hXSOR^bQWQRf_TVQ_Q`WRg`QcZRicQTOQZRQe^RhbRYQR]R",nodeNames:"\u26A0 JsonText True False Null Number String } { Object Property PropertyName ] [ Array",maxTerm:25,nodeProps:[[Y.openedBy,7,"{",12,"["],[Y.closedBy,8,"}",13,"]"]],skippedNodes:[0],repeatNodeCount:2,tokenData:"(p~RaXY!WYZ!W]^!Wpq!Wrs!]|}$i}!O$n!Q!R$w!R![&V![!]&h!}#O&m#P#Q&r#Y#Z&w#b#c'f#h#i'}#o#p(f#q#r(k~!]Oc~~!`Upq!]qr!]rs!rs#O!]#O#P!w#P~!]~!wOe~~!zXrs!]!P!Q!]#O#P!]#U#V!]#Y#Z!]#b#c!]#f#g!]#h#i!]#i#j#g~#jR!Q![#s!c!i#s#T#Z#s~#vR!Q![$P!c!i$P#T#Z$P~$SR!Q![$]!c!i$]#T#Z$]~$`R!Q![!]!c!i!]#T#Z!]~$nOh~~$qQ!Q!R$w!R![&V~$|RT~!O!P%V!g!h%k#X#Y%k~%YP!Q![%]~%bRT~!Q![%]!g!h%k#X#Y%k~%nR{|%w}!O%w!Q![%}~%zP!Q![%}~&SPT~!Q![%}~&[ST~!O!P%V!Q![&V!g!h%k#X#Y%k~&mOg~~&rO]~~&wO[~~&zP#T#U&}~'QP#`#a'T~'WP#g#h'Z~'^P#X#Y'a~'fOR~~'iP#i#j'l~'oP#`#a'r~'uP#`#a'x~'}OS~~(QP#f#g(T~(WP#i#j(Z~(^P#X#Y(a~(fOQ~~(kOW~~(pOV~",tokenizers:[0],topRules:{JsonText:[0,1]},tokenPrec:0}),mx=tr.define({parser:px.configure({props:[du.add({Object:Cc({except:/^\s*\}/}),Array:Cc({except:/^\s*\]/})}),uu.add({"Object Array":Vb}),Hw({String:R.string,Number:R.number,"True False":R.bool,PropertyName:R.propertyName,null:R.null,",":R.separator,"[ ]":R.squareBracket,"{ }":R.brace})]}),languageData:{closeBrackets:{brackets:["[","{",'"']},indentOnInput:/^\s*[\}\]]$/}});function gx(){return new Rb(mx)}var Ns;(function(s){s.sync="code-editor-sync",s.update="code-editor-update"})(Ns||(Ns={}));function bx(s=1,e=0,t){let i=e;return function*(){for(;t===void 0||i<t;)yield i,i+=s}()}const $p=new EventTarget,yx=$a(s=>{$p.dispatchEvent(s)},1500);function ud(s,e,t=[],i){return wx(),U.create({doc:s,extensions:[ov(),gv(),A1(),Ac(),F1(),Ov(),O1(),Jw.fallback,Zb(),yv(),Ew(),Fw(),Ac(),qy(),vx(e),L.editable.of(i),fl.of([...Fy,...fv,...Xy,...Rw,...Yv,...nx,...xv,...bp]),...t,xx]})}function vx(s){return s!=="json"&&console.log("TODO"),gx()}const wx=kb(()=>{L.baseTheme({})}),xx=Me.define({create(){return 0},update(s,e){if(e.docChanged){const t=new CustomEvent(Ns.update,{detail:{transaction:e},bubbles:!0,composed:!0});yx(t)}return e.docChanged?s+1:s}}),Sx=new ResizeObserver(kx);function kx(s){for(let e of s)e.target instanceof Ci&&e.target.requestUpdate()}var Mt=globalThis&&globalThis.__decorate||function(s,e,t,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,i);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(r=(n<3?o(r):n>3?o(e,t,r):o(e,t))||r);return n>3&&r&&Object.defineProperty(e,t,r),r},Wa,Ws;let mt=Wa=(Ws=class extends Ci{constructor(){super(),this.copyText="Copy Manifest",this.readOnly=!1,this.editorEmitter=$p,this.copied=!1,this.updateEditor=$a(()=>{var e;this.editorState=ud(this.startText||"","json",[],!this.readOnly),this.editorView?this.editorView.setState(this.editorState):this.editorView=new L({state:this.editorState,root:this.shadowRoot||void 0,parent:((e=this.shadowRoot)==null?void 0:e.getElementById(this.editorId))||void 0})},2e3),this.editorId=`editor-${Wa.editorIdGenerator.next().value}`,this.editorEmitter.addEventListener(Ns.sync,e=>{const t=e;this.startText=t.detail.text,this.updateEditor()}),this.editorEmitter.addEventListener(Ns.update,$a(e=>{this.dispatchEvent(e)})),Sx.observe(this)}static get styles(){return[pg`

        :host {
          position: relative;
        }

        sl-button::part(base) {
          --sl-button-font-size-medium: 14px;
        }
        
        #copy-block {
          display: flex;
          justify-content: flex-end;
          margin-bottom: 10px;
          position: sticky;
          top: 0;
          z-index: 1;
        }

        .editor-container {
          font-size: 14px;
        }
      `]}connectedCallback(){super.connectedCallback(),this.updateEditor()}updated(e){var t;e.has("startText")&&(this.editorState=ud(this.startText||"","json",[],!this.readOnly),this.editorView?this.editorView.setState(this.editorState):this.editorView=new L({state:this.editorState,root:this.shadowRoot||void 0,parent:((t=this.shadowRoot)==null?void 0:t.getElementById(this.editorId))||void 0}))}async copyCode(){var i;let e=new CustomEvent("editorCopied",{bubbles:!0,composed:!0});this.dispatchEvent(e);const t=(i=this.editorState)==null?void 0:i.doc;if(t)try{await navigator.clipboard.writeText(t.toString()),this.copyText="Copied",this.copied=!0,setTimeout(()=>{this.copyText="Copy Manifest",this.copied=!1},3e3)}catch(n){console.warn("Copying failed with the following err",n)}}render(){return wg`
      <div id="copy-block">
        <slot>
          <sl-button
            ?disabled="${this.copied}"
            @click="${()=>this.copyCode()}"
            class="copy-button"
          >
            ${this.copyText}</sl-button
          >
        </slot>
      </div>

      <div id=${this.editorId} class="editor-container ${this.className}" ></div>
    `}},(()=>{Ws.editorIdGenerator=bx()})(),Ws);Mt([Er({type:String})],mt.prototype,"startText",void 0);Mt([Er({type:String})],mt.prototype,"copyText",void 0);Mt([Er({type:Boolean})],mt.prototype,"readOnly",void 0);Mt([Js()],mt.prototype,"editorState",void 0);Mt([Js()],mt.prototype,"editorView",void 0);Mt([Js()],mt.prototype,"editorId",void 0);Mt([Js()],mt.prototype,"editorEmitter",void 0);Mt([Js()],mt.prototype,"copied",void 0);mt=Wa=Mt([Eg("code-editor")],mt);var Il=globalThis&&globalThis.__decorate||function(s,e,t,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,i);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(r=(n<3?o(r):n>3?o(e,t,r):o(e,t))||r);return n>3&&r&&Object.defineProperty(e,t,r),r};let yr=class extends Je{constructor(){super(),this.manifest={},this.showCopyToast=!1}static get styles(){return[Vt`
        #code-holder {
          position: relative;
          max-width: 700px;
        }
        #code-editor {
          overflow-x: scroll;
          margin: 0;
          background-color: #f6f8fa;
          padding: 5px;
          padding-top: 0;
          font-size: 16px;
        }
        #copy-manifest {
          position: absolute;
          top: 5px;
          right: 5px;
          display: flex;
          align-items: center;
        }
        #copy-manifest:hover {
          cursor: pointer;
        }
      `]}firstUpdated(){}render(){return O`
      <div id="code-holder">
        <code-editor .startText=${Qd(this.manifest)} .readOnly=${!1}></code-editor>
      </div>
      ${this.showCopyToast?O`<app-toast>Manifest Copied to Clipboard</app-toast>`:O``}
    `}};Il([Ne({type:Object})],yr.prototype,"manifest",void 0);Il([q()],yr.prototype,"showCopyToast",void 0);yr=Il([jt("manifest-code-form")],yr);var pi=globalThis&&globalThis.__decorate||function(s,e,t,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,i);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(r=(n<3?o(r):n>3?o(e,t,r):o(e,t))||r);return n>3&&r&&Object.defineProperty(e,t,r),r};let Ut=class extends Je{constructor(){super(),this._initialManifest={},this.manifestURL="",this.baseURL="",this.startingTab="info",this.manifest={},this.selectedTab="info"}set initialManifest(e){let t=this._initialManifest;this._initialManifest=e,this.manifest=JSON.parse(JSON.stringify(this.initialManifest)),this.requestUpdate("initialManifest",t)}get initialManifest(){return this._initialManifest}static get styles(){return Vt`
      sl-tab::part(base) {
        --sl-font-size-small: 14px;
        --sl-spacing-medium: .75rem;
        --sl-space-large: 1rem;
        position: relative;
      }
      .error-indicator {
        position: absolute;
        right: .5em;
      }
      sl-tab-group {
        --indicator-color: #4F3FB6;
      }
      sl-tab::part(base):hover {
        color: #4F3FB6;
      }
      sl-tab[active]::part(base) {
        color: #4F3FB6;
        font-weight: bold;
      }
      sl-tab-panel::part(base){
        overflow-y: auto;
        overflow-x: hidden;
        height: 500px;
        padding: 1em .5em .5em .5em;
      }

      @media(max-width: 765px){

      }

      @media(max-width: 600px){

      }

      @media(max-width: 480px){
        sl-tab::part(base) {
          --sl-font-size-small: 12px;
          --sl-spacing-medium: .5rem;
          --sl-space-large: .75em;
        }
      }
    `}async firstUpdated(){}updateManifest(e,t){if(e==="screenshots"||e==="icons"){let i=this.manifest[e]||[];t.forEach(n=>{i.push(n)}),t=i}this.manifest={...this.manifest,[e]:t}}resetManifest(){this.manifest=JSON.parse(JSON.stringify(this.initialManifest)),this.shadowRoot.getElementById("info-tab").initMissingColors(),this.shadowRoot.getElementById("platform-tab").reset()}downloadManifest(){let e="manifest.json";var t=document.createElement("a");t.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(Qd(this.manifest))),t.setAttribute("download",e),t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t);let i=new CustomEvent("manifestDownloaded",{bubbles:!0,composed:!0});this.dispatchEvent(i)}getScreenshots(){return this.manifest.screenshots}errorInTab(e){let t=this.shadowRoot.querySelectorAll("sl-tab"),i=t[0],n=e.detail.panel,r=e.detail.areThereErrors;t.forEach(o=>{o.panel===n&&(i=o)}),r?i.childElementCount==0&&(i.innerHTML=`${i.innerHTML}<span class="error-indicator" style='color: #eb5757'>!</span>`):i.innerHTML=i.innerHTML.split("<")[0]}cleanUrl(e){let t;if(e&&!e.startsWith("http")&&!e.startsWith("https")&&(t="https://"+e),t){if(this.isValidURL(t)===!1&&!e.toLowerCase().startsWith("http://"))throw new Error("This error means that you may have a bad https cert or the url may not be correct");return t}return e}isValidURL(e){var t=new RegExp("^((https?:)?\\/\\/)?(?:\\S+(?::\\S*)?@)?(([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\\\#[-a-z\\\\d_]*)?","i");return!!t.test(e)}setSelectedTab(e){this.selectedTab=e.detail.name;let t=new CustomEvent("tabSwitched",{detail:{tab:this.selectedTab},bubbles:!0,composed:!0});this.dispatchEvent(t)}render(){return O`
      <sl-tab-group id="editor-tabs" @sl-tab-show=${e=>this.setSelectedTab(e)}>
        <sl-tab slot="nav" panel="info" ?active=${this.startingTab==="info"}>Info</sl-tab>
        <sl-tab slot="nav" panel="settings" ?active=${this.startingTab==="settings"}>Settings</sl-tab>
        <sl-tab slot="nav" panel="platform" ?active=${this.startingTab==="platform"}>Platform</sl-tab>
        <sl-tab slot="nav" panel="icons" ?active=${this.startingTab==="icons"}>Icons</sl-tab>
        <sl-tab slot="nav" panel="screenshots" ?active=${this.startingTab==="screenshots"}>Screenshots</sl-tab>
        <!-- <sl-tab slot="nav" panel="preview">Preview</sl-tab> -->
        <sl-tab slot="nav" panel="code">Code</sl-tab>
        <sl-tab-panel name="info"><manifest-info-form id="info-tab" .manifest=${this.manifest} @manifestUpdated=${e=>this.updateManifest(e.detail.field,e.detail.change)} @errorInTab=${e=>this.errorInTab(e)}></manifest-info-form></sl-tab-panel>
        <sl-tab-panel name="settings"><manifest-settings-form .manifest=${this.manifest} @manifestUpdated=${e=>this.updateManifest(e.detail.field,e.detail.change)} @errorInTab=${e=>this.errorInTab(e)}></manifest-settings-form></sl-tab-panel>
        <sl-tab-panel name="platform"><manifest-platform-form id="platform-tab" .manifest=${this.manifest} @manifestUpdated=${e=>this.updateManifest(e.detail.field,e.detail.change)} @errorInTab=${e=>this.errorInTab(e)}></manifest-platform-form></sl-tab-panel>
        <sl-tab-panel name="icons"><manifest-icons-form .manifest=${this.manifest} .manifestURL=${this.cleanUrl(this.manifestURL)} @manifestUpdated=${e=>this.updateManifest(e.detail.field,e.detail.change)} @errorInTab=${e=>this.errorInTab(e)}></manifest-icons-form></sl-tab-panel>
        <sl-tab-panel name="screenshots"><manifest-screenshots-form .manifest=${this.manifest} .manifestURL=${this.cleanUrl(this.manifestURL)} .baseURL=${this.cleanUrl(this.baseURL)} @manifestUpdated=${e=>this.updateManifest(e.detail.field,e.detail.change)} @errorInTab=${e=>this.errorInTab(e)}></manifest-screenshots-form></sl-tab-panel>
        <!-- <sl-tab-panel name="preview"><manifest-preview-form .manifest=${this.manifest} .manifestURL=${this.cleanUrl(this.manifestURL)} @manifestUpdated=${e=>this.updateManifest(e.detail.field,e.detail.change)}></manifest-preview-form></sl-tab-panel> -->
        <sl-tab-panel name="code"><manifest-code-form .manifest=${this.manifest} @manifestUpdated=${e=>this.updateManifest(e.detail.field,e.detail.change)}></manifest-code-form></sl-tab-panel>
      </sl-tab-group>
    `}};pi([Ne({type:Object})],Ut.prototype,"initialManifest",null);pi([Ne({type:String})],Ut.prototype,"manifestURL",void 0);pi([Ne({type:String})],Ut.prototype,"baseURL",void 0);pi([Ne({type:String})],Ut.prototype,"startingTab",void 0);pi([q()],Ut.prototype,"manifest",void 0);pi([q()],Ut.prototype,"selectedTab",void 0);Ut=pi([jt("pwa-manifest-editor")],Ut);var Cx=Object.defineProperty,Ax=Object.getOwnPropertyDescriptor,rn=(s,e,t,i)=>{for(var n=i>1?void 0:i?Ax(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&Cx(e,t,n),n};let Yi=class extends Vs{constructor(){super(),this.manifest={},this.manifestURL="",this.baseURL="",this.isGenerated=!1}static get styles(){return[ve`
      * {
        box-sizing: border-box;
      }
      
      #frame-wrapper {
        display: flex;
        flex-direction: column;
        row-gap: .5em;
        width: 100%;
      }
      #frame-content {
        display: flex;
        flex-direction: column;
        row-gap: 1em;
        padding: 1em;
      }
      #frame-header {
        display: flex;
        flex-direction: column;
        row-gap: .5em;
      }
      #frame-header > * {
        margin: 0;
      }
      #frame-header h1 {
        font-size: 24px;
      }
      #frame-header p {
        font-size: 14px;
      }
      #frame-footer {
        background-color: #F2F3FB;
        padding: 1.5em 2em;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .arrow_link {
        margin: 0;
        border-bottom: 1px solid #4F3FB6;
      }
      .arrow_anchor {
        text-decoration: none;
        font-size: 14px;
        font-weight: bold;
        margin: 0px 0.5em 0px 0px;
        line-height: 1em;
        color: rgb(79, 63, 182);
        display: flex;
        column-gap: 10px;
        white-space: nowrap;
        width: fit-content;
      }
      .arrow_anchor:visited {
        color: #4F3FB6;
      }
      .arrow_anchor:hover {
        cursor: pointer;
      }
      .arrow_anchor:hover img {
        animation: bounce 1s;
      }
      @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        }
        40% {
          transform: translateX(-5px);
        }
        60% {
            transform: translateX(5px);
        }
      }
      #footer-links {
        display: flex;
        flex-direction: column;
        row-gap: 1em;
        width: 50%;
      }
      #footer-actions {
        display: flex;
        flex-direction: column;
        row-gap: .5em;
        align-items: center;
        width: 50%;
      }
      #footer-actions sl-checkbox::part(base){
        --sl-input-font-size-medium: 12px;
      }
      .primary {
        background: black;
        color: white;
        border: none;
        font-size: 16px;
        font-weight: bold;
        border-radius: 50px;
        padding: 1em 1em;
        width: 75%;
      }
      .primary:hover {
        cursor: pointer;
      }

      #add-to-pack {
        white-space: nowrap;
      }

      .dialog {
        --footer-spacing: 0;
      }
      
      .dialog::part(body){
        padding: 0;
      }
      .dialog::part(title){
        display: none;
      }
      .dialog::part(panel) {
        position: relative;
        border-radius: 20px;
      }
      .dialog::part(overlay){
          backdrop-filter: blur(10px);
        }
      .dialog::part(close-button__base){
        position: absolute;
        top: 5px;
        right: 5px;
        z-index: 1000;
      }

      @media(max-width: 600px){  
        
        #frame-footer {
          flex-direction: column-reverse;
          gap: 1em;
        }
        #footer-actions {
          width: 100%;
        }
        #footer-links {
          width: 100%;
          align-items: center;
        }
        .primary {
          font-size: 14px;
          white-space: nowrap;
          width: 100%;
        }
      }

      @media(max-width: 480px){  
        #frame-header h1 {
          font-size: 22px;
        }
        #frame-header p {
          font-size: 12px;
        }
        .arrow_anchor {
          font-size: 12px;
        }
      }

      /* < 480px */
      ${Xa(ve`
          
      `)}
      /* 480px - 639px */
      ${Za(ve`
      `)}
      /* 640px - 1023px */
      ${qd(ve`
      `)}
      /*1024px - 1365px*/
      ${Hd(ve`
      `)}
      /* > 1920 */
      ${Vd(ve`
          
      `)}
    `]}connectedCallback(){super.connectedCallback(),this.manifest=Un().manifest,this.manifestURL=Un().manifestUrl,this.baseURL=sessionStorage.getItem("current_url")}downloadManifest(){this.shadowRoot.querySelector("pwa-manifest-editor").downloadManifest();let e=new CustomEvent("readyForRetest",{bubbles:!0,composed:!0});this.dispatchEvent(e)}async hideDialog(s){let e=this.shadowRoot.querySelector(".dialog");s.target===e&&(await e.hide(),Z("manifest_editor_closed",Q.ProcessCheckpoint),document.body.style.height="unset")}handleTabSwitch(s){Z(`manifest_editor.${s.detail.tab}_tab_selected`,Q.ProcessCheckpoint)}handleManifestDownloaded(){Z("manifest_editor.download_manifest_clicked",Q.ProcessCheckpoint)}handleFieldChange(s){Z("manifest_editor.field_change_attempted",Q.ProcessCheckpoint,{field:s.detail.field})}handleManifestCopied(){Z("manifest_editor.copy_manifest_clicked",Q.ProcessCheckpoint)}handleImageGeneration(s,e){e==="icons"?Z("manifest_editor.icon_generation_attempted",Q.ProcessCheckpoint,{platforms:[...s.detail.selectedPlatforms]}):Z("manifest_editor.screenshot_generation_attempted",Q.ProcessCheckpoint)}handleUploadIcon(){Z("manifest_editor.upload_icon_clicked",Q.ProcessCheckpoint)}render(){return g`
      <sl-dialog class="dialog" @sl-show=${()=>document.body.style.height="100vh"} @sl-hide=${s=>this.hideDialog(s)} noHeader>
        <div id="frame-wrapper">
          <div id="frame-content">
            <div id="frame-header">
              <h1>${this.isGenerated?"Generate manifest":"Edit your manifest"}</h1>
              <p>Update your app name and description, add or update your icons, enable platform capabilities and more by editing the fields below. Once you are done with your changes, download or copy the generated manifest and/or icons and upload them to your site. Once done, re-test the url to make sure your PWA is ready for stores!</p>
            </div>
            <pwa-manifest-editor 
              .initialManifest=${this.manifest} 
              .manifestURL=${this.manifestURL} 
              .baseURL=${this.baseURL}
              @tabSwitched=${s=>this.handleTabSwitch(s)}
              @manifestDownloaded=${()=>this.handleManifestDownloaded()}
              @fieldChangeAttempted=${s=>this.handleFieldChange(s)}
              @editorCopied=${()=>this.handleManifestCopied()}
              @generateScreenshotsAttempted=${s=>this.handleImageGeneration(s,"screenshots")}
              @uploadIcons=${()=>this.handleUploadIcon()}
              @generateIconsAttempted=${s=>this.handleImageGeneration(s,"icons")}
            ></pwa-manifest-editor>
            
          </div>
          <div id="frame-footer" slot="footer">
            <div id="footer-links">
                <a class="arrow_anchor" href="https://aka.ms/install-pwa-studio" rel="noopener" target="_blank">
                  <p class="arrow_link">VS Code Extension</p> 
                  <img src="/assets/new/arrow.svg" alt="arrow" role="presentation"/>
                </a>
                <a class="arrow_anchor" href="https://docs.pwabuilder.com/#/home/pwa-intro?id=web-app-manifests" rel="noopener" target="_blank">
                  <p class="arrow_link">Manifest Documentation</p> 
                  <img src="/assets/new/arrow.svg" alt="arrow" role="presentation"/>
                </a>
            </div>
            <div id="footer-actions">
              <button type="button" class="primary" @click=${()=>this.downloadManifest()}>Download Manifest</button>
            </div>
          </div>
        </div>
      </sl-dialog>
    `}};rn([M()],Yi.prototype,"manifest",2);rn([M()],Yi.prototype,"manifestURL",2);rn([M()],Yi.prototype,"baseURL",2);rn([Ae({type:Boolean})],Yi.prototype,"isGenerated",2);Yi=rn([Hs("manifest-editor-frame")],Yi);var Mx=Object.defineProperty,$x=Object.getOwnPropertyDescriptor,Tp=(s,e,t,i)=>{for(var n=i>1?void 0:i?$x(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&Mx(e,t,n),n};let qa=class extends Vs{constructor(){super(),this.sw={}}static get styles(){return ve`

      .panel-holder {
        display: flex;
        flex-direction: column;
        gap: 1em;
      }

      .panel-holder h2 {
        margin: 0;
        font-size: 22px;
      }

      .panel-holder p {
        margin: 0;
        font-size: 14px;
        color: #808080;
      }

      .panel-desc .code-block {
        display: flex;
        flex-direction: column;
        gap: .75em;
      }


    `}handleEditorUpdate(){console.log("update")}render(){return g`
      <div class="panel-holder">
        <div class="panel-desc">
          <h2>${this.sw.type}</h2>
          <p>${this.sw.desc}</p>
        </div>
        <div class="code-block">
          <h2>Code</h2>
          <code-editor
            copyText="Copy Service Worker"
            .startText=${this.sw.code}
            .readOnly=${!0}
          >
        </code-editor>
        </div>
      </div>
    `}};Tp([Ae({type:Object})],qa.prototype,"sw",2);qa=Tp([Hs("sw-panel")],qa);const No=[{type:"Offline Pages",desc:'This simple but elegant solution pulls a file from your web server called "offline.html" (make sure that file is actually there) and serves the file whenever a network connection can not be made.',code:`// This is the "Offline page" service worker

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

const CACHE = "pwabuilder-page";

// TODO: replace the following with the correct offline fallback page i.e.: const offlineFallbackPage = "offline.html";
const offlineFallbackPage = "ToDo-replace-this-name.html";

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener('install', async (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.add(offlineFallbackPage))
  );
});

if (workbox.navigationPreload.isSupported()) {
  workbox.navigationPreload.enable();
}

self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const preloadResp = await event.preloadResponse;

        if (preloadResp) {
          return preloadResp;
        }

        const networkResp = await fetch(event.request);
        return networkResp;
      } catch (error) {

        const cache = await caches.open(CACHE);
        const cachedResp = await cache.match(offlineFallbackPage);
        return cachedResp;
      }
    })());
  }
});`},{type:"Offline Page Copy of Pages",desc:"A solution that expands the offline capabilities of your app. A copy of each pages is stored in the cache as your visitors view them. This allows a visitor to load any previously viewed page while they are offline",code:`// This is the "Offline copy of pages" service worker

const CACHE = "pwabuilder-offline";

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

workbox.routing.registerRoute(
  new RegExp('/*'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: CACHE
  })
);`},{type:"Offline Copy with Backup Offline Page",desc:'A copy of each pages is stored in the cache as your visitors view them. This allows a visitor to load any previously viewed page while they are offline. This then adds the "offline page" that allows you to customize the message and experience if the app is offline, and the page is not in the cache.',code:`// This is the service worker with the combined offline experience (Offline page + Offline copy of pages)

const CACHE = "pwabuilder-offline-page";

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

// TODO: replace the following with the correct offline fallback page i.e.: const offlineFallbackPage = "offline.html";
const offlineFallbackPage = "ToDo-replace-this-name.html";

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener('install', async (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.add(offlineFallbackPage))
  );
});

if (workbox.navigationPreload.isSupported()) {
  workbox.navigationPreload.enable();
}

workbox.routing.registerRoute(
  new RegExp('/*'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: CACHE
  })
);

self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const preloadResp = await event.preloadResponse;

        if (preloadResp) {
          return preloadResp;
        }

        const networkResp = await fetch(event.request);
        return networkResp;
      } catch (error) {

        const cache = await caches.open(CACHE);
        const cachedResp = await cache.match(offlineFallbackPage);
        return cachedResp;
      }
    })());
  }
});`}];var Tx=Object.defineProperty,Ex=Object.getOwnPropertyDescriptor,Ep=(s,e,t,i)=>{for(var n=i>1?void 0:i?Ex(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&Tx(e,t,n),n};let Ha=class extends Vs{constructor(){super(),this.selectedSW="0",this.swNameList=["Offline Pages","Offline Page Copy of Pages","Offline Copy with Backup Offline Page"]}static get styles(){return ve`

      sl-tab-group {
        --indicator-color: #4F3FB6;
      }
      sl-tab {
        display: flex;
      }
      sl-tab::part(base) {
        --sl-font-size-small: 14px;
        --sl-spacing-medium: .75rem;
        --sl-space-large: 1rem;
        max-width: 190px;
        white-space: unset;
        text-align: center;
        align-self: flex-end;
      }
      sl-tab[active]::part(base) {
        color: #4F3FB6;
      }
      sl-tab::part(base):hover {
        color: #4F3FB6;
      }
      sl-tab-panel::part(base){
        overflow-y: auto;
        overflow-x: hidden;
        height: 500px;
        padding: .5em 0;
      }
      #selector-header {
        display: flex;
        flex-direction: column;
        gap: .5em;
        padding-top: 1em;
      }
      #selector-header h1 {
        margin: 0;
        font-size: 24px;
      }
      #selector-header p {
        margin: 0;
        font-size: 14px;
      }
      .dialog {
        --footer-spacing: 0;
      }
      .dialog::part(body){
        padding-top: 0;
      }
      .dialog::part(title){
        display: none;
      }
      .dialog::part(overlay){
          backdrop-filter: blur(10px);
        }
      .dialog::part(panel) {
        position: relative;
        border-radius: 20px;
      }
      .dialog::part(close-button__base){
        position: absolute;
        top: 5px;
        right: 5px;
        z-index: 1000;
      }

      #frame-footer {
        background-color: #F2F3FB;
        padding: 1.5em 2em;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .arrow_link {
        margin: 0;
        border-bottom: 1px solid #4F3FB6;
      }
      .arrow_anchor {
        text-decoration: none;
        font-size: 14px;
        font-weight: bold;
        margin: 0px 0.5em 0px 0px;
        line-height: 1em;
        color: rgb(79, 63, 182);
        display: flex;
        column-gap: 10px;
        white-space: nowrap;
        width: fit-content;
      }
      .arrow_anchor:visited {
        color: #4F3FB6;
      }
      .arrow_anchor:hover {
        cursor: pointer;
      }
      .arrow_anchor:hover img {
        animation: bounce 1s;
      }
      @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        }
        40% {
          transform: translateX(-5px);
        }
        60% {
            transform: translateX(5px);
        }
      }
      #footer-links {
        display: flex;
        flex-direction: column;
        row-gap: 1em;
        width: 50%;
      }
      #footer-links #instructions {
        font-size: 14px;
        color: #808080;
        text-align: left;
        margin: 0;
      }
      #footer-actions {
        display: flex;
        flex-direction: column;
        row-gap: .5em;
        align-items: center;
        width: 50%;
      }
      #footer-actions sl-checkbox::part(base){
        --sl-input-font-size-medium: 12px;
      }
      .primary {
        background: black;
        color: white;
        border: none;
        font-size: 16px;
        font-weight: bold;
        border-radius: 50px;
        padding: 1em 1em;
        width: 75%;
      }
      .primary:hover {
        cursor: pointer;
      }

      @media(max-width: 600px){  
        
        #frame-footer {
          flex-direction: column-reverse;
          gap: 1em;
        }
        #footer-actions {
          width: 100%;
        }
        #footer-links {
          width: 100%;
          align-items: center;
        }
        .primary {
          font-size: 14px;
          white-space: nowrap;
          width: 100%;
        }
      }
    `}async hideDialog(s){let e=this.shadowRoot.querySelector(".dialog");s.target===e&&(await e.hide(),Z("sw_selector_closed",Q.ProcessCheckpoint),document.body.style.height="unset")}setSelectedSW(s){this.selectedSW=s.detail.name,Z(`${this.selectedSW}_tab_clicked`,Q.ProcessCheckpoint)}downloadSW(){let s="pwabuilder-sw.js";var e=document.createElement("a");e.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(No[parseInt(this.selectedSW)].code)),e.setAttribute("download",s),e.style.display="none",document.body.appendChild(e),e.click(),document.body.removeChild(e),Z(`sw_modal.${this.selectedSW}_downloaded`,Q.ProcessCheckpoint);let t=new CustomEvent("readyForRetest",{bubbles:!0,composed:!0});this.dispatchEvent(t)}render(){return g`
      <sl-dialog class="dialog" @sl-show=${()=>document.body.style.height="100vh"} @sl-hide=${s=>this.hideDialog(s)} noHeader>
        <div id="selector-header">
          <h1>Download a Service Worker</h1>
          <p>Download one of our pre-built Service Workers package that utilize Workbox to make building your offline experience easy.</p>
        </div>
        <sl-tab-group id="sw-tabs" @sl-tab-show=${s=>this.setSelectedSW(s)}>
          ${No.map((s,e)=>g`
            <sl-tab slot="nav" panel=${e}>${this.swNameList[e]}</sl-tab>`)}
          ${No.map((s,e)=>g`
            <sl-tab-panel name=${e}><sw-panel .sw=${s} ></sw-panel></sl-tab-panel>`)}
        </sl-tab-group>

        <div id="frame-footer" slot="footer">
          <div id="footer-links">
            <p id="instructions">Click below for instructions on how to register your Service Worker.</p>
            <a 
              class="arrow_anchor" 
              href="https://docs.pwabuilder.com/#/home/sw-intro?id=registration" 
              rel="noopener" 
              target="_blank"
              @click=${()=>Z("sw_modal.sw_documentation_clicked",Q.ProcessCheckpoint)}>
              <p class="arrow_link">Register your Service Worker</p> 
              <img src="/assets/new/arrow.svg" alt="arrow" role="presentation"/>
            </a>
          </div>
          <div id="footer-actions">
            <button type="button" class="primary" @click=${()=>this.downloadSW()}>Download Service Worker</button>
          </div>
        </div>
      </sl-dialog>
    `}};Ep([M()],Ha.prototype,"selectedSW",2);Ha=Ep([Hs("sw-selector")],Ha);const Px=2e4,pd=[{result:!1,infoString:"Uses HTTPS",category:"required"},{result:!1,infoString:"Has a valid SSL certificate",category:"required"},{result:!1,infoString:"No mixed content on page",category:"required"}];async function _x(s){const e=new Promise(l=>setTimeout(()=>l(),Px)),t=encodeURIComponent(s),i=`${Qa.api}/Security?site=${t}`,n=fetch(i),r=await Promise.race([e,n]);if(!r)return console.warn("Security check timed out after 20 seconds."),pd;if(!r.ok)return console.warn("Security check failed with non-successful status code",r.status,r.statusText),pd;const o=await r.json();return console.info("Security detection completed successfully",o),[{result:o.data.isHTTPS,infoString:o.data.isHTTPS?"Uses HTTPS":"Does not use HTTPS",category:"required"},{result:o.data.valid,infoString:o.data.valid?"Has a valid SSL certificate":"Does not have a valid SSL certificate",category:"required"},{result:o.data.validProtocol,infoString:o.data.validProtocol?"No mixed content on page":"Uses mixed content on page",category:"required"}]}async function Lx(s){console.info("Testing Service Worker");const e=typeof s=="string"&&s.startsWith("http://");if(!s||e)return[];let t,i=!1;try{t=await Rx(s)}catch(r){t={hasSW:!1,url:s,hasPushRegistration:!1,serviceWorkerDetectionTimedOut:!1,noServiceWorkerFoundDetails:`${r}`,hasBackgroundSync:!1,hasPeriodicBackgroundSync:!1}}return t.hasSW&&(i=await Ox(s)),[{result:t.hasSW,infoString:t.hasSW?"Has a Service Worker":"Does not have a Service Worker",category:"required"},{result:i,infoString:i?"Works Offline":"Does not work offline",category:"recommended"},{result:t.hasPeriodicBackgroundSync,infoString:t.hasPeriodicBackgroundSync?"Uses Periodic Sync for a rich offline experience":"Does not use Periodic Sync for a rich offline experience",category:"optional"},{result:t.hasBackgroundSync,infoString:t.hasBackgroundSync?"Uses Background Sync for a rich offline experience":"Does not use Background Sync for a rich offline experience",category:"optional"}]}async function Rx(s){const e=await fetch(`${Qa.serviceWorkerUrl}/serviceWorker/runAllChecks?url=${encodeURIComponent(s)}`);if(!e.ok)throw console.warn("Unable to detect service worker due to HTTP error",e.status,e.statusText),new Error(`Service worker detection failed due to HTTP error ${e.status} ${e.statusText}`);const t=await e.json();return console.info("Service worker detection succeeded",t),t}async function Ox(s){return new Promise(e=>{const t=r=>{r&&e(!0)},i=Dx(s),n=new Promise(r=>{setTimeout(()=>r(!1),1e4)});return i.then(r=>t(r),r=>console.warn("Service worker offline check via Puppeteer failed",r)),Promise.race([i,n]).then(()=>e(!1))})}async function Dx(s){const e=await fetch(`${Qa.serviceWorkerUrl}/serviceworker/GetOfflineSupport?url=${encodeURIComponent(s)}`);if(!e.ok)throw console.warn("Unable to detect offline support via Puppeteer.",e.status,e.statusText),new Error(e.statusText);const t=await e.json();return console.info("Offline support detection completed via Puppeteer. Offline support =",t),t}function ne(s,e){let t=s.length;Array.isArray(s[0])||(s=[s]),Array.isArray(e[0])||(e=e.map(o=>[o]));let i=e[0].length,n=e[0].map((o,a)=>e.map(l=>l[a])),r=s.map(o=>n.map(a=>{let l=0;if(!Array.isArray(o)){for(let h of a)l+=o*h;return l}for(let h=0;h<o.length;h++)l+=o[h]*(a[h]||0);return l}));return t===1&&(r=r[0]),i===1?r.map(o=>o[0]):r}function on(s){return It(s)==="string"}function It(s){return(Object.prototype.toString.call(s).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function vr(s,e){s=+s,e=+e;let t=(Math.floor(s)+"").length;if(e>t)return+s.toFixed(e-t);{let i=10**(t-e);return Math.round(s/i)*i}}function Pp(s){if(!s)return;s=s.trim();const e=/^([a-z]+)\((.+?)\)$/i,t=/^-?[\d.]+$/;let i=s.match(e);if(i){let n=[];return i[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(r,o)=>{/%$/.test(o)?(o=new Number(o.slice(0,-1)/100),o.type="<percentage>"):/deg$/.test(o)?(o=new Number(+o.slice(0,-3)),o.type="<angle>",o.unit="deg"):t.test(o)&&(o=new Number(o),o.type="<number>"),r.startsWith("/")&&(o=o instanceof Number?o:new Number(o),o.alpha=!0),n.push(o)}),{name:i[1].toLowerCase(),rawName:i[1],rawArgs:i[2],args:n}}}function _p(s){return s[s.length-1]}function wr(s,e,t){return isNaN(s)?e:isNaN(e)?s:s+(e-s)*t}function Lp(s,e,t){return(t-s)/(e-s)}function Bl(s,e,t){return wr(e[0],e[1],Lp(s[0],s[1],t))}function Rp(s){return s.map(e=>e.split("|").map(t=>{t=t.trim();let i=t.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(i){let n=new String(i[1]);return n.range=[+i[2],+i[3]],n}return t}))}var Ix=Object.freeze({__proto__:null,isString:on,type:It,toPrecision:vr,parseFunction:Pp,last:_p,interpolate:wr,interpolateInv:Lp,mapRange:Bl,parseCoordGrammar:Rp,multiplyMatrices:ne});class Bx{add(e,t,i){if(typeof arguments[0]!="string"){for(var e in arguments[0])this.add(e,arguments[0][e],arguments[1]);return}(Array.isArray(e)?e:[e]).forEach(function(n){this[n]=this[n]||[],t&&this[n][i?"unshift":"push"](t)},this)}run(e,t){this[e]=this[e]||[],this[e].forEach(function(i){i.call(t&&t.context?t.context:t,t)})}}const Wt=new Bx;var gt={gamut_mapping:"lch.c",precision:5,deltaE:"76"};const ft={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Va(s){return Array.isArray(s)?s:ft[s]}function xr(s,e,t,i={}){if(s=Va(s),e=Va(e),!s||!e)throw new TypeError(`Missing white point to convert ${s?"":"from"}${!s&&!e?"/":""}${e?"":"to"}`);if(s===e)return t;let n={W1:s,W2:e,XYZ:t,options:i};if(Wt.run("chromatic-adaptation-start",n),n.M||(n.W1===ft.D65&&n.W2===ft.D50?n.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:n.W1===ft.D50&&n.W2===ft.D65&&(n.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),Wt.run("chromatic-adaptation-end",n),n.M)return ne(n.M,n.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const Nx=75e-6;var qs,ja,_i,Ar,Op;const Ze=class{constructor(e){Qi(this,qs);Qi(this,Ar);Qi(this,_i,void 0);var n,r,o,a,l,h,c;this.id=e.id,this.name=e.name,this.base=e.base?Ze.get(e.base):null,this.aliases=e.aliases,this.base&&(this.fromBase=e.fromBase,this.toBase=e.toBase);let t=(n=e.coords)!=null?n:this.base.coords;this.coords=t;let i=(o=(r=e.white)!=null?r:this.base.white)!=null?o:"D65";this.white=Va(i),this.formats=(a=e.formats)!=null?a:{};for(let d in this.formats){let f=this.formats[d];f.type||(f.type="function"),f.name||(f.name=d)}e.cssId&&!((l=this.formats.functions)!=null&&l.color)?(this.formats.color={id:e.cssId},Object.defineProperty(this,"cssId",{value:e.cssId})):((h=this.formats)==null?void 0:h.color)&&!((c=this.formats)!=null&&c.color.id)&&(this.formats.color.id=this.id),this.referred=e.referred,Zr(this,_i,cn(this,Ar,Op).call(this).reverse()),Wt.run("colorspace-init-end",this)}inGamut(e,{epsilon:t=Nx}={}){if(this.isPolar)return e=this.toBase(e),this.base.inGamut(e,{epsilon:t});let i=Object.values(this.coords);return e.every((n,r)=>{let o=i[r];if(o.type!=="angle"&&o.range){if(Number.isNaN(n))return!0;let[a,l]=o.range;return(a===void 0||n>=a-t)&&(l===void 0||n<=l+t)}return!0})}get cssId(){var e,t;return((t=(e=this.formats.functions)==null?void 0:e.color)==null?void 0:t.id)||this.id}get isPolar(){for(let e in this.coords)if(this.coords[e].type==="angle")return!0;return!1}getFormat(e){if(typeof e=="object")return e=cn(this,qs,ja).call(this,e),e;let t;return e==="default"?t=Object.values(this.formats)[0]:t=this.formats[e],t?(t=cn(this,qs,ja).call(this,t),t):null}to(e,t){if(arguments.length===1&&([e,t]=[e.space,e.coords]),e=Ze.get(e),this===e)return t;t=t.map(a=>Number.isNaN(a)?0:a);let i=mi(this,_i),n=mi(e,_i),r,o;for(let a=0;a<i.length&&i[a]===n[a];a++)r=i[a],o=a;if(!r)throw new Error(`Cannot convert between color spaces ${this} and ${e}: no connection space was found`);for(let a=i.length-1;a>o;a--)t=i[a].toBase(t);for(let a=o+1;a<n.length;a++)t=n[a].fromBase(t);return t}from(e,t){return arguments.length===1&&([e,t]=[e.space,e.coords]),e=Ze.get(e),e.to(this,t)}toString(){return`${this.name} (${this.id})`}getMinCoords(){var t;let e=[];for(let i in this.coords){let n=this.coords[i],r=n.range||n.refRange;e.push((t=r==null?void 0:r.min)!=null?t:0)}return e}static get all(){return[...new Set(Object.values(Ze.registry))]}static register(e,t){if(arguments.length===1&&(t=arguments[0],e=t.id),t=this.get(t),this.registry[e]&&this.registry[e]!==t)throw new Error(`Duplicate color space registration: '${e}'`);if(this.registry[e]=t,arguments.length===1&&t.aliases)for(let i of t.aliases)this.register(i,t);return t}static get(e,...t){if(!e||e instanceof Ze)return e;if(It(e)==="string"){let n=Ze.registry[e.toLowerCase()];if(!n)throw new TypeError(`No color space found with id = "${e}"`);return n}if(t.length)return Ze.get(...t);throw new TypeError(`${e} is not a valid color space`)}static resolveCoord(e,t){var l;let i=It(e),n,r;if(i==="string"?e.includes(".")?[n,r]=e.split("."):[n,r]=[,e]:Array.isArray(e)?[n,r]=e:(n=e.space,r=e.coordId),n=Ze.get(n),n||(n=t),!n)throw new TypeError(`Cannot resolve coordinate reference ${e}: No color space specified and relative references are not allowed here`);if(i=It(r),i==="number"||i==="string"&&r>=0){let h=Object.entries(n.coords)[r];if(h)return{space:n,id:h[0],index:r,...h[1]}}n=Ze.get(n);let o=r.toLowerCase(),a=0;for(let h in n.coords){let c=n.coords[h];if(h.toLowerCase()===o||((l=c.name)==null?void 0:l.toLowerCase())===o)return{space:n,id:h,index:a,...c};a++}throw new TypeError(`No "${r}" coordinate found in ${n.name}. Its coordinates are: ${Object.keys(n.coords).join(", ")}`)}};let P=Ze;qs=new WeakSet,ja=function(e){if(e.coords&&!e.coordGrammar){e.type||(e.type="function"),e.name||(e.name="color"),e.coordGrammar=Rp(e.coords);let t=Object.entries(this.coords).map(([i,n],r)=>{let o=e.coordGrammar[r][0],a=n.range||n.refRange,l=o.range,h="";return o=="<percentage>"?(l=[0,100],h="%"):o=="<angle>"&&(h="deg"),{fromRange:a,toRange:l,suffix:h}});e.serializeCoords=(i,n)=>i.map((r,o)=>{let{fromRange:a,toRange:l,suffix:h}=t[o];return a&&l&&(r=Bl(a,l,r)),r=vr(r,n),h&&(r+=h),r})}return e},_i=new WeakMap,Ar=new WeakSet,Op=function(){let e=[this];for(let t=this;t=t.base;)e.push(t);return e},Jr(P,"registry",{}),Jr(P,"DEFAULT_FORMAT",{type:"functions",name:"color"});var it=new P({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class ze extends P{constructor(e){var t,i,n;e.coords||(e.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),e.base||(e.base=it),e.toXYZ_M&&e.fromXYZ_M&&((t=e.toBase)!=null||(e.toBase=r=>{let o=ne(e.toXYZ_M,r);return this.white!==this.base.white&&(o=xr(this.white,this.base.white,o)),o}),(i=e.fromBase)!=null||(e.fromBase=r=>(r=xr(this.base.white,this.white,r),ne(e.fromXYZ_M,r)))),(n=e.referred)!=null||(e.referred="display"),super(e)}}function Dp(s){var t,i,n,r,o,a;let e={str:(t=String(s))==null?void 0:t.trim()};if(Wt.run("parse-start",e),e.color)return e.color;if(e.parsed=Pp(e.str),e.parsed){let l=e.parsed.name;if(l==="color"){let h=e.parsed.args.shift(),c=e.parsed.rawArgs.indexOf("/")>0?e.parsed.args.pop():1;for(let f of P.all){let u=f.getFormat("color");if(u&&(h===u.id||((i=u.ids)==null?void 0:i.includes(h)))){let p=Object.keys(f.coords).length,m=Array(p).fill(0);return m.forEach((y,v)=>m[v]=e.parsed.args[v]||0),{spaceId:f.id,coords:m,alpha:c}}}let d="";if(h in P.registry){let f=(o=(r=(n=P.registry[h].formats)==null?void 0:n.functions)==null?void 0:r.color)==null?void 0:o.id;f&&(d=`Did you mean color(${f})?`)}throw new TypeError(`Cannot parse color(${h}). `+(d||"Missing a plugin?"))}else for(let h of P.all){let c=h.getFormat(l);if(c&&c.type==="function"){let d=1;(c.lastAlpha||_p(e.parsed.args).alpha)&&(d=e.parsed.args.pop());let f=e.parsed.args;return c.coordGrammar&&Object.entries(h.coords).forEach(([u,p],m)=>{var S;let y=c.coordGrammar[m],v=(S=f[m])==null?void 0:S.type;if(y=y.find(A=>A==v),!y){let A=p.name||u;throw new TypeError(`${v} not allowed for ${A} in ${l}()`)}let _=y.range;v==="<percentage>"&&(_||(_=[0,1]));let w=p.range||p.refRange;_&&w&&(f[m]=Bl(_,w,f[m]))}),{spaceId:h.id,coords:f,alpha:d}}}}else for(let l of P.all)for(let h in l.formats){let c=l.formats[h];if(c.type!=="custom"||c.test&&!c.test(e.str))continue;let d=c.parse(e.str);if(d)return(a=d.alpha)!=null||(d.alpha=1),d}throw new TypeError(`Could not parse ${s} as a color. Missing a plugin?`)}function j(s){if(!s)throw new TypeError("Empty color reference");on(s)&&(s=Dp(s));let e=s.space||s.spaceId;return e instanceof P||(s.space=P.get(e)),s.alpha===void 0&&(s.alpha=1),s}function an(s,e){return e=P.get(e),e.from(s)}function pt(s,e){let{space:t,index:i}=P.resolveCoord(e,s.space);return an(s,t)[i]}function Ip(s,e,t){return e=P.get(e),s.coords=e.to(s.space,t),s}function fi(s,e,t){if(s=j(s),arguments.length===2&&It(arguments[1])==="object"){let i=arguments[1];for(let n in i)fi(s,n,i[n])}else{typeof t=="function"&&(t=t(pt(s,e)));let{space:i,index:n}=P.resolveCoord(e,s.space),r=an(s,i);r[n]=t,Ip(s,i,r)}return s}var Nl=new P({id:"xyz-d50",name:"XYZ D50",white:"D50",base:it,fromBase:s=>xr(it.white,"D50",s),toBase:s=>xr("D50",it.white,s),formats:{color:{}}});const zx=216/24389,md=24/116,$n=24389/27;let zo=ft.D50;var Ve=new P({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:zo,base:Nl,fromBase(s){let t=s.map((i,n)=>i/zo[n]).map(i=>i>zx?Math.cbrt(i):($n*i+16)/116);return[116*t[1]-16,500*(t[0]-t[1]),200*(t[1]-t[2])]},toBase(s){let e=[];return e[1]=(s[0]+16)/116,e[0]=s[1]/500+e[1],e[2]=e[1]-s[2]/200,[e[0]>md?Math.pow(e[0],3):(116*e[0]-16)/$n,s[0]>8?Math.pow((s[0]+16)/116,3):s[0]/$n,e[2]>md?Math.pow(e[2],3):(116*e[2]-16)/$n].map((i,n)=>i*zo[n])},formats:{lab:{coords:["<percentage> | <number>","<number>","<number>"]}}});function Gr(s){return(s%360+360)%360}function Fx(s,e){if(s==="raw")return e;let[t,i]=e.map(Gr),n=i-t;return s==="increasing"?n<0&&(i+=360):s==="decreasing"?n>0&&(t+=360):s==="longer"?-180<n&&n<180&&(n>0?i+=360:t+=360):s==="shorter"&&(n>180?t+=360:n<-180&&(i+=360)),[t,i]}var zs=new P({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Ve,fromBase(s){let[e,t,i]=s,n;const r=.02;return Math.abs(t)<r&&Math.abs(i)<r?n=NaN:n=Math.atan2(i,t)*180/Math.PI,[e,Math.sqrt(t**2+i**2),Gr(n)]},toBase(s){let[e,t,i]=s;return t<0&&(t=0),isNaN(i)&&(i=0),[e,t*Math.cos(i*Math.PI/180),t*Math.sin(i*Math.PI/180)]},formats:{lch:{coords:["<percentage> | <number>","<number>","<number> | <angle>"]}}});const gd=25**7,Sr=Math.PI,bd=180/Sr,bi=Sr/180;function Ga(s,e,{kL:t=1,kC:i=1,kH:n=1}={}){let[r,o,a]=Ve.from(s),l=zs.from(Ve,[r,o,a])[1],[h,c,d]=Ve.from(e),f=zs.from(Ve,[h,c,d])[1];l<0&&(l=0),f<0&&(f=0);let p=((l+f)/2)**7,m=.5*(1-Math.sqrt(p/(p+gd))),y=(1+m)*o,v=(1+m)*c,_=Math.sqrt(y**2+a**2),w=Math.sqrt(v**2+d**2),S=y===0&&a===0?0:Math.atan2(a,y),A=v===0&&d===0?0:Math.atan2(d,v);S<0&&(S+=2*Sr),A<0&&(A+=2*Sr),S*=bd,A*=bd;let $=h-r,z=w-_,I=A-S,ie=S+A,pe=Math.abs(I),me;_*w===0?me=0:pe<=180?me=I:I>180?me=I-360:I<-180?me=I+360:console.log("the unthinkable has happened");let oe=2*Math.sqrt(w*_)*Math.sin(me*bi/2),se=(r+h)/2,ge=(_+w)/2,re=Math.pow(ge,7),J;_*w===0?J=ie:pe<=180?J=ie/2:ie<360?J=(ie+360)/2:J=(ie-360)/2;let $e=(se-50)**2,nt=1+.015*$e/Math.sqrt(20+$e),Ul=1+.045*ge,Zi=1;Zi-=.17*Math.cos((J-30)*bi),Zi+=.24*Math.cos(2*J*bi),Zi+=.32*Math.cos((3*J+6)*bi),Zi-=.2*Math.cos((4*J-63)*bi);let Wl=1+.015*ge*Zi,rm=30*Math.exp(-1*((J-275)/25)**2),om=2*Math.sqrt(re/(re+gd)),am=-1*Math.sin(2*rm*bi)*om,hn=($/(t*nt))**2;return hn+=(z/(i*Ul))**2,hn+=(oe/(n*Wl))**2,hn+=am*(z/(i*Ul))*(oe/(n*Wl)),Math.sqrt(hn)}const Ux=75e-6;function ws(s,e=s.space,{epsilon:t=Ux}={}){s=j(s),e=P.get(e);let i=s.coords;return e!==s.space&&(i=e.from(s)),e.inGamut(i,{epsilon:t})}function Fs(s){return{space:s.space,coords:s.coords.slice(),alpha:s.alpha}}function qt(s,{method:e=gt.gamut_mapping,space:t=s.space}={}){if(on(arguments[1])&&(t=arguments[1]),t=P.get(t),ws(s,t,{epsilon:0}))return s;let i=Ye(s,t);if(e!=="clip"&&!ws(s,t)){let n=qt(Fs(i),{method:"clip",space:t});if(Ga(s,n)>2){let r=P.resolveCoord(e),o=r.space,a=r.id,l=Ye(i,o),c=(r.range||r.refRange)[0],d=.01,f=c,u=pt(l,a);for(;u-f>d;){let p=Fs(l);p=qt(p,{space:t,method:"clip"}),Ga(l,p)-2<d?f=pt(l,a):u=pt(l,a),fi(l,a,(f+u)/2)}i=Ye(l,t)}else i=n}if(e==="clip"||!ws(i,t,{epsilon:0})){let n=Object.values(t.coords).map(r=>r.range||[]);i.coords=i.coords.map((r,o)=>{let[a,l]=n[o];return a!==void 0&&(r=Math.max(a,r)),l!==void 0&&(r=Math.min(r,l)),r})}return t!==s.space&&(i=Ye(i,s.space)),s.coords=i.coords,s}qt.returns="color";function Ye(s,e,{inGamut:t}={}){s=j(s),e=P.get(e);let i=e.from(s),n={space:e,coords:i,alpha:s.alpha};return t&&(n=qt(n)),n}Ye.returns="color";function kr(s,{precision:e=gt.precision,format:t="default",inGamut:i=!0,...n}={}){var l,h,c;let r;s=j(s);let o=t;t=(h=(l=s.space.getFormat(t))!=null?l:s.space.getFormat("default"))!=null?h:P.DEFAULT_FORMAT,i||(i=t.toGamut);let a=s.coords;if(a=a.map(d=>d||0),i&&!ws(s)&&(a=qt(Fs(s),i===!0?void 0:i).coords),t.type==="custom")if(n.precision=e,t.serialize)r=t.serialize(a,s.alpha,n);else throw new TypeError(`format ${o} can only be used to parse colors, not for serialization`);else{let d=t.name||"color";t.serializeCoords?a=t.serializeCoords(a,e):e!==null&&(a=a.map(m=>vr(m,e)));let f=[...a];if(d==="color"){let m=t.id||((c=t.ids)==null?void 0:c[0])||s.space.id;f.unshift(m)}let u=s.alpha;e!==null&&(u=vr(u,e));let p=s.alpha<1?` ${t.commas?",":"/"} ${u}`:"";r=`${d}(${f.join(t.commas?", ":" ")}${p})`}return r}const Wx=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],qx=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var Kr=new ze({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:Wx,fromXYZ_M:qx});const Tn=1.09929682680944,yd=.018053968510807;var Bp=new ze({id:"rec2020",name:"REC.2020",base:Kr,toBase(s){return s.map(function(e){return e<yd*4.5?e/4.5:Math.pow((e+Tn-1)/Tn,1/.45)})},fromBase(s){return s.map(function(e){return e>=yd?Tn*Math.pow(e,.45)-(Tn-1):4.5*e})},formats:{color:{}}});const Hx=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],Vx=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var Np=new ze({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:Hx,fromXYZ_M:Vx});const jx=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],Gx=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var zp=new ze({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:jx,fromXYZ_M:Gx,formats:{color:{}}}),vd={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let wd=Array(3).fill("<percentage> | <number>[0, 255]");var Us=new ze({id:"srgb",name:"sRGB",base:zp,fromBase:s=>s.map(e=>{let t=e<0?-1:1,i=e*t;return i>.0031308?t*(1.055*i**(1/2.4)-.055):12.92*e}),toBase:s=>s.map(e=>{let t=e<0?-1:1,i=e*t;return i<.04045?e/12.92:t*((i+.055)/1.055)**2.4}),formats:{rgb:{coords:wd},color:{},rgba:{coords:wd,commas:!0,lastAlpha:!0},hex:{type:"custom",toGamut:!0,test:s=>/^#([a-f0-9]{3,4}){1,2}$/i.test(s),parse(s){s.length<=5&&(s=s.replace(/[a-f0-9]/gi,"$&$&"));let e=[];return s.replace(/[a-f0-9]{2}/gi,t=>{e.push(parseInt(t,16)/255)}),{spaceId:"srgb",coords:e.slice(0,3),alpha:e.slice(3)[0]}},serialize:(s,e,{collapse:t=!0}={})=>{e<1&&s.push(e),s=s.map(r=>Math.round(r*255));let i=t&&s.every(r=>r%17===0),n=s.map(r=>i?(r/17).toString(16):r.toString(16).padStart(2,"0")).join("");return"#"+n}},keyword:{type:"custom",test:s=>/^[a-z]+$/i.test(s),parse(s){s=s.toLowerCase();let e={spaceId:"srgb",coords:null,alpha:1};if(s==="transparent"?(e.coords=vd.black,e.alpha=0):e.coords=vd[s],e.coords)return e}}}}),Fp=new ze({id:"p3",name:"P3",base:Np,fromBase:Us.fromBase,toBase:Us.toBase,formats:{color:{id:"display-p3"}}});gt.display_space=Us;if(typeof CSS!="undefined"&&CSS.supports)for(let s of[Ve,Bp,Fp]){let e=s.getMinCoords(),i=kr({space:s,coords:e,alpha:1});if(CSS.supports("color",i)){gt.display_space=s;break}}function Kx(s,{space:e=gt.display_space,...t}={}){let i=kr(s,t);if(typeof CSS=="undefined"||CSS.supports("color",i)||!gt.display_space)i=new String(i),i.color=s;else{let n=Ye(s,e);i=new String(kr(n,t)),i.color=n}return i}function Up(s,e,t="lab"){t=P.get(t);let i=t.from(s),n=t.from(e);return Math.sqrt(i.reduce((r,o,a)=>{let l=n[a];return isNaN(o)||isNaN(l)?r:r+(l-o)**2},0))}function Yx(s,e){return s=j(s),e=j(e),s.space===e.space&&s.alpha===e.alpha&&s.coords.every((t,i)=>t===e.coords[i])}function Ht(s){return pt(s,[it,"y"])}function Wp(s){set(s,[it,"y"],value)}function Jx(s){Object.defineProperty(s.prototype,"luminance",{get(){return Ht(this)},set(e){Wp(this)}})}var Xx=Object.freeze({__proto__:null,getLuminance:Ht,setLuminance:Wp,register:Jx});function Zx(s,e){s=j(s),e=j(e);let t=Math.max(Ht(s),0),i=Math.max(Ht(e),0);return i>t&&([t,i]=[i,t]),(t+.05)/(i+.05)}const Qx=.56,e2=.57,t2=.62,i2=.65,xd=.022,s2=1.414,n2=.1,r2=5e-4,o2=1.14,Sd=.027,a2=1.14;function kd(s){return s>=xd?s:s+(xd-s)**s2}function yi(s){let e=s<0?-1:1,t=Math.abs(s);return e*Math.pow(t,2.4)}function l2(s,e){e=j(e),s=j(s);let t,i,n,r,o,a;e=Ye(e,"srgb"),[r,o,a]=e.coords;let l=yi(r)*.2126729+yi(o)*.7151522+yi(a)*.072175;s=Ye(s,"srgb"),[r,o,a]=s.coords;let h=yi(r)*.2126729+yi(o)*.7151522+yi(a)*.072175,c=kd(l),d=kd(h),f=d>c;return Math.abs(d-c)<r2?i=0:f?(t=d**Qx-c**e2,i=t*o2):(t=d**i2-c**t2,i=t*a2),Math.abs(i)<n2?n=0:i>0?n=i-Sd:n=i+Sd,n*100}function h2(s,e){s=j(s),e=j(e);let t=Math.max(Ht(s),0),i=Math.max(Ht(e),0);i>t&&([t,i]=[i,t]);let n=t+i;return n===0?0:(t-i)/n}function c2(s,e){s=j(s),e=j(e);let t=Math.max(Ht(s),0),i=Math.max(Ht(e),0);return i>t&&([t,i]=[i,t]),i===0?0:(t-i)/i}function d2(s,e){s=j(s),e=j(e);let t=pt(s,[Ve,"l"]),i=pt(e,[Ve,"l"]);return Math.abs(t-i)}var Fn=Object.freeze({__proto__:null,contrastWCAG21:Zx,contrastAPCA:l2,contrastMichelson:h2,contrastWeber:c2,contrastLstar:d2});function f2(s,e,t={}){on(t)&&(t={algorithm:t});let{algorithm:i,...n}=t;if(!i){let r=Object.keys(Fn).map(o=>o.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${r}`)}s=j(s),e=j(e);for(let r in Fn)if("contrast"+i.toLowerCase()===r.toLowerCase())return Fn[r](s,e,n);throw new TypeError(`Unknown contrast algorithm: ${i}`)}function qp(s){let[e,t,i]=an(s,it),n=e+15*t+3*i;return[4*e/n,9*t/n]}function Hp(s){let[e,t,i]=an(s,it),n=e+t+i;return[e/n,t/n]}function u2(s){Object.defineProperty(s.prototype,"uv",{get(){return qp(this)}}),Object.defineProperty(s.prototype,"xy",{get(){return Hp(this)}})}var p2=Object.freeze({__proto__:null,uv:qp,xy:Hp,register:u2});function m2(s,e){return Up(s,e,"lab")}const g2=Math.PI,Cd=g2/180;function b2(s,e,{l:t=2,c:i=1}={}){let[n,r,o]=Ve.from(s),[,a,l]=zs.from(Ve,[n,r,o]),[h,c,d]=Ve.from(e),f=zs.from(Ve,[h,c,d])[1];a<0&&(a=0),f<0&&(f=0);let u=n-h,p=a-f,m=r-c,y=o-d,v=m**2+y**2-p**2,_=.511;n>=16&&(_=.040975*n/(1+.01765*n));let w=.0638*a/(1+.0131*a)+.638,S;Number.isNaN(l)&&(l=0),l>=164&&l<=345?S=.56+Math.abs(.2*Math.cos((l+168)*Cd)):S=.36+Math.abs(.4*Math.cos((l+35)*Cd));let A=Math.pow(a,4),$=Math.sqrt(A/(A+1900)),z=w*($*S+1-$),I=(u/(t*_))**2;return I+=(p/(i*w))**2,I+=v/z**2,Math.sqrt(I)}const Ad=203;var zl=new P({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:it,fromBase(s){return s.map(e=>Math.max(e*Ad,0))},toBase(s){return s.map(e=>Math.max(e/Ad,0))}});const En=1.15,Pn=.66,Md=2610/2**14,y2=2**14/2610,$d=3424/2**12,Td=2413/2**7,Ed=2392/2**7,v2=1.7*2523/2**5,Pd=2**5/(1.7*2523),_n=-.56,Fo=16295499532821565e-27,w2=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],x2=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],S2=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],k2=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var Vp=new P({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:zl,fromBase(s){let[e,t,i]=s,n=En*e-(En-1)*i,r=Pn*t-(Pn-1)*e,a=ne(w2,[n,r,i]).map(function(f){let u=$d+Td*(f/1e4)**Md,p=1+Ed*(f/1e4)**Md;return(u/p)**v2}),[l,h,c]=ne(S2,a);return[(1+_n)*l/(1+_n*l)-Fo,h,c]},toBase(s){let[e,t,i]=s,n=(e+Fo)/(1+_n-_n*(e+Fo)),o=ne(k2,[n,t,i]).map(function(f){let u=$d-f**Pd,p=Ed*f**Pd-Td;return 1e4*(u/p)**y2}),[a,l,h]=ne(x2,o),c=(a+(En-1)*h)/En,d=(l+(Pn-1)*c)/Pn;return[c,d,h]},formats:{color:{}}}),Ka=new P({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:Vp,fromBase(s){let[e,t,i]=s,n;const r=2e-4;return Math.abs(t)<r&&Math.abs(i)<r?n=NaN:n=Math.atan2(i,t)*180/Math.PI,[e,Math.sqrt(t**2+i**2),Gr(n)]},toBase(s){return[s[0],s[1]*Math.cos(s[2]*Math.PI/180),s[1]*Math.sin(s[2]*Math.PI/180)]},formats:{color:{}}});function C2(s,e){let[t,i,n]=Ka.from(s),[r,o,a]=Ka.from(e),l=t-r,h=i-o;Number.isNaN(n)&&Number.isNaN(a)?(n=0,a=0):Number.isNaN(n)?n=a:Number.isNaN(a)&&(a=n);let c=n-a,d=2*Math.sqrt(i*o)*Math.sin(c/2*(Math.PI/180));return Math.sqrt(l**2+h**2+d**2)}const jp=3424/4096,Gp=2413/128,Kp=2392/128,_d=2610/16384,A2=2523/32,M2=16384/2610,Ld=32/2523,$2=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],T2=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],E2=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],P2=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]];var Ya=new P({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:zl,fromBase(s){let e=ne($2,s);return _2(e)},toBase(s){let e=L2(s);return ne(P2,e)},formats:{color:{}}});function _2(s){let e=s.map(function(t){let i=jp+Gp*(t/1e4)**_d,n=1+Kp*(t/1e4)**_d;return(i/n)**A2});return ne(T2,e)}function L2(s){return ne(E2,s).map(function(i){let n=Math.max(i**Ld-jp,0),r=Gp-Kp*i**Ld;return 1e4*(n/r)**M2})}function R2(s,e){let[t,i,n]=Ya.from(s),[r,o,a]=Ya.from(e);return 720*Math.sqrt((t-r)**2+.25*(i-o)**2+(n-a)**2)}const O2=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],D2=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],I2=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],B2=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]];var Cr=new P({id:"oklab",name:"OKLab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:it,fromBase(s){let t=ne(O2,s).map(i=>Math.cbrt(i));return ne(I2,t)},toBase(s){let t=ne(B2,s).map(i=>i**3);return ne(D2,t)},formats:{oklab:{coords:["<percentage>","<number>","<number>"]}}});function N2(s,e){let[t,i,n]=Cr.from(s),[r,o,a]=Cr.from(e),l=t-r,h=i-o,c=n-a;return Math.sqrt(l**2+h**2+c**2)}var Ja=Object.freeze({__proto__:null,deltaE76:m2,deltaECMC:b2,deltaE2000:Ga,deltaEJz:C2,deltaEITP:R2,deltaEOK:N2});function ms(s,e,t={}){on(t)&&(t={method:t});let{method:i=gt.deltaE,...n}=t;s=j(s),e=j(e);for(let r in Ja)if("deltae"+i.toLowerCase()===r.toLowerCase())return Ja[r](s,e,n);throw new TypeError(`Unknown deltaE method: ${i}`)}var z2=Object.freeze({__proto__:null,default:ms});function F2(s,e=.25){let i=[P.get("oklch","lch"),"l"];return fi(s,i,n=>n*(1+e))}function U2(s,e=.25){let i=[P.get("oklch","lch"),"l"];return fi(s,i,n=>n*(1-e))}var W2=Object.freeze({__proto__:null,lighten:F2,darken:U2});function Yp(s,e,t=.5,i={}){[s,e]=[j(s),j(e)],It(t)==="object"&&([t,i]=[.5,t]);let{space:n,outputSpace:r}=i;return ln(s,e,{space:n,outputSpace:r})(t)}function Jp(s,e,t={}){let i;Fl(s)&&([i,t]=[s,e],[s,e]=i.rangeArgs.colors);let{maxDeltaE:n,deltaEMethod:r,steps:o=2,maxSteps:a=1e3,...l}=t;i||([s,e]=[j(s),j(e)],i=ln(s,e,l));let h=ms(s,e),c=n>0?Math.max(o,Math.ceil(h/n)+1):o,d=[];if(a!==void 0&&(c=Math.min(c,a)),c===1)d=[{p:.5,color:i(.5)}];else{let f=1/(c-1);d=Array.from({length:c},(u,p)=>{let m=p*f;return{p:m,color:i(m)}})}if(n>0){let f=d.reduce((u,p,m)=>{if(m===0)return 0;let y=ms(p.color,d[m-1].color,r);return Math.max(u,y)},0);for(;f>n;){f=0;for(let u=1;u<d.length&&d.length<a;u++){let p=d[u-1],m=d[u],y=(m.p+p.p)/2,v=i(y);f=Math.max(f,ms(v,p.color),ms(v,m.color)),d.splice(u,0,{p:y,color:i(y)}),u++}}}return d=d.map(f=>f.color),d}function ln(s,e,t={}){if(Fl(s)){let[l,h]=[s,e];return ln(...l.rangeArgs.colors,{...l.rangeArgs.options,...h})}let{space:i,outputSpace:n,progression:r,premultiplied:o}=t;s=j(s),e=j(e),s=Fs(s),e=Fs(e);let a={colors:[s,e],options:t};if(i?i=P.get(i):i=P.registry[gt.interpolationSpace]||s.space,n=n?P.get(n):i,s=Ye(s,i),e=Ye(e,i),s=qt(s),e=qt(e),i.coords.h&&i.coords.h.type==="angle"){let l=t.hue=t.hue||"shorter",h=[i,"h"],[c,d]=[pt(s,h),pt(e,h)];[c,d]=Fx(l,[c,d]),fi(s,h,c),fi(e,h,d)}return o&&(s.coords=s.coords.map(l=>l*s.alpha),e.coords=e.coords.map(l=>l*e.alpha)),Object.assign(l=>{l=r?r(l):l;let h=s.coords.map((f,u)=>{let p=e.coords[u];return wr(f,p,l)}),c=wr(s.alpha,e.alpha,l),d={space:i,coords:h,alpha:c};return o&&(d.coords=d.coords.map(f=>f/c)),n!==i&&(d=Ye(d,n)),d},{rangeArgs:a})}function Fl(s){return It(s)==="function"&&!!s.rangeArgs}gt.interpolationSpace="lab";function q2(s){s.defineFunction("mix",Yp,{returns:"color"}),s.defineFunction("range",ln,{returns:"function<color>"}),s.defineFunction("steps",Jp,{returns:"array<color>"})}var H2=Object.freeze({__proto__:null,mix:Yp,steps:Jp,range:ln,isRange:Fl,register:q2}),Xp=new P({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Us,fromBase:s=>{let e=Math.max(...s),t=Math.min(...s),[i,n,r]=s,[o,a,l]=[NaN,0,(t+e)/2],h=e-t;if(h!==0){switch(a=l===0||l===1?0:(e-l)/Math.min(l,1-l),e){case i:o=(n-r)/h+(n<r?6:0);break;case n:o=(r-i)/h+2;break;case r:o=(i-n)/h+4}o=o*60}return[o,a*100,l*100]},toBase:s=>{let[e,t,i]=s;e=e%360,e<0&&(e+=360),t/=100,i/=100;function n(r){let o=(r+e/30)%12,a=t*Math.min(i,1-i);return i-a*Math.max(-1,Math.min(o-3,9-o,1))}return[n(0),n(8),n(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),Zp=new P({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:Xp,fromBase(s){let[e,t,i]=s;t/=100,i/=100;let n=i+t*Math.min(i,1-i);return[e,n===0?0:200*(1-i/n),100*n]},toBase(s){let[e,t,i]=s;t/=100,i/=100;let n=i*(1-t/2);return[e,n===0||n===1?0:(i-n)/Math.min(n,1-n)*100,n*100]},formats:{color:{toGamut:!0}}}),V2=new P({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:Zp,fromBase(s){let[e,t,i]=s;return[e,i*(100-t)/100,100-i]},toBase(s){let[e,t,i]=s;t/=100,i/=100;let n=t+i;if(n>=1){let a=t/n;return[e,0,a*100]}let r=1-i,o=r===0?0:1-t/r;return[e,o*100,r*100]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}});const j2=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],G2=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var Qp=new ze({id:"a98rgb-linear",name:"Linear Adobe\xAE 98 RGB compatible",white:"D65",toXYZ_M:j2,fromXYZ_M:G2}),K2=new ze({id:"a98rgb",name:"Adobe\xAE 98 RGB compatible",base:Qp,toBase:s=>s.map(e=>Math.pow(Math.abs(e),563/256)*Math.sign(e)),fromBase:s=>s.map(e=>Math.pow(Math.abs(e),256/563)*Math.sign(e)),formats:{color:{id:"a98-rgb"}}});const Y2=[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],J2=[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]];var em=new ze({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:Nl,toXYZ_M:Y2,fromXYZ_M:J2});const X2=1/512,Z2=16/512;var Q2=new ze({id:"prophoto",name:"ProPhoto",base:em,toBase(s){return s.map(e=>e<Z2?e/16:e**1.8)},fromBase(s){return s.map(e=>e>=X2?e**(1/1.8):16*e)},formats:{color:{id:"prophoto-rgb"}}}),eS=new P({id:"oklch",name:"OKLCh",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Cr,fromBase(s){let[e,t,i]=s,n;const r=2e-4;return Math.abs(t)<r&&Math.abs(i)<r?n=NaN:n=Math.atan2(i,t)*180/Math.PI,[e,Math.sqrt(t**2+i**2),Gr(n)]},toBase(s){let[e,t,i]=s,n,r;return isNaN(i)?(n=0,r=0):(n=t*Math.cos(i*Math.PI/180),r=t*Math.sin(i*Math.PI/180)),[e,n,r]},formats:{oklch:{coords:["<percentage>","<number>","<number> | <angle>"]}}});const Rd=203,Od=2610/2**14,tS=2**14/2610,iS=2523/2**5,Dd=2**5/2523,Id=3424/2**12,Bd=2413/2**7,Nd=2392/2**7;var sS=new ze({id:"rec2100pq",name:"REC.2100-PQ",base:Kr,toBase(s){return s.map(function(e){return(Math.max(e**Dd-Id,0)/(Bd-Nd*e**Dd))**tS*1e4/Rd})},fromBase(s){return s.map(function(e){let t=Math.max(e*Rd/1e4,0),i=Id+Bd*t**Od,n=1+Nd*t**Od;return(i/n)**iS})},formats:{color:{id:"rec2100-pq"}}});const zd=.17883277,Fd=.28466892,Ud=.55991073;var nS=new ze({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:Kr,toBase(s){return s.map(function(e){return e<=1/12?Math.sqrt(3*e):zd*Math.log(12*e-Fd)+Ud})},fromBase(s){return s.map(function(e){return e<=.5?e**2/3:Math.exp((e-Ud)/zd+Fd)/12})},formats:{color:{id:"rec2100-hlg"}}});const tm={};Wt.add("chromatic-adaptation-start",s=>{s.options.method&&(s.M=im(s.W1,s.W2,s.options.method))});Wt.add("chromatic-adaptation-end",s=>{s.M||(s.M=im(s.W1,s.W2,s.options.method))});function Yr({id:s,toCone_M:e,fromCone_M:t}){tm[s]=arguments[0]}function im(s,e,t="Bradford"){let i=tm[t],[n,r,o]=ne(i.toCone_M,s),[a,l,h]=ne(i.toCone_M,e),c=[[a/n,0,0],[0,l/r,0],[0,0,h/o]],d=ne(c,i.toCone_M);return ne(i.fromCone_M,d)}Yr({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]});Yr({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]});Yr({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]});Yr({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]});Object.assign(ft,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});ft.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const rS=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],oS=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var sm=new ze({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:ft.ACES,toXYZ_M:rS,fromXYZ_M:oS,formats:{color:{}}});const Ln=2**-16,Uo=-.35828683,Rn=(Math.log2(65504)+9.72)/17.52;var aS=new ze({id:"acescc",name:"ACEScc",coords:{r:{range:[Uo,Rn],name:"Red"},g:{range:[Uo,Rn],name:"Green"},b:{range:[Uo,Rn],name:"Blue"}},referred:"scene",base:sm,toBase(s){const e=-.3013698630136986;return s.map(function(t){return t<=e?(2**(t*17.52-9.72)-Ln)*2:t<Rn?2**(t*17.52-9.72):65504})},fromBase(s){return s.map(function(e){return e<=0?(Math.log2(Ln)+9.72)/17.52:e<Ln?(Math.log2(Ln+e*.5)+9.72)/17.52:(Math.log2(e)+9.72)/17.52})},formats:{color:{}}}),Wd=Object.freeze({__proto__:null,XYZ_D65:it,XYZ_D50:Nl,XYZ_ABS_D65:zl,Lab:Ve,LCH:zs,sRGB_Linear:zp,sRGB:Us,HSL:Xp,HWB:V2,HSV:Zp,P3_Linear:Np,P3:Fp,A98RGB_Linear:Qp,A98RGB:K2,ProPhoto_Linear:em,ProPhoto:Q2,REC_2020_Linear:Kr,REC_2020:Bp,OKLab:Cr,OKLCH:eS,Jzazbz:Vp,JzCzHz:Ka,ICTCP:Ya,REC_2100_PQ:sS,REC_2100_HLG:nS,ACEScg:sm,ACEScc:aS}),ri;const be=class{constructor(...e){Qi(this,ri,void 0);let t;e.length===1&&(t=j(e[0]));let i,n,r;t?(i=t.space||t.spaceId,n=t.coords,r=t.alpha):[i,n,r]=e,Zr(this,ri,P.get(i)),this.coords=n?n.slice():[0,0,0],this.alpha=r<1?r:1;for(let o=0;o<this.coords.length;o++)this.coords[o]==="NaN"&&(this.coords[o]=NaN);for(let o in mi(this,ri).coords)Object.defineProperty(this,o,{get:()=>this.get(o),set:a=>this.set(o,a)})}get space(){return mi(this,ri)}get spaceId(){return mi(this,ri).id}clone(){return new be(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...e){let t=Kx(this,...e);return t.color=new be(t.color),t}static get(e,...t){return e instanceof be?e:new be(e,...t)}static defineFunction(e,t,i=t){arguments.length===1&&([e,t,i]=[arguments[0].name,arguments[0],arguments[0]]);let{instance:n=!0,returns:r}=i,o=function(...a){let l=t(...a);if(r==="color")l=be.get(l);else if(r==="function<color>"){let h=l;l=function(...c){let d=h(...c);return be.get(d)},Object.assign(l,h)}else r==="array<color>"&&(l=l.map(h=>be.get(h)));return l};e in be||(be[e]=o),n&&(be.prototype[e]=function(...a){return o(this,...a)})}static defineFunctions(e){for(let t in e)be.defineFunction(t,e[t],e[t])}static extend(e){if(e.register)e.register(be);else if(e.default)be.defineFunction(e.default.name,e.default);else if(typeof e=="function")be.defineFunction(e);else for(let t in e)be.defineFunction(t,e[t])}};let Be=be;ri=new WeakMap;Be.defineFunctions({get:pt,getAll:an,set:fi,setAll:Ip,to:Ye,equals:Yx,inGamut:ws,toGamut:qt,distance:Up,toString:kr});Object.assign(Be,{util:Ix,hooks:Wt,WHITES:ft,Space:P,spaces:P.registry,parse:Dp,defaults:gt});for(let s of Object.keys(Wd))P.register(Wd[s]);for(let s in P.registry)nm(s,P.registry[s]);Wt.add("colorspace-init-end",nm);function nm(s,e){Object.keys(e.coords),Object.values(e.coords).map(i=>i.name);let t=s.replace(/-/g,"_");Object.defineProperty(Be.prototype,t,{get(){let i=this.getAll(s);return typeof Proxy=="undefined"?i:new Proxy(i,{has:(n,r)=>{try{return P.resolveCoord([e,r]),!0}catch{}return Reflect.has(n,r)},get:(n,r,o)=>{if(r&&typeof r!="symbol"&&!(r in n)){let{index:a}=P.resolveCoord([e,r]);if(a>=0)return n[a]}return Reflect.get(n,r,o)},set:(n,r,o,a)=>{if(r&&typeof r!="symbol"&&!(r in n)||r>=0){let{index:l}=P.resolveCoord([e,r]);if(l>=0)return n[l]=o,this.setAll(s,n),!0}return Reflect.set(n,r,o,a)}})},set(i){this.setAll(s,i)},configurable:!0,enumerable:!0})}Be.extend(Ja);Be.extend(z2);Be.extend(W2);Be.extend(f2);Be.extend(p2);Be.extend(Xx);Be.extend(H2);Be.extend(Fn);var lS=Object.defineProperty,hS=Object.getOwnPropertyDescriptor,C=(s,e,t,i)=>{for(var n=i>1?void 0:i?hS(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&lS(e,t,n),n};const Qt="/assets/new/valid.svg",ei="/assets/new/yield.svg",hs="/assets/new/stop.svg";let k=class extends Vs{constructor(){super(),this.appCard={siteName:"Site Name",description:"Your site's description",siteUrl:"Site URL",iconURL:"",iconAlt:"Your sites logo"},this.CardStyles={backgroundColor:"white",color:"black"},this.BorderStyles={borderTop:"1px solid #00000033"},this.LastEditedStyles={color:"#000000b3"},this.manifestCard={},this.serviceWorkerCard={},this.securityCard={},this.siteURL="",this.swScore=0,this.maniScore=0,this.securityScore=0,this.errored=!1,this.errorMessage=void 0,this.errorLink=void 0,this.mql=window.matchMedia(`(min-width: ${pm.largeUpper}px)`),this.isAppCardInfoLoading=!1,this.isDeskTopView=this.mql.matches,this.runningTests=!1,this.canPackageList=[!1,!1,!1],this.canPackage=!1,this.manifestEditorOpened=!1,this.retestPath="/assets/new/retest-black.svg",this.swSelectorOpen=!1,this.lastTested="Last tested seconds ago",this.todoWindow=[],this.pageNumber=1,this.pageSize=5,this.validationResults=[],this.manifestTotalScore=0,this.manifestValidCounter=0,this.manifestRequiredCounter=0,this.manifestReccCounter=0,this.manifestDataLoading=!0,this.manifestMessage="",this.proxyLoadingImage=!1,this.serviceWorkerResults=[],this.swTotalScore=0,this.swValidCounter=0,this.swRequiredCounter=0,this.swReccCounter=0,this.swDataLoading=!0,this.swMessage="",this.securityResults=[],this.secTotalScore=0,this.secValidCounter=0,this.secRequiredCounter=0,this.secReccCounter=0,this.secDataLoading=!0,this.secMessage="",this.requiredMissingFields=[],this.reccMissingFields=[],this.optMissingFields=[],this.showConfirmationModal=!1,this.thingToAdd="",this.retestConfirmed=!1,this.createdManifest=!1,this.todoItems=[],this.possible_messages=[{messages:{green:"PWABuilder has analyzed your Web Manifest and your manifest is ready for packaging! Great job you have a perfect score!",yellow:"PWABuilder has analyzed your Web Manifest and your manifest is ready for packaging! We have identified recommeneded and optional fields that you can include to make your PWA better. Use our Manifest Editor to edit and update those fields.",blocked:"PWABuilder has analyzed your Web Manifest. You have a one or more fields that need to be updated before you can pacakge. Use our Manifest Editor to edit and update those fields. You can package for the store once you have a valid manifest.",none:"PWABuilder has analyzed your site and did not find a Web Manifest. Use our Manifest Editor to generate one. You can package for the store once you have a valid manifest."}},{messages:{green:"PWABuilder has analyzed your Service Worker and your Service Worker is ready for packaging! Great job you have a perfect score!",yellow:"PWABuilder has analyzed your Service Worker, and has identified additonal features you can add, like offline support, to make your app feel more robust.",blocked:"",none:"PWABuilder has analyzed your site and did not find a Service Worker. Having a Service Worker is required to package for the stores. You can genereate a Service Worker below or use our documentation to make your own."}},{messages:{green:"PWABuilder has done a basic analysis of your HTTPS setup and found no issues! Great job you have a perfect score!",yellow:"",blocked:"",none:"PWABuilder has done a basic analysis of your HTTPS setup and has identified required actions before you can package. Check out the documentation linked below to learn more."}}],this.mql.addEventListener("change",s=>{this.isDeskTopView=s.matches})}static get styles(){return[ve`

        /* Page wide */
        * {
          box-sizing: border-box;
          font-family: inherit;
        }

        app-header::part(header) {
          position: sticky;
          top: 0;
        }

        #report-wrapper {
          width: 100%;
          display: flex;
          flex-direction: column;
          row-gap: 1.5em;
          align-items: center;
          background-color: #f2f3fb;
          padding: 20px;
        }

        #content-holder {
          max-width: 1300px;
          width: 100%;
          display: flex;
          flex-flow: row wrap;
          gap: 1em;
        }

        sl-details {
          width: 100%;
        }

        sl-details::part(summary-icon){
          display: none;
        }

        sl-details::part(content) {
          padding-top: .75em;
          padding-bottom: 1.5em;
        }

        sl-details:disabled{
          cursor: no-drop;
        }

        @keyframes bounce {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: translateY(0);
          }
          40% {
            transform: translateX(-5px);
          }
          60% {
            transform: translateX(5px);
          }
        }

        button:hover {
          cursor: pointer;
        }

        sl-progress-ring {
          height: fit-content;
          --track-width: 4px;
          --indicator-width: 8px;
          --size: 100px;
          font-size: 18px;
        }

        sl-progress-ring::part(label){
          color: #4F3FB6;
          font-weight: bold;
        }

        .red {
          --indicator-color: var(--error-color);
        }

        .yellow {
          --indicator-color: var(--warning-color);
        }

        .green {
          --indicator-color: var(--success-color);
        }

        .macro_error {
          width: 3em;
          height: auto;
        }

        /* App Card and Packaging */
        #header-row {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          column-gap: 1em;
        }

        /* App Card */

        #app-card {
          width: 60%;
          height: 100%;
          border-radius: 10px;
          background-color: white;
          justify-content: space-between;
          box-shadow: 0px 4px 30px 0px #00000014;
        }

        #app-card-header {
          display: grid;
          grid-template-columns: 1fr 2fr 4fr;
          gap: 10px;
          align-items: center;
          font-size: 14px;
          padding: 2em;
          width: 100%;
        }

        #pwa-image-holder {
          height: fit-content;
          width: fit-content;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: white;
          border-radius: 10px;
          box-shadow: rgb(0 0 0 / 20%) 0px 4px 10px 0px;
        }
        
        #app-card-header img {
          height: 85px;
          width: auto;
          padding: 10px;
        }

        .proxy-loader {
          width: 48px;
          height: 48px;
          border: 5px solid #4f3fb6;
          border-bottom-color: transparent;
          border-radius: 50%;
          display: inline-block;
          box-sizing: border-box;
          animation: rotation 1s linear infinite;
        }

        @keyframes rotation {
          0% {
              transform: rotate(0deg);
          }
          100% {
              transform: rotate(360deg);
          }
        } 

        #site-name {
          font-size: 24px;
        }
        
        #card-info {
          overflow: hidden;
          white-space: nowrap;
        }

        #card-info p {
          margin: 0;
          font-weight: bold;
        }

        #card-info p:not(#site-name) {
          font-size: 16px;
        }

        #app-card-desc {
          margin: 0;
          font-size: 14px;
          width: 100%;
          white-space: normal;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box !important;
          -webkit-line-clamp: 6;
          -webkit-box-orient: vertical;
        }

        #app-card-footer {
          padding: .432em 1em;
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: flex-end;
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
          border-top: 1px solid rgb(242 243 251 / 20%);
        }

        #last-edited {
          font-size: 12px;
          white-space: nowrap;
          margin: 0;
        }

        #test {
          font-size: 10px;
        }

        #test img {
          height: 18px;
        }
        
        #retest {
          display: flex;
          align-items: center;
          column-gap: 10px;
          border: none;
          background-color: transparent;
        }

        #retest:disabled{
          cursor: no-drop;
        }

        #app-image-skeleton {
          height: 85px;
          width: 130px;
          --border-radius: 0;
        }

        .app-info-skeleton {
          width: 100%;
          margin-bottom: 10px;
        }

        .app-info-skeleton-half {
          width: 25%;
          height: 20px;
          margin: 10px 0;
        }

        /* Packaging Box */
        #app-actions {
          width: 40%;
          height: 100%;
          border-radius: 10px;
          background-color: white;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0px 4px 30px 0px #00000014;
        }

        #app-actions button:not(#test-download) {
          font-weight: bold;
          white-space: nowrap;
          padding: .75em 2em;
          border-radius: 50px;
          font-size: 16px;
        }

        #package {
          row-gap: .5em;
          width: 100%;
          padding: 2em;
        }

        #pfs {
          background-color: black;
          color: white;
          border: none;
        }

        #pfs-disabled{
          background-color: #C3C3C3;
          border: none;
          color: white;
        }

        #pfs-disabled:hover{
          cursor: no-drop;
        }

        #pfs:focus, #pfs:hover {
          outline: rgb(79 63 182 / 70%) solid 2px;
        }

        .mani-tooltip {
          --sl-tooltip-padding: 0;
        }

        .mani-tooltip::part(base){
            border-radius: 10px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        }

        .mani-tooltip-content {
          padding: 0;
          display: flex;
          max-width: 325px;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          gap: .5em;
        }

        .mani-tooltip-content img {
          align-self: flex-end;
          justify-self: flex-end;
          height: 50px;
          width: auto;
        }

        .mani-tooltip-content p {
          margin: 0;
          padding: .5em;
        }

        #test-download {
          background-color: transparent;
          color: #4f3fb6;
          border: none;
          width: fit-content;
          display: flex;
          column-gap: 0.5em;
          align-items: center;

          font-weight: bold;
          white-space: nowrap;
          font-size: 12px;
        }

        #test-download:hover img {
          animation: bounce 1s;
        }

        #actions-footer {
          background-color: #f2f3fb;
          width: 100%;
          column-gap: 0.75em;
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
          padding: .5em 1em;
          border-top: 1px solid #E5E5E5;
        }

        #actions-footer img {
          height: 15px;
          width: auto;
        }

        #actions-footer p {
          margin: 0;
          font-size: 12px;
          font-weight: bold;
        }

        /* Action Items Card */
        #todo {
          width: 100%;
          box-shadow: 0px 4px 30px 0px #00000014;
          border-radius: 10px;
        }

        #todo-detail::part(base) {
          border-radius: 10px;
        }

        #todo-detail::part(header) {
          height: 60px;
        }

        #todo-detail::part(summary) {
          color: #4f3fb6;
          font-size: 20px;
          font-weight: bold;
        }

        #todo-summary-left {
          display: flex;
          align-items: center;
          gap: .5em;
        }

        #pagination-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          justify-self: center;
          gap: .25em;
        }

        .pageToggles {
          height: 15px;
          color: #4f3fb6;
        }

        #dots {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: .25em;
        }

        #dots img {
          height: 10px;
          width: auto;
        }

        #pagination-actions > sl-icon:hover{
          cursor:pointer
        }

        .pagination-buttons{
          background-color: transparent;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          height: fit-content;
        }

        #indicators-holder {
          display: flex;
          gap: .5em;
          align-items: center;
        }

        .indicator {
          display: flex;
          gap: .5em;
          align-items: center;
          background-color: #F1F2FA;
          padding: .25em .5em;
          border-radius: 10px;
        }

        .indicator p {
          line-height: 20px;
          margin: 0;
          font-size: 15px;
        }

        /* Manifest Card */
        #manifest {
          box-shadow: 0px 4px 30px 0px #00000014;
          background-color: white;
          border-radius: 10px;
          width: 100%;
        }

        #manifest-header {
          display: flex;
          justify-content: space-between;
          gap: 1em;
          border-bottom: 1px solid #c4c4c4;
          padding: 1em;
        }

        #mh-content{
          display: flex;
          gap: 1em;
          justify-content: space-between;
          width: 100%;
        }

        #mh-text {
          width: 50%;
          row-gap: 0.5em;
        }

        #mh-right {
          display: flex;
          column-gap: 2.5em;
        }

        #mh-actions {
          row-gap: 1em;
          align-items: center;
        }

        #manifest-detail-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1em;
        }

        .missing {
          font-size: 14px;
          margin: 0;
          font-weight: bold;
          white-space: no-wrap;
        }

        /* S cards */
        #two-cell-row {
          display: flex;
          flex-flow: row wrap;
          align-items: flex-start;
          justify-content: space-between;
          width: 100%;
        }

        #two-cell-row > * {
          width: 49%;
          background: white;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-self: flex-start;
          border-radius: 10px;
        }

        /* SW Card */
        #sw-header {
          row-gap: 0.5em;
          border-bottom: 1px solid #c4c4c4;
          padding: 1em;
          min-height: 318px;
          justify-content: space-between;
        }

        #swh-top {
          display: flex;
          justify-content: space-between;
          column-gap: 1em;
        }

        #swh-text {
          width: 100%;
          row-gap: 0.5em;
        }

        #sw-actions {
          row-gap: 1em;
          width: fit-content;
          align-items: center;
        }

        /* Sec Card */

        /* Classes used widely */
        .flex-col {
          display: flex;
          flex-direction: column;
        }

        .flex-col-center {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        
        .flex-center {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .details-summary {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .dropdown_icon {
          transform: rotate(0deg);
          transition: transform .5s;
        }

        .card-header {
          font-size: 24px;
          font-weight: bold;
          margin: 0;
          white-space: nowrap;
        }

        .card-desc {
          margin: 0;
          font-size: 14px;
        }

        .arrow_link {
          margin: 0;
          border-bottom: 1px solid #4f3fb6;
          white-space: nowrap;
        }

        .arrow_anchor {
          text-decoration: none;
          font-size: 14px;
          font-weight: bold;
          margin: 0px 0.5em 0px 0px;
          line-height: 1em;
          color: rgb(79, 63, 182);
          display: flex;
          column-gap: 10px;
        }

        .arrow_anchor:visited {
          color: #4f3fb6;
        }

        .arrow_anchor:hover {
          cursor: pointer;
        }

        .arrow_anchor:hover img {
          animation: bounce 1s;
        }

        #report-wrapper .alternate {
          background: var(--secondary-color);
          color: #4f3fb6;
          border: 1px solid #4f3fb6;
          font-size: 16px;
          font-weight: bold;
          border-radius: 50px;
          padding: 0.75em 2em;
        }
        #report-wrapper .alternate:hover {
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
        }

        .detail-list {
          display: flex;
          flex-direction: column;
          row-gap: 18px;
        }

        .detail-list-header {
          font-size: 18px;
          margin: 0;
          font-weight: bold;
        }

        .detail-list p:not(.detail-list-header){
          margin: 0;
        }

        .details::part(base) {
          border-radius: 0;
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
          border: none;
        }
        .details::part(summary) {
          font-weight: bold;
          font-size: 14px;
        }
        .details::part(header) {
          height: 40px;
          padding: 1em .75em;
        }

        .detail-grid {
          display: flex;
          flex-direction: column;
          row-gap: 0.5em;
        }

        #sec-header {
          justify-content: space-between;
          row-gap: .5em;
          padding: 1em;
          border-bottom: 1px solid #c4c4c4;
          min-height: 318px;
        }
        #sec-top {
          display: flex;
          column-gap: 1em;
          justify-content: space-between;
        }
        #sec-text {
          width: 100%;
          row-gap: 0.5em;
        }
        #sec-actions {
          row-gap: 1em;
          width: 66%;
        }
        .progressRingSkeleton::part(base) {
          height: 100px;
          width: 100px;
          border-radius: 50%;
        }

        .test-result {
          display: flex;
          gap: .5em;
          align-items: center;
        }
        .test-result p {
          font-weight: normal;
          font-size: 14px;
        }
        .test-result img {
          height: 17px;
        }
        .summary-skeleton {
          width: 200px;
          --color: #d0d0d3
        }
        .desc-skeleton {
          --color: #d0d0d3
        }
        .gap {
          gap: .5em;
        }
        sl-tooltip::part(base){
          --sl-tooltip-font-size: 14px;
        }

        .animate{
          animation-delay: 1s;
          animation: shake 1s cubic-bezier(.36,.07,.19,.97) both;
          transform: translate3d(0, 0, 0);
          backface-visibility: hidden;
          perspective: 1000px;
        }

        @keyframes shake {
          10%, 90% {
            transform: translate3d(-1px, 0, 0);
          }

          20%, 80% {
            transform: translate3d(2px, 0, 0);
          }

          30%, 50%, 70% {
            transform: translate3d(-4px, 0, 0);
          }

          40%, 60% {
            transform: translate3d(4px, 0, 0);
          }
        }

        .dialog::part(body){
          padding-top: 0;
          padding-bottom: 0;
        }
        .dialog::part(title){
          display: none;
        }
        .dialog::part(panel) {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 65%;
        }
        .dialog::part(overlay){
          backdrop-filter: blur(10px);
        }
        .dialog::part(close-button__base){
          position: absolute;
          top: 5px;
          right: 5px;
        }

        /* Retest modal */
        #confirmationButtons {
          display: flex;
          justify-content: space-evenly;
          margin-bottom: 1em;
        }

        #confirmationButtons > *{
         width: 45%;
        }

        .loader {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          display: block;
          margin:15px auto;
          position: relative;
          color: #4F3FB6;
          box-sizing: border-box;
          animation: animloader 2s linear infinite;
        }

        @keyframes animloader {
          0% {
            box-shadow: 14px 0 0 -2px,  38px 0 0 -2px,  -14px 0 0 -2px,  -38px 0 0 -2px;
          }
          25% {
            box-shadow: 14px 0 0 -2px,  38px 0 0 -2px,  -14px 0 0 -2px,  -38px 0 0 2px;
          }
          50% {
            box-shadow: 14px 0 0 -2px,  38px 0 0 -2px,  -14px 0 0 2px,  -38px 0 0 -2px;
          }
          75% {
            box-shadow: 14px 0 0 2px,  38px 0 0 -2px,  -14px 0 0 -2px,  -38px 0 0 -2px;
          }
          100% {
            box-shadow: 14px 0 0 -2px,  38px 0 0 2px,  -14px 0 0 -2px,  -38px 0 0 -2px;
          }
        }

        @media(max-width: 900px){
          #header-row {
            flex-direction: column-reverse;
            row-gap: 1em;
          }

          #app-card{
            width: 100%;
          }
          #app-actions {
            width: 100%;
          }

          #two-cell-row {
            flex-direction: column;
            row-gap: 1em;
          }
          #two-cell-row > * {
            width: 100%;
          }
          #sw-header {
            min-height: unset;
          }
          #sec-header {
            min-height: unset;
          }
        }

        @media(max-width: 600px){
          #app-card-header{
            grid-template-columns: 1fr 5fr;
            grid-template-rows: 1fr 1fr;
          }
          #app-card-desc, .skeleton-desc {
            grid-column: 1 / 3;
          }
        }

        ${Za(ve`
          #mh-content {
            flex-direction: column;
          }

          #mh-actions, #sw-actions {
            align-items: flex-start;
            width: 50%;
          }

          #mh-text {
            width: 100%;
          }

          #manifest-detail-grid{
            display: flex;
            flex-direction: column;
          }

          sl-progress-ring {
            --size: 75px;
            --track-width: 4px;
            font-size: 14px;
          }
          .progressRingSkeleton::part(base) {
            width: 75px;
            height: 75px;
          }
        `)}
        ${Xa(ve`
          sl-progress-ring {
            --size: 75px;
            --track-width: 4px;
            font-size: 14px;
          }

          .progressRingSkeleton::part(base) {
            width: 75px;
            height: 75px;
          }

          #header-row {
            flex-direction: column-reverse;
            row-gap: 1.5em;
          }

          #app-card{
            width: 100%;
          }

          #app-actions {
            width: 100%;
          }

          #app-actions button:not(#test-download) { /* #pfs */
            font-size: 16px;
          }

          #app-actions .arrow_link {
            font-size: 12px;
          }

          #retest img {
            height: 14px;
          }

          #package{
            width: 50%;
            row-gap: .75em;
          }

          #test-download {
            font-size: 10px;
          }

          #mh-content {
            flex-direction: column;
          }

          #mh-text {
            width: 100%;
          }

          #manifest-detail-grid{
            display: flex;
            flex-direction: column;
          }

          #report-wrapper .alternate {
            font-size: 16px;
          }

          .half-width-cards {
            width: 100%;
          }

          #actions-footer p {
            font-size: 14px;
          }

          #actions-footer img {
            height: 18px;
            width: auto;
          }
          #last-edited {
            font-size: 14px;
          }
          #manifest-header, #sw-header, #sec-header {
            padding-bottom: 2.5em;
          }
          #mh-actions, #sw-actions, #sec-header {
            row-gap: 1.5em;
          }
        `)}
      `]}async connectedCallback(){super.connectedCallback();const e=new URLSearchParams(location.search).get("site");e&&(this.siteURL=e,this.runAllTests(e),sessionStorage.setItem("last_tested",JSON.stringify(new Date))),setInterval(()=>this.pollLastTested(),12e4)}firstUpdated(){this.rotateNinety("todo")}pollLastTested(){let s=new Date(JSON.parse(sessionStorage.getItem("last_tested"))),t=new Date().getTime()-s.getTime();if(t<6e4)this.lastTested="Last tested seconds ago";else if(t<36e5){let i=Math.floor(t/6e4);this.lastTested="Last tested "+i+" minutes ago"}else if(t<864e5){let i=Math.floor(t/36e5);this.lastTested="Last tested "+i+" hours ago"}else{let i=Math.floor(t/864e5);this.lastTested="Last tested "+i+" days ago"}this.requestUpdate()}async getManifest(s){this.isAppCardInfoLoading=!0;let e;return e=await mm(s),this.createdManifest=!1,e||(this.createdManifest=!0,e=await gm(s)),this.manifestContext=e,this.isAppCardInfoLoading=!1,this.populateAppCard(e,s),e}async populateAppCard(s,e){var i;let t=e.replace(/(^\w+:|^)\/\//,"");if(s&&!this.createdManifest){const n=s;let r=n.manifest.icons,o;if(r){let l=0;for(let h=0;h<r.length;h++){let c=r[h],d=(i=c.sizes)==null?void 0:i.split("x")[0];if(d==="512"){o=c;break}else parseInt(d)>l&&(l=parseInt(d),o=c)}}let a;if(o?a=this.iconSrcListParse(o):a="/assets/icons/icon_512.png",this.proxyLoadingImage=!0,await this.testImage(a).then(function(h){},function(){a=`https://pwabuilder-safe-url.azurewebsites.net/api/getSafeUrl?url=${a}`}),this.proxyLoadingImage=!1,this.appCard={siteName:n.manifest.short_name?n.manifest.short_name:n.manifest.name?n.manifest.name:"Untitled App",siteUrl:t,iconURL:a,iconAlt:"Your sites logo",description:n.manifest.description?n.manifest.description:"Add an app description to your manifest"},s.manifest.theme_color&&s.manifest.theme_color!=="none"){this.CardStyles.backgroundColor=s.manifest.theme_color;let l=this.pickTextColorBasedOnBgColorAdvanced(s.manifest.theme_color,"#ffffff","#000000");this.CardStyles.color=l,this.BorderStyles.borderTop=`1px solid ${l+"33"}`,this.LastEditedStyles.color=l+"b3",l==="#ffffff"&&(this.retestPath="/assets/new/retest-white.svg")}}else this.appCard={siteName:"Missing Name",siteUrl:t,description:"Your manifest description is missing.",iconURL:"/assets/new/icon_placeholder.png",iconAlt:"A placeholder for you sites icon"}}testImage(s){return new Promise(function(i,n){const r=new Image;r.addEventListener("load",function(){i(this)}),r.addEventListener("error",function(){n()}),r.src=s})}pickTextColorBasedOnBgColorAdvanced(s,e,t){var i=new Be(s).coords,n=i.map(a=>a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4)),r=.2126*n[0]+.7152*n[1]+.0722*n[2];return r>.3?t:e}async runAllTests(s){this.runningTests=!0,await this.getManifest(s),await Promise.all([this.testManifest(),this.testServiceWorker(s),this.testSecurity(s)]).then(()=>{this.canPackage=this.canPackageList.every(e=>e)}),this.runningTests=!1}async testManifest(){this.manifestDataLoading=!0;let s=this.shadowRoot.getElementById("mani-details");s.disabled=!0;let e;this.createdManifest?(e={},this.todoItems.push({card:"mani-details",field:"Open Manifest Modal",fix:"Edit and download your created manifest (Manifest not found before detection tests timed out)",status:"red"})):(e=JSON.parse(sessionStorage.getItem("PWABuilderManifest")).manifest,this.validationResults=await Dm(e),this.validationResults.sort((i,n)=>i.valid&&!n.valid?1:n.valid&&!i.valid?-1:i.member.localeCompare(n.member)),this.manifestTotalScore=this.validationResults.length,this.validationResults.forEach(i=>{var n;if(i.valid)this.manifestValidCounter++;else{let r="";i.category==="required"||i.testRequired?(r="red",this.manifestRequiredCounter++):i.category==="recommended"?(r="yellow",this.manifestReccCounter++):r="yellow",this.todoItems.push({card:"mani-details",field:i.member,displayString:(n=i.displayString)!=null?n:"",fix:i.errorString,status:r})}})),this.manifestRequiredCounter>0?this.canPackageList[0]=!1:this.canPackageList[0]=!0;let t=await this.handleMissingFields(e);this.manifestTotalScore+=t,this.manifestDataLoading=!1,s.disabled=!1,sessionStorage.setItem("manifest_tests",JSON.stringify(this.validationResults)),this.requestUpdate()}async testServiceWorker(s){let e=this.shadowRoot.getElementById("sw-details");e.disabled=!0;let t=!1;const i=await Lx(s);this.serviceWorkerResults=i,this.serviceWorkerResults.forEach(n=>{if(n.result)this.swValidCounter++;else{let r="";n.category==="required"?(r="red",t=!0,this.swRequiredCounter++,this.todoItems.push({card:"sw-details",field:"Open SW Modal",fix:"Add Service Worker to Base Package (SW not found before detection tests timed out)",status:r})):n.category==="recommended"?(r="yellow",this.swReccCounter++):r="yellow",t||this.todoItems.push({card:"sw-details",field:n.infoString,fix:n.infoString,status:r})}}),this.swRequiredCounter>0?this.canPackageList[1]=!1:this.canPackageList[1]=!0,this.swTotalScore=this.serviceWorkerResults.length,this.swDataLoading=!1,e.disabled=!1,sessionStorage.setItem("service_worker_tests",JSON.stringify(i)),this.requestUpdate()}async testSecurity(s){let e=this.shadowRoot.getElementById("sec-details");e.disabled=!0;const t=await _x(s);this.securityResults=t,this.securityResults.forEach(i=>{if(i.result)this.secValidCounter++;else{let n="";i.category==="required"?(n="red",this.secRequiredCounter++):i.category==="recommended"?(n="yellow",this.manifestReccCounter++):n="yellow",this.todoItems.push({card:"sec-details",field:i.infoString,fix:i.infoString,status:n})}}),this.secRequiredCounter>0?this.canPackageList[2]=!1:this.canPackageList[2]=!0,this.secTotalScore=this.securityResults.length,this.secDataLoading=!1,e.disabled=!1,sessionStorage.setItem("security_tests",JSON.stringify(t)),this.requestUpdate()}async handleMissingFields(s){let e=await Im(s);return e.forEach(i=>{js.includes(i)?(this.requiredMissingFields.push(i),this.manifestRequiredCounter++):_m.includes(i)&&(this.reccMissingFields.push(i),this.manifestReccCounter++),Lm.includes(i)&&this.optMissingFields.push(i),this.createdManifest||this.todoItems.push({card:"mani-details",field:i,fix:"Add~to your manifest"})}),e.length}async retest(s){Z("retest_clicked",Q.ProcessCheckpoint),this.retestConfirmed=!0,s&&await this.delay(3e3),this.shadowRoot.querySelector(".dialog").hide(),this.siteURL&&(this.resetData(),this.runAllTests(this.siteURL),sessionStorage.setItem("last_tested",JSON.stringify(new Date)))}delay(s){return new Promise(e=>setTimeout(e,s))}resetData(){this.manifestValidCounter=0,this.manifestTotalScore=0,this.manifestRequiredCounter=0,this.swValidCounter=0,this.swTotalScore=0,this.swRequiredCounter=0,this.secValidCounter=0,this.secTotalScore=0,this.secRequiredCounter=0,this.todoItems=[],this.requiredMissingFields=[],this.reccMissingFields=[],this.optMissingFields=[],this.manifestDataLoading=!0,this.swDataLoading=!0,this.secDataLoading=!0,this.canPackage=!1,this.lastTested="Last tested seconds ago",this.shadowRoot.querySelectorAll("sl-details").forEach(e=>{e.id!="todo-detail"?e.hide():e.show()}),this.retestConfirmed=!1}async openManifestEditorModal(){await this.shadowRoot.querySelector("manifest-editor-frame").shadowRoot.querySelector(".dialog").show(),Z("manifest_editor_opened",Q.ProcessCheckpoint)}async openSWSelectorModal(){await this.shadowRoot.querySelector("sw-selector").shadowRoot.querySelector(".dialog").show(),Z("sw_selector_opened",Q.ProcessCheckpoint)}async openPublishModal(){await this.shadowRoot.querySelector("publish-pane").shadowRoot.querySelector(".dialog").show(),Z("publish_modal_opened",Q.ProcessCheckpoint)}async openTestPublishModal(){await this.shadowRoot.querySelector("test-publish-pane").shadowRoot.querySelector(".dialog").show(),Z("test_publish_modal_opened",Q.ProcessCheckpoint)}iconSrcListParse(s){let e=Un().manifest,t=Un().manifestUrl;return this.handleImageUrl(s,e,t)||""}handleImageUrl(s,e,t){if(s.src.indexOf("data:")===0&&s.src.indexOf("base64")!==-1)return s.src;let i=ql(t,e==null?void 0:e.startUrl);if(i=ql(i==null?void 0:i.href,s.src),i)return i.href}decideColor(s){let e=!1;s==="manifest"?e=this.manifestRequiredCounter>0:s==="sw"?e=this.swRequiredCounter>0:e=this.secRequiredCounter>0;let t=!1;return s==="manifest"?t=this.manifestReccCounter>0:s==="sw"?t=this.swReccCounter>0:t=this.secReccCounter>0,e?{green:!1,red:!0,yellow:!1}:t?{green:!1,red:!1,yellow:!0}:{green:!0,red:!1,yellow:!1}}decideMessage(s,e,t){let i=!1,n=0;t==="manifest"?i=this.manifestRequiredCounter>0:t==="sw"?(n=1,i=this.swRequiredCounter>0):(n=2,i=this.secRequiredCounter>0);let r=parseFloat(JSON.stringify(s))/e,o=this.possible_messages[n].messages;return this.createdManifest||r==0||t==="sec"&&r!=1?o.none:i?o.blocked:r!=1?o.yellow:o.green}async animateItem(s){if(s.preventDefault,Z("todo_item_clicked",Q.ProcessCheckpoint),s.detail.card==="retest"){this.thingToAdd=s.detail.displayString,this.showConfirmationModal=!0;return}else if(s.detail.field==="Open Manifest Modal"){let n=this.shadowRoot.querySelector("manifest-editor-frame");(n==null?void 0:n.shadowRoot.querySelector(".dialog")).show();return}else if(s.detail.field==="Open SW Modal"){let n=this.shadowRoot.querySelector("sw-selector");(n==null?void 0:n.shadowRoot.querySelector(".dialog")).show();return}let e=this.shadowRoot.getElementById(s.detail.card);await e.show(),e.scrollIntoView({behavior:"smooth"});let t=this.shadowRoot.querySelectorAll('[data-field="'+s.detail.field+'"]'),i;t.length===1?i=t[0]:t.forEach(n=>{let r=n.querySelector("p").innerHTML.split("-->");r[r.length-1]===s.detail.displayString&&(i=n)}),i.classList.toggle("animate"),setTimeout(()=>{i.classList.toggle("animate")},1e3)}addRetestTodo(s){this.todoItems.push({card:"retest",field:"Manifest",fix:"Add "+s+" to your server and retest your site!",status:"retest",displayString:s}),this.requestUpdate()}rotateZero(s){Z(s+"_details_expanded",Q.ProcessCheckpoint);let e=this.shadowRoot.querySelector('[data-card="'+s+'"]');e&&(e.style.transform="rotate(0deg)")}rotateNinety(s){Z(s+"_details_closed",Q.ProcessCheckpoint);let e=this.shadowRoot.querySelector('[data-card="'+s+'"]');e&&(e.style.transform="rotate(90deg)")}sortTodos(){return this.todoItems.sort((s,e)=>s.status==="red"&&e.status!=="red"?-1:e.status==="red"&&s.status!=="red"?1:s.field.localeCompare(e.field)),this.todoItems}paginate(){return this.sortTodos().slice((this.pageNumber-1)*this.pageSize,this.pageNumber*this.pageSize)}switchPage(s){s&&this.pageNumber*this.pageSize<this.todoItems.length?this.pageNumber++:!s&&this.pageNumber!=1&&this.pageNumber--,this.requestUpdate()}getDots(){let s=[],e=Math.ceil(this.todoItems.length/this.pageSize);for(let t=0;t<e;t++)s.push("dot");return s}renderIndicators(){let s=0,e=0;return this.todoItems.forEach(t=>{t.status=="red"?e++:s++}),s+e!=0?g`
      <div id="indicators-holder">
        ${e!=0?g`<div class="indicator"><img src=${hs} alt="invalid result icon"/><p>${e}</p></div>`:g``}
        ${s!=0?g`<div class="indicator"><img src=${ei} alt="yield result icon"/><p>${s}</p></div>`:g``}
      </div>`:g``}render(){return g`
      <app-header></app-header>
      <div id="report-wrapper">
        <div id="content-holder">
          <div id="header-row">
          ${this.isAppCardInfoLoading?g`
            <div id="app-card" class="flex-col skeleton-effects">
              <div id="app-card-header">
                <sl-skeleton id="app-image-skeleton" effect="pulse"></sl-skeleton>
                <div id="card-info" class="flex-col">
                  <sl-skeleton class="app-info-skeleton" effect="pulse"></sl-skeleton>
                  <sl-skeleton class="app-info-skeleton" effect="pulse"></sl-skeleton>
                </div>
                <sl-skeleton class="app-info-skeleton skeleton-desc" effect="pulse"></sl-skeleton>
              </div>
              <div id="app-card-footer">
                <sl-skeleton class="app-info-skeleton-half" effect="pulse"></sl-skeleton>
              </div>
            </div>`:g`
            <div id="app-card" class="flex-col" style=${this.createdManifest?es({backgroundColor:"white",color:"#595959"}):es(this.CardStyles)}>
              <div id="app-card-header">
                <div id="pwa-image-holder">
                  ${this.proxyLoadingImage?g`<span class="proxy-loader"></span>`:g`<img src=${this.appCard.iconURL} alt=${this.appCard.iconAlt} />`}
                </div>
                <div id="card-info" class="flex-col">
                  <p id="site-name">${this.appCard.siteName}</p>
                  <p>${this.appCard.siteUrl}</p>
                </div>
                <p id="app-card-desc">${this.appCard.description}</p>
              </div>
              <div id="app-card-footer" style=${es(this.BorderStyles)}>
                <div id="test" style=${es(this.CardStyles)}>
                  <button
                    type="button"
                    id="retest"
                    @click=${()=>{this.retest(!1)}}
                    ?disabled=${this.runningTests}
                  >
                    <p id="last-edited" style=${es(this.LastEditedStyles)}>${this.lastTested}</p>

                    <img
                      src=${this.retestPath}
                      alt="retest site"
                      role="presentation"
                    />
                  </button>
                </div>
              </div>
              
            </div>`}
            <div id="app-actions" class="flex-col">
              <div id="package" class="flex-col-center">
                  ${this.canPackage?g`
                    <button
                      type="button"
                      id="pfs"
                      @click=${()=>this.openPublishModal()}
                    >
                      Package for stores
                    </button>
                    `:g`
                    <sl-tooltip class="mani-tooltip">
                    ${this.runningTests?g`<div slot="content" class="mani-tooltip-content"><img src="/assets/new/waivingMani.svg" alt="Waiving Mani" /> <p>Running tests...</p></div>`:g`<div slot="content" class="mani-tooltip-content"><img src="/assets/new/waivingMani.svg" alt="Waiving Mani" /><p>Your PWA is not store ready! Check your To-do-list and handle all required items!</p></div>`}
                        <button
                          type="button"
                          id="pfs-disabled"
                          aria-disabled="true"
                        >
                          Package for stores
                        </button>
                    </sl-tooltip>
                    `}
                <button type="button" id="test-download" @click=${()=>this.openTestPublishModal()}>
                  <p class="arrow_link">Download test package</p>
                  <img
                    src="/assets/new/arrow.svg"
                    alt="arrow"
                    role="presentation"
                  />
                </button>
              </div>
              <div id="actions-footer" class="flex-center">
                <p>Available stores:</p>
                <img
                  title="Windows"
                  src="/assets/windows_icon.svg"
                  alt="Windows"
                />
                <img title="iOS" src="/assets/apple_icon.svg" alt="iOS" />
                <img
                  title="Android"
                  src="/assets/android_icon_full.svg"
                  alt="Android"
                />
                <img
                  title="Meta Quest"
                  src="/assets/meta_icon.svg"
                  alt="Meta Quest"
                />
              </div>
            </div>
          </div>

          <div id="todo">
            <sl-details
              id="todo-detail"
              @sl-show=${()=>this.rotateNinety("todo")}
              @sl-hide=${()=>this.rotateZero("todo")}
              open
              >
              <div class="details-summary" slot="summary">
                <div id="todo-summary-left">
                  <p>Action Items</p>
                  ${!this.manifestDataLoading&&!this.swDataLoading&&!this.secDataLoading?this.renderIndicators():g``}
                </div>
                  <img class="dropdown_icon" data-card="todo" src="/assets/new/dropdownIcon.svg" alt="dropdown toggler"/>
                
              </div>
             ${!this.manifestDataLoading&&!this.swDataLoading&&!this.secDataLoading?this.paginate().map(s=>g`
                  <todo-item
                    .status=${s.status}
                    .field=${s.field}
                    .fix=${s.fix}
                    .card=${s.card}
                    .displayString=${s.displayString}
                    @todo-clicked=${e=>this.animateItem(e)}>
                  </todo-item>`):g`<span class="loader"></span>`}

            ${!this.manifestDataLoading&&!this.swDataLoading&&!this.secDataLoading&&this.todoItems.length>this.pageSize?g`
              <div id="pagination-actions">
                <button class="pagination-buttons" type="button"  @click=${()=>this.switchPage(!1)}><sl-icon class="pageToggles" name="chevron-left"></sl-icon></button>
                <div id="dots">
                  ${this.getDots().map((s,e)=>this.pageNumber==e+1?g`
                        <img src="/assets/new/active_dot.svg" alt="active dot" />
                      `:g`
                        <img src="/assets/new/inactive_dot.svg" alt="inactive dot" />
                      `)}
                </div>
                <button class="pagination-buttons" type="button"  @click=${()=>this.switchPage(!0)}><sl-icon class="pageToggles" name="chevron-right"></sl-icon></button>
              </div>`:g``}
            </sl-details>
          </div>

          <div id="manifest" class="flex-col">
            <div id="manifest-header">
              <div id="mh-content">
                <div id="mh-text" class="flex-col">
                  <p class="card-header">Manifest</p>
                  ${this.manifestDataLoading?g`
                      <div class="flex-col gap">
                        <sl-skeleton class="desc-skeleton" effect="pulse"></sl-skeleton>
                        <sl-skeleton class="desc-skeleton" effect="pulse"></sl-skeleton>
                      </div>
                    `:g`
                    <p class="card-desc">
                      ${this.decideMessage(this.manifestValidCounter,this.manifestTotalScore,"manifest")}
                    </p>
                  `}
                </div>

                <div id="mh-actions" class="flex-col">
                  ${this.manifestDataLoading?g`
                      <div class="flex-col gap">
                        <sl-skeleton class="desc-skeleton" effect="pulse"></sl-skeleton>
                        <sl-skeleton class="desc-skeleton" effect="pulse"></sl-skeleton>
                      </div>
                    `:g`
                      ${this.createdManifest?g`
                          <sl-tooltip class="mani-tooltip" open>
                            <div slot="content" class="mani-tooltip-content"><img src="/assets/new/waivingMani.svg" alt="Waiving Mani" /> <p>We did not find a manifest on your site before our tests timed out so we have created a manifest for you! <br> Click here to customize it!</p></div>
                            <button type="button" class="alternate" @click=${()=>this.openManifestEditorModal()}>Edit Your Manifest</button>
                          </sl-tooltip>`:g`<button type="button" class="alternate" @click=${()=>this.openManifestEditorModal()}>Edit Your Manifest</button>`}

                      <a
                        class="arrow_anchor"
                        href="https://docs.pwabuilder.com/#/home/pwa-intro?id=web-app-manifests"
                        rel="noopener"
                        target="_blank"
                        @click=${()=>Z("manifest_documentation_clicked",Q.ProcessCheckpoint)}
                      >
                        <p class="arrow_link">Manifest Documentation</p>
                        <img
                          src="/assets/new/arrow.svg"
                          alt="arrow"
                          role="presentation"
                        />
                      </a>
                  `}

                </div>
              </div>

              <div id="mh-right">
                ${this.manifestDataLoading?g`<sl-skeleton class="progressRingSkeleton" effect="pulse"></sl-skeleton>`:g`<sl-progress-ring
                            id="manifestProgressRing"
                            class=${Qr(this.decideColor("manifest"))}
                            value="${this.createdManifest?0:parseFloat(JSON.stringify(this.manifestValidCounter))/this.manifestTotalScore*100}"
                          >${this.createdManifest?g`<img src="assets/new/macro_error.svg" class="macro_error" alt="missing manifest requirements" />`:g`${this.manifestValidCounter} / ${this.manifestTotalScore}`}</sl-progress-ring>`}
              </div>
            </div>
            <sl-details
              id="mani-details"
              class="details"
              @sl-show=${()=>this.rotateNinety("mani-details")}
              @sl-hide=${()=>this.rotateZero("mani-details")}
              >
              ${this.manifestDataLoading?g`<div slot="summary"><sl-skeleton class="summary-skeleton" effect="pulse"></sl-skeleton></div>`:g`<div class="details-summary" slot="summary"><p>View Details</p><img class="dropdown_icon" data-card="mani-details" src="/assets/new/dropdownIcon.svg" alt="dropdown toggler"/></div>`}
              <div id="manifest-detail-grid">
                <div class="detail-list">
                  <p class="detail-list-header">Required</p>

                  ${this.requiredMissingFields.length>0?g`
                    ${this.requiredMissingFields.map(s=>g`<div class="test-result" data-field=${s}>
                          <sl-tooltip content=${s+" is missing from your manifest."} placement="right">
                            <img src=${hs} alt="invalid result icon"/>
                          </sl-tooltip>
                      <p>Manifest includes ${s} field</p>
                    </div>`)}
                  `:g``}
                  
                  ${this.validationResults.map(s=>s.category==="required"||s.testRequired&&!s.valid?g`
                    <div class="test-result" data-field=${s.member}>
                      ${s.valid?g`<img src=${Qt} alt="passing result icon"/>`:g`<sl-tooltip content=${s.errorString?s.errorString:""} placement="right">
                                <img src=${hs} alt="invalid result icon"/>
                              </sl-tooltip>`}
                      <p>${s.displayString}</p>
                    </div>
                  `:g``)}
                </div>
                <div class="detail-list">
                  <p class="detail-list-header">Recommended</p>
                  ${this.reccMissingFields.length>0?g`
                    ${this.reccMissingFields.map(s=>g`<div class="test-result" data-field=${s}>
                          <sl-tooltip content=${s+" is missing from your manifest."} placement="right">
                            <img src=${ei} alt="yield result icon"/>
                          </sl-tooltip>
                      <p>Manifest includes ${s} field</p>
                    </div>`)}
                  `:g``}
                  ${this.validationResults.map(s=>s.category==="recommended"&&(s.testRequired&&s.valid||!s.testRequired)?g`
                    <div class="test-result" data-field=${s.member}>
                      ${s.valid?g`<img src=${Qt} alt="passing result icon"/>`:g`<sl-tooltip content=${s.errorString?s.errorString:""} placement="right">
                                <img src=${ei} alt="yield result icon"/>
                              </sl-tooltip>
                        `}
                      <p>${s.displayString}</p>
                    </div>
                  `:g``)}
                </div>
                <div class="detail-list">
                  <p class="detail-list-header">Optional</p>
                  ${this.optMissingFields.length>0?g`
                    ${this.optMissingFields.map(s=>g`
                        <div class="test-result" data-field=${s}>
                          <sl-tooltip content=${s+" is missing from your manifest."} placement="right">
                            <img src=${ei} alt="yield result icon"/>
                          </sl-tooltip>
                          <p>Manifest includes ${s} field</p>
                        </div>`)}
                  `:g``}

                  ${this.validationResults.map(s=>s.category==="optional"&&(s.testRequired&&s.valid||!s.testRequired)?g`
                    <div class="test-result" data-field=${s.member}>
                      ${s.valid?g`<img src=${Qt} alt="passing result icon"/>`:g`
                          <sl-tooltip content=${s.errorString?s.errorString:""} placement="right">
                            <img src=${ei} alt="yield result icon"/>
                          </sl-tooltip>
                        `}
                      <p>${s.displayString}</p>
                    </div>
                  `:g``)}
                </div>
              </div>
            </sl-details>
          </div>

          <div id="two-cell-row">
            <div id="sw" class="half-width-cards">
              <div id="sw-header" class="flex-col">
                <div id="swh-top">
                  <div id="swh-text" class="flex-col">
                    <p class="card-header">Service Worker</p>
                    ${this.swDataLoading?g`
                        <div class="flex-col gap">
                          <sl-skeleton class="desc-skeleton" effect="pulse"></sl-skeleton>
                          <sl-skeleton class="desc-skeleton" effect="pulse"></sl-skeleton>
                        </div>
                      `:g`
                        <p class="card-desc">
                          ${this.decideMessage(this.swValidCounter,this.swTotalScore,"sw")}
                        </p>
                      `}
                  </div>
                  ${this.swDataLoading?g`<sl-skeleton class="progressRingSkeleton" effect="pulse"></sl-skeleton>`:g`<sl-progress-ring
                    id="swProgressRing"
                    class=${Qr(this.decideColor("sw"))}
                    value="${parseFloat(JSON.stringify(this.swValidCounter))/this.swTotalScore*100}"
                    >${this.swValidCounter==0?g`<img src="assets/new/macro_error.svg" class="macro_error" alt="missing service worker requirements" />`:g`${this.swValidCounter} / ${this.swTotalScore}`}</sl-progress-ring>
                    `}
                </div>
                <div id="sw-actions" class="flex-col">
                  ${this.swDataLoading?g`
                    <sl-skeleton class="desc-skeleton" effect="pulse"></sl-skeleton>
                  `:g`
                    <button type="button" class="alternate" @click=${()=>this.openSWSelectorModal()}>
                      Generate Service Worker
                    </button>
                  `}

                  ${this.swDataLoading?g`
                      <sl-skeleton class="desc-skeleton" effect="pulse"></sl-skeleton>
                    `:g`
                      <a
                        class="arrow_anchor"
                        rel="noopener"
                        target="_blank"
                        href="https://docs.pwabuilder.com/#/home/sw-intro"
                        @click=${()=>Z("sw_documentation_clicked",Q.ProcessCheckpoint)}>
                        <p class="arrow_link">Service Worker Documentation</p>
                        <img
                          src="/assets/new/arrow.svg"
                          alt="arrow"
                          role="presentation"
                        />
                      </a>
                    `}

                </div>
              </div>
              <sl-details
                id="sw-details"
                class="details"
                @sl-show=${()=>this.rotateNinety("sw-details")}
                @sl-hide=${()=>this.rotateZero("sw-details")}
              >
                ${this.swDataLoading?g`<div slot="summary"><sl-skeleton class="summary-skeleton" effect="pulse"></sl-skeleton></div>`:g`<div class="details-summary" slot="summary"><p>View Details</p><img class="dropdown_icon" data-card="sw-details" src="/assets/new/dropdownIcon.svg" alt="dropdown toggler"/></div>`}
                <div class="detail-grid">
                  <div class="detail-list">
                    <p class="detail-list-header">Required</p>
                    ${this.serviceWorkerResults.map(s=>s.category==="required"?g`
                      <div class="test-result" data-field=${s.infoString}>
                        ${s.result?g`<img src=${Qt} alt="passing result icon"/>`:g`<img src=${hs} alt="invalid result icon"/>`}
                        <p>${s.infoString}</p>
                      </div>
                    `:g``)}
                  </div>
                  <div class="detail-list">
                    <p class="detail-list-header">Recommended</p>
                    ${this.serviceWorkerResults.map(s=>s.category==="recommended"?g`
                    <div class="test-result" data-field=${s.infoString}>
                        ${s.result?g`<img src=${Qt} alt="passing result icon"/>`:g`<img src=${ei} alt="yield result icon"/>`}
                        <p>${s.infoString}</p>
                      </div>
                    `:g``)}
                  </div>
                  <div class="detail-list">
                    <p class="detail-list-header">Optional</p>
                    ${this.serviceWorkerResults.map(s=>s.category==="optional"?g`
                      <div class="test-result" data-field=${s.infoString}>
                        ${s.result?g`<img src=${Qt} alt="passing result icon"/>`:g`<img src=${ei} alt="yield result icon"/>`}
                        <p>${s.infoString}</p>
                      </div>
                    `:g``)}
                  </div>
                </div>
              </sl-details>
            </div>
            <div id="security" class="half-width-cards">
              <div id="sec-header" class="flex-col">
                <div id="sec-top">
                  <div id="sec-text" class="flex-col">
                    <p class="card-header">Security</p>
                    ${this.secDataLoading?g`
                        <div class="flex-col gap">
                          <sl-skeleton class="desc-skeleton" effect="pulse"></sl-skeleton>
                          <sl-skeleton class="desc-skeleton" effect="pulse"></sl-skeleton>
                        </div>
                      `:g`
                        <p class="card-desc">
                          ${this.decideMessage(this.secValidCounter,this.secTotalScore,"sec")}
                        </p>
                      `}
                  </div>
                  ${this.secDataLoading?g`<sl-skeleton class="progressRingSkeleton" effect="pulse"></sl-skeleton>`:g`<sl-progress-ring
                    id="secProgressRing"
                    class=${Qr(this.decideColor("sec"))}
                    value="${parseFloat(JSON.stringify(this.secValidCounter))/this.secTotalScore*100}"
                    >${this.secValidCounter==0?g`<img src="assets/new/macro_error.svg" class="macro_error" alt="missing requirements"/>`:g`${this.secValidCounter} / ${this.secTotalScore}`}</sl-progress-ring>
                    `}

                </div>
                <div id="sec-actions" class="flex-col">
                  ${this.secDataLoading?g`
                      <sl-skeleton class="desc-skeleton" effect="pulse"></sl-skeleton>
                    `:g`
                      <a
                        class="arrow_anchor"
                        href="https://microsoft.github.io/win-student-devs/#/30DaysOfPWA/core-concepts/04" 
                        rel="noopener"
                        target="_blank"
                        @click=${()=>Z("security_documentation_clicked",Q.ProcessCheckpoint)}>
                        <p class="arrow_link">Security Documentation</p>
                        <img
                          src="/assets/new/arrow.svg"
                          alt="arrow"
                          role="presentation"
                        />
                      </a>
                    `}
                </div>
              </div>
              <sl-details
                id="sec-details"
                class="details"
                @sl-show=${()=>this.rotateNinety("sec-details")}
                @sl-hide=${()=>this.rotateZero("sec-details")}
                >
              ${this.secDataLoading?g`<div slot="summary"><sl-skeleton class="summary-skeleton" effect="pulse"></sl-skeleton></div>`:g`<div class="details-summary" slot="summary"><p>View Details</p><img class="dropdown_icon" data-card="sec-details" src="/assets/new/dropdownIcon.svg" alt="dropdown toggler"/></div>`}
                <div class="detail-grid">
                  <div class="detail-list">
                    <p class="detail-list-header">Required</p>
                    ${this.securityResults.map(s=>s.category==="required"?g`
                        <div class="test-result" data-field=${s.infoString}>
                          ${s.result?g`<img src=${Qt} alt="passing result icon"/>`:g`<img src=${hs} alt="invalid result icon"/>`}
                          <p>${s.infoString}</p>
                        </div>
                      `:g``)}
                  </div>
                </div>
              </sl-details>
            </div>
          </div>

        </div>
      </div>

      <sl-dialog class="dialog" ?open=${this.showConfirmationModal} @sl-hide=${()=>this.showConfirmationModal=!1} noHeader>
        ${this.retestConfirmed?g`
          <p>Retesting your site now!</p>
          `:g`
            <p>Have you added your new ${this.thingToAdd} to your site?</p>
            <div id="confirmationButtons">
              <sl-button>No</sl-button>
              <sl-button @click=${()=>this.retest(!0)}>Yes</sl-button>
            </div>
          `}

      </sl-dialog>

      <publish-pane></publish-pane>
      <test-publish-pane></test-publish-pane>
      ${this.manifestDataLoading?g``:g`<manifest-editor-frame .isGenerated=${this.createdManifest} @readyForRetest=${()=>this.addRetestTodo("Manifest")}></manifest-editor-frame>`}
      <sw-selector @readyForRetest=${()=>this.addRetestTodo("Service Worker")}></sw-selector>

    `}};C([Ae({type:Object})],k.prototype,"resultOfTest",2);C([Ae({type:Object})],k.prototype,"appCard",2);C([Ae({type:Object})],k.prototype,"CardStyles",2);C([Ae({type:Object})],k.prototype,"BorderStyles",2);C([Ae({type:Object})],k.prototype,"LastEditedStyles",2);C([Ae()],k.prototype,"manifestCard",2);C([Ae()],k.prototype,"serviceWorkerCard",2);C([Ae()],k.prototype,"securityCard",2);C([Ae()],k.prototype,"siteURL",2);C([M()],k.prototype,"swScore",2);C([M()],k.prototype,"maniScore",2);C([M()],k.prototype,"securityScore",2);C([M()],k.prototype,"errored",2);C([M()],k.prototype,"errorMessage",2);C([M()],k.prototype,"errorLink",2);C([M()],k.prototype,"mql",2);C([M()],k.prototype,"isAppCardInfoLoading",2);C([M()],k.prototype,"isDeskTopView",2);C([M()],k.prototype,"runningTests",2);C([M()],k.prototype,"canPackageList",2);C([M()],k.prototype,"canPackage",2);C([M()],k.prototype,"manifestEditorOpened",2);C([M()],k.prototype,"retestPath",2);C([M()],k.prototype,"swSelectorOpen",2);C([M()],k.prototype,"lastTested",2);C([M()],k.prototype,"todoWindow",2);C([M()],k.prototype,"validationResults",2);C([M()],k.prototype,"manifestTotalScore",2);C([M()],k.prototype,"manifestValidCounter",2);C([M()],k.prototype,"manifestRequiredCounter",2);C([M()],k.prototype,"manifestReccCounter",2);C([M()],k.prototype,"manifestDataLoading",2);C([M()],k.prototype,"manifestMessage",2);C([M()],k.prototype,"proxyLoadingImage",2);C([M()],k.prototype,"serviceWorkerResults",2);C([M()],k.prototype,"swTotalScore",2);C([M()],k.prototype,"swValidCounter",2);C([M()],k.prototype,"swRequiredCounter",2);C([M()],k.prototype,"swReccCounter",2);C([M()],k.prototype,"swDataLoading",2);C([M()],k.prototype,"swMessage",2);C([M()],k.prototype,"securityResults",2);C([M()],k.prototype,"secTotalScore",2);C([M()],k.prototype,"secValidCounter",2);C([M()],k.prototype,"secRequiredCounter",2);C([M()],k.prototype,"secReccCounter",2);C([M()],k.prototype,"secDataLoading",2);C([M()],k.prototype,"secMessage",2);C([M()],k.prototype,"requiredMissingFields",2);C([M()],k.prototype,"reccMissingFields",2);C([M()],k.prototype,"optMissingFields",2);C([M()],k.prototype,"showConfirmationModal",2);C([M()],k.prototype,"thingToAdd",2);C([M()],k.prototype,"retestConfirmed",2);C([M()],k.prototype,"createdManifest",2);C([M()],k.prototype,"manifestContext",2);C([M()],k.prototype,"todoItems",2);k=C([Hs("app-report")],k);export{k as AppReport};
//# sourceMappingURL=app-report.e1fe50ec.js.map
