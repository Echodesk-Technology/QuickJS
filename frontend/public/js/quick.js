class Quick {
    use(func) {
        document.addEventListener("DOMContentLoaded", () => {
            func;
        });
    }
}
export default new Quick();
