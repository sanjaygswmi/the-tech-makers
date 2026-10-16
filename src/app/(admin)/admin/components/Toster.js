import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/* 
toast.success('This is a success message!');
toast.error('This is an error message!');
toast.warning('This is a warning message!');
toast.info('This is an info message!');
*/


import React from 'react'

function Toster() {
    return <ToastContainer />
}
export const showToast = (message, type) => {
    toast(message, {
        type: type,
        autoClose: 2000,
        position: "top-right",
        theme: "colored",
    });
};

export default Toster