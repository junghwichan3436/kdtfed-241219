import { useForm } from "react-hook-form";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

interface IFormContents {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  repassword: string;
  userName: string;
  extraError?: string;
}

const ToDoList = () => {
  const test = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors }, //form state안에 있는 errors 만 찾아오기 위해 구조분해할당 으로 찾아왔따
    setError, // 특정에러를 커스터마이징 할 수 있따
    setValue,
  } = useForm<IFormContents>({
    defaultValues: {
      email: "@google.com", //그냥 default 값으로 적어놀 수 있따
    },
  });
  // console.log(watch()); //form 안에 사용자가 무엇을 넣었는지 보겠다
  const onValid = (data: IFormContents) => {
    //onValid는 입력되어진 값을 찾아온다
    console.log(data);
    if (data.password !== data.repassword) {
      setError("password", { message: "rePassword is not the same..." });
      setError(
        "repassword",
        { message: "Password is not the same..." },
        { shouldFocus: true } // 포커스가 여기에 찍힌다 shouldFocus
      );
    }
    //setError("extraError", { message: "Server Offline..." }); //원래는 password한 테 이메세지 주세요 이런 거였지만 서버와의 통신에러가 있어라는 것을 주기위해 전체한테 이문구를 준다
    setValue("email", "");
  };

  console.log(errors);

  // console.log(formState.error);

  return (
    //handleSubmit은 useform 안에 있는 함수여서 정의를 해주지 않아도 된다 (제출전용함수)
    <Form onSubmit={handleSubmit(onValid)}>
      <input
        {...register("email", {
          required: true,
          minLength: 10,
          //이 패턴에 부합하는지 않하는 지알아본다
          pattern: {
            value: /^[A-Za-z0-9]+@google.com/gm,
            message: "Only google.com emails is allowed",
          },
        })} //required 는 필수 값이다 값을 적용하지 않으면 넘어가지 않는다!!!!
        // 유효성 검사에 활용하면 좋다
        type="email"
        placeholder="@google로 입력해주세요"
      />
      <span>{errors.email?.message as string}</span>
      {/* 타입단언을 해주어야한다 
      여기들어올 건 스트링이야 라는말 react hookfrom은 다이런식이다
      */}
      <input
        {...register("firstName", {
          required: true,
        })}
        type="text"
        placeholder="First Name"
      />
      <span>{errors.firstName?.message as string}</span>
      <input
        {...register("lastName", {
          required: "Write Here",
          validate: (value) =>
            !value.includes("test") ? "No test Allowed" : true, //test가 있으면 true인데 앞에 부정연산자가 붙었으니 결국엔 test가 붙으면 false를 반환한다
          // true면 통과 아니면 no test allowed 가 뜬다
        })}
        //validate 대소문자를 받고싶거나 이럴 때 사용
        type="text"
        placeholder="Last Name"
      />
      <span>{errors.lastName?.message as string}</span>
      <input
        {...register("userName", { required: true, minLength: 3 })}
        type="text"
        placeholder="User Name"
      />
      <span>{errors.userName?.message as string}</span>
      <input
        {...register("password", {
          required: "Password is 8 required", //광역적인 메세지를 주고싶다
          minLength: {
            value: 8,
            message: "8 words required", // 독립적인 메세지를 주고싶다
          },
        })}
        // required: "Password is 8 required" 너가 안지키면 이메세지를 뱉는다
        // minLength: 10
        type="password"
        placeholder="Password"
      />
      <span>{errors.password?.message as string}</span>
      <input
        {...register("repassword", { required: true })}
        type="password"
        placeholder="Re Password"
      />
      <span>{errors.repassword?.message as string}</span>

      <button>Add</button>
      {/* //안에 들어간 인자값에 todo라는 이름으로 값을 취합할수 있다 */}
      <span> {errors.extraError?.message as string}</span>
    </Form>
  );
};

export default ToDoList;
