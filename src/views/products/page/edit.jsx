import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById, updateProduct } from "@/services/product";

const initialForm = {
  title: "",
  description: "",
  price: "",
  discountPercentage: "",
  stock: "",
  brand: "",
  category: "",
  thumbnail: "",
};

const EditProductPage = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  console.log("EditProductPage id:", id);
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    console.log("handleChange", e.target);
    const name = e.target.name;
    const value = e.target.value;
    console.log("handleChange", name, value);
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);

    try {
      // dummyjson chỉ nhận field có giá trị, price/stock cần là số
      const payload = {
        ...form,
        price: form.price ? Number(form.price) : undefined,
        discountPercentage: form.discountPercentage
          ? Number(form.discountPercentage)
          : undefined,
        stock: form.stock ? Number(form.stock) : undefined,
      };

      const data = await updateProduct(id, payload);
      console.log("Updated product:", data);
      setResult(data);
    } catch (err) {
      console.error(err);
      setError("Cập nhật sản phẩm thất bại. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  // transaction đồng bộ dữ liệu
  const fetchProductById = async (id) => {
    try {
        const res = await getProductById(id);
        console.log("Fetched product by ID:", res);
        setForm({
            title: res.title || "",
            description: res.description || "",
            price: res.price || "",
            discountPercentage: res.discountPercentage || "",
            stock: res.stock || "",
            brand: res.brand || "",
            category: res.category || "",
            thumbnail: res.thumbnail || "",
        })
    } catch (error) {
      console.error("Error fetching product by ID:", error);
    }
  }

  useEffect(() => {
    fetchProductById(id);
  }, [id])

  return (
    <div className="container mx-auto max-w-2xl py-10">
      <Button className="mb-5" onClick={() => navigate(-1)}>
        Back
      </Button>

      <Card>
        <CardHeader>
          <h1 className="text-2xl font-semibold">Chỉnh sửa sản phẩm</h1>
          <p className="text-muted-foreground text-sm">
            Cập nhật thông tin sản phẩm qua API dummyjson (PUT /products/:id)
          </p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="title">Tên sản phẩm *</Label>
              <Input
                id="title"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Ví dụ: iPhone 15"
                required
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="description">Mô tả</Label>
              <Input
                id="description"
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Mô tả ngắn về sản phẩm"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="price">Giá ($)</Label>
                <Input
                  id="price"
                  name="price"
                  type="number"
                  step="0.01"
                  value={form.price}
                  onChange={handleChange}
                  placeholder="0"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="discountPercentage">Giảm giá (%)</Label>
                <Input
                  id="discountPercentage"
                  name="discountPercentage"
                  type="number"
                  step="0.01"
                  value={form.discountPercentage}
                  onChange={handleChange}
                  placeholder="0"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="stock">Tồn kho</Label>
                <Input
                  id="stock"
                  name="stock"
                  type="number"
                  value={form.stock}
                  onChange={handleChange}
                  placeholder="0"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="brand">Thương hiệu</Label>
                <Input
                  id="brand"
                  name="brand"
                  value={form.brand}
                  onChange={handleChange}
                  placeholder="Ví dụ: Apple"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="category">Danh mục</Label>
              <Input
                id="category"
                name="category"
                value={form.category}
                onChange={handleChange}
                placeholder="Ví dụ: smartphones"
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="thumbnail">Ảnh (URL)</Label>
              <Input
                id="thumbnail"
                name="thumbnail"
                value={form.thumbnail}
                onChange={handleChange}
                placeholder="https://..."
              />
            </div>

            <div className="flex items-center gap-3 pt-2">
              <Button type="submit" disabled={loading}>
                {loading ? "Đang cập nhật..." : "Cập nhật sản phẩm"}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setForm(initialForm)}
                disabled={loading}
              >
                Làm mới
              </Button>
            </div>

            {error && <p className="text-sm text-red-500">{error}</p>}

            {result && (
              <div className="rounded-lg border border-green-500/30 bg-green-500/10 p-4 text-sm">
                <p className="font-medium text-green-700">
                  Cập nhật thành công! ID: {result.id}
                </p>
                <pre className="mt-2 overflow-auto text-xs text-muted-foreground">
                  {JSON.stringify(result, null, 2)}
                </pre>
              </div>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditProductPage;
