import NetworkManager from "./common/NetworkManager";
import HttpManager from "./common/HttpManager";
import UserManager from "./common/UserManager";
import { UserInfo } from "./Model/UserInfo";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Test extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    account = "";

    start () {
        cc.find("test/regist", this.node).on(cc.Node.EventType.TOUCH_END, () => {
            this.regist();
        }, this)
    }
    
    regist() {
        this.account = new Date().toString();
        let url = `http://127.0.0.1:10001/Register?account=${this.account}&password=${123}&openId=${123}&nickName=${123}`
        HttpManager.Get(url, (error, data) => {
            let obj = JSON.parse(data);
            UserManager.userInfo = new UserInfo(`${this.account}`, "123");
            UserManager.userInfo.token = obj.token;

            console.log(obj.message);
            this.connectGateway();
        })
    }

    connectGateway() {
        NetworkManager.connectServer(`ws://127.0.0.1:6010?token=${UserManager.userInfo.token}`);

        this.scheduleOnce(() => {
            NetworkManager.sendMessage(1, 1, null, 1)
        }, 3)
        
    }

    // update (dt) {}
}
