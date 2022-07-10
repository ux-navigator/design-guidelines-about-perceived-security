import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import ImagesMockup01 from "../img/mockup01.png";
import ImagesPart02 from "../img/part_02_img.png";
import ImagesPart03 from "../img/part_03_img.png";
import ImagesPart04 from "../img/development process.png";
import WelcomeYourComments from "./welcomYourComments"
import Footer from './footer';

import { motion } from "framer-motion";

const Main = () => {
    return (
        <div>
            <h1 id="main_txt" className="title_1 main_title"> 7 DESIGN GUIDELINES FOR PERCEIVED SECURITY. </h1>
            <div id="main_img">
                <svg width="463" height="392" viewBox="0 0 463 392" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="180.622" y="12.6788" width="47.6911" height="47.732" fill="#E2E3F0" />
                    <rect x="234.274" y="12.6788" width="47.6911" height="47.732" fill="#E2E3F0" />
                    <rect x="180.622" y="66.3772" width="47.6911" height="47.732" fill="#E2E3F0" />
                    <rect x="234.274" y="66.3772" width="47.6911" height="47.732" fill="#3140E2" />
                    <path d="M265.572 87.26L258.12 94.7181L250.668 87.26" stroke="white" stroke-width="5"
                        stroke-linecap="square" />
                    <path d="M67.0656 283.621L119.973 374.61H14.1582L67.0656 283.621Z" fill="#E2E3F0" />
                    <rect x="62.5946" y="317.928" width="7.45174" height="28.3408" fill="#3140E2" />
                    <ellipse cx="66.3204" cy="355.964" rx="4.47105" ry="4.47487" fill="#3140E2" />
                    <rect x="339.301" y="85.0225" width="17.8842" height="29.8325" fill="#3140E2" />
                    <rect x="362.401" y="67.1231" width="17.8842" height="47.732" fill="#3140E2" />
                    <rect x="385.502" y="49.9694" width="17.8842" height="64.8856" fill="#3140E2" />
                    <rect x="408.602" y="32.0699" width="17.8842" height="82.7851" fill="#E2E3F0" />
                    <rect x="431.703" y="14.9162" width="17.8842" height="99.9388" fill="#E2E3F0" />
                    <path
                        d="M428.861 97.6081C436.964 97.6081 443.532 91.0343 443.532 82.925C443.532 74.8157 436.964 68.2418 428.861 68.2418C420.759 68.2418 414.191 74.8157 414.191 82.925C414.191 91.0343 420.759 97.6081 428.861 97.6081Z"
                        fill="white" fill-opacity="0.5" stroke="#3140E2" stroke-width="10" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path d="M439.9 93.9723L449.736 103.817" stroke="#3140E2" stroke-width="10" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <ellipse cx="184.702" cy="149.938" rx="7.55852" ry="7.56499" fill="#E2E3F0" />
                    <ellipse cx="203.228" cy="149.938" rx="7.55852" ry="7.56499" fill="#E2E3F0" />
                    <ellipse cx="221.754" cy="149.938" rx="7.55852" ry="7.56499" fill="#E2E3F0" />
                    <ellipse cx="240.279" cy="149.938" rx="7.55852" ry="7.56499" fill="#E2E3F0" />
                    <ellipse cx="258.805" cy="149.938" rx="7.55852" ry="7.56499" fill="#E2E3F0" />
                    <ellipse cx="277.331" cy="149.938" rx="7.55852" ry="7.56499" fill="#E2E3F0" />
                    <ellipse cx="184.702" cy="168.48" rx="7.55852" ry="7.56499" fill="#E2E3F0" />
                    <ellipse cx="184.702" cy="187.021" rx="7.55852" ry="7.56499" fill="#E2E3F0" />
                    <ellipse cx="184.702" cy="205.563" rx="7.55852" ry="7.56499" fill="#E2E3F0" />
                    <ellipse cx="184.702" cy="224.104" rx="7.55852" ry="7.56499" fill="#E2E3F0" />
                    <ellipse cx="184.702" cy="242.646" rx="7.55852" ry="7.56499" fill="#E2E3F0" />
                    <ellipse cx="203.228" cy="168.48" rx="7.55852" ry="7.56499" fill="#E2E3F0" />
                    <ellipse cx="203.228" cy="187.021" rx="7.55852" ry="7.56499" fill="#E2E3F0" />
                    <ellipse cx="203.228" cy="205.563" rx="7.55852" ry="7.56499" fill="#E2E3F0" />
                    <ellipse cx="203.228" cy="224.104" rx="7.55852" ry="7.56499" fill="#E2E3F0" />
                    <ellipse cx="203.228" cy="242.646" rx="7.55852" ry="7.56499" fill="#E2E3F0" />
                    <ellipse cx="221.754" cy="168.48" rx="7.55852" ry="7.56499" fill="#E2E3F0" />
                    <ellipse cx="221.754" cy="187.021" rx="7.55852" ry="7.56499" fill="#3140E2" />
                    <ellipse cx="221.754" cy="205.563" rx="7.55852" ry="7.56499" fill="#3140E2" />
                    <ellipse cx="221.754" cy="224.104" rx="7.55852" ry="7.56499" fill="#E2E3F0" />
                    <ellipse cx="221.754" cy="242.646" rx="7.55852" ry="7.56499" fill="#E2E3F0" />
                    <ellipse cx="240.279" cy="168.48" rx="7.55852" ry="7.56499" fill="#E2E3F0" />
                    <ellipse cx="240.279" cy="187.021" rx="7.55852" ry="7.56499" fill="#3140E2" />
                    <ellipse cx="240.279" cy="205.563" rx="7.55852" ry="7.56499" fill="#3140E2" />
                    <ellipse cx="240.279" cy="224.104" rx="7.55852" ry="7.56499" fill="#E2E3F0" />
                    <ellipse cx="240.279" cy="242.646" rx="7.55852" ry="7.56499" fill="#E2E3F0" />
                    <ellipse cx="258.805" cy="168.48" rx="7.55852" ry="7.56499" fill="#E2E3F0" />
                    <ellipse cx="258.805" cy="187.021" rx="7.55852" ry="7.56499" fill="#E2E3F0" />
                    <ellipse cx="258.805" cy="205.563" rx="7.55852" ry="7.56499" fill="#E2E3F0" />
                    <ellipse cx="258.805" cy="224.104" rx="7.55852" ry="7.56499" fill="#E2E3F0" />
                    <ellipse cx="258.805" cy="242.646" rx="7.55852" ry="7.56499" fill="#E2E3F0" />
                    <ellipse cx="277.331" cy="168.48" rx="7.55852" ry="7.56499" fill="#E2E3F0" />
                    <ellipse cx="277.331" cy="187.021" rx="7.55852" ry="7.56499" fill="#E2E3F0" />
                    <ellipse cx="277.331" cy="205.563" rx="7.55852" ry="7.56499" fill="#E2E3F0" />
                    <ellipse cx="277.331" cy="224.104" rx="7.55852" ry="7.56499" fill="#E2E3F0" />
                    <ellipse cx="277.331" cy="242.646" rx="7.55852" ry="7.56499" fill="#E2E3F0" />
                    <ellipse cx="30.9247" cy="27.2221" rx="14.5309" ry="14.5433" fill="#3140E2" />
                    <ellipse cx="67.0656" cy="27.2221" rx="14.9035" ry="14.5433" fill="#3140E2" />
                    <ellipse cx="103.207" cy="27.2221" rx="14.5309" ry="14.5433" fill="#3140E2" />
                    <ellipse cx="30.9247" cy="63.394" rx="14.5309" ry="14.9162" fill="#3140E2" />
                    <ellipse cx="30.9247" cy="99.5658" rx="14.5309" ry="14.5433" fill="#3140E2" />
                    <ellipse cx="67.0656" cy="63.394" rx="14.9035" ry="14.9162" fill="#3140E2" />
                    <ellipse cx="67.0656" cy="99.5658" rx="14.9035" ry="14.5433" fill="#3140E2" />
                    <ellipse cx="103.207" cy="63.394" rx="14.5309" ry="14.9162" fill="#3140E2" />
                    <ellipse cx="103.207" cy="99.5658" rx="14.5309" ry="14.5433" fill="#3140E2" />
                    <path
                        d="M351.223 184.303C356.203 184.303 360.239 180.305 360.239 175.373C360.239 170.441 356.203 166.443 351.223 166.443C346.243 166.443 342.207 170.441 342.207 175.373C342.207 180.305 346.243 184.303 351.223 184.303Z"
                        fill="#E2E3F0" />
                    <path
                        d="M372.208 199.065L362.358 186.522C362.307 186.457 362.252 186.395 362.193 186.337C361.543 185.69 360.77 185.177 359.919 184.828C359.068 184.479 358.155 184.3 357.234 184.303H345.212C344.291 184.3 343.378 184.479 342.527 184.828C341.676 185.177 340.903 185.69 340.253 186.337C340.194 186.395 340.139 186.457 340.089 186.522L330.238 199.065C329.342 200.004 328.851 201.251 328.869 202.543C328.887 203.834 329.414 205.068 330.336 205.981C331.258 206.895 332.504 207.416 333.808 207.434C335.112 207.452 336.372 206.966 337.319 206.078L340.851 203.358L335.884 218.895C335.368 220.081 335.338 221.418 335.802 222.625C336.265 223.831 337.185 224.811 338.366 225.356C339.548 225.902 340.897 225.97 342.128 225.546C343.359 225.122 344.374 224.24 344.959 223.087L351.223 213.324L357.487 223.087C358.072 224.24 359.087 225.122 360.318 225.546C361.549 225.97 362.899 225.902 364.08 225.356C365.261 224.811 366.181 223.831 366.644 222.625C367.108 221.418 367.079 220.081 366.562 218.895L361.595 203.358L365.127 206.078C366.074 206.966 367.334 207.452 368.638 207.434C369.943 207.416 371.188 206.895 372.11 205.981C373.033 205.068 373.559 203.834 373.577 202.543C373.595 201.251 373.104 200.003 372.208 199.065H372.208Z"
                        fill="#E2E3F0" />
                    <path
                        d="M395.932 184.303C400.912 184.303 404.948 180.305 404.948 175.373C404.948 170.441 400.912 166.443 395.932 166.443C390.952 166.443 386.916 170.441 386.916 175.373C386.916 180.305 390.952 184.303 395.932 184.303Z"
                        fill="#3140E2" />
                    <path
                        d="M416.917 199.065L407.066 186.522C407.016 186.457 406.961 186.395 406.902 186.337C406.252 185.69 405.479 185.177 404.628 184.828C403.777 184.479 402.864 184.3 401.943 184.303H389.921C389 184.3 388.087 184.479 387.236 184.828C386.385 185.177 385.612 185.69 384.962 186.337C384.903 186.395 384.848 186.457 384.797 186.522L374.947 199.065C374.051 200.004 373.56 201.251 373.578 202.543C373.596 203.834 374.123 205.068 375.045 205.981C375.967 206.895 377.213 207.416 378.517 207.434C379.821 207.452 381.081 206.966 382.028 206.078L385.56 203.358L380.592 218.895C380.076 220.081 380.047 221.418 380.511 222.625C380.974 223.831 381.894 224.811 383.075 225.356C384.256 225.902 385.606 225.97 386.837 225.546C388.068 225.122 389.083 224.24 389.668 223.087L395.932 213.324L402.196 223.087C402.78 224.24 403.796 225.122 405.027 225.546C406.258 225.97 407.607 225.902 408.789 225.356C409.97 224.811 410.89 223.831 411.353 222.625C411.817 221.418 411.787 220.081 411.271 218.895L406.304 203.358L409.836 206.078C410.783 206.966 412.043 207.452 413.347 207.434C414.651 207.416 415.897 206.895 416.819 205.981C417.741 205.068 418.268 203.834 418.286 202.543C418.304 201.251 417.813 200.003 416.917 199.065H416.917Z"
                        fill="#3140E2" />
                    <path
                        d="M440.641 184.303C445.62 184.303 449.657 180.305 449.657 175.373C449.657 170.441 445.62 166.443 440.641 166.443C435.661 166.443 431.624 170.441 431.624 175.373C431.624 180.305 435.661 184.303 440.641 184.303Z"
                        fill="#E2E3F0" />
                    <path
                        d="M461.625 199.065L451.775 186.522C451.724 186.457 451.669 186.395 451.61 186.337C450.961 185.69 450.188 185.177 449.337 184.828C448.485 184.479 447.573 184.3 446.651 184.303H434.63C433.708 184.3 432.796 184.479 431.944 184.828C431.093 185.177 430.32 185.69 429.671 186.337C429.612 186.395 429.557 186.457 429.506 186.522L419.655 199.065C418.759 200.004 418.268 201.251 418.287 202.543C418.305 203.834 418.831 205.068 419.753 205.981C420.676 206.895 421.921 207.416 423.225 207.434C424.529 207.452 425.789 206.966 426.737 206.078L430.268 203.358L425.301 218.895C424.785 220.081 424.756 221.418 425.219 222.625C425.683 223.831 426.603 224.811 427.784 225.356C428.965 225.902 430.314 225.97 431.545 225.546C432.776 225.122 433.792 224.24 434.377 223.087L440.641 213.324L446.904 223.087C447.489 224.24 448.505 225.122 449.736 225.546C450.967 225.97 452.316 225.902 453.497 225.356C454.678 224.811 455.598 223.831 456.062 222.625C456.525 221.418 456.496 220.081 455.98 218.895L451.013 203.358L454.544 206.078C455.492 206.966 456.752 207.452 458.056 207.434C459.36 207.416 460.606 206.895 461.528 205.981C462.45 205.068 462.976 203.834 462.994 202.543C463.013 201.251 462.522 200.003 461.625 199.065H461.625Z"
                        fill="#E2E3F0" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M106.556 142.577H27.5704V249.97H106.556V142.577ZM27.5705 175.392L60.3569 142.577L27.5705 142.577L27.5705 175.392Z"
                        fill="#E2E3F0" />
                    <path d="M27.5704 175.392L60.3569 142.577V175.392H27.5704Z" fill="#C7C9E3" />
                    <rect x="42.4734" y="198.511" width="49.1797" height="9.6952" fill="#3140E2" />
                    <rect x="42.4734" y="217.156" width="49.1797" height="10.441" fill="#3140E2" />
                </svg>
            </div>
        </div>
    );
}

