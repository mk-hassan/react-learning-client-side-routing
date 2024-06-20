# Learning react-router-dom-v6.4

> I walked through the lesssons provided in this [toturial series](https://www.youtube.com/playlist?list=PL4cUxeGkcC9iVKmtNuCeIswnQ97in2GGf).

## Prior react-router-dom-v6.4
You only make use of `<BrowserRouter>` component, which is wrapping the main `<App />` component.

- Import `<BrowserRouter>` and wrap you entire application within it.
```javascript
// main.jsx
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
```
- Start configure your routes and where you want them to appear in your page
> Each `Route` component has path and element attributes 
>> path attribute: refers to the `path` on which the corresponding `element` should be rendered.
>> element attribute: refers to the component should be rendered when you in `path`.

```javascript
// App.js
import { Route, Routes, NavLink } from 'react-router-dom'

// pages
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <>
      <nav>
        <div className="container">
          <h1 className='logo'><Link to="/">Job Seeker</Link></h1>
          <ul className='links horizontal'>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='about'>About</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <main>
        <Routes>
          <Route index element={<Home />} /> {/* index == path='/' */}
          <Route path='about' element={<About />} />
        </Routes>
      </main>
    </>
  );
}

export default App
```
> [!TIP]
`path='/'` equals `index` both are refering to the root page in this case is 'home' component.

> [!NOTE]
`NavLink` is better than `Link` component in case you wanna style the clicked link.
As NavLink add className `active` to the clicked link which can be use to add style to the active links.
```css
a {
  color: inherit;
  text-decoration: none;
}

a.active {
  background-color: var(--clr-primary-hsl);
}
```
![alt text](<public/markdown images/Home is active.png>)
![NavLink active class](<public/markdown images/NavLink active class.png>)

## react-router-dom-v6.4
### 1. Configurable Router
```javascript
// main.jsx
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='help' element={<Help />}>
        <Route path='faq' element={<FAQ />} />
        <Route path='contact' element={<Contact />} action={submitContactForm} />
      </Route>
      <Route path='careers' element={<Careers />} errorElement={<CareersError />}>
        <Route
          index
          element={<CareersList />}
          loader={careersListLoader}
        />
        <Route
          path=':careerId'
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
```

> [!NOTE]
Creating your own configurable `<BrowserRouter>` instead the ready-use one (prior v6.4).

### What's going on?
- Configuring your own `BrowserRouter` and assign it to a variable.
- There are 2 ways to build a `BrowserRouter` :
  - using normal object syntax.
  - using `createRoutesFromElements` function, inside it we have our tree of Route components.
- Instead of wrapping your entire application inside `<BrowserRouter>` component you pass your configured router as attribute to `RouterProvider` component.
- Notice that the `App` component is corresponding to the root path, and inside it `Home` page is rendered by default as its path is the same as the parent Route path.
- react-router is making the path relative to the parent path
  ```javascript
  <Route path='help' element={<Help />}>
    <Route path='faq' element={<FAQ />} />
    <Route path='contact' element={<Contact />} action={submitContactForm} />
  </Route>
  ```
  - `/help` => renders just the help page without FAQ or Contact components
  - `/help/faq` => renders FAQ component inside help page.
  - `/help/contact` => renders Contact component inside help page.
  ```javascript
  <Route path='careers' element={<Careers />} errorElement={<CareersError />}>
    <Route
      index
      element={<CareersList />}
      loader={careersListLoader}
    />
    <Route
      path=':careerId'
      element={<CareerDetails />}
      loader={careerDetailsLoader}
    />
  </Route>
  ```
  - `/careers` => renders the `Careers` component and inside it renders `CareersList` component as its path is the same as the parent.
  - `/careers/:careerId` => renders the specific career details component inside `Careers` page.
- In Link and NavLink components, we only need the path realtive to whatever layout or component we're currently in.
- To render nested path elements(components) inside the parent page, the page should specify explicitly where should these nested elements be rendered using `<Outlet />` component.
```javascript
import { NavLink, Outlet } from "react-router-dom"

export default function Help() {
  return (
    <>
      <section className="help">
        <div className="container">
          <h2 className='page-title'>Help</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam neque delectus sapiente corrupti, suscipit repudiandae nobis earum cupiditate officiis itaque inventore assumenda libero quis, quae adipisci quibusdam rem illum voluptas.</p>
          <div className="help-options">
            <NavLink to="faq">FAQ</NavLink>
            <NavLink to="contact">Contect Us</NavLink>
          </div>
        </div>
      </section>
      <section className="help-content">
        <div className="container">
          <Outlet />
        </div>
      </section>
    </>
  )
}
```
You can think of `<Outlet />` component as the normal wall outlet waiting for a plug which is the nested components to take its place when the url matches any.
- `<Route path='*' element={<NotFound />} />` used to create `Custom 404 page`, if the url not matching any of the previous paths then render the `<NotFound />` component.

### 2. Loaders
> [!NOTE]
> Normally when fetch data for a component we'd make useEffect hook, then we'd fetch the data inside that. After that we'd probably update some local component state to keep that data so that we can use it in our template.

Now we can use the loader function instead:
- Make a function outside  the component itself (maybe in another file).
- Assign this function to loader attribute of Route component.
- Call whatever API you want and get the data then access it inside the component.
- Use the data inside the component using `useLoaderDate()` hook.

> [!IMPORTANT]
> The loader function is run even before the component is loaded.

I used Loader function twice in this app:
- Loading all careers
  ```javascript
    // main.jsx
    <Route
      index
      element={<CareersList />}
      loader={careersListLoader}
    />

  // src/actions/careersListLoader.js
  export default async function careersListLoader() {
    const careers = await fetch('http://localhost:3000/careers');

    if (!careers.ok) {
      throw Error('The service is down now, we are working to solve it');
    }
    return careers.json();
  }    
  ```
- Loading specific career details
  ```javascript
  // main..jsx
  <Route
    path=':careerId'
    element={<CareerDetails />}
    loader={careerDetailsLoader}
  />

  // src/actions/CareerDetailsLoader.js
  export default async function careerDetailsLoader({ params: { careerId } }) {
    const details = await fetch(`http://localhost:3000/careers/${careerId}`);

    if (!details.ok) {
      throw Error('This career isnot found!');
    }
    return details.json();
  }
  ```

In careersList component:
```javascript
import { useLoaderData, Link } from "react-router-dom";

