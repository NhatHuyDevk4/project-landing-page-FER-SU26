import { Button } from "@/components/ui/button";
import { deleteProduct, fetchProduct } from "@/services/product";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ManagerPage = () => {
  const navigate = useNavigate();

  const [product, setProduct] = useState([]);

  const fetchDataProduct = async () => {
    const data = await fetchProduct();
    console.log(data);
    setProduct(data.products);
  };

  useEffect(() => {
    fetchDataProduct();
  }, []);

  const handleDeleteProduct = async (id) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this product?",
    );
    if (!isConfirmed) {
      return;
    }
    try {
      await deleteProduct(id);
      alert("Product deleted successfully!");
      fetchDataProduct();
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Failed to delete product. Please try again.");
    }
    console.log("Deleted product:", data);
  };

  const handleNavigateDetail = (id) => {
    navigate(`/products/${id}`);
  };

  const handleNavigateEdit = (id) => {
    navigate(`/products/edit/${id}`);
  };

  console.log(product);

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-end">
        <Button className="mb-4 bg-blue-500 text-white px-4 py-2 rounded text-end ">
          <a href="/products/create">Create Product</a>
        </Button>
      </div>

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
                  onClick={() => handleNavigateDetail(item.id)}
                  src={item.thumbnail}
                  alt={item.title}
                />
              </td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={() => handleNavigateEdit(item.id)}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteProduct(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded ml-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManagerPage;
