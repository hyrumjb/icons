import Bio from '../components/Bio';
import '../App.css';

function Athletes() {
    const kobeBryant = {
        "name": "Kobe Bryant",
        "article": "https://vault.si.com/vault/2014/08/25/twilight-the-saga",
        "ai": "Kobe Bryant's path to greatness was paved with extraordinary dedication, sacrifice, and an unrelenting obsession with mastery. Known for his “Mamba Mentality,” Bryant famously woke up at 4 a.m. to train, often completing multiple workouts before his peers arrived at the gym. But beyond the headlines, lesser-known anecdotes reveal the depth of his discipline—such as the time during the 2008 Olympics when he refused to join Team USA at a club in Las Vegas and instead hit the gym for a solo 2 a.m. workout, inspiring teammates like Dwyane Wade and LeBron James to follow suit. He once spent an entire offseason honing his left-handed shot after a finger injury, just in case he needed it in a game. Bryant also watched game tape during team dinners and texted trainers in the middle of the night to adjust routines. His greatness was not just talent, but a product of deliberate sacrifice—giving up comfort, social life, and even sleep—in pursuit of being the best.",
        "video": "https://www.youtube.com/watch?v=hzKraDjWy28"
    }

    return (
        <>
            <h2>Athletes</h2>
            <p>Here's the icons, the people the world sees on perhaps the biggest stages.
                Everyone as a child has dreamed of hundreds of thousands to millions of fans
                screaming their name as they perform in front of the world. These are the people
                who actually made that dream happen.
            </p>
            <Bio {...kobeBryant} />
        </>
    );
}

export default Athletes;