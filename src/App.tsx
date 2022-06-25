import SideBar from "containers/sidebar";
import MainBar from "containers/main";
import css from "styles/app.module.scss";
import StickyButton from "components/sticky";
import ModelContainer from "components/Model";
import Form from "components/form";

function App() {
  return (
    <div className={css.app}>
      <SideBar />
      <MainBar />
      <ModelContainer isOpen={true}>
        <Form />
      </ModelContainer>
      <StickyButton />
    </div>
  );
}
export default App;
