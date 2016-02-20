module app.domain {
    export interface ICat{
        name: string;
        age: number;
        type: string;
    }

    export class Cat implements ICat {
        constructor(
            public name: string,
            public age: number,
            public type: string
        ){}

    }
}

