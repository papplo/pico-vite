import { Link } from "react-router-dom";

export function Nav(props) {
    return (
        <nav className='container-fluid'>
            <ul>
                <li>
                    <Link to="./" aria-label='Back home'>
                        <h1 role='sitelogo'>Löyly</h1>
                    </Link>
                </li>
                <li>Docs</li>
            </ul>
            <ul>
                <li>
                    <a
                        href='#'
                        onClick={(event) => props.selectTheme('light')}
                        data-theme-switcher='light'>
                        Light
                    </a>
                </li>
                <li>
                    <a href='#' onClick={() => props.selectTheme('dark')}>
                        Dark
                    </a>
                </li>
            </ul>
        </nav>
    );
}
