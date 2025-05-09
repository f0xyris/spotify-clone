import React from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/download")({
  component: Download
});

function Download() {
  return (
    <div className="p-2">
      <h3>Скачать приложение</h3>
    </div>
  );
}
