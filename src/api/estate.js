import api from './index'
import { axios } from '@/utils/request'

export function oneStep(params) {
    return axios({
        url: api.oneStep,
        method: 'get',
        data: params
    })
}

export function selectCompany() {
    return axios({
        url: api.selectCompany,
        method: 'get'
    })
}

export function insertEstate(parameter) {
    return axios({
        url: api.insertEstate,
        method: 'get',
        data: parameter
    })
}

