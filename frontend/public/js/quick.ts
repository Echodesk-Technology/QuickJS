class Quick {
    use(func: any) {
        document.addEventListener("DOMContentLoaded", () => {
            func
        })
    }
}

export default new Quick()