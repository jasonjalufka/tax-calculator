import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 50px;
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  user-select: none;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  cursor: pointer;
`;

const InnerContainer = styled.div`
  position: absolute;
  width: inherit;
  height: inherit;
  text-transform: uppercase;
  font-size: 10px;
  letter-spacing: 0.2em;

  &:first-child {
    background: #e9e9e9;
    color: #a9a9a9;
  }

  &:nth-child(2) {
    color: white;
    background: ${props =>
      !props.isMarried
        ? 'linear-gradient(to left, #5b86e5, #36d1dc)'
        : 'linear-gradient(to right, #5b86e5, #36d1dc)'};
    clip-path: ${props =>
      !props.isMarried ? 'inset(0 50% 0 0)' : 'inset(0 0 0 50%)'};
    transition: 0.3s cubic-bezier(0, 0, 0, 1);
  }
`;

const Toggle = styled.div`
  width: 50%;
  position: absolute;
  height: inherit;
  display: flex;
  box-sizing: border-box;

  p {
    margin: auto;
  }

  &:nth-child(1) {
    right: 0;
  }
`;

const Label = styled.p`
  font-size: 1rem;
`;

const ToggleSwitch = props => {
  return (
    <Container onClick={() => props.updateTableData()}>
      <InnerContainer>
        <Toggle>
          <Label>Married</Label>
        </Toggle>
        <Toggle>
          <Label>Single</Label>
        </Toggle>
      </InnerContainer>
      <InnerContainer isMarried={props.isMarried}>
        <Toggle>
          <Label>Married</Label>
        </Toggle>
        <Toggle>
          <Label>Single</Label>
        </Toggle>
      </InnerContainer>
    </Container>
  );
};

export default ToggleSwitch;
