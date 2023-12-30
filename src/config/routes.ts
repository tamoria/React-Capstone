import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import About from '../pages/About'
import MyPlants from '../pages/MyPlants'

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string
}

const routes: RouteType[] = [
    {
      path: "",
      component: Home,
      name: "Home Screen",
    },
    {
      path: "/dashboard",
      component: Dashboard,
      name: "Dashboard",
    },
    {
      path: "/about",
      component: About,
      name: "About",
    },
    {
      path: "/plants",
      component: MyPlants,
      name: "My Plants",
    },
];

export default routes