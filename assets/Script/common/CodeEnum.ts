export enum CodeEnum {
    Unknown = 0,            // 没有赋值
    OK = 1,                 // 成功

    ErrorParams = 50,       //参数异常

    RegistError = 101,      // 注册错误
    RegistAccountIsRegist = 102,        // account已经没注册了
    LoginError = 201,       // 登录错误
    LoginErrorAccount = 202,    // 账号错误
    LoginErrorPassword = 203,   // 密码错误
    LoginErrorStatus = 204,     // 状态不对


    
}