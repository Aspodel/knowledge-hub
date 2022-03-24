import React, { useContext } from "react";
import { apiClient, BaseService, IBaseServiceModel } from ".";
import { IBlog } from "../interfaces";

interface IBlogServiceModel extends IBaseServiceModel<IBlog> {
  getBySlug: (slug: string) => Promise<IBlog>;
}

export function blogService(): IBlogServiceModel {
  const { get, getDetails, create, update, remove } = BaseService<IBlog>({
    pathController: "/blogs",
  });

  async function getBySlug(slug: string) {
    const response = await apiClient.get<IBlog>(`/blogs/getbyslug/${slug}`);
    return response?.data;
  }

  return {
    get,
    getDetails,
    getBySlug,
    create,
    update,
    remove,
  };
}

// const defaultBlogContextValue: IBlogServiceModel = {
//   get: async () => [],
//   getDetails: async (_) => {
//     let b!: IBlog;
//     return b;
//   },
//   getBySlug: async (_) => {
//     let b!: IBlog;
//     return b;
//   },
//   create: async (b) => b,
//   update: async () => {},
//   remove: async () => {},
// };

// export const BlogsContext = React.createContext(defaultBlogContextValue);

// export function BlogsProvider({ children }: any) {
//   const { get, getDetails, create, update, remove } = BaseService<IBlog>({
//     pathController: "/blogs",
//   });

//   async function getBySlug(slug: string) {
//     const response = await apiClient.get<IBlog>(`blog/getbyslug/${slug}`);
//     return response?.data;
//   }

//   return (
//     <BlogsContext.Provider
//       value={{ get, getDetails, getBySlug, create, update, remove }}
//     >
//       {children}
//     </BlogsContext.Provider>
//   );
// }

// export const useBlogs = () => useContext(BlogsContext);
