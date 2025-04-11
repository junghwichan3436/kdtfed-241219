"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const goToSchool = (user) => {
    //IStudent를 주면 IStudent의 값을 갖게 된다
    const school = user.profile.school;
    console.log(`${school}로 등교 완료!`);
};
const developerUser = {
    name: "David",
    profile: {
        type: "developer",
        skill: "typescript",
    },
};
const studentUser = {
    name: "David",
    profile: {
        type: "student",
        school: "Ezen",
    },
};
goToSchool(studentUser);
