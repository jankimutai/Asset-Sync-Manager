import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      icon: 'success',
      title: 'Logged out',
      text: 'You have been successfully logged out.',
    })
    .then(() => {
      navigate('/login'); 
    });
  };

  handleLogout();

  return null;
}

export default Logout;
