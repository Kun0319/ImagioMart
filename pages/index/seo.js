// import { useHead, useJsonld } from "#imports";
// import { useGlobalStore } from "@/stores";

// export default function useSeo() {
//   const globalStore = useGlobalStore();
//   globalStore.setBreadcrumbs([
//     { title: "IW家飾", isActive: false, url: "/" },
//     { title: "預約到府服務", isActive: true, url: "/service/inhome" },
//   ]);

//   useSeoMeta({
//     title: `預約到府服務 - ${import.meta.env.VITE_WEBSITE_TITLE}`,
//     ogTitle: `預約到府服務 - ${import.meta.env.VITE_WEBSITE_TITLE}`,
//     description: "預約到府服務",
//     ogDescription: "預約到府服務",
//     // ogImage: faq.value.seo?.og_image?.link,
//     // keywords: faq.value.seo?.meta_keywords.join(',')
//   });

//   useHead({
//     link: [
//       {
//         rel: "canonical",
//         href: `${import.meta.env.VITE_DOMAIN}`,
//       },
//     ],
//   });

//   useJsonld({
//     "@context": "https://schema.org",
//     "@graph": [
//       {
//         "@type": "BreadcrumbList",
//         itemListElement: [
//           {
//             "@type": "ListItem",
//             position: 1,
//             name: "首頁",
//             item: import.meta.env.VITE_DOMAIN,
//           },
//           {
//             "@type": "ListItem",
//             position: 2,
//             name: "找服務",
//             item: `${import.meta.env.VITE_DOMAIN}/service`,
//           },
//           {
//             "@type": "ListItem",
//             position: 3,
//             name: "預約到府服務",
//             item: `${import.meta.env.VITE_DOMAIN}/service/inhome`,
//           },
//         ],
//       },
//     ],
//   });
// }
