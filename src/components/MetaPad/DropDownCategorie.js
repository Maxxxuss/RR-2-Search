import React, {Component} from 'react';
import Downshift, { StateChangeTypes } from 'downshift'
import {menuStyles, comboboxStyles} from '../../Styles/Categorie'
import PropTypes from 'prop-types'
// import { categorie } from '../../redux/actions/action-types';
import { Placeholder } from 'semantic-ui-react';
import {matchSorter} from 'match-sorter'
// import { css } from 
import styled from '@emotion/styled'
import { css as emoCSS } from '@emotion/css'
import { getAllCategories } from '../../redux/selectors/allCategories';
import { contentType } from 'mime-types';


class DropDownCategorie extends Component {

    state = {
      allCategories: this.props.allCategories,
      // catName: categorie.catName ? categorie.catName : "",
      catName: "", 
      actCategorie: "",
      activeNote: this.props.activeNote,
      isOpen: "" ,
      notes: this.props.notes,
      categorie: ""
        }
        
       getItems(filter) {
         
         const allItems = this.props.allCategories
          return filter
            ? matchSorter(allItems, filter, {
                keys: ['catName'],
              })
            : allItems
        }

      onContentChange = (e) => {
        const categorie = e.target.value
        this.setState (()=> ({categorie}))
        const activeNote = this.props.activeNote
        // console.log(categorie)
        console.log(activeNote)
      }

      onNoteEdit = () => {

       const updates = this.state.categorie

        this.props.startEditNotesContent(this.props.activeNote, {updates})
        // console.log("DropDown-ActiveNote-ID: " + this.props.activeNote.id)
        console.log("sate catName" + this.state.catName)
        console.log("DropDown-Categorie: " + JSON.stringify(updates))
        console.log("DorpDownCat-State-Cate: " + JSON.stringify(this.state.categorie))
      }



      handleSearchChange = itemToString => {
        this.setState(
          {
            categorie: itemToString
          },
          () => this.onNoteEdit()
        );
      }

       stateReducer = (state, changes) => {
        // this prevents the menu from being closed when the user
        // selects an item with a keyboard or mouse
        switch (changes.type) {
          case Downshift.stateChangeTypes.keyDownEnter:
          case Downshift.stateChangeTypes.clickItem:
            return {
              ...changes,
              isOpen: state.isOpen,
              highlightedIndex: state.highlightedIndex,
            }
          default:
            return changes
        }
      }

      handelChange = (e) => {
        e.preventDefault()

        const categorie = e.target.value

        this.setState(() => ({categorie}))
      }
      
      render () {
        const {activeNote} = this.props
        return (
        <div
        {...css({
          display: 'flex',
          flexDirection: 'column',
          marginTop: 50,
        })}
        >

            {/* < button
              onClick={this.onNoteEdit}
            >
              Handel Cahnge
              </button> */}




        <Downshift
        stateReducer={ this.stateReducer}


          onChange={(itemToString)=>
            {
              this.handleSearchChange(itemToString)
              // this.onNoteEdit(itemToString)
            }
          }
          itemToString={itemToString}
        >
          {({
            getLabelProps,
            getInputProps,
            getToggleButtonProps,
            getMenuProps,
            getItemProps,
            isOpen,
            clearSelection,
            selectedItem,
            inputValue,
            highlightedIndex,
          }) => (
            <div {...css({width: 250, margin: 'auto'})}>
              <Label {...getLabelProps()}>Select categorie</Label>
              <div {...css({position: 'relative'})}>
                <Input
                placeholder= {activeNote ? activeNote.categorie : "Categorie" }
                // value ={this.state.categorie}
                onChange = {this. onContentChange}

                  {...getInputProps({
                    isOpen,
                    placeholder: activeNote ? activeNote.categorie : "Categorie" , 
                    value: this.state.catName

                   } 
                  )}
                />

                {selectedItem ? (
                  <ControllerButton
                    onClick={clearSelection}
                    aria-label="clear selection"
                  >
                    <XIcon />
                  </ControllerButton>
                ) : (
                  <ControllerButton {...getToggleButtonProps()}>
                    <ArrowIcon isOpen={isOpen} />
                  </ControllerButton>
                )}
              </div>
              <div {...css({position: 'relative'})}>
                <BaseMenu {...getMenuProps(isOpen)}>
                  {isOpen
                    ? this.getItems(inputValue).map((item, index) => (
                        <Item
                          key={item.id}
                          // onChange = {this.onContentChange}
                          {...getItemProps({
                            item,
                            index,
                            isActive: highlightedIndex === index,
                            isSelected: selectedItem === item,
                          })}
                        >
                          {itemToString(item)}, 
                        </Item>
                      ))

                    : null}
                </BaseMenu>
              </div>

            </div>
          )}
        </Downshift>
      </div>
      )

 }
}


