import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [formData, setFormData] = useState({
    electricity: 200,
    transport: 'Two-wheeler',
    wasteSegregation: false,
    waterUsage: 'Medium',
    localFood: false
  });
  
  const [showResults, setShowResults] = useState(false);

  const calculateScore = () => {
    let score = 50;
    
    if (formData.electricity > 300) score -= 10;
    else if (formData.electricity < 150) score += 5;
    
    const transportScores = {
      'Public Transport': 10,
      'Two-wheeler': 0,
      'Car': -10
    };
    score += transportScores[formData.transport] || 0;
    
    if (formData.wasteSegregation) score += 10;
    
    const waterScores = { 'Low': 5, 'Medium': 0, 'High': -5 };
    score += waterScores[formData.waterUsage] || 0;
    
    if (formData.localFood) score += 5;
    
    return Math.max(0, Math.min(100, score));
  };

  const getScoreDetails = (score) => {
    if (score <= 40) return { category: 'Poor', color: '#ef4444', emoji: '🔴', benefits: 'No benefits', savings: 0 };
    if (score <= 60) return { category: 'Average', color: '#f59e0b', emoji: '🟡', benefits: 'Standard rates', savings: 0 };
    if (score <= 80) return { category: 'Good', color: '#10b981', emoji: '🟢', benefits: '0.25% loan interest reduction + basic rewards', savings: 15000 };
    return { category: 'Excellent', color: '#8b5cf6', emoji: '⭐', benefits: '0.5% loan interest reduction + premium rewards', savings: 25000 };
  };

  const getSuggestions = () => {
    const suggestions = [];
    if (formData.electricity > 300) suggestions.push('Reduce electricity below 300 units (+10 points)');
    if (formData.transport !== 'Public Transport') suggestions.push('Switch to public transport (+10 points)');
    if (!formData.wasteSegregation) suggestions.push('Start segregating waste (+10 points)');
    if (formData.waterUsage === 'High') suggestions.push('Reduce water consumption (+5 points)');
    if (!formData.localFood) suggestions.push('Choose local/seasonal food (+5 points)');
    return suggestions;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowResults(true);
  };

  const score = calculateScore();
  const scoreDetails = getScoreDetails(score);
  const suggestions = getSuggestions();

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1>🌱 Catalysk</h1>
          <p>Connecting sustainable behavior with financial incentives</p>
        </header>

        <form onSubmit={handleSubmit} className="form">
          <div className="form-grid">
            <div className="input-group">
              <label>Monthly Electricity (kWh)</label>
              <input
                type="number"
                value={formData.electricity}
                onChange={(e) => setFormData({...formData, electricity: Number(e.target.value)})}
                min="0"
                max="1000"
              />
              <small>Average: 150-400 units</small>
            </div>

            <div className="input-group">
              <label>Primary Transportation</label>
              <select
                value={formData.transport}
                onChange={(e) => setFormData({...formData, transport: e.target.value})}
              >
                <option value="Public Transport">Public Transport</option>
                <option value="Two-wheeler">Two-wheeler</option>
                <option value="Car">Car</option>
              </select>
            </div>

            <div className="input-group">
              <label>Water Usage Level</label>
              <select
                value={formData.waterUsage}
                onChange={(e) => setFormData({...formData, waterUsage: e.target.value})}
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>

            <div className="checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={formData.wasteSegregation}
                  onChange={(e) => setFormData({...formData, wasteSegregation: e.target.checked})}
                />
                <span>I segregate waste</span>
              </label>
            </div>

            <div className="checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={formData.localFood}
                  onChange={(e) => setFormData({...formData, localFood: e.target.checked})}
                />
                <span>I consume local/seasonal food</span>
              </label>
            </div>
          </div>

          <button type="submit" className="calculate-btn">
            Calculate My Sustainability Score
          </button>
        </form>

        {showResults && (
          <div className="results">
            <div className="score-card" style={{borderColor: scoreDetails.color}}>
              <div className="score-display">
                <span className="score-number" style={{color: scoreDetails.color}}>
                  {score}
                </span>
                <span className="score-total">/100</span>
              </div>
              <div className="score-category">
                <span className="emoji">{scoreDetails.emoji}</span>
                <span style={{color: scoreDetails.color}}>{scoreDetails.category}</span>
              </div>
            </div>

            <div className="benefits-card">
              <h3>💰 Financial Benefits</h3>
              <p>{scoreDetails.benefits}</p>
              {scoreDetails.savings > 0 && (
                <div className="savings">
                  <strong>Potential Annual Savings: ₹{scoreDetails.savings.toLocaleString()}</strong>
                </div>
              )}
            </div>

            {suggestions.length > 0 && (
              <div className="suggestions-card">
                <h3>📈 Quick Improvements</h3>
                <ul>
                  {suggestions.map((suggestion, index) => (
                    <li key={index}>{suggestion}</li>
                  ))}
                </ul>
                
                {score < 80 && (
                  <div className="potential-impact">
                    <h4>🚀 Potential Impact</h4>
                    <p>Implementing these changes could unlock additional savings of up to <strong>₹10,000/year</strong></p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        <footer className="footer">
          <p><strong>Disclaimer:</strong> Scoring logic is illustrative and not real-world calibrated.</p>
          <p>This prototype demonstrates sustainability-linked financial incentives.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;