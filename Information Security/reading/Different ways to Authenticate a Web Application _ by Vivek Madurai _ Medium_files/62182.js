(self.webpackChunklite=self.webpackChunklite||[]).push([[62182],{62182:(e,t,n)=>{"use strict";n.r(t),n.d(t,{PostSidebarContent:()=>J,PostSidebar:()=>Q,PostSidebar_customStyleSheet:()=>ee,PostSidebar_collection:()=>te,PostSidebar_post:()=>ne});var o=n(28655),i=n.n(o),r=n(50008),a=n.n(r),l=n(63038),c=n.n(l),s=n(59713),d=n.n(s),u=n(71439),m=n(67294),p=n(28859),f=n(84783),v=n(22669),h=n(43689),g=n(50493),E=n(86948),x=n(47713),b=n(21356),w=n(97297),S=n(78886),y=n(49925),k=n(34793),N=n(49544),I=n(29043),P=n(72393),R=n(76532),F=n(51684),C=n(83021),_=n(10697),T=n(34535),D=n(31001),B=n(42933),L=n(82318),O=n(98024),A=n(18579),H=n(51512),U=n(6688),j=n(67297),M=n(89349),W=n(21146),X=n(27952),G=n(61598);function V(){var e=i()(["\n  fragment PostSidebar_post on Post {\n    id\n    clapCount\n    allowResponses\n    postResponses {\n      count\n    }\n    isLimitedState\n    collection {\n      ...auroraHooks_publisher\n      ...PostSidebar_collection\n    }\n    creator {\n      bio\n      name\n      ...FollowAndSubscribeButtons_user\n      ...auroraHooks_publisher\n      ...userUrl_user\n      ...PublisherSidebarFollows_user\n      ...SidebarProfilePic_user\n      ...PublisherFollowingCount_publisher\n      ...UserSubscribeButton_user\n    }\n    isShortform\n    ...BookmarkButton_post\n    ...CollectionFollowButton_post\n    ...MultiVote_post\n    ...UserFollowButton_post\n    ...TableOfContents_post\n  }\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);return V=function(){return e},e}function $(){var e=i()(["\n  fragment PostSidebar_collection on Collection {\n    id\n    description\n    tagline\n    ...CollectionFollowButton_collection\n    ...collectionUrl_collection\n  }\n  ","\n  ","\n"]);return $=function(){return e},e}function z(){var e=i()(["\n  fragment PostSidebar_customStyleSheet on CustomStyleSheet {\n    ...PublisherSidebarFollows_customStyleSheet\n  }\n  ","\n"]);return z=function(){return e},e}var J=function(e){var t,n=e.customStyleSheet,o=e.maxHeight,i=void 0===o?0:o,r=e.post,a=e.showProfilePic,l=e.visible,c=m.useContext(P.f).openSidebar,s=m.useRef(null),d=(0,U.I)(),u=(0,j.v9)((function(e){return e.navigation.currentLocation})),p=(0,y.GT)(r.collection||r.creator)?m.createElement(m.Fragment,null,a&&!!r.creator&&m.createElement(k.$,{user:r.creator}),m.createElement(Z,{post:r,customStyleSheet:n,isVisible:l})):r.collection&&m.createElement(q,{post:r,currentLocation:u});return m.createElement(m.Fragment,null,r.isShortform?p:m.createElement(m.Fragment,null,m.createElement("div",{ref:s},i?m.createElement("div",{className:d((0,C.JS)(i))},p):p,m.createElement(B.x,{display:"flex",flexDirection:"row",borderTop:"BASE_LIGHTER",paddingTop:"32px",justifyContent:"space-evenly",alignItems:"center",width:"100%"},m.createElement(B.x,{display:"flex",marginRight:"20px"},m.createElement(b.S,{post:r,buttonStyle:"SUBTLE_PADDED",susiEntry:"clap_sidebar",hasDialog:!0})),m.createElement(H.cW,{source:{postId:r.id},extendSource:!0},m.createElement(B.x,{marginRight:"20px",marginTop:"2px"},m.createElement(I.h,{trackingData:{postId:r.id},responsesCount:null===(t=r.postResponses)||void 0===t?void 0:t.count,handleClick:c||function(){},allowResponses:r.allowResponses,isLimitedState:r.isLimitedState,svgSize:"S",countStylesOverride:{paddingLeft:"6px"}})),m.createElement(B.x,{marginTop:"1px"},m.createElement(x.o,{post:r,susiEntry:"bookmark_sidebar"}))))),m.createElement(g.o5,{post:r,mode:"SIDEBAR",heightRef:s})))},Y={wordBreak:"break-word"},K=function(e){var t;return t={opacity:e?1:0,pointerEvents:e?"auto":"none",willChange:"opacity",position:"fixed",width:"188px",left:"50%",transform:"translateX(406px)",top:"calc(".concat(h.Je,"px + 54px + 14px)")},d()(t,(0,M.nk)("no-preference"),{transition:"opacity 200ms"}),d()(t,"@media all and (max-width: 1230px)",{display:"none"}),t},Q=m.forwardRef((function(e,t){var n=e.isClearOfBounds,o=e.isOnPage,i=e.customStyleSheet,r=e.post,l=e.extraWide,s=(0,U.I)(),d=m.useContext(p.u6).watchedBounds,u=m.useState(o||!1),f=c()(u,2),v=f[0],h=f[1],g=m.useState(0),E=c()(g,2),x=E[0],b=E[1],w=m.useState(n||!1),S=c()(w,2),y=S[0],k=S[1],I=m.useRef(null),P=m.useRef(null),R=function(e,t){var n,o,i,r,a=null===(n=e.get("byline"))||void 0===n||null===(o=n.ref)||void 0===o?void 0:o.current,l=null===(i=e.get("ghost-track"))||void 0===i||null===(r=i.ref)||void 0===r?void 0:r.current,c=l&&(0,W.L6)(l).top+window.scrollY-window.innerHeight||0;if(a&&l){var s=a.offsetTop+a.offsetHeight+10;return s-c}}(d);m.useEffect((0,C.T6)(d,h),[d]);var _=m.useCallback((function(){var e;!function(e,t,n,o,i){if(e.current){var r=t.current,a=["image","bgimage","footer","byline","title","header"],l=(0,F.b2)(e.current,n,a,i),c=!r||(0,F.b2)(r,n,a,i);o(l&&c)}}(I,P,d,k,{threshold:10});var t=(0,C.Ui)(x,R,null==I||null===(e=I.current)||void 0===e?void 0:e.clientHeight);t!==x&&b(t)}),[d,x,R]);m.useEffect((function(){_()}),[]);var T="object"===a()(t)?t:null;m.useEffect((0,F.hE)(_,null==T?void 0:T.current),[_,null==T?void 0:T.current]);var D=y&&v;return m.createElement(H.cW,{source:{susiEntry:"post_sidebar",name:"post_sidebar"}},m.createElement(F.HX,{testId:"post-sidebar",isFixed:!0,scrollableRef:t,sidebarRef:I,topOffset:R,visible:D,extraWide:l},m.createElement(J,{customStyleSheet:i,maxHeight:x,post:r,visible:D})),m.createElement("div",{className:s(K(D)),ref:P},m.createElement(N._U,{postId:r.id,isVisible:D})))})),q=function(e){var t=e.post,n=e.currentLocation,o=(0,U.I)(),i=(0,A.n)({name:"heading",scale:"XS",fontWeight:"NORMAL"}),r=(0,j.v9)((function(e){return e.config.authDomain})),a=t.collection;return a?m.createElement(B.x,{marginBottom:"20px"},(null==a?void 0:a.name)&&m.createElement(L.r,{href:(0,X.WGd)(a,n,r)},m.createElement("h2",{className:o([i,Y])},a.name)),(a.tagline||a.description)&&m.createElement(B.x,{paddingTop:"2px",paddingBottom:"20px"},m.createElement(O.F,{scale:"M",clamp:6},a.tagline||a.description)),m.createElement(f.Fp,{buttonSize:"REGULAR",collection:a,post:t,susiEntry:"follow_sidebar"})):null},Z=function(e){var t=e.post,n=e.customStyleSheet,o=e.isVisible,i=(0,R.H)().value,r=(0,j.v9)((function(e){return e.config.authDomain})),a=(0,U.I)(),l=(0,A.n)({name:"heading",scale:"XS",fontWeight:"NORMAL"}),c=t.creator;if(!c||!c.name)return null;var s=m.createElement("h2",{className:a([l,Y])},c.name),d=c?m.createElement(L.r,{href:(0,X.AWr)(c,r)},s):s;return m.createElement(m.Fragment,null,m.createElement(B.x,{marginBottom:"20px"},m.createElement(B.x,{paddingBottom:"5px"},d),c.bio&&m.createElement(B.x,{paddingTop:"2px"},m.createElement(O.F,{scale:"M"},m.createElement(v.P,{wrapLinks:!0},c.bio))),(null==i?void 0:i.id)!==c.id&&m.createElement(H.cW,{source:{name:"post_sidebar",postId:t.id}},m.createElement(B.x,{display:"flex",paddingTop:"20px"},m.createElement(_.N,{creator:c,post:t,susiEntry:"follow_sidebar",showMembershipUpsellModal:!!t.collection,shouldHideTooltip:!o,isVisible:o})))),m.createElement(S.Lk.Provider,{value:{postId:t.id}},m.createElement(S.eB,{withBottomBorder:!0,publisher:c,customStyleSheet:n,isVisible:o})))},ee=(0,u.Ps)(z(),S.qy),te=(0,u.Ps)($(),f.Iq,G.nf),ne=(0,u.Ps)(V(),y.C5,te,T.i,E.z,f.b3,b.x,D.S$,g.tA,G.$m,S.FB,k.G,w.b5)},50493:(e,t,n)=>{"use strict";n.d(t,{o5:()=>N,tA:()=>S,tE:()=>y});var o=n(28655),i=n.n(o),r=n(71439),a=n(67294),l=n(4743),c=n(51684),s=n(82318),d=n(98024),u=n(6688),m={INLINE:{padding:"8px 0",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},SIDEBAR:{padding:"8px 0",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",width:"".concat(c.ZR,"px"),":hover":{width:"200px"}}};function p(e){var t=(0,u.I)();return a.createElement("li",{className:t({overflow:"hidden"})},a.createElement(d.F,{scale:"M",color:"DARKER"},a.createElement(s.r,{href:"#".concat(e.destination),onClick:function(t){t.preventDefault(),function(e){var t=document.getElementById(e);if(t){var n=t.offsetTop-56;window.scrollTo({left:0,top:n,behavior:"smooth"}),window.history.pushState({},"","#".concat(e))}}(e.destination)},disableSourceParam:!0,follow:!1,inline:!0},a.createElement("div",{className:t(m[e.mode]),title:e.text},e.text))))}var f=n(7654),v=n(42933),h=n(86021),g=n(77180),E=n(14391),x=n(67122),b=n(25885);function w(){var e=i()(["\n  fragment TableOfContents_post on Post {\n    id\n    collection {\n      id\n    }\n    content(postMeteringOptions: $postMeteringOptions) {\n      bodyModel {\n        paragraphs {\n          id\n          name\n          type\n          text\n        }\n      }\n    }\n  }\n"]);return w=function(){return e},e}var S=(0,r.Ps)(w()),y=function(e){return!!(e.collection&&e.collection.id&&["3ec9f38ac0bd","3f6ecf56618","8d6b8a439e32"].includes(e.collection.id))||["8135e6744d59","21f0e9818b3a"].includes(e.id)},k={INLINE:{display:{xs:"block",sm:"block",md:"block",lg:"block",xl:"none"},marginTop:"35px"},SIDEBAR:{display:{xs:"none",sm:"none",md:"none",lg:"none",xl:"block"},margin:"50px 0",fontSize:"16px",":hover":{width:"200px"}}},N=function(e){var t=e.post,n=e.mode,o=e.heightRef,i=(0,u.I)(),r=(0,g.F)().backgroundColor,c=function(e){var t=(e||{content:{bodyModel:{paragraphs:null}}}).content.bodyModel.paragraphs;if(!t)throw new Error("Expected post to have paragraphs.");var n=(0,l.LI)(t),o=t.filter((function(e){return function(e){switch(e){case E.NJ.H1:case E.NJ.H2:case E.NJ.H3:return!0}return!1}(e.type)}));return null!==n.titleIndex&&o.splice(0,1),o.length>1?o:[]}(t);if(!y(t)||null==c||!c.length)return null;var s,d,m=a.createElement(v.x,{overflow:"hidden",marginTop:"16px"},a.createElement("ol",{className:i({marginTop:"5px"})},c.map((function(e){return a.createElement(p,{key:"toc_".concat(e.name),text:e.text||"",destination:e.name||"",mode:n})})))),w=(0,b.n2)(r),S=function(e){return"rgba(".concat(w[0],", ").concat(w[1],", ").concat(w[2],", ").concat(e,")")};switch(n){case"INLINE":var N=a.createElement(h.Lh,{scale:"M",color:"LIGHTER"},a.createElement("div",{className:i({marginRight:"7px"})},"Jump To Section"));return a.createElement("div",{className:i(k[n])},a.createElement(v.x,{borderBottom:"BASE_LIGHTER",paddingBottom:"10px"},a.createElement(f.$,{titleComponent:N,width:"auto",arrowFill:(0,x.Uy)(.54)},m)));case"SIDEBAR":return a.createElement("div",{className:i(k[n])},a.createElement(h.Lh,{scale:"S",color:"LIGHTER"},a.createElement("div",{className:i({whiteSpace:"nowrap"})},"Table of Contents")),a.createElement(v.x,{position:"relative"},a.createElement("div",{className:i((function(){return{background:"linear-gradient(".concat(S(1),",\n      ").concat(S(.5),",\n      ").concat(S(0),")"),width:"100%",height:"".concat(35,"px")}}))}),a.createElement("div",{className:i({overflowY:"scroll",scrollbarWidth:"none","-ms-overflow-style":"none","::-webkit-scrollbar":{display:"none"},height:(s=null!=o&&o.current?o.current.offsetHeight:0,d=Math.max("undefined"!=typeof window?window.innerHeight-s-106-100:150,150),"".concat(d,"px")),paddingBottom:"".concat(35,"px"),position:"relative",top:"-".concat(35,"px")})},m),a.createElement("div",{className:i((function(){return{background:"linear-gradient(".concat(S(0),",\n      ").concat(S(.5),",\n      ").concat(S(1),")"),position:"relative",width:"100%",height:"".concat(35,"px"),top:"-".concat(35,"px")}}))})));default:return null}}},47713:(e,t,n)=>{"use strict";n.d(t,{o:()=>f});var o=n(67294),i=n(46101),r=n(86948),a=n(76532),l=n(62181),c=n(33914),s=n(6688),d=n(14391),u=n(67297),m=n(353),p=n(27952),f=function(e){var t=e.post,n=e.susiEntry,f=t.id,v=t.visibility,h=(0,s.I)(),g=(0,u.v9)((function(e){return e.config.authDomain})),E=(0,a.H)(),x=E.value;return E.loading||v===d.Wn.UNLISTED?null:x?o.createElement(c._,{tooltipText:"Save",targetDistance:15},o.createElement(r.e,{post:t,susiEntry:n})):o.createElement(l.R9,{post:t,operation:"register",actionUrl:(0,p.XET)(g,f),susiEntry:n},o.createElement(m.Z,{className:h(i.K)}))}},7654:(e,t,n)=>{"use strict";n.d(t,{$:()=>p});var o=n(63038),i=n.n(o),r=n(67294),a=n(42933),l=n(37278),c=n(6688),s=n(8403),d=n(73004),u=n(51064),m=300,p=function(e){var t,n=e.children,o=e.title,p=e.titleComponent,f=e.width,v=e.arrowFill,h=null===(t=(0,s.Wd)("unfold"))||void 0===t?void 0:t.toLowerCase(),g=!!o&&h===o.toLowerCase(),E=(0,c.I)(),x=(0,u.O)(!1),b=i()(x,4),w=b[0],S=b[3],y=function(e){var t=r.useRef(null),n=r.useState("0px"),o=i()(n,2),a=o[0],l=o[1],c=r.useState(!1),s=i()(c,2),d=s[0],u=s[1];return r.useEffect((function(){var n=t.current;n&&(e?(l("".concat(n.getBoundingClientRect().height,"px")),u(!0),setTimeout((function(){l("auto"),u(!1)}),m)):"auto"===a&&(l("".concat(n.getBoundingClientRect().height,"px")),u(!0),setTimeout((function(){return l("0px")}),50),setTimeout((function(){return u(!1)}),m)))}),[e]),{height:a,isAnimating:d,ref:t}}(w),k=y.ref,N=y.height,I=y.isAnimating;return r.useEffect((function(){g&&S()}),[]),r.createElement(r.Fragment,null,r.createElement("button",{className:E({width:f||"100%",height:"100%",border:"none",textAlign:"left",outline:"none",cursor:"pointer",padding:"0px"}),onClick:S,disabled:I},r.createElement(a.x,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},p||r.createElement(l.X6,{scale:"XS"},o||""),r.createElement(d.Z,{className:E((function(e){return{transition:"".concat(m,"ms transform"),transform:w?"rotate(180deg)":"rotate(0)",fill:v||e.baseColor.fill.normal}}))}))),r.createElement("div",{className:E({transition:"".concat(m,"ms height"),height:N,overflow:!w||I?"hidden":"visible",opacity:w?1:0})},r.createElement("div",{ref:k,className:E({opacity:w?1:0,transition:"".concat(m,"ms opacity"),display:"flex",justifyContent:"space-between",flexDirection:"column",flexFlow:"wrap"})},n)))}},49544:(e,t,n)=>{"use strict";n.d(t,{_U:()=>R,Dk:()=>F});var o=n(28655),i=n.n(o),r=n(59713),a=n.n(r),l=n(63038),c=n.n(l),s=n(46829),d=n(71439),u=n(67294),m=n(52818),p=n(68745),f=n(76532),v=n(42933),h=n(3149),g=n(17614),E=n(95760),x=n(51512),b=n(6688),w=n(11348),S=n(6522);function y(){var e=i()(["\n  query ReadNextQuery($postId: ID!) {\n    post(id: $postId) {\n      id\n      readNext {\n        ... on ReadNextItem {\n          reason\n          post {\n            ... on Post {\n              ...ReadNextPostCard_post\n            }\n          }\n        }\n      }\n    }\n  }\n  ","\n"]);return y=function(){return e},e}function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var I={display:"none"},P={":last-of-type":{xs:I,sm:I,md:I,lg:I,xl:{display:"block"}}},R=function(e){var t=e.isVisible,n=void 0===t||t,o=e.postId,i=u.useState(!1),r=c()(i,2),a=r[0],l=r[1],d=(0,f.H)().value,p=(0,s.useLazyQuery)(C),S=c()(p,2),y=S[0],k=S[1],I=k.called,R=k.loading,_=k.error,T=k.data,D=(T=void 0===T?{post:void 0}:T).post,B=d&&F(d)&&!((0,w.yd)()||a),L=(0,E.Av)(),O=(0,b.I)(),A=(0,x.Lk)(),H=D&&D.readNext;return u.useEffect((function(){R||!_||H&&H.length||L.event("readNextError",{post:D,postId:o,error:_,readNextLength:H&&H.length||0})}),[R]),u.useEffect((function(){n&&H&&(L.event("readNext.viewed",{position:"sidebar"}),H.slice(0,4).map((function(e,t){var n=e.post,o=e.reason;return L.event("post.clientPresented",{source:(0,x.f0)(N(N({},A),{},{index:t,postFeedReason:o||void 0})),location:"post/".concat(n&&n.id)}),!0})))}),[n,H]),!I&&B&&y({variables:{postId:o||""}}),I&&!R&&!_&&D&&H&&H.length&&B?u.createElement(x.cW,{source:{name:"read_next",sectionType:x.bA.READ_NEXT_SIDEBAR},extendSource:!0},u.createElement(v.x,{width:"188px"},u.createElement(v.x,{md:{display:"none"},lg:{width:"780px",margin:"0 24px"},position:"relative",backgroundColor:"BACKGROUND",paddingBottom:"24px",paddingTop:"24px",width:"100%"},u.createElement(v.x,{position:"absolute",right:"0",top:"-4px"},u.createElement(h.P,{onClick:function(){(0,w.Ph)(),l(!0)},size:"SMALL",isPositionAbsolute:!1})),u.createElement(v.x,{width:"200px"},u.createElement(g.F1,{scale:"XS"},"Your journey starts here.")),u.createElement(v.x,{display:"flex",flexDirection:"column",justifyContent:"space-between"},D.readNext.slice(0,4).map((function(e,t){var n=e.post;return n?u.createElement("div",{className:O(P),key:t},u.createElement(m.N,{key:t,post:n})):null})))))):null};function F(e){return e&&e.createdAt+S.pU>Date.now()}var C=(0,d.Ps)(y(),p.Q)},68745:(e,t,n)=>{"use strict";n.d(t,{Q:()=>a});var o=n(319),i=n.n(o),r=n(88833),a={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"ReadNextPostCard_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"title"}},{kind:"Field",name:{kind:"Name",value:"mediumUrl"}},{kind:"Field",name:{kind:"Name",value:"previewContent"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"subtitle"}}]}},{kind:"Field",name:{kind:"Name",value:"primaryTopic"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"slug"}}]}},{kind:"Field",name:{kind:"Name",value:"collection"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}}]}},{kind:"Field",name:{kind:"Name",value:"previewImage"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"alt"}},{kind:"Field",name:{kind:"Name",value:"focusPercentX"}},{kind:"Field",name:{kind:"Name",value:"focusPercentY"}}]}},{kind:"Field",name:{kind:"Name",value:"clapCount"}},{kind:"FragmentSpread",name:{kind:"Name",value:"usePostUrl_post"}}]}}].concat(i()(r.u.definitions))}},52818:(e,t,n)=>{"use strict";n.d(t,{N:()=>p});var o=n(67294),i=n(34488),r=n(27721),a=n(98462),l=n(42933),c=n(98024),s=n(86021),d=n(6688),u=n(67297),m=n(90038),p=function(e){var t,n=e.post,p=e.shouldDisplayTopic,f=void 0===p||p,v=e.withFixedWidth,h=void 0===v||v,g=(0,u.v9)((function(e){return e.config.mediumOwnedAndOperatedCollectionIds})),E=n&&n.previewImage||{},x=E.focusPercentX,b=E.focusPercentY,w=E.id,S=E.alt,y=n.collection||{},k=y.name,N=y.id,I=n.primaryTopic&&n.primaryTopic.name,P=N&&(g.includes(N)?k:I)||"",R=n&&n.title||"",F=(null==n||null===(t=n.previewContent)||void 0===t?void 0:t.subtitle)||"",C=(0,i.L)(n),_=w?"170px":"".concat(228,"px"),T=(0,d.I)();return o.createElement(a.P,{href:C},o.createElement(l.x,{display:"flex",flexDirection:"column",justifyContent:"center",marginBottom:"20px"},f?o.createElement(l.x,{marginBottom:"4px"},o.createElement(s.Lh,{tag:"span"},o.createElement(c.F,{scale:"S",color:"DARKER"},o.createElement("div",{className:T({whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"})},P)))):null,o.createElement(l.x,{display:"flex",flexDirection:"row"},w&&o.createElement(r.UV,{miroId:w||"",alt:S||"",height:58,width:58,freezeGifs:!0,strategy:m._S.Crop,rules:{marginRight:"8px",marginTop:"4px"},focusPercentX:x||50,focusPercentY:b||50}),o.createElement(l.x,{display:"flex",flexDirection:"column"},R&&o.createElement(c.F,{scale:"S",color:"DARKER",clamp:3,tag:"div"},o.createElement("div",{className:h?T({width:_}):void 0},R)),F&&(null==R?void 0:R.length)<45&&o.createElement(c.F,{scale:"S",color:"LIGHTER",clamp:1,tag:"div"},o.createElement("div",{className:h?T({width:_}):void 0},F))))))}},83021:(e,t,n)=>{"use strict";n.d(t,{T6:()=>o,JS:()=>i,Ui:()=>r});var o=function(e,t){return function(){var n=new IntersectionObserver((function(n){var o=e.get("ghost-track");if(o){var i=n.find((function(e){return e.target===o.ref.current}));i&&t(i.isIntersecting)}else t(!1)}));return e.forEach((function(e){e.ref.current&&n.observe(e.ref.current)})),function(){n.disconnect()}}},i=function(e){return{maxHeight:"".concat(e,"px"),overflowY:"scroll",scrollbarWidth:"none","-ms-overflow-style":"none","::-webkit-scrollbar":{display:"none"}}},r=function(e,t,n){var o;if(n&&null!==(o=window)&&void 0!==o&&o.innerHeight&&t){var i=window.innerHeight-t-80;if(e&&n<=i)return 0;if(i<=n)return Math.max(i,150)}return e}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/62182.016e5c0a.chunk.js.map