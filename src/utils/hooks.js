import { useEffect, useState } from "react"
import butterCMS from "./buttercms";

// load menu items data
export const useMenuItems = () => {
  const [menus, setMenus] = useState({
    mainMenu: [],
    footerMenu: [],
    leftMenu: [],
    rightMenu: [],
  });

  useEffect(() => {
    const loadData = async () => { 
      const response = await butterCMS.content.retrieve(["navigation_menu"]);
      const allMenus = response.data.data.navigation_menu;
     
      if (allMenus.length > 0) {
        setMenus({
          mainMenu: allMenus[0]?.menu_items || [],
          leftMenu: allMenus[1]?.menu_items || [],
          rightMenu: allMenus[2]?.menu_items || [],
          footerMenu: allMenus[3]?.menu_items || [],
          
        });
      }

    };

    loadData();
  }, []);

  return menus;
};

// load categories
export const useCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadData = async () => { 
      const categories = await butterCMS.category.list()
      setCategories(categories.data.data)
    }

    loadData()
  }, []);

  return categories
}
