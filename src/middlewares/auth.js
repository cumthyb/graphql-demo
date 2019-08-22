/*
 * @Author: hongyongbo
 * @Date: 2019-08-22 08:21:02
 * @LastEditors: hongyongbo
 * @LastEditTime: 2019-08-22 08:30:17
 * @Description: file content
 * @Notice: important notice
 */
async function main (ctx, next) {

  // 注意，在真实场景中，需要在这里获取请求头部的用户签名，比如：token
  // 并根据用户 token 获取用户信息，然后将用户信息挂载到 ctx 上
  // 这里为了简单演示，省去了上述步骤，挂载了一个模拟的用户信息
  // ctx.user = { name: 'your name', age: Math.random() }

  return next()
}

module.exports = main