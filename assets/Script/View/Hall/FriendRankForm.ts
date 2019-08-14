import BaseUIForm from "../../UIFrameWorld/BaseUIForm";
import { UIFormType } from "../../UIFrameWorld/config/SysDefine";
import UIType from "../../UIFrameWorld/UIType";
import AdaptationManager, { AdaptationType } from "../../UIFrameWorld/AdaptationManager";
import GEventManager from "../../UIFrameWorld/GEventManager";
import { HallSceneType } from "./HallConfig";
import ChooseRoomForm from "./ChooseRoomForm";
import GameRoomEntry from "../../Control/GameRoomEntry";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends BaseUIForm {

    CurrentUIType = new UIType(UIFormType.Fixed);
    
    @property(cc.Prefab)
    friendInfoItem: cc.Prefab = null;
    @property(cc.Prefab)
    friendRoomItem: cc.Prefab = null;
    @property(cc.Node)
    scrollContent: cc.Node = null;

    @property(cc.Sprite)
    titleSprite: cc.Sprite= null;

    @property([cc.SpriteFrame])
    titleSpriteArr: Array<cc.SpriteFrame> =[];

    isCallFriendType = false;
    // onLoad () {}

    start () {
        GEventManager.on("HallSceneType", this.switchHallSceneType, this);
        this.initList(HallSceneType.Normal)
    }

    initList(type: HallSceneType) {
        this.scrollContent.removeAllChildren();
        if(type == HallSceneType.Normal) {
            this.titleSprite.spriteFrame = this.titleSpriteArr[0];
            for(let i=0; i<5; i++) {
                let node = cc.instantiate(this.friendInfoItem);
                node.parent = this.scrollContent;
            } 
        }
        if(type == HallSceneType.FriendRoom) {
            this.titleSprite.spriteFrame = this.titleSpriteArr[1];
            for(let i=0; i<2; i++) {
                let node = cc.instantiate(this.friendRoomItem);
                node.getComponent(GameRoomEntry).init(100);
                node.parent = this.scrollContent;
            }
        }
    }

    switchHallSceneType(type: any) {
        AdaptationManager.GetInstance().removeAdaptationToForm(this.node);
        switch(type) {
            case HallSceneType.Normal:
                this.initList(type);
                this.node.runAction(cc.sequence(
                    cc.moveBy(0.3, cc.v2((this.node.width + 20), 0)).easing(cc.easeBackIn()),
                    cc.callFunc(() => {
                        AdaptationManager.GetInstance().adaptationFormByType(AdaptationType.Left, this.node, 10);
                    })
                ));
            break;
            case HallSceneType.ChooseRoom:
                this.node.runAction(cc.moveBy(0.3, cc.v2(-(this.node.width + 20), 0)).easing(cc.easeBackIn()));
            break;
            case HallSceneType.FriendRoom:
                this.node.runAction(cc.sequence([
                    cc.moveBy(0.3, cc.v2(-(this.node.width + 20), 0)).easing(cc.easeBackIn()),
                    cc.delayTime(0.1),
                    cc.callFunc(() => {
                        if(!this.isCallFriendType) {
                            this.initList(type);
                            this.isCallFriendType = true;
                        }
                        else {
                            this.initList(HallSceneType.Normal)
                            this.isCallFriendType = false;
                        }
                        
                    }),
                    cc.moveBy(0.3, cc.v2((this.node.width + 20), 0)).easing(cc.easeBackIn()),
                    cc.callFunc(() => {
                        AdaptationManager.GetInstance().adaptationFormByType(AdaptationType.Left, this.node, 10);
                    })
                ]));
            break;
        }
    }

    

    // update (dt) {}
}
