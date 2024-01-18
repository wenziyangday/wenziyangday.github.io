import{_ as s,o as a,c as l,Q as n}from"./chunks/framework.10dabb5d.js";const u=JSON.parse('{"title":"组件库安装","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"guide/install.md","filePath":"guide/install.md"}'),p={name:"guide/install.md"},e=n('<h1 id="组件库安装" tabindex="-1">组件库安装 <a class="header-anchor" href="#组件库安装" aria-label="Permalink to &quot;组件库安装&quot;">​</a></h1><h3 id="npm安装-组件依赖" tabindex="-1">npm安装 组件依赖 <a class="header-anchor" href="#npm安装-组件依赖" aria-label="Permalink to &quot;npm安装 组件依赖&quot;">​</a></h3><ul><li>使用 npm 的方式安装 (私有仓需要使用registry)</li><li><ul><li>在项目根目录执行如下命令即可：</li></ul></li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mr-ui</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-s</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--registry</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">http://192.168.11.190:4873/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mr-ui</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-s</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--registry</span><span style="color:#24292E;"> </span><span style="color:#032F62;">http://192.168.11.190:4873/</span></span></code></pre></div><ul><li>如果根目录没有package.json文件的话，请先执行如下命令：</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-y</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-y</span></span></code></pre></div><ul><li>更新组件库</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">update</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mr-ui</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--registry</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">http://192.168.11.190:4873/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;"> </span><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">update</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mr-ui</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--registry</span><span style="color:#24292E;"> </span><span style="color:#032F62;">http://192.168.11.190:4873/</span></span></code></pre></div>',8),o=[e];function t(c,r,i,y,d,E){return a(),l("div",null,o)}const F=s(p,[["render",t]]);export{u as __pageData,F as default};
