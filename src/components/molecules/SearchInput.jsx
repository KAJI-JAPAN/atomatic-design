import styled from "styled-components";

import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";

export const SearchInput = () => {
  return (
    <Container>
      <Input placeholder="検索する" />
      <ButtonWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </ButtonWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;
const ButtonWrapper = styled.div`
  padding-left: 8px;
`;
