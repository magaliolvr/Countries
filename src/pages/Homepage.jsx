import TopContent from "../components/TopContent";
import MyCompoent from "../components/MyComponent";
import GlassCard from "../components/GlassCard";

function Homepage() {
  return (
    <div>
      <TopContent className={"main-header"}>
        <GlassCard>
          <h1>Homepage</h1>
        </GlassCard>
      </TopContent>

      <MyCompoent />
    </div>
  );
}

export default Homepage;
