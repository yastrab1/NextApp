import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {write} from "@/app/feedFetch";

export default function MarkdownEditor({content,setContent}){
    return (
        <div className="grid w-full gap-2">
            <Textarea placeholder="Type your message here." value={content} onChange={(e) => setContent(e.target.value)} />
            <Button onClick={()=>write(content)}>Send message</Button>
        </div>
    )
}
