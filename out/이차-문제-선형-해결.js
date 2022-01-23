"use strict";
// 이차 문제
function 중복_값이_있는지_이차(배열) {
    for (let 기준_인덱스 = 0; 기준_인덱스 < 배열.length; 기준_인덱스++) {
        for (let 비교_인덱스 = 0; 비교_인덱스 < 배열.length; 비교_인덱스++) {
            if (기준_인덱스 !== 비교_인덱스 &&
                배열[기준_인덱스] === 배열[비교_인덱스]) {
                return true;
            }
        }
    }
    return false;
}
// 선형 해결
function 중복_값이_있는지_선형(배열) {
    let 비교용_배열 = [];
    for (let 기준_인덱스 = 0; 기준_인덱스 < 배열.length; 기준_인덱스++) {
        if (비교용_배열[배열[기준_인덱스]] === 1) {
            return true;
        }
        else {
            비교용_배열[배열[기준_인덱스]] = 1;
        }
    }
    return false;
}
