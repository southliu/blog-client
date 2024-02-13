<template>
  <div>
    about
  </div>

  <div class="cursor-pointer" @click="onClick">
    go blog
  </div>
</template>

<script lang="ts" setup>
import { useHead } from '@unhead/vue'
import { useRouter } from 'vue-router';

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
})

const router = useRouter();

const onClick = () => {
  router.push('/blog')
};
</script>