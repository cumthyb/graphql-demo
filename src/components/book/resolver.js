/*
 * @Author: hongyongbo
 * @Date: 2019-08-22 08:03:58
 * @LastEditors: hongyongbo
 * @LastEditTime: 2019-08-22 08:03:58
 * @Description: file content
 * @Notice: important notice
 */

// src/components/book/resolver.js
const BookStatus = {
  DELETED: 0,
  NORMAL: 1
}

const resolvers = {

  BookStatus,

  Query: {

    book: (parent, args, context, info) => ({
      name: '地球往事',
      price: 66.3,
      status: BookStatus.NORMAL
    })

  }
}

module.exports = resolvers