const About = () => {
    return (
        <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                    type: "just",
                    duration: 0.8
                }
            }}
            viewport={{ once: true, amount: 0 }}>
            <div id="about">
                <h2 id="about_txt1" className="title_3 blue txt_center">This guideline is about how security</h2>
                <h2 id="about_txt2" className="title_3 blue txt_center">should be designed in fintech services.</h2>
                <svg className="down-arrow" width="21" height="77" viewBox="0 0 21 77" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5 0L10.5 74.5" stroke="#3140E2" stroke-width="2" />
                    <path d="M1 66L10.5 75L20 66" stroke="#3140E2" stroke-width="2" />
                </svg>
            </div>
        </motion.div>
    );
}

const Part_1 = () => {
    return (

        <div id="part_01">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                    opacity: 1,
                    transition: {
                        type: "just"
                    }
                }}
                viewport={{ once: true, amount: 0 }}>
                <svg width="215" height="22" viewBox="0 0 215 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M5.67 17.252C8.928 17.252 10.8 14.588 10.8 10.7C10.8 6.812 8.928 4.148 5.67 4.148C2.412 4.148 0.54 6.812 0.54 10.7C0.54 14.588 2.412 17.252 5.67 17.252ZM5.67 14.444C4.158 14.444 3.42 13.13 3.42 10.7C3.42 8.27 4.158 6.956 5.67 6.956C7.182 6.956 7.92 8.27 7.92 10.7C7.92 13.13 7.182 14.444 5.67 14.444ZM14.4603 4.4L11.1663 5.588L11.8683 8.054L14.1003 7.442V17H16.9803V4.4H14.4603Z"
                        fill="#3140E2" />
                    <rect x="35" y="11" width="180" height="1" fill="#3140E2" />
                </svg>
            </motion.div>
            <motion.div
                initial={{ y: 160, opacity: 0 }}
                whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: {
                        type: "just",
                        duration: 0.8
                    }
                }}
                viewport={{ once: true, amount: 0 }}>
                <p className="body_1">
                    핀테크 산업의 주요 해결 과제는 보안의 위험성으로 인한 고객의 신뢰의 문제입니다. 여기서 주의할 점은 서비스의 실제 보안 기술의 수준과 사용자가 서비스를 경험하며 느끼는 주관적인
                    보안
                    인식에
                    차이가 있다는 것입니다. 사용자의 주관적인 보안 인식을 Perceived security라고 하며, 낮은 Perceived security는 핀테크 서비스의 발전을 막는 주요
                    요인입니다.
                    따라서, 핀테크 서비스의 Perceived security 향상을 위한 UX 고려 요소와 가이드라인을 개발할 필요가 있었습니다.
                </p>
            </motion.div >
        </div>

    );
}

