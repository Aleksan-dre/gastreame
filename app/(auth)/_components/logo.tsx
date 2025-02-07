import Image from 'next/image';
import { Poppins } from 'next/font/google';

import { cn } from "@/lib/utils";

const font = Poppins({ 
    subsets: ['latin'],
    weight: ["200", "300", "400", "500", "600", "700", "800"] 
});

export const Logo = () => {
    return (
        <div className="flex flex-col items-center">
            <div>
                <Image 
                    src="/logo.png"
                    alt="Gamehub"
                    height="100"
                    width="140"
                />
            </div>
            <div className={cn(
                "flex flex-col items-center",
                font.className
                )}>
                <p className="text-xl font-semibold">
                    Gastreame
                </p>
                <p
                    className="text-sm text-muted-foreground">
                    Let&apos;s go live
                </p>
            </div>
        </div>
    );
};