import { useEffect } from 'react';
import { App } from 'antd';
import { VERSION } from "@south-blog/shared";
import { BrowserRouter as Router } from 'react-router-dom';
import nprogress from 'nprogress';
import AppPage from './App';

// antd
import { theme, ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

// antd主题
const { defaultAlgorithm } = theme;

function Page() {
  // 顶部进度条
  useEffect(() => {
    nprogress.done();

    // 首次进入清除版本缓存
    handleClearVersion();

    // 关闭loading
    const firstElement = document.getElementById('first');
    if (firstElement && firstElement.style?.display !== 'none') {
      firstElement.style.display = 'none';
    }

    return () => {
      nprogress.start();
    };
  }, []);

  /** 清空版本 */
  const handleClearVersion = () => {
    localStorage.removeItem(VERSION);
  };

  return (
    <Router>
      <ConfigProvider
        locale={zhCN}
        theme={{
          algorithm: [defaultAlgorithm]
        }}
      >
        <App>
          <AppPage />
        </App>
      </ConfigProvider>
    </Router>
  );
}

export default Page;