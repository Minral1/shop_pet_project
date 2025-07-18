import { useState } from "react";
import avatarIcon from "../assets/img/avatarIcon.svg";
import type { ChangeEvent } from "react";

type Reviews = {
    author: string,
    title: string,
    text: string,
    date: string,
    rating: number,
};

export const Review = () => {
    const [review, setReview] = useState<Reviews[]>([
    {
      author: "Jane Cooper",
      title: "Amazing Product",
      text: "Lorem Ipsum is simply dummy text",
      date: "01/01/2021",
      rating: 4,
    },
    {
      author: "Max Doodle",
      title: "Best choice",
      text: "Various versions have evolved over the years",
      date: "05/23/2021",
      rating: 5,
    },
    ]);

    const [currentReview, setCurrentReview] = useState("");

    const currentReviewHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.currentTarget.value;
    setCurrentReview(newValue);
  };

  const addReviewHandler = () => {
    const newReview = {
      author: "Jane Cooper",
      title: "Amazing Product",
      text: currentReview,
      date: "05/23/2021",
      rating: 5,
    };
    setReview([newReview, ...review]);
    setCurrentReview("");
  };

    return (
        <div>

        <div className= "review">
            <h3>Reviews ({review.length})</h3>
            <textarea 
            value={currentReview}
            placeholder="Provide your review..."
             onChange={currentReviewHandler}>
             </textarea>
            <button onClick={addReviewHandler}> Send review</button>
        </div>
        <div>
            {review.map((r)=>{
                return (
                    <div className="reviewField">
                        <div className="info">
                            <div className="user">
                                <img src={avatarIcon} alt="" />
                                <div className="infoBox">
                                    <p className="author">{r.author}</p>
                                    <p className="rating">{r.rating} Rating</p>
                                </div>
                            </div>
                            <div>
                                <p className="date">{r.date}</p>
                            </div>
                        </div>

                        <div className="content">
                            <p className="title">{r.title}</p>
                            <p>{r.text}</p>
                        </div>
                    </div>
                );
            })
            };
        </div>
        </div>
    );

};