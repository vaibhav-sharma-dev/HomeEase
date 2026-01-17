import React from "react";
import CommentCard from "./Comment_Card";
import {CommentData} from "./Comment_Data.js";


export default function CommentsSection() {
    return (
        <div className="flex flex-col md:grid grid-rows-2 grid-cols-5 gap-5">
            <div className="col-span-3 mt-8">
                <CommentCard
                    id={CommentData.comment1._id}
                    imgSrc={CommentData.comment1.imgSrc}
                    description={CommentData.comment1.description}     
                    name={CommentData.comment1.name}
                    star={CommentData.comment1.star}
                />
            </div>

            <div className="col-span-2 mt-8">
                <CommentCard
                    id={CommentData.comment2._id}
                    imgSrc={CommentData.comment2.imgSrc}
                    description={CommentData.comment2.description}     
                    name={CommentData.comment2.name}
                    star={CommentData.comment2.star}
                />
            </div>

            <div className="col-span-2 mt-12">
                <CommentCard 
                    id={CommentData.comment3._id}
                    imgSrc={CommentData.comment3.imgSrc}
                    description={CommentData.comment3.description}     
                    name={CommentData.comment3.name}
                    star={CommentData.comment3.star}
                />
            </div>

            <div className="col-span-3 mt-12">
                <CommentCard
                    id={CommentData.comment4._id}
                    imgSrc={CommentData.comment4.imgSrc}
                    description={CommentData.comment4.description}     
                    name={CommentData.comment4.name}
                    star={CommentData.comment4.star}
                />
            </div>
        </div>
    )
}