import React from "react";
import { MemoizedBanner } from '../components/Banner';
import { MemoizedSection } from '../components/Section';

function Home() {
  return (
    <div>
      <MemoizedBanner type={'movie/popular'} />
      <br />
      <MemoizedSection type={'tv/popular'} text={'지금 방영 중인 컨텐츠'} />
      <br />
      <MemoizedSection type={'tv/top_rated'} text={'실시간 인기'} />
      <br />
      <MemoizedSection type={'movie/upcoming'} text={'사용자님을 위한 추천'} />
      <br />
      <br />
    </div>
  )
}

export default Home;