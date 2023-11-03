import Vue from "vue";
import Router from "vue-router";
// Users
import UserIndex from "@/components/Users/Index";
import UserCreate from "@/components/Users/CreateUser";
import UserEdit from "@/components/Users/EditUser";
import UserShow from "@/components/Users/ShowUser";
//Menu
import MenuIndex from "@/components/Menus/MenuIndex";
import CreateMenu from "@/components/Menus/CreateMenu";
import EditMenu from "@/components/Menus/EditMenu";
import ShowMenu from "@/components/Menus/ShowMenu";

import Login from "@/components/Users/login";

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/users",
      name: "users",
      component: UserIndex
    },

    {
      path: "/user/create",
      name: "users-create",
      component: UserCreate
    },
    {
      path: "/user/edit/:userId",
      name: "user-edit",
      component: UserEdit
    },
    {
      path: "/user/:userId",
      name: "user",
      component: UserShow
    },
    {
      path: "/menus",
      name: "menus",
      component: MenuIndex
    },
    {
      path: "/menu/create",
      name: "menus-create",
      component: CreateMenu
    },

    {
      path: "/menu/edit/:menuId",
      name: "menu-edit",
      component: EditMenu
    },

    {
      path: "/menu/:menuId",
      name: "menu",
      component: ShowMenu
    },

    {
      path: "/login",
      name: "login",
      component: Login
    }
  ]
});
