import{t as F,c as H,m as N,r as v,o as x,a as C,w as d,b as m,u as l,n as M,g as E,d as b,e as U,f as j,h as r,i as I,j as P,k as V,l as $,p as O,q as G,s as T,v as D,x as q,B as z,I as B,F as K,T as k,S as Q}from"./vendor.71d799ba.js";import J from"https://esm.sh/copy-to-clipboard";import W from"https://cdn.jsdelivr.net/npm/codemirror/src/codemirror.js";const X=function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=c(e);fetch(e.href,n)}};X();const Y=["innerHTML"],Z={props:{content:String,loading:Boolean},setup(h){const u=h,{content:c,loading:o}=F(u),e=H(()=>N(c.value));return(n,i)=>{const g=v("a-spin");return x(),C(g,{spinning:l(o)},{default:d(()=>[m("div",M(E(n.$attrs)),[m("div",{innerHTML:l(e)},null,8,Y)],16)]),_:1},8,["spinning"])}}};const S={props:{content:{type:String},readonly:{type:Boolean,default:()=>!1},loading:Boolean},emits:["update:content"],setup(h,{emit:u}){const c=h,{content:o,readonly:e,loading:n}=F(c);let i;const g=b(null);U(()=>{i=W.fromTextArea(g.value,{lineNumbers:!0,readonly:!!e}),typeof o.value=="string"&&w(o.value),i.on("change",(y,R)=>{u("update:content",i.doc.getValue())})});function w(y){i.doc.setValue(y)}return(y,R)=>{const a=v("a-spin");return x(),C(a,{spinning:l(n)},{default:d(()=>[m("div",j({class:"my-editor"},y.$attrs),[m("textarea",{ref:(t,s)=>{s.input=t,g.value=t}},null,512)],16)]),_:1},8,["spinning"])}}};const ee={props:{content:String,loading:Boolean},setup(h){const u=h,{content:c,loading:o}=F(u);return(e,n)=>{const i=v("a-tab-pane"),g=v("a-tabs");return x(),C(g,{class:"render"},{default:d(()=>[r(i,{key:"1",tab:"Result"},{default:d(()=>[r(Z,{content:l(c),loading:l(o),class:"markdown",style:{"padding-left":"30px"}},null,8,["content","loading"])]),_:1}),r(i,{key:"2",tab:"Source"},{default:d(()=>[r(S,{content:l(c),loading:l(o),readonly:!0},null,8,["content","loading"])]),_:1})]),_:1})}}},te=`## {{ .Version }} ({{ .Date }})

{{- define "body" -}}
{{range . -}}
- {{if .Field.Header.Scope }}**{{ unescape .Field.Header.Scope }}**: {{ end }}{{ unescape .Field.Header.Subject }}({{ hashURL .Hash}}) (thanks @{{ unescape .Author.Name }}){{if .Field.Footer }} {{if .Field.Footer.Closes }}, Closes: {{ stringsJoin .Field.Footer.Closes "," }} {{- end }}  {{- end}}
{{ end }}
{{- end -}}

{{if .Feat}}
### \u{1F525}  New feature:
{{ template "body" .Feat }}
{{ end }}

{{if .Fix}}
### \u{1F41B}  Bugs fixed:
{{ template "body" .Fix }}
{{ end }}

{{if .Perf}}
### \u26A1\uFE0F Performance improves:
{{ template "body" .Perf }}
{{ end }}

{{if .Revert}}
### \u{1F519} Revert:
{{range .Revert -}}
- {{if .RevertCommitHash }}revert {{ hashURL .RevertCommitHash }}, {{ end }}{{ unescape .Field.Header.Subject }}({{ hashURL .Hash}})
{{ end }}
{{ end }}

{{if .BreakingChanges}}
### \u2764\uFE0F BREAKING CHANGES:
{{ range .BreakingChanges -}}

- {{if .Field.Footer.BreakingChange.Title}}{{ unescape .Field.Footer.BreakingChange.Title }}{{ else }}{{ unescape .Field.Title }}{{ end }}

{{ unescape .Field.Footer.BreakingChange.Content }}

{{ end -}}
{{ end }}

{{ $length := len .Commits }}

{{if gt $length 0}}

### \u{1F4AA}  Commits({{ len .Commits }}):
{{range .Commits -}}
- {{ hashURL .Hash}} - {{ unescape .Field.Title }}
{{ end }}

{{ end }}
`;var ne="/whatchanged/assets/github.78818959.svg";var ae=(h,u)=>{for(const[c,o]of u)h[c]=o;return h};const oe={style:{position:"relative"}},se={src:"https://github.com/whatchanged-community/whatchanged",target:"_blank",style:{position:"fixed",right:"0",top:"0"}},re=["src"],ie={class:"toolbar"},le=T(" Generate "),ce=T(" Share "),ue={class:"container"},de={class:"left"},pe={style:{display:"flex",height:"100%","padding-left":"10px"}},me={class:"right"},he={setup(h){const u=b(ne),c=b(!1);let o=b(te);const e=I({username:"axetroy",repo:"whatchanged",branch:"master",version:"HEAD~"}),n=F(e);function i(a){G(()=>e[a],t=>{g(a,t)})}function g(a,t){const s=new URL(window.location.href);s.searchParams.has(a)?s.searchParams.set(a,t):s.searchParams.append(a,t),window.history.pushState(null,null,s)}i("username"),i("branch"),i("repo"),i("version");const w=b("");function y(){const a=encodeURIComponent(o.value);c.value=!0;const t=Math.random()+"";P.info({key:t,message:"Generating",description:"This may take a few minutes..."});const s=new URL("https://whatchanged.herokuapp.com");s.searchParams.append("username",e.username||""),s.searchParams.append("repo",e.repo||""),s.searchParams.append("branch",e.branch||""),s.searchParams.append("version",e.version||""),s.searchParams.append("template",a||""),fetch(s).then(p=>p.text()).then(p=>{P.close(t),w.value=p}).catch(p=>{P.close(t),P.error({message:"Error",description:p.message})}).finally(()=>{c.value=!1})}function R(){const a=new URL(window.location.href);a.searchParams.append("tpl",o.value),J(a.href),D.info("URL have been copy to clipboard.")}return U(()=>{P.warn({message:"IMPORTANT",description:"Hi \u2764\uFE0F We are useing the free resources for backend and there is a limit to the memory size. so, it may fail to generate for large projects.\b",duration:30});const a=new URL(window.location.href);let t=0;a.searchParams.has("username")&&(e.username=a.searchParams.get("username"),t++),a.searchParams.has("repo")&&(e.repo=a.searchParams.get("repo"),t++),a.searchParams.has("branch")&&(e.repo=a.searchParams.get("branch"),t++),a.searchParams.has("version")&&(e.version=a.searchParams.get("version")),a.searchParams.has("tpl")&&(t++,o.value=a.searchParams.get("tpl")),t===3&&e.username&&e.repo&&y()}),(a,t)=>{const s=v("a-input"),p=v("a-form-item"),L=v("a-button"),A=v("a-form");return x(),V("div",oe,[m("a",se,[m("img",{src:u.value,style:{width:"60px",height:"60px"}},null,8,re)]),m("div",ie,[r(A,{layout:"inline",model:l(n),onSubmit:$(y,["prevent"])},{default:d(()=>[r(p,{label:"Username"},{default:d(()=>[r(s,{value:l(n).username.value,"onUpdate:value":t[0]||(t[0]=f=>l(n).username.value=f)},null,8,["value"])]),_:1}),r(p,{label:"Repo"},{default:d(()=>[r(s,{value:l(n).repo.value,"onUpdate:value":t[1]||(t[1]=f=>l(n).repo.value=f)},null,8,["value"])]),_:1}),r(p,{label:"Branch"},{default:d(()=>[r(s,{value:l(n).branch.value,"onUpdate:value":t[2]||(t[2]=f=>l(n).branch.value=f)},null,8,["value"])]),_:1}),r(p,{label:"Version"},{default:d(()=>[r(s,{value:l(n).version.value,"onUpdate:value":t[3]||(t[3]=f=>l(n).version.value=f)},null,8,["value"])]),_:1}),r(p,null,{default:d(()=>[r(L,{type:"primary","html-type":"submit",loading:c.value},{default:d(()=>[le]),_:1},8,["loading"]),r(L,{type:"default",onClick:R,style:{"margin-left":"20px"}},{default:d(()=>[ce]),_:1})]),_:1})]),_:1},8,["model","onSubmit"])]),m("div",ue,[m("div",de,[m("div",pe,[r(S,{class:"my-editor2",content:l(o),readonly:!0,"onUpdate:content":t[4]||(t[4]=f=>O(o)?o.value=f:o=f)},null,8,["content"])])]),m("div",me,[r(ee,{content:w.value,loading:c.value},null,8,["content","loading"])])])])}}};var fe=ae(he,[["__scopeId","data-v-e9141e14"]]);const _=q(fe);_.use(z);_.use(B);_.use(B.TextArea);_.use(K);_.use(k);_.use(k.TabPane);_.use(k.TabContent);_.use(Q);_.mount("#app");
