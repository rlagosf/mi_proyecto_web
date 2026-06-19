export function renderFooter() {
    const footerContainer = document.getElementById("footer-container");

    footerContainer.innerHTML = `
        <footer class="site-footer">
            <p>
                Desarrollado para la asignatura Aplicaciones y Tecnologías de la Web.
            </p>
        </footer>
    `;
}