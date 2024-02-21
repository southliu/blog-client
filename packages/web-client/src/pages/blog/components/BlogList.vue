<template>
  <div class="bg-#fff w-full rd-r-5px mr-10px flex-1 z-2">
    <div
      v-for="item in articleList"
      :key="item.date"
      class="mx-20px py-20px b-b b-#ececec cursor-pointer"
      @click="handleClick(item.id)"
    >
      <div class="text-13px text-#777 mb-10px">
        {{ item.date }}
      </div>
      <div class="text-18px text-#444 mb-12px">
        {{ item.title }}
      </div>
      <div class="flex items-center text-#777">
        <div v-if="item.categoryName" class="flex items-center mr-20px">
          <Icon
            v-if="item.categoryIcon"
            class="mr-3px"
            :icon="item.categoryIcon"
          />
          <span>
            {{ item.categoryName }}
          </span>
        </div>
        <div class="flex items-center mr-20px">
          <Icon
            icon='fa-regular:eye'
            class="mr-3px"
          />
          {{ item.visit }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import type { ArticleData } from '../data';
import { Icon } from '@iconify/vue';
import { getArticlePage } from '@south-blog/apis';
import { useRoute } from 'vue-router';

const route = useRoute();
const isLoading = ref(false);
const articleList = ref<ArticleData[]>([]);

onMounted(() => {
  getArticleList();
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

/**
 * 点击按钮
 */
const handleClick = (id: number) => {
  console.log('handleClick:', id);
};
</script>