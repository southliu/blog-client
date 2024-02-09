import type { TopMenu } from "@south-blog/shared";
import { useNavigate } from "react-router-dom";
import { Icon } from '@iconify/react';
import { useState } from "react";

function Header() {
  const navigate = useNavigate();
  const [active, setActive] = useState('blog');

  const tabs: TopMenu[] = [
    { label: '博客', value: 'blog', icon: 'la:pen-nib' },
    { label: '案例', value: 'demo', icon: 'tabler:packages' },
    { label: '关于', value: 'about', icon: 'material-symbols:person' },
  ];

  /** 点击跳转首页 */
  const handleGoHome = () => {
    navigate('/blog');
  };

  /** 处理点击事件 */
  const handleClick = (value: string) => {
    setActive(value);
    navigate(`/${value}`);
  };

  return (
    <div className="h-60px">
      <div className="w-full h-60px flex items-center justify-between px-15vw box-border bg-#fff fixed top-0">
        <div>
          <span className="cursor-pointer" onClick={handleGoHome}>
            SouthLiu
          </span>
        </div>
        <div className="flex">
          {
            tabs.map(item => (
              <div
                key={item.value}
                className="h-60px flex flex-col items-center justify-between ml-30px"
              >
                <div
                  className={`h-60px cursor-pointer flex items-center ${active === item.value ? 'text-#777bce' : ''}`}
                  onClick={() => handleClick(item.value)}
                >
                  <Icon className="mr-5px" icon={item.icon} />
                  <span>
                    { item.label }
                  </span>
                </div>

                {
                  active === item.value ?
                  <div className="w-30px h-3px bg-#777bce rd-20px absolute bottom-0" />
                  : <span />
                }
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Header;