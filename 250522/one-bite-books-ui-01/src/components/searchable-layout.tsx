import React, { ReactNode, useState, useEffect } from "react";
import { useRouter } from "next/router";
import style from "./searchable-layout.module.css";

// children의 타입정의가 필요하다
const SearchableLayout = ({ children }: { children: ReactNode }) => {
  //search안에 있는 값이 바뀌지 않게 해주기
  const [search, Setsearch] = useState("");
  const router = useRouter();
  const q = router.query.q as string;
  useEffect(() => {
    Setsearch(q || "");
  }, [q]);
  //값이 바뀌게 된다면 이벤트
  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    Setsearch(event.target.value);
  };
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!search) return;
    router.push(`/search?q=${search}`);
  };

  //form 은 인풋 태그이니까 안써도 되지만 div태그일때는 설정해주어야하는 이벤트
  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSubmit(event);
    }
  };

  return (
    <div>
      <div>
        <form className={style.searchbar_container} onSubmit={onSubmit}>
          <input
            value={search}
            type="text"
            onChange={onChangeSearch}
            onKeyDown={onKeyDown} // form안에 없다면
            placeholder="검색어를 입력하세요"
          />
          <input type="submit" value="검색" />
        </form>
      </div>
      {/* 자식요소로 컴포넌트를 받을 수 있다 */}
      {children}
    </div>
  );
};

export default SearchableLayout;
