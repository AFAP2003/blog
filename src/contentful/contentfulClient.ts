import { createClient } from "contentful";

const contentfulClient = createClient({
    space:process.env.NEXT_PUBLIC_USER_CONTENTFUL_ID || "",
    accessToken:process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || ""
})

export default contentfulClient