import React from 'react';
import ONewRepoPage from '../../commons/atomic/organisms/ONewRepoPage';
import { MainPageWrapper } from './MainPage.styles';

const MainPagePresenter = () => {
  return (
    <MainPageWrapper>
      <ONewRepoPage />
    </MainPageWrapper>
  );
};

export default MainPagePresenter;
