import style from "../CommentsList/CommentsList.module.css";
import { useEffect, useRef } from "react";
import { CommentItem } from "../CommentItem/CommentItem";
import { GET } from "../../../../../../../../../../../../../services/service";
import { useLocation } from "react-router-dom";

const baseUrl = `https://galaxyplay-15910-default-rtdb.europe-west1.firebasedatabase.app/game/ps5-games`;

export const CommentsList = ({ username, comments, setCommentsHandler }) => {
  let location = useLocation();
  let pathArr = location.pathname.split("/");
  let gameId = pathArr[pathArr.length - 1];

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const result = await GET(`${baseUrl}/${gameId}/comments.json`);
        if (result) {
          const commentsArray = Object.keys(result).map((key) => ({
            id: key,
            ...result[key],
          }));

          console.log(setCommentsHandler);
          setCommentsHandler(commentsArray.reverse());
        }
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, [gameId]);

  function removeCommentHandler(commentAuthorUsername) {
    const myComments = comments.filter(
      (currentComment) => currentComment.writer === commentAuthorUsername
    );
    myComments.forEach((myComment) => {
      console.log(myComment.text);
    });
  }


  return (
    <>
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          setCommentsHandler={setCommentsHandler}
          allComments={comments}
          username={username}
        />
      ))}
    </>
  );
};
