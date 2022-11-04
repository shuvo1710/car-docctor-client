import React, { useEffect, useState } from 'react';

const OrderTb = ({order, handleDelete, handleUpdate}) => {
    const {_id,customerName,phone,price,serviceName,service, status} = order;
    
    const [orderService, setOrderService, ] = useState({})
    useEffect(()=>{
        fetch(`http://localhost:5000/services/${service}`)
        .then(res=>res.json())
        .then(data=>setOrderService(data))
    },[service])

    
    return (
        <tr>
        <th>
          <button onClick={()=>handleDelete(_id)} className='btn btn-ghost'>X</button>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask w-24 h-20 rounded">
              {
                orderService?.img &&
                <img src={orderService.img} alt="Avatar Tailwind CSS Component" />

              }  
               
              
              </div>
            </div>
            <div>
              <div className="font-bold">{customerName}</div>
              <div className="text-sm opacity-50">{phone}</div>
            </div>
          </div>
        </td>
        <td>
          {serviceName}
          
        </td>
        <td>{price}</td>
        <th>
          <button onClick={()=>handleUpdate(_id)} className="btn btn-ghost btn-xs">{status ? status : 'Pending'}</button>
        </th>
      </tr>
    );
};

export default OrderTb;