(function(){var t={8611:function(t,e,r){"use strict";var i=r(144),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("section",{staticClass:"u-align-center u-clearfix u-section-2",attrs:{id:"sec-dba4"}},[e("div",{staticClass:"u-clearfix u-sheet u-sheet-1"},[e("h2",{staticClass:"u-align-center u-text u-text-default u-text-1 priceT"},[t._v("Актуальная таблица "),e("img",{staticStyle:{cursor:"pointer","font-family":"Arial, sans-serif"},attrs:{src:"img/excel.png",width:"60px",title:"Скачать таблицу"},on:{click:t.downloadTable}})]),e("div",{staticClass:"u-expanded-width u-table u-table-responsive u-table-1"},[e("table",{staticClass:"u-table-entity u-table-entity-1"},[t._m(0),e("thead",{staticClass:"u-palette-4-base u-table-header u-table-header-1",on:{click:t.hideTable}},[t._m(1)]),e("tbody",{staticClass:"u-table-body"},t._l(t.wheels,(function(r){return e("tr",{key:r.id,staticStyle:{height:"45px","text-align":"center"},attrs:{id:r.id}},[e("td",{staticClass:"u-border-1 u-border-grey-30 u-table-cell"},[t._v(t._s(r.name))]),e("td",{staticClass:"u-border-1 u-border-grey-30 u-table-cell"},[t._v(t._s(r.portion))]),e("td",{staticClass:"u-border-1 u-border-grey-30 u-table-cell"},[t._v(t._s(r.optPrice))]),e("td",{staticClass:"u-border-1 u-border-grey-30 u-table-cell"},[t._v(t._s(r.price))])])})),0)])])])])])},n=[function(){var t=this,e=t._self._c;return e("colgroup",[e("col",{attrs:{width:"25%"}}),e("col",{attrs:{width:"25%"}}),e("col",{attrs:{width:"25%"}}),e("col",{attrs:{width:"25%"}})])},function(){var t=this,e=t._self._c;return e("tr",{staticStyle:{height:"25px","text-align":"center","font-size":"18px"}},[e("th",{staticClass:"u-border-1 u-border-palette-3-base u-gradient u-table-cell u-table-cell-1"},[t._v("Название")]),e("th",{staticClass:"u-border-1 u-border-palette-4-base u-gradient u-table-cell u-table-cell-2"},[t._v("Остаток")]),e("th",{staticClass:"u-border-1 u-border-palette-4-base u-gradient u-table-cell u-table-cell-3"},[t._v("Оптовая цена")]),e("th",{staticClass:"u-border-1 u-border-palette-4-base u-gradient u-table-cell u-table-cell-4"},[t._v("Розничная цена")])])}];r(8858),r(1318),r(3228);const a=[{id:1,name:"215/65/R15",portion:9,optPrice:17059,price:23882},{id:2,name:"235/60/R19",portion:9,optPrice:32455,price:45437},{id:3,name:"215/60/R16",portion:9,optPrice:25331,price:35463},{id:4,name:"235/50/R16",portion:3,optPrice:33786,price:47300},{id:5,name:"235/65/R16",portion:3,optPrice:22681,price:31753},{id:6,name:"225/70/R17",portion:2,optPrice:29132,price:40784},{id:7,name:"215/70/R20",portion:9,optPrice:25126,price:35176},{id:8,name:"215/50/R16",portion:4,optPrice:24181,price:33853},{id:9,name:"225/60/R21",portion:7,optPrice:23066,price:32292},{id:10,name:"225/65/R20",portion:9,optPrice:29849,price:41788},{id:11,name:"195/70/R18",portion:4,optPrice:31819,price:44546},{id:12,name:"195/50/R17",portion:2,optPrice:24582,price:34414},{id:13,name:"215/65/R20",portion:10,optPrice:29926,price:41896},{id:14,name:"225/55/R18",portion:5,optPrice:22503,price:31504},{id:15,name:"215/65/R15",portion:2,optPrice:34971,price:48959},{id:16,name:"225/65/R17",portion:9,optPrice:33689,price:47164},{id:17,name:"225/55/R21",portion:9,optPrice:19553,price:27374},{id:18,name:"205/55/R15",portion:9,optPrice:20720,price:29007},{id:19,name:"205/65/R16",portion:2,optPrice:21959,price:30742},{id:20,name:"195/65/R20",portion:8,optPrice:19698,price:27577}];var c=a,l={data(){return{showRowsAll:!0}},computed:{wheels(){let t=c;return t}},methods:{downloadTable(){let t="Название,Партия,Оптовая цена,Розничная цена\n";this.wheels.forEach((e=>{const r=`${e.name},${e.portion},${e.optPrice},${e.price}\n`;t+=r}));const e=new Blob([t],{type:"text/csv;charset=utf-8;"}),r=document.createElement("a"),i=URL.createObjectURL(e);r.setAttribute("href",i),r.setAttribute("download","table.csv"),r.style.display="none",document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(i)},hideTable(){let t=document.querySelectorAll("tbody tr");this.showRowsAll?(t.forEach(((t,e)=>{e>=10&&(t.style.display="none")})),this.showRowsAll=!1):(t.forEach(((t,e)=>{t.style.display=""})),this.showRowsAll=!0)}}},s=l,u=r(1001),p=(0,u.Z)(s,o,n,!1,null,null,null),d=p.exports,b=r(1120),f=r.n(b),h=r(629);i.ZP.use(h.ZP);var m=new h.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}});i.ZP.config.productionTip=!1,new i.ZP({router:f(),store:m,render:t=>t(d)}).$mount("#app")},1120:function(){}},e={};function r(i){var o=e[i];if(void 0!==o)return o.exports;var n=e[i]={exports:{}};return t[i].call(n.exports,n,n.exports,r),n.exports}r.m=t,function(){var t=[];r.O=function(e,i,o,n){if(!i){var a=1/0;for(u=0;u<t.length;u++){i=t[u][0],o=t[u][1],n=t[u][2];for(var c=!0,l=0;l<i.length;l++)(!1&n||a>=n)&&Object.keys(r.O).every((function(t){return r.O[t](i[l])}))?i.splice(l--,1):(c=!1,n<a&&(a=n));if(c){t.splice(u--,1);var s=o();void 0!==s&&(e=s)}}return e}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[i,o,n]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var i in e)r.o(e,i)&&!r.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,i){var o,n,a=i[0],c=i[1],l=i[2],s=0;if(a.some((function(e){return 0!==t[e]}))){for(o in c)r.o(c,o)&&(r.m[o]=c[o]);if(l)var u=l(r)}for(e&&e(i);s<a.length;s++)n=a[s],r.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return r.O(u)},i=self["webpackChunkbigshina_b2b"]=self["webpackChunkbigshina_b2b"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=r.O(void 0,[998],(function(){return r(8611)}));i=r.O(i)})();
//# sourceMappingURL=app.64f28b89.js.map