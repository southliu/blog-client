import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.less';

function NotFound() {
  const navigate = useNavigate();

  /** 跳转首页 */
  const goIndex = () => {
    navigate('/home');
  };

  return (
    <div className="absolute left-50% top-50% -translate-x-1/2 -translate-y-1/2 text-center">
      <h1 className={`${styles.animation} w-full text-6rem font-bold`}>
        404
      </h1>
      <p className="w-full text-20px font-bold mt-15px text-dark-700">
        当前页面无法访问，可能没权限或已删除
      </p>
      <Button className="mt-25px margin-auto" onClick={goIndex}>
        返回首页
      </Button>
    </div>
  );
}

export default NotFound;