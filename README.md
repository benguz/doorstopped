# Forking this repository to create a personalized page for a school
Doorstop Education

1. Fork the repo.
2. Add the github to netlify and add your chosen custom domain or subdomain (eg. whs.doorstopped.org) to all custom domains (eg. whs.doorstopeducation.org).
3. Upload a logo to /assets/images/ and name it doors.svg, optionally adding a white version named doors-white.svg.
4. For all "form" Doorstops, add the specific contact point for your school.
5. Create another site on plausible, along with a new API key, adding the .env key locally and in Netlify
6. Choose which Doorstop categories you would like to use and create any school-specific ones (see below)
7. Change /index to some other content, or make the main landing page the student-facing one currently at /student.
8. Share your subdomain (or custom domain!) link with students. Go to /analytics on the live site to see how students are interacting with Doorstops!
9. Sync changes from the main fork often, as that is where new Doorstops will be added!

## Embed a Doorstop or the swipe interface into your site
1. Request permission to either by emailing benjamin.guzovsky [at] gmail [dot] com or by making a pull request adding your domain to _headers for the relevant page.
2. Add the following line of code to your website, where the src= points to the page you'd like to embed.
```
    <iframe style="width: 98%; margin: auto; height: 100vh; border-style: none;" src="https://doorstopped.org/dashboard" class="container"></iframe>
```
3. You're more than welcome to also fork the repository and create your own _headers file.

## Doorstop creation and filtering categories.

- Bingo
- Dashboard
- Formats/interactivity
