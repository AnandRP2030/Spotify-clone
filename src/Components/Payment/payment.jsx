import React from 'react'
import { useSelector } from 'react-redux'

export const Payment = () => {

  const currentPlan = useSelector(state=>state.paymentReducer.currentPlan)
  const data = useSelector(state=>state.paymentReducer.plans[currentPlan-1])
  console.log(data);
  return (
    <div>payment</div>
  )
}
