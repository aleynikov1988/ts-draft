// Contracts
interface IPoint3 {
    x: number;
    onInit(): void;
    sum(): number;
}

class Point3 {
    readonly x: number = 10;
    y!: number; // 

    constructor(_x: number, _y: number) {}

    onInit(): void {
        this.y = 10;
        // this.x = 10;
    }

    sum() {
        return (this.x + this.y);
    }
}

class BasePoint3_2 implements IPoint3 {
    constructor(
        public readonly x: number, 
        protected y: number,
        private z: number
    ) {}

    onInit(): void {
        this.y = 10;
        // this.x = 10;
    }

    sum() {
        return (this.x + this.y);
    }
}

class Point3_2 extends BasePoint3_2 {
    #e: number = 10;

    constructor(x: number, y: number, z: number) {
        super(x, y, z);
    }

    public onInit(): void {
        console.log(this.#e); // real private field
        super.onInit();
    }
}

let p3 = new Point3_2(1, 2, 3)
// p3.x

