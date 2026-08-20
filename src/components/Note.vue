<template>
    <div class="note-wrapper" @mouseenter="isHovered = true" @mouseleave="isHovered = false">
        <div class="note" @click="() => {
            editorStore.openExist(note)
        }">
            <p class="note-title">
                {{ note.title }}
            </p>
            <p class="note-content">
                {{ note.content }}
            </p>
        </div>
        <Transition>
            <button v-if="isHovered" class="note-delbtn" @click="() => {
                noteStore.deleteNote(note.id)
            }">
                <svg width="24" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M3.875 23.25C3.16458 23.25 2.55642 22.997 2.05052 22.4911C1.54462 21.9852 1.29167 21.3771 1.29167 20.6667V3.875H0V1.29167H6.45833V0H14.2083V1.29167H20.6667V3.875H19.375V20.6667C19.375 21.3771 19.122 21.9852 18.6161 22.4911C18.1102 22.997 17.5021 23.25 16.7917 23.25H3.875ZM16.7917 3.875H3.875V20.6667H16.7917V3.875ZM6.45833 18.0833H9.04167V6.45833H6.45833V18.0833ZM11.625 18.0833H14.2083V6.45833H11.625V18.0833Z"
                        fill="black" />
                </svg>
            </button>
        </Transition>
    </div>
</template>

<script setup>
import { useEditorStore } from '@/stores/editor';
import { useNoteStore } from '@/stores/notes';
import { ref } from 'vue';
const props = defineProps({
    note: {
        type: Object,
        required: true,
        default: {}
    }
})

const isHovered = ref(false);

const editorStore = useEditorStore();
const noteStore = useNoteStore();
</script>

<style scoped lang="scss">
@use "@/assets/colors" as *;

.note {
    padding: 1em 2em;
    background-color: white;
    border-radius: 1.5em;
    border: 2px solid rgb(230, 230, 230);

    cursor: pointer;
    position: relative;
    overflow-wrap: break-word;


    &-wrapper {
        position: relative;
        transition: box-shadow ease-out 0.1s;
        border-radius: 1.5em;

        &:hover {
            box-shadow: 0 10px 10px -5px hsl(251, 10%, 60%);
        }

    }



    &-title {
        display: -webkit-box;
        font-weight: 500;
        font-size: 24px;
        -webkit-line-clamp: 4;
        overflow: hidden;
        -webkit-box-orient: vertical;
    }

    &-content {
        font-size: 24px;
        font-weight: 400;
        color: #BFBFBF;
        display: -webkit-box;
        -webkit-line-clamp: 7;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    &-delbtn {
        border: none;
        background-color: transparent;
        position: absolute;
        bottom: 1em;
        right: 1.5em;
        box-sizing: border-box;
        transition: padding ease 0.2s, margin ease 0.2s, background-color ease 0.2s;
        display: flex;
        align-items: center;
        border-radius: 1em;
        cursor: pointer;

        &:hover {
            padding: 0.5em;
            background-color: $main-color;
            margin-right: -0.5em;
            margin-bottom: -0.5em;

            & * {
                fill: white;
            }

        }

    }
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>