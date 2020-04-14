
export default function (obj) {
    let url = obj.url || '';
    let method = obj.method || 'GET';
    let data = obj.data || '';
    url = 'https://shijiewangguo.cn:9000' + url;
    return  new Promise((resolve, reject) => {
        mpvue.request({
            url,
            method,
            data,
            success: function(info) {
                resolve(info.data);
            },
            fail: function(err) {
                
            }
        });
    })
}