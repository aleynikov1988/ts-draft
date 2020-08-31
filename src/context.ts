// Shimano Deore M615 Shadow Plus 10sp

type TAccount2 = { name: string, surname: string };

function getFullName(this: TAccount2) {
    return `${this.name}${this.surname}`;
}

let account2 = {
    name: 'maxim',
    surname: 'sergeevich',
    getFullName
}

account2.getFullName();

class UIElement {
    addClick(_cb: (this: void, e: Event) => void) {}
}

class Handler {
    info!: string;

    click(this: this, _e: Event) {}
}

const h = new Handler();
const el = new UIElement();

// el.addClick(h.click);

function fn<T extends { name: string, age: number}>(this: T, _key: keyof T): void {}

let account3 = {
    name: 'maxim',
    surname: 'segeevich',
    age: 31,
    getFullName: fn
}

account3.getFullName('age')
