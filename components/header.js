export function renderHeader() {
    const headerContainer = document.getElementById("header-container");

    headerContainer.innerHTML = `
        <header class="site-header">
            <nav class="navbar">
                <span class="navbar-title">Sitio Modular</span>
                <ul class="navbar-list">
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="#services-container">Servicios</a></li>
                </ul>
            </nav>
        </header>
    `;
}