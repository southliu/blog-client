import { Card } from "antd";

interface ArticlesData {
  id: string;
  title: string;
}

function BlogRight() {
  const articleList: ArticlesData[] = [
    { id: '1', title: '文章标题1' },
    { id: '2', title: '文章标题2' },
    { id: '3', title: '文章标题3' },
  ];

  /**
   * 点击文章
   * @param id
   */
  const handleArticle = (id: string) => {
    console.log('id:', id);
  };

  return (
    <div>
      <Card title="热门文章" className="w-300px mb-10px">
        {
          articleList.map(item => (
            <p
              key={item.id}
              className="cursor-pointer mb-5px"
              onClick={() => handleArticle(item.id)}
            >
              { item.title }
            </p>
          ))
        }
        <p></p>
      </Card>

      <Card title="热门标签" className="w-300px">
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </div>
  );
}

export default BlogRight;