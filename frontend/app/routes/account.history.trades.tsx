import { AccountPage } from "~/components/account";

export default function TradeHistoryPage() {
  return (
    <AccountPage title="Trade History" showBack backTo="/account/history">
      <h1>Trade History</h1>
    </AccountPage>
  );
}
