import DashBoard from "views/DashBoard";
import Layout from "components/Content/Layout";



const routes = [
  {
    path: "/",
    redirect: "/DataAnalysis/DashBoard1"
  },
  {
    path: "/DataAnalysis",
    name: "DataAnalysis",
    redirect: "/DataAnalysis/DashBoard1",
    component: Layout,
    layout: "Main",
    meta: {
      HideInSidebar: false,
      HideInbreadCrumb: false,
      ShowInTabView: true,
      affix: false,
      icon: "el-icon-data-analysis",
      text: "DataAnalysis"
    },
    children: [
      {
        path: "DashBoard",
        name: "DashBoard",
        component: DashBoard,
        meta: {
          HideInSidebar: false,
          HideInbreadCrumb: false,
          ShowInTabView: true,
          affix: true,
          icon: "el-icon-odometer",
          text: "DashBoard"
        }
      },
    ]
  },
];
export default routes
