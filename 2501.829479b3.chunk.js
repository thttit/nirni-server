"use strict";(self.webpackChunkserver=self.webpackChunkserver||[]).push([[2501],{84409:(D,d,e)=>{e.d(d,{p:()=>o});var t=e(27279),u=e(87006),E=e(40464);const o=(l={})=>{const{get:r}=(0,u.kY)(),{data:c,isLoading:a}=(0,E.useQuery)(["ee","providers"],async()=>{const{data:P}=await r("/admin/providers");return P},l);return{providers:t.useMemo(()=>c??[],[c]),isLoading:a}}},80090:(D,d,e)=>{e.d(d,{Z:()=>M});var t=e(27279),u=e(10701),E=e(2981),o=e(32370),l=e(23298),r=e(74577),c=e(70627),a=e.n(c),h=e(61020),P=e(47533),g=e(72450);const p=g.ZP.a`
  width: ${136/16}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${48/16}rem;
  border: 1px solid ${({theme:n})=>n.colors.neutral150};
  border-radius: ${({theme:n})=>n.borderRadius};
  text-decoration: inherit;
  &:link {
    text-decoration: none;
  }
  color: ${({theme:n})=>n.colors.neutral600};
`,O=(0,g.ZP)(u.k)`
  & a:not(:first-child):not(:last-child) {
    margin: 0 ${({theme:n})=>n.spaces[2]};
  }
  & a:first-child {
    margin-right: ${({theme:n})=>n.spaces[2]};
  }
  & a:last-child {
    margin-left: ${({theme:n})=>n.spaces[2]};
  }
`,i=({provider:n})=>t.createElement(E.u,{label:n.displayName},t.createElement(p,{href:`${window.strapi.backendURL}/admin/connect/${n.uid}`},n.icon?t.createElement("img",{src:n.icon,"aria-hidden":!0,alt:"",height:"32px"}):t.createElement(o.Z,null,n.displayName)));i.propTypes={provider:a().shape({icon:a().string,displayName:a().string.isRequired,uid:a().string.isRequired}).isRequired};const v=({providers:n,displayAllProviders:f})=>{const{formatMessage:y}=(0,h.Z)();return f?t.createElement(l.r,{gap:4},n.map(s=>t.createElement(r.P,{key:s.uid,col:4},t.createElement(i,{provider:s})))):n.length>2&&!f?t.createElement(l.r,{gap:4},n.slice(0,2).map(s=>t.createElement(r.P,{key:s.uid,col:4},t.createElement(i,{provider:s}))),t.createElement(r.P,{col:4},t.createElement(E.u,{label:y({id:"global.see-more"})},t.createElement(p,{as:P.rU,to:"/auth/providers"},t.createElement("span",{"aria-hidden":!0},"\u2022\u2022\u2022"))))):t.createElement(O,{justifyContent:"center"},n.map(s=>t.createElement(i,{key:s.uid,provider:s})))};v.defaultProps={displayAllProviders:!0},v.propTypes={providers:a().arrayOf(a().object).isRequired,displayAllProviders:a().bool};const M=v},52501:(D,d,e)=>{e.r(d),e.d(d,{FORMS:()=>s});var t=e(27279),u=e(84366),E=e(73354),o=e(93415),l=e(32370),r=e(10701),c=e(77970),a=e(48102),h=e(87006),P=e(61020),g=e(51447),p=e(72450),O=e(43847),i=e(13320),v=e(84409),M=e(80090);const n=(0,p.ZP)(u.i)`
  flex: 1;
`,s={providers:{Component:()=>{const{push:R}=(0,g.k6)(),{formatMessage:m}=(0,P.Z)(),{isLoading:C,providers:A}=(0,v.p)({enabled:window.strapi.features.isEnabled(window.strapi.features.SSO)}),T=()=>{R("/auth/login")};return!window.strapi.features.isEnabled(window.strapi.features.SSO)||!C&&A.length===0?t.createElement(g.l_,{to:"/auth/login"}):t.createElement(i.Md,null,t.createElement(E.o,null,t.createElement(i.bU,null,t.createElement(i.sg,null,t.createElement(O.T,null),t.createElement(o.x,{paddingTop:6,paddingBottom:1},t.createElement(l.Z,{as:"h1",variant:"alpha"},m({id:"Auth.form.welcome.title"}))),t.createElement(o.x,{paddingBottom:7},t.createElement(l.Z,{variant:"epsilon",textColor:"neutral600"},m({id:"Auth.login.sso.subtitle"})))),t.createElement(r.k,{direction:"column",alignItems:"stretch",gap:7},C?t.createElement(r.k,{justifyContent:"center"},t.createElement(c.a,null,m({id:"Auth.login.sso.loading"}))):t.createElement(M.Z,{providers:A}),t.createElement(r.k,null,t.createElement(n,null),t.createElement(o.x,{paddingLeft:3,paddingRight:3},t.createElement(l.Z,{variant:"sigma",textColor:"neutral600"},m({id:"or"}))),t.createElement(n,null)),t.createElement(a.z,{fullWidth:!0,size:"L",onClick:T},m({id:"Auth.form.button.login.strapi"})))),t.createElement(r.k,{justifyContent:"center"},t.createElement(o.x,{paddingTop:4},t.createElement(h.rU,{to:"/auth/forgot-password"},t.createElement(l.Z,{variant:"pi"},m({id:"Auth.link.forgot-password"})))))))},endPoint:null,fieldsToDisable:[],fieldsToOmit:[],schema:null,inputsPrefix:""}}}}]);
