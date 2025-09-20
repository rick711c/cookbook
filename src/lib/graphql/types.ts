
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateUserInput {
    fullname: string;
    email: string;
    password: string;
}

export interface LoginInput {
    email: string;
    password: string;
}

export interface User {
    id: string;
    fullname: string;
    email: string;
    password: string;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export interface AuthPayload {
    token: string;
    user: User;
}

export interface IQuery {
    users(): User[] | Promise<User[]>;
    getUserByEmail(email: string): User | Promise<User>;
}

export interface IMutation {
    signup(data: CreateUserInput): User | Promise<User>;
    login(loginInput: LoginInput): AuthPayload | Promise<AuthPayload>;
}

export type DateTime = any;
type Nullable<T> = T | null;
