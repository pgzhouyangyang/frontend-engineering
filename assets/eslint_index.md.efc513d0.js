import{_ as n,c as e,o as s,d as a}from"./app.72e1d3fb.js";const h='{"title":"\u4EE3\u7801\u89C4\u8303","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4EE3\u7801\u89C4\u8303","slug":"\u4EE3\u7801\u89C4\u8303"},{"level":3,"title":"ESLint \u4E0E\u7EA6\u675F","slug":"eslint-\u4E0E\u7EA6\u675F"},{"level":3,"title":"eslint-config","slug":"eslint-config"},{"level":3,"title":"\u7B2C\u4E00\u5C42\u7EA6\u675F: IDE","slug":"\u7B2C\u4E00\u5C42\u7EA6\u675F-ide"},{"level":3,"title":"\u7B2C\u4E8C\u5C42\u7EA6\u675F: Git Hooks","slug":"\u7B2C\u4E8C\u5C42\u7EA6\u675F-git-hooks"},{"level":3,"title":"\u7B2C\u4E09\u5C42\u7EA6\u675F: CI","slug":"\u7B2C\u4E09\u5C42\u7EA6\u675F-ci"},{"level":2,"title":"git \u89C4\u8303","slug":"git-\u89C4\u8303"},{"level":3,"title":"\u5206\u652F\u7BA1\u7406\u89C4\u8303","slug":"\u5206\u652F\u7BA1\u7406\u89C4\u8303"},{"level":3,"title":"git commit \u89C4\u8303","slug":"git-commit-\u89C4\u8303"},{"level":3,"title":"type: commit \u7684\u7C7B\u578B","slug":"type-commit-\u7684\u7C7B\u578B"},{"level":3,"title":"\u793A\u4F8B","slug":"\u793A\u4F8B"},{"level":2,"title":"\u5C0F\u7ED3","slug":"\u5C0F\u7ED3"}],"relativePath":"eslint/index.md"}',t={},o=a(`<h2 id="\u4EE3\u7801\u89C4\u8303" tabindex="-1">\u4EE3\u7801\u89C4\u8303 <a class="header-anchor" href="#\u4EE3\u7801\u89C4\u8303" aria-hidden="true">#</a></h2><p>\u4E00\u4E2A\u56E2\u961F\u5E94\u4F7F\u7528\u4E00\u81F4\u7684\u4EE3\u7801\u98CE\u683C\uFF0C\u7EDF\u4E00\u4EE3\u7801\u89C4\u8303\u7684\u597D\u5904\uFF1A</p><p>\u89C4\u8303\u7684\u4EE3\u7801\u53EF\u4EE5\u4FC3\u8FDB\u56E2\u961F\u5408\u4F5C \u89C4\u8303\u7684\u4EE3\u7801\u53EF\u4EE5\u964D\u4F4E\u7EF4\u62A4\u6210\u672C \u89C4\u8303\u7684\u4EE3\u7801\u6709\u52A9\u4E8E code review\uFF08\u4EE3\u7801\u5BA1\u67E5\uFF09 \u517B\u6210\u4EE3\u7801\u89C4\u8303\u7684\u4E60\u60EF\uFF0C\u6709\u52A9\u4E8E\u7A0B\u5E8F\u5458\u81EA\u8EAB\u7684\u6210\u957F</p><p>\u5F53\u56E2\u961F\u7684\u6210\u5458\u90FD\u4E25\u683C\u6309\u7167\u4EE3\u7801\u89C4\u8303\u6765\u5199\u4EE3\u7801\u65F6\uFF0C\u53EF\u4EE5\u4FDD\u8BC1\u6BCF\u4E2A\u4EBA\u7684\u4EE3\u7801\u770B\u8D77\u6765\u90FD\u50CF\u662F\u4E00\u4E2A\u4EBA\u5199\u7684\uFF0C\u770B\u522B\u4EBA\u7684\u4EE3\u7801\u5C31\u50CF\u662F\u5728\u770B\u81EA\u5DF1\u7684\u4EE3\u7801\u3002\u66F4\u91CD\u8981\u7684\u662F\u6211\u4EEC\u80FD\u591F\u8BA4\u8BC6\u5230\u89C4\u8303\u7684\u91CD\u8981\u6027\uFF0C\u5E76\u575A\u6301\u89C4\u8303\u7684\u5F00\u53D1\u4E60\u60EF\u3002</p><h3 id="eslint-\u4E0E\u7EA6\u675F" tabindex="-1">ESLint \u4E0E\u7EA6\u675F <a class="header-anchor" href="#eslint-\u4E0E\u7EA6\u675F" aria-hidden="true">#</a></h3><p>\u7EDF\u4E00\u7F16\u7801\u89C4\u8303\u4E0D\u4EC5\u53EF\u4EE5\u5927\u5E45\u63D0\u9AD8\u4EE3\u7801\u53EF\u8BFB\u6027\uFF0C\u751A\u81F3\u4F1A\u63D0\u9AD8\u4EE3\u7801\u8D28\u91CF\u3002\u5F53\u6211\u4EEC\u8BBE\u8BA1\u4E86\u4E00\u5957\u5173\u4E8E\u7F16\u7801\u89C4\u8303\u7684\u89C4\u5219\u96C6\u65F6\uFF0C\u9700\u8981\u5DE5\u5177\u53BB\u8F85\u52A9\u68C0\u6D4B\uFF0C\u8FD9\u5C31\u662F ESLint\u3002</p><div class="language-js"><pre><code>npm install eslint <span class="token operator">--</span>save<span class="token operator">-</span>dev
</code></pre></div><p>\u89C4\u5219\u96C6\u9700\u8981\u7EDF\u4E00\u96C6\u4E2D\u914D\u7F6E\uFF0CESLint \u4F1A\u9ED8\u8BA4\u8BFB\u53D6\u914D\u7F6E\u6587\u4EF6 .eslintrc.js \u6765\u89E3\u6790\uFF0C\u800C\u89C4\u5219\u96C6\u5728 rules \u4E2D\u8FDB\u884C\u914D\u7F6E\uFF1A</p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;parserOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;ecmaVersion&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;sourceType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;module&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;ecmaFeatures&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;jsx&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;semi&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
         <span class="token string-property property">&quot;linebreak-style&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span> <span class="token punctuation">,</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;windows&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> 
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u800C\u6211\u4EEC\u9700\u8981\u505A\u7684\u662F\u8BBE\u5B9A\u6211\u4EEC\u7684\u4EE3\u7801\u89C4\u8303\uFF0C\u5373 rules \u9879\uFF0C\u5173\u4E8E\u5B83\u7684\u6587\u6863\u53CA\u6700\u4F73\u5B9E\u8DF5\u53C2\u8003\u4E0B\u6587\uFF1A</p><p><a href="https://eslint.org/docs/rules/">ESLint Rules and Best Practices</a></p><h3 id="eslint-config" tabindex="-1">eslint-config <a class="header-anchor" href="#eslint-config" aria-hidden="true">#</a></h3><p>\u6211\u4EEC\u6CA1\u6709\u5FC5\u8981\u8BBE\u8BA1\u7EA6\u675F\u89C4\u5236\uFF0C\u65E2\u8017\u8D39\u4EBA\u529B\uFF0C\u53C8\u96BE\u4EE5\u505A\u5230\u89C4\u5219\u7684\u5168\u90E8\u8986\u76D6\u3002</p><p>\u5F88\u591A\u4F18\u79C0\u7684\u56E2\u961F\uFF0C\u90FD\u6839\u636E\u6700\u4F73\u5B9E\u8DF5\u8BBE\u5B9A\u4E86\u7279\u522B\u4F18\u79C0\u7684\u7F16\u7801\u89C4\u8303\uFF0C\u6BD4\u5982 <code>airbnb</code> \u8BBE\u5B9A\u4E86\u4E00\u5957\u7EA6\u675F\u7279\u522B\u5F3A\u7684\u89C4\u8303\u3002</p><ul><li><a href="https://github.com/airbnb/javascript" target="_blank" rel="noopener noreferrer">airbnb javascript style</a></li></ul><div class="language-js"><pre><code>npm install eslint<span class="token operator">-</span>config<span class="token operator">-</span>airbnb<span class="token operator">-</span>base eslint<span class="token operator">-</span>plugin<span class="token operator">-</span><span class="token keyword">import</span> <span class="token operator">--</span>save<span class="token operator">-</span>dev
</code></pre></div><p>\u53E6\u5916\u4E5F\u6709\u4E00\u4E9B\u7279\u522B\u7B80\u5355\u4F46\u5374\u5341\u5206\u5B9E\u7528\u7684\u89C4\u8303\uFF0C\u5982 <code>eslint:recommended</code>\u3002</p><p>\u6211\u4EEC\u4EC5\u4EC5\u9700\u8981<strong>\u4F7F\u7528 <code>extend</code> \u914D\u7F6E\u9879\u53BB\u7EE7\u627F\u4E00\u4E9B\u4F18\u79C0\u7684\u5F00\u6E90\u7684\u4EE3\u7801\u89C4\u8303\uFF0C\u5E76\u4F7F\u7528 <code>rules</code> \u505A\u4E00\u4E9B\u81EA\u5DF1\u56E2\u961F\u7684\u89C4\u5219\u8865\u5145</strong></p><p>\u5F53\u914D\u7F6E <code>.eslintrc.js</code> \u65F6\uFF0C\u4F7F\u7528 <code>config.extends</code> \u5C06\u4F1A\u7EE7\u627F\u5DF2\u6709\u7684 <code>.eslintrc.js</code> \u914D\u7F6E\u6587\u4EF6\uFF0C\u914D\u7F6E\u65F6\u53EF\u7701\u7565 <code>eslint-config-</code> \u524D\u7F00 (\u4E0E babel \u76F8\u4F3C)\u3002</p><p>\u5982\u4F7F\u7528 <code>airbnb-base</code>\uFF0C\u6211\u4EEC\u5C06\u57FA\u4E8E <code>eslint-config-airbnb-base</code> \u8FD9\u4EFD eslint \u914D\u7F6E\u6587\u4EF6\uFF0C\u518D\u8865\u5145\u81EA\u5DF1\u56E2\u961F\u7684 rules \u8FDB\u884C\u9002\u914D\u3002</p><div class="language-json"><pre><code> module.exports = <span class="token punctuation">{</span>
   
   + extends<span class="token operator">:</span> <span class="token punctuation">[</span>&#39;airbnb-base&#39;<span class="token punctuation">]</span>
    
<span class="token punctuation">}</span>;
</code></pre></div><h3 id="\u7B2C\u4E00\u5C42\u7EA6\u675F-ide" tabindex="-1">\u7B2C\u4E00\u5C42\u7EA6\u675F: IDE <a class="header-anchor" href="#\u7B2C\u4E00\u5C42\u7EA6\u675F-ide" aria-hidden="true">#</a></h3><p>\u5F53\u4E0D\u7B26\u5408\u4EE3\u7801\u89C4\u8303\u7684\u7B2C\u4E00\u65F6\u95F4\uFF0C\u6211\u4EEC\u5C31\u8981\u611F\u77E5\u5230\u5B83\uFF0C\u53CA\u65F6\u53CD\u9988\uFF0C\u5FEB\u901F\u7EA0\u6B63\uFF0C\u6BD4\u76F4\u5230\u6700\u540E\u79EF\u6512\u4E86\u4E00\u5927\u5806\u9519\u8BEF\u8981\u9AD8\u6548\u5F88\u591A\u3002</p><p>\u8FD9\u91CC\u4EE5 <code>VS Code</code> \u4F5C\u4E3A\u793A\u4F8B\uFF0C\u5B83\u53EA\u9700\u8981\u5B89\u88C5\u4E00\u4E2A\u63D2\u4EF6\uFF1A<code>eslint</code>\uFF0C\u4FBF\u53EF\u4EE5\u505A\u5230\u667A\u80FD\u63D0\u793A</p><h3 id="\u7B2C\u4E8C\u5C42\u7EA6\u675F-git-hooks" tabindex="-1">\u7B2C\u4E8C\u5C42\u7EA6\u675F: Git Hooks <a class="header-anchor" href="#\u7B2C\u4E8C\u5C42\u7EA6\u675F-git-hooks" aria-hidden="true">#</a></h3><p>\u56E2\u961F\u5408\u4F5C\u4E2D\u7684\u7F16\u7801\u89C4\u8303\u6709\u4E00\u70B9\u662F\uFF0C\u867D\u7136\u81EA\u5DF1\u6709\u53EF\u80FD\u4E0D\u8212\u670D\uFF0C\u4F46\u662F\u4E0D\u80FD\u8BA9\u522B\u4EBA\u56E0\u4E3A\u81EA\u5DF1\u7684\u4EE3\u7801\u800C\u4E0D\u8212\u670D\u3002</p><p>git \u81EA\u8EAB\u5305\u542B\u8BB8\u591A hooks\uFF0C\u5728 <code>commit</code>\uFF0C<code>push</code> \u7B49 git \u4E8B\u4EF6\u524D\u540E\u89E6\u53D1\u6267\u884C\u3002\u4E0E <code>pre-commit hook</code> \u7ED3\u5408\u53EF\u4EE5\u5E2E\u52A9\u6821\u9A8C Lint\uFF0C\u5982\u679C\u975E\u901A\u8FC7\u4EE3\u7801\u89C4\u8303\u5219\u4E0D\u5141\u8BB8\u63D0\u4EA4\u3002</p><p><a href="https://github.com/typicode/husky" target="_blank" rel="noopener noreferrer">husky</a> \u662F\u4E00\u4E2A\u4F7F <code>git hooks</code> \u53D8\u5F97\u66F4\u7B80\u5355\u7684\u5DE5\u5177\uFF0C\u53EA\u9700\u8981\u914D\u7F6E\u51E0\u884C <code>package.json</code> \u5C31\u53EF\u4EE5\u6109\u5FEB\u7684\u5F00\u59CB\u5DE5\u4F5C\u3002</p><div class="language-"><pre><code>npm install -D husky lint-staged

npx husky install

npx husky add ./.husky/pre-commit &quot;npx lint-staged&quot;
</code></pre></div><div class="language-json"><pre><code><span class="token comment">// package.json</span>
\`\`\` json
<span class="token punctuation">{</span>
  <span class="token property">&quot;lint-staged&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;*.js&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eslint&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4E0D\u8FC7\u505A\u524D\u7AEF\u7684\u90FD\u660E\u767D\uFF0C\u5BA2\u6237\u7AEF\u6821\u9A8C\u662F\u4E0D\u53EF\u4FE1\u7684\uFF0C\u901A\u8FC7\u4E00\u6761\u547D\u4EE4\u5373\u53EF\u7ED5\u8FC7 <code>git hooks</code>\u3002</p><div class="language-bash"><pre><code>$ <span class="token function">git</span> commit -n
</code></pre></div><h3 id="\u7B2C\u4E09\u5C42\u7EA6\u675F-ci" tabindex="-1">\u7B2C\u4E09\u5C42\u7EA6\u675F: CI <a class="header-anchor" href="#\u7B2C\u4E09\u5C42\u7EA6\u675F-ci" aria-hidden="true">#</a></h3><p><code>git hooks</code> \u53EF\u4EE5\u7ED5\u8FC7\uFF0C\u4F46 CI(\u6301\u7EED\u96C6\u6210) \u662F\u7EDD\u5BF9\u7ED5\u4E0D\u8FC7\u7684\uFF0C\u56E0\u4E3A\u5B83\u5728\u670D\u52A1\u7AEF\u6821\u9A8C\u3002\u4F7F\u7528 <code>gitlab CI</code> \u505A\u6301\u7EED\u96C6\u6210\uFF0C\u914D\u7F6E\u6587\u4EF6 <code>.gitlab-ci.yaml</code> \u5982\u4E0B\u6240\u793A</p><div class="language-yaml"><pre><code><span class="token key atrule">lint</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> lint
  <span class="token key atrule">only</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> /^feature\\/.<span class="token important">*$/</span>
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> npm run lint
</code></pre></div><h2 id="git-\u89C4\u8303" tabindex="-1">git \u89C4\u8303 <a class="header-anchor" href="#git-\u89C4\u8303" aria-hidden="true">#</a></h2><p>git \u89C4\u8303\u5305\u62EC\u4E24\u70B9\uFF1A\u5206\u652F\u7BA1\u7406\u89C4\u8303\u3001git commit \u89C4\u8303\u3002</p><h3 id="\u5206\u652F\u7BA1\u7406\u89C4\u8303" tabindex="-1">\u5206\u652F\u7BA1\u7406\u89C4\u8303 <a class="header-anchor" href="#\u5206\u652F\u7BA1\u7406\u89C4\u8303" aria-hidden="true">#</a></h3><ul><li>\u4E00\u822C\u9879\u76EE\u5206\u4E3B\u5206\u652F\uFF08master\uFF09\u548C\u5176\u4ED6\u5206\u652F\u3002</li><li>\u5F53\u6709\u56E2\u961F\u6210\u5458\u8981\u5F00\u53D1\u65B0\u529F\u80FD\u6216\u6539 BUG \u65F6\uFF0C\u5C31\u4ECE master \u5206\u652F\u5F00\u4E00\u4E2A\u65B0\u7684\u5206\u652F\u3002\u4F8B\u5982\u9879\u76EE\u8981\u4ECE\u5BA2\u6237\u7AEF\u6E32\u67D3\u6539\u6210\u670D\u52A1\u7AEF\u6E32\u67D3\uFF0C\u5C31\u5F00\u4E00\u4E2A\u5206\u652F\u53EB ssr\uFF0C\u5F00\u53D1\u5B8C\u4E86\u518D\u5408\u5E76\u56DE master \u5206\u652F\u3002</li><li>\u5982\u679C\u6539\u4E00\u4E2A BUG\uFF0C\u4E5F\u53EF\u4EE5\u4ECE master \u5206\u652F\u5F00\u4E00\u4E2A\u65B0\u5206\u652F\uFF0C\u5E76\u7528 BUG \u53F7\u547D\u540D\u3002</li></ul><h3 id="git-commit-\u89C4\u8303" tabindex="-1">git commit \u89C4\u8303 <a class="header-anchor" href="#git-commit-\u89C4\u8303" aria-hidden="true">#</a></h3><div class="language-"><pre><code>&lt;type&gt;(&lt;scope&gt;): &lt;subject&gt;
&lt;BLANK LINE&gt;
&lt;body&gt;
&lt;BLANK LINE&gt;
&lt;footer&gt;
</code></pre></div><p>\u5927\u81F4\u5206\u4E3A\u4E09\u4E2A\u90E8\u5206(\u4F7F\u7528\u7A7A\u884C\u5206\u5272):</p><ul><li>\u6807\u9898\u884C: \u5FC5\u586B, \u63CF\u8FF0\u4E3B\u8981\u4FEE\u6539\u7C7B\u578B\u548C\u5185\u5BB9</li><li>\u4E3B\u9898\u5185\u5BB9: \u63CF\u8FF0\u4E3A\u4EC0\u4E48\u4FEE\u6539, \u505A\u4E86\u4EC0\u4E48\u6837\u7684\u4FEE\u6539, \u4EE5\u53CA\u5F00\u53D1\u7684\u601D\u8DEF\u7B49\u7B49</li><li>\u9875\u811A\u6CE8\u91CA: \u53EF\u4EE5\u5199\u6CE8\u91CA\uFF0CBUG \u53F7\u94FE\u63A5</li><li>type: commit \u7684\u7C7B\u578B</li></ul><h3 id="type-commit-\u7684\u7C7B\u578B" tabindex="-1">type: commit \u7684\u7C7B\u578B <a class="header-anchor" href="#type-commit-\u7684\u7C7B\u578B" aria-hidden="true">#</a></h3><ul><li>feat: \u65B0\u529F\u80FD\u3001\u65B0\u7279\u6027</li><li>fix: \u4FEE\u6539 bug</li><li>perf: \u66F4\u6539\u4EE3\u7801\uFF0C\u4EE5\u63D0\u9AD8\u6027\u80FD</li><li>refactor: \u4EE3\u7801\u91CD\u6784\uFF08\u91CD\u6784\uFF0C\u5728\u4E0D\u5F71\u54CD\u4EE3\u7801\u5185\u90E8\u884C\u4E3A\u3001\u529F\u80FD\u4E0B\u7684\u4EE3\u7801\u4FEE\u6539\uFF09</li><li>docs: \u6587\u6863\u4FEE\u6539</li><li>style: \u4EE3\u7801\u683C\u5F0F\u4FEE\u6539, \u6CE8\u610F\u4E0D\u662F css \u4FEE\u6539\uFF08\u4F8B\u5982\u5206\u53F7\u4FEE\u6539\uFF09</li><li>test: \u6D4B\u8BD5\u7528\u4F8B\u65B0\u589E\u3001\u4FEE\u6539</li><li>build: \u5F71\u54CD\u9879\u76EE\u6784\u5EFA\u6216\u4F9D\u8D56\u9879\u4FEE\u6539</li><li>revert: \u6062\u590D\u4E0A\u4E00\u6B21\u63D0\u4EA4</li><li>ci: \u6301\u7EED\u96C6\u6210\u76F8\u5173\u6587\u4EF6\u4FEE\u6539</li><li>chore: \u5176\u4ED6\u4FEE\u6539\uFF08\u4E0D\u5728\u4E0A\u8FF0\u7C7B\u578B\u4E2D\u7684\u4FEE\u6539\uFF09</li><li>release: \u53D1\u5E03\u65B0\u7248\u672C</li><li>workflow: \u5DE5\u4F5C\u6D41\u76F8\u5173\u6587\u4EF6\u4FEE\u6539</li></ul><ol><li>scope: commit \u5F71\u54CD\u7684\u8303\u56F4, \u6BD4\u5982: route, component, utils, build...</li><li>subject: commit \u7684\u6982\u8FF0</li><li>body: commit \u5177\u4F53\u4FEE\u6539\u5185\u5BB9, \u53EF\u4EE5\u5206\u4E3A\u591A\u884C.</li><li>footer: \u4E00\u4E9B\u5907\u6CE8, \u901A\u5E38\u662F BREAKING CHANGE \u6216\u4FEE\u590D\u7684 bug \u7684\u94FE\u63A5.</li></ol><h3 id="\u793A\u4F8B" tabindex="-1">\u793A\u4F8B <a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a></h3><p><strong>fix\uFF08\u4FEE\u590DBUG\uFF09</strong></p><p>\u5982\u679C\u4FEE\u590D\u7684\u8FD9\u4E2ABUG\u53EA\u5F71\u54CD\u5F53\u524D\u4FEE\u6539\u7684\u6587\u4EF6\uFF0C\u53EF\u4E0D\u52A0\u8303\u56F4\u3002\u5982\u679C\u5F71\u54CD\u7684\u8303\u56F4\u6BD4\u8F83\u5927\uFF0C\u8981\u52A0\u4E0A\u8303\u56F4\u63CF\u8FF0\u3002 \u4F8B\u5982\u8FD9\u6B21 BUG \u4FEE\u590D\u5F71\u54CD\u5230\u5168\u5C40\uFF0C\u53EF\u4EE5\u52A0\u4E2A global\u3002\u5982\u679C\u5F71\u54CD\u7684\u662F\u67D0\u4E2A\u76EE\u5F55\u6216\u67D0\u4E2A\u529F\u80FD\uFF0C\u53EF\u4EE5\u52A0\u4E0A\u8BE5\u76EE\u5F55\u7684\u8DEF\u5F84\uFF0C\u6216\u8005\u5BF9\u5E94\u7684\u529F\u80FD\u540D\u79F0\u3002</p><div class="language-"><pre><code>// \u793A\u4F8B1
fix(global):\u4FEE\u590Dcheckbox\u4E0D\u80FD\u590D\u9009\u7684\u95EE\u9898
// \u793A\u4F8B2 \u4E0B\u9762\u5706\u62EC\u53F7\u91CC\u7684 common \u4E3A\u901A\u7528\u7BA1\u7406\u7684\u540D\u79F0
fix(common): \u4FEE\u590D\u5B57\u4F53\u8FC7\u5C0F\u7684BUG\uFF0C\u5C06\u901A\u7528\u7BA1\u7406\u4E0B\u6240\u6709\u9875\u9762\u7684\u9ED8\u8BA4\u5B57\u4F53\u5927\u5C0F\u4FEE\u6539\u4E3A 14px
// \u793A\u4F8B3
fix: value.length -&gt; values.length
</code></pre></div><p><strong>feat\uFF08\u6DFB\u52A0\u65B0\u529F\u80FD\u6216\u65B0\u9875\u9762\uFF09</strong></p><div class="language-"><pre><code>feat: \u6DFB\u52A0\u7F51\u7AD9\u4E3B\u9875\u9759\u6001\u9875\u9762

\u8FD9\u662F\u4E00\u4E2A\u793A\u4F8B\uFF0C\u5047\u8BBE\u5BF9\u70B9\u68C0\u4EFB\u52A1\u9759\u6001\u9875\u9762\u8FDB\u884C\u4E86\u4E00\u4E9B\u63CF\u8FF0\u3002
 
\u8FD9\u91CC\u662F\u5907\u6CE8\uFF0C\u53EF\u4EE5\u662F\u653EBUG\u94FE\u63A5\u6216\u8005\u4E00\u4E9B\u91CD\u8981\u6027\u7684\u4E1C\u897F\u3002
</code></pre></div><h2 id="\u5C0F\u7ED3" tabindex="-1">\u5C0F\u7ED3 <a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a></h2><ol><li>\u56E2\u961F\u4E2D\u4EE3\u7801\u89C4\u8303\u7EDF\u4E00\u662F\u6781\u6709\u5FC5\u8981\u7684</li><li>\u4F7F\u7528\u6210\u719F\u7684 eslint config\uFF0C\u5E76\u505A\u7EC6\u8282\u4FEE\u6539</li><li>\u8BBE\u7F6E\u90E8\u5206 eslint rule \u4E3A\u8B66\u544A\uFF0C\u4FDD\u969C\u5F00\u53D1\u4F53\u9A8C\uFF0C\u5E76\u4E14\u5728 <code>pre-commit</code> \u4E0E <code>CI</code> \u4E2D\u628A\u8B66\u544A\u89C6\u4E3A\u4E0D\u901A\u8FC7\uFF0C\u4FDD\u8BC1\u4E25\u683C\u7684\u4EE3\u7801\u89C4\u8303</li><li>\u53EF\u4EE5\u5728 <code>IDE (vscode)</code>\uFF0C<code>git hooks</code>\uFF0C<code>CI</code> \u4E2D\u6DFB\u52A0\u4E09\u5C42\u89C4\u8303\u6821\u9A8C\u62E6\u622A</li><li>\u53EF\u4EE5\u4F7F\u7528 <code>husky</code> \u4E0E <code>lint-staged</code> \u5F88\u65B9\u4FBF\u5730\u505A\u5173\u4E8E lint \u7684 <code>git hooks</code></li><li><code>git hooks</code> \u7684\u89C4\u8303\u6821\u9A8C\u53EF\u4EE5\u901A\u8FC7 <code>git commit -n</code> \u8DF3\u8FC7\uFF0C\u9700\u8981\u5728 CI \u5C42\u7EE7\u7EED\u52A0\u5F3A\u6821\u9A8C</li></ol>`,54),p=[o];function i(l,c,r,d,u,g){return s(),e("div",null,p)}var m=n(t,[["render",i]]);export{h as __pageData,m as default};