import React from 'react'
import CustomCard from '../components/CustomCard'

const orders = [
  { id: 1, date: '2023-10-01', price: 29.99, isPaid: true },
  { id: 2, date: '2023-10-02', price: 49.99, isPaid: false },
  { id: 3, date: '2023-10-03', price: 19.99, isPaid: true },
]

const MyOrdersPage = () => {
  return (
    <section className="w-full flex gap-9 flex-col">
      {orders.map((order) => {
        return <CustomCard key={order.id} {...order} />
      })}
    </section>
  )
}

export default MyOrdersPage
