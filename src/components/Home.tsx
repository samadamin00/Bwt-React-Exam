import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'

export default function Home() {
  let [data, setData] = useState([])
  useEffect(() => {
    let fetchData = async () => {
      try {
        let response = await fetch("https://dummyjson.com/products")
        let result = await response.json();
        console.log(result.products)
        setData(result.products)
      }
      catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])
  return (
    <>
      {/* Navbar */}
      <nav className="flex flex-wrap items-center justify-between bg-gray-600 px-6 py-3">
        <div className="mr-6 flex flex-shrink-0 items-center text-white">
          <img
            className="mx-auto h-10 w-auto"
            src="https://baitussalam.org/images/logo-2.svg"
            alt="Your Company"
          />
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center rounded border border-gray-500 px-3 py-2 text-gray-400 hover:border-white hover:text-white">
            <svg
              className="h-3 w-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="block w-full flex-grow lg:flex lg:w-auto lg:items-center">
          <div className="text-sm lg:flex-grow">
            <a
              href="#"
              className="mr-4 mt-4 block text-gray-300 hover:text-white lg:mt-0 lg:inline-block"
            >
              Docs
            </a>
            <a
              href="#"
              className="mr-4 mt-4 block text-gray-300 hover:text-white lg:mt-0 lg:inline-block"
            >
              Examples
            </a>
            <a
              href="#"
              className="mt-4 block text-gray-300 hover:text-white lg:mt-0 lg:inline-block"
            >
              Blog
            </a>
          </div>
          <div>
            <button className="mt-4 inline-block rounded border border-gray-400 px-4 py-2 text-sm leading-none text-gray-300 hover:bg-gray-300 hover:text-gray-800 lg:mt-0">
              Logout
            </button>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <div className="bg-[#F4F4F4]">
        <div className="mx-auto max-w-3xl px-3 py-5 text-center md:py-10">
          <h1 className="text-3xl font-semibold leading-tight text-[#1E1E1E] md:text-[40px]">
            All-in-One E-commerce App
          </h1>
          <h2 className="mt-5 text-lg font-medium text-[#1E1E1E]">
            Discover premium products and enjoy shopping with us. Risk Free
            Shopping!
          </h2>
        </div>
      </div>
      {/* Products Section */}
      <div className="container mx-auto bg-white p-6">
        <h1 className="mb-6 text-3xl font-bold text-gray-800">Featured Products</h1>
        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Product Card 1 */}
          {data && data.length > 0 ? (
            data.map((product, index) => (
              <div key={index} className="boder-green-200 overflow-hidden rounded-lg border bg-white">
                <Link to={`/${product.id}`}>
                  <img
                    className="h-48 w-full object-cover"
                    src={product.images}
                    alt="Product 1"
                  />
                </Link>
                <div className="p-4">
                  <h3 className="mb-2 text-lg font-semibold text-gray-800">
                    {product.title}
                  </h3>
                  <p className="mb-4 text-gray-600">{product.price}</p>
                  <button className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
                    Buy Now
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>Loading data...</p> // Or handle the empty state
          )}
          {data.map((product, index) => (
            <div key={index} className="boder-green-200 overflow-hidden rounded-lg border bg-white">
              <Link to={`/${product.id}`}>
                <img
                  className="h-48 w-full object-cover"
                  src={product.images}
                  alt="Product 1"
                />
              </Link>
              <div className="p-4">
                <h3 className="mb-2 text-lg font-semibold text-gray-800">
                  {product.title}
                </h3>
                <p className="mb-4 text-gray-600">{product.price}</p>
                <button className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Footer Section */}
      <footer className="relative z-50 bg-[#191F33]">
        <div className="flex flex-col items-center px-4 py-12">
          <div>
            <a
              className="mb-8 flex items-center justify-center gap-5 text-white"
              href="/"
            >
              <img
                alt="Logo"
                style={{ color: "transparent" }}
                width={50}
                src="https://baitussalam.org/images/logo-2.svg"
              />
              <span className="text-3xl font-semibold tracking-wider">
                Bait-us-Salam
              </span>
            </a>
            <p className="max-w-xl text-center text-lg font-medium text-white">
              Shop Today!
            </p>
          </div>
        </div>
        <div className="bg-[#2E3447]">
          <div className="px-3 py-3 text-center">
            <span className="text-[#767E94]">
              Coded with 💙 by{/* */}
              <a
                href="https://www.linkedin.com/in/abdulbasitprofile/"
                target="_blank"
                className="text-white"
              >
                Abdul Basit{" "}
              </a>
              in Karachi
            </span>
          </div>
        </div>
      </footer>
    </>

  )
}
