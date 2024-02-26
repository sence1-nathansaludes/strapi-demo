/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, f as renderHead, g as renderSlot, m as maybeRenderHead, u as unescapeHTML, h as renderComponent } from '../astro_DPxRFGEU.mjs';
import { marked } from 'marked';

const $$Astro$2 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/png" href="/strapi.png"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Young+Serif&display=swap" rel="stylesheet"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="bg-[#f3e6d8]"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "D:/Nathan/Projects/Brownbag/strapi-brownbag/frontend/src/layouts/Layout.astro", void 0);

const $$Astro$1 = createAstro();
const $$Recipe = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Recipe;
  const { id } = Astro2.props;
  let data = null;
  let error_message = null;
  try {
    const response = await fetch(`${"https://strapi-brownbag-production.up.railway.app"}/api/recipes/${id}?populate=*`);
    const res_json = await response.json();
    if (res_json.error) {
      error_message = res_json.error.name === "NotFoundError" ? "Recipe not found." : "There's something wrong in the server.";
    } else {
      data = res_json.data;
    }
  } catch (error) {
    console.log(error);
  }
  return renderTemplate`${!error_message && data ? renderTemplate`${maybeRenderHead()}<div class="max-w-[736px] rounded-[30px] bg-white p-10 text-left shadow-lg">${data.attributes.image.data.attributes.url ? renderTemplate`<img${addAttribute(`${"https://strapi-brownbag-production.up.railway.app"}${data.attributes.image.data.attributes.url}`, "src")}${addAttribute(data.attributes.name, "alt")} class="h-[300px] w-full rounded-[10px] bg-gray-100 object-cover">` : renderTemplate`<img${addAttribute(`${"https://strapi-brownbag-production.up.railway.app"}${data.attributes.image.data.attributes.url}`, "src")}${addAttribute(data.attributes.name, "alt")} class="h-[300px] w-full rounded-[10px] bg-gray-100 object-cover">`}<h1 class="my-2 font-serif text-[42px]">${data.attributes.name}</h1><p class="mb-6">${data.attributes.description}</p><div class="mb-6 rounded-[10px] bg-[#FFF7FC] p-[22px] leading-[1.8]"><h3 class="mb-1 text-lg font-bold text-[#7b284f]">Preparation time</h3><ul><li><span class="mr-1 font-bold">Total:</span> Approximately ${data.attributes.preparation_time_total} minutes
</li><li><span class="mr-1 font-bold">Preparation:</span>${data.attributes.preparation_time} minutes
</li><li><span class="mr-1 font-bold">Cooking:</span>${data.attributes.preparation_time_cooking} minutes
</li></ul></div><div class="mb-6 border-b pb-6"><h2 class="mb-2 font-serif text-[27px] text-[#854632]">Ingredients</h2><div>${unescapeHTML(marked.parse(data.attributes.ingredients))}</div></div><div class="mb-6 border-b pb-6"><h2 class="mb-2 font-serif text-[27px] text-[#854632]">Instructions</h2><div>${unescapeHTML(marked.parse(data.attributes.instructions))}</div></div><div><h2 class="mb-2 font-serif text-[27px] text-[#854632]">Nutrition</h2><p class="mb-2">The table below shows nutritional values per serving without the additional fillings.</p><table class="w-full table-auto"><tbody><tr class="border-b"><td class="px-7 py-2 font-[500]">Calories</td><td class="px-7 py-2 font-bold text-[#854632]">${data.attributes.calories}kcal</td></tr><tr class="border-b"><td class="px-7 py-2 font-[500]">Carbs</td><td class="px-7 py-2 font-bold text-[#854632]">${data.attributes.carbs}g</td></tr><tr class="border-b"><td class="px-7 py-2 font-[500]">Protein</td><td class="px-7 py-2 font-bold text-[#854632]">${data.attributes.protein}g</td></tr><tr class=""><td class="px-7 py-2 font-[500]">Fat</td><td class="px-7 py-2 font-bold text-[#854632]">${data.attributes.fat}g</td></tr></tbody></table></div></div>` : null}<!-- print errors -->${error_message}`;
}, "D:/Nathan/Projects/Brownbag/strapi-brownbag/frontend/src/components/Recipe.astro", void 0);

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Brownbag" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-24 text-center text-[#5f574e]"> <div class="inline-block max-w-[768px]"> <div class="mb-4 w-full text-left"> <a href="/" class="font-bold"><span class="mr-3">←</span>Go back</a> </div> ${renderComponent($$result2, "Recipe", $$Recipe, { "id": id })} </div> </section> ` })}`;
}, "D:/Nathan/Projects/Brownbag/strapi-brownbag/frontend/src/pages/recipe/[id].astro", void 0);

const $$file = "D:/Nathan/Projects/Brownbag/strapi-brownbag/frontend/src/pages/recipe/[id].astro";
const $$url = "/recipe/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _id_ as _ };
