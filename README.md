# Celesté Cosmetics storefront

A lightweight static storefront for Cloudflare Pages. It includes category filters, search, a client-side cart and WhatsApp order-message generation.

## Preview locally
Open `index.html` in a modern browser. Keep `products.js` in the same folder.

## Add products
Edit `products.js`. Set each product's `price` as a number (e.g. `12.00`). Set `image` to a local image path such as `images/blackout-babe.jpg`. Add the image file to an `images` folder. Keep image filenames lowercase and use hyphens.

## WhatsApp number
The current WhatsApp destination is +96170005510 (international wa.me format: 96170005510). Update it in `index.html` if the business number changes; replace both occurrences of `96170005510`.

## Deploy with GitHub + Cloudflare Pages
1. Create a GitHub repository named `celeste-cosmetics-store`.
2. Upload all files and folders from this package to the repository root.
3. In Cloudflare, open Workers & Pages > Create application > Pages > Connect to Git.
4. Select the GitHub repository. Framework preset: None. Build command: leave blank. Build output directory: `/` (or `.` if required by the UI).
5. Deploy. Cloudflare will provide a `*.pages.dev` preview URL.
6. Test the site before connecting your custom domain.

## Domain safety
Do not change GoDaddy nameservers or DNS yet. First verify the site on its pages.dev address. Before changing DNS, preserve existing MX, TXT, SPF, DKIM and DMARC records used by Zoho/email. For an apex domain, Cloudflare Pages requires the domain to be added as a Cloudflare zone and nameservers configured. Consider starting with `shop.celeste-cosmetics.com` as a subdomain to avoid disturbing the current website/email while testing.

## Important limitations
This starter has no card payments, order database, inventory sync, customer accounts or automatic discount engine. Orders are sent to WhatsApp; availability, delivery and final amount are confirmed manually. Cart state is temporary in the browser. Product prices are deliberately set to 0 until you enter confirmed prices.
