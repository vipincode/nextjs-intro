# Server Components

React Server Components (RSC) is a new paradigm introduced in React 18, and Next.js 13 has introduced support for RSC through their app directory.

## SPA

A Single-Page Application (SPA) works by rendering and data fetching taking place in the browser itself. This results in the First Contentful Paint (FCP) taking longer, affecting the user experience.

## SSR

In contrast, SSR mitigates these issues by rendering the initial page in the server itself, reducing the time taken for FCP and vastly improving the user experience. However, the page will not become interactive immediately, and the browser needs to wait till it completes downloading the JavaScript bundle to add interactivity.

## RSC

RSC is a new way of doing server-side rendering by allowing developers to write components that run on the server and stream their output to the client.

In RSC, there are two types of components: server components, which can be rendered on the server, and client components, which are rendered on the browser. Server components can be defined as any component that doesn’t involve user interactivity like a mouse click or keyboard input or use React hooks like the useState hook and the useEffect hook.

The server can render these components and stream them to the browser. The server needs to send the JavaScript code to render only the client components, so the JavaScript bundle size is going to be a lot smaller and faster to download. This means that the user interface can become interactive faster reducing TTI.

## RSC vs. SSR

In contrast, SSR performs server-side rendering only during the initial page load. This means that other than the initial components, all other components are rendered in the browser when SSR is used. So, the browser has to download the JavaScript for the whole app just like in a Single-Page Application (SPA). This makes RSC more efficient than SSR in terms of performance and user experience.
