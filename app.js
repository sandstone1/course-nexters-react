

// ==============================
// STEPS TO QUITING AND THEN RESTARTING TERMINAL
// ==============================

// to get back to the main folder directory, we need to type:
// " cd /Applications/MAMP/htdocs/stoneburyhomes/misc/udemy/advanced_css_and_sass "










// ==============================
// HOMEPAGE SET UP IN PACKAGE.JSON IN ORDER TO RUN THE NEXTERS REACT APPLICATION ON GITHUB PAGES,
// AN APACHE SERVER AND HEROKU
// ==============================


// remember, to change or remove the " homepage " key value pair in the
// nexters-react/package.json file
// for GitHub Pages use / add: "homepage": "https://sandstone1.github.io/nexters-react", to
// the package.json file
// for an Apache server use / add: "homepage": "https://stoneburyhomes.com/nexters_react/", to
// the package.json file
// for Heroku remove the " homepage " key value pair in the package.json file; otherwise.
// heroku will throw and error like: " Uncaught SyntaxError: Unexpected token < " and
// I found the answer to this error on stackoverflow or
// " https://stackoverflow.com/questions/54340240/create-react-app-build-uncaught-syntaxerror-unexpected-token "











// ==============================
// WORKFLOW - LOCALHOST SOLUTION - STEPS TO GETTING A CREATE REACT APP UP AND RUNNING ON HEROKU
// ==============================



// ****************
// STEP 1 - CREATE A GITHUB REPOSITORY FOR THE PROJECT AND CONNECT PROJECT TO GITHUB
// ****************

// after creating a new repository in GitHub I need to connect my GitHub repository to my
// local machine and I do that by typing the following 7 commands in my project root folder and
// for nexters react that project root folder was " Rogers-iMac:nexters-react Home$ " so the
// commands are:

// #1 - git init ( from GitHub documentation ) ( I think create react app may do this for us automatically )

// #2 - git status

// #3 - git add .

// #4 - git add README.md ( from GitHub documentation )

// #5 - git commit -m "first commit" ( from GitHub documentation )

// #6 - git remote add origin git@github.com:sandstone1/nexters_react.git ( from GitHub documentation )
// and if we do #6 twice then we get the following message in the terminal:
// " fatal: remote origin already exists. "

// #7 - git push -u origin master ( from GitHub documentation )
// git push does take some arguments and the first argument is the -u flag and this flag creates
// the association between our local code and the upstream GitHub repository and we only have to
// run the -u flag one time and will never run it again and the next thing we are going to type
// is the remote or " origin " and the then the branch and by default the branch we are going
// to be working with is called " master "


// # Git Commands

// git init - creates a new git repo
// git status - allows us to view changes to our project
// git add . - allows us to add files to the staging area
// git commit -m "Message" - allows us to create a new commit with files from the staging area
// git push - push our changes to GitHub
// git log - allows us to view recent commits
// git pull - pulls the latest changes from GitHub
// git branch - will show us what branches we have and how many we have
// git branch newBranchName - allows us to add a new branch and give it a name
// git checkout newBranchName - move to the newBranchName branch and start working on that branch
// git merge master - merge master with the new branch
// git push origin conflict - if we get a error saying " git push --set-upstream origin conflict "


// updating my GitHub repository going forward:

// " git status "
// " git add . "
// " git commit -m " Message " "
// " git push "



// ****************
// STEP 2 - DELETE MY YARN.LOCK FILE
// ****************



// ****************
// STEP 3 - CREATE OUR HEROKU PROJECT FOR OUR REACT APP
// ****************

// we do that by typing the following in the project root folder in the terminal ( remember to
// replace " nexters-react " below with our current project name ):

// " heroku create nexters-react --buildpack https://github.com/mars/create-react-app-buildpack.git "



// ****************
// STEP 4 - PUSH OUR CHANGES TO OUR PROJECT ON HEROKU
// ****************

// " git push heroku master "



// ****************
// STEP 5 - OPEN OUR REACT APP ON THE HEROKU PROVIDED URL
// ****************

// after we run " git push heroku master " we will see a live log of heroku spinning up
// our project and once heroku is done building our site then heroku will host our
// site and serve it with the following url: " https://nexters-react.herokuapp.com/ "



// ****************
// STEP 6 - CHECK APP AND MAKE SURE IT IS WORKING CORRECTLY
// ****************













// ==============================
// WORKFLOW - LOCALHOST SOLUTION - STEPS TO GETTING A CREATE REACT APP UP AND RUNNING ON NETLIFY
// ==============================



// ****************
// STEP 1 - CREATE A GITHUB REPOSITORY FOR THE PROJECT AND CONNECT PROJECT TO GITHUB
// ****************

// after creating a new repository in GitHub I need to connect my GitHub repository to my
// local machine and I do that by typing the following 7 commands in my project root folder and
// for nexters react that project root folder was " Rogers-iMac:nexters-react Home$ " so the
// commands are:

// #1 - git init ( from GitHub documentation ) ( I think create react app may do this for us automatically )

// #2 - git status

// #3 - git add .

// #4 - git add README.md ( from GitHub documentation )

// #5 - git commit -m "first commit" ( from GitHub documentation )

// #6 - git remote add origin git@github.com:sandstone1/nexters_react.git ( from GitHub documentation )
// and if we do #6 twice then we get the following message in the terminal:
// " fatal: remote origin already exists. "

// #7 - git push -u origin master ( from GitHub documentation )
// git push does take some arguments and the first argument is the -u flag and this flag creates
// the association between our local code and the upstream GitHub repository and we only have to
// run the -u flag one time and will never run it again and the next thing we are going to type
// is the remote or " origin " and the then the branch and by default the branch we are going
// to be working with is called " master "


// # Git Commands

// git init - creates a new git repo
// git status - allows us to view changes to our project
// git add . - allows us to add files to the staging area
// git commit -m "Message" - allows us to create a new commit with files from the staging area
// git push - push our changes to GitHub
// git log - allows us to view recent commits
// git pull - pulls the latest changes from GitHub
// git branch - will show us what branches we have and how many we have
// git branch newBranchName - allows us to add a new branch and give it a name
// git checkout newBranchName - move to the newBranchName branch and start working on that branch
// git merge master - merge master with the new branch
// git push origin conflict - if we get a error saying " git push --set-upstream origin conflict "


// updating my GitHub repository going forward:

// " git status "
// " git add . "
// " git commit -m " Message " "
// " git push "



// ****************
// STEP 2 - DELETE MY YARN.LOCK FILE
// ****************



// ****************
// STEP 3 - CREATE OUR NETLIFY PROJECT FOR OUR REACT APP
// ****************

// there are 4 steps to creating a new site on Netlify

// STEP 1: Connect to GitHub

// I connected Netlify to my GitHub account so now as soon as I push a change to one of my
// repositories on GitHub that change is automatically updated to that same site on Netlify

// STEP 2: Pick a repository

// when creating a new site, Netlify shows me a page that list all of my GitHub repositories and
// by choosing one of my repositories I can create a new site so in this case, I will choose
// my sandstone1/nexters_react repository

// STEP 3: Build options and deploy

// I have 3 build options: (1) what branch do I want to deploy and in this case I want to deploy
// my master branch so " Branch to deploy : master " (2) " Build command : npm run build " (3)
// " Publish directory : build/ "

// STEP 4: Click on the " Deploy site " button



// ****************
// STEP 5 - OPEN OUR REACT APP IN THE NETLIFY PROVIDED URL
// ****************

// once Netlify is done building our site then Netlify will host our site and serve it with
// the following url: " https://nostalgic-shockley-32902e.netlify.com "

// so now my site has been deployed and I have a Netlify generated URL

// NEXT STEPS: Set up a custom domain and then secure my site with HTTPS



// ****************
// STEP 6 - CHECK APP AND MAKE SURE IT IS WORKING CORRECTLY
// ****************



















// ==============================
// MODULES INSTALLED AND UNINSTALLED
// ==============================


// #1
// create react app: I USED NPM HERE INSTEAD OF YARN and in the terminal and within the main folder
// for this course ( Advanced CSS and Sass: Flexbox, Grid, Animations and More ) or
// " Rogers-iMac:advanced_css_and_sass Home$ " type " npx create-react-app nexters-react " and
// remember nexters-react = my-app and then type " cd nexters-react " and then type
// " npm start "
// lecture 105: Project Overview and Setup


// #2
// react-router-dom: " Rogers-iMac:nexters-react Home$ npm install react-router-dom " and this
// will include react-router-dom in our Nexter's react project
// lecture 116: Building the Footer



// #3
// node-sass: " Rogers-iMac:nexters-react Home$ npm install node-sass " and this will include
// sass in our Nexter's react project
// lecture 123: Browser Support for CSS Grid



// #4
// font-awesome: " Rogers-iMac:nexters-react Home$ npm install --save font-awesome " and this
// will include the latest version of font awesome in our Nexter's react project
// lecture 123: Browser Support for CSS Grid



















// ==============================
// SECTION 8: A QUICK INTRODUCTION TO CSS GRID LAYOUTS
// ==============================


// lecture 89: Section Intro

// in this part of the course, we will learn all about CSS Grid and CSS Grid will make building
// layouts very easy and CSS Grid is a game changer for CSS and in this next project we will
// compare Grid to Flexbox and we will use them together in some parts of the project and using
// Flexbox and Grid together is becoming the standard these days









// lecture 90: Why CSS Grid: A Whole New Mindset

// the CSS Grid Module is a brand new module that brings a two dimensional grid system to
// CSS for the first time

// CSS Grid replaces float layouts and Gris makes our CSS and HTML markup more readable and
// logical

// CSS Grid allows us to build much more complicated layouts

// Grid can handle the two dimensional layout parts and Flexbox can handle the one dimensional
// layout parts

// with Grid we can now through CSS frameworks like Bootstrap out the window

// in Grid we have a grid container just like we have a container in flexbox and we create this
// container by setting the display property to grid or " display : grid; " and then all the direct
// children of the grid container are the grid items and in grid we call the x plane the " row axis "
// and we call the y plane the " column axis " and these axes are always the same and the horizontal
// and vertical lines that divide up the grid and seperate the columns and rows are called the
// " grid lines " and the line are automatically numbered for the columns and the rows so

//  1    2    3    4
//                   1
//   BOX  BOX  BOX     => grid track / row
//                   2
//   BOX  BOX  BOX
//                   3
//        grid
//        track /
//        column

// the actually space that is between the rows and columns is called the gutter and the row gutter
// can be different from the column gutter and the space between 2 grid line is called a track, no
// matter if it is horizontal or vertical and the area beteween 2 horizontal and 2 vertical grid lines
// is a " grid area " and each box above represents a " grid cell "


// ==============================
// CSS Grid Properties Overview
// ==============================

// CONTAINER

// 1 => grid-template-rows / grid-template-columns / grid-template-areas and all 3 are part of
// grid-template

// 2 => grid-row-gap / grid-column-gap and both are part of grid-gap

// 3 => justify-items / align-items / justify-content / align-content

// 4 => grid-auto-rows / grid-auto-columns / grid-auto-flow

// ITEM

// 1 => gird-row-start / grid-row-end / grid-column-start / grid-column-end and
// gird-row-start and grid-row-end are part of grid-row and
// grid-column-start and grid-column-end are part of grid-column and
// grid-row and grid-column are part of grid-area

// 2 => justify-self / align-self

// 3 => order





// lecture 91: Quick Setup for this Section

// in this intro section to CSS Grid were going to code up some examples so we can
// learn the basics






// lecture 92: Creating our First Grid



// ==============================
// GO TO LECTURES/LECTURE-92.HTML
// ==============================



// ==============================
// GO TO LECTURES/LECTURE-92.HTML
// ==============================


/*
<!doctype html>

<html lang="en">

<head>
    <meta charset="utf-8">
    <title>CSS Grid Titorial</title>
    <link rel="stylesheet" href="../section-8.css">
</head>

<body>

    <div class="container"> <!-- this will be our grid container -->
        <div class="item item--1">1: Orange</div> <!-- each of these will be our grid items -->
        <div class="item item--2">2: Green</div> <!-- each of these will be our grid items -->
        <div class="item item--3">3: Violet</div> <!-- each of these will be our grid items -->
        <div class="item item--4">4: Pink</div> <!-- each of these will be our grid items -->
        <div class="item item--5">5: Blue</div> <!-- each of these will be our grid items -->
        <div class="item item--6">6: Brown</div> <!-- each of these will be our grid items -->
    </div>

</body>

</html>
*/




// -------------------- END OF FILE




// ==============================
// BACK LECTURES/LECTURE-92.SCSS
// ==============================


/*
// our grid container below and we turn it into a grid container by doing
// " display : grid; "

.container {
    display                : grid;

    // now, define the height of our rows and we will have 2 rows so we
    // do " grid-template-rows : 150px 150px; "

    grid-template-rows    : 150px 150px;

    // let's make 3 columns and make the width of each column 150px or
    // do " grid-template-columns : 150px 150px 150px; " and this created a layout
    // for all 6 grid items

    grid-template-columns : 150px 150px 150px;

    // let's put a gutter in between the items by using grid-gap
    // or " grid-gap : 30px; " and we have used " grid-row-gap : 30px; " and
    // " grid-column-gap : 30px; "

    grid-gap              : 30px; 
    width                 : 1000px;
    margin                : 30px auto;

    background-color : rgba( 238, 238, 238, 1 );
}

// first, give our items some global styles

.item {
    padding : 20px;

    font-family : sans-serif;
    font-size   : 30px;
    color       : rgba( 255, 255, 255, 1 );

    &--1 {
        background-color : orangered; 
    }

    &--2 {
        background-color : yellowgreen;         
    }

    &--3 {
        background-color : blueviolet;         
    }

    &--4 {
        background-color : palevioletred;         
    }

    &--5 {
        background-color : royalblue;        
    }

    &--6 {
        background-color : goldenrod;         
    }
}
*/



// -------------------- END OF FILE






// lecture 93: Getting familar with the fr Unit

// in this lecture, we will learn about the fractional unit 



// ==============================
// GO TO LECTURES/LECTURE-93.HTML
// ==============================



// ==============================
// GO TO LECTURES/LECTURE-93.HTML
// ==============================

// same as lecture-92.html



// -------------------- END OF FILE




// ==============================
// BACK LECTURES/LECTURE-93.SCSS
// ==============================


/*
.container {
    display               : grid;

    // in CSS Grid, we get a new function called repeat and inside the parentheses
    // we first define the number of rows or columns that we want and then the second
    // argument will be the height for rows and width for columns so for
    // grid-template-rows we would do " grid-template-rows : repeat( 2, 150px); " and
    // remember we are creating 2 tracks for the rows and 3 tracks for the columns
    // given the below code

    grid-template-rows    : repeat( 2, 150px );

    // use repeat() for columns as well and if we wanted the third column to be 300px
    // we would do " grid-template-columns : repeat( 2, 150px ) 300px; " or
    // " grid-template-columns : 150px 150px 300px; "

    // what if we wanted to make the third column occupy the rest of our container?
    // and we can do this by using the fractional unit or " fr " and " 1fr " represents a
    // fraction of the available space and by setting the third column to " 1fr " the
    // third column will expand and use up all the available space or in our case the third
    // column will take up all the empty space on the right side and we do this by doing
    // " grid-template-columns : repeat( 2, 150px ) 1fr; "

    // if we wanted all 3 columns to have an equal width we could do the following:
    // " grid-template-columns : repeat( 3, 1fr ); "

    // what if we wanted the second column to be double the size of the first and third
    // columns? in that case we would do the following:
    // " grid-template-columns : 1fr 2fr 1fr; "

    // now we could do "  grid-template-columns : 50% 1fr 1fr; " in which case the first
    // column will take up 50% of the available space and columns 2 and 3 will divide the
    // remaining space equally and remember we have gap in between columns 1 and 2 and
    // columns 2 and 3 so the remaining space is and remember we have
    // ( 500px - 30px - 30px = 440px ) 440 pixels to split equally between columns 2 and 3
    // so both column 2 and 3 will be 220px wide

    // the fr unit also works for grid-template-rows so go to the height key value pair below

    grid-template-columns : repeat( 3, 1fr );
    grid-gap              : 30px;

    // so let's start by setting height equal to 1000px and now we see if have a bunch of empty
    // space below the second row and let's change grid-template-rows above or do
    // " grid-template-rows    : repeat( 2, 1fr ); " and now the two rows have an equal height
    // and take up all the remaining space inside the grid container and our instructor thought
    // the fr unit is way more useful on columns than on rows

    // to finish up let's make the following changes:
    // change grid-template-rows from " grid-template-rows : repeat( 2, 1fr ); " to
    // " grid-template-rows : repeat( 2, 150px ); and
    // change grid-template-columns from " grid-template-columns : 50% 1fr 1fr; " to
    // " grid-template-columns : repeat( 3, 1fr ); and then
    // comment out height below

    // height             : 1000px;
    width                 : 1000px;
    margin                : 30px auto;

    background-color : rgba( 238, 238, 238, 1 );
}


.item {
    padding : 20px;

    font-family : sans-serif;
    font-size   : 30px;
    color       : rgba( 255, 255, 255, 1 );

    &--1 {
        background-color : orangered; 
    }

    &--2 {
        background-color : yellowgreen;         
    }

    &--3 {
        background-color : blueviolet;         
    }

    &--4 {
        background-color : palevioletred;         
    }

    &--5 {
        background-color : royalblue;        
    }

    &--6 {
        background-color : goldenrod;         
    }
}
*/




// -------------------- END OF FILE






// lecture 94: Positioning Grid Items

// in this lecture, we will learn how we can postion items wherever we want on the grid
// and right now all of our grid items are laid out according to their source order



// ==============================
// GO TO LECTURES/LECTURE-94.SCSS
// ==============================



// ==============================
// GO TO LECTURES/LECTURE-94.HTML
// ==============================

// same as lecture-92.html



// -------------------- END OF FILE




// ==============================
// BACK LECTURES/LECTURE-94.SCSS
// ==============================

/*
.container {
    display               : grid;
    grid-template-rows    : repeat( 2, 150px );
    grid-template-columns : repeat( 3, 1fr );

    grid-gap              : 30px;
    // height             : 1000px;
    width                 : 1000px;
    margin                : 30px auto;

    background-color : rgba( 238, 238, 238, 1 );
}


.item {
    padding : 20px;

    font-family : sans-serif;
    font-size   : 30px;
    color       : rgba( 255, 255, 255, 1 );

    &--1 {

        // to move grid item number 1 to cell number 5 and to do that we first use
        // grid-row-start and to move cell 1 to cell 5 we want to the row to start at
        // line number 2 and the row to end at line number 3 or in other words, we are
        // saying the item should be placed in a cell that starts at row line number 2
        // and ends at row line number 3 or " grid-row-start : 2; " and
        // " grid-row-end : 3; "

        // grid-row-start     : 2;
        // grid-row-end       : 3;

        // next, in order to get grid item number 1 into cell number 5, we need to use
        // grid-column-start and grid-column-end and we want the column to start at line
        // number 2 and the column to end at line number 3 or in other words, we are
        // saying the item should be placed in a cell that starts at column line number 2
        // and ends at column line number 3 or " grid-column-start : 2; " and
        // " grid-column-end : 3; " and now we have grid item number 1 in the grid cell
        // that we want

        // grid-column-start : 2;
        // grid-column-end   : 3;

        // however, there is an easier way to write " grid-row-start : 2; " and 
        // " grid-row-end : 3; " and " grid-column-start : 2; " and
        // " grid-column-end : 3; " and the shorthand for the above code is
        // " grid-row : 2 / 3; " and " grid-column : 2 / 3; "

        grid-row    : 2 / 3;
        grid-column : 2 / 3;
        
        background-color : orangered;
        
    }

    &--2 {
        background-color : yellowgreen;         
    }

    &--3 {
        background-color : blueviolet;         
    }

    &--4 {
        background-color : palevioletred;         
    }

    &--5 {

        // now, let's position item 5 in grid cell number 3 and we do that by doing
        // " grid-row : 1 / 2; " and " grid-column : 3 / 4; "

        grid-row    : 1 / 2;
        grid-column : 3 / 4;

        // now we write the above 2 lines of code another way and that is by using
        // grid-area so we would write " grid-area : 1 / 3 / 2 / 4; " so we start by
        // specifing the row line number where we want the grid area to start or line 1
        // and then we specify the column line number where we want the grid area to start
        // or line 3 and then we specify the row line number where we want the grid area to
        // end or line 2 and then we specify the column line number where we want the grid
        // area to end or line 4 but Jonas thinks this way is bit confusing so he prefers using
        // grid-row and grid-column and I agree with his assessment

        // grid-area : 1 / 3 / 2 / 4;

        background-color : royalblue;        
    }

    &--6 {

        grid-row    : 1 / 2;
        grid-column : 2 / 3;        

        background-color : goldenrod;      
    }
}
*/




// -------------------- END OF FILE







// lecture 95: Spanning Grid Items

// let's now learn how to span grid items accross multiple grid cells in order to occupy
// entire areas



// ==============================
// GO TO LECTURES/LECTURE-95.SCSS
// ==============================



// ==============================
// GO TO LECTURES/LECTURE-95.HTML
// ==============================

// same as lecture-92.html



// -------------------- END OF FILE




// ==============================
// BACK LECTURES/LECTURE-95.SCSS
// ==============================

/*
.container {
    display               : grid;
    grid-template-rows    : repeat( 2, 150px );
    grid-template-columns : repeat( 3, 1fr );
    grid-gap              : 30px;
    width                 : 1000px;
    margin                : 30px auto;

    background-color : rgba( 238, 238, 238, 1 );
}


.item {
    padding : 20px;

    font-family : sans-serif;
    font-size   : 30px;
    color       : rgba( 255, 255, 255, 1 );

    &--1 {
        grid-row    : 2 / 3;

        // now suppose we wanted item number 1 to span accross the next
        // cell, thereby spanning across 2 cells and the way we do that is by
        // doing the following: " grid-column : 2 / 4; " and in the process
        // of expanding item 1, we kicked item 4 into the next row and this new row
        // is called an implicit grid and now let's put grid-column back to " 2 / 3 "
        // and then change item number 3 below

        grid-column : 2 / 3;
        z-index     : 1;
        
        background-color : orangered;
        
    }

    &--2 {

        // another way to make item 2 span accross 3 grid cells horizontally is do the
        // following: " grid-column : 1 / span 3; " and when we do that item 2 moves to the
        // third row since items 6, 5, 3 and 1 are all placed explicitly and items 6 and 5
        // are occupying the first row and items 3 and 1 are occupying the second row so
        // unless we specify grid-row for item 2, item 2 will move to the third row

        // another way of making item 2 span to the end of the container is to do the
        // following: " grid-column : 1 / -1; " and anytime we use -1 in this manner the
        // item will span to the end of the container no matter what the first number is

        grid-column : 1 / -1;

        background-color : yellowgreen;         
    }

    &--3 {

        // let's make item number 3 span 2 cells, thereby spanning accross 2 cells and the
        // way we do that by doing the following: " grid-column : 1 / 4; " and by doing that
        // we moved item 3 to the next row because item 1 was already placed in the second
        // cell on the second row so item 3 got bumped to the next row
        
        // now we can keep item 3 in the second row by doing " grid-row : 2 / 3; " and now
        // item 3 covers up item 1 so you can't see item 1 so we can have multiple grid items
        // in the same cell and Jonus said this is important to remember

        // we can make item 1 be on top of item 3 by setting a higher z-index for item 1 such
        // as " z-index : 1; " and see this above and now item 1 will lay on top of item 3 and
        // Jonus said this is a technique that is used quite a lot with CSS Grid and it used
        // for image galleries and stuff like that and of course we can do the same with rows
        // so let's go to item 5 next

        grid-row    : 2 / 3;
        grid-column : 1 / 3;

        background-color : blueviolet;         
    }

    &--4 {
        background-color : palevioletred;         
    }

    &--5 {

        // now let's make item 5 end on row line number 3 instead of row line number 2 and we
        // do " grid-row : 1 / 3; " and by doing that we kicked item 4 to the next row and let's
        // go to item 2 above to see another way of spanning cells

        grid-row    : 1 / 3;
        grid-column : 3 / 4;

        background-color : royalblue;        
    }

    &--6 {
        grid-row    : 1 / 2;
        grid-column : 2 / 3;        

        background-color : goldenrod;      
    }
}
*/




// -------------------- END OF FILE









// lecture 96: Grid Challenge

//



// ==============================
// GO TO LECTURES/LECTURE-96.HTML
// ==============================



// ==============================
// GO TO LECTURES/LECTURE-96.HTML
// ==============================

/*
<!doctype html>

<html lang="en">

<head>
    <meta charset="utf-8">
    <title>CSS Grid Titorial</title>
    <link rel="stylesheet" href="../css/lecture-96.css">
</head>

<body>

    <div class="container"> <!-- this will be our grid container -->

        <div class="item item--header">
            Header
        </div> <!-- each of these will be our grid items -->

        <div class="item item--box--1">
            Small box 1
        </div> <!-- each of these will be our grid items -->

        <div class="item item--box--2">
            Small box 2
        </div> <!-- each of these will be our grid items -->

        <div class="item item--box--3">
            Small box 3
        </div> <!-- each of these will be our grid items -->

        <div class="item item--main-content">
            Main Content
        </div> <!-- each of these will be our grid items -->

        <div class="item item--sidebar">
            Sidebar
        </div> <!-- each of these will be our grid items -->

        <div class="item item--footer">
            Footer
        </div> <!-- each of these will be our grid items -->

    </div>

</body>

</html>
*/



// -------------------- END OF FILE




// ==============================
// BACK LECTURES/LECTURE-96.SCSS
// ==============================

/*
.container {
    display               : grid;
    grid-template-rows    : repeat( 5, 150px );
    grid-template-columns : repeat( 4, 1fr );
    grid-gap              : 20px;
    width                 : 1000px;
    margin                : 30px auto;

    background-color : rgba( 238, 238, 238, 1 );
}



.item {
    padding : 20px;

    font-family : sans-serif;
    font-size   : 30px;
    color       : rgba( 255, 255, 255, 1 );

    &--header {
        grid-row    : 1 / 2;
        grid-column : 1 / 5; // could have been " grid-row : 1 / -1; "
        
        background-color : orangered;
        
    }

    &--box--1 {
        grid-row    : 2 / 3;
        grid-column : 1 / 2;

        background-color : yellowgreen;         
    }

    &--box--2 {
        grid-row    : 2 / 3;
        grid-column : 2 / 3;

        background-color : blueviolet;         
    }

    &--box--3 {
        grid-row    : 2 / 3;
        grid-column : 3 / 4;

        background-color : palevioletred;         
    }

    &--main-content {
        grid-row    : 3 / 5;
        grid-column : 1 / span 3;

        background-color : royalblue;        
    }

    &--sidebar {
        grid-row    : 2 / 5;
        grid-column : 4 / 5;

        background-color : goldenrod;      
    }

    &--footer {
        grid-row    : 5 / 6;
        grid-column : 1 / -1;        

        background-color : grey;      
    }
}
*/




// -------------------- END OF FILE










// lecture 97: Grid Challenge: A Basic Solution

// Jonus is going to show one way to position these grid items as shown in the lecture
// but remember there are other ways to achieve this same layout with CSS Grid and in the
// next 2 lectures Jonus will show us 2 more ways we can achieve the same layout using CSS
// Grid



// ==============================
// GO TO LECTURES/LECTURE-97.HTML
// ==============================



// ==============================
// GO TO LECTURES/LECTURE-97.HTML
// ==============================


/*
<!doctype html>

<html lang="en">

<head>
    <meta charset="utf-8">
    <title>CSS Grid Titorial</title>
    <link rel="stylesheet" href="./lecture-98.css">
</head>

<body>

    <div class="container"> <!-- this will be our grid container -->

        <div class="header"> <!-- each of these will be our grid items -->
            Header
        </div>

        <div class="small-box-1"> <!-- each of these will be our grid items -->
            Small box 1
        </div>

        <div class="small-box-2"> <!-- each of these will be our grid items -->
            Small box 2
        </div>

        <div class="small-box-3"> <!-- each of these will be our grid items -->
            Small box 3
        </div>

        <div class="main-content"> <!-- each of these will be our grid items -->
            Main Content
        </div>

        <div class="sidebar"> <!-- each of these will be our grid items -->
            Sidebar
        </div>

        <div class="footer"> <!-- each of these will be our grid items -->
            Footer
        </div>

    </div>

</body>

</html>
*/





// -------------------- END OF FILE





// ==============================
// BACK LECTURES/LECTURE-97.SCSS
// ==============================


