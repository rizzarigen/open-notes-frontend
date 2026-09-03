<template>
            <MasonryWall :items="list" :column-width="224" :gap="16" :min-columns="2" :style="{'max-width': list.length == 1 ? '224px' : ''}">
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
// :style в masonrywall - костыль. Правит неприятный баг, возникающий, вероятно, в самой библе.
</style>