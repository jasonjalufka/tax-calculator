(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(n,e,t){n.exports=t(27)},21:function(n,e,t){},27:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(9),i=t.n(o),c=(t(21),t(12)),l=t(7),u=t(3),d=t(2),s=t(1),m={blue:"#107090",red:"#CA3C25",green:"#7FB069",orange:"#E6AA68",black:"#1D1A05",pageBackground:"#eee",contentBackground:"#fff",highlight:"#fdfd96"},f={animations:{show:"\n    animation: show 500ms ease-out forwards;\n    ".concat("@keyframes show {\n    to {\n      opacity: 1;\n      transform: none;\n    }\n  }","\n  ")},boxShadow:"10px 10px 40px rgba(0, 0, 0, 0.2)",breakpoints:{desktop:"(min-width: 768px)"},buttonColors:{primary:m.blue,secondary:m.green},colors:m,borderRadius:"6px",fontWeights:{thin:100,light:300,regular:400,medium:500,bold:700,black:900},fontFamilies:{default:"Helvetica Neue",headings:"Roboto, serif"},textColors:{text:m.black,lightText:m.contentBackground,link:m.blue,hover:m.green}};function p(){var n=Object(d.a)(["",""]);return p=function(){return n},n}var h="\n  html {\n    box-sizing: border-box;\n  }\n\n  body {\n    background: ".concat(f.colors.pageBackground,";\n    color: ").concat(f.textColors.text,";\n    background: #36D1DC;  /* fallback for old browsers */\n    background: -webkit-linear-gradient(to right, #5B86E5, #36D1DC);  /* Chrome 10-25, Safari 5.1-6 */\n    background: linear-gradient(to right, #5B86E5, #36D1DC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n    background-attachment: fixed;\n    background-size: cover;\n    line-height: 1.75;\n    width: 100vw;\n  }\n\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n\n  /* Headings and text styles */\n  h1 {\n    font-size: 62px;\n    font-weight: ").concat(f.fontWeights.bold,";\n    font-family: ").concat(f.fontFamilies.headings,";\n    letter-spacing: -1.8px;\n    line-height: 1em;\n    margin-top: 0;\n    margin-bottom: 0.5em;\n  }\n\n  h2 {\n    font-size: 24px;\n    font-weight: ").concat(f.fontWeights.medium,";\n    font-family: ").concat(f.fontFamilies.headings,";\n    letter-spacing: 0.2;\n    line-height: 1.5em;\n    margin-bottom: 0.5em;\n  }\n\n  h3 {\n    font-size: 20px;\n    font-weight: ").concat(f.fontWeights.medium,";\n    letter-spacing: 0.2;\n    line-height: 24px;\n  }\n\n  h4 {\n    font-size: 18px;\n    font-weight: ").concat(f.fontWeights.bold,";\n    letter-spacing: 0.2;\n    line-height: 22px;\n  }\n\n  h5 {\n    font-size: 12px;\n    font-weight: ").concat(f.fontWeights.regular,";\n    letter-spacing: 0.2;\n    margin: 0;\n  }\n\n  p {\n    font-size: 20px;\n    font-weight: ").concat(f.fontWeights.light,";\n    line-height: 1.5em;\n    letter-spacing: 0.5px;\n    font-weight: 300;\n    color: ").concat(f.colors.darkGrey,";\n  }\n\n  a {\n    color: ").concat(f.textColors.link,";\n    text-decoration: none;\n    cursor: pointer;\n    transition: color .2s ease-out;\n\n    &:hover {\n      color: ").concat(f.textColors.hover,";\n      text-decoration: none;\n    }\n  }\n\n  ul {\n    margin: 10px 0;\n    padding: 0;\n\n    li {\n      font-weight: ").concat(f.fontWeights.light,";\n      margin: 10px 20px;\n    }\n  }\n\n  strong {\n    font-weight: ").concat(f.fontWeights.bold,";\n  }\n"),g=Object(s.b)(p(),h),b=[{lower:0,upper:9700,rate:10},{lower:9701,upper:39475,rate:12},{lower:39476,upper:84200,rate:22},{lower:84201,upper:160725,rate:24},{lower:160726,upper:204100,rate:32},{lower:204101,upper:510300,rate:35},{lower:510301,upper:Number.POSITIVE_INFINITY,rate:37}],x=[{lower:0,upper:19400,rate:10},{lower:19401,upper:78950,rate:12},{lower:78951,upper:168400,rate:22},{lower:168401,upper:321450,rate:24},{lower:321451,upper:408200,rate:32},{lower:408201,upper:612350,rate:35},{lower:612351,upper:Number.POSITIVE_INFINITY,rate:37}];function w(){var n=Object(d.a)(["\n  font-size: 1rem;\n"]);return w=function(){return n},n}function E(){var n=Object(d.a)(["\n  width: 50%;\n  position: absolute;\n  height: inherit;\n  display: flex;\n  box-sizing: border-box;\n\n  p {\n    margin: auto;\n  }\n\n  &:nth-child(1) {\n    right: 0;\n  }\n"]);return E=function(){return n},n}function v(){var n=Object(d.a)(["\n  position: absolute;\n  width: inherit;\n  height: inherit;\n  text-transform: uppercase;\n  font-size: 10px;\n  letter-spacing: 0.2em;\n\n  &:first-child {\n    background: #e9e9e9;\n    color: #a9a9a9;\n  }\n\n  &:nth-child(2) {\n    color: white;\n    background: ",";\n    clip-path: ",";\n    transition: 0.3s cubic-bezier(0, 0, 0, 1);\n  }\n"]);return v=function(){return n},n}function k(){var n=Object(d.a)(["\n  width: 100%;\n  height: 50px;\n  position: relative;\n  border-radius: 6px;\n  overflow: hidden;\n  user-select: none;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);\n  cursor: pointer;\n"]);return k=function(){return n},n}var y=s.c.div(k()),j=s.c.div(v(),function(n){return n.isMarried?"linear-gradient(to right, #5b86e5, #36d1dc)":"linear-gradient(to left, #5b86e5, #36d1dc)"},function(n){return n.isMarried?"inset(0 0 0 50%)":"inset(0 50% 0 0)"}),O=s.c.div(E()),C=s.c.p(w()),S=function(n){return a.a.createElement(y,{onClick:function(){return n.updateTableData()}},a.a.createElement(j,null,a.a.createElement(O,null,a.a.createElement(C,null,"Married")),a.a.createElement(O,null,a.a.createElement(C,null,"Single"))),a.a.createElement(j,{isMarried:n.isMarried},a.a.createElement(O,null,a.a.createElement(C,null,"Married")),a.a.createElement(O,null,a.a.createElement(C,null,"Single"))))};function z(){var n=Object(d.a)(["\n  font-weight: ",";\n  font-family: ",";\n  width: 100%;\n  flex-grow: 2;\n"]);return z=function(){return n},n}function I(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  flex-basis: 100%;\n  flex: 1;\n\n  &:nth-child(1) {\n    flex: 2;\n  }\n"]);return I=function(){return n},n}function N(){var n=Object(d.a)(["\n  padding: 10px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-self: stretch;\n  font-family: ",";\n  border-radius: ",";\n  border-top: ",";\n  border-image-source: linear-gradient(to left, #5b86e5, #36d1dc);\n  border-image-slice: 1;\n  color: ",";\n  background: ",";\n  ",";\n  animation-delay: ","ms;\n  transform: translateY(-20px);\n  opacity: 0;\n"]);return N=function(){return n},n}function B(){var n=Object(d.a)(["\n  width: 100%;\n  padding: 15px;\n"]);return B=function(){return n},n}function W(){var n=Object(d.a)(["\n  /* width: 60%; */\n  min-width: 300px;\n  background: white;\n  border-radius: ",";\n  box-shadow: ",";\n  /* margin-top: 100px; */\n  /* margin-bottom: 100px; */\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n\n  @media (max-width: 700px) {\n    width: 90%;\n    margin-top: 30px;\n    margin-bottom: 30px;\n  }\n\n  @media (min-width: 701px) {\n    min-width: 350px;\n    min-height: 40%;\n    width: 60%;\n    margin-top: 100px;\n    margin-bottom: 100px;\n  }\n\n  @media (max-width: 470px) {\n    font-size: 12px;\n  }\n"]);return W=function(){return n},n}function R(){var n=Object(d.a)(["\n  width: 100%;\n  position: relative;\n  padding: 10px 5px;\n  border: none;\n  border-bottom: 2px solid;\n  border-image-source: linear-gradient(to left, #5b86e5, #36d1dc);\n  border-image-slice: 1;\n  font-size: 16px;\n  line-height: normal;\n  background-color: transparent;\n  color: #282828;\n  outline: none;\n  transition: 0.3s padding ease-in-out;\n  -webkit-appearance: none;\n\n  &:focus {\n    padding: 15px 10px;\n  }\n"]);return R=function(){return n},n}function T(){var n=Object(d.a)(["\n  width: 100%;\n  height: 56px;\n  border-radius: ",";\n  position: relative;\n  background-color: rgba(255, 255, 255, 0.3);\n  transition: 0.3s all;\n"]);return T=function(){return n},n}function D(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  height: 60%;\n"]);return D=function(){return n},n}function F(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  padding: 20px;\n  border-radius: ",";\n  box-shadow: ",";\n  ",";\n  opacity: 0;\n\n  @media (max-width: 700px) {\n    width: 90%;\n    margin-top: 30px;\n    margin-bottom: 0;\n  }\n\n  @media (min-width: 701px) {\n    min-width: 350px;\n    min-height: 40%;\n    width: 30%;\n    margin-top: 100px;\n    margin-bottom: 100px;\n  }\n"]);return F=function(){return n},n}function M(){var n=Object(d.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  justify-content: space-around;\n  height: 100vh;\n"]);return M=function(){return n},n}var P=s.c.div(M()),$=s.c.div(F(),function(n){return n.theme.borderRadius},function(n){return n.theme.boxShadow},function(n){return n.theme.animations.show}),A=s.c.form(D()),L=s.c.div(T(),f.borderRadius),Y=s.c.input(R()),G=s.c.div(W(),function(n){return n.theme.borderRadius},function(n){return n.theme.boxShadow}),H=s.c.div(B()),J=s.c.div(N(),function(n){return n.numerical?"Roboto Mono, monospace":"Roboto"},function(n){return n.total?"0":f.borderRadius},function(n){return n.total?"2px solid":"none"},function(n){return n.isBracket?"white":"inherit"},function(n){return n.isBracket?"linear-gradient(to left, #0083b0, #00b4db)":"inherit"},function(n){return n.theme.animations.show},function(n){return 10*n.rowNumber}),V=s.c.div(I()),_=s.c.div(z(),function(n){return n.header||n.total?"bold":"400"},function(n){return n.numerical?"Roboto Mono, monospace":"inherit"}),q=function(){var n=Object(r.useState)(0),e=Object(u.a)(n,2),t=e[0],o=e[1],i=Object(r.useState)(!1),d=Object(u.a)(i,2),m=d[0],p=d[1],h=Object(r.useState)({}),w=Object(u.a)(h,2),E=w[0],v=w[1];Object(r.useEffect)(function(){O(0)},[]);var k=function(n,e,t,r){return r<n?0:r>e?e*t/100:(r-n)*t/100},y=function(n,e,t){return t>=n&&t<=e},j=function(){p(!m),O(t,!m)},O=function(n,e){var t={},r=e?Object(l.a)(x):Object(l.a)(b);console.log("data stuff:",m?"loading married":"loading single"),r.forEach(function(e,r){return t[r]=Object(c.a)({},e,{bracketId:r,totalPaid:k(e.lower,e.upper,e.rate,n),isBracket:y(e.lower,e.upper,n)})}),v(t)};return a.a.createElement(s.a,{theme:f},a.a.createElement(a.a.Fragment,null,a.a.createElement(g,null),a.a.createElement(P,null,a.a.createElement($,null,a.a.createElement("h2",{style:{fontWeight:"bold"}},"Tax Calculator"),a.a.createElement(A,null,a.a.createElement(L,null,a.a.createElement(Y,{placeholder:"Gross Income",type:"number",name:"gross-income",onChange:function(n){return e=n.target.value,o(e),void O(e,m);var e}})),a.a.createElement(S,{updateTableData:function(){return j()},isMarried:m}))),a.a.createElement(G,null,a.a.createElement(H,null,a.a.createElement(J,{rowNumber:0},a.a.createElement(V,null,a.a.createElement(_,{header:!0},"Income Range")),a.a.createElement(V,null,a.a.createElement(_,{header:!0},"Tax Rate")),a.a.createElement(V,null,a.a.createElement(_,{header:!0},"You Pay"))),Object.keys(E).map(function(n){return a.a.createElement(J,{numerical:!0,key:n,rowNumber:n+1,isBracket:E[n].isBracket},a.a.createElement(V,null,a.a.createElement(_,null,"$",Number(E[n].lower).toLocaleString()," - $",Number(E[n].upper).toLocaleString())),a.a.createElement(V,null,a.a.createElement(_,null,E[n].rate," %")),a.a.createElement(V,null,a.a.createElement(_,null,"$",Number(E[n].totalPaid).toLocaleString())))}),a.a.createElement(J,{total:!0,rowNumber:90},a.a.createElement(V,null,a.a.createElement(_,{total:!0},"Total:")),a.a.createElement(V,null,a.a.createElement(_,{total:!0,numerical:!0},t&&(Object.keys(E).reduce(function(n,e){return n+E[e].totalPaid},0)/t*100).toFixed(2),"%")),a.a.createElement(V,null,a.a.createElement(_,{total:!0,numerical:!0}," $",Number(Object.keys(E).reduce(function(n,e){return n+E[e].totalPaid},0)).toLocaleString()))))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[15,1,2]]]);
//# sourceMappingURL=main.e07b117b.chunk.js.map