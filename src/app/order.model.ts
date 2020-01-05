export class Order {
  item: any;
  expense: any;
  instructions: string;
  message: string;
  status: string;
  // tslint:disable-next-line: variable-name
  time_created: any;
  // tslint:disable-next-line: variable-name
  time_delivered: any;
}

export class ItemDetails {
  quantity: number;
  name: string;
}
