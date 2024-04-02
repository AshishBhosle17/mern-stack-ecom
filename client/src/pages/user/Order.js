import Layout from '../../components/Layout/Layout' 
import React from 'react'
import UserMenu from '../../components/Layout/UserMenu'

const Order = () => {
  return (
    <Layout title={"Your Orders"}>
    <div className="container-flui p-3 m-3 dashboard">
         <div className="row">
           <div className="col-md-3">
            <UserMenu/>
            </div>
            <div className="col-md-9">
              <h1 className="text-center">All Orders</h1>
            </div>
        </div>
    </div>

    </Layout>
  )
}

export default Order