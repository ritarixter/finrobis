import { AccountPage } from "~/components/account";

export default function StatementPage() {
  return (
    <AccountPage title="Statement" showBack backTo="/account/history">
      <h1>Statement</h1>
    </AccountPage>
  );
}
