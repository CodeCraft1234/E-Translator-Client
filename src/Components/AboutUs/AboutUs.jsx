import NavBar from "../Navbar/Navbar";
import image from "../../../src/assets/team collaboration.jpg";
import image2 from "../../../src/assets/creative.jpg";

const AboutUs = () => {
  return (
    <div>
      <NavBar></NavBar>

      <a
        href="#"
        className="block max-w-7xl mx-auto mt-28 p-6 bg-white border border-blue-500 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-500 dark:text-white ">
          About E-Translator
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 ">
          E-translator website serves as a valuable tool for language
          conversion, enabling users to translate text or documents from one
          language to another. These platforms often support a diverse array of
          languages, offering both machine and, in some cases, human translation
          services. Users can input text or upload documents for seamless
          translation, and many sites provide additional services such as
          proofreading, localization, and language learning resources. A
          user-friendly interface, privacy measures, and secure data handling
          are essential features. Some translator websites also offer
          subscription plans or integration options with other platforms.
          Overall, these websites play a vital role in facilitating effective
          communication across linguistic barriers, catering to both personal
          and professional needs.
        </p>
      </a>

      <a
        href="#"
        className="block max-w-7xl mx-auto mt-20 mb-24 p-6 bg-white border border-blue-500 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-500 dark:text-white ">
          About CodeCraft Team{" "}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          The CodeCraft Team is a dynamic group comprising six talented
          individuals, each contributing unique coding skills to the team's
          success. Led by the experienced Dibyendu Pramanik, the team boasts a
          diverse set of abilities. Benjir Sultana, with her expertise, brings a
          female perspective and strong coding skills to the group. Shakil
          Ahmed's proficiency lies in solving complex algorithmic challenges,
          demonstrating a keen analytical mindset. Robiul Islam stands out for
          his innovative problem-solving techniques, while Md. Asaduzzaman
          excels in software development, contributing to the team's projects
          with his programming process. Sourav Datta brings creativity to the
          team, leveraging his coding abilities for effective and efficient
          solutions. Together, the CodeCraft Team combines their coding-related
          talents to create a collaborative and high-performing environment.
        </p>
      </a>

      <a
        href="#"
        className="flex  flex-col mx-auto items-center mt-20 bg-white   rounded-lg  md:flex-row md:max-w-7xl dark:border-gray-700 dark:bg-gray-800  mb-24 "
      >
        <div className="flex flex-col justify-between p-4 leading-normal flex-1 ">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-500 dark:text-white flex-1">
            We Are The Best
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Our team, distinguishes itself as a premier force in the coding
            domain, marked by a collective commitment to excellence and
            innovation. What sets us apart is not just individual expertise but
            the synergy derived from the diverse talents within the team. We
            foster an environment that encourages creative problem-solving,
            efficient collaboration, and continuous learning. Our commitment to
            staying at the forefront of coding trends is evident in our diverse
            skill set, ranging from solving algorithmic challenges to developing
            sophisticated software solutions. Our team not only embraces
            traditional coding practices but also embraces creativity,
            adaptability, and a forward-thinking mindset. This approach
            positions our team as a trailblazer in the coding industry, making
            us the preferred choice for delivering innovative and effective
            solutions.
          </p>
        </div>
        <img
          className=" rotate-[-10deg] object-cover w-full rounded-t-lg h-72 md:h-72 md:w-48 md:rounded-none md:rounded-s-lg pl-12 flex-1  "
          src={image}
          alt=""
        />
      </a>

      <a
        href="#"
        className="flex  flex-col mx-auto items-center mt-[250px] bg-white   rounded-lg  md:flex-row md:max-w-7xl dark:border-gray-700 dark:bg-gray-800  mb-24 "
      >
        <img
          className=" rotate-[-10deg] object-cover w-full rounded-t-lg h-72 md:h-72 md:w-48 md:rounded-none md:rounded-s-lg pr-12 flex-1  "
          src={image2}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal flex-1 ">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-500 dark:text-white flex-1">
            We Are Creative
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            CodeCrafter's Team exemplifies a commitment to excellence in every
            project undertaken. Led by a skilled leader, our members contribute
            diverse talents and expertise to deliver innovative solutions. From
            tackling complex challenges to developing efficient applications,
            the team's collective skill set reflects a passion for pushing
            boundaries and achieving high standards. With a focus on
            collaboration and continuous learning, we strive to make a
            meaningful impact in the dynamic realm of technology and design.
          </p>
        </div>
      </a>
    </div>
  );
};

export default AboutUs;