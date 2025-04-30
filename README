# SaaS design inspiration platform

A backend system for a SaaS design inspiration platform.
This system takes a website URL as input, extracts all internal links from the given page, and gathers detailed information from selected links using Puppeteer. It's designed to help users discover and analyze beautifully designed web pages efficiently.

## Features

- 🔗 Internal Link Extraction – Automatically parses and retrieves all internal links from a given webpage.
- 🤖 Puppeteer-Based Scraping – Uses headless browser automation to extract detailed metadata, screenshots, and design structure.
- 🎯 Selective Crawling – Users can choose which internal links to analyze further for refined results.
- 🧭 Browse All Inspirations – Provides a list of all saved inspirations.
- 🔍 Find by Slug – Retrieve a specific inspiration by its unique slug.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/riships/inspiration.git
   ```
2. Navigate to the project directory:
   ```bash
   cd inspiration
   ```
3. Set Up Environment Variables
    Create a `.env` file inside the `root` directory:
    Add the following environment variables:
    ```sh
    # .env
    DATABASE_URL=mongodb://localhost:27017/inspirations
    PORT=3000
    ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. **Important: MongoDB Replica Set Required (for Prisma)**

    Prisma requires MongoDB to run as a replica set, even for development.
    To enable a single-node replica set locally:
    ```bash
    mongod --replSet rs0 --dbpath /your/db/path
    ```
    Then open a new terminal and run:
    ```bash
    mongo
    > rs.initiate()
    ```




## Usage

Provide instructions on how to use your project:
```bash
npm start
```