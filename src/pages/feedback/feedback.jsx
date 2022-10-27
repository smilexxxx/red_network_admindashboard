import {
  CalendarToday,
  MailOutline,
  ChatBubbleOutline,
  PermIdentity,
} from "@material-ui/icons";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
import "../user/user.css";

export default function Feedback() {
  const location = useLocation();
  const [feedback, setFeedback] = useState({});
  const userId = location.pathname.split("/")[2];

  useEffect(() => {
    const getFeedback = async () => {
      try {
        const res = await userRequest.get("/feedbacks/find/" + userId);
        setFeedback(res.data);
        //console.log(res.data);
      } catch {}
    };
    getFeedback();
  }, [userId]);

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">User Details</h1>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{feedback.username}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Date Sent</span>

            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">{feedback.createdAt} </span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{feedback.username}</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{feedback.email} </span>
            </div>
            <span className="userShowTitle">Message</span>
            <div className="userShowInfo">
              <ChatBubbleOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{feedback.message} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
