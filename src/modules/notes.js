import $ from "jquery";

export const GETNOTE_REQUESTED = 'notes/GETNOTE_REQUESTED'
export const GETNOTE = 'notes/GETNOTE'

export const CHANGEPAGE_REQUESTED = 'notes/CHANGEPAGE_REQUESTED'
export const CHANGEPAGE = 'notes/CHANGEPAGE'

export const GETTAG_REQUESTED = 'notes/GETTAG_REQUESTED'
export const GETTAG = 'notes/GETTAG'

export const REMOVENOTE_REQUESTED = 'notes/REMOVENOTE_REQUESTED'
export const REMOVENOTE = 'notes/REMOVENOTE'

export const NEWNOTE_REQUESTED = 'notes/NEWNOTE_REQUESTED'
export const NEWNOTE = 'notes/NEWNOTE_REQUESTED'

export const UPDATENOTE_REQUESTED = 'notes/UPDATENOTE_REQUESTED'
export const UPDATENOTE = 'notes/UPDATENOTE_REQUESTED'

const initialState = {
  notes: [],
  totalPages: 1,
  note: {},
  tag:{},
  isNotes: false,
  isNote: false,
  isTag: false,
  currentPage: 1,
  isRemove: false,
  isNew: false,
  isUpdate: false
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
		isTag: true
      }

    case GETTAG:
      return {
        ...state,
        currentPage: action.page,
        notes: action.data.notes,
		totalPages: action.data.totalPages,
		isTag: false,
        tag: action.data.tag
      }
	  
    case REMOVENOTE_REQUESTED:
      return {
        ...state,
		isRemove: false
      }

    case REMOVENOTE:
      return {
        ...state,
        isRemove: true
      }
      
    case NEWNOTE_REQUESTED:
      return {
        ...state,
		isNew: false
      }

    case NEWNOTE:
      return {
        ...state,
        isNew: true
      }
      
    case UPDATENOTE_REQUESTED:
      return {
        ...state,
		isUpdate: false
      }

    case UPDATENOTE:
      return {
        ...state,
        isUpdate: true
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
	  type: "GET",
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
	  type: "GET",
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


export const changePageTag = (id, page) => {
  return dispatch => {
    dispatch({
      type: GETTAG_REQUESTED
    });
	
    return $.ajax({
	  type: "GET",
	  url: "/api/tag"+page+".json",
	  data: {
		id: id,
		page: page
	  },
	  success: function( result ) {

		  dispatch({
			type: GETTAG,
			data: result,
		    id: id,
		    page: page
		  });
		  
	  }
	});
	
  }
}

export const removeNote = (id, callback) => {
  return dispatch => {
    dispatch({
      type: REMOVENOTE_REQUESTED
    });
	
    return $.ajax({
	  type: "DELETE",
	  url: "/api/ok.json",
	  data: {
		id: id
	  },
	  success: function( result ) {

		  dispatch({
			type: REMOVENOTE,
			data: result,
		    id: id
		  });
		  
		  callback(result);
		  
	  }
	});
	
  }
}

export const newNote = (title, text, tags, callback) => {
  return dispatch => {
    dispatch({
      type: NEWNOTE_REQUESTED
    });
	
    return $.ajax({
	  type: "GET",
	  url: "/api/ok.json",
	  data: {
		title: title,
        text: text,
        tags: tags
	  },
	  success: function( result ) {

		  dispatch({
			type: NEWNOTE,
			data: result,
            title: title,
            text: text,
            tags: tags
		  });
		  
		  callback(result);
		  
	  }
	});
	
  }
}

export const updateNote = (id, title, text, tags, callback) => {
  return dispatch => {
    dispatch({
      type: UPDATENOTE_REQUESTED
    });
	
    return $.ajax({
	  type: "GET",
	  url: "/api/ok.json",
	  data: {
        id: id,
		title: title,
        text: text,
        tags: tags
	  },
	  success: function( result ) {

		  dispatch({
			type: UPDATENOTE,
			data: result,
            id: id,
            title: title,
            text: text,
            tags: tags
		  });
		  
		  callback(result);
		  
	  }
	});
	
  }
}