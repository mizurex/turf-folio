"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import DiagonalPattern from "@/components/pattern";
import Separator from "@/components/line-separator";
import { Loader2, Send, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Contact() {
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState<"success" | "error" | null>(null);
    const [message, setMessage] = useState("");
    const [rateLimit, setRateLimit] = useState(Date.now());

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        setIsLoading(true);
        setResult(null);
        setMessage("");

        const formData = new FormData(event.currentTarget);
        formData.append("access_key", "f7d10745-f5bc-4a35-b327-7d90d56d13b6");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setResult("success");
                setMessage("Sent successfully! I'll get back to you soon.");
                (event.target as HTMLFormElement).reset();
            } else {
                setResult("error");
                setMessage(data.message || "Something went wrong. Please try again.");
            }
        } catch (error) {
            setResult("error");
            setMessage("Failed to send message. Please check your connection.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="relative min-h-dvh flex flex-col items-center bg-background overflow-x-hidden font-mono">
            <div className="max-w-3xl w-full px-6 relative min-h-dvh flex flex-col">
                <DiagonalPattern side="left" />
                <DiagonalPattern side="right" />

                {/* Vertical Lines - matching the home page style */}
                <div className="hidden min-[1500px]:block pointer-events-none dark:border-[#333333]/50 border-l border-r border-border absolute top-0 left-10 w-full h-full"></div>
                <div className="hidden min-[1500px]:block pointer-events-none dark:border-[#333333]/50 border-l border-r border-border/60 absolute top-0 left-260 w-full h-full"></div>

                {/* Main Content Area */}
                <div className="flex-1 border-l border-r border-border dark:border-[#333333]/50 bg-background z-10">
                    <div className=" pb-6 px-4 md:px-10">
                        <div className='w-50 pt-6 border-r border-border dark:border-[#333333]/50'>
                            <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 group">
                                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                                Back to home
                            </Link>
                        </div>


                        <div className="space-y-2 mb-10">
                            <Separator width="w-[150rem]" />
                            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Get in touch</h1>
                            <Separator width="w-[150rem]" />
                            <p className="text-muted-foreground">
                                Have a project in mind or just want to say hi? <br className="hidden sm:block" />
                                I'm always open to new opportunities and collaborations.
                            </p>
                        </div>

                        <div className="flex justify-center w-full">
                            <div className="w-full max-w-md">
                                <form onSubmit={onSubmit} className="space-y-6">
                                    <div className="space-y-2 ">
                                        <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                            Name
                                        </label>

                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            required
                                            placeholder="John Doe"
                                            className="flex h-10 w-full focus:border-none border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                            Email
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            placeholder="john@example.com"
                                            className="flex h-10 w-full focus:border-none border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            placeholder="Tell me about your project..."
                                            className="flex min-h-[120px] max-h-[200px] w-full focus:border-none border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 resize-y transition-all"
                                        />
                                    </div>

                                    {result && (
                                        <div className={cn(
                                            "p-3 rounded-md flex items-center gap-2 text-sm animate-in fade-in slide-in-from-top-2",
                                            result === "success" ? " " : "bg-destructive/15 text-destructive"
                                        )}>

                                            {message}
                                        </div>
                                    )}
                                    <div className="flex justify-center">

                                        <Button type="submit" className="w-fit rounded-none cursor-pointer" disabled={isLoading}>
                                            {isLoading ? (
                                                <>
                                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="mr-2 h-4 w-4" />
                                                    Send Message
                                                </>
                                            )}
                                        </Button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>


                    <Separator width="w-[150rem]" />
                    <div className="py-2 px-4 md:px-10 flex justify-center items-center gap-3">



                        <div className="flex gap-4">
                            <a href="https://github.com/mizurex" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors hover:underline underline-offset-4">
                                GitHub
                            </a>
                            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors hover:underline underline-offset-4">
                                LinkedIn
                            </a>
                            <a href="https://x.com/PotatoTurf" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors hover:underline underline-offset-4">
                                Twitter
                            </a>
                            <a href="mailto:dhananjayadhal3@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors hover:underline underline-offset-4">
                                Email
                            </a>
                        </div>

                    </div>
                    <Separator width="w-[150rem]" />
                    <div className='h-10'>

                    </div>
                </div>
            </div>
        </main>
    );
}