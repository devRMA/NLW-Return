import { useState } from "react";

import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import thoughtImageUrl from "../../assets/thought.svg";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedbacksTypes = {
    bug: {
        title: "Problema",
        image: {
            source: bugImageUrl,
            alt: "Imagem de um inseto",
        },
    },
    idea: {
        title: "Ideia",
        image: {
            source: ideaImageUrl,
            alt: "Imagem de uma lâmpada",
        },
    },
    other: {
        title: "Outro",
        image: {
            source: thoughtImageUrl,
            alt: "Imagem de um balão de pensamento",
        },
    },
};

export type FeedbackType = keyof typeof feedbacksTypes;

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

    function handleRestartFeedback() {
        setFeedbackType(null);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {!feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
            ) : (
                <FeedbackContentStep
                    feedbackType={feedbackType}
                    onFeedbackRestartRequested={handleRestartFeedback}
                />
            )}

            <footer className="text-xl text-neutral-400">
                Feito com ❤ por{" "}
                <a
                    className="underline underline-offset-4"
                    href="https://github.com/devRMA"
                    target="_blank"
                >
                    {" "}
                    devRMA
                </a>
            </footer>
        </div>
    );
}
