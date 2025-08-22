class Users {
    constructor() {
        this.init();
    }

    init() {
        document.querySelector("#send").addEventListener("click", async (event) => {
            event.preventDefault();
            const name = document.querySelector("#name").value;
            const email = document.querySelector("#email").value;
            const password = document.querySelector("#password").value;

            await this.postUser(name, email, password);

            const users = await this.getUsers();

            this.showUsers(users);
        })
    }


    async postUser(name, email, password) {
        let data = {
            nome: name,
            email: email,
            senha: password
        }
        let response = await fetch("http://localhost:3000/user", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        });
        return await response.json();
    }

    showUsers(datas = []) {

        let table =
            datas.map(user =>
                `
                    <tr>
                        <td>${user.nome}</td>
                        <td>${user.email}</td>
                        <td>${user.senha}</td>
                    </tr>
                `
        ).join("");

        document.querySelector("#table").innerHTML = table;
    }


    async getUsers() {
        let response = await fetch("http://localhost:3000/users");
        let data = await response.json();
        return data;
    }


}