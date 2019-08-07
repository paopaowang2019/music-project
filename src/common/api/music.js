import axios from 'axios'

export function getArtist (id) {
  return axios({
    method: 'get',
    url: '/api/cloudmusic/?type=artist&id=' + id
  })
}

export function getPlaylist (id) {
  return axios({
    method: 'get',
    url: '/api/cloudmusic/?type=playlist&id=' + id
  })
}

export function getQQlist () {
  return axios({
    method: 'get',
    url: 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp',
    headers: {
      'Accept': 'application/json',
      'Origin': 'https://y.qq.com',
      'Referer': 'https://y.qq.com/m/index.html'
    },
    params: {
      _: 1563421832808,
      g_tk: 5381,
      uin: 0,
      format: 'json',
      inCharset: 'utf-8',
      outCharset: 'utf-8',
      notice: 0,
      platform: 'h5',
      needNewCode: 1,
      w: 123,
      zhidaqu: 1,
      catZhida: 1,
      t: 0,
      flag: 1,
      ie: 'utf-8',
      sem: 1,
      aggr: 0,
      perpage: 20,
      n: 20,
      p: 1,
      remoteplace: 'txt.mqq.all'
    }
  })
}
