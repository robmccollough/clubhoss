## FE Tasks

<!-- - Create vue 3 app
- Show a list of books
- be able to add a book -->
<!-- - choose a UI framework? -->

## BE Tasks

<!-- - Use mongodb atlas or some kind of free hosting -->

- Store a series of books
  - use audible list and other categories
  - provide CRUD endpoints

### Objects

- Books
- Use shape subset from audible

- Reviews?
- Club sessions
- Searchable book list to add from - gotta be a public book api?


We have users **
We have clubs

Users can see clubs they've joined after they log in, create, or join a club via the identifier

user who creates the club is marked as the admin. more on this later.

users can click on a club to view a details page

on the club details page:

 users can view a list of books that club has read. for now allow all users to add books.

users can see a list of other users in that club

there exists an api that can provide search results for books. users can use this search feature to add a book to the list of books for that club

users can mark a book as in progress or finished.

users can click a book to see a detail view page

on the book details page:

the user can see the list of sessions for that club-book. the user can add, edit, or delete sessions. 

a session captures the date, a page or chapter range (maybe), and for now just a rich text body with advanced editor.

list out sessions, and have small modal to view? more on this later
