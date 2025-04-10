import { useEffect, useState } from "react";

const useAreaLocation = () => {
  const [districts, setDistricts] = useState([]);
  const [upazilas, setUpazilas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const districtRes = await fetch("/json/districts.json");
        const upazilaRes = await fetch("/json/upazilas.json");

        if (!districtRes.ok || !upazilaRes.ok) {
          throw new Error("Failed to fetch data");
        }

        const districtData = await districtRes.json();
        const upazilaData = await upazilaRes.json();

        setDistricts(districtData);
        setUpazilas(upazilaData);
      } catch (error) {
        console.error("Error fetching location data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { districts, upazilas, loading, error };
};

export default useAreaLocation;
