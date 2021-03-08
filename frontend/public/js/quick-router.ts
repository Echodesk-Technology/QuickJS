export class QuickRouter {
    useRoute(routes?: any) {
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
        console.log(findMatch.route.view());
        return routes
    };
    getRoute() {
        console.log(location);
        
        const route = [
            {
                fullPath:  location.href,
                pathname:  location.pathname,
                params: location.pathname.split('/')[2]
            }
        ]
       return route
    }
};




export class QuickRouterLink extends HTMLElement {
    constructor() {
        super();
        const linkTo = this.getAttribute('to');
        const link: any = document.createElement('a');
        link.href = linkTo;
        if (this.getAttribute("ref")) {
            link.id = this.getAttribute("ref");
        }
        this.parentNode?.insertBefore(link, this);
        const children = Array.prototype.slice.call(this.children);
        if (this.children) {
            children.forEach(child => {
                link.appendChild(child);
                link.innerText === child.innerText
            });
        };

        if (children.length === 0) {
            link.innerText = this.getAttribute("name");
        };
        this.remove();
    }
}
window.customElements.define('quick-router-link', QuickRouterLink);

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