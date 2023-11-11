import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

const data = [
    {
        image: "https://fossa.com/blog/content/images/2022/03/CC--.png",
        title: "C/C++",
        progress: 0,
        description: "Learn C/C++. Advanced course for experienced programmers",
    },
    {
        image: "https://miro.medium.com/v2/resize:fit:1400/1*m0H6-tUbW6grMlezlb52yw.png",
        title: "Python",
        progress: 0.5,
        description: "Learn Python basics. A good start for beginners",
    },
    {
        image: "https://www.sitedetout.com/wp-content/uploads/2016/07/java.jpg",
        title: "Java",
        progress: 1,
        description:
            "Get started with Java and Spring Boot. You will learn how to build a REST API",
    },
];

function Cards() {
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
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {data.map((item, index) => (
                    <Card
                        className="w-full overflow-x-scroll cursor-pointer hover:opacity-80"
                        key={index}
                        onClick={() => {
                            // store.setShowDeal(deal);
                        }}
                    >
                        <CardContent className="p-0 ">
                            {getImage(item)}
                        </CardContent>
                        <CardHeader className="p-2 pb-0">
                            <CardTitle className="ml-2 text-xl font-medium text-left">
                                {item.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-2">
                            <div className="flex flex-col text-left">
                                <div className="">
                                    {item.progress === 1 && (
                                        <Badge className="bg-green-500 cursor-pointer select-none hover:bg-green-400">
                                            Completed
                                        </Badge>
                                    )}
                                    {item.progress < 1 && item.progress > 0 && (
                                        <Badge className="bg-yellow-500 cursor-pointer select-none hover:bg-yellow-400">
                                            {item.progress * 100}% completed
                                        </Badge>
                                    )}
                                    {item.progress === 0 && (
                                        <Badge className="bg-red-500 cursor-pointer select-none hover:bg-red-400">
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
                ))}
            </div>
        </>
    );
}

export default Cards;

function getImage(item) {
    const emptyTag = <div className="w-full h-64 bg-gray-300"></div>;

    if (!item.image) return emptyTag;

    const url = item.image;
    const extension = url.split(".").pop()?.toLowerCase();

    if (!extension) return emptyTag;

    if (["jpg", "jpeg", "png", "gif", "webp"].includes(extension))
        return (
            <img src={url} className="object-cover w-full h-64 bg-gray-300" />
        );

    return emptyTag;
}
