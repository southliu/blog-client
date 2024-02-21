<template>
  <div class="w-180px block">
    <div class="fixed left-15vw max-h-70vh overflow-auto">
      <div
        v-for="item in categoryList"
        :key="item.id"
        :class="`
          category-item
          ${item.id === active ? 'category-shadow' : ''}
        `"
        @click="handleClick(item.id)"
      >
        <Icon
          :icon="item.icon"
          class="text-20px mr-8px"
        />
        <span>
          {{ item.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { CategoryData } from '../data';
import { onMounted, ref } from 'vue';
import { Icon } from '@iconify/vue';
import { getCategory } from '@south-blog/apis';

const active = ref(0);
const categoryList = ref<CategoryData[]>([]);
const isArticleLoading = ref(false);

onMounted(() => {
  getCategoryList();
});

/** 获取文章列表 */
const getCategoryList = async () => {
  try {
    isArticleLoading.value = true;
    const { code, data } = await getCategory();
    if (Number(code) !== 200) return;
    categoryList.value = (data as CategoryData[]) || [];
    active.value = categoryList.value?.[0]?.id ?? 0;
  } finally {
    isArticleLoading.value = false;
  }
};

/**
 * 处理点击事件
 * @param value - 点击值
 */
const handleClick = (value: number) => {
  active.value = value;
};
</script>

<style lang="less" scoped>
.category-shadow {
  color: #777bce;
  background-color: #fff;
  box-shadow: 0 6px 10px 0 hsla(0,0%,91.8%,.8);
}

.category-item {
  width: 180px;
  height: 54px;
  padding-left: 30px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;

  &:hover {
    color: #777bce;
    background-color: #fff;
    box-shadow: 0 6px 10px 0 hsla(0,0%,91.8%,.8);
  }
}

.category-item + .category-item {
  margin-top: 3px;
}
</style>