/*
.container {
    display               : grid;
    grid-template-rows    : 100px 200px 400px 100px;
    grid-template-columns : repeat( 3, 1fr ) 200px;
    grid-gap              : 20px;
    width                 : 1000px;
    margin                : 30px auto;

    background-color : rgba( 238, 238, 238, 1 );

    // target all direct children
    > * {
        padding : 20px;

        font-family : sans-serif;
        font-size   : 30px;
        color       : rgba( 255, 255, 255, 1 );

    }

    > .header {
        grid-row    : 1 / 2; // technically, we don't need to do grid-row because of where the
        // header is in the HTML markup but I think it helps clarify things so I'm leaving it
        grid-column : 1 / 5; // could have been " grid-row : 1 / -1; "
        
        background-color : orangered;
    }

    > .small-box-1 {
        grid-row    : 2 / 3;
        grid-column : 1 / 2;

        background-color : yellowgreen;
    }

    > .small-box-2 {
        grid-row    : 2 / 3;
        grid-column : 2 / 3;

        background-color : blueviolet;
    }

    > .small-box-3 {
        grid-row    : 2 / 3;
        grid-column : 3 / 4;

        background-color : palevioletred;
    }

    > .main-content {
        grid-row    : 3 / 4;
        grid-column : 1 / span 3;

        background-color : royalblue;
    }

    > .sidebar {
        grid-row    : 2 / 4; // could have done " grid-row : 2 / span 2; "
        grid-column : 4 / 5;

        background-color : goldenrod;
    }

    > .footer {
        grid-row    : 4 / 5;
        grid-column : 1 / -1;

        background-color : grey;
    }

}
*/





// -------------------- END OF FILE









// lecture 98: Naming Grid Lines

// let's learn how we can position grid items on the grid by naming our grid lines
// and we've learned how to position grid items on the grid by using the automatically
// generated grid line numbers but we can make our lives a bit easier by naming the grid
// lines



// ==============================
// GO TO LECTURES/LECTURE-98.SCSS
// ==============================



// ==============================
// GO TO LECTURES/LECTURE-98.HTML
// ==============================

// same as lecture-97.html



// -------------------- END OF FILE




// ==============================
// BACK LECTURES/LECTURE-98.SCSS
// ==============================


/*
.container {
    display               : grid;

    // now were going to position grid items by using line names and we do that
    // below for " grid-template-rows " and Jonus said this is a good thing to do
    // and developers always name their grid lines

    // so we are naming our row and column tracks and then we are using these names to
    // position our grid items and thereby building our designs and / or layouts by
    // naming our grid lines

    grid-template-rows    : [ header-start ]          100px    // line 1
                            [ header-end box-start ]  200px    // line 2
                            [ box-end main-start ]    400px    // line 3
                            [ main-end footer-start ] 100px    // line 4
                            [ footer-end ];                    // line 5

    // for columns and inside the repeat function, we put " [ col-start ] " after " 3, "
    // and " [ col-end ] " after " 1fr " so for
    // line 1 we will have " col-start 1 " and for
    // line 2 we will have " col-start 2 " and " col-end 1 " and for
    // line 3 we will have " col-start 3 " and " col-end 2 " and for
    // line 4 we will have " col-end 3 " and for
    // line 5 we will have " grid-end "

    grid-template-columns : repeat( 3, [ col-start ] 1fr [ col-end ] ) 200px [ grid-end ];
    grid-gap              : 20px;
    width                 : 1000px;
    margin                : 30px auto;

    background-color : rgba( 238, 238, 238, 1 );

    // target all direct children
    > * {
        padding : 20px;

        font-family : sans-serif;
        font-size   : 30px;
        color       : rgba( 255, 255, 255, 1 );

    }

    > .header {
        grid-row    : header-start / header-end;
        grid-column : col-start 1 / grid-end;
        
        background-color : orangered;
    }

    > .small-box-1 {
        grid-row    : box-start / box-end;
        grid-column : col-start 1 / col-start 2;

        background-color : yellowgreen;
    }

    > .small-box-2 {
        grid-row    : box-start / box-end;
        grid-column : col-start 2 / col-start 3;

        background-color : blueviolet;
    }

    > .small-box-3 {
        grid-row    : box-start / box-end;
        grid-column : col-start 3 / col-end 3;

        background-color : palevioletred;
    }

    > .main-content {
        grid-row    : main-start / main-end;
        grid-column : col-start 1 / col-end 3;

        background-color : royalblue;
    }

    > .sidebar {
        grid-row    : box-start / footer-start; // could have done " grid-row : 2 / span 2; "
        grid-column : col-end 3 / grid-end;

        background-color : goldenrod;
    }

    > .footer {
        grid-row    : footer-start / footer-end;
        grid-column : col-start 1 / grid-end;

        background-color : grey;
    }

}
*/





// -------------------- END OF FILE









// lecture 99: Naming Grid Areas

// the third way to position grid items on the grid is by naming entire grid areas



// ==============================
// GO TO LECTURES/LECTURE-99.SCSS
// ==============================



// ==============================
// GO TO LECTURES/LECTURE-99.HTML
// ==============================

// same as lecture-97.html



// -------------------- END OF FILE




// ==============================
// BACK LECTURES/LECTURE-99.SCSS
// ==============================


/*
.container {
    display               : grid;
    grid-template-rows    : 100px 200px 400px 100px;
    grid-template-columns : repeat( 3, 1fr ) 200px;
    grid-gap              : 20px;

    // let's name the grid areas by using the " grid-template-areas " property and the value
    // will be a template string which represents the grid areas or each grid area and this
    // is a great way to place items on the grid and remember we need to create a complete
    // representation of our grid in order for the grid-template-areas to work

    // now, we can leave empty cells below by just putting a " . " in a cell so for the first
    // row we could do " . header header . " and then the header will just span 2 cells instead
    // of 4 cells and it's Ok to have empty cells in CSS Grid

    // Jonus thinks using grid-template-areas is great for small layouts but for layouts
    // requiring 10 or 15 columns then using grid lines may be a better approach 

                         // col 1  col 2  col 3  col 4
    grid-template-areas : " header header header header "  // row 1
                          " box1   box2   box3   sidebar " // row 2
                          " main   main   main   sidebar " // row 3
                          " footer footer footer footer "; // row 4
    
    width                 : 1000px;
    margin                : 30px auto;

    background-color : rgba( 238, 238, 238, 1 );

    // target all direct children
    > * {
        padding : 20px;

        font-family : sans-serif;
        font-size   : 30px;
        color       : rgba( 255, 255, 255, 1 );

    }

    > .header {

        // define the grid area below to make it effective

        grid-area : header;
        
        background-color : orangered;
    }

    // box 1 is already in the right position so no need to use grid-area here

    > .small-box-1 {
        background-color : yellowgreen;
    }

    // box 2 is already in the right position so no need to use grid-area here

    > .small-box-2 {
        background-color : blueviolet;
    }

    // box 3 is already in the right position so no need to use grid-area here

    > .small-box-3 {
        background-color : palevioletred;
    }

    > .main-content {

        // define the grid area below to make it effective

        grid-area : main; 

        background-color : royalblue;
    }

    > .sidebar {

        // define the grid area below to make it effective

        grid-area : sidebar;

        background-color : goldenrod;
    }

    > .footer {

        // define the grid area below to make it effective

        grid-area : footer;

        background-color : grey;
    }

}
*/





// -------------------- END OF FILE









// lecture 100: Implicit Grids vs Explicit Grids

// in this lecture we will learn about the difference between implicit and explicit grids



// ==============================
// GO TO LECTURES/LECTURE-100.HTML
// ==============================



// ==============================
// GO TO LECTURES/LECTURE-100.HTML
// ==============================


/*
<!doctype html>

<html lang="en">

<head>
    <meta charset="utf-8">
    <title>CSS Grid Titorial</title>
    <link rel="stylesheet" href="./lecture-100.css">
</head>

<body>

    <div class="container"> <!-- this will be our grid container -->

        <div class="item item--1">Modern</div> <!-- each of these will be our grid items -->
        <div class="item item--2">CSS</div> <!-- each of these will be our grid items -->
        <div class="item item--3">with</div> <!-- each of these will be our grid items -->
        <div class="item item--4">flexbox</div> <!-- each of these will be our grid items -->
        <div class="item item--5">and</div> <!-- each of these will be our grid items -->
        <div class="item item--6">Grid</div> <!-- each of these will be our grid items -->
        <div class="item item--7">is</div> <!-- each of these will be our grid items -->
        <div class="item item--8">great</div> <!-- each of these will be our grid items -->

    </div>

</body>

</html>
*/



// -------------------- END OF FILE




// ==============================
// BACK LECTURES/LECTURE-100.SCSS
// ==============================


/*
.container {
    display               : grid;
    grid-template-rows    : 150px 150px;

    // make 2 columns with the same width

    grid-template-columns : repeat( 2, 1fr );

    // if we look at the grid now on the webpage, we see 4 rows and 2 columns
    // and the 4 cells located in the first 2 rows are located in the " explicit grid "
    // because we explicitly defined how these rows and columns should look
    // and the 4 cells located in the last 2 rows are located in the " implicit grid "
    // and if we have more grid items than we have space then CSS Grid will automatically
    // add some more tracks to the grid to accomadate the extra grid items and these items
    // are located in the " implicit grid "

    // now what if we wanted to style the implicit grid? we'll we can by using
    // " grid-auto-rows " and " grid-auto-columns "

    // now the rows in our implicit grid will be 80px high but the rows in our explicit grid
    // will still be 150px high
    
    grid-auto-rows : 80px;

    // remember, there is a property called " grid-auto-flow " and this property is automatically
    // set to " row " and that is why our implicit grid items flowed into 2 additional rows;
    // however, if we set " grid-auto-flow : column " then the additional grid items are added
    // in 2 additional columns versus 2 additional rows because we told our grid to flow as columns

    grid-auto-flow : column;

    // now let's style the implicit columns by doing " grid-auto-columns : 0.5fr " so the implicit
    // columns will be half the size of the explicit columns

    grid-auto-columns : 0.5fr;

    // the implicit grid is great for use cases where you don't really know how many rows or
    // columns you will have in your layout and an example of this could an ajax call to a
    // server and you don't how many items will be returned from the server so the implicit grid
    // can save the day here by allowing you to style the rows or columns that make up the
    // implicit grid and have everything work as expected

    grid-gap              : 30px;
    width                 : 1000px;
    margin                : 30px auto;

    background-color : rgba( 238, 238, 238, 1 );

    // target all direct children
    > .item {
        padding : 20px;

        font-family : sans-serif;
        font-size   : 30px;
        color       : rgba( 255, 255, 255, 1 );

        background-color : orangered;
    }

}
*/





// -------------------- END OF FILE










// lecture 101: Aligning Grid Items

// in this video, we are going to learn about different ways of aligning grid items to grid
// areas



// ==============================
// GO TO LECTURES/LECTURE-101.SCSS
// ==============================



// ==============================
// GO TO LECTURES/LECTURE-101.HTML
// ==============================

// same as lecture-100.html



// -------------------- END OF FILE




// ==============================
// BACK LECTURES/LECTURE-101.SCSS
// ==============================


/*
.container {
    display               : grid;
    grid-template-rows    : 150px 150px;
    grid-template-columns : repeat( 2, 1fr );
    
    grid-auto-rows        : 80px;

    // since we have grid-auto-flow set to row, grid-auto-columns is not functional in
    // this case

    grid-auto-columns     : 0.5fr;
    grid-auto-flow        : row;
    grid-gap              : 30px;

    // remember, by default align-items will align the items on the column axis and
    // if we go " align-items : center; " we will see that the item boxes shrink in size
    // and center themselves vertically inside the grid area

    // remember, align-items is by default set to stretch but could be set to center.
    // end and start and we will use align-items in the big project in the next section
    // in order to achieve some of the layouts that we are looking for

    align-items           : center;

    // now we also have something called " justify-items " and we don't have justify-items
    // in Flexbox because Flexbox is not a 2 deminsional layout system amd justify-items aligns
    // the items on the row axis or aligns the items horizontally and if do
    // " justify-items : center; " and we do " align-items : center; " then the items are
    // completely centered or centered both vertically and horizontally inside the grid area

    // remember, the default for " justify-items " is stretch but justify-items could also be
    // set to center, end and start

    justify-items         : center;

    // in CSS Grid, just like in Flexbox, we have the " align-self " property which overrides
    // the align-items property for one individual item and we have the " justify-self "
    // property which overrides the justify-items property for one individual item and these 2
    // prperties are used inside Grid items so let's go to item 4 to see an example of this

    width                 : 1000px;
    margin                : 30px auto;

    background-color : rgba( 238, 238, 238, 1 );

    // target all direct children
    > .item {
        padding : 20px;

        font-family : sans-serif;
        font-size   : 30px;
        color       : rgba( 255, 255, 255, 1 );

        background-color : orangered;

        // add grid placement for item--4 and item--7

        &--4 {
            grid-row : 2 / span 3;

            // let's try " align-self: start; " and " justify-self : start; " and when I go the
            // web page I see that it is working just fine so this lecture showed us how to align
            // grid items to grid areas both horizontally and vertically

            align-self   : start;
            justify-self : start; 
    
            background-color : royalblue;
        }

        &--7 {
            grid-column : 1 / -1;
    
            background-color : green;            
        }

        // after we add grid placement for item--4 and item--7, we
        // now have 4 implicit grid tracks and 2 explicit grid tracks and
        // now let's take a look at aligning grid items to grid areas and this
        // is very similar to what we can do in Flexbox with the align-items property
        // and just like in Flexbox we apply align-items to the container

    }

}
*/





// -------------------- END OF FILE










// lecture 102: Aligning Tracks

// in this lecture we will learn how to align entire grid tracks to our grid container



// ==============================
// GO TO LECTURES/LECTURE-102.SCSS
// ==============================



// ==============================
// GO TO LECTURES/LECTURE-102.HTML
// ==============================

// same as lecture-97.html



// -------------------- END OF FILE




// ==============================
// BACK LECTURES/LECTURE-102.SCSS
// ==============================


/*
.container {
    display               : grid;
    grid-template-rows    : 100px 100px;
    grid-template-columns : repeat( 2, 200px );
    
    grid-auto-rows        : 80px;
    grid-auto-columns     : 0.5fr;
    grid-auto-flow        : row dense;
    grid-gap              : 30px;

    // align-items           : center;
    // justify-items         : center;

    // now, let's align grid tracks to our grid container and to do that we will need
    // to change grid-template-columns from " grid-template-columns : repeat( 2, 1fr ); " to
    // " grid-template-columns : repeat( 2, 200px ); " and change grid-template-rows from
    // " grid-template-rows : 150px 150px; " to " grid-template-rows : 100px 100px; " and add
    // " height : 1000px; " and now we will see empty space at the bottom on the container and
    // empty space on the right side of the container

    height               : 1000px;

    // now, we will start the process of aligning the grid tracks to the container by declaring
    // the property " justify-content " and this property works in the exact same way as it does
    // in Flexbox and " justify-content " will align the tracks inside the container accross
    // the row axis or align the tracks horizontally so if we do " justify-content : center; "
    // we will see that our grid tracks along the horizontal plane are now in the center or in
    // the middle of the container

    // the values for justify-content are: center, start, end, space-between, space-around and
    // space-evenly and with space-around the space in the middle will be 2x the space on the
    // 2 ends and with space-evenly the space in the middle will equal the space on the 2 ends
    // 

    justify-content      : center;

    // now, we can also align the grid tracks to the container along the vertical plane and
    // to do that we use the " align-content " property and if we do " align-content : center; "
    // then along the vertical plane all of our grid tracks will move to the center or the
    // middle of the container

    // and we have the same value options in align-content as we have in justify-content or we
    // have center, start, end, space-between, space-around and space-evenly

    // if we do " justify-content : center; " and " align-content : center; " then we will see
    // that our grid tracks are centered both horizontally and vertically inside the grid
    // container

    // and with space-between the space in between our row tracks are the same height and the
    // row tracks now occupy the entire height of the container

    // remember, " align-items " and " justify-items " deal with the individual grid items
    // whereas " justify-content " and " align-content " deal with the grid tracks

    // remember, the " align " part of the 4 above names always deals with the vertical axis
    // whereas the " justify " part of the 4 above names always deals with the horizontal axis

    // so now we know how to place our grid items and our grid tracks exactly where we want
    // them to be inside our grid container

    // go to item #6 for the last part of this lecture

    align-content        : center;


    width                : 1000px;
    margin               : 30px auto;

    background-color : rgba( 238, 238, 238, 1 );

    // target all direct children
    > .item {
        padding : 20px;

        font-family : sans-serif;
        font-size   : 30px;
        color       : rgba( 255, 255, 255, 1 );

        background-color : orangered;


        &--4 {
            grid-row : 2 / span 3;

            // align-self   : start;
            // justify-self : start; 
    
            background-color : royalblue;
        }

        &--6 {

            // remember, the automatic placement algorithm trys to place grid items in the same
            // sequence as the source code and sometimes this will create some holes or empty
            // cells in our grid container and let's see how we can fix this but first in item
            // 4 comment our "  align-self : start; " and " justify-self : start; "

            // and the way to fix or fill up our empty holes is change " grid-auto-flow : row; "
            // to " grid-auto-flow : row dense; " and " dense " will tell the automatic placement
            // algorithm that we want a more dense grid with no holes or empty cells and after
            // I reviewed the web page I see that we now have no holes or empty cells inside
            // our grid and this can be useful for image galleries

            // next we will cover a couple more advanced grid topics over the next 2 lectures

            grid-row : 2 / span 2;

            background-color : black;
        }

        &--7 {
            grid-column : 1 / -1;
    
            background-color : green;            
        }

    }

}
*/





// -------------------- END OF FILE










// lecture 103: Using min-content, max-content and the minmax() function

// in this lecture, were going to learn min-content, max-content and the minmax() function



// ==============================
// GO TO LECTURES/LECTURE-103.HTML
// ==============================



// ==============================
// GO TO LECTURES/LECTURE-103.HTML
// ==============================


/*
<!doctype html>

<html lang="en">

<head>
    <meta charset="utf-8">
    <title>CSS Grid Titorial</title>
    <link rel="stylesheet" href="./lecture-103.css">
</head>

<body>

    <div class="container"> <!-- this will be our grid container -->

        <div class="item item--1">Modern</div> <!-- each of these will be our grid items -->
        <div class="item item--2">CSS</div> <!-- each of these will be our grid items -->
        <div class="item item--3">with</div> <!-- each of these will be our grid items -->
        <div class="item item--4">flexbox</div> <!-- each of these will be our grid items -->
        <div class="item item--5">and</div> <!-- each of these will be our grid items -->
        <div class="item item--6">Grid</div> <!-- each of these will be our grid items -->
        <div class="item item--7">is</div> <!-- each of these will be our grid items -->
        <div class="item item--8">
            great and amazing and just fantasicawesome to work with and we will see this
        </div> <!-- each of these will be our grid items -->

    </div>

</body>

</html>
*/



// -------------------- END OF FILE




// ==============================
// BACK LECTURES/LECTURE-103.SCSS
// ==============================


/*
.container {

    // first, let's define our explicit grid or the grid that we define
    // with " grid-template-rows " and " grid-template-columns " and if we do
    // " grid-template-rows : 150px 150px; " then the first 2 rows are part of the
    // explicit grid and the remaining rows are part of the implicit grid
    
    // now let's look at max-content and if we do
    // " grid-template-columns : max-contnet 1fr 1fr 1fr; " then we will see that the
    // first column or the first column track is only as wide as the content inside
    // the cells
    
    // remember, max-content tries to avoid making any line breaks so if we did
    // " grid-template-columns : max-contnet 1fr 1fr max-content; " and then added a
    // bunch of content to item 8 in the html markup, for example, the width of item 8
    // would expand horizontally and would not create a line break so as item 8 gets
    // wider it squeezes the other column tracks, except the first column track since
    // in our example the first column track already has " max-content " declared so it
    // will not shrink but the other column tracks will shrink

    // now if we do " grid-template-columns : max-contnet 1fr 1fr min-content; " we will
    // see that " min-content " causes the last column track to become as wide as the largest
    // word inside the cells of the last column track and in our case, that word is
    // " fantasicawesome " and fantasicawesome will determine the width of the last column track
    // and min-content does allow line breaks and in this example, our text overflows the second
    // row on a vertical basis so to fix that we can use min-content on grid-template-rows

    // so to fix the vertical overflow situation, let's change grid-template-rows from
    // " grid-template-rows : 150px 250px; " to " grid-template-rows : repeat( 2, min-content ); "
    // and now if we look at the web page we see that the content in item 8 is no longer
    // overflowing and the content now fits neatly inside the cell

    // also, " grid-template-rows : repeat( 2, min-content ); " caused the first row to shrink
    // and be just high enough to fit the content

    // now, we could do " grid-template-rows : 150px min-content; " and this would create some
    // brething room for the first row

    // now, if we wanted to keep the first row at 150px but also make sure that the row does
    // not overflow if we add a bunch of content to item 4, for example, then we can use the
    // " minmax() " function and with this function we pass in 2 values and CSS will ensure
    // that the track will stay within these 2 values so we could change grid-template-rows
    // from " grid-template-rows : 150px min-content; " to 
    // " grid-template-rows : repeat( 2, minmax( 150px, min-content ) ); " and this will ensure
    // that the rows will be at least 150px high but no higher than min-content and if we
    // go to the web page we will see that the first row is 150px high and the second row is
    // 180px high, which is the same height as min-content

    // let's work on another example of the minmax() function but this time let's use the
    // minmax() function on columns and we will go with 4 columns but first let's change the
    // content in item 8 to be " great " 
    
    // now, let's say we want the first column to be between 200px and 300px and the other
    // 3 columns to have the same width and we want the 4 columns to fill up the container
    // horizontally so to do this will do the following:
    // " grid-template-columns : minmax( 200px, 300px ) repeat( 3, 1fr ); " and now column
    // 1 will be 300px and columns 2 - 4 will be 233.33px and now the total width of the 4
    // columns is 1000px and this is the same width as our container

    display               : grid;
    grid-template-rows    : repeat( 2, minmax( 150px, min-content ) );
    grid-template-columns : minmax( 200px, 50% ) repeat( 3, 1fr );
    
    // now, let's change the width from 1000px to 90% or 90% of the viewport width and
    // if we go to the web page we will now see column 1 is still 300px but columns 2 - 4
    // are now 663.19px wide and we see that the container takes up 90% of the viewport
    // width, which is expected

    // we will use the minmax() function all the time

    // now let's do another example and this time grid-template-columns will change from
    // " grid-template-columns : minmax( 200px, 300px ) repeat( 3, 1fr ); " to
    // " grid-template-columns : minmax( 200px, 50% ) repeat( 3, 1fr ); " so the first
    // column will be at lease 200px wide but the first column could be as wide as 50% of
    // the entire container so now column 1 is 1144.80px wide and columns 2 - 4 are each
    // 381.59px wide and the total width of columns 2 - 4 is 1144.77px which is the same
    // as column 1 ( give or take some rounding differences ) and this result is expected
    // and remember, the width of column 1 will always be 50% of the container until the
    // viewport shrinks to such a size that column 1 starts shrinking too and if the viewport
    // shrinks enough then column 1 will end up being 200px wide

    // we could also do " grid-template-columns : minmax( 200px, 1fr ) repeat( 3, 1fr ); "
    // and in this case column 1 will be same size as columns 2 - 4 but if the viewport
    // shrinks enough then column 1 will end up being 200px wide and columns 2 - 4 will end
    // up with a width that is less than 200px

    // remember, a fractional unit fills up the remaining space inside the container but the
    // fractional unit is never smaller than the minimum content of a row or column

    // if we change the content in item 8 to " great and amazing and just fantasicawesome
    // to work with and we will see this " then we will see row 1 is 150px high and row 2
    // is 180px high and 180px matches the min-content of item 8 and the width of column 1 is
    // 50% of the container width and columns 2 - 4 are all the exact same width

    width                : 90%;


    margin               : 30px auto;

    background-color : rgba( 238, 238, 238, 1 );

    // target all direct children
    > .item {

        padding : 20px;

        font-family : sans-serif;
        font-size   : 30px;
        color       : rgba( 255, 255, 255, 1 );

        background-color : orangered;

        &--1 {
            
            background-color : orangered;
            
        }
    
        &--2 {

            background-color : yellowgreen;
      
        }
    
        &--3 {
    
            background-color : blueviolet;
   
        }
    
        &--4 {
    
            background-color : palevioletred;
    
        }
    
        &--5 {
    
            background-color : royalblue;
   
        }
    
        &--6 {
    
            background-color : goldenrod;
  
        }
    
        &--7 {
    
            background-color : grey;

        }

        &--8 {
    
            background-color : black;

        }

    }

}
*/





// -------------------- END OF FILE









// lecture 104: Responsive Layouts with auto-fit and auto-fill

// in this lecture, we will learn all about the auto-fit and auto-fill keywords and how
// to build responsive layouts without using media queries



// ==============================
// GO TO LECTURES/LECTURE-104.HTML
// ==============================



// ==============================
// GO TO LECTURES/LECTURE-104.HTML
// ==============================


/*
<!doctype html>

<html lang="en">

<head>
    <meta charset="utf-8">
    <title>CSS Grid Titorial</title>
    <link rel="stylesheet" href="./lecture-104.css">
</head>

<body>

    <div class="container"> <!-- this will be our grid container -->

        <div class="item item--1">Modern</div> <!-- each of these will be our grid items -->
        <div class="item item--2">CSS</div> <!-- each of these will be our grid items -->
        <div class="item item--3">with</div> <!-- each of these will be our grid items -->
        <div class="item item--4">flexbox</div> <!-- each of these will be our grid items -->
        <div class="item item--5">and</div> <!-- each of these will be our grid items -->
        <div class="item item--6">Grid</div> <!-- each of these will be our grid items -->
        <div class="item item--7">is</div> <!-- each of these will be our grid items -->
        <div class="item item--8">great</div> <!-- each of these will be our grid items -->

    </div>

</body>

</html>
*/



// -------------------- END OF FILE




// ==============================
// BACK LECTURES/LECTURE-104.SCSS
// ==============================


/*
.container {

    display               : grid;
    grid-template-rows    : repeat( 2, minmax( 150px, min-content ) );

    // first change item 8 inside the html file
    
    // we can use auto-fill in grid-template-columns so instead of doing
    // " grid-template-columns : repeat( 4, 100px ); ", let's say we wanted to have all 8
    // columns on the first row and we could do that by doing
    // " grid-template-columns : repeat( 8, 100px ); " but instead of writing 8 inside the
    // repeat function, let's say we wanted this to happen automatically and we can do that
    // by using auto-fill or " grid-template-columns : repeat( auto-fill, 100px ); " and now
    // CSS Grid will automatically create 10 column tracks for us on the first row of the
    // grid and the reason we have 10 tracks is because each column track is 100ox wide
    // and the width of the container is 1000px

    // again, auto-fill will create as many tracks as possible given the width specified by
    // grid-template-columns and width of the container or the height specified by
    // grid-template-rows and the height of the container

    // now if we replace " auto-fill " with " auto-fit " inside grid-template-columns then what
    // will happen is that we will still have 10 columns tracks in the auto-fit example but the
    // last 2 column tracks in the auto-fit example will collapse and the last 2 column tracks
    // will get a width of 0, which will create empty space on the right side of the container
    // and we can fill this empty space if we want and we will do that next

    // now we can do something really great by adding the minmax() function to
    // grid-template-columns or " grid-template-columns : repeat( auto-fit, minmax( 100px, 1fr ); "
    // and what happens here is that all 8 columns tracks can now expand to 1fr and by doing this
    // the column tracks fill up the entire container on the horizontal plane and remember because
    // of the minmax() function our column tracks will be at least 100px wide but no wider than
    // 1fr

    grid-template-columns : repeat( auto-fit, minmax( 200px, 1fr ) );
    
    // now, let's look at another example where the width is 90% instead of 1000px and when
    // we shrink the viewport we will see each item's width become smaller and smaller and when
    // we shrink the viewport enough each item's width becomes less than 100px wide and
    // in that case the last item will move to the second row

    // now if we change " grid-template-columns : repeat( auto-fit, minmax( 100px, 1fr ) ); "
    // to " grid-template-columns : repeat( auto-fit, minmax( 200px, 1fr ) ); " we will see
    // even more items move to the second row

    // now if we decrease the viewport enough we will see that some of our grid items are
    // now flowing into a third row or they are flowing into the implicit grid and we can
    // style the implicit grid by using the following properties: grid-auto-rows,
    // grid-auto-columns and grid-auto-flow
    
    // so let's now fix the third row height by adding " grid-auto-rows : 150px; "

    // Jonus said as we can see we get a really responsive layout without adding a single
    // media query and we will use auto-fit and the minmax() function in grid-template columns
    // or " grid-template-columns : repeat( auto-fit, minmax( 200px, 1fr ) ); " to build
    // our layouts in the next section

    grid-auto-rows       : 150px;
 
    width                : 90%;
    margin               : 30px auto;

    background-color : rgba( 238, 238, 238, 1 );

 
    // target all direct children
    > .item {
        padding : 10px;

        font-family : sans-serif;
        font-size   : 30px;
        color       : rgba( 255, 255, 255, 1 );

        background-color : orangered;

        &--1 {
            
            background-color : orangered;
            
        }
    
        &--2 {

            background-color : yellowgreen;
      
        }
    
        &--3 {
    
            background-color : blueviolet;
   
        }
    
        &--4 {
    
            background-color : palevioletred;
    
        }
    
        &--5 {
    
            background-color : royalblue;
   
        }
    
        &--6 {
    
            background-color : goldenrod;
  
        }
    
        &--7 {
    
            background-color : grey;

        }

        &--8 {
    
            background-color : black;

        }

    }

}
*/





