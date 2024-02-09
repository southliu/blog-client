import type { LabelValueObj } from "@south-blog/shared";
import { useState } from "react";
import { Icon } from '@iconify/react';
import styles from '../index.module.less';

interface CategoryData extends LabelValueObj {
  icon: string;
}

function CategoryList() {
  const [active, setActive] = useState('all');

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
    setActive(value);
  };

  return (
    <div className="w-180px block">
      <div className="fixed left-15vw">
        {
          list.map((item) => (
            <div
              key={item.value}
              className={`
                ${styles['category-item']}
                ${item.value === active ? styles['category-shadow'] : ''}
              `}
              onClick={() => handleClick(item.value)}
            >
              <Icon
                icon={item.icon}
                className="text-20px mr-8px"
              />
              <span>
                { item.label }
              </span>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default CategoryList;