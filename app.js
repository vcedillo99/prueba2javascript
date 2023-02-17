const GI = {
	createElement (tag, atributes) {
		let element = document
		return document.createElement(tag)
	}
}


const to_do = [
    'Alimentar al perro',
    'Estudiar para prueba escrita',
    'Pagar taxes',
    'Pasear a perro',
    'Comprar entradas para el cine',
]

function listartodo(params) {
    let lista = document.getElementById('listatodo')
    params.forEach(e => {
        document.createElement('input', 'checkbox')
    });
}