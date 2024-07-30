type Props = {
    content: string;
    date: string;
    writerName: string;
};
const Feedback = ({ content, date, writerName }: Props) => {
    return (
        <div className="rounded-xl bg-white shadow-sm my-2 py-8 mx-2 px-8 border-black xl:w-[23%] lg:w-[40%] sm:w-[100%]">
            <div className="mb-4 text-center">
                <svg className="inline-block h-7 w-7" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-prefix="fas" data-icon="star" viewBox="0 0 576 512"><path fill="#ffd700" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                <svg className="inline-block h-7 w-7" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-prefix="fas" data-icon="star" viewBox="0 0 576 512"><path fill="#ffd700" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                <svg className="inline-block h-7 w-7" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-prefix="fas" data-icon="star" viewBox="0 0 576 512"><path fill="#ffd700" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                <svg className="inline-block h-7 w-7" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-prefix="fas" data-icon="star" viewBox="0 0 576 512"><path fill="#ffd700" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                <svg className="inline-block h-7 w-7" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-prefix="fas" data-icon="star" viewBox="0 0 576 512"><path fill="#ffd700" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg></div>
            <div className="text-mb text-center">
                <p className="text-xl font-light mb-4"><em>{'"'+content+'"'}</em></p>
                <p className="mb-4 text-lg"><strong>{date}4</strong></p>
                <p className="text-lg text-[#52105b] mb-4"><strong>{writerName}</strong></p>
            </div>
        </div>
    );
}
export default Feedback;