import React from 'react';
import '../App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


const SideNav = (props) => {
    if (props.id == 1) {
        return (
            <nav className='SideNav'>
                <ul>
                    <Link to="/coherence"><li className='body_3 bold nav_li black'>Coherence</li></Link>
                    <Link to="/controllability"><li className='body_3 gray_2 nav_li'>Controllability</li></Link>
                    <Link to="/predictability"><li className='body_3 gray_2 nav_li'>Predictability</li></Link>
                    <Link to="/informationConveying"><li className='body_3 gray_2 nav_li'>Information Conveying</li></Link>
                    <Link to="/minimumCollecting"><li className='body_3 gray_2 nav_li'>Minimum Collecting</li></Link>
                    <Link to="/socialProof"><li className='body_3 gray_2 nav_li'>Social Proof</li></Link>
                    <Link to="/errorHandling"><li className='body_3 gray_2 nav_li'>Error Handling</li></Link>
                </ul>

            </nav>
        );
    } else if (props.id == 2) {
        return (
            <nav className='SideNav'>
                <ul>
                    <Link to="/coherence"><li className='body_3 gray_2 nav_li '>Coherence</li></Link>
                    <Link to="/controllability"><li className='body_3 nav_li black bold'>Controllability</li></Link>
                    <Link to="/predictability"><li className='body_3 gray_2 nav_li'>Predictability</li></Link>
                    <Link to="/informationConveying"><li className='body_3 gray_2 nav_li'>Information Conveying</li></Link>
                    <Link to="/minimumCollecting"><li className='body_3 gray_2 nav_li'>Minimum Collecting</li></Link>
                    <Link to="/socialProof"><li className='body_3 gray_2 nav_li'>Social Proof</li></Link>
                    <Link to="/errorHandling"><li className='body_3 gray_2 nav_li'>Error Handling</li></Link>
                </ul>

            </nav>
        );
    } else if (props.id == 3) {
        return (
            <nav className='SideNav'>
                <ul>
                    <Link to="/coherence"><li className='body_3 gray_2 nav_li '>Coherence</li></Link>
                    <Link to="/controllability"><li className='body_3 gray_2 nav_li'>Controllability</li></Link>
                    <Link to="/predictability"><li className='body_3 nav_li black bold'>Predictability</li></Link>
                    <Link to="/informationConveying"><li className='body_3 gray_2 nav_li'>Information Conveying</li></Link>
                    <Link to="/minimumCollecting"><li className='body_3 gray_2 nav_li'>Minimum Collecting</li></Link>
                    <Link to="/socialProof"><li className='body_3 gray_2 nav_li'>Social Proof</li></Link>
                    <Link to="/errorHandling"><li className='body_3 gray_2 nav_li'>Error Handling</li></Link>
                </ul>

            </nav>
        );
    } else if (props.id == 4) {
        return (
            <nav className='SideNav'>
                <ul>
                    <Link to="/coherence"><li className='body_3 gray_2 nav_li '>Coherence</li></Link>
                    <Link to="/controllability"><li className='body_3 gray_2 nav_li'>Controllability</li></Link>
                    <Link to="/predictability"><li className='body_3 gray_2 nav_li'>Predictability</li></Link>
                    <Link to="/informationConveying"><li className='body_3 nav_li black bold'>Information Conveying</li></Link>
                    <Link to="/minimumCollecting"><li className='body_3 gray_2 nav_li'>Minimum Collecting</li></Link>
                    <Link to="/socialProof"><li className='body_3 gray_2 nav_li'>Social Proof</li></Link>
                    <Link to="/errorHandling"><li className='body_3 gray_2 nav_li'>Error Handling</li></Link>
                </ul>

            </nav>
        );
    } else if (props.id == 5) {
        return (
            <nav className='SideNav'>
                <ul>
                    <Link to="/coherence"><li className='body_3 gray_2 nav_li '>Coherence</li></Link>
                    <Link to="/controllability"><li className='body_3 gray_2 nav_li'>Controllability</li></Link>
                    <Link to="/predictability"><li className='body_3 gray_2 nav_li'>Predictability</li></Link>
                    <Link to="/informationConveying"><li className='body_3 gray_2 nav_li'>Information Conveying</li></Link>
                    <Link to="/minimumCollecting"><li className='body_3 nav_li black bold' >Minimum Collecting</li></Link>
                    <Link to="/socialProof"><li className='body_3 gray_2 nav_li'>Social Proof</li></Link>
                    <Link to="/errorHandling"><li className='body_3 gray_2 nav_li'>Error Handling</li></Link>
                </ul>

            </nav>
        );
    } else if (props.id == 6) {
        return (
            <nav className='SideNav'>
                <ul>
                    <Link to="/coherence"><li className='body_3 gray_2 nav_li '>Coherence</li></Link>
                    <Link to="/controllability"><li className='body_3 gray_2 nav_li'>Controllability</li></Link>
                    <Link to="/predictability"><li className='body_3 gray_2 nav_li'>Predictability</li></Link>
                    <Link to="/informationConveying"><li className='body_3 gray_2 nav_li'>Information Conveying</li></Link>
                    <Link to="/minimumCollecting"><li className='body_3 gray_2 nav_li'>Minimum Collecting</li></Link>
                    <Link to="/socialProof"><li className='body_3 nav_li black bold'>Social Proof</li></Link>
                    <Link to="/errorHandling"><li className='body_3 gray_2 nav_li'>Error Handling</li></Link>
                </ul>

            </nav>
        );
    } else if (props.id == 7) {
        return (
            <nav className='SideNav'>
                <ul>
                    <Link to="/coherence"><li className='body_3 gray_2 nav_li'>Coherence</li></Link>
                    <Link to="/controllability"><li className='body_3 gray_2 nav_li'>Controllability</li></Link>
                    <Link to="/predictability"><li className='body_3 gray_2 nav_li'>Predictability</li></Link>
                    <Link to="/informationConveying"><li className='body_3 gray_2 nav_li'>Information Conveying</li></Link>
                    <Link to="/minimumCollecting"><li className='body_3 gray_2 nav_li'>Minimum Collecting</li></Link>
                    <Link to="/socialProof"><li className='body_3 gray_2 nav_li'>Social Proof</li></Link>
                    <Link to="/errorHandling"><li className='body_3 nav_li black bold'>Error Handling</li></Link>
                </ul>

            </nav>
        );
    } else {
        return (
            <nav className='SideNav'>
                <ul>
                    <Link to="/coherence"><li className='body_3 gray_2 nav_li'>Coherence</li></Link>
                    <Link to="/controllability"><li className='body_3 gray_2 nav_li'>Controllability</li></Link>
                    <Link to="/predictability"><li className='body_3 gray_2 nav_li'>Predictability</li></Link>
                    <Link to="/informationConveying"><li className='body_3 gray_2 nav_li'>Information Conveying</li></Link>
                    <Link to="/minimumCollecting"><li className='body_3 gray_2 nav_li'>Minimum Collecting</li></Link>
                    <Link to="/socialProof"><li className='body_3 gray_2 nav_li'>Social Proof</li></Link>
                    <Link to="/errorHandling"><li className='body_3 gray_2 nav_li'>Error Handling</li></Link>
                </ul>

            </nav>
        );
    }

}

export default SideNav;