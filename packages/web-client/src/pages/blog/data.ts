export interface ArticleData {
  id: number;
  date: string;
  title: string;
  categoryName?: string;
  categoryIcon?: string;
  visit: number;
}

export interface CategoryData {
  id: number;
  name: string;
  icon: string;
}