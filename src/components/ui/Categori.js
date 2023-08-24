import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';
import cpu from "../../Assets/cpu-tower.png"
import other from "../../Assets/keyboard-and-mouse.png"
import motherboard from "../../Assets/motherboard.png"
import psu from "../../Assets/psu.png"
import ram from "../../Assets/ram.png"
import ssd from "../../Assets/ssd.png"
import monitor from "../../Assets/monitor.png"

const Categori = () => {
    const categori = [
        {
            id: 1,
            name: "Cpu / Processor",
            icon: cpu,
            categor: "processor"
        },
        {
            id: 2,
            name: "MotherBoard",
            icon: motherboard,
            categor: "motherboard"
        },
        {
            id: 3,
            name: "Ram",
            icon: ram,
            categor: "Ram"
        },
        {
            id: 4,
            name: "Power Supply Unit",
            icon: psu,
            categor: "powerSupply"
        },
        {
            id: 5,
            name: "Storage Device",
            icon: ssd,
            categor: "ssd"
        },
        {
            id: 6,
            name: "Monitor",
            icon: monitor,
            categor: "monitor"
        },
        {
            id: 7,
            name: "Other",
            icon: other,
            categor: "other"
        },
    ]
    return (
        <div className='mt-32'>
            <h1 className='text-2xl text-center tracking-wider font-semibold'> Featured Categories</h1>
            <p className='text-lg tracking-wider text-center'>Get Your Desired Product from Featured Category!</p>
            <div className='mt-16 w-10/12 mx-auto'>
                <Marquee
                    gradient={false}
                    speed={80}
                    pauseOnHover={true}
                    pauseOnClick={true}
                    delay={0}
                    play={true}
                    direction="left"
                >
                    {categori.map((item) => (
                        <div className="mb-8 px-12 rounded-lg py-6 bg-white shadow-lg ml-10" key={item.id} >
                            <Image src={item.icon} alt="categori img" width={100} />
                            <h3 className='light-effect tracking-wider text-center text-lg pt-3'>
                                {item.name}
                            </h3>
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default Categori;