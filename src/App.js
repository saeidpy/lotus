import "./App.css";
import BackgroundLinerDivComponent from "./Components/BackgroundLinerDiv/BackgroundLinerDivComponent";
import CardShopComponent from "./Components/CardShop/CardShopComponent";
import GridContentComponent from "./Components/GridContent/GridContentComponent";
import HeaderComponent from "./Components/Header/HeaderComponent";
import { withIsWeb } from "./withIsWeb";

function App({ isWeb }) {
  return isWeb ? (
    <div className="App">
      <BackgroundLinerDivComponent />
      <HeaderComponent />
      <GridContentComponent />
    </div>
  ) : (
    <img
      alt=""
      style={{ width: "100vw", height: "100vh" }}
      src="/assets/images/coming soon.png"
    />
  );
}

export default withIsWeb(App);
