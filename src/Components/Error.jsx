import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Error() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);
  useEffect(() => {
    // Perform logout logic
    // Start the countdown timer

    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    // Redirect to login page after the countdown reaches 0
    if (countdown === 0) {
      navigate("/");
    }

    return () => {
      clearInterval(timer);
    };
  }, [navigate, countdown]);

  return (
    <div className="main-container">
      <div className="error">
        <h1>Error: Page not found.</h1>

        <p>You are redirecting to login page in {countdown} seconds.</p>
      </div>
    </div>
  );
}
