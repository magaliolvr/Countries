import TopContent from "../components/TopContent";
import MyCompoent from "../components/MyComponent";

function Homepage() {
  return (
    <div>
      <TopContent className={"header-center"}>
        <h1>Homepage</h1>
      </TopContent>

      <MyCompoent />
    </div>
  );
}

export default Homepage;
