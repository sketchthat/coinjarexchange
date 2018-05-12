export interface User {
    uuid: string;
    email: string;
    username: string;
    client_number: string;
    home_currency: {
        subunit_to_unit: number;
        iso_code: string;
        name: string;
        subunit: string;
        symbol: string;
        symbol_first: boolean;
    };
    current_subscription: {
        uuid: string;
        plan: {
            id: number;
            name: string;
            title: string;
            price: number;
            period: null;
            maker_fee: number;
            taker_fee: number;
        };
        start_date: string;
        end_date: string;
    };
}
export interface UserUpdate {
    home_currency_code: User['home_currency']['iso_code'];
}
