import React from "react";
import { apiClient, IBaseServiceModel } from ".";
import { ILoginModel, IUser } from "../interfaces";

interface IAuthServiceModel {
  currentUser?: IUser;
  login: (model: ILoginModel) => Promise<void>;
  logout: () => void;
  //   forgotPassword: (model: IForgotPasswordModel)=>Promise<void>;
  //   changePassword: (model: IChangePasswordModel) => Promise<void>;
}

export function authService(): IAuthServiceModel {
  const [currentUser, setCurrentUser] = React.useState<IUser>();
  async function login(model: ILoginModel) {
    const response = await apiClient.post<{ data: IUser }>(
      "/auth/login",
      model
    );
  }

  function logout() {}

  return { currentUser, login, logout };
}   
