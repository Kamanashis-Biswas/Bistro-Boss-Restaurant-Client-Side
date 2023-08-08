

const Dish = () => {
    return (
        <div>
            <section className="py-16">
                <div className="container mx-auto">
                    <div className="flex flex-col items-center">
                        <h2 className="text-3xl font-semibold mb-4">Delicious Dishes</h2>
                        <p className="text-gray-600 mb-8">
                            Explore our mouthwatering collection of dishes made with love and fresh ingredients.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Dish 1 */}
                        <div className="relative overflow-hidden rounded-lg shadow-lg">
                            <img
                                className="w-full h-64 object-cover object-center transform transition duration-300 hover:scale-105"
                                src="https://i.ibb.co/c84Bjyh/chicken-strips.png"
                                alt="Delicious Dish"
                            />
                            <div className="absolute inset-0 bg-black opacity-50"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-white text-center p-4">
                                    <h3 className="text-xl font-semibold mb-2">Spicy Pasta</h3>
                                    <p className="text-sm">A tantalizing blend of flavors and spices.</p>
                                </div>
                            </div>
                        </div>

                        {/* Dish 2 */}
                        <div className="relative overflow-hidden rounded-lg shadow-lg">
                            <img
                                className="w-full h-64 object-cover object-center transform transition duration-300 hover:scale-105"
                                src="https://i.ibb.co/nwQQN2q/pexels-chan-walrus-958545.jpg"
                                alt="Delicious Dish"
                            />
                            <div className="absolute inset-0 bg-black opacity-50"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-white text-center p-4">
                                    <h3 className="text-xl font-semibold mb-2">Grilled Seafood</h3>
                                    <p className="text-sm">Fresh seafood grilled to perfection.</p>
                                </div>
                            </div>
                        </div>

                        {/* Dish 3 */}
                        <div className="relative overflow-hidden rounded-lg shadow-lg">
                            <img
                                className="w-full h-64 object-cover object-center transform transition duration-300 hover:scale-105"
                                src="https://i.ibb.co/xMN9QpV/Screenshot.png"
                                alt="Delicious Dish"
                            />
                            <div className="absolute inset-0 bg-black opacity-50"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-white text-center p-4">
                                    <h3 className="text-xl font-semibold mb-2">Berry Parfait</h3>
                                    <p className="text-sm">A delightful dessert with fresh berries and creamy layers.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Dish;