export default function CareersList() {
  // getting the data returned by the Loader function
  const careers = useLoaderData();

  return (
    <>
      {careers.map(career =>
        <div className="career-card" key={career.id}>
          <h3><Link to={`${career.id}`}>{career.title}</Link></h3>
          <p>{career.location} - {career.salary}</p>
        </div>
      )}
    </>
  )
}
```
In `careersDetails` component:
```javascript
// import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom"

export default function CareerDetails() {
  const details = useLoaderData();

  // const params = useParams();
  // const [details, setDetails] = useState({});

  // useEffect(() => {
  //   fetch(`http://localhost:3000/careers/${params.careerId}`)
  //     .then(res => res.json())
  //     .then(data => setDetails(data));
  // }, []);

  return (
    <div className="career-details">
      <h3>{details.title}</h3>
      <p className="loc">Location: <span>{details.location}</span></p>
      <p className="salary">Salary: <span>{details.salary}</span></p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error expedita id atque ex animi molestias commodi ducimus temporibus corporis quia vel distinctio, tempora perspiciatis dolore libero eaque ipsam. Adipisci, ad.</p>
    </div>
  )
}
```
As we talked earlier, Loader function is just a replacement for useEffect if you commented `const details = useLoaderData();` and uncomment useEffect, all would work normally.

> [!NOTE]
> The difference between useEffect and Loaders is that:
> - Loaders are run even before the corresponding component is loaded.
> - useEffect is run its function after the component is loaded.

### 3. Error Elements
You may noticed that, Loaders throw an error in case of failing to get the data from the API end point, maybe the backend is down or the end point  URL is chenged.

What happend then, an error element(component) is to be rendered instead of the expected component.

```javascript
<Route path='careers' element={<Careers />} errorElement={<CareersError />}>
  <Route
    index
    element={<CareersList />}
    loader={careersListLoader}
  />
  <Route
    path=':careerId'
    element={<CareerDetails />}
    loader={careerDetailsLoader}
  />
</Route>
```
> [!NOTE]
> The error bubbles up till catched by `errorElement`, or the default error page is rendered on the screen and stops the app.

Notice the errorElement in the parent route, even the error is thrown from a child element; that's because the error is bubbling up till find an `errorElement` catches the error annd be rendered instead of the expeced component.

If `<Route index element={<CareersList />} loader={careersListLoader}/>` has an errorElement then the error wouldn't bubble up and will be catched here.

In errorElement component, you can get the error message using `useRouteError` hook, which returns an object contains `message` .

> [!NOTE]
> useRouteError hook is used to get the error message, and do something with it on the errorElement corresponding component.

### 4. Actions
By using `Form` component from react-router-dom is a better choice to use instead of the HTML form element for some reasons:
1. It keeps track of the input fields for you.
2. Bundle all values togeather to a request object and pass it into the action function.

> [!TIP]
> Actions are called whenever the app sends a non-get submission ("post", "put", "patch", "delete") to your route.

Example of actions function:
```javascript
<Route path='help' element={<Help />}>
  <Route path='faq' element={<FAQ />} />
  <Route path='contact' element={<Contact />} action={submitContactForm} />
</Route>
```
consider the Action function in `<Route path='contact' ...` 

```javascript
export default async function submitContactForm({ request }) {
  const formData = await request.formData();

  const submission = {
    email: formData.get('email'),
    message: formData.get('message')
  };

  let res = await fetch('http://localhost:3000/contacts', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(submission),
  });

  return res.json();
}
```

> [!CAUTION]
> Action function must return something. Usually it may return the response returned from the server, make use of redirect(url) mehod which returns an object used to redirect the user to anoter page, or return an error object.

> [!TIP]
> redirect(url) is just a shortcut for 
> ```javascript
> new Response("", {
>  status: 302,
>  headers: {
>    Location: url,
>  },
>}); 
>```

### 5. Loaders & Actions

> [!TIP]
> Route actions are the "writes" to route loader "reads". 

> [!TIP]
> Loaders and Actions can resolve promises. In previous examples `careers.json()` and `details.json()` are resolved and return the data to the corresponding component.

> [!NOTE]
> Both Loaders and Function can return any thing and the corresponding component is responsible to get the data returned using `getLoaderData` and `getActionData` hooks.

> [!NOTE]
> You can throw in your Actions and Loaders to break out of the current call stack (stop running the current code) and React Router will start over down the "error path". Remeber the  "errorElement".

Loaders and Actions take an object `{request, params, context}`.
Usually Loaders care about the params object, while Actions care about request.

To access data of a submitted form in Action function, we should use `request.formData()` which returns a promise that need to be resolved to get the data. Then the returned object from resolving request.formData is a map like object where you can only access data using its member function `get(arre)`. 

### 6. useLocation Hook
Returns an object containing `pathname` property. This property's
value is the current path. called when the current location changes.

### 7. useParams Hook
get the parameters of the url.