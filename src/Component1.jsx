import React,{Component} from "react";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import imagine from "./instabig.jpg"

export class Component1 extends Component{
    render(){
        return (
            <div className="Principal">
                <div className="Text">
                    <h1 className="Header1">RARES CATANA</h1>
                    <ul className='Lista1'>
                        <li>
                            <FaGithub className="Logos"/>
                            <a href="https://github.com/raresc4">Github</a>
                        </li>
                        <li>
                            <CiLinkedin className="Logos"/>
                            <a href="https://www.linkedin.com/in/rare%C8%99-alexandru-catan%C4%83-652022285/">Linkedin</a>
                        </li>
                        <li>
                        <FaInstagram className="Logos"/>
                        <a href="https://www.instagram.com/raresc4/">Instagram</a>
                        </li>
                    </ul>
                </div>
                <div className="Imagine">
                    <img src={imagine} alt="rares"/>
                </div>
            </div>
        )
    }
}