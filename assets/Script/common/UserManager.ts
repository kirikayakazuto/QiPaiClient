import { UserInfo } from "../Model/UserInfo";
import UtilHelper from "../Helper/UtilHelper";
import LocalStorageManager from "./LocalStorageManager";

class UserManager {
    userInfo: UserInfo;
    /** 获得游戏id */
    public getGuestId() {
        let guestId = LocalStorageManager.getDecodeMsgToLocal("guestId");
        if(!guestId) {
            guestId = UtilHelper.getOpenId();
            LocalStorageManager.setEncodeMsgToLocal("guestId", guestId);
        }
        return guestId;
    }
}

export default new UserManager();