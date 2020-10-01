import React, { useState } from 'react';
import HeaderLayout from './layout';

const Header: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);

    return <HeaderLayout open={open} onNavClick={setOpen} />;
};

export default Header;
