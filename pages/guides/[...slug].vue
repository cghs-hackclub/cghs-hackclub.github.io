<script setup>

</script>

<template>
  <div class="min-h-screen">
    <ContentQuery :path="$route.path" find="one" v-slot="{ data }">
      <ContentRenderer :value="data" class="prose"/>
    </ContentQuery>
  </div>
</template>

<style></style>