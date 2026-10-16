import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductERP from "@/src/components/ProductERP/ProductERP";

export const metadata: Metadata = {
  title: "School & College ERP Software | The Tech Makers",
  description:
    "Explore school and college ERP software from The Tech Makers, designed to support student records, examinations, attendance, and institutional workflows.",
  alternates: { canonical: '/products/school-college-erp' },
  robots: { index: true, follow: true },
};

type ProductPageProps = {
  params: Promise<{ products: string }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { products } = await params;

  // This template currently contains verified content for only the School/College ERP product.
  // Do not serve the same ERP content under unrelated product slugs.
  if (products !== "school-college-erp") {
    notFound();
  }

  return <ProductERP />;
}