// -------------------- END OF FILE











// ==============================
// SECTION 9: NEXTER PROJECT - MASTER CSS GRID LAYOUTS
// ==============================




// lecture 105: Project Overview and Setup


// first, install create react app in the nexters react project

// #1
// create react app: I USED NPM HERE INSTEAD OF YARN and in the terminal and within the main folder
// for this course ( Advanced CSS and Sass: Flexbox, Grid, Animations and More ) or
// " Rogers-iMac:advanced_css_and_sass Home$ " type " npx create-react-app nexters-react " and
// remember nexters-react = my-app and then type " cd nexters-react " and then type
// " npm start "
// lecture 105: Project Overview and Setup

// now open up the package.json file and let's review the package.json file first:

// PACKAGE.JSON
/*
{
  "name": "nexters-react",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.3.2",
    "@testing-library/user-event": "^7.1.2",
    "react": "^16.12.0",
    "react-dom": "^16.12.0",
    "react-scripts": "3.4.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
*/

// my nexters-react file structure after installing create react app and
// " Creating a new React app " inside my nexters-react folder is as follows:

// FILE STRUCTURE
/*
-nexters-react
    -node_modules
    -public
        -favicon.ico
        -index.html
        -logo192.png
        -logo512.png
        -manifest.json
        -robots.txt
    -src
        -App.css
        -App.js (is like our AppRouter.js file in our expensify app)
        -App.test.js
        -index.css
        -index.js (is like our app.js file in our expensify app)
        -logo.svg
        -serviceWorker.js
        -setupTests.js
    -.gitignore
    -package.json
    -readme.md
    -yarn.lock
*/


// and we see that inside package.json we have react and
// react-dom as well as this other library called " react-scripts " and react-scripts helps make
// create react so great because it allows us to not worry about babel and webpack and it includes
// the following 4 scripts:  "start": "react-scripts start",  "build": "react-scripts build",
// "test": "react-scripts test", "eject": "react-scripts eject" and it calls react-scripts to do
// those 4 things and " start " is what starts our project and let's try this out in the terminal
// by typing " npm start " and after I typed " npm start " a new window open up in my Chrome
// browser and this is serving up a sample application of react inside my localhost or
// localhost:3000 and this means we have a working react app and our application lives inside the
// " src " folder and all of the react code we write for our application will go into the " src "
// folder and the " public " folder will contain all of the files that our older browsers need to
// have in order to run our application so when we call npm build in the terminal or the build
// script what create react app is going to do is turn all the react code in our src folder into a
// version that older browsers can understand and put those files in our " public " folder and 
// " test " runs the test code we are going to write and " eject " will take out all the
// configuration files that are hidden from us ( such as Babel and Webpack ) and let us manage
// those files ourselves


// Andrei's comments on our index.html file inside our public folder:

// and the div with the ID of 'root' is the entry way for our application and one of the great
// things about create react app is that if we make any changes to any of our files those changes
// will automatically update inside our localhost site and this means we do have to worry about
// refreshing anything and we can just code and see those changes rendered immediately so let's
// now get started with converting the standard create react app site into our nexters react
// site



// first, let's test " npm start " in the terminal by doing 
// " Rogers-iMac:nexters-react Home$ npm start " and the result was:



/*
? Something is already running on port 3000. Probably:
  crown_clothing (pid 700)
  in /Applications/MAMP/htdocs/stoneburyhomes/misc/udemy/complete_react_developer_in_2019/crown_clothing

Would you like to run the app on another port instead? (Y/n) 
*/



// and I pressed Y and the result was:



/*
Compiled successfully!

You can now view nexters-react in the browser.

  Local:            http://localhost:3001
  On Your Network:  http://10.210.72.36:3001

Note that the development build is not optimized.
To create a production build, use yarn build.
*/



// so for nexter-react, I will be working from " http://localhost:3001 "







// the information below is lecture 18 from Andrei Neagoie's react course and I included it
// below for reference:


// ==============================
// ANDREI NEAGOIE'S REACT COURSE - EXCEPTS FROM LECTURE 18 - START
// ==============================


// lecture 18: React Project Setup

// Andre is the instructor for this lecture and he wants to spend a moment looking at what create
// react app give us and we saw in the previous video that we have this package.json file and we
// saw that we have certain commands availble to us like " start " " build ", etc. and npm is a
// package manager and essentially a way for us to automate the process of installing, upgrading,
// configuring and removing any libraries and I can pull up the site directly by going to
// localhost:3000 and the other thing I want to talk about is " npm run build " and first take
// a look at our src folder and this is our workbench for our application but the browser does
// not understand the files inside the src folder and after we run " npm run build " we see the
// following in the terminal:

// I ran " npm run build " from Rogers-iMac:nexters-react Home$ and this is what resulted
// in the terminal

/*
Creating an optimized production build...
Compiled successfully.

File sizes after gzip:

  39.84 KB  build/static/js/2.29e51fcd.chunk.js
  777 B     build/static/js/runtime-main.da903dcb.js
  636 B     build/static/js/main.b156c5ad.chunk.js
  556 B     build/static/css/main.d1b05096.chunk.css

The project was built assuming it is hosted at /.
You can control this with the homepage field in your package.json.

The build folder is ready to be deployed.
You may serve it with a static server:

  yarn global add serve
  serve -s build

Find out more about deployment here:

  bit.ly/CRA-deploy
*/



// now we have a build folder and the files in the build folder include the following:

// BUILD FOLDER
/*
-build
    -static
        -css
            -main.d1b05096.chunk.css
            -main.d1d05096.chunk.css.map
        -js
            -2.29e51fcd.chunk.js
            -2.29e51fcd.chunk.js.LICENSE.txt
            -2.29e51fcd.chunk.js.map
            -main.b156c5ad.chunk.js
            -main.b156c5ad.chunk.js.map
            -runtime-main.da903dcb.js
            -runtime-main.da903dcb.js.map
        -media
            -logo.5d5d9eef.svg
    -asset-manifest.json
    -favicon.ico
    -index.html
    -logo192.png
    -logo512.png
    -manifest.json
    -precache-manifest.0977b33e21c1e25f051b2...
    -robots.txt
    -service-worker.js
*/

// and we can look at our index.html and see in the build folder index.html has been minified
// and inside the build folder is all the code we wrote in the src folder but it has been optimized
// for us and converted into something the browser understands and what we want to do now is take
// this build folder and put it on a server and we will go over deployment later on in the course
// and remember create react app uses babel and webpack and babel will take our ES6 and higher code
// and convert it into something older browsers will understand and webpack is a module bundler and
// lets us write modular code so webpack is taking all of our JavaScript files and bundling them
// together and optimizing them for production and we have a team of smart FB developers that are
// making all this work behind the scenes and create react app is a CLI or command line interface
// and create react app allows us start a project quickly and have all the configuration and
// optimization done for us so that we build really nice performance driven applications so we will
// use the build folder to deploy our application and the src folder is our workspace

// now let's go back to package.json and package.json allows us to have a package manager and we
// could install Google's material UI, for example, and it would get added to our package.json
// file and we will be exploring create react app throughout the course but the last thing we need
// to discuss in this video is what react is doing underneath the hood and if we go to the public
// folder and then go to index.html and then go to the div tag with the id of " root " and this is
// where we will inject our react application but we can still add html tags underneath the root
// div tag if we wanted to and if we added an h1 tag underneath our root div tag, our app would be
// part react and html so we can inject react into parts of our application if that's what we want
// to do and finally if we go to src/App.js we will notice that we are importing in React and if we
// go to src/index.js we will see that we are importing in ReactDOM and remember the react library
// allows us to write jsx or html like syntax inside a js file and ReactDOM interacts with the DOM
// and the react package allows us to write jsx and build components and react will build a vitual
// DOM and ReactDOM.render allows us to grab an element from html and insert, in our case, the
// App component into that element




// ==============================
// ANDREI NEAGOIE'S REACT COURSE - EXCEPTS FROM LECTURE 18 - END
// ==============================



// before we get started, we need to update the following files:
// public/index.html
// src/App.css
// src/App.js
// src/App.test.js
// src/index.css
// src/index.js



// the 5 key files we need in order to get create react app up and working are listed below
// and they include: index.html, header.component.jsx, homepage.component.jsx, App.js and
// index.js



// ==============================
// FROM PUBLIC/INDEX.HTML
// ==============================

/*
<html lang="en">

    <head>
        <meta charset="utf-8" />
        <!-- responsive web design: telling mobile browsers to not zoom out -->
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <!-- 
        From the web: "The theme-color meta tag provides a way to suggest a color that browsers
        should use to customize the display of the page or of the surrounding user interface.
        The meta theme color tag will drastically increase the ‘wow’ factor of your website
        on a mobile device."
        -->
        <meta name="theme-color" content="#000000" />
        <!-- meta description tag -->
        <meta
            name="description"
            content="Web site created using create-react-app"
        />

        <!-- 
        favicon link information
        From https://create-react-app.dev/docs/using-the-public-folder/ "Note that we normally
        encourage you to import assets in JavaScript files instead. Scripts and stylesheets
        get minified and bundled together to avoid extra network requests. However there is an
        escape hatch that you can use to add an asset outside of the module system.

        If you put a file into the public folder, it will not be processed by webpack. Instead
        it will be copied into the build folder untouched. To reference assets in the public
        folder, you need to use an environment variable called PUBLIC_URL.
        -->
        <link rel="shortcut icon" type="image/png" href="%PUBLIC_URL%/favicon.png" />

        <!-- link to Google web fonts -->
        <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Rancho|Tenor+Sans|Nothing+You+Could+Do|Open+Sans:300,400,700,800|Montserrat:400,700|Roboto:100,300,400,700,900|Open+Sans+Condensed:300|Josefin+Sans:300,400,400i">
        <!--
        Comment out Jonus' link below and use my link above
        <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Josefin+Sans:300,400,400i|Nunito:300,300i">
        -->

        <!--
        From Apple: "Since iOS 1.1.3, Safari for iOS has supported a way for developers
        to specify an image that will be used to represent the web site/app on the home
        screen. The image is known as the touch icon."
        -->
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

        <!--
        manifest.json provides metadata used when your web app is installed on a
        user's mobile device or desktop. See
        https://developers.google.com/web/fundamentals/web-app-manifest/
        -->
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

        <!--
        Notice the use of %PUBLIC_URL% in the tags above.
        It will be replaced with the URL of the `public` folder during the build.
        Only files inside the `public` folder can be referenced from the HTML.

        Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
        work correctly both with client-side routing and a non-root public URL.
        Learn how to configure a non-root public URL by running `npm run build`.
        -->

        <title>Nexter &mdash; Your Home | Your Freedon</title>
    </head>

    <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>

        <div id="root"></div>

        <!--
        This HTML file is a template.
        If you open it directly in the browser, you will see an empty page.

        You can add webfonts, meta tags, or analytics to this file.
        The build step will place the bundled scripts into the <body> tag.

        To begin the development, run `npm start` or `yarn start`.
        To create a production bundle, use `npm run build` or `yarn build`.
        -->

    </body>
</html>
*/



// -------------------- END OF FILE





// ==============================
// FROM SRC/COMPONENTS/HEADER/HEADER.COMPONENT.JSX
// ==============================


import React from 'react';
// will need to provide links so import in links from react router dom
import { Link } from 'react-router-dom';
// import in our stylesheet
import './header.styles.scss';


const Header = () => (
    // we will create an outer container that will hold the logo and the links to different
    // pages

    <div className="header">

            Header

    </div>
);

export default Header;



// -------------------- END OF FILE





// ==============================
// FROM SRC/PAGES/HOMEPAGE/HOMEPAGE.COMPONENT.JSX
// ==============================


import React from 'react';
import './homepage.styles.scss';


const HomePage = () => (

   
    <div className="homepage">

        Homepage

    </div>

);


export default HomePage;



// -------------------- END OF FILE





// ==============================
// FROM SRC/APP.JS
// ==============================


import React from 'react';

import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

import './App.scss';

// remember, for this app, our header will be inside our main container so remove
// <Header /> below and insert <Header /> in our homepage.component.jsx file
class App extends React.Component {
  
    render() {

        return (
             
            <Switch>
                <Route path="/"  exact={ true } component={ HomePage } />
            </Switch>        

        );

    }
}

export default App;



// -------------------- END OF FILE





// ==============================
// FROM SRC/INDEX.JS
// ==============================



import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';


ReactDOM.render( 
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById( 'root' )
);



// -------------------- END OF FILE






// now, install node-sass and react-router-dom in the nexters react project

// #2
// node-sass: " Rogers-iMac:nexters-react Home$ npm install node-sass " and this will include
// sass in our nexters react project
// lecture 105: Project Overview and Setup


// #3
// react-router-dom: " Rogers-iMac:nexters-react Home$ npm install react-router-dom " and this
// will include react-router-dom in our nexters react project
// lecture 105: Project Overview and Setup


// after doing all the stuff above, my create react app is working or when I go to my webpage
// located at localhost:3001, I see a working website with no errors in the counsel




// now, I've started watching lecture 105

// the nexter site that we will be building is made up of several different grids and will
// be a responsive site 



// ==============================
// BACK FROM SRC/APP.SCSS
// ==============================

/*
// this files acts as our base.scss file

// the color variables and font variables were taken from Jonus' _base.scss file


// ==============================
// COLOR VARIABLES
// ==============================

$color-primary      : rgba( 198, 153, 99, 1 );
$color-primary-dark : rgba( 178, 132, 81, 1 );

$color-secondary : rgba( 16, 29, 44, 1 );

$color-grey-light-1 : rgba( 249, 247, 246, 1 );
$color-grey-light-2 : rgba( 170, 170, 170, 1 );


$color-grey-dark-1 : rgba( 84, 72, 58, 1 );
$color-grey-dark-2 : rgba( 109, 93, 75, 1 );



// ==============================
// FONT VARIABLES
// ==============================

$font-primary    : 'Open+Sans', Arial, sans-serif;
$font-display-1  : 'Open+Sans+Condensed', Arial, sans-serif;
$font-display-2  : 'Josefin+Sans', Arial, sans-serif;



// ==============================
// MY BASE STYLES
// ==============================

// Jonus said to start with a global reset
*,
*::before,
*::after {
    margin  : 0;
    padding : 0;

    box-sizing : border-box;
}


// styles for the html section
html {
	font-size : 62.5%; // 1 rem = 10px
}


// styles for the body section
body {
    overflow-x : hidden; // get rid of horizontal scroll bar

    font-family : $font-primary;
    font-weight : 300;
    color       : $color-grey-dark-2;
    line-height : 1.6; 

    background : rgba( 227, 227, 232, 1 );

    @media all and ( max-width : 480px ) {

        background : rgba( 255, 255, 255, 1 );

    }

    @media all and ( max-width : 320px ) {

        overflow-x : scroll;

    }
}


// special styles to apply to all pages
input::-moz-focus-inner { // remove input padding in FF
	padding : 0;

	border  : 0;
}


// make sure IE10 works in snap mode
@-ms-viewport {
	width : device-width;
}
*/



// -------------------- END OF FILE











// lecture 106: Building the Overall Layout - Part 1

// in this lecture, I'm going to learn how to build a complex and modern layout using CSS
// Grid and we will learn how to choose different row and column track sizes for different
// types of content

// parts of the overall layout: (1) sidebar (2) header (3) top 3 realtors section (4) features
// of the company (5) testimonial section (6) home card section (7) image gallery and (8)
// footer





// ==============================
// GO TO SRC/PAGES/HOMEPAGE/HOMEPAGE.COMPONENT.JSX
// ==============================




// ==============================
// BACK FROM SRC/PAGES/HOMEPAGE/HOMEPAGE.COMPONENT.JSX
// ==============================


import React from 'react';
import './homepage.styles.scss';

import Sidebar from '../../components/sidebar/sidebar.component';
import Header from '../../components/header/header.component';
import Realtors from '../../components/realtors/realtors.component';
import Features from '../../components/features/features.component';
import TestimonialPictures from '../../components/testimonial-pictures/testimonial-pictures.component';
import TestimonialContent from '../../components/testimonial-content/testimonial-content.component';
import Homes from '../../components/homes/homes.component';
import Gallery from '../../components/gallery/gallery.component';
import Footer from '../../components/footer/footer.component';


// the div with the class name of container will be our grid container and the following 8
// sections will be our grid items: (1) sidebar (2) header (3) realtors (4) features
// (5) testimonials (6) homes (7) gallery and (8) footer
const HomePage = () => (
   
    <div className="container">

        <Sidebar />
        <Header />
        <Realtors />
        <Features />
        <TestimonialPictures />
        <TestimonialContent />
        <Homes />
        <Gallery />
        <Footer />

    </div>

);


export default HomePage;



// the html structure for the HomePage component
/*
<div className="sidebar">
    Sidebar
</div>

<header className="header">
    Header
</header>

<div className="realtors">
    Realtors
</div>

<div className="features">
    Features
</div>

<div className="testimonials-pictures">
    Testimonials Pictures
</div>

<div className="testimonials-content">
    Testimonials Content
</div>

<div className="homes">
    Homes
</div>

<div className="gallery">
Gallery
</div>

<footer className="footer">
    Footer
</footer>
*/



// -------------------- END OF FILE





// ==============================
// BACK FROM SRC/PAGES/HOMEPAGE/HOMEPAGE.STYLES.SCSS
// ==============================


/*
// in order to use the sass variables in App.scss, I had to use @import "";
@import "../../App.scss";

.container {
    display : grid;

    // -- Mark 1 --
    // lecture 106: Building the Overall Layout - Part 1
    // the first row contains the header and realtors sections and we will
    // define the first row in grid-template-areas and the first row will adjust
    // based on the viewport height

    // the second row contains the features section and we want the second
    // row to simply contain the features content and if the features content
    // grows we want our second row to grow as well so we add " min-content "
    // to the second row in grid-template-areas and remember we could write
    // " auto " here instead of " min-content " because " auto " will also make sure
    // that as the features content grows the second row will grow along with it

    // the thrid row contains the testimonial-pictures and testimonial-content sections
    // and this row is based on the viewport width or as the viewport width shrinks the
    // third row will also shrink and we will use " 40vw " for the third row and we can
    // see how important it is to think about responsiveness right from the get go

    // the fourth row contains the homes section and is similar to the features section
    // in that we sinply want the homes section to have the height of its content so we
    // will use " min-content " again

    // the fifth row contains the gallery section and again we simply want the gallery
    // section to have the height of its content so we will use " min-content " again

    // the sixth row contains the footer section and again we simply want the footer
    // section to have the height of its content so we will use " min-content " again
    // and instead of writing " min-content " three times, let use the repeat() function
    // and write " repeat( 3, min-content ) "
    

    grid-template-rows : 80vh min-content 40vw repeat( 3, min-content );
}
*/



// -------------------- END OF FILE




// ==============================
// BACK FROM SRC/COMPONENTS/SIDEBAR/SIDEBAR.COMPONENT.JSX
// ==============================


import React from 'react';
// import in our stylesheet
import './sidebar.styles.scss';


const Sidebar = () => (

    <div className="sidebar">

        Sidebar

    </div>
);

export default Sidebar;




// -------------------- END OF FILE




// ==============================
// BACK FROM SRC/COMPONENTS/SIDEBAR/SIDEBAR.STYLES.SCSS
// ==============================


/*
// in order to use the sass variables in App.scss, I had to use @import "";
@import "../../App.scss";

.sidebar {
    background-color : $color-primary;
}
*/



// -------------------- END OF FILE




// ==============================
// BACK FROM SRC/COMPONENTS/HEADER/HEADER.COMPONENT.JSX
// ==============================


import React from 'react';
// import in our stylesheet
import './header.styles.scss';


const Header = () => (

    <div className="header">

        Header

    </div>
);

export default Header;




// -------------------- END OF FILE




// ==============================
// BACK FROM SRC/COMPONENTS/HEADER/HEADER.STYLES.SCSS
// ==============================


/*
// in order to use the sass variables in App.scss, I had to use @import "";
@import "../../App.scss";

.header {
    background-color : $color-grey-dark-1;
}
*/



// -------------------- END OF FILE





// ==============================
// BACK FROM SRC/COMPONENTS/REALTORS/REALTORS.COMPONENT.JSX
// ==============================


import React from 'react';
// import in our stylesheet
import './realtors.styles.scss';


const Realtors = () => (

    <div className="realtors">

        Top 3 Realtors

    </div>
);

export default Realtors;




// -------------------- END OF FILE




// ==============================
// BACK FROM SRC/COMPONENTS/REALTORS/REALTORS.STYLES.SCSS
// ==============================


/*
// in order to use the sass variables in App.scss, I had to use @import "";
@import "../../App.scss";

.realtors {
    background-color : white;
}
*/



// -------------------- END OF FILE




// ==============================
// BACK FROM SRC/COMPONENTS/FEATURES/FEATURES.COMPONENT.JSX
// ==============================


import React from 'react';
// import in our stylesheet
import './features.styles.scss';


const Features = () => (

    <div className="features">

        Features

    </div>
);

export default Features;




// -------------------- END OF FILE




// ==============================
// BACK FROM SRC/COMPONENTS/FEATURES/FEATURES.STYLES.SCSS
// ==============================


/*
// in order to use the sass variables in App.scss, I had to use @import "";
@import "../../App.scss";

.features {
    background-color : blue;
}
*/



// -------------------- END OF FILE






// ==============================
// BACK FROM SRC/COMPONENTS/TESTIMONIAL-PICTURES/TESTIMONIAL-PICTURES.COMPONENT.JSX
// ==============================


import React from 'react';
// import in our stylesheet
import './testimonial-pictures.styles.scss';


const TestimonialPictures = () => (

    <div className="testimonial-pictures">

        Testimonial Pictures

    </div>
);

export default TestimonialPictures;




// -------------------- END OF FILE




// ==============================
// BACK FROM SRC/COMPONENTS/TESTIMONIAL-PICTURES/TESTIMONIAL-PICTURES.STYLES.SCSS
// ==============================


/*
// in order to use the sass variables in App.scss, I had to use @import "";
@import "../../App.scss";

.testimonial-pictures {
    background-color : black;
}
*/



// -------------------- END OF FILE





// ==============================
// BACK FROM SRC/COMPONENTS/TESTIMONIAL-CONTENT/TESTIMONIAL-CONTENT.COMPONENT.JSX
// ==============================


import React from 'react';
// import in our stylesheet
import './testimonial-content.styles.scss';


const TestimonialContent = () => (

    <div className="testimonial-content">

        Testimonial Content

    </div>
);

export default TestimonialContent;




// -------------------- END OF FILE





// ==============================
// BACK FROM SRC/COMPONENTS/TESTIMONIAL-CONTENT/TESTIMONIAL-CONTENT.STYLES.SCSS
// ==============================


/*
// in order to use the sass variables in App.scss, I had to use @import "";
@import "../../App.scss";

.testimonial-content {
    background-color : green;
}
*/



// -------------------- END OF FILE





// ==============================
// BACK FROM SRC/COMPONENTS/HOMES/HOMES.COMPONENT.JSX
// ==============================


import React from 'react';
// import in our stylesheet
import './homes.styles.scss';


const Homes = () => (

    <div className="homes">

        Homes

    </div>
);

export default Homes;




// -------------------- END OF FILE




// ==============================
// BACK FROM SRC/COMPONENTS/HOMES/HOMES.STYLES.SCSS
// ==============================


/*
// in order to use the sass variables in App.scss, I had to use @import "";
@import "../../App.scss";

.homes {
    background-color : purple;
}
*/



// -------------------- END OF FILE




// ==============================
// BACK FROM SRC/COMPONENTS/GALLERY/GALLERY.COMPONENT.JSX
// ==============================


import React from 'react';
// import in our stylesheet
import './gallery.styles.scss';


const Gallery = () => (

    <div className="gallery">

        Gallery

    </div>
);

export default Gallery;




// -------------------- END OF FILE




// ==============================
// BACK FROM SRC/COMPONENTS/GALLERY/GALLERY.STYLES.SCSS
// ==============================


/*
// in order to use the sass variables in App.scss, I had to use @import "";
@import "../../App.scss";

.gallery {
    background-color : red;
}
*/



// -------------------- END OF FILE





// ==============================
// BACK FROM SRC/COMPONENTS/FOOTER/FOOTER.COMPONENT.JSX
// ==============================


import React from 'react';
// import in our stylesheet
import './footer.styles.scss';


const Footer = () => (

    <div className="footer">

        Footer

    </div>
);

export default Footer;




// -------------------- END OF FILE




// ==============================
// BACK FROM SRC/COMPONENTS/FOOTER/FOOTER.STYLES.SCSS
// ==============================


/*
// in order to use the sass variables in App.scss, I had to use @import "";
@import "../../App.scss";

.footer {
    background-color : brown;
}
*/



// -------------------- END OF FILE












// lecture 107: Building the Overall Layout - Part 2

// let's now define the column tracks of our layout and then place the grid items
// in the tracks so that we end up with our final design



// ==============================
// BELOW USING GRID-ROW AND GRID-COLUMN TO PLACE GRID ITEMS
// ==============================



// ==============================
// GO TO SRC/PAGES/HOMEPAGE/HOMEPAGE.STYLES.SCSS
// ==============================



// ==============================
// BACK FROM SRC/PAGES/HOMEPAGE/HOMEPAGE.STYLES.SCSS
// ==============================


/*
// in order to use the sass variables in App.scss, I had to use @import "";
@import "../../App.scss";

.container {
    display : grid;
    grid-template-rows : 80vh                       // row 1 - 2 [ header, realtors ]
                         min-content                // row 2 - 3 [ features ]
                         40vw                       // row 3 - 4 [ testimonials ]
                         repeat( 3, min-content );  // row 4 - 7 [ homes, gallery, footer ]
                                                    // row 1 - 7 [ sidebar ]

    // so let's now work on the column tracks and remember it's very common in web
    // design to use a design grid with 8, 12 or 16 predefined columns and we're going
    // to do something similar with " grid-template-columns " and even though 8 or 16 columns
    // may not be necessary here, Jonus wants to show up how to use " grid-template-columns "
    // to build something similar to Bootstrap, for example, and Bootstrap uses a 12 column
    // grid

    // so we are going to start with an 8 column grid and to get a simple 8 column layout we
    // would write " grid-template-columns : repeat( 8, 1fr ); " and this will produce 8
    // equally sized columns that will fill up the viewport on the horizontal plane

    // remember, we want each column to have a fixed width and we could start by using 1140px
    // viewport width, which when devided 1140 / 8 = 142.5px and Jonus said to round down to
    // 140px or 14rem; however, if we decrease our viewport this column structure will not adapt
    // or will not be responsive and we will use the minmax() function to fix this and let's
    // say the max can be 14rem but the minimum will be no less than the " min-contact "

    // remember, we have 8 columns in the middle on the layout but we need to put the sidebar
    // section on the left side on the layout and Jonus reccomended we make the sidebar 80px
    // wide or 8rem

    // the last step is to center the middle 8 columns to be between the sidebar and the right
    // side of the viewport and to do that we could add 2 more columns or one column to the left
    // of the middle 8 and one column to the right of the middle 8 and we want both columns to
    // occupy the remaining space available and the reason this is helpful is because it creates
    // a full bleed column on the left and on the right which is helpful from a design perspective
    // and this is a trend in web design where you have a number of columns in the middle and
    // then these middle columns are surronded by a full bleed column on the left and a full bleed
    // column on the right and remember this technique will center the middle 8 columns
    
    // now in order to make our life easier when we start placing the grid items, let's name
    // this column tracks and remember we will have 8 " col-start "s and 8 " col-end "s or
    // " col-start-1 " and " col-end-1 ", for example

    // before we get totaling confused here, Jonus said let's start using these column names
    // right now and we will start with the sidebar

    // I don't like using names and prefer using grid lines or grid areas so let comment out
    // the below code and do another " grid-template-columns "


    // grid-template-columns : [ sidebar-start ]           8rem
    //                        [ sidebar-end full-start ]  1fr
    //                        [ center-start ]            repeat( 8,
    //                        [ col-start ]               minmax( min-content, 14rem ) )
    //                        [ col-end center-end ]      1fr [ full-end ];


    // Jonus said defining the columns is always more important than defining the rows 

    grid-template-columns : 8rem                                        // col 1 - 2   ( column 1 )
                            minmax( 6rem, 1fr )                         // col 2 - 3   ( column 2 )
                            repeat( 8, minmax( min-content, 14rem ) )   // col 3 - 11  ( column 3 - 10 )
                            minmax( 6rem, 1fr );                        // col 11 - 12 ( column 11 )

    // now let's place all the grid items inside our layout by setting the " grid-rows " and
    // " grid-content " preperties for each grid item

    // if I resize the viewport I see that the 8 middle columns stay centered inside our layout
    // which is great but notice that as we shrink the viewport the second and last column, the
    // columns defined as 1fr in grid-template-columns, basically disappear which is expected;
    // however, we always want some margin on the left side between our content and the sidebar
    // and some margin on the right side between our content and the right side of the page so
    // to fix this we will use the minmax() function and write " minmax( 6rem, 1fr ) " for both
    // the second column and the last column
    
    // the result of all these changes is that the columns that will shrink if the viewport
    // gets small enough are the middle eight columns because column 1 is set to 8rem and
    // columns 2 and 11 are set to a minimum of 6rem

    // now we are ready to build all these sections one by one

    // added these styles to the grid items so that I could see the different grid items more
    // clearly
    > * {
        padding : 40px;

        font-size : 3rem; 
    }
}
*/





