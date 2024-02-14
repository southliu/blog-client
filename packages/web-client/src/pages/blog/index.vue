<template>
  <div>
    blog
  </div>

  <div class="cursor-pointer" @click="onClick">
    go about
  </div>
</template>

<script lang="ts" setup>
import { useHead } from '@unhead/vue';
import { useRouter } from 'vue-router';

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

const router = useRouter();

const onClick = () => {
  router.push('/about');
};
</script>