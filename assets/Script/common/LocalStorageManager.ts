import encrypt = require("../bin/encryptjs");
import UtilHelper from "../Helper/UtilHelper";

class LocalStorageManager {
    private secretkey = "lkDslwqaXsAsd";
    /** 保存键值对 */
    public setEncodeMsgToLocal(key: string, value: string | object) {
        if(typeof(value) == "object") {
            value = JSON.stringify(value);
        }
        // key = encrypt.encrypt(key,this.secretkey,256);
        value = encrypt.encrypt(value,this.secretkey,256);
        console.log(key, value);
        cc.sys.localStorage.setItem(key, value);
    }
    /** 取出键值对 */
    public getDecodeMsgToLocal(key: string) {
        // key = encrypt.encrypt(key,this.secretkey,256);
        let value = cc.sys.localStorage.getItem(key);
        if(!value) {
            return null;
        }
        value = encrypt.decrypt(value,this.secretkey,256);
        let flag = UtilHelper.isJSON(value);
        if(!flag) {
            return value;
        }
        return JSON.parse(value);
    }

}

export default new LocalStorageManager();