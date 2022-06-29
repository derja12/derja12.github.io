const BACKEND_URL = "https://forum2022.codeschool.cloud";

var app = new Vue({
    el: "#app",
    data: {
        page: "",

        emailInput: "",
        fullnameInput: "",
        passwordInput: "",


    },
    methods: {
        // Ask the server: Are we logged in?
        getSession: async function () {
            // Fetch GET - URL/session
            let response = await fetch(`${BACKEND_URL}/session`, {
                credentials: "include"
            });
            if (response.status == 401) {
                // not logged in
                this.page = 'login';
            } else if (response.status == 200) {
                // logged in
                this.page = 'hello';
            }
        },

        // User attempts to login
        postSession: async function () {
            // create a body object that will be sent to the server
            let body = {
                username: this.emailInput,
                password: this.passwordInput
            }
            
            // Fetch POST - URL/session
            let response = await fetch(`${BACKEND_URL}/session`, {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });
            if (response.status == 201) {
                console.log(response);
                this.page = 'hello';
            } else {
                console.log("Failed to login:", response);
            }
        },

        // User attempts to create a new account
        postUser: async function () {

        }
    },
    created: async function () {
        this.getSession();
    }
});