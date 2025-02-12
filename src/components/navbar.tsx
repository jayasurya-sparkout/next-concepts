import { FaShoppingCart, FaPaw } from "react-icons/fa";

type Props = {
    href: string;
    label: string; 
}
export default function Navbar({ href, label }: Props) {
    return (
        <div className="navWrapper">
            <nav className="flex flex-row justify-between p-4 items-center container mx-auto">
                <div className="">
                    <a href={href} className="flex flex-row justify-between items-center">
                        <span className="icon pr-2">
                            <FaPaw color="#5b21b6" fontSize={32}/>    
                        </span>
                        <span className="titleText font-bold text-2xl">
                            {label}
                        </span>
                    </a>
                </div>
                <div className="">
                    <FaShoppingCart color="#5b21b6" fontSize={32}/>
                </div>
            </nav>
        </div>
    )
}