const Mockup_1 = (props) => {
    return (
        <motion.div
            initial={{ y: 160, opacity: 0 }}
            whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                    type: "just",
                    duration: 0.8
                }
            }}
            viewport={{ once: true, amount: 0 }}>
            <img id="mockup01" src={props.img} alt="mockup" /></motion.div>
    );
}

const Part_2 = (props) => {
    return (
        <div id="part_02">
            <div id="part_02_wrap">
                <motion.div
                    initial={{ x: -40, opacity: 0 }}
                    whileInView={{
                        x: 0,
                        opacity: 1,
                        transition: {
                            type: "just",
                            duration: 1
                        }
                    }}
                    viewport={{ once: true, amount: 0 }}>
                    <svg width="215" height="22" viewBox="0 0 215 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.67 17.252C8.928 17.252 10.8 14.588 10.8 10.7C10.8 6.812 8.928 4.148 5.67 4.148C2.412 4.148 0.54 6.812 0.54 10.7C0.54 14.588 2.412 17.252 5.67 17.252ZM5.67 14.444C4.158 14.444 3.42 13.13 3.42 10.7C3.42 8.27 4.158 6.956 5.67 6.956C7.182 6.956 7.92 8.27 7.92 10.7C7.92 13.13 7.182 14.444 5.67 14.444ZM11.3823 17H19.9503V14.228H15.7203L17.8083 12.122C18.9603 10.97 19.7703 9.674 19.7703 8.162C19.7703 5.624 17.7543 4.148 15.5043 4.148C13.7583 4.148 12.0663 5.03 11.2563 6.902L13.6863 8.324C14.0283 7.532 14.6583 6.956 15.5403 6.956C16.3863 6.956 16.8903 7.496 16.8903 8.288C16.8903 9.026 16.3503 9.764 15.6123 10.52L11.3823 14.912V17Z"
                            fill="#3140E2" />
                        <rect x="35" y="11" width="180" height="1" fill="#3140E2" />
                    </svg>

                    <div id="part_02_title">
                        <h2 className="title_3 blue">
                            DESIGN </h2>
                        <h2 className="title_3 blue">
                            PRINCIPLE
                        </h2>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ x: -80, opacity: 0 }}
                    whileInView={{
                        x: 0,
                        opacity: 1,
                        transition: {
                            type: "just",
                            duration: 0.8
                        }
                    }}
                    viewport={{ once: true, amount: 0 }}>
                    <p className="body_1">핀테크 서비스가 사용자로 하여금 우수한 보안을 인지하게 하려면 어떻게 해야할까요? 그에 대한 해답으로 7가지의 디자인 원칙을 제시합니다.</p>
                    <Link to="/guidelines">
                        <button className="btn1 btn">자세히 보기
                            <svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 1L21 8L15 15" stroke="white" stroke-width="2" />
                                <path d="M0 8H20.3349" stroke="white" stroke-width="2" />
                            </svg>

                        </button>
                    </Link>
                </motion.div>
            </div>

            <motion.div className='part_02_img'
                initial={{ opacity: 0 }}
                whileInView={{
                    opacity: 1,
                    transition: {
                        type: "just",
                        duration: 2
                    }
                }}
                viewport={{ once: true, amount: 0 }}><img src={props.img} /></motion.div>
        </div >

    );
}

