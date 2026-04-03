import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout, sendVerificationEmail } from "../firebase";
import { logout as logoutHandle } from "../store/auth";
import { useNavigate } from "react-router-dom";
import UpdateProfile from "../components/updateProfile";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = async () => {
    await logout();
    dispatch(logoutHandle());
    navigate("/login", {
      replace: true,
    });
  };

  const handleVerification = async () => {
    await sendVerificationEmail();
  };

  if (user) {
    return (
      <div className="max-w-xl mx-auto py-5">
        <h1 className="flex gap-x-4 items-center">
          {user.photoURL && (
            <img src={user.photoURL} className="w-15 h-15 rounded-full" />
          )}
          Oturumun Açık ({user.email})
          <button onClick={handleLogout}>Çıkış Yap</button>
          {!user.emailVerified && (
            <button onClick={handleVerification}>E-posta Doğrula</button>
          )}
        </h1>

        <UpdateProfile user={user} />
      </div>
    );
  }

  return (
    <div>
      <Link to="/register">Kayıt ol</Link>
      <Link to="/login">Giriş Yap</Link>
    </div>
  );
};

export default Home;
