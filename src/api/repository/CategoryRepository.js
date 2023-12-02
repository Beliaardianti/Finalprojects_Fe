import { PROVIDER_GET, PROVIDER_POST } from "../provider"

const delay = () => new Promise(res => setTimeout(() => res(), 800))

export const addCategory = async (data) => {
    const formData = new FormData();
    formData.append('category_product', data.category_product)

    await delay()
    const response = await PROVIDER_POST(`categories`, formData)
    return response
}

export const fetchCategories = async (data) => {
    await delay()
    const response = await PROVIDER_GET(`/categories`)
    return response
}