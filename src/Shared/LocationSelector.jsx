import { useState } from "react";
import useAreaLocation from "../Hooks/useAreaLocation";

const LocationSelector = ({ control, register, setValue, watch }) => {
  const { districts, upazilas } = useAreaLocation();
  const selectedDistrict = watch("district");
  const [filteredUpazilas, setFilteredUpazilas] = useState([]);

  // Handle district change
  const handleDistrictChange = (e) => {
    const districtName = e.target.value;
    setValue("district", districtName); // Update react-hook-form value

    const district = districts.find((d) => d.name === districtName);
    if (district) {
      const upazilaList = upazilas.filter(
        (upazila) => upazila.district_id === district.id
      );
      setFilteredUpazilas(upazilaList);
    } else {
      setFilteredUpazilas([]);
    }

    setValue("upazila", ""); // Reset upazila on district change
  };

  return (
    <div className="flex gap-4">
      {/* District Select */}
      <div className="form-control">
        <select
          {...register("district", { required: "District is required" })}
          onChange={handleDistrictChange}
          className="select select-bordered"
        >
          <option value="">-- Select a District --</option>
          {districts.map((district) => (
            <option key={district.id} value={district.name}>
              {district.name}
            </option>
          ))}
        </select>
      </div>

      {/* Upazila Select */}
      <div className="form-control">
        <select
          {...register("upazila", { required: "Upazila is required" })}
          className="select select-bordered"
          disabled={!selectedDistrict}
        >
          <option value="">-- Select Upazila --</option>
          {filteredUpazilas.map((upazila) => (
            <option key={upazila.id} value={upazila.name}>
              {upazila.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default LocationSelector;
