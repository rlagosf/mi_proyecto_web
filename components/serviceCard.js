export function createServiceCard(service) {
    return `
        <article class="card">
            <h3>${service.titulo}</h3>
            <p>${service.descripcion}</p>
        </article>
    `;
}