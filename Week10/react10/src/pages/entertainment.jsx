import React from "react";
import { MemoizedBanner } from '../components/Banner';
import { MemoizedSection } from '../components/Section';

function Entertainment() {
  return (
    <div>
      <MemoizedBanner type={'tv/popular'} />
      <br />
      <MemoizedSection type={'tv/on_the_air'} text={'현재 방영 중인 예능'} />
      <br />
      <MemoizedSection type={'tv/popular'} text={'인기 순위'} />
      <br />
      <MemoizedSection type={'tv/airing_today'} text={'사용자님을 위한 추천'} />
      <br />
      <br />
    </div>
  )
}

export default Entertainment;