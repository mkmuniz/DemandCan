import { get, post } from "./request.config";

export async function getAllStocks() {
    try {
        const data = await get('/stock');

        return data;
    } catch (err: any) {
        console.error(err);
    };
};

export async function createStock(body: any) {
    try {
        const data = await post('/stock', body);

        return data;
    } catch (err: any) {
        console.error(err);
    };
};