import React,{useState,useEffect} from 'react';
import { useParams,useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import "../Styles/asset-item.css"
const AssetItem = () => {
    const [asset, setAsset] = useState([]);
    const { id } = useParams();
    const [editMode, setEditMode] = useState(false);
    const navigate = useNavigate()
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
    const handleEditClick = () => {
        setEditMode(true);
    };
    const handleDelete = async () => {
        try {
          const response = await fetch(`http://127.0.0.1:5555/asset/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json', // Add this line
            },
          });
      
          if (!response.ok) {
            const statusCode = response.status;
            throw new Error(`Cannot delete an assigned asset : ${statusCode}`);
          }
      
          Swal.fire({
            title: 'Success!',
            text: 'Asset deleted successfully',
            icon: 'success',
            confirmButtonText: 'OK',
          });
      
          navigate('/admin/dashboard');
        } catch (error) {
          console.error(error.message);
          Swal.fire({
            title: 'Error!',
            text: `Failed to delete the asset: ${error.message}`,
            icon: 'error',
            confirmButtonText: 'OK',
          });
        }
      };
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch(`http://127.0.0.1:5555/asset/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(asset),
          });
      
          const responseData = await response.json();
          console.log('Response from server:', responseData);
      
          if (!response.ok) {
            const statusCode = response.status;
            throw new Error(`Error updating asset: ${statusCode}`);
          }
      
          Swal.fire({
            title: 'Success!',
            text: 'Asset updated successfully',
            icon: 'success',
            confirmButtonText: 'OK',
          });
        } catch (error) {
          console.error(error.message);
          Swal.fire({
            title: 'Error!',
            text: `Failed to update the asset: ${error.message}`,
            icon: 'error',
            confirmButtonText: 'OK',
          });
        }
      
        setEditMode(false);
      };
  return (
    <section className='asset-item-container'>
        <div className="asset-item-small">
        {editMode ? (
        <form onSubmit={handleFormSubmit}>
            <div>
            <label>
              Asset Name:
              <input
                type="text"
                value={asset.asset_name}
                onChange={(e) => setAsset({ ...asset, asset_name: e.target.value })}
              />
            </label>
            </div>
            <label className="custom-label">
                Model:
                <input
                    className="custom-input"
                    type="text"
                    value={asset.model}
                    onChange={(e) => setAsset({ ...asset, model: e.target.value })}
                />
            </label>
            <br />
            <label className="custom-label">
                IMAGE_URL:
                <input
                    className="custom-input"
                    type="text"
                    value={asset.image_url}
                    onChange={(e) => setAsset({ ...asset, image_url: e.target.value })}
                />
            </label>
            <br />
            <label className="custom-label">
                Date Purchased:
                <input
                    className="custom-input"
                    type="date"
                    value={asset.date_purchased}
                    onChange={(e) => setAsset(prevAsset => ({ ...prevAsset, date_purchased: e.target.value }))}
                />
            </label>
            <br />
            <label className="custom-label">
                Purchase Cost:
                <input
                    className="custom-input"
                    type="number"
                    value={asset.purchase_cost}
                    onChange={(e) => setAsset({ ...asset, purchase_cost: e.target.value })}
                />
            </label>
            <br />
            <label className="custom-label">
                Status:
                <input
                    className="custom-input"
                    type="text"
                    value={asset.status}
                    onChange={(e) => setAsset({ ...asset, status: e.target.value })}
                />
            </label>
            <br />
            <label className="custom-label">
                Category:
                <input
                    className="custom-input"
                    type="text"
                    value={asset.category}
                    onChange={(e) => setAsset({ ...asset, category: e.target.value })}
                />
            </label>
            <br />
            <label className="custom-label">
                Serial Number:
                <input
                    className="custom-input"
                    type="text"
                    value={asset.serial_number}
                    onChange={(e) => setAsset({ ...asset, serial_number: e.target.value })}
                />
            </label>
            
            <br />
            <label className="custom-label">
                Added On:
                <input
                    className="custom-input"
                    type="date"
                    value={asset.added_on}
                    onChange={(e) => setAsset({ ...asset, added_on: e.target.value })}
                />
            </label>
            <button className='button-89' type="submit">Save</button>
          </form>
          ) : (
            <>
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
                <button className='button-89' onClick={handleEditClick} >Edit</button>
                <button className='button-89' onClick={handleDelete}>Delete</button> 
            </> 
        )}
      </div>
    </section>
  );
};

export default AssetItem;
