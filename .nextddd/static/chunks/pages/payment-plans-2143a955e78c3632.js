(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5185],{9979:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/payment-plans",function(){return a(1359)}])},1359:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return j}});var i=a(5893),n=a(7294);a(1664);var t=a(2052),l=a(6737),c=a.n(l),r=a(9669),d=a.n(r);let o=()=>{let[e,s]=(0,n.useState)(""),[a,l]=(0,n.useState)(""),[r,o]=(0,n.useState)(""),h=async(e,a,i)=>{let n=await fetch("/api/charge",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:a,name:i,id:e.id})}),t=await n.json();t.success?(console.log("Payment Successful"),s("true"),l(a/100),o(i)):(console.log("Payment Error:",t.error),s("false"),l(a/100),o(i))};return(0,n.useEffect)(()=>{let s=window.localStorage.getItem("username"),i=localStorage.getItem("Link");"false"===e?c()("Failed","Sorry, the payment was not completed correctly, please try again...","warning"):d().post("/api/payment",{username:s,attendedBy:i,amount:a,paymentPlan:r}).then(e=>{200===e.data.status?(console.log("welcom"+e.data.message),c()("Success","Ready to show videos","success")):400===e.data.status&&c()("Failed","Something went wrong, please contact support to resolve the issue...","warning")})},[e]),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"bigdata-services-area ptb-80 bg-eef6fd",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsxs)("div",{className:"section-title",children:[(0,i.jsx)("h2",{children:"Our special packages"}),(0,i.jsx)("div",{className:"bar"}),(0,i.jsx)("p",{children:"You can choose the package that suits you and enjoy the experience with us"})]}),(0,i.jsxs)("div",{className:"row justify-content-center",children:[(0,i.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,i.jsxs)("div",{className:"pricing-table",children:[(0,i.jsx)("div",{className:"pricing-header",children:(0,i.jsx)("h3",{children:"6FE Standard"})}),(0,i.jsx)("div",{className:"price",children:(0,i.jsxs)("span",{children:[(0,i.jsx)("sup",{children:"$"}),"350.00 ",(0,i.jsx)("span",{children:"/Mon"})]})}),(0,i.jsx)("div",{className:"pricing-features",children:(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{className:"active",children:"5 GB Bandwidth"}),(0,i.jsx)("li",{className:"active",children:"Highest Speed"}),(0,i.jsx)("li",{className:"active",children:"1 GB Storage"}),(0,i.jsx)("li",{className:"active",children:"Unlimited Website"}),(0,i.jsx)("li",{className:"active",children:"Unlimited Users"}),(0,i.jsx)("li",{className:"active",children:"24x7 Great Support"}),(0,i.jsx)("li",{children:"Data Security and Backups"}),(0,i.jsx)("li",{children:"Monthly Reports and Analytics"})]})}),(0,i.jsx)("div",{className:"pricing-footer",children:(0,i.jsx)(t.Z,{stripeKey:"pk_live_51NGPEkD9XEKkDfrerMRBkZulRw0Nk2adtRLlz9PLvJMCEcs58yREEkGGFtfSsTgRqG5jC8zJAmU7Xmffhyu4lfqi00QpD9FVQe",token:e=>h(e,39900,"6FE Standard"),billingAddress:!0,shippingAddress:!0,amount:39900,name:"6FE Standard"})})]})}),(0,i.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,i.jsxs)("div",{className:"pricing-table",children:[(0,i.jsx)("div",{className:"pricing-header",children:(0,i.jsx)("h3",{children:"6FE Pro"})}),(0,i.jsx)("div",{className:"price",children:(0,i.jsxs)("span",{children:[(0,i.jsx)("sup",{children:"$"}),"600.00 ",(0,i.jsx)("span",{children:"/Mon"})]})}),(0,i.jsx)("div",{className:"pricing-features",children:(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{className:"active",children:"5 GB Bandwidth"}),(0,i.jsx)("li",{className:"active",children:"Highest Speed"}),(0,i.jsx)("li",{className:"active",children:"1 GB Storage"}),(0,i.jsx)("li",{className:"active",children:"Unlimited Website"}),(0,i.jsx)("li",{className:"active",children:"Unlimited Users"}),(0,i.jsx)("li",{className:"active",children:"24x7 Great Support"}),(0,i.jsx)("li",{children:"Data Security and Backups"}),(0,i.jsx)("li",{children:"Monthly Reports and Analytics"})]})}),(0,i.jsx)("div",{className:"pricing-footer",children:(0,i.jsx)(t.Z,{stripeKey:"pk_live_51NGPEkD9XEKkDfrerMRBkZulRw0Nk2adtRLlz9PLvJMCEcs58yREEkGGFtfSsTgRqG5jC8zJAmU7Xmffhyu4lfqi00QpD9FVQe",token:e=>h(e,6e4,"6FE Pro"),billingAddress:!0,shippingAddress:!0,amount:6e4,name:"6FE Pro"})})]})})]})]})})})};var h=a(3195),p=a(6803),u=a(1163);let m=()=>{let e=(0,u.useRouter)();return n.useEffect(()=>{let s=localStorage.getItem("Link"),a=window.localStorage.getItem("auth_token");(null===s||null===a)&&e.push({pathname:"/"})},[]),(0,i.jsxs)("div",{children:[(0,i.jsx)(h.Z,{}),(0,i.jsx)(o,{}),(0,i.jsx)(p.Z,{})]})};var j=m}},function(e){e.O(0,[1664,8734,2052,5534,9774,2888,179],function(){return e(e.s=9979)}),_N_E=e.O()}]);