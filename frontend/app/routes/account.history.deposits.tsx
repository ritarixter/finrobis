import { AccountPage } from "~/components/account";

export default function DepositHistoryPage() {
  return (
    <AccountPage title="Deposit History" showBack backTo="/account/history">
      <h1>Deposit History</h1>
    </AccountPage>
  );
}
