const calculadora = (() => {

	let _valuesToOperate = []
	let _operationsHistory = []

	const soma = (x, y) => x + y 
	const subtrai = (x,y) => x - y
	const multiplica = (x, y) => x*y
	const divide = (x, y) => x / y

	const operadores = {
		'+': soma,
		'-': subtrai,
		'*': multiplica,
		'/': divide,
	}

	const enter = (valor) => {
		if(typeof valor !== 'number' && (valor !== '+' && valor !== '-' && valor !== '*' && valor !== '/' )){
			return ('Por favor, entre com um número ou um operador matemático')
		}
		return _valuesToOperate = [..._valuesToOperate, valor]
	}

	const calculateWithOperator = array => {
		const [firstNumber, operator, secondNumber] = array;
		return operadores[operator] ? operadores[operator](firstNumber, secondNumber) : 'Operador Inválido'
	}

	const equals = () => {
		if (_valuesToOperate.length < 3){
			return 'Dados insuficientes para realizar a tarefa, preencha usando calculadora.enter(seuValor)'
	}
		const _operationResult = calculateWithOperator(_valuesToOperate)
		_operationsHistory = [..._operationsHistory, _valuesToOperate]
		_valuesToOperate = []
	  return (_operationResult)
	} 


    const list = () => {
    	const map = new Map()
      for(const array of _operationsHistory){
      		const [firstNumber, operator, secondNumber] = array;
         	map.set(`${firstNumber} ${operator} ${secondNumber}`, calculateWithOperator(array))
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