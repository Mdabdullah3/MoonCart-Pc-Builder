import cpu from "../../Assets/cpu-tower.png"
import other from "../../Assets/keyboard-and-mouse.png"
import motherboard from "../../Assets/motherboard.png"
import psu from "../../Assets/psu.png"
import ram from "../../Assets/ram.png"
import ssd from "../../Assets/ssd.png"
import monitor from "../../Assets/monitor.png"
export const categoriData = [
    {
        id: 1,
        name: "Cpu / Processor",
        icon: cpu,
        categor: "processor",
        path: "/processor"
    },
    {
        id: 2,
        name: "MotherBoard",
        icon: motherboard,
        categor: "motherboard",
        path: "/motherboard"
    },
    {
        id: 3,
        name: "Ram",
        icon: ram,
        categor: "Ram",
        path: '/RAM'
    },
    {
        id: 4,
        name: "Power Supply Unit",
        icon: psu,
        categor: "powerSupply",
        path: "/psu"
    },
    {
        id: 5,
        name: "Storage Device",
        icon: ssd,
        categor: "ssd",
        path: "/Storage"
    },
    {
        id: 6,
        name: "Monitor",
        icon: monitor,
        categor: "monitor",
        path: "/monitor"
    },
    {
        id: 7,
        name: "Other",
        icon: other,
        categor: "other",
        path: "/other"
    },
]