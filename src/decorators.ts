function logEventValue(target: object, key: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    console.log('INIT => ', target, key, descriptor)
    const originFn = descriptor.value;
    return {
        ...descriptor,
        value: (e: Event) => {}
    }
}

class Search {
    constructor(
        private readonly inputElement: HTMLElement
    ) {
        this.inputElement.addEventListener('input', this.onSearch.bind(this));
    }
    @logEventValue
    private onSearch(_e: Event): void {
        // console.log(_e);
    }
}

// const el: HTMLElement = document.querySelector('input') as HTMLElement;
// new Search(el);

function SavePersistence(target: object, key: string): void {
    let val = target[key];
    let localKey = `${target.constructor.name}_${key}`;
    let getter = () => {
        console.log(`GET: ${key} => ${val}`);
        return localStorage.getItem(key);
    }
    let setter = (_val) => {
        localStorage.setItem(localKey, _val);
        val = _val;
    }
    Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    })
}

class UserAccount {
    public firstName: string;

    @SavePersistence
    public lastName!: string;
}

let user_acc = new UserAccount();
console.log(user.lastName);
user.lastName = 'Aleynikov';
