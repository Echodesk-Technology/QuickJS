<br />
<p align="center">
  <a href="https://echodesktechnology.com">
    <img src="https://res.cloudinary.com/serveryguken/image/upload/v1615188992/QuickJS/logo/quickjs-logo_wjx3dw.svg" width="400" height="200"> 
  </a>
</p>

<br />

<p align="center">
<img alt="Downloads" src="https://img.shields.io/npm/dw/quick-js">
<img alt="GitHub" src="https://img.shields.io/github/license/serverguyken/logsnap">
</p>



<p align="center">
    <!-- <a href="https://logsnap.site">View Demo</a> -->
    ·
    <a href="https://github.com/Echodesk-Technology/QuickJS/issues">Report Bug</a>
    ·
    <a href="https://github.com/Echodesk-Technology/QuickJS/issues">Request Feature</a>
  </p>
</p>



------

Made with <g-emoji class="g-emoji" alias="heart" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png">❤️</g-emoji> from Echodesk Technology


# Introduction

**Quick.js is a JavaScript framework for building user interfaces.**

<h2><a id="user-content--installation" class="anchor" aria-hidden="true" href="#-installation"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a><i></i> Installation</h2>
<div class="highlight highlight-source-shell"><pre>npm install quick-js</pre></div>

<hr>

<h4><a id="user-content--basic" class="anchor" aria-hidden="true" href="#-basic"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a><i></i> Basic</h4>
<body>
  <div id="app"></div>
</body>
<p>Entry</p>

``` html
// index.html
<body>
  <div id="app"></div>
//...
</body>
```


<ul>
<li>App Component:</li>
</ul>

```javascript
import Quick from "quick-js"
import Welcome from "./views/Welcome";


export default class App extends Quick.Component {
    constructor(params) {
        super(params)
    }
    render() {
        return (
            <div>
                <h1>Home with another comp</h1>
                <Welcome name={"Quick.js"} />
            </div>
        )
    }

}
```
<p>Welcome Component:</p>

```javascript
import Quick from "quick-js";

const Welcome = (name) => (
    <p>Welcome to your {name} App</p>
)

export default Welcome
```
# Documentation

**Visit <a href="https://quickjs.org">quickjs.org</a> for docs**

# Contribution


**For now contribution are limited. If you are interested in contributing please make sure to email at <a href="mailto:serverguyken@gmail.com">Email</a>**

# Licence


<a href="https://github.com/Echodesk-Technology/EchodeskTechnology/blob/main/README.md"><h3>MIT</h3></a>

<h3>Copyright (c) 2021-present, Kehinde Akinsanya</h3>