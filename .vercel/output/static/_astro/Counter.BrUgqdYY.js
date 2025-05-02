import{r as p}from"./index.BVOCwoKb.js";var d={exports:{}},t={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x;function R(){if(x)return t;x=1;var o=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function a(c,r,e){var s=null;if(e!==void 0&&(s=""+e),r.key!==void 0&&(s=""+r.key),"key"in r){e={};for(var u in r)u!=="key"&&(e[u]=r[u])}else e=r;return r=e.ref,{$$typeof:o,type:c,key:s,ref:r!==void 0?r:null,props:e}}return t.Fragment=i,t.jsx=a,t.jsxs=a,t}var l;function f(){return l||(l=1,d.exports=R()),d.exports}var n=f();function k(){const[o,i]=p.useState(0);return n.jsxs("div",{style:{border:"1px solid #e0e0e0",borderRadius:"10px",padding:"1rem",maxWidth:"200px",textAlign:"center",background:"#fff",boxShadow:"0 0 10px rgba(0,0,0,0.07)"},children:[n.jsx("h1",{children:"Likes"}),n.jsx("p",{style:{fontSize:"2rem",margin:"0.5rem 0"},children:o}),n.jsx("button",{onClick:()=>i(o+1),style:{marginRight:"0.5rem",padding:"0.5rem 1rem",borderRadius:"4px",border:"none",background:"#27ae60",color:"#fff",cursor:"pointer"},children:"+1"}),n.jsx("button",{onClick:()=>i(0),style:{padding:"0.5rem 1rem",borderRadius:"4px",border:"none",background:"#e74c3c",color:"#fff",cursor:"pointer"},children:"Reset"})]})}export{k as default};
