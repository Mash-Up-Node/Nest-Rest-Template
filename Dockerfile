# Node.js 20 버전 이미지 사용
FROM node:22

# 작업 디렉토리 설정
WORKDIR /app

# package.json과 yarn.lock 복사
COPY package.json yarn.lock ./

# yarn으로 의존성 설치
RUN yarn install

# 소스 코드 전체 복사
COPY . .

# 환경 변수 포트 설정 (옵션)
ENV PORT=3000

# 앱 실행
CMD ["yarn", "start"]