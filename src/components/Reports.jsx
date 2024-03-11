import React from "react";

const Reports = () => {
  return (
    <div className="container mx-auto my-5 p-8 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-4xl font-bold mb-6 text-center">Reports</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Sample Report Card 1 */}
        <div className="bg-white p-6 rounded-md shadow-md">
          <h3 className="text-lg font-semibold mb-2">Monthly Crime Analysis</h3>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button
            className="mt-4 bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
          >
            View Report
          </button>
        </div>

        {/* Sample Report Card 2 */}
        <div className="bg-white p-6 rounded-md shadow-md">
          <h3 className="text-lg font-semibold mb-2">Annual Safety Statistics</h3>
          <p className="text-gray-600">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button
            className="mt-4 bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
          >
            View Report
          </button>
        </div>

        {/* Sample Report Card 3 */}
        <div className="bg-white p-6 rounded-md shadow-md">
          <h3 className="text-lg font-semibold mb-2">Crime Trends Analysis</h3>
          <p className="text-gray-600">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
          <button
            className="mt-4 bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
          >
            View Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reports;