// -------------------- END OF FILE






// ==============================
// BACK FROM SRC/COMPONENTS/SIDEBAR/SIDEBAR.STYLES.SCSS
// ==============================


/*
// in order to use the sass variables in App.scss, I had to use @import "";
@import "../../App.scss";

.sidebar {
    grid-row    : 1 / -1;
    grid-column : 1 / 2;

    background-color : $color-primary;
}
*/



// -------------------- END OF FILE






// ==============================
// BACK FROM SRC/COMPONENTS/HEADER/HEADER.STYLES.SCSS
// ==============================


/*
// in order to use the sass variables in App.scss, I had to use @import "";
@import "../../App.scss";

.header {
    grid-row    : 1 / 2;
    grid-column : 2 / 9;

    background-color : cornsilk;
}
*/



// -------------------- END OF FILE






// ==============================
// BACK FROM SRC/COMPONENTS/REALTORS/REALTORS.STYLES.SCSS
// ==============================


/*
// in order to use the sass variables in App.scss, I had to use @import "";
@import "../../App.scss";

.realtors {
    grid-row    : 1 / 2;
    grid-column : 9 / 12;

    background-color : $color-grey-dark-1;
}
*/



// -------------------- END OF FILE






// ==============================
// BACK FROM SRC/COMPONENTS/FEATURES/FEATURES.STYLES.SCSS
// ==============================


/*
// in order to use the sass variables in App.scss, I had to use @import "";
@import "../../App.scss";

.features {
    grid-row    : 2 / 3;
    grid-column : 3 / 11;

    background-color : seagreen;
}
*/



// -------------------- END OF FILE






// ==============================
// BACK FROM SRC/COMPONENTS/TESTIMONIAL-PICTURES/TESTIMONIAL-PICTURES.STYLES.SCSS
// ==============================


/*
// in order to use the sass variables in App.scss, I had to use @import "";
@import "../../App.scss";

.testimonial-pictures {
    grid-row    : 3 / 4;
    grid-column : 2 / 7;

    background-color : black;
}
*/



// -------------------- END OF FILE






// ==============================
// BACK FROM SRC/COMPONENTS/TESTIMONIAL-CONTENT/TESTIMONIAL-CONTENT.STYLES.SCSS
// ==============================


/*
// in order to use the sass variables in App.scss, I had to use @import "";
@import "../../App.scss";

.testimonial-content {
    grid-row    : 3 / 4;
    grid-column : 7 / 12;

    background-color : lightblue;
}
*/



// -------------------- END OF FILE






// ==============================
// BACK FROM SRC/COMPONENTS/HOMES/HOMES.STYLES.SCSS
// ==============================


/*
// in order to use the sass variables in App.scss, I had to use @import "";
@import "../../App.scss";

.homes {
    grid-row    : 4 / 5;
    grid-column : 3 / 11;

    background-color : darkred;
}
*/



// -------------------- END OF FILE






// ==============================
// BACK FROM SRC/COMPONENTS/GALLERY/GALLERY.STYLES.SCSS
// ==============================


/*
// in order to use the sass variables in App.scss, I had to use @import "";
@import "../../App.scss";

.gallery {
    grid-row    : 5 / 6;
    grid-column : 2 / 12;

    background-color : navy;
}
*/



// -------------------- END OF FILE






// ==============================
// BACK FROM SRC/COMPONENTS/FOOTER/FOOTER.STYLES.SCSS
// ==============================


/*
// in order to use the sass variables in App.scss, I had to use @import "";
@import "../../App.scss";

.footer {
    grid-row    : 6 / 7;
    grid-column : 2 / 12;

    background-color : darkgrey;
}
*/



// -------------------- END OF FILE






// ==============================
// BELOW USING GRID-AREA TO PLACE GRID ITEMS
// ==============================




// ==============================
// BACK FROM SRC/PAGES/HOMEPAGE/HOMEPAGE.STYLES.SCSS
// ==============================


/*
// in order to use the sass variables in App.scss, I had to use @import "";
@import "../../App.scss";

.container {
    display               : grid;
    grid-template-rows    : 80vh                       // row 1 - 2    ( row 1 )
                            min-content                // row 2 - 3    ( row 2 )
                            40vw                       // row 3 - 4    ( row 3 )
                            repeat( 3, min-content );  // row 4 - 7    ( row 4, 5, 6 )

    grid-template-columns : 8rem                                        // col 1 - 2   ( column 1 )
                            minmax( 6rem, 1fr )                         // col 2 - 3   ( column 2 )
                            repeat( 8, minmax( min-content, 14rem ) )   // col 3 - 11  ( column 3 - 10 )
                            minmax( 6rem, 1fr );                        // col 11 - 12 ( column 11 )

    // on the next day, I added " grid-template-areas " myself to make the layout easier to
    // understand and debug later if needed

    // now let's place all the grid items inside our layout by setting the " grid-area " property
    // for each grid item

    // now we are ready to build all these sections one by one
    
    grid-template-areas   :
    // col 1   col 2   col 3    col 4    col 5    col 6    col 7    col 8    col 9    col 10   col 11
    "  sidebar header  header   header   header   header   header   header   realtors realtors realtors  "  // row 1
    "  sidebar .       features features features features features features features features .         "  // row 2
    "  sidebar TP      TP       TP       TP       TP       TC       TC       TC       TC       TC        "  // row 3
    "  sidebar .       homes    homes    homes    homes    homes    homes    homes    homes    .         "  // row 4
    "  sidebar gallery gallery  gallery  gallery  gallery  gallery  gallery  gallery  gallery  gallery   "  // row 5
    "  sidebar footer  footer   footer   footer   footer   footer   footer   footer   footer   footer    "; // row 6

    // remember, . = full bleed, TP = testimonial pictures, TC = testimonial content

    // added these styles to the grid items so that I could see the different grid items more
    // clearly
    > * {
        padding : 40px;

        font-size : 3rem; 
    }
}
*/





// -------------------- END OF FILE






// ==============================
// BACK FROM SRC/COMPONENTS/SIDEBAR/SIDEBAR.STYLES.SCSS
// ==============================


/*
// in order to use the sass variables in App.scss, I had to use @import "";
@import "../../App.scss";

.sidebar {
    grid-area : sidebar; 

    background-color : $color-primary;
}

*/



// -------------------- END OF FILE






// ==============================
// BACK FROM SRC/COMPONENTS/HEADER/HEADER.STYLES.SCSS
// ==============================


/*
// in order to use the sass variables in App.scss, I had to use @import "";
@import "../../App.scss";

.header {
    grid-area : header;

    background-color : cornsilk;
}
*/



// -------------------- END OF FILE






// ==============================
// BACK FROM SRC/COMPONENTS/REALTORS/REALTORS.STYLES.SCSS
// ==============================


/*
// in order to use the sass variables in App.scss, I had to use @import "";
@import "../../App.scss";

.realtors {
    grid-area : realtors;

    background-color : $color-grey-dark-1;
}
*/



// -------------------- END OF FILE






// ==============================
// BACK FROM SRC/COMPONENTS/FEATURES/FEATURES.STYLES.SCSS
// ==============================


/*
// in order to use the sass variables in App.scss, I had to use @import "";
@import "../../App.scss";

.features {
    grid-area : features;

    background-color : seagreen;
}
*/



// -------------------- END OF FILE






// ==============================
// BACK FROM SRC/COMPONENTS/TESTIMONIAL-PICTURES/TESTIMONIAL-PICTURES.STYLES.SCSS
// ==============================


/*
// in order to use the sass variables in App.scss, I had to use @import "";
@import "../../App.scss";

.testimonial-pictures {
    grid-area : TP;

    background-color : black;
}
*/



// -------------------- END OF FILE






// ==============================
// BACK FROM SRC/COMPONENTS/TESTIMONIAL-CONTENT/TESTIMONIAL-CONTENT.STYLES.SCSS
// ==============================


/*
// in order to use the sass variables in App.scss, I had to use @import "";
@import "../../App.scss";

.testimonial-content {
    grid-area : TC;

    background-color : lightblue;
}
*/



// -------------------- END OF FILE






// ==============================
// BACK FROM SRC/COMPONENTS/HOMES/HOMES.STYLES.SCSS
// ==============================


/*
// in order to use the sass variables in App.scss, I had to use @import "";
@import "../../App.scss";

.homes {
    grid-area : homes;

    background-color : darkred;
}
*/



// -------------------- END OF FILE






// ==============================
// BACK FROM SRC/COMPONENTS/GALLERY/GALLERY.STYLES.SCSS
// ==============================


/*
// in order to use the sass variables in App.scss, I had to use @import "";
@import "../../App.scss";

.gallery {
    grid-area : gallery;

    background-color : navy;
}
*/



// -------------------- END OF FILE






// ==============================
// BACK FROM SRC/COMPONENTS/FOOTER/FOOTER.STYLES.SCSS
// ==============================


/*
// in order to use the sass variables in App.scss, I had to use @import "";
@import "../../App.scss";

.footer {
    grid-area : footer;

    background-color : darkgrey;
}
*/



// -------------------- END OF FILE











// lecture 108: Building the Features Section - Part 1

// in this lecture, we are going to build the features section of our website and we will
// learn about (1) how and why to create grids inside grids (2) how to create a responsive 
// component without media queries and (3) how to build a small component using CSS Grid



// ==============================
// GO TO SRC/PAGES/HOMEPAGE/HOMEPAGE.COMPONENT.JSX
// ==============================



// ==============================
// BACK FROM SRC/PAGES/HOMEPAGE/HOMEPAGE.COMPONENT.JSX
// ==============================


/*
// in order to use the sass variables in App.scss, I had to use @import "";
@import "../../App.scss";

.container {
    display               : grid;
    grid-template-rows    : 80vh                       // row 1 - 2    ( row 1 )
                            min-content                // row 2 - 3    ( row 2 )
                            40vw                       // row 3 - 4    ( row 3 )
                            repeat( 3, min-content );  // row 4 - 7    ( row 4, 5, 6 )

    grid-template-columns : 8rem                                        // col 1 - 2   ( column 1 )
                            minmax( 6rem, 1fr )                         // col 2 - 3   ( column 2 )
                            repeat( 8, minmax( min-content, 14rem ) )   // col 3 - 11  ( column 3 - 10 )
                            minmax( 6rem, 1fr );                        // col 11 - 12 ( column 11 )

    // on the next day, I added " grid-template-areas " myself to make the layout easier to
    // understand and debug later if needed

    // now let's place all the grid items inside our layout by setting the " grid-area " property
    // for each grid item

    // now we are ready to build all these sections one by one
    
    grid-template-areas   :
    // col 1   col 2   col 3    col 4    col 5    col 6    col 7    col 8    col 9    col 10   col 11
    "  sidebar header  header   header   header   header   header   header   realtors realtors realtors  "  // row 1
    "  sidebar .       features features features features features features features features .         "  // row 2
    "  sidebar TP      TP       TP       TP       TP       TC       TC       TC       TC       TC        "  // row 3
    "  sidebar .       homes    homes    homes    homes    homes    homes    homes    homes    .         "  // row 4
    "  sidebar gallery gallery  gallery  gallery  gallery  gallery  gallery  gallery  gallery  gallery   "  // row 5
    "  sidebar footer  footer   footer   footer   footer   footer   footer   footer   footer   footer    "; // row 6

    // remember, . = full bleed, TP = testimonial pictures, TC = testimonial content
}
*/





// -------------------- END OF FILE





// ==============================
// BACK FROM SRC/COMPONENTS/FEATURES/FEATURES.COMPONENT.JSX
// ==============================


import React from 'react';
// import in our stylesheet
import './features.styles.scss';

// import in the svg sprite for the features section
import sprite from '../../assets/sprite.svg';


// for our features component we have 6 features laid out in a 2 * 3 grid or two rows
// and 3 columns and let's place 6 features below and then go to the sass file to layout
// our grid

// I figured out how to import a svg sprite into a react component by reading the following
// article:
// " https://medium.com/@gineetmehta/how-to-use-svg-sprites-regular-html-vs-react-9f98948c03f0 "
const Features = () => (

    <div className="features">

        <div className="feature">
            <svg className="feature-icon">
                <use href={ sprite + "#icon-global" }></use>
            </svg>
            <h4 className="heading-4">
                World's best luxury homes
            </h4>
            <p className="Features-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                distinctio necessitatibus pariatur voluptatibus.
            </p>
        </div>

        <div className="feature">
            <svg className="feature-icon">
                <use href={ sprite + "#icon-trophy" }></use>
            </svg>
            <h4 className="heading-4">
                Only the best properties
            </h4>
            <p className="Features-text">
                Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus
                rerum sed a eligendi aut quia.
            </p>
        </div>

        <div className="feature">
            <svg className="feature-icon">
                <use href={ sprite + "#icon-map-pin" }></use>
            </svg>
            <h4 className="heading-4">
                All homes in top loctions
            </h4>
            <p className="Features-text">
                Tenetur distinctio necessitatibus pariatur voluptatibus quidem
                consequatur harum.
            </p>
        </div>

        <div className="feature">
            <svg className="feature-icon">
                <use href={ sprite + "#icon-key" }></use>
            </svg>
            <h4 className="heading-4">
                New home in one week
            </h4>
            <p className="Features-text">
                Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor
                sit amet consectetur adipisicing elit.
            </p>
        </div>

        <div className="feature">
            <svg className="feature-icon">
                <use href={ sprite + "#icon-presentation" }></use>
            </svg>
            <h4 className="heading-4">
                Top 1% realtors
            </h4>
            <p className="Features-text">
                Quidem consequatur harum, voluptatum mollitia quae. Tenetur
                distinctio necessitatibus pariatur voluptatibus.
            </p>
        </div>

        <div className="feature">
            <svg className="feature-icon">
                <use href={ sprite + "#icon-lock" }></use>
            </svg>
            <h4 className="heading-4">
                Secure payments on Nexter
            </h4>
            <p className="Features-text">
                Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia
                quae.
            </p>
        </div>

    </div>
);

export default Features;





// -------------------- END OF FILE




// ==============================
// BACK FROM SRC/COMPONENTS/FEATURES/FEATURES.STYLES.SCSS
// ==============================


/*
// in order to use the sass variables in App.scss, I had to use @import "";
@import "../../App.scss";

.features {
    grid-area             : features;

    // remember, features is a grid item but we also want features to be a grid container

    display               : grid;
    grid-template-rows    : auto auto; // auto is the default value here
    grid-template-columns : repeat( 3, 1fr );
    grid-gap              : 6rem; 
    margin                : 15rem 0;

    // remember that the little icon images next to the content for each features comes
    // from an SVG icon sprite and this is included in our image folder so each feature will
    // have a SVG icon, h4 heading and a paragragh and let's go back to our html file to
    // includes these items

}
*/





// -------------------- END OF FILE








// lecture 109: Building the Features Section - Part 2

// now we will styles the svg icons, the heading and the paragragh



// ==============================
// GO TO SRC/COMPONENTS/FEATURES/FEATURES.STYLES.SCSS
// ==============================



// ==============================
// BACK FROM SRC/COMPONENTS/FEATURES/FEATURES.STYLES.SCSS
// ==============================


/*
// in order to use the sass variables in App.scss, I had to use @import "";
@import "../../App.scss";

.features {
    grid-area             : features;

    // remember, features is a grid item but we also want features to be a grid container

    display               : grid;
    grid-template-rows    : auto auto; // auto is the default value here

    // grid-template-columns : repeat( 3, 1fr );

    grid-template-columns : repeat( auto-fit, minmax( 30rem, 1fr ) );
    grid-gap              : 6rem; 
    margin                : 15rem 0;

    // remember that the little icon images next to the content for each features comes
    // from an SVG icon sprite and this is included in our image folder so each feature will
    // have a SVG icon, h4 heading and a paragragh and let's go back to our html file to
    // includes these items

    // grid item for .features
    > .feature {

        // create a new grid container for the svg icon, header and paragraph

        display               : grid;

        // for the rows, we just want them to be the size of the content so we don't really need to
        // define the rows but I wrote " grid-template-rows : repeat( 2, min-content ); " in any case

        // remember the -1 in " grid-row : 1 / -1; " means the row should span to the end of the
        // explicit grid so if we do not define the rows in grid-template-rows then -1 will not
        // work under these circumstances

        grid-template-rows    : repeat( 2, min-content );

        // for the columns, we want the first column to be the size of the icon and then the
        // second column will take up the remaining space

        // now we change " grid-template-columns : repeat( 3, 1fr ); " in the above .features class
        // so that we can make the features section reponsive without writing any media queries and
        // we do that by writing
        // " grid-template-columns : repeat( auto-fit, minmax( 30rem, 1fr ) ); " in the above
        // .features class and this will make the features section responsive so that as the
        // viewport shrinks in size the 3 initial columns become 2 columns and then the 2 columns
        // eventually become 1 column

        // remember, grid is not only useful for the big layout parts but grid is also useful for
        // very small components as long as those components need a 2 dimensional layout
        // structure

        grid-template-columns : min-content 1fr;
        grid-row-gap          : 1.5rem;
        grid-column-gap       : 2.5rem;

        // by doing " align-items : center; " below we centered the h4 heading on row one, which was
        // necessary since the svg icon had a greater height than the h4 heading so by centering the
        // heading it created a more professional look and matched the project look and feel as well

        align-items           : center;

        // grid item for .feature
        > .feature-icon {
            width  : 4.5rem;
            height : 4.5rem;
    
            // let's change the color of the svg icon and we do that by using the " fill " property

            fill : $color-primary;
        }
    
        // grid item for .feature
        > .feature-heading-4 {
            font-family : $font-display-2;
            font-size   : 1.9rem;
            font-weight : 400;
            color       : $color-grey-dark-1;
        }
    
        // grid item for .feature
        > .feature-text {
            grid-row    : 2 / 3;
            grid-column : 2 / 3; 

            font-size : 1.7rem;
        }
    }
}
*/





// -------------------- END OF FILE




// ==============================
// BACK FROM SRC/COMPONENTS/FEATURES/FEATURES.COMPONENT.JSX
// ==============================


import React from 'react';
// import in our stylesheet
import './features.styles.scss';

// import in the svg sprite for the features section
import sprite from '../../assets/sprite.svg';


// for our features component we have 6 features laid out in a 2 * 3 grid or two rows
// and 3 columns and let's place 6 features below and then go to the sass file to layout
// our grid

// I figured out how to import a svg sprite into a react component by reading the following
// article:
// " https://medium.com/@gineetmehta/how-to-use-svg-sprites-regular-html-vs-react-9f98948c03f0 "
const Features = () => (

    <div className="features">

        <div className="feature">
            <svg className="feature-icon">
                <use href={ sprite + "#icon-global" }></use>
            </svg>
            <h4 className="feature-heading-4">
                World's best luxury homes
            </h4>
            <p className="feature-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                distinctio necessitatibus pariatur voluptatibus.
            </p>
        </div>

        <div className="feature">
            <svg className="feature-icon">
                <use href={ sprite + "#icon-trophy" }></use>
            </svg>
            <h4 className="feature-heading-4">
                Only the best properties
            </h4>
            <p className="feature-text">
                Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus
                rerum sed a eligendi aut quia.
            </p>
        </div>

        <div className="feature">
            <svg className="feature-icon">
                <use href={ sprite + "#icon-map-pin" }></use>
            </svg>
            <h4 className="feature-heading-4">
                All homes in top loctions
            </h4>
            <p className="feature-text">
                Tenetur distinctio necessitatibus pariatur voluptatibus quidem
                consequatur harum.
            </p>
        </div>

        <div className="feature">
            <svg className="feature-icon">
                <use href={ sprite + "#icon-key" }></use>
            </svg>
            <h4 className="feature-heading-4">
                New home in one week
            </h4>
            <p className="feature-text">
                Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor
                sit amet consectetur adipisicing elit.
            </p>
        </div>

        <div className="feature">
            <svg className="feature-icon">
                <use href={ sprite + "#icon-presentation" }></use>
            </svg>
            <h4 className="feature-heading-4">
                Top 1% realtors
            </h4>
            <p className="feature-text">
                Quidem consequatur harum, voluptatum mollitia quae. Tenetur
                distinctio necessitatibus pariatur voluptatibus.
            </p>
        </div>

        <div className="feature">
            <svg className="feature-icon">
                <use href={ sprite + "#icon-lock" }></use>
            </svg>
            <h4 className="feature-heading-4">
                Secure payments on Nexter
            </h4>
            <p className="feature-text">
                Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia
                quae.
            </p>
        </div>

    </div>
);

export default Features;






// -------------------- END OF FILE




// ==============================
// BACK FROM SRC/APP.SCSS
// ==============================


/*
// this files acts as our base.scss file

// the color variables and font variables were taken from Jonus' _base.scss file


// ==============================
// COLOR VARIABLES
// ==============================

$color-primary      : rgba( 198, 153, 99, 1 );
$color-primary-dark : rgba( 178, 132, 81, 1 );

$color-secondary    : rgba( 16, 29, 44, 1 );

$color-grey-light-1 : rgba( 249, 247, 246, 1 );
$color-grey-light-2 : rgba( 170, 170, 170, 1 );


$color-grey-dark-1 : rgba( 84, 72, 58, 1 );
$color-grey-dark-2 : rgba( 109, 93, 75, 1 );



// ==============================
// FONT VARIABLES
// ==============================

$font-primary-1  : 'Open Sans', Arial, sans-serif;
$font-primary-2  : 'Nunito', Arial, sans-serif;
$font-display-1  : 'Open Sans Condensed', Arial, sans-serif;
$font-display-2  : 'Josefin Sans', Arial, sans-serif;



// ==============================
// MY BASE STYLES
// ==============================

// Jonus said to start with a global reset
*,
*::before,
*::after {
    margin  : 0;
    padding : 0;

    box-sizing : border-box;
}


// styles for the html section
html {
	font-size : 62.5%; // 1 rem = 10px
}


// styles for the body section
body {
    overflow-x : hidden; // get rid of horizontal scroll bar

    font-family : $font-primary-2;
    font-weight : 300;
    color       : $color-grey-dark-2;
    line-height : 1.6;

    // background : rgba( 227, 227, 232, 1 );
    // let's go with a white background for this site
    background : rgba( 255, 255, 255, 1 );    

    @media all and ( max-width : 480px ) {

        background : rgba( 255, 255, 255, 1 );

    }

    @media all and ( max-width : 320px ) {

        overflow-x : scroll;

    }
}


// special styles to apply to all pages
input::-moz-focus-inner { // remove input padding in FF
	padding : 0;

	border  : 0;
}


// make sure IE10 works in snap mode
@-ms-viewport {
	width : device-width;
}
*/





// -------------------- END OF FILE









// lecture 110: Building the Testimonial ( Story ) Section - Part 1

// now we will build the testimonial section and in this section we will learn how to
// deal with overlapping grid items and why images are special and behave differently
// than other grid items and how to decide if flexbox is a better tool than CSS Grid in
// certain situations and let's start with the testimonial content component



// ==============================
// GO TO SRC/COMPONENTS/TESTIMONIAL-PICTURES/TESTIMONIAL-CONTENT.COMPONENT.JSX
// ==============================




// ==============================
// BACK FROM SRC/COMPONENTS/TESTIMONIAL-PICTURES/TESTIMONIAL-CONTENT.COMPONENT.JSX
// ==============================


import React from 'react';
// import in our stylesheet
import './testimonial-content.styles.scss';


const TestimonialContent = () => (

    // for testimonial content, we will have 2 headings, a paragragh and a button
    // and we will center this items vertically inside the container

    <div className="testimonial-content">

        <h3 className="heading-3">Happy Customers</h3>
        <h2 className="heading-2">&ldquo;The best decision of our lives&rdquo;</h2>
        <p className="testimonial-content--text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio
            necessitatibus pariatur voluptatibus. Quidem consequatur harum volupta!
        </p>
        <button className="btn">Find your own home</button>

    </div>
);

export default TestimonialContent;





// -------------------- END OF FILE





// ==============================
// BACK FROM SRC/COMPONENTS/TESTIMONIAL-PICTURES/TESTIMONIAL-CONTENT.STYLES.SCSS
// ==============================

/*

// in order to use the sass variables in App.scss, I had to use @import "";
@import "../../App.scss";

.testimonial-content {
    grid-area   : TC;

    // since this is a one dimensional layout, let's use flexbox to vertically center the
    // elements and to that we use the following key value pairs: " display : flex; " and
    // " flex-direction : column; " and " justify-content : center; " and remember justify
    // content centers items along the main axis, which in this case is the vertical axis
    
    // we could use grid to center the items vertically by doing: " display : grid " and
    // " align-content : center; " and " justify-items : start; " and we end up with the
    // exact same layout as we have by using flexbox below

    display         : flex;
    flex-direction  : column; 
    justify-content : center;

    // we do have one problem however, which is the button is spanning accross the entire
    // container on the x axis and this is due to align-items being set to " stretch " by
    // default so to fix this we set align-items to " start "

    align-items : flex-start; 

    // for padding, we want the padding to be dynamic so that as we decrease the viewport the
    // padding decreases as well; otherwise, a hardcoded right and left padding number that
    // looked perfectly fine on a large screen starts taking up too much room as the viewport
    // gets smaller and smaller

    // remember the viewport unit is very helpful when building responsive layouts

    padding         : 6rem 8vw;

    background-color : $color-grey-light-1;

    > .heading-2 {
        margin-bottom : 3rem;

        font-family : $font-display-2;
        font-size   : 4rem;
        font-style  : italic; 
        font-weight : 400;
        color       : $color-grey-dark-1;
        line-height : 1.0; 
    }

    > .heading-3 {
        margin-bottom : 2rem;

        font-family    : $font-display-2;
        font-size      : 1.6rem;
        font-style     : italic; 
        font-weight    : 400;
        color          : $color-primary;
        text-transform : uppercase; 
    }

    &--text {
        margin-bottom : 4rem;

        font-size  : 1.5rem;
        font-style : italic;  
    }

    > .btn {
        @include button();
    }


}
*/





// -------------------- END OF FILE



// ==============================
// BACK FROM SRC/APP.SCSS - ADDED THE BUTTON MIXIN
// ==============================


/*
// ==============================
// BUTTON MIXIN
// ==============================

@mixin button {
    padding : 1.8rem 3.0rem;

    border        : none; // get rid of the default border
    border-radius : 0; // get rid of the default radius 

    font-family    : $font-display-2;
    font-size      : 1.5rem;  
    color          : rgba( 255, 255, 255, 1 );
    text-transform : uppercase; 

    background-color : $color-primary;

    transition : all 0.2s ease-out; 
    cursor     : pointer;

    &:hover {
        background-color : $color-primary-dark;
    }
}
*/





// -------------------- END OF FILE












// lecture 111: Building the Testimonial ( Story ) Section - Part 2

// so we will create a grid and then position the top 2 images on the grid



// ==============================
// GO TO SRC/COMPONENTS/TESTIMONIAL-PICTURES/TESTIMONIAL-PICTURES.COMPONENT.JSX
// ==============================




// ==============================
// BACK FROM SRC/COMPONENTS/TESTIMONIAL-PICTURES/TESTIMONIAL-PICTURES.COMPONENT.JSX
// ==============================


import React from 'react';
// import in our stylesheet
import './testimonial-pictures.styles.scss';
// import in the two images and then do src={} below
import story1 from '../../assets/story-1.jpeg';
import story2 from '../../assets/story-2.jpeg';


const TestimonialPictures = () => (

    <div className="testimonial-pictures">

        <img 
            src={ story1 }
            className="testimonial-pictures--img-1"
            alt="Couple with new house"
        />
        <img 
            src={ story2 }
            className="testimonial-pictures--img-2"
            alt="New house"
        />

    </div>
);

export default TestimonialPictures;




