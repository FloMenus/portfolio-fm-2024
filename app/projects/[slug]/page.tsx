export async function generateStaticParams() {
  return [{ slug: "test" }];
}

export default function Test({ params }: { params: { slug: string } }) {
  return <p>{params.slug}</p>;
}
