import NetworkManager from "../../common/NetworkManager";
import { Stype } from "../../common/Stype";
import { Message } from "../../protocol/ProtoBufManager";
import { DDZGameCtype } from "../../common/Ctype";
import { CodeEnum } from "../../common/CodeEnum";

const {ccclass, property} = cc._decorator;

@ccclass
export default class DDZLogic extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        NetworkManager.registServiceHandler(Stype.GameService, this.GameServiceReturn, this);

        NetworkManager.sendMessage(Stype.GameService, DDZGameCtype.EntryGameScene, null, CodeEnum.OK);        
    }
    /** 游戏服务 */
    public GameServiceReturn(m: Message) {
        switch(m.ctype) {
            case DDZGameCtype.EntryRoom:
                // 玩家信息
            break;
        }
    }

    // update (dt) {}
}
