## Week 1

- 파이어베이스 기본 환경 설정과 메인화면 UI 일부 적용함
- 리얼타임 파이어베이스는 큰json파일로 되어있어서 쿼리 넣고뺴고할 때 오류가 생길수도.. Firestore가 좀더 고도화된 기능
- 차크라UI쓰는 이유 : 빠르고 예쁘게 그리기위해 갖다씀

## Week 2

### firebase client 코드 추가

- 클라이언트 사이드에서 .env에 접근하기 위해 next.config.js의 publicRuntimeConfig 필드에 값을 넣어준다.

  - https://nextjs.org/docs/api-reference/next.config.js/runtime-configuration
  - getConfig 로 값을 가져온다.

  ```ts
  // model/firebase_client.ts
  import getConfig from 'next/config';

  const { publicRuntimeConfig } = getConfig();

  const FirebaseCredentials = {
    apiKey: publicRuntimeConfig.apiKey,
    authDomain: publicRuntimeConfig.authDomain,
    projectId: publicRuntimeConfig.projectId,
  };
  ```

### google login

- 커스텀 훅으로 Auth를 사용할 수 있도록 구현
