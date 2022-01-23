"use strict";
function 이진_검색(배열, 검색_값) {
    let 하한선 = 0;
    let 상한선 = 배열.length - 1;
    while (하한선 <= 상한선) {
        const 중간_지점 = Math.floor((하한선 + 상한선) / 2);
        const 중간_지점_값 = 배열[중간_지점];
        if (검색_값 === 중간_지점_값) {
            return 중간_지점;
        }
        else if (검색_값 < 중간_지점_값) {
            상한선 = 중간_지점 - 1;
        }
        else if (검색_값 > 중간_지점_값) {
            하한선 = 중간_지점 + 1;
        }
    }
    return null;
}
console.log(이진_검색([3, 17, 75, 80, 202], 22)); // null
console.log(이진_검색([3, 17, 75, 80, 202], 80)); // 3
