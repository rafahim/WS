import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dataPath = path.join(root, 'src/data/products.ts');
const source = fs.readFileSync(dataPath, 'utf8');
const imageRoot = path.join(root, 'public');
const referencedImages = [...source.matchAll(/image:\s*"([^"]+\.(?:webp|png|jpe?g))"/g)].map((m) => m[1]);
const missingImages = referencedImages.filter((asset) => !fs.existsSync(path.join(imageRoot, asset.replace(/^\//, ''))));
const productSlugs = [...source.matchAll(/slug:\s*"([a-z0-9-]+)"/g)].map((m) => m[1]);
const required = ['wishly-cards', 'mystery-gifts', 'birthday-gifts'];
const missingRequired = required.filter((slug) => !source.includes(`slug: "${slug}"`));
const uniqueSlugs = new Set(productSlugs);
if (missingImages.length || missingRequired.length || uniqueSlugs.size !== productSlugs.length) {
  console.error({ missingImages, missingRequired, duplicateSlugs: productSlugs.length - uniqueSlugs.size });
  process.exit(1);
}
console.log(`Wishly Store validation passed: ${productSlugs.length} unique category/product slugs and ${referencedImages.length} image references.`);

const paymentPage = path.join(root, 'app/payment/[slug]/page.tsx');
const paymentSource = fs.readFileSync(paymentPage, 'utf8');
const productCard = fs.readFileSync(path.join(root, 'src/components/ProductCard.tsx'), 'utf8');
const detailSource = fs.readFileSync(path.join(root, 'app/products/[slug]/page.tsx'), 'utf8');
const contactSource = fs.readFileSync(path.join(root, 'src/components/StoreFooter.tsx'), 'utf8');
const requiredPaymentChecks = [
  ['payment page says unavailable', paymentSource.includes('isn’t available to buy yet')],
  ['payment page does not collect payment details', paymentSource.includes('does not collect payment details')],
  ['payment page noindex', paymentSource.includes('index: false')],
  ['product card links to payment page', productCard.includes('/payment/${product.slug}/')],
  ['product detail links to payment page', detailSource.includes('/payment/${product.slug}/')],
  ['footer points to official Wishly contact', contactSource.includes('https://wishly.bd/contact')],
];
const failedPaymentChecks = requiredPaymentChecks.filter(([, ok]) => !ok);
if (failedPaymentChecks.length) {
  console.error('Payment/contact checks failed:', failedPaymentChecks.map(([label]) => label));
  process.exit(1);
}
console.log(`Payment/contact validation passed: ${requiredPaymentChecks.length} checks.`);

const requiredBrandAssets = [
  'favicon.ico', 'wishly-icon.svg', 'apple-icon.png',
  'icon-192.png', 'icon-512.png', 'site.webmanifest'
];
const missingBrandAssets = requiredBrandAssets.filter((asset) => !fs.existsSync(path.join(root, 'public', asset)));
let manifestValid = false;
try {
  const manifest = JSON.parse(fs.readFileSync(path.join(root, 'public/site.webmanifest'), 'utf8'));
  manifestValid = Array.isArray(manifest.icons) && manifest.icons.length >= 2 && manifest.icons.every((icon) => fs.existsSync(path.join(root, 'public', icon.src.replace(/^\//, ''))));
} catch { manifestValid = false; }
const iconMetadataValid = fs.readFileSync(path.join(root, 'app/layout.tsx'), 'utf8').includes('/wishly-icon.svg?v=2') && fs.readFileSync(path.join(root, 'public/wishly-icon.svg'), 'utf8').includes('viewBox="0 0 100 100"');
if (missingBrandAssets.length || !manifestValid || !iconMetadataValid) {
  console.error({ missingBrandAssets, manifestValid, iconMetadataValid });
  process.exit(1);
}
console.log(`Branding validation passed: ${requiredBrandAssets.length} icon/manifest assets and metadata.`);

const productImageDir = path.join(root, 'public/images/products');
const productImageFiles = fs.readdirSync(productImageDir).filter((file) => file.endsWith('.webp'));
const emptyProductImages = productImageFiles.filter((file) => fs.statSync(path.join(productImageDir, file)).size < 5000);
if (emptyProductImages.length) {
  console.error('Product image files look incomplete:', emptyProductImages);
  process.exit(1);
}
console.log(`Product artwork validation passed: ${productImageFiles.length} optimized WebP assets.`);
