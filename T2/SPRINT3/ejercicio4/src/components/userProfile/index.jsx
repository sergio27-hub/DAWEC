import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/authContext/index.jsx";
import { doUpdateProfile } from "../../firebase/auth.js";

const Profile = () => {
  const { currentUser } = useAuth();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    // Obtener la información del usuario actual
    console.log("Current user:", currentUser);
    if (currentUser) {
        console.log("Display name:", currentUser.displayName);
        console.log("Phone number:", currentUser.phoneNumber);       
      setFirstName(currentUser.displayName ? currentUser.displayName.split(" ")[0] : "");
      setLastName(currentUser.displayName ? currentUser.displayName.split(" ")[1] : "");
      setPhoneNumber(currentUser.phoneNumber || "");
      setPhotoURL(currentUser.photoURL || "");
    }
  }, [currentUser]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoURL(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Actualizar el perfil del usuario
      await doUpdateProfile({ 
        displayName: `${firstName} ${lastName}`,
        photoURL: `${photoURL}`,
        phoneNumber: `${phoneNumber}`
      });
      // Manejar éxito
      setSuccessMessage("Perfil actualizado exitosamente");
      setTimeout(() => {
        setSuccessMessage(null);
      }, 3000);
    } catch (error) {
      setError(error.message);
    }
  };

  

  return (
    <div className="max-w-md mx-auto mt-20 ">
      <h2 className="text-xl font-semibold mb-4">Perfil de Usuario</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="firstName" className="block">Nombre:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block">Apellido:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="phoneNumber" className="block">Número de Teléfono:</label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="photoURL" className="block">Foto de Perfil:</label>
          <input
            type="file"
            id="photoURL"
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />
          <label htmlFor="photoURL" className="block bg-gray-100 border-2 border-gray-300 rounded-md p-2 cursor-pointer text-center">
            {photoURL ? (
              <img src={photoURL} alt="Foto de perfil" className="h-24 mx-auto mb-2 rounded-full" />
            ) : (
              <span>Elegir foto</span>
            )}
          </label>
        </div>
        {error && <div className="text-red-500">{error}</div>}
        <button type="submit" className="w-full bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Guardar</button>
        {/* Resto del formulario */}
        {successMessage && <div className="text-green-500 mt-8 bg-cyan-950">{successMessage}</div>}
        {/* Resto del código */}
      </form>
    </div>
  );
};

export default Profile;
