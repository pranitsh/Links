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

### Editing and Compiling Code

1. Click on the "Embedded URL" button.
2. The version of the website as a link can now be shared, saved to a bookmark, or opened through another method. It is completely detached from any online server and is completely private.

### Inspiration

I wanted to try using data links and experiment more with JavaScript, HTML, and CSS. This was likely my first project more than a hundred lines in JavaScript when I first wrote it. This mainly served as a helpful tool for managing dozens of different docs and frequently glancing at the due dates for homeworks, etc.

### Roadmap

- Error catching mechanism
- Better JSON display interface.
- Cooler design
- Icons in bookmark
- More features for short-term links
