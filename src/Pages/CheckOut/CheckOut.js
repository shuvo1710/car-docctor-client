import React, { useCallback, useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const CheckOut = () => {
    const checkOutData = useLoaderData();
    const {user} = useContext(AuthContext)
    const {_id,title, price} = checkOutData;

    const onSubmitCheckOut = event=>{
        event.preventDefault()
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregister';
        const phone = form.phone.value;
        const message = form.message.value;

        const orders = {
            service:_id,
            serviceName: title,
            customerName: name,
            email,
            price,
            phone,
            message

        }

        fetch('http://localhost:5000/orders', {
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(orders)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data?.acknowledged){
                alert('order placed successfully')
                form.reset()
            }
            
            })
        .catch(err=>console.error(err))
    }
    return (
        <div>
            <form onSubmit={onSubmitCheckOut} className='bg-gray-300 p-10 my-10'>
            <h1 className='text-4xl font-bold text-center my-2'>You are about to order {title}</h1>
            <h2 className='text-2xl font-bold text-center mb-2'>Price: {price}</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>

            <input type="text" name='firstName' placeholder="First Name" className="input input-bordered w-full" />
            <input type="text" name='lastName' placeholder="Last Name" className="input input-bordered w-full " />
            <input type="text" name='phone' placeholder="Phone" className="input input-bordered w-full " />
            <input type="text" name='email' placeholder="Email" defaultValue={user?.email} readOnly className="input input-bordered w-full " />
            </div>
            
            <textarea name='message' className="textarea textarea-bordered h-24 w-full my-4" placeholder="Your Message"></textarea>
                <input className='btn bg-orange-600 border-0 w-full mb-4' type="submit" value="Place Your Order" />
            </form>
        </div>
    );
};

export default CheckOut;