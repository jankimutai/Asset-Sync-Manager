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

      {/* Transparent Card */}
      <div className="absolute top-20 inset-x-0 bg-black w-[800px] rounded-lg bg-opacity-40 p-8 flex items-center justify-center">
        {/* Text Overlay */}
        <div className="text-white text-center">
          <h1 className="text-3xl font-bold mb-4">Inventory Management System</h1>
          <p className="text-lg">
            Streamline your inventory processes with our advanced management system. Track, manage, and optimize your
            inventory with ease.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
