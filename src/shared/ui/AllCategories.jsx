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

  console.log(data);

  const randomColor = () => {
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += (Math.random() * 9).toFixed(0);
    }
    return color;
  };

  return (
    <div>
      <h2 className="pb-5 text-white text-lg font-bold mt-4">Все остальное</h2>
      <div className="grid grid-cols-2 gap-4">
        {data?.map((item, index) => {
          const generatedColor = randomColor();
          return (
            <div
              className="h-24 p-2 font-bold rounded relative overflow-hidden"
              key={index}
              style={{ backgroundColor: generatedColor }}
            >
              {item.name}
              <img
                className="w-17 h-17 absolute right-0 inset-x-37 bottom-0 rotate-25"
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
