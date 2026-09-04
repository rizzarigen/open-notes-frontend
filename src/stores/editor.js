import { defineStore } from "pinia";
import { useNoteStore } from "./notes";



export const useEditorStore = defineStore('editor', {
    state: () => {
        return {
            isNew: false,
            isOpen: false,
            isDirty: false,
            note: {
                type: Object,
                default: {
                }
            },
            note_title: "",
            note_content: "",
            note_id: 0
        }

    },
    actions: {
        reset() {
            this.isNew = false
            this.isDirty = false
            this.note_content = ""
            this.note_title = ""
            this.note_id = 0
        },

        openExist(note) {

            this.note_title = note.title
            this.note_content = note.content
            this.note_id = note.id
            this.isOpen = true
        },
        openNew() {
            this.isNew = true
            this.isOpen = true
        },
        close() {
            this.isOpen = false
        },
        save() {
            console.log("saved")
            const noteStore = useNoteStore()
            if (this.isNew) {
                noteStore.addNote({
                    title: this.note_title,
                    content: this.note_content,
                    pinned: false
                })
            } else if (this.isDirty) {
                noteStore.editNote({
                    title: this.note_title,
                    content: this.note_content,
                    id: this.note_id
                })
            }
        }
    }
})