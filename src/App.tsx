import SideBar from "containers/sidebar";
import MainBar from "containers/main";
import css from "styles/app.module.scss";

function App() {
  return (
    <div className={css.app}>
      <SideBar />
      <MainBar />
    </div>
  );
}
export default App;
