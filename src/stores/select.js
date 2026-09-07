import { defineStore } from 'pinia';

export const useSelectStore = defineStore('select', {
    state: () => {
        return {
            selected: [
            ]
        }
    },
    actions: {
        select(id) {
            this.selected.push(id)
        },
        unselect(id) {
            console.log(id)
            this.selected = this.selected.filter(inStateId => inStateId !== id)
        },
        reset() {
            this.selected = []
        }
    },
    getters: {
        isSelected: (state) => {
            return (id) => {
                return state.selected.includes(id)
            }
        }
    }
});
