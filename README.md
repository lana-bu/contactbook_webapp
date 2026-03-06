# contactbook_webapp
This is my Project #2 assignment for my CIS 435 (Web Technology) course at UM-Dearborn. This web app will be a stateless contact book. I am designing it to become familiar with the React library.
## Sources
### Code Help
#### Online Sources
- Structure for contact components (form, item, list): https://medium.com/@goforindu/how-to-create-dynamic-list-in-react-with-demo-app-eb4f63c299f6
- If-else for contact list content: https://react.dev/learn
- Deleting array elements with filter: https://stackoverflow.com/questions/67979861/how-to-delete-an-element-from-array-in-react
#### Claude Code
- Errors in contact deletion code
  - Prompt 1: "I tried to implement contact deletion in my web app. I set it up so that when the delete button is pressed, the ID of the contact to be deleted gets sent from the contact items component to the contact list component and then to the app. In the app, a filter is performed on the contacts to update the contacts data with the chosen contact deleted. However, my web app is breaking when I try to add a contact now. Do you know what's wrong?"
  - Response 1: "The problem was that const declarations are not hoisted like function declarations. When a contact gets added, the else branch runs and tries to reference transferContactToDelete, but it hasn't been defined yet at that point in execution — causing a ReferenceError. Moving the definition above the if/else block resolves this."
  - Prompt 2: "That fixed the issue with the server not loading, but now the delete button won't work properly, and I can't tell why."
  - Response 2: "The problem was that key is a special React prop — it's used internally by React for reconciliation and is not accessible via props.key. So props.id was undefined, and the filter in deleteContactHandler couldn't match any contact. Adding an explicit id={item.id} prop makes it available to ContactItem."
