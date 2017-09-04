export default function(state= null, action) {
	switch(action.type) {
		case "MANGO_TREE":
			console.log('masuk case?')
			let mangoAge = action.payload
			console.log('payload isinya: ', mangoAge)
			return {...state, age: mangoAge }
		default:
			return state
	}
}