<template>
  <div class="flex justify-between pt-40px">
    <CategoryList :list="categoryList" />
    <BlogList :list="articleList" />
    <BlogRight />
  </div>
</template>

<script lang="ts" setup>
import type { ArticleData, CategoryData } from '../data';
import { useHead } from '@unhead/vue';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { getArticlePage, getCategory } from '@south-blog/apis';
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

const route = useRoute();

const isLoading = ref(false);
const isArticleLoading = ref(false);
const articleList = ref<ArticleData[]>([]);
const categoryList = ref<CategoryData[]>([]);

onMounted(() => {
  getArticleList();
  getCategoryList();
});

/** 获取文章列表 */
const getArticleList = async () => {
  const params = {
    current: 1,
    pageSize: 2,
    category: (route.params as { name: string })?.name,
  };

  try {
    isLoading.value = true;
    const { code, data } = await getArticlePage(params);
    if (Number(code) !== 200) return;
    articleList.value = (data.records as ArticleData[]) || [];
  } finally {
    isLoading.value = false;
  }
};

/** 获取文章列表 */
const getCategoryList = async () => {
  try {
    isArticleLoading.value = true;
    const { code, data } = await getCategory();
    if (Number(code) !== 200) return;
    categoryList.value = (data as CategoryData[]) || [];
  } finally {
    isArticleLoading.value = false;
  }
};
</script>
