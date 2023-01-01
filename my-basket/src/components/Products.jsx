import React from 'react'
import { Link } from 'react-router-dom' 
import { connect } from 'react-redux'
import { addBasket } from '../redux/action/index.action'

const Products = (props) => {

    console.log(props.productList);
  return (
    <div className='product'>
        <h2>
            <span>Alınacaklar Listem</span>
            <Link to='/basket'>Faturam</Link>
        </h2>
       <div className='product-container'>
       {
            props.productList.map((product) => (
                <div className='product-card' key={product.id}>
                    <img src={product.image} alt={product.name} />
                    <div className='card-middle'>
                        <h4>{product.trademark}</h4>
                        <p>{product.name}</p>
                    </div>
                    <div className='card-bottom'>
                        <span className='price'>{product.price} &#8378;</span>
                        <button>Sepete Ekle</button>
                    </div>
                </div>
            ))
        }
       </div>
    </div>
  )
}

const mapStateProps = (state) => {
    return {
        productList : state.productList,
    }
}

export default connect(mapStateProps)(Products)