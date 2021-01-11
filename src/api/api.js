import misc from "./common";

export async function apiPostOrder(data) {
    const url = `/api/order/`
    const response = await misc.post(url, data)
    return response.data
}

