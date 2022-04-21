import{_ as n,c as a,o as s,d as e}from"./app.0b28366a.js";const h='{"title":"\u90E8\u7F72","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B89\u88C5 gitlab-runner","slug":"\u5B89\u88C5-gitlab-runner"},{"level":2,"title":"\u6CE8\u518C","slug":"\u6CE8\u518C"},{"level":2,"title":"\u8FD0\u884C","slug":"\u8FD0\u884C"},{"level":2,"title":"\u914D\u7F6E gitlab-ci.yml","slug":"\u914D\u7F6E-gitlab-ci-yml"}],"relativePath":"deploy/index.md"}',t={},l=e(`<h1 id="\u90E8\u7F72" tabindex="-1">\u90E8\u7F72 <a class="header-anchor" href="#\u90E8\u7F72" aria-hidden="true">#</a></h1><h2 id="\u5B89\u88C5-gitlab-runner" tabindex="-1">\u5B89\u88C5 gitlab-runner <a class="header-anchor" href="#\u5B89\u88C5-gitlab-runner" aria-hidden="true">#</a></h2><p>\u4E0B\u8F7D</p><div class="language-"><pre><code>sudo wget -O /usr/local/bin/gitlab-runner https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-linux-arm
</code></pre></div><p>\u4E0B\u8F7D\u5B8C\u4E4B\u540E\uFF0C\u9700\u8981\u7ED9 gitlab-runner \u6267\u884C\u6743\u9650</p><div class="language-"><pre><code>sudo chmod +x /usr/local/bin/gitlab-runner
</code></pre></div><p>\u4E4B\u540E\u521B\u5EFA\u4E00\u4E2A gitlab-runner \u7528\u6237\uFF0C\u4E4B\u540E\u4F7F\u7528 CI/CD \u65F6\uFF0C\u90FD\u662F\u5728\u8FD9\u4E2A\u7528\u6237\u4E0B\u8FDB\u884C\u7684</p><div class="language-"><pre><code>sudo useradd --comment &#39;GitLab Runner&#39; --create-home gitlab-runner --shell /bin/bash
</code></pre></div><p>\u521B\u5EFA\u597D\u4E86\u7528\u6237\u4E4B\u540E\uFF0C\u63A5\u4E0B\u6765\u5B89\u88C5 gitlab-runner</p><div class="language-"><pre><code>sudo gitlab-runner install --user=gitlab-runner --working-directory=/home/gitlab-runner
</code></pre></div><h2 id="\u6CE8\u518C" tabindex="-1">\u6CE8\u518C <a class="header-anchor" href="#\u6CE8\u518C" aria-hidden="true">#</a></h2><p>\u9996\u5148\u627E\u5230\u81EA\u5DF1\u7684 gitlab \u9879\u76EE\u4E0B\u8BBE\u7F6E\uFF0CCI/CD\uFF0CRunner, \u627E\u5230 url \u548C token \u6267\u884C</p><div class="language-"><pre><code>gitlab-runner register
</code></pre></div><h2 id="\u8FD0\u884C" tabindex="-1">\u8FD0\u884C <a class="header-anchor" href="#\u8FD0\u884C" aria-hidden="true">#</a></h2><div class="language-"><pre><code>gitlab-runner start
</code></pre></div><h2 id="\u914D\u7F6E-gitlab-ci-yml" tabindex="-1">\u914D\u7F6E gitlab-ci.yml <a class="header-anchor" href="#\u914D\u7F6E-gitlab-ci-yml" aria-hidden="true">#</a></h2><div class="language-yaml"><pre><code><span class="token key atrule">stages</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> init
  <span class="token punctuation">-</span> lint
  <span class="token punctuation">-</span> build
  <span class="token punctuation">-</span> deploy
<span class="token key atrule">init</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> init
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> npm install
<span class="token key atrule">lint</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> lint
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> npm run lint
<span class="token key atrule">build</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> build
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> npm run build
<span class="token key atrule">deploy</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> deploy
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> rm <span class="token punctuation">-</span>rf /home/hl/front/das
    <span class="token punctuation">-</span> cp <span class="token punctuation">-</span>r dist /home/hl/front/das
</code></pre></div>`,17),p=[l];function i(r,c,o,u,d,k){return s(),a("div",null,p)}var b=n(t,[["render",i]]);export{h as __pageData,b as default};
