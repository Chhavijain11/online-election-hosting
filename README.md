# Blockchain-Based Voting System

## Overview
This project implements a blockchain-based voting system using Solidity for smart contracts and Node.js with Express.js for backend API services. It integrates with a frontend built with EJS templates and static files.

## Features
- **Decentralized Voting System:** Ensures transparency and security.
- **User Authentication:** Voters and candidates can register securely.
- **Candidate Management:** Add and retrieve candidate details.
- **Voter Registration:** Generates unique voter IDs and keys.
- **Election Management:** Stores election details and results.
- **Secure Voting Portal:** Voters can cast votes securely.

## Technologies Used
- **Smart Contracts:** Solidity
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ORM)
- **Frontend:** EJS (Embedded JavaScript templates)
- **Blockchain Integration:** Ethereum blockchain
- **Web3 Integration:** Wagmi, RainbowKit
- **Styling:** Material-UI, CSS

## Project Structure
```
root/
│-- backend/
│   │-- server.js
│   │-- app.js
│   │-- app2.js
│   │-- models/
│   │   │-- Add_Candidate_details.js
│   │   │-- Get_registration_details.js
│   │   │-- Voter_login_details.js
│   │   │-- voter_details.js
│   │-- db/
│   │   │-- connectdb.js
│-- frontend/
│   │-- public/
│   │   │-- addc.html
│   │   │-- addv.html
│   │   │-- votingportal.html
│   │-- components/
│   │   │-- Home.js
│   │   │-- Navbar.js
│   │-- App.js
│-- smart_contracts/
│   │-- PMD.sol
│-- README.md
```

## Installation & Setup
### Prerequisites
- **Node.js** (v14+ recommended)
- **MongoDB** (Local or cloud instance)
- **MetaMask or other Web3 wallet**

### Steps to Run
1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-repo/blockchain-voting.git
   cd blockchain-voting
   ```
2. **Install backend dependencies:**
   ```sh
   cd backend
   npm install
   ```
3. **Start MongoDB Server:**
   ```sh
   mongod
   ```
4. **Run the backend server:**
   ```sh
   node server.js
   ```
5. **Start the frontend (React App):**
   ```sh
   cd frontend
   npm start
   ```
6. **Deploy the smart contract (Optional):**
   ```sh
   cd smart_contracts
   truffle migrate --network development
   ```

## API Endpoints
| Method | Endpoint       | Description |
|--------|--------------|-------------|
| GET    | `/`          | Fetch election & registration details |
| POST   | `/addcandidate` | Register a new candidate |
| POST   | `/addvoter` | Register a new voter |
| POST   | `/voterlogin` | Authenticate a voter |

## Smart Contract Functions (PMD.sol)
| Function | Description |
|----------|-------------|
| `addProd()` | Adds a new product |
| `addMan()` | Adds a manufacturer |
| `addDis()` | Adds a distributor |
| `addRet()` | Adds a retailer |
| `SellProd()` | Marks a product as sold |
| `viewstate()` | Checks the current state of a product |

