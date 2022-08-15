function defineNumber (num) {
	let isNumber, result;
	isNumber = true;
	if (num > 1 && num <= 1000) {
		for (let i = 2; i < num; i++) {
			if(num % i === 0) {
				isNumber = false;
			}
		}
		result = isNumber ? `Число ${num} - простое число` : `Число ${num} - составное число`;
	} else if (num > 1000){
		result = 'Данные неверны';
	}
	return result;
};
console.log (defineNumber(5));
console.log (defineNumber(15));
console.log (defineNumber(1050));
console.log (defineNumber(0));
console.log (defineNumber(1));