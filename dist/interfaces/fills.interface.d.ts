export interface FillResponse {
    cursor?: number;
    payload: Fill[];
}
export interface Fill {
    tid: number;
    oid: number;
    product_id: string;
    price: string;
    size: string;
    value: string;
    side: string;
    liquidity: string;
    estimated_fee: string;
    timestamp: string;
}
export interface FillQueryString {
    cursor?: number;
    product_id?: string;
    oid?: string;
}
