// 键值对
export interface LabelValueObj {
  label: string;
  value: string;
}

// 顶部菜单类型
export type TopeMenuType = 'blog' | 'demo' | 'about';

// 顶部菜单
export interface TopMenu {
  label: string;
  icon: string;
  value: TopeMenuType;
}