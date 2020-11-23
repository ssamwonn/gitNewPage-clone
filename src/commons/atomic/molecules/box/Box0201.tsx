import React from 'react';
import Input0101 from '../../atoms/input/Input0101';
import Input0102 from '../../atoms/input/Input0102';
import {
  Header0201Style,
  Box0201Wrapper,
  Box0201SubWrapper,
  CareerSelectBox,
  CareerSelect,
  Box0201Text,
  Box0202Text,
  LineBreak,
} from '../Molecule.styles';

const HeaderSub0102 = () => {
  return (
    <Box0201Wrapper>
      <Box0201SubWrapper>
        <Header0201Style>
          <label>Owner </label>
        </Header0201Style>
        <Header0201Style>
          <label>Repository name </label>
        </Header0201Style>
      </Box0201SubWrapper>
      <Box0201SubWrapper>
        <CareerSelectBox>
          <CareerSelect>
            <option>ssamwonn</option>
            <option>No template</option>
          </CareerSelect>
        </CareerSelectBox>
        <Input0101 />
      </Box0201SubWrapper>
      <Box0201Text>
        Great repository names are short and memorable. Need inspiration? How
        about Improved-disco?
      </Box0201Text>
      <Box0202Text>
        Description <span>(optional)</span>
      </Box0202Text>
      <Input0102 />
      <LineBreak />
    </Box0201Wrapper>
  );
};

export default HeaderSub0102;
