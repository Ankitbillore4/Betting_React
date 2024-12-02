import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";
import airplaneImage from "../assets/aero.png"; 

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

const Dashboard = () => {
  const [multiplier, setMultiplier] = useState(1.0);
  const [balance, setBalance] = useState(1000);
  const [totalBetAmount, setTotalBetAmount] = useState(0);
  const [graphData, setGraphData] = useState([]);
  const [airplanePosition, setAirplanePosition] = useState(50);

  useEffect(() => {
    const interval = setInterval(() => {
      setMultiplier((prev) => {
        const newMultiplier = Math.max(1, (prev + Math.random() * 0.5).toFixed(2));
        setGraphData((data) => [
          ...data.slice(-20),
          { x: data.length + 1, y: newMultiplier },
        ]);

        const newPosition = Math.max(0, Math.min(100, 50 - (newMultiplier - 1) * 30));
        setAirplanePosition(newPosition);

        return newMultiplier;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const chartData = {
    labels: graphData.map((_, index) => index),
    datasets: [
      {
        data: graphData.map((point) => point.y),
        borderColor: "#ffcc00",
        backgroundColor: "rgba(255, 204, 0, 0.3)",
        tension: 0.4,
        fill: true,
        pointRadius: 0,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `Multiplier: ${tooltipItem.raw.toFixed(2)}x`,
        },
      },
    },
    scales: {
      x: { display: false },
      y: {
        ticks: { color: "#fff" },
        grid: { color: "rgba(255, 255, 255, 0.1)" },
      },
    },
  };

  return (
    <div style={{ background: "linear-gradient(to bottom right, #2c3e50, #4b0082)", color: "#fff", height: "140vh", overflow: "hidden", fontFamily: "Arial, sans-serif" }}>
      {/* Header Section */}
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 30px", background: "linear-gradient(to right, #ffcc00, #f39c12)",
        borderRadius: "20px", boxShadow: "0 5px 15px rgba(0,0,0,0.3)", margin: "20px", transition: "all 0.3s ease-in-out"
      }}>
        <h2 style={{ margin: 0, fontSize: "30px", fontWeight: "bold", color: "#fff" }}>FUN MODE</h2>
        <div>
          <button style={{
            margin: "0 10px", padding: "12px 20px", backgroundColor: "#34495e", color: "#fff", border: "none", borderRadius: "5px", transition: "0.3s ease"
          }}>1.00x</button>
          <button style={{
            margin: "0 10px", padding: "12px 20px", backgroundColor: "#34495e", color: "#fff", border: "none", borderRadius: "5px", transition: "0.3s ease"
          }}>1.30x</button>
          <button style={{
            margin: "0 10px", padding: "12px 20px", backgroundColor: "#34495e", color: "#fff", border: "none", borderRadius: "5px", transition: "0.3s ease"
          }}>1.70x</button>
        </div>
      </div>

      {/* Multiplier Graph */}
      <div style={{
        position: "relative", backgroundColor: "#2c3e50", padding: "20px", borderRadius: "20px", boxShadow: "0 5px 15px rgba(0,0,0,0.3)", height: "45%"
      }}>
        {/* Airplane */}
        <div style={{
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: "-1", display: "flex", justifyContent: "center"
        }}>
          <img src={airplaneImage} alt="Airplane" style={{ width: "120px", opacity: "0.7", transform: "rotate(-12deg)" }} />
        </div>
        <Line data={chartData} options={chartOptions} />
        <div style={{
          position: "absolute", top: `${airplanePosition}%`, left: "50%", transform: "translateX(-50%)", transition: "top 0.5s ease-in-out"
        }}>
          <img src={airplaneImage} alt="Airplane" style={{ width: "80px", opacity: "0.9", transform: "rotate(10deg)" }} />
        </div>
        <div style={{
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", fontSize: "3rem", fontWeight: "bold", color: "#ffcc00"
        }}>
          {multiplier}x
        </div>
      </div>

      {/* Betting Section */}
      <div style={{
        marginTop: "20px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "20px"
      }}>
        {/* Balance Section */}
        <div style={{
          flex: "1 1 45%", padding: "25px", backgroundColor: "#34495e", borderRadius: "15px", boxShadow: "0 5px 15px rgba(0,0,0,0.3)", textAlign: "center"
        }}>
          <h3 style={{ margin: "10px 0", fontSize: "18px", color: "#f39c12", fontWeight: "bold" }}>Balance</h3>
          <p style={{ fontSize: "22px", fontWeight: "bold", color: "#e74c3c" }}>${balance}</p>
          <p style={{ fontSize: "16px", color: "#fff" }}>Total Bet Amount: ${totalBetAmount}</p>
          <p style={{ fontSize: "16px", color: "#fff" }}>Total Deposits: $5000</p>
          <p style={{ fontSize: "16px", color: "#fff" }}>Bonus: $200</p>
          <button style={{
            marginTop: "20px", padding: "12px 30px", backgroundColor: "#e74c3c", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer", transition: "background 0.3s"
          }}>Bet</button>
        </div>

        {/* Winnings Section */}
        <div style={{
          flex: "1 1 45%", padding: "25px", backgroundColor: "#34495e", borderRadius: "15px", boxShadow: "0 5px 15px rgba(0,0,0,0.3)", textAlign: "center"
        }}>
          <h3 style={{ margin: "10px 0", fontSize: "18px", color: "#f39c12", fontWeight: "bold" }}>Winnings</h3>
          <p style={{ fontSize: "22px", fontWeight: "bold", color: "#e74c3c" }}>${(balance * multiplier).toFixed(2)}</p>
          <p style={{ fontSize: "16px", color: "#fff" }}>Last Win: $150</p>
          <p style={{ fontSize: "16px", color: "#fff" }}>Total Winnings: $2200</p>
          <p style={{ fontSize: "16px", color: "#fff" }}>Current Jackpot: $5000</p>
          <button style={{
            marginTop: "20px", padding: "12px 30px", backgroundColor: "#e74c3c", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer", transition: "background 0.3s"
          }}>Claim Winnings</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
