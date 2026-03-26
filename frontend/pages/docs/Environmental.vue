<template>
    <div id="screen ">      
        <Navbar/>    
        <span id="top"></span> 
        <ToTop/>      
        <div class="bg-bg1 px-2 mt-8">
            <h1 class="title text-center lg:text-9xl">Environmental policy</h1>
            <p class="text-xl mt-4 text-center">Last update: 07-09-2023</p>
            <p class="title-init lg:text-6xl text-4xl text-center">- Purpose and Scope -</p>
            <p class="text-xl mt-4 text-justify "> This environmental policy outlines the commitments, objectives, and actionable steps that Camp Alta Kiruna will undertake to minimise its impact on the environment. The policy applies to all operations, staff, guests, and subcontractors involved with the campsite.</p>
            <p class="title-init lg:text-6xl text-4xl text-center">- Policy Statement -</p>
            <p class="text-xl mt-4 text-justify">We are committed to conducting our operations in a manner that is environmentally sustainable, responsible, and in accordance with local, state, and federal environmental regulations. We aim to conserve natural resources, reduce waste, and contribute positively to the local ecosystem.</p>
            <p class="title-init lg:text-6xl text-4xl text-center">- Objectives -</p>
                <ul class="ml-10 lg:ml-16 pt-4">
                    <li class="list-disc text-xl">Waste Reduction: To reduce waste through recycling, reusing, and composting.</li>
                    <li class="list-disc text-xl">Energy Efficiency: To utilize energy in the most efficient way possible.</li>
                    <li class="list-disc text-xl">Water Conservation: To minimize water use and protect local water sources.</li>
                    <li class="list-disc text-xl">Sustainable Sourcing: To source food, materials, and other goods in a sustainable manner.</li>
                    <li class="list-disc text-xl">Education and Awareness: To promote environmental awareness among staff and guests.</li>
                </ul>
            <p class="title-init lg:text-6xl text-4xl text-center">- Action Plans -</p>
            <p class="text-xl mt-4 text-justifyfont-bold">Waste Management</p>
            <ul class="ml-10 lg:ml-16 pt-4">
                <li class="list-disc text-xl">Provide clearly marked bins for recycling, compost, and landfill waste.</li>
                <li class="list-disc text-xl">Use biodegradable cleaning products and toiletries.</li>
                <li class="list-disc text-xl">Offer reusable items like cups, plates, and utensils rather than single-use plastics.</li>
                <li class="list-disc text-xl">Sustainable Sourcing: To source food, materials, and other goods in a sustainable manner.</li>
                <li class="list-disc text-xl">Education and Awareness: To promote environmental awareness among staff and guests.</li>
            </ul>
            <p class="text-xl mt-4 text-justify font-bold">Energy Management</p>
            <ul class="ml-10 lg:ml-16 pt-4">
                <li class="list-disc text-xl">Utilize energy-efficient heating and LED lighting.</li>
                <li class="list-disc text-xl">Implement a “lights-off” policy for non-essential lighting during daylight hours.</li>
            </ul>
            <p class="text-xl mt-4 text-justify font-bold">Water Management</p>
            <ul class="ml-10 lg:ml-16 pt-4">
                <li class="list-disc text-xl">Install water-saving appliances like low-flow toilets and faucets.</li>
                <li class="list-disc text-xl">Encourage guests to limit shower time and reuse towels.</li>
            </ul>
            <p class="text-xl mt-4 text-justify font-bold">Sustainable Sourcing</p>
            <ul class="ml-10 lg:ml-16 pt-4">
                <li class="list-disc text-xl">Source food and supplies locally whenever possible to reduce transportation emissions.</li>
                <li class="list-disc text-xl">Use Fair Trade and organic products.</li>
                <li class="list-disc text-xl">Prioritize the use of renewable or recycled building materials for any new structures or repairs.</li>
            </ul>
            <p class="text-xl mt-4 text-justify font-bold">Education and Awareness</p>
            <ul class="ml-10 lg:ml-16 pt-4">
                <li class="list-disc text-xl">Display educational signs about local flora, fauna, and history to promote environmental awareness.</li>
                <li class="list-disc text-xl">Offer workshops, nature walks, or presentations on environmental conservation.</li>
                <li class="list-disc text-xl">Train staff in sustainable practices and how to educate guests.</li>
            </ul>
            <p class="text-xl mt-4 text-justify font-bold">Compliance and Monitoring</p>
            <ul class="ml-10 lg:ml-16 pt-4">
                <li class="list-disc text-xl">Stay up to date with, and adhere to, all local, state, and federal environmental regulations.</li>
                <li class="list-disc text-xl">Conduct regular internal audits to evaluate the effectiveness of environmental practices.</li>
                <li class="list-disc text-xl">Appoint an Environment Officer to monitor and implement the policy.</li>
            </ul>
            <p class="text-xl mt-4 text-justify font-bold">Review and Amendments</p>
            <ul class="ml-10 lg:ml-16 pt-4">
                <li class="list-disc text-xl">This policy will be reviewed annually and updated to reflect new science, technologies, and feedback from staff and guests.</li>
            </ul>
        </div>
        <Footer/>  

    </div>
</template>
<script lang="ts" setup>
useSeo({
  title: 'Environmental Policy | Camp Alta Kiruna',
  description: 'Read about Camp Alta Kiruna\'s environmental commitment including waste reduction, energy efficiency, water conservation, sustainable sourcing, and eco-friendly practices in Swedish Lapland.',
  path: '/docs/Environmental',
})
</script>