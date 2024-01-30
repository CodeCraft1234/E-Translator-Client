
import NavBar from '../Navbar/Navbar';

const AboutUs = () => {
    return (
        <div>
            <NavBar></NavBar>

            <a href="#" className="block max-w-7xl mx-auto mt-28 p-6 bg-white border border-blue-500 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-500 dark:text-white ">About E-Translator</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 ">E-translator website serves as a valuable tool for language conversion, enabling users to translate text or documents from one language to another. These platforms often support a diverse array of languages, offering both machine and, in some cases, human translation services. Users can input text or upload documents for seamless translation, and many sites provide additional services such as proofreading, localization, and language learning resources. A user-friendly interface, privacy measures, and secure data handling are essential features. Some translator websites also offer subscription plans or integration options with other platforms. Overall, these websites play a vital role in facilitating effective communication across linguistic barriers, catering to both personal and professional needs.</p>
            </a>

            <a href="#" className="block max-w-7xl mx-auto mt-20 p-6 bg-white border border-blue-500 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-500 dark:text-white ">About CodeCraft Team </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">The CodeCraft Team is a dynamic group comprising six talented individuals, each contributing unique coding skills to the team's success. Led by the experienced Dibyendu Pramanik, the team boasts a diverse set of abilities. Benjir Sultana, with her expertise, brings a female perspective and strong coding skills to the group. Shakil Ahmed's proficiency lies in solving complex algorithmic challenges, demonstrating a keen analytical mindset. Robiul Islam stands out for his innovative problem-solving techniques, while Md. Assaduzzaman excels in software development, contributing to the team's projects with his programming prowess. Sourav Datta brings creativity to the team, leveraging his coding abilities for effective and efficient solutions. Together, the CodeCraft Team combines their coding-related talents to create a collaborative and high-performing environment.</p>
            </a>

        </div>
    );
};

export default AboutUs;