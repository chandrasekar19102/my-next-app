export default async function BlogByDate({
  params,
}: {
  params: Promise<{ year: string; month: string }>;
}) {
  const { year, month } = await params;
  return (
    <h1>
      Blog from {month}/{year}
    </h1>
  );
}
