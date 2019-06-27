export default class ProtoBufTools {
    /** stype1个字节 ctype2个字节 4个字节utag */
    public static headSize = 7;

    public static allocDataView(totalLen: number) {
        let buf = new ArrayBuffer(totalLen);
        return new DataView(buf);
    }
    public static writeBufferToDataView(dataView: DataView, uint8: Uint8Array) {
        for(let i=0; i<uint8.length; i++) {            
            dataView.setUint8(this.headSize + i, uint8[i]);
        }
    }
    /** 获得stypeh和ctype的唯一标识 */
    public static getKeyByStypeAndCtype(stype: number, ctype: number) {
        return (stype * 256 + ctype);
    }

    /** 寻找对应元素的下标 */
    public static findIndexInArray<T>(array: Array<T>, e: T) {
        for(let i=0; i<array.length; i++) {
            if(array[i] === e) {
                return i;
            }
        }
        return -1;
    }   
}