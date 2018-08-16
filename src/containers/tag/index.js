import React, { Component } from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


import {
  getTagAsync
} from '../../modules/notes'


class Tag extends Component { 
 
 
  componentDidMount() { 
  
     let id = 1;
     if(typeof this.props.match.params.id !== "undefined") id = this.props.match.params.id;
  
	 this.props.getTagAsync(id);

  } 
  


  
  render() {

     let tag = {"id":0, "name":""};
	 if(typeof this.props.tag !== 'undefined')  tag = this.props.tag;

	  
	  return (
		  <div>
          
			<h1>Тег: {tag.name}</h1>
			
		  </div>
		);
  }
 
} 


const mapStateToProps = ({ notes }) => ({

  tag: notes.tag,
  isTag: notes.isTag
  
})


const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getTagAsync
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tag)