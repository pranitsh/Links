# Links

## Description

This web page provides a way to adaptably organize and open a number of links for checking homeworks due, work assigned, etc.

## Features

1. **Categories**: Provides structure to the links.
2. **One-Click Open**: Clicking on a category header opens all links under it in new browser tabs.
3. **Code Display**: Shows the entire website code for adapting it. Maybe in the future, there will be more options and easier adaptibility for changing the links.
4. **Compile and Copy**: After editing the code in the code box, users can turn it into a link (not really compiling but just encoding :) and copy it to their clipboard. You can save this into a bookmark or something else for easily opening and using this website for your private use cases. The current options are just examples.

## Setup

### Opening Links

To open links in a specific category:

1. Go to chrome://settings/content/popups?search=pop or search popups in your browser and navigate to its options.
2. Change the setting to allow popups and redirects.
3. Click on the category header and it will now open all tabs automatically.

### Adding New Links

To add new links, you need to modify the `linkDictionary` object in the script section of the HTML:

1. Search for `const linkDictionary` or similar and you will be brought to the correct place.
2. The linkDictionary (a dictionary is something that contains an unmodifiable obect that points to some another object) contains strings (items enclosed with "" quotation marks) that point to lists (multiple items separated by commas and enclosed in square brackets) of strings.
3. Modify the below with the below example:
   Replace `CategoryName` with your desired category name and `link1`, `link2`, etc. with your web links.

   ```javascript
   const linkDictionary = {
     "CategoryName": ["www.link1.com", "www.link2.com", ...],
     ...
   };
   ```

### Editing and Compiling Code

1. View the HTML code of the page in the "code display" box.
2. Edit the code as desired.
3. Click on the "Compile and Copy" button.
4. The version of the website as a link can now be shared, saved to a bookmark, or opened through another method.

This project is open to edits. Raise an issue, email me at prsh + 006 + gmail ending, or send a pull request.
