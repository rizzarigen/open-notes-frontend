import { api } from "..";

export const notesController = {
    getNotes: () => {
        return api.get(`/api/v1/notes/`);
    },

    getNoteId: (id) => {
        return api.get(`/api/v1/notes/${id}`)
    },

    editNote: (id, data) => {
        return api.patch(`/api/v1/notes/${id}`, data);
    },

    createNote: (data) => {
        return api.post(`/api/v1/notes/`, data);
    },
    deleteNote: (id) => {
        return api.delete(`/api/v1/notes/${id}`)
    }
}