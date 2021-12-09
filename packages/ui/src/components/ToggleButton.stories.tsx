import * as React from "react";
import { ToggleButton } from "./ToggleButton";
export default { 
    title: 'components/ToggleButton',
    component:ToggleButton,
    parameters:{
        componentSubtitle:"토글 버튼 컴포넌트"
    }
};


export const ToggleButtonStory = () => {
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
            },{
                title: "버튼"
            },
        ]} />
    )
};