export default async function BlogPost({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
  const raw_res = await fetch(url);

  if (!raw_res.ok) {
    return <h1>Failed to fetch post</h1>;
  }

  const post: { id: number; title: string; body: string } =
    await raw_res.json();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Blog Post ID: {post.id}</h1>
      <h2 className="text-xl mb-2">{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
