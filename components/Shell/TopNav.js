import React from 'react';
// import { DocSearch } from '@docsearch/react';

import { AppLink as Link } from '../AppLink';

// function Search() {
//   return (
//     <DocSearch
//       appId={process.env.NEXT_PUBLIC_ALGOLIA_APP_ID}
//       apiKey={process.env.NEXT_PUBLIC_ALGOLIA_API_KEY}
//       indexName="markdoc"
//     />
//   );
// }

export function TopNav({ children }) {
  const [showMobileNav, setShowMobileNav] = React.useState(false);
  return (
    <div className="nav-bar">
      <nav>
        <div className="flex top-row">
          <Link href="/" className="flex">
    {/* OFF Logo here*/}
        <br></br>
          <svg title="onefact.org" width="150"
        height="50" fill="none"
        enableBackground="new 0 0 1197.5 507.5" version="1.1" viewBox="0 0 1197.5 507.5" xmlns="http://www.w3.org/2000/svg">
        <polygon
          fillRule="evenodd"
          clipRule="evenodd"
          points="923.5 313.5 911.5 334 1126.4 334 1114.5 313.5"
          fill="var(--dark)"
        />
        <polygon
          fillRule="evenodd"
          clipRule="evenodd"
          points="937.2 289.9 925.3 310.4 1112.7 310.4 1100.7 289.9"
          fill="var(--dark)"
        />
        <polygon
          fillRule="evenodd"
          clipRule="evenodd"
          points="1086.9 266.3 951 266.3 939 286.8 1098.9 286.8"
          fill="var(--dark)"
        />
        <polygon
          fillRule="evenodd"
          clipRule="evenodd"
          points="1073.2 242.7 964.8 242.7 952.8 263.2 1085.1 263.2"
          fill="var(--dark)"
        />
        <polygon
          fillRule="evenodd"
          clipRule="evenodd"
          points="1071.4 239.6 1059.4 219.1 978.5 219.1 966.6 239.6"
          fill="var(--dark)"
        />
        <polygon
          fillRule="evenodd"
          clipRule="evenodd"
          points="1006.1 171.8 994.1 192.3 1006.6 192.3 1040 185.9 1031.8 171.8"
          fill="var(--dark)"
        />
        <polygon
          fillRule="evenodd"
          clipRule="evenodd"
          points="1019 149.8 1007.9 168.7 1030 168.7"
          fill="var(--dark)"
        />
        <polygon
          fillRule="evenodd"
          clipRule="evenodd"
          points="642.5 333.4 631 313.6 619.4 333.4"
          fill="var(--dark)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="m207.2 168.7h-1.4c-10.2 0-18.6 10.4-22.8 19.2l-5 10.6v-28.9h-23.8v163.8h24.3v-122.7c0-4.1 0-16.4 10.9-16.4 6.9 0 10.4 5.1 10.4 15.2v124h24.6v-141.4c0.1-8.7-3.5-23.4-17.2-23.4z"
          fill="var(--dark)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="m306 253v-46.1c0-26.9-9.7-39.5-30.5-39.5h-5.5c-27.1 0-31.1 23.8-31.1 37.9v91.4c0 25.7 10.7 39.8 30 39.8h5.2c21.2 0 31.9-13.5 31.9-40.1v-26.9h-23.2v25.3c0 11-5.2 14.9-10.1 14.9-7.1 0-10.6-5.1-10.6-15.2v-41.5h43.9zm-44-46.4c0-5.6 0-16.1 10.9-16.1 10.6 0 10.6 11.3 10.6 16.1v24h-21.5v-24z"
          fill="var(--dark)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="m365.8 130.8h10.7v-25.9h-25.3c-16.6 0-18.4 13.3-18.4 19.1v45.7h-17.7v26.8h17.7v137h24.3v-137h19.4v-26.8h-19.3v-28.1c-0.1-3.5-0.1-10.8 8.6-10.8z"
          fill="var(--dark)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="m451.9 299.6v-100.5c0-15.9-3.7-30.7-30.8-30.7h-5.5c-19.2 0-28.6 9.6-28.6 29.4v21.3h21.3v-15.3c0-6.6 1.2-13.3 10.1-13.3h0.6c8.6 0 9.8 6.6 9.8 13.6v10.7c0 5.2-1 7-4.8 9.4-1.3 0.8-3.7 2.1-6.5 3.7-6.2 3.4-14.6 8.1-19.1 11.3-9.5 6.8-13 15.4-13 31.8v39.6c0 11.7 6 23.8 16.2 23.8h0.8c11.1 0 19-11.6 21.9-18.5l5-11.9v12.9c0 16.5 4.8 16.5 7.1 16.5h25.6v-25.9h-2.6c-6.6 0-7.5-3.8-7.5-7.9zm-23.2-5.4c0 13.7-7 15.2-10.1 15.2-6.3 0-9.5-4.6-9.5-13.6v-23.2c0-6.5 0.7-10.9 4.5-15.2 3.2-3.6 7.4-6.5 11-8.9l4.1-2.7v48.4z"
          fill="var(--dark)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="m513.8 208.5v20.3h23.2v-27.5c0-23-9.8-34.1-30-34.1h-5.2c-21.7 0-32.8 13.1-32.8 38.8v92c0 23.9 11.8 38.2 31.6 38.2h5.5c22.7 0 30.8-19.6 30.8-37.9v-35.4h-23.2v31.9c0 12.5-5.6 15.2-10.4 15.2-9.8 0-9.8-11.7-9.8-15.5v-86.4c0-6.1 0-16.4 10.1-16.4 10.2 0 10.2 9.7 10.2 16.8z"
          fill="var(--dark)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="m605.6 196.4v-26.8h-17.4v-55.6h-24.3v55.6h-16.9v26.8h16.9v118.9c0 12 5.1 18.1 15.1 18.1h26.7v-27.1h-9c-7.8 0-8.4-5.2-8.4-10.5v-99.4h17.3z"
          fill="var(--dark)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="m683.7 167.1h-5.5c-21.1 0-32.8 14.6-32.8 41v87c0 12.3 3.2 41 32.8 41h5.5c22.5 0 32.8-21.3 32.8-41v-88.2c-0.1-25.3-12-39.8-32.8-39.8zm8.1 126.5c0 9.9-4.1 15.8-10.9 15.8-3.3 0-10.9-1.5-10.9-15.8v-85.1c0-10.3 3.7-15.5 10.9-15.5s10.9 5.2 10.9 15.5v85.1z"
          fill="var(--dark)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="m780.9 168.7h-1.1c-12.1 0-17.8 14.5-20.2 20.6l-5 12.7v-32.4h-23.8v163.8h24.3v-124.6c0-5.8 0-13 7.6-13s7.6 6.6 7.6 13v35.1h23.5v-58.6c0-6.3-1.7-16.6-12.9-16.6z"
          fill="var(--dark)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="m826 168.7c-16.7 0-19.2 22.8-19.2 36.3v101.2c0 16.4 8.2 28.8 18.9 28.8 11.2 0 18.1-10.9 21.9-20.1l5-12.1v56.2c0 3.4 0 12.4-10.4 12.4h-1.1c-6.7 0-10.1-4.2-10.1-12.4v-12.5h-23.2v21.9c0 12.2 3.4 26.3 30.3 26.3h6.6c28.9 0 32.2-17.9 32.2-31.3v-193.8h-23.8v28.4l-5-10.4c-4.6-9.8-10.5-18.9-22.1-18.9zm26.7 39.5v85.5c0 9.7-4 15.5-10.6 15.5-3.2 0-10.6-1.5-10.6-15.2v-85.8c0-13.4 7.2-14.9 10.3-14.9 3.2 0 10.8 1.4 10.9 14.9z"
          fill="var(--dark)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="m107.2 167.1h-5.5c-21.1 0-32.8 14.6-32.8 41v87c0 12.3 3.2 41 32.8 41h5.5c22.5 0 32.8-21.3 32.8-41v-88.2c-0.1-25.3-12-39.8-32.8-39.8zm8.1 126.5c0 9.9-4.1 15.8-10.9 15.8-3.3 0-10.9-1.5-10.9-15.8v-85.1c0-10.3 3.7-15.5 10.9-15.5s10.9 5.2 10.9 15.5v85.1z"
          fill="var(--dark)"
        />
      </svg>
          </Link>
          <button
            className="hamburger"
            onClick={() => setShowMobileNav((o) => !o)}
          >
            <svg
              width="16"
              height="10"
              viewBox="0 0 16 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="16" height="2" fill="var(--black)" />
              <rect y="4" width="16" height="2" fill="var(--black)" />
              <rect y="8" width="16" height="2" fill="var(--black)" />
            </svg>
          </button>
        </div>
        <section className={showMobileNav ? 'active' : ''}>
          {children}
          {/* <Search /> */}
        </section>
      </nav>
      <style jsx>
        {`
          .nav-bar {
            top: 0;
            position: fixed;
            z-index: 100;
            display: flex;
            width: 100%;
            background: var(--light);
          }
          nav {
            display: flex;
            gap: 1rem;
            width: 100%;
            margin: 0 auto;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid var(--dark);
            padding: 0.8rem 2rem 0.7rem;
            font-size: 15px;
            font-family: var(--sans);
          }
          nav :global(a) {
            text-decoration: none;
          }
          nav :global(.DocSearch-Button) {
            background: var(--code-background);
            height: 32px;
            border-radius: 32px;
          }
          nav :global(.DocSearch-Button:hover) {
            box-shadow: none;
            background: #e8eef3;
          }
          :global(.dark) nav :global(.DocSearch-Button:hover) {
            background: #424248;
          }
          nav :global(.DocSearch-Search-Icon) {
            color: var(--dark);
            width: 16px;
          }
          nav :global(.DocSearch-Button-Placeholder),
          nav :global(.DocSearch-Button-Keys) {
            display: none;
          }
          section {
            display: flex;
            align-items: center;
            gap: 1.3rem;
            padding: 0;
          }
          button {
            display: none;
            align-items: center;
            justify-content: center;
            width: 48px;
            height: 32px;
            background: var(--gray-light);
            border-radius: 30px;
          }
          .top-row {
            align-items: center;
            justify-content: space-between;
            width: 100%;
          }
          @media screen and (max-width: 600px) {
            .nav-bar {
              border-bottom: 1px solid var(--dark);
            }
            nav {
              flex-direction: column;
              align-items: flex-start;
              border-bottom: none;
            }
            section {
              display: none;
              font-size: 15px;
            }
            section.active {
              display: flex;
            }
            button {
              display: flex;
            }
          }
        `}
      </style>
    </div>
  );
}
