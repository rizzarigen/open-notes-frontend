<template>

    <header class="head">
        <p class="head-logo">open_notes</p>
        <input type="text" class="head-search" placeholder="search...">
        <button class="head-logout" @click="authStore.logout">
            <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#e3e3e3">
                <path
                    d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
            </svg>
        </button>
    </header>

</template>
<script setup>
import { useAuthStore } from '@/stores/auth';


const authStore = useAuthStore();
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

    &-logo {
        font-weight: 600;
        font-size: 2em;
        color: white;
        cursor: pointer;




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

    &-logout {
        border: none;
        background-color: transparent;
        cursor: pointer;
        @include respond-to(md) {
            
        }
    }
}
</style>