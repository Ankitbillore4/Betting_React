import React from 'react';

const Login = () => {
  return (
    <>
      <style>
        {`
          body {
            margin: 0;
            font-family: 'Poppins', Arial, sans-serif;
            background-color: #0c0f18; /* Dark gaming-themed background */
          }
          .login-container {
            min-height: 100vh;
            display: flex;
            justify-content: center; 
            align-items: center;
            padding: 20px;
          }
          .login-box {
            display: flex;
            flex-wrap: wrap;
            width: 90%;
            max-width: 900px;
            background: linear-gradient(145deg, #1a1f2e, #242b3e); /* Gradient background */
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
            border: 1px solid #313a50;
          }
          .login-image {
            flex: 1;
            min-height: 400px;
            background-image: url('https://cdn-gnapb.nitrocdn.com/rVKsFrUUJpBqwSXDQLTtMASMDgzFisXl/assets/images/optimized/rev-5584926/www.octalsoftware.com/wp-content/uploads/2023/12/Aviator-Casino-Game-Development.jpg');
            background-position: center;
            background-size: cover;
            border-radius: 15px 0 0 15px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .login-form {
            flex: 1;
            padding: 2rem;
            color: #fff;
            display: flex;
            flex-direction: column;
            justify-content: center;
            min-width: 320px;
          }
          .login-form h2 {
            font-size: 36px;
            font-weight: 600;
            margin-bottom: 20px;
            text-align: center;
            color: #ff6600; /* Vibrant accent color */
            text-shadow: 0 2px 5px rgba(255, 102, 0, 0.8);
          }
          .input-group {
            margin-bottom: 16px;
            position: relative;
          }
          .input-group label {
            display: block;
            margin-bottom: 8px;
            font-size: 14px;
            color: #ddd;
          }
          .input-group input {
            width: 100%;
            padding: 12px 14px;
            border-radius: 6px;
            border: 1px solid #313a50;
            background-color: #1f2537;
            color: #fff;
            font-size: 14px;
            outline: none;
            transition: all 0.3s ease;
          }
          .input-group input:focus {
            background-color: #242b3e;
            border-color: #ff6600;
            box-shadow: 0 0 8px rgba(255, 102, 0, 0.5);
          }
          .input-group input::placeholder {
            color: #95a5a6;
            font-style: italic;
          }
          .login-button {
            width: 100%;
            padding: 14px;
            border: none;
            border-radius: 6px;
            background-image: linear-gradient(to right, #ff6600, #ff3300);
            color: #fff;
            font-size: 18px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 1px;
            box-shadow: 0 4px 10px rgba(255, 51, 0, 0.4);
          }
          .login-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(255, 51, 0, 0.6);
          }
          .login-footer {
            text-align: center;
            margin-top: 20px;
            font-size: 14px;
            color: #bbb;
          }
          .login-footer a {
            color: #ff6600;
            text-decoration: none;
            font-weight: bold;
            transition: color 0.3s ease;
          }
          .login-footer a:hover {
            color: #ff3300;
          }

          /* Neon border effect */
          .neon-border {
            position: relative;
            border: 2px solid transparent;
            background: linear-gradient(145deg, #1f2537, #313a50);
            border-radius: 10px;
            padding: 2px;
          }
          .neon-border::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 10px;
            background: linear-gradient(90deg, rgba(255, 51, 0, 0.5), rgba(255, 102, 0, 0.5));
            z-index: -1;
            filter: blur(4px);
            opacity: 0.7;
            animation: neon-border-flicker 2s infinite alternate;
          }
          @keyframes neon-border-flicker {
            0% {
              opacity: 0.5;
            }
            100% {
              opacity: 1;
            }
          }

          /* Media queries for responsiveness */
          @media (max-width: 768px) {
            .login-box {
              flex-direction: column;
            }
            .login-image {
              min-height: 250px;
              border-radius: 15px 15px 0 0;
            }
            .login-form {
              padding: 1.5rem;
              min-width: 100%;
            }
          }

          @media (max-width: 480px) {
            .login-form h2 {
              font-size: 28px;
            }
            .input-group input {
              padding: 10px;
              font-size: 14px;
            }
            .login-button {
              padding: 12px;
              font-size: 16px;
            }
          }
        `}
      </style>

      <div className="login-container">
        <div className="login-box neon-border">
          <div className="login-image"></div>
          <form className="login-form">
            <h2>Login</h2>

            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="Enter your email" />
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input id="password" type="password" placeholder="Enter your password" />
            </div>

            <button className="login-button">Login</button>

            <div className="login-footer">
              <p>
                Don't have an account? <a href="/register">Register here</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
