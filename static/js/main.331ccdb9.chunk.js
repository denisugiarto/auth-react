(this["webpackJsonpauth-react"]=this["webpackJsonpauth-react"]||[]).push([[0],{59:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(18),s=a.n(r),i=a(62),o=a(10),l=a(8),u=a(7),j=a(34),d=(a(46),a(35));a.n(d).a.config();var b=j.a.initializeApp({apiKey:"AIzaSyCF-kVumGKNHhK2MPTGwqarTdHbxZZ0OUU",authDomain:"auth-development-69b57.firebaseapp.com",projectId:"auth-development-69b57",storageBucket:"auth-development-69b57.appspot.com",messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"/auth-react",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyCF-kVumGKNHhK2MPTGwqarTdHbxZZ0OUU",REACT_APP_FIREBASE_AUTH_DOMAIN:"auth-development-69b57.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER:"280787981755",REACT_APP_FIREBASE_PROJECT_ID:"auth-development-69b57",REACT_APP_FIREBASE_STORAGE_BUCKET:"auth-development-69b57.appspot.com"}).REACT_APP_FIREBASE_SENDER_ID,appId:Object({NODE_ENV:"production",PUBLIC_URL:"/auth-react",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyCF-kVumGKNHhK2MPTGwqarTdHbxZZ0OUU",REACT_APP_FIREBASE_AUTH_DOMAIN:"auth-development-69b57.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER:"280787981755",REACT_APP_FIREBASE_PROJECT_ID:"auth-development-69b57",REACT_APP_FIREBASE_STORAGE_BUCKET:"auth-development-69b57.appspot.com"}).REACT_APP_FIREBASE_APP_ID}),O=b.auth(),h=a(1),p=n.a.createContext();function m(){return Object(c.useContext)(p)}function x(e){var t=e.children,a=Object(c.useState)(),n=Object(u.a)(a,2),r=n[0],s=n[1],i=Object(c.useState)(!0),o=Object(u.a)(i,2),l=o[0],j=o[1];Object(c.useEffect)((function(){return O.onAuthStateChanged((function(e){s(e),e&&!e.emailVerified&&e.sendEmailVerification(),j(!1)}))}),[]);var d={currentUser:r,signup:function(e,t){return O.createUserWithEmailAndPassword(e,t)},emailVerification:function(){return r.sendEmailVerification()},login:function(e,t){return O.signInWithEmailAndPassword(e,t)},logout:function(){return O.signOut()},resetPassword:function(e){return O.sendPasswordResetEmail(e)},updateEmail:function(e){return r.updateEmail(e)},updatePassword:function(e){return r.updatePassword(e)},deleteAccount:function(){return r.delete()}};return Object(h.jsx)(p.Provider,{value:d,children:!l&&t})}var f=a(22),v=a(40),E=["component"];function S(e){var t=e.component,a=Object(v.a)(e,E),c=m().currentUser;return Object(h.jsx)(l.b,Object(f.a)(Object(f.a)({},a),{},{render:function(e){return c?Object(h.jsx)(t,Object(f.a)({},e)):Object(h.jsx)(l.a,{to:"/login"})}}))}var g=a(15),P=a.n(g),w=a(17),_=a(65),A=a(63),R=a(64),C=a(39);function y(){var e=Object(c.useRef)(),t=Object(c.useRef)(),a=m().login,n=Object(c.useState)(""),r=Object(u.a)(n,2),s=r[0],i=r[1],j=Object(c.useState)(!1),d=Object(u.a)(j,2),b=d[0],O=d[1],p=Object(l.g)();function x(){return(x=Object(w.a)(P.a.mark((function c(n){return P.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return n.preventDefault(),c.prev=1,i(""),O(!0),c.next=6,a(e.current.value,t.current.value);case 6:p.push("/"),c.next=13;break;case 9:c.prev=9,c.t0=c.catch(1),console.log(c.t0.code),"auth/user-not-found"===c.t0.code?i("User not found"):i("Password wrong. Try again or use Forget Password");case 13:O(!1);case 14:case"end":return c.stop()}}),c,null,[[1,9]])})))).apply(this,arguments)}return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(_.a,{children:Object(h.jsxs)(_.a.Body,{children:[Object(h.jsx)("h2",{className:"text-center mb-4",children:"Log in"}),s&&Object(h.jsx)(A.a,{variant:"danger",children:s}),Object(h.jsxs)(R.a,{onSubmit:function(e){return x.apply(this,arguments)},children:[Object(h.jsxs)(R.a.Group,{id:"email",children:[Object(h.jsx)(R.a.Label,{children:"Email"}),Object(h.jsx)(R.a.Control,{type:"email",ref:e,required:!0,autoComplete:"on",name:"email"})]}),Object(h.jsxs)(R.a.Group,{id:"password",children:[Object(h.jsx)(R.a.Label,{children:"Password"}),Object(h.jsx)(R.a.Control,{type:"password",ref:t,required:!0})]}),Object(h.jsx)(C.a,{disabled:b,className:"w-100 mt-3",type:"submit",children:"Log in"})]}),Object(h.jsx)("div",{className:"w-100 text-center mt-3",children:Object(h.jsx)(o.b,{to:"/forget-password",children:"Forget Password?"})})]})}),Object(h.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account ",Object(h.jsx)(o.b,{to:"/signup",children:"Sign up"})]})]})}function T(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),a=t[0],n=t[1],r=m(),s=r.currentUser,i=r.logout,j=r.emailVerification,d=r.deleteAccount,b=Object(l.g)();function O(){return(O=Object(w.a)(P.a.mark((function e(){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(""),e.prev=1,e.next=4,i();case 4:b.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n("Failed to log out");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return console.log(s),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(_.a,{children:Object(h.jsxs)(_.a.Body,{children:[Object(h.jsx)("h2",{className:"text-center mb-4",children:"Profile"}),a&&Object(h.jsx)(A.a,{variant:"danger",children:a}),Object(h.jsxs)("p",{children:[Object(h.jsx)("strong",{children:"Email: "})," ",s.email]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("strong",{children:"Verification: "})," ",s.emailVerified.toString()]}),!s.emailVerified&&Object(h.jsx)(C.a,{onClick:function(){return j()},variant:"info",children:"Resend Verification"}),Object(h.jsx)(o.b,{to:"/update-profile",className:"btn btn-primary w-100 mt-3",children:"Update Profile"}),Object(h.jsx)(C.a,{onClick:function(){return d()},variant:"danger",className:"w-100 mt-3",children:"Delete Account"})]})}),Object(h.jsx)("div",{className:"w-100 text-center mt-2",children:Object(h.jsx)(C.a,{variant:"link",onClick:function(){return O.apply(this,arguments)},children:"Log out"})})]})}var N=a(61);function k(){var e=Object(c.useRef)(),t=Object(c.useRef)(),a=Object(c.useRef)(),n=m(),r=n.signup,s=n.login,i=Object(c.useState)(""),l=Object(u.a)(i,2),j=l[0],d=l[1],b=Object(c.useState)(""),O=Object(u.a)(b,2),p=O[0],x=O[1],f=Object(c.useState)(!0),v=Object(u.a)(f,2),E=v[0],S=v[1],g=Object(c.useState)(!1),y=Object(u.a)(g,2),T=y[0],k=y[1],I=Object(c.useState)(!1),F=Object(u.a)(I,2),U=F[0],B=F[1],D=Object(c.useState)(!1),G=Object(u.a)(D,2),L=G[0],K=G[1];function H(){S(!0),d(""),x(""),t.current.value!==a.current.value?(d("Password do not match"),x(""),B(!1)):(x("Password match"),d(""),B(!0)),S(!1)}function V(){return(V=Object(w.a)(P.a.mark((function t(){var a,c;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,d(""),S(!0),!/^\S+@\S+\.\S+$/.test(e.current.value)){t.next=9;break}return t.next=7,s(e.current.value,"123456");case 7:t.next=11;break;case 9:d("Email invalid"),x("");case 11:t.next=20;break;case 13:t.prev=13,t.t0=t.catch(0),a="auth/wrong-password"===t.t0.code||"auth/email-already-exist"===t.t0.code,c="auth/too-many-requests"===t.t0.code,console.log(t.t0.code),console.log("isRegisted = "+a),a?(d("User already exist"),x("")):c?d("Server busy"):"auth/user-not-found"===t.t0.code&&(x("You can use this email"),d(""),k(!0),K(!0));case 20:S(!1);case 21:case"end":return t.stop()}}),t,null,[[0,13]])})))).apply(this,arguments)}return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(_.a,{children:Object(h.jsxs)(_.a.Body,{children:[Object(h.jsx)("h2",{className:"text-center mb-4",children:"Sign Up"}),j&&Object(h.jsx)(A.a,{variant:"danger",children:j}),p&&Object(h.jsx)(A.a,{variant:"success",children:p}),Object(h.jsxs)(R.a,{onSubmit:function(a){a.preventDefault();var c=[];S(!0),d(""),x(""),c.push(r(e.current.value,t.current.value)),Promise.all(c).then((function(){x("Sign up successfull check your inbox mail")})).catch((function(e){var t="auth/wrong-password"===e.code||"auth/email-already-exist"===e.code,a="auth/too-many-requests"===e.code;d(t?"Email already use":"Sign up failed"),d(a?"too many request":"")})).finally((function(){S(!1)}))},children:[Object(h.jsxs)(R.a.Group,{id:"email",children:[Object(h.jsx)(R.a.Label,{children:"Email"}),Object(h.jsx)(R.a.Control,{type:"email",ref:e,required:!0,autoComplete:"on",name:"email"})]}),Object(h.jsx)(R.a.Group,{children:Object(h.jsx)(N.a,{onClick:function(){return V.apply(this,arguments)},className:"mt-1 mb-2",id:"toggle-check btn-check",type:"checkbox",variant:"outline-primary",checked:L,value:"1",size:"sm",children:"Check Email"})}),Object(h.jsxs)(R.a.Group,{id:"password",children:[Object(h.jsx)(R.a.Label,{children:"Password"}),Object(h.jsx)(R.a.Control,{onChange:H,type:"password",ref:t,required:!0})]}),Object(h.jsxs)(R.a.Group,{id:"password-confirm",children:[Object(h.jsx)(R.a.Label,{children:"Password Confirmation"}),Object(h.jsx)(R.a.Control,{onChange:H,type:"password",ref:a,required:!0})]}),Object(h.jsx)(C.a,{disabled:E||!T||!U,className:"w-100 mt-3",type:"submit",children:"Sign Up"})]})]})}),Object(h.jsxs)("div",{className:"w-100 text-center mt-2",children:["Already have an account? ",Object(h.jsx)(o.b,{to:"/login",children:"Log in"})]})]})}function I(){var e=Object(c.useRef)(),t=m().resetPassword,a=Object(c.useState)(""),n=Object(u.a)(a,2),r=n[0],s=n[1],i=Object(c.useState)(""),l=Object(u.a)(i,2),j=l[0],d=l[1],b=Object(c.useState)(!1),O=Object(u.a)(b,2),p=O[0],x=O[1];function f(){return(f=Object(w.a)(P.a.mark((function a(c){return P.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c.preventDefault(),a.prev=1,d(""),s(""),x(!0),a.next=7,t(e.current.value);case 7:d("Check your inbox for further instructions"),a.next=14;break;case 10:a.prev=10,a.t0=a.catch(1),console.log(a.t0.message),s("Failed to reset password");case 14:x(!1);case 15:case"end":return a.stop()}}),a,null,[[1,10]])})))).apply(this,arguments)}return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(_.a,{children:Object(h.jsxs)(_.a.Body,{children:[Object(h.jsx)("h2",{className:"text-center mb-4",children:"Password Reset"}),r&&Object(h.jsx)(A.a,{variant:"danger",children:r}),j&&Object(h.jsx)(A.a,{variant:"success",children:j}),Object(h.jsxs)(R.a,{onSubmit:function(e){return f.apply(this,arguments)},children:[Object(h.jsxs)(R.a.Group,{id:"email",children:[Object(h.jsx)(R.a.Label,{children:"Email"}),Object(h.jsx)(R.a.Control,{type:"email",ref:e,required:!0})]}),Object(h.jsx)(C.a,{disabled:p,className:"w-100 mt-3",type:"submit",children:"Reset Password"})]}),Object(h.jsx)("div",{className:"w-100 text-center mt-3",children:Object(h.jsx)(o.b,{to:"/login",children:"Login"})})]})}),Object(h.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account ",Object(h.jsx)(o.b,{to:"/signup",children:"Sign up"})]})]})}function F(){var e=Object(c.useRef)(),t=Object(c.useRef)(),a=Object(c.useRef)(),n=m(),r=n.currentUser,s=n.updateEmail,i=n.updatePassword,j=Object(c.useState)(""),d=Object(u.a)(j,2),b=d[0],O=d[1],p=Object(c.useState)(!1),x=Object(u.a)(p,2),f=x[0],v=x[1],E=Object(l.g)();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(_.a,{children:Object(h.jsxs)(_.a.Body,{children:[Object(h.jsx)("h2",{className:"text-center mb-4",children:"Update Profile"}),b&&Object(h.jsx)(A.a,{variant:"danger",children:b}),Object(h.jsxs)(R.a,{onSubmit:function(c){if(c.preventDefault(),t.current.value!==a.current.value)return O("Password do not match");var n=[];v(!0),O(""),e.current.value!==r.email&&n.push(s(e.current.value)),t.current.value&&n.push(i(t.current.value)),Promise.all(n).then((function(){E.push("/")})).catch((function(){O("Failed to update account")})).finally((function(){v(!1)}))},children:[Object(h.jsxs)(R.a.Group,{id:"email",children:[Object(h.jsx)(R.a.Label,{children:"Email"}),Object(h.jsx)(R.a.Control,{type:"email",ref:e,required:!0,defaultValue:r.email})]}),Object(h.jsxs)(R.a.Group,{id:"password",children:[Object(h.jsx)(R.a.Label,{children:"Password"}),Object(h.jsx)(R.a.Control,{type:"password",ref:t,placeholder:"Leave blank to keep the same"})]}),Object(h.jsxs)(R.a.Group,{id:"password-confirm",children:[Object(h.jsx)(R.a.Label,{children:"Password Confirmation"}),Object(h.jsx)(R.a.Control,{type:"password",ref:a,placeholder:"Leave blank to keep the same"})]}),Object(h.jsx)(C.a,{disabled:f,className:"w-100 mt-3",type:"submit",children:"Update Profile"})]})]})}),Object(h.jsx)("div",{className:"w-100 text-center mt-2",children:Object(h.jsx)(o.b,{to:"/",children:"Cancel"})})]})}var U=function(){return Object(h.jsx)(i.a,{className:"d-flex justify-content-center align-items-center",style:{minHeight:"100vh"},children:Object(h.jsx)("div",{className:"w-100",style:{maxWidth:"400px"},children:Object(h.jsx)(o.a,{children:Object(h.jsx)(x,{children:Object(h.jsxs)(l.d,{children:[Object(h.jsx)(S,{exact:!0,path:"/",component:T}),Object(h.jsx)(S,{path:"/update-profile",component:F}),Object(h.jsx)(l.b,{path:"/signup",component:k}),Object(h.jsx)(l.b,{path:"/login",component:y}),Object(h.jsx)(l.b,{path:"/forget-password",component:I})]})})})})})};a(58);s.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(U,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.331ccdb9.chunk.js.map