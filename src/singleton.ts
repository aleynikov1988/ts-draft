class Singleton {
    private static _instance: Singleton;
    private constructor() {}
    public static get instance(): Singleton {
        if (!Singleton._instance) {
            Singleton._instance = new Singleton();
        }
        return Singleton._instance;
    }
}

let singleton = Singleton.instance;
let singleton2 = Singleton.instance;
let singleton3 = Singleton.instance;

console.log(singleton === singleton2);