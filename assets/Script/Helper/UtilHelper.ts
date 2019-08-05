class UtilHelper {
    public getOpenId() {
        var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
    　　var maxPos = $chars.length;
    　　var pwd = '';
    　　for (let i = 0; i < 32; i++) {
    　　　　pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    　　}
    　　return pwd;
    }

    public isJSON(str: string) {
        if (typeof str == 'string') {
            try {
                var obj=JSON.parse(str);
                if(typeof obj == 'object' && obj ){
                    return true;
                }else{
                    return false;
                }
    
            } catch(e) {
                return false;
            }
        }
    }
    /** 格式化数值为字符串 */
    public fomatNumFloorToString(num: number) {
        let str = "";
        if(num > 10000) {
            str = Math.floor(num/10000) + "万";
        }else if(num >= 1000) {
            str = Math.floor(num/1000)+ "千"
        }
        return str;
    }
}

export default new UtilHelper();