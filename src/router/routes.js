import Quick from "../../src/core/instance/quick"
import { QuickRouter, createPopState } from "../../src/core/qrouter/quick-router";
const router = new QuickRouter;
import App from "../../src/views/App"
import About from "../../src/views/About"
import NotFound from "../../src/views/Notfound"
const  routes = [
    {
        path: '/',
        view: App,
        title: "Home",
        
    },
    {
        path: '/about',
        title: "About",
        view: About
    },
    {
        path: '/error',
        view: NotFound,
        title: "Page Not Found",
    },
];

Quick.use(router.useRoute(routes));
router.createNavigation(routes)
createPopState(routes)
export default routes