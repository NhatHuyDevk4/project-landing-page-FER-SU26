import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

const AboutPage = () => {
  return (
    <div className="container mx-auto">
    
        <Button variant="outline" className="w-full">
            AboutPage
        </Button>


        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
        </Card>
    </div>
  )
}

export default AboutPage