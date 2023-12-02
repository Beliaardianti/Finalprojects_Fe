import { PROVIDER_DELETE, PROVIDER_GET, PROVIDER_POST,PROVIDER_PUT } from "../provider"

const delay = () => new Promise(res => setTimeout(() => res(), 800))

export const fetchInventory = async () => {
    await delay()
    const response = await PROVIDER_GET("inventories")
    return response
}

export const addInventory = async (data) => {
    const formData = new FormData();
    formData.append('id_category', data.id_category)
    formData.append('product_name', data.product_name)
    formData.append('stock', data.stock)

    await delay()
    const response = await PROVIDER_POST(`inventories`, formData)
    return response
}

export const deleteInventory = async (id) => {
    await delay()
    const response = await PROVIDER_DELETE(`/inventories/${id}`)
    return response
}

export const fetchInventoryById = async (id) => {
    await delay();
    const response = await PROVIDER_GET(`/inventories/${id}`);
    return response;
  };
  
export const updateInventory  = async (id, data) => {
    const formData = new FormData();
    formData.append('id_category', data.category)
    formData.append('product_name', data.product_name)
    formData.append('stock', data.stock)
    await delay();
    const response = await PROVIDER_PUT(`/inventories/${id}`, formData);
    return response;
  };

export const searchInventoryNameQuery = async (data) => {
    const formData = new FormData();
    formData.append('query', data.query)

    await delay()
    const response = await PROVIDER_POST(`/search-inventories`, formData)
    return response
}

