import css from "styles/app.module.scss";
import useSideBar from "store/hooks/useSideBar";

const SideBar = () => {
  const { sideTabState, tabHandler } = useSideBar();
  return (
    <div className={css.side}>
      <div className={css.logo}>
        <h4>{sideTabState.tabName}</h4>
      </div>
      <div className={css.controls}>
        {tabData.map((data, index) => {
          const check = sideTabState.tabName === data.name;
          const buttonStyle = {
            background: check ? "#2196f3" : "",
          };
          return (
            <button
              style={buttonStyle}
              key={index}
              onClick={() => tabHandler(data.name)}
            >
              {data.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;

const tabData = [
  {
    name: "All Notes",
    // icon:<SVGICon/>
  },
  {
    name: "Favorites",
    // icon:<SVGICon/>
  },
  {
    name: "Locked",
    // icon:<SVGICon/>
  },
  {
    name: "Tabs",
    // icon:<SVGICon/>
  },
];
