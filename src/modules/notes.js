import $ from "jquery";


export const GETNOTE_REQUESTED = 'notes/GETNOTE_REQUESTED'
export const GETNOTE = 'notes/GETNOTE'

export const CHANGEPAGE_REQUESTED = 'notes/CHANGEPAGE_REQUESTED'
export const CHANGEPAGE = 'notes/CHANGEPAGE'

export const GETTAG_REQUESTED = 'notes/GETTAG_REQUESTED'
export const GETTAG = 'notes/GETTAG'

const initialState = {
  notes: [],
  totalPages: 1,
  note: {},
  tag:{},
  isNotes: false,
  isNote: false,
  isTag: false,
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
      
      
    case GETTAG_REQUESTED:
      return {
        ...state,
		isTag: true,
        tag: action.data
      }

    case GETTAG:
      return {
        ...state,
		isTag: false,
        tag: action.data
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


export const getTagAsync = (id) => {
  return dispatch => {
    dispatch({
      type: GETTAG_REQUESTED
    });
	
    return $.ajax({
	  url: "/api/tag.json",
	  data: {
		id: id
	  },
	  success: function( result ) {

		  dispatch({
			type: GETTAG,
			data: result
		  });
		  
	  }
	});
	
  }
}