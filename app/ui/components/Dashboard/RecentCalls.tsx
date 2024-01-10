"use client";

import React from "react";
import { Listbox, ListboxItem } from "@nextui-org/react";
import "@/app/ui/styles/globals.scss";

const RecentCalls = () => (
  <div className="w-full h-full p-4">
    <h2>Nyeste Opkald</h2>
    <Listbox aria-label="Recent Calls" onAction={(key) => alert(key)}>
      {/* TO DO - SKAL AUTOMATISK TAGES FRA INGAME */}
      <ListboxItem key="call1">Opkald 1</ListboxItem>
      <ListboxItem key="call2">Opkald 2</ListboxItem>
      <ListboxItem key="call3">Opkald 3</ListboxItem>
    </Listbox>
  </div>
);

export default RecentCalls;
