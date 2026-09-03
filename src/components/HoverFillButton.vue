<template>
    <button class="hf_btn" @mouseenter="() =>{
        props.isHoverable ? fill = true : {}
    }" @mouseleave="() =>{
        props.isHoverable ? fill = false : {}
    }" :class="{'fill': props.isFill | fill}">
        <slot />
    </button>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
    isHoverable: {
        type: Boolean,
        default: false
    },
    isFill: {
        type: Boolean,
        default: false
    }
})

const fill = ref(props.isFill);

</script>

<style scoped lang="scss">
@use "@/assets/colors" as *;

.hf_btn {
    border: none;
    background-color: transparent;
    box-sizing: border-box;
    transition: padding ease 0.2s, margin ease 0.2s, background-color ease 0.2s;
    display: flex;
    align-items: center;
    border-radius: 1em;
    cursor: pointer;


}

.fill {
    padding: 0.5em;
    background-color: $main-color;
    margin-right: -0.5em;
    margin-bottom: -0.5em;

    & * {
        fill: white;
    }

}
</style>