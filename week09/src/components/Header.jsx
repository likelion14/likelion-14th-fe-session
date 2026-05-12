import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()

    return (
        <header className="header">
            <div className="netflixlogo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original"></img>
            </div>

            <div className="headerRightSide">
                <select className="languageSelect">
                    <option value="ko-KR">한국어</option>
                    <option value="en-KR">English</option>
                </select>

                <button className="logInBtn" onClick={() => navigate('/login')}>
                    로그인
                </button>
            </div>
        </header>
    )
}

export default Header