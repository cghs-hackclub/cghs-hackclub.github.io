<template>
    <div class="bg-gray-900 text-white">
        <div class="flex flex-row h-64 shadow-2xl border-gray-800 items-center justify-center">
            <p class="text-8xl">Join Us Building Today.</p>

        </div>
    </div>
    <div class="flex h-[64rem] bg-gray-700">
        <a href="/workshops/club-village"> <!-- TODO: push these into templates in components-->
            <div class="bg-gray-800 m-6 w-96 h-[18rem] rounded-2xl border-8 border-gray-800 shadow-2xl cursor-pointer 
            transition ease-in-out delay-30 hover:-translate-y-2 hover:translate-x-2 ">
                <img class="rounded-2xl" src="~/public/assets/workshops/cover/club-village.png">
                <div class="flex items-center justify-center">
                    <p class="mt-4 text-white text-lg">3D Club Village</p>
                </div>
            </div>
        </a>
        <a href="/workshops/ai-comicbook">
            <div class="bg-gray-800 m-6 w-96 h-[18rem] rounded-2xl border-8 border-gray-800 shadow-2xl cursor-pointer 
            transition ease-in-out delay-30 hover:-translate-y-2 hover:translate-x-2 ">
                <img class="rounded-2xl" src="~/public/assets/workshops/cover/ai-comicbook.png">
                <div class="flex items-center justify-center">
                    <p class="mt-4 text-white text-lg">AI Comic Book</p>
                </div>
            </div>
        </a>
    </div>
</template>