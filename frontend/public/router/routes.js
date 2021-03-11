module.exports =   routes = [
    {
        path: '/',
        view: () => console.log("Home View")
    },
    {
        path: '/about',
        view: () => console.log("About View")
    },
    {
        path: '/features',
        view: () => console.log("Features View")
    },
    {
        path: '/services',
        view: () => console.log("Services View")
    },
    {
        path: '/contact',
        view: () => console.log("Contact View")
    },
    {
        path: '/error',
        view: () => console.log("404 View")
    },
];
