declare global {
    interface Window { routes: any }
}
import Quick from '../instance/quick'
import QuickError from '../utils/quick-error';

const pathToRegex = (path: any )=> new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");
const getParams = (match: any )=> {
    if(match.result === undefined) {
        new QuickError("missing required params")
    }
    const values = match.result.slice(1)
    
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map((result: any) => result[1]);
    return Object.entries(keys.map((key, i) => {
        return [key, values[i]]
    }))
}
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
                result: location.pathname.match(pathToRegex(route.path))
            };
        });
        let findMatch: any = matches.find((match: any) => match.result !== null);
        if (!findMatch) {
            findMatch = {
                route: routes.find((route: any) => route.path === "/error"),
                result: [location.pathname]
            };
            const view = new findMatch.route.view(getParams(findMatch));
            Quick.view(await view.render());
        }
        
        const view = new findMatch.route.view(getParams(findMatch));
        Quick.view(await view.render());
        this.setTitle(findMatch.route.title)
        return routes
    };
    getRoute(callback: Function) {
        const from = document.referrer
        const to = location.href
        const next: Function = Function
        

        const route = [
            {
                fullPath:  location.href,
                pathname:  location.pathname,
                params: location.pathname.split('/')
            }
        ]
        callback(route)
        return {
            to,
            from,route
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
    setTitle(title: any) {
        if(title === undefined) {
            document.title = "Quick App"
        }
        else {
            document.title = title
        }
        
    }
};






export function createPopState(routes : any) {
    window.addEventListener("popstate", () => {
        QuickRouter.prototype.useRoute(routes)
    })
}



export class QuickRouterLink extends HTMLElement {
    constructor() {
        super();
        
        const t: any = this
        // t.attributes.forEach(attr => {
        //     console.log(attr);
            
        // })
        const linkTo = this.getAttribute('to');
        if (!linkTo) {
            new QuickError(`to attribute must be specified to route, quick-link returned ${linkTo}`)
        }
        const customTag: any = document.createElement('a');
        customTag.href = linkTo;
        
        customTag.innerHTML = this.innerHTML
        if (this.getAttribute("ref")) {
            customTag.id = this.getAttribute("ref");
        }
        if (this.getAttribute("id")) {
            customTag.id = this.getAttribute("id");
        }
        
        this.parentNode?.insertBefore(customTag, this);
        const children = Array.prototype.slice.call(this.children);
        if (this.innerHTML === "") {
            customTag.innerText = this.getAttribute("name")
        }
        
        for (var i = 0; i < this.attributes.length; i++) {
            const attribI = this.attributes[i];
            for (var a = 0; a < this.attributes.length; a++) {
                const attribA = this.attributes[i];
                if(attribI.name === "to") {}
               else {
                customTag.setAttribute(`${attribI.name}`, `${attribI.value}`)
               }
            }
        }
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