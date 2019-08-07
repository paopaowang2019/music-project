import axios from 'axios'
import {YKUrl, TXUrl, QYUrl} from './config'

export function getYKvideo (page) {
  return axios({
    method: 'get',
    url: YKUrl + page
  })
}

export function getTXvideo (page) {
  return axios({
    method: 'get',
    url: TXUrl + page
  })
}

export function getQYvideo (page) {
  return axios({
    method: 'get',
    url: QYUrl + page
  })
}

export function getDBtop250 (page) {
  return axios({
    method: 'get',
    url: '/ppi/top250'
  })
}
