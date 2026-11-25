import { AccountPage } from "~/components/account";

export default function YourAccountsPage() {
  return (
    <AccountPage title="Your Accounts" showBack backTo="/account/settings">
      <h1>Your Accounts</h1>
    </AccountPage>
  );
}
