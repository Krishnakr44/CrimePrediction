import React from "react";

const Team = () => {
  const teamMembers = [
    { id: 1, name: "John Doe", role: "Lead Developer", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 2, name: "Jane Smith", role: "Data Scientist", bio: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: 3, name: "Alex Johnson", role: "UX/UI Designer", bio: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris." },
    // Add more team members as needed
  ];

  return (
    <div className="container mx-auto my-5 p-8 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-4xl font-bold mb-6 text-center">Our Team</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <div key={member.id} className="bg-white p-6 rounded-md shadow-md">
            <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
            <p className="text-gray-600 mb-4">{member.role}</p>
            <p className="text-gray-600">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
