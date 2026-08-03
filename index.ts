import * as cloudflare from "@pulumi/cloudflare";
import * as pulumi from "@pulumi/pulumi";

// حجز سيرفر ومستودع سحابي مجاني على شبكة Cloudflare العالمية لمشروع شاهين
const shaheenDeployment = new cloudflare.PagesProject("shaheen-os-cdn", {
    accountId: "9ade5d8250b4df420bbfd636e0581e3b",
    name: "shaheen-os",
    productionBranch: "canary",
    buildCommand: "pnpm run build",
    outputDir: ".next",
});

// استخراج الرابط السحابي المجاني فوراً بعد الحجز
export const siteUrl = shaheenDeployment.subdomain;
