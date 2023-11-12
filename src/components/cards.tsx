import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

export interface CardData {
    id: number;
    image: any;
    title: string;
    progress: number;
    description: string;
    is_done?: boolean;
}

export interface CardsProps {
    data: CardData[];
    handleClick: (id: number) => void;
}

const Cards: React.FC<CardsProps> = ({ data, handleClick }) => {
    if (data.length === 0)
        return (
            <div className="flex items-center justify-center w-full h-96">
                <span className="text-xl text-gray-500">
                    No courses available
                </span>
            </div>
        );
    return (
        <>
            <div className="grid gap-4 lg:grid-cols-12">
                {data.map((item, index) => {
                    const ImageItem = item.image;

                    // console.log("PROGRESS: ", item.progress);
                    return (
                        <Card
                            className={`col-span-3 cursor-pointer overflow-auto-scroll hover:opacity-80 ${
                                item.progress === 100
                                    ? "relative completed-card"
                                    : ""
                            }`}
                            key={index}
                            onClick={() => handleClick(item.id)}
                        >
                            {item.progress === 100 && (
                                <div className="absolute w-full h-full p-4 text-lg font-bold text-white transform -translate-x-1/2 -translate-y-1/2 bg-green-200 rounded top-1/2 left-1/2 bg-opacity-80">
                                    <span className="flex justify-center items-center w-full h-full text-lg font-bold text-green-500 text-[45px] rotate-12 animate-pulse">
                                        COMPLETED
                                    </span>
                                </div>
                            )}

                            <CardContent className="flex items-center justify-center p-4">
                                <ImageItem size="100" color="#7d7d7d" />
                            </CardContent>
                            <CardHeader className="p-2 pb-0">
                                <CardTitle className="ml-2 text-xl font-medium text-center">
                                    {item.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-4 pt-2">
                                <div className="flex flex-col items-center justify-center text-center">
                                    <div className="flex items-center justify-center w-full">
                                        {item.progress === 100 && (
                                            <Badge className="bg-green-500 cursor-pointer select-none hover:bg-green-400">
                                                Completed
                                            </Badge>
                                        )}
                                        {item.progress < 100 &&
                                            item.progress > 0 && (
                                                <Badge className="bg-yellow-500 cursor-pointer select-none hover:bg-yellow-400">
                                                    {item.progress.toFixed(0)}%
                                                    completed
                                                </Badge>
                                            )}
                                        {item.progress === 0 && (
                                            <Badge className="cursor-pointer select-none bg-neutral-400 hover:bg-red-400">
                                                Not started
                                            </Badge>
                                        )}
                                    </div>
                                    <div className="mt-2 text-sm text-gray-500">
                                        {item.description}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </>
    );
};

export default Cards;
