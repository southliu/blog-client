type EnvConfigs = Record<string, string>

// env数据
interface ViteEnv {
  VITE_SERVER_PORT: number;
  VITE_PROXY: [string, string][];
}

/**
 * 处理转化env
 * @param envConfigs
 */
export const handleEnv = (envConfigs: EnvConfigs): ViteEnv => {
  const {
    VITE_SERVER_PORT,
    VITE_PROXY
  } = envConfigs;

  const proxy: [string, string][] = VITE_PROXY ? JSON.parse(VITE_PROXY.replace(/'/g, '"')) : [];

  const res: ViteEnv = {
    VITE_SERVER_PORT: Number(VITE_SERVER_PORT) || 8080,
    VITE_PROXY: proxy
  };

  return res;
};
