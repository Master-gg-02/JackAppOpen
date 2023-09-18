import base64 from 'react-native-base64'

//先定义延时函数
const timeout = 15 * 1000
const delay = (n) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('网络超时');
        }, n);
    })
}

//fetch网络请求
const fetchPromise = async (method, url, formData) => {
    let emailAndpassword=base64.encode('1361486476@qq.com:Lwr950708')
    console.log(emailAndpassword)
    try {
        let response = await fetch(
            url,
            {
                method: method,
                body: JSON.stringify(formData),
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Origin': '*',
                    'Access-Control-Allow-Origin': '*',
                    'Authorization':'Basic '+emailAndpassword
                }
            }

        );
        let statusCode = response.status
        if (statusCode == 200) {
            
            try {
                let responseJson = await response.json();
                return responseJson;
            } catch (e) { 
                // 这个捕获是因为NTPSyncWithHost 接口会json解析错误，
                // 该接口返回的数据暂不做处置，直接返回，这是一个问题接口，
                // 硬件暂无人对接
                return response
            }           
        } else if (statusCode == 404) {
            return 404
        } else {
            return '服务端错误'
        }
    } catch (error) {
        return "请检查网络是否连接正确!"
    }
}

//race任务
const _fetch = (fetchPromise) => {
    return Promise.race([fetchPromise, delay(timeout)]);
}

//post
const FetchPost = (url, formData) => {
    return _fetch(fetchPromise('POST', url, formData), timeout);
};

//get
const FetchGet = (url) => {
    return _fetch(fetchPromise('Get', url), timeout);
};

export { FetchPost, FetchGet }
