/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead, e as addAttribute } from '../astro_DPxRFGEU.mjs';
import { $ as $$Layout } from './_id__CqDDo63L.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  let data = [];
  let error_message = null;
  try {
    const response = await fetch(`${"https://strapi-brownbag-production.up.railway.app"}/api/recipes`);
    const res_json = await response.json();
    if (res_json.error) {
      error_message = res_json.error.name === "NotFoundError" ? "Unable to retrieve recipes." : "There's something wrong in the server.";
    } else {
      data = res_json.data;
    }
  } catch (error) {
    console.log(error);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Strapi Demo" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex justify-center"> <div class="w-full max-w-[768px] py-20"> <h1 class="mb-5 w-full font-serif text-3xl font-semibold">My Recipes</h1> ${!error_message && data ? renderTemplate`<ul class="m-0 w-full list-none"> ${data.map((recipe) => renderTemplate`<li class="font-serif text-2xl font-normal hover:opacity-60"> <a${addAttribute(`/recipe/${recipe.id}`, "href")}>${recipe.attributes.name}</a> </li>`)} </ul>` : renderTemplate`<div>${error_message}</div>`} </div> </section> ` })}`;
}, "D:/Nathan/Projects/Brownbag/strapi-brownbag/frontend/src/pages/index.astro", void 0);
const $$file = "D:/Nathan/Projects/Brownbag/strapi-brownbag/frontend/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
