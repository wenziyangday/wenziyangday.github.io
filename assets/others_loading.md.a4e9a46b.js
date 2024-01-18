import{_ as t,o as s,c as l,Q as a}from"./chunks/framework.10dabb5d.js";const E=JSON.parse('{"title":"Loading 加载动画","description":"","frontmatter":{},"headers":[],"relativePath":"others/loading.md","filePath":"others/loading.md"}'),e={name:"others/loading.md"},n=a(`<h1 id="loading-加载动画" tabindex="-1">Loading 加载动画 <a class="header-anchor" href="#loading-加载动画" aria-label="Permalink to &quot;Loading 加载动画&quot;">​</a></h1><p>此组件为一个小动画.</p><h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">mr-loading</span><span style="color:#E1E4E8;">/&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">mr-loading</span><span style="color:#24292E;">/&gt;</span></span></code></pre></div><h3 id="组件使用的多种形态" tabindex="-1">组件使用的多种形态 <a class="header-anchor" href="#组件使用的多种形态" aria-label="Permalink to &quot;组件使用的多种形态&quot;">​</a></h3><ul><li>改变颜色 通过设置<code>color</code>值控制颜色变化</li><li>改变模式 通过设置<code>mode</code>值改变loading的显示状态</li></ul><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">mr-loading</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">color</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;red&quot;</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">mr-loading</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">mode</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;flower&quot;</span><span style="color:#E1E4E8;">/&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">mr-loading</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">color</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;red&quot;</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">mr-loading</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">mode</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;flower&quot;</span><span style="color:#24292E;">/&gt;</span></span></code></pre></div><ul><li>动画尺寸 通过设置<code>size</code>的值改变loading 的大小</li></ul><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">mr-loading</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;100&quot;</span><span style="color:#E1E4E8;">/&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">mr-loading</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">size</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;100&quot;</span><span style="color:#24292E;">/&gt;</span></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;props&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">属性名</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">可选值</th></tr></thead><tbody><tr><td style="text-align:left;">mode</td><td style="text-align:left;">动画的类型</td><td style="text-align:left;">String</td><td style="text-align:left;">circle</td><td style="text-align:left;">flower</td></tr><tr><td style="text-align:left;">color</td><td style="text-align:left;">动画的颜色</td><td style="text-align:left;">String</td><td style="text-align:left;">#c7c7c7</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;">加载图标的大小，单位rpx</td><td style="text-align:left;">String, Number</td><td style="text-align:left;">34</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">show</td><td style="text-align:left;">是否显示动画</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">true</td><td style="text-align:left;"></td></tr></tbody></table>`,12),o=[n];function p(r,i,c,d,y,g){return s(),l("div",null,o)}const u=t(e,[["render",p]]);export{E as __pageData,u as default};
