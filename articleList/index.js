const request = require('request-promise')


const sign = require('./origin_script')



module.exports = async ({url}) => {
  const userId = url.match(/\/profile\/((.)*)$/)[1]

  const signLink = `/api/sns/web/v1/user_posted?num=30&cursor=&user_id=${userId}`
  const xst = await sign(signLink)

  const body = await request({
    url: `https://edith.xiaohongshu.com/api/sns/web/v1/user_posted?num=30&cursor=&user_id=${userId}`,
    headers: {
      cookie: 'web_session=030037a4c4567605fab7fa5280244a183dbd47;',
      ...xst,
    },
    json: true,
  })

  console.log(body);
}
