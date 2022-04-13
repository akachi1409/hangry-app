(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[48],{1613:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(2),i=n(29),c=n(150),s=n.n(c),r=n(149),o=n(378),l=n(1504),d=n(48),j=n(1627),b=n(0),u=["links","activeLast"];function x(e){var t=e.links,n=e.activeLast,c=void 0!==n&&n,s=Object(i.a)(e,u),l=t[t.length-1].name,d=t.map((function(e){return Object(b.jsx)(h,{link:e},e.name)})),x=t.map((function(e){return Object(b.jsx)("div",{children:e.name!==l?Object(b.jsx)(h,{link:e}):Object(b.jsx)(o.a,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:l})},e.name)}));return Object(b.jsx)(j.a,Object(a.a)(Object(a.a)({separator:Object(b.jsx)(r.a,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},s),{},{children:c?d:x}))}function h(e){var t=e.link,n=t.href,a=t.name,i=t.icon;return Object(b.jsxs)(l.a,{variant:"body2",component:d.b,to:n||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[i&&Object(b.jsx)(r.a,{sx:{mr:1,"& svg":{width:20,height:20}},children:i}),a]},a)}var m=["links","action","heading","moreLink","sx"];function p(e){var t=e.links,n=e.action,c=e.heading,d=e.moreLink,j=void 0===d?[]:d,u=e.sx,h=Object(i.a)(e,m);return Object(b.jsxs)(r.a,{sx:Object(a.a)({mb:5},u),children:[Object(b.jsxs)(r.a,{sx:{display:"flex",alignItems:"center"},children:[Object(b.jsxs)(r.a,{sx:{flexGrow:1},children:[Object(b.jsx)(o.a,{variant:"h4",gutterBottom:!0,children:c}),Object(b.jsx)(x,Object(a.a)({links:t},h))]}),n&&Object(b.jsx)(r.a,{sx:{flexShrink:0},children:n})]}),Object(b.jsx)(r.a,{sx:{mt:2},children:s()(j)?Object(b.jsx)(l.a,{href:j,target:"_blank",rel:"noopener",variant:"body2",children:j}):j.map((function(e){return Object(b.jsx)(l.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}},2251:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return ce}));var a=n(15),i=n(1571),c=n(1),s=n(1591),r=n(2185),o=n(2189),l=n(149),d=n(36),j=n(75),b=n(241),u=n(499),x=n(31),h=n(1613),m=n(1586),p=n(1489),O=n(1606),v=n(378),f=n(1507),g=n(778),w=n(0);function y(e){var t=e.addressBook;return Object(w.jsx)(O.a,{sx:{p:3},children:Object(w.jsxs)(p.a,{spacing:3,alignItems:"flex-start",children:[Object(w.jsx)(v.a,{variant:"overline",sx:{color:"text.secondary"},children:"Billing Info"}),t.map((function(e){return Object(w.jsxs)(g.a,{sx:{p:3,width:1,bgcolor:"background.neutral"},children:[Object(w.jsx)(v.a,{variant:"subtitle1",gutterBottom:!0,children:e.name}),Object(w.jsxs)(v.a,{variant:"body2",gutterBottom:!0,children:[Object(w.jsx)(v.a,{variant:"body2",component:"span",sx:{color:"text.secondary"},children:"Address: \xa0"}),"".concat(e.street,", ").concat(e.city,", ").concat(e.state,", ").concat(e.country," ").concat(e.zipCode)]}),Object(w.jsxs)(v.a,{variant:"body2",gutterBottom:!0,children:[Object(w.jsx)(v.a,{variant:"body2",component:"span",sx:{color:"text.secondary"},children:"Phone: \xa0"}),e.phone]}),Object(w.jsxs)(l.a,{sx:{mt:1},children:[Object(w.jsx)(f.a,{color:"error",size:"small",startIcon:Object(w.jsx)(x.a,{icon:"eva:trash-2-outline"}),onClick:function(){},sx:{mr:1},children:"Delete"}),Object(w.jsx)(f.a,{size:"small",startIcon:Object(w.jsx)(x.a,{icon:"eva:edit-fill"}),onClick:function(){},children:"Edit"})]})]},e.id)})),Object(w.jsx)(f.a,{size:"small",startIcon:Object(w.jsx)(x.a,{icon:"eva:plus-fill"}),children:"Add new address"})]})})}var k=n(1506),P=n(1510),S=n(1578),C=n(1584),L=n(106);function N(e){var t=e.cards,n=e.isOpen,a=e.onOpen,i=e.onCancel;return Object(w.jsxs)(O.a,{sx:{p:3},children:[Object(w.jsx)(v.a,{variant:"overline",sx:{mb:3,display:"block",color:"text.secondary"},children:"Payment Method"}),Object(w.jsx)(p.a,{spacing:2,direction:{xs:"column",md:"row"},children:t.map((function(e){return Object(w.jsxs)(g.a,{sx:{p:3,width:1,position:"relative",border:function(e){return"solid 1px ".concat(e.palette.grey[50032])}},children:[Object(w.jsx)(L.a,{alt:"icon",src:"master_card"===e.cardType?"https://minimal-assets-api.vercel.app/assets/icons/ic_mastercard.svg":"https://minimal-assets-api.vercel.app/assets/icons/ic_visa.svg",sx:{mb:1,maxWidth:36}}),Object(w.jsx)(v.a,{variant:"subtitle2",children:e.cardNumber}),Object(w.jsx)(k.a,{sx:{top:8,right:8,position:"absolute"},children:Object(w.jsx)(x.a,{icon:"eva:more-vertical-fill",width:20,height:20})})]},e.id)}))}),Object(w.jsx)(l.a,{sx:{mt:3},children:Object(w.jsx)(f.a,{size:"small",startIcon:Object(w.jsx)(x.a,{icon:"eva:plus-fill"}),onClick:a,children:"Add new card"})}),Object(w.jsx)(P.a,{in:n,children:Object(w.jsx)(l.a,{sx:{padding:3,marginTop:3,borderRadius:1,bgcolor:"background.neutral"},children:Object(w.jsxs)(p.a,{spacing:3,children:[Object(w.jsx)(v.a,{variant:"subtitle1",children:"Add new card"}),Object(w.jsxs)(p.a,{direction:{xs:"column",sm:"row"},spacing:2,children:[Object(w.jsx)(S.a,{fullWidth:!0,label:"Name on card"}),Object(w.jsx)(S.a,{fullWidth:!0,label:"Card number"})]}),Object(w.jsxs)(p.a,{direction:{xs:"column",sm:"row"},spacing:2,children:[Object(w.jsx)(S.a,{fullWidth:!0,label:"Expiration date",placeholder:"MM/YY"}),Object(w.jsx)(S.a,{fullWidth:!0,label:"Cvv"})]}),Object(w.jsxs)(p.a,{direction:"row",justifyContent:"flex-end",spacing:1.5,children:[Object(w.jsx)(f.a,{color:"inherit",variant:"outlined",onClick:i,children:"Cancel"}),Object(w.jsx)(C.a,{type:"submit",variant:"contained",onClick:i,children:"Save Change"})]})]})})})]})}var A=n(48),I=n(1504),B=n(285),z=n(284);function U(e){var t=e.invoices;return Object(w.jsxs)(p.a,{spacing:3,alignItems:"flex-end",children:[Object(w.jsx)(v.a,{variant:"subtitle1",sx:{width:1},children:"Invoice History"}),Object(w.jsx)(p.a,{spacing:2,sx:{width:1},children:t.map((function(e){return Object(w.jsxs)(p.a,{direction:"row",justifyContent:"space-between",sx:{width:1},children:[Object(w.jsx)(v.a,{variant:"body2",sx:{minWidth:160},children:Object(B.a)(e.createdAt)}),Object(w.jsx)(v.a,{variant:"body2",children:Object(z.a)(e.price)}),Object(w.jsx)(I.a,{component:A.b,to:"#",children:"PDF"})]},e.id)}))}),Object(w.jsx)(f.a,{size:"small",endIcon:Object(w.jsx)(x.a,{icon:"eva:arrow-ios-forward-fill"}),children:"All invoices"})]})}function W(e){var t=e.cards,n=e.addressBook,i=e.invoices,s=Object(c.useState)(!1),r=Object(a.a)(s,2),o=r[0],d=r[1];return Object(w.jsxs)(m.a,{container:!0,spacing:5,children:[Object(w.jsx)(m.a,{item:!0,xs:12,md:8,children:Object(w.jsxs)(p.a,{spacing:3,children:[Object(w.jsxs)(O.a,{sx:{p:3},children:[Object(w.jsx)(v.a,{variant:"overline",sx:{mb:3,display:"block",color:"text.secondary"},children:"Your Plan"}),Object(w.jsx)(v.a,{variant:"h4",children:"Premium"}),Object(w.jsxs)(l.a,{sx:{mt:{xs:2,sm:0},position:{sm:"absolute"},top:{sm:24},right:{sm:24}},children:[Object(w.jsx)(f.a,{size:"small",color:"inherit",variant:"outlined",sx:{mr:1},children:"Cancel plan"}),Object(w.jsx)(f.a,{size:"small",variant:"outlined",children:"Upgrade plan"})]})]}),Object(w.jsx)(N,{cards:t,isOpen:o,onOpen:function(){return d(!o)},onCancel:function(){return d(!1)}}),Object(w.jsx)(y,{addressBook:n})]})}),Object(w.jsx)(m.a,{item:!0,xs:12,md:4,children:Object(w.jsx)(U,{invoices:i})})]})}var q=n(18),R=n(4),T=n.n(R),_=n(286),E=n(287),V=n(504),D=n(50),M=n(243);function F(){var e=Object(E.b)().enqueueSnackbar,t=_.d().shape({oldPassword:_.f().required("Old Password is required"),newPassword:_.f().min(6,"Password must be at least 6 characters").required("New Password is required"),confirmNewPassword:_.f().oneOf([_.e("newPassword"),null],"Passwords must match")}),n=Object(D.f)({resolver:Object(V.a)(t),defaultValues:{oldPassword:"",newPassword:"",confirmNewPassword:""}}),a=n.reset,i=n.handleSubmit,c=n.formState.isSubmitting,s=function(){var t=Object(q.a)(T.a.mark((function t(){return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,new Promise((function(e){return setTimeout(e,500)}));case 3:a(),e("Update success!"),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return Object(w.jsx)(O.a,{sx:{p:3},children:Object(w.jsx)(M.a,{methods:n,onSubmit:i(s),children:Object(w.jsxs)(p.a,{spacing:3,alignItems:"flex-end",children:[Object(w.jsx)(M.h,{name:"oldPassword",type:"password",label:"Old Password"}),Object(w.jsx)(M.h,{name:"newPassword",type:"password",label:"New Password"}),Object(w.jsx)(M.h,{name:"confirmNewPassword",type:"password",label:"Confirm New Password"}),Object(w.jsx)(C.a,{type:"submit",variant:"contained",loading:c,children:"Save Changes"})]})})})}var G=n(86);function Y(){var e=Object(E.b)().enqueueSnackbar,t=Object(G.a)().user,n=_.d().shape({displayName:_.f().required("Name is required")}),a={displayName:(null===t||void 0===t?void 0:t.displayName)||"",email:(null===t||void 0===t?void 0:t.email)||"",photoURL:(null===t||void 0===t?void 0:t.photoURL)||"",phoneNumber:(null===t||void 0===t?void 0:t.phoneNumber)||"",country:(null===t||void 0===t?void 0:t.country)||"",address:(null===t||void 0===t?void 0:t.address)||"",state:(null===t||void 0===t?void 0:t.state)||"",city:(null===t||void 0===t?void 0:t.city)||"",zipCode:(null===t||void 0===t?void 0:t.zipCode)||"",about:(null===t||void 0===t?void 0:t.about)||"",isPublic:(null===t||void 0===t?void 0:t.isPublic)||""},i=Object(D.f)({resolver:Object(V.a)(n),defaultValues:a}),s=i.setValue,r=i.handleSubmit,o=i.formState.isSubmitting,d=function(){var t=Object(q.a)(T.a.mark((function t(){return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,new Promise((function(e){return setTimeout(e,500)}));case 3:e("Update success!"),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.error(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(){return t.apply(this,arguments)}}(),j=Object(c.useCallback)((function(e){var t=e[0];t&&s("photoURL",Object.assign(t,{preview:URL.createObjectURL(t)}))}),[s]);return Object(w.jsx)(M.a,{methods:i,onSubmit:r(d),children:Object(w.jsxs)(m.a,{container:!0,spacing:3,children:[Object(w.jsx)(m.a,{item:!0,xs:12,md:4,children:Object(w.jsxs)(O.a,{sx:{py:10,px:3,textAlign:"center"},children:[Object(w.jsx)(M.i,{name:"photoURL",accept:"image/*",maxSize:3145728,onDrop:j,helperText:Object(w.jsxs)(v.a,{variant:"caption",sx:{mt:2,mx:"auto",display:"block",textAlign:"center",color:"text.secondary"},children:["Allowed *.jpeg, *.jpg, *.png, *.gif",Object(w.jsx)("br",{})," max size of ",Object(z.b)(3145728)]})}),Object(w.jsx)(M.g,{name:"isPublic",labelPlacement:"start",label:"Public Profile",sx:{mt:5}})]})}),Object(w.jsx)(m.a,{item:!0,xs:12,md:8,children:Object(w.jsxs)(O.a,{sx:{p:3},children:[Object(w.jsxs)(l.a,{sx:{display:"grid",rowGap:3,columnGap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"}},children:[Object(w.jsx)(M.h,{name:"displayName",label:"Name"}),Object(w.jsx)(M.h,{name:"email",label:"Email Address"}),Object(w.jsx)(M.h,{name:"phoneNumber",label:"Phone Number"}),Object(w.jsx)(M.h,{name:"address",label:"Address"}),Object(w.jsxs)(M.f,{name:"country",label:"Country",placeholder:"Country",children:[Object(w.jsx)("option",{value:""}),b.L.map((function(e){return Object(w.jsx)("option",{value:e.label,children:e.label},e.code)}))]}),Object(w.jsx)(M.h,{name:"state",label:"State/Region"}),Object(w.jsx)(M.h,{name:"city",label:"City"}),Object(w.jsx)(M.h,{name:"zipCode",label:"Zip/Code"})]}),Object(w.jsxs)(p.a,{spacing:3,alignItems:"flex-end",sx:{mt:3},children:[Object(w.jsx)(M.h,{name:"about",multiline:!0,rows:4,label:"About"}),Object(w.jsx)(C.a,{type:"submit",variant:"contained",loading:o,children:"Save Changes"})]})]})})]})})}var H=[{value:"activityComments",label:"Email me when someone comments onmy article"},{value:"activityAnswers",label:"Email me when someone answers on my form"},{value:"activityFollows",label:"Email me hen someone follows me"}],J=[{value:"applicationNews",label:"News and announcements"},{value:"applicationProduct",label:"Weekly product updates"},{value:"applicationBlog",label:"Weekly blog digest"}],K=!0,Z=!0,Q=!1,X=!0,$=!1,ee=!1;function te(){var e=Object(E.b)().enqueueSnackbar,t={activityComments:K,activityAnswers:Z,activityFollows:Q,applicationNews:X,applicationProduct:$,applicationBlog:ee},n=Object(D.f)({defaultValues:t}),a=n.handleSubmit,i=n.formState.isSubmitting,c=function(){var t=Object(q.a)(T.a.mark((function t(){return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,new Promise((function(e){return setTimeout(e,500)}));case 3:e("Update success!"),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.error(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(){return t.apply(this,arguments)}}();return Object(w.jsx)(O.a,{sx:{p:3},children:Object(w.jsx)(M.a,{methods:n,onSubmit:a(c),children:Object(w.jsxs)(p.a,{spacing:3,alignItems:"flex-end",children:[Object(w.jsxs)(p.a,{spacing:2,sx:{width:1},children:[Object(w.jsx)(v.a,{variant:"overline",sx:{color:"text.secondary"},children:"Activity"}),Object(w.jsx)(p.a,{spacing:1,children:H.map((function(e){return Object(w.jsx)(M.g,{name:e.value,label:e.label,sx:{m:0}},e.value)}))})]}),Object(w.jsxs)(p.a,{spacing:2,sx:{width:1},children:[Object(w.jsx)(v.a,{variant:"overline",sx:{color:"text.secondary"},children:"Application"}),Object(w.jsx)(p.a,{spacing:1,children:J.map((function(e){return Object(w.jsx)(M.g,{name:e.value,label:e.label,sx:{m:0}},e.value)}))})]}),Object(w.jsx)(C.a,{type:"submit",variant:"contained",loading:i,children:"Save Changes"})]})})})}var ne=n(1599),ae=[{value:"facebookLink",icon:Object(w.jsx)(x.a,{icon:"eva:facebook-fill",width:24,height:24})},{value:"instagramLink",icon:Object(w.jsx)(x.a,{icon:"ant-design:instagram-filled",width:24,height:24})},{value:"linkedinLink",icon:Object(w.jsx)(x.a,{icon:"eva:linkedin-fill",width:24,height:24})},{value:"twitterLink",icon:Object(w.jsx)(x.a,{icon:"eva:twitter-fill",width:24,height:24})}];function ie(e){var t=e.myProfile,n=Object(E.b)().enqueueSnackbar,a={facebookLink:t.facebookLink,instagramLink:t.instagramLink,linkedinLink:t.linkedinLink,twitterLink:t.twitterLink},i=Object(D.f)({defaultValues:a}),c=i.handleSubmit,s=i.formState.isSubmitting,r=function(){var e=Object(q.a)(T.a.mark((function e(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise((function(e){return setTimeout(e,500)}));case 3:n("Update success!"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(w.jsx)(O.a,{sx:{p:3},children:Object(w.jsx)(M.a,{methods:i,onSubmit:c(r),children:Object(w.jsxs)(p.a,{spacing:3,alignItems:"flex-end",children:[ae.map((function(e){return Object(w.jsx)(M.h,{name:e.value,InputProps:{startAdornment:Object(w.jsx)(ne.a,{position:"start",children:e.icon})}},e.value)})),Object(w.jsx)(C.a,{type:"submit",variant:"contained",loading:s,children:"Save Changes"})]})})})}function ce(){var e=Object(j.a)().themeStretch,t=Object(c.useState)("general"),n=Object(a.a)(t,2),m=n[0],p=n[1],O=[{value:"general",icon:Object(w.jsx)(x.a,{icon:"ic:round-account-box",width:20,height:20}),component:Object(w.jsx)(Y,{})},{value:"billing",icon:Object(w.jsx)(x.a,{icon:"ic:round-receipt",width:20,height:20}),component:Object(w.jsx)(W,{cards:b.K,addressBook:b.C,invoices:b.I})},{value:"notifications",icon:Object(w.jsx)(x.a,{icon:"eva:bell-fill",width:20,height:20}),component:Object(w.jsx)(te,{})},{value:"social_links",icon:Object(w.jsx)(x.a,{icon:"eva:share-fill",width:20,height:20}),component:Object(w.jsx)(ie,{myProfile:b.B})},{value:"change_password",icon:Object(w.jsx)(x.a,{icon:"ic:round-vpn-key",width:20,height:20}),component:Object(w.jsx)(F,{})}];return Object(w.jsx)(u.a,{title:"User: Account Settings",children:Object(w.jsxs)(s.a,{maxWidth:!e&&"lg",children:[Object(w.jsx)(h.a,{heading:"Account",links:[{name:"Dashboard",href:d.b.root},{name:"User",href:d.b.user.root},{name:"Account Settings"}]}),Object(w.jsx)(r.a,{value:m,scrollButtons:"auto",variant:"scrollable",allowScrollButtonsMobile:!0,onChange:function(e,t){return p(t)},children:O.map((function(e){return Object(w.jsx)(o.a,{disableRipple:!0,label:Object(i.a)(e.value),icon:e.icon,value:e.value},e.value)}))}),Object(w.jsx)(l.a,{sx:{mb:5}}),O.map((function(e){return e.value===m&&Object(w.jsx)(l.a,{children:e.component},e.value)}))]})})}}}]);
//# sourceMappingURL=48.2af23f5d.chunk.js.map