import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa6";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { uploadImage } from "../../utility/utility";

const UpdateGadget = () => {
    const { id } = useParams();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const location = useLocation(); // Get location to access the previous route
    const previousRoute = location.state?.from || "/dashboard/my-gadget"; // Default to "My Gadgets" if no state is passed

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const [gadget, setGadget] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [uploading, setUploading] = useState(false);

    useEffect(() => {
        const fetchGadget = async () => {
            try {
                const response = await axiosPublic.get(`/gadgets/${id}`);
                setGadget(response.data);
                setValue("name", response.data.name);
                setValue("category", response.data.category);
                setValue("price", response.data.price);
                setValue("quantity", response.data.quantity);
                setValue("specifications", response.data.specifications.join("\n"));
                setValue("features", response.data.features.join("\n"));
                setValue("description", response.data.description);
                setImagePreview(response.data.image);
            } catch (error) {
                Swal("Error", "Gadget not found or an error occurred while fetching data.", error.message);
                navigate(previousRoute); // Redirect the user to the previous route
            }
        };

        fetchGadget();
    }, [axiosPublic, id, setValue, navigate, previousRoute]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImagePreview(URL.createObjectURL(file));
            setValue("image", file);
        }
    };

    const onSubmit = async (data) => {
        if (!data.image && !imagePreview) {
            alert("Please upload an image.");
            return;
        }

        try {
            setUploading(true);

            let imageUrl = imagePreview;
            if (data.image) {
                imageUrl = await uploadImage(data.image);
            }

            const formattedData = {
                ...data,
                specifications: data.specifications
                    .split("\n")
                    .map((spec) => spec.trim())
                    .filter(Boolean),
                features: data.features
                    .split("\n")
                    .map((feature) => feature.trim())
                    .filter(Boolean),
                image: imageUrl,
                price: parseFloat(data.price),
                quantity: parseInt(data.quantity, 10),
            };

            await axiosPublic.put(`/gadgets/${id}`, formattedData);
            Swal("Updated!", "Your gadget has been updated.", "success").then(() => {
                navigate(previousRoute); // Navigate back to the previous route
            });
        } catch (error) {
            console.error("Error updating gadget:", error);
        } finally {
            setUploading(false);
        }
    };

    if (!gadget) return <div>Loading...</div>;

    return (
        <div className="pt-14">
            <h2 className="text-3xl font-semibold">Update Gadget</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 mt-4">
                <input
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    className="input w-full py-6 rounded-lg"
                    placeholder="Name*"
                />
                {errors.name && <p className="text-red-500">{errors.name.message}</p>}

                <select
                    {...register("category", { required: "Category is required" })}
                    className="select select-bordered w-full "
                >
                    <option value="">Select Category</option>
                    <option value="Laptop">Laptop</option>
                    <option value="Smartphone">Smartphone</option>
                    <option value="Tablet">Tablet</option>
                    <option value="Gaming & VR">Gaming & VR</option>
                    <option value="Audio & Music">Audio & Music</option>
                    <option value="Wearable">Wearable</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Other">Other</option>
                </select>
                {errors.category && (
                    <p className="text-red-500">{errors.category.message}</p>
                )}

                <input
                    type="number"
                    {...register("price", { required: "Price is required", min: 1 })}
                    className="input w-full py-6 rounded-lg"
                    placeholder="Price*"
                />
                {errors.price && <p className="text-red-500">{errors.price.message}</p>}

                <input
                    type="number"
                    {...register("quantity", {
                        required: "Quantity is required",
                        min: 1,
                    })}
                    className="input w-full py-6 rounded-lg"
                    placeholder="Quantity*"
                />
                {errors.quantity && (
                    <p className="text-red-500">{errors.quantity.message}</p>
                )}

                <div className="flex items-center gap-4">
                    {imagePreview ? (
                        <img
                            src={imagePreview}
                            alt="Preview"
                            className="w-16 h-16 object-cover rounded-full border"
                        />
                    ) : (
                        <div className="w-16 h-16 rounded-full text-gray-500 border-2 border-gray-300 flex items-center justify-center">
                            <FaPlus />
                        </div>
                    )}
                    <input
                        type="file"
                        accept="image/*"
                        className="file-input file-input-bordered w-full"
                        onChange={handleImageChange}
                    />
                </div>

                <textarea
                    {...register("specifications", {
                        required: "Specifications are required",
                    })}
                    className="w-full p-2 textarea rounded-lg mb-4"
                    rows="5"
                    placeholder="Enter specifications (one per line) e.g.:
Model: Wisdom Window Winner
Storage: Dual SD Card Slots
Battery Life: Approx. 580 shots per charge"
                ></textarea>
                {errors.specifications && (
                    <p className="text-red-500">{errors.specifications.message}</p>
                )}

                <textarea
                    {...register("features", { required: "Features are required" })}
                    className="w-full p-2 textarea rounded-lg mb-4"
                    rows="5"
                    placeholder="Enter features (one per line) e.g.:
High-Resolution Sensor
Advanced Autofocus
4K Video Recording"
                ></textarea>
                {errors.features && (
                    <p className="text-red-500">{errors.features.message}</p>
                )}

                <textarea
                    {...register("description", { required: "Description is required" })}
                    className="w-full p-2 textarea rounded-lg mb-4"
                    rows="5"
                    placeholder="Description"
                ></textarea>
                {errors.description && (
                    <p className="text-red-500">{errors.description.message}</p>
                )}

                <button
                    type="submit"
                    className="btn btn-neutral py-6 rounded-lg px-10 mt-4"
                    disabled={uploading}
                >
                    {uploading ? "Updating..." : "Update Gadget"}
                </button>
            </form>
        </div>
    );
};

export default UpdateGadget;