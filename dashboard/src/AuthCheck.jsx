import { useEffect } from "react";

const AuthCheck = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tokenFromURL = params.get("token");

    if (tokenFromURL) {
      localStorage.setItem("token", tokenFromURL);
      window.history.replaceState({}, document.title, "/"); // clean URL
    }

    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "https://investiq-dashboard.onrender.com/login";
    }
  }, []);

  return null;
};

export default AuthCheck;