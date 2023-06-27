"use client";

import { FC, useState, useEffect } from "react";
import { notFound } from "next/navigation";

interface HomeScreenProps {}

type ServerResponse = {
  success: boolean;
  message: string;
};

const HomeScreen: FC<HomeScreenProps> = ({}) => {
  const [data, setdata] = useState<ServerResponse>();

  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch("/api", { cache: "no-store" });
      const data = await res.json();
      setdata(data);
    };

    fetchApi();
  }, []);

  return <div className="container py-8">{data?.message}</div>;
};

export default HomeScreen;
