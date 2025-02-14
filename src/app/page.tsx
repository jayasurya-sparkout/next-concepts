import Title from "@/components/title";
import Description from "@/components/description";
import { Products } from "@/components/products";
import Clipboard from "@/components/clipboard";

export default function Home() {
  return (
    <main className="container mx-auto px-4">
      <Title title="Get Doggy Stickers!" />
      <Description description="Buy stickers for your dog!" />
      <Products />
      <Clipboard />
    </main>
  );
}
