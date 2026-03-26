
<template>
    <div id="screen " class="">            
        <section class="hero  bg-[url('/header/header_prices.webp')] bg-cover">
        </section>    
    </div>
        
    
    <!--to top-->
    <span id="top"></span> 
    <ToTop/>      
    <div class="">                      
        <div class="p-0 absolute top-0 h-[50vh] w-full z-10 ">
            <Navbar/>
            <div class="h-[60vh] flex flex-col justify-center items-center text-center ">
                <!--<p class="title text-white lg:text-9xl">Frequently Asked Questions</p>-->
                <p class="title text-white lg:text-9xl">FAQ</p>                
                
            </div>
        </div>
    </div>
    <section class="content ">    
        <span id="top"></span> 
        <NuxtLink id="to-top" href="#screen" > 
            <svg width="32px" class="ml-2 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#ffffff" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
        </NuxtLink>
        <div class=" px-4 lg:px-10 pb-10 md:pt-10 bg-[#00000038]">
            <div class="hidden md:grid lg:grid-cols-3 md:grid-cols-2">
            <!--    <NuxtLink href="#bookings" class="flex items-center justify-center rounded-[50px] bg-white shadow hover:bg-primary  hover:text-white duration-600">
                    <div class="text-center">
                        <svg
                            class=""   
                            viewBox="0 0 463 527"
                                version="1.1"
                                id="svg17757"
                                height="50"
                                width="50"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:svg="http://www.w3.org/2000/svg">
                                <defs
                                    id="defs17761" />
                                <path
                                    d="m 135.5,7.5000009 c 13.3,0 24,10.7000001 24,24.0000001 v 40.000003 h 144 V 31.500001 c 0,-13.3 10.7,-24.0000001 24,-24.0000001 13.3,0 24,10.7000001 24,24.0000001 v 40.000003 h 40 c 35.3,0 64,28.699996 64,63.999996 v 16 48 256 c 0,35.3 -28.7,64 -64,64 H 71.500003 c -35.3,0 -64.0000038,-28.7 -64.0000038,-64 v -256 -48 -16 c 0,-35.3 28.7000038,-63.999996 64.0000038,-63.999996 H 111.5 V 31.500001 c 0,-13.3 10.7,-24.0000001 24,-24.0000001 z M 407.5,199.5 H 55.500003 v 256 c 0,8.8 7.2,16 16,16 H 391.5 c 8.8,0 16,-7.2 16,-16 z m -71,105 -112,112 c -9.4,9.4 -24.6,9.4 -33.9,0 l -64,-64 c -9.4,-9.4 -9.4,-24.6 0,-33.9 9.4,-9.3 24.6,-9.4 33.9,0 l 47,47 95,-95 c 9.4,-9.4 24.6,-9.4 33.9,0 9.3,9.4 9.4,24.6 0,33.9 z"
                                    id="path17755"
                                    style="fill:#ffffff;fill-opacity:1;stroke:#007984;stroke-width:15;stroke-dasharray:none;stroke-opacity:1" />
                            </svg>    
                        
                        <p class="text-4xl mt-1 col-span-3">Bookings</p>
                    </div>
                </NuxtLink>-->
                    <NuxtLink href="#bookings" class="grid grid-cols-4 px-7 py-3 mx-2 my-2 rounded-[50px] bg-white  justify-center shadow hover:bg-primary  hover:text-white duration-600">
                            <svg
                            class="col-span-1"   
                            viewBox="0 0 463 527"
                                version="1.1"
                                id="svg17757"
                                height="50"
                                width="50"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:svg="http://www.w3.org/2000/svg">
                                <defs
                                    id="defs17761" />
                                <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                <path
                                    d="m 135.5,7.5000009 c 13.3,0 24,10.7000001 24,24.0000001 v 40.000003 h 144 V 31.500001 c 0,-13.3 10.7,-24.0000001 24,-24.0000001 13.3,0 24,10.7000001 24,24.0000001 v 40.000003 h 40 c 35.3,0 64,28.699996 64,63.999996 v 16 48 256 c 0,35.3 -28.7,64 -64,64 H 71.500003 c -35.3,0 -64.0000038,-28.7 -64.0000038,-64 v -256 -48 -16 c 0,-35.3 28.7000038,-63.999996 64.0000038,-63.999996 H 111.5 V 31.500001 c 0,-13.3 10.7,-24.0000001 24,-24.0000001 z M 407.5,199.5 H 55.500003 v 256 c 0,8.8 7.2,16 16,16 H 391.5 c 8.8,0 16,-7.2 16,-16 z m -71,105 -112,112 c -9.4,9.4 -24.6,9.4 -33.9,0 l -64,-64 c -9.4,-9.4 -9.4,-24.6 0,-33.9 9.4,-9.3 24.6,-9.4 33.9,0 l 47,47 95,-95 c 9.4,-9.4 24.6,-9.4 33.9,0 9.3,9.4 9.4,24.6 0,33.9 z"
                                    id="path17755"
                                    style="fill:#ffffff;fill-opacity:1;stroke:#007984;stroke-width:15;stroke-dasharray:none;stroke-opacity:1" />
                            </svg>    
                        
                        <p class="text-3xl mt-1 col-span-3">Bookings</p>
                    </NuxtLink>
              
                    <NuxtLink href="#cabins" class=" mt-2 grid grid-cols-4  px-7 py-3 mx-2 my-2 rounded-[50px] bg-white  justify-center shadow hover:bg-primary  hover:text-white duration-600">
                        <svg
                        class="col-span-1"   
                            viewBox="0 0 590.93933 527.09998"
                            version="1.1"
                            id="svg15765"
                            sodipodi:docname="house-user-solid.svg"
                            height="50"
                            width="50"
                            xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
                            xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:svg="http://www.w3.org/2000/svg">
                            <defs
                                id="defs15769" />
                            
                            <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                            <path
                            d="m 583.3,263 c 0,18 -15,32.1 -32,32.1 h -32 l 0.7,160.2 c 0.2,35.5 -28.5,64.3 -64,64.3 H 135.6 c -35.3,0 -64,-28.7 -64,-64 V 295.1 H 39.5 C 21.5,295.1 7.4999998,281.1 7.4999998,263 7.4999998,254 10.5,246 17.5,239 L 273.9,15.5 c 7,-7.0000004 15,-8.0000004 22,-8.0000004 7,0 15,2 21,7.0000004 L 572.3,239 c 8,7 12,15 11,24 z M 359.5,231.5 a 64,64 0 1 0 -128,0 64,64 0 1 0 128,0 z m -96,96 c -44.2,0 -80,35.8 -80,80 0,8.8 7.2,16 16,16 h 192 c 8.8,0 16,-7.2 16,-16 0,-44.2 -35.8,-80 -80,-80 z"
                            id="path15763"
                            style="fill:#ffffff;fill-opacity:1;stroke:#007984;stroke-width:15;stroke-dasharray:none;stroke-opacity:1"
                            inkscape:export-filename="check.svg"
                            inkscape:export-xdpi="96"
                            inkscape:export-ydpi="96" />
                        </svg>    
                        
                        <p class="text-3xl  mt-1 col-span-3">Cabins</p>
                    </NuxtLink>
           
               
                    <NuxtLink href="#camp" class="grid grid-cols-4 px-7 py-3 mx-2 my-2  rounded-[50px] bg-white  justify-center  shadow hover:bg-primary  hover:text-white duration-600">
                        <svg
                        class="col-span-1"   
                            viewBox="0 0 600 600"
                            version="1.1"
                            id="svg11797"
                            height="50"
                            width="50"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:svg="http://www.w3.org/2000/svg"
                            >
                            <defs
                                id="defs11801" />
                            <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                            <path
                                d="m 390.01695,93.220339 c 11,-13.8 8.8,-33.9 -5,-45 -13.8,-11.1 -33.9,-8.8 -45,5 l -39,48.800001 -39,-48.800001 c -11,-13.8 -31.2,-16 -45,-5 -13.8,11 -16,31.2 -5,45 l 48,60.000001 -234.700001,293.4 c -8,10 -12.3,22.3 -12.3,35 v 23.6 c 0,26.5 21.5,48 48,48 h 240.000001 240 c 26.5,0 48,-21.5 48,-48 v -23.6 c 0,-12.7 -4.3,-25.1 -12.3,-35 l -234.7,-293.4 z m -89,396.000001 h -119.5 l 119.5,-156.3 119.5,156.3 z"
                                id="path11795"
                                style="fill:#ffffff;fill-opacity:1;stroke:#007984;stroke-width:15;stroke-dasharray:none;stroke-opacity:1" />
                        </svg>    
                        
                        <p class="text-3xl mt-1 col-span-3">Camp services</p>
                    </NuxtLink>
                    <NuxtLink href="#arrivals" class="grid grid-cols-4 px-7 py-3 mx-2 my-2 rounded-[50px] bg-white justify-center  shadow hover:bg-primary  hover:text-white duration-600">
                        <svg
                        class="col-span-1"   
                            viewBox="0 0 414 540.36444"
                            version="1.1"
                            id="svg7050"
                            sodipodi:docname="location-dot-solid.svg"
                            width="50"
                            height="50"
                            xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
                            xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:svg="http://www.w3.org/2000/svg"
                            
                            >
                            <defs
                                id="defs7054" />
                            
                            <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                            <path
                                d="M 230.7,514.2 C 282,450 399,294.4 399,207 399,101 313,14.999999 207,14.999999 101,14.999999 15,101 15,207 c 0,87.4 117,243 168.3,307.2 12.3,15.3 35.1,15.3 47.4,0 z M 207,143 a 64,64 0 1 1 0,128 64,64 0 1 1 0,-128 z"
                                id="path7048"
                                style="fill:#ffffff;fill-opacity:1;stroke:#007984;stroke-width:15;stroke-dasharray:none;stroke-opacity:1"
                                inkscape:label="path7048" />
                        </svg>   
                        <p class="text-3xl mt-1 col-span-3">Getting here</p>
                    </NuxtLink>
              
                    <NuxtLink href="#terms" class="grid grid-cols-4 px-7 py-3 mx-2 my-2 rounded-[50px] bg-white justify-center  shadow hover:bg-primary  hover:text-white duration-600">
                        <svg
                        class="col-span-1"   
                            viewBox="0 0 600 600"
                            version="1.1"
                            id="svg11797"
                            height="50"
                            width="50"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:svg="http://www.w3.org/2000/svg"
                            >
                            <defs
                                id="defs11801" />
                            <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                            <path
                                d="m 390.01695,93.220339 c 11,-13.8 8.8,-33.9 -5,-45 -13.8,-11.1 -33.9,-8.8 -45,5 l -39,48.800001 -39,-48.800001 c -11,-13.8 -31.2,-16 -45,-5 -13.8,11 -16,31.2 -5,45 l 48,60.000001 -234.700001,293.4 c -8,10 -12.3,22.3 -12.3,35 v 23.6 c 0,26.5 21.5,48 48,48 h 240.000001 240 c 26.5,0 48,-21.5 48,-48 v -23.6 c 0,-12.7 -4.3,-25.1 -12.3,-35 l -234.7,-293.4 z m -89,396.000001 h -119.5 l 119.5,-156.3 119.5,156.3 z"
                                id="path11795"
                                style="fill:#ffffff;fill-opacity:1;stroke:#007984;stroke-width:15;stroke-dasharray:none;stroke-opacity:1" />
                        </svg>    
                        <p class="text-3xl mt-1 col-span-3">Terms&cond</p>
                    </NuxtLink>
                    <NuxtLink href="#lapland" class="grid grid-cols-4 px-7 py-3 mx-2 my-2 rounded-[50px] bg-white justify-center shadow hover:bg-primary  hover:text-white duration-600">
                        <svg
                        class="col-span-1"   
                            viewBox="0 0 414 540.36444"
                            version="1.1"
                            id="svg7050"
                            sodipodi:docname="location-dot-solid.svg"
                            width="50"
                            height="50"
                            xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
                            xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:svg="http://www.w3.org/2000/svg"
                            
                            >
                            <defs
                                id="defs7054" />
                            
                            <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                            <path
                                d="M 230.7,514.2 C 282,450 399,294.4 399,207 399,101 313,14.999999 207,14.999999 101,14.999999 15,101 15,207 c 0,87.4 117,243 168.3,307.2 12.3,15.3 35.1,15.3 47.4,0 z M 207,143 a 64,64 0 1 1 0,128 64,64 0 1 1 0,-128 z"
                                id="path7048"
                                style="fill:#ffffff;fill-opacity:1;stroke:#007984;stroke-width:15;stroke-dasharray:none;stroke-opacity:1"
                                inkscape:label="path7048" />
                        </svg>   
                        <p class="text-3xl mt-1 col-span-3">Lapland</p>
                    </NuxtLink>
                
            </div>

            <div id="bookings">
                <p class="lg:title-pages sm-title-pages text-center text-white pt-8">Bookings</p>
                <div class="flex justify-center pb-8">                        
                    <p class="line w-36 border-white"></p>                        
                </div>
                <div class="flex justify-center">
                    <div class="bg-white lg:mx-20 mt-6 rounded-3xl w-full">
                        <div class="accordion">
                            <div class="accordion-item">
                                <div class=" accordion-header md:grid md:grid-cols-4 flex mt-1 px-8">
                                    <p class="text-xl font-bold col-span-3">What is the booking process?</p>
                                    <div class="justify-end flex col-span-1">
                                        <svg class="chevron-down h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                                        <svg  class="chevron-up h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                                    </div>                           
                                </div>
                                <div class="accordion-content bg-bg1">
                                    <p class="text-xl">You can book directly through our website or our booking system. For further assistance, please contact us, and we will guide you through the process.</p>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <div class=" accordion-header md:grid md:grid-cols-4 flex mt-1 px-8">
                                    <p class="text-xl font-bold col-span-3"> How do you handle bookings?</p>
                                    <div class="justify-end flex col-span-1">
                                        <svg class="chevron-down h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                                        <svg  class="chevron-up h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                                    </div>                                    
                                </div>
                                <div class="accordion-content bg-bg1">
                                    <p class="text-xl">Upon making a reservation on our website, Camp Alta collects a non-refundable 5% deposit. Thirty days before your arrival, you will receive an email to complete the remaining balance. If the payment is not made, your credit card will be charged automatically. Failure to pay will result in a cancellation, and the 5% deposit will be forfeited.</p>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <div class=" accordion-header md:grid md:grid-cols-4 flex mt-1 px-8">
                                    <p class="text-xl font-bold col-span-3">Can I book tours only with you?</p>
                                    <div class="justify-end flex col-span-1">
                                        <svg class="chevron-down h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                                        <svg  class="chevron-up h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                                    </div>                                     
                                </div>
                                <div class="accordion-content bg-white">
                                    <p class="text-xl">Yes, when you book a cabin along with a snowmobile tour, we offer complimentary pick-up and drop-off shuttle service from Kiruna. This does not apply to dog sledding or Northern lights tours. Individual tours can be booked via our website. Free pick-up and drop-off are available from select locations in Kiruna.</p>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <div class=" accordion-header md:grid md:grid-cols-4 flex mt-1 px-8">
                                    <p class="text-xl font-bold col-span-3">What should I know before booking?</p>
                                    <div class="justify-end flex col-span-1">
                                        <svg class="chevron-down h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                                        <svg  class="chevron-up h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                                    </div>                                     
                                </div>
                                <div class="accordion-content bg-bg1">
                                    <ul class="ml-10 lg:ml-16">
                                        <li class="list-disc text-xl">The winter season runs from November 15 to April 15.</li>
                                        <li class="list-disc text-xl">Cabin bookings include free access to fireplaces, teepees, and saunas.</li>
                                        <li class="list-disc text-xl">Our camp is self-catering and self-cleaning. Cleaning services can be ordered online or upon arrival.</li>
                                        <li class="list-disc text-xl">Plan your groceries before arrival as there are no shops at the camp.</li>
                                        <li class="list-disc text-xl">Bed linen and towels are not included but can be rented upon arrival.</li>
                                        <li class="list-disc text-xl">You can book the snowmobile, Dog sled tours and Northern lights tours through our booking system.</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <div class=" accordion-header md:grid md:grid-cols-4 flex mt-1 px-8">
                                    <p class="text-xl font-bold col-span-3">Pick-Up and Drop-Off Services</p>
                                    <div class="justify-end flex col-span-1">
                                        <svg class="chevron-down h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                                        <svg  class="chevron-up h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                                    </div>                                     
                                </div>
                                <div class="accordion-content bg-bg1">
                                    <ul class="ml-10 lg:ml-16">
                                        <li class="list-disc text-xl">Available only during the winter season (November 15 - April 15). During the summer season, the transfer services are subject to availability.</li>
                                        <li class="list-disc text-xl">Book our pick-up/drop-off service when booking a cabin.</li>
                                        <li class="list-disc text-xl">Inform us of your drop-off time upon arrival at reception.</li>
                                        <li class="list-disc text-xl">If you book the snowmobile tour and a cabin with us, the pick-up and drop-off services are free.</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <div class="accordion-header md:grid md:grid-cols-4 flex  mt-1 px-8">
                                        <p class="text-xl font-bold col-span-3">When should I book?</p>
                                    <div class="justify-end flex col-span-1">
                                        <svg class="chevron-down h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                                        <svg  class="chevron-up h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                                    </div>                                     
                                </div>
                                <div class="accordion-content bg-bg1">
                                    <p class="text-xl">To ensure availability, we recommend booking as early as possible, especially during the peak season.</p>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <div class=" accordion-header md:grid md:grid-cols-4 flex mt-1 px-8">
                                    <p class="text-xl font-bold col-span-3">How can I make changes to my booking?</p>
                                    <div class="justify-end flex col-span-1">
                                        <svg class="chevron-down h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                                        <svg  class="chevron-up h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                                    </div>                                     
                                </div>
                                <div class="accordion-content bg-bg1">
                                    <p class="text-xl">You can modify your booking by contacting us via email or phone. Changes are subject to availability.</p>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <div class=" accordion-header md:grid md:grid-cols-4 flex mt-1 px-8">
                                    <p class="text-xl font-bold col-span-3">What is the best way to reach you?</p>
                                    <div class="justify-end flex col-span-1">
                                        <svg class="chevron-down h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                                        <svg  class="chevron-up h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                                    </div>                                     
                                </div>
                                <div class="accordion-content bg-bg1">
                                    <p class="text-xl">For urgent matters, contact us by email or phone during office hours. Details are available on the "Contact Us" page.</p>
                                    <ul class="ml-10 lg:ml-16">
                                        <li class="list-disc text-xl">Available only during the winter season (November 15 - April 15). During the summer season, the transfer services are subject to availability.</li>
                                        <li class="list-disc text-xl">Book our pick-up/drop-off service when booking a cabin.</li>
                                        <li class="list-disc text-xl">Inform us of your drop-off time upon arrival at reception.</li>
                                        <li class="list-disc text-xl">If you book the snowmobile tour and a cabin with us, the pick-up and drop-off services are free.</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <div class=" accordion-header md:grid md:grid-cols-4 flex mt-1 px-8">
                                    <p class="text-xl font-bold col-span-3">What languages do you speak?</p>
                                    <div class="justify-end flex col-span-1">
                                        <svg class="chevron-down h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                                        <svg  class="chevron-up h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                                    </div>                                     
                                </div>
                                <div class="accordion-content bg-bg1">
                                    <p class="text-xl">We communicate in English, Swedish, Norwegian, French and German.</p>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <div class="accordion-header md:grid md:grid-cols-4 flex mt-1 px-8">
                                    <p class="text-xl font-bold col-span-3">How do I make a payment?
