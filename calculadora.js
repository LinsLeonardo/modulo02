let calculadora = (() => {

	let _valuesToOperate = []
	let _operationsHistory = []

	const enter = (valor) => {
		if(typeof valor !== 'number' && (valor !== '+' && valor !== '-' && valor !== '*' && valor !== '/' )){
			return ('Por favor, entre com um número ou um operador matemático')
		}
		return _valuesToOperate = [..._valuesToOperate, valor]
	}

	const calculateWithOperator = array => {
		let calculated
		if(array[1] === '+'){
            calculated = array[0] + array[2]
		}
		if(array[1] === '-'){
            calculated = array[0] - array[2]
		}
		if(array[1] === '*'){
            calculated = array[0] * array[2]
		}
		if(array[1] === '/'){
            calculated = array[0] / array[2]
		}
		return calculated
	}

	const equals = () => {
		let _operationResult = calculateWithOperator(_valuesToOperate)
		
		_operationsHistory = [..._operationsHistory, _valuesToOperate]
		_valuesToOperate = []
	   
	    return (_operationResult)
	} 


    const list = () => {
    	let map = new Map()

    	for(const array of _operationsHistory){
            map.set(`${array[0]} ${array[1]} ${array[2]}`, calculateWithOperator(array))

        }
        return map
    }

	const reset = () => {
		_operationsHistory = []
		_valuesToOperate = []
	}

    return {
        enter,
        equals,
        list,
        reset 
    }

})()