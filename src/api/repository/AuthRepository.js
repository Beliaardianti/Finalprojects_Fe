import {
  PROVIDER_DELETE,
  PROVIDER_GET,
  PROVIDER_POST,
  PROVIDER_PUT,
} from "../provider";

const delay = () => new Promise((res) => setTimeout(() => res(), 800));

export const login = async (data) => {
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("email", data.email);
  formData.append("password", data.password);

  await delay();
  const response = await PROVIDER_POST(`admins`, formData);
  return response;
};

export const registerAdmin = async (data) => {
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("email", data.email);
  formData.append("password", data.password);

  await delay();
  const response = await PROVIDER_POST(`admins`, formData);
  return response;
};

export const loginAdmin = async (data) => {
  const formData = new FormData();
  formData.append("email", data.email);
  formData.append("password", data.password);

  await delay();
  const response = await PROVIDER_POST(`admins/login`, formData);
  return response;
};

export const fetchAdmin = async () => {
  await delay();
  const response = await PROVIDER_GET(`/admins`);
  return response;
};

export const deleteAdmin = async (id) => {
  await delay();
  const response = await PROVIDER_DELETE(`/admins/${id}`);
  return response;
};

export const fetchAdminById = async (id) => {
  await delay();
  const response = await PROVIDER_GET(`/admins/${id}`);
  return response;
};

export const updateAdmin = async (id, data) => {
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("email", data.email);
  formData.append("password", data.password);

  await delay();
  const response = await PROVIDER_PUT(`/admins/${id}`, formData);
  return response;
};

//======= Local Storage =======

export const saveLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data))
}

export const getLocalStorage = (key) => {
  return localStorage.getItem(key)
}

export const deleteLocalStorage = (key) => {
    localStorage.removeItem(key)
}

export const deleteAllLocalStorage = (key) => {
    localStorage.clear()
}

export const searchAdminNameQuery = async (data) => {
  const formData = new FormData();
  formData.append('query', data.query)

  await delay()
  const response = await PROVIDER_POST(`/search-admin`, formData)
  return response
}


// export const saveDataAdmin = () => {
//     localStorage.
// }