import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
const Home = () => {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <section id="section2">
            <div className='row'>
                <div className='col-md-6 container-fluid p-5'>
                    <p class="text-white">Discover</p>
                    <h4 class="font-bold text-white">Prime Opportunities</h4>
                    <div>
                        <TabContext value={value}>
                            <Box sx={{}}>
                                <TabList onChange={handleChange} aria-label="lab API tabs example"
                                    textColor="primary"
                                    indicatorColor="primary">
                                    <Tab label="Greensteps I" style={{ color: "white" }} value="1" />
                                    <Tab label="Greensteps II" style={{ color: "white" }} value="2" />
                                    <Tab label="Greensteps III" style={{ color: "white" }} value="3" />
                                </TabList>
                            </Box>
                            <TabPanel value="1">
                                <div>
                                    <p className='text-white'>In a world where the hustle and bustle of a metropolitan city can wear you down, everyone
                                        deserves a place to escape to— a real 'home away from home.'

                                        That's precisely what we're here to offer you. Our carefully curated real estate
                                        opportunities provide you with the perfect retreat from the urban chaos, all while
                                        potentially securing a solid investment in your future.
                                    </p>
                                    <p>Learn More</p>
                                </div>
                            </TabPanel>
                            <TabPanel value="2">
                                <div>
                                    <p className='text-white'>In a world where the hustle and bustle of a metropolitan city can wear you down, everyone
                                        deserves a place to escape to— a real 'home away from home.'

                                        That's precisely what we're here to offer you. Our carefully curated real estate
                                        opportunities provide you with the perfect retreat from the urban chaos, all while
                                        potentially securing a solid investment in your future.
                                    </p>
                                    <p>Learn More</p>
                                </div>
                            </TabPanel>
                            <TabPanel value="3">
                                <div>
                                    <p className='text-white'>In a world where the hustle and bustle of a metropolitan city can wear you down, everyone
                                        deserves a place to escape to— a real 'home away from home.'

                                        That's precisely what we're here to offer you. Our carefully curated real estate
                                        opportunities provide you with the perfect retreat from the urban chaos, all while
                                        potentially securing a solid investment in your future.
                                    </p>
                                    <p>Learn More</p>
                                </div>
                            </TabPanel>
                        </TabContext>
                        {/* </Box> */}
                    </div>
                </div>
                <div className='col-md-6'>
                    {value && value === "1" &&
                        <div class="col bg-light p-0">
                            <div id="img" class="text-light px-2">
                                <h3 class="m-0">Greensteps I</h3>
                                <p>Alwar, Rajasthan</p>
                            </div>
                            <div class="mx-4 my-2">
                                <p class="text-secondary mb-0">Tags</p>
                                <div class="d-flex gap-3 div-box">
                                    <div class="p-2">
                                        <p class="mb-0">Regular plot</p>
                                    </div>
                                    <div class="p-2">
                                        <p class="mb-0">2,970 Sq ft*</p>
                                    </div>
                                    <div class="p-2 text-light" style={{ backgroundcolor: "#0F1640;", bordercolor: "#464EC7;" }}>
                                        <p class="mb-0">Fractional Ownership</p>
                                    </div>
                                </div>
                            </div>
                            <div class="mx-4 my-2 w-75">
                                <p class="text-secondary mb-0">Other Tags</p>
                                <div class="d-flex flex-wrap div-box1">
                                    <div class="p-2">
                                        <p class="mb-0">Electricity</p>
                                    </div>
                                    <div class="p-2">
                                        <p class="mb-0">Agricultural Land</p>
                                    </div>
                                    <div class="p-2">
                                        <p class="mb-0">Fractional Ownership</p>
                                    </div>
                                    <div class="p-2">
                                        <p class="mb-0">Fence</p>
                                    </div>
                                </div>
                            </div>
                            <div class="mx-4 my-2 w-75 ">
                                <p class="text-secondary mb-0">Price</p>
                                <div class="d-flex flex-wrap gap-3 div-box2">
                                    <div class="p-2">
                                        <p class="mb-0">INR <br />
                                            1.75 Cr</p>
                                    </div>
                                    <div class="p-2">
                                        <p class="mb-0">2900/ Sq yd</p>
                                    </div>
                                    <div class="p-2">
                                        <p class="mb-0">INR <br />
                                            5,00,000</p>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex gap-3 mx-4 my-2 p-5">
                                <button class="text-light p-2 sed"
                                >+ Invest
                                    Now</button>
                                <button>Contact Us</button>
                            </div>
                        </div>
                    }
                    {value && value === "2" &&
                        <>
                            <div className='value2 '>

                            </div>
                        </>
                    }
                </div>
            </div>

            <div className='row'>
                <div className='col-md-6'>

                </div>
                <div className='col-md-6'>

                </div>

            </div>

            {/* <div class="container">
                <div class="row row-cols-2">
                    <div class="col text-light">
                        <div class="m-5 w-75">
                            <h4 class="text-b">Discover</h4>
                            <h4 class="font-bold">Prime Opportunities</h4>
                            <ul class="nav nav-underline my-5">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Greensteps I</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Greensteps II</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Greensteps III</a>
                                </li>
                            </ul>
                            <p>In a world where the hustle and bustle of a metropolitan city can wear you down, everyone
                                deserves a place to escape to— a real 'home away from home.'

                                That's precisely what we're here to offer you. Our carefully curated real estate
                                opportunities provide you with the perfect retreat from the urban chaos, all while
                                potentially securing a solid investment in your future.
                            </p>
                            <p>Learn More</p>
                        </div>
                    </div>
                    <div class="col bg-light p-0">
                        <div id="img" class="text-light">
                            <h3 class="m-0">Greensteps I</h3>
                            <p>Alwar, Rajasthan</p>
                        </div>
                        <div class="mx-4 my-2">
                            <p class="text-secondary mb-0">Tags</p>
                            <div class="d-flex gap-3 div-box">
                                <div class="p-2">
                                    <p class="mb-0">Regular plot</p>
                                </div>
                                <div class="p-2">
                                    <p class="mb-0">2,970 Sq ft*</p>
                                </div>
                                <div class="p-2 text-light" style={{ backgroundcolor: "#0F1640;", bordercolor: "#464EC7;" }}>
                                    <p class="mb-0">Fractional Ownership</p>
                                </div>
                            </div>
                        </div>
                        <div class="mx-4 my-2 w-75">
                            <p class="text-secondary mb-0">Other Tags</p>
                            <div class="d-flex flex-wrap div-box1">
                                <div class="p-2">
                                    <p class="mb-0">Electricity</p>
                                </div>
                                <div class="p-2">
                                    <p class="mb-0">Agricultural Land</p>
                                </div>
                                <div class="p-2">
                                    <p class="mb-0">Fractional Ownership</p>
                                </div>
                                <div class="p-2">
                                    <p class="mb-0">Fence</p>
                                </div>
                            </div>
                        </div>
                        <div class="mx-4 my-2 w-75">
                            <p class="text-secondary mb-0">Price</p>
                            <div class="d-flex flex-wrap gap-3 div-box2">
                                <div class="p-2">
                                    <p class="mb-0">INR <br />
                                        1.75 Cr</p>
                                </div>
                                <div class="p-2">
                                    <p class="mb-0">2900/ Sq yd</p>
                                </div>
                                <div class="p-2">
                                    <p class="mb-0">INR <br />
                                        5,00,000</p>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex gap-3 mx-4 my-2">
                            <button class="text-light p-2"
                                style={{ backgroundcolor: "#0F1640;", bordercolor: "#464EC7;", borderradius: "5px;" }}>+ Invest
                                Now</button>
                            <button>Contact Us</button>
                        </div>
                    </div>
                </div>
                <div class="row row-cols-2">
                    <div class="col d-flex align-items-center">
                        <img src="graph.png" alt="" />
                    </div>
                    <div class="col pt-5 text-light">
                        <h2 class="">Access</h2>
                        <h2 class="ms-4"><i>Alternative</i></h2>
                        <h2 class="ms-5 ps-4">Investments</h2>
                        <p class="mt-5">Unleashing the untapped potential of the alternative markets through Rooba.Finance -
                            Your gateway
                            to superior returns and exclusive opportunities</p>
                        <p>Discover the advantages of alternative market investments, unlock new horizons, and embark on a
                            journey towards financial prosperity with our platform as your trusted partner. </p>
                        <div class="d-flex gap-3 div-box3 my-5">
                            <div class="p-2">
                                <p class="mb-0 ps-4">Private Equity </p>
                            </div>
                            <div class="p-2">
                                <p class="mb-0 ps-4">Private Debt </p>
                            </div>
                            <div class="p-2 text-light">
                                <p class="mb-0 ps-4">Investment Management Firms</p>
                            </div>
                        </div>
                        <button class="p-3 my-3 btn1">Learn More</button>
                    </div>
                </div>
                <img src="section2-img.png" class="img1" alt="" />
            </div> */}
        </section >
    )
}

export default Home;