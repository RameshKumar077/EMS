import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
export function Footer() {
    return (
        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top footer">
            <p>© 2024 Company, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex">
                <li className="ms-3">
                    <a className="link-body-emphasis" href="#">
                        <FaLinkedin size={35} />

                    </a>
                </li>
                <li className="ms-3">
                    <a className="link-body-emphasis" href="https://www.fb.com/l/6lp1kJRRR">
                        <FaFacebookSquare size={35} />  
                    </a>
                </li>
                <li className="ms-3">
                    <a className="link-body-emphasis" href="https://www.instagram.com/its__rk_01?igsh=MXNxbHVyNzRodDc5cg==">
                        <FaSquareInstagram size={35} />
                    </a>
                </li>
            </ul>
        </div>
    );
}