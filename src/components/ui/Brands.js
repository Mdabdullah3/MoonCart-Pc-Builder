/* eslint-disable @next/next/no-img-element */
import React from "react";
import oppo from "../../Assets/brands/oppo.png";
import mi from "../../Assets/brands/mi.png";
import samsung from "../../Assets/brands/samsung.png";
import lenova from "../../Assets/brands/lenova.png";
import apple from "../../Assets/brands/apple.png";
import assus from "../../Assets/brands/assus.png"
import Image from "next/image";
const Brands = () => {
    const brands = [
        {
            id: 1,
            img: oppo,
            dis: "The Worlds leading smart device manufacturers and innovators",
        },
        { id: 2, img: mi, dis: "Making Quality Technology Accessible to Everyone" },
        { id: 3, img: samsung, dis: "Samsung Taking the lead in tech innovation. Make Smart World" },
        {
            id: 4,
            img: lenova,
            dis: "Lenovo is one of the worlds leading personal technology companies",
        },
        {
            id: 5,
            img: apple,
            dis: "The power and flexibility to do whatever needs doing",
        },
        {
            id: 6,
            img: assus,
            dis: "Dedicated to creating products for today’s and tomorrow’s smart life",
        }
    ];
    return (
        <section>
            <h1 className="text-center text-2xl font-bold mt-28 tracking-wider">Our Brands
            </h1>
            <p className="text-lg tracking-wider pt-1 text-center">We Work With the Best Partners</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 relative font-mono">
                {brands.map((brand) => (
                    <div key={brand.id}>
                        <div class="w-11/12 h-52 mb-10 bg-white shadow-xl rounded-lg mx-auto">
                            <div class="px-10 pt-8">
                                <div class="justify-center">
                                    <Image className="w-36 items-center pb-2" src={brand.img} alt="assus-img" />
                                </div>
                                <p className="">{brand.dis}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Brands;
