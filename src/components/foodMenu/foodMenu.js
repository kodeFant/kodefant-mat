import React, { Component } from 'react'

import foodMenuData, {
  breakfast,
  lunch,
  dinner,
  dessert,
  drinks,
} from './dummyData/foodMenuData.js'

import styles from './foodMenu.module.css'

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
    return this.filteredFoodMenuItems().map(item => {
      return (
        <div key={item.id} className="col-lg-6">
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
                  <span>${item.price}</span>
                </div>
              </div>
              <p>Categories: {item.categories.join(', ')}</p>
            </div>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className={`${styles.pt_100} ${styles.pb_70} ${styles.gray_bg}`}>
        <div className="container">
          <div
            className={`${styles.section_title} text-center ${styles.mb_50}`}
          >
            <h2>Our Food Menu</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim nostrud exercitation ullamco laboris nisi.
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
                All
              </a>
              <a
                href="#"
                id={breakfast}
                onClick={this.selectMenuCategory}
                className={this.activeCategory(breakfast)}
              >
                breakfast
              </a>
              <a
                href="#"
                id={lunch}
                onClick={this.selectMenuCategory}
                className={this.activeCategory(lunch)}
              >
                lunch
              </a>
              <a
                href="#"
                id={dinner}
                onClick={this.selectMenuCategory}
                className={this.activeCategory(dinner)}
              >
                dinner
              </a>
              <a
                href="#"
                id={dessert}
                onClick={this.selectMenuCategory}
                className={this.activeCategory(dessert)}
              >
                dessert
              </a>
              <a
                href="#"
                id={drinks}
                onClick={this.selectMenuCategory}
                className={this.activeCategory(drinks)}
              >
                drinks
              </a>
            </div>
          </div>
          <div className="tab-content jump">
            <div id="tab1" className="tab-pane active">
              <div className="row">{this.generateFoodMenuItems()}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default foodMenu
