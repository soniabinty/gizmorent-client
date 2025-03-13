import React from "react";

const TopContributor = () => {
  return (
    <section className="w-full py-5 bg-gradient-to-r from-amber-300 to-yellow-400 flex flex-col items-center my-5">
      <h2 className=" text-xl md:text-4xl font-extrabold mb-7 text-center text-white drop-shadow-lg">
        Top Contributors
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Contributor Card */}
        {[
          {
            name: "Shakir",
            contribution: 500,
            userType: "Top Rent Owner",
            profileImage:
              "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
          },
          {
            name: "Fakrul",
            contribution: 500,
            userType: "Top Renter",
            profileImage:
              "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg",
          },
        ].map((contributor, index) => (
          <div
            key={index}
            className="w-[320px] h-[320px] bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center gap-2 p-6 border border-amber-300"
          >
            {/* Profile Image */}
            <div className="w-[120px] h-[120px] rounded-full border-4 border-yellow-400 overflow-hidden shadow-md hover:scale-105 transition-all duration-300">
              <img
                src={contributor.profileImage}
                alt={contributor.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Contributor Details */}
            <h1 className="text-2xl font-bold text-gray-800">
              {contributor.name}
            </h1>
            <p className="text-lg text-gray-600 font-medium">
              Total Contribution:{" "}
              <span className="font-bold text-yellow-600">
                {contributor.contribution}
              </span>
            </p>
            <p className="text-lg font-bold text-gray-800">
              {contributor.userType}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopContributor;
