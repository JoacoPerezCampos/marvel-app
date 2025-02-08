"use client";
import { useRouter, useSearchParams } from "next/navigation";

interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleShowMore = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("pageNumber", (pageNumber + 1).toString());
    params.set("limit", "20"); // Puedes ajustar el límite aquí

    router.push(`/?${params.toString()}`);
  };

  return (
    <div className="flex justify-center items-center mt-4">
      {isNext && (
        <button
          onClick={handleShowMore}
          className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default ShowMore;