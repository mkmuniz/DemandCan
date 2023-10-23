import { get, post } from "./request.config";

export async function getAllDemands() {
    try {
        const data = await get('/demand');

        return data;
    } catch (err: any) {
        console.error(err);
    };
};

export async function createDemand(body: any) {
    try {
        const data = await post('/demand', body);

        return data;
    } catch (err: any) {
        console.error(err);
    };
};