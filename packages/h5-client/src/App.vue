<template>
  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue';

useHead({
  title: 'About',
  meta: [
    {
      name: 'About',
      content: 'Website About',
    },
  ],
  style: [
    {
      children: 'body {color: #567839}',
    },
  ],
});
</script>
