/**
* @description: 配置项
*/
export const TOKEN = 'admin_token'; // token名称
export const LANG = 'lang'; // 语言
export const WATERMARK_PREFIX = 'admin'; // 水印前缀
export const VERSION = 'admin_version'; // 版本
export const EMPTY_VALUE = '-'; // 空值显示
export const THEME_KEY = 'theme_key'; // 主题

// 生成路由排除内容，不带后缀名转换成“/文件名/”格式
export const ROUTER_EXCLUDE = [
  'login',
  'components',
  'utils',
  'lib',
  'hooks',
  'model.tsx',
  '404.tsx'
];
