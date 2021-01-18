import React from 'react';



export default class AddDataForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      titel: "",
      description:"",
      buzwords:"", 
      categorie: "",
      // categorie: this.props.categorie,

    };
  }
  onTitelChange = (e) => {
    const titel = e.target.value
    this.setState (()=> ({titel}))
  }

  onDescriptionChange = (e) => {
    const description = e.target.value
    this.setState (()=> ({ description }))
  }

  onBuzWordsChange = (e) => {
    const buzwords = e.target.value
    this.setState (()=> ({buzwords }))
  }

  onCategorieChange = (e) => {
    const categorie = e.target.value
    this.setState (()=> ({ categorie }))
  }


  handelAddNote = (e) => {
    e.preventDefault();

      this.props.onAddNote({
        titel: this.state.titel,
        description: this.state.description,
        buzwords: this.state.buzwords,     
        categorie : this.state.categorie
      });
      const titel = e.target.value
      const description = e.target.value
      const buzwords = e.target.value
      const categorie = e.target.value


      this.setState(()=> ({titel}))
      this.setState(()=> ({description}))
      this.setState(()=> ({buzwords}))
      this.setState(()=> ({categorie}))

    }

  

  render(){

    return (
      <div>
            <div>
          <input          
             type="text"
             placeholder="Titel"
             autoFocus
             className="text-input"
             value={this.state.titel}
             onChange={ this.onTitelChange}
          />

          <input          
          type="text"
          placeholder="Beschreibung"
          className="text-input"
          value={this.state.description}
          onChange={this.onDescriptionChange }          
          /> 

          <input
          type = "text"
          placeholder=" Buz Words "
          className="textarea"
          value={this.state.buzwords}
          // value={this.props.activeNote.buzwords || ""}
          onChange={this.onBuzWordsChange}
         />
        <input
          type = "text"
          placeholder=" Categorie"
          className="textarea"
          value={this.state.categorie}
          // value={this.props.activeNote.buzwords || ""}
          onChange={this.onCategorieChange}
         />

          
          <div>
            <button
              onClick={this.handelAddNote}
            >
              Note-Hinzufügen
              </button>

          </div>
        </div>

      </div>
 
    
    )}
}