const Label = styled('label')({
  fontWeight: 'bold',
  display: 'block',
  marginBottom: 10,
})



const ControllerButton = styled('button')({
  backgroundColor: 'transparent',
  border: 'none',
  position: 'absolute',
  right: 0,
  top: 0,
  cursor: 'pointer',
  width: 47,
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
})
const onAttention = '&:hover, &:focus'
const Input = styled('input')(
  {
    width: '100%', // full width - icon width/2 - border
    fontSize: 14,
    wordWrap: 'break-word',
    lineHeight: '1em',
    outline: 0,
    whiteSpace: 'normal',
    minHeight: '2em',
    background: '#fff',
    display: 'inline-block',
    padding: '1em 2em 1em 1em',
    color: 'rgba(0,0,0,.87)',
    boxShadow: 'none',
    border: '1px solid rgba(34,36,38,.15)',
    borderRadius: '.30rem',
    transition: 'box-shadow .1s ease,width .1s ease',
    [onAttention]: {
      borderColor: '#96c8da',
      boxShadow: '0 2px 3px 0 rgba(34,36,38,.15)',
    },
  },
  ({isOpen}) =>
    isOpen
      ? {
          borderBottomLeftRadius: '0',
          borderBottomRightRadius: '0',
          [onAttention]: {
            boxShadow: 'none',
          },
        }
      : null,
)

const Item = styled('li')(
  {
    position: 'relative',
    cursor: 'pointer',
    display: 'block',
    border: 'none',
    height: 'auto',
    textAlign: 'left',
    borderTop: 'none',
    lineHeight: '1em',
    color: 'rgba(0,0,0,.87)',
    fontSize: '1rem',
    textTransform: 'none',
    fontWeight: '400',
    boxShadow: 'none',
    padding: '.8rem 1.1rem',
    whiteSpace: 'normal',
    wordWrap: 'normal',
  },
  ({isActive, isSelected}) => {
    const styles = []
    if (isActive) {
      styles.push({
        color: 'rgba(0,0,0,.95)',
        background: 'rgba(0,0,0,.03)',
      })
    }
    if (isSelected) {
      styles.push({
        color: 'rgba(0,0,0,.95)',
        fontWeight: '700',
      })
    }
    return styles
  },
)

function ArrowIcon({isOpen}) {
  return (
    <svg
      viewBox="0 0 20 20"
      preserveAspectRatio="none"
      width={16}
      fill="transparent"
      stroke="#979797"
      strokeWidth="1.1px"
      transform={isOpen ? 'rotate(180)' : undefined}
    >
      <path d="M1,6 L10,15 L19,6" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      preserveAspectRatio="none"
      width={12}
      fill="transparent"
      stroke="#979797"
      strokeWidth="1.1px"
    >
      <path d="M1,1 L19,19" />
      <path d="M19,1 L1,19" />
    </svg>
  )
}

const css = (...args) => ({className: emoCSS(...args)})

const itemToString = (i) => (i ? i.catName : '')

const BaseMenu = styled('ul')(
  {
    padding: 0,
    marginTop: 0,
    position: 'absolute',
    backgroundColor: 'white',
    width: '100%',
    maxHeight: '20rem',
    overflowY: 'auto',
    overflowX: 'hidden',
    outline: '0',
    transition: 'opacity .1s ease',
    borderRadius: '0 0 .28571429rem .28571429rem',
    boxShadow: '0 2px 3px 0 rgba(34,36,38,.15)',
    borderColor: '#96c8da',
    borderTopWidth: '0',
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderStyle: 'solid',
  },
  ({isOpen}) => ({
    border: isOpen ? null : 'none',
  }),
)

const Menu = React.forwardRef((props, ref) => (
  <BaseMenu innerRef={ref} {...props} />
))

export default DropDownCategorie