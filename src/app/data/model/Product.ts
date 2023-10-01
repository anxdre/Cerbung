export class Product {
  private _title: string
  private _price: number
  private _discountedPrice?: number
  private _discount?: number
  private _description: string


  constructor(title: string, price: number, description: string) {
    this._title = title;
    this._price = price;
    this._description = description;
  }


  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get discountedPrice(): number {
    if (this._discountedPrice != null){
      return this._discountedPrice
    }
    return 0;
  }

  set discountedPrice(value: number) {
    this._discountedPrice = value;
  }

  get discount(): number {
    if (this._discount != null){
      return this._discount;
    }
    return 0;
  }

  set discount(value: number) {
    this._discount = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }
}
