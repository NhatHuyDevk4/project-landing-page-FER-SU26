import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { CalendarDaysIcon, ArrowRightIcon } from 'lucide-react'
import { Link } from 'react-router-dom'


const Blog = ({ blogPosts }) => {

    console.log(blogPosts)

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

        <div className='flex items-center justify-end'>
          <Link to='/products' className='inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline'>
            View all
          </Link>
        </div>

        {/* Tabs and Search */}
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {blogPosts.slice(0, 6).map(post => (
            <Card key={post.title} className='group h-full transition-all duration-300'>
              <CardHeader>
                <a href={post.blogLink} className='overflow-hidden rounded-lg'>
                  <img
                    src={post.thumbnail}
                    alt={post.imageAlt}
                    className='h-59.5 w-full object-cover transition-transform duration-300 group-hover:scale-105'
                  />
                </a>
              </CardHeader>
              <CardContent className='space-y-3.5'>
                <div className='flex items-center justify-between gap-1.5'>
                  <div className='text-muted-foreground flex items-center gap-1.5'>
                    <CalendarDaysIcon className='size-6' />
                    <span className='text-base'>{post.date}</span>
                  </div>
                  <a href={post.categoryLink}>
                    <Badge className='bg-primary/10 text-primary h-auto border-0 text-sm'>{post.category}</Badge>
                  </a>
                </div>
                <h3 className='line-clamp-2 text-lg font-medium md:text-xl'>
                  <a href={post.blogLink}>{post.title}</a>
                </h3>
                <p className='text-muted-foreground line-clamp-2 text-base'>{post.description}</p>
                <div className='flex items-center justify-between'>
                  <a href={post.authorLink} className='text-sm font-medium'>
                    {post.author}
                  </a>
                  <Button
                    size='icon'
                    variant='outline'
                    className='group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground dark:group-hover:bg-primary dark:hover:bg-primary'
                    asChild
                  >
                    <a href={post.authorLink}>
                      <ArrowRightIcon className='size-4 -rotate-45' />
                      <span className='sr-only'>Read more: {post.title}</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
