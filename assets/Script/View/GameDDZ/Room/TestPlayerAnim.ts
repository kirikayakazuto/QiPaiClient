import PlayerView from "./PlayerView";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    buttonClick(e, data) {
        switch(data) {
            case "sit":
                this.getComponent(PlayerView).showSeat();
                break;
            case "banker":
                this.getComponent(PlayerView).showBankerNode();
            break;
        }
    }

    // update (dt) {}
}
