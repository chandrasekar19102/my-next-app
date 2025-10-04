export default async function BlogList() {
  const raw_res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await raw_res.json();

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
      <ul className="space-y-2">
        {posts.map((post: any) => (
          <li key={post.id} className="border p-3 rounded hover:bg-gray-50">
            <a
              href={`/blog/${post.id}`}
              className="text-blue-600 hover:underline"
            >
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
