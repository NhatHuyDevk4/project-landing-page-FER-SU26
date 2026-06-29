import React, { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { CalendarDaysIcon, ArrowRightIcon } from "lucide-react";

import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "@/services/product";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({});

  const fetchDataProductDetail = async () => {
    const data = await getProductById(id);
    console.log(data);
    setProduct(data);
  };

  useEffect(() => {
    fetchDataProductDetail();
  }, []);

  return (
    <div className="container mx-auto py-10">

    <Button
    className="mb-5"
     onClick={() => navigate(-1)}
    >
        Back to Products
    </Button>

      <Card
          key={product.name}
          className="group h-full transition-all duration-300"
        >
          <CardHeader>
            <a className="overflow-hidden rounded-lg">
              <img
                src={product.thumbnail}
                alt="22"
                className="h-59.5 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </CardHeader>
          <CardContent className="space-y-3.5">
            <div className="flex products-center justify-between gap-1.5">
              <div className="text-muted-foreground flex products-center gap-1.5">
                <CalendarDaysIcon className="size-6" />
                <span className="text-base">{product.date}</span>
              </div>
              <a href={product.categoryLink}>
                <Badge className="bg-primary/10 text-primary h-auto border-0 text-sm">
                  {product.category}
                </Badge>
              </a>
            </div>
            <h3 className="line-clamp-2 text-lg font-medium md:text-xl">
              {product.title}
            </h3>
            <p className="text-muted-foreground line-clamp-2 text-base">
              {product.description}
            </p>
            <div className="flex products-center justify-between">
              <a href={product.authorLink} className="text-sm font-medium">
                {product.author}
              </a>
              <Button
                size="icon"
                variant="outline"
                className="group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground dark:group-hover:bg-primary dark:hover:bg-primary"
                asChild
              >
                <a href={product.authorLink}>
                  <ArrowRightIcon className="size-4 -rotate-45" />
                  <span className="sr-only">Read more: {product.title}</span>
                </a>
              </Button>
            </div>

            <div>
              {product.reviews && product.reviews.map((item) => (
                <div key={item.id}>
                  <h4 className="text-lg font-medium">{item.reviewerName}</h4>
                  <p className="text-muted-foreground">{item.comment}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
    </div>
  );
};

export default ProductDetail;
