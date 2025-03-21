
const HowItWorks = () => {
    return (
        <section
            id="how-it-works"
            className="relative py-10 sm:py-16 lg:py-24"
        >
            <div className="px-4 mx-auto max-w-6xl sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-4xl  text-gray-900 font-extrabold mx-auto md:text-6xl lg:text-5xl">
                        How It Works
                    </h2>
                    <p className="max-w-2xl mx-auto mt-4 text-base text-gray-400 leading-relaxed md:text-2xl">
                        Follow these simple steps to get started with our platform and make the most out of it.
                    </p>
                </div>

                <div className="relative mt-12 lg:mt-20">
                    <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                        <img
                            alt="Curved Dotted Line Illustration"
                            loading="lazy"
                            width="1000"
                            height="500"
                            decoding="async"
                            className="w-full"
                            style={{ color: "transparent" }}
                            src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
                        />
                    </div>

                    <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                <span className="text-xl font-semibold text-gray-700">1</span>
                            </div>
                            <h3 className="mt-6 text-xl text-gray-900 font-semibold leading-tight md:mt-10">
                                Sign Up
                            </h3>
                            <p className="mt-4 text-base text-gray-400 md:text-lg">
                                Create an account by providing your basic details and start exploring.
                            </p>
                        </div>

                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                <span className="text-xl font-semibold text-gray-700">2</span>
                            </div>
                            <h3 className="mt-6 text-xl text-gray-900 font-semibold leading-tight md:mt-10">
                                Explore Features
                            </h3>
                            <p className="mt-4 text-base text-gray-400 md:text-lg">
                                Navigate through our platform to discover features tailored for you.
                            </p>
                        </div>

                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                <span className="text-xl font-semibold text-gray-700">3</span>
                            </div>
                            <h3 className="mt-6 text-xl text-gray-900 font-semibold leading-tight md:mt-10">
                                Get Started
                            </h3>
                            <p className="mt-4 text-base text-gray-400 md:text-lg">
                                Take action and start using our services to achieve your goals.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;