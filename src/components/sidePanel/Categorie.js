import React from "react"
import firebase from '../../firebase/firebase'
import { connect } from "react-redux";
import {setCategorie} from '../../redux/actions/notes'

import { Menu, Icon, Modal, Form, Input, Button } from "semantic-ui-react";


class Categories extends React.Component {
    state = {
      activeCategorie: "",
      user: this.props.currentUser,
      categories: [],
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
        this.setState({ categories: loadedCategories }, () => this.setFirstCategorie());
      });
    };
  
    removeListeners = () => {
      this.state.categoriesRef.off();
    };
  
    setFirstCategorie = () => {
      const firstCategorie = this.state.categories[0];
      if (this.state.firstLoad && this.state.categories.length > 0) {
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
        name: categorieName,
        details: categorieDetails,
        // createdBy: {
        //   name: user.displayName,
        //   avatar: user.photoURL
        // }
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
      this.props.setCurrentCategorie(categorie);
    };
  
    setActiveCategorie = categorie => {
      this.setState({ activeCategorie: categorie.id });
    };
  
    displayCategories = categories =>
      categories.length > 0 &&
      categories.map(categorie => (
        <Menu.Item
          key={categorie.id}
          onClick={() => this.changeCategorie(categorie)}
          name={categorie.name}
          style={{ opacity: 0.7 }}
          active={categorie.id === this.state.activeCategorie}
        >
          # {categorie.name}
        </Menu.Item>
      ));
  
    isFormValid = ({ categorieName, categorieDetails }) =>
      categorieName && categorieDetails;
  
    openModal = () => this.setState({ modal: true });
  
    closeModal = () => this.setState({ modal: false });
  
    render() {
      const { categories, modal } = this.state;
  
      return (
        <React.Fragment>
          <Menu.Menu style={{ paddingBottom: "2em" }}>
            <Menu.Item>
              <span>
                <Icon name="exchange" /> CategorieS
              </span>{" "}
              ({categories.length}) <Icon name="add" onClick={this.openModal} />
            </Menu.Item>
            {this.displayCategories(categories)}
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
    { setCategorie }
  )(Categories);
  