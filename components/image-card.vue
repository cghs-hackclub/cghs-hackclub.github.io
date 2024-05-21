<script setup>
    const props =  defineProps([ 'image', 'title', 'description', 'linkUrl' ])
</script>

<template>
    <a :href=props.linkUrl> <!-- TODO: push these into templates in components-->
        <div class="bg-gray-800 m-6 w-96 h-[18rem] rounded-2xl border-8 border-gray-800 shadow-2xl cursor-pointer 
        transition ease-in-out delay-30 hover:-translate-y-2 hover:translate-x-2 ">
            <img class="rounded-2xl" :src=props.image>
            <div class="flex items-center justify-center">
                <p class="mt-4 text-white text-lg">{{ props.title }}</p>
            </div>
        </div>
    </a>
</template>
