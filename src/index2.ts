// область декларации virtual = real

interface UserAccount {
    name: string,
    age: number
}

let userAccount = {
    name: "maxim",
    age: 31
};

let acc: UserAccount = userAccount;
let acc2: typeof userAccount = userAccount;

class Point2 {
    public x = 10;
}

let p2: Point2 = new Point2();
