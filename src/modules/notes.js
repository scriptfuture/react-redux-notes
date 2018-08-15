import $ from "jquery";


export const GETNOTE_REQUESTED = 'notes/GETNOTE_REQUESTED'
export const GETNOTE = 'notes/GETNOTE'

export const CHANGEPAGE_REQUESTED = 'notes/CHANGEPAGE_REQUESTED'
export const CHANGEPAGE = 'notes/CHANGEPAGE'

const initialState = {
  notes: [],
  totalPages: 1,
  note: {},
  isNotes: false,
  isNote: false,
  currentPage: 1
}

export default (state = initialState, action) => {
	
  switch (action.type) {
    case GETNOTE_REQUESTED:
      return {
        ...state,
		isNote: true,
        note: action.data
      }

    case GETNOTE:
      return {
        ...state,
		isNote: false,
        note: action.data
      }
	  
    case CHANGEPAGE_REQUESTED:
      return {
        ...state,
        currentPage: action.page
      }

    case CHANGEPAGE:
      return {
        ...state,
        currentPage: action.page,
        notes: action.data.notes,
		totalPages: action.data.totalPages
      }

    default:
      return state
  }
}

export const getNoteAsync = (id) => {
  return dispatch => {
    dispatch({
      type: GETNOTE_REQUESTED
    });
	
    return $.ajax({
	  url: "/api/note.json",
	  data: {
		id: id
	  },
	  success: function( result ) {

		  dispatch({
			type: GETNOTE,
			data: result
		  });
		  
	  }
	});
	
  }
}


export const changePageNotes = (page) => {

  return dispatch => {
    dispatch({
      type: CHANGEPAGE_REQUESTED
    });
	
	return $.ajax({
	  url: "/api/notes"+page+".json",
	  data: {
		page: page
	  },
	  success: function( result ) {

		  dispatch({
			type: CHANGEPAGE,
			data: result,
			page: page
		  });
		  
	  }
	});
	
 
  }
}