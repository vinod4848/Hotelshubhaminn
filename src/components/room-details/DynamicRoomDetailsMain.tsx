"use client";
import React from "react";
import { idType } from "@/interFace/interFace";
import Rooms from "./Rooms";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import DynamicDetails from "./DynamicDetails";

const DynamicRoomDetailsMain = ({ id }: idType) => {
  return (
    <>
      <Breadcrumb title="Queen Deluxe Room" />
      <DynamicDetails id={id} />
      <Rooms />
    </>
  );
};

export default DynamicRoomDetailsMain;
