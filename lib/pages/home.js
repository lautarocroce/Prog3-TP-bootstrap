//IMPORTACIONES
import { getAllProcesses } from "../service/process.js"

//INSTANCIAS DE ELEMENTOS
const contenedor_porhacer = document.getElementById('contenedor-porhacer')
const contenedor_enproduccion = document.getElementById('contenedor-enproduccion')
const contenedor_portestear = document.getElementById('contenedor-portestear')
const contenedor_terminada = document.getElementById('contenedor-terminada')

const fillProcesses = async () => {
	const processes = await getAllProcesses()
	console.log(processes)
	processes.forEach(process => {
		const status = process.status
		let container;
		if (status === "por hacer") {
			container = contenedor_porhacer
		} else if (status === "en produccion") {
			container = contenedor_enproduccion
		} else if (status === "por testear") {
			container = contenedor_portestear
		} else if (status === "terminada") {
			container = contenedor_terminada
		}

		//Crear elemento en la categoria
		container.innerHTML += `
			<div class="col">
				<div class="card h-100">
					<img 
					style="min-height:300px; max-height:300px;"
					class="card-img-top" 
					src="${process.image}" 
					alt="">
					<div class="card-body p-4">
						<div class="text-center">
							<h5 class="fw-bolder">${process.title}</h5>							
						</div>
					</div>
					<div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
						<div class="text-center d-flex gap-1">
							<a href="/detalle.html?id=${process.id}" class="btn btn-outline-secondary mt-auto">Ver más</a>
							<a href="" class="btn btn-outline-success mt-auto">Añadir al carrito</a>
						</div>
					</div>
				</div>
			</div>
		`;
	});
}



fillProcesses()