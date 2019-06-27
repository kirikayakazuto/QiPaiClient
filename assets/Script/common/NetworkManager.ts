import WebSession from "./WebSession";
import ProtoManager, { Message } from "../protocol/ProtoBufManager";

export default class NetWorkManager {
    private static instance: NetWorkManager = null;
    public static getInstance() {
        if(this.instance === null) {
            this.instance = new NetWorkManager();
        }
        return this.instance;
    }
    /**  */
    private _servicesHandlerMap: {[key: number]: Array<ElementEvent>} = null;

    /** 注册一个服务, 如果你注册了这个自定义服务, 那么这个服务可以发送消息给你 */
    public registServiceHandler(stype: number, callback: Function, target: any) {
        if(this._servicesHandlerMap[stype] === undefined) {
            this._servicesHandlerMap[stype] = [];
        }
        this._servicesHandlerMap[stype].push({callback: callback, target: target});
    }
    /** 取消一个注册的服务 */
    public unRegistServiceHandler(stype: number, callback: Function, target: any) {
        let arr = this._servicesHandlerMap[stype];
        if(arr === undefined) return ;
        for(let i=0; i<arr.length; i++) {
            let element = arr[i];
            if(element && element.callback === callback && element.target === target) {
                arr[i] = undefined;
                break;
            }
        }
    }

    private webSession: WebSession = null;

    /** 连接websocket */
    public connectServer(url: string) {
        this.webSession = new WebSocket(url);
        this.webSession.binaryType = "arraybuffer";

        this.webSession.addEventListener("open",        () => {

        });
        this.webSession.addEventListener("message",     (event: MessageEvent) => {
            this.clientRecvMessage(event.data);
        });
        this.webSession.addEventListener("close",       () => {
            this.closeWebSession();
        });
        this.webSession.addEventListener("error",       () => {
            this.closeWebSession();
        });
    }

    /** 发送一条消息 */
    public sendMessage(stype: number, ctype: number, body: Uint8Array) {
        if(!this.checkIsConnect()) {
            return ;
        }
        let buffer = ProtoManager.getInstance().encodeMessage(new Message(stype, ctype, body));
        console.log(buffer);
        this.webSession.send(buffer);
    }

    /** 收到了服务端发送来的数据 */
    private clientRecvMessage(message: Uint8Array) {
        let m = ProtoManager.getInstance().decodeMessage(message);
        cc.log(`收到一个服务端消息${m}`);
        let arr = this._servicesHandlerMap[m.stype];
        if(arr === undefined) {
            cc.log(`收到未知stype的消息, stype: ${m.stype}`);
            return ;
        }
        for(let e of arr) {
            e && e.callback.call(e.target, m);
        }
    }
    /** 关闭websession */
    public closeWebSession() {
        if(
            !this.webSession ||
            this.webSession.readyState === this.webSession.CLOSING || 
            this.webSession.readyState === this.webSession.CLOSED
            ) {
                return ;
        }
        this.webSession.close();
        this.webSession = null;
    }
    
    /** 检查网络是否连接上了 */
    public checkIsConnect() {
        if(this.webSession && this.webSession.readyState === this.webSession.OPEN) {
            return true;
        }
        return false;
    }
}
class ElementEvent {
    callback: Function;
    target: any;
}
