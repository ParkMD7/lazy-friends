# Lazy Friends

Lazy Friends is here to help you and your friends decide where to meet up and what you can do.  Sign up, have your friends sign up, create a group and have everyone join. When you're ready, Lazy Friends will find the midpoint of where you and your friends are located and then give you bar and restaurant suggestions in the area.

## Technology Stack

Lazy Friends was written in React with Redux, and utilized a [backend](https://github.com/jessemcready/lazy-friends-backend) written in Rails.  Rails dealt with users and their associations to other users and groups.  React was used as the frontend framework. Redux was used to store our current user and the group that was to be displayed.  Lazy Friends also uses Google's Geocoding, Maps, and Places APIs in order to triangulate your groups midpoint, display a map of the area, and give you suggestions.

## Using the app

Follow the backend link above to clone the Rails section of this app.  After following those instructions to get the server up and running, clone down this repo.  After changing into the directory for Lazy Friends, run either `npm install` or `yarn` to install the node modules, and then run `npm start` or `yarn start`. You'll need to create a config.js file to store your own Google API key for the fetches to work. 

## [Demo Video](https://youtu.be/XpV99A2jCXw)
