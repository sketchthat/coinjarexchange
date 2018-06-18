export interface CursorResponse {
    cursor: number;
    payload: any;
}
export interface Response {
    headers: {
        'x-cjx-cursor': number;
    };
    body: any;
}
