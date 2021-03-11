import Quick from "../../../src/core/instance/quick";
import { QuickRouter } from '../../../src/core/qrouter/quick-router';
const routes = require("../router/routes");
const router = new QuickRouter();
// router.getRoute((to: any,from: any,next: any) => {
//     console.log(to,from)
//     next()
// });
// const HelloComponent = ({
//     data: function() {
//         return {
//             heading: 'Test',
//             count: 0
//         }
//     },
//     methods: {
//         increment(data: any) {
//             console.log(data);
//         },
//         test() {
//         }
//     },
// })
// Quick.render(HelloComponent)
const state = Quick.reactive({
    count: 1,
    name: "Kenny"
});
Quick.use(router.useRoute(routes));
