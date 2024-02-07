import type { RouteObject } from "react-router-dom";
import type { DefaultComponent } from "@loadable/component";
import { handleRoutes } from "@south-blog/shared";
import { useRoutes } from "react-router-dom";
import { NotFound } from '@south-blog/components';
import Layout from '../layouts';

type PageFiles = Record<string, () => Promise<DefaultComponent<unknown>>>;
const pages = import.meta.glob('../pages/**/*.tsx') as PageFiles;
const layouts = handleRoutes(pages);

const newRoutes: RouteObject[] = [
  {
    path: "",
    element: <Layout />,
    children: layouts
  },
  {
    path: "*",
    element: <NotFound />,
  }
];

function App() {
  return (
    <>
      { useRoutes(newRoutes) }
    </>
  );
}

export default App;