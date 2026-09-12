1) Dev Stack 
(
which actually responsive , we can add to cart of different language and store it into stack , and also can remove it from the stack , it's just a cart system . 
)
2) Feature (

1) Explore technologies - browse different frontend , backend , database and development technologies 

2) build your stack - add tech to your personal stack 

3) manage your stack 
)

3) Technologies used

1) React , Ts , Tailwindcss , vite , react toastify , js , json , REST API



4) React Questions and answers 

1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript. React uses JSX to make it easier to create and understand UI components.

2. What is the difference between props and state?

Props are data passed from a parent component to a child component.
State is data managed inside a component that can change over time.

3. What does the useState hook do, and where did you use it in this project?

useState is used to create and manage changing data in a React component.

In this project, I used it to manage the technologies in my stack, such as adding and removing technologies.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect runs code after a component renders. It is useful for side effects such as fetching data.

I used useEffect to load the JSON data containing the technology information when the component loaded.

5. Why does every item in a .map() list need a unique key prop?

React uses the key to identify each item in a list. It helps React understand which item was added, removed, or changed.

For example:

{technologies.map((technology) => (
  <Card key={technology.id} technology={technology} />
))}
6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition.

For example, when the stack is empty, I show an empty-stack message:

{stack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  <CardTwo tech={stack} />
)}
7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child using props.

<Card technology={technology} />

If the child needs to send something back, the parent can pass a function as a prop. The child calls that function.

<Card onAdd={handleAdd} />

So, data normally goes parent → child through props, while the child can communicate back by calling a function received through props.