import * as React from 'react'

export const Header = (props): JSX.Element => (
    <header className="container">  
      <hgroup>
        <h1>Class-less example</h1>
        <h2>Just a pure semantic HTML markup, without <code>.classes</code></h2>
      </hgroup>
      <nav>
        <ul>
          <li>Theme:</li>
          <li><a href="#" onClick={(event) => props.selectTheme('light')} data-theme-switcher="light">Light</a></li>
          <li><a href="#" onClick={() => props.selectTheme('dark')}>Dark</a></li>
        </ul>
      </nav>
    </header>
);
