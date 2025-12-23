import React, { createContext, useEffect, useState, useRef } from 'react'
import axios from 'axios';

const storeContext = createContext()

export default function Context({ children }) {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const isLsLoaded = useRef(false);

    async function fetchProducts() {
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products)
        isLsLoaded.current = true;
    }

    function getLsData() {
        const savedCart = localStorage.getItem("cart");
        const lsData = savedCart ? JSON.parse(savedCart) : [];
        setCart(lsData)
    }

    useEffect(() => {
        getLsData();
    },
        []
    );

    useEffect(() => {
        if (isLsLoaded.current) {   // ✅ 3️⃣ ADD THIS
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    },
        [cart]
    );

    useEffect(
        () => {
            fetchProducts()
        },
        []
    )

    function addtoCart(id) {

        const item = products.find((prod) => prod.id === id)
        const isProductInCart = cart.find((prod) => prod.id === id)
        if (isProductInCart) {
            //qty increase
            const updateCart = cart.map(
                (cp) => {
                    return cp.id == id ? { ...cp, qty: cp.qty + 1 } : cp
                }
            )

            setCart(updateCart)

        } else {
            //new insert
            setCart([...cart, { ...item, qty: 1 }])
        }


    }

    function removeHandler(id) {
        const updateCart = cart.filter((prod) => prod.id !== id);
        setCart(updateCart)
    }

    function qtyHandler(id, flag) {
        let updateCart = [];
        if (flag === "inc") {
            updateCart = cart.map(
                (cp) => {
                    return cp.id == id ? { ...cp, qty: cp.qty + 1 } : cp
                }
            )
        } else {

            updateCart = cart.map(
                (cp) => {
                    return cp.id == id ? { ...cp, qty: cp.qty > 1 ? cp.qty - 1 : 1 } : cp
                }
            )
        }


        setCart(updateCart)
    }

    const totalAmounts = cart.reduce(
        (acc, item) => acc + item.price * item.qty, 0
    )

    const totalItems = cart.reduce(
        (acc, item) => acc + item.qty,
        0
    );

    // setCart(totalAmounts)


    return (
        <storeContext.Provider value={{ addtoCart, cart, removeHandler, qtyHandler, totalAmounts, totalItems }}>
            {children}
        </storeContext.Provider>
    )
}

export { storeContext }
