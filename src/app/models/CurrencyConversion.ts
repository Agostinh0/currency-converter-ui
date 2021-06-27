export class CurrencyConversion{
    amount : number;
    from: string;
    to: string

    constructor(amount:number, from:string, to:string){
        this.amount = amount;
        this.from = from;
        this.to = to;
    }
}