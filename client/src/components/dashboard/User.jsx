import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineRight } from 'react-icons/ai';
import { GoPeople } from 'react-icons/go';

function User() {
  const [requests, setRequests] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:5555/requests?q=${search}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setRequests(data);
      });
  }, [search]);

  function handleSearch(e) {
    setSearch(e.target.value);
    console.log(search);
  }

  const [selectAll, setSelectAll] = useState(false);

  function toggleSelectAll() {
    setSelectAll(!selectAll);
    const updatedRequests = requests.map(request => ({ ...request, selected: !selectAll }));
    setRequests(updatedRequests);
  }

  function handleCheckboxChange(id) {
    const updatedRequests = requests.map(request => {
      if (request.id === id) {
        return { ...request, selected: !request.selected };
      }
      return request;
    });
    setRequests(updatedRequests);
  }

  return (
    <div className="px-8 font-[Lato]">
      <div className='flex items-center py-6'>
        <div className='px-2 text-lg md:text-xl lg:text-2xl font-bold'>Dashboard</div>
        <div className='text-lg md:text-xl lg:text-2xl px-2 text-[#989292]'><GoPeople /></div>
        <div className='text-lg md:text-xl lg:text-2xl px-2 text-[#989292]'><AiOutlineRight /></div>
      </div>

      <div>
        <input type="text" onChange={handleSearch} placeholder="Search Here ..." className="w-full px-2 py-2 border hover:bg-[#D0F4F6] border-blue rounded-lg hover::blue" />
      </div>
      <br />
      <h1 className="text-2xl py-4 font-bold mb-1 shadow shadow-gray-800 rounded-lg text-center text-3xl" style={{ background: 'linear-gradient(to right, #1572E8, #08489C)' }}>
        Request Management
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-200 font-bold">
            <tr>
              <th
                scope="col"
                className="px-6 py-2 text-left text-md text-gray-700 uppercase tracking-wider"
              >
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={toggleSelectAll}
                  className="mr-2"
                />
              </th>
              <th
                scope="col"
                className="px-6 py-2 text-left text-md text-gray-700 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-2 text-left text-md text-gray-700 uppercase tracking-wider"
              >
                Description
              </th>
              <th
                scope="col"
                className="px-6 py-2 text-left text-md text-gray-700 uppercase tracking-wider"
              >
                Quantity
              </th> 
              <th
                scope="col"
                className="px-6 py-2 text-left text-md text-gray-700 uppercase tracking-wider"
              >
                Urgency
              </th>
              <th
                scope="col"
                className="px-6 py-2 text-left text-md text-gray-700 uppercase tracking-wider"
              >
                User
              </th>
              <th
                scope="col"
                className="px-6 py-2 text-left text-md text-gray-700 uppercase tracking-wider"
              >
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request, index) => (
              <tr key={request.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}>
                <td className="px-6 py-4 text-md font-medium text-gray-900">
                  <input
                    type="checkbox"
                    checked={request.selected}
                    onChange={() => handleCheckboxChange(request.id)}
                  />
                </td>
                <td className="px-6 py-4 text-md font-medium text-[#4876D8]">
                  {request.asset_name}
                </td>
                <td
                  className="px-6 py-4 text-md text-gray-500"
                >
                  {request.description}
                </td>
                <td className="px-6 py-4 text-md text-gray-500">
                  {request.quantity}
                </td> 
                <td className="px-6 py-4 text-md text-gray-500">
                  {request.urgency}
                </td>
                <td className="px-6 py-4 text-md text-gray-500">
                  {request.user.full_name}
                </td>
                <td className="px-6 py-4 text-md text-green-500">{request.status}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <div className="flex ">
                  {/* <div className="px-4">

                    <button className="bg-red-500 text-white px-4 rounded py-2" onClick={() => { setSelected("read") }}>
                      Read
                    </button>
                  </div> */}
                  <div className="px-4">

                    <Link className="bg-red-400 text-black px-4 hover:bg-red-600 font-bold rounded py-2"
                    to={`/update/${request.request_id}`} >
                      Edit
                    </Link>
                  </div>

                    {/* <Link className="bg-red-500 text-black hover:bg-red-600 font-bold py-2 px-4 rounded"
                    to={`/add-candidate/${request.id}`}
                  >
                    Add Request
                  </Link> */}
                </div>
              </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to={`/add_request`}>Add Request</Link>
      </div>
    </div>
  );
}

export default User;


// parser.add_argument('user_id', type=int, help='User ID', required=True)
// parser.add_argument('asset_name', type=str, help='Asset Name', required=True)
// parser.add_argument('description', type=str, help='Request description')
// parser.add_argument('quantity', type=int, help='Quantity', required=True)
// parser.add_argument('urgency', type=str, help='Urgency', required=True)
// parser.add_argument('status', type=str, help='Request status', required=True)