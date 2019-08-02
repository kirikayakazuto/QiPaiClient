/** 数据库存储的数据结构 */
export class UserInfo {
    public uid         : number;             // 
    public openId      : string;          // 

    public account     : string;
    public password    : string;

    public nickName    : string;
    public gender      : number;
    public exp         : number;
    public avatarUrl   : string;
    public diamonds    : number;
    public personalSign: string;

    public data        : number;

    public isActive    : number;       // 是否在线 1表示在线, 0表示不再
    
    public loginDays   : number;
    public createTime  : Date;
    public updateTime  : Date;
    public status      : number;      //  玩家状态, 1正常, -1被封号删除

    public token       : string;


    constructor(account: string, password: string) {
        this.account = account;
        this.password = password;
    }
}