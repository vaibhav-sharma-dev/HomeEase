import React from "react";
import CenterHeadComponent from "../../../Components/Heading_Component/Center_Head_Component";
import CommentsSection from "./Comments_Section";


export default function ArtificialCommentsSection() {
    return (
        <div className="md:px-4 mt-16 m-16">
            <CenterHeadComponent 
                head="Dont Trust Us, Trust Their Voice"
                para="Discover heartfelt accounts of joy and fulfillment as our valued clients embark on the quest for their dream homes and prime investments."
            />

            <CommentsSection />
        </div>
    )
}