import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondaryButton";

export const Top = () => {
  const history = useHistory();
  const onClickAdmin = () =>
    history.push({ pathname: "/users", state: { isAdmin: true } });
  const onClickGeneral = () =>
    history.push({ pathname: "/users", state: { isAdmin: false } });
  return (
    <Scontainer>
      <h2>TOPページ</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
    </Scontainer>
  );
};

const Scontainer = styled.div`
  text-align: center;
`;
