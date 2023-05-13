# PantryPal

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![PantryPal Screenshot](./assets/images/dashboard%20main%20use.gif)](https://shopwithpantrypal.herokuapp.com/)

## Description

PantryPal is a full-stack web application that allows users to manage their grocery shopping and pantry lists. The application is built using Node.js, Express.js, MySQL, Sequelize ORM, and Handlebars.js templating engine. It provides a user-friendly interface for adding items to the shopping list, moving them to the pantry list, and tracking their expiration dates.

The goal of this project is to create a real-world full-stack application that showcases our collaborative skills and coding abilities. By building PantryPal, we have applied our knowledge of web development technologies and best practices, including RESTful API design, database management, user authentication, and responsive UI design. This project serves as a valuable addition to our portfolios, demonstrating our ability to work with a team, solve problems, and deliver a polished web application.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)
- [Links](#links)
- [Made By](#made-by)

## Installation on vs code 

To run PantryPal locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/PantryPal.git
   ```

2. Navigate to the project's root directory:

   ```bash
    cd PantryPal
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Set up the database:

  - Create a MySQL database.
  - Update the .env file in the root directory with your database credentials:
      ```bash
      DB_NAME=<your_database_name>
      DB_USER=<your_database_username>
      DB_PASSWORD=<your_database_password>
      ```

5. Seed the database:

   ```bash
   npm run seed
    ```

6. Start the application:

   ```bash
   npm start
    ```

7. Open your browser and navigate to http://localhost:3001.
8. Enjoy PantryPal!

## Usage

1. Sign up or log in to your PantryPal account.
2. Use the search bar to find specific items in the database.
3. Add items to your shopping list by clicking the "Add" button next to the item.
4. View your shopping list and track the days until expiration for each item.
5. Move items from the shopping list to the pantry list by clicking the "Add" button next to the item.
6. View your pantry list and manage the items in it.
7. Delete items from either the shopping list or pantry list.
8. Log out of your PantryPal account when you're done.

## Technologies Used

- Node.js
- Express.js
- MySQL
- Sequelize ORM
- Handlebars.js
- bcrypt
- dayjs
- dotenv

## Features

- User authentication: Users can sign up and log in to their accounts.
- Login expiry: User sessions automatically expire after one day of inactivity.
- Shopping list management: Users can add items to their shopping list.
- Pantry list management: Users can move items from the shopping list to the pantry list.
- Expiration date tracking: Users can see the time remaining before each item in the pantry list expires.
- Search functionality: Users can search for specific items in the database.

## Contributing

Contributions to PantryPal are welcome! If you would like to contribute to the project, please follow these steps:

1. Fork the repository to your own GitHub account.
2. Clone the repository to your local machine.
3. Create a new branch with a descriptive name for your feature or bug fix.
4. Commit your changes to the new branch.
5. Push your changes to your forked repository.
6. Submit a pull request to the main repository, explaining your changes and why they should be merged.

Please ensure that your contributions adhere to the coding standards, follow the project's file structure and naming conventions, and include any necessary documentation or tests.

## License

This project is licensed under the [MIT License](LICENSE).

## Links

- [Repository](https://github.com/sheaschwenn/Pantrypal)
- [Link to PantryPAl](https://shopwithpantrypal.herokuapp.com/)

## Made By

- [Shea Schwenn](https://github.com/sheaschwenn)
- [Sean Tamturk](https://github.com/seantamturk)
- [Kenneth Cruz](https://github.com/Cruzkenneth504)






