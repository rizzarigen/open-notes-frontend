<template>

    <div class="head">
        <button class="head-btn" @click="selectStore.pinAllSelected">
            {{ !selectStore.isAnyUnpinned() ? 'unpin' : "pin"  }}
        </button>
        <button class="head-btn" @click="selectStore.deleteAllSelected">
            delete
        </button>
        <button class="head-btn" @click="selectStore.reset">
            close
        </button>

    </div>

</template>
<script setup>
import { useSelectStore } from '@/stores/select'

const selectStore = useSelectStore();


</script>

<style scoped lang="scss">
@use "@/assets/colors" as *;
@use "@/assets/breakpoints" as *;

.head {
    background-color: $main-color;
    display: flex;
    justify-content: space-between;
    padding: 1em 4em;
    align-items: center;
    @include respond-to(lg) {
            padding: 1em 2.5em;
        }
            @include respond-to(md) {
            padding-right: 1em;
        }

    &-search {
        display: flex;
        
        display: none;
        
        border-style: none;
        border-radius: 1.3em;
        width: 40em;
        background-color: $seacrh-color;
        font-weight: 600;
        padding: 0.8em 3em;
        text-align: center;
        color: white;
        transition: box-shadow ease-out 0.1s;
        cursor: text;

        @include respond-to(md) {
            width: 100%;
        }

        &:hover {
            box-shadow: 0 0.5em 1em 0 rgba(0, 0, 0, 0.205);


        }

        &::placeholder {
            margin: auto;
            color: $search-text-color;
            text-align: center;
        }

        &:focus {
            outline: none;
        }


    }

    &-btn {
        border: none;
        background-color: transparent;
        cursor: pointer;
        @include respond-to(md) {
            
        }
    }
}
</style>