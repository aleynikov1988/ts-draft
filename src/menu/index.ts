import { IList } from "./data"

export function genMenu(list: IList[]): string {
    let out: string = '<ul>';

    for (const item of list) {
        const items: IList[] | undefined = item.items;
        out += `<li><a class=${items ? 'title' : ''}>${item.title}</a>`;
        if (items) {
            out += genMenu(items);
        }
    }
}
