// import { eq } from "drizzle-orm";
// import { drizzleDb } from ".";
// import { postsTable } from "./schemas";

// (async () => {
//   const posts = await drizzleDb.select().from(postsTable);

//   posts.forEach((post) => {
//     console.log(post.slug);
//   });
//   await drizzleDb
//     .update(postsTable)
//     .set({
//       title: "Rotina matinal de pessoas altamente eficazes",
//       published: true,
//     })
//     .where(eq(postsTable.slug, "rotina-matinal-de-pessoas-altamente-eficazes"));
// })();
