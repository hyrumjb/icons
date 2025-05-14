import '../App.css';
import {
    FacebookShareButton,
    TwitterShareButton,
    LinkedinShareButton,
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon
} from 'react-share';

function About() {
    const shareUrl = window.location.href;
    const title = "Check this out!";

    return (
        <>
            <h2>Behind this Site</h2>
            <p>Everyone needs role models and examples.</p>
            <p>Some of these come into one's life naturally, like parents, family members,
                and the people in one's general vicinity. Unfortunately, many people are somewhat lacking
                in this category and never seem to have a grasp on where they could go or what they could be.
                It's not that they lack potential, it's that they lack a vision of what is even possible.
                They are so trapped in by the frankly sad and limited world they know that they never even
                dream there could be&em;and is&em;something better out there. That is precisely the purpose of
                ICONS: to inspire people, open minds, and help humanity realize its potential.
            </p>
            <div>
                <FacebookShareButton url={shareUrl} quote={title}>
                    <FacebookIcon size={32} round />
                </FacebookShareButton>

                <TwitterShareButton url={shareUrl} title={title}>
                    <TwitterIcon size={32} round />
                </TwitterShareButton>

                <LinkedinShareButton url={shareUrl} title={title}>
                    <LinkedinIcon size={32} round />
                </LinkedinShareButton>
            </div>
        </>
    );
}

export default About;