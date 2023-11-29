import { useEffect, useState } from 'react';

function Home() {
    const [assets, setAssets] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5555/assets')
            .then((response) => response.json())
            .then((data) => {
                setAssets(data);
            })




            .catch((error) => {
                console.error('Error fetching assets:', error);
            });
    }, []);

    return (
        <div>
            <h1>Assets</h1>
            <ul>
                {assets.map((asset) => (
                    <li key={asset.id}>
                        {asset.asset_name} - {asset.model}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home
