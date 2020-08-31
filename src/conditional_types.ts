// T extends U ? X : Y

type nonUndefined<T> = T extends undefined ? never : T;
// const val: nonUndefined<string | undefined | number > = true;

const arr2: [() => boolean, () => number | null] = [() => true, () => null];

type FirstElementReturnType<T> = T extends [infer U, ...unknown[]]
    ? U extends (...args: unknown[]) => infer R ? R : never
    : never;


let value2: FirstElementReturnType<typeof arr2> = true;