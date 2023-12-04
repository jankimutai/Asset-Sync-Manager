import React from 'react';

function Landing() {
  return (
    <div className="relative">
      {/* Image */}
      <img
        src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2FyZWhvdXNlfGVufDB8fDB8fHww"
        alt="Inventory Management System"
        className="w-full h-full rounded-lg"
      />
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-80 w-[700px] rounded-lg p-8 flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-3xl font-bold mb-4">Asset Sync Manager</h1>
          <p className="text-lg">
            Every organization has several assets associated with it, and managing them efficiently is crucial for
            smooth operations. Our Inventory Management System centralizes information and streamlines the asset
            management process.
          </p>
          <ul className="text-left mt-4">
            <li className="mb-2">
              <span className="text-green-500">&#10003;</span> Centralized Data: Easily manage and track assets from
              multiple sources and departments in one centralized system.
            </li>
            <li className="mb-2">
              <span className="text-green-500">&#10003;</span> Request Management: Users can request new assets or repairs
              for their assigned assets, streamlining the approval process.
            </li>
            <li className="mb-2">
              <span className="text-green-500">&#10003;</span> Status Tracking: Monitor the status of asset requests,
              whether pending, approved, or rejected.
            </li>
            <li className="mb-2">
              <span className="text-green-500">&#10003;</span> Authorization: Only authorized personnel, including admin,
              procurement admin, and finance, can access and manage all requests.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Landing;
