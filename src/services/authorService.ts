import React from "react";
import { BaseService, IBaseServiceModel } from ".";
import { IAuthor } from "../interfaces";

interface IAuthorServiceModel extends IBaseServiceModel<IAuthor> {}

export function authorService(): IAuthorServiceModel {
  const { get, getDetails, create, update, remove } = BaseService<IAuthor>({
    pathController: "/authors",
  });

  return { get, getDetails, create, update, remove };
}
