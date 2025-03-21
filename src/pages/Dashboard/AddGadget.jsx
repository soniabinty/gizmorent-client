import { useState } from "react";
import { useForm } from "react-hook-form";
import { uploadImage } from "../../utility/utility";

const AddGadget = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [imagePreview, setImagePreview] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      setValue("image", file);
    }
  };

  const onSubmit = async (data) => {
    if (!data.image) {
      alert("Please upload an image.");
      return;
    }

    try {
      setUploading(true);

      const imageUrl = await uploadImage(data.image);

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

      console.log("Final Form Data:", formattedData);

      alert("Gadget added successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-semibold">Add Gadget</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 mt-4">
        <input
          type="text"
          {...register("name", { required: "Name is required" })}
          className="input w-full py-6"
          placeholder="Name*"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

        <input
          type="email"
          {...register("email", { required: "Email is required" })}
          className="input w-full py-6"
          placeholder="Email*"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <input
          type="number"
          {...register("phone", { required: "Phone number is required" })}
          className="input w-full py-6"
          placeholder="Phone Number*"
        />
        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}

        {/* Category Selection */}
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

        {/* Price Input */}
        <input
          type="number"
          {...register("price", { required: "Price is required", min: 1 })}
          className="input w-full py-6"
          placeholder="Price*"
        />
        {errors.price && <p className="text-red-500">{errors.price.message}</p>}

        {/* Quantity Input */}
        <input
          type="number"
          {...register("quantity", {
            required: "Quantity is required",
            min: 1,
          })}
          className="input w-full py-6"
          placeholder="Quantity*"
        />
        {errors.quantity && (
          <p className="text-red-500">{errors.quantity.message}</p>
        )}

        {/* Image Upload */}
        <div className="flex items-center gap-4">
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Preview"
              className="w-16 h-16 object-cover rounded-full border"
            />
          ) : (
            <div className="w-16 h-16 border rounded-full flex items-center justify-center text-gray-500">
              No Image
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            className="file-input file-input-bordered w-full"
            onChange={handleImageChange}
          />
        </div>

        {/* Specifications */}
        <textarea
          {...register("specifications", {
            required: "Specifications are required",
          })}
          className="w-full p-2 textarea rounded mb-4"
          rows="5"
          placeholder="Enter specifications (one per line) e.g.:
Model: Wisdom Window Winner
Storage: Dual SD Card Slots
Battery Life: Approx. 580 shots per charge"
        ></textarea>
        {errors.specifications && (
          <p className="text-red-500">{errors.specifications.message}</p>
        )}

        {/* Features */}
        <textarea
          {...register("features", { required: "Features are required" })}
          className="w-full p-2 textarea rounded mb-4"
          rows="5"
          placeholder="Enter features (one per line) e.g.:
High-Resolution Sensor
Advanced Autofocus
4K Video Recording"
        ></textarea>
        {errors.features && (
          <p className="text-red-500">{errors.features.message}</p>
        )}

        {/* Description */}
        <textarea
          {...register("description", { required: "Description is required" })}
          className="w-full p-2 textarea rounded mb-4"
          rows="5"
          placeholder="Description"
        ></textarea>
        {errors.description && (
          <p className="text-red-500">{errors.description.message}</p>
        )}

        <button
          type="submit"
          className="btn btn-neutral py-6 px-10 mt-4"
          disabled={uploading}
        >
          {uploading ? "Uploading..." : "Add Gadget"}
        </button>
      </form>
    </div>
  );
};

export default AddGadget;
