<template>
  <main>
    <Header />
    <div class='content'>
      <RouterView />
    </div>
    <Footer />
  </main>
</template>

<script setup lang="ts">
import { Footer } from '@south-blog/components';
import Header from './components/Header.vue';
</script>

<style lang="less" scoped>
.content {
  min-height: calc(100vh - 120px);
  background-color: #f5f6f9;
}
</style>