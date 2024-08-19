import {Menubar, MenubarMenu, MenubarTrigger} from "@/components/ui/menubar";
import Link from "next/link";

export default function Navbar() {
    return (<div className="w-full justify-center flex pt-2">
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger>
                    <Link href={"/"}>Novinky</Link>
                </MenubarTrigger>
            </MenubarMenu>

            <MenubarMenu>
                <MenubarTrigger>
                    <Link href={"/newPost"}>Novinky</Link>
                </MenubarTrigger>
            </MenubarMenu>
        </Menubar>

    </div>);
}