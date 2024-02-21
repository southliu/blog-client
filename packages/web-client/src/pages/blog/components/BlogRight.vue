<template>
  <div>
    <Card title="热门文章" class="w-300px mb-10px">
      <p
        v-for="item in articleTopList"
        :key="item.id"
        class="cursor-pointer mb-5px hover:text-#108ee9"
        @click="handleArticle(item.id)"
      >
        {{ item.title }}
      </p>
    </Card>

    <Card title="热门标签" class="w-300px flex flex-wrap">
      <Tag
        v-for="item in categoryTopList"
        :key="item.id"
        class="mr-5px cursor-pointer"
        color="#108ee9"
      >
        {{ item.name }}
      </Tag>
    </Card>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { Card, Tag } from "ant-design-vue";
import { getArticleTop, getCategoryTop } from "@south-blog/apis";

interface ArticlesData {
  id: string;
  title: string;
}

interface CategoryData {
  id: string;
  name: string;
}

const isCategoryTopLoading = ref(false);
const isArticleTopLoading = ref(false);
const articleTopList = ref<ArticlesData[]>([]);
const categoryTopList = ref<CategoryData[]>([]);

onMounted(() => {
  getCategoryTopList();
  getArticleTopList();
});

/** 获取热门分类 */
const getCategoryTopList = async () => {
  try {
    isCategoryTopLoading.value = true;
    const { code, data } = await getCategoryTop();
    if (Number(code) !== 200) return;
    categoryTopList.value = (data as CategoryData[]) || [];
  } finally {
    isCategoryTopLoading.value = false;
  }
};

/** 获取热门文章 */
const getArticleTopList = async () => {
  try {
    isArticleTopLoading.value = true;
    const { code, data } = await getArticleTop();
    if (Number(code) !== 200) return;
    articleTopList.value = (data as ArticlesData[]) || [];
  } finally {
    isArticleTopLoading.value = false;
  }
};

/**
 * 点击文章
 * @param id
 */
  const handleArticle = (id: string) => {
  console.log('id:', id);
};

</script>