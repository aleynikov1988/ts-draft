type NonReadonly<T> = {
    -readonly [P in keyof T]?: T[P]
};

type User = {
    readonly name: string;
    readonly age: number;
};

let user_0777: NonReadonly<User> = {
    name: 'maxim'
};
user_0777.name = 'asa';


type User2 = {
    readonly name: string;
    readonly age: number;
    info: {
        male: boolean,
        salary: number
    }
};

type RemoveByType<T, E> = {
    [P in keyof T]: E extends T[P] ? never : P
}[keyof T];

// let u: RemoveByType<User2, string> = true;
