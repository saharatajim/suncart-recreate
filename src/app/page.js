import Banner from "@/components/Banner";
import SummercareTips from "@/components/ExtraSection/SummercareTips";
import TopBrands from "@/components/ExtraSection/TopBrands";
import PopularProducts from "@/components/PopularProducts";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner/>
      <PopularProducts/>
      <SummercareTips/>
      <TopBrands/>
    </div>
  );
}
