import React from "react";
import { getAllCategories } from "@shared/api/spotifyClient";
import { useQuery } from "@tanstack/react-query";

function AllCategories() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getAllCategories(),
  });

  isLoading && <div>Loading...</div>;
  isError && console.log("Error, cant load categories");

  const randomColor = () => {
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += (Math.random() * 9).toFixed(0);
    }
    return color;
  };

  return (
    <div>
      <h2 className="pb-5 text-white text-lg lg:text-2xl font-bold mt-4 p-4">
        Все остальное
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1">
        {data?.map((item, index) => {
          const generatedColor = randomColor();
          return (
            <div
              className="h-30 lg:h-40 p-4 font-bold rounded-lg lg:min-w-20 relative overflow-hidden m-2 lg:text-2xl cursor-pointer"
              key={index}
              style={{ backgroundColor: generatedColor }}
            >
              <div className="max-w-30">{item.name}</div>
              <img
                className="w-17 h-17 md:w-20 md:h-20 xl:w-25 xl:h-25 absolute right-[-10px] bottom-0 rotate-25"
                src={item.icons?.[0]?.url}
                alt={item.name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllCategories;
