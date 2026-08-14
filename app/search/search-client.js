'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';

const PLACEHOLDERS = [
  'the food is gross',
  'the drama...',
  'i have an essay due tomorrow',
  'class is boring',
  'awful policy',
  'toxic groupchats',
  'this one teacher is so mean',
];

const PAGE_CSS = `
* {
    text-decoration: none;
    list-style: none;
    outline: none;
    border: none;
    padding: 0;
}
body {
    font-family: Poppins, sans-serif;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    height: 100vh;
    margin: 0;
    padding: 0;
    background: white;
    box-sizing: border-box;
    max-width: 100%;
    text-align: center;
}
h2 {
    color: black;
    margin: initial;
    font-weight: 500;
    font-size: 36px;
    line-height: 1.6;
}
#onboarding-survey {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    max-width: 100%;
}
.input-container {
    position: relative;
    margin: auto;
    width: 400px;
    max-width: 97%;
    margin-bottom: 3px;
}
input {
    width: 100%;
    padding: 10px;
    border: 2px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    transition: border-color 0.3s;
}
input:focus {
    border-color: #007bff;
    outline: none;
}
.submit-arrow {
    position: absolute;
    right: 15px;
    top: calc(50% - 3px);
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    cursor: pointer;
    transform: rotate(-45deg);
}
.submit-icon {
    position: absolute;
    right: 15px;
    top: calc(50% - 3px);
    cursor: pointer;
    display: inline-block;
}
input::placeholder {
    opacity: 0.5;
    animation: colorChange 1s infinite;
}
.credit {
    position: absolute; bottom: 0.5em; right: 0.5em; line-height: 1.4; opacity: 0.7;
    text-align: left;
}
.balance {
    margin-bottom: 10px; letter-spacing: 0;
}
p, a {
    font-family: "Poppins", sans-serif;
    line-height: 1.4;
    font-size: 16px;
    letter-spacing: 0px;
}
.notsure a {
    margin-top: 2px; line-height: 1.4; opacity: 0.7; font-size: 14px;
}
.onboarding-choice {
    font-size: 11pt;
    padding: 8px;
    margin: 7px 5px;
}
.blue { background-color: #97E5D7; }
.green { background-color: #D2EBD8; }
.pale { background-color: #fce5dd; }
.light { background-color: #cad6f7; }
.red { background-color: #FEB7B3; }
input { border-radius: 16px; }
@media (max-width: 900px) {
    #onboarding-survey h2 {
        font-size: 30pt;
        text-align: left;
        line-height: 1.34;
        text-wrap: pretty;
        max-width: 95%; margin-left: 2.5%;
    }
    .credit, .credit a, .notsure a {
        font-size: 10pt;
        max-width: 95%;
    }
    .notsure { margin-top: 3px; }
    .input-container { width: 97%; }
    input { border-radius: 16px; }
    .balance {
        font-size: 12pt;
        max-width: 95%; margin-left: 2.5%;
        text-align: left;
        text-wrap: pretty;
        margin-bottom: 11px;
        margin-top: 5px;
    }
    .onboarding-choice {
        font-size: 10pt;
        border-radius: 16px;
        box-shadow: 0px 3px 9px rgba(0, 0, 0, 0.15);
    }
}
`;

export default function SearchClient() {
  const [jqueryReady, setJqueryReady] = useState(false);
  const inputRef = useRef(null);
  const loadingRef = useRef(null);
  const placeholderIndex = useRef(Math.floor(Math.random() * (PLACEHOLDERS.length - 1)));

  useEffect(() => {
    // plausible queue stub, same as the inline stub every legacy page defines
    window.plausible =
      window.plausible ||
      function () {
        (window.plausible.q = window.plausible.q || []).push(arguments);
      };

    // body id kept for CSS/behavior parity with the legacy page
    const prevBodyId = document.body.id;
    document.body.id = 'dashboard-body';

    const interval = setInterval(() => {
      if (inputRef.current) {
        inputRef.current.placeholder = PLACEHOLDERS[placeholderIndex.current];
        placeholderIndex.current = (placeholderIndex.current + 1) % PLACEHOLDERS.length;
      }
    }, 2000);

    return () => {
      clearInterval(interval);
      document.body.id = prevBodyId;
    };
  }, []);

  function submitInput() {
    const inputChat = inputRef.current?.value;
    if (!inputChat || inputChat === '') return;

    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    loadingRef.current.style.display = 'inline-block';
    fetch('https://ai.fix.school/topic-search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ input: inputChat }),
    })
      .then(response => response.json())
      .then(data => {
        loadingRef.current.style.display = 'none';
        if (data.charAt(0) === '/') {
          window.plausible('searched');
          if (isSafari) {
            window.location.href = 'https://fix.school' + data;
          } else {
            window.open('https://fix.school' + data);
          }
        }
      })
      .catch(error => {
        console.error('Error:', error);
        loadingRef.current.style.display = 'none';
      });
  }

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
        rel="stylesheet"
      />
      <link href="/css/styles.css" rel="stylesheet" />
      <link href="/essentialstyles.css" rel="stylesheet" />
      <link href="/doorstops/awful.css" rel="stylesheet" />
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />

      <Script
        strategy="afterInteractive"
        data-domain="doorstopped.org"
        src="https://plausible.io/js/script.js"
      />
      <Script
        src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
        strategy="afterInteractive"
        onLoad={() => setJqueryReady(true)}
      />
      {jqueryReady && <Script src="/assets/js/script.js" strategy="afterInteractive" />}

      <div id="onboarding-survey" style={{ backgroundColor: 'white' }}>
        <h2>What sucks about high school?</h2>
        <p className="balance">get a step-by-step solution to any problem</p>
        <div className="input-container">
          <input
            id="input-field"
            ref={inputRef}
            type="text"
            placeholder="gross bathrooms"
            onKeyPress={e => {
              if (e.key === 'Enter') submitInput();
            }}
          />
          <div
            style={{
              position: 'absolute',
              padding: 20,
              cursor: 'pointer',
              display: 'inline-block',
              right: 4,
              zIndex: 3,
            }}
            onClick={submitInput}
          />
          <div className="submit-arrow" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <p className="onboarding-choice pale" onClick={() => window.open('/school/flow')}>
            the rules 🤬
          </p>
          <p className="onboarding-choice light" onClick={() => window.open('/doorstops/conflict')}>
            other ppl 🙄
          </p>
          <p className="onboarding-choice green" onClick={() => window.open('/doorstops/extension')}>
            🧠 health
          </p>
        </div>

        <p className="notsure">
          <a href="/dashboard" style={{ textDecoration: 'underline' }}>
            i&apos;m not sure what sucks...
          </a>
        </p>
        <div className="lds-roller" id="openAI-loading" ref={loadingRef} style={{ display: 'none', margin: 'auto' }}>
          <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div>
        <br /><br /><br /><br />
      </div>
      <p className="credit">
        built with help from 100s of students at{' '}
        <a href="https://doorstopeducation.org" style={{ textDecoration: 'underline' }}>
          Doorstop Education
        </a>
      </p>
    </>
  );
}
