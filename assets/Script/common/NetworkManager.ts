import ProtoManager, { Message } from "../protocol/ProtoBufManager";
import HttpManager from "./HttpManager";

class NetWorkManager {
    
    /**  */
    private _servicesHandlerMap: {[key: number]: Array<ElementEvent>} = {};

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

    private webSession: WebSocket = null;
    /** 连接网络 */
    public connectNetWork(url: string) {
        HttpManager.Get(url, (err, data) => {
            if(err) {
                return ;
            }
            data = JSON.parse(data);
            let wsurl = `ws://${data.host}:${data.port}`;
            this.connectServer(wsurl);
        });
    }

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
    public sendMessage(stype: number, ctype: number, body: Uint8Array, code: number) {
        if(!this.checkIsConnect()) {
            return ;
        }
        let buffer = ProtoManager.getInstance().encodeMessage(new Message(stype, ctype, body, code));
        console.log("send success")
        this.webSession.send(buffer);
    }

    /** 收到了服务端发送来的数据 */
    private clientRecvMessage(message: ArrayBuffer) {
        let m = ProtoManager.getInstance().decodeMessage(message);
        cc.log(`收到一个服务端消息:stype: ${m.stype} ctype: ${m.ctype}`);
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
        cc.log(`连接发生异常, 即将关闭!`);
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

export default new NetWorkManager();