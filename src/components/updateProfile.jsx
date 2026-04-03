import { useState } from "react";
import { update } from "../firebase";

const UpdateProfile = ({ user }) => {
  const [displayName, setDisplayName] = useState("");
  const [avatar, setAvatar] = useState(user?.photoURL || "");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await update({
      displayName,
      photoURL: avatar,
    });
  };

  return (
    <div className="grid gap-y-10">
      <form onSubmit={handleSubmit} className="grid gap-y-4">
        <h1 className="text-xl font-bold mb-4">Profilimi Güncelle</h1>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Ad-soyad
          </label>
          <div>
            <input
              type="text"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-3"
              placeholder="Jan Kretuski"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Fotoğraf
          </label>
          <div>
            <input
              type="text"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-3"
              placeholder="Fotoğraf URL'si"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
            />
          </div>
        </div>
        <button
          className="disabled:opacity-50 disabled:cursor-not-allowed"
          type="submit"
        >
          Güncelle
        </button>
        <form className="grid gap-y-10 mt-15">
          <label className="block text-sm font-medium text-gray-700">
            Parolayı Güncelle
          </label>
          <div>
            <input
              type="password"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-3"
              placeholder="Yeni parolanız"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </form>
        <button
          className="disabled:opacity-50 disabled:cursor-not-allowed"
          type="submit"
        >
          Şifre Güncelle
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
