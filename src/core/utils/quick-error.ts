interface ErrorInt {
    message: string,
}


class checkForError extends Error {
    constructor(error?: ErrorInt["message"]) {
        super(error)
        const isError = `
        <h3 style="color: red;">TypeError: ${this.message}</h3>
        <p></p>
        <div class="error-con" style="background-color: #c7e2f1; border: 2px solid #38b6ff; padding: 8px 12px;">
                <div>${this.stack}</div>
        </div>`
        document.getElementById("app").remove();
        document.getElementById("error").innerHTML = isError
        throw new Error(error)
    }
}

export default checkForError