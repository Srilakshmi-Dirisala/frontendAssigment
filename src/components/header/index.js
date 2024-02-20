import React from 'react'
import "./style.css"

function Header() {

    return (
        <div>
            <section id="section1">
                <div id="header p-0">
                    <nav class="navbar navbar-expand-lg navbar-transparent navbar-custom px-5 mb-0">
                        <a class="navbar-brand" href="#">
                            <img src="assets/img/Rooba.png" alt="Feeld One Logo" height="40" width="120" />
                        </a>
                        <button class="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse " id="navbarNav">
                            <ul class="navbar-nav gap-5">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Opportunities</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">How it Works</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">About Us</a>
                                </li>
                                <li class="nav-item">
                                    <button class="sign-button">Sign in</button>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <hr/>
                </div>

                <div class="text-light text-center position-relative start-25 top-50">
                    <h2 className='fontC'>Overcome Investment Barriers,</h2>
                    <h2 className='fontC' style={{ paddingleft: "13%;" }}>Build Sustainable Wealth</h2>
                    <p>Dive into alternative markets with us and set your <br /> capital on the path of unparalleled growth. </p>
                </div>
            </section>
        </div>
    )
}

export default Header