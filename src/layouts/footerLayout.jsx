import React from "react";

const FooterLayout = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white font-bold">
                S
              </div>
              <span className="text-xl font-bold text-slate-900">
                SaaS Platform
              </span>
            </div>

            <p className="mt-5 max-w-md text-sm leading-6 text-slate-600">
              Nền tảng quản lý doanh nghiệp thế hệ mới giúp tối ưu quy trình,
              tăng hiệu suất làm việc và mở rộng quy mô nhanh chóng.
            </p>

            <div className="mt-6 flex items-center gap-4">
              {["Facebook", "LinkedIn", "Github", "Twitter"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="rounded-lg border border-slate-200 p-2 text-slate-500 transition-all hover:border-slate-900 hover:text-slate-900"
                >
                  <span className="text-sm font-medium">{item[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-5">
            <div>
              <h3 className="text-sm font-semibold text-slate-900">Product</h3>
              <ul className="mt-4 space-y-3">
                {["Features", "Pricing", "Integrations", "API", "Roadmap"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-sm text-slate-600 transition hover:text-slate-900"
                      >
                        {item}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-900">Company</h3>
              <ul className="mt-4 space-y-3">
                {["About", "Careers", "Blog", "Partners", "Contact"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-sm text-slate-600 transition hover:text-slate-900"
                      >
                        {item}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-900">
                Resources
              </h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Documentation",
                  "Help Center",
                  "Community",
                  "Status",
                  "Security",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-slate-600 transition hover:text-slate-900"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-slate-900">
              Stay Updated
            </h3>

            <p className="mt-4 text-sm text-slate-600">
              Nhận tin tức sản phẩm và cập nhật mới nhất hàng tháng.
            </p>

            <form className="mt-5">
              <div className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-11 rounded-xl border border-slate-300 px-4 text-sm outline-none transition focus:border-slate-900"
                />

                <button
                  type="submit"
                  className="h-11 rounded-xl bg-slate-900 text-sm font-medium text-white transition hover:bg-slate-800"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col gap-4 border-t border-slate-200 pt-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 SaaS Platform. All rights reserved.</p>

          <div className="flex flex-wrap gap-6">
            <a href="#" className="hover:text-slate-900">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-900">
              Terms of Service
            </a>
            <a href="#" className="hover:text-slate-900">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterLayout;
