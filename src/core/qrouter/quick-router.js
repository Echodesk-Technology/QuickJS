"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRef = exports.QuickRouterLink = exports.createPopState = exports.QuickRouter = void 0;
const quick_1 = require("../instance/quick");
const quick_error_1 = require("../utils/quick-error");
const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");
const getParams = match => {
    if (match.result === undefined) {
        new quick_error_1.default("missing required params");
    }
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);
    return Object.entries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};
class QuickRouter {
    async useRoute(routes, url) {
        if (routes.length === 0) {
            new quick_error_1.default("routes cannot be empty");
            return false;
        }
        // Check if route matches URL
        const matches = routes.map((route) => {
            return {
                route: route,
                result: location.pathname.match(pathToRegex(route.path))
            };
        });
        let findMatch = matches.find((match) => match.result !== null);
        if (!findMatch) {
            findMatch = {
                route: routes.find((route) => route.path === "/error"),
                result: [location.pathname]
            };
            const view = new findMatch.route.view(getParams(findMatch));
            quick_1.default.view(await view.render());
        }
        const view = new findMatch.route.view(getParams(findMatch));
        quick_1.default.view(await view.render());
        this.setTitle(findMatch.route.title);
        return routes;
    }
    ;
    getRoute(callback) {
        const from = document.referrer;
        const to = location.href;
        const next = Function;
        const route = [
            {
                fullPath: location.href,
                pathname: location.pathname,
                params: location.pathname.split('/')
            }
        ];
        callback(route);
        return {
            to,
            from, route
        };
    }
    ;
    createNavigation(routes) {
        window.addEventListener("click", (e) => {
            e.preventDefault();
            if (e.target.localName === "a") {
                history.pushState(null, null, e.target.href);
                QuickRouter.prototype.useRoute(routes);
            }
        });
    }
    setTitle(title) {
        if (title === undefined) {
            document.title = "Quick App";
        }
        else {
            document.title = title;
        }
    }
}
exports.QuickRouter = QuickRouter;
;
function createPopState(routes) {
    window.addEventListener("popstate", () => {
        console.log("gg");
        QuickRouter.prototype.useRoute(routes);
    });
}
exports.createPopState = createPopState;
class QuickRouterLink extends HTMLElement {
    constructor() {
        super();
        const linkTo = this.getAttribute('to');
        if (!linkTo) {
            new quick_error_1.default(`to attribute must be specified to route, quick-link returned ${linkTo}`);
        }
        const link = document.createElement('a');
        link.href = linkTo;
        link.innerHTML = this.innerHTML;
        if (this.getAttribute("ref")) {
            link.id = this.getAttribute("ref");
        }
        if (this.getAttribute("id")) {
            link.id = this.getAttribute("id");
        }
        if (this.getAttribute("download")) {
            link.download = this.getAttribute("download");
        }
        this.parentNode?.insertBefore(link, this);
        const children = Array.prototype.slice.call(this.children);
        if (this.innerHTML === "") {
            link.innerText = this.getAttribute("name");
        }
        // if (this.children) {
        //     children.forEach(child => {
        //         link.appendChild(child)
        //     });
        // };
        this.remove();
    }
}
exports.QuickRouterLink = QuickRouterLink;
window.customElements.define('quick-router-link', QuickRouterLink);
quick_1.default.use(QuickRouterLink);
class useRef {
    constructor() {
        const app = document.getElementById("app");
        const children = Array.prototype.slice.call(app?.children);
        children.forEach(child => {
            if (child.getAttribute("id")) {
                return child;
            }
        });
    }
}
exports.useRef = useRef;
