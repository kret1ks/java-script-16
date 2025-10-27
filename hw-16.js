// Напиши функцію-конструктор Account, яка створює об'єкт з властивостями login і email. В prototype функції-конструктора добав метод getInfo(), який виводить в консоль значення полів login і email об'єкта який його викликав.


function Account({login, email}){
    this.login = login;
    this.email = email;
}

Account.prototype.getInfo = function () {
    console.log(`login ${this.login}, Email ${this.email}`);
}



console.log(typeof Account.prototype.getInfo); // function

const mango = new Account({
 login: 'Mangozedog',
 email: 'mango@dog.woof',
});

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
 login: 'Poly',
 email: 'poly@mail.com',
});

poly.getInfo(); // Login: Poly, Email: poly@mail.com







// Напиши клас User для створення користувача з наступними властивостями:



// name — рядок
// age — число
// followers — число


// Добав метод getInfo(), який, виводить рядок: User ${ім'я} is ${вік} years old and has ${кількість фоловерів} followers

class User {
    constructor({name, age, followers}){
        this.name = name;
        this.age = age;
        this.followers = followers;
    }
    getInfo(){
    console.log(`User: ${this.name} is ${this.age} yers old and has ${this.followers}`);
}
}



const mangoAccount = new User({
 name: 'Mango',
 age: 2,
 followers: 20,
});

mangoAccount.getInfo(); // User Mango is 2 years old and has 20 followers

const polyAccount = new User({
 name: 'Poly',
 age: 3,    
 followers: 17,
});

polyAccount.getInfo(); // User Poly is 3 years old and has 17 followers