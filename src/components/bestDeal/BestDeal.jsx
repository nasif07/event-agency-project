
const BestDeal = () => {
    return (
        <div style={{ backgroundColor: "#F5F5F6" }} className="py-12">
            <div>
                <h1 className="font-bold text-5xl text-center py-8"><span className=" text-[#FCB41E]">Our </span>Prices</h1>
                <p className=" text-lg font-medium text-center pb-12 text-[#676767]">OUR BEST SERVICES JUST FOR YOU</p>





                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[1600px] mx-auto gap-8 md:px-5 lg:px-0">
                    <div className="w-full p-4 bg-white  border-gray-200 rounded-lg shadow sm:p-8 dark:bg-[#FCB41E] dark:border-gray-700">
                        <h5 className="mb-4 text-xl  font-medium text-white">Full-Service Planning</h5>
                        <div className="flex items-baseline text-white dark:text-white">
                            <span className="text-3xl text-bla font-semibold">$</span>
                            <span className="text-5xl font-extrabold tracking-tight">999</span>
                            <span className="ml-1 text-xl font-normal text-white">/day</span>
                        </div>
                        <ul role="list" className="space-y-8 my-7">
                            <li className="flex space-x-3 items-center">
                                <svg
                                    className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="text-lg font-semibold leading-tight text-white dark:text-white">Pre-wedding preparations</span>
                            </li>
                            <li className="flex space-x-3">
                                <svg
                                    className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="text-lg font-semibold leading-tight text-white dark:text-white">Wedding Day</span>
                            </li>
                            <li className="flex space-x-3">
                                <svg
                                    className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="text-lg font-semibold leading-tight text-gray-500 dark:text-white">Integration help</span>
                            </li>
                            <li className="flex space-x-3 line-through decoration-gray-500">
                                <svg
                                    className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="text-lg font-semibold leading-tight text-gray-500">Post-wedding</span>
                            </li>
                            <li className="flex space-x-3 line-through decoration-gray-500">
                                <svg
                                    className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="text-lg font-semibold leading-tight text-gray-500">Wedding Consultation</span>
                            </li>
                        </ul>
                        <button
                            type="button"
                            className="text-white bg-black hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
                        >
                            PURCHASE
                        </button>
                    </div>
                    <div className="w-full p-4 bg-white  border-gray-200 rounded-lg shadow sm:p-8 dark:bg-[#FCB41E] dark:border-gray-700">
                        <h5 className="mb-4 text-xl  font-medium text-white">Full-Service Planning</h5>
                        <div className="flex items-baseline text-white dark:text-white">
                            <span className="text-3xl text-bla font-semibold">$</span>
                            <span className="text-5xl font-extrabold tracking-tight">799</span>
                            <span className="ml-1 text-xl font-normal text-white">/day</span>
                        </div>
                        <ul role="list" className="space-y-8 my-7">
                            <li className="flex space-x-3 items-center">
                                <svg
                                    className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="text-lg font-semibold leading-tight text-white dark:text-white">Pre-wedding preparations</span>
                            </li>
                            <li className="flex space-x-3">
                                <svg
                                    className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="text-lg font-semibold leading-tight text-white dark:text-white">Wedding Day</span>
                            </li>
                            <li className="flex space-x-3">
                                <svg
                                    className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="text-lg font-semibold leading-tight text-gray-500 dark:text-white">Integration help</span>
                            </li>
                            <li className="flex space-x-3 line-through decoration-gray-500">
                                <svg
                                    className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="text-lg font-semibold leading-tight text-gray-500">Post-wedding</span>
                            </li>
                            <li className="flex space-x-3 line-through decoration-gray-500">
                                <svg
                                    className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="text-lg font-semibold leading-tight text-gray-500">Wedding Consultation</span>
                            </li>
                        </ul>
                        <button
                            type="button"
                            className="text-white bg-black hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
                        >
                            PURCHASE
                        </button>
                    </div>
                    <div className="w-full p-4 bg-white  border-gray-200 rounded-lg shadow sm:p-8 dark:bg-[#FCB41E] dark:border-gray-700">
                        <h5 className="mb-4 text-xl  font-medium text-white">Full-Service Planning</h5>
                        <div className="flex items-baseline text-white dark:text-white">
                            <span className="text-3xl text-bla font-semibold">$</span>
                            <span className="text-5xl font-extrabold tracking-tight">899</span>
                            <span className="ml-1 text-xl font-normal text-white">/day</span>
                        </div>
                        <ul role="list" className="space-y-8 my-7">
                            <li className="flex space-x-3 items-center">
                                <svg
                                    className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="text-lg font-semibold leading-tight text-white dark:text-white">Pre-wedding preparations</span>
                            </li>
                            <li className="flex space-x-3">
                                <svg
                                    className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="text-lg font-semibold leading-tight text-white dark:text-white">Wedding Day</span>
                            </li>
                            <li className="flex space-x-3">
                                <svg
                                    className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="text-lg font-semibold leading-tight text-gray-500 dark:text-white">Integration help</span>
                            </li>
                            <li className="flex space-x-3 line-through decoration-gray-500">
                                <svg
                                    className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="text-lg font-semibold leading-tight text-gray-500">Post-wedding</span>
                            </li>
                            <li className="flex space-x-3 line-through decoration-gray-500">
                                <svg
                                    className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="text-lg font-semibold leading-tight text-gray-500">Wedding Consultation</span>
                            </li>
                        </ul>
                        <button
                            type="button"
                            className="text-white bg-black hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
                        >
                            PURCHASE
                        </button>
                    </div>
                    <div className="w-full p-4 bg-white  border-gray-200 rounded-lg shadow sm:p-8 dark:bg-[#FCB41E] dark:border-gray-700">
                        <h5 className="mb-4 text-xl  font-medium text-white">Full-Service Planning</h5>
                        <div className="flex items-baseline text-white dark:text-white">
                            <span className="text-3xl text-bla font-semibold">$</span>
                            <span className="text-5xl font-extrabold tracking-tight">699</span>
                            <span className="ml-1 text-xl font-normal text-white">/day</span>
                        </div>
                        <ul role="list" className="space-y-8 my-7">
                            <li className="flex space-x-3 items-center">
                                <svg
                                    className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="text-lg font-semibold leading-tight text-white dark:text-white">Pre-wedding preparations</span>
                            </li>
                            <li className="flex space-x-3">
                                <svg
                                    className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="text-lg font-semibold leading-tight text-white dark:text-white">Wedding Day</span>
                            </li>
                            <li className="flex space-x-3">
                                <svg
                                    className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="text-lg font-semibold leading-tight text-gray-500 dark:text-white">Integration help</span>
                            </li>
                            <li className="flex space-x-3 line-through decoration-gray-500">
                                <svg
                                    className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="text-lg font-semibold leading-tight text-gray-500">Post-wedding</span>
                            </li>
                            <li className="flex space-x-3 line-through decoration-gray-500">
                                <svg
                                    className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="text-lg font-semibold leading-tight text-gray-500">Wedding Consultation</span>
                            </li>
                        </ul>
                        <button
                            type="button"
                            className="text-white bg-black hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
                        >
                            PURCHASE
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default BestDeal;