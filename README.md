# LinkedIn Admin Dashboard

This project contains an admin panel for a LinkedIn-like social network platform. It enables admin users to manage users, posts, and other content on the platform.

## Features

- 📊 Real-time dashboard statistics
- 👥 User management
- 📝 Content moderation
- 💼 Job listings management
- 📈 Detailed analytics reports
- 🔔 Notification system

## Technologies

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication

### Frontend
- React
- TypeScript
- Bootstrap
- Axios
- Recharts (for charts)

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## API Endpoints

### Auth
- `POST /api/v1/auth/login` - Admin login
- `POST /api/v1/auth/logout` - Logout

### Users
- `GET /api/v1/users` - List all users
- `GET /api/v1/users/:id` - Get user details
- `PUT /api/v1/users/:id` - Update user information
- `DELETE /api/v1/users/:id` - Delete user

### Posts
- `GET /api/v1/posts` - List all posts
- `DELETE /api/v1/posts/:id` - Delete post

### Stats
- `GET /api/v1/stats/total-users` - Get total user count

## Contributing

1. Fork this repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

Sude Sevim - [@sudesevim](https://github.com/sudesevim)

Project Link: [https://github.com/sudesevim/AdminLinkedin](https://github.com/sudesevim/AdminLinkedin) 