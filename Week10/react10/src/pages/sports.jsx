import React from "react";
import { MemoizedBanner } from '../components/Banner';
import { MemoizedSection } from '../components/Section';

function Sports() {
  return (
    <div>
      <MemoizedBanner type={'movie/upcoming'} />
      <br />
      <MemoizedSection type={'movie/now_playing'} text={'2026 KBO 리그 중계'} />
      <br />
      <MemoizedSection type={'tv/on_the_air'} text={'2026 KBO 퓨처스 중계'} />
      <br />
      <MemoizedSection type={'tv/popular'} text={'KBO 리그 하이라이트'} />
      <br />
      <br />
    </div>
  )
}

export default Sports;