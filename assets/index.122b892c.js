import{t as w,c as H,m as N,r as v,o as x,a as C,w as u,b as p,u as c,n as M,g as E,d as b,e as T,f as j,h as i,i as I,j as P,k as V,l as $,p as O,q as G,s as B,v as D,x as q,B as z,I as U,F as K,T as k,S as Q}from"./vendor.71d799ba.js";import W from"https://esm.sh/copy-to-clipboard";import J from"https://cdn.jsdelivr.net/npm/codemirror/src/codemirror.js";const X=function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?a.credentials="include":e.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=l(e);fetch(e.href,a)}};X();const Y=["innerHTML"],Z={props:{content:String,loading:Boolean},setup(m){const d=m,{content:l,loading:o}=w(d),e=H(()=>N(l.value));return(a,s)=>{const _=v("a-spin");return x(),C(_,{spinning:c(o)},{default:u(()=>[p("div",M(E(a.$attrs)),[p("div",{innerHTML:c(e)},null,8,Y)],16)]),_:1},8,["spinning"])}}};const S={props:{content:{type:String},readonly:{type:Boolean,default:()=>!1},loading:Boolean},emits:["update:content"],setup(m,{emit:d}){const l=m,{content:o,readonly:e,loading:a}=w(l);let s;const _=b(null);T(()=>{s=J.fromTextArea(_.value,{lineNumbers:!0,readonly:!!e}),typeof o.value=="string"&&F(o.value),s.on("change",(y,R)=>{d("update:content",s.doc.getValue())})});function F(y){s.doc.setValue(y)}return(y,R)=>{const n=v("a-spin");return x(),C(n,{spinning:c(a)},{default:u(()=>[p("div",j({class:"my-editor"},y.$attrs),[p("textarea",{ref:(t,r)=>{r.input=t,_.value=t}},null,512)],16)]),_:1},8,["spinning"])}}};const ee={props:{content:String,loading:Boolean},setup(m){const d=m,{content:l,loading:o}=w(d);return(e,a)=>{const s=v("a-tab-pane"),_=v("a-tabs");return x(),C(_,{class:"render"},{default:u(()=>[i(s,{key:"1",tab:"Result"},{default:u(()=>[i(Z,{content:c(l),loading:c(o),class:"markdown",style:{"padding-left":"30px"}},null,8,["content","loading"])]),_:1}),i(s,{key:"2",tab:"Source"},{default:u(()=>[i(S,{content:c(l),loading:c(o),readonly:!0},null,8,["content","loading"])]),_:1})]),_:1})}}},te=`## {{ .Version }} ({{ .Date }})

{{- define "body" -}}
{{range . -}}
- {{if .Field.Header.Scope }}**{{ unescape .Field.Header.Scope }}**: {{ end }}{{ unescape .Field.Header.Subject }}({{ .HashURL }}) (@{{ unescape .Author.Name }}){{if .Field.Footer }} {{if .Field.Footer.Closes }}, Closes: {{ .Field.Footer.Closes }} {{- end }}  {{- end}}
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
- {{if .RevertCommitHash }}revert {{ .RevertCommitHashURL }}, {{ end }}{{ unescape .Field.Header.Subject }}({{ .HashURL }})
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
- {{ .HashURL }} - {{ unescape .Field.Title }}
{{ end }}

{{ end }}
`;var ne="/assets/github.78818959.svg";var ae=(m,d)=>{for(const[l,o]of d)m[l]=o;return m};const oe={style:{position:"relative"}},se={href:"https://github.com/release-lab",target:"_blank",style:{position:"fixed",right:"0",top:"0"}},re=["src"],ie={class:"toolbar"},le=B(" Generate "),ce=B(" Share "),de={class:"container"},ue={class:"left"},pe={style:{display:"flex",height:"100%","padding-left":"10px"}},me={class:"right"},fe={setup(m){const d=b(ne),l=b(!1);let o=b(te);const e=I({repo:"https://github.com/release-lab/whatchanged.git",branch:"master",version:"HEAD~"}),a=w(e);function s(n){G(()=>e[n],t=>{_(n,t)})}function _(n,t){const r=new URL(window.location.href);r.searchParams.has(n)?r.searchParams.set(n,t):r.searchParams.append(n,t),window.history.pushState(null,null,r)}s("branch"),s("repo"),s("version");const F=b("");function y(){const n=encodeURIComponent(o.value);l.value=!0;const t=Math.random()+"";P.info({key:t,message:"Generating",description:"This may take a few minutes..."});const r=new URL("https://whatchanged.herokuapp.com");r.searchParams.append("repo",e.repo||""),r.searchParams.append("branch",e.branch||""),r.searchParams.append("version",e.version||""),r.searchParams.append("template",n||""),fetch(r).then(f=>f.text()).then(f=>{P.close(t),F.value=f}).catch(f=>{P.close(t),P.error({message:"Error",description:f.message})}).finally(()=>{l.value=!1})}function R(){const n=new URL(window.location.href);n.searchParams.append("tpl",o.value),W(n.href),D.info("URL have been copy to clipboard.")}return T(()=>{P.warn({message:"IMPORTANT",description:"Hi \u2764\uFE0F We are useing the free resources for backend and there is a limit to the memory size. so, it may fail to generate for large projects.\b",duration:30});const n=new URL(window.location.href);let t=0;n.searchParams.has("username")&&(e.username=n.searchParams.get("username"),t++),n.searchParams.has("repo")&&(e.repo=n.searchParams.get("repo"),t++),n.searchParams.has("branch")&&(e.repo=n.searchParams.get("branch"),t++),n.searchParams.has("version")&&(e.version=n.searchParams.get("version")),n.searchParams.has("tpl")&&(t++,o.value=n.searchParams.get("tpl")),t===3&&e.username&&e.repo&&y()}),(n,t)=>{const r=v("a-input"),f=v("a-form-item"),L=v("a-button"),A=v("a-form");return x(),V("div",oe,[p("a",se,[p("img",{src:d.value,style:{width:"60px",height:"60px"}},null,8,re)]),p("div",ie,[i(A,{layout:"inline",model:c(a),onSubmit:$(y,["prevent"])},{default:u(()=>[i(f,{label:"Repository",style:{width:"600px"}},{default:u(()=>[i(r,{value:c(a).repo.value,"onUpdate:value":t[0]||(t[0]=g=>c(a).repo.value=g)},null,8,["value"])]),_:1}),i(f,{label:"Branch"},{default:u(()=>[i(r,{value:c(a).branch.value,"onUpdate:value":t[1]||(t[1]=g=>c(a).branch.value=g)},null,8,["value"])]),_:1}),i(f,{label:"Version"},{default:u(()=>[i(r,{value:c(a).version.value,"onUpdate:value":t[2]||(t[2]=g=>c(a).version.value=g)},null,8,["value"])]),_:1}),i(f,null,{default:u(()=>[i(L,{type:"primary","html-type":"submit",loading:l.value},{default:u(()=>[le]),_:1},8,["loading"]),i(L,{type:"default",onClick:R,style:{"margin-left":"20px"}},{default:u(()=>[ce]),_:1})]),_:1})]),_:1},8,["model","onSubmit"])]),p("div",de,[p("div",ue,[p("div",pe,[i(S,{class:"my-editor2",content:c(o),readonly:!0,"onUpdate:content":t[3]||(t[3]=g=>O(o)?o.value=g:o=g)},null,8,["content"])])]),p("div",me,[i(ee,{content:F.value,loading:l.value},null,8,["content","loading"])])])])}}};var he=ae(fe,[["__scopeId","data-v-2c54c900"]]);const h=q(he);h.use(z);h.use(U);h.use(U.TextArea);h.use(K);h.use(k);h.use(k.TabPane);h.use(k.TabContent);h.use(Q);h.mount("#app");
