import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const BasketCard = (props) => {
  console.log('type', typeof props.basket)
  console.log('basket', props.basket)

  const totalPrice = props.basket.map(item => item.price)
console.log(totalPrice);
  return (
    <div className='bill'>
      <h2>
        <Link to='/'>Ürünler</Link>
        <span >Sepetim</span>
      </h2>
      <div className='acout'>
     <h3 className='acout-title'>
        Ödenecek Toplam Tutar
        
        </h3>
       <div className='acout-span'>
       <span>Ürün Sayısı: {totalPrice.length}</span>
       {
        props.basket.length > 0 ?  <span>{totalPrice.reduce((a,b) => a+b, )} &#8378;</span> : null
       }
       </div>
     </div>
      <div className='basket-container'>
      {
        props.basket.map((product) => (
          <div className='product-card' key={product.id}>
                    <img src={product.image} alt={product.name} />
                    <div className='card-middle'>
                        <h4>{product.trademark}</h4>
                        <p>{product.name}</p>
                    </div>
                    <div className='card-bottom'>
                        
                        <span className='price'>{product.price} &#8378;</span>
                        
                    </div>
                </div>
        ))
      }
      </div>
     
    </div>
  )
}

const mapStateToProps = state => {
  return {
    basket: state.basket
  }
}

export default connect(mapStateToProps)(BasketCard)