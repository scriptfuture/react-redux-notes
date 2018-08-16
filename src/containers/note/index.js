import React, { Component } from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


import {
  getNoteAsync
} from '../../modules/notes'


class Note extends Component { 
 
 
  componentDidMount() { 
  
     let id = 1;
     if(typeof this.props.match.params.id !== "undefined") id = this.props.match.params.id;
  
	 this.props.getNoteAsync(id);

  } 
  
  
  getTags(tags) {
		
	  return tags.map((tag) =>
			<span className="tag" key={tag.id} onClick={(e) => this.props.openTag(tag.id)}>{tag.name}</span>
      );
  }
  


  
  render() {

	
    let note = {"id": 0, "title": "", "text":"", "tags": []};
    

     if(typeof this.props.note !== 'undefined') {
        note = this.props.note;
        
        if(typeof this.props.note.tags === 'undefined') {
            note.tags = [];
        }
     }

	  
	  
	  return (
		  <div className="notepage">
          
			<div className="num">{note.id}</div>

			<div className="header">{note.title}</div>
            
         
			<div className="tags">{this.getTags(note.tags)}</div>
            

			<div className="text">
               {note.text}
            
               <button onClick={this.props.history.goBack}>&larr; назад</button>
            </div>

			
		  </div>
		);
  }
 
} 


const mapStateToProps = ({ notes  }) => ({

  note: notes.note,
  isNote: notes.isNote
  
})


const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getNoteAsync,

	  openTag:  (id) => push('/tag/'+id)
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Note)
