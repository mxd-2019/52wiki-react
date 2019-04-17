// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import Pages from "./pages/control-panel/pages";
import Notes from "./pages/control-panel/notes";
import Console from "./pages/control-panel/console";


// import Settings from "./pages/Settings";
import Login from "./pages/UserLogin";
import Register from "./pages/UserRegister";
import UserLayout from "./layouts/UserLayout";
import BasicLayout from './layouts/BasicLayout/MainRoutes'

export const adminRouter = [
  {
    path: "/admin/pages",
    component: Pages
  },
  {
    path: "/admin/notes",
    component: Notes
  },
  {
    path: "/admin/console",
    component: Console
  },
  // {
  //   path: "/user/",
  //   component: UserLayout
  // },
  // {
  //   path: "/admin/",
  //   component: BasicLayout
  // },


];

export const userRouter = [
  
  {
    path: "/user/login",
    component: Login
  },
  {
    path: "/user/register",
    component: Register
  },
  // {
  //   path: "/user/",
  //   component: UserLayout
  // },
  // {
  //   path: "/admin/",
  //   component: BasicLayout
  // },


];




// export default routerConfig;
