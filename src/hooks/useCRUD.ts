// import React from "react";
// import axios from "axios";

// import { IDTO, IRole, IUser } from "../interfaces";

// const apiClient = axios.create({
//   baseURL: "https://intranetblogapi.azurewebsites.net/api",
//   headers: {
//     "Content-type": "application/json",
//   },
// });

// interface IUseCRUDProps<T> {
//   urlController: string;
//   idPath?: (item: T) => number | string | undefined;
// }

// interface ICRUDModel<T> {
//   items: T[];
//   get: () => Promise<void>;
//   getDetails: (id: number | string) => Promise<T>;
//   create: (item: T) => Promise<T>;
//   update: (item: T) => Promise<void>;
//   remove: (item: T) => Promise<void>;
//   emptyItems: () => void;
// }
// export function useCRUD<
//   T extends IDTO<number | string>
// >({}: IUseCRUDProps<T>): ICRUDModel<T> {
//   //   return{};
// }
export {};
