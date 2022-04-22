import{_ as n,c as s,o as a,d as p}from"./app.72e1d3fb.js";const h='{"title":"\u6027\u80FD\u4F18\u5316","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7F51\u7EDC\u5C42\u9762","slug":"\u7F51\u7EDC\u5C42\u9762"},{"level":3,"title":"CDN","slug":"cdn"},{"level":3,"title":"Http\u7F13\u5B58","slug":"http\u7F13\u5B58"},{"level":2,"title":"\u6784\u5EFA\u5DE5\u5177\u4F18\u5316","slug":"\u6784\u5EFA\u5DE5\u5177\u4F18\u5316"},{"level":3,"title":"\u663E\u793A\u6253\u5305\u65F6\u95F4","slug":"\u663E\u793A\u6253\u5305\u65F6\u95F4"},{"level":3,"title":"\u663E\u793Aloader\u6267\u884C\u65F6\u95F4","slug":"\u663E\u793Aloader\u6267\u884C\u65F6\u95F4"},{"level":3,"title":"\u5347\u7EA7\u9879\u76EE\u4F9D\u8D56","slug":"\u5347\u7EA7\u9879\u76EE\u4F9D\u8D56"},{"level":3,"title":"\u66F4\u5FEB\u7684loader: swc-loader","slug":"\u66F4\u5FEB\u7684loader-swc-loader"},{"level":3,"title":"\u591A\u8FDB\u7A0B: thread-loader","slug":"\u591A\u8FDB\u7A0B-thread-loader"},{"level":3,"title":"esbuild","slug":"esbuild"},{"level":2,"title":"\u6E32\u67D3\u5C42\u9762","slug":"\u6E32\u67D3\u5C42\u9762"}],"relativePath":"performance/index.md"}',t={},e=p(`<h1 id="\u6027\u80FD\u4F18\u5316" tabindex="-1">\u6027\u80FD\u4F18\u5316 <a class="header-anchor" href="#\u6027\u80FD\u4F18\u5316" aria-hidden="true">#</a></h1><p>\u8981\u4ECE\u6D4F\u89C8\u5668\u8F93\u5165url\u53D1\u751F\u4E86\u4EC0\u4E48\u8BB2\u8D77\u3002\u3002\u3002</p><h2 id="\u7F51\u7EDC\u5C42\u9762" tabindex="-1">\u7F51\u7EDC\u5C42\u9762 <a class="header-anchor" href="#\u7F51\u7EDC\u5C42\u9762" aria-hidden="true">#</a></h2><h3 id="cdn" tabindex="-1">CDN <a class="header-anchor" href="#cdn" aria-hidden="true">#</a></h3><h3 id="http\u7F13\u5B58" tabindex="-1">Http\u7F13\u5B58 <a class="header-anchor" href="#http\u7F13\u5B58" aria-hidden="true">#</a></h3><h2 id="\u6784\u5EFA\u5DE5\u5177\u4F18\u5316" tabindex="-1">\u6784\u5EFA\u5DE5\u5177\u4F18\u5316 <a class="header-anchor" href="#\u6784\u5EFA\u5DE5\u5177\u4F18\u5316" aria-hidden="true">#</a></h2><p>\u4EE5<a href="https://gitee.com/y_project/RuoYi-Vue" target="_blank" rel="noopener noreferrer">\u82E5\u4F9D</a>\u4E3A\u4F8B\uFF0C\u6539\u9020\u9879\u76EE\u914D\u7F6E\uFF0C\u63D0\u5347\u6784\u5EFA\u901F\u5EA6</p><div class="language-js"><pre><code>git clone https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>gitee<span class="token punctuation">.</span>com<span class="token operator">/</span>y_project<span class="token operator">/</span>RuoYi<span class="token operator">-</span>Vue<span class="token punctuation">.</span>git
</code></pre></div><h3 id="\u663E\u793A\u6253\u5305\u65F6\u95F4" tabindex="-1">\u663E\u793A\u6253\u5305\u65F6\u95F4 <a class="header-anchor" href="#\u663E\u793A\u6253\u5305\u65F6\u95F4" aria-hidden="true">#</a></h3><div class="language-"><pre><code>npm i progress-bar-webpack-plugin chalk -D
const ProgressBarPlugin = require(&#39;progress-bar-webpack-plugin&#39;)
const chalk = require(&#39;chalk&#39;)
plugins: [

     new ProgressBarPlugin({
        format: &#39; build [:bar] &#39; + chalk.green.bold(&#39;:percent&#39;) + &#39; (:elapsed seconds)&#39;,
        clear: false
      }),

]
</code></pre></div><h3 id="\u663E\u793Aloader\u6267\u884C\u65F6\u95F4" tabindex="-1">\u663E\u793Aloader\u6267\u884C\u65F6\u95F4 <a class="header-anchor" href="#\u663E\u793Aloader\u6267\u884C\u65F6\u95F4" aria-hidden="true">#</a></h3><p>\u4F7F\u7528 <a href="https://github.com/stephencookdev/speed-measure-webpack-plugin" target="_blank" rel="noopener noreferrer">speed-measure-webpack-plugin</a>\u53EF\u8BC4\u4F30\u6BCF\u4E2A loader/plugin \u7684\u6267\u884C\u8017\u65F6\u3002</p><div class="language-js"><pre><code>npm install <span class="token operator">-</span><span class="token constant">D</span> speed<span class="token operator">-</span>measure<span class="token operator">-</span>webpack<span class="token operator">-</span>plugin
<span class="token keyword">const</span> SpeedMeasurePlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;speed-measure-webpack-plugin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> smp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SpeedMeasurePlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> webpackConfig <span class="token operator">=</span> smp<span class="token punctuation">.</span><span class="token function">wrap</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">MyPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">MyOtherPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><h3 id="\u5347\u7EA7\u9879\u76EE\u4F9D\u8D56" tabindex="-1">\u5347\u7EA7\u9879\u76EE\u4F9D\u8D56 <a class="header-anchor" href="#\u5347\u7EA7\u9879\u76EE\u4F9D\u8D56" aria-hidden="true">#</a></h3><p>\u5F53\u524D\u82E5\u4F9D\u4F7F\u7528vue-cli4.x\u7248\u672C\uFF0C\u5347\u7EA7\u4E3A5.x\u7248\u672C, 5.x\u7248\u672C\u5185\u7F6Ewebpack5\u6709\u66F4\u597D\u7684\u4F18\u5316\u6548\u679C \u4FEE\u6539<code>package.json</code>\u6587\u4EF6\u5185\u5BB9 \u5347\u7EA7vue-cli</p><div class="language-js"><pre><code>    <span class="token literal-property property">script</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token string-property property">&quot;build:prod&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-cli-service build --no-module&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>

    <span class="token literal-property property">devDependencies</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token operator">-</span><span class="token string">&quot;@vue/cli-plugin-babel&quot;</span><span class="token operator">:</span> <span class="token string">&quot;4.4.6&quot;</span><span class="token punctuation">,</span>
      <span class="token operator">-</span><span class="token string">&quot;@vue/cli-plugin-eslint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;4.4.6&quot;</span><span class="token punctuation">,</span>
      <span class="token operator">-</span><span class="token string">&quot;@vue/cli-service&quot;</span><span class="token operator">:</span> <span class="token string">&quot;4.4.6&quot;</span><span class="token punctuation">,</span>
      
      <span class="token operator">+</span><span class="token string">&quot;@vue/cli-plugin-babel&quot;</span><span class="token operator">:</span> <span class="token string">&quot;~5.0.4&quot;</span><span class="token punctuation">,</span>
      <span class="token operator">+</span><span class="token string">&quot;@vue/cli-plugin-eslint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;~5.0.4&quot;</span><span class="token punctuation">,</span>
      <span class="token operator">+</span><span class="token string">&quot;@vue/cli-service&quot;</span><span class="token operator">:</span> <span class="token string">&quot;~5.0.4&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
   
</code></pre></div><p>webpack5\u53D6\u6D88\u4E86\u5185\u7F6E\u7684node\u5305\uFF0C\u5982path\uFF0Cutil \u9700\u8981\u5B89\u88C5</p><div class="language-js"><pre><code>npm i path<span class="token operator">-</span>browserify util
</code></pre></div><p><strong>\u4FEE\u6539 vue.config.js</strong></p><p>\u5F00\u542Fwebpack\u7F13\u5B58</p><div class="language-"><pre><code> configureWebpack: {
    cache: {
      type: &quot;filesystem&quot;,
    },
 }
</code></pre></div><h3 id="\u66F4\u5FEB\u7684loader-swc-loader" tabindex="-1">\u66F4\u5FEB\u7684loader: swc-loader <a class="header-anchor" href="#\u66F4\u5FEB\u7684loader-swc-loader" aria-hidden="true">#</a></h3><p><a href="https://www.npmjs.com/package/swc-loader" target="_blank" rel="noopener noreferrer">swc-loader</a></p><div class="language-js"><pre><code>npm i <span class="token operator">--</span>save<span class="token operator">-</span>dev @swc<span class="token operator">/</span>core swc<span class="token operator">-</span>loader



 <span class="token keyword">const</span> rule <span class="token operator">=</span> config<span class="token punctuation">.</span>module<span class="token punctuation">.</span><span class="token function">rule</span><span class="token punctuation">(</span><span class="token string">&quot;js&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    rule<span class="token punctuation">.</span>uses<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    rule<span class="token punctuation">.</span>exclude
      <span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(node_modules)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&quot;swc-loader&quot;</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">loader</span><span class="token punctuation">(</span><span class="token string">&quot;swc-loader&quot;</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">options</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">sync</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">sourceMaps</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">parseMap</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">jsc</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">syntax</span><span class="token operator">:</span> <span class="token string">&quot;ecmascript&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">jsx</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">react</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">pragma</span><span class="token operator">:</span> <span class="token string">&quot;vm.$createElement&quot;</span><span class="token punctuation">,</span> <span class="token comment">//&quot;Vue.createElement&quot;,</span>
              <span class="token comment">// pragmaFrag: &quot;Vue.Fragment&quot;, //&quot;Vue.Fragment&quot;,</span>
              <span class="token literal-property property">throwIfNamespace</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
              <span class="token literal-property property">development</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
              <span class="token literal-property property">useBuiltins</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="\u591A\u8FDB\u7A0B-thread-loader" tabindex="-1">\u591A\u8FDB\u7A0B: thread-loader <a class="header-anchor" href="#\u591A\u8FDB\u7A0B-thread-loader" aria-hidden="true">#</a></h3><p><a href="https://github.com/webpack-contrib/thread-loader" target="_blank" rel="noopener noreferrer">thread-loader</a> \u4E3A\u5B98\u65B9\u63A8\u8350\u7684\u5F00\u542F\u591A\u8FDB\u7A0B\u7684 loader\uFF0C\u53EF\u5BF9 babel \u89E3\u6790 AST \u65F6\u5F00\u542F\u591A\u7EBF\u7A0B\u5904\u7406\uFF0C\u63D0\u5347\u7F16\u8BD1\u7684\u6027\u80FD\u3002</p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;thread-loader&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">workers</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token string">&quot;babel-loader&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="esbuild" tabindex="-1">esbuild <a class="header-anchor" href="#esbuild" aria-hidden="true">#</a></h3><p>esbuild \u538B\u7F29\u4EE3\u7801</p><div class="language-js"><pre><code>npm install esbuild esbuild<span class="token operator">-</span>loader

<span class="token keyword">const</span> esbuild <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;esbuild&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> ESBuildMinifyPlugin  <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;esbuild-loader&#39;</span><span class="token punctuation">)</span>

config<span class="token punctuation">.</span>optimization<span class="token punctuation">.</span>minimizers<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">&quot;terser&quot;</span><span class="token punctuation">)</span>
  config
  <span class="token punctuation">.</span>optimization
  <span class="token punctuation">.</span><span class="token function">minimizer</span><span class="token punctuation">(</span><span class="token string">&#39;esbuild&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ESBuildMinifyPlugin<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
    <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;es2015&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">implementation</span><span class="token operator">:</span> esbuild
  <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

</code></pre></div><h2 id="\u6E32\u67D3\u5C42\u9762" tabindex="-1">\u6E32\u67D3\u5C42\u9762 <a class="header-anchor" href="#\u6E32\u67D3\u5C42\u9762" aria-hidden="true">#</a></h2>`,31),o=[e];function c(l,r,u,i,k,d){return a(),s("div",null,o)}var y=n(t,[["render",c]]);export{h as __pageData,y as default};
