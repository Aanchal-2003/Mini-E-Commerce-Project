import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from '../components/ProductCard'
import ProductCardSkeleton from '../components/ProductCardSkeleton'
import { Link, useParams } from 'react-router-dom';

export default function Home() {

    const { slug } = useParams()
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([])
    const [loading, setLoadering] = useState(true)


    useEffect(
        () => {
            axios.get("https://dummyjson.com/products/categories").then(
                (response) => {
                    setCategories(response.data)
                }
            ).catch(
                (error) => {
                    setCategories([])
                }
            )
        },
        []
    )


    useEffect(
        () => {
            let API = ""
            if (slug) {
                API = `https://dummyjson.com/products/category/${slug}`
            } else {
                API = "https://dummyjson.com/products"
            }

            console.log(API)


            axios.get(API).then(
                (response) => {
                    console.log(response)
                    setLoadering(true)
                    setProducts(response.data.products)
                }
            ).catch(
                (error) => {
                    console.log(error)
                    setProducts([])
                }
            ).finally(
                () => {
                    setLoadering(false)
                }
            )
        },
        [slug]
    )

    return (
        <div className='max-w-[1350] px-4 grid grid-cols-1 md:grid-cols-6 gap-5 mx-auto  py-6'>
            <div className="hidden md:block">

                <ul>
                    <Link to="/">
                        <li className={`${slug == null ? "bg-green-400 font-bold scale-105" : "bg-teal-400"} my-2 cursor-pointer py-3  text-center text-white rounded-2xl`}>All</li>
                    </Link>
                    {
                        categories.map((cat, i) => {
                            return (
                                <Link key={i} to={`/${cat.slug}`}>
                                    <li className={` my-2 ${cat.slug == slug ? "bg-green-400 font-bold scale-90" : "bg-teal-400"} cursor-pointer py-3  text-center text-white rounded-2xl`}>{cat.name}</li>
                                </Link>
                            )
                        })
                    }

                </ul>

            </div>
            <div className=' col-span-5'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
                    {
                        loading ?
                            [1, 2, 3, 4, 5, 6, 6].map((d, i) => <ProductCardSkeleton key={i} />)
                            :
                            products.map((prod) => {
                                return (
                                    <ProductCard key={prod.id} id={prod.id} thumbnail={prod.thumbnail} title={prod.title} price={prod.price} />
                                )
                            })
                    }

                </div>
            </div>


        </div>
    )
}
