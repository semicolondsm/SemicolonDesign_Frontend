import * as React from 'react';
import SwitchButton from './SwitchButton';
export default { title: 'components/SwitchButton' };
export const Test = () => {
    const [value, setValue] = React.useState<boolean>(false);
    return (
        <>
            <h1 style={{ color: 'black' }}>{value.toString()}</h1>
            <SwitchButton value={value} onToggle={setValue} />
        </>
    );
};
