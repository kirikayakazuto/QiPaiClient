import NetworkManager from "../../common/NetworkManager";
import { Stype } from "../../common/Stype";
import { Message } from "../../protocol/ProtoBufManager";
import { DDZGameCtype } from "../../common/Ctype";
import { CodeEnum } from "../../common/CodeEnum";
import { UIFormLucenyType } from "../../UIFrameWorld/config/SysDefine";
import UIManager from "../../UIFrameWorld/UIManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class DDZLogic extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        NetworkManager.registServiceHandler(Stype.GameService, this.GameServiceReturn, this);

        NetworkManager.sendMessage(Stype.GameService, DDZGameCtype.EntryDDZGame, null, CodeEnum.OK);        
    }
    /** 游戏服务 */
    public async GameServiceReturn(m: Message) {
        switch(m.ctype) {
            case DDZGameCtype.EntryDDZGame:
                console.log("进入游戏区间!");
            break;
            case DDZGameCtype.ExitDDZGame:
                console.log("退出游戏区间!");
                UIManager.GetInstance().CloseUIForms("UIForms/DDZForm/DDZForm");
                await UIManager.GetInstance().ShowUIForms("UIForms/HallForm/HallForm");
                UIManager.GetInstance().ShowUIForms("UIForms/DDZForm/UserInfoForm");
            break;
            case DDZGameCtype.CreateRoom:
                console.log("创建游戏房间!");
                UIManager.GetInstance().ShowUIForms("UIForms/DDZForm/DDZRoomForm");
            break;
            case DDZGameCtype.EntryRoom:
            break;
            case DDZGameCtype.ExitRoom:
            break;
            
        }
    }

    // update (dt) {}
}
