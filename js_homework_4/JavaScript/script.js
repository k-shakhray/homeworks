
function createNewUser() {
    let newUser = {
        firstName: prompt('Enter your first name:'),
        lastName: prompt('Enter your last name:'),

        getLogin() {
            let firstSymbolNick = this.firstName.substr(0, 1).toLowerCase();
            let lastNameNick = this.lastName.toLowerCase();
            return firstSymbolNick + lastNameNick;
        }
    };
    return newUser;
}

let user = createNewUser();
console.log(user.getLogin());