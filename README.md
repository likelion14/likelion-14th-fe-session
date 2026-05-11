# 🦁 LIKELION SWU 14th - FE Session
서울여대 멋쟁이사자처럼 14기 프론트엔드 세션 진행을 위한 레포지토리입니다.

<br>

## 📚 세션 일정
> 세션은 매주 **목요일 오후 7시**에 진행되며, 매주 일정 및 과제 안내는 업데이트 예정입니다.

| 주차 | 날짜 | 내용 | 과제 |
|:---:|:---:|:---:|:---:|
| 1주차 | 2026. 3. 12. | Git & GitHub |  |
| 2주차 | 2026. 3. 19. | HTML/CSS | 자기소개 페이지 만들기 |
| 3주차 | 2026. 3. 26. | JavaScript | To-Do List 만들기 |



<br>

## 📝 과제 제출 방법
세션에서는 **개인 fork - branch 방식**으로 과제를 제출합니다.

### ⚙️ 초기 설정
> 이 작업은 처음 1회만 실행하면 됩니다!
1. **원본 레포지토리 Fork**
   - FE 세션 레포지토리 우측 상단의 Fork 버튼 클릭
   - 자신의 GitHub 계정으로 레포지토리 복제
     
2. **로컬에 Clone**
     ```
     git clone https://github.com/{본인계정}/likelion-14th-fe-session.git
     cd likelion-14th-fe-session
     ```
3. **원본 레포지토리 연결 및 브랜치 설정**
     ```
     # 원본 레포지토리를 upstream으로 추가
     git remote add upstream https://github.com/likelion14/likelion-14th-fe-session.git

     # upstream에서 정보 가져오기
     git fetch upstream

     # 브랜치 목록 확인 (본인 이름의 브랜치가 보이는 지 확인)
     git branch -a

     # upstream의 본인 이름 브랜치를 로컬의 본인 이름 브랜치로 가져오기
     git checkout -b {본인이름} upstream/{본인이름}

     # 가져온 브랜치를 자신의 원격 저장소(origin)에 푸시
     git push origin {본인이름}
     ```
### 📄 과제 제출
1. **주차별 폴더 생성 후 작업**
     ```
     mkdir Week01
     cd Week01
     ```
2. **변경 사항 Commit & Push**
     ```
     git add .
     git commit -m "[1주차] 김멋사 과제 제출"
     git push origin {본인이름}
     ```
3. **Pull Request**
   - GitHub에서 fork한 자신의 레포지토리 페이지로 이동
   - "Compare & pull request" 버튼 클릭
     - base repository: likelion14/likelion-14th-fe-session
     - base branch: {본인이름}
     - head repository: {본인계정}/likelion-14th-fe-session
     - compare branch: {본인이름}
   - PR 제목: `[n주차] 김멋사 과제 제출`
   - PR 템플릿에 따라 상세 내용 작성
   - "Create pull request" 버튼 클릭
4. **Merge**
   - Merge는 운영진이 코드 리뷰 > 승인 후 진행
   - 필요시에는 요청 방안 수정 후 다시 push
<br>

### ✏️ 커밋 메시지 가이드 (선택 사항)
> 효율적인 코드 관리를 위해 다음과 같은 형식을 권장합니다. (필수는 아닙니다!)
```
type: Subject
```
### Type
| Type | 설명 |
|------|------|
| `Feat` | 새로운 기능 추가 |
| `Fix` | 버그 수정 |
| `Design` | 사용자 UI 디자인 변경 |
| `Style` | 코드 스타일 변경 |
| `Refactor` | 코드 리팩토링 |
| `Docs` | 문서 수정 |
| `Chore` | 기타 변경 사항 |

### Subject
- 제목, 변경 내용에 대한 간단한 요약
- **50자 이내**로 작성
- 마침표나 특수문자는 사용하지 않음

#### 예시
```
Feat: 홈 화면에 이미지 추가
Fix: 텍스트가 화면에 출력되지 않는 문제 해결
```
<br>

### ⚠️ 주의 사항
- 항상 본인 이름의 브랜치에서만 작업해 주세요!
- 주차별 폴더명은 **Week01, Week02, ...** 형식으로 통일 부탁드립니다
- PR은 원본 레포지토리의 **본인 이름 브랜치**로 보내야 합니다
- 과제 제출에 어려움이 있는 경우 운영진에게 문의 바랍니다💬

