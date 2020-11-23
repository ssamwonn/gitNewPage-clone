import React from 'react';
import {
  Header0101Style,
  Header0102Style,
  Header0101Wrapper,
  LineBreak,
} from './../Molecule.styles';

const Header0101 = () => {
  return (
    <Header0101Wrapper>
      <Header0101Style>Create a new repository</Header0101Style>
      <Header0102Style>
        A repository contains all project files, including the revision history.
        Already have a project repository elsewhere?{'\n'}
        <a href=" https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/about-readmes">
          import a repository
        </a>
      </Header0102Style>
      <LineBreak />
    </Header0101Wrapper>
  );
};

export default Header0101;