// ==============================
// BACK FROM SRC/COMPONENTS/TESTIMONIAL-PICTURES/TESTIMONIAL-PICTURES.STYLES.SCSS
// ==============================


/*
// in order to use the sass variables in App.scss, I had to use @import "";
@import "../../App.scss";

.testimonial-pictures {
    grid-area : TP;
    display   : grid;

    // before we position these images they are both taking up the entire container and
    // are stacking with img-1 first and img-2 below img-1

    // Jonus recommends that we do a 6 by 6 grid with the first image taking up 4 rows and
    // 4 columns and leaving one column on the left of the first image and one column on the
    // right of the first image and one row above the first image and one row below the first
    // image

    grid-template-rows    : repeat( 6, 1fr );
    grid-template-columns : repeat( 6, 1fr );
    align-items           : center;


    // let's add an overlay to this background image to make it fit in better with the look
    // and feel of our site and we will do this by using the linear gradient function or
    // " linear-gradient( to right, rgba( $color-primary, 0.5 ), rgba( $color-primary, 0.5 ) ),
    // url( ../../assets/back.jpg ); // rgb(0,20,61) " and our linear gradient image will lie
    // on top of our background image, serving as an " overlays " to our background image

    // remember we could combine both images by using the background blend mode property or
    // " background-blend-mode : multiply; " to give it a really nice visual effect

    background-image : linear-gradient( to right, rgba( $color-primary, 0.5 ), rgba( $color-primary, 0.5 ) ), url( ../../assets/back.jpg ); // rgba( 198, 153, 99, 1 )

    &--img-1 {

        // now let's position the image inside the grid container and when we look at the image
        // on the webpage we see that there is some remaining space at the bottom and that is
        // because the image doesn't really fit the grid area and the reason this happens is
        // because the image tries to keep its aspect ratio and in so doing the iamge may not always
        // fill up the entire grid area; however, we can center this image inside the grid area
        // by using the align-items property or " align-items : center; " and remember we use
        // the align-items property inside the container element and not inside the grid item

        grid-row    : 2 / 6;
        grid-column : 2 / 6;
        

        // always use percentages when declaring the width for images so that the images can
        // be flexible
       
        width : 100%;

        box-shadow : 0 2rem 5rem rgba( 0, 0, 0, 0.1 );

    }

    &--img-2 {

        // always use percentages when declaring the width for images so that the images can
        // be flexible

        // now for the second image we want it to expand from the center of the grid to the end
        // of the grid on the right side

        // in the final version, this image overlaps the right container by just a little bit
        // and the way we accomplish this is by increasing the width by 15% or " width : 115%; "
        // and changing the z-index to 1 or " z-index : 1; " so that this image lays on top of
        // the right container since the right container has a z-index of 0

        // now let's add a shadow to both images and the CSS syntax for box-shadow is
        // " box-shadow: h-offset / v-offset / blur radius / spread radius / color " and only
        // the horizontal and vertical offsets are required

        // now let's add in the background image to the container

        grid-row    : 4 / 6;
        grid-column : 4 / 7;
        z-index     : 1;
        width       : 115%;

        box-shadow : 0 2rem 5rem rgba( 0, 0, 0, 0.2 );

    }
}
*/





// -------------------- END OF FILE









// lecture 112: Building the Homes Section - Part 1

// in this lecture, we will learn how to build a rather omplex component using a mix of grid
// properties, overlapping and flexbox and each home gets its own card



// ==============================
// GO TO SRC/COMPONENTS/HOMES/HOMES.COMPONENT.JSX
// ==============================



// ==============================
// BACK FROM SRC/COMPONENTS/HOMES/HOMES.COMPONENT.JSX
// ==============================





// ==============================
// BACK FROM SRC/COMPONENTS/HOMES/HOMES.STYLES.SCSS
// ==============================


/*

*/





// -------------------- END OF FILE








// lecture 113: Building the Homes Section - Part 2

// 



// ==============================
// GO TO SRC/COMPONENTS/HOMES/HOMES.COMPONENT.JSX
// ==============================



// ==============================
// BACK FROM SRC/COMPONENTS/HOMES/HOMES.COMPONENT.JSX
// ==============================


import React from 'react';
// import in our stylesheet
import './homes.styles.scss';

// import in the 6 house images
import house1 from '../../assets/house-1.jpeg';
import house2 from '../../assets/house-2.jpeg';
import house3 from '../../assets/house-3.jpeg';
import house4 from '../../assets/house-4.jpeg';
import house5 from '../../assets/house-5.jpeg';
import house6 from '../../assets/house-6.jpeg';

// import in the svg sprite
import sprite from '../../assets/sprite.svg';


const Homes = () => (

    // first, we need to create 6 home elements and then go to our scss file and now we
    // are back from our scss file

    <div className="homes">

        <div className="home">

            <img src={ house1 } className="home--img" alt="House 1" />

            <svg className="home--like">
                <use href={ sprite + "#icon-heart-full" }></use>
            </svg>

            <h5 className="home--name">Beutiful Family House</h5>

            <div className="home--location">
                <svg>
                    <use href={ sprite + "#icon-map-pin" }></use>
                </svg>
                <p>USA</p>
            </div>

            <div className="home--rooms">
                <svg>
                    <use href={ sprite + "#icon-profile-male" }></use>
                </svg>
                <p>5 rooms</p>
            </div>

            <div className="home--area">
                <svg>
                    <use href={ sprite + "#icon-expand" }></use>
                </svg>
                <p>3,500 SQ FT</p>
            </div>

            <div className="home--price">
                <svg>
                    <use href={ sprite + "#icon-key" }></use>
                </svg>
                <p>$1,200,000</p>
            </div>

            <button className="home--btn">Contact realtor</button>

        </div>

        <div className="home">

            <img src={ house2 } className="home--img" alt="House 2" />

            <svg className="home--like">
                <use href={ sprite + "#icon-heart-full" }></use>
            </svg>

            <h5 className="home--name">Modern Glass Villa</h5>

            <div className="home--location">
                <svg>
                    <use href={ sprite + "#icon-map-pin" }></use>
                </svg>
                <p>Canada</p>
            </div>

            <div className="home--rooms">
                <svg>
                    <use href={ sprite + "#icon-profile-male" }></use>
                </svg>
                <p>6 rooms</p>
            </div>

            <div className="home--area">
                <svg>
                    <use href={ sprite + "#icon-expand" }></use>
                </svg>
                <p>5,000 SQ FT</p>
            </div>

            <div className="home--price">
                <svg>
                    <use href={ sprite + "#icon-key" }></use>
                </svg>
                <p>$2,750,000</p>
            </div>

            <button className="home--btn">Contact realtor</button>

        </div>

        <div className="home">

            <img src={ house3 } className="home--img" alt="House 3" />

            <svg className="home--like">
                <use href={ sprite + "#icon-heart-full" }></use>
            </svg>

            <h5 className="home--name">Cozy Country House</h5>

            <div className="home--location">
                <svg>
                    <use href={ sprite + "#icon-map-pin" }></use>
                </svg>
                <p>UK</p>
            </div>

            <div className="home--rooms">
                <svg>
                    <use href={ sprite + "#icon-profile-male" }></use>
                </svg>
                <p>4 rooms</p>
            </div>

            <div className="home--area">
                <svg>
                    <use href={ sprite + "#icon-expand" }></use>
                </svg>
                <p>2,500 SQ FT</p>
            </div>

            <div className="home--price">
                <svg>
                    <use href={ sprite + "#icon-key" }></use>
                </svg>
                <p>$850,000</p>
            </div>

            <button className="home--btn">Contact realtor</button>

        </div>

        <div className="home">

            <img src={ house4 } className="home--img" alt="House 4" />

            <svg className="home--like">
                <use href={ sprite + "#icon-heart-full" }></use>
            </svg>

            <h5 className="home--name">Large Rustical Villa</h5>

            <div className="home--location">
                <svg>
                    <use href={ sprite + "#icon-map-pin" }></use>
                </svg>
                <p>Portugal</p>
            </div>

            <div className="home--rooms">
                <svg>
                    <use href={ sprite + "#icon-profile-male" }></use>
                </svg>
                <p>6 rooms</p>
            </div>

            <div className="home--area">
                <svg>
                    <use href={ sprite + "#icon-expand" }></use>
                </svg>
                <p>4,725 SQ FT</p>
            </div>

            <div className="home--price">
                <svg>
                    <use href={ sprite + "#icon-key" }></use>
                </svg>
                <p>$1,950,000</p>
            </div>

            <button className="home--btn">Contact realtor</button>

        </div>

        <div className="home">

            <img src={ house5 } className="home--img" alt="House 5" />

            <svg className="home--like">
                <use href={ sprite + "#icon-heart-full" }></use>
            </svg>

            <h5 className="home--name">Majestic Palace House</h5>

            <div className="home--location">
                <svg>
                    <use href={ sprite + "#icon-map-pin" }></use>
                </svg>
                <p>Germany</p>
            </div>

            <div className="home--rooms">
                <svg>
                    <use href={ sprite + "#icon-profile-male" }></use>
                </svg>
                <p>18 rooms</p>
            </div>

            <div className="home--area">
                <svg>
                    <use href={ sprite + "#icon-expand" }></use>
                </svg>
                <p>45,500 SQ FT</p>
            </div>

            <div className="home--price">
                <svg>
                    <use href={ sprite + "#icon-key" }></use>
                </svg>
                <p>$9,500,000</p>
            </div>

            <button className="home--btn">Contact realtor</button>

        </div>

        <div className="home">

            <img src={ house6 } className="home--img" alt="House 6" />

            <svg className="home--like">
                <use href={ sprite + "#icon-heart-full" }></use>
            </svg>

            <h5 className="home--name">Modern Family Apartment</h5>

            <div className="home--location">
                <svg>
                    <use href={ sprite + "#icon-map-pin" }></use>
                </svg>
                <p>Italy</p>
            </div>

            <div className="home--rooms">
                <svg>
                    <use href={ sprite + "#icon-profile-male" }></use>
                </svg>
                <p>3 rooms</p>
            </div>

            <div className="home--area">
                <svg>
                    <use href={ sprite + "#icon-expand" }></use>
                </svg>
                <p>1,937 SQ FT</p>
            </div>

            <div className="home--price">
                <svg>
                    <use href={ sprite + "#icon-key" }></use>
                </svg>
                <p>$600,000</p>
            </div>

            <button className="home--btn">Contact realtor</button>

        </div>

     </div>
);

export default Homes;


// ==============================
// BACK FROM SRC/COMPONENTS/HOMES/HOMES.STYLES.SCSS
// ==============================


/*
// in order to use the sass variables in App.scss, I had to use @import "";
@import "../../App.scss";

.homes {
    grid-area : homes;

    // we want to create a 2 by 3 grid and our 6 cards will fit inside this grid and
    // the 6 home cards will be our grid items

    display               : grid;
    grid-template-rows    : repeat( 2, 1fr );

    // again use the auto-fit property and the minmax() function to create a responsive design

    grid-template-columns : repeat( auto-fit, minmax( 25rem, 1fr ) );
    grid-gap              : 7rem;
    margin                : 15rem 0;


    .home {

        display               : grid;

        // Jonus just defined grid-template-columns and said not to define grid-template-rows
        // and that the row will be automatically generated and Jonus said most of the time
        // we are just defining the columns and I defined 4 rows as " auto " and it looked pretty
        // good and auto is the default

        grid-template-rows    : auto auto auto auto;
        grid-template-columns : repeat( 2, 1fr );
        grid-row-gap          : 3.5rem;

        // for the heart, we could use " position : relative; " and then absolutely position
        // the heart on top of the image but Jonus used grid overlapping to get this done
        // so I will do the same thing

        // position : relative;

        background-color : $color-grey-light-1;
    
    
        &--img {
            grid-row    : 1 / 2;
            grid-column : 1 / -1; 

            width : 100%;
        }

        &--like {
            grid-row     : 1 / 2;
            grid-column  : 2 / 3;

            // again, we are using justify-self to get the element in the right position

            justify-self : end;
            width        : 2.5rem;
            height       : 2.5rem;
            margin       : 1rem;

            // position : absolute;
            // top      : 1rem;
            // right    : 1rem;

           fill : $color-primary;
        }       

        &--name {
            grid-row     : 1 / 2;
            grid-column  : 1 / -1;

            // to place the name at the bottom of the grid row, we use align-self or
            // "align-self : end;" and remember align-self and justify-self are very important
            // properties to keep in mind as we use CSS Grid

            align-self  : end;

            // to center the name horizontally, we use justify-self or " justify-self : center "

            justify-self : center;

            // give name a z-index of 3 just to make sure it sits on top of the image

            z-index      : 3;
            width        : 80%;
            padding      : 1.25rem;

            font-family : $font-display-2;
            font-size   : 1.6rem;
            font-weight : 400; 
            color       : rgba( 255, 255, 255, 1 );
            text-align  : center;

            background-color : $color-secondary;

            // now move the name down by using the transform property or
            // " transform : translate3d( 0, 50%, 0 ): " and 50% corresponds to 50% of the height
            // of the element, which will center the elemnent when it moves down

            transform : translate3d( 0, 50%, 0 );
        }

        &--location,
        &--rooms,
        &--area,
        &--price {

            // now to put the icon svg and text side by side, Jonus reccomends we use flexbox here
            // and I agree with his assessment and it's the easiest solution and all we have to do
            // to make this happen is write " display : flex; "

            display : flex;
            margin  : 0 0 0 2.0rem;            

            > svg {
                width  : 2.0rem;
                height : 2.0rem;
        
                // let's change the color of the svg icon and we do that by using the " fill " property
                fill : $color-primary;
            }

            > p {
                margin : 0 0 0 1rem;

                font-family : $font-primary-2;
                font-size   : 1.5rem;
            }

        }

        &--location,
        &--rooms  {
            margin-top : 2.5rem;             
        }

        &--btn {
            grid-row    : 4 / 5;
            grid-column : 1 / -1;

            @include button();
        }
    
    }

}
*/





// -------------------- END OF FILE









// lecture 114: Building the Gallery - Part 1

// in this lecture, we will learn how to create a complex grid looking gallery and
// we will learn how to use object-fit together with images for grid items


// so how do we go about creating our grid structure? and this first thing to do is
// select the number of column tracks and row tracks and the way we determine the number
// of column and row tracks is by finding the smallest image in the gallery since that
// image will determine the size of our column and row tracks

// for our gallery, we have 7 rows and 8 columns and the bigger gallery images are made up of
// several grid cells and these grid cells are the same size as the grid cell for the smallest
// image in the gallery



// ==============================
// GO TO SRC/COMPONENTS/GALLERY/GALLERY.COMPONENT.JSX
// ==============================



// ==============================
// BACK FROM SRC/COMPONENTS/GALLERY/GALLERY.COMPONENT.JSX
// ==============================


import React from 'react';
// import in our stylesheet
import './gallery.styles.scss';

// import in the 14 gallery images
import gallery1 from '../../assets/gal-1.jpeg';
import gallery2 from '../../assets/gal-2.jpeg';


const Gallery = () => (

    // add the container element for each image

    <div className="gallery">

        <figure className=" gallery--item gallery--item--1 ">
            <img src={ gallery1 } className="gallery--img" alt="Gallery image 1" />        
        </figure>

        <figure className=" gallery--item gallery--item--2 ">
            <img src={ gallery2 } className="gallery--img" alt="Gallery image 2" />        
        </figure>


    </div>
);

export default Gallery;



// ==============================
// BACK FROM SRC/COMPONENTS/GALLERY/GALLERY.STYLES.SCSS
// ==============================


/*
// in order to use the sass variables in App.scss, I had to use @import "";
@import "../../App.scss";

.gallery {
    grid-area : gallery;

    display               : grid;

    // as we reduce the viewport the images maintain their aspect ratio and the reason
    // for this is due to the " 5vw " value below and Jonus experimented and came up with
    // 5vw

    // remember that images have an intrinsic aspect ratio and because of that they don't
    // really fill the grid cells that they are assigned to and this will create a big
    // issue for our image gallery since the different images have different aspect rations
    // and this will create a very messy looking gallery so how can we fix this? and to fix
    // this we will use the " object-fit " property and we will set object-fit to cover and
    // then add a parent container for each element or image and then add object-fit to the
    // image element in order to make the image fill the entire container and now let's
    // go to the gallery.component.jsx file to add the container element for each image

    grid-template-rows    : repeat( 7, 5vw );
    grid-template-columns : repeat( 8, 1fr );
    grid-gap              : 1.5rem;

    // we also want some spacing between the gallery and the edges of the container and we can
    // do that by adding some padding

    padding              : 1.5rem;


    background-color : $color-grey-light-1;
    
    // remember, now the figure element is the grid item and not the image element

    &--item {

        &--1{
            grid-row    : 1 / span 2;
            grid-column : 1 / span 2;  
        }

        // in the next video, we will place the remaining images inside the appropriate grid
        // row and column tracks

        &--2 {

        }

    }

    &--img {

        // set the image to " display ; block; " in order to remove any white space that may
        // appear after the image
        
        display : block;

        // in order to get each image to fit within one column we have to do " width : 100%; "

        width   : 100%;
        height  : 100%; 

        // now let add the object-fit property and remember for object-fit to work we have to add
        // the width and the height to the element

        // by using these 3 key value pairs inside the image element or " width : 100%; "
        // and " height : 100%; " and " object-fit : cover; " we see that each image now fills up
        // one grid cell and one grid cell only

        object-fit : cover;

        // now let's place our items in the appropriate grid row and column tracks by using the
        // grid-row and grid-column properties above in &--item {} 

    }
    
}
*/





// -------------------- END OF FILE








// lecture 115: Building the Gallery Section - Part 2

// Jonus wants us to place the remaining images on the grid so that it matches
// the finished web page gallery




// ==============================
// GO TO SRC/COMPONENTS/GALLERY/GALLERY.COMPONENT.JSX
// ==============================



// ==============================
// BACK FROM SRC/COMPONENTS/GALLERY/GALLERY.COMPONENT.JSX
// ==============================


import React from 'react';
// import in our stylesheet
import './gallery.styles.scss';

// import in the 14 gallery images
import gallery1  from '../../assets/gal-1.jpeg';
import gallery2  from '../../assets/gal-2.jpeg';
import gallery3  from '../../assets/gal-3.jpeg';
import gallery4  from '../../assets/gal-4.jpeg';
import gallery5  from '../../assets/gal-5.jpeg';
import gallery6  from '../../assets/gal-6.jpeg';
import gallery7  from '../../assets/gal-7.jpeg';
import gallery8  from '../../assets/gal-8.jpeg';
import gallery9  from '../../assets/gal-9.jpeg';
import gallery10 from '../../assets/gal-10.jpeg';
import gallery11 from '../../assets/gal-11.jpeg';
import gallery12 from '../../assets/gal-12.jpeg';
import gallery13 from '../../assets/gal-13.jpeg';
import gallery14 from '../../assets/gal-14.jpeg';


const Gallery = () => (

    // add the container element for each image

    <div className="gallery">

        <figure className=" gallery--item gallery--item--1 ">
            <img src={ gallery1 } className="gallery--img" alt="Gallery 1" />
        </figure>

        <figure className=" gallery--item gallery--item--2 ">
            <img src={ gallery2 } className="gallery--img" alt="Gallery 2" />
        </figure>

        <figure className=" gallery--item gallery--item--3 ">
            <img src={ gallery3 } className="gallery--img" alt="Gallery 3" />
        </figure>

        <figure className=" gallery--item gallery--item--4 ">
            <img src={ gallery4 } className="gallery--img" alt="Gallery 4" />
        </figure>

        <figure className=" gallery--item gallery--item--5 ">
            <img src={ gallery5 } className="gallery--img" alt="Gallery 5" />
        </figure>

        <figure className=" gallery--item gallery--item--6 ">
            <img src={ gallery6 } className="gallery--img" alt="Gallery 6" />
        </figure>

        <figure className=" gallery--item gallery--item--7 ">
            <img src={ gallery7 } className="gallery--img" alt="Gallery 7" />
        </figure>

        <figure className=" gallery--item gallery--item--8 ">
            <img src={ gallery8 } className="gallery--img" alt="Gallery 8" />
        </figure>

        <figure className=" gallery--item gallery--item--9 ">
            <img src={ gallery9 } className="gallery--img" alt="Gallery 9" />
        </figure>

        <figure className=" gallery--item gallery--item--10 ">
            <img src={ gallery10 } className="gallery--img" alt="Gallery 10" />
        </figure>

        <figure className=" gallery--item gallery--item--11 ">
            <img src={ gallery11 } className="gallery--img" alt="Gallery 11" />
        </figure>

        <figure className=" gallery--item gallery--item--12 ">
            <img src={ gallery12 } className="gallery--img" alt="Gallery 12" />
        </figure>

        <figure className=" gallery--item gallery--item--13 ">
            <img src={ gallery13 } className="gallery--img" alt="Gallery 13" />
        </figure>

        <figure className=" gallery--item gallery--item--14 ">
            <img src={ gallery14 } className="gallery--img" alt="Gallery 14" />
        </figure>

    </div>

);

export default Gallery;



// -------------------- END OF FILE




// ==============================
// BACK FROM SRC/COMPONENTS/GALLERY/GALLERY.STYLES.SCSS
// ==============================


/*
// in order to use the sass variables in App.scss, I had to use @import "";
@import "../../App.scss";

.gallery {
    grid-area : gallery;

    display               : grid;

    // as we reduce the viewport the images maintain their aspect ratio and the reason
    // for this is due to the " 5vw " value below and Jonus experimented and came up with
    // 5vw

    // remember that images have an intrinsic aspect ratio and because of that they don't
    // really fill the grid cells that they are assigned to and this will create a big
    // issue for our image gallery since the different images have different aspect rations
    // and this will create a very messy looking gallery so how can we fix this? and to fix
    // this we will use the " object-fit " property and we will set object-fit to cover and
    // then add a parent container for each element or image and then add object-fit to the
    // image element in order to make the image fill the entire container and now let's
    // go to the gallery.component.jsx file to add the container element for each image

    // I changed " grid-template-rows : repeat( 7, 5vw ); " to
    // " grid-template-rows : repeat( 7, auto ); " since " auto " made each image taller and
    // therefore I was able to show the original image in the gallery whereas " 5vw " chopped
    // the images

    grid-template-rows    : repeat( 7, auto );
    grid-template-columns : repeat( 8, 1fr );
    grid-gap              : 1.5rem;

    // we also want some spacing between the gallery and the edges of the container and we can
    // do that by adding some padding

    padding              : 1.5rem;


    background-color : $color-grey-light-1;
    
    // remember, now the figure element is the grid item and not the image element

    &--item {

        &--1 {
            grid-row    : 1 / span 2;
            grid-column : 1 / span 2;
        }

        // in the next video, we will place the remaining images inside the appropriate grid
        // row and column tracks

        &--2 {
            grid-row    : 1 / span 3;
            grid-column : 3 / span 3;
        }

        &--3 {
            grid-row    : 1 / span 2;
            grid-column : 6 / 7;
        }

        &--4 {
            grid-row    : 1 / span 2;
            grid-column : 7 / span 2;
        }

        &--5 {
            grid-row    : 3 / span 3;
            grid-column : 1 / span 2;
        }

        &--6 {
            grid-row    : 4 / span 2;
            grid-column : 3 / span 2;
        }

        &--7 {
            grid-row    : 4 / 5;
            grid-column : 5 / 6;
        }

        &--8 {
            grid-row    : 3 / span 2;
            grid-column : 6 / span 2;
        }

        &--9 {
            grid-row    : 3 / span 3;
            grid-column : 8 / 9;
        }

        &--10 {
            grid-row    : 6 / span 2;
            grid-column : 1 / 2;
        }

        &--11 {
            grid-row    : 6 / span 2;
            grid-column : 2 / span 2;
        }

        &--12 {
            grid-row    : 6 / span 2;
            grid-column : 4 / 5;
        }

        &--13 {
            grid-row    : 5 / span 3;
            grid-column : 5 / span 3;
        }

        &--14 {
            grid-row    : 6 / span 2;
            grid-column : 8 / 9;
        }

    }

    &--img {

        // set the image to " display ; block; " in order to remove any white space that may
        // appear after the image
        
        display : block;

        // in order to get each image to fit within one column we have to do " width : 100%; "

        width   : 100%;
        height  : 100%; 

        // now let add the object-fit property and remember for object-fit to work we have to add
        // the width and the height to the element

        // remember, in order to keep the image aspect ratio we have to use " object-fit : cover; "
        // and if we remove " object-fit : cover; " then the aspect ratio for each image will be
        // screwed up and will result in some weird stretching of the images

        // by using these 3 key value pairs inside the image element or " width : 100%; "
        // and " height : 100%; " and " object-fit : cover; " we see that each image now fills up
        // one grid cell and one grid cell only

        object-fit : cover;

        // now let's place our items in the appropriate grid row and column tracks by using the
        // grid-row and grid-column properties above in &--item {} 

    }
    
}


// just testing but think this looks better than with no media queries

@media ( max-width : $bp-largest ) {

	.gallery {

        grid-template-rows    : repeat( 13, auto );
        grid-template-columns : repeat( 4, 1fr );

        &--item {

            &--1 {
                grid-row    : 1 / span 2;
                grid-column : 1 / span 2;
            }
    
            &--2 {
                grid-row    : 1 / span 4;
                grid-column : 3 / 4;
                z-index     : 1;
            }
    
            &--3 {
                grid-row    : 1 / span 4;
                grid-column : 4 / 5;
                z-index     : 1;
            }
    

            &--4 {
                grid-row    : 3 / span 2;
                grid-column : 1 / span 2;
            }
    
            &--5 {
                grid-row    : 5 / span 3;
                grid-column : 1 / span 3;
            }
    
            &--6 {
                grid-row    : 3 / span 2;
                grid-column : 4 / 5;
            }
    
            &--7 {
                grid-row    : 4 / 5;
                grid-column : 3 / 4;
            }
    
            &--8 {
                grid-row    : 5 / span 4;
                grid-column : 4 / 5;
            }
    
            &--9 {
                grid-row    : 8 / span 3;
                grid-column : 1 / 2;
            }
    
            &--10 {
                grid-row    : 8 / span 4;
                grid-column : 1 / span 3;
                z-index     : 1;
            }
    
            &--11 {
                grid-row    : 11 / 12;
                grid-column : 1 / 2;
            }
    
            &--12 {
                grid-row    : 12 / span 2;
                grid-column : 1 / span 2;
            }
    
            &--13 {
                grid-row    : 12 / span 2;
                grid-column : 3 / 4;
            }
    
            &--14 {
                grid-row    : 9 / span 5;
                grid-column : 4 / 5;
            }
            
        }

    }

}


// just testing but think this looks better than with no media queries

@media ( max-width :$bp-medium ) {

	.gallery {

        grid-template-rows    : repeat( 17, auto );
        grid-template-columns : repeat( 2, 1fr );

        &--item {

            &--1 {
                grid-row    : 1 / 2;
                grid-column : 1 / 2;
            }
    
            &--2 {
                grid-row    : 1 / span 3;
                grid-column : 2 / 3;
            }
    
            &--3 {
                grid-row    : 2 / span 2;
                grid-column : 1 / 2;
            }
    

            &--4 {
                grid-row    : 4 / 5;
                grid-column : 1 / span 2;
            }
    
            &--5 {
                grid-row    : 5 / span 3;
                grid-column : 1 / span 2;
            }
    
            &--6 {
                grid-row    : 8 / 9;
                grid-column : 1 / 2;
            }
    
            &--7 {
                grid-row    : 9 / 10;
                grid-column : 1 / 2;
            }
    
            &--8 {
                grid-row    : 8 / span 5;
                grid-column : 2 / 3;
                z-index     : 1;
            }
    
            &--9 {
                grid-row    : 8 / span 3;
                grid-column : 1 / 2;
                z-index     : 1;
            }
    
            &--10 {
                grid-row    : 11 / span 2;
                grid-column : 1 / 2;
            }
    
            &--11 {
                grid-row    : 11 / 12;
                grid-column : 2 / 3;
            }
    
            &--12 {
                grid-row    : 12 / 13;
                grid-column : 2 / 3;
            }
    
            &--13 {
                grid-row    : 13 / span 3;
                grid-column : 1 / span 2;
            }
    
            &--14 {
                grid-row    : 16 / span 2;
                grid-column : 1 / span 2;
            }
            
        }

    }

}
*/





// -------------------- END OF FILE









// lecture 116: Building the Footer

// in this lecture, we will just apply the concepts we've already learned to a new situation; however,
// we will have to install react-router-dom in order to use the Link component in the footer  

// #2
// react-router-dom: " Rogers-iMac:nexters-react Home$ npm install react-router-dom " and this
// will include react-router-dom in our nexter's react project
// lecture 116: Building the Footer



// ==============================
// GO TO SRC/COMPONENTS/FOOTER/FOOTER.COMPONENT.JSX
// ==============================



