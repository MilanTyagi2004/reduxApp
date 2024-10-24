import React from 'react'
import {useDispatch} from 'react-redux';
import { bindActionCreators } from 'redux';
import {Actionmakers} from '../state/index';


const Shop = () => {
  const dispatch = useDispatch();
  const {withdrawMoney,depositMoney} = bindActionCreators(Actionmakers,dispatch);
  return (
    <div className='container'>
        <h2>Your Bank Balance</h2>

      {/*With bindActionCreator*/}

      <button className='btn btn-primary' onClick={()=>{depositMoney(100)}}>Deposit Money</button>
      <small className='mx-2'>Update Balance</small>
      <button className='btn btn-primary' onClick={()=>{withdrawMoney(100)}}>withdrawMoney</button>



      {/* Without bindActionCreator */}
      {/* <button className='btn btn-primary' onClick={()=>{dispatch(Actionmakers.depositMoney(100))}}>Deposit Money</button>
      <small className='mx-2'>Update Balance</small>
      <button className='btn btn-primary' onClick={()=>{dispatch(Actionmakers.withdrawMoney(100))}}>withdrawMoney</button> */}
    </div>
  )
}

export default Shop
