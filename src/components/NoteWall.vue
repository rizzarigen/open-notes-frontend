<template>
            <MasonryWall :items="list" :column-width="224" :gap="16">
                <template #default="{ item }">
                    <Note :note="item" />
                </template>
            </MasonryWall>
</template>
<script setup>

const props = defineProps({
    list: {
        type: Array,
        default: []
    }
})

console.log(props.list)



import { MasonryWall } from '@yeger/vue-masonry-wall'

import Note from '@/components/Note.vue'


</script>
<style scoped lang="scss">

</style>