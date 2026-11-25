# Personal account layout

All personal-account routes live under `/account` and reuse the persistent
`AccountLayout`. A route page supplies only its page-level configuration and
content through `AccountPage`.

```tsx
import { AccountPage } from "~/components/account";
import { ActionButton } from "~/components/ui";

export default function ExamplePage() {
  return (
    <AccountPage
      title="Example"
      showBack
      backTo="/account/wallets"
      actions={
        <>
          <ActionButton>First action</ActionButton>
          <ActionButton appearance="primary">Main action</ActionButton>
        </>
      }
    >
      <h1>Example</h1>
    </AccountPage>
  );
}
```

The action group accepts one to three UI Kit controls. `showBack` is optional;
use `backTo` for a stable route or `onBack` for custom navigation. There are no
fixed default actions: each page must pass its own controls through `actions`.

Do not mount `AccountLayout` in individual page files. It belongs to the parent
`account` route so its sidebar state and transition survive route changes.
