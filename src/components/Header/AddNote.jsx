import React, { Component } from 'react';

// import PropTypes from 'prop-types';


class AddNote extends Component {

    constructor (props) {
        super(props)
        this.state = {
            content: props.note ? props.note.content : '',
        }
    }

    handelAddNote = (e, note) => {
        this.props.onAddNote(this.state.content)
        const content = e.target.value
        this.setState(()=> ({content}))
    }
    updateContent = content => {
        this.setState({content})
    }

    render() {

          return (
            <div> 
                <textarea
                onChange={e => this.updateContent(e.target.value)}
                value={this.state.content}
                />
            <div>
                 <button
                onClick={this.handelAddNote}
                   >
                    Hinzufügen
                </button>


            </div>

            </div>
        )
    }
}

export default AddNote