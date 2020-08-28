import React, { Component } from 'react';
// import PropTypes from 'prop-types';


class Notepad extends Component {
    // static propTypes = {
    //     // content: PropTypes.string.isRequired, 
    //     // id: PropTypes.string.isRequired,
    //     onAddNote: PropTypes.func.isRequired, 
    //     onUpdateNoteContent: PropTypes.func.isRequired,
    // }

    constructor (props) {
        super(props)
        this.state = {content: ""}
    }
    handleChange =(e) => {
        const {onAddNote} = this.props
        const content = e.target.value
        return onAddNote(content)
    }
    handelAddNote = () => {
        this.props.onAddNote(this.state.content)
        this.setState({content:""})
    }
    updateContent = content => {
        this.setState({content})
    }



    render() {
          return (
            <div> 
                <textarea
                // onChange={this.handleChange}
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
                <div>
                    
                <button
                 onClick={this.handelSearch} >
                    Suche
                </button>

                    
                </div>

               

            </div>
        )
    }
}

export default Notepad