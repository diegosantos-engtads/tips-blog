import { findAllPostAdmin } from "@/lib/post/queries/admin";
import clsx from "clsx";
import Link from "next/link";
import { DeletePostButton } from "../Admin/DeletePostButton";

export default async function PostsListAdmin() {
  const posts = await findAllPostAdmin();
  return (
    <div>
      {posts.map((post) => {
        return (
          <div
            className={clsx(
              "flex",
              "items-center",
              "justify-between",
              "gap-2",
              "p-1.5",

              !post.published && "bg-[#b5b5b5]"
            )}
            key={post.id}
          >
            <Link href={`/admin/post ${post.id}`}>{post.title}</Link>

            <div className="flex gap-2.5">
              {!post.published && (
                <small className="text-slate-600 italic underline">
                  Não Publicado
                </small>
              )}
              <DeletePostButton id={post.id} title={post.title} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
