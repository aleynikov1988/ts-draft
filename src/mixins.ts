type Constructable = new (...args: any[]) => any;

function Timestamp<BC extends Constructable>(bc: BC) {
    return class extends bc {
        public timestamp = new Date();
    }
}

function Tagged<BC extends Constructable>(bc: BC) {
    return class extends bc {
        public tags = ['TS', 'JS'];
    }
}

class Subject {
    public constructor(
        public readonly teacher: string
    ) {}
}

class User123 extends Timestamp(Tagged(Subject)) {}

let user123: User123;
// user123.tags
// user123.timestamp