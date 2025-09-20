
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

export interface User {
    id: string;
    fullname: string;
    email: string;
    password: string;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export interface IQuery {
    users(): User[] | Promise<User[]>;
}

export interface IMutation {
    createUser(data: CreateUserInput): User | Promise<User>;
}

export type DateTime = any;
type Nullable<T> = T | null;
