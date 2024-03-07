import { Category } from "@/types";
import { useRouter } from "next/navigation";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL, { cache: "no-store" });

  console.log(URL);
  return res.json();
};

export default getCategories;
