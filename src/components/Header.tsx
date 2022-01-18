import * as React from 'react'

import { Nav } from './Nav.tsx'

export const Header = (props): JSX.Element => (
    <header className="">  
       <Nav selectTheme={props.selectTheme} />
    </header>
);
