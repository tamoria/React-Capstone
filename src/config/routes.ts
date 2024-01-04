import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import MyPlants from '../pages/MyPlants'
import WhenToPlant from '../pages/WhenToPlant';


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
      path: "/plants",
      component: MyPlants,
      name: "My Plants",
    },
    {
      path: '/plants/when_to_plant',
      component: WhenToPlant,
      name: 'When to Plant',
    },
];

export default routes