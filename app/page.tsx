'use client';
import Image from "next/image";
import {Button} from "@/components/ui/button";

import Navbar from "@/components/Navbar";
import clientPromise from "../lib/mongodb";
import { NextApiRequest, NextApiResponse } from 'next';


export default function Home() {




  return (
      <main>
          <main>
              <Navbar/>
          </main>
      </main>
  );
}
