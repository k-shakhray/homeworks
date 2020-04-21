function createNewUser() {
    let newUser = {
        firstName: prompt('Enter your first name:'),
        lastName: prompt('Enter your last name:'),
        birthday: prompt('Enter your birth date:', 'DD/MM/YYYY'),


        getAge() {
            let date = new Date();
            let year = this.birthday.slice(6,10);
            let month = this.birthday.slice(3,5);
            let day = this.birthday.slice(0,2);
            let age = date.getFullYear() - year;

            if (((month - 1) === date.getMonth()) && (date.getDate() < day))
            {
                age--;
            }

            else if ( date.getMonth() < (month - 1))
            {
                age--;
            }

            return age;
        },

        getPassword() {
            return user.getLogin()[0].toUpperCase() + user.getLogin().slice(1) + this.birthday.slice(6,10);
        },


        getLogin() {
            let firstSymbolNick = newUser.firstName.substr(0, 1).toLowerCase();
            let lastNameNick = newUser.lastName.toLowerCase();
            return firstSymbolNick + lastNameNick;
        },


    };
    return newUser;
}


let user = createNewUser();

console.log(user.getLogin());
console.log(user.getAge());
console.log(user.getPassword());
