import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        // 'API-KEY': '3bb1f301-4343-478c-bd6d-e432168f19d7'
        'API-KEY': process.env['REACT_APP_API_KEY'] as string
    }
})


// ----------- types -----------

export enum ResultCodeType {
    success = 0,
    failed = 1,
    captcha = 10
}

export type CommonResponseType<D = {}> = {
    data: D
    fieldsErrors: Array<string>
    messages: Array<string>
    resultCode: ResultCodeType
}
