# Saurus Sims Tumblr Theme!

<img src="https://raw.githubusercontent.com/jtmcgrath/saurussims/master/preview.png" />

## What Is This?

This project is a tumblr theme for [Saurus Sims](https://saurussims.tumblr.com/).

It was originally written using React, but unfortunately the Tumblr API uses rate limiting, and the blog became too popular for us to use the API. It's now been rewritten as a plain Tumblr theme, with some vanilla JavaScript for more custom features, including an integration with Contentful for some custom pages.

If there's time in future, I'll be creating a theme generator, so that the development experience for creating the Tumblr theme itself can approach the level of speed and comfort made possible by modern JS tooling!

## Developing

Install dependencies by navigating to the `theme` directory and running `yarn`!

Copy the `theme/src/variables.example.js` to a new file `theme/src/variables.js`. Enter your Contentful access token and space id into this new file.

_Note that you'll need to implement the correct data structure in Contentful for those features to work. If you'd like to do so, open an issue on the repo and I'll look into copying over the data structure so you can!_

The theme uses `webpack` to bundle JavaScript, and includes a simple `webpack-dev-server` setup to make the development process fast. This includes multiple scripts for different sections of the theme:

#### Downloads Page

`yarn start:downloads`

-   Renders the `downloads` page, which pulls data from `Contentful`.

#### Masonry

`yarn start:masonry`

-   Renders an example of the masonry layout, to confirm that updates to other parts of the theme do not break the masonry integration.

#### Photoset

`yarn start:photoset`

-   Renders a photoset layout.

#### Resources Page

`yarn start:resources`

-   Renders the `resources` page, which pulls data from `Contentful`.

#### Sims Page

`yarn start:sims`

-   Renders the `sims` page, which pulls data from `Contentful`.

## Deployment

Build the project via `yarn build`, and then install just like any other Tumblr theme: copy/paste the `theme.html` into the Tumblr editor, upload the `style.css` and `main.js` files, and publish the theme.
