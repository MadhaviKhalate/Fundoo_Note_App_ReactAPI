const initialDrawerState = {
	
	title: "Keep",
	
};

export const drawerReducer = (state = initialDrawerState, action) => {
	console.log(action)
	switch (action.type) {
		case 'SET_Title_as_Notes':
			return {
				...state,
				title : "Notes"
			};
		case 'SET_Title_as_Remainder':
			return {
				...state,
				title : "Remainder"
			};
			case 'SET_Title_as_EditLabel':
			return {
				...state,
				title : "Edit Label"
			};
            case 'SET_Title_as_Archive':
			return {
				...state,
				title : "Archive"
			};
            case 'SET_Title_as_Trash':
			return {
				...state,
				title : "Trash"
			};

		default:
			return state;
	}
};
