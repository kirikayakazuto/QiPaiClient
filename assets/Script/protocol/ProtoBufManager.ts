import ProtoBufTools from "./ProtoBufTools";

/**
 * @Author: 邓朗 
 * @Date: 2019-06-25 21:22:23  
 * @Describe: 消息管理工具
 */

export default class ProtoManager {
    public static instance: ProtoManager = null;
    public static getInstance() {
        if(this.instance === null) {
            this.instance = new ProtoManager();
        }
        return this.instance;
    }

    /** 解码消息 */
    public decodeMessage(message: ArrayBuffer) {
        if(message.byteLength < ProtoBufTools.headSize) {
            cc.log(`解码头部信息有误, message长度小于最低限制`);
            return ;
        }
        let dataView = new DataView(message);
        let stype: number, ctype: number, body: Uint8Array, code: number;
        stype = dataView.getInt8(0);
        ctype = dataView.getInt16(1, true);
        dataView.getInt32(3, true);
        code  = dataView.getInt16(7, true);
        body  = new Uint8Array(message.slice(9))
        return new Message(stype, ctype, body, code);
    }
    /** 编码消息 */
    public encodeMessage(message: Message): ArrayBuffer {
        let totalLen = 0;
        if(!message.body) {
            totalLen = ProtoBufTools.headSize;    
        }else {
            totalLen = ProtoBufTools.headSize + message.body.byteLength;
        }
            
        let dataView = ProtoBufTools.allocDataView(totalLen);
        dataView.setInt8(0, message.stype);
        dataView.setInt16(1, message.ctype, true);
        dataView.setInt32(3, 0, true);
        dataView.setInt16(7, message.code, true)
        ProtoBufTools.writeBufferToDataView(dataView, message.body);
        return dataView.buffer;
    }
}

export class Message {
    stype: number;
    ctype: number;
    body: Uint8Array;
    code: number;

    constructor(stype: number, ctype: number, body: Uint8Array, code: number) {
        this.stype = stype;
        this.ctype = ctype;
        this.body = body;
        this.code = code;
    }
}