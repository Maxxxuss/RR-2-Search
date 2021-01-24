export const setActiveNote = (note, categorie) => {
    this.setState({ activeNote: note });
    this.setState({ file:  note.image })
    this.setState({content: note.content})
    this.setState({selectedNote: note})
    this.setState({categorie: note.categorie})

    console.log(this.state.activeNote)
    console.log(this.state.categorie)
  };
