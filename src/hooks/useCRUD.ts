import * as React from "react";
import axios from "axios";

import { IDTO, IRole, IUser } from "../interfaces";

interface IUseCRUDProps<T> {
  baseUrl: () => string;
  notLoadOnInit?: boolean;
  idPath?: (item: T) => number | string | undefined;
}

interface ICRUDModel<T> {
  items: T[];
  get: () => Promise<void>;
  getDetails: (id: number | string) => Promise<T>;
  create: (item: T) => Promise<T>;
  update: (item: T) => Promise<void>;
  remove: (item: T) => Promise<void>;
  emptyItems: () => void;
}

export function useCRUD<T extends IDTO<number | string>>({
  baseUrl,
  notLoadOnInit,
  idPath,
}: IUseCRUDProps<T>): ICRUDModel<T> {
  const [items, setItems] = React.useState<T[]>([]);
  idPath = idPath || ((item) => item.id);

  React.useEffect(() => {
    !notLoadOnInit && get();
  }, []);

  async function get() {
    const response = await axios.get<T[]>(baseUrl());
    setItems(response?.data);
  }

  async function getDetails(id: number | string) {
    const response = await axios.get<T>(`${baseUrl()}/${id}`);
    return response?.data;
  }

  async function create(item: T) {
    const response = await axios.post<T>(baseUrl(), item);
    await get();
    return response?.data;
  }

  async function update(item: T) {
    // await axios.put(`${baseUrl()}/${idPath(item)}`, item);
    await get();
  }

  async function remove(item: T) {
    // await axios.delete(`${baseUrl()}/${idPath(item)}`);
    await get();
  }

  return {
    items,
    get,
    getDetails,
    create,
    update,
    remove,
    emptyItems: () => setItems([]),
  };
}

export const useRoles = () => useCRUD<IRole>({ baseUrl: () => "/roles" });

type IUserCRUDModel = Omit<ICRUDModel<IUser>, "getDetails" | "emptyItems"> & {
  resetPassword: (item: IUser) => Promise<void>;

  getAll: () => Promise<IUser[]>;
};

// export const useUsers = (companyGuid: string): IUserCRUDModel => {
//   const baseUrl = /companies/${companyGuid}/users;
//   const { items, get, create } = useCRUD<IUser>({ baseUrl: () => baseUrl });

//   const update = async (item: IUser) => {
//     await axios.put(${baseUrl}/${item.guid}, item);
//     await get();
//   };

//   const remove = async (item: IUser) => {
//     await axios.delete(${baseUrl}/${item.guid});
//     await get();
//   };

//   const resetPassword = async (item: IUser) => {
//     await axios.post(${baseUrl}/${item.guid}/reset-password, item);
//   };

//   const getAll = async () => {
//     const resp = await axios.get<IUser[]>(baseUrl);
//     return resp.data;
//   };

//   return { items, get, create, update, remove, resetPassword, getAll };
// };
