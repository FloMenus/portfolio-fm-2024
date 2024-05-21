export default function Test({ params }: { params: { slug: string } }) {
  return <p>{params.slug}</p>;
}
