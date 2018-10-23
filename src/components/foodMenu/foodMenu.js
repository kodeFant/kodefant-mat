import React, { Component } from 'react'

import menuImage1 from '../../images/product/menu-1.jpg'
import menuImage2 from '../../images/product/menu-2.jpg'
import menuImage3 from '../../images/product/menu-3.jpg'
import menuImage4 from '../../images/product/menu-4.jpg'
import menuImage5 from '../../images/product/menu-5.jpg'
import menuImage6 from '../../images/product/menu-6.jpg'

class foodMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      all: true,
      breakfast: false,
      lunch: false,
      dinner: false,
      dessert: false,
      drinks: false,
    }
  }
  render() {
    return (
      <div className="product-menu-area pt-100 pb-70 gray-bg">
        <div className="container">
          <div className="section-title text-center mb-50">
            <h2>Our Food Menu</h2>
            <p>
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim nostrud exercitation ullamco laboris nisi.
            </p>
          </div>
          <div className="menu-tab-wrap mb-50">
            <div className="menu-tab-list nav text-center">
              <a className="active" href="#tab1" data-toggle="tab">
                All item
              </a>
              <a href="#tab2" data-toggle="tab">
                breakfast
              </a>
              <a href="#tab3" data-toggle="tab">
                lunch
              </a>
              <a href="#tab4" data-toggle="tab">
                dinner
              </a>
              <a href="#tab5" data-toggle="tab">
                party
              </a>
              <a href="#tab6" data-toggle="tab">
                coffee
              </a>
            </div>
          </div>
          <div className="tab-content jump">
            <div id="tab1" className="tab-pane active">
              <div className="row">
                <div className="col-lg-6">
                  <div className="single-menu-product mb-30">
                    <div className="menu-product-img">
                      <img alt="" src={menuImage1} />
                    </div>
                    <div className="menu-product-content">
                      <div className="menu-title-price">
                        <div className="menu-title">
                          <h4>Lamb Salad with Fregola.</h4>
                        </div>
                        <div className="menu-price">
                          <span>$100</span>
                        </div>
                      </div>
                      <p>Categories: Subway, Masala, Indian</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="single-menu-product mb-30">
                    <div className="menu-product-img">
                      <img alt="" src={menuImage2} />
                    </div>
                    <div className="menu-product-content">
                      <div className="menu-title-price">
                        <div className="menu-title">
                          <h4>Ultimate Bacon Burger.</h4>
                        </div>
                        <div className="menu-price">
                          <span>$150</span>
                        </div>
                      </div>
                      <p>Categories: Subway, Masala, Indian</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="single-menu-product mb-30">
                    <div className="menu-product-img">
                      <img alt="" src={menuImage3} />
                    </div>
                    <div className="menu-product-content">
                      <div className="menu-title-price">
                        <div className="menu-title">
                          <h4>Ultimate Bacon Burger.</h4>
                        </div>
                        <div className="menu-price">
                          <span>$200</span>
                        </div>
                      </div>
                      <p>Categories: Subway, Masala, Indian</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="single-menu-product mb-30">
                    <div className="menu-product-img">
                      <img alt="" src={menuImage4} />
                    </div>
                    <div className="menu-product-content">
                      <div className="menu-title-price">
                        <div className="menu-title">
                          <h4>Black Bean & Veggie Fajitas.</h4>
                        </div>
                        <div className="menu-price">
                          <span>$250</span>
                        </div>
                      </div>
                      <p>Categories: Subway, Masala, Indian</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="single-menu-product mb-30">
                    <div className="menu-product-img">
                      <img alt="" src={menuImage5} />
                    </div>
                    <div className="menu-product-content">
                      <div className="menu-title-price">
                        <div className="menu-title">
                          <h4>Oldtimer with Cheese.</h4>
                        </div>
                        <div className="menu-price">
                          <span>$170</span>
                        </div>
                      </div>
                      <p>Categories: Subway, Masala, Indian</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="single-menu-product mb-30">
                    <div className="menu-product-img">
                      <img alt="" src={menuImage6} />
                    </div>
                    <div className="menu-product-content">
                      <div className="menu-title-price">
                        <div className="menu-title">
                          <h4>Crispy Fiery Pepper Crispers.</h4>
                        </div>
                        <div className="menu-price">
                          <span>$120</span>
                        </div>
                      </div>
                      <p>Categories: Subway, Masala, Indian</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="single-menu-product mb-30">
                    <div className="menu-product-img">
                      <img alt="" src={menuImage1} />
                    </div>
                    <div className="menu-product-content">
                      <div className="menu-title-price">
                        <div className="menu-title">
                          <h4>Lamb Salad with Fregola.</h4>
                        </div>
                        <div className="menu-price">
                          <span>$180</span>
                        </div>
                      </div>
                      <p>Categories: Subway, Masala, Indian</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="single-menu-product mb-30">
                    <div className="menu-product-img">
                      <img alt="" src={menuImage2} />
                    </div>
                    <div className="menu-product-content">
                      <div className="menu-title-price">
                        <div className="menu-title">
                          <h4>Ultimate Bacon Burger.</h4>
                        </div>
                        <div className="menu-price">
                          <span>$170</span>
                        </div>
                      </div>
                      <p>Categories: Subway, Masala, Indian</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="tab2" className="tab-pane">
              <div className="row">
                <div className="col-lg-6">
                  <div className="single-menu-product mb-30">
                    <div className="menu-product-img">
                      <img alt="" src={menuImage4} />
                    </div>
                    <div className="menu-product-content">
                      <div className="menu-title-price">
                        <div className="menu-title">
                          <h4>Black Bean & Veggie Fajitas.</h4>
                        </div>
                        <div className="menu-price">
                          <span>$250</span>
                        </div>
                      </div>
                      <p>Categories: Subway, Masala, Indian</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="single-menu-product mb-30">
                    <div className="menu-product-img">
                      <img alt="" src={menuImage5} />
                    </div>
                    <div className="menu-product-content">
                      <div className="menu-title-price">
                        <div className="menu-title">
                          <h4>Oldtimer with Cheese.</h4>
                        </div>
                        <div className="menu-price">
                          <span>$170</span>
                        </div>
                      </div>
                      <p>Categories: Subway, Masala, Indian</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="single-menu-product mb-30">
                    <div className="menu-product-img">
                      <img alt="" src={menuImage6} />
                    </div>
                    <div className="menu-product-content">
                      <div className="menu-title-price">
                        <div className="menu-title">
                          <h4>Crispy Fiery Pepper Crispers.</h4>
                        </div>
                        <div className="menu-price">
                          <span>$120</span>
                        </div>
                      </div>
                      <p>Categories: Subway, Masala, Indian</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="single-menu-product mb-30">
                    <div className="menu-product-img">
                      <img alt="" src={menuImage1} />
                    </div>
                    <div className="menu-product-content">
                      <div className="menu-title-price">
                        <div className="menu-title">
                          <h4>Lamb Salad with Fregola.</h4>
                        </div>
                        <div className="menu-price">
                          <span>$180</span>
                        </div>
                      </div>
                      <p>Categories: Subway, Masala, Indian</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="single-menu-product mb-30">
                    <div className="menu-product-img">
                      <img alt="" src={menuImage2} />
                    </div>
                    <div className="menu-product-content">
                      <div className="menu-title-price">
                        <div className="menu-title">
                          <h4>Ultimate Bacon Burger.</h4>
                        </div>
                        <div className="menu-price">
                          <span>$170</span>
                        </div>
                      </div>
                      <p>Categories: Subway, Masala, Indian</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="single-menu-product mb-30">
                    <div className="menu-product-img">
                      <img alt="" src={menuImage1} />
                    </div>
                    <div className="menu-product-content">
                      <div className="menu-title-price">
                        <div className="menu-title">
                          <h4>Lamb Salad with Fregola.</h4>
                        </div>
                        <div className="menu-price">
                          <span>$100</span>
                        </div>
                      </div>
                      <p>Categories: Subway, Masala, Indian</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="single-menu-product mb-30">
                    <div className="menu-product-img">
                      <img alt="" src={menuImage2} />
                    </div>
                    <div className="menu-product-content">
                      <div className="menu-title-price">
                        <div className="menu-title">
                          <h4>Ultimate Bacon Burger.</h4>
                        </div>
                        <div className="menu-price">
                          <span>$150</span>
                        </div>
                      </div>
                      <p>Categories: Subway, Masala, Indian</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="single-menu-product mb-30">
                    <div className="menu-product-img">
                      <img alt="" src={menuImage3} />
                    </div>
                    <div className="menu-product-content">
                      <div className="menu-title-price">
                        <div className="menu-title">
                          <h4>Ultimate Bacon Burger.</h4>
                        </div>
                        <div className="menu-price">
                          <span>$200</span>
                        </div>
                      </div>
                      <p>Categories: Subway, Masala, Indian</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="tab3" className="tab-pane">
              <div className="row">
                <div className="col-lg-6">
                  <div className="single-menu-product mb-30">
                    <div className="menu-product-img">
                      <img alt="" src={menuImage2} />
                    </div>
                    <div className="menu-product-content">
                      <div className="menu-title-price">
                        <div className="menu-title">
                          <h4>Ultimate Bacon Burger.</h4>
                        </div>
                        <div className="menu-price">
                          <span>$150</span>
                        </div>
                      </div>
                      <p>Categories: Subway, Masala, Indian</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="single-menu-product mb-30">
                    <div className="menu-product-img">
                      <img alt="" src={menuImage1} />
                    </div>
                    <div className="menu-product-content">
                      <div className="menu-title-price">
                        <div className="menu-title">
                          <h4>Lamb Salad with Fregola.</h4>
                        </div>
                        <div className="menu-price">
                          <span>$100</span>
                        </div>
                      </div>
                      <p>Categories: Subway, Masala, Indian</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="single-menu-product mb-30">
                    <div className="menu-product-img">
                      <img alt="" src={menuImage3} />
                    </div>
                    <div className="menu-product-content">
                      <div className="menu-title-price">
                        <div className="menu-title">
                          <h4>Ultimate Bacon Burger.</h4>
                        </div>
                        <div className="menu-price">
                          <span>$200</span>
                        </div>
                      </div>
                      <p>Categories: Subway, Masala, Indian</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="single-menu-product mb-30">
                    <div className="menu-product-img">
                      <img alt="" src={menuImage4} />
                    </div>
                    <div className="menu-product-content">
                      <div className="menu-title-price">
                        <div className="menu-title">
                          <h4>Black Bean & Veggie Fajitas.</h4>
                        </div>
                        <div className="menu-price">
                          <span>$250</span>
                        </div>
                      </div>
                      <p>Categories: Subway, Masala, Indian</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="single-menu-product mb-30">
                    <div className="menu-product-img">
                      <img alt="" src={menuImage5} />
                    </div>
                    <div className="menu-product-content">
                      <div className="menu-title-price">
                        <div className="menu-title">
                          <h4>Oldtimer with Cheese.</h4>
                        </div>
                        <div className="menu-price">
                          <span>$170</span>
                        </div>
                      </div>
                      <p>Categories: Subway, Masala, Indian</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="single-menu-product mb-30">
                    <div className="menu-product-img">
                      <img alt="" src={menuImage6} />
                    </div>
                    <div className="menu-product-content">
                      <div className="menu-title-price">
                        <div className="menu-title">
                          <h4>Crispy Fiery Pepper Crispers.</h4>
                        </div>
                        <div className="menu-price">
                          <span>$120</span>
                        </div>
                      </div>
                      <p>Categories: Subway, Masala, Indian</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="single-menu-product mb-30">
                    <div className="menu-product-img">
                      <img alt="" src={menuImage1} />
                    </div>
                    <div className="menu-product-content">
                      <div className="menu-title-price">
                        <div className="menu-title">
                          <h4>Lamb Salad with Fregola.</h4>
                        </div>
                        <div className="menu-price">
                          <span>$180</span>
                        </div>
                      </div>
                      <p>Categories: Subway, Masala, Indian</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="single-menu-product mb-30">
                    <div className="menu-product-img">
                      <img alt="" src={menuImage2} />
                    </div>
                    <div className="menu-product-content">
                      <div className="menu-title-price">
                        <div className="menu-title">
                          <h4>Ultimate Bacon Burger.</h4>
                        </div>
                        <div className="menu-price">
                          <span>$170</span>
                        </div>
                      </div>
                      <p>Categories: Subway, Masala, Indian</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="tab4" className="tab-pane">
              <div className="row">
                <div className="col-lg-6">
                  <div className="single-menu-product mb-30">
                    <div className="menu-product-img">
                      <img alt="" src={menuImage6} />
                    </div>
                    <div className="menu-product-content">
                      <div className="menu-title-price">
                        <div className="menu-title">
                          <h4>Crispy Fiery Pepper Crispers.</h4>
                        </div>
                        <div className="menu-price">
                          <span>$120</span>
                        </div>
                      </div>
                      <p>Categories: Subway, Masala, Indian</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="single-menu-product mb-30">
                    <div className="menu-product-img">
                      <img alt="" src={menuImage1} />
                    </div>
                    <div className="menu-product-content">
                      <div className="menu-title-price">
                        <div className="menu-title">
                          <h4>Lamb Salad with Fregola.</h4>
                        </div>
                        <div className="menu-price">
                          <span>$180</span>
                        </div>
                      </div>
                      <p>Categories: Subway, Masala, Indian</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="single-menu-product mb-30">
                    <div className="menu-product-img">
                      <img alt="" src={menuImage2} />
                    </div>
                    <div className="menu-product-content">
                      <div className="menu-title-price">
                        <div className="menu-title">
                          <h4>Ultimate Bacon Burger.</h4>
                        </div>
                        <div className="menu-price">
                          <span>$170</span>
                        </div>
                      </div>
                      <p>Categories: Subway, Masala, Indian</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="single-menu-product mb-30">
                    <div className="menu-product-img">
                      <img alt="" src={menuImage1} />
                    </div>
                    <div className="menu-product-content">
                      <div className="menu-title-price">
                        <div className="menu-title">
                          <h4>Lamb Salad with Fregola.</h4>
                        </div>
                        <div className="menu-price">
                          <span>$100</span>
                        </div>
                      </div>
                      <p>Categories: Subway, Masala, Indian</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="single-menu-product mb-30">
                    <div className="menu-product-img">
                      <img alt="" src={menuImage2} />
                    </div>
                    <div className="menu-product-content">
                      <div className="menu-title-price">
                        <div className="menu-title">
                          <h4>Ultimate Bacon Burger.</h4>
                        </div>
                        <div className="menu-price">
                          <span>$150</span>
                        </div>
                      </div>
                      <p>Categories: Subway, Masala, Indian</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="single-menu-product mb-30">
                    <div className="menu-product-img">
                      <img alt="" src={menuImage3} />
                    </div>
                    <div className="menu-product-content">
                      <div className="menu-title-price">
                        <div className="menu-title">
                          <h4>Ultimate Bacon Burger.</h4>
                        </div>
                        <div className="menu-price">
                          <span>$200</span>
                        </div>
                      </div>
                      <p>Categories: Subway, Masala, Indian</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="single-menu-product mb-30">
                    <div className="menu-product-img">
                      <img alt="" src={menuImage4} />
                    </div>
                    <div className="menu-product-content">
                      <div className="menu-title-price">
                        <div className="menu-title">
                          <h4>Black Bean & Veggie Fajitas.</h4>
                        </div>
                        <div className="menu-price">
                          <span>$250</span>
                        </div>
                      </div>
                      <p>Categories: Subway, Masala, Indian</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="single-menu-product mb-30">
                    <div className="menu-product-img">
                      <img alt="" src={menuImage5} />
                    </div>
                    <div className="menu-product-content">
                      <div className="menu-title-price">
                        <div className="menu-title">
                          <h4>Oldtimer with Cheese.</h4>
                        </div>
                        <div className="menu-price">
                          <span>$170</span>
                        </div>
                      </div>
                      <p>Categories: Subway, Masala, Indian</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="tab5" className="tab-pane">
              <div className="row">
                <div className="col-lg-6">
                  <div className="single-menu-product mb-30">
                    <div className="menu-product-img">
                      <img alt="" src={menuImage3} />
                    </div>
                    <div className="menu-product-content">
                      <div className="menu-title-price">
                        <div className="menu-title">
                          <h4>Ultimate Bacon Burger.</h4>
                        </div>
                        <div className="menu-price">
                          <span>$200</span>
                        </div>
                      </div>
                      <p>Categories: Subway, Masala, Indian</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="single-menu-product mb-30">
                    <div className="menu-product-img">
                      <img alt="" src={menuImage4} />
                    </div>
                    <div className="menu-product-content">
                      <div className="menu-title-price">
                        <div className="menu-title">
                          <h4>Black Bean & Veggie Fajitas.</h4>
                        </div>
                        <div className="menu-price">
                          <span>$250</span>
                        </div>
                      </div>
                      <p>Categories: Subway, Masala, Indian</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="single-menu-product mb-30">
                    <div className="menu-product-img">
                      <img alt="" src={menuImage1} />
                    </div>
                    <div className="menu-product-content">
                      <div className="menu-title-price">
                        <div className="menu-title">
                          <h4>Lamb Salad with Fregola.</h4>
                        </div>
                        <div className="menu-price">
                          <span>$100</span>
                        </div>
                      </div>
                      <p>Categories: Subway, Masala, Indian</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="single-menu-product mb-30">
                    <div className="menu-product-img">
                      <img alt="" src={menuImage2} />
                    </div>
                    <div className="menu-product-content">
                      <div className="menu-title-price">
                        <div className="menu-title">
                          <h4>Ultimate Bacon Burger.</h4>
                        </div>
                        <div className="menu-price">
                          <span>$150</span>
                        </div>
                      </div>
                      <p>Categories: Subway, Masala, Indian</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="single-menu-product mb-30">
                    <div className="menu-product-img">
                      <img alt="" src={menuImage3} />
                    </div>
                    <div className="menu-product-content">
                      <div className="menu-title-price">
                        <div className="menu-title">
                          <h4>Ultimate Bacon Burger.</h4>
                        </div>
                        <div className="menu-price">
                          <span>$200</span>
                        </div>
                      </div>
                      <p>Categories: Subway, Masala, Indian</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="single-menu-product mb-30">
                    <div className="menu-product-img">
                      <img alt="" src={menuImage4} />
                    </div>
                    <div className="menu-product-content">
                      <div className="menu-title-price">
                        <div className="menu-title">
                          <h4>Black Bean & Veggie Fajitas.</h4>
                        </div>
                        <div className="menu-price">
                          <span>$250</span>
                        </div>
                      </div>
                      <p>Categories: Subway, Masala, Indian</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="single-menu-product mb-30">
                    <div className="menu-product-img">
                      <img alt="" src={menuImage5} />
                    </div>
                    <div className="menu-product-content">
                      <div className="menu-title-price">
                        <div className="menu-title">
                          <h4>Oldtimer with Cheese.</h4>
                        </div>
                        <div className="menu-price">
                          <span>$170</span>
                        </div>
                      </div>
                      <p>Categories: Subway, Masala, Indian</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="single-menu-product mb-30">
                    <div className="menu-product-img">
                      <img alt="" src={menuImage6} />
                    </div>
                    <div className="menu-product-content">
                      <div className="menu-title-price">
                        <div className="menu-title">
                          <h4>Crispy Fiery Pepper Crispers.</h4>
                        </div>
                        <div className="menu-price">
                          <span>$120</span>
                        </div>
                      </div>
                      <p>Categories: Subway, Masala, Indian</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="tab6" className="tab-pane">
              <div className="row">
                <div className="col-lg-6">
                  <div className="single-menu-product mb-30">
                    <div className="menu-product-img">
                      <img alt="" src={menuImage1} />
                    </div>
                    <div className="menu-product-content">
                      <div className="menu-title-price">
                        <div className="menu-title">
                          <h4>Lamb Salad with Fregola.</h4>
                        </div>
                        <div className="menu-price">
                          <span>$100</span>
                        </div>
                      </div>
                      <p>Categories: Subway, Masala, Indian</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="single-menu-product mb-30">
                    <div className="menu-product-img">
                      <img alt="" src={menuImage2} />
                    </div>
                    <div className="menu-product-content">
                      <div className="menu-title-price">
                        <div className="menu-title">
                          <h4>Ultimate Bacon Burger.</h4>
                        </div>
                        <div className="menu-price">
                          <span>$150</span>
                        </div>
                      </div>
                      <p>Categories: Subway, Masala, Indian</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="single-menu-product mb-30">
                    <div className="menu-product-img">
                      <img alt="" src={menuImage5} />
                    </div>
                    <div className="menu-product-content">
                      <div className="menu-title-price">
                        <div className="menu-title">
                          <h4>Oldtimer with Cheese.</h4>
                        </div>
                        <div className="menu-price">
                          <span>$170</span>
                        </div>
                      </div>
                      <p>Categories: Subway, Masala, Indian</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="single-menu-product mb-30">
                    <div className="menu-product-img">
                      <img alt="" src={menuImage6} />
                    </div>
                    <div className="menu-product-content">
                      <div className="menu-title-price">
                        <div className="menu-title">
                          <h4>Crispy Fiery Pepper Crispers.</h4>
                        </div>
                        <div className="menu-price">
                          <span>$120</span>
                        </div>
                      </div>
                      <p>Categories: Subway, Masala, Indian</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="single-menu-product mb-30">
                    <div className="menu-product-img">
                      <img alt="" src={menuImage1} />
                    </div>
                    <div className="menu-product-content">
                      <div className="menu-title-price">
                        <div className="menu-title">
                          <h4>Lamb Salad with Fregola.</h4>
                        </div>
                        <div className="menu-price">
                          <span>$180</span>
                        </div>
                      </div>
                      <p>Categories: Subway, Masala, Indian</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="single-menu-product mb-30">
                    <div className="menu-product-img">
                      <img alt="" src={menuImage2} />
                    </div>
                    <div className="menu-product-content">
                      <div className="menu-title-price">
                        <div className="menu-title">
                          <h4>Ultimate Bacon Burger.</h4>
                        </div>
                        <div className="menu-price">
                          <span>$170</span>
                        </div>
                      </div>
                      <p>Categories: Subway, Masala, Indian</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="single-menu-product mb-30">
                    <div className="menu-product-img">
                      <img alt="" src={menuImage1} />
                    </div>
                    <div className="menu-product-content">
                      <div className="menu-title-price">
                        <div className="menu-title">
                          <h4>Lamb Salad with Fregola.</h4>
                        </div>
                        <div className="menu-price">
                          <span>$180</span>
                        </div>
                      </div>
                      <p>Categories: Subway, Masala, Indian</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="single-menu-product mb-30">
                    <div className="menu-product-img">
                      <img alt="" src={menuImage2} />
                    </div>
                    <div className="menu-product-content">
                      <div className="menu-title-price">
                        <div className="menu-title">
                          <h4>Ultimate Bacon Burger.</h4>
                        </div>
                        <div className="menu-price">
                          <span>$170</span>
                        </div>
                      </div>
                      <p>Categories: Subway, Masala, Indian</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default foodMenu
