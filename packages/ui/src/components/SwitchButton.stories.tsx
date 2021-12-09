import React from 'react';
import { SwitchButton } from './SwitchButton';
export default { 
    title: 'components/SwitchButton',
    component: SwitchButton,
    parameters:{
        componentSubtitle:"스위치 버튼 컴포넌트"
    },
    argTypes: {
         styletype: { control: 
            { 
                type: 'select', 
                options: [ 'primary', 'secondary', ]
            } 
        } 
    }

 };
export const SwitchButtonStory = () => {
    const [value, setValue] = React.useState<boolean>(false);
    return (
        <>
            <h1 style={{ color: 'black' }}>{value.toString()}</h1>
            <SwitchButton value={value} onToggle={setValue} />
        </>
    );
};
