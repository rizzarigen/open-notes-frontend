<template>
    <div class="frame">
        <p class="frame-logo">open_notes</p>
        <div class="frame-inps">
            <input type="text" name="" 
            id="" 
            class="frame-inps-one" 
            placeholder="login"
            v-model="authStore.username"
            :class=" authStore.error ? 'error' : '' ">
            <input type="password" 
            name="" id="" 
            class="frame-inps-one" 
            placeholder="password"
            v-model="authStore.password"
            :class=" authStore.error ? 'error' : '' ">

        </div>
        <button class="frame-btn" @click="authStore.login" v-if="!props.isRegister">sign in</button>
        <button class="frame-btn" @click="authStore.register" v-if="props.isRegister">sign up</button>
        <router-link to="/signup" v-if="!props.isRegister" @click="authStore.reset">have no account?</router-link>

    </div>
</template>
<script setup>
    import { useAuthStore } from '@/stores/auth';

    const props = defineProps({
        isRegister: Boolean
    })
    console.log(props.isRegister)
    const authStore = useAuthStore();
</script>
<style scoped lang="scss">
@use '@/assets/colors' as *;

.frame {

    background-color: white;
    padding: 1em;

    display: flex;
    flex-direction: column;
    justify-items: center;
    gap: 1.3em;

    border-radius: 2em;

    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

    &-logo {
        font-size: 32px;
        font-weight: 600;
    }

    &-inps {
        display: flex;
        flex-direction: column;
        gap: 0.75em;


        &-one {
            padding: 0.9em 1.5em;
            background-color: #F2F2F2;
            border-style: none;
            border-radius: 0.75em;
            font-weight: 600;
            width: 16em;
            border: none;
            transition: transform ease-out 0.05s;

            &:focus {
                outline: none;
                transform: scale(1.025);
            }

            &::placeholder {
                color: #989898;
            }
        }
    }

    &-btn {
        background-color: #9785E8;
        border: none;
        padding: 0.9em 1.5em;
        width: 100%;
        border-radius: 0.8em;
        font-weight: 500;
        color: #FBFBFE;

        transition: box-shadow ease-out 0.1s;
        cursor: pointer;


        &:hover {
            box-shadow: 0 10px 10px -5px hsla(252, 10%, 30%, 0.212);
        }
    }

}

.error {
    border: 2px solid red;
}
</style>