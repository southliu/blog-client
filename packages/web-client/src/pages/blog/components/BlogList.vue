<template>
  <div class="bg-#fff w-full h-full rd-r-5px mr-10px flex-1 z-2">
    <div
      v-for="item in list"
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
import type { ArticleData } from '../data';
import { Icon } from '@iconify/vue';

interface DefineProps {
  list: ArticleData[]
}

withDefaults(defineProps<DefineProps>(), {});

/**
 * 点击按钮
 */
const handleClick = (id: number) => {
  console.log('handleClick:', id);
};
</script>