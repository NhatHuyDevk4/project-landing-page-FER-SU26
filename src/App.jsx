import FooterLayout from "./layouts/footerLayout";
import HeaderLayout from "./layouts/headerLayout";
import HomePage from "./views/home";
import AboutPage from "./views/about";
import ProfilePage from "./views/profile";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "./views/login";
import NotFoundPage from "./views/notFound";
import ProductsPage from "./views/products";
import ProductDetail from "./views/products/page/detail";
import {apiClient} from "./services/apiClinet";
import ManagerPage from "./views/products/page/manager";
import CreateProductPage from "./views/products/page/create";
import EditProductPage from "./views/products/page/edit";
function App() {

  const apiClientInstance = apiClient; // Sử dụng apiClientInstance từ apiClinet.js
  console.log( typeof apiClientInstance)
  console.dir(apiClientInstance)
  return (
    <>
      {/* HEADER  */}
      <HeaderLayout />
      <main className="min-h-[calc(100vh-200px)]">
        <Routes>
          {/* BODY  */}
          <Route path="/login" element={<LoginPage />} />


          {/* IMPORTANT: VÌ ko trỏ đúng sẽ bị 0đ  */}
          <Route path="/" element={<Navigate to="/products" replace />} />


          <Route path="/about" element={<AboutPage />} />
          <Route path="/profile" element={<ProfilePage />} />


          {/* <Route path="/products" element={<ProductsPage />} />
           */}

           <Route  path="/products" >
            <Route index element={<ProductsPage />} />
            <Route path=":id" element={<ProductDetail />} />
            <Route path="manager" element={<ManagerPage />}  />
            <Route path="create" element={<CreateProductPage />}  />
            <Route path="edit/:id" element={<EditProductPage />}  />
           </Route>

          {/* END BODY */}

          <Route path="*" element={<NotFoundPage />} />

        </Routes>
      </main>

      {/* FOOTER */}
      <FooterLayout />
    </>
  );
}

export default App;

//  React Router Dom bạn phải khai báo các route ở đây, sau đó mới vào từng component để khai báo link đến các route đó
// B1: Khai báo BrowserRouter ở main.jsx
// B2: Khai báo Routes và Route ở App.jsx

// BrowserRouter là thành phần của react-router-dom giúp React quản lý URL trên trình duyệt mà ko cần
// reload lại trang

// Routes là thành phần của react-router-dom giúp React quản lý các route trong ứng dụng,
// nó sẽ render component tương ứng với URL hiện tại

// Route là thành phần của react-router-dom giúp React quản lý một route cụ thể,
//  nó sẽ render component tương ứng với URL được chỉ định trong thuộc tính path

// Link trong react-router-dom là một thành phần giúp tạo liên kết giữa các route trong ứng dụng,
//  nó sẽ render một thẻ a với thuộc tính href được chỉ định trong thuộc tính to,
//  khi người dùng click vào liên kết đó, React sẽ chuyển đến route tương ứng mà ko cần reload lại trang

// index trong react-router-dom là một thuộc tính đặc biệt của Route, nó cho phép bạn định nghĩa một route mặc định khi người dùng truy cập vào đường dẫn cha mà ko có đường dẫn con nào được chỉ định