import apiClient from "./config"

export const api = {
    // Примеры методов API
    get: (url, params) =>
        apiClient.get(url, { params }),

    post: (url, data) =>
        apiClient.post(url, data),

    put: (url, data) =>
        apiClient.put(url, data),

    patch: (url, data) =>
        apiClient.patch(url, data),

    delete: (url) =>
        apiClient.delete(url),
    };