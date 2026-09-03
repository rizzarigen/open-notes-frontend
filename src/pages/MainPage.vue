<script setup>
import '@/assets/main.scss'
import { useNoteStore } from '@/stores/notes.js'
import { useEditorStore } from '@/stores/editor.js'
import { onMounted } from 'vue'

import Editor from '@/components/Editor.vue'
import Header from '@/components/Header.vue'
import NoteWall from '@/components/NoteWall.vue'

const noteStore = useNoteStore()
const editorStore = useEditorStore()

onMounted(() => {
    noteStore.getNotes()
})
</script>

<template>
    <Header />
    <div class="main">
        <div class="main-walls">
            <NoteWall :list="noteStore.notes.filter(note => note.pinned == true)" />
            <NoteWall :list="noteStore.notes.filter(note => note.pinned == false)" />
        </div>

        <button class="main-newbtn" @click="editorStore.openNew">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M24.5 21.65L26.35 23.5L37.2 12.65L35.35 10.8L24.5 21.65ZM10 38H11.85L23.5 26.35L21.65 24.5L10 36.15V38ZM27.75 27.75L20.25 20.25L28.6 11.9L27.15 10.45L16.2 21.4L13.4 18.6L24.3 7.65C25.1 6.85 26.0417 6.45 27.125 6.45C28.2083 6.45 29.15 6.85 29.95 7.65L31.4 9.1L33.9 6.6C34.3 6.2 34.775 6 35.325 6C35.875 6 36.35 6.2 36.75 6.6L41.4 11.25C41.8 11.65 42 12.125 42 12.675C42 13.225 41.8 13.7 41.4 14.1L27.75 27.75ZM13.5 42H6V34.5L20.25 20.25L27.75 27.75L13.5 42Z"
                    fill="white" />
            </svg>
        </button>
    </div>
    <Editor />
</template>

<style scoped lang="scss">
@use '@/assets/colors' as *;
@use '@/assets/breakpoints' as *;

.main {
    flex: 1;
    height: calc(100vh - 5.5em);
    width: 100%;
    display: flex;
    box-sizing: border-box;
    overflow: hidden;

    &-walls {
        display: flex;
        flex-direction: column;
        margin: auto;
        gap: 48px;


        margin: auto;
        padding: 2em 2em 200px 2em;
        box-sizing: border-box;
        height: 100%;
        overflow-y: scroll;
        overflow-x: auto;

        
        @include respond-to(ssm) {
            padding: 1em 1em 200px 1em;
        }


        -ms-overflow-style: none;
        scrollbar-width: none;

        &::-webkit-scrollbar {
            display: none;
        }
    }


    &-newbtn {
        position: absolute;
        bottom: 2em;
        left: calc(100dvw - 20%);

        background-color: $main-color;
        border: none;
        padding: 1.5em;
        border-radius: 3em;

        transition: box-shadow ease-out 0.1s;
        cursor: pointer;

        @include respond-to(ssm) {

            & svg {
                width: 1.75em;
                height: 1.75em
            }

        }

        @include respond-to(sssm) {
        left: calc(100dvw - 26%);
        }

        &:hover {
            box-shadow: 0 10px 10px -5px hsl(251, 10%, 30%);
        }

    }

}
</style>