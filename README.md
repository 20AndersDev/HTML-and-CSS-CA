# Project Title

HTML-and-CSS-CA

## Description

This is my finished product for the HTML and CSS course assignment 13.11.2022.
The HTML and CSS CA was about making a website from the prototype we made from the design 1 course assignment. I picked brief 2, the "SquareEyes" task.

Links:

Link to the Design 1 prototype (complete prototype): https://www.figma.com/file/lK3O3QMJ2LPRkoVL6shaKU/2022-09-25_design1_ca_Anders-Nes_fp?node-id=0%3A1

Dekstop view: https://www.figma.com/proto/lK3O3QMJ2LPRkoVL6shaKU/2022-09-25_design1_ca_Anders-Nes_fp?node-id=1%3A2&scaling=contain&page-id=0%3A1&starting-point-node-id=1%3A2

Mobile View: https://www.figma.com/proto/lK3O3QMJ2LPRkoVL6shaKU/2022-09-25_design1_ca_Anders-Nes_fp?node-id=19%3A2025&scaling=min-zoom&page-id=19%3A1428&starting-point-node-id=19%3A2025

The HTML and CSS website is also published to netlify: https://sprightly-gelato-a3a4ee.netlify.app/

Note that for a better experience for mobile and tablet users, i made it so the movie sections is swipeable by making the sections overflow off the screen. For desktop users all the movies are available on the screen without the need for horizontal scroll.

### How i worked and finished this course assignment

I knew near to nothing about HTML and CSS prior to starting this course assignment. My strategy for this CA was the same as Deisgn 1 CA. Try and fail.
I decided i will to start right away with the CA and jump back to the modules afterwards when i needed to read up.

I had no plan on how i was going to work on this project, but i started out by designing the home page first with alle the movies. I started out by designing the header and managed to make it look very clos to the original from the prototype. here i used the hamburger menu trick as MJ showed in one of the modules to make it more user friendly for mobile and tablet users. The hamburger menu only appears when the width is below 1300px. this was solved by using the media query.

Next i finished the home page up by making the movie sections. This was probably the hardest part making since knew very little about html and CSS. a site that helped med understand this was css-tricks.com (listed as reference in the references section), This helped understand more what properties to set to the parent element to make the child objects behave as you want. For mobile and table users i have made it som the content overflows when on smaller displays. This is so that they can swipe trought the content wich makes a better user experience for mobile and tablet.

After i made the home page i had the recipe to make the list of videos and action pages. Here i used the same teqchnique as on the home page. i added an "genre" button using the hamburger trick from the navbar. The reason the genre list item covers 100% width on the screen i cause the ul wouldnt stay in the same position when testing on multiple different browsers.

Further i saw a post in disord from Abi that we should have an login and signup page. Here i used the input tags to create space for the user to type in thier account info. here i used placeholder to let the user know what the info should go into the different input boxes.

The last pages i made was contact, about, account, productpage, chekcout and checkoutsuccsess. these were all kind similar with som minor tweaks and i didnt have many issues with these page since i already had similiar content on the other pages.

When i was done with all the pages, i looked over the code i have written and undestood quickly that i needed to make more descriptive tags na dtidy up the CSS code. i went over all the pages again and made sure that if another developer was going to make changes on the code it would be easy to understand.

I have chekced every site trough the Markup validation and WAVE tools

overall i am quite happy with the result and i think i made a quite similar website to the prototype

### Known errors

- For the inputs,instead of using label i decided to use placeholder. This way it looks more clean and instructs the user what information should be typed in the inputs. i am aware when testing this in a WCAG checker this will cause an error to appear

- In the header i have used some icons as a symbol for navigation, for instance the Hamburger menu and the account icon. WCAG checker will mark these as empty strings

- Reduntant links: i have linked every product to go to the same product page.

### References

- Code

  - All the code is written by myself with some inspiration from:
    - all of the modules on: https://noroff-content.gitlab.io/feu/html-css/module-1.html
    - For CSS tricks: https://css-tricks.com/snippets/css/a-guide-to-flexbox/?fbclid=IwAR0LKoWTcMGCtj6eiKJDmYuxofa0w07TlcRG1qjis7PIgqQRtak2ql5wuyY
    - footer: https://www.youtube.com/watch?v=ffb34dCmMVQ

- Pictures on about page:

  - https://www.pexels.com/nb-no/bilde/popcorn-underholdning-kino-person-8263326/
  - https://www.pexels.com/nb-no/bilde/popcorn-selektiv-fokus-kino-mann-8273631/

- Movies posters and logo:

  - Design 1 Course assignment brief 2

- Icons:
  - https://fontawesome.com/icons
