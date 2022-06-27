import SideBar from "containers/sidebar";
import MainBar from "containers/main";
import css from "styles/app.module.scss";
import StickyButton from "components/sticky";
import ModelContainer from "components/Model";
import Form from "components/form";
import useModel from "store/hooks/useModel";

function App() {
  const { modelHandler, modelState } = useModel();
  return (
    <div className={css.app}>
      <SideBar />
      <MainBar />
      <ModelContainer isOpen={modelState === "formModel"}>
        <Form
          onSubmit={function (): void {
            throw new Error("Function not implemented.");
          }}
          onClose={() => modelHandler("")}
        />
      </ModelContainer>
      <StickyButton onClickModel={() => modelHandler("formModel")} />
    </div>
  );
}
export default App;
