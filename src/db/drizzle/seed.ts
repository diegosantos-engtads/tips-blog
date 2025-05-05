import { JsonPostRepository } from "@/repositories/post/json-post-repository";
import { drizzleDb } from ".";
import { postsTable } from "./schemas";

(async () => {
  const jsonPostRep = new JsonPostRepository();
  const posts = await jsonPostRep.findAll();

  try {
    //await drizzleDb.delete(postsTable).whre(); // limpar a base de dados onde...
    await drizzleDb.insert(postsTable).values(posts);

    console.log();
    console.log(`${posts.length} posts foram salvos na base de dados.`);
    console.log();
  } catch (e) {
    console.log("Ocorreu um erro...");

    console.log(e);
  }
})();
