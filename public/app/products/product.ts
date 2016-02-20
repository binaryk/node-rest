module app.domain {
    export interface IProduct{
        productId: number;
        productName: string;
        productCode: string;
        releaseDate: Date;
        description: string;
        price: number;
        imageUrl: string;
        //calculateDiscount(precent : number) : number;
    }

    export class Product implements IProduct {
        constructor(
        public productId: number,
        public productName: string,
        public productCode: string,
        public releaseDate: Date,
        public price: number,
        public description: string,
        public imageUrl: string
        ){}

        calculateDiscount(precent : number) {
            return this.price - (this.price * precent / 100);
        }
    }
}

