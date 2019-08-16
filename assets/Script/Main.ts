import UIManager from "./UIFrameWorld/UIManager";
const {ccclass, property} = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    start () { 
        UIManager.GetInstance().ShowUIForms("UIForms/LoginForm");
    }
    
}