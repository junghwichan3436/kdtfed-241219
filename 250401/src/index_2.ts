//제네릭 타입별칭
interface IStudent {
  type: "student";
  school: string;
}

interface IDeveloper {
  type: "developer";
  skill: string;
}

interface IUser {
  name: string;
  profile: IStudent | IDeveloper;
}
interface IUser<T> {
  profile: T;
}

const goToSchool = (user: IUser<IStudent>) => {
  //IStudent를 주면 IStudent의 값을 갖게 된다
  const school = user.profile.school;
  console.log(`${school}로 등교 완료!`);
};

const developerUser: IUser<IDeveloper> = {
  name: "David",
  profile: {
    type: "developer",
    skill: "typescript",
  },
};
const studentUser: IUser<IStudent> = {
  name: "David",
  profile: {
    type: "student",
    school: "Ezen",
  },
};

goToSchool(studentUser);
