interface IList {
    title: string;
    items?: IList[]
}

export const list: IList[] = [
    {
        title: '',
        items: []
    }
];
