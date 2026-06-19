import { renderHeader } from "../components/header.js";
import { renderFooter } from "../components/footer.js";
import { createServiceCard } from "../components/serviceCard.js";

document.addEventListener("DOMContentLoaded", () => {
    renderHeader();
    renderFooter();
    loadServices();
});

async function loadServices() {
    const servicesContainer = document.getElementById("services-container");

    try {
        const response = await fetch("./data/services.json");

        if (!response.ok) {
            throw new Error("No fue posible cargar el archivo JSON.");
        }

        const services = await response.json();

        servicesContainer.innerHTML = services
            .map((service) => createServiceCard(service))
            .join("");
    } catch (error) {
        servicesContainer.innerHTML = `
            <p>No fue posible cargar los servicios del sitio.</p>
        `;

        console.error("Error al cargar datos:", error);
    }
}