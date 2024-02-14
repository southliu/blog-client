<template>
  <div>
    <Card title="热门文章" class="w-300px mb-10px">
      <p
        v-for="item in articleList"
        :key="item.id"
        class="cursor-pointer mb-5px"
        @click="handleArticle(item.id)"
      >
        {{ item.title }}
      </p>
    </Card>

    <Card title="热门标签" class="w-300px">
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </div>
</template>

<script lang="ts" setup>
import { Card } from "ant-design-vue";

interface ArticlesData {
  id: string;
  title: string;
}

const articleList: ArticlesData[] = [
  { id: '1', title: '文章标题1' },
  { id: '2', title: '文章标题2' },
  { id: '3', title: '文章标题3' },
];

/**
 * 点击文章
 * @param id
 */
  const handleArticle = (id: string) => {
  console.log('id:', id);
};

</script>