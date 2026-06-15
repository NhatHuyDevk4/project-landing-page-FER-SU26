import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { CalendarDaysIcon, ArrowRightIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ListProduct = ({ product }) => {

  const navigate = useNavigate();

  const navigateToDetail = (id) => {
    navigate(`/products/${id}`);
  }


  return (
    <>
      {product.map((item) => (
        <Card
          onClick={() => navigateToDetail(item.id)}
          key={item.name}
          className="group h-full transition-all duration-300"
        >
          <CardHeader>
            <a href={item.blogLink} className="overflow-hidden rounded-lg">
              <img
                src={item.thumbnail}
                alt={item.imageAlt}
                className="h-59.5 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </CardHeader>
          <CardContent className="space-y-3.5">
            <div className="flex items-center justify-between gap-1.5">
              <div className="text-muted-foreground flex items-center gap-1.5">
                <CalendarDaysIcon className="size-6" />
                <span className="text-base">{item.date}</span>
              </div>
              <a href={item.categoryLink}>
                <Badge className="bg-primary/10 text-primary h-auto border-0 text-sm">
                  {item.category}
                </Badge>
              </a>
            </div>
            <h3 className="line-clamp-2 text-lg font-medium md:text-xl">
              <a href={item.blogLink}>{item.title}</a>
            </h3>
            <p className="text-muted-foreground line-clamp-2 text-base">
              {item.description}
            </p>
            <div className="flex items-center justify-between">
              <a href={item.authorLink} className="text-sm font-medium">
                {item.author}
              </a>
              <Button
                size="icon"
                variant="outline"
                className="group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground dark:group-hover:bg-primary dark:hover:bg-primary"
                asChild
              >
                <a href={item.authorLink}>
                  <ArrowRightIcon className="size-4 -rotate-45" />
                  <span className="sr-only">Read more: {item.title}</span>
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default ListProduct;
