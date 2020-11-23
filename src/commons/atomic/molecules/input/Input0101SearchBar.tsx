import React from 'react';
import Button0101 from '../../atoms/button/Button0101';
import Input0101Search from '../../atoms/input/InputSearch/Input0101Search';
import {
  InputSearch0101Style,
  Input0101SearchWrapper,
} from '../Molecule.styles';

const Input0101SearchBar = () => {
  return (
    <InputSearch0101Style>
      <Input0101SearchWrapper>
        <Input0101Search />
        <Button0101 />
      </Input0101SearchWrapper>
    </InputSearch0101Style>
  );
};

export default Input0101SearchBar;
