export interface OrderResponse {
    cursor?: number;
    payload: Order[];
}
export interface Order {
    oid: number;
    type: string;
    product_id: string;
    side: string;
    price: string;
    size: string;
    time_in_force: string;
    filled: string;
    status: string;
    ref: string;
    timestamp: string;
}
export interface OrderCreate {
    product_id: string;
    type: OrderCreateType;
    side: OrderCreateSide;
    price: string;
    size: string;
    time_in_force?: OrderCreateTimeInForce;
}
export interface OrderQueryString {
    cursor?: number;
}
export declare type OrderCreateType = 'LMT' | 'MKT';
export declare type OrderCreateSide = 'buy' | 'sell';
export declare type OrderCreateTimeInForce = 'GTC' | 'IOC' | 'MOC';
