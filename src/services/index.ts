import React from "react";
import axios from "axios";
import { IDTO } from "../interfaces";

export const apiClient = axios.create({
  // baseURL: "https://intranetblogapi.azurewebsites.net/api",
  // baseURL: "https://test-bloghub.azurewebsites.net/api",
  baseURL: "https://localhost:5001/api",
  headers: {
    "Content-type": "application/json",
  },
});

interface IBaseServiceProps<T> {
  pathController: string;
}

export interface IBaseServiceModel<T> {
  get: () => Promise<T[]>;
  getDetails: (id: number | string) => Promise<T>;
  create: (item: T) => Promise<T> | Promise<void>;
  update: (item: T) => Promise<void>;
  remove: (id: number | string) => Promise<void>;
}

export function BaseService<T extends IDTO<number | string>>({
  pathController,
}: IBaseServiceProps<T>): IBaseServiceModel<T> {
  async function get() {
    const response = await apiClient.get<T[]>(pathController);
    return response?.data;
  }

  async function getDetails(id: number | string) {
    const response = await apiClient.get<T>(`${pathController}/${id}`);
    return response?.data;
  }

  async function create(item: T) {
    const response = await apiClient.post<T>(pathController, item);
    return response?.data;
  }

  async function update(item: T) {
    await apiClient.put(`${pathController}/${item.id}`, item);
  }

  async function remove(id: number | string) {
    await apiClient.delete(`${pathController}/${id}`);
  }

  return {
    get,
    getDetails,
    create,
    update,
    remove,
  };
}
