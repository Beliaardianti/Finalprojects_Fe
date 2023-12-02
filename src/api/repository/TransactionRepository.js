import { PROVIDER_GET, PROVIDER_POST, PROVIDER_DELETE } from "../provider"
import { getLocalStorage } from "api/repository/AuthRepository";

const delay = () => new Promise(res => setTimeout(() => res(), 800))

export const addTransaction = async (data) => {
    const formData = new FormData();
    
    formData.append('id_inventory', data.id_inventory)
    formData.append('id_admin',JSON.parse( getLocalStorage("adminData")).adminId)
    formData.append('id_supplier', data.id_supplier)
    formData.append('id_customer', data.id_customer)
    formData.append('qty', data.qty)
    formData.append('in_out', 1)

    await delay()
    const response = await PROVIDER_POST(`transactions`, formData)
    return response
}

export const fetchTransactions = async () => {
    await delay()
    const response = await PROVIDER_GET(`/transactions`)
    return response
}

export const deleteTransaction = async (id) => {
    await delay()
    const response = await PROVIDER_DELETE(`/transactions/${id}`)
    return response
}

