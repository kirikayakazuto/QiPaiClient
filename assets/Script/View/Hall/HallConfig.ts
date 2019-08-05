export const HallConfig = {
    ChooseRoom: [
        {
            lowScore: 500,
            scoreRange: [1000, 150000],
            roomType: "chuji1",
        },
        {
            lowScore: 1500,
            scoreRange: [80000, 0],
            roomType: "gaoji1"
        },
        {
            lowScore: 800,
            scoreRange: [2000, 100000],
            roomType: "chuji2",
        },
        {
            lowScore: 2000,
            scoreRange: [200000, 0],
            roomType: "gaoji2"
        }
    ]
}
/** 大厅样式 */
export enum HallSceneType {
    Normal = 1,
    ChooseRoom = 2,
    FriendRoom = 3,
}