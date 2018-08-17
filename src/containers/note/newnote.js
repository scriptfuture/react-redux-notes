import React, { Component } from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


import {
  getNoteAsync,
  removeNote
} from '../../modules/notes'


class NewNote extends Component { 
 
 
  componentDidMount() { 
   

  } 
  
  render() {

	

	  
	  return (
		  <div className="page-form">
		    <h1>Новая заметка</h1>
		  
			<form>
				<p>
					<label htmlFor="name">Заголовок</label><br />
					<input type="text" id="title" name="title"/>
				</p>
				<p>
					<label htmlFor="name">Текст</label><br />
				    <textarea rows="10" name="text"></textarea>
				</p>
				<p>
					<label htmlFor="name">Теги (через запятую)</label><br />
					<input type="text" id="text" name="text"/>
				</p>
				
			    <p><button type="submit">Отправить</button></p>
			</form>
			

		  </div>
		);
  }
 
} 


const mapStateToProps = ({ notes  }) => ({

  
})


const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getNoteAsync,
	  removeNote,

	  openNotes:  () => push('/notes'),
	  openTag:  (id) => push('/tag/'+id),
	  openUpdateNote:  (id) => push('/update/note/'+id),
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewNote)