import { PROVIDER_DELETE, PROVIDER_GET, PROVIDER_POST,PROVIDER_PUT } from "../provider"

const delay = () => new Promise(res => setTimeout(() => res(), 800))

export const addSupplier = async (data) => {
    const formData = new FormData();
    formData.append('supplier_name', data.supplier_name)
    formData.append('email', data.email)
    formData.append('no_handphone', data.no_handphone)
    formData.append('address', data.address)

    await delay()
    const response = await PROVIDER_POST(`suppliers`, formData)
    return response
}

export const fetchSupplier = async (data) => {
    await delay()
    const response = await PROVIDER_GET(`/suppliers`)
    return response
}

export const deleteSupplier = async (id) => {
    await delay()
    const response = await PROVIDER_DELETE(`/suppliers/${id}`)
    return response
}

export const fetchSupplierById = async (id) => {
    await delay();
    const response = await PROVIDER_GET(`/suppliers/${id}`);
    return response;
  };
  
export const updateSupplier = async (id, data) => {
    const formData = new FormData();
    formData.append('supplier_name', data.supplier_name)
    formData.append('email', data.email)
    formData.append('no_handphone', data.no_handphone)
    formData.append('address', data.address)
    await delay();
    const response = await PROVIDER_PUT(`/suppliers/${id}`, formData);
    return response;
  };

export const searchSupplierNameQuery = async (data) => {
    const formData = new FormData();
    formData.append('query', data.query)

    await delay()
    const response = await PROVIDER_POST(`/search-suppliers`, formData)
    return response
}
