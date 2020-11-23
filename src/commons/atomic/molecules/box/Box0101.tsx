import React from 'react';
import {
  BoxSub0101Style,
  BoxSub0102Style,
  CareerSelectBox,
  CareerSelect,
  BoxSub0101Wrapper,
  LineBreak,
} from '../Molecule.styles';

const HeaderSub0101 = () => {
  return (
    <BoxSub0101Wrapper>
      <BoxSub0101Style>Repository template</BoxSub0101Style>
      <BoxSub0102Style>
        Start your repository with a template repository contents.
      </BoxSub0102Style>
      <CareerSelectBox>
        <CareerSelect>
          <option>No template</option>
          <option>No template</option>
        </CareerSelect>
      </CareerSelectBox>
      <LineBreak />
    </BoxSub0101Wrapper>
  );
};

export default HeaderSub0101;
