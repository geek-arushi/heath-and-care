import React, {Fragment} from 'react';
import { connect } from "react-redux";
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { addToCart, addToWishList } from "../../store/actions/action";
import ShopProduct from '../../components/ShopProduct';
import api from "../../api";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';

const ShopPage =({ addToCart, addToWishList }) => {

    const productsArray = api();
    
    const addToCartProduct = (product, qty = 1) => {
        addToCart(product, qty);
      };

      const addToWishListProduct = (product) => {
        addToWishList(product);
    };

    const products = productsArray

    return(
        <Fragment>
            <Navbar hclass={'wpo-header-style-2'}/>
            <PageTitle pageTitle={'Shop'} pagesub={'Shop'}/> 
              <section className="wpo-shop-page section-padding">
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-12">
                              <ShopProduct
                                      addToCartProduct={addToCartProduct}
                                      addToWishListProduct={addToWishListProduct}
                                      products={products}
                                  />
                          </div>
                      </div>
                  </div>
              </section>
            <Footer footerClass={'wpo-site-footer-s2'}/>
            <Scrollbar/>
        </Fragment>
    )
};

export default connect(null, { addToCart, addToWishList })(ShopPage);