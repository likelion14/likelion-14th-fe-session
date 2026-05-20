import { useEffect, useState } from 'react';
import './Membership.css';
import FeatureCard from './FeatureCard';
import FrequentlyAskedQuestions from './FrequentlyAskedQuestions';

const featureItems = [
    {
        title: 'TV로 즐기세요',
        description:
            '스마트 TV, PlayStation, Xbox, Chromecast, Apple TV, 블루레이 플레이어 등 다양한 디바이스에서 시청하세요.',
        icon: '📺',
    },
    {
        title: '즐겨 보는 콘텐츠를 저장해 오프라인으로 시청하세요',
        description: '간편하게 저장하고 빈틈없이 즐겨보세요.',
        icon: '⬇️',
    },
    {
        title: '다양한 디바이스로 시청하세요',
        description:
            '각종 영화와 시리즈를 스마트폰, 태블릿, 노트북, TV에서 무제한으로 스트리밍하세요.',
        icon: '🎬',
    },
    {
        title: '어린이 전용 프로필을 만들어 보세요',
        description:
            '자기만의 공간에서 좋아하는 캐릭터와 즐기는 신나는 모험. 자녀에게 이 특별한 경험을 선물하세요. 넷플릭스 회원이라면 무료입니다.',
        icon: '🧒',
    },
];

const faqItems = [
    {
        question: '넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?',
        answer: (
            <div>
                <p>
                    넷플릭스는 장편 영화, 다큐멘터리, 시리즈, 애니메이션, 각종 상을 수상한
                    넷플릭스 오리지널 등 수많은 콘텐츠를 확보하고 있습니다. 마음에 드는
                    콘텐츠를 원하는 시간에 원하는 만큼 시청하실 수 있습니다.
                </p>
                <br />
                <a>넷플릭스 콘텐츠를 한번 살펴보세요.</a>
            </div>
        ),
    },
    {
        question: '넷플릭스란 무엇인가요?',
        answer: (
            <div>
                <p>
                    넷플릭스는 각종 수상 경력에 빛나는 시리즈, 영화, 애니메이션,
                    다큐멘터리 등 다양한 콘텐츠를 인터넷 연결이 가능한 수천 종의
                    디바이스에서 시청할 수 있는 스트리밍 서비스입니다.
                </p>
                <br />
                <p>
                    저렴한 월 요금으로 원하는 시간에 원하는 만큼 즐길 수 있습니다.
                    무궁무진한 콘텐츠가 준비되어 있으며 매주 새로운 시리즈와 영화가
                    제공됩니다.
                </p>
            </div>
        ),
    },
    {
        question: '넷플릭스 요금은 얼마인가요?',
        answer:
            '스마트폰, 태블릿, 스마트 TV, 노트북, 스트리밍 디바이스 등 다양한 디바이스에서 월정액 요금 하나로 넷플릭스를 시청하세요. 월 요금은 7,000원부터 17,000원까지 다양합니다.',
    },
    {
        question: '어디에서 시청할 수 있나요?',
        answer: (
            <div>
                <p>
                    언제 어디서나 시청할 수 있습니다. 넷플릭스 계정으로 로그인하면 PC에서
                    netflix.com을 통해 바로 시청할 수 있으며, 인터넷이 연결되어 있고
                    넷플릭스 앱을 지원하는 디바이스에서도 언제든지 시청할 수 있습니다.
                </p>
                <br />
                <p>
                    iOS 또는 Android용 앱에서는 좋아하는 시리즈를 저장할 수도 있습니다.
                    저장 기능을 이용해 이동 중이나 인터넷에 연결할 수 없는 곳에서도
                    시청하세요.
                </p>
            </div>
        ),
    },
    {
        question: '멤버십을 해지하려면 어떻게 하나요?',
        answer:
            '넷플릭스는 부담 없이 간편합니다. 멤버십 해지도 온라인에서 클릭 두 번이면 완료할 수 있습니다. 해지 수수료도 없으니 원할 때 언제든 계정을 시작하거나 종료하세요.',
    },
    {
        question: '아이들이 넷플릭스를 봐도 좋을까요?',
        answer: (
            <div>
                <p>
                    멤버십에 넷플릭스 키즈 환경이 포함되어 있어 자녀가 자기만의 공간에서
                    가족용 시리즈와 영화를 즐기는 동안 부모가 이를 관리할 수 있습니다.
                </p>
                <br />
                <p>
                    키즈 프로필과 더불어 PIN 번호를 이용한 자녀 보호 기능도 있어, 자녀가
                    시청할 수 있는 콘텐츠의 관람등급을 제한할 수 있습니다.
                </p>
            </div>
        ),
    },
];

const trendingContents = [
    { type: 'tv', id: 259837 },
    { type: 'tv', id: 285838 },
    { type: 'tv', id: 127529 },
    { type: 'tv', id: 219246 },
    { type: 'tv', id: 200709 },
    { type: 'movie', id: 1318447 },
    { type: 'tv', id: 273977 },
    { type: 'tv', id: 229891 },
    { type: 'tv', id: 91239 },
    { type: 'movie', id: 1630423 }
];

function Membership() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const apiKey = import.meta.env.VITE_TMDB_API_KEY;

        const fetchMovies = async () => {
            try {
                const results = await Promise.all(
                    trendingContents.map(async (content) => {
                        const response = await fetch(
                            `https://api.themoviedb.org/3/${content.type}/${content.id}?api_key=${apiKey}&language=ko-KR`
                        );
                        return response.json();
                    })
                );

                setMovies(results);
            } catch (error) {
                console.error('TMDB fetch error:', error);
            }
        };

        fetchMovies();
    }, []);

    return (
        <section className="membership-section">
            <div className="membership-curve" />

            <div className="membership-content">
                <section className="membership-banner">
                    <div className="membership-badge" aria-hidden="true">
                        <span>🍿</span>
                    </div>

                    <div className="membership-banner-copy">
                        <h2>7,000원이면 만날 수 있는 넷플릭스.</h2>
                        <p className="membership-description">
                            가장 경제적인 광고형 멤버십을 이용해 보세요.
                        </p>
                    </div>
                    <button type="button">자세히 알아보기</button>
                </section>

                <section className="content-section">
                    <div className="section-heading">
                        <h2>지금 뜨는 콘텐츠</h2>
                    </div>
                    <div className="trending-grid">
                        {movies.map((movie, index) => (
                            <article className="trending-card" key={movie.id}>
                                <span className="trending-rank">{index + 1}</span>
                                <div className="trending-poster">
                                    {movie.poster_path ? (
                                        <img
                                            className="trending-poster-image"
                                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                            alt={movie.title || movie.name}
                                        />
                                    ) : (
                                        <div className="trending-poster-fallback">
                                            <span>{movie.title || movie.name}</span>
                                        </div>
                                    )}
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="content-section">
                    <div className="section-heading">
                        <h2>가입해야 하는 또 다른 이유</h2>
                    </div>
                    <div className="feature-grid">
                        {featureItems.map((item) => (
                            <FeatureCard
                                key={item.title}
                                title={item.title}
                                description={item.description}
                                icon={item.icon}
                            />
                        ))}
                    </div>
                </section>

                <section className="content-section">
                    <div className="section-heading">
                        <h2>자주 묻는 질문</h2>
                    </div>
                    <div className="faq-list">
                        {faqItems.map((item) => (
                            <FrequentlyAskedQuestions
                                key={item.question}
                                question={item.question}
                                answer={item.answer}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </section>
    );
}

export default Membership;
