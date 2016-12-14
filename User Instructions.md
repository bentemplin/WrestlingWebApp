#Wrestling Web App Instructions

*Thank you very much for using my platform! This app is designed to aid in the scoring of wrestling matches, and is geared toward everyone, even those who do not necessarily have an in depth knowledge of wrestling.*

##Top Bar
This bar is found at the top of the page and it contains three input boxes and five buttons. 

###Input Boxes
The three input boxes, from left to right, are the name box for the red wrestler, the name box for the green wrestler, and the box for the bout number.

These boxes are not necessary for the app to function, but it will make the output cleaner and easier to understand. Also, after the information is submitted, the webpage title will display "Bout XXX" where XXX is the bout number, and the "Red Wrestler" and "Green Wrestler" tags will reflect the names of their respective wrestlers.

###Submit Button
This button logs all of the information in the input boxes. It updates the "Red Wrestler" and "Green Wrestler" tags with the names of their respective wrestlers, updates the webpage title with the bout number, and displays an initialization message on the output page if outputs are enabled. 

*Note: Every time the submit button is pressed, it logs the information in the input boxes, so names can be updated throughout matches, or after matches, but there will be a new initialization message displayed on the output page.*

###Reset Match
This button resets the value of the input boxes, the title of the webpage, the "Red Wrestler" and "Green Wrestler" tags, the match score, penalties, cautions, and stallings to their initial values. The same can be accomplished by refreshing the page, but refreshing the page will also delete the output page, if it is enabled, which resetting the match will not. Pressing this button generates an alert asking the user to confirm the reset to prevent accidental resets.

###Correct Items
This button allows the user to correct the Match Score, Penalties, Cautions, and Stallings fields if a mistake is made. To correct items, simply click the button. The button will turn red and change its message to "Stop Corrections," signalling that corrections mode has been enabled. From here, simply click in the field you would like to edit and change the numbers. All fields are capped at a maximum length of two characters. When you are finished correcting, click the "Stop Corrections" button and the information will be updated.

*Note: Using the correct field will not remove erronious entries on the output page, but it will update the score in subsequent outputs.*

###Lock Controls
This button allows the user to disable all buttons on the page. To enable lock mode, simply click the button, at which point it will turn red and read "Unlock Controls." To regain control of the app, simply click the "Unlock Controls" button, at which point all functionality will be restored.

*Note: The lock controls feature does not lock the value of the input text boxes, but it will prevent the submit button from updating their values.*

###The Output Button
This button controls the output page, and is disabled by default. To enable the output page, simply click the button, at which point it will turn red, read "Output: On," and open a new webpage to display the ouputs of the software. At any point during the match, the user can toggle whether the output is on or off, and it will still print updated to the same page. Additionally, resetting the match by using the "Reset Match" button does not affect the page, allowing multiple matches to be recorded to the same output page.

*Note: Refreshing the page will initialize a new output page the next time the output is turned on. Also, resetting the match with the "Reset Match" button does not change whether or not the output was enabled or disabled.*