export function Nav(props) {

return (
<nav class="container-fluid">
<ul>
<li>
  <a href="#" aria-label="Back home">
    <h1 role="sitelogo">Löyly</h1>
  </a>
</li>
<li>Docs</li>
</ul>
        <ul>
          <li><a href="#" onClick={(event) => props.selectTheme('light')} data-theme-switcher="light">Light</a></li>
          <li><a href="#" onClick={() => props.selectTheme('dark')}>Dark</a></li>
        </ul>
</nav>
)
}

