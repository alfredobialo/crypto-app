import {Observable, EMPTY} from 'rxjs';

export interface IBuyerTransaction {
  item: string;
  amount: number;
  qty: number;
}


export abstract class Person {
  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  private _firstName!: string;
  private _lastName!: string;
  private _id!: string;


  public getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

export class Customer extends Person implements IBuyer {
  buyItems(salesOrder: ISalesOrder): Observable<ISalesOrderResponse> {
    let items: ISalesOrderItems[] = [
      {
        productInfo: {
          id: 'prod-001', name: 'Samsung Galaxy S21 PRO',
          costPrice: 345000, sellingPrice: 450000, availableStock: 4, isServiceItem: false
        },
        amount: 452000,
        qty: 1,
        discount: {
          description: 'Discount for Promo Season',
          id: 'promo-2021', isPercentage: true, value: 1.2
        }
      }
    ];
    let orderInfo: ISalesOrderInfo = {
      customerName: this.getFullName(),
      customerId: this.id,
      invoiceNo: 'INV-0001',
      items: items
    };
    salesOrder.createOrder(orderInfo);
    return EMPTY;
  }

}

interface ISalesTax {
  isInclusive: boolean;
  value: number;
  description?: string;
  id: string;
}

interface ISalesDiscount {
  isPercentage: boolean;
  value: number;
  description?: string;
  id: string;
}

interface IProductInfo {
  id: string;
  description?: string;
  name: string;
  sellingPrice: number;
  costPrice: number;
  availableStock: number;
  isServiceItem: boolean;
}

interface ISalesOrderItems {
  productInfo: IProductInfo;
  qty: number,
  amount: number;
  discount?: ISalesDiscount,
  tax?: ISalesTax,
  note?: string
}

interface ISalesOrderInfo {
  customerName: string;
  customerId: string;
  invoiceNo: string,
  items: ISalesOrderItems[]
}

export interface ISalesOrder {
  createOrder: (orderInfo: ISalesOrderInfo) => void;
}

interface ISalesOrderResponse {
  success: boolean;
  message?: string;
  validationError?: { id: string, value: string }[];
}

export interface IBuyer {
  buyItems(salesOrder: ISalesOrder): Observable<ISalesOrderResponse>;
}

