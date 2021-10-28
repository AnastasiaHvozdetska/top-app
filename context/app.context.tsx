import { createContext, useState, useCallback, ReactNode } from "react";
import { MenuItem } from "../interfaces/menu.interface";
import { TopLevelCategory } from "../interfaces/page.interface";


export interface IAppContext {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
  setMenu?: (newMenu: MenuItem[]) => void;

}

export const AppContext = createContext<IAppContext>({menu: [], firstCategory: TopLevelCategory.Courses});

export const AppContextProvider = ({ menu, firstCategory, children}: IAppContext & {children: ReactNode }): JSX.Element => {
  const [menuState, setMenuState] = useState<MenuItem[]>(menu);

  const setMenu = useCallback(
    (newMenu: MenuItem[]) => {
      setMenuState(newMenu)
    },
    [setMenuState],
  )

  return (
    <AppContext.Provider value={{ menu: menuState, firstCategory, setMenu }}>
      children}
    </AppContext.Provider>
  )
}