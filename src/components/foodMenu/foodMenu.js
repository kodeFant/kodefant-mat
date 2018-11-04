import React, { Component } from 'react'

import foodMenuData, {
  starter,
  lunch,
  dinner,
  dessert,
  drinks,
} from './dummyData/foodMenuData.js'

import styles from './foodMenu.module.css'

import stripesTexture from '../../images/textures/stripes-light.png'

class foodMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuFilter: 'All',
    }
    this.filteredFoodMenuItems = this.filteredFoodMenuItems.bind(this)
    this.selectMenuCategory = this.selectMenuCategory.bind(this)
    this.generateFoodMenuItems = this.generateFoodMenuItems.bind(this)
  }

  selectMenuCategory(event) {
    event.preventDefault()
    const selectedCategory = event.target.id
    this.setState({
      menuFilter: selectedCategory,
      switch: true,
    })
  }

  filteredFoodMenuItems() {
    if (this.state.menuFilter !== 'All') {
      return foodMenuData.filter(item => {
        return item.mealType === this.state.menuFilter
      })
    }
    return foodMenuData
  }

  activeCategory(category) {
    if (this.state.menuFilter === category) {
      return styles.active
    }
  }

  generateFoodMenuItems() {
    return (
      <div className="row">
        {this.filteredFoodMenuItems().map(item => {
          if (this.state.switch) {
            this.setState({ switch: false })
            return null
          }
          return (
            <div className="col-lg-6" key={item.id}>
              <div className={`${styles.single_menu_product} ${styles.mb_30}`}>
                <div className={styles.menu_product_img}>
                  <img alt="" src={item.image} />
                </div>
                <div className={styles.menu_product_content}>
                  <div className={styles.menu_title_price}>
                    <div className={styles.menu_title}>
                      <h4>{item.name}</h4>
                    </div>
                    <div className={styles.menu_price}>
                      <span>Kr {item.price}</span>
                    </div>
                  </div>
                  <p>{item.categories.join(', ')}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  render() {
    return (
      <div
        className={`${styles.pt_100} ${styles.pb_70} ${styles.gray_bg}`}
        style={{
          backgroundImage: `url(${stripesTexture})`,
        }}
      >
        <div className="container">
          <div
            className={`${styles.section_title} text-center ${styles.mb_50}`}
          >
            <h2>Din meny</h2>
            <p>
              Det er behagelig for kunden å vite på forhånd hva en kan forvente
              hos deg. Merk med allergener. Merk også gjerne om maten er vegansk
              eller vegetarisk. Det gjør det enkelt for mange å velge deg.
            </p>
          </div>
          <div className={`${styles.menu_tab_wrap} ${styles.mb_50}`}>
            <div className={`${styles.menu_tab_list} nav text-center`}>
              <a
                href="#"
                id="All"
                className={this.activeCategory('All')}
                onClick={this.selectMenuCategory}
              >
                Alle
              </a>
              <a
                href="#"
                id={starter}
                onClick={this.selectMenuCategory}
                className={this.activeCategory(starter)}
              >
                Forrett
              </a>
              <a
                href="#"
                id={lunch}
                onClick={this.selectMenuCategory}
                className={this.activeCategory(lunch)}
              >
                Lunsj
              </a>
              <a
                href="#"
                id={dinner}
                onClick={this.selectMenuCategory}
                className={this.activeCategory(dinner)}
              >
                Hovedrett
              </a>
              <a
                href="#"
                id={dessert}
                onClick={this.selectMenuCategory}
                className={this.activeCategory(dessert)}
              >
                Dessert
              </a>
              <a
                href="#"
                id={drinks}
                onClick={this.selectMenuCategory}
                className={this.activeCategory(drinks)}
              >
                Drikke
              </a>
            </div>
          </div>
          <div className="tab-content jump">
            <div id="tab1" className="tab-pane active">
              {this.generateFoodMenuItems()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default foodMenu
