"use client";
import { useRouter, useSearchParams } from "next/navigation";

interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
  direction: "next" | "previous";
}

const ShowMore = ({ pageNumber, isNext, direction }: ShowMoreProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = () => {
    const params = new URLSearchParams(searchParams.toString());
    const newPage = direction === "next" ? pageNumber + 1 : pageNumber - 1;

    if (newPage >= 1) { 
      params.set("pageNumber", newPage.toString());
      params.set("limit", "20");
      router.push(`/?${params.toString()}`);
    }
  };

  return (
    <div className="flex justify-center items-center mt-4 space-x-4">
      {direction === "previous" && pageNumber > 1 && (
        <button
          onClick={handlePageChange}
          className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
         &lt;
        </button>
      )}

      {direction === "next" && isNext && (
        <button
          onClick={handlePageChange}
          className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          &gt;
        </button>
      )}
    </div>
  );
};

export default ShowMore;
