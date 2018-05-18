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
    type?: string;
    side: string;
    price: string;
    size: string;
    time_in_force?: string;
}
export interface OrderQueryString {
    cursor?: number;
}