<template>

    <Transition>
        <div class="editor-wrapper" @mousedown.self="editorStore.close">


            <div class='editor'>
                <input class="editor-title" type="text" v-model="editorStore.note_title" maxlength="999"
                    placeholder="Title" @input="() => {
                        if (!editorStore.isDirty) {
                            editorStore.isDirty = true
                        }
                    }">
                <textarea class="editor-content" type="text" v-model="editorStore.note_content" maxlength="20000"
                    placeholder="..."
                    @input="() => {
                        if (!editorStore.isDirty) {
                            editorStore.isDirty = true
                        }
                    }" />
                <button class="editor-exitbtn" @click="editorStore.close">
                        <svg  xmlns="http://www.w3.org/2000/svg" height="px" viewBox="0 -960 960 960" width="24px"
                        fill="#FFFFFF">
                        <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
                    </svg>

                </button>
            </div>
        </div>
    </Transition>


</template>

<script setup>
import { useEditorStore } from '@/stores/editor';
import { onBeforeUnmount, onMounted, Transition, ref } from 'vue';

const editorStore = useEditorStore()

const rootRef = ref(null)


const btnCallback = (e) => {
    if (e.key === 'Escape') {
        editorStore.close()
    }
}

onMounted(() => {
    window.addEventListener('keydown', btnCallback)
})

onBeforeUnmount(() => {
    editorStore.save()
    editorStore.reset()
    window.removeEventListener('keydown', btnCallback)
})




</script>

<style scoped lang="scss">
@use '@/assets/colors' as *;
@use "@/assets/breakpoints" as *;
    

.editor-wrapper {
    position: absolute;
    display: flex;
    height: 100dvh;
    width: 100dvw;
    background-color: rgba(0, 0, 0, 0.562);
    transition: background-color ease-out 0.5s;
}

.editor {

    width: 960px;
    height: 560px;
    background-color: white;
    margin: auto;
    border-radius: 2em;
    position: relative;

    box-sizing: border-box;

    padding: 2.25em 4em;

    display: flex;
    flex-direction: column;

    gap: 0.75em;

    @include respond-to(xl) {
        width: 720px;
    }
    @include respond-to(lg) {
        width: 640px;
    }
    @include respond-to(md) {
        width: 480px;
    }
    @include respond-to(sm) {
        width: 320px;
    }




    & * {
        border: none;
        transition: transform ease-out 0.05s;

        &:focus {
            outline: none;
            transform: scale(1.025);
        }
    }


    &-title {
        font-size: 32px;
        font-weight: 500;
    }


    &-content {
        font-size: 24px;
        flex: 1;
        resize: none;
    }

    &-exitbtn {
        position: absolute;
        left: -7%;
        background-color: $main-color;
        padding: 1em;
        border-radius: 1.5em;
        display: flex;
        align-items: center;

        transition: box-shadow ease-out 0.1s;
        box-shadow: 0 10px 2px -5px hsl(251, 10%, 30%);
        cursor: pointer;

        @include respond-to(xl) {
            left: -10%;
        }
        
        @include respond-to(md) {
            top: -12%;
            left: 0%;
        }


        &:hover {
            box-shadow: 0 10px 10px -5px hsl(251, 10%, 30%);
        }

    }

}



.v-enter-active,
.v-leave-active {
    transition: opacity 0.1s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>