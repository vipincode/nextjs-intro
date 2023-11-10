Next.js, a React-based framework, brings the convenience of a filesystem-based routing model that lends itself to an intuitive setup of your application routes. Under this model, the structure of your routes directly follows the filesystem structure inside your `/app` directory. Every folder corresponds to a route segment, allowing you to define nested routes through nested folders.

Let's consider a more detailed example. You're building a web application with a user dashboard that includes settings and profile sections. In Next.js, this might look like:

```
/app
  /dashboard
    /settings
      page.js
    /profile
      page.js

```

Each `page.js` file exports a default React component that serves as the UI for the respective route. For instance, the content of `settings/page.js` might look like:

```tsx
// Inside /dashboard/settings/page.js
export default function SettingsPage() {
  return <h1>User Settings</h1>
}
```

When this setup is used, accessing `yourwebsite.com/dashboard/settings` in a web browser would display the text "User Settings".

## Route grouping

One of the distinct features of Next.js routing is the use of route groups, denoted by wrapping a folder name in parentheses. Route groups are especially useful for organizing routes logically without impacting the URL structure. Let's add an `admin` route group to the previous example:

```
/app
  /(admin)
    /dashboard
      /settings
        page.js
      /profile
        page.js

```

Even though we've nested `dashboard` within `(admin)`, the routes would still be accessed as `yourwebsite.com/dashboard/settings` and `yourwebsite.com/dashboard/profile`. The `(admin)` grouping is purely for organizational purposes and does not affect the URL structure.

Next.js also offers special files to provide unique behavior to routes, like `layout.js` for shared layout among routes, `loading.js` for loading state, and `error.js` for error handling. These allow you to design comprehensive user experiences with clear feedback mechanisms.

In terms of advanced routing, Next.js supports parallel routes and intercepting routes. Parallel routes allow you to simultaneously show multiple pages that can be navigated independently, which can be useful for split views or dashboards. Intercepting routes, on the other hand, let you capture a route and present it within the context of another, maintaining the user's context across different pages.

Lastly, it's important to highlight that Next.js 13 introduced a server-centric routing model. This aligns with the direction of React Server Components and has the advantage of creating a leaner client-side bundle, as the client doesn't need to download a route map. This results in significant performance improvements, particularly for large applications with many routes. Despite its server-centric nature, this routing model still supports client-side navigation, avoiding full page reloads and delivering a smooth user experience akin to Single-Page Applications (SPAs).

The power of Next.js routing lies in its flexibility, performance optimizations, and direct alignment with your project's file structure, making it a critical tool in a web developer's toolbox for building efficient and scalable web applications.
