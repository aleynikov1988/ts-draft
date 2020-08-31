// type, interface, function, classes

type TInfo = {
    salary: number;
}

interface IAccount123<UserInfo extends TInfo & { male: boolean }, UserId = string> {
    id: UserId;
    name: string,
    info: UserInfo
}

let user_0: IAccount123<{ male: boolean, salary: number}> = {
    id: '007',
    name: 'maxim',
    info: {
        male: true,
        salary: 3000
    }
};

// let admin_0: IAccount123<{salary: number, subjects: string[]}, number> = { //?
//     id: 123,
//     name: 'maxim',
//     info: {
//         salary: 3000,
//         subjects: ['TS', 'JS']
//     }
// };

interface IUser {
    name: string;
    age: number;
}

interface IProduct {
    name: string;
    price: number;
}

interface ICartProduct extends IProduct {
    count: number;
}

type TState = {
    user: IUser,
    products: IProduct[],
    cart: ICartProduct[],
};

const state: TState = {
    user: { name: 'maxim', age: 31},
    products: [{ name: 'Nexus 8', price: 199 }],
    cart: [{ name: 'Nexus 8', price: 199, count: 3 }]
};

type Select<State> = <Field extends keyof State>(state: State, field: Field) => State[Field];
const select: Select<TState> = (storeSate, field) => storeSate[field];

const user1: IUser = select(state, 'user');
const products: IProduct[] = select(state, 'products');
const cart: ICartProduct[] = select(state, 'cart');

/** ... */

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
};

const key = 'a';
getProperty({ a: 1 }, key);


