import React, {Component} from 'react';
import Downshift from 'downshift'
import {menuStyles, comboboxStyles} from '../../Styles/Categorie'
import PropTypes from 'prop-types'
import { categorie } from '../../redux/actions/action-types';




class DropDownCategorie extends Component {

    state = {
      allCategories: this.props.allCategories,
      categorieName: ""
        }



    showAllCategories = ( allCategories) =>{
      console.log("Ausgabe der Kategorien: " + allCategories[1].name )

    }

    // setAllCategories = (allCategories) => 
    //   allCategories.map(categorie => ( 
    //   <li
    //     key= {categorie.id}
    //   >
    //     * {categorie.name}
    //   </li>

    //   ))

      setAllCategories = (allCategories) => {

      // const cat = mymap.get(allCategories.name)
      // console.log(cat)
      console.log(allCategories)

      }

    

      
      render () {

        const items = this.state.allCategories
        // const items = (allCategories) => (
        //   allCategories.map(categorie.name)
        // )

          const {allCategories} = this.state

        return (

            <div>

                <button
                onClick= {() => this.setAllCategories(allCategories)}
                >
                    showCategorie

                </button>

                <div>
                  {/* {this.setAllCategories(allCategories)} */}
                </div>
      <div>



        <Downshift
          onChange={(selection) =>
            alert(selection ? `You selected ${selection.name}` : 'Selection Cleared')
          }
          itemToString={(item) => (item ? item.name : '')}
        >
          {({
            getInputProps,
            getItemProps,
            getMenuProps,
            getLabelProps,
            getToggleButtonProps,
            inputValue,
            highlightedIndex,
            selectedItem,
            isOpen,
          }) => (
            <div style={comboboxStyles}>
              <label {...getLabelProps()}>Enter a fruit:</label>
              <input {...getInputProps()} />
              <button {...getToggleButtonProps()} aria-label={'toggle menu'}>
                &#8595;
              </button>
              <ul {...getMenuProps()} style={menuStyles}>
                {isOpen &&
                  items
                    .filter((item) => !inputValue || item.name.includes(inputValue))
                    .map((item, index) => (
                      <li
                        {...getItemProps({
                          key: `${item.name}${index}`,
                          item,
                          index,
                          style: {
                            backgroundColor:
                              highlightedIndex === index ? 'lightgray' : 'white',
                            fontWeight: selectedItem === item ? 'bold' : 'normal',
                          },
                        })}
                      >
                        {item.name}
                      </li>
                    ))}
              </ul>
            </div>
          )}
        </Downshift>
        </div>

        </div>

      )

 }
}

export default DropDownCategorie