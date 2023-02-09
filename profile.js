const request = require('request-promise')


const sign = require('./origin_script')



const main = async () => {
  const userId = '55727cfbf5a2635fc1a9d345'

  const signLink = `/api/sns/web/v1/user_posted?num=30&cursor=&user_id=${userId}`
  const xst = await sign(signLink)

  const body = await request({
    url: `https://edith.xiaohongshu.com/api/sns/web/v1/user_posted?num=30&cursor=&user_id=${userId}`,
    headers: {
      cookie: 'web_session=030037a4d73c84f2be0ebc2e9c244a7ed0a652;',
      ...xst,
    },
    json: true,
  })

  console.log(body);
}

main()