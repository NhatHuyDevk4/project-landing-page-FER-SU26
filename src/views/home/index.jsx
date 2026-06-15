import React, { useEffect, useState } from "react";
import Feature from "../../components/feature";
import Herosection1 from "../../components/herosection1";
import { fetchPosts } from "@/services/apiClinet";
import Blog from "@/components/blog-components";
import Features from "@/components/feature-component";
import FAQ from "@/components/faq-component";
import { fetchProduct } from "@/services/product";



const featuresList = [
  {
  
    title: 'User-Friendly Interface',
    description:
      "Navigate effortlessly with our intuitive design, optimised for all devices. Enjoy a seamless experience whether you're on a computer or mobile.",
    cardBorderColor: 'ring-primary/40 hover:ring-primary',
    avatarTextColor: 'text-primary',
    avatarBgColor: 'bg-primary/10'
  },
  {

    title: 'Secure Checkout',
    description:
      'Enjoy a safe shopping experience with multiple payment options and SSL encryption. Your personal and financial information is always protected.',
    cardBorderColor: 'ring-green-600/40 hover:ring-green-600 dark:ring-green-400/40 dark:hover:ring-green-400',
    avatarTextColor: 'text-green-600 dark:text-green-400',
    avatarBgColor: 'bg-green-600/10 dark:bg-green-400/10'
  },
  {
  
    title: 'Advanced Search',
    description:
      'Find products quickly with advanced filters, sorting options, and suggestion. Save time and effortlessly locate exactly what you need with ease.',
    cardBorderColor: 'ring-amber-600/40 hover:ring-amber-600 dark:ring-amber-400/40 dark:hover:ring-amber-400',
    avatarTextColor: 'text-amber-600 dark:text-amber-400',
    avatarBgColor: 'bg-amber-600/10 dark:bg-amber-400/10'
  },
  {
 
    title: 'Customer Reviews and Ratings',
    description:
      'Make informed decisions with detailed product reviews and ratings from other buyers. Trust the experiences of fellow shoppers to guide choices.',
    cardBorderColor: 'ring-destructive/40 hover:ring-destructive',
    avatarTextColor: 'text-destructive',
    avatarBgColor: 'bg-destructive/10'
  },
  {
   
    title: 'Mobile App Integration',
    description:
      'Enhance your shopping experience with our mobile app and push notifications. Stay updated on arrivals and exclusive offers directly on phone.',
    cardBorderColor: 'ring-sky-600/40 hover:ring-sky-600 dark:ring-sky-400/40 dark:hover:ring-sky-400',
    avatarTextColor: 'text-sky-600 dark:text-sky-400',
    avatarBgColor: 'bg-sky-600/10 dark:bg-sky-400/10'
  },
  {

    title: 'Security Features',
    description:
      'Protect your data with fraud detection and two-factor authentication. Ensure a secure environment for all transactions and account activities.',
    cardBorderColor: 'ring-primary/40 hover:ring-primary',
    avatarTextColor: 'text-primary',
    avatarBgColor: 'bg-primary/10'
  }
]

const faqItems = [
  {
    question: 'Do you charge for each upgrade?',
    answer:
      'Some upgrades are free, while others may have an additional cost, depending on the type of upgrade and your current plan. For specific pricing details, please check our pricing page or contact our support team.'
  },
  {
    question: 'Do I need to purchase a license for each website?',
    answer:
      'Yes, you need to purchase a separate license for each website where you plan to use our components. Each license is tied to a single domain and its subdomains. This ensures proper licensing compliance and helps us maintain and improve our products for all users.'
  },
  {
    question: 'What is regular license?',
    answer:
      'A regular license grants you the right to use our components on a single website or project. It includes access to all basic features, documentation, and standard support. This license is perfect for individual developers or small businesses working on a single project.'
  },
  {
    question: 'What is extended license?',
    answer:
      'An extended license provides additional rights and features beyond the regular license. It includes usage rights for multiple websites, priority support, access to premium components, and the ability to use components in commercial projects that you sell to end customers. Perfect for agencies and large enterprises.'
  }
]
const HomePage = () => {

  const [product, setProduct] = useState([])
  const [post, setPost] = useState([])

  const fetchDataProduct = async () => {
    const data = await fetchProduct();
    setProduct(data.products)
  }
  const fetchDataPosts = async () => {
    const data = await fetchPosts();
    setPost(data.posts)
  }

  useEffect(() => {
    fetchDataProduct()
    fetchDataPosts()
  }, []);

  console.log(product)
  console.log(post)

  return (
    <>
      <Herosection1 />
      <Feature />

      <Blog blogPosts={product} />

      <Features featuresList={featuresList}/>

      <FAQ faqItems={faqItems} />
    </>
  );
};

export default HomePage;

// PROMISE là một đối tượng trong JS dùng để xử lý tác vụ bất đồng bộ (asyn)

// Thứ tự khi vào page React, thứ tự hoạt động là
// Component function chạy ==> React tạo Virutal DOM ==> Render UI ra màn hình ==> useEffect chạy

// Virutal DOM là bản sao của giao dện (DOM) được lưu dưới dạng JS OB trong bố nhợ thay vì HTML thật trên trình duyệt
// Bản thiết kế trên giấy
// READ REAL DOM = ngôi nhà thật

// REACT sẽ : Vẽ bản thiết kế mới ==> so sánh với bản cũ ==> xác định chổ cần sửa chổ nào ==> chỉ sử đúng chỗ đó trên ngôi nhà thật 
// ==> Thay vì đập cả nhà xây lại