import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';

const Checkbox = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [fileName, setFileName] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const defaultImage = "https://ik.imagekit.io/faskf16pg/sub_category/Gaming_Console/Projector_products/viewsonic-miniplus-Projector-on-rent-SharePal-1__3__yKCLOtESr.png?updatedAt=1680516059766";

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => setSelectedImage(e.target.result);
            reader.readAsDataURL(file);
            setFileName(file.name);
        }
    };

    const handleUpload = () => {
        if (selectedImage && isChecked) {
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000);
        }
    };

    return (
        <section className="p-6 bg-gray-100 rounded-xl">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                Quality & Fitness Check
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-xl">
                    <h2 className="text-2xl font-semibold text-gray-800  mb-6">
                        Existing Image
                    </h2>
                    <img src={defaultImage} alt="Existing" className="w-full h-40 object-cover rounded" />
                </div>
                <div className="bg-white p-8 rounded-xl">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-semibold text-gray-800 ">
                            Upload Your File
                        </h2>
                        {fileName && (
                            <button onClick={() => setShowModal(true)} className="text-Primary hover:text-orange-700">
                                <FaEye className="text-2xl" />
                            </button>
                        )}
                    </div>

                    <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-xl hover:border-Primary transition-all duration-300">
                        <label htmlFor="file-upload" className="cursor-pointer text-center flex flex-col items-center space-y-2">
                            <svg className="w-16 h-16 text-Primary mb-4 transition-all duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                            </svg>
                            <span className="block text-xl font-medium text-gray-600 hover:text-Primary transition-all duration-300">
                                Drag & Drop your file here
                            </span>
                            <span className="block text-sm text-gray-400">Or click to browse</span>
                        </label>
                        <input type="file" id="file-upload" className="hidden" accept="image/*" onChange={handleImageChange} />

                    </div>
                    {/* </div> */}
                    {selectedImage && (
                        <div className="mt-4 flex items-center">
                            <input type="checkbox" id="confirm-upload" className="w-4 h-4 text-Primary border-gray-300 rounded focus:ring-blue-500" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
                            <label htmlFor="confirm-upload" className="ml-2 text-gray-700 text-sm">
                                I confirm that I want to upload this image.
                            </label>
                        </div>
                    )}


                    <button onClick={handleUpload} className={`w-full mt-6 py-2 px-4 text-white font-semibold rounded-lg transition-all duration-300 ${selectedImage && isChecked ? "bg-Primary hover:bg-orange-600" : "bg-gray-400 cursor-not-allowed"}`} disabled={!selectedImage || !isChecked}>
                        Upload
                    </button>
                </div>
            </div>
            {
                showToast && (
                    <div className="fixed Top-5 right-5 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg">
                        📤 Image Uploaded Successfully!
                    </div>
                )
            }
            {
                showModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Uploaded Image</h3>
                            <img src={selectedImage} alt="Uploaded" className="w-full h-auto rounded" />
                            <button onClick={() => setShowModal(false)} className="mt-4 px-4 py-2 bg-Primary text-white rounded hover:bg-orange-600">Close</button>
                        </div>
                    </div>
                )
            }
        </section >
    );
};

export default Checkbox;
