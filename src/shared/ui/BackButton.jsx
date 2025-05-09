import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { useRouter } from "@tanstack/react-router";

function BackButton() {
  const { history } = useRouter();

  return (
    <IoMdArrowBack
      className="w-8 h-8 cursor-pointer"
      onClick={() => history.go(-1)}
    />
  );
}

export default BackButton;
