# Frontend agent rules

## Mandatory UI Kit reuse

All agents working in `frontend/` MUST reuse the components exported from
`app/components/ui/index.ts`.

Before creating any button, input, select, textarea, switch, dropdown, tab,
OTP/code input, badge, navigation action, icon action, link action, or sort
control:

1. Check `app/components/ui/README.md`.
2. Import the existing component from `~/components/ui`.
3. Configure text, icons, sizes, variants, state, handlers, and layout through
   props. Do not copy component markup or hard-code a fixed width.

Do not create page-local versions of controls already covered by the UI Kit.
Do not draw replacement icons inline. Use `Icon` and the SVG assets in
`app/assets/ui-icons/`.

If a required variation is genuinely missing, extend the closest UI Kit
component with a backwards-compatible prop and add the matching hover,
focus-visible, active, disabled, loading, error, and responsive behavior. Then
export it from `app/components/ui/index.ts` and document it in the UI Kit
README.

Page styles may control placement and available width, but must not duplicate
the internal visual styling or interaction states of UI Kit controls.

## Mandatory personal-account layout

Every route under `/account` MUST be nested under the shared route in
`app/routes/account.tsx` and MUST render its page content through `AccountPage`
from `~/components/account`.

- Do not recreate the sidebar, top header, action bar, or footer inside a page.
- Configure the page title, optional Back button, destination/handler, account
  data, and action area through `AccountPage` props.
- Pass one to three page actions as reusable UI Kit controls through the
  `actions` prop. The layout must never provide fixed default actions because
  every page owns its own action set.
- Use `showBack` with `backTo` (or `onBack`) instead of adding a page-local Back
  control.
- Add new account routes as children of the `account` route in `app/routes.ts`
  so the persistent animated sidebar is preserved between navigations.
- Authentication is intentionally not connected yet. Do not add a route guard
  until the product task explicitly introduces authorization.

Read `app/components/account/README.md` before adding or changing a personal-
account page.

## Verification

After changing the UI Kit or a consumer, run:

```bash
npm run typecheck
npm run lint
npm run build
```

Keyboard focus must remain visible, labels must be programmatically associated
with controls, icon-only buttons must have an accessible label, and mobile
layouts must not introduce horizontal overflow.
