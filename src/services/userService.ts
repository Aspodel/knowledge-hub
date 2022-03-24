import React from "react";
import { apiClient, BaseService, IBaseServiceModel } from ".";
import { IUser } from "../interfaces";

interface IUserServiceModel extends IBaseServiceModel<IUser> {
  searchByUsername: (username: string) => Promise<IUser[]>;
}

export function userService(): IUserServiceModel {
  const { get, getDetails, create, update, remove } = BaseService<IUser>({
    pathController: "/users",
  });

  async function searchByUsername(username: string) {
    const response = await apiClient.post<IUser[]>(
      `/users/searchbyusername`,
      username
    );

    return response.data;
  }

  return { get, getDetails, create, update, remove, searchByUsername };
}
