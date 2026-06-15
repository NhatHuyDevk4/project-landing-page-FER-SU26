import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardContent } from '@/components/ui/card'

import { CalendarDaysIcon, ArrowRightIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ListProduct from './components/ListProduct'
import { fetchProduct } from '@/services/product'


const ProductsPage = () => {

   const [product, setProduct] = useState([])
   
    const fetchDataProduct = async () => {
      const data = await fetchProduct();
      console.log(data);
      setProduct(data.products)
    }

    useEffect(() => {
      fetchDataProduct()

    }, []);

    console.log(product)


  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl space-y-16 px-4 py-8 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='space-y-4'>
          <Badge variant='outline' className='h-auto text-sm font-normal'>
            Trending
          </Badge>

          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>Product popular</h2>

          <p className='text-muted-foreground text-lg md:text-xl'>
            Explore our latest blog posts, featuring expert insights, industry trends, and practical tips to help you
          </p>
        </div>

        {/* Tabs and Search */}
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          <ListProduct product={product}/>
        </div>
      </div>
    </section>
  )
}

export default ProductsPage
