import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
export function Footer() {
    return (
        <footer className="flex flex-col md:flex-row justify-between items-center py-8 border-t mt-12 bg-gray-50 px-6">
            <p className="text-gray-600">© 2024 Company, Inc. All rights reserved.</p>
            <ul className="flex gap-6 mt-4 md:mt-0">
                <li>
                    <a className="text-gray-700 hover:text-blue-700" href="#">
                        <FaLinkedin size={35} />
                    </a>
                </li>
                <li>
                    <a className="text-gray-700 hover:text-blue-700" href="https://www.fb.com/l/6lp1kJRRR">
                        <FaFacebookSquare size={35} />
                    </a>
                </li>
                <li>
                    <a className="text-gray-700 hover:text-pink-600" href="https://www.instagram.com/its__rk_01?igsh=MXNxbHVyNzRodDc5cg==">
                        <FaSquareInstagram size={35} />
                    </a>
                </li>
            </ul>
        </footer>
    );
}