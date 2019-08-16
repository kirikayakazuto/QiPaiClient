import UILoader from "../UIFrameWorld/UILoader";
import RoomTypeConfig from "../config/RoomTypeConfig";
import NetworkManager from "../common/NetworkManager";
import { Stype } from "../common/Stype";
import { DDZGameCtype } from "../common/Ctype";
import { CodeEnum } from "../common/CodeEnum";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameRoomEntry extends cc.Component {

    /** 房间类型 */
    RoomType: number;

    // onLoad () {}

    async init(roomType: number) {
        let config = RoomTypeConfig.RoomConfig[roomType];
        let texture = await UILoader.getInstance().loadRes(config.imgUrl, cc.Texture2D) as cc.Texture2D;
        this.node.getChildByName("bg").getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
        this.RoomType = roomType;
    }

    start () {

    }

    createButtonClick() {
        NetworkManager.sendMessage(Stype.GameService, DDZGameCtype.CreateRoom, null, CodeEnum.OK);
    }

    // update (dt) {}
}