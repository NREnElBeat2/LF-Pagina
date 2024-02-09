const inputCantidad = document.querySelector('.input-cantidad');
const btnSuma = document.querySelector('#suma');
const btnResta = document.querySelector('#resta');

let valueByDefault = parseInt(inputCantidad.value);

btnSuma.addEventListener('click', () => {
	valueByDefault += 1;
	inputCantidad.value = valueByDefault;
});

btnResta.addEventListener('click', () => {
	if (valueByDefault === 1) {
		return;
	}
	valueByDefault -= 1;
	inputCantidad.value = valueByDefault;
});