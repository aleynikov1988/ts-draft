let num: number = 1;
num = NaN;
num = 0x0202;
// num = null

let bool: boolean = true;
bool = false;

let str: string = 'hello world';
str = '123'

let nill: null = null;
let und: undefined = undefined;


let bigNum: bigint = 4n;

const key1: unique symbol = Symbol('key1')
const key2: symbol = Symbol('key2')
const key3: symbol = Symbol('key3')

let strictObj = {
    [key1]: 100,
    [key2]: "TS",
    [key3]: "angular",
};

let v1 = strictObj[key1];

/** литеральный тип */
interface AnimationOptions {
    delay: number,
    type: 'ease-in' | 'ease-out'
}

function animate(_options: AnimationOptions) {
    //@todo
}

animate({delay: 3000, type: 'ease-in'});

/** keyof ? */
// let num: keyof AnimationOptions['type'] = 'ease-in';

interface IFact {
    factId: number;
    user: string;
    value: any;
}

const dataList: {action: string, data: IFact}[] = [];

const uniqueValue = (): keyof IFact => {
    return "factId";
};

dataList.map((item) => {
    if (item.data[uniqueValue()] === 2) {
        return {...item};
    }
    return item;
});

enum Actions {
    CREATE = 'CREATE',
    REMOVE = 'REMOVE'
}

let action: keyof typeof Actions = 'CREATE';

let anyType: any = {};
let objType: object = {};
let unkType: unknown = {};
let voidType: void = undefined;


