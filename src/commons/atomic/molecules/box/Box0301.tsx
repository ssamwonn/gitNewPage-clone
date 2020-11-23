import React from 'react';
import Input0103 from '../../atoms/input/Input0103';
import Img0101 from '../../atoms/img/Img0101';
import Img0102 from '../../atoms/img/Img0102';
import {
  Box0301Text,
  Box0302Text,
  Box0301SubWrapper,
  Box0301Wrapper,
  LineBreak,
} from '../Molecule.styles';

const Box0301 = () => {
  return (
    <>
      <Box0301Wrapper>
        <Input0103 />
        <Box0301SubWrapper>
          <Img0101 />
          <div>
            <Box0301Text>Public</Box0301Text>
            <Box0302Text>
              Anyone on the internet can see this repository. You choose who can
              commit.
            </Box0302Text>
          </div>
        </Box0301SubWrapper>
      </Box0301Wrapper>
      <Box0301Wrapper>
        <Input0103 />
        <Box0301SubWrapper>
          <Img0102 />
          <div>
            <Box0301Text>Private</Box0301Text>
            <Box0302Text>
              You choose who can see and commit to this repository.
            </Box0302Text>
          </div>
        </Box0301SubWrapper>
      </Box0301Wrapper>
      <LineBreak />
    </>
  );
};

export default Box0301;