</p>
                                    <div class="justify-end flex col-span-1">
                                        <svg class="chevron-down h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                                        <svg  class="chevron-up h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                                    </div>                                     
                                </div>
                                <div class="accordion-content bg-bg1">
                                    <p class="text-xl">We accept all major credit cards and Swedish Krona (SEK).</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="cabins">
                <p class="lg:title-pages sm-title-pages text-center text-white mt-8">Cabins</p>
                <div class="flex justify-center pb-8">                        
                    <p class="line w-36 border-white"></p>                        
                </div>
                <div class="flex justify-center">
                    <div class="bg-white lg:mx-20 mt-6 rounded-3xl w-full">
                        <div class="accordion">
                            <div class="accordion-item">
                                <div class=" accordion-header md:grid md:grid-cols-4 flex mt-1 px-8">
                                    <p class="text-xl font-bold col-span-3">What time does check-in begin?</p>
                                    <div class="justify-end flex col-span-1">
                                        <svg class="chevron-down h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                                        <svg  class="chevron-up h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                                    </div>                           
                                </div>
                                <div class="accordion-content bg-bg1">
                                    <p class="text-xl">Check-in starts at 15.00.</p>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <div class=" accordion-header md:grid md:grid-cols-4 flex mt-1 px-8">
                                    <p class="text-xl font-bold col-span-3">Is early check-in or late check-out possible?</p>
                                    <div class="justify-end flex col-span-1">
                                        <svg class="chevron-down h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                                        <svg  class="chevron-up h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                                    </div>                                    
                                </div>
                                <div class="accordion-content bg-bg1">
                                    <p class="text-xl">Check-in is at 15.00 and check-out is by 11.00. Early or late check-in/out may incur additional fees and is subject to availability.</p>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <div class=" accordion-header md:grid md:grid-cols-4 flex mt-1 px-8">
                                    <p class="text-xl font-bold col-span-3">What facilities are available in the cabins?</p>
                                    <div class="justify-end flex col-span-1">
                                        <svg class="chevron-down h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                                        <svg  class="chevron-up h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                                    </div>                                     
                                </div>
                                <div class="accordion-content bg-bg1">
                                    <p class="text-xl">Details about individual cabin facilities are listed under the "Cabins" sections. Contact us for further information.</p>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <div class=" accordion-header md:grid md:grid-cols-4 flex mt-1 px-8">
                                    <p class="text-xl font-bold col-span-3">Do you offer cleaning services?</p>
                                    <div class="justify-end flex col-span-1">
                                        <svg class="chevron-down h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                                        <svg  class="chevron-up h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                                    </div>                                    
                                </div>
                                <div class="accordion-content bg-bg1">
                                    <p class="text-xl">We are a self-catering and self-cleaning camp. To keep the prices as low and accessible to everyone, we request you to clean the cabin before checking-out and leave the cabin in the same state as you found it during check-in. Alternatively, you can also book a cleaning service with us.</p>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <div class=" accordion-header md:grid md:grid-cols-4 flex mt-1 px-8">
                                    <p class="text-xl font-bold col-span-3">Is there electricity in the cabins?</p>
                                    <div class="justify-end flex col-span-1">
                                        <svg class="chevron-down h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                                        <svg  class="chevron-up h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                                    </div>                                    
                                </div>
                                <div class="accordion-content bg-bg1">
                                    <p class="text-xl">Yes, all cabins have electricity and convenient plug points for charging devices.</p>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <div class=" accordion-header md:grid md:grid-cols-4 flex mt-1 px-8">
                                    <p class="text-xl font-bold col-span-3">Is there Internet( Wi-Fi) in the cabins?</p>
                                    <div class="justify-end flex col-span-1">
                                        <svg class="chevron-down h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                                        <svg  class="chevron-up h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                                    </div>                                    
                                </div>
                                <div class="accordion-content bg-bg1">
                                    <p class="text-xl">Yes, all cabins have high speed internet wifi .</p>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <div class=" accordion-header md:grid md:grid-cols-4 flex mt-1 px-8">
                                    <p class="text-xl font-bold col-span-3">Is there heating in the cabins?</p>
                                    <div class="justify-end flex col-span-1">
                                        <svg class="chevron-down h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                                        <svg  class="chevron-up h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                                    </div>                                    
                                </div>
                                <div class="accordion-content bg-bg1">
                                    <p class="text-xl">Yes, all cabins are electrically heated to ensure you have a comfortable stay with us.</p>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <div class=" accordion-header md:grid md:grid-cols-4 flex mt-1 px-8">
                                    <p class="text-xl font-bold col-span-3">Can I have a double bed?</p>
                                    <div class="justify-end flex col-span-1">
                                        <svg class="chevron-down h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                                        <svg  class="chevron-up h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                                    </div>                                    
                                </div>
                                <div class="accordion-content bg-bg1">
                                    <p class="text-xl">Our new 2-bed cabins feature double beds. Other cabins typically have bunk beds.</p>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <div class=" accordion-header md:grid md:grid-cols-4 flex mt-1 px-8">
                                    <p class="text-xl font-bold col-span-3">Can extra people stay in the cabin?</p>
                                    <div class="justify-end flex col-span-1">
                                        <svg class="chevron-down h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                                        <svg  class="chevron-up h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                                    </div>                                    
                                </div>
                                <div class="accordion-content bg-bg1">
                                    <p class="text-xl">This depends on the cabin size. Please check our cabins on our website and contact us for more information.</p>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <div class=" accordion-header md:grid md:grid-cols-4 flex mt-1 px-8">
                                    <p class="text-xl font-bold col-span-3">Do you provide bed linen and towels?</p>
                                    <div class="justify-end flex col-span-1">
                                        <svg class="chevron-down h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                                        <svg  class="chevron-up h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                                    </div>                                    
                                </div>
                                <div class="accordion-content bg-bg1">
                                    <p class="text-xl">Bed-linen and Towels are not included in the cabins and they can be rented in advance or during check-in (price available on the Price section). You may also bring your own.</p>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <div class=" accordion-header md:grid md:grid-cols-4 flex mt-1 px-8">
                                    <p class="text-xl font-bold col-span-3">Can I prepare my own food at the cabins?</p>
                                    <div class="justify-end flex col-span-1">
                                        <svg class="chevron-down h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                                        <svg  class="chevron-up h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                                    </div>                                    
                                </div>
                                <div class="accordion-content bg-bg1">
                                    <p class="text-xl">Yes, larger cabins have in-house kitchens. Smaller cabins have access to a fully equipped common kitchen.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="camp">
                <p class="lg:title-pages sm-title-pages text-center text-white mt-8">Camp services</p>
                <div class="flex justify-center pb-8">                        
                    <p class="line w-1/6 border-white"></p>                        
                </div>
                <div class="flex justify-center">
                    <div class="bg-white lg:mx-20 mt-6 rounded-3xl w-full">
                        <div class="accordion">
                            <div class="accordion-item">
                                <div class=" accordion-header md:grid md:grid-cols-4 flex mt-1 px-8">
                                    <p class="text-xl font-bold col-span-3">Is airport or train station transfer available?</p>
                                    <div class="justify-end flex col-span-1">
                                        <svg class="chevron-down h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                                        <svg  class="chevron-up h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                                    </div>                           
                                </div>
                                <div class="accordion-content bg-bg1">
                                    <p class="text-xl">Shuttle services are available during the winter season. Free shuttle services are provided for guests booking snowmobile tours. For accommodation-only bookings, shuttle services can be accessed under the “Prices” menu.</p>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <div class=" accordion-header md:grid md:grid-cols-4 flex mt-1 px-8">
                                    <p class="text-xl font-bold col-span-3">What tours do you offer?</p>
                                    <div class="justify-end flex col-span-1">
                                        <svg class="chevron-down h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                                        <svg  class="chevron-up h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                                    </div>                                    
                                </div>
                                <div class="accordion-content bg-bg1">
                                    <p class="text-xl">On our website, you can book snowmobile, dogsled tours and northern lights tours. More more tours, please contact us directly.</p>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <div class=" accordion-header md:grid md:grid-cols-4 flex mt-1 px-8">
                                    <p class="text-xl font-bold col-span-3">Can I pitch a tent at your campground?</p>
                                    <div class="justify-end flex col-span-1">
                                        <svg class="chevron-down h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                                        <svg  class="chevron-up h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                                    </div>                                     
                                </div>
                                <div class="accordion-content bg-bg1">
                                    <p class="text-xl">Tents can be pitched during the summer (June, July, August). Winter camping is not recommended due to extreme temperatures.</p>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <div class=" accordion-header md:grid md:grid-cols-4 flex mt-1 px-8">
                                    <p class="text-xl font-bold col-span-3">Can I stay with a motorhome or caravan in your camp?</p>
                                    <div class="justify-end flex col-span-1">
                                        <svg class="chevron-down h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                                        <svg  class="chevron-up h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                                    </div>                           
                                </div>
                                <div class="accordion-content bg-bg1">
                                    <p class="text-xl">We accept campervans and caravans all year round but electricity is not provided during the winter season.</p>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <div class=" accordion-header md:grid md:grid-cols-4 flex mt-1 px-8">
                                    <p class="text-xl font-bold col-span-3">Is there a laundry facility?</p>
                                    <div class="justify-end flex col-span-1">
                                        <svg class="chevron-down h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                                        <svg  class="chevron-up h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                                    </div>                                    
                                </div>
                                <div class="accordion-content bg-bg1">
                                    <p class="text-xl">Laundry facilities are available during summer season only (June-July-August).</p>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <div class=" accordion-header md:grid md:grid-cols-4 flex mt-1 px-8">
                                    <p class="text-xl font-bold col-span-3">What facilities can I use for free during my stay?</p>
                                    <div class="justify-end flex col-span-1">
                                        <svg class="chevron-down h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                                        <svg  class="chevron-up h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                                    </div>                                     
                                </div>
                                <div class="accordion-content bg-bg1">
                                    <p class="text-xl">We have wood-heated saunas, and grill huts in the camp which can be used for free by our guests. A bag of wood to light a fire in these facilities can be purchased in the reception (price available on the Prices section).</p>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <div class=" accordion-header md:grid md:grid-cols-4 flex mt-1 px-8">
                                    <p class="text-xl font-bold col-span-3">What activities are available during my stay?</p>
                                    <div class="justify-end flex col-span-1">
                                        <svg class="chevron-down h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                                        <svg  class="chevron-up h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                                    </div>                           
                                </div>
                                <div class="accordion-content bg-bg1">
                                    <p class="text-xl">Free activities include wood-heated saunas and teepees. A bag of wood can be purchased (price available on the Prices section). Winter protection clothes are provided for tours. We offer Cross Country Skiing, Ice Fishing and snowshoeing.</p>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <div class=" accordion-header md:grid md:grid-cols-4 flex mt-1 px-8">
                                    <p class="text-xl font-bold col-span-3">Do I have to use the public sauna?</p>
                                    <div class="justify-end flex col-span-1">
                                        <svg class="chevron-down h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                                        <svg  class="chevron-up h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                                    </div>                                    
                                </div>
                                <div class="accordion-content bg-bg1">
                                    <p class="text-xl">A smaller private sauna is available for up to four guests. The main sauna is open to all guests 24/7.</p>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <div class=" accordion-header md:grid md:grid-cols-4 flex mt-1 px-8">
                                    <p class="text-xl font-bold col-span-3">Do you provide bed linen and towels?</p>
                                    <div class="justify-end flex col-span-1">
                                        <svg class="chevron-down h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                                        <svg  class="chevron-up h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                                    </div>                                     
                                </div>
                                <div class="accordion-content bg-bg1">
                                    <p class="text-xl">Bed-linen and Towels are not included in the cabins and they can be rented in advance or during check-in (prices available on the Prices section). You may also bring your own.</p>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <div class=" accordion-header md:grid md:grid-cols-4 flex mt-1 px-8">
                                    <p class="text-xl font-bold col-span-3">Is there access for the disabled?</p>
                                    <div class="justify-end flex col-span-1">
                                        <svg class="chevron-down h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                                        <svg  class="chevron-up h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                                    </div>                           
                                </div>
                                <div class="accordion-content bg-bg1">
                                    <p class="text-xl">Access can be challenging due to the camp's location. Contact us for more information.</p>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <div class=" accordion-header md:grid md:grid-cols-4 flex mt-1 px-8">
                                    <p class="text-xl font-bold col-span-3">Can I prepare my own food at the cabins?</p>
                                    <div class="justify-end flex col-span-1">
                                        <svg class="chevron-down h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                                        <svg  class="chevron-up h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                                    </div>                                    
                                </div>
                                <div class="accordion-content bg-bg1">
                                    <p class="text-xl">Yes, larger cabins have in-house kitchens. Smaller cabins have access to a fully equipped common kitchen.</p>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <div class=" accordion-header md:grid md:grid-cols-4 flex mt-1 px-8">
                                    <p class="text-xl font-bold col-span-3">Where can I buy food?</p>
                                    <div class="justify-end flex col-span-1">
                                        <svg class="chevron-down h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                                        <svg  class="chevron-up h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                                    </div>                                     
                                </div>
                                <div class="accordion-content bg-bg1">
                                    <p class="text-xl">Do your grocery shopping in the city center before arriving at the camp. There are no shops at the camp.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="arrivals">
                <p class="lg:title-pages sm-title-pages text-center text-white mt-8">Getting here</p>
                <div class="flex justify-center pb-8">                        
                    <p class="line w-36 border-white"></p>                        
                </div>
                <div class="flex justify-center">
                    <div class="bg-white lg:mx-20 mt-6 rounded-3xl w-full">
                        <div class="accordion">
                            <div class="accordion-item">
                                <div class=" accordion-header md:grid md:grid-cols-4 flex mt-1 px-8">
                                    <p class="text-xl font-bold col-span-3">Where is Camp Alta Kiruna located?</p>
                                    <div class="justify-end flex col-span-1">
                                        <svg class="chevron-down h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                                        <svg  class="chevron-up h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                                    </div>                           
                                </div>
                                <div class="accordion-content bg-bg1">
                                    <p class="text-xl">Camp Alta is in the village of Alttajärvi, 15 km from Kiruna. Address is 2 Jullebovägen, Kiruna 981 92.</p>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <div class=" accordion-header md:grid md:grid-cols-4 flex mt-1 px-8">
                                    <p class="text-xl font-bold col-span-3">Do you offer transportation to the camp?</p>
                                    <div class="justify-end flex col-span-1">
                                        <svg class="chevron-down h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                                        <svg  class="chevron-up h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                                    </div>                                    
                                </div>
                                <div class="accordion-content bg-bg1">
                                    <p class="text-xl">During the winter season (November 15 - April 15), we offer a transfer service from Kiruna. Book a transfer when booking your stay. Free transportation is available for guests booking snowmobile tours.</p>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <div class="accordion-header md:grid md:grid-cols-4 flex mt-1 px-8">
                                    <p class="text-xl font-bold col-span-3"> What is the best way to get to the campsite on my own?</p>
                                    <div class="justify-end flex col-span-1">
                                        <svg class="chevron-down h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                                        <svg  class="chevron-up h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                                    </div>                                     
                                </div>
                                <div class="accordion-content bg-bg1">
                                    <ul class="ml-10 lg:ml-16">
                                        <li class="list-disc text-xl"><span class="font-bold">By road:</span> From Kiruna, follow the E-10 road towards Luleå. The camp entrance is 15 km on the right.</li>
                                        <li class="list-disc text-xl"><span class="font-bold">By air:</span> Take a local flight bus from Kiruna airport to the city center. Pick-up locations include New City, Ica Kvantum, tourist office, Ripan camp, and Ice hotel. You can find the schedule here: https://horvalls.se/airport-transfer/</li>
                                        <li class="list-disc text-xl"><span class="font-bold">By train:</span> Take the local bus from the railway station to the city center (tourist office). Store luggage at the tourist office and do your groceries before the camp transfer.</li>
                                    </ul>                                
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
            <div id="terms">
                <p class="lg:title-pages sm-title-pages text-center text-white mt-8">Terms and Conditions</p>
                <div class="flex justify-center pb-8">                        
                    <p class="line w-40 border-white"></p>                        
                </div>
                <div class="flex justify-center">
                    <div class="bg-white lg:mx-20 mt-6 rounded-3xl w-full">
                        <div class="accordion">
                            <div class="accordion-item">
                                <div class=" accordion-header md:grid md:grid-cols-4 flex mt-1 px-8">
                                    <p class="text-xl font-bold col-span-3">Who is responsible for bookings?</p>
                                    <div class="justify-end flex col-span-1">
                                        <svg class="chevron-down h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                                        <svg  class="chevron-up h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                                    </div>                           
                                </div>
                                <div class="accordion-content bg-bg1">
                                    <p class="text-xl">The person in charge of the reservation should distribute the booking details to the group.</p>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <div class=" accordion-header md:grid md:grid-cols-4 flex mt-1 px-8">
                                    <p class="text-xl font-bold col-span-3">How do you handle cancellations?</p>
                                    <div class="justify-end flex col-span-1">
                                        <svg class="chevron-down h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                                        <svg  class="chevron-up h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                                    </div>                                    
                                </div>
                                <div class="accordion-content bg-bg1">
                                    <p class="text-xl">A 5% non-refundable deposit is taken upon booking. The remaining 95% is due 30 days before arrival. Failure to pay will result in a cancellation and forfeiture of the deposit.</p>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <div class=" accordion-header md:grid md:grid-cols-4 flex mt-1 px-8">
                                    <p class="text-xl font-bold col-span-3">What if there is material damage?</p>
                                    <div class="justify-end flex col-span-1">
                                        <svg class="chevron-down h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                                        <svg  class="chevron-up h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                                    </div>                                     
                                </div>
                                <div class="accordion-content bg-bg1">
                                    <p class="text-xl">Guests are responsible for any damage to the cabin or its contents.</p>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <div class=" accordion-header md:grid md:grid-cols-4 flex mt-1 px-8">
                                    <p class="text-xl font-bold col-span-3">Can I camp in the winter?</p>
                                    <div class="justify-end flex col-span-1">
                                        <svg class="chevron-down h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                                        <svg  class="chevron-up h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                                    </div>                                     
                                </div>
                                <div class="accordion-content bg-bg1">
                                    <p class="text-xl">Winter camping is not recommended due to extreme temperatures. Maximum stay at the campsite is 4/5 nights.</p>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <div class=" accordion-header md:grid md:grid-cols-4 flex mt-1 px-8">
                                    <p class="text-xl font-bold col-span-3">Is smoking allowed?</p>
                                    <div class="justify-end flex col-span-1">
                                        <svg class="chevron-down h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                                        <svg  class="chevron-up h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                                    </div>                                     
                                </div>
                                <div class="accordion-content bg-bg1">
                                    <p class="text-xl">Smoking is prohibited in cabins and service buildings. A 5000 SEK fee will be charged for violations.</p>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <div class=" accordion-header md:grid md:grid-cols-4 flex mt-1 px-8">
                                    <p class="text-xl font-bold col-span-3">How do complaints work?</p>
                                    <div class="justify-end flex col-span-1">
                                        <svg class="chevron-down h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                                        <svg  class="chevron-up h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                                    </div>                                     
                                </div>
                                <div class="accordion-content bg-bg1">
                                    <p class="text-xl">Report complaints to the owners immediately for resolution. Compensation is not provided if the owners are not given an opportunity to address the issue during the stay.</p>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
            <div id="lapland">
                <p class="lg:title-pages sm-title-pages text-center text-white mt-8">About Swedish Lapland/Kiruna</p>
                <div class="flex justify-center pb-8">                        
                    <p class="line w-1/2 border-white"></p>                        
                </div>
                <div class="flex justify-center">
                    <div class="bg-white lg:mx-20 mt-6 rounded-3xl w-full">
                        <div class="accordion">
                            <div class="accordion-item">
                                <div class=" accordion-header md:grid md:grid-cols-4 flex mt-1 px-8">
                                    <p class="text-xl font-bold col-span-3">What are the Northern Lights or Aurora Borealis?</p>
                                    <div class="justify-end flex col-span-1">
                                        <svg class="chevron-down h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                                        <svg  class="chevron-up h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                                    </div>                           
                                </div>
                                <div class="accordion-content bg-bg1">
                                    <p class="text-xl">The Aurora Borealis is a stunning phenomenon visible in Arctic regions. It results from collisions between solar particles and Earth's atmosphere, creating a display of colors.</p>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <div class=" accordion-header md:grid md:grid-cols-4 flex mt-1 px-8">
                                    <p class="text-xl font-bold col-span-3">Is Camp Alta a good place to see the Northern Lights?</p>
                                    <div class="justify-end flex col-span-1">
                                        <svg class="chevron-down h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                                        <svg  class="chevron-up h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                                    </div>                                    
                                </div>
                                <div class="accordion-content bg-bg1">
                                    <p class="text-xl">Yes, due to our remote location away from city lights, the auroras are visible under clear skies.</p>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <div class=" accordion-header md:grid md:grid-cols-4 flex mt-1 px-8">
                                    <p class="text-xl font-bold col-span-3">What is the currency of Sweden?</p>
                                    <div class="justify-end flex col-span-1">
                                        <svg class="chevron-down h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                                        <svg  class="chevron-up h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                                    </div>                                     
                                </div>
                                <div class="accordion-content bg-bg1">
                                    <p class="text-xl">The Swedish Krona (SEK) is the currency. Most stores accept international credit cards.</p>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <div class=" accordion-header md:grid md:grid-cols-4 flex mt-1 px-8">
                                    <p class="text-xl font-bold col-span-3">What is the weather like in Kiruna?</p>
                                    <div class="justify-end flex col-span-1">
                                        <svg class="chevron-down h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                                        <svg  class="chevron-up h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                                    </div>                                     
                                </div>
                                <div class="accordion-content bg-bg1">
                                    <p class="text-xl">Kiruna, 300 km north of the Arctic Circle, experiences very cold winters with temperatures dropping to -43.3°C. The daily mean temperature in winter is around -12°C.</p>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <div class=" accordion-header md:grid md:grid-cols-4 flex mt-1 px-8">
                                    <p class="text-xl font-bold col-span-3">How many hours of daylight can be expected in Kiruna?</p>
                                    <div class="justify-end flex col-span-1">
                                        <svg class="chevron-down h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                                        <svg  class="chevron-up h-8 w-8 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:#007984" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                                    </div>                                     
                                </div>
                                <div class="accordion-content bg-bg1">
                                    <p class="text-xl">In winter, the sun does not rise, while in summer, it never sets. The midnight sun is a popular summer attraction.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>  
    </section>
