import { notFound } from "next/navigation";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 5 }, // re-generate at most once per minute
  });
  if (!res.ok) return notFound();

  const post = await res.json();
  if (!post?.id) return notFound(); // extra safety

  return (
    <article>
      <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
      <p>{post.body}</p>
    </article>
  );
}
