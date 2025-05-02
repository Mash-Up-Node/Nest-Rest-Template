# MashUp Node.js REST Template

## Env

env파일은 환경에 맞춰서 `{dev | prod}.env` 파일을 생성해주세요! Key들은 아래 토글 참조해주세요

<details>
  <summary>Env Keys</summary>
  <div>
    APP_MODE의 경우에는 실행 context에서만 적용되게끔 적용해주시면 됩니다
    <br>
    e.g) export APP_MODE={dev | prod}
    <ul>
      <li>DB_HOST</li>
      <li>DB_PORT</li>
      <li>DB_USER</li>
      <li>DB_PASSWORD</li>
      <li>DB_NAME</li>
    </ul>
  </div>
</details>

## Database & Migrations

Database는 `MySQL`입니다. 로컬 개발시에는 DB 컨테이너를 생성해주시고 Migration이 존재하는 경우에는 Migration을 먼저 적용해주세요

```
docker compose up -d

yarn migration:run
```

Migration 파일은 기본적으로 `src/migrations`, `dist/migrations`에 생성됩니다. 마이그레이션파일 이름은 자동 생성입니다. 하단에는 migration 관련 명령어들입니다.

- Migration 생성

  ```
  yarn migration:generate
  ```

- Migration 실행

  ```
  yarn migration:run
  ```

- Migration 롤백

  ```
  yarn migration:revert
  ```

# Nest-Rest-Template

## 👫 팀원 소개
<markdown-accessiblity-table data-catalyst=""><table>
  <tbody>
    <tr>
    <td align="center" width="130px">김바다</td>
    <td align="center" width="130px">윤준호</td>
    <td align="center" width="130px">이미나</td>
    <td align="center" width="130px">최재영</td>
  </tr>
    <tr height="130px">
    <td align="center" width="130px">
      <a href="https://github.com/sally0226"><img src="https://avatars.githubusercontent.com/u/43634786?v=4" style="max-width: 100%;"></a>
    </td>
    <td align="center" width="130px">
      <a href="https://github.com/J-Hoplin"><img src="https://avatars.githubusercontent.com/u/45956041?v=4" style="max-width: 100%;"></a>
    </td>
    <td align="center" width="130px">
      <a href="https://github.com/chsjen492"><img src="https://avatars.githubusercontent.com/u/109032458?v=4" style="max-width: 100%;"></a>
    </td>
    <td align="center" width="130px">
      <a href="https://github.com/Choi-JY1107"><img src="https://avatars.githubusercontent.com/u/52996979?v=4" style="max-width: 100%;"></a>
    </td>
  </tr>
  <tr height="50px">
    <td align="center" width="130px">
      <a href="https://github.com/sally0226">sally0226</a>
    </td>
    <td align="center" width="130px">
      <a href="https://github.com/J-Hoplin">J-Hoplin</a>
    </td>
    <td align="center" width="130px">
      <a href="https://github.com/chsjen492">chsjen492</a>
    </td>
    <td align="center" width="130px">
      <a href="https://github.com/Choi-JY1107">Choi-JY1107</a>
    </td>
  </tr>
</tbody></table></markdown-accessiblity-table>
<br>