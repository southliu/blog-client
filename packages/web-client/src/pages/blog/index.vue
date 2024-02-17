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
import { getBlogPage } from '@south-blog/apis';
import { onMounted } from 'vue';

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

onMounted(() => {
  getBlogPage({ current: 1, pageSize: 2 }).then(res => {
    console.log('res:', res);
  });
});
</script>
