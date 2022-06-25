import { BrowserRouter } from "react-router-dom";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/UserCard";
import { HeaderOnly } from "./components/template/HeaderOnly";
import { DefaultLayout } from "./components/template/DefaultLayout";
import "./styles.css";

export default function App() {
  const user = {
    name: "太郎",
    image: "https://source.unsplash.com/Mv9hjnEUHR4",
    email: "sfasfafafa",
    phone: "sfafasfafafafa",
    company: {
      name: "株式会社"
    }
  };
  return (
    <BrowserRouter>
      <DefaultLayout>
        <br />
        <SearchInput />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
}
