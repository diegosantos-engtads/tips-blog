import { drizzleDb } from ".";
import { postsTable } from "./schemas";

(async () => {
  const posts = await drizzleDb.select().from(postsTable);

  posts.forEach((post) => {
    console.log();
    console.log(post.title);
    console.log();
    console.log(post.content);
  });
})();
