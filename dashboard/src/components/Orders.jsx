import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("https://investiq-backend-emic.onrender.com/allOrders")
      .then((res) => {
        console.log(res.data); // check here
        setOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
   const handleDelete = (id) => {
    axios.delete(`https://investiq-backend-emic.onrender.com/deleteOrder/${id}`)
      .then(() => {
        setOrders((prev) => prev.filter((o) => o._id !== id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="orders">

      {orders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      ) : (
        <div className="order-table">
          <h3>Orders ({orders.length})</h3>

          {orders.map((order, index) => (
            <div key={index} className="order-item">
              <p>Instrument: <b>{order.name}</b></p>
              <p>Qty: {order.qty}</p>
              <p>Price: ₹{order.price}</p>
              <p>Mode: {order.mode}</p>
              <button onClick={() => handleDelete(order._id)}>
                Delete
                </button>
              <hr />
            </div>
          ))}

        </div>
      )}

    </div>
  );
};

export default Orders;