'use client';
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"
import Link from "next/link";
import Navbar from "@/components/Navbar";
import React, {useState} from 'react'
import {createRoot} from 'react-dom/client'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import {z} from "zod";
import MarkdownEditor from "@/components/mdEditor";
import {write} from "@/app/feedFetch";


export default function Home() {

    let [markdown,setMarkdown] = useState('')

    return (
        <main>
            <Navbar/>

            <div className={"p-5"}>
                <MarkdownEditor content={markdown} setContent={setMarkdown}></MarkdownEditor>
                <br/>
                <Markdown remarkPlugins={[[remarkGfm]]}>
                    {markdown}
                </Markdown>
            </div>
        </main>
    );
}
