import "./faq.css";
import faqTitle from "../../assets/Faq/faq-title.svg";
import dukePng from "../../assets/Faq/duke-in-faq.png";
import bottomLine from "../../assets/Faq/bottom-line.svg";
import { Accordion } from "react-bootstrap";

function FAQ() {
  const faq = [
    {
      question: "What is StrayShot?",
      answer:
        "StrayShot is a thrilling third-person Shooter Game where you step into the boots of a Bounty Hunter, ready to take on rivals in intense matches. In StrayShot, you'll discover a world of unique characters and engaging game modes. It's all about accumulating points and proving your skills to qualify for exclusive prizes in high-stakes weekly and monthly challenges.StrayShot brings you fast-paced action, deep customization, and a variety of game modes like Hostage Rescue, Extraction Shooter, and Team Deathmatch. So, gear up and get ready for intense gaming adventures in StrayShot.",
    },
    {
      question: "How do I play the beta?",
      answer:
        "To get started, download the game. Do note that you might not be able to play right away, as our servers are only operational specifically during public test sessions. However, joining or creating a clan in the server allows you to participate in test plays more frequently, with sessions occurring up to three times a week. Join Discord to learn more.",
    },
    {
      question: "How do I Install StrayShot?",
      answer: `
        <ol class="numbered-list">
            <li>Visit <a href="https://strayshot.game" target="_blank" rel="noopener noreferrer" style="text-decoration: underline;">https://strayshot.game</a>.</li>
            <li>Click on the "Download" button to download the launcher.</li>
            <li>Create a StrayShot account by filling in the necessary information and follow the prompts.</li>
            <li>After creating and verifying your email address, click the "Download now" button (download will start automatically).</li>
            <li>Navigate to your "Downloads" folder or wherever your browser downloads are saved.</li>
            <li>Open the "StrayShot-.exe" file.</li>
            <li>Follow the installation steps.</li>
            <li>Click "Allow Access" if prompted.</li>
            <li>Install the full game within the launcher.</li>
            <li>Sign into the game using your StrayShot account.</li>
        </ol>
        <p>Congratulations! You are now inside StrayShot.</p>
    `,
    },
    {
      question: "What is the minimum system requirements?",
      answer: `
        <p>For Windows users, the minimum system requirements are:</p>
        <ul class="custom-list-faq">
        <li>CPU: Intel Core i7</li>
        <li>RAM: 8 GB</li>
        <li>GPU: NVIDIA GTX 1660</li>
        <li>Hard drive space: 26 GB</li>
    </ul> 
        `,
    },
    {
      question: "HOW CAN I EARN REWARDS?",
      answer:
        "Visit the Rewards Hub to learn more about collecting points, referring players, becoming a content creator, or playing for prizes!",
    },
    {
      question: "is the game available on mobile or console?",
      answer:
        "We’re currently focused on making StrayShot the best game that it can be on PC however we have plans to expand to different platforms. Follow our socials for updates.",
    },
    {
      question:
        "HOW TO TROUBLESHOOT Log-in and  Reporting Installation Problems?",
      answer: `
        If you encounter sign-in issues on StrayShot, start by refreshing the page. Clear the cache in the StrayShot client settings. If the problem persists, please open a  <a className="support-ticket" target="_blank" rel="noopener noreferrer" style="
        text-decoration: underline;
    " href="https://forms.clickup.com/9010090140/f/8cgp44w-507/Z3YMAV6X5EPV9OC5FH">support ticket here</a>
        .
        `,
    },
    {
      question: "Which engine is used in StrayShot?",
      answer: "Unreal-Engine",
    },
  ];

  return (
    <div className="faq-container my-5" id="FAQ">
      <div className="d-flex flex-column justify-content-center align-items-center  text-center">
        <div className=" faq-header-img-container row justify-content-center">
          <img className="img-fluid" src={faqTitle} alt="" />
        </div>

        <div className="my-5">
          <p className="faq-main-title text-uppercase">
            Still have questions? We got you.
          </p>
        </div>

        <div className="faq-main-container container">
          <Accordion className="accordion-flush ">
            {faq.map((item, index) => (
              <Accordion.Item eventKey={index.toString()} key={index}>
                <Accordion.Header className="accordion-header">
                  {item.question}
                </Accordion.Header>
                <Accordion.Body>
                  {" "}
                  <p
                    className="accordion-description"
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  ></p>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>

          <div className="duke-faq">
            <img src={dukePng} alt="" />
          </div>

          <div className="faq-bottom-line">
            <img src={bottomLine} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
