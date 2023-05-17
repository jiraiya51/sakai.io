import{_ as x,u as b,r,H as v,b as n,c as h,d as w,e,I as y,f as o,F as k,K as V,p as I,n as S}from"./index-9dd5594f.js";const B="/demo/images/login/avatar.png";const l=a=>(I("data-v-aca45d58"),a=a(),S(),a),C={class:"surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden"},L={class:"flex flex-column align-items-center justify-content-center"},P=["src"],U={style:{"border-radius":"56px",padding:"0.3rem",background:"linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)"}},j={class:"w-full surface-card py-8 px-5 sm:px-8",style:{"border-radius":"53px"}},E=l(()=>e("div",{class:"text-center mb-5"},[e("img",{src:B,alt:"Image",height:"50",class:"mb-3"}),e("div",{class:"text-900 text-3xl font-medium mb-3"},"Welcome, Isabel!"),e("span",{class:"text-600 font-medium"},"Sign in to continue")],-1)),F=l(()=>e("label",{for:"email1",class:"block text-900 text-xl font-medium mb-2"},"Email",-1)),T=l(()=>e("label",{for:"password1",class:"block text-900 font-medium text-xl mb-2"},"Password",-1)),N={class:"flex align-items-center justify-content-between mb-5 gap-5"},$={class:"flex align-items-center"},H=l(()=>e("label",{for:"rememberme1"},"Remember me",-1)),K=l(()=>e("a",{class:"font-medium no-underline ml-2 text-right cursor-pointer",style:{color:"var(--primary-color)"}},"Forgot password?",-1)),M={__name:"Login",setup(a){const{layoutConfig:m}=b(),d=r(""),c=r(""),i=r(!1),u=v(()=>`layout/images/${m.darkTheme.value?"logo-white":"logo-dark"}.svg`);return(R,s)=>{const p=n("InputText"),_=n("Password"),g=n("Checkbox"),f=n("Button");return h(),w(k,null,[e("div",C,[e("div",L,[e("img",{src:y(u),alt:"Sakai logo",class:"mb-5 w-6rem flex-shrink-0"},null,8,P),e("div",U,[e("div",j,[E,e("div",null,[F,o(p,{id:"email1",type:"text",placeholder:"Email address",class:"w-full md:w-30rem mb-5",style:{padding:"1rem"},modelValue:d.value,"onUpdate:modelValue":s[0]||(s[0]=t=>d.value=t)},null,8,["modelValue"]),T,o(_,{id:"password1",modelValue:c.value,"onUpdate:modelValue":s[1]||(s[1]=t=>c.value=t),placeholder:"Password",toggleMask:!0,class:"w-full mb-3",inputClass:"w-full",inputStyle:"padding:1rem"},null,8,["modelValue"]),e("div",N,[e("div",$,[o(g,{modelValue:i.value,"onUpdate:modelValue":s[2]||(s[2]=t=>i.value=t),id:"rememberme1",binary:"",class:"mr-2"},null,8,["modelValue"]),H]),K]),o(f,{label:"Sign In",class:"w-full p-3 text-xl"})])])])])]),o(V,{simple:""})],64)}}},q=x(M,[["__scopeId","data-v-aca45d58"]]);export{q as default};
