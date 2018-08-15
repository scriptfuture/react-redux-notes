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

	//let note = JSON.parse(this.props).note;
	  
	  	  
	  console.log(this.props.note);
	  
	  
	  return (
		  <div>
	test
	
	
			{/*
			<h1>{this.props.title}</h1>

			<div className="num">{this.props.note.title}</div>
			
			<div className="text">{this.props.note.text}</div>
			
			
			
			<div className="tags">{this.getTags(this.props.tags)}</div>
			
			*/}

		 
   	
			
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
