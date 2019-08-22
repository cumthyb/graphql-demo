/*
 * @Author: hongyongbo
 * @Date: 2019-08-22 08:03:42
 * @LastEditors: hongyongbo
 * @LastEditTime: 2019-08-22 08:27:09
 * @Description: file content
 * @Notice: important notice
 */
// src/components/book/schema.js
const { gql } = require('apollo-server-koa')

const schema = gql`

  enum BookStatus {
    DELETED
    NORMAL
  }

  type Book {
    id: ID
    name: String
    price: Float
    status: BookStatus
    created: Date
  }

  extend type Query {
    book: Book @auth
  }
`

module.exports = { schema }