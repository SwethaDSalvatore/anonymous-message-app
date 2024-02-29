const Footer = () => {
    return (
        <div>
            <div className=" mt-4 lg:mx-0 p-4 text-[11px] text-center sm:text-md text-sm text-white bg-gradient-to-r bg-[#7B2869] sm:flex justify-between items-center">
                <div>
                    <p>Designed by <span class="text-white font-semibold underline">Swetha Ramesh </span> for CyberDude
                        Networks Internship programme</p>
                </div>
                <div className="flex gap-x-3 justify-center">
                    <a href="https://github.com/SwethaDSalvatore/" target="_blank" class="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
                            class="fill fill-current w-7 text-white hover:text-neutral-400 hover:cursor-pointer">
                            <path fill-rule="evenodd"
                                d="M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2Z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;