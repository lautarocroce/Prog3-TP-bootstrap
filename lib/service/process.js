
export function getAllProcesses() {
    return fetch('http://localhost:3000/productos/')
        .then(res => res.json())
        .then(json => json)
}


export function getOneProcess(id) {
    return fetch(`http://localhost:3000/productos/${id}`)
        .then(res => res.json())
        .then(json => json)
}

