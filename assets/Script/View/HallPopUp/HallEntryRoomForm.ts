import BaseUIForm from "../../UIFrameWorld/BaseUIForm";
import UIType from "../../UIFrameWorld/UIType";
import { UIFormType, UIFormShowMode, UIFormLucenyType } from "../../UIFrameWorld/config/SysDefine";

const {ccclass, property} = cc._decorator;

@ccclass
export default class HallEntryRoomForm extends BaseUIForm {

    CurrentUIType = new UIType(UIFormType.PopUp, UIFormShowMode.Normal, UIFormLucenyType.ImPenetrable);

    @property(cc.Node)
    NumList: cc.Node = null;
    @property(cc.Node)
    EnterList: cc.Node = null;
    @property(cc.Node)
    CloseNode: cc.Node = null;

    roomNum: string = "";

    // onLoad () {}
    start () {
        this.initEnterNum();
        this.CloseNode.on('click', () => {            
            this.CloseUIForm();
        }, this);

        for(const node of this.NumList.children) {
            var clickEventHandler = new cc.Component.EventHandler();
            clickEventHandler.target = this.node; // 这个 node 节点是你的事件处理代码组件所属的节点
            clickEventHandler.component = "HallEntryRoomForm";// 这个是代码文件名
            clickEventHandler.handler = "numButtonClick";
            clickEventHandler.customEventData = node.name;

            var button = node.addComponent(cc.Button);
            button.transition = cc.Button.Transition.SCALE;
            button.zoomScale = 1.1;
            button.clickEvents.push(clickEventHandler);
        }
        
    }
    /**  */
    numButtonClick(e, data) {
        if(data == "retype") {
            this.popRoomNum(true);
            return;
        }
        if(data == "delete") {
            this.popRoomNum(false);
            return;
        }
        this.pushRoomNum(data)
    }
    pushRoomNum(str: string) {
        if(this.roomNum.length >= 6) {
            return ;
        }
        this.roomNum += str;
        this.initEnterNum();
        if(this.roomNum.length == 6) {
            // 将房间号发送给服务器
            console.log(this.roomNum)
        }

    }
    popRoomNum(clearAll: boolean) {
        if(clearAll) {
            this.roomNum = "";
        }else {
            this.roomNum = this.roomNum.substring(0, this.roomNum.length-1);
        }
        this.initEnterNum();
    }

    initEnterNum() {
        let i=0;
        for(; i<this.roomNum.length; i++) {
            this.EnterList.children[i].getChildByName("lab").getComponent(cc.Label).string = this.roomNum[i];
        }
        for(; i<6; i++) {
            this.EnterList.children[i].getChildByName("lab").getComponent(cc.Label).string = "";
        }
    }
    // update (dt) {}
}
