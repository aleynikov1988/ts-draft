abstract class Control<T> {
    public abstract model: T;
    public abstract getVal(): T;
    public onFocus() {}
    public onBlur() {}
}

class DropDown extends Control<{ name: string, value: string}> {
    public model = { name: '', value: '' };
    public getVal() {
        return this.model;
    }
}
