/** let/const */
let period = 50;
const baseUrl = 'http://maleynikov.xyz';

/** object */
let firstName = 'maxim';
let account = {
    firstName,
    getName() {
        return this.firstName;
    }
};

/** spread */
let person = {...account};
let dates = [...[11,12,13]];

/** destructoring */
let {firstName: myname} = person;
let [firstDate] = dates;

/**template string */
function userMessage([start, end]: TemplateStringsArray, {firstName: name}: typeof person): string {
    return `${start}${name}${end}`
}
console.log(userMessage`Good Day, ${person} !`);

/** for of */
for (let date of dates) {
    console.log(date);
}

/** arrow */
let sum = (a: number, b: number) => a + b;

/** class */
class Point {
    public x = 10;

    sum() {
        return this.x;
    }
}

/** optional chaning */
const user: any = {};
let x = user?.info?.baz();


/** ?? */
let admin;
let p = admin ?? user;
