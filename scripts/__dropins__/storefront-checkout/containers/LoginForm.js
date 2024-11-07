import{jsx as o,jsxs as c,Fragment as B}from"@dropins/tools/preact-jsx-runtime.js";import"@dropins/tools/event-bus.js";import{q,p as w,k as z}from"../chunks/fixtures.js";import{i as V,s as $}from"../chunks/setGuestEmailOnCart.js";import{H as j,p as G}from"../chunks/ShippingMethods.js";import{useState as F,useEffect as O}from"@dropins/tools/preact-hooks.js";import{classes as C}from"@dropins/tools/lib.js";import{Field as P,Input as R}from"@dropins/tools/components.js";/* empty css                              */import{useText as N,Text as L}from"@dropins/tools/i18n.js";/* empty css                   */import{w as U}from"../chunks/withConditionalRendering.js";import"@dropins/tools/signals.js";import"@dropins/tools/fetch-graphql.js";import"../chunks/getCart.graphql.js";import"../chunks/transform-shipping-methods.js";import"../chunks/getMultilineValues.js";import"@dropins/tools/preact-compat.js";const D=({value:e,error:l,hint:t,onChange:u,onBlur:d,onInvalid:s})=>{const i=N({LoginFormLabel:"Checkout.LoginForm.ariaLabel",LoginFormFloatingLabel:"Checkout.LoginForm.floatingLabel",LoginFormPlaceholder:"Checkout.LoginForm.placeholder"});return o(P,{size:"medium",error:l,hint:t,children:o(R,{id:"customer-email",name:"customer-email",type:"email",value:e,autocomplete:"email",placeholder:i.LoginFormPlaceholder,floatingLabel:i.LoginFormFloatingLabel,onChange:u,onBlur:d,onInvalid:s,required:!0,"aria-label":i.LoginFormLabel,"aria-required":!0})})},J=({onSignInClick:e,email:l})=>c("div",{className:"checkout-login-form__sign-in",children:[o(L,{id:"Checkout.LoginForm.account"}),o("a",{"data-testid":"sign-in-link",className:"checkout-login-form__link",href:"#",target:"_blank",rel:"noreferrer",onClick:t=>{t.preventDefault(),e==null||e(l)},children:o(L,{id:"Checkout.LoginForm.signIn"})})]}),K=({name:e,className:l,currentEmail:t,hint:u,error:d=null,onEmailChange:s,onEmailBlur:i,onEmailInvalid:p,onSignInClick:v,onSignOutClick:g,customer:a,..._})=>{const n=N({Title:"Checkout.LoginForm.title"}),h=!!a;return c("div",{..._,className:C(["checkout-login-form",l]),"data-testid":"checkout-login-form",children:[c("div",{className:"checkout-login-form__heading",children:[o(j,{level:2,className:"checkout-login-form__title",children:n.Title}),h?o(Q,{onSignOutClick:g}):o(J,{onSignInClick:v,email:t})]}),a?c("div",{className:"checkout-login-form__customer-details",children:[o("div",{className:"checkout-login-form__customer-name",children:`${a==null?void 0:a.firstName} ${a==null?void 0:a.lastName}`}),o("div",{className:"checkout-login-form__customer-email",children:a==null?void 0:a.email})]}):o("div",{className:"checkout-login-form__content",children:c("form",{className:C(["dropin-login-form__form",l]),name:e,noValidate:!0,children:[o("button",{type:"submit",disabled:!0,style:"display: none","aria-hidden":"true"}),o(D,{value:t||void 0,error:d||"",hint:u,onChange:s,onBlur:i,onInvalid:p})]})})]})},Q=({onSignOutClick:e})=>c("p",{className:"checkout-login-form__sign-out",children:[o(L,{id:"Checkout.LoginForm.switch"}),o("a",{className:"checkout-login-form__link",href:"#",target:"_blank",rel:"noreferrer",onClick:l=>{l.preventDefault(),e==null||e()},children:o(L,{id:"Checkout.LoginForm.signOut"})})]}),W="login-form",X=e=>G.email.test(e),Y=1e3,x=({className:e,email:l=null,onSignInClick:t,onSignOutClick:u,...d})=>{const s=N({LoginFormInvalidEmailError:"Checkout.LoginForm.invalidEmailError",LoginFormMissingEmailError:"Checkout.LoginForm.missingEmailError",LoginFormEmailExistsAlreadyHaveAccount:"Checkout.LoginForm.emailExists.alreadyHaveAccount",LoginFormEmailExistsSignInButton:"Checkout.LoginForm.emailExists.signInButton",LoginFormEmailExistsForFasterCheckout:"Checkout.LoginForm.emailExists.forFasterCheckout"}),{data:i}=q.value,p=(i==null?void 0:i.id)||"",v=!!i,g=(i==null?void 0:i.email)||"",[a,_]=F(!1),[n,h]=F(l),[f,E]=F(null),[y,k]=F(!0),b=r=>r.valid?null:r.valueMissing?s.LoginFormMissingEmailError:s.LoginFormInvalidEmailError,A=w.value.data,I=r=>{const{value:m}=r.target;h(m),E(null),k(!0)},H=r=>{const{validity:m}=r.target;E(b(m))},M=r=>{const{validity:m}=r.target;E(b(m))};!a&&v&&(_(!0),h((i==null?void 0:i.email)||l)),O(()=>{if(f!==null&&f!==""||n===null||n===""||z.authenticated)return;const r=setTimeout(()=>{V(n).then(m=>{k(m),g!==n&&$(n).catch(console.error)}).catch(m=>{console.log(m),E(s.LoginFormInvalidEmailError),k(!0)})},Y);return()=>{r&&clearTimeout(r)}},[g,p,n,f,s.LoginFormInvalidEmailError]);const T=y?"":c(B,{children:[s.LoginFormEmailExistsAlreadyHaveAccount," ",o("a",{href:"#",onClick:r=>{r.preventDefault(),t==null||t(n)},children:s.LoginFormEmailExistsSignInButton})," ",s.LoginFormEmailExistsForFasterCheckout]});return o(K,{className:e,currentEmail:n,error:f,hint:T,name:W,onEmailBlur:H,onEmailChange:I,onEmailInvalid:M,onSignInClick:r=>{const m=n?X(n):!1;t==null||t(m?r:null)},onSignOutClick:u,customer:A,...d})};x.displayName="LoginFormContainer";const Lo=U(x);export{W as LOGIN_FORM_NAME,Lo as LoginForm,Lo as default};