import { useState, useEffect } from "react";
function Homepage() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Установка времени загрузки
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // 2 секунды
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="loader">
                <div className="spinner"></div>
                <p>Сайт жүктелуде...</p>
            </div>
        );
    }

    return (
        <>
            <section className="hero">
                <div className="container">
                    <h1 className="title">Қазақстанның мәдениеті мен дәстүрлері</h1>
                    <p className="subtitle">Ұлттық мерекелер, дәстүрлер мен әдет-ғұрыптар туралы біл!</p>
                </div>
            </section>
            <section className="news">
                <div className="container">
                    <article className="news-card">
                        <h3 className="news-card__title">Наурыз: дәстүрлер мен маңызы</h3>
                        <strong className="news-card__date">22 Наурыз 2024</strong>
                        <p>Наурыз – көктем мерекесі, достық пен жаңару символы. Қазақстанда оны қалай атап өтеді?</p>
                        <a href="twostranitsa" className="news-card__link">Ары қарай оқу →</a>
                    </article>
                    <article className="news-card">
                        <h3 className="news-card__title">Дәстүрлі қазақ киімі</h3>
                        <strong className="news-card__date">15 Қараша 2024</strong>
                        <p>Ұлттық киімдердегі өрнектер мен олардың тарихын біліңіз.</p>
                        <a href="threestranitsa" className="news-card__link">Ары қарай оқу →</a>
                    </article>
                </div>
            </section>
        </>
    );
}

export default Homepage;
