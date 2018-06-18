export interface FeeResponse {
    cursor: number;
    payload: Fee[];
}
export interface Fee {
    date: string;
    product_id: string;
    value: string;
    fee_rate: number;
    fee: string;
    liquidity: string;
    currency_code: string;
}
export interface FeeQueryString {
    cursor?: number;
}
