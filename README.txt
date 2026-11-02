iCoreTech Ventures Website
==========================

PACKAGE CONTENTS
- index.html: website entry point
- css/style.css: responsive styling (based on the previously approved iCoreTech navy/blue design)
- js/script.js: service-specific order forms, validation, WhatsApp message preparation, feedback form and active navigation
- assets/icoretech-logo.jpg: official logo retained from the approved previous website

PREVIEW LOCALLY
1. Extract this ZIP.
2. Open the iCoreTech-website folder.
3. Open index.html in a modern browser. For best testing, use VS Code Live Server.

PUBLISH WITH GITHUB PAGES
1. Sign in to the business owner's GitHub account.
2. Create a new repository (for example: icoretech-ventures).
3. Extract this ZIP and upload the CONTENTS of the iCoreTech-website folder to the repository root. Ensure index.html is at the root, not inside another nested folder.
4. In the repository, open Settings > Pages.
5. Under Build and deployment, choose Deploy from a branch.
6. Select the main branch and /(root), then Save.
7. Wait for GitHub Pages to publish and use the public URL shown in Settings > Pages.
8. To update the site, replace the relevant files in the repository and commit the changes.

CUSTOM DOMAIN LATER
- Add the domain in Settings > Pages > Custom domain.
- Configure the DNS records at the domain provider using GitHub's current instructions.
- Enable Enforce HTTPS after DNS verification is complete.

GOOGLE SEARCH CONSOLE
- The HTML head contains a clearly marked insertion point for the REAL Google Search Console verification meta tag.
- Do not publish a made-up token. Obtain the exact meta tag from the owner's Search Console account and insert it inside <head>, then publish the updated index.html.

ORDERING / WHATSAPP BEHAVIOUR
- Each of the eight service cards opens its own service-specific form.
- Required fields are validated by the browser before the WhatsApp message is prepared.
- The website opens WhatsApp at https://wa.me/233535470273 with the completed request text.
- The customer must review and press Send in WhatsApp. The website does not claim the order is received or confirmed before that action.
- Suggestions and feedback are also prepared for WhatsApp. This static site does not store submissions or use a database.
- No prices are displayed.

IMPORTANT SERVICE LIMITATION
Certificate assistance is limited to legitimate design, preparation and guidance. Official certificates must be issued by the authorized institution. No forged or fraudulent documents are offered.

TESTING NOTES
- Local static-file checks and ZIP integrity checks were performed on this package.
- WhatsApp handoff requires an internet connection and a WhatsApp-capable browser/app; final sending is controlled by the customer.
- GitHub Pages deployment, real-device browser testing and live WhatsApp delivery cannot be confirmed until the owner publishes and tests the site.