// ==============================
// BACK FROM SRC/COMPONENTS/FOOTER/FOOTER.COMPONENT.JSX
// ==============================


import React from 'react';
// will need to provide links so import in links from react router dom
import { Link } from 'react-router-dom';
// import in our stylesheet
import './footer.styles.scss';

// all the link will point to the home page or localhost:3001

const Footer = () => (

    <div className="footer">

        <ul className="nav">
            <li className="nav--item">
                <Link className="nav--link" to="/">
                    Find your dream home
                </Link>
            </li>
            <li className="nav--item">
                <Link className="nav--link" to="/">
                    Request proposal
                </Link>
            </li>
            <li className="nav--item">
                <Link className="nav--link" to="/">
                    Download home planner
                </Link>
            </li>
            <li className="nav--item">
                <Link className="nav--link" to="/">
                    Contact us
                </Link>
            </li>
            <li className="nav--item">
                <Link className="nav--link" to="/">
                    Submit your property
                </Link>
            </li>
            <li className="nav--item">
                <Link className="nav--link" to="/">
                    Come work with us!
                </Link>
            </li>
        </ul>

        <p className="copyright">
            &copy; Copyright 2020
        </p>

    </div>
);

export default Footer;



// -------------------- END OF FILE





// ==============================
// BACK FROM SRC/COMPONENTS/FOOTER/FOOTER.STYLES.SCSS
// ==============================


/*
// in order to use the sass variables in App.scss, I had to use @import "";
@import "../../App.scss";

.footer {

    grid-area : footer;

    padding : 8rem;

    background-color : $color-secondary;

    .nav {

        // now we can use flexbox or grid to place the nav items but Jonus thinks it's
        // easier to use grid when we want some space between the elements and the way
        // we make this work with grid is to define the number of columns

        // to make the footer responsive, Jonus suggest we do
        // " grid-template-columns : repeat( auto-fit, minmax( 15rem, 1fr ) ); " but I
        // did not like the way the items flowed into new rows as the viewport width
        // decreased so I think using media queries to make the footer responsive is the
        // best way to go and gives us a more professional look and feel than Jonus' solution

        display               : grid;
        grid-template-rows    : auto;
        grid-template-columns : repeat( 6, 1fr );
        grid-gap              : 2rem;

        list-style : none;

        // From the web: "The :link CSS pseudo-class represents an element that has not yet
        // been visited."

        &--link:link,
        &--link:visited {
            display : block;
            padding : 1.5rem;

            font-family     : $font-display-2; 
            font-size       : 1.4rem;
            color           : rgba( 255, 255, 255, 1 );
            text-align      : center;
            text-decoration : none;
            text-transform  : uppercase;

            transition : all 0.2s ease-out;
        }

        &--link:hover,
        &--link:active {
            background-color : rgba( 255, 255, 255, 0.05 );

            // move the background color up just a little to add a nice hoover effect
            transform: translate3d( 0, -3px, 0); 

        }

    }

    .copyright {
        margin : 6rem 0 0 0;

        font-size  : 1.4rem;
        color      : $color-grey-light-2;
        text-align : center; 
    }

}


// just testing but think this looks better than with no media queries

@media ( max-width : $bp-largest ) {

	.footer .nav {
        grid-template-rows    : auto;
        grid-template-columns : repeat( 3, 1fr );
    }

}


// just testing but think this looks better than with no media queries

@media ( max-width :$bp-large ) {

	.footer .nav {
        grid-template-rows    : auto;
        grid-template-columns : repeat( 2, 1fr );
    }

}



// just testing but think this looks better than with no media queries

@media ( max-width :$bp-medium ) {

	.footer .nav {
        grid-template-rows    : auto;
        grid-template-columns : 1fr;
    }

}
*/





// -------------------- END OF FILE








// lecture 117: Building the Sidebar

// for this lecture, we are just adding the button to the sidebar




// ==============================
// GO TO SRC/COMPONENTS/SIDEBAR/SIDEBAR.COMPONENT.JSX
// ==============================



// ==============================
// BACK FROM SRC/COMPONENTS/SIDEBAR/SIDEBAR.COMPONENT.JSX
// ==============================



// -------------------- END OF FILE





// ==============================
// BACK FROM SRC/COMPONENTS/SIDEBAR/SIDEBAR.STYLES.SCSS
// ==============================


/*
// in order to use the sass variables in App.scss, I had to use @import "";
@import "../../App.scss";

.sidebar {
    grid-area : sidebar;

    // let's use flexbox to center the hamburger icon and Jonus said flexbox is the perfect
    // solution for aligning and centering small stuff

    display         : flex;
    justify-content : center;

    background-color : $color-primary;

    .nav-btn {
        margin : 4rem 0 0 0;

        border        : none;
        border-radius : 0;


        // ==============================
        // HOW TO CREATE HAMBURGER ICON IN CSS - BEGINNING
        // ==============================


        // we will use css to create the button or hamburger icon and in order to do that we
        // will add all the key value pairs and pseudo classes listed below:

        width  : 4.5rem;
        height : 2px;

        background-color : rgba( 255, 255, 255, 1 );

        &::before,
        &::after {
            display : block;            
            width   : 4.5rem;
            height  : 2px;
    
            background-color : rgba( 255, 255, 255, 1 );

            // in order to make these pseudo elements visible we need to add the
            // content property

            content : '';
        }

        // move the ::before pseudo class up and the ::after pseudo class down

        &::before {
            transform : translate3d( 0, -1.2rem, 0 );
        }

        // to give the same spacing to the third line as the first line ( in comparison to the
        // second line or middle line ) we need to change the translateY value from 1.5rem to
        // 1.3rem

        &::after {
            transform : translate3d( 0, 1.05rem, 0 );
        }


        // ==============================
        // HOW TO CREATE HAMBURGER ICON IN CSS - ENDING
        // ==============================


    }

}
*/





// -------------------- END OF FILE








// lecture 117: Building the Sidebar - Including the Sliding Menu





// ==============================
// GO TO SRC/COMPONENTS/SIDEBAR/SIDEBAR.COMPONENT.JSX
// ==============================



// ==============================
// BACK FROM SRC/COMPONENTS/SIDEBAR/SIDEBAR.COMPONENT.JSX
// ==============================


import React from 'react';
// import in our stylesheet
import './sidebar.styles.scss';
// import in the SidebarNav component
import SidebarNav from '../sidebar-nav/sidebar-nav.component';
// import in the Menu component
import Menu from '../menu/menu.component';


class Sidebar extends React.Component {

    state = {
        visible : false
    };

    handleMouseDown = ( e ) => {

        this.setState( { visible : !this.state.visible } );

        // from Kirupa's webpage: "We call the stopPropagation() method to prevent our
        // click event from traveling beyond our Sidebar component's borders. We do this to
        // safeguard other elements on the page that might also be listening to click events
        // from accidentally reacting to our menu click."

        e.stopPropagation();

    }

    render() {
        
        // had to add the div with the class name of "sidebar-nav" and give the div
        // the onMouseDown property or " onMouseDown={ this.handleMouseDown } " so that
        // the clickable area was larger than before or was larger than the clickable
        // area of button alone

        return (

            <div className="sidebar">

                <SidebarNav
                    handleMouseDown={ this.handleMouseDown }
                />
                <Menu
                    handleMouseDown={ this.handleMouseDown }
                    menuVisibility={ this.state.visible }
                />

            </div>

        );

    }

}

export default Sidebar;



// -------------------- END OF FILE





// ==============================
// BACK FROM SRC/COMPONENTS/SIDEBAR/SIDEBAR.STYLES.SCSS
// ==============================


/*
// in order to use the sass variables in App.scss, I had to use @import "";
@import "../../App.scss";

.sidebar {

    grid-area : sidebar;

    // let's use flexbox to center the hamburger icon and Jonus said flexbox is the perfect
    // solution for aligning and centering small stuff

    display         : flex;
    justify-content : center;

    background-color : $color-primary;

}
*/


// -------------------- END OF FILE





// ==============================
// BACK FROM SRC/COMPONENTS/SIDEBAR-NAV/SIDEBAR-NAV.COMPONENT.JSX
// ==============================


import React from 'react';
// import in our stylesheet
import './sidebar-nav.styles.scss';


const SidebarNav = ( { handleMouseDown } ) => (

    <div className="sidebar-nav"
        onMouseDown={ handleMouseDown }
    >

        <button
            className="sidebar-nav--btn"
        >
        </button>

    </div>

);

export default SidebarNav;



// -------------------- END OF FILE





// ==============================
// BACK FROM SRC/COMPONENTS/SIDEBAR-NAV/SIDEBAR-NAV.STYLES.SCSS
// ==============================


/*
// in order to use the sass variables in App.scss, I had to use @import "";
@import "../../App.scss";


.sidebar-nav {

    // added height to the div to make the clickable area larger than before
    
    height : 7rem;

    &--btn {
        margin : 4rem 0 0 0;

        border        : none;
        border-radius : 0;


        // ==============================
        // HOW TO CREATE HAMBURGER ICON IN CSS - BEGINNING
        // ==============================


        // we will use css to create the button or hamburger icon and in order to do that we
        // will add all the key value pairs and pseudo classes listed below:

        width  : 4.5rem;
        height : 2px;

        background-color : rgba( 255, 255, 255, 1 );

        &::before,
        &::after {
            display : block;            
            width   : 4.5rem;
            height  : 2px;
    
            background-color : rgba( 255, 255, 255, 1 );

            // in order to make these pseudo elements visible we need to add the
            // content property

            content : '';
        }

        // move the ::before pseudo class up and the ::after pseudo class down

        &::before {
            transform : translate3d( 0, -1.2rem, 0 );
        }

        // to give the same spacing to the third line as the first line ( in comparison to the
        // second line or middle line ) we need to change the translateY value from 1.5rem to
        // 1.3rem

        &::after {
            transform : translate3d( 0, 1.05rem, 0 );
        }


        // ==============================
        // HOW TO CREATE HAMBURGER ICON IN CSS - ENDING
        // ==============================


    }

}
*/



// -------------------- END OF FILE






// ==============================
// BACK FROM SRC/COMPONENTS/MENU/MENU.COMPONENT.JSX
// ==============================


import React from 'react';
// will need to provide links so import in links from react router dom
import { Link } from 'react-router-dom';
// import in our stylesheet
import './menu.styles.scss';


class Menu extends React.Component {

    render() {

        let visibility = "hide";

        if ( this.props.menuVisibility ) {

            visibility = "show";

        }

        return (

            <div id="menu"

                onMouseDown={ this.props.handleMouseDown }
                className={ visibility }

            >

                <ul className="header-nav">

                    <li className="header-nav--item">
                        <Link className="header-nav--link" to="/">
                            Home
                        </Link>
                    </li>

                    <li className="header-nav--item">
                        <Link className="header-nav--link" to="/">
                            About
                        </Link>
                    </li>

                    <li className="header-nav--item">
                        <Link className="header-nav--link" to="/">
                            Contact
                        </Link>
                    </li>

                    <li className="header-nav--item">
                        <Link className="header-nav--link" to="/">
                            Search
                        </Link>
                    </li>

                </ul>

            </div>

        );
        
    }

}

export default Menu;



// -------------------- END OF FILE





// ==============================
// BACK FROM SRC/COMPONENTS/MENU/MENU.STYLES.SCSS
// ==============================


/*
// in order to use the sass variables in App.scss, I had to use @import "";
@import "../../App.scss";

#menu {

    position : fixed;
    top      : 0;
    left     : 0;
    z-index  : 100;
    width    : 30vw;
    height   : 100vh;

    background-color : $color-primary;

    cursor     : pointer;
    transition : all .3s ease-out;

    &.hide {
        transform : translate3d( -30vw, 0, 0 );
    }

    &.show {
        transform : translate3d( 0vw, 0, 0 );
    }
    
    .header-nav{

        display               : grid;
        grid-template-rows    : repeat( 4, 5rem );
        grid-template-columns : 25rem;
        justify-content       : center; 
        grid-gap              : 2rem;
        padding               : 2rem 0 0 0;

        list-style : none;

        // From the web: "The :link CSS pseudo-class represents an element that has not yet
        // been visited."

        &--link:link,
        &--link:visited {
            display : block;
            padding : 1.5rem;

            font-family     : $font-display-2; 
            font-size       : 2.0rem;
            color           : rgba( 255, 255, 255, 1 );
            text-align      : center;
            text-decoration : none;
            text-transform  : uppercase;

            transition : all 0.2s ease-out;
        }

        &--link:hover,
        &--link:active {
            background-color : rgba( 255, 255, 255, 0.05 );

            // move the background color up just a little to add a nice hoover effect
            transform: translate3d( 0, -3px, 0); 
        }

    }

}
*/



// -------------------- END OF FILE









// lecture 118: Building the Header - Part 1

// in this lecture, we will learn how to manage vertical spacing in a responsive layout using
// CSS Grid and how to use the ::before and ::after pseudo elements as grid items



// ==============================
// GO TO SRC/COMPONENTS/HEADER/HEADER.COMPONENT.JSX
// ==============================



// ==============================
// BACK FROM SRC/COMPONENTS/HEADER/HEADER.COMPONENT.JSX
// ==============================

// GO TO THE NEXT LECTURE TO VIEW THIS FILE

// -------------------- END OF FILE





// ==============================
// BACK FROM SRC/COMPONENTS/HEADER/HEADER.STYLES.SCSS
// ==============================


/*
// GO TO THE NEXT LECTURE TO VIEW THIS FILE
*/





// -------------------- END OF FILE









// lecture 119: Building the Header - Part 2




// ==============================
// GO TO SRC/COMPONENTS/HEADER/HEADER.COMPONENT.JSX
// ==============================



// ==============================
// BACK FROM SRC/COMPONENTS/HEADER/HEADER.COMPONENT.JSX
// ==============================


import React from 'react';
// import in our stylesheet
import './header.styles.scss';
// import in the site logo and then do src={} below
import logo from '../../assets/logo.png';
// import in the social proof logos and then do src={} below
import logoBBC from '../../assets/logo-bbc.png';
import logoForbes from '../../assets/logo-forbes.png';
import logoTechCrunch from '../../assets/logo-techcrunch.png';
import logoBusinessInsider from '../../assets/logo-bi.png';


const Header = () => (

    <div className="header">

        <img 
            src={ logo }
            className="header--logo"
            alt="Nexter logo"
        />

        <h3 className="heading-3">Your own home:</h3>

        <h1 className="heading-1">The ultimate personal freedom</h1>

        <button className="header--btn">View our properties</button>

        <div className="header--seenon-text">Seen on</div>

        <div className="header--seenon-logos">
            <img 
                src={ logoBBC }
                className="header--logo-bbc"
                alt="Seen on logo 1"
            />
            <img 
                src={ logoForbes }
                className="header--logo-forbes"
                alt="Seen on logo 3"
            />
            <img 
                src={ logoTechCrunch }
                className="header--logo-tech-crunch"
                alt="Seen on logo 4"
            />
           <img
                src={ logoBusinessInsider }
                className="header--logo-business-insider"
                alt="Seen on logo 2"
            />
        
        </div>

    </div>
);

export default Header;



// -------------------- END OF FILE





// ==============================
// BACK FROM SRC/COMPONENTS/HEADER/HEADER.STYLES.SCSS
// ==============================


/*
// in order to use the sass variables in App.scss, I had to use @import "";
@import "../../App.scss";

.header {
    grid-area : header;

    display               : grid;

    // now we need to add some vertical spacing here and remember that this row has a height
    // of 80vh and we want the first row to have a height of 1fr, the second row to have a
    // height of min-content, the third row to have a height of 6rem, the fourth row to have
    // a height of 1fr 

    grid-template-rows    : 1fr min-content 6rem 1fr;

    // we want the column to have the same width as the h1 text so we do
    // " grid-template-columns : max-content; " and now we just need to center the column
    // track by using justify-content or " justify-content : center; "

    grid-template-columns : max-content;
    justify-content       : center;
    grid-row-gap          : 1.5rem;
    padding               : 4rem 8rem 8rem 8rem;

    // create an overlay by doind the following:

    background-image      : linear-gradient( to right, rgba( $color-secondary, 0.93 ), rgba( $color-secondary, 0.93 ) ), url( ../../assets/hero.jpeg ); // rgba( 198, 153, 99, 1 )
    background-position   : center; 
    background-size       : cover;
    background-blend-mode : multiply;

    .heading-3 {
        font-family    : $font-display-2;
        font-size      : 1.6rem; 
        font-weight    : 400;
        color          : $color-primary;
        text-transform : uppercase; 
    }

    .heading-1 {
        font-family : $font-display-2;
        font-size   : 4.5rem;
        font-weight : 400;
        color       : $color-grey-light-1;
        line-height : 1;
    }

    &--logo {

        // center the logo in the container horizontally

        justify-self : center;

        height : 3rem;
    }

    &--seenon-text {

        // remember even text can be a grid item and pseudo elements can also be grid items

        // below we will have 3 grid items: the text, the ::before pseudo element and the
        // ::after pseudo element

        display               : grid;
        grid-template-rows    : auto;

        // we want to give the text a max-content value and then let the first line and the
        // last line take up the remaining space inside the container

        grid-template-columns : 1fr max-content 1fr;
        align-items           : center;
        grid-column-gap       : 1.5rem; 

        font-size  : 1.6rem;
        color      : $color-grey-light-2;
        text-align : center; 
        
        &::before,
        &::after {

            display : block;
            height  : 1px;

            background-color : $color-grey-light-2;
            
            // remember, we need to define the content property in order for the above pseudo
            // elements to work

            content : '';

        }


    }

    &--seenon-logos {

        display               : grid;
        grid-template-rows    : auto;
        grid-template-columns : repeat( 4, 1fr );

        // use " justify-items : center; " to center each item inside its grid cell

        justify-items         : center;
        grid-column-gap       : 3rem; 

        > img {

            // make sure the 4 social proof images have the same height

            height : 2.5rem;

            // we want the images to be more subtle and not be so bright so we use
            // " filter : brightness( 70% ); "

            filter : brightness( 70% );

        }
    }

    &--btn {

        // in order to prevent our button from stretching to fit the height of the row
        // we need to use the properties align-self and justify-self or " align-self : start; "
        // and " justify-self : start; "

        align-self   : start;
        justify-self : start; 

        // we want the button to start as the beginning of the container so let's apply
        // " just "
        
        @include button;

    }

}
*/





// -------------------- END OF FILE








// lecture 120: Building the Realtors Section

// in this lecture, we will apply what we have already learned 



// ==============================
// GO TO SRC/COMPONENTS/REALTORS/REALTORS.COMPONENT.JSX
// ==============================



// ==============================
// BACK FROM SRC/COMPONENTS/REALTORS/REALTORS.COMPONENT.JSX
// ==============================


import React from 'react';
// import in our stylesheet
import './realtors.styles.scss';
// import in the first realtor image and then do src={} below
import realtor1 from '../../assets/realtor-1.jpeg';
// import in the second realtor image and then do src={} below
import realtor2 from '../../assets/realtor-2.jpeg';
// import in the third realtor image and then do src={} below
import realtor3 from '../../assets/realtor-3.jpeg';


const Realtors = () => (

    <div className="realtors">

        <h3 className="heading-h3">Top 3 Realtors</h3>

        <div className="realtors--list">

            <img 
                src={ realtor1 }
                className="realtors--img"
                alt="Realtor 1"
            />
            <div className="realtors--details">
                <h4 className="heading-4">Erik Feinman</h4>
                <p className="realtors--sold">245 houses sold</p>
            </div>

            <img 
                src={ realtor2 }
                className="realtors--img"
                alt="Realtor 2"
            />
            <div className="realtors--details">
                <h4 className="heading-4">Kim Brown</h4>
                <p className="realtors--sold">212 houses sold</p>
            </div>

            <img 
                src={ realtor3 }
                className="realtors--img"
                alt="Realtor 3"
            />
            <div className="realtors--details">
                <h4 className="heading-4">Toby Ramsey</h4>
                <p className="realtors--sold">198 houses sold</p>
            </div>

        </div>

    </div>
);

export default Realtors;



// -------------------- END OF FILE






// ==============================
// BACK FROM SRC/COMPONENTS/REALTORS/REALTORS.STYLES.SCSS
// ==============================


/*
// in order to use the sass variables in App.scss, I had to use @import "";
@import "../../App.scss";

.realtors {
    grid-area : realtors;

    // after we had already wrote most of the code in this file, we still needed to center
    // vertically the heading-h3 text and the grid container and we used grid to do this
    // or " display : grid; " and " align-content : center; "

    // remember the grid container below contained 2 items ( i.e. the heading-h3 text and
    // the grid container created in &--list {} below ) so the grid container for .realtors
    // contained 2 rows and 1 column and we did not need to define " grid-template-rows "
    // or " grid-template-columns " we just needed to define the 2 key value pairs or 
    // " display : grid; " and " align-content : center; " in order to vertically center
    // the .realtors grid

    // remember, I already horizontally centered the .realtors--list grid in the selector
    // below ( i.e.  &--list {} ) so I did not need to horizontally center the ,realtors
    // grid but if this was needed I could have horizontally centered the .realtors grid
    // by doing " justify-content : center; "

    display       : grid;
    align-content : center;

    // we needed to add some spacing between the heading-h3 text and the grid container in
    // &--list {} so we used " grid-row-gap "

    grid-row-gap  : 2rem;

    padding : 3rem;

    background-color : $color-secondary;

    .heading-h3 {
        font-family    : $font-display-2;
        font-size      : 1.6rem; 
        font-weight    : 400;
        color          : $color-primary;
        text-align     : center;
        text-transform : uppercase; 
    }

    &--list {

        display               : grid;

        // we could have left out " grid-template-rows : repeat( 3, auto ); " but I decided
        // to put it here anyway just be explicit with our code

        grid-template-rows    : repeat( 3, auto );

        // we know the first column will be 7rems wide ( see &--img {} below ) and we will
        // set the first column to " min-content " ( although we could have used " max-content "
        // for the first column ) and we will set the second column to " max-content "

        grid-template-columns : min-content max-content;
        justify-content       : center;
        align-items           : center;
        
        // for grid-row-gap, we do " grid-row-gap ; 5vh; " and the reason we use 5vh is that
        // we want the vertical spacing between the grid items to shrink as the viewport
        // height shrinks

        grid-row-gap          : 5vh;
        grid-column-gap       : 2rem;

    }

    // grid will put the images in the first column

    &--img {

        // Jonus said it is always best to do " display : block; " with images

        display : block;

        // to shrink the images we just define the width and not the height so do
        // " width : 7rem; "

        width   : 7rem;

        // to round the images, do " border-radius : 50%; "

        border-radius : 50%; 

    }

    // grid will put the div in the second column

    .heading-4 {
        font-family : $font-display-2;
        font-size   : 1.9rem;
        font-weight : 400;
        color       : $color-grey-light-1;
    }

    &--sold {

        // per Jonus' recommendation, we moved the text up just a little bit because
        // it looked better that way

        margin : -0.3rem 0 0 0;
        
        color          : $color-grey-light-2;
        text-transform : uppercase;

    }

}



// responsive change #16

@media only screen and ( max-width : $bp-medium ) {

    .realtors {

        padding : 6rem;

        background-color : $color-grey-light-1;

        &--list {

            grid-template-rows    : auto;
            grid-template-columns : repeat( 3, min-content max-content );

        }

        .heading-4 {
            color : $color-grey-dark-1;
        }

        &--sold {            
            color : $color-grey-dark-1;
        }

    }

}



// responsive change #18

@media only screen and ( max-width : $bp-small ) {

    .realtors {

        &--list {

            grid-template-rows    : repeat( 3, auto );
            grid-template-columns : min-content max-content;    

        }

    }

}
*/





// -------------------- END OF FILE








// lecture 121: Writing Media Queries - Part 1

// in the next 2 lectures, we are going to apapt our website to a smaller screen and
// make the site truly responsive and to do that we are going to write a couple media queries





// ==============================
// GO TO SRC/COMPONENTS/HEADER/HEADER.STYLES.SCSS
// ==============================



// ==============================
// BACK FROM SRC/COMPONENTS/HEADER/HEADER.STYLES.SCSS
// ==============================


/*
// in order to use the sass variables in App.scss, I had to use @import "";
@import "../../App.scss";

.header {
    grid-area : header;

    display               : grid;

    // responsive change #1
    // in order to prevent the main heading ( i.e. The ultimate personal freedom ) from
    // overflowing into the next row, we had to change grid-template-rows from
    // " grid-template-rows : 1fr min-content 6rem 1fr; " to
    // " grid-template-rows    : 1fr min-content minmax( 6rem, min-content ) 1fr; " and
    // this fixed our overflow issue

    grid-template-rows    : 1fr min-content minmax( 6rem, min-content ) 1fr;

    // responsive change #2
    // to make the header responsive, change " grid-template-columns : max-content; " to
    // " grid-template-columns : minmax( min-content, max-content; ); "

    grid-template-columns : minmax( min-content, max-content );
    justify-content       : center;
    grid-row-gap          : 1.5rem;
    padding               : 4rem 8rem 8rem 8rem;

    // create an overlay by doind the following:

    background-image      : linear-gradient( to right, rgba( $color-secondary, 0.93 ), rgba( $color-secondary, 0.93 ) ), url( ../../assets/hero.jpeg ); // rgba( 198, 153, 99, 1 )
    background-position   : center; 
    background-size       : cover;
    background-blend-mode : multiply;

    .heading-3 {
        font-family    : $font-display-2;
        font-size      : 1.6rem; 
        font-weight    : 400;
        color          : $color-primary;
        text-transform : uppercase; 
    }

    .heading-1 {
        font-family : $font-display-2;
        font-size   : 4.5rem;
        font-weight : 400;
        color       : $color-grey-light-1;
        line-height : 1;
    }

    &--logo {

        justify-self : center;

        height : 3rem;
    }

    &--seenon-text {

        display               : grid;
        grid-template-rows    : auto;

        grid-template-columns : 1fr max-content 1fr;
        align-items           : center;
        grid-column-gap       : 1.5rem; 

        font-size  : 1.6rem;
        color      : $color-grey-light-2;
        text-align : center; 
        
        &::before,
        &::after {

            display : block;
            height  : 0.1rem;

            background-color : $color-grey-light-2;

            content : '';

        }

    }

    &--seenon-logos {

        display               : grid;
        grid-template-rows    : auto;
        grid-template-columns : repeat( 4, 1fr );

        // responsive change #3
        // as the viewport got smaller, we had to add " align-items : center; " in order to
        // center all the grid items

        align-items           : center; 
        justify-items         : center;
        grid-column-gap       : 3rem; 

        > img {

            // responsive change #4
            // we need set max-height and max-width in order to make the images responsive

            max-width  : 100%;
            max-height : 2.5rem;

            filter : brightness( 70% );

        }
    }

    &--btn {

        align-self   : start;
        justify-self : start; 
        
        @include button;

    }

}


// responsive change #5
// Jonus philosophy on media queries is to resize the screen and see where the design breaks
// and these desgin breaks will approximate the breakpoints we use in our media queries so let's
// first define our breakpoint in our App.scss file
*/




// -------------------- END OF FILE




// ==============================
// BACK FROM SRC/APP.SCSS
// ==============================


/*
// this files acts as our base.scss file


// ==============================
// COLOR VARIABLES
// ==============================

$color-primary      : rgba( 198, 153, 99, 1 );
$color-primary-dark : rgba( 178, 132, 81, 1 );

$color-secondary    : rgba( 16, 29, 44, 1 );

$color-grey-light-1 : rgba( 249, 247, 246, 1 );
$color-grey-light-2 : rgba( 170, 170, 170, 1 );


$color-grey-dark-1 : rgba( 84, 72, 58, 1 );
$color-grey-dark-2 : rgba( 109, 93, 75, 1 );



// ==============================
// FONT VARIABLES
// ==============================

$font-primary-1  : 'Open Sans', Arial, sans-serif;
$font-primary-2  : 'Nunito', Arial, sans-serif;
$font-display-1  : 'Open Sans Condensed', Arial, sans-serif;
$font-display-2  : 'Josefin Sans', Arial, sans-serif;




// responsive change #6

// ==============================
// RESPONSIVE BREAKPOINTS
// ==============================

$bp-largest : 80em;   // 1280px / 16px or the average font size in most browsers = 80em
$bp-large   : 62.5em; // 1000px / 16px or the average font size in most browsers = 62.5em


@mixin button {
    padding : 1.8rem 3.0rem;

    border        : none; // get rid of the default border
    border-radius : 0; // get rid of the default radius 

    font-family    : $font-display-2;
    font-size      : 1.5rem;  
    color          : rgba( 255, 255, 255, 1 );
    text-transform : uppercase; 

    background-color : $color-primary;

    transition : all 0.2s ease-out; 
    cursor     : pointer;

    &:hover {
        background-color : $color-primary-dark;
    }
}


// ==============================
// MY BASE STYLES
// ==============================

// Jonus said to start with a global reset
*,
*::before,
*::after {
    margin  : 0;
    padding : 0;

    box-sizing : border-box;
}


html {
    font-size : 62.5%; // 1 rem = 10px
    
    // responsive change #7
    @media only screen and ( max-width : $bp-largest ) {

        // remember we want to reduce the font on smaller screens and we do that by using
        // media queries and changing the font size, in this case, from
        // " font-size : 62.5%; " to " font-size : 50.0%; " so for example, if our fonts for
        // an element was defined at 2rem or 20px on large screens or screens larger than
        // 1200px, now our font will be reduced to 16px ( 50% * 16px = 8px * 2rem = 16px )
        // automatically on small screens or screens less than 1200px and all this is the
        // result from using this one media query

        // so now 1rem equals 8px

        // I tested this and it works and looks good

        // once our viewport shrinks to 1000px and below then we'll move the sidebar to the
        // top of the container and to do that let's start by adding a new breakpoint above
        // and then go to homepage.styles.scss

        font-size : 50%;

    }

}


body {
    overflow-x : hidden; // get rid of horizontal scroll bar

    font-family : $font-primary-2;
    font-weight : 300;
    color       : $color-grey-dark-2;
    line-height : 1.6;

    // background : rgba( 227, 227, 232, 1 );
    // let's go with a white background for this site
    background : rgba( 255, 255, 255, 1 );    

    @media all and ( max-width : 480px ) {

        background : rgba( 255, 255, 255, 1 );

    }

    @media all and ( max-width : 320px ) {

        overflow-x : scroll;

    }
}


input::-moz-focus-inner { // remove input padding in FF
	padding : 0;

	border  : 0;
}


@-ms-viewport {
	width : device-width;
}
*/





