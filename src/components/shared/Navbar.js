/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import logo from "../../Assets/logo.svg"
import Image from 'next/image';
import { FiSearch } from "react-icons/fi"
import { BsHeart } from "react-icons/bs"
import { useSession, signOut } from 'next-auth/react';
const Navbar = () => {
    const [bg, setBg] = useState(false);
    const { data: session } = useSession();

    useEffect(() => {
        window.addEventListener('scroll', () => {
            return window.scrollY > 50 ? setBg(true) : setBg(false);
        });
    });
    const paths = [
        {
            page: "Home",
            route: "/",
        },
        {
            page: "Products",
            route: "/product",
        },
        {
            page: "Blog",
            route: "/Blog",
        },
    ];

    const categories = [
        {
            route: "/category/processor",
            name: "Cup / Processor",
        },
        {
            route: "/category/monitor",
            name: "Monitor"
        },
        {
            route: "/category/motherboard",
            name: "Motherboard"

        },
        {
            route: "/category/RAM",
            name: "RAM"

        },
        {
            route: "/category/Storage",
            name: "Storage"
        },
        {
            route: "/category/psu",
            name: "Psu"
        },
        {
            route: "/category/other",
            name: "other"
        }
    ]

    return (
        <navbar className={`${bg ? 'bg-[#F4D94A] pb-5 text-white' : ''
            } flex items-center fixed top-0 w-full px-5 text-white z-10 transition-all duration-300 `}>
            <div className="text-[#24262B] flex justify-between items-center w-10/12 mx-auto">
                <div className="flex w-9/12 mx-auto pt-4 gap-32 items-center">
                    <Link href="/" className=' cursor-pointer'>
                        <Image src={logo} width={200} alt="" />
                    </Link>
                    <div className='flex gap-4'>
                        {
                            paths.map((path, index) => <Link
                                className='text-xl font-medium tracking-wider'
                                key={index + 1}
                                href={path.route}
                            >
                                <h1 className='mr-4'> {path.page}</h1>
                            </Link>)
                        }
                        <div className="dropdown dropdown-hover">
                            <label tabIndex={0} className=" cursor-pointer text-xl tracking-wider">Categorie</label>
                            <ul tabIndex={0} className=" rounded-md dropdown-content z-[1] menu p-2 w-52 bg-white box shadow-lg py-4 px-5">
                                {
                                    categories.map((path, index) => <Link
                                        className='hover:text-white transition duration-300 text-lg pb-1 hover:bg-[#F4D94A] px-3 py-1 rounded-md font-medium tracking-wider'
                                        key={index + 1}
                                        href={path.route}
                                    >
                                        <h1 className='mr-4'> {path.name}</h1>
                                    </Link>)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <div className=' cursor-pointer flex items-center tracking-wider text-xl gap-4 pt-4'>
                        {
                            !session?.user ? <h1><Link href="/login">Login</Link></h1> : <h1 onClick={() => signOut()}>Logout</h1>
                        }
                        <h1><FiSearch /></h1>
                        <h1><BsHeart /></h1>
                        <Link href="/pcBuilder" className=' cursor-pointer text-sm px-4 py-2 build-pc text-white ml-3 rounded'>Pc Builder</Link>
                    </div>
                </div>
            </div>
        </navbar>
    );
};

export default Navbar;