</template>
<script lang="ts" setup>
useSeo({
  title: 'FAQ - Camp Alta Kiruna | Booking, Cabins & Arctic Info',
  description: 'Frequently asked questions about Camp Alta Kiruna. Find answers about booking, cabins, camp services, getting here, and activities in Swedish Lapland.',
  path: '/FaQ',
})

const faqItems = [
  { q: 'What is the booking process?', a: 'You can book directly through our website or our booking system. For further assistance, please contact us, and we will guide you through the process.' },
  { q: 'How do you handle bookings?', a: 'Upon making a reservation on our website, Camp Alta collects a non-refundable 5% deposit. Thirty days before your arrival, you will receive an email to complete the remaining balance. If the payment is not made, your credit card will be charged automatically. Failure to pay will result in a cancellation, and the 5% deposit will be forfeited.' },
  { q: 'Can I book tours only with you?', a: 'Yes, when you book a cabin along with a snowmobile tour, we offer complimentary pick-up and drop-off shuttle service from Kiruna. Individual tours can be booked via our website. Free pick-up and drop-off are available from select locations in Kiruna.' },
  { q: 'What should I know before booking?', a: 'The winter season runs from November 15 to April 15. Cabin bookings include free access to fireplaces, teepees, and saunas. Our camp is self-catering and self-cleaning. Plan your groceries before arrival as there are no shops at the camp. Bed linen and towels are not included but can be rented upon arrival.' },
  { q: 'When should I book?', a: 'To ensure availability, we recommend booking as early as possible, especially during the peak season.' },
  { q: 'How can I make changes to my booking?', a: 'You can modify your booking by contacting us via email or phone. Changes are subject to availability.' },
  { q: 'What is the best way to reach you?', a: 'For urgent matters, contact us by email at info@campalta.se or phone at +46 706 529 374 during office hours.' },
  { q: 'What languages do you speak?', a: 'We communicate in English, Swedish, Norwegian, French and German.' },
  { q: 'How do I make a payment?', a: 'We accept all major credit cards and Swedish Krona (SEK).' },
  { q: 'What time does check-in begin?', a: 'Check-in starts at 15:00.' },
  { q: 'Is early check-in or late check-out possible?', a: 'Check-in is at 15:00 and check-out is by 11:00. Early or late check-in/out may incur additional fees and is subject to availability.' },
  { q: 'What facilities are available in the cabins?', a: 'Details about individual cabin facilities are listed under the Cabins sections. All cabins include electricity, heating, WiFi, fridge, freezer, microwave, and Cable TV.' },
  { q: 'Do you offer cleaning services?', a: 'We are a self-catering and self-cleaning camp. To keep the prices as low and accessible to everyone, we request you to clean the cabin before checking-out. Alternatively, you can book a cleaning service with us.' },
  { q: 'Is there electricity in the cabins?', a: 'Yes, all cabins have electricity and convenient plug points for charging devices.' },
  { q: 'Is there Internet (Wi-Fi) in the cabins?', a: 'Yes, all cabins have high speed internet WiFi.' },
  { q: 'Is there heating in the cabins?', a: 'Yes, all cabins are electrically heated to ensure you have a comfortable stay with us.' },
  { q: 'Do you provide bed linen and towels?', a: 'Bed linen and towels are not included in the cabins and they can be rented in advance or during check-in. You may also bring your own.' },
  { q: 'Can I prepare my own food at the cabins?', a: 'Yes, larger cabins have in-house kitchens. Smaller cabins have access to a fully equipped common kitchen.' },
  { q: 'Is airport or train station transfer available?', a: 'Shuttle services are available during the winter season. Free shuttle services are provided for guests booking snowmobile tours. For accommodation-only bookings, shuttle services can be accessed under the Prices menu.' },
  { q: 'What tours do you offer?', a: 'On our website, you can book snowmobile tours, dogsled tours, Northern Lights tours to Abisko, and Aurora Adventure Safari. For more tours, please contact us directly.' },
  { q: 'Can I pitch a tent at your campground?', a: 'Tents can be pitched during the summer (June, July, August). Winter camping is not recommended due to extreme temperatures.' },
  { q: 'Can I stay with a motorhome or caravan in your camp?', a: 'We accept campervans and caravans all year round but electricity is not provided during the winter season.' },
  { q: 'Is there a laundry facility?', a: 'Laundry facilities are available during summer season only (June-July-August).' },
  { q: 'What facilities can I use for free during my stay?', a: 'We have wood-heated saunas and grill huts in the camp which can be used for free by our guests. A bag of wood to light a fire can be purchased at the reception.' },
  { q: 'What activities are available during my stay?', a: 'Free activities include wood-heated saunas and teepees. We offer snowmobile tours, dogsled tours, Northern Lights tours, cross country skiing, ice fishing, and snowshoeing.' },
  { q: 'Where is Camp Alta Kiruna located?', a: 'Camp Alta is in the village of Alttajärvi, 15 km from Kiruna. Address is 2 Jullebovägen, Kiruna 981 92.' },
  { q: 'Do you offer transportation to the camp?', a: 'During the winter season (November 15 - April 15), we offer a transfer service from Kiruna. Free transportation is available for guests booking snowmobile tours.' },
  { q: 'What is the best way to get to the campsite on my own?', a: 'By road: From Kiruna, follow the E-10 road towards Luleå, the camp entrance is 15 km on the right. By air: Take a local flight bus from Kiruna airport to the city center. By train: Take the local bus from the railway station to the city center.' },
  { q: 'How do you handle cancellations?', a: 'A 5% non-refundable deposit is taken upon booking. The remaining 95% is due 30 days before arrival. Failure to pay will result in a cancellation and forfeiture of the deposit.' },
  { q: 'Is smoking allowed?', a: 'Smoking is prohibited in cabins and service buildings. A 5000 SEK fee will be charged for violations.' },
  { q: 'What are the Northern Lights or Aurora Borealis?', a: 'The Aurora Borealis is a stunning phenomenon visible in Arctic regions. It results from collisions between solar particles and Earth\'s atmosphere, creating a display of colors.' },
  { q: 'Is Camp Alta a good place to see the Northern Lights?', a: 'Yes, due to our remote location away from city lights, the auroras are visible under clear skies.' },
  { q: 'What is the currency of Sweden?', a: 'The Swedish Krona (SEK) is the currency. Most stores accept international credit cards.' },
  { q: 'What is the weather like in Kiruna?', a: 'Kiruna, 300 km north of the Arctic Circle, experiences very cold winters with temperatures dropping to -43.3°C. The daily mean temperature in winter is around -12°C.' },
  { q: 'How many hours of daylight can be expected in Kiruna?', a: 'In winter, the sun does not rise, while in summer, it never sets. The midnight sun is a popular summer attraction.' },
]

useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqItems.map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a,
        },
      })),
    }),
  }],
})

import { onMounted, onUnmounted } from 'vue';

let ticking = false;
function parallax() {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const scrollPosition = window.scrollY;
      const heroImage = document.querySelector('.hero') as HTMLElement;
      const heroText = document.querySelector('.hero-text') as HTMLElement;

      if (heroImage != null && heroText != null) {
        heroText.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        const opacity = 1 - scrollPosition / heroImage.offsetHeight;
        heroImage.style.opacity = opacity.toString();
      }
      ticking = false;
    });
    ticking = true;
  }
}


let bookings =ref(true)
let cabins =ref(false)
let camp =ref(false)
let arrivals =ref(false)
let category =ref('')


function isSmallScreen() {
  // Set the threshold width (adjust as needed based on your desktop size)
  const desktopWidthThreshold = 1025;

  // Get the current screen width
  const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  // Check if the screen width is greater than the desktop threshold
  return screenWidth <= desktopWidthThreshold;
}

function acc() {
    let accordionItems = document.querySelectorAll(".accordion-item");
    //console.log(accordionItems)

    accordionItems.forEach((item) => {
        let header = item.querySelector(".accordion-header") as HTMLElement;
        console.log('una vez')
        header.addEventListener("click", () => {
            item.classList.toggle("active");
        });

    });
    // Get the button:
    let mybutton = document.getElementById("to-top") as HTMLElement;;

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        mybutton.style.opacity = "1";
    } else {
        mybutton.style.opacity = "0";
    }
    }

}




onMounted(() => {
  window.addEventListener("scroll", parallax, { passive: true });
  acc()
  if (isSmallScreen()) {
    bookings.value=true
    cabins.value=true
    camp.value=true
    arrivals.value=true
  }
});

onUnmounted(() => {
  window.removeEventListener("scroll", parallax);
});

</script>
