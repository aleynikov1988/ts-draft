function sleep(ms: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function* getItemsReallyslowly<T>(items: Iterable<T>): AsyncIterableIterator<T> {
    for (const item of items) {
        await sleep(1000);
        yield item;
    }
}

async function speakLikeSloth(items: string[]) {
    for await (const item of getItemsReallyslowly(items)) {
        console.log(item);
    }
}

speakLikeSloth(["one", "two", "three"]);
