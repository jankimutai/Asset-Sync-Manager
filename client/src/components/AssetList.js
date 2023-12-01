import React, { useState, useEffect } from 'react';

import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import "../Styles/assets.css";
import { Link } from 'react-router-dom';
const AssetList = () => {
  const [assets, setInventoryData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [assetsPerPage] = useState(3); 

  useEffect(() => {
    fetchInventoryData();
  }, []);

  const fetchInventoryData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5555/assets');
      const data = await response.json();
      setInventoryData(data);
    } catch (error) {
      console.error('Error fetching inventory data:', error);
    }
  };
  const indexOfLastAsset = currentPage * assetsPerPage;
  const indexOfFirstAsset = indexOfLastAsset - assetsPerPage;
  const currentAssets = assets.slice(indexOfFirstAsset, indexOfLastAsset);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
    <>
      <div className="h-auto flex flex-wrap">
      <h1 className="text-3xl font-bold mb-4 w-full text-center">Assets</h1>
        {currentAssets.map((asset) => (
          <div key={asset.id} className="asset-item border p-4 mb-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
            <div className="flex mb-2">
              <img
                src={asset.image_url}
                alt={asset.asset_name}
                className="asset-image max-w-full h-auto"
              />
            </div>

            <h2 className="text-lg font-bold mb-4">{asset.asset_name}</h2>
            <span className='font-bold mr-2'>ID:</span>
            <span>{asset.id}</span>
            <div className="mb-2">
                <span className="font-bold mr-2">Model:</span>
                <span>{asset.model}</span>
            </div>
          
            <Link
                to={`/asset/${asset.id}`}
                className="button-89"
                >
                View Asset
            </Link>
          </div>
        ))}
      </div>

      <div className="pagination flex items-center justify-center mt-4">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l focus:outline-none"
        >
          <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
        </button>
        <span className=" text-gray-700 py-2 px-4 items-center">{currentPage}</span>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === Math.ceil(assets.length / assetsPerPage)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none"
        >
          <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </button>
      </div>
    </>
    </>
  );
};

export default AssetList;
