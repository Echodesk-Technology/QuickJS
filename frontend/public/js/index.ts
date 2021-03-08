import Quick from "./quick";
import { QuickRouter, QuickRouterLink, useRef }from './quick-router';
const routes = require ("../router/routes");



const router = new QuickRouter();
const routerLink = new QuickRouterLink();
const useref = new useRef();

// console.log(router.getRoute());

Quick.use(router.useRoute(routes));
Quick.use(routerLink)
Quick.use(useref)


