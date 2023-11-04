import { list, check, todo, home } from "./Icons";


const menu = [
    {
        id: 1,
        title: "All Tasks",
        link: "/",
        icon: home
    },
    {
        id: 2,
        title: "important!",
        link: "/important!",
        icon: list
    },
    {
        id: 3,
        title: "completed!",
        link: "/completed!",
        icon: check
    },
    {
        id: 4,
        title: "Do It Now",
        link: "/incomplete",
        icon: todo
    },

];

export default menu;