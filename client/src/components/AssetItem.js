import React,{useState,useEffect} from 'react';
import { useParams,useNavigate } from "react-router-dom";
import "../Styles/asset-item.css"
const AssetItem = () => {
    const [asset, setAsset] = useState([]);
    const { id } = useParams();
    
    useEffect(() => {
        fetchInventoryData();
      }, []);
    
      const fetchInventoryData = async () => {
        try {
          const response = await fetch(`http://127.0.0.1:5555/asset/${id}`);
          const data = await response.json();
          setAsset(data);
        } catch (error) {
          console.error('Error fetching inventory data:', error);
        }
    };
  return (
    <section className='asset-item-container'>
        <div className="asset-item-small">
        
        <div className="flex mb-2">
                  <img
                      src={asset.image_url}
                      alt={asset.asset_name}
                      className="asset-image-small"
                  />
              </div>
              <h2 className="text-lg font-bold mb-4">{asset.asset_name}</h2>
  
              <div className="mb-2">
                  <span className="font-bold mr-2">Model:</span>
                  <span>{asset.model}</span>
              </div>
  
              <div className="mb-2">
                  <span className="font-bold mr-2">Manufacturer:</span>
                  <span>{asset.manufacturer}</span>
              </div>
  
              <div className="mb-2">
                  <span className="font-bold mr-2">Date Purchased:</span>
                  <span>{asset.date_purchased}</span>
              </div>
  
              <div className="mb-2">
                  <span className="font-bold mr-2">Purchase Cost:</span>
                  <span>Ksh.{asset.purchase_cost}</span>
              </div>
  
              <div className="mb-2">
                  <span className="font-bold mr-2">Status:</span>
                  <span>{asset.status}</span>
              </div>
  
              <div className="mb-2">
                  <span className="font-bold mr-2">Category:</span>
                  <span>{asset.category}</span>
              </div>
  
              <div>
                  <span className="font-bold mr-2">Serial Number:</span>
                  <span>{asset.serial_number}</span>
              </div>
              <button className='button-89'>Edit</button>
              <button className='button-89'>Delete</button>  
      </div>
    </section>
  );
};

export default AssetItem;
