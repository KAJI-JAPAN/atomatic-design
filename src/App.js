import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/UserCard";
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
    <div className="App">
      <br />
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}
