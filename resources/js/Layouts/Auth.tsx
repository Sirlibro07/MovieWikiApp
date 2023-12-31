import React, { ReactNode } from "react";
import "./CSS/GuestLayout.css";
import imgStoragePath from "../Helpers/images";
import { Head } from "@inertiajs/react";

interface AuthProps {
    children: ReactNode;
    img_path: string;
    img_classes?: string;
    form_position?: string;
    title: string;
    media_query_breakpoint?: string;
}

export default function Auth({
    children,
    img_path,
    img_classes = "",
    form_position = "start",
    title,
    media_query_breakpoint = "580px",
}: AuthProps) {
    const img = (version: string) => {
        return imgStoragePath(`backgrounds/${img_path}/${version}`);
    };

    return (
        <>
            <style>
                {`@media (max-height: ${media_query_breakpoint}) {
                        html,
                        body,
                        #app {
                            height: fit-content;
                        }
                    }`}
            </style>
            <Head title={title} />
            <main
                className={`w-full h-full relative flex items-end lg:items-center lg:justify-${form_position}`}
            >
                <picture className="w-full h-full absolute z-[-1]">
                    <source
                        media="(min-width: 1536px)"
                        srcSet={img("desktop")}
                    />
                    <source
                        media="(min-width: 1024px)"
                        srcSet={img("laptop")}
                    />
                    <source media="(min-width: 640px)" srcSet={img("tablet")} />

                    <img
                        className={`w-full h-full object-cover object-top lg:object-bottom  ${img_classes}`}
                        alt="background-image"
                        src={img("mobile")}
                        decoding="async"
                    />
                </picture>

                {children}
            </main>
        </>
    );
}
