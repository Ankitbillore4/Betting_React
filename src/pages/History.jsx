import React from 'react';

const History = () => {
  const mockHistory = [
    { id: 1, amount: 50, multiplier: 2.5, result: "Win" },
    { id: 2, amount: 100, multiplier: 1.8, result: "Loss" },
    { id: 3, amount: 200, multiplier: 3.1, result: "Win" },
  ];

  return (
    <>
      <style> 
        {`
          body {
            margin: 0;
            font-family: 'Roboto', sans-serif;
            background: linear-gradient(135deg, #1d3557, #457b9d);
            color: #f1faee;
          }

          .history-container {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            min-height: 100vh;
            padding: 40px 20px;
          }

          .history-header {
            font-size: 3rem;
            font-weight: 700;
            text-align: center;
            color: #e63946;
            margin-bottom: 30px;
            text-transform: uppercase;
          }

          .history-section {
            width: 100%;
            max-width: 800px;
            background-color: #2a3d52;
            border-radius: 15px;
            padding: 20px;
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
            overflow: hidden;
            margin-bottom: 40px;
          }

          .history-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px;
            border-radius: 10px;
            background-color: #4a6572;
            margin-bottom: 15px;
            transition: transform 0.3s ease, background-color 0.3s ease;
          }

          .history-item:hover {
            transform: translateY(-5px);
            background-color: #3b4d63;
          }

          .history-item:last-child {
            margin-bottom: 0;
          }

          .bet-amount, .bet-multiplier, .bet-result {
            font-size: 18px;
            font-weight: 500;
          }

          .bet-result {
            font-weight: 600;
            text-transform: capitalize;
            padding: 4px 12px;
            border-radius: 5px;
          }

          .bet-result.win {
            background-color: #28a745;
            color: white;
          }

          .bet-result.loss {
            background-color: #e63946;
            color: white;
          }

          .footer {
            margin-top: 40px;
            font-size: 16px;
            color: #f1faee;
            text-align: center;
            max-width: 600px;
          }

          .footer p {
            font-size: 18px;
            margin: 10px 0;
          }

          .footer a {
            text-decoration: none;
            color: #a8dadc;
            font-weight: 500;
          }

          /* Media queries for responsiveness */
          @media (max-width: 768px) {
            .history-header {
              font-size: 2.5rem;
            }

            .history-section {
              width: 100%;
              padding: 15px;
            }

            .footer p {
              font-size: 16px;
            }
          }
        `}
      </style>

      <div className="history-container">
        <h1 className="history-header">Your Bet History</h1>

        {/* History Section */}
        <div className="history-section">
          {mockHistory.map((bet) => (
            <div key={bet.id} className="history-item">
              <div className="bet-amount">Bet: ${bet.amount}</div>
              <div className="bet-multiplier">Multiplier: {bet.multiplier}x</div>
              <div className={`bet-result ${bet.result.toLowerCase()}`}>
                {bet.result}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <div className="footer">
          <p>Keep betting, keep winning! <a href="/dashboard">Go back to Dashboard</a></p>
        </div>
      </div>
    </>
  );
};

export default History;
