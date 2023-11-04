document.addEventListener("DOMContentLoaded", () => {
    const personaList = document.getElementById("persona-list");
});

function cargarPersona() {
    fetch("/persona", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then(response => response.json())
    .then(data => {
        personaList.innerHTML = "";

        data.forEach(persona => {
            const personaDiv = document.createElement("div");
            personaDiv.innerHTML = `         
            <strong>Nombre:</strong> ${persona.nombre}
            <strong>Apellido:</strong> ${persona.apellido}
            <strong>Email:</strong> ${persona.email}
            <strong>DNI:</strong> ${persona.dni}
            `;
            personaList.appendChild(personaDiv);
        });
    })

    .catch(err => console.error(err));
}