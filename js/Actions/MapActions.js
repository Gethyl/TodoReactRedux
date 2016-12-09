
export const AddPin = (newMarker) => ({
	type: "ADD_PIN",
	newMarker: newMarker
})

export const RemovePin = (index) => ({
	type: "REMOVE_PIN",
	index: index
})


