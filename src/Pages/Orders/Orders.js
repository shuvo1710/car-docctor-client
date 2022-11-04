import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import OrderTb from "./OrderTb";
// import OrderTb from './OrderTb';

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  console.log(orders);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`,{
      headers:{
        authorization: `Berar ${localStorage.getItem('car-doctor-token')}`
      }
    })
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    const agree = window.confirm("Are you sure, you want to cancel this order");
    if (agree) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Delete successFully");
            const remaining = orders.filter((ord) => ord._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  const handleUpdate = (id) => {
    fetch(`http://localhost:5000/orders/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.modifiedCount > 0){
          const remaining = orders.filter(ord => ord._id !== id)
          const approved = orders.find(ord=> ord._id === id)
          approved.status= 'Approved'
          const newOrder = [approved,...remaining]
          setOrders(newOrder)


        }
        
      });
  };

  return (
    <div>
      <h1 className="text-4xl text-center my-2">
        Your {orders?.length} Orders
      </h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <OrderTb
                key={order._id}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
                order={order}
              ></OrderTb>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
