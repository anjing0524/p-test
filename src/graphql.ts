
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface Author {
    __typename?: 'Author';
    id: number;
    firstName?: string;
    lastName?: string;
    posts?: Post[];
}

export interface Post {
    __typename?: 'Post';
    id: number;
    title: string;
    votes?: number;
}

export interface IQuery {
    __typename?: 'IQuery';
    author(id: number): Author | Promise<Author>;
}
