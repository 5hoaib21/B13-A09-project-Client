import { CircleChevronLeft } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";
import { BsBack } from "react-icons/bs";

const NotFound = () => {
  return (
    <div className="h-[80vh] flex justify-center items-center flex-col gap-4">
      <h2 className="font-bold text-5xl text-purple-500">
        This page is not found
      </h2>
      <Link href={"/"}>
        <Button variant="outline">
          <CircleChevronLeft /> Back to Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
