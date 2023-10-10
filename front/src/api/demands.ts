import { get } from "./request.config";

export async function getAllDemands() {
    try {
        const data = await get('/demand');

        return data;
    } catch (err: any) {
        console.error(err);
    };
};