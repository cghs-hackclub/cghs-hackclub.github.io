<script setup>
const props = defineProps(['image', 'title', 'description', 'linkUrl'])
</script>

<template>
    <nuxt-link :to=props.linkUrl> <!-- TODO: push these into templates in components-->
        <div class="bg-gray-800 m-6 w-96 h-[24] rounded-2xl border-8 border-gray-800 shadow-2xl cursor-pointer 
        transition ease-in-out delay-30 hover:-translate-y-2 hover:translate-x-2 ">
            <div class="flex justify-center">
                <div class="flex flex-col">
                    <div class="flex-1">
                        <img class="rounded-2xl h-64" :src=props.image>
                    </div>
                    <div class="flex items-center justify-center">
                        <p class="mt-4 text-white text-lg">{{ props.title }}</p>
                    </div>
                </div>
            </div>
        </div>
    </nuxt-link>
</template>
