pgnPages.onclick = function(choice) {

  NSB.MsgBox("This is the page you chose: " + choice);

};

 

/* What I changed:

- I changed the font to comic sans

- I changed the font to a heavier weight

- I changed the tool bar to the largest size

- I made the 5th page to show as the one selected

- I made the others italicized

- I made an output that informs the user which they selected off of the pagination bar.

*/

 

 

 

 

 

DDFormSelection.onclick = function(s) {

    if (typeof(s) == "Login") {

        return;

    }

    NSB.MsgBox("you have selected " + DDFormSelection.selection);

};

 

/*What I changed:

-I made the option values on the drop down

-I made the background color green

-I made the font size bigger

-I changed font to comic sans

*/
