type snb = string | number | boolean;

type acc = {
    name: string,
    age: number
};
let user4: acc;

// interface vs type
interface IPoint {
    x: number;
    y: number;
}

let point: IPoint = {
    x: 1, y: 1
}

type TPoint = {
    x: number;
    y: number;
}

let point2: TPoint = {
    x: 1, y: 1
}

interface ISetPoint {
    new (x: number, y: number): void;
}

type TSetPoint = new (x: number, y: number) => void;

// extends
type PartialPoint = {
    x: number
};

type TPoint2 = PartialPoint & { y: number };


interface IPartialPoint {
    y: number;
}

type TPoint3 = PartialPoint & IPartialPoint;

interface IPoint2 extends PartialPoint, IPartialPoint {}

let p1: IPoint2 = {
    x: 1, y: 1
};

// implements
class BasePoint implements PartialPoint, IPartialPoint {
    public x: number = 1;
    public y: number = 1;
}

type TAccount = {
    name: string;
}

// error
// type TAccount = {
//     age: number;
// }

interface IAccount_2020 {
    name: string;
}

interface IAccount_2020 {
    age: number;
}

class Account implements IAccount_2020 {
    public name: string = 'maxim';
    public age: number = 31;
}


























