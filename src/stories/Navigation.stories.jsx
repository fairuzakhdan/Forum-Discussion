import Navigation from "../components/Layouts/Navigation";
import "../index.css";
import { MemoryRouter } from "react-router-dom";

const stories = {
  title: "Navigation",
  component: Navigation,
};

export default stories;

const TempleteStory = (args) => {
  return (
    <MemoryRouter>
      <Navigation {...args} />{" "}
    </MemoryRouter>
  );
};

const NavigationTheme = TempleteStory.bind({});
Navigation.args = {
  authUser: {
    name: "John Doe",
  },
  signOut: () => {},
  dark: 'theme-dark',
};

export { NavigationTheme };
