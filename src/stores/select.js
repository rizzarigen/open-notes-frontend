import { defineStore } from 'pinia';
import { useNoteStore } from "./notes";

export const useSelectStore = defineStore('select', {
    state: () => {
        return {
            selected: [
            ]
        }
    },
    actions: {
        select(note) {
            this.selected.push(note)
        },
        unselect(note) {
            this.selected = this.selected.filter(stateNote => stateNote.id !== note.id)
        },
        reset() {
            this.selected = []
        },
        deleteAllSelected() {

            const noteStore = useNoteStore();
            for (let selNote of this.selected) {
                noteStore.deleteNote(selNote.id)
            }
            this.reset()

        },
        pinAllSelected() {

            const noteStore = useNoteStore();

            if (this.isAnyUnpinned()) {
                for (let selNote of this.selected.filter(note => note.pinned === false)) {
                    selNote.pinned = true
                    noteStore.editNote(selNote)
                }

            } else {
                for (let selNote of this.selected) {
                    selNote.pinned = false
                    noteStore.editNote(selNote)
                }
            }
            this.reset()
        }
    },
    getters: {
        isSelected: (state) => {
            return (note) => {
                return state.selected.includes(note)
            }
        },
        isAnyUnpinned: (state) => {
            return () => {
                return state.selected.filter(note => note.pinned === false).length > 0 ? true : false
            }
        }
    }
});
