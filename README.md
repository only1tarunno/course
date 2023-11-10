Course Registration
Live Link : https://course-281.netlify.app

3 features of this project:

- Users can select courses as they like.
- Every user will get 20 Credit Hour. When they select any course, the credit hour of the course will be subtract from the initial 20 credit hour.
- A user can not select courses above the 20 hour. If a user try to select courses, the user will get a toast notification.
- A user can not select a course twice. If he/she tries to do it, he/she will get a toast notification

Discussing how I managed the state in my project:
I use 4 state in my whole project. Among the 4 states I used 3 state in App.jsx file( First one for showing the Title of the courses, Second state is used to show remaning credit hour, Third state is used to show total credit hour) and 1 state I use Couses.jsx file.
First i try to show my api data in the web page. For doing this I used fetch and get my data and show it through state which name is "courses". Then after showing every data in a card I need to use state again to show data in the cart section. For doing it I used
a onClick funtion in the button of the cards. Inside the funtion I make funtionality using condition to bring out the requirements result like the titles of the courses and their credit hour. Then I use one state for showing the title and another one for showing the remaining credit hour and last one for total credit hour. I need to use 3 state in App.jsx because in App.jsx file I used cart component and I need data to show in cart component but I don't have any data in the App.jsx, the data is given in the child component of the Courses.jsx. So, I use a callback function through which a child component pass data up to its parents and then those parents pass the same data up to their own parents and the data finally comes to App.jsx file. And using state in the call back function I can manage to push the selected course details in the Cart.jsx file and show the data as the requirements needed.
