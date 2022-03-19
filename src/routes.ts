import About from "Pages/About";
import Contact from "Pages/Contact";
import Homepage from "Pages/Homepage";
import Showcase from "Pages/Showcase";

export const appRoutes = [
  { name: "home", component: Homepage, path: "/home" },
  { name: "showcase", component: Showcase, path: "/showcase" },
  { name: "about", component: About, path: "/about" },
  { name: "contact", component: Contact, path: "/contact" },
];
