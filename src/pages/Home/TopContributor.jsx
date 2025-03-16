import React from "react";

const TopContributor = () => {
  const contributor = {
    name: "Jony Jony",
    profileImage:
      "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
    topContribution: 500,
    contributions: [
      { amount: 500 },
      { amount: 500 },
      { amount: 550 },
      { amount: 550 },
    ],
  };

  return (

    <section className="max-w-4xl mx-auto my-8">
      {/* Container for alignment */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Contributor Card */}
        <div className="bg-white shadow-lg rounded-lg flex flex-col items-center justify-center p-6 w-full">
          <div className="w-[120px] h-[120px] rounded-full border-4 border-yellow-400 overflow-hidden shadow-md hover:scale-105 transition-all duration-300">
            <img
              src={contributor.profileImage}
              alt={contributor.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-lg font-bold text-gray-800">{contributor.name}</h1>
          <p className="text-md text-gray-600">Total Contribution: {contributor.topContribution}</p>
        </div>


        {/* Contribution Table */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border-b w-[50px]">#</th>
                <th className="p-2 border-b">Name</th>
                <th className="p-2 border-b">Contribution</th>
              </tr>
            </thead>
            <tbody>
              {contributor.contributions.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="p-2 text-center">{index + 2}</td>
                  <td className="p-2 flex items-center gap-2">
                    <img
                      src={contributor.profileImage}
                      alt="Avatar"
                      className="w-6 h-6 rounded-full"
                    />
                    {contributor.name}
                  </td>
                  <td className="p-2">{item.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default TopContributor;
