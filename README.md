# 🌱 Catalysk Sustainability Score Prototype

*Inspired by Catalysk's vision of connecting sustainable behavior with financial incentives*

## Problem Statement

Traditional financial products don't reward sustainable behavior. This prototype demonstrates how sustainability scores can unlock better financial terms, creating a direct connection between eco-friendly choices and monetary benefits.

## Live Demo

🚀 **[Try the Live Demo](https://your-app-name.vercel.app)** *(Deploy and update this link)*

## Features

### 📊 Simple Sustainability Assessment
- **5 Key Inputs**: Electricity usage, transportation, waste management, water consumption, local food choices
- **Real-time Scoring**: Instant feedback on sustainability performance
- **Clear Categories**: Poor (0-40), Average (41-60), Good (61-80), Excellent (81-100)

### 💰 Financial Incentive Simulation
- **Score-based Benefits**: Higher scores unlock better financial terms
- **Potential Savings**: Shows annual savings up to ₹25,000
- **Improvement Impact**: Demonstrates financial benefits of behavior changes

## How the Score is Calculated

**Base Score**: 50 points

**Adjustments**:
- Electricity > 300 units: -10 points
- Electricity < 150 units: +5 points
- Public transport: +10 points
- Car usage: -10 points
- Waste segregation: +10 points
- High water usage: -5 points
- Low water usage: +5 points
- Local food consumption: +5 points

## Financial Incentive Structure

| Score Range | Benefits |
|-------------|----------|
| 0-40 | No benefits |
| 41-60 | Standard rates |
| 61-80 | 0.25% loan interest reduction + basic rewards (~₹15,000/year) |
| 81-100 | 0.5% loan interest reduction + premium rewards (~₹25,000/year) |

## Quick Start

### Local Development
```bash
npm install
npm start
```

### Deploy on Vercel (Recommended)
1. Push this repo to GitHub
2. Connect to [vercel.com](https://vercel.com)
3. Deploy with one click

### Alternative: Deploy on Netlify
1. Run `npm run build`
2. Drag `build` folder to [netlify.com](https://netlify.com)

## Tech Stack
- **Frontend**: React
- **Language**: JavaScript
- **Styling**: Modern CSS with gradients & animations
- **Deployment**: Vercel/Netlify

## Screenshots

*(Add 2-3 screenshots of the app interface)*

## Important Disclaimer

⚠️ **This scoring logic is illustrative and not real-world calibrated.** 

This prototype demonstrates the concept of sustainability-linked financial incentives. Actual implementation would require:
- Scientific CO₂ calculation methods
- Real financial product integration
- Regulatory compliance
- Data verification systems

## About Catalysk

This prototype was built to demonstrate Catalysk's innovative approach to connecting environmental responsibility with financial benefits, creating win-win scenarios for individuals and the planet.

---

*Built with ❤️ for sustainable finance innovation*