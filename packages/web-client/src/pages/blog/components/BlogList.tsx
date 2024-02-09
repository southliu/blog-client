import { Icon } from "@iconify/react/dist/iconify.js";

interface ListData {
  date: string;
  title: string;
  category?: string;
  categoryIcon?: string;
  visit: number;
}

function BlogList() {

  const list: ListData[] = [
    {
      date: '2022/08/26',
      title: '这是标题',
      category: '全部分类',
      categoryIcon: 'bx:category',
      visit: 100
    },
    {
      date: '2022/02/26',
      title: '这是标题2',
      category: '全部分类',
      categoryIcon: 'bx:category',
      visit: 10
    },
  ];

  return (
    <div className="bg-#fff w-100% rd-r-5px mr-10px flex-1 z-2">
      {
        list.map(item => (
          <div className="mx-20px py-20px b-b b-#ececec">
            <div className="text-13px text-#777 mb-10px">
              { item.date }
            </div>
            <div className="text-18px text-#444 mb-12px">
              { item.title }
            </div>
            <div className="flex items-center text-#777">
              {
                item.category &&
                <div className="flex items-center mr-20px">
                  {
                    item.categoryIcon &&
                    <Icon
                      className="mr-3px"
                      icon={item.categoryIcon}
                    />
                  }
                  <span>
                    { item.category }
                  </span>
                </div>
              }
              <div className="flex items-center mr-20px">
                <Icon
                  icon='fa-regular:eye'
                  className="mr-3px"
                />
                { item.visit }
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default BlogList;