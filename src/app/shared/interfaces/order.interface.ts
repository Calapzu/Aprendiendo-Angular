export interface Details{
    productId: Number;
    productName: String;
    quantity: Number;
}

export interface Order{
    name: String;
    shippingAdress: String;
    city: String;
    date: String;
    isDelivery: Boolean;
    id: Number;
}

export interface DetailsOrder{
    details: Details[]
    orderId: Number;
}