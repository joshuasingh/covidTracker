const MenuControl = (
  state = { sideMenuClass: "sideMenu", sideMenuBg: "slideMenu_bg" },
  action
) => {
  switch (action.type) {
    case "openSideBar":
      state = {
        sideMenuClass: "sideMenu sideMenuOpen",
        sideMenuBg: "slideMenu_bg slideMenu_bg_open",
      };
      return state;
    case "closeSideBar":
      state = {
        sideMenuClass: "sideMenu",
        sideMenuBg: "slideMenu_bg",
      };
      return state;
    default:
      return state;
  }
};

export default MenuControl;
