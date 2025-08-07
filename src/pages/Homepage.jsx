import Header from "../components/Header";
import MyCompoent from "../components/MyComponent";

function Homepage() {
  return (
    <div>
      <Header className={"header-center"}>
        <h1>Homepage</h1>
      </Header>

      <MyCompoent />
    </div>
  );
}

export default Homepage;
