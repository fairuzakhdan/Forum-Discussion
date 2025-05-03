import Button from "../components/Elements/Button";
import { IoIosAddCircle } from "react-icons/io";
import "./stories.css";

const stories = {
  title: "Buttons",
  component: Button,
};

export default stories;

const TempleteStory = (args) => {
  return <Button {...args} ><IoIosAddCircle /></Button>;
};

const ThemeAddButton = TempleteStory.bind({});
ThemeAddButton.args = {
  theme: "dark",
};

export { ThemeAddButton };
