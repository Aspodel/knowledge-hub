import { RouteObject, PathRouteProps } from "react-router";
import { string } from "yup";
import { BlogStatus, NotificationType } from "../utils/enum";

export interface IDTO<T = number> {
  id?: T;
}

export interface IUser extends IDTO<string> {
  guid: string;
  username: string;
  firstName: string;
  lastname: string;
  email: string;
  phoneNumber?: string;
  gender?: boolean;
  dateOfBirth?: Date;
  profileImageUrl?: string;
  coverImageUrl?: string;
  isActive?: boolean;
  roles: string[];
}

export interface IRole extends IDTO<string> {
  name: string;
}

export interface IAuthor extends IUser {
  blogs: number[];
}

export interface ILoginModel {
  username: string;
  password: string;
}

export interface IBlog extends IDTO {
  title: string;
  description: string;
  slug: string;
  content: string;
  imageUrl?: string;
  status: BlogStatus;
  createdAt?: Date;
  updatedAt?: Date;
  authors: string[];
  categories: string[];
}

export interface ICategory {
  id: number;
  name: string;
  slug: string;
}

export interface INotification {
  recipientId: string;
  senderId?: string;
  title: string;
  content: string;
  type: NotificationType;
  createdAt: Date;
  isRead: boolean;
  isDelete: boolean;
}
