import NetworkManager from "../../common/NetworkManager";
import { Stype } from "../../common/Stype";
import { modelPackage } from "../../protocol/protobuf/Hall";
import { GameType } from "../../common/GameType";
import { HallCtype } from "../../common/Ctype";
import { Message } from "../../protocol/ProtoBufManager";
import UIManager from "../../UIFrameWorld/UIManager";
import { CodeEnum } from "../../common/CodeEnum";

const {ccclass, property} = cc._decorator;

@ccclass
export default class HallLogic extends cc.Component {
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        NetworkManager.registServiceHandler(Stype.HallService, this.HallServiceReturn, this);
    }

    HallServiceReturn(m: Message) {
        switch(m.ctype) {
            case HallCtype.EnterGame:
                entryGame(m);
            break;
        }
    }

    enterGame(type: number) {
        /** 进入游戏场景 */
        let obj = modelPackage.EntryGame.create({
            gameType: GameType.Doudizhu,
        });
        var uint8 = modelPackage.EntryGame.encode(obj).finish();
        NetworkManager.sendMessage(Stype.HallService, HallCtype.EnterGame, uint8, CodeEnum.OK);
    }

    // update (dt) {}
}

function entryGame(m: Message) {
    if(m.code != CodeEnum.OK) {
        cc.log("进入游戏场景失败");
        return ;
    }
    cc.log("进入游戏场景");
    UIManager.GetInstance().CloseUIForms("UIForms/HallForm/HallForm");
    UIManager.GetInstance().ShowUIForms("UIForms/DDZForm/DDZForm");
}
