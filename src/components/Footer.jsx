import Git from "../assets/github";
import Linkedin from "../assets/linkedin";
export default function Footer(){
    var date = new Date().getFullYear();
    return(
        <div>
            <span className="footer">
                <span className="Feel">Feel free to contact me </span>
                <span className="email">shlomi65436@gmail.com </span>
                <span className="copyrights">CopyRights &copy; {date} Shlomi Barsheshet </span>
                <span className="foot-icon">
                    <Linkedin />
                    <Git />
                </span>
            </span>
        </div>
    );
}