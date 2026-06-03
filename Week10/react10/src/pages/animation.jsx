import React from "react";
import { MemoizedBanner } from '../components/Banner';
import { MemoizedSection } from '../components/Section';

function Animation() {
  return (
    <div>
      <MemoizedBanner type={'tv/top_rated'} />
      <br />
      <MemoizedSection type={'tv/on_the_air'} text={'현재 방영 중인 애니메이션'} />
      <br />
      <MemoizedSection type={'tv/popular'} text={'인기 순위'} />
      <br />
      <MemoizedSection type={'tv/top_rated'} text={'사용자님을 위한 추천'} />
      <br />
      <br />
    </div>
  )
}

export default Animation;