import 'reflect-metadata'

function checkType(target: any, key: string): void {
    const { name: type } = Reflect.getMetadata('design:type', target, key);
    let val: any;
    Object.defineProperty(target, key, {
        get() { return val; },
        set(_val: any): void {
            const realType = typeof _val;
            if (realType !== type.toLowerCase()) {
                throw new Error(`type of ${key} is not ${type}`);
            }
            val = _val;
        }
    });
}

class UserAccount2 {
    @checkType
    public firstName!: string;
    public lastName!: string;
}

new UserAccount2();
