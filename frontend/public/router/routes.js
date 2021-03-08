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
        path: '/contact',
        view: () => console.log("Contact View")
    },
    {
        path: '/error',
        view: () => console.log("404 View")
    },
];
