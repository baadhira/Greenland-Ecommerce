import axios from 'axios';
import React from 'react'

export const getProducts = () => {
    // var token = localStorage.getItem("authToken");
  
  
      const config={
          headers: {
              "Content-Type": "application/json",
            //   Authorization:`Bearer ${token}`,
          },
      };
      const response=axios.get(`http://127.0.0.1:8000/api/products/`,config);
    return response
  }