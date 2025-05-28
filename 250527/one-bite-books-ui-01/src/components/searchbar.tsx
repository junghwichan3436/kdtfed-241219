"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import style from "./searchbar.module.css";

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  const q = searchParams.get("q");
  useEffect(() => {
    setSearch(q || "");
  }, [q]);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = () => {
    if (!search || q === search) return;
    router.push(`/search?q=${search}`);
  };

  const onKeyDown = () => {
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        onSubmit();
      }
    };
  };
  //form태그를 안쓰고 onkeyDown 과 onSubmit 을 썻다
  return (
    <div className={style.container}>
      <input
        type="text"
        value={search}
        onChange={onChangeSearch}
        onKeyDown={onKeyDown}
      />
      <input onClick={onSubmit} type="submit" value="검색" />
      {/* <button>검색</button> */}
    </div>
  );
};

export default Searchbar;
