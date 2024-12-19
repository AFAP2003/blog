import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document as RichtTextDocument } from "@contentful/rich-text-types";

type RichTextProps = {
    document:RichtTextDocument| undefined
}

export default function RichText ({document}:RichTextProps){
    if(!document) return null
    return <><div className="whitespace-pre-wrap">

{documentToReactComponents(document)}
    </div>
    </>
}