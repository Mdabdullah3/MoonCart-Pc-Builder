/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import logo from "../../Assets/logo.svg"
import Image from 'next/image';
import { FiSearch } from "react-icons/fi"
import { BsHeart } from "react-icons/bs"
const Navbar = () => {
    const [bg, setBg] = useState(false);

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
            page: "Category",
            route: "/category",
        },
        {
            page: "Contact",
            route: "/contact",
        },
        {
            page: "Blog",
            route: "/blog",
        },
    ];
    return (
        <navbar className={`${bg ? 'bg-[#F4D94A] pb-5 text-white' : ''
            } flex items-center fixed top-0 w-full px-5 text-white z-10 transition-all duration-300 `}>
            <div className="text-[#24262B] flex justify-between items-center w-10/12 mx-auto">
                <div className="flex w-9/12 mx-auto pt-4 gap-32 items-center">
                    <div className=''>
                        <Image src={logo} width={200} alt="" />
                    </div>
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
                    </div>
                </div>
                <div>
                    <div className='flex items-center tracking-wider text-xl gap-4 pt-4'>
                        <h1>Login / Register</h1>
                        <h1><FiSearch /></h1>
                        <h1><BsHeart /></h1>
                    </div>
                </div>
            </div>
        </navbar>
    );
};

export default Navbar;