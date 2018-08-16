import React, { Component } from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  getTagsAsync
} from '../../modules/tags'


class Tags extends Component { 
 
 
  componentDidMount() { 
  

	     this.props.getTagsAsync();


  } 
  
  
  getTags(tags) {
		
	  return tags.map((tag) =>
			<span className="tag" key={tag.id} onClick={(e) => this.props.openTag(tag.id)}>{tag.name}</span>
      );
  }
  
  
  
  render() {
	  
	  
	  return (
		  <div>
			<h1>Теги</h1>


			
			
		  </div>
		);
  }
 
} 


const mapStateToProps = ({ data  }) => ({

  //tags: data.tags,
 // isTags: data.isTags
})


const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
	  getTagsAsync,
	  openTag:  (id) => push('/tag/'+id),
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tags)
