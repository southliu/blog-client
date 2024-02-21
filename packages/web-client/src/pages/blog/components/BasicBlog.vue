<template>
  <div class="flex justify-between pt-40px">
    <CategoryList />
    <BlogList />
    <BlogRight />
  </div>
</template>

<script lang="ts" setup>
import { useHead } from '@unhead/vue';
import BlogList from "./BlogList.vue";
import CategoryList from "./CategoryList.vue";
import BlogRight from "./BlogRight.vue";

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
