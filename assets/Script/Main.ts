import UIManager from "./UIFrameWorld/UIManager";
const {ccclass, property} = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    start () { 
        UIManager.GetInstance().ShowUIForms("UIForms/HallForm")
    }
    
    
    
}

/** 
 * // var $protobuf = require("protobufjs/minimal");
 * var $protobuf = protobuf;
 * 
 * 
 * public UserCenterServiceReturn(message: Message) {
        let obj = LoginPackage.GuestLoginResp.decode(message.body);
        console.log(obj.code)
    }
    public testBuffon() {
        let obj = LoginPackage.GuestLoginRep.create({
            guestKey: "123321",
        });
        var uint8 = LoginPackage.GuestLoginRep.encode(obj).finish();
        NetWorkManager.getInstance().sendMessage(1, 1, uint8);
    }
 * 
 */