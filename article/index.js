const request = require('request-promise')


const sign = require('./origin_script')



module.exports = async ({url}) => {
  const note_id = url.match(/\/explore\/((.)*)$/)[1]

  const xst = await sign('/api/sns/web/v1/feed', {
    source_note_id: note_id
  })

  const body = await request({
    method: "POST",
    url: `https://edith.xiaohongshu.com/api/sns/web/v1/feed`,
    headers: {
      "content-type": "application/json;charset=UTF-8",
      cookie: 'web_session=030037a4c4567605fab7fa5280244a183dbd47;',
      ...xst,
    },
    body: {
      source_note_id: note_id,
    },
    json: true,
  })

  console.log(body);
}
