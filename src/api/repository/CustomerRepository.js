import { PROVIDER_DELETE, PROVIDER_GET, PROVIDER_POST, PROVIDER_PUT } from "../provider"

const delay = () => new Promise(res => setTimeout(() => res(), 800))

export const fetchCustomers = async () => {
    await delay()
    const response = await PROVIDER_GET("customers")
    return response
}

export const deleteCustomer = async (id) => {
    await delay()
    const response = await PROVIDER_DELETE(`/customers/${id}`)
    return response
}

export const addCustomer = async (data) => {
    const formData = new FormData();
    formData.append('customer_name', data.customer_name)
    formData.append('email', data.email)
    formData.append('no_handphone', data.no_handphone)
    formData.append('address', data.address)
    await delay()
    const response = await PROVIDER_POST(`customers`, formData)
    return response
}
export const fetchCustomerById = async (id) => {
    await delay();
    const response = await PROVIDER_GET(`/customers/${id}`);
    return response;
  };
  
export const updateCustomer = async (id, data) => {
    const formData = new FormData();
    formData.append('customer_name', data.customer_name)
    formData.append('email', data.email)
    formData.append('no_handphone', data.no_handphone)
    formData.append('address', data.address)
  
    await delay();
    const response = await PROVIDER_PUT(`/customers/${id}`, formData);
    return response;
  };

export const searchCustomerNameQuery = async (data) => {
    const formData = new FormData();
    formData.append('query', data.query)

    await delay()
    const response = await PROVIDER_POST(`/search-customers`, formData)
    return response
}