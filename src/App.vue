<template>
    <div id="app">

        <RouterView />
    </div>
</template>
<script setup>
    import { RouterView } from 'vue-router';
    import { useAuthStore } from './stores/auth';
    const authStore = useAuthStore();

    authStore.checkAuth();
</script>
<style scoped lang="scss">
    
</style>