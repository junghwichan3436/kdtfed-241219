// 자주사용하는 함수 저장 공간
// 참고용
// n번째 영화 URL값(도메인 + backdorppath) : https://image.tmdb.org/t/p/original/pqzza53yKNX65Z2dgrTbR1KoUnY.jpg

// id: 각각영화의 backdroppath,
export const makeImagePath = (id: string, format?: string) => {
  return `https://image.tmdb.org/t/p/${format ? format : "original"}/${id}`;
};
