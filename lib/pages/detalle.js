import { getOneProcess } from "../service/process.js"
const id = new URLSearchParams(window.location.search).get('id');

//Inicializar elementos
const process_image = document.getElementById('process-image');
const process_title = document.getElementById('process-title');
const process_description = document.getElementById('process-description');
const process_time = document.getElementById('process-time');
const process_responsible = document.getElementById('process-responsible');
const process_status = document.getElementById('process-status');

//Rellenar los detalles del producto
const fillDetailProcess = async () => {
	const process = await getOneProcess(id)
	if (process) {
		process_image.src = process.image
		process_title.innerText = process.title
		process_description.innerText = process.description
		process_time.innerText = process.time
		process_responsible.innerText = process.responsible
		process_status.innerText = process.status
	}
}

//Llamada a la funcion fillProductosRelacionados
fillDetailProcess()