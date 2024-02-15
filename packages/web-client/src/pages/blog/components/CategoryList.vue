<template>
  <div class="w-180px block">
    <div class="fixed left-15vw">
      <div
        v-for="item in list"
        :key="item.value"
        :class="`
          category-item
          ${item.value === active ? 'category-shadow' : ''}
        `"
        @click="handleClick(item.value)"
      >
        <Icon
          :icon="item.icon"
          class="text-20px mr-8px"
        />
        <span>
          {{ item.label }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { LabelValueObj } from "@south-blog/shared";
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

interface CategoryData extends LabelValueObj {
  icon: string;
}

const active = ref('all');

const list: CategoryData[] = [
  {
    label: '全部分类',
    value: 'all',
    icon: 'bx:category',
  },
  {
    label: '未分类',
    value: 'none',
    icon: 'bx:category',
  },
];

/**
 * 处理点击事件
 * @param value - 点击值
 */
const handleClick = (value: string) => {
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