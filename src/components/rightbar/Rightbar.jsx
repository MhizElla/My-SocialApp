import "./rightbar.css"
import {Users} from "../../dummyData"
import Online from "../../components/online/Online"


export default function Rightbar({Profile}) {

    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="/assets/gift.png" alt="" />
                    <span className="birthdayText">
                        <b>Pola foster</b> and <b>3 other friends</b> have a birthday today
                    </span>
                </div>
                <img className="rightbarAd" src="/assets/ad.png" alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map((u) => (
                        <Online key={u.id} user={u} />
                    ))}
                </ul>  
            </>
        );
    };

    const ProfileRightbar = () => {
        return (
            <>
            <h4 className="rightbarTitle">User Information</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoValue">New York</span>
                </div>

                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From:</span>
                    <span className="rightbarInfoValue">Madrid</span>
                </div>

                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship:</span>
                    <span className="rightbarInfoValue">Single</span>
                </div>
            </div>

            <h4 className="rightbarTitle">User Friends</h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img src="assets/person/1.jpeg" className="rightbarFollowingImg" alt="" />
                    <span className="rightbarFollowingName">John Carter</span>
                </div>

                <div className="rightbarFollowing">
                    <img src="assets/person/2.jpeg" className="rightbarFollowingImg" alt="" />
                    <span className="rightbarFollowingName">Alex Durden</span>
                </div>

                <div className="rightbarFollowing">
                    <img src="assets/person/3.jpeg" className="rightbarFollowingImg" alt="" />
                    <span className="rightbarFollowingName">Dora Hawks</span>
                </div>

                <div className="rightbarFollowing">
                    <img src="assets/person/4.jpeg" className="rightbarFollowingImg" alt="" />
                    <span className="rightbarFollowingName">Cary Duty</span>
                </div>

                <div className="rightbarFollowing">
                    <img src="assets/person/5.jpeg" className="rightbarFollowingImg" alt="" />
                    <span className="rightbarFollowingName">Janell Shrum</span>
                </div>

                <div className="rightbarFollowing">
                    <img src="assets/person/6.jpeg" className="rightbarFollowingImg" alt="" />
                    <span className="rightbarFollowingName">Thomas Holden</span>
                </div>
            </div>
            </>
        )
    }
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {Profile ? <ProfileRightbar/>  : <HomeRightbar/> }
            </div>
        </div>
    )
}