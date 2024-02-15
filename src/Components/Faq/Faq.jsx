

const Faq = () => {
    return (
        <div>
            <section className="bg-[#031321] dark:text-gray-100">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
		<p className="mt-4 mb-8 dark:text-gray-400">We’ve put together the most common questions we are asked about translation</p>
		<div className="space-y-4">
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ri">Do you translate into all languages?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Yes, we translate into all languages.</p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ri">When will my translation be ready?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">The delivery time will depend on the amount of text you need translated, and on the language combination. If you would like your translation delivered more quickly, you can order express delivery, which costs slightly more.</p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ri">How quickly can you translate my document?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">We will help you get your translation when you need it. The delivery time varies depending on the amount of text and the file format. As a guide, you can assume that a translator can translate approximately 2,000 words a day, but this will naturally be affected by the type of text involved, the language and the file format. Is it a legal contract, a thesis, a newsletter to your customers, a technical manual, a handwritten letter or your whole website? </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ri">How quickly will an express translation be delivered?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">We do all we can to deliver your express translation as quickly as you need it. The delivery time depends on the amount of text and the file format.</p>
			</details>
		</div>
	</div>
</section>
        </div>
    );
};

export default Faq;