"use client"
import { useEffect, useState } from "react";
import { Author, CardRecommendation } from "../../components/cards";
import { DetailBanner } from "../components/carousel";
import { Footer } from "../components/footer";
import { PopularNews } from "../components/cards";
import { Navbar } from "@/app/components/navbar";
import contentfulClient from "@/contentful/contentfulClient"; // Your Contentful client
import { IContentfulAsset, TypeBlogSkeleton } from "@/contentful/types/blog.types";
import { useParams } from "next/navigation"

const getArticleBySlug = async (slug: string) => {
    try {
        const data = await contentfulClient.getEntries<TypeBlogSkeleton>({
            content_type: "blog",
            "fields.slug": slug, // Filter by the slug field
        });

        return data.items[0]?.fields || null; // Return the article data
    } catch (err) {
        console.error(err);
        return null;
    }
};

export default function DetailPage() {
    const [article, setArticle] = useState<any>(null); // State to store article data
    const params = useParams<{ slug: string }>()

    const fetchArticle = async () => {
        try {
            const data = await contentfulClient.getEntries<TypeBlogSkeleton>({
                content_type: "blog",
                limit: 1,
                "fields.slug": params.slug
            })

            setArticle(data.items[0].fields)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchArticle()
    }, [])
    if (!article) {
        return <div>Loading...</div>; // Show loading state if article is not fetched
    }

    return (
        <>
            <Navbar />
            <DetailBanner
                smWidth="sm:w-[1000px]"
                image={`https:${(article?.image as IContentfulAsset).fields.file.url
                    }`} // Use the article image
                title={article.title || ""} // Use the article title
            />
            <div className="flex sm:flex-row flex-col">
                <div className="sm:ml-[300px] ml-[50px]  ">
                    <div className="  sm:w-[700px] w-[300px]">
                        <div className="flex mt-[40px]">{article.bodyone}</div>
                        <div className="flex mt-[40px]">{article.bodytwo}</div>
                        <div className="flex mt-[40px]">{article.bodythree}</div>
                        <div className="flex mt-[40px]">{article.bodyfour}</div>
                        <div className="flex mt-[40px]">{article.bodyfive}</div>
                        <div className="flex mt-[40px]">{article.bodysix}</div>
                        <div className="flex mt-[40px]">{article.bodyseven}</div>
                        <div className="flex mt-[40px]">{article.bodyeight}</div>
                        <div className="flex mt-[40px]">{article.bodynine}</div>
                        <div className="flex mt-[40px]">{article.bodyten}</div>
                        <div className="flex mt-[40px]">{article.bodyeleven}</div>
                        <div className="flex mt-[40px]">{article.bodytwelve}</div>
                        <div className="flex mt-[40px]">{article.bodythirteen}</div>
                        <div className="flex mt-[40px]">{article.bodyfourteen}</div>
                        <div className="flex mt-[40px]">{article.bodysixteen}</div>
                        <div className="flex mt-[40px]">{article.bodyseventeen}</div>
                        <div className="flex mt-[40px]">{article.bodyeighteen}</div>
                        <div className="flex mt-[40px]">{article.bodytwenty}</div>
                        <div className="flex mt-[40px]">{article.bodytwentyone}</div>
                        <div className="flex mt-[40px]">{article.bodytwentytwo}</div>


                    </div>
                </div>
                <div className="flex flex-col">
                    <Author image="https://e3.365dm.com/23/10/768x432/2b94ca4d153b627df0d8ec542241b700fa4f1ef7234ac9d81cd981760c00e738_6311982.jpg?20231007084721="
                        name="Mickey Caroll" title="Science and Technology Reporter" text="Mickey Carroll is a science and technology reporter at Sky News, based in London. She covers a wide range of topics, including artificial intelligence, environmental issues, and technological innovations." />
                    <PopularNews />
                </div>
            </div>
            <div className="sm:ml-[300px] ml-[50px] mt-[20px] flex flex-col">
                <div>
                    <span className="font-bold text-[30px]">You might like</span>
                </div>
                <div className="mt-[30px]">
                    <CardRecommendation />
                </div>
            </div>
            <div className="mt-[50px]">
                <Footer />
            </div>
        </>
    );
}
