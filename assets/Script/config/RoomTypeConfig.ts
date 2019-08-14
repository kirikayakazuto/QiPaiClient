/** 房间配置 */
class RoomTypeConfig {
    
    public RoomConfig = {
        "100": {
            name: "斗地主",
            type: 100,
            poolChips: 0,
            limitChips: [0, 1000000000000],
            maxSitSeats: 3,             // 坐下人数
            maxWatchSeats: 10,          // 观战人数
            specialRule: [],

            thinkTime: 15,

            roomCard: 2,

            imgUrl: "texture/房间入口-斗地主",
        },
    } 
}
export default new RoomTypeConfig();