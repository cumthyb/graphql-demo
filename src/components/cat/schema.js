/*
 * @Author: hongyongbo
 * @Date: 2019-08-22 08:31:56
 * @LastEditors: hongyongbo
 * @LastEditTime: 2019-08-22 08:31:56
 * @Description: file content
 * @Notice: important notice
 */

const { gql } = require('apollo-server-koa')

const schema = gql`

  type Food {
    id: Int
    name: String
  }

  type Cat {
    color: String
    love: Food
  }

  extend type Query {
    cats: [Cat]
  }
`

module.exports = { schema }