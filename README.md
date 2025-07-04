# aiimage

## Introduction | 소개

**English:**
aiimage is an AI-based image generation and Metamask integration project built with JavaScript. It enables users to generate images and connect with Metamask wallets for NFT-related or blockchain-integrated workflows.

**Korean:**
aiimage는 JavaScript 기반의 AI 이미지 생성 및 Metamask 지갑 연동 프로젝트입니다. 사용자는 이미지를 생성하고 이를 NFT 발행이나 블록체인 연동 워크플로우에 활용할 수 있습니다.

## Table of Contents | 목차

- [Introduction | 소개](#introduction--소개)
- [Features | 기능](#features--기능)
- [Installation | 설치](#installation--설치)
- [Usage | 사용법](#usage--사용법)
- [Configuration | 설정](#configuration--설정)
- [Examples | 예제](#examples--예제)
- [Dependencies | 의존성](#dependencies--의존성)
- [Troubleshooting | 문제 해결](#troubleshooting--문제-해결)
- [Contributing | 기여](#contributing--기여)
- [License | 라이선스](#license--라이선스)
- [Contributors | 기여자](#contributors--기여자)
- [Notes | 비고](#notes--비고)

## Features | 기능

✅ AI-based image generation | AI 기반 이미지 생성  
✅ Metamask wallet integration | Metamask 지갑 연동  
✅ Modular and extensible architecture | 모듈화 및 확장 가능한 구조  
✅ Frontend (Next.js) + Blockchain integration | 프론트엔드(Next.js) + 블록체인 통합  
✅ Easy integration with NFT minting workflows | NFT 발행 워크플로우와의 쉬운 통합  

## Installation | 설치

1. **Clone this repository | 저장소 클론:**
```bash
git clone https://github.com/panda15963/aiimage.git
cd aiimage
```

2. **Install the required dependencies | 필요한 의존성 설치:**
```bash
npm install
# or
yarn install
```

## Usage | 사용법

1. **Start development server | 개발 서버 실행:**
```bash
npm run dev
```

2. **Example: Generate image and connect Metamask | 예제: 이미지 생성 및 Metamask 연결:**
```javascript
import { generateImage } from "@/lib/imageGenerator";
import { connectWallet, mintNFT } from "@/lib/metamask";

async function handleGenerateAndMint() {
  const imageUrl = await generateImage("A fantasy landscape");
  await connectWallet();
  await mintNFT(imageUrl);
}
```

## Configuration | 설정

Modify `.env` or `config.js` for:
- API keys for image generation (if using external APIs)
- Blockchain network RPC URLs

**예시:**
```env
NEXT_PUBLIC_IMAGE_API_KEY=your_api_key
NEXT_PUBLIC_RPC_URL=https://rpc.yourblockchain.network
```

## Examples | 예제

| Input Prompt | Generated Image |
|--------------|----------------|
| "Cute AI robot illustration" | *[Generated image would appear here]* |

자세한 예제는 `examples` 폴더를 참고하세요.

## Dependencies | 의존성

- **Node.js** >= 18
- **Next.js**
- **ethers.js** (for Metamask integration)
- 기타 라이브러리: `package.json` 참조

## Troubleshooting | 문제 해결

**Metamask connection issues:** Ensure your browser wallet is unlocked and connected to the correct network.
**Metamask 연결 오류:** 브라우저 지갑이 잠금 해제되어 있고 올바른 네트워크에 연결되어 있는지 확인하세요.

**API errors:** Check your API keys and usage limits.
**API 오류:** API 키와 사용량 제한을 확인하세요.

**Other issues:** Please open an issue in the repository with logs and details.
**기타 문제:** 로그와 함께 이슈를 등록해 주세요.

## Contributing | 기여

Contributions are welcome. To contribute:

1. Fork the repository | 저장소 포크
2. Create your feature branch (`git checkout -b feature/AmazingFeature`) | 기능 브랜치 생성
3. Commit your changes (`git commit -m 'Add amazing feature'`) | 변경사항 커밋
4. Push to the branch (`git push origin feature/AmazingFeature`) | 브랜치 푸시
5. Open a Pull Request | 풀 리퀘스트 생성

## License | 라이선스

This project is licensed under the MIT License.
본 프로젝트의 라이선스는 MIT 라이선스입니다.

## Contributors | 기여자

- **panda15963**

## Notes | 비고

- ✅ Update usage examples after finalizing your APIs | API 확정 후 예제를 업데이트하세요
- ✅ Add badges (build status, license, version) if desired | 필요 시 배지를 추가하세요

### 추가 제공 가능 예시

- `lib/imageGenerator.js` 예제
- `lib/metamask.js` 예제
- NFT minting 스마트컨트랙트 예시

필요하시면 말씀해 주세요. 이 README를 GitHub에 바로 반영하거나 further refinement이 필요할 경우 알려주시기 바랍니다.

---

*Made with ❤️ by panda15963*
