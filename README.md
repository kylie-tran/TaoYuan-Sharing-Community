# Taoyuan Sharing Platform 🌱

A community-driven platform for sharing food, clothes, books, and useful items in Taoyuan City. Our mission is to promote sustainability by reducing waste and encouraging the reuse of resources while fostering connections among local residents.

![Platform Banner](https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800)

## 🌟 Features

### Core Functionality
- **Browse Items** - View available donations by category (Food, Clothes, Books, Furniture, Household, Others)
- **Add Donations** - Share your items with the community
- **Search & Filter** - Easily find items by keyword or category
- **Member Ranking** - XP-based leaderboard system (XP = Total Quantity × 10)
- **User Profiles** - Track your donations and statistics

### User System
- **Registration** - Create account with 13 Taoyuan districts
- **Login/Logout** - Secure authentication with session persistence
- **Profile Management** - View your donation history and stats
- **Level System** - Earn XP and level up by donating items

### Categories
- 🍎 Food
- 👕 Clothes
- 📚 Books
- 🪑 Furniture
- 🏠 Household
- ✨ Others

## 🚀 How to Access

### Live Demo
Visit the live platform at: `https://taoyuan-sharing-platform-production.up.railway.app/`

### Local Development
1. Clone the repository:
```bash
git clone https://github.com/yourusername/taoyuan-sharing-platform.git
cd taoyuan-sharing-platform
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm start
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## 📖 How It Works

### Step 1: Login / Register
Create an account to post items and participate in the community

### Step 2: Add Donation
Fill in item details including:
- Item name
- Category
- Quantity
- Pickup area (select from 13 Taoyuan districts)
- Pickup location
- Description
- Image (optional)

### Step 3: Browse & Connect
- All users can view available items
- Search by keyword or filter by category
- Contact donors to arrange pickup

## 🏆 XP & Ranking System

**XP Calculation:** `XP = Total Donated Quantity × 10`

**Level System:**
- Level 1: 0-99 XP
- Level 2: 100-199 XP
- Level 3: 200-299 XP
- And so on...

**Leaderboard Rankings:**
- 🥇 Top 3 members get special badges
- Track: Total Listings, Total Quantity, XP, Level

## 🗺️ Supported Areas

All 13 districts of Taoyuan City:
- Zhongli District (中壢區)
- Taoyuan District (桃園區)
- Pingzhen District (平鎮區)
- Longtan District (龍潭區)
- Yangmei District (楊梅區)
- Bade District (八德區)
- Guishan District (龜山區)
- Daxi District (大溪區)
- Luzhu District (蘆竹區)
- Dayuan District (大園區)
- Xinwu District (新屋區)
- Guanyin District (觀音區)
- Fuxing District (復興區)

## 💻 Technology Stack

### Frontend
- **React** - UI framework
- **Lucide React** - Icon library
- **Tailwind CSS** - Styling framework

### Storage
- **Persistent Storage API** - Data persistence across sessions
- Stores: user accounts, items, session data

### Features
- Responsive design (mobile, tablet, desktop)
- Real-time updates
- Session management
- Search & filter functionality

## 📱 User Guide

### For Donors
1. **Register/Login** to your account
2. Click **"Add Donation"** button
3. Fill in item details and upload image (optional)
4. Submit - your item is now visible to the community!

### For Recipients
1. Browse available items (no login required)
2. Use search or category filters
3. Click on items to view details
4. Contact donor through the platform
5. Arrange pickup at the specified location

## 🔒 Data Privacy

- User passwords are stored securely
- Personal information is only visible to logged-in users
- Email addresses are kept private
- Donation history is only visible to the item owner

## 🌍 Environmental Impact

By using Taoyuan Sharing Platform, you contribute to:
- ♻️ **Reducing waste** - Give items a second life
- 🌱 **Promoting sustainability** - Encourage reuse over disposal
- 🤝 **Building community** - Connect with neighbors
- 💚 **Green lifestyle** - Support responsible consumption

## 📊 Platform Statistics

Track community impact through:
- Total items shared
- Total users registered
- Community ranking
- Individual contribution stats

## 🛠️ Development

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Modern web browser

### Project Structure
```
taoyuan-sharing-platform/
├── src/
│   ├── components/
│   ├── pages/
│   ├── utils/
│   └── App.js
├── public/
├── package.json
└── README.md
```

### Build for Production
```bash
npm run build
```

### Deploy
The platform is deployed on Railway:
```bash
railway up
```

## 🐛 Known Issues

- Map feature is currently in development
- Real-time chat feature coming soon

## 🔮 Future Features

- [ ] Real-time messaging between users
- [ ] Interactive map with pickup locations
- [ ] Push notifications for new items
- [ ] Mobile app (iOS/Android)
- [ ] Image upload functionality
- [ ] Rating and review system
- [ ] Social sharing features
- [ ] Multi-language support (中文/English)

## 🤝 Contributing

We welcome contributions! Please feel free to:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact & Support

- **Website:** https://taoyuan-sharing-platform-production.up.railway.app/
- **Email:** support@taoyuansharing.com
- **GitHub Issues:** Report bugs or request features

## 🙏 Acknowledgments

- Taoyuan City Government for supporting community initiatives
- All community members who donate and share
- Open source libraries and frameworks used in this project

---

**Made with 💚 for the Taoyuan Community**

*Share, Save, Smile - Together we build a greener, more caring Taoyuan!*
