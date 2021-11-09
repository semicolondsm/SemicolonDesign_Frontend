import * as React from "react";
import { ToggleButton } from "./ToggleButton";
export default { title: 'components/ToggleButton' };
export const Test = () => {
    return (
        <ToggleButton defaultValue={120} items={[
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