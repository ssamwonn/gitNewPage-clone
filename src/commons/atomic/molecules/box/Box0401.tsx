import React from 'react';
import Input0104 from '../../atoms/input/Input0104';
import {
  Box0301Wrapper,
  Box0301SubWrapper,
  Box0301Text,
  Box0302Text,
  Box0401Wrapper,
  LineBreak,
} from '../../molecules/Molecule.styles';

const Box0401 = () => {
  return (
    <Box0401Wrapper>
      <Box0301Wrapper>
        <Input0104 />
        <Box0301SubWrapper>
          <div>
            <Box0301Text>Add a README file</Box0301Text>
            <Box0302Text>
              This is where you can write a long description for your project.
              <a href=" https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/about-readmes">
                Learn more.
              </a>
            </Box0302Text>
          </div>
        </Box0301SubWrapper>
      </Box0301Wrapper>
      <Box0301Wrapper>
        <Input0104 />
        <Box0301SubWrapper>
          <div>
            <Box0301Text>Private</Box0301Text>
            <Box0302Text>
              Choose which files not to track from a list of templates.{'\n'}
              <a href=" https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/about-readmes">
                Learn more.
              </a>
            </Box0302Text>
          </div>
        </Box0301SubWrapper>
      </Box0301Wrapper>
      <Box0301Wrapper>
        <Input0104 />
        <Box0301SubWrapper>
          <div>
            <Box0301Text>Private</Box0301Text>
            <Box0302Text>
              A license tells others what they can and cant do with your code.
              {'\n'}
              <a href=" https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/about-readmes">
                Learn more.
              </a>{' '}
            </Box0302Text>
          </div>
        </Box0301SubWrapper>
      </Box0301Wrapper>
      <LineBreak />
    </Box0401Wrapper>
  );
};

export default Box0401;
