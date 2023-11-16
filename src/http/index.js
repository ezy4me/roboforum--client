import axios from 'axios'

const defaultConfig = {
    baseURL: import.meta.env.VITE_APP_API_URL,
    headers: {
        'Content-Type': 'application/json'
    },
}

export const DefaultAPIInstance = axios.create(defaultConfig)

const loginConfig = {
    baseURL: import.meta.env.VITE_APP_API_URL,
    headers: {
        'Content-Type': 'application/json'
    },
    credentials: 'include'
}

export const LoginAPIInstance = axios.create(loginConfig)

const formDataConfig = {
    baseURL: import.meta.env.VITE_APP_API_URL,
    headers: {
        'Content-Type': 'multipart/form-data'
    }
}


export const FormDataAPIInstance = axios.create(formDataConfig)

