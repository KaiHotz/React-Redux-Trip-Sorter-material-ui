!function(e){function t(t){for(var a,o,l=t[0],c=t[1],i=t[2],d=0,p=[];d<l.length;d++)o=l[d],n[o]&&p.push(n[o][0]),n[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);for(u&&u(t);p.length;)p.shift()();return s.push.apply(s,i||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],a=!0,l=1;l<r.length;l++){var c=r[l];0!==n[c]&&(a=!1)}a&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var a={},n={1:0},s=[];function o(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=a,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(r,a,function(t){return e[t]}.bind(null,a));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var u=c;s.push([413,0,3]),r()}({118:function(e,t,r){"use strict";(function(e){r.d(t,"a",function(){return i}),r.d(t,"c",function(){return u}),r.d(t,"d",function(){return d}),r.d(t,"b",function(){return p});var a=r(403),n=r.n(a),s=r(245),o=r.n(s),l=r(30);console.log("path",o.a);const c=o.a.resolve(e,"/mockedData/response.json"),i=()=>e=>n.a.get(c).then(t=>{e({type:l.a,payload:t.data})}).catch(e=>{throw e}),u=(e,t)=>(r,a)=>{const{data:{deals:n}}=a(),s=null===n||void 0===n?void 0:n.filter(r=>r.departure===e&&r.arrival===t);r({type:l.b,payload:s})},d=e=>t=>{t({type:e})},p=()=>e=>e({type:l.c})}).call(this,"/")},30:function(e,t,r){"use strict";r.d(t,"a",function(){return n}),r.d(t,"b",function(){return s}),r.d(t,"c",function(){return o}),r.d(t,"d",function(){return l});var a=r(91);const n="FETCH_DATA",s="SEARCH",o="SEARCH_RESET",l=Object(a.a)("SORT_BY",["COST","DURATION"])},413:function(e,t,r){r(414),e.exports=r(976)},91:function(e,t,r){"use strict";r.d(t,"b",function(){return a}),r.d(t,"c",function(){return n}),r.d(t,"a",function(){return s});const a=e=>e.reduce((e,t)=>e+(t.cost-t.cost*t.discount/100),0),n=e=>e.reduce((e,t)=>e+(60*parseInt(t.duration.h,10)+parseInt(t.duration.m,10)),0);function s(e,t=[]){return t.reduce((t,r)=>(t[r]=`${e}_${r}`,t),{})}},976:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),s=r(26),o=r.n(s),l=r(116),c=r(54),i=r(411),u=r.n(i),d=r(412),p=r.n(d),h=r(53),m=r(239),f=r(30);var b=r(243),v=r.n(b);var y=Object(h.combineReducers)({data:(e={},t)=>{switch(t.type){case f.a:return t.payload;default:return e}},results:(e=null,t)=>{switch(t.type){case f.b:return t.payload;case f.d.DURATION:return v.a.sortBy(e,e=>60*parseInt(e.duration.h,10)+parseInt(e.duration.m,10));case f.d.COST:return v.a.sortBy(e,e=>e.cost-e.cost*e.discount/100);case f.c:return null;default:return e}}});var S=()=>{const e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||h.compose;return Object(h.createStore)(y,e(Object(h.applyMiddleware)(m.default)))},O=r(117);var g=e=>(class extends a.Component{constructor(...e){super(...e),function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(this,"state",{error:null,errorInfo:null})}componentDidCatch(e,t){this.setState({error:e,errorInfo:t})}render(){const{error:t,errorInfo:r}=this.state;return n.a.createElement(a.Fragment,null,t&&n.a.createElement(a.Fragment,null,n.a.createElement("h2",null,"Something went wrong."),n.a.createElement("details",{style:{whiteSpace:"pre-wrap"}},t.toString(),n.a.createElement("br",null),r.componentStack)),n.a.createElement(e,this.props))}}),E=r(3),j=r.n(E),w=r(74),R=r(409),T=r.n(R),C=r(410),_=r.n(C),D=r(241),I=r.n(D),N=r(162),P=r.n(N),x=r(118);const B=e=>e.data,$=e=>e.results;var A=r(404),q=r.n(A),M=r(406),k=r.n(M),F=r(407),U=r.n(F);var z=e=>({card:{minWidth:275,maxWidth:350,margin:"0 auto",textAlign:"center"},title:{marginBottom:16},formControl:{margin:e.spacing.unit,minWidth:"95%"},sortButton:{width:"48%",margin:`${e.spacing.unit}px 2px`},searchResetButton:{width:"98%"},listItem:{textAlign:"center"}});const H=({label:e,selectedOption:t,onChange:r,options:a,classes:s,disabled:o})=>n.a.createElement(q.a,{className:s.formControl},e&&n.a.createElement(k.a,{htmlFor:"age-native-simple"},e),n.a.createElement(U.a,{native:!0,value:t,onChange:r,disabled:o},n.a.createElement("option",{value:""}),a.map(e=>n.a.createElement("option",{key:e,value:e},e))));H.propTypes={label:j.a.string,disabled:j.a.bool,selectedOption:j.a.string,classes:j.a.object.isRequired,onChange:j.a.func.isRequired,options:j.a.array.isRequired},H.defaultProps={label:null,disabled:!1,selectedOption:""};var W=Object(c.withStyles)(z)(H),J=r(240),X=r.n(J),L=r(246),V=r.n(L),Y=r(247),G=r.n(Y),K=r(408),Q=r.n(K),Z=r(91);const ee=({results:e,classes:t})=>n.a.createElement(X.a,null,e.map(e=>n.a.createElement(V.a,{className:t.listItem,key:e.reference},n.a.createElement(G.a,{primary:`${e.departure} > ${e.arrival} ${e.cost-e.cost*e.discount/100}€`,secondary:`${e.transport} ${e.reference} for ${e.duration.h}h${e.duration.m}m`}))),n.a.createElement(Q.a,null),n.a.createElement(V.a,{className:t.listItem},n.a.createElement(G.a,{primary:`Total ${Math.trunc(Object(Z.c)(e)/60)}h${Object(Z.c)(e)%60}m ${Object(Z.b)(e)}€`})));ee.propTypes={results:j.a.array,classes:j.a.object.isRequired},ee.defaultProps={results:[]};var te=Object(c.withStyles)(z)(ee);function re(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class ae extends a.Component{constructor(...e){super(...e),re(this,"state",{departure:"",arrival:"",arrivals:[],sorter:null}),re(this,"handelDepartureSelect",()=>e=>{const{deals:t}=this.props,r=t.filter(t=>t.departure===e.target.value).reduce((e,t)=>(e.push(t.arrival),e),[]);this.setState({departure:e.target.value,arrivals:[...new Set(r)]})}),re(this,"handleArrivalSelect",()=>e=>{this.setState({arrival:e.target.value})}),re(this,"handleSearch",()=>{const{search:e}=this.props,{departure:t,arrival:r}=this.state;e(t,r)}),re(this,"handleSort",e=>()=>{const{sortBy:t}=this.props;this.setState({sorter:e}),t(e)}),re(this,"handleReset",()=>{const{resetSearch:e}=this.props;this.setState({departure:"",arrival:"",arrivals:[],sorter:null}),e()})}componentDidMount(){const{fetchData:e}=this.props;e()}render(){const{cities:e,classes:t,results:r}=this.props,{COST:a,DURATION:s}=f.d,{departure:o,arrival:l,arrivals:c,sorter:i}=this.state,u=r?this.handleReset:this.handleSearch,d=r?"Reset":"Search",p=r?"primary":"secondary";return n.a.createElement(T.a,{className:t.card},n.a.createElement(_.a,null,n.a.createElement(I.a,{className:t.title,variant:"display3",gutterBottom:!0},"Trip Sorter"),n.a.createElement(W,{label:"From:",onChange:this.handelDepartureSelect(),options:e,selectedOption:o,disabled:!!r}),n.a.createElement(W,{label:"To:",onChange:this.handleArrivalSelect(),options:c,selectedOption:l,disabled:!!r}),n.a.createElement(P.a,{className:t.sortButton,size:"small",color:"primary",variant:i===a?"contained":"outlined",onClick:this.handleSort(a),disabled:null===r},"Cheapest"),n.a.createElement(P.a,{className:t.sortButton,size:"small",color:"primary",variant:i===s?"contained":"outlined",onClick:this.handleSort(s),disabled:null===r},"Fastest"),n.a.createElement("div",{className:"results"},r&&n.a.createElement(te,{results:r}),n.a.createElement(P.a,{className:t.searchResetButton,size:"small",color:p,variant:"contained",onClick:u},d))))}}re(ae,"propTypes",{deals:j.a.array,cities:j.a.array,results:j.a.array,fetchData:j.a.func.isRequired,search:j.a.func.isRequired,sortBy:j.a.func.isRequired,resetSearch:j.a.func.isRequired,classes:j.a.object.isRequired}),re(ae,"defaultProps",{deals:[],cities:[],results:null});const ne=Object(w.createStructuredSelector)({deals:Object(w.createSelector)(B,e=>e.deals),cities:Object(w.createSelector)(B,e=>{var t;return null===e||void 0===e?void 0:null===(t=e.deals)||void 0===t?void 0:t.reduce((e,t)=>(e.push(t.departure,t.arrival),[...new Set(e)].sort()),[])}),results:Object(w.createSelector)($,e=>e)});var se=Object(O.compose)(Object(l.connect)(ne,{fetchData:x.a,search:x.c,sortBy:x.d,resetSearch:x.b}),Object(c.withStyles)(z))(ae);var oe=Object(O.compose)(g)(()=>n.a.createElement(se,null));const le=S(),ce=Object(c.createMuiTheme)({palette:{primary:u.a,secondary:p.a},status:{danger:"orange"}});(e=>{o.a.render(n.a.createElement(l.Provider,{store:le},n.a.createElement(c.MuiThemeProvider,{theme:ce},n.a.createElement(e,null))),document.querySelector(".container"))})(oe)}});