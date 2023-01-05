import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { useEffect  } from 'react'


const BasketCard = (props) => {

  const totalPrice = props.basket.map(item => item.price * item.count)
  const productCount = props.basket.map(product => product.count)

// function arr(arr) {
 
//   step1:  for (let i = 0; i < arr.length; i++) {
//     for (let index = i+1; index < arr.length; index++) {
//       if(arr[i].id === arr[index].id) {
//          arr[index].count += arr[i].count
//          continue step1;
//       }
      
//     }
    

    
//   }
  
//   return arr
// }
 console.log('basket', props.basket);
 console.log('basketCount', productCount);
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
       <span>Ürün Sayısı: {productCount.reduce((a,b) => a + b, 0)}</span>
       {
        props.basket.length > 0 ?  <span>{totalPrice.reduce((a,b) => a+b, 0)} &#8378;</span> : null
       }
       </div>
     </div>
      <div className='basket-container'>
      {
       
        props.basket.map((product, index) => {
          if(product.count > 1) {
            return    <div className='product-card' key={`${product.id , index}`}>
            <img src={product.image} alt={product.name} />
            <div className='card-middle'>
                <h4>{product.trademark}</h4>
                <p>{product.name}</p>
            </div>
            <div className='card-bottom'>
                <span className='count'>X{product.count}</span>
                <span className='price'>{product.price} &#8378;</span>
            </div>
        </div>
          } else {
            return <div className='product-card' key={`${product.id , index}`}>
            <img src={product.image} alt={product.name} />
            <div className='card-middle'>
                <h4>{product.trademark}</h4>
                <p>{product.name}</p>
            </div>
            <div className='card-bottom'>
                
                <span className='price'>{product.price} &#8378;</span>
                
            </div>
        </div>
          }
       
        }
         
        )
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