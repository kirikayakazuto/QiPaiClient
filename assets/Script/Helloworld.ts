import {LoginPackage} from "./login"
import NetWorkManager from "./common/NetworkManager";
const {ccclass, property} = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    start () { 
        NetWorkManager.getInstance().connectServer("ws://127.0.0.1:6010");


    }

    testBuffon() {
        let obj = LoginPackage.GuestLoginRep.create({
            guestKey: "123321",
        });
        var uint8 = LoginPackage.GuestLoginRep.encode(obj).finish();
        NetWorkManager.getInstance().sendMessage(1, 1, uint8);
    }
}