// -------------------- END OF FILE





// ==============================
// BACK FROM SRC/PAGES/HOMEPAGE/HOMEPAGE.STYLES.SCSS
// ==============================


/*

// in order to use the sass variables in App.scss, I had to use @import "";
@import "../../App.scss";

.container {
    display               : grid;
    grid-template-rows    : 80vh                       // row 1 - 2    ( row 1 )
                            min-content                // row 2 - 3    ( row 2 )
                            40vw                       // row 3 - 4    ( row 3 )
                            repeat( 3, min-content );  // row 4 - 7    ( row 4, 5, 6 )

    grid-template-columns : 8rem                                        // col 1 - 2   ( column 1 )
                            minmax( 6rem, 1fr )                         // col 2 - 3   ( column 2 )
                            repeat( 8, minmax( min-content, 14rem ) )   // col 3 - 11  ( column 3 - 10 )
                            minmax( 6rem, 1fr );                        // col 11 - 12 ( column 11 )

    grid-template-areas   :
    // col 1   col 2   col 3    col 4    col 5    col 6    col 7    col 8    col 9    col 10   col 11
    "  sidebar header  header   header   header   header   header   header   realtors realtors realtors  "  // row 1
    "  sidebar .       features features features features features features features features .         "  // row 2
    "  sidebar TP      TP       TP       TP       TP       TC       TC       TC       TC       TC        "  // row 3
    "  sidebar .       homes    homes    homes    homes    homes    homes    homes    homes    .         "  // row 4
    "  sidebar gallery gallery  gallery  gallery  gallery  gallery  gallery  gallery  gallery  gallery   "  // row 5
    "  sidebar footer  footer   footer   footer   footer   footer   footer   footer   footer   footer    "; // row 6

    // remember, . = full bleed, TP = testimonial pictures, TC = testimonial content
}


// responsive change #8
// let's move the sidebar to the top of the container and to do that we have to change out grid
// definition and this is where CSS Grid really shines so with a single media query we can
// completely change our entire layout simply by changing our grid definitions

@media only screen and ( max-width : $bp-large ) {

    // to move the sidebar to the top we want to add a row and remove a column
    
    .container {

        grid-template-rows    : 6rem                       // row 1 - 2    ( row 1 )
                                80vh                       // row 2 - 3    ( row 2 )
                                min-content                // row 3 - 4    ( row 3 )
                                40vw                       // row 4 - 5    ( row 4 )
                                repeat( 3, min-content );  // row 5 - 8    ( row 5, 6, 7 )

        grid-template-columns : minmax( 6rem, 1fr )                         // col 1 - 2   ( column 1 )
                                repeat( 8, minmax( min-content, 14rem ) )   // col 2 - 10  ( column 2 - 90 )
                                minmax( 6rem, 1fr );                        // col 10 - 11 ( column 10 )

        grid-template-areas   :
        // col 1   col 2    col 3    col 4    col 5    col 6    col 7    col 8    col 9   col 10
        "  sidebar sidebar  sidebar  sidebar  sidebar  sidebar  sidebar  sidebar  sidebar  sidebar   "  // row 1
        "  header  header   header   header   header   header   header   realtors realtors realtors  "  // row 2
        "  .       features features features features features features features features .         "  // row 3
        "  TP      TP       TP       TP       TP       TC       TC       TC       TC       TC        "  // row 4
        "  .       homes    homes    homes    homes    homes    homes    homes    homes    .         "  // row 5
        "  gallery gallery  gallery  gallery  gallery  gallery  gallery  gallery  gallery  gallery   "  // row 6
        "  footer  footer   footer   footer   footer   footer   footer   footer   footer   footer    "; // row 7

    }

}
*/





// -------------------- END OF FILE





// ==============================
// BACK FROM SRC/COMPONENTS/SIDEBAR/SIDEBAR.STYLES.SCSS
// ==============================


/*
// in order to use the sass variables in App.scss, I had to use @import "";
@import "../../App.scss";

.sidebar {

    grid-area : sidebar;

    // let's use flexbox to center the hamburger icon and Jonus said flexbox is the perfect
    // solution for aligning and centering small stuff

    // when we got to lecture 121, I changed the layout for the sidebar from flexbox to grid

    // responsive change #9

    display               : grid;
    grid-template-rows    : min-content;
    grid-template-columns : min-content;
    justify-content       : center;

    background-color : $color-primary;

}


// responsive change #10

@media only screen and ( max-width : $bp-large ) {

    .sidebar {

        // now that the sidebar is on top center the hamburger icon vertically
        
        align-content   : center;
        justify-content : end;
      
    }

}
*/





// -------------------- END OF FILE





// ==============================
// BACK FROM SRC/COMPONENTS/SIDEBAR-NAV/SIDEBAR-NAV.STYLES.SCSS
// ==============================


/*
// in order to use the sass variables in App.scss, I had to use @import "";
@import "../../App.scss";


.sidebar-nav {

    // responsive change #11
    // deleted " height : 7rem; "

    cursor : pointer;

    &--btn {

        // responsive change #12
        // added some margin-top to give some spacing between the hamburger icon and the top
        // of the container and added 4rem to margin-bottom to make the clickable area larger

        margin   : 4rem 0 4rem 0;

        border        : none;
        border-radius : 0;

        cursor : pointer;


        // ==============================
        // HOW TO CREATE HAMBURGER ICON IN CSS - BEGINNING
        // ==============================


        width  : 4.5rem;
        height : 0.2rem;

        background-color : rgba( 255, 255, 255, 1 );

        &::before,
        &::after {
            display : block;            
            width   : 4.5rem;
            height  : 0.2rem;
    
            background-color : rgba( 255, 255, 255, 1 );

            content : '';
        }

        &::before {
            transform : translate3d( 0, -1.2rem, 0 );
        }

        &::after {
            transform : translate3d( 0, 1.00rem, 0 );
        }


        // ==============================
        // HOW TO CREATE HAMBURGER ICON IN CSS - ENDING
        // ==============================


    }

}



// responsive change #13

@media only screen and ( max-width : $bp-large ) {

    .sidebar-nav {

        &--btn {

            // no longer need the margin-top or margin-bottom but we need margin-right
            // now
            
            margin : 0 3rem 0 0;

        }

    }

}
*/





// -------------------- END OF FILE










// lecture 122: Writing Media Queries - Part 2



// ==============================
// GO TO SRC/APP.SCSS
// ==============================



// ==============================
// BACK FROM SRC/APP.SCSS
// ==============================


/*
// the color variables and font variables were taken from Jonus' _base.scss file


// ==============================
// COLOR VARIABLES
// ==============================

$color-primary      : rgba( 198, 153, 99, 1 );
$color-primary-dark : rgba( 178, 132, 81, 1 );

$color-secondary    : rgba( 16, 29, 44, 1 );
$color-secondary-2  : rgba( 16, 29, 44, 0.85 );

$color-grey-light-1 : rgba( 249, 247, 246, 1 );
$color-grey-light-2 : rgba( 170, 170, 170, 1 );


$color-grey-dark-1 : rgba( 84, 72, 58, 1 );
$color-grey-dark-2 : rgba( 109, 93, 75, 1 );



// ==============================
// FONT VARIABLES
// ==============================

$font-primary-1  : 'Open Sans', Arial, sans-serif;
$font-primary-2  : 'Nunito', Arial, sans-serif;
$font-display-1  : 'Open Sans Condensed', Arial, sans-serif;
$font-display-2  : 'Josefin Sans', Arial, sans-serif;




// responsive change #6
// responsive change #14
// responsive change #17

// Jonus like to see where the design breaks and then create a breakpoint at the nearest 100
// pixel value so if the design breaks at 550px, for example, then Jonus will create a
// breakpoint at 600px


// ==============================
// RESPONSIVE BREAKPOINTS
// ==============================

$bp-largest : 80em;   // 1280px / 16px or the average font size in most browsers = 80em
$bp-large   : 62.5em; // 1000px / 16px or the average font size in most browsers = 62.5em
$bp-medium  : 50em; // 800px / 16px or the average font size in most browsers = 50em
$bp-small   : 37.5em; // 600px / 16px or the average font size in most browsers = 37.5em



// ==============================
// BUTTON MIXIN
// ==============================

@mixin button {
    padding : 1.8rem 3.0rem;

    border        : none; // get rid of the default border
    border-radius : 0; // get rid of the default radius 

    font-family    : $font-display-2;
    font-size      : 1.5rem;  
    color          : rgba( 255, 255, 255, 1 );
    text-transform : uppercase; 

    background-color : $color-primary;

    transition : all 0.2s ease-out; 
    cursor     : pointer;

    &:hover {
        background-color : $color-primary-dark;
    }
}



// ==============================
// MY BASE STYLES
// ==============================

// Jonus said to start with a global reset
*,
*::before,
*::after {
    margin  : 0;
    padding : 0;

    box-sizing : border-box;
}


// styles for the html section
html {
    font-size : 62.5%; // 1 rem = 10px
    
    // responsive change #7
    @media only screen and ( max-width : $bp-largest ) {

        // remember we want to reduce the font on smaller screens and we do that by using
        // media queries and changing the font size, in this case, from
        // " font-size : 62.5%; " to " font-size : 50.0%; " so for example, if our fonts for
        // an element was defined at 2rem or 20px on large screens or screens larger than
        // 1200px, now our font will be reduced to 16px ( 50% * 16px = 8px * 2rem = 16px )
        // automatically on small screens or screens less than 1200px and all this is the
        // result from using this one media query

        // so now 1rem equals 8px

        // I tested this and it works and looks good

        // once our viewport shrinks to 1000px and below then we'll move the sidebar to the
        // top of the container and to do that let's start by adding a new breakpoint above
        // and then go to homepage.styles.scss

        font-size : 50%;

    }

}


// styles for the body section
body {
    overflow-x : hidden; // get rid of horizontal scroll bar

    font-family : $font-primary-2;
    font-weight : 300;
    color       : $color-grey-dark-2;
    line-height : 1.6;

    // background : rgba( 227, 227, 232, 1 );
    // let's go with a white background for this site
    background : rgba( 255, 255, 255, 1 );    

    @media all and ( max-width : 480px ) {

        background : rgba( 255, 255, 255, 1 );

    }

    @media all and ( max-width : 320px ) {

        overflow-x : scroll;

    }
}


// special styles to apply to all pages
input::-moz-focus-inner { // remove input padding in FF
	padding : 0;

	border  : 0;
}


// make sure IE10 works in snap mode
@-ms-viewport {
	width : device-width;
}
*/





// -------------------- END OF FILE





// ==============================
// BACK FROM SRC/PAGES/HOMEPAGE/HOMEPAGE.STYLES.SCSS
// ==============================


/*

// in order to use the sass variables in App.scss, I had to use @import "";
@import "../../App.scss";

.container {
    display               : grid;
    grid-template-rows    : 80vh                       // row 1 - 2    ( row 1 )
                            min-content                // row 2 - 3    ( row 2 )
                            40vw                       // row 3 - 4    ( row 3 )
                            repeat( 3, min-content );  // row 4 - 7    ( row 4, 5, 6 )

    grid-template-columns : 8rem                                        // col 1 - 2   ( column 1 )
                            minmax( 6rem, 1fr )                         // col 2 - 3   ( column 2 )
                            repeat( 8, minmax( min-content, 14rem ) )   // col 3 - 11  ( column 3 - 10 )
                            minmax( 6rem, 1fr );                        // col 11 - 12 ( column 11 )

    grid-template-areas   :
    // col 1   col 2   col 3    col 4    col 5    col 6    col 7    col 8    col 9    col 10   col 11
    "  sidebar header  header   header   header   header   header   header   realtors realtors realtors  "  // row 1
    "  sidebar .       features features features features features features features features .         "  // row 2
    "  sidebar TP      TP       TP       TP       TP       TC       TC       TC       TC       TC        "  // row 3
    "  sidebar .       homes    homes    homes    homes    homes    homes    homes    homes    .         "  // row 4
    "  sidebar gallery gallery  gallery  gallery  gallery  gallery  gallery  gallery  gallery  gallery   "  // row 5
    "  sidebar footer  footer   footer   footer   footer   footer   footer   footer   footer   footer    "; // row 6

    // remember, . = full bleed, TP = testimonial pictures, TC = testimonial content
}



@media only screen and ( max-width : $bp-large ) {

    // to move the sidebar to the top we want to add a row and remove a column
    
    .container {

        grid-template-rows    : 6rem                       // row 1 - 2    ( row 1 )
                                80vh                       // row 2 - 3    ( row 2 )
                                min-content                // row 3 - 4    ( row 3 )
                                40vw                       // row 4 - 5    ( row 4 )
                                repeat( 3, min-content );  // row 5 - 8    ( row 5, 6, 7 )

        grid-template-columns : minmax( 6rem, 1fr )                         // col 1 - 2   ( column 1 )
                                repeat( 8, minmax( min-content, 14rem ) )   // col 2 - 10  ( column 2 - 9 )
                                minmax( 6rem, 1fr );                        // col 10 - 11 ( column 10 )

        grid-template-areas   :
        // col 1   col 2    col 3    col 4    col 5    col 6    col 7    col 8    col 9   col 10
        "  sidebar sidebar  sidebar  sidebar  sidebar  sidebar  sidebar  sidebar  sidebar  sidebar   "  // row 1
        "  header  header   header   header   header   header   header   realtors realtors realtors  "  // row 2
        "  .       features features features features features features features features .         "  // row 3
        "  TP      TP       TP       TP       TP       TC       TC       TC       TC       TC        "  // row 4
        "  .       homes    homes    homes    homes    homes    homes    homes    homes    .         "  // row 5
        "  gallery gallery  gallery  gallery  gallery  gallery  gallery  gallery  gallery  gallery   "  // row 6
        "  footer  footer   footer   footer   footer   footer   footer   footer   footer   footer    "; // row 7

    }

}




// responsive change #15
// when we get to 800px, let's place the realtors section below the header section and place
// the TP section below the TC section

// let's also increase the row height for the header to calc( 100vh - 6rem ) so that the sidebar
// and header fill the entire viewport when the viewport is 800px and below; however, during testing
// I noticed this did now work correctly given the mobile phone's address bar and the bar at the
// bottom of the screen so I changed " calc( 100vh - 6rem ) " to " calc( 88vh - 6rem ) " and it
// worked better accross iPhone and Samsung devices but it was not a perfect solution

// let's also change the row height for rows 5 & 6 to min-content and this not only looks better
// but is more responsive than 40vw for rows 5 & 6

@media only screen and ( max-width : $bp-medium ) {

    .container {

        grid-template-rows    : 6rem                       // row 1 - 2    ( row 1 )
                                calc( 88vh - 6rem )        // row 2 - 3    ( row 2 )
                                min-content                // row 3 - 4    ( row 3 ) 
                                min-content                // row 4 - 5    ( row 4 )
                                min-content                // row 5 - 6    ( row 5 )
                                min-content                // row 6 - 7    ( row 6)
                                repeat( 3, min-content );  // row 7 - 10    ( row 7, 8, 9 )

        grid-template-columns : minmax( 6rem, 1fr )                         // col 1 - 2   ( column 1 )
                                repeat( 8, minmax( min-content, 14rem ) )   // col 2 - 10  ( column 2 - 9 )
                                minmax( 6rem, 1fr );                        // col 10 - 11 ( column 10 )

        grid-template-areas   :
        // col 1   col 2    col 3    col 4    col 5    col 6    col 7    col 8    col 9   col 10
        "  sidebar  sidebar  sidebar  sidebar  sidebar  sidebar  sidebar  sidebar  sidebar  sidebar   "  // row 1
        "  header   header   header   header   header   header   header   header   header   header    "  // row 2
        "  realtors realtors realtors realtors realtors realtors realtors realtors realtors realtors  "  // row 3 
        "  .        features features features features features features features features .         "  // row 4
        "  TC       TC       TC       TC       TC       TC       TC       TC       TC       TC        "  // row 5
        "  TP       TP       TP       TP       TP       TP       TP       TP       TP       TP        "  // row 6
        "  .        homes    homes    homes    homes    homes    homes    homes    homes    .         "  // row 7
        "  gallery  gallery  gallery  gallery  gallery  gallery  gallery  gallery  gallery  gallery   "  // row 8
        "  footer   footer   footer   footer   footer   footer   footer   footer   footer   footer    "; // row 9

    }

}
*/





// -------------------- END OF FILE





// ==============================
// BACK FROM SRC/COMPONENTS/REALTORS/REALTORS.STYLES.SCSS
// ==============================


/*
See lecture 120 for the  realtors.styles.scss file
*/





// -------------------- END OF FILE





// ==============================
// BACK FROM SRC/COMPONENTS/TESTIMONIAL-PICTURES/TESTIMONIAL-PICTURES.STYLES.SCSS
// ==============================


/*

// in order to use the sass variables in App.scss, I had to use @import "";
@import "../../App.scss";

.testimonial-pictures {
    grid-area : TP;
    display   : grid;

    grid-template-rows    : repeat( 6, 1fr );
    grid-template-columns : repeat( 6, 1fr );
    align-items           : center;

    background-image : linear-gradient( to right, rgba( $color-primary, 0.5 ), rgba( $color-primary, 0.5 ) ), url( ../../assets/back.jpg ); // rgba( 198, 153, 99, 1 )
    background-size  : cover;

    &--img-1 {

        grid-row    : 2 / 6;
        grid-column : 2 / 6;
        
        // always use percentages when declaring the width for images so that the images can
        // be flexible
       
        width : 100%;

        box-shadow : 0 2rem 5rem rgba( 0, 0, 0, 0.1 );

    }

    &--img-2 {

        grid-row    : 4 / 6;
        grid-column : 4 / 7;
        z-index     : 1;
        width       : 115%;

        box-shadow : 0 2rem 5rem rgba( 0, 0, 0, 0.2 );

    }
}



// responsive change #19

// the grid-row values below are not very intuitive but through trail and error they
// work the best and just remember that when we declare a width of 100% or " width : 100%; "
// ( and no height ) the image will maintain its aspect ratio so the image may not occopy
// the defined rows but that's Ok, just experiment so that you can get the right look and
// feel for the images on the page 

@media only screen and ( max-width : $bp-medium ) {

    .testimonial-pictures {

        padding : 6rem;

        &--img-1 {

            grid-row    : 1 / -1;
            grid-column : 1 / 5;
    
        }
    
        &--img-2 {
    
            grid-row    : 1 / -1;
            width       : 100%;
    
        }

    }

}
*/




// -------------------- END OF FILE





// ==============================
// BACK FROM SRC/COMPONENTS/HEADER/HEADER.STYLES.SCSS
// ==============================


/*

// in order to use the sass variables in App.scss, I had to use @import "";
@import "../../App.scss";

.header {
    grid-area : header;

    display               : grid;

    // responsive change #1
    // in order to prevent the main heading ( i.e. The ultimate personal freedom ) from
    // overflowing into the next row, we had to change grid-template-rows from
    // " grid-template-rows : 1fr min-content 6rem 1fr; " to
    // " grid-template-rows    : 1fr min-content minmax( 6rem, min-content ) 1fr; " and
    // this fixed our overflow issue

    grid-template-rows    : 1fr min-content minmax( 6rem, min-content ) 1fr;

    // responsive change #2
    // to make the header responsive, change " grid-template-columns : max-content; " to
    // " grid-template-columns : minmax( min-content, max-content; ); "

    grid-template-columns : minmax( min-content, max-content );
    justify-content       : center;
    grid-row-gap          : 1.5rem;
    padding               : 4rem 8rem 8rem 8rem;

    // create an overlay by doind the following:

    background-image      : linear-gradient( to right, rgba( $color-secondary, 0.93 ), rgba( $color-secondary, 0.93 ) ), url( ../../assets/hero.jpeg ); // rgba( 198, 153, 99, 1 )
    background-position   : center; 
    background-size       : cover;
    background-blend-mode : multiply;

    .heading-3 {
        font-family    : $font-display-2;
        font-size      : 1.6rem; 
        font-weight    : 400;
        color          : $color-primary;
        text-transform : uppercase; 
    }

    .heading-1 {
        font-family : $font-display-2;
        font-size   : 4.5rem;
        font-weight : 400;
        color       : $color-grey-light-1;
        line-height : 1;
    }

    &--logo {

        justify-self : center;

        height : 3rem;
    }

    &--seenon-text {

        display               : grid;
        grid-template-rows    : auto;
        grid-template-columns : 1fr max-content 1fr;
        align-items           : center;
        grid-column-gap       : 1.5rem; 

        font-size  : 1.6rem;
        color      : $color-grey-light-2;
        text-align : center; 
        
        &::before,
        &::after {

            display : block;
            height  : 0.1rem;

            background-color : $color-grey-light-2;
            
            content : '';

        }

    }

    &--seenon-logos {

        display               : grid;
        grid-template-rows    : auto;
        grid-template-columns : repeat( 4, 1fr );

        // responsive change #3
        // as the viewport got smaller, we had to add " align-items : center; " in order to
        // center all the grid items

        align-items           : center; 

        justify-items         : center;
        grid-column-gap       : 3rem; 

        > img {

            // responsive change #4
            // we need set max-height and max-width in order to make the images responsive

            max-width  : 100%;
            max-height : 2.5rem;

            filter : brightness( 70% );

        }
    }

    &--btn {

        align-self   : start;
        justify-self : start; 

        @include button;

    }

}


// responsive change #5
// Jonus philosophy on media queries is to resize the screen and see where the design breaks
// and these desgin breaks will approximate the breakpoints we use in our media queries so let's
// first define our breakpoint in our App.scss file


// responsive change #20

@media only screen and ( max-width : $bp-small ) {

    .header {

        padding : 5rem;

    }

}
*/




// -------------------- END OF FILE





// ==============================
// BACK FROM SRC/COMPONENTS/FEATURES/FEATURES.STYLES.SCSS
// ==============================


/*
// in order to use the sass variables in App.scss, I had to use @import "";
@import "../../App.scss";

.features {
    grid-area             : features;

    display               : grid;
    grid-template-rows    : auto auto; // auto is the default value here
    grid-template-columns : repeat( auto-fit, minmax( 30rem, 1fr ) );
    grid-gap              : 6rem; 
    margin                : 15rem 0;

    // grid item for .features
    > .feature {

        display               : grid;
        grid-template-rows    : repeat( 2, min-content );
        grid-template-columns : min-content 1fr;
        grid-row-gap          : 1.5rem;
        grid-column-gap       : 2.5rem;
        align-items           : center;

        // grid item for .feature
        > .feature-icon {
            width  : 4.5rem;
            height : 4.5rem;
    
            // let's change the color of the svg icon and we do that by using the " fill " property

            fill : $color-primary;
        }
    
        // grid item for .feature
        > .feature-heading-4 {
            font-family : $font-display-2;
            font-size   : 1.9rem;
            font-weight : 400;
            color       : $color-grey-dark-1;
        }
    
        // grid item for .feature
        > .feature-text {
            grid-row    : 2 / 3;
            grid-column : 2 / 3; 

            font-size : 1.7rem;
        }
    }
}



// responsive change #21

@media only screen and ( max-width : $bp-medium ) {

    .features {

        margin : 12rem 0;

    }

}
*/




// -------------------- END OF FILE




// ==============================
// BACK FROM SRC/COMPONENTS/FEATURES/FEATURES.STYLES.SCSS
// ==============================


/*
// in order to use the sass variables in App.scss, I had to use @import "";
@import "../../App.scss";

#menu {

    position : fixed;
    top      : 0;
    left     : 0;
    z-index  : 100;
    width    : 30vw;
    height   : 100vh;

    background-color : $color-primary;

    cursor     : pointer;
    transition : all .3s ease-out;

    &.hide {
        transform : translate3d( -30vw, 0, 0 );
    }

    &.show {
        transform : translate3d( 0vw, 0, 0 );
    }
    
    .header-nav{

        display               : grid;
        grid-template-rows    : repeat( 4, 5rem );
        grid-template-columns : 25rem;
        justify-content       : center; 
        grid-gap              : 2rem;
        padding               : 2rem 0 0 0;

        list-style : none;

        // From the web: "The :link CSS pseudo-class represents an element that has not yet
        // been visited."

        &--link:link,
        &--link:visited {
            display : block;
            padding : 1.5rem;

            font-family     : $font-display-2; 
            font-size       : 2.0rem;
            color           : rgba( 255, 255, 255, 1 );
            text-align      : center;
            text-decoration : none;
            text-transform  : uppercase;

            transition : all 0.2s ease-out;
        }

        &--link:hover,
        &--link:active {
            background-color : rgba( 255, 255, 255, 0.05 );

            // move the background color up just a little to add a nice hoover effect
            transform: translate3d( 0, -0.3rem, 0); 
        }

    }

}




// responsive change #22

@media only screen and ( max-width : $bp-small ) {

    #menu {

        width    : 40vw;
    
        transition : all .2s ease-out;
   
        &.hide {

            transform : translate3d( -40vw, 0, 0 );

        }

    }

}
*/




// -------------------- END OF FILE








// lecture 123: Browser Support for CSS Grid

//







// lecture 124: Wrapping up the Nexter Project: Final Considerations

// 








// Lecture Extra: GitHub and Heroku


// I created a new repository in GitHub called " nexters-react " and after I created the repository
// I had to connect my GitHub repository to my local machine and I did that by tpying the command
// in " Rogers-iMac:nexters-react Home$ git init
//                                      git add README.md
//                                      git commit -m "first commit"
//                                      git remote add origin git@github.com:sandstone1/nexters_react.git
//                                      git push -u origin master "
// and this command was suggested by GitHub on the quick setup page after I created my nexters-react
// repo

// code from the terminal:

