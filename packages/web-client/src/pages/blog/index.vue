<template>
  <div class="flex justify-between pt-40px">
    <CategoryList />
    <BlogList />
    <BlogRight />
  </div>
</template>

<script lang="ts" setup>
import { useHead } from '@unhead/vue';
import BlogList from "./components/BlogList.vue";
import CategoryList from "./components/CategoryList.vue";
import BlogRight from "./components/BlogRight.vue";

useHead({
  title: 'Blog',
  meta: [
    {
      name: 'Blog',
      content: 'Website Blog',
    },
  ],
  style: [
    {
      children: 'body {color: #567839}',
    },
  ],
});
</script>
