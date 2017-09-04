export const mangoTree = (values) => {
	return {
		type: "MANGO_TREE",
		payload: values
	}
}

export const treeGrow = () => {
	console.log('fungsi grow berjalan!')
	
	const age = 0;
	const agePlus = age + 5

	dispatch(mangoTree(agePlus))
}