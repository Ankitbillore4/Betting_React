import React from 'react';

const register = () => {
  return (
    <>
      <style>
        {`
          body {
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #121f2d; /* Dark blue gaming background */
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
            max-width: 1100px;
            background-color: #2f3b4c; /* Darker blue for contrast */
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
          }
          .login-image {
            flex: 1;
            min-height: 400px;
            background-image: url('https://insidebitcoins.com/wp-content/uploads/2023/10/aviator.png');
            background-position: center;
            background-size: cover;
            border-radius: 10px 0 0 10px;
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
            font-size: 30px;
            font-weight: bold;
            margin-bottom: 20px;
            text-align: center;
            color: #e74c3c; /* Red accent color for title */
          }
          .input-group {
            margin-bottom: 16px;
          }
          .input-group label {
            display: block;
            margin-bottom: 8px;
            font-size: 14px;
          }
          .input-group input,
          .input-group select {
            width: 100%;
            padding: 12px;
            border-radius: 6px;
            border: none;
            background-color: #34495e;
            color: #fff;
            font-size: 14px;
          }
          .input-group input::placeholder {
            color: #95a5a6;
          }
          .promo-code {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
          }
          .promo-code input {
            width: 80%;
            padding: 12px;
            border-radius: 6px;
            border: none;
            background-color: #34495e;
            color: #fff;
            font-size: 14px;
          }
          .promo-code button {
            width: 18%;
            padding: 12px;
            border: none;
            border-radius: 6px;
            background-color: #27ae60;
            color: #fff;
            cursor: pointer;
            font-size: 14px;
          }
          .login-button {
            width: 100%;
            padding: 14px;
            border: none;
            border-radius: 6px;
            background-image: linear-gradient(to right, #f39c12, #e74c3c);
            color: #fff;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }
          .login-button:hover {
            background-image: linear-gradient(to right, #e74c3c, #f39c12);
          }
          .login-footer {
            text-align: center;
            margin-top: 20px;
            font-size: 14px;
          }
          .login-footer a {
            color: #f39c12;
            text-decoration: none;
            font-weight: bold;
          }
          .login-footer a:hover {
            text-decoration: underline;
          }

          /* Media queries for responsiveness */
          @media (max-width: 768px) {
            .login-box {
              flex-direction: column;
              padding: 20px;
            }
            .login-image {
              min-height: 250px;
              border-radius: 10px 10px 0 0;
            }
            .login-form {
              padding: 1.5rem;
              min-width: 100%;
            }
          }

          @media (max-width: 480px) {
            .login-form h2 {
              font-size: 24px;
            }
            .input-group input,
            .input-group select {
              padding: 10px;
              font-size: 12px;
            }
            .promo-code input {
              padding: 10px;
              font-size: 12px;
            }
            .promo-code button {
              padding: 10px;
              font-size: 12px;
            }
            .login-button {
              padding: 12px;
              font-size: 14px;
            }
          }
        `}
      </style>

      <div className="login-container">
        <div className="login-box">
          <div className="login-image"></div>
          <form className="login-form">
            <h2>Registration</h2>

            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="Enter your email" />
            </div>

            <div className="input-group">
              <label htmlFor="phone">Phone</label>
              <input id="phone" type="tel" placeholder="+91 8123456789" />
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input id="password" type="password" placeholder="Enter your password" />
            </div>

            <div className="input-group">
              <label htmlFor="country">Country</label>
              <select id="country">
                <option>India</option>
                <option>USA</option>
                <option>UK</option>
                <option>Canada</option>
              </select>
            </div>

            <div className="input-group">
              <label htmlFor="currency">Currency</label>
              <select id="currency">
                <option>INR</option>
                <option>USD</option>
                <option>EUR</option>
              </select>
            </div>

            <div className="promo-code">
              <input type="text" placeholder="Add Promo Code" />
              <button>Add</button>
            </div>

            <button className="login-button">Continue</button>

            <div className="login-footer">
              <p>
                Have an account? <a href="/">Login</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default register;
