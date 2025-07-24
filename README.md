# 🔍 GitHub Profile Randomizer

A simple and responsive React app to:

- Fetch random public GitHub user profiles
- Display a customizable number of user cards
- Use GitHub’s REST API to retrieve user data

---

## ✨ Features

- 🎲 **Random GitHub Users** — Get random public users using a random `since` ID
- 🔢 **Custom Count** — Set how many users you want to fetch (e.g., 5, 10, 20)
- 👤 **Profile Cards** — Each card shows:
  - GitHub avatar
  - Username
  - GitHub profile link
- 📱 **Responsive UI** — Works great on both mobile and desktop with plain CSS

---

## 🚀 Live Demo

_**Coming soon...**_

---

## 🧰 Tech Stack

- ⚛️ React.js
- 🧑‍💻 GitHub REST API
- 🎨 CSS (No framework like Tailwind)
- 🌐 Fetch API (or Axios)

---

## 📸 Screenshots

_Add screenshots here (optional)_

---

## 📦 Installation

```bash
git clone https://github.com/your-username/github-profile-randomizer.git
cd github-profile-randomizer
npm install
npm run dev   # or npm start (for CRA)
🔌 API Used
This project uses the GitHub Users API:

nginx
Copy
Edit
GET https://api.github.com/users?since=RANDOM_ID&per_page=COUNT
since – Starting user ID (randomized for variety)

per_page – Number of users to return (max 100)

Example:

bash
Copy
Edit
https://api.github.com/users?since=5000&per_page=10
Returns an array of public users like:

json
Copy
Edit
[
  {
    "login": "octocat",
    "id": 583231,
    "avatar_url": "https://avatars.githubusercontent.com/u/583231?v=4",
    "html_url": "https://github.com/octocat"
  },
  ...
]
🛡️ License
Licensed under the MIT License.

🙌 Acknowledgements
GitHub REST API

React.js Community

📬 Contact
Made with Tushar

yaml
Copy
Edit

---

Let me know if you want any details about this project and support if required
