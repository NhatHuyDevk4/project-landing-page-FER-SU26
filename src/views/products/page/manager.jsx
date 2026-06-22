import { fetchProduct } from "@/services/product";
import React, { useEffect, useState } from "react";

const ManagerPage = () => {
  const [product, setProduct] = useState([]);

  const fetchDataProduct = async () => {
    const data = await fetchProduct();
    console.log(data);
    setProduct(data.products);
  };

  useEffect(() => {
    fetchDataProduct();
  }, []);

  console.log(product);

  return(
    <div className="container mx-auto py-10">
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
               {product.map((item) => (
                 <tr>
                    <td>{item.id}</td>
                    <td>
                        <img 
                            src={item.thumbnail}
                            alt={item.title}
                        />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Edit</button>
                        <button className="bg-red-500 text-white px-4 py-2 rounded ml-2">Delete</button>
                    </td>
                </tr>
               ))}
            </tbody>
        </table>
    </div>
  )
 
};

export default ManagerPage;
