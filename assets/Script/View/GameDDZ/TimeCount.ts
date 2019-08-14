const {ccclass, property} = cc._decorator;

@ccclass
export default class TimeCount extends cc.Component {

    @property(cc.Label)
    time: cc.Label = null;
    // onLoad () {}

    start () {
        
    }

    setTimeCallback(timeNum: number, callback: Function) {

    }
    
    clearTimeCallback() {

    }

    // update (dt) {}
}
