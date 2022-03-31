# MyReads Project

Project Description:
This is the first react app project for udacity learning course, project represet shelves and the books inside each shelf and allow user to change shelf and move books between shelves and also user can search for other books and add them to spcific shelf


* install all project dependencies with `npm install`
* install react router dom with `npm install react-router-dom
* start the development server with `npm start`

Project folder structure:
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── ListShelves.js # List all shelves (Currently Read,Want to Read, Read)
    │   ├── ListBooks.js # List books on each shelve 
    │   └── Books.js # Represent books entity while display all books at spcific shelv or search results
    │   ├── DropListShelves.js # Represent droplist control which allow user to move book on shelves using book api
    │   └── SearchBox.js # Allow user to search for specific book by title using books api
    ├── Components # folder contain project components
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.


