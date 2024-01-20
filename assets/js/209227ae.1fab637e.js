"use strict";(self.webpackChunkopendal_website=self.webpackChunkopendal_website||[]).push([[6611],{9613:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(9496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},h="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=c(a),u=n,d=h["".concat(s,".").concat(u)]||h[u]||f[u]||o;return a?r.createElement(d,l(l({ref:t},p),{},{components:a})):r.createElement(d,l({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[h]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3468:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=a(8126),n=(a(9496),a(9613));const o={},l="Apache OpenDAL\u2122 Downloads",i={type:"mdx",permalink:"/download",source:"@site/src/pages/download.md",title:"Apache OpenDAL\u2122 Downloads",description:"The official Apache OpenDAL releases are provided as source artifacts.",frontMatter:{}},s=[{value:"Releases",id:"releases",level:2},{value:"Notes",id:"notes",level:2},{value:"To verify the signature of the release artifact",id:"to-verify-the-signature-of-the-release-artifact",level:3},{value:"To verify the checksum of the release artifact",id:"to-verify-the-checksum-of-the-release-artifact",level:3}],c={toc:s},p="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"apache-opendal-downloads"},"Apache OpenDAL\u2122 Downloads"),(0,n.kt)("p",null,"The official Apache OpenDAL releases are provided as source artifacts."),(0,n.kt)("h2",{id:"releases"},"Releases"),(0,n.kt)("p",null,"The latest source release is ",(0,n.kt)("a",{parentName:"p",href:"https://www.apache.org/dyn/closer.lua/opendal/0.44.1/apache-opendal-incubating-0.44.1-src.tar.gz?action=download"},"0.44.1")," (",(0,n.kt)("a",{parentName:"p",href:"https://downloads.apache.org/opendal/0.44.1/apache-opendal-incubating-0.44.1-src.tar.gz.asc"},"asc"),",\n",(0,n.kt)("a",{parentName:"p",href:"https://downloads.apache.org/opendal/0.44.1/apache-opendal-incubating-0.44.1-src.tar.gz.sha512"},"sha512"),")."),(0,n.kt)("p",null,"For older releases, please check the ",(0,n.kt)("a",{parentName:"p",href:"https://archive.apache.org/dist/opendal/"},"archive"),"."),(0,n.kt)("p",null,"For even older releases during the incubating phase, please check the ",(0,n.kt)("a",{parentName:"p",href:"https://archive.apache.org/dist/incubator/opendal/"},"incubator archive"),"."),(0,n.kt)("h2",{id:"notes"},"Notes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"When downloading a release, please verify the OpenPGP compatible signature (or failing that, check the SHA-512); these should be fetched from the main Apache site."),(0,n.kt)("li",{parentName:"ul"},"The KEYS file contains the public keys used for signing release. It is recommended that (when possible) a web of trust is used to confirm the identity of these keys."),(0,n.kt)("li",{parentName:"ul"},"Please download the ",(0,n.kt)("a",{parentName:"li",href:"https://downloads.apache.org/opendal/KEYS"},"KEYS")," as well as the .asc signature files.")),(0,n.kt)("h3",{id:"to-verify-the-signature-of-the-release-artifact"},"To verify the signature of the release artifact"),(0,n.kt)("p",null,"You will need to download both the release artifact and the .asc signature file for that artifact. Then verify the signature by:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Download the KEYS file and the .asc signature files for the relevant release artifacts.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Import the KEYS file to your GPG keyring: "),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"gpg --import KEYS\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Verify the signature of the release artifact using the following command:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"gpg --verify <artifact>.asc <artifact>\n")))),(0,n.kt)("h3",{id:"to-verify-the-checksum-of-the-release-artifact"},"To verify the checksum of the release artifact"),(0,n.kt)("p",null,"You will need to download both the release artifact and the .sha512 checksum file for that artifact. Then verify the checksum by:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"shasum -a 512 -c <artifact>.sha512\n")))}h.isMDXComponent=!0}}]);