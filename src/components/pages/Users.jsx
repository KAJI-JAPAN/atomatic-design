import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/UserCard";
import { useLocation } from "react-router-dom";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `${val}太郎`,
    image: "https://source.unsplash.com/Mv9hjnEUHR4",
    email: "sfasfafafa",
    phone: "sfafasfafafafa",
    company: {
      name: "株式会社"
    }
  };
});

export const Users = () => {
  const { state } = useLocation();
  const isAdmin = state ? state.isAdmin : false;

  return (
    <Scontainer>
      <h2>USERSページ</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} isAdmin={isAdmin} />
        ))}
      </SUserArea>
    </Scontainer>
  );
};

const Scontainer = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
