import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { connect } from "react-redux";
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import { addToCart } from "../../store/actions/action";
import Product from './product'
import api from "../../api";
import ProductTabs from './alltab';



const ProductSinglePage = (props) => {
    const { slug } = useParams()


    const productsArray = api();
    const Allproduct = productsArray

    const addToCartProduct = (product, qty = 1) => {
        addToCart(product, qty);
    };


    const { addToCart } = props;
    const [product, setProduct] = useState({});

    useEffect(() => {
        setProduct(Allproduct.filter(Allproduct => Allproduct.slug === String(slug)))
    }, []);

    const item = product[0];

    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-2'}/>
            <PageTitle pageTitle={'Product Single'} pagesub={'Product Single'} />
            <section className="wpo-shop-single-section section-padding">
                <div className="container">
                    {item ? <Product
                        item={item}
                        addToCart={addToCartProduct}
                    /> : null}
                    <ProductTabs />
                </div>
            </section>
            <Footer footerClass={'wpo-site-footer-s2'}/>
            <Scrollbar />
        </Fragment>
    )
};

const mapStateToProps = state => {
    return {
        products: state.data.products,
    }
};

export default connect(mapStateToProps, { addToCart })(ProductSinglePage);