const Part_3 = (props) => {
    function handleCardDwnloadClick() {
        window.open(
            'https://drive.google.com/file/d/1EDOWIqFFIwdGOzk1jeqfFF-5eKkLr9kx/view?usp=sharing',
            '_blank' // <- This is what makes it open in a new window.
        );
    }
    return (

        <div id="part_03">
            <motion.div className='part_03_img'
                initial={{ opacity: 0 }}
                whileInView={{
                    opacity: 1,
                    transition: {
                        type: "just",
                        duration: 2
                    }
                }}
                viewport={{ once: true, amount: 0 }}>
                <img src={props.img} /></motion.div>
            <div id="part_03_wrap">
                <motion.div
                    initial={{ x: 40, opacity: 0 }}
                    whileInView={{
                        x: 0,
                        opacity: 1,
                        transition: {
                            type: "just",
                            duration: 1
                        }
                    }}
                    viewport={{ once: true, amount: 0 }}>
                    <svg width="215" height="22" viewBox="0 0 215 22" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.67 17.252C8.928 17.252 10.8 14.588 10.8 10.7C10.8 6.812 8.928 4.148 5.67 4.148C2.412 4.148 0.54 6.812 0.54 10.7C0.54 14.588 2.412 17.252 5.67 17.252ZM5.67 14.444C4.158 14.444 3.42 13.13 3.42 10.7C3.42 8.27 4.158 6.956 5.67 6.956C7.182 6.956 7.92 8.27 7.92 10.7C7.92 13.13 7.182 14.444 5.67 14.444ZM17.471 9.512L19.649 6.74V4.4H11.549V7.1H16.157L13.871 9.998L14.969 11.636H15.563C16.751 11.636 17.273 12.266 17.273 13.04C17.273 13.814 16.751 14.444 15.563 14.444C14.465 14.444 13.925 13.94 13.637 13.112L11.153 14.552C11.927 16.406 13.655 17.252 15.563 17.252C17.993 17.252 20.153 15.812 20.153 13.04C20.153 11.294 19.019 10.052 17.471 9.512Z"
                            fill="#3140E2" />
                        <rect x="35" y="11" width="180" height="1" fill="#3140E2" />
                    </svg>
                    <div id="part_03_title">
                        <h2 className="title_3 blue">FOLDED </h2>
                        <h2 className="title_3 blue"> CARD</h2>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ x: 40, opacity: 0 }}
                    whileInView={{
                        x: 0,
                        opacity: 1,
                        transition: {
                            type: "just",
                            duration: 0.8
                        }
                    }}
                    viewport={{ once: true, amount: 0 }}>

                    <p className="body_1">이 가이드라인은 웹페이지 뿐만 아니라 디자인 협업 및 의사결정 시 유용하게 쓰일 수 있도록 아코디언 카드 형태로도 제작되었습니다.
                        누구나 다운받아 출력하여 사용할 수 있습니다.
                    </p>

                    <button onClick={handleCardDwnloadClick} className="btn1 btn">카드 다운받기
                        <svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 1L21 8L15 15" stroke="white" stroke-width="2" />
                            <path d="M0 8H20.3349" stroke="white" stroke-width="2" />
                        </svg>
                    </button>
                </motion.div>
            </div>
        </div>
    );
}

