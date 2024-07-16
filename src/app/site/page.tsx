import Background from "@/components/Background";
import Image from "next/image";
import { preview } from "../../../public/images";
import { pricingCards } from "@/lib/constants";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import clsx from "clsx";
import { Check } from "lucide-react";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <section className="h-full w-full">
                <Background type="top-grid">
                    <div className=" pt-32">
                        <p className=" capitalize text-center">
                            run your agency in one place
                        </p>

                        {/* Gradient Text */}
                        <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
                            <h1 className="text-9xl font-bold text-center md:text-[300px]">
                                Plura
                            </h1>
                        </div>
                        <div className="flex justify-center items-center relative md:mt-[-70px]">
                            <Image
                                src={preview}
                                alt="banner imgae"
                                height={1200}
                                width={1200}
                                className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
                            />
                            <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10"></div>
                        </div>
                    </div>
                </Background>
            </section>
            <section className="flex justify-center items-center flex-col gap-4 md:!mt-20 mt-[-60px]">
                <h2 className="text-4xl text-center">
                    Choose what fits you right
                </h2>
                <p className=" text-muted-foreground text-center">
                    Our straightforward pricing plans are tailored to meet your
                    needs. If {"your're"} not <br /> ready to commit you can get
                    started for free.
                </p>
                <div className="flex justify-center gap-4 flex-wrap mt-6">
                    {pricingCards.map((card) => (
                        //WIP: Wire up free products from strips
                        <Card
                            key={card.title}
                            className={clsx(
                                "w-[300px] flex flex-col justify-between",
                                {
                                    "border-2 border-primary":
                                        card.title === "Unlimited Saas",
                                }
                            )}
                        >
                            <CardHeader>
                                <CardTitle
                                    className={clsx("", {
                                        " text-muted-foreground":
                                            card.title !== "Unlimited Saas",
                                    })}
                                >
                                    {card.title}
                                </CardTitle>

                                <CardDescription>
                                    {card.description}
                                </CardDescription>
                            </CardHeader>

                            <CardContent>
                                <span className=" text-5xl font-bold">
                                    {card.price}
                                    <span className=" text-muted-foreground text-xl">
                                        / month
                                    </span>
                                </span>
                            </CardContent>
                            <CardFooter className=" flex flex-col items-center  gap-4">
                                <div>
                                    {card.features.map((feature) => (
                                        <ul
                                            key={feature}
                                            className=" flex gap-2 items-center"
                                        >
                                            <Check className=" text-muted-foreground" />
                                            <li>
                                                <p>{feature}</p>
                                            </li>
                                        </ul>
                                    ))}
                                </div>
                                <Link
                                    href={`/agency?plan=${card.priceId}`}
                                    className={clsx(
                                        "w-full text-center bg-primary p-2 rounded-md",
                                        {
                                            "!bg-muted-foreground":
                                                card.title === "Unlimited Saas",
                                        }
                                    )}
                                >
                                    Get Started
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </section>
        </>
    );
}
