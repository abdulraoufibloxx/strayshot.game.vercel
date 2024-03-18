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
        "StrayShot is an exciting third-person shooter where you battle rivals using distinct characters and weapons. With fast-paced action and deep customization, our game delivers an immersive battle royale experience to test your combating skills.",
    },
    {
      question: "How do I play the beta?",
      answer: `To get started <a href="https://play.strayshot.game/" target="_blank" rel="noopener noreferrer" style="text-decoration: underline;"> download the game.</a>  Then, <a href="https://blog.strayshot.game/2024/03/12/how-the-clan-system-works-within-strayshot/" target="_blank" rel="noopener noreferrer" style="text-decoration: underline;"> join a clan</a> to participate in test plays more frequently, with sessions occurring up to three times a week.`,
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
        <li>CPU: Intel Core i5</li>
        <li>RAM: 8 GB</li>
        <li>GPU: NVIDIA GTX 1660</li>
        <li>Hard drive space: 14 GB</li>
        <li>Make sure to always have up-to-date drivers for your GPU and latest windows updates.</li>
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
        "StrayShot currently exists for PC only but a mobile version is in the works! Follow our socials for more updates!",
    },
    {
      question:
        "HOW TO TROUBLESHOOT Log-in and  Reporting Installation Problems?",
      answer: `
      Always make sure your GPU and Windows drivers are up-to-date. Refresh your browser and clear your cache settings for any sign-in issues. Also, uninstall the game launcher and redownload it if you encounter any game installation problems. If a problem persists after trying all these, kindly open a <a className="support-ticket" target="_blank" rel="noopener noreferrer" style="
        text-decoration: underline;
    " href="https://forms.clickup.com/9010090140/f/8cgp44w-507/Z3YMAV6X5EPV9OC5FH">support ticket here</a>
        .
        `,
    },
    {
      question: "Which engine is used in StrayShot?",
      answer: "Unreal Engine 5",
    },
  ];

  return (
    <div className="faq-container my-5" id="FAQ">
      <div className="d-flex flex-column justify-content-center align-items-center  text-center">
        <div className=" faq-header-container row justify-content-center">
          <h3 className="faq-header-text">FREQUENTLY ASKED QUESTIONS</h3>
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
            <img src={dukePng} alt="duke character image" />
          </div>

          <div className="faq-bottom-line">
            <img src={bottomLine} alt="faq bottom line" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
