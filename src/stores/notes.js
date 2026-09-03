import { defineStore } from "pinia";
import { notesController } from "@/api/controllers/note-controller";

export const useNoteStore = defineStore('notes', {
    state: () => {
        return {
            notes: [
            ]
        }
    },
    actions: {
        getNotes() {
             notesController.getNotes()
                .then(response => {
                    this.notes = response.data.content
                    console.log(response)
                })
        },
        addNote(note) {
            console.log(note)
            if (note.title || note.content) {
                notesController.createNote(note)
                    .then(response => {
                        let temp_notes = this.notes.filter(note => note.id !== response.data.id)
                        temp_notes.unshift(response.data)
                        this.notes = temp_notes
                    })
            }
        },
        editNote(note) {
            notesController.editNote(note.id, note)
                .then(response => {
                    console.log(response.data)
                    let temp_notes = this.notes.filter(note => note.id !== response.data.id)
                    temp_notes.unshift(response.data)
                    this.notes = temp_notes
                })
        },
        deleteNote(id) {
            notesController.deleteNote(id)
                .then(response => {
                    console.log(response.data)
                    this.notes = this.notes.filter(note => note.id !== id)
                })
        },
        reset() {
            this.notes.length = 0
        }
    }
});