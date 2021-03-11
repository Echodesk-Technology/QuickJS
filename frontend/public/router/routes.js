import Quick from "../../../src/core/instance/quick"
import { QuickRouter, createPopState } from "../../../src/core/qrouter/quick-router";
const router = new QuickRouter;
import Home from "../../../src/views/Home"
import About from "../../../src/views/About"
import Contact from "../../../src/views/Contact"
const  routes = [
    {
        path: '/',
        view: Home
    },
    {
        path: '/about',
        view: About
    },
    {
        path: '/contact',
        view: Contact
    },
    {
        path: '/error',
        view: () => console.log("404 View")
    },
];

Quick.use(router.useRoute(routes));
router.createNavigation(routes)
createPopState(routes)
export default routes