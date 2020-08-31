let user2: {
    readonly firstName: string,
    readonly age?: number
} = {
    firstName: 'Maxim'
}

user.age = 10; // ?

let keys: keyof typeof user = 1;
let value: (typeof user)['firstName'] = 1;

let hashMap: {[key: string]: typeof user2} = {
    'ddd': user2,
    '000': user2
};

hashMap['ddd'];

let arr: number[] = [1, 2, 3];
let ar2r: ReadonlyArray<number> = [1, 2, 3];

let tumpleArr: readonly [string, number] = ['str', 0];
// tumpleArr.push(null);

const str1 = 'hello world';
let s1: typeof str1 = 'azaza';

let str2 = 'const string' as const;

// let arr2 = [1, 2, 3] as const;

let user3 = {
    firstName: 'Maxim',
    age: 31
} as const;

// user3.age = 33;
