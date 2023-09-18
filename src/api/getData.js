import { FetchGet } from "./fetchConfig"
const getData = async (data,api) => {
    return new Promise((resolve, reject) => {
        let url='https://mitehome.zendesk.com'+api
        FetchGet(url,data).then((res) => {
            resolve(res)
        }).catch(err => {
            // '请检查网络是否连接正确!'
            reject(err)
        })
    })

}
const ticketsGet=async(data)=>{ let res= await getData(data,'/api/v2/tickets.json');return res}
const firstGet=async(data)=>{ let res= await getData(data,'/oauth/authorizations/new');return res}

export { 
    ticketsGet,
    firstGet
 }


