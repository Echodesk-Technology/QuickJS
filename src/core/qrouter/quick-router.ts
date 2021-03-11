declare global {
    interface Window {routes: any}
}
import Quick from '../instance/quick'
import QuickError from '../utils/quick-error';


export class QuickRouter {
    async useRoute(routes?: any, url?: any) {
        if (routes.length === 0) {
            new QuickError("routes cannot be empty")
            return false;
        }
        // Check if route matches URL
        const matches = routes.map((route: any) => {
            return {
                route: route,
                isMatch: location.pathname === route.path
            };
        });
        let findMatch: any = matches.find((match: any) => match.isMatch);
        if (!findMatch) {
            findMatch = {
                route: routes.find((route: any) => route.path === "/error"),
                isMatch: true
            };
        }
        const view = new findMatch.route.view();
        Quick.view(await view.render());
        return routes
    };
    getRoute(callback: Function) {
        const from = document.referrer
        const to = location.href
        const next: Function = Function
        callback(to, from, next)

        // const route = [
        //     {
        //         fullPath:  location.href,
        //         pathname:  location.pathname,
        //         params: location.pathname.split('/')[2]
        //     }
        // ]
        return {
            to,
            from
        }
    };
    createNavigation(routes: any) {
        window.addEventListener("click", (e: any) => {
            e.preventDefault();
            if (e.target.localName === "a") {
                history.pushState(null, null, e.target.href);
                QuickRouter.prototype.useRoute(routes)
            }
        })
    }
};






export function createPopState(routes) {
    window.addEventListener("popstate", () => {
        QuickRouter.prototype.useRoute(routes)
    })
}



export class QuickRouterLink extends HTMLElement {
    constructor() {
        super();
        const linkTo = this.getAttribute('to');
        const link: any = document.createElement('a');
        link.href = linkTo;
        link.innerHTML = this.innerHTML
        if (this.getAttribute("ref")) {
            link.id = this.getAttribute("ref");
        }
        if (this.getAttribute("id")) {
            link.id = this.getAttribute("id");
        }
        if(this.getAttribute("download")) {
            link.download = this.getAttribute("download")
        }
        this.parentNode?.insertBefore(link, this);
        const children = Array.prototype.slice.call(this.children);
        if (this.innerHTML === "") {
            link.innerText = this.getAttribute("name")
        }
        // if (this.children) {
        //     children.forEach(child => {
        //         link.appendChild(child)
        //     });
        // };
        this.remove();
    }
}
window.customElements.define('quick-router-link', QuickRouterLink);
Quick.use(QuickRouterLink)
export class useRef {
    constructor() {
        const app = document.getElementById("app")
        const children = Array.prototype.slice.call(app?.children)
        children.forEach(child => {
            if (child.getAttribute("id")) {
                return child
            }
        })
    }
}

