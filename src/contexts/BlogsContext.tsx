import React, { createContext, useContext } from "react";
import { useCRUD } from "../hooks/OlduseCRUD";
import { IBlog } from "../interfaces";

interface IBlogsContextModel {
  blogs: IBlog[];
  get: () => Promise<void>;
  // getDetails: (id: number | string) => Promise<IBlog>;
  create: (item: IBlog) => Promise<IBlog>;
  update: (item: IBlog) => Promise<void>;
  remove: (item: IBlog) => Promise<void>;
}

const defaultBlogsContextValue: IBlogsContextModel = {
  blogs: [],
  get: async () => {},
  // getDetails: async (_) => null,
  create: async (b) => b,
  update: async () => {},
  remove: async () => {},
};

export const BlogsContext = createContext(defaultBlogsContextValue);

export function BlogsProvider({ children }: any) {
  const {
    items: blogs,
    get,
    getDetails,
    create,
    update,
    remove,
  } = useCRUD<IBlog>({
    baseUrl: () => "/blogs",
    notLoadOnInit: true,
    idPath: (c) => c.id,
  });

  return (
    <BlogsContext.Provider
      value={{ blogs, get, /* getDetails, */ create, update, remove }}
    >
      {children}
    </BlogsContext.Provider>
  );
}

export const useBlogs = () => useContext(BlogsContext);
