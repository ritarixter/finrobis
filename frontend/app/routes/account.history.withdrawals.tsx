import { AccountPage } from "~/components/account";

export default function WithdrawalHistoryPage() {
  return (
    <AccountPage title="Withdrawal History" showBack backTo="/account/history">
      <h1>Withdrawal History</h1>
    </AccountPage>
  );
}
