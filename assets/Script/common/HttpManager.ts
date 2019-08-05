import Config from "../config/Config";
import UserManager from "./UserManager";
import NetworkManager from "./NetworkManager";

class HttpManager {
    public Get(url: string, callback: Function){
        var xhr = cc.loader.getXMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 300)) {
                var respone = xhr.responseText;
                callback(null, respone);
            }
        };
        xhr.open("GET", url, true);
        if (cc.sys.isNative) {
            xhr.setRequestHeader("Accept-Encoding", "gzip,deflate");
        }
 
        xhr.timeout = 5000;
        xhr.send();

    }
    public Post(url, body, callback) {
        var xhr = cc.loader.getXMLHttpRequest();
        xhr.timeout = 5000;
        
        xhr.open("POST",url, true);
        if (cc.sys.isNative){
            xhr.setRequestHeader("Accept-Encoding","gzip,deflate");
        }

        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader("Content-Length", body.length);

        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 300)){
                let ret = xhr.responseText;
                callback(null, ret);
            }
        };
        xhr.send(body);
    }

    /** 获取服务器信息 */
    public getServerInfo(callback: Function) {
        this.Get(`http://${Config.ServerInfo.host}:${Config.ServerInfo.port}/serverInfo`, (err, data) => {
            if(err) {
                cc.log("获取服务器信息失败!")
                callback(err, null);
                return ;
            }
            data = JSON.parse(data);
            callback(null, data);
        });
    }

    /** 游客登录 */
    public geustLogin(guestId: string) {
        this.getServerInfo((err, data) =>{
            if(err) return ;
            let url = `http://${data.host}:${data.port}/OpenIdLogin?openId=${guestId}`;
            this.Get(url, (err, data) => {
                if(err) {
                    cc.log(err);
                    return ;
                }
                let obj = JSON.parse(data);
                this.authPass(obj);
            });
        });
        
    }

    /** 连接网络 */
    public connectNetWork() {
        let url = `http://${Config.ServerInfo.host}:${Config.ServerInfo.port}/gatewayInfo`;
        this.Get(url, (err, data) => {
            if(err) {
                return ;
            }
            data = JSON.parse(data);
            let wsurl = `ws://${data.host}:${data.port}?token=${UserManager.userInfo.token}`;
            NetworkManager.connectServer(wsurl);
        });
    }

    /** 验证通过 */
    private authPass(data: any) {
        if(data.code != 1) {
            cc.log(data.code, data.message)
            return ;
        }
        UserManager.userInfo = data.userInfo;
        this.connectNetWork();
    }
}

export default new HttpManager();