/*
Rogers-iMac:nexters-react Home$ heroku --version
heroku/7.29.0 darwin-x64 node-v11.14.0
Rogers-iMac:nexters-react Home$ heroku login
 ›   Warning: heroku update available from 7.29.0 to 7.39.0.
heroku: Press any key to open up the browser to login or q to exit: 
Opening browser to https://cli-auth.heroku.com/auth/cli/browser/95c8a278-56e2-464b-9737-d10545568e27
Logging in... done
Logged in as rogerhall123@gmail.com
Rogers-iMac:nexters-react Home$ git init
Reinitialized existing Git repository in /Applications/MAMP/htdocs/stoneburyhomes/misc/udemy/advanced_css_and_sass/nexters-react/.git/
Rogers-iMac:nexters-react Home$ git add README.md
Rogers-iMac:nexters-react Home$ git commit -m "first commit"
On branch master
Changes not staged for commit:
	modified:   package.json
	modified:   public/index.html
	deleted:    src/App.css
	modified:   src/App.js
	modified:   src/App.test.js
	modified:   src/index.css
	modified:   src/index.js

Untracked files:
	app.js
	package-lock.json
	public/.htaccess
	public/favicon.png
	src/App.scss
	src/assets/
	src/components/
	src/old-App.css
	src/old-App.js
	src/old-App.test.js
	src/old-index.css
	src/old-index.js
	src/pages/

no changes added to commit
Rogers-iMac:nexters-react Home$ git remote add origin git@github.com:sandstone1/nexters_react.git
Rogers-iMac:nexters-react Home$ git push -u origin master
Counting objects: 22, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (22/22), done.
Writing objects: 100% (22/22), 194.66 KiB | 3.60 MiB/s, done.
Total 22 (delta 0), reused 0 (delta 0)
To github.com:sandstone1/nexters_react.git
 * [new branch]      master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.
Rogers-iMac:nexters-react Home$ git status
On branch master
Your branch is up to date with 'origin/master'.

Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   package.json
	modified:   public/index.html
	deleted:    src/App.css
	modified:   src/App.js
	modified:   src/App.test.js
	modified:   src/index.css
	modified:   src/index.js

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	app.js
	package-lock.json
	public/.htaccess
	public/favicon.png
	src/App.scss
	src/assets/
	src/components/
	src/old-App.css
	src/old-App.js
	src/old-App.test.js
	src/old-index.css
	src/old-index.js
	src/pages/

no changes added to commit (use "git add" and/or "git commit -a")
Rogers-iMac:nexters-react Home$ git add .
Rogers-iMac:nexters-react Home$ git status
On branch master
Your branch is up to date with 'origin/master'.

Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	new file:   app.js
	new file:   package-lock.json
	modified:   package.json
	new file:   public/.htaccess
	new file:   public/favicon.png
	modified:   public/index.html
	modified:   src/App.js
	new file:   src/App.scss
	modified:   src/App.test.js
	new file:   src/assets/back.jpg
	new file:   src/assets/gal-1.jpeg
	new file:   src/assets/gal-10.jpeg
	new file:   src/assets/gal-11.jpeg
	new file:   src/assets/gal-12.jpeg
	new file:   src/assets/gal-13.jpeg
	new file:   src/assets/gal-14.jpeg
	new file:   src/assets/gal-2.jpeg
	new file:   src/assets/gal-3.jpeg
	new file:   src/assets/gal-4.jpeg
	new file:   src/assets/gal-5.jpeg
	new file:   src/assets/gal-6.jpeg
	new file:   src/assets/gal-7.jpeg
	new file:   src/assets/gal-8.jpeg
	new file:   src/assets/gal-9.jpeg
	new file:   src/assets/hero.jpeg
	new file:   src/assets/house-1.jpeg
	new file:   src/assets/house-2.jpeg
	new file:   src/assets/house-3.jpeg
	new file:   src/assets/house-4.jpeg
	new file:   src/assets/house-5.jpeg
	new file:   src/assets/house-6.jpeg
	new file:   src/assets/logo-bbc.png
	new file:   src/assets/logo-bi.png
	new file:   src/assets/logo-forbes.png
	new file:   src/assets/logo-techcrunch.png
	new file:   src/assets/logo.png
	new file:   src/assets/realtor-1.jpeg
	new file:   src/assets/realtor-2.jpeg
	new file:   src/assets/realtor-3.jpeg
	new file:   src/assets/sprite.svg
	new file:   src/assets/story-1.jpeg
	new file:   src/assets/story-2.jpeg
	new file:   src/assets/text.txt
	new file:   src/components/features/features.component.jsx
	new file:   src/components/features/features.styles.scss
	new file:   src/components/footer/footer.component.jsx
	new file:   src/components/footer/footer.styles.scss
	new file:   src/components/gallery/gallery.component.jsx
	new file:   src/components/gallery/gallery.styles.scss
	new file:   src/components/header/header.component.jsx
	new file:   src/components/header/header.styles.scss
	new file:   src/components/homes/homes.component.jsx
	new file:   src/components/homes/homes.styles.scss
	new file:   src/components/menu/menu.component.jsx
	new file:   src/components/menu/menu.styles.scss
	new file:   src/components/realtors/realtors.component.jsx
	new file:   src/components/realtors/realtors.styles.scss
	new file:   src/components/sidebar-nav/sidebar-nav.component.jsx
	new file:   src/components/sidebar-nav/sidebar-nav.styles.scss
	new file:   src/components/sidebar/sidebar.component.1.jsx
	new file:   src/components/sidebar/sidebar.component.jsx
	new file:   src/components/sidebar/sidebar.styles.scss
	new file:   src/components/testimonial-content/testimonial-content.component.jsx
	new file:   src/components/testimonial-content/testimonial-content.styles.scss
	new file:   src/components/testimonial-pictures/testimonial-pictures.component.jsx
	new file:   src/components/testimonial-pictures/testimonial-pictures.styles.scss
	modified:   src/index.css
	modified:   src/index.js
	renamed:    src/App.css -> src/old-App.css
	copied:     src/App.js -> src/old-App.js
	new file:   src/old-App.test.js
	new file:   src/old-index.css
	copied:     src/index.js -> src/old-index.js
	new file:   src/pages/homepage/homepage.component.jsx
	new file:   src/pages/homepage/homepage.styles.scss

Rogers-iMac:nexters-react Home$ git init
Reinitialized existing Git repository in /Applications/MAMP/htdocs/stoneburyhomes/misc/udemy/advanced_css_and_sass/nexters-react/.git/
Rogers-iMac:nexters-react Home$ git add README.md
Rogers-iMac:nexters-react Home$ git commit -m "first commit"
[master 2487b16] first commit
 75 files changed, 25648 insertions(+), 100 deletions(-)
 create mode 100644 app.js
 create mode 100644 package-lock.json
 create mode 100644 public/.htaccess
 create mode 100755 public/favicon.png
 rewrite public/index.html (97%)
 rewrite src/App.js (90%)
 create mode 100644 src/App.scss
 create mode 100755 src/assets/back.jpg
 create mode 100755 src/assets/gal-1.jpeg
 create mode 100755 src/assets/gal-10.jpeg
 create mode 100755 src/assets/gal-11.jpeg
 create mode 100755 src/assets/gal-12.jpeg
 create mode 100755 src/assets/gal-13.jpeg
 create mode 100755 src/assets/gal-14.jpeg
 create mode 100755 src/assets/gal-2.jpeg
 create mode 100755 src/assets/gal-3.jpeg
 create mode 100755 src/assets/gal-4.jpeg
 create mode 100755 src/assets/gal-5.jpeg
 create mode 100755 src/assets/gal-6.jpeg
 create mode 100755 src/assets/gal-7.jpeg
 create mode 100755 src/assets/gal-8.jpeg
 create mode 100755 src/assets/gal-9.jpeg
 create mode 100755 src/assets/hero.jpeg
 create mode 100755 src/assets/house-1.jpeg
 create mode 100755 src/assets/house-2.jpeg
 create mode 100755 src/assets/house-3.jpeg
 create mode 100755 src/assets/house-4.jpeg
 create mode 100755 src/assets/house-5.jpeg
 create mode 100755 src/assets/house-6.jpeg
 create mode 100755 src/assets/logo-bbc.png
 create mode 100755 src/assets/logo-bi.png
 create mode 100755 src/assets/logo-forbes.png
 create mode 100755 src/assets/logo-techcrunch.png
 create mode 100755 src/assets/logo.png
 create mode 100755 src/assets/realtor-1.jpeg
 create mode 100755 src/assets/realtor-2.jpeg
 create mode 100755 src/assets/realtor-3.jpeg
 create mode 100755 src/assets/sprite.svg
 create mode 100755 src/assets/story-1.jpeg
 create mode 100755 src/assets/story-2.jpeg
 create mode 100755 src/assets/text.txt
 create mode 100644 src/components/features/features.component.jsx
 create mode 100644 src/components/features/features.styles.scss
 create mode 100644 src/components/footer/footer.component.jsx
 create mode 100644 src/components/footer/footer.styles.scss
 create mode 100644 src/components/gallery/gallery.component.jsx
 create mode 100644 src/components/gallery/gallery.styles.scss
 create mode 100644 src/components/header/header.component.jsx
 create mode 100644 src/components/header/header.styles.scss
 create mode 100644 src/components/homes/homes.component.jsx
 create mode 100644 src/components/homes/homes.styles.scss
 create mode 100644 src/components/menu/menu.component.jsx
 create mode 100644 src/components/menu/menu.styles.scss
 create mode 100644 src/components/realtors/realtors.component.jsx
 create mode 100644 src/components/realtors/realtors.styles.scss
 create mode 100644 src/components/sidebar-nav/sidebar-nav.component.jsx
 create mode 100644 src/components/sidebar-nav/sidebar-nav.styles.scss
 create mode 100644 src/components/sidebar/sidebar.component.1.jsx
 create mode 100644 src/components/sidebar/sidebar.component.jsx
 create mode 100644 src/components/sidebar/sidebar.styles.scss
 create mode 100644 src/components/testimonial-content/testimonial-content.component.jsx
 create mode 100644 src/components/testimonial-content/testimonial-content.styles.scss
 create mode 100644 src/components/testimonial-pictures/testimonial-pictures.component.jsx
 create mode 100644 src/components/testimonial-pictures/testimonial-pictures.styles.scss
 rewrite src/index.js (75%)
 rename src/{App.css => old-App.css} (100%)
 copy src/{App.js => old-App.js} (100%)
 create mode 100644 src/old-App.test.js
 create mode 100644 src/old-index.css
 copy src/{index.js => old-index.js} (100%)
 create mode 100644 src/pages/homepage/homepage.component.jsx
 create mode 100644 src/pages/homepage/homepage.styles.scss
Rogers-iMac:nexters-react Home$ git remote add origin git@github.com:sandstone1/nexters_react.git
fatal: remote origin already exists.
Rogers-iMac:nexters-react Home$ git commit -m " Second Commit "
On branch master
Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)

Changes not staged for commit:
	modified:   src/index.js

no changes added to commit
Rogers-iMac:nexters-react Home$ git add .
Rogers-iMac:nexters-react Home$ git status
On branch master
Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)

Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	modified:   src/index.js

Rogers-iMac:nexters-react Home$ git commit -m " Second Commit "
[master 6050e53]  Second Commit
 1 file changed, 3 insertions(+), 3 deletions(-)
Rogers-iMac:nexters-react Home$ git push
Counting objects: 93, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (91/91), done.
Writing objects: 100% (93/93), 8.72 MiB | 2.12 MiB/s, done.
Total 93 (delta 7), reused 0 (delta 0)
remote: Resolving deltas: 100% (7/7), completed with 1 local object.
To github.com:sandstone1/nexters_react.git
   8f1b0da..6050e53  master -> master
*/


// now in order for us to get our application up on heroku, we have to use some commands from
// heroku CLI which I installed with the Expensify app

// you push commits up onto heroku using git commands but they are heroku specific git
// commands and then heroku will build our app depending on what script we tell it to run
// and it will serve our app from a heroku website and to do that we first need to create
// a heroku project for our app and we can do that from our heroku CLI and the heroku CLI
// can be found in our terminal or is really just our terminal since we've already downloaded
// the heroku CLI so to create a new project on heroku we need to write " heroku create " and
// then the name of the project we want to create or " nexters react " and heroku will take
// our name and put heroku in front of our name and then we type " buildpack " which is 
// essentially a specific configuration for the build that we want so that it deploys our
// react app as a static website and buildpack will be a create react app buildpack and
// we will get this create react app buildpack from typing
// " https://github.com/mars/create-react-app-buildpack.git " after " buildpack " and this
// buildpack will use the production build of our react app for the deployment or when heroku
// deploys our site and gives us a new url for our react app ( remember we don't have to run
// npm run build ourselves )

// next we want to push our changes up to the heroku project or up to our react app on heroku
// and we will do that by typing " git push heroku master " and we say master because we want
// to push our master branch to heroku


// ==============================
// STEP 1 - CREATE OUR HEROKU PROJECT FOR OUR REACT APP
// ==============================

// " heroku create nexters-react --buildpack https://github.com/mars/create-react-app-buildpack.git "


// after I run the above command:
/*
›   Warning: heroku update available from 7.29.0 to 7.39.0.
Creating ⬢ nexters-react... done
Setting buildpack to https://github.com/mars/create-react-app-buildpack.git... done
https://nexters-react.herokuapp.com/ | https://git.heroku.com/nexters-react.git
Rogers-iMac:nexters-react Home$
*/



// ==============================
// STPE 2 - PUSH OUR CHANGES TO OUR PROJECT ON HEROKU
// ==============================

// " git push heroku master "




// after I run the above command:
/*
Rogers-iMac:nexters-react Home$ git push heroku master 
Counting objects: 115, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (113/113), done.
Writing objects: 100% (115/115), 8.91 MiB | 4.92 MiB/s, done.
Total 115 (delta 10), reused 0 (delta 0)
remote: Compressing source files... done.
remote: Building source:
remote: 
remote: -----> React.js (create-react-app) multi app detected
remote: =====> Downloading Buildpack: https://github.com/heroku/heroku-buildpack-multi.git
remote: =====> Detected Framework: Multipack
remote: =====> Downloading Buildpack: https://github.com/heroku/heroku-buildpack-nodejs.git
remote: =====> Detected Framework: Node.js
remote: 
remote: -----> Build failed
remote:  !     Two different lockfiles found: package-lock.json and yarn.lock
remote: 
remote:        Both npm and yarn have created lockfiles for this application,
remote:        but only one can be used to install dependencies. Installing
remote:        dependencies using the wrong package manager can result in missing
remote:        packages or subtle bugs in production.
remote: 
remote:        - To use npm to install your application's dependencies please delete
remote:          the yarn.lock file.
remote: 
remote:          $ git rm yarn.lock
remote: 
remote:        - To use yarn to install your application's dependences please delete
remote:          the package-lock.json file.
remote: 
remote:          $ git rm package-lock.json
remote:     
remote:        https://help.heroku.com/0KU2EM53
remote: 
remote:  !     Push rejected, failed to compile React.js (create-react-app) multi app.
remote: 
remote:  !     Push failed
remote: Verifying deploy...
remote: 
remote: !	Push rejected to nexters-react.
remote: 
To https://git.heroku.com/nexters-react.git
 ! [remote rejected] master -> master (pre-receive hook declined)
error: failed to push some refs to 'https://git.heroku.com/nexters-react.git'
Rogers-iMac:nexters-react Home$ 
*/

// so I deleted by yarn.lock file and made another commit to Github and then
// and then reran the heroku command



/*
Rogers-iMac:nexters-react Home$ git status
On branch master
Your branch is up to date with 'origin/master'.

Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   app.js
	deleted:    yarn.lock

no changes added to commit (use "git add" and/or "git commit -a")
Rogers-iMac:nexters-react Home$ git add .
Rogers-iMac:nexters-react Home$ git commit -m " deleted yarn.lock "
[master 2c9ae84]  deleted yarn.lock
 2 files changed, 413 insertions(+), 10492 deletions(-)
 delete mode 100644 yarn.lock
Rogers-iMac:nexters-react Home$ git push
Counting objects: 3, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 4.18 KiB | 1.05 MiB/s, done.
Total 3 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To github.com:sandstone1/nexters_react.git
   6050e53..2c9ae84  master -> master
Rogers-iMac:nexters-react Home$ git push heroku master
Counting objects: 118, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (116/116), done.
Writing objects: 100% (118/118), 8.92 MiB | 5.37 MiB/s, done.
Total 118 (delta 12), reused 0 (delta 0)
remote: Compressing source files... done.
remote: Building source:
remote: 
remote: -----> React.js (create-react-app) multi app detected
remote: =====> Downloading Buildpack: https://github.com/heroku/heroku-buildpack-multi.git
remote: =====> Detected Framework: Multipack
remote: =====> Downloading Buildpack: https://github.com/heroku/heroku-buildpack-nodejs.git
remote: =====> Detected Framework: Node.js
remote:        
remote: -----> Creating runtime environment
remote:        
remote:        NPM_CONFIG_LOGLEVEL=error
remote:        NODE_ENV=production
remote:        NODE_MODULES_CACHE=true
remote:        NODE_VERBOSE=false
remote:        
remote: -----> Installing binaries
remote:        engines.node (package.json):  unspecified
remote:        engines.npm (package.json):   unspecified (use default)
remote:        
remote:        Resolving node version 12.x...
remote:        Downloading and installing node 12.16.1...
remote:        Using default npm version: 6.13.4
remote:        
remote: -----> Installing dependencies
remote:        Installing node modules (package.json + package-lock)
remote:        
remote:        > node-sass@4.13.1 install /tmp/build_7892c33948a5dd1b702f63c8b3224bd8/node_modules/node-sass
remote:        > node scripts/install.js
remote:        
remote:        Downloading binary from https://github.com/sass/node-sass/releases/download/v4.13.1/linux-x64-72_binding.node
remote:        Download complete
remote:        Binary saved to /tmp/build_7892c33948a5dd1b702f63c8b3224bd8/node_modules/node-sass/vendor/linux-x64-72/binding.node
remote:        Caching binary to /tmp/npmcache.vr5AS/node-sass/4.13.1/linux-x64-72_binding.node
remote:        
remote:        > core-js@2.6.11 postinstall /tmp/build_7892c33948a5dd1b702f63c8b3224bd8/node_modules/babel-runtime/node_modules/core-js
remote:        > node -e "try{require('./postinstall')}catch(e){}"
remote:        
remote:        
remote:        > core-js@3.6.4 postinstall /tmp/build_7892c33948a5dd1b702f63c8b3224bd8/node_modules/core-js
remote:        > node -e "try{require('./postinstall')}catch(e){}"
remote:        
remote:        
remote:        > node-sass@4.13.1 postinstall /tmp/build_7892c33948a5dd1b702f63c8b3224bd8/node_modules/node-sass
remote:        > node scripts/build.js
remote:        
remote:        Binary found at /tmp/build_7892c33948a5dd1b702f63c8b3224bd8/node_modules/node-sass/vendor/linux-x64-72/binding.node
remote:        Testing binary
remote:        Binary is fine
remote:        added 1600 packages from 801 contributors and audited 919053 packages in 40.044s
remote:        
remote:        49 packages are looking for funding
remote:          run `npm fund` for details
remote:        
remote:        found 18 moderate severity vulnerabilities
remote:          run `npm audit fix` to fix them, or `npm audit` for details
remote:        
remote: -----> Build
remote:        Running build
remote:        
remote:        > nexters-react@1.0.0 build /tmp/build_7892c33948a5dd1b702f63c8b3224bd8
remote:        > react-scripts build
remote:        
remote:        Creating an optimized production build...
remote:        Compiled successfully.
remote:        
remote:        File sizes after gzip:
remote:        
remote:          48.19 KB  build/static/js/2.920f0ee5.chunk.js
remote:          13.33 KB  build/static/js/main.b144ee9d.chunk.js
remote:          2.87 KB   build/static/css/main.63f2dc05.chunk.css
remote:          782 B     build/static/js/runtime-main.712a8565.js
remote:        
remote:        The project was built assuming it is hosted at /nexters_react/.
remote:        You can control this with the homepage field in your package.json.
remote:        
remote:        The build folder is ready to be deployed.
remote:        
remote:        Find out more about deployment here:
remote:        
remote:          bit.ly/CRA-deploy
remote:        
remote:        
remote: -----> Caching build
remote:        - node_modules
remote:        
remote: -----> Pruning devDependencies
remote:        audited 919053 packages in 12.208s
remote:        
remote:        49 packages are looking for funding
remote:          run `npm fund` for details
remote:        
remote:        found 18 moderate severity vulnerabilities
remote:          run `npm audit fix` to fix them, or `npm audit` for details
remote:        
remote: -----> Build succeeded!
remote: =====> Downloading Buildpack: https://github.com/mars/create-react-app-inner-buildpack.git
remote: =====> Detected Framework: React.js (create-react-app)
remote:        Writing `static.json` to support create-react-app
remote:        Enabling runtime environment variables
remote: =====> Downloading Buildpack: https://github.com/heroku/heroku-buildpack-static.git
remote: =====> Detected Framework: Static HTML
remote:   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
remote:                                  Dload  Upload   Total   Spent    Left  Speed
remote: 100  838k  100  838k    0     0  12.5M      0 --:--:-- --:--:-- --:--:-- 12.5M
remote: -----> Installed directory to /app/bin
remote: Using release configuration from last framework (Static HTML).
remote: -----> Discovering process types
remote:        Procfile declares types     -> (none)
remote:        Default types for buildpack -> web
remote: 
remote: -----> Compressing...
remote:        Done: 73.7M
remote: -----> Launching...
remote:        Released v3
remote:        https://nexters-react.herokuapp.com/ deployed to Heroku
remote: 
remote: Verifying deploy... done.
To https://git.heroku.com/nexters-react.git
 * [new branch]      master -> master
Rogers-iMac:nexters-react Home$ 
*/


// after we run " git push heroku master " we will see a live log of heroku spinning up
// our project and once heroku is done building our site then heroku will host our
// site and serve it with the following url: " https://nexters-react.herokuapp.com/ "
// and now if we check our application we see it is working as it was before and the
// only thing that may not be working is our sign in functionality with Google sign
// in and to fix that we copy our url or " https://nexters-react.herokuapp.com/ " and
// go to firebase and go to our project and then click on the authentication tab and then
// click on the " sign-in method " tab and in the authorized domain section we will click
// on the " Add domain " button and then paste our heroku link and then click the " Add "
// button and now sign in will work as expected








// installed font awesome and will use it in our Menu component

// remember this one for a nice spinner: <i className="fa fa-spinner fa-spin"></i>



// ==============================
// GO TO SRC/COMPONENTS/MENU/MENU.COMPONENT.JSX
// ==============================




// ==============================
// BACK FROM SRC/COMPONENTS/MENU/MENU.COMPONENT.JSX
// ==============================


import React from 'react';
// will need to provide links so import in links from react router dom
import { Link } from 'react-router-dom';
// import our stylesheet
import './menu.styles.scss';
// import font awesome
import '../../../node_modules/font-awesome/css/font-awesome.min.css'; 


class Menu extends React.Component {

    render() {

        let visibility = "hide";

        if ( this.props.menuVisibility ) {

            visibility = "show";

        }

        return (

            <div id="menu"

                onMouseDown={ this.props.handleMouseDown }
                className={ visibility }

            >

                <ul className="header-nav">

                    <li className="header-nav--item">
                        <Link className="header-nav--link" to="/">
                            <span>
                                <i className="fa fa-home"></i>
                            </span>
                            Home
                        </Link>
                    </li>
                    
                    <li className="header-nav--item">
                        <Link className="header-nav--link" to="/">
                            <span>
                                <i className="fa fa-user-circle"></i>
                            </span>
                            About
                        </Link>
                    </li>

                    <li className="header-nav--item">
                        <Link className="header-nav--link" to="/">
                            <span>
                                <i className="fa fa-address-card"></i>
                            </span>
                            Contact
                        </Link>
                    </li>

                    <li className="header-nav--item">
                        <Link className="header-nav--link header-nav--link--last" to="/">
                            <span>
                                <i className="fa fa-search"></i>
                            </span>
                            Search
                        </Link>
                    </li>

                </ul>

            </div>

        );
        
    }

}

export default Menu;




// -------------------- END OF FILE





// ==============================
// BACK FROM SRC/COMPONENTS/MENU/MENU.STYLES.SCSS
// ==============================


/*
// in order to use the sass variables in App.scss, I had to use @import "";
@import "../../App.scss";

#menu {

    position : fixed;
    top      : 0;
    left     : 0;
    z-index  : 100;
    width    : 30vw;
    height   : 100vh;

    background-color : $color-primary;

    cursor     : pointer;
    transition : all .3s ease-out;

    &.hide {
        transform : translate3d( -30vw, 0, 0 );
    }

    &.show {
        transform : translate3d( 0vw, 0, 0 );
    }
    
    .header-nav{

        display               : grid;
        grid-template-rows    : repeat( 4, auto );
        grid-template-columns : 25rem;
        justify-content       : center; 
        grid-gap              : 2rem;
        padding               : 2rem 0 0 0;

        list-style : none;


        // From the web: "The :link CSS pseudo-class represents an element that has not yet
        // been visited."

        &--link:link,
        &--link:visited {

            display               : grid;
            grid-template-rows    : auto;
            grid-template-columns : 4rem 5rem;
            align-items           : center;
            justify-items         : start;
            grid-column-gap       : 1.0rem;
            padding               : 1.5rem 0 1.5rem 0;

            border-bottom : 0.1rem inset rgba( 0, 0, 0, .1 );

            font-family     : $font-display-2; 
            font-size       : 2.0rem;
            color           : rgba( 255, 255, 255, 1 );
            text-align      : center;
            text-decoration : none;
            text-transform  : uppercase;

            transition : all 0.2s ease-out;
        }

        &--link:hover,
        &--link:active {
            background-color : rgba( 255, 255, 255, 0.05 );

            // move the background color up just a little to add a nice hoover effect
            transform: translate3d( 0, -0.3rem, 0); 
        }

    }

}




// responsive change #22

@media only screen and ( max-width : $bp-large ) {

    #menu {

        width    : 40vw;
    
        transition : all .2s ease-out;
   
        &.hide {

            transform : translate3d( -40vw, 0, 0 );

        }

    }

}



@media only screen and ( max-width : $bp-medium ) {

    #menu {

        width    : 50vw;
    
        transition : all .2s ease-out;
   
        &.hide {

            transform : translate3d( -50vw, 0, 0 );

        }

    }

}



@media only screen and ( max-width : $bp-small ) {

    #menu {

        width    : 70vw;
    
        transition : all .2s ease-out;
   
        &.hide {

            transform : translate3d( -70vw, 0, 0 );

        }

    }

}
*/



// -------------------- END OF FILE






// create the X or | animation effect when hovering the hamburger icon



// ==============================
// GO TO SRC/COMPONENTS/SIDEBAR-NAV/SIDEBAR-NAV.COMPONENT.JSX
// ==============================




// ==============================
// BACK FROM SRC/COMPONENTS/SIDEBAR-NAV/SIDEBAR-NAV.COMPONENT.JSX
// ==============================


import React from 'react';
// import in our stylesheet
import './sidebar-nav.styles.scss';


const SidebarNav = ( { handleMouseDown } ) => (

    <div className="sidebar-nav"
        onMouseDown={ handleMouseDown }
    >

        <button
            className="sidebar-nav--btn"
        >
            <span className="sidebar-nav--icon"></span>
        </button>

    </div>

);

export default SidebarNav;



// -------------------- END OF FILE





// ==============================
// BACK FROM SRC/COMPONENTS/SIDEBAR-NAV/SIDEBAR-NAV.STYLES.SCSS
// ==============================


/*
// in order to use the sass variables in App.scss, I had to use @import "";
@import "../../App.scss";


.sidebar-nav {

    // in order to get the hand symbol to work when hovering the hamburger icon, I had to
    // add " cursor : pointer; " to this selector and to the &--btn selector below

    cursor : pointer;

    &--btn {

        // had to give the button a height of 0 in order to remove a 4th line from the hambuger
        // icon

        height   : 0;

        // we need the following to 2 key value pairs in order to prevent any unusual styling
        // from the browser

        border        : none;
        border-radius : 0;

        cursor : pointer;

    }


    // ==============================
    // HOW TO CREATE HAMBURGER ICON IN CSS VERSION 2 - BEGINNING
    // ==============================


    // we will use css to create the button or hamburger icon and in order to do that we
    // will add all the key value pairs and pseudo classes listed below:

    &--icon {

        position : relative;

        // give our element some extra margin

        margin   : 4rem 0 4rem 0;

        // select the icon element itself or " & " so here we are targeting the icon
        // element and the before and after puesdo elements for the icon element

        &,
        &::before,
        &::after {

            display : inline-block;
            width   : 4.5rem;

            // we are using 2 px instead of 0.2rem because we don't want this value to change

            height  : 2px;

            background-color : rgba( 255, 255, 255, 1 );
 
        }

        // now we are just targeting the before and after puesdo elements for the icon element

        &::before,
        &::after {

            position : absolute;

            // let's make sure all 3 lines are positioned at " left : 0; "

            left     : 0;

            // in order to make these pseudo elements visible we need to add the
            // content property

            content : '';

           // please see below for details on the animation that we are transitioning
            
           transition : all 0.2s ease;


        }

        // move the ::before pseudo class up and the ::after pseudo class down

        &::before {

            top : -1.2rem;

        }

        &::after {

            top : 1.2rem;

        }

    }

    // now we'll start working on the creating an animated X effect ( 135deg and -135deg ) or
    // the animated pipe effect ( 90deg and -90deg ) and we'll start by making the middle
    // line disappear when we hover the button element

    &--btn:hover &--icon {

        background-color : transparent;

    }

    // now rotate the before and after puesdo elements but for this to work we have to move the
    // puesdo elements to the middle so apply " top : 0; " to both the before and after puesdo
    // elements

    &--btn:hover &--icon::before {

        top : 0;

        transform : rotate( 90deg );

    }

    &--btn:hover &--icon::after {

        top : 0;

        transform : rotate( -90deg );

    }


    // ==============================
    // HOW TO CREATE HAMBURGER ICON IN CSS VERSION 2 - ENDING
    // ==============================


}



// responsive change #13

@media only screen and ( max-width : $bp-large ) {

    .sidebar-nav {

        &--icon {

            // no longer need the margin-top or margin-bottom but we need margin-right
            // now
            
            margin : 0 3rem 0 0;

        }

    }

}
*/




// -------------------- END OF FILE





