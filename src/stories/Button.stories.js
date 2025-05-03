import Button from "../components/Elements/Button";
import { IoIosAddCircle } from "react-icons/io";

const stories = {
    title: "Buttons",
    component: Button,
};

export default stories;

const themeDark = () => (
    <Button theme="dark">
        {/* <IoIosAddCircle /> */}Buat
    </Button>
);

export {themeDark}