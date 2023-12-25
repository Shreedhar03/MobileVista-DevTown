# Samsung-Alpha

This README provides instructions on how to set up and run the project on your local environment

## Prerequisites

Before running the project, ensure that you have the following installed on your machine:

- Node.js and npm: [Download and Install Node.js](https://nodejs.org/)
- MongoDB: [Download and Install MongoDB](https://www.mongodb.com/try/download/community)
- Git: [Download and Install Git](https://git-scm.com/)

## Clone the repo
```bash
 git clone https://github.com/Shreedhar03/Samsung-DevTown.git
```

## Setting Up the Server

1. Open a terminal and navigate to the 'server' directory:

    ```bash
    cd server
    ```

2. Install server dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the 'server' directory with the following content:

    ```env
    PORT=5000
    MONGO_URL=your_mongo_db_uri
    ```

    Adjust the values as needed.

4. Start the server:

    ```bash
    npm start
    ```

    The server should now be running at http://localhost:5000.

## Setting Up the Client

1. Open another terminal and navigate to the 'client' directory:

    ```bash
    cd client
    ```

2. Install client dependencies:

    ```bash
    npm install
    ```
3. Create a `.env` file in the 'server' directory with the following content:

    ```env
    VITE_FETCH_URL=http://localhost:5000/
    ```

    Adjust the values as needed.
   
4. Start the client:

    ```bash
    npm run dev
    ```

    The client should now be running at http://localhost:5173.

## Running the Full Project

With both the server and client running, you can access the full MERN project by opening a web browser and navigating to http://localhost:5173.

## Additional Information

- The server is configured to connect to the MongoDB database specified in the `.env` file.
- The client is configured to communicate with the server through the API URL specified in the `.env` file.

Feel free to customize the project to fit your specific requirements. If you encounter any issues, refer to the documentation of the individual technologies (MongoDB, Express.js, React.js, Node.js) for troubleshooting.

Happy coding!🚀