const Part_4 = (props) => {
    return (

        <div id="part_04">
            <motion.div
                initial={{ y: 160, opacity: 0 }}
                whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: {
                        type: "just",
                        duration: 0.8
                    }
                }}
                viewport={{ once: true, amount: 0 }}>
                <h2 className="title_3 txt_center">DEVELOPMENT PROCESS</h2>
                <div className="txt_center">
                    <p><img src={props.img} /></p>
                    <p className="body_1 txt_center">먼저, 사용자의 핀테크 사용 경험을 분석하여 보안 인식에 영향을 미치는 디자인 원칙을 도출하였으며,</p>
                    <p className="body_1 txt_center">4명의 핀테크 UX 전문가와의 인터뷰 결과를 종합하여 최종적으로 디자인 가이드라인을 만들었습니다.</p>
                    <p className="body_1 txt_center">이후 디자인 워크샵을 진행하여 유용성과 효과를 검증하였습니다.</p>
                    <div id="part_04_detail_btn"><div className="body_4 gray_1 btn line">더 자세한 개발 프로세스 보기</div></div>
                </div>
            </motion.div>
        </div >

    );
}

const Part_5 = () => {
    return (
        <div id="part_05" >
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                    opacity: 1,
                    transition: {
                        type: "just",
                        duration: 0.8
                    }
                }}
                viewport={{ once: true, amount: 0 }}>
                <svg className="part_05_svg" width="215" height="22" viewBox="0 0 215 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M5.67 17.252C8.928 17.252 10.8 14.588 10.8 10.7C10.8 6.812 8.928 4.148 5.67 4.148C2.412 4.148 0.54 6.812 0.54 10.7C0.54 14.588 2.412 17.252 5.67 17.252ZM5.67 14.444C4.158 14.444 3.42 13.13 3.42 10.7C3.42 8.27 4.158 6.956 5.67 6.956C7.182 6.956 7.92 8.27 7.92 10.7C7.92 13.13 7.182 14.444 5.67 14.444ZM16.2921 8.828H15.2661L15.3921 7.1H19.9821V4.4H12.6921L12.1701 11.636H16.1121C17.2101 11.636 17.7321 12.266 17.7321 13.04C17.7321 13.814 17.2101 14.444 16.0221 14.444C14.8341 14.444 14.2941 13.94 14.0061 13.112L11.5221 14.552C12.2961 16.406 14.0241 17.252 16.0221 17.252C18.4521 17.252 20.6121 15.812 20.6121 13.04C20.6121 10.268 18.6321 8.828 16.2921 8.828Z"
                        fill="#3140E2" />
                    <rect x="35" y="11" width="180" height="1" fill="#3140E2" />
                </svg>
            </motion.div>
            <motion.div
                initial={{ y: 160, opacity: 0 }}
                whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: {
                        type: "just",
                        duration: 0.8
                    }
                }}
                viewport={{ once: true, amount: 0 }}>
                <div>
                    <p className="body_1">
                        핀테크 서비스에 종사하는 서비스 기획자 및 디자이너가 핀테크 서비스에서의 보안을 정립하고 서비스의 보안성을 디자인 하는 것에 도움이 될 것으로 기대합니다.
                    </p>
                    <svg width="821" height="93" viewBox="0 0 821 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="132.448" y="9.28564" width="34.9568" height="34.9568" fill="#E2E3F0" />
                        <rect x="171.774" y="9.28564" width="34.9568" height="34.9568" fill="#E2E3F0" />
                        <rect x="132.448" y="48.6118" width="34.9568" height="34.9568" fill="#E2E3F0" />
                        <rect x="171.774" y="48.6118" width="34.9568" height="34.9568" fill="#3140E2" />
                        <path d="M194.715 63.9053L189.253 69.3673L183.791 63.9053" stroke="white" stroke-width="5"
                            stroke-linecap="square" />
                        <rect x="248.51" y="62.2671" width="13.1088" height="21.848" fill="#3140E2" />
                        <rect x="265.442" y="49.1577" width="13.1088" height="34.9568" fill="#3140E2" />
                        <rect x="282.375" y="36.5957" width="13.1088" height="47.5194" fill="#3140E2" />
                        <rect x="299.307" y="23.4863" width="13.1088" height="60.6281" fill="#E2E3F0" />
                        <rect x="316.239" y="10.9243" width="13.1088" height="73.1907" fill="#E2E3F0" />
                        <path
                            d="M314.156 71.4837C320.095 71.4837 324.909 66.6692 324.909 60.7304C324.909 54.7915 320.095 49.9771 314.156 49.9771C308.217 49.9771 303.403 54.7915 303.403 60.7304C303.403 66.6692 308.217 71.4837 314.156 71.4837Z"
                            fill="white" fill-opacity="0.5" stroke="#3140E2" stroke-width="10" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M322.247 68.8208L329.457 76.0306" stroke="#3140E2" stroke-width="10"
                            stroke-linecap="round" stroke-linejoin="round" />
                        <circle cx="22.6671" cy="19.9365" r="10.6509" fill="#3140E2" />
                        <ellipse cx="49.158" cy="19.9365" rx="10.924" ry="10.6509" fill="#3140E2" />
                        <circle cx="75.6487" cy="19.9365" r="10.6509" fill="#3140E2" />
                        <ellipse cx="22.6671" cy="46.4274" rx="10.6509" ry="10.924" fill="#3140E2" />
                        <circle cx="22.6671" cy="72.918" r="10.6509" fill="#3140E2" />
                        <circle cx="49.158" cy="46.4274" r="10.924" fill="#3140E2" />
                        <ellipse cx="49.158" cy="72.918" rx="10.924" ry="10.6509" fill="#3140E2" />
                        <ellipse cx="75.6487" cy="46.4274" rx="10.6509" ry="10.924" fill="#3140E2" />
                        <circle cx="75.6487" cy="72.918" r="10.6509" fill="#3140E2" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M439.402 7.1001H381.505V7.10068L405.538 7.10068L381.505 31.1334V85.7528H439.402V7.1001Z"
                            fill="#E2E3F0" />
                        <path d="M381.505 31.1329L405.538 7.1001V31.1329H381.505Z" fill="#C7C9E3" />
                        <rect x="392.429" y="48.0659" width="36.0492" height="7.10059" fill="#3140E2" />
                        <rect x="392.429" y="61.7202" width="36.0492" height="7.64679" fill="#3140E2" />
                        <path d="M771.842 13.1084L810.622 79.7447H733.062L771.842 13.1084Z" fill="#E2E3F0" />
                        <rect x="768.565" y="38.2344" width="5.46199" height="20.7556" fill="#3140E2" />
                        <circle cx="771.296" cy="66.0897" r="3.2772" fill="#3140E2" />
                        <path
                            d="M618.561 37.6581C622.214 37.6581 625.176 34.7301 625.176 31.1183C625.176 27.5065 622.214 24.5786 618.561 24.5786C614.907 24.5786 611.945 27.5065 611.945 31.1183C611.945 34.7301 614.907 37.6581 618.561 37.6581Z"
                            fill="#E2E3F0" />
                        <path
                            d="M633.957 48.4699L626.73 39.2839C626.693 39.2363 626.652 39.1911 626.609 39.1485C626.133 38.6747 625.566 38.2991 624.941 38.0434C624.316 37.7876 623.647 37.6569 622.971 37.6587H614.15C613.474 37.6569 612.805 37.7876 612.18 38.0434C611.556 38.2991 610.989 38.6747 610.512 39.1485C610.469 39.1911 610.429 39.2363 610.391 39.2839L603.164 48.47C602.506 49.1574 602.146 50.0712 602.159 51.017C602.173 51.9629 602.559 52.8663 603.236 53.5352C603.912 54.2041 604.826 54.5857 605.783 54.5989C606.74 54.6122 607.664 54.256 608.359 53.6061L610.95 51.6138L607.306 62.993C606.927 63.8609 606.906 64.8406 607.246 65.724C607.586 66.6074 608.261 67.325 609.128 67.7244C609.994 68.1239 610.984 68.1737 611.887 67.8634C612.79 67.5531 613.536 66.9071 613.965 66.0624L618.561 58.9125L623.156 66.0624C623.585 66.9071 624.331 67.5532 625.234 67.8635C626.137 68.1738 627.127 68.124 627.994 67.7245C628.86 67.325 629.535 66.6074 629.875 65.724C630.215 64.8406 630.194 63.8609 629.815 62.993L626.171 51.6138L628.762 53.6061C629.457 54.256 630.382 54.6122 631.338 54.599C632.295 54.5857 633.209 54.2041 633.886 53.5352C634.562 52.8663 634.948 51.9628 634.962 51.0169C634.975 50.071 634.615 49.1573 633.957 48.4699H633.957Z"
                            fill="#E2E3F0" />
                        <path
                            d="M651.364 37.6581C655.017 37.6581 657.979 34.7301 657.979 31.1183C657.979 27.5065 655.017 24.5786 651.364 24.5786C647.71 24.5786 644.748 27.5065 644.748 31.1183C644.748 34.7301 647.71 37.6581 651.364 37.6581Z"
                            fill="#3140E2" />
                        <path
                            d="M666.76 48.4699L659.533 39.2839C659.496 39.2363 659.455 39.1911 659.412 39.1485C658.936 38.6747 658.369 38.2991 657.744 38.0434C657.12 37.7876 656.45 37.6569 655.774 37.6587H646.953C646.277 37.6569 645.608 37.7876 644.983 38.0434C644.359 38.2991 643.792 38.6747 643.315 39.1485C643.272 39.1911 643.232 39.2363 643.194 39.2839L635.967 48.47C635.309 49.1574 634.949 50.0712 634.963 51.017C634.976 51.9629 635.362 52.8663 636.039 53.5352C636.715 54.2041 637.629 54.5857 638.586 54.5989C639.543 54.6122 640.467 54.256 641.162 53.6061L643.753 51.6138L640.109 62.993C639.73 63.8609 639.709 64.8406 640.049 65.724C640.389 66.6074 641.064 67.325 641.931 67.7244C642.797 68.1239 643.787 68.1737 644.69 67.8634C645.594 67.5531 646.339 66.9071 646.768 66.0624L651.364 58.9125L655.959 66.0624C656.389 66.9071 657.134 67.5532 658.037 67.8635C658.94 68.1738 659.93 68.124 660.797 67.7245C661.663 67.325 662.338 66.6074 662.678 65.724C663.019 64.8406 662.997 63.8609 662.618 62.993L658.974 51.6138L661.565 53.6061C662.26 54.256 663.185 54.6122 664.141 54.599C665.098 54.5857 666.012 54.2041 666.689 53.5352C667.365 52.8663 667.752 51.9628 667.765 51.0169C667.778 50.071 667.418 49.1573 666.76 48.4699H666.76Z"
                            fill="#3140E2" />
                        <path
                            d="M684.167 37.6581C687.82 37.6581 690.782 34.7301 690.782 31.1183C690.782 27.5065 687.82 24.5786 684.167 24.5786C680.513 24.5786 677.551 27.5065 677.551 31.1183C677.551 34.7301 680.513 37.6581 684.167 37.6581Z"
                            fill="#E2E3F0" />
                        <path
                            d="M699.564 48.4699L692.336 39.2839C692.299 39.2363 692.259 39.1911 692.215 39.1485C691.739 38.6747 691.172 38.2991 690.547 38.0434C689.923 37.7876 689.253 37.6569 688.577 37.6587H679.757C679.081 37.6569 678.411 37.7876 677.786 38.0434C677.162 38.2991 676.595 38.6747 676.118 39.1485C676.075 39.1911 676.035 39.2363 675.997 39.2839L668.77 48.47C668.112 49.1574 667.752 50.0712 667.766 51.017C667.779 51.9629 668.165 52.8663 668.842 53.5352C669.518 54.2041 670.432 54.5857 671.389 54.5989C672.346 54.6122 673.27 54.256 673.966 53.6061L676.557 51.6138L672.912 62.993C672.534 63.8609 672.512 64.8406 672.852 65.724C673.192 66.6074 673.867 67.325 674.734 67.7244C675.6 68.1239 676.59 68.1737 677.494 67.8634C678.397 67.5531 679.142 66.9071 679.571 66.0624L684.167 58.9125L688.762 66.0624C689.192 66.9071 689.937 67.5532 690.84 67.8635C691.743 68.1738 692.733 68.124 693.6 67.7245C694.466 67.325 695.141 66.6074 695.481 65.724C695.822 64.8406 695.8 63.8609 695.421 62.993L691.777 51.6138L694.368 53.6061C695.063 54.256 695.988 54.6122 696.945 54.599C697.901 54.5857 698.815 54.2041 699.492 53.5352C700.169 52.8663 700.555 51.9628 700.568 51.0169C700.581 50.071 700.221 49.1573 699.564 48.4699H699.564Z"
                            fill="#E2E3F0" />
                        <circle cx="497.099" cy="12.6395" r="5.51592" fill="#E2E3F0" />
                        <circle cx="510.618" cy="12.6395" r="5.51592" fill="#E2E3F0" />
                        <circle cx="524.137" cy="12.6395" r="5.51592" fill="#E2E3F0" />
                        <circle cx="537.657" cy="12.6395" r="5.51592" fill="#E2E3F0" />
                        <circle cx="551.176" cy="12.6395" r="5.51592" fill="#E2E3F0" />
                        <circle cx="564.696" cy="12.6395" r="5.51592" fill="#E2E3F0" />
                        <circle cx="497.099" cy="26.1595" r="5.51592" fill="#E2E3F0" />
                        <circle cx="497.099" cy="39.679" r="5.51592" fill="#E2E3F0" />
                        <circle cx="497.099" cy="53.1985" r="5.51592" fill="#E2E3F0" />
                        <circle cx="497.099" cy="66.7171" r="5.51592" fill="#E2E3F0" />
                        <circle cx="497.099" cy="80.2366" r="5.51592" fill="#E2E3F0" />
                        <circle cx="510.618" cy="26.1595" r="5.51592" fill="#E2E3F0" />
                        <circle cx="510.618" cy="39.679" r="5.51592" fill="#E2E3F0" />
                        <circle cx="510.618" cy="53.1985" r="5.51592" fill="#E2E3F0" />
                        <circle cx="510.618" cy="66.7171" r="5.51592" fill="#E2E3F0" />
                        <circle cx="510.618" cy="80.2366" r="5.51592" fill="#E2E3F0" />
                        <circle cx="524.137" cy="26.1595" r="5.51592" fill="#E2E3F0" />
                        <circle cx="524.137" cy="39.679" r="5.51592" fill="#3140E2" />
                        <circle cx="524.137" cy="53.1985" r="5.51592" fill="#3140E2" />
                        <circle cx="524.137" cy="66.7171" r="5.51592" fill="#E2E3F0" />
                        <circle cx="524.137" cy="80.2366" r="5.51592" fill="#E2E3F0" />
                        <circle cx="537.657" cy="26.1595" r="5.51592" fill="#E2E3F0" />
                        <circle cx="537.657" cy="39.679" r="5.51592" fill="#3140E2" />
                        <circle cx="537.657" cy="53.1985" r="5.51592" fill="#3140E2" />
                        <circle cx="537.657" cy="66.7171" r="5.51592" fill="#E2E3F0" />
                        <circle cx="537.657" cy="80.2366" r="5.51592" fill="#E2E3F0" />
                        <circle cx="551.176" cy="26.1595" r="5.51592" fill="#E2E3F0" />
                        <circle cx="551.176" cy="39.679" r="5.51592" fill="#E2E3F0" />
                        <circle cx="551.176" cy="53.1985" r="5.51592" fill="#E2E3F0" />
                        <circle cx="551.176" cy="66.7171" r="5.51592" fill="#E2E3F0" />
                        <circle cx="551.176" cy="80.2366" r="5.51592" fill="#E2E3F0" />
                        <circle cx="564.696" cy="26.1595" r="5.51592" fill="#E2E3F0" />
                        <circle cx="564.696" cy="39.679" r="5.51592" fill="#E2E3F0" />
                        <circle cx="564.696" cy="53.1985" r="5.51592" fill="#E2E3F0" />
                        <circle cx="564.696" cy="66.7171" r="5.51592" fill="#E2E3F0" />
                        <circle cx="564.696" cy="80.2366" r="5.51592" fill="#E2E3F0" />
                    </svg>
                </div>
            </motion.div>
        </div >

    );
}



const App = () => {
    return (
        <div>
            <main className="container" id="container" >
                <div className="content" id="content1" >
                    <Main />
                    <About />
                    <Part_1 />
                    <Mockup_1 img={ImagesMockup01} />
                    <Part_2 img={ImagesPart02} />
                    <Part_3 img={ImagesPart03} />
                </div>

            </main >
            <Part_4 img={ImagesPart04} />
            <main>
                <div className="content">
                    <Part_5 />
                    <WelcomeYourComments />
                    <Footer />
                </div>

            </main>
        </div >
    );
}

export default App;
