import React from "react"
import firebase from '../../firebase/firebase'
import { connect } from "react-redux";
import {setCategorie, setNotesOnCategorie} from '../../redux/actions/notes'
import {setAllCatetegories} from '../../redux/actions/categorie'

import { Menu, Icon, Modal, Form, Input, Button } from "semantic-ui-react";


class Categories extends React.Component {
    state = {
      activeCategorie: "",
      user: this.props.currentUser,
      categorie: [],
      categorieName: "",
      categorieDetails: "",
      categoriesRef: firebase.database().ref("categories"),
      modal: false,
      firstLoad: true
    };
  
    componentDidMount() {
      this.addListeners();
    }
  
    componentWillUnmount() {
      this.removeListeners();
    }
  
    addListeners = () => {
      let loadedCategories = [];
      this.state.categoriesRef.on("child_added", snap => {
        loadedCategories.push(snap.val());
        this.setState({ categorie: loadedCategories }, () => this.setFirstCategorie());
      });
    };
  
    removeListeners = () => {
      this.state.categoriesRef.off();
    };
  
    setFirstCategorie = () => {
      const firstCategorie = this.state.categorie[0];
      if (this.state.firstLoad && this.state.categorie.length > 0) {
        this.props.setCategorie(firstCategorie);
        this.setActiveCategorie(firstCategorie);
      }
      this.setState({ firstLoad: false });
    };
  
    addCategorie = () => {
      const { categoriesRef, categorieName, categorieDetails, user } = this.state;
  
      const key = categoriesRef.push().key;
  
      const newCategorie = {
        id: key,
        catName: categorieName,
        details: categorieDetails,
      };
  
      categoriesRef
        .child(key)
        .update(newCategorie)
        .then(() => {
          this.setState({ categorieName: "", categorieDetails: "" });
          this.closeModal();
          console.log("categorie added");
        })
        .catch(err => {
          console.error(err);
        });
    };
  
    handleSubmit = event => {
      event.preventDefault();
      if (this.isFormValid(this.state)) {
        this.addCategorie();
      }
    };
  
    handleChange = event => {
      this.setState({ [event.target.name]: event.target.value });
    };
  
    changeCategorie = categorie => {
      this.setActiveCategorie(categorie);
      this.props.setCategorie(categorie);
      this.props.setNotesOnCategorie(categorie)

      console.log("Categorie.id lautet: " + categorie.id)
    };
  
    setActiveCategorie = categorie => {
      this.setState({ activeCategorie: categorie.id });
    };
  
    displayCategories = categorie =>
      categorie.length > 0 &&
      categorie.map(categorie => (
        <Menu.Item
          key={categorie.id}
          onClick={() => this.changeCategorie(categorie)}
          name={categorie.catName}
          style={{ opacity: 0.7 }}
          active={categorie.id === this.state.activeCategorie}
        >
          # {categorie.catName}
        </Menu.Item>
      ));
  
    isFormValid = ({ categorieName, categorieDetails }) =>
      categorieName && categorieDetails;
  
    openModal = () => this.setState({ modal: true });
  
    closeModal = () => this.setState({ modal: false });
  
    render() {
      const { categorie, modal } = this.state;
  
      return (
        <React.Fragment>
          <Menu.Menu style={{ paddingBottom: "2em" }}>
            <Menu.Item>
              <span>
                <Icon name="exchange" /> CategorieS
              </span>{" "}
              ({categorie.length}) <Icon name="add" onClick={this.openModal} />
            </Menu.Item>
            {this.displayCategories(categorie)}
          </Menu.Menu>
  
          {/* Add Categorie Modal */}
          <Modal basic open={modal} onClose={this.closeModal}>
            <Modal.Header>Add a Categorie</Modal.Header>
            <Modal.Content>
              <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                  <Input
                    fluid
                    label="Name of Categorie"
                    name="categorieName"
                    onChange={this.handleChange}
                  />
                </Form.Field>
  
                <Form.Field>
                  <Input
                    fluid
                    label="About the Categorie"
                    name="categorieDetails"
                    onChange={this.handleChange}
                  />
                </Form.Field>
              </Form>
            </Modal.Content>
  
            <Modal.Actions>
              <Button color="green" inverted onClick={this.handleSubmit}>
                <Icon name="checkmark" /> Add
              </Button>
              <Button color="red" inverted onClick={this.closeModal}>
                <Icon name="remove" /> Cancel
              </Button>
            </Modal.Actions>
          </Modal>
        </React.Fragment>
      );
    }
  }
  
  export default connect(
    null,
    { setCategorie, setNotesOnCategorie }
  )(Categories);
  