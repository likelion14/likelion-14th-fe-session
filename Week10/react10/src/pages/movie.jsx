import React from "react";
import { MemoizedBanner } from '../components/Banner';
import { MemoizedSection } from '../components/Section';

function Movie() {
  return (
    <div>
      <MemoizedBanner type={'movie/popular'} />
      <br />
      <MemoizedSection type={'movie/now_playing'} text={'현재 방영 중인 영화'} />
      <br />
      <MemoizedSection type={'movie/popular'} text={'인기 순위'} />
      <br />
      <MemoizedSection type={'movie/top_rated'} text={'사용자님을 위한 추천'} />
      <br />
      <br />
    </div>
  )
}

export default Movie;