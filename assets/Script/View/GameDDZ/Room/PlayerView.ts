import AdaptationManager from "../../UIFrameWorld/AdaptationManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class PlayerView extends cc.Component {

    @property(cc.Node)
    BankerNode: cc.Node = null;
    @property(cc.Node)
    HandCards: cc.Node = null;
    @property(cc.Node)
    TimeNode: cc.Node = null;
    @property(cc.Node)
    TipsAction: cc.Node = null;
    @property(cc.Node)
    HeadImgNode: cc.Node = null;
    @property(cc.Node)
    UserInfoNode: cc.Node = null;
    @property(cc.Node)
    SitBtnNode: cc.Node = null;
    // onLoad () {}

    start () {
        this.hideSeat();
    }
    
    playerSitdown() {

    }
    /** 显示庄家图标 */
    showBankerNode() {
        let oldPos = this.BankerNode.position;
        this.BankerNode.position = this.node.convertToNodeSpace(cc.v2(AdaptationManager.GetInstance().VisibleSize.width/2, AdaptationManager.GetInstance().VisibleSize.height/2));
        this.BankerNode.active = true;
        this.BankerNode.runAction(cc.moveTo(0.6, oldPos));
    }

    /** 初始化座位 */
    hideSeat() {
        this.BankerNode.active = false;
        this.HandCards.active = false;
        this.TimeNode.active = false;
        this.TipsAction.active = false;
        this.HeadImgNode.active = false;
        this.UserInfoNode.active = false;
        this.SitBtnNode.active = true;
    }
    showSeat() {
        this.BankerNode.active = false;
        this.HandCards.active = false;
        this.TimeNode.active = false;
        this.TipsAction.active = false;
        this.HeadImgNode.active = true;
        this.UserInfoNode.active = true;
        this.SitBtnNode.active = false;
    }

    

    // update (dt) {}
}
