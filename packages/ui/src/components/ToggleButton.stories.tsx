import * as React from "react";
import ToggleButton from "./ToggleButton";
export default { title: 'components/ToggleButton' };
export const Test = () => {
    return (
        <ToggleButton items={[
            {
                title: "버튼"
            },
            {
                title: "버튼"
            },
            {
                title: "버튼"
            },
        ]} />
    )
};