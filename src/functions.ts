function avg(a: number, b: number, c: number): string {
    const _avg: number = (a + b + b) / 3;

    return `Avg is ${_avg}`;
}

function avg2(a: number, b?: number, c?: number): string {
    if (b === undefined) {
        b = 0;
    }

    if (c === undefined) {
        c = 0;
    }

    const _avg: number = (a + b + b) / 3;

    return `Avg is ${_avg}`;
}

function avg3(a: number, b: number = 0, c: number = 0): string {
    const _avg: number = (a + b + b) / 3;

    return `Avg is ${_avg}`;
}

function avg4(...args: number[]): string {
    let total: number = 0;

    for (const arg of args) {
        total += arg;
    }

    const _avg: number = total / args.length;

    return `Avg is ${_avg}`;
}

type sn = string | number;

function isString(item: sn): item is string {
    return typeof item === 'string';
}

function avg5(...args: sn[]): string {
    let total: number = 0;

    for (const arg of args) {
        if (typeof arg === 'string') { // страж типа ?
            total += Number(arg);
        } else {
            total += arg;
        }
    }

    const _avg: number = total / args.length;

    return `Avg is ${_avg}`;
}

// avg(1);
// avg(1, 2);
// avg(1, 2, 3);
// const _avg: number = avg(1, 2, 3);










