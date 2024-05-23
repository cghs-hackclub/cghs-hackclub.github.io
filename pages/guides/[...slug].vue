<script setup>

</script>

<template>
  <div class=" min-h-screen">
    <div class="flex justify-center bg-gray-200 mx-auto w-3/5 rounded-2xl">
        <div>
          <ContentQuery :path="$route.path" find="one" v-slot="{ data }">
            <h1 class="text-3xl font-bold">{{ data.title }}</h1>
            <h2 class="text-m font-bold text-slate-500">Author: {{ data.author }}</h2>
            <br>
            <ContentRenderer :value="data" class="prose" />
          </ContentQuery>
        </div>
      </div>
  </div>
</template>
