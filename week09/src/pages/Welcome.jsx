import { useNavigate } from 'react-router-dom'

function Welcome() {
    const navigate = useNavigate()

    return (
        <div style={{
            backgroundColor: '#000',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff'
        }}>
            <h1>환영합니다! 👋</h1>
            <p style={{ marginTop: '16px', color: '#aaa' }}>넷플릭스에 오신 것을 환영합니다.</p>
        </div>
    )
}

export default Welcome