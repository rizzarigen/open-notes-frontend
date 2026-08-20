<template>
    <div class="wrapper">
        <AuthForm is-register></AuthForm>
    </div>
</template>

<script setup>

import AuthForm from '@/components/AuthForm.vue';
import { authController } from '@/api/controllers/auth-controller';
import { ref } from 'vue';

</script>

<style scoped lang="scss">
.wrapper {
    display: flex;
    align-items: center;
    height: 100%;

    & * {
        margin: auto;
